import { test, expect } from "@playwright/test";

test("hamburger nav opens and closes overlay", async ({ page }) => {
  await page.goto("/");

  const overlay = page.locator("#nav-overlay");
  await expect(overlay).toBeHidden();

  await page.getByRole("button", { name: "Open navigation" }).click();
  await expect(overlay).toBeVisible();

  await page.getByRole("button", { name: "Close navigation" }).click();
  await expect(overlay).toBeHidden();
});

test("clicking outside overlay closes it", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation" }).click();

  const overlay = page.locator("#nav-overlay");
  await expect(overlay).toBeVisible();

  // Click the overlay background directly (bottom-right corner, away from nav content)
  const viewportSize = page.viewportSize()!;
  await page.mouse.click(viewportSize.width - 10, viewportSize.height - 10);
  await expect(overlay).toBeHidden();
});

test("nav overlay contains links to home, about, and search", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation" }).click();

  const overlay = page.locator("#nav-overlay");
  await expect(overlay.getByRole("link", { name: "home" })).toBeVisible();
  await expect(overlay.getByRole("link", { name: "about" })).toBeVisible();
  await expect(overlay.getByRole("link", { name: "search" })).toBeVisible();
});
