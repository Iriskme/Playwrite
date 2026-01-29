// tests/login.spec.js
import { test, expect } from '@playwright/test';

test('Login to Swag Labs demo', async ({ page }) => {
  // Step 1: Navigate to the site
  await page.goto('https://www.saucedemo.com');

  // Step 2: Fill in credentials
  await page.fill('#user-name', 'standard_users');
  await page.fill('#password', 'secret_sauce');

  // Step 3: Click login
  await page.click('#login-button');

  // Step 4: Verify inventory list is visible
  await expect(page.locator('.inventory_list')).toBeVisible();
});