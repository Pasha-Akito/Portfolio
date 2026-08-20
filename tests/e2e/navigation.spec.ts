import { expect, test } from "@playwright/test";

const routes = [
  ["/", "I turn ambiguous problems"],
  ["/projects", "Projects that challenged my skills"],
  ["/career", "Experience measured in scope"],
  ["/about", "I’m happiest when discussing problems"],
  ["/contact", "Have an interesting problem"],
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
  await expect(
    page.getByRole("link", { name: /LinkedIn Pasha Antonov/i }),
  ).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/pavelantonovsoftwaredeveloper/",
  );
});

test("proposal content and ordering are rendered", async ({ page }) => {
  await page.goto("/projects");
  const projectNames = await page
    .locator(".project-card h2")
    .evaluateAll((headings) =>
      headings.map((heading) => heading.firstChild?.textContent),
    );
  expect(projectNames).toEqual([
    "Arla",
    "Bongard Problem Generator",
    "aia",
    "Blackjack in C",
  ]);
  await expect(page.getByText(/YouTube video with 2,827 views/)).toBeVisible();

  await page.goto("/career");
  await expect(page.getByText("4.5 years", { exact: true })).toBeVisible();
  await expect(page.getByText("Over 4.5 years", { exact: true })).toHaveCount(
    0,
  );

  await page.goto("/about");
  for (const image of [/engagement/i, /Chase/i, /Bella/i]) {
    const galleryImage = page.getByAltText(image);
    await galleryImage.scrollIntoViewIfNeeded();
    await expect(galleryImage).toBeVisible();
    await expect
      .poll(() =>
        galleryImage.evaluate(
          (element) => (element as HTMLImageElement).naturalWidth,
        ),
      )
      .toBeGreaterThan(0);
  }
});

test("desktop proposal copy intended for one line does not wrap", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  for (const label of [
    "Under four years",
    "99.999% release success",
    "Master’s in AI",
  ]) {
    const heading = page.locator(".hero-stats dt", { hasText: label });
    const lineHeight = await heading.evaluate((element) =>
      Number.parseFloat(getComputedStyle(element).lineHeight),
    );
    const height = await heading.evaluate(
      (element) => element.getBoundingClientRect().height,
    );
    expect(height).toBeLessThan(lineHeight * 1.5);
  }

  await page.goto("/projects");
  const intro = page.getByText(
    "These are the projects I am proud of, and each shows you a little of who I am.",
  );
  const introLineHeight = await intro.evaluate((element) =>
    Number.parseFloat(getComputedStyle(element).lineHeight),
  );
  const introHeight = await intro.evaluate(
    (element) => element.getBoundingClientRect().height,
  );
  expect(introHeight).toBeLessThan(introLineHeight * 1.5);
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
