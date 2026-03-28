/**
 * Deep GBP check — scroll through all tabs to find services, about, etc.
 */
import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 900 },
  });
  const page = await context.newPage();

  try {
    console.log('Opening Google Maps...');
    await page.goto('https://www.google.com/maps/search/Best%20Roofing%20Now%20Charlotte%20NC', {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });
    await page.waitForTimeout(4000);

    // Click on the business
    const biz = await page.locator('text="Best Roofing Now"').first();
    if (await biz.isVisible()) {
      await biz.click();
      await page.waitForTimeout(3000);
    }

    // Scroll the side panel down to see all content
    console.log('\n=== OVERVIEW TAB (scrolling down) ===');
    const panel = await page.locator('[role="main"]').first();

    for (let i = 0; i < 5; i++) {
      await panel.evaluate(el => el.scrollTop += 600);
      await page.waitForTimeout(500);
    }

    await page.screenshot({ path: 'research/gbp-overview-scrolled.png' });

    // Get full overview content
    const overviewText = await panel.innerText();
    const overviewLines = overviewText.split('\n')
      .filter(l => l.trim().length > 0 && l.trim().length < 200)
      .filter(l => !l.includes('Google') && !l.match(/^[0-9]+$/));

    overviewLines.forEach(l => console.log('  ', l.trim()));

    // Click "About" tab
    console.log('\n=== ABOUT TAB ===');
    const aboutTab = await page.locator('text="About"').first();
    if (await aboutTab.isVisible()) {
      await aboutTab.click();
      await page.waitForTimeout(2000);

      // Scroll through about content
      for (let i = 0; i < 5; i++) {
        await panel.evaluate(el => el.scrollTop += 600);
        await page.waitForTimeout(500);
      }

      await page.screenshot({ path: 'research/gbp-about.png' });

      const aboutText = await panel.innerText();
      const aboutLines = aboutText.split('\n')
        .filter(l => l.trim().length > 0 && l.trim().length < 200)
        .filter(l => !l.includes('Google') && !l.match(/^[0-9]+$/));

      aboutLines.forEach(l => console.log('  ', l.trim()));
    }

    // Check for Services tab
    const servicesTab = await page.locator('button:has-text("Services"), [role="tab"]:has-text("Services")').first();
    if (await servicesTab.isVisible().catch(() => false)) {
      console.log('\n=== SERVICES TAB ===');
      await servicesTab.click();
      await page.waitForTimeout(2000);
      await page.screenshot({ path: 'research/gbp-services.png' });
      const servicesText = await panel.innerText();
      console.log(servicesText);
    } else {
      console.log('\n⚠️  NO SERVICES TAB FOUND — services have NOT been added to GBP');
    }

  } catch (err) {
    console.error('Error:', err.message);
    await page.screenshot({ path: 'research/gbp-error2.png' });
  } finally {
    await browser.close();
  }
}

main();
