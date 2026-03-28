/**
 * Check Google Business Profile for Best Roofing Now
 * Uses Playwright to render the Google Maps page and extract services.
 */
import { chromium } from 'playwright';

const BUSINESS_NAME = 'Best Roofing Now';
const SEARCH_QUERY = 'Best Roofing Now Charlotte NC';

async function main() {
  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 900 },
  });
  const page = await context.newPage();

  try {
    // Search Google Maps for the business
    console.log('Searching Google Maps for:', SEARCH_QUERY);
    await page.goto(`https://www.google.com/maps/search/${encodeURIComponent(SEARCH_QUERY)}`, {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });

    // Wait for results to load
    await page.waitForTimeout(3000);

    // Try to click on the business listing
    const businessLink = await page.locator(`text="${BUSINESS_NAME}"`).first();
    if (await businessLink.isVisible()) {
      console.log('Found business listing, clicking...');
      await businessLink.click();
      await page.waitForTimeout(3000);
    }

    // Wait for the business panel to load
    await page.waitForTimeout(2000);

    // Extract all text content from the business panel
    const content = await page.evaluate(() => {
      // Get the main content area
      const body = document.body.innerText;
      return body;
    });

    // Also try to find specific service elements
    const services = await page.evaluate(() => {
      const serviceElements = [];

      // Look for service-related elements
      const allElements = document.querySelectorAll('[data-item-id], [aria-label*="service"], [aria-label*="Service"]');
      allElements.forEach(el => {
        if (el.textContent.trim()) serviceElements.push(el.textContent.trim());
      });

      // Also look for the "Services" section specifically
      const headings = document.querySelectorAll('h2, h3, [role="heading"]');
      headings.forEach(h => {
        if (h.textContent.toLowerCase().includes('service')) {
          let sibling = h.nextElementSibling;
          while (sibling) {
            serviceElements.push(sibling.textContent.trim());
            sibling = sibling.nextElementSibling;
          }
        }
      });

      return serviceElements;
    });

    // Extract structured data
    const businessData = await page.evaluate(() => {
      const data = {};

      // Rating
      const ratingEl = document.querySelector('[role="img"][aria-label*="stars"]');
      if (ratingEl) data.rating = ratingEl.getAttribute('aria-label');

      // Address
      const addressEl = document.querySelector('[data-item-id="address"]');
      if (addressEl) data.address = addressEl.textContent.trim();

      // Phone
      const phoneEl = document.querySelector('[data-item-id="phone"]');
      if (phoneEl) data.phone = phoneEl.textContent.trim();

      // Website
      const websiteEl = document.querySelector('[data-item-id="authority"]');
      if (websiteEl) data.website = websiteEl.textContent.trim();

      // Hours
      const hoursEl = document.querySelector('[data-item-id="oh"]');
      if (hoursEl) data.hours = hoursEl.textContent.trim();

      // Category
      const categoryEl = document.querySelector('button[jsaction*="category"]');
      if (categoryEl) data.category = categoryEl.textContent.trim();

      return data;
    });

    // Take a screenshot for reference
    await page.screenshot({ path: 'research/gbp-screenshot.png', fullPage: false });
    console.log('Screenshot saved to research/gbp-screenshot.png');

    // Now try to navigate to the services tab if it exists
    const servicesTab = await page.locator('text="Services"').first();
    if (await servicesTab.isVisible()) {
      console.log('Found Services tab, clicking...');
      await servicesTab.click();
      await page.waitForTimeout(2000);

      const servicesContent = await page.evaluate(() => {
        return document.body.innerText;
      });

      await page.screenshot({ path: 'research/gbp-services-screenshot.png', fullPage: false });
      console.log('Services screenshot saved');

      // Extract service names
      const servicesList = servicesContent
        .split('\n')
        .filter(line => line.trim().length > 0 && line.trim().length < 100)
        .filter(line => !line.includes('Google') && !line.includes('Sign in') && !line.includes('Search'));

      console.log('\n=== GBP SERVICES TAB CONTENT ===');
      servicesList.forEach(s => console.log('  -', s));
    }

    // Output findings
    console.log('\n=== BUSINESS DATA ===');
    console.log(JSON.stringify(businessData, null, 2));

    if (services.length > 0) {
      console.log('\n=== SERVICE ELEMENTS FOUND ===');
      services.forEach(s => console.log('  -', s));
    }

    // Parse the full content for service-related mentions
    const lines = content.split('\n').filter(l => l.trim());
    const serviceRelated = lines.filter(l => {
      const lower = l.toLowerCase();
      return (lower.includes('roof') || lower.includes('gutter') || lower.includes('siding') ||
              lower.includes('repair') || lower.includes('install') || lower.includes('inspect') ||
              lower.includes('emergency') || lower.includes('commercial') || lower.includes('metal') ||
              lower.includes('shingle') || lower.includes('storm') || lower.includes('flat roof')) &&
             l.length < 150;
    });

    if (serviceRelated.length > 0) {
      console.log('\n=== ROOFING-RELATED CONTENT ON GBP ===');
      serviceRelated.forEach(s => console.log('  -', s));
    }

    // Output full text for analysis
    const fs = await import('fs');
    fs.writeFileSync('research/gbp-full-text.txt', content);
    console.log('\nFull page text saved to research/gbp-full-text.txt');

  } catch (err) {
    console.error('Error:', err.message);
    await page.screenshot({ path: 'research/gbp-error-screenshot.png' });
    console.log('Error screenshot saved');
  } finally {
    await browser.close();
  }
}

main();
