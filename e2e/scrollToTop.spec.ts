import { test, expect } from "@playwright/test";

test("scroll-to-top button is hidden on page load", async ({ page }) => {
  await page.goto("/posts/building-this-site");
  const btn = page.locator("#scroll-top");
  await expect(btn).toBeHidden();
});

test("scroll-to-top button appears after scrolling down", async ({ page }) => {
  await page.goto("/posts/building-this-site");
  await page.evaluate(() => window.scrollTo(0, 400));
  const btn = page.locator("#scroll-top");
  await expect(btn).toBeVisible();
});

test("scroll-to-top button scrolls back to top", async ({ page }) => {
  await page.goto("/posts/building-this-site");
  await page.evaluate(() => window.scrollTo(0, 400));
  const btn = page.locator("#scroll-top");
  await expect(btn).toBeVisible();
  await btn.click();
  await page.waitForFunction(() => window.scrollY === 0);
});

test("scroll-to-top button hides after scrolling back to top", async ({
  page,
}) => {
  await page.goto("/posts/building-this-site");
  await page.evaluate(() => window.scrollTo(0, 400));
  const btn = page.locator("#scroll-top");
  await expect(btn).toBeVisible();
  await page.evaluate(() => window.scrollTo(0, 0));
  await expect(btn).toBeHidden();
});
