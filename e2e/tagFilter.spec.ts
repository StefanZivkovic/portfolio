import { test, expect } from "@playwright/test";

test("tag filter hides non-matching posts", async ({ page }) => {
  await page.goto("/");

  const allItems = page.locator("#post-list > li");
  const totalCount = await allItems.count();

  const firstTagButton = page
    .locator(".tag-filter:not([data-tag-filter='all'])")
    .first();
  await firstTagButton.click();

  const visibleItems = allItems.filter({ visible: true });
  await expect(visibleItems).not.toHaveCount(0);

  await page.locator("[data-tag-filter='all']").click();
  await expect(allItems.filter({ visible: true })).toHaveCount(totalCount);
});

test("tag filter persists in URL", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  const firstTagButton = page
    .locator(".tag-filter:not([data-tag-filter='all'])")
    .first();
  const tag = await firstTagButton.getAttribute("data-tag-filter");
  await firstTagButton.click();

  await expect(page).toHaveURL(new RegExp(`\\?tag=${tag}`));
});

test("tag filter restores from URL on load", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  const firstTagButton = page
    .locator(".tag-filter:not([data-tag-filter='all'])")
    .first();
  const tag = await firstTagButton.getAttribute("data-tag-filter");

  await page.goto(`/?tag=${tag}`);
  await page.waitForLoadState("networkidle");

  await expect(firstTagButton).toHaveCSS(
    "background-color",
    "rgb(42, 100, 150)",
  );
});
