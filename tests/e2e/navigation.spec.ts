import { expect, test } from "@playwright/test";

const routes = [
  ["/", "I turn complex systems"],
  ["/projects", "Projects built from curiosity"],
  ["/career", "Progress measured in ownership"],
  ["/about", "I’m happiest when"],
  ["/contact", "Have a hard problem?"],
] as const;

for (const [path, heading] of routes) {
  test(`${path} renders directly with navigation`, async ({ page }) => {
    await page.goto(path);
    await expect(
      page.getByRole("heading", { level: 1, name: new RegExp(heading) }),
    ).toBeVisible();
    await expect(
      page.getByRole("navigation", { name: "Main navigation" }),
    ).toBeVisible();
    await expect(page.locator("body")).not.toHaveCSS("overflow-x", "scroll");
  });
}

test("navigation reaches every route", async ({ page }) => {
  await page.goto("/");
  for (const label of [
    "Projects",
    "Career",
    "About Me",
    "Contact",
    "Welcome!",
  ]) {
    await page.getByRole("link", { name: label, exact: true }).click();
    await expect(page).toHaveURL(
      label === "Welcome!"
        ? /\/$/
        : new RegExp(
            `/${label === "About Me" ? "about" : label.toLowerCase()}$`,
          ),
    );
  }
});

test("loads Vercel Web Analytics", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.locator('script[src="/_vercel/insights/script.js"]'),
  ).toHaveAttribute("data-sdkn", "@vercel/analytics/next");
});

test("project and contact links point to approved destinations", async ({
  page,
}) => {
  await page.goto("/projects");
  await expect(page.getByRole("link", { name: /Arla/i })).toHaveAttribute(
    "href",
    "https://github.com/Pasha-Akito/Arla-Frontend",
  );
  await expect(
    page.getByRole("link", { name: /Bongard Problem Generator/i }),
  ).toHaveAttribute(
    "href",
    "https://github.com/Pasha-Akito/Bongard-Problem-Image-Generator",
  );
  await page.goto("/contact");
  await expect(
    page.getByRole("link", { name: /1masterpasha@gmail.com/i }),
  ).toHaveAttribute("href", "mailto:1masterpasha@gmail.com");
  await expect(
    page.getByRole("link", { name: /Pasha-Akito/i }),
  ).toHaveAttribute("href", "https://github.com/Pasha-Akito");
});

test("mobile layout remains usable without horizontal overflow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const [path] of routes) {
    await page.goto(path);
    const dimensions = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));
    const overflowingElements = await page
      .locator("body *")
      .evaluateAll((elements) =>
        elements
          .filter(
            (element) =>
              element.getBoundingClientRect().right >
              document.documentElement.clientWidth,
          )
          .map(
            (element) =>
              `${element.tagName.toLowerCase()}.${element.className}`,
          ),
      );
    expect(
      dimensions.scrollWidth,
      `${path}: ${overflowingElements.join(", ")}`,
    ).toBe(dimensions.clientWidth);
  }
});
