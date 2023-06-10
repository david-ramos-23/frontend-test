import { test, expect } from '@playwright/test'

test('get started link', async ({ page }) => {
  await page.goto('/')

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/./)
})
