import { test, expect } from "@playwright/test";

test("/qr renders QR image", async ({ page }) => {
  await page.goto("/qr");
  await expect(
    page.getByAltText("QR code for stefanzivkovic.dev"),
  ).toBeVisible();
});

test("/qr back link navigates to /about", async ({ page }) => {
  await page.goto("/qr");
  await page.getByRole("link", { name: /← back/ }).click();
  await expect(page).toHaveURL("/about");
});
