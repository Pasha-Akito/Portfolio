import { test } from "@playwright/test";

const routes = [
  ["home", "/"],
  ["projects", "/projects"],
  ["career", "/career"],
  ["about", "/about"],
  ["contact", "/contact"],
] as const;

async function loadPageImages(page: import("@playwright/test").Page) {
  for (const image of await page.locator("img").all()) {
    await image.scrollIntoViewIfNeeded();
    await image.evaluate((element: HTMLImageElement) => {
      if (element.complete && element.naturalWidth > 0) return;
      return new Promise<void>((resolve, reject) => {
        element.addEventListener("load", () => resolve(), { once: true });
        element.addEventListener("error", () => reject(), { once: true });
      });
    });
  }
  await page.evaluate(() => window.scrollTo(0, 0));
}

for (const [name, path] of routes) {
  test(`${name} visual evidence`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(path);
    await loadPageImages(page);
    await page.screenshot({
      path: `docs/screenshots/${name}-desktop.png`,
      fullPage: true,
    });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(path);
    await loadPageImages(page);
    await page.screenshot({
      path: `docs/screenshots/${name}-mobile.png`,
      fullPage: true,
    });
  });
}
