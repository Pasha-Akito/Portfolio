import { test } from "@playwright/test";

const routes = [
  ["home", "/"],
  ["projects", "/projects"],
  ["career", "/career"],
  ["about", "/about"],
  ["contact", "/contact"],
] as const;

for (const [name, path] of routes) {
  test(`${name} visual evidence`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(path);
    await page.screenshot({
      path: `docs/screenshots/${name}-desktop.png`,
      fullPage: true,
    });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(path);
    await page.screenshot({
      path: `docs/screenshots/${name}-mobile.png`,
      fullPage: true,
    });
  });
}
