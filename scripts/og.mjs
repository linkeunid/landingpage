// Renders scripts/og.html to static/og.png (1200x630 share image): node scripts/og.mjs
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(new URL('og.html', import.meta.url).href);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: fileURLToPath(new URL('../static/og.png', import.meta.url)) });
await browser.close();
