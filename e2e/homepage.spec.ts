import { test, expect } from "@playwright/test";

test("renders heading and post list", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Stefan Zivkovic" }),
  ).toBeVisible();
  await expect(page.locator("#post-list > li")).not.toHaveCount(0);
});

test("search icon links to /search", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Search" }).click();
  await expect(page).toHaveURL("/search");
});
