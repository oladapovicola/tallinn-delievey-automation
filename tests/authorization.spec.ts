require('dotenv').config();

import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const randomUsername= faker.internet.username();
const randomPassword= faker.internet.password();


const appUrl = process.env.APP_URL;

test('Sign-in button is enabled', async ({ page }) => {
  await page.goto(appUrl);
  await page.getByTestId('username-input').fill ('randomUsername');
  await page.getByTestId('password-input').fill ('randomPassword');
  await expect(page.getByTestId('signIn-button')).toBeEnabled()


});

test('incorrect login credentials', async ({ page }) => {
  await page.goto(appUrl);
  await page.getByTestId('username-input').fill ('randomUsername');
  await page.getByTestId('password-input').fill ('randomPassword');
  await page.getByTestId('signIn-button').click ();
  await expect(page.getByTestId('authorizationError-popup')).toBeVisible()


});

