import { test, expect } from "@playwright/test";

test("/about renders heading", async ({ page }) => {
  await page.goto("/about");
  await expect(
    page.getByRole("heading", { name: "Stefan Zivkovic" }),
  ).toBeVisible();
});

test("/about back link navigates to /", async ({ page }) => {
  await page.goto("/about");
  await page.getByRole("link", { name: /← home/ }).click();
  await expect(page).toHaveURL("/");
});

test("/search renders search input", async ({ page }) => {
  await page.goto("/search");
  await expect(page.locator("#search-input")).toBeVisible();
});
