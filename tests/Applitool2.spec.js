require('dotenv').config();
const { test } = require('@playwright/test');
const { Eyes, ClassicRunner, Target } = require('@applitools/eyes-playwright');

test('Applitools Test', async ({ page }) => {
  const runner = new ClassicRunner();
  const eyes = new Eyes(runner);
  eyes.setApiKey(process.env.APPLITOOLS_API_KEY);

  try {
    await eyes.open(page, 'Applitools Test', 'Test 1', { width: 1280, height: 720 });
    await page.goto('https://www.google.com/');
    await eyes.check('Google page', Target.window().fully());
    await eyes.close(false);
  } finally {
    await eyes.abort();
  }
});