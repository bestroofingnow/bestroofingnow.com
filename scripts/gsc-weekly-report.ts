#!/usr/bin/env npx tsx
/**
 * GSC Weekly Report Script
 *
 * Fetches Google Search Console data and generates a report
 * identifying pages with improving performance.
 *
 * Usage: npm run gsc:report
 *
 * Prerequisites:
 * 1. Create a Google Cloud Service Account
 * 2. Enable Search Console API in GCP
 * 3. Add service account as user in GSC (Settings > Users)
 * 4. Add env variables:
 *    - GOOGLE_SERVICE_ACCOUNT_EMAIL
 *    - GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
 *    - GSC_SITE_URL
 */

import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

// Load environment variables
dotenv.config({ path: '.env.local' });

import {
  generateGSCReport,
  formatReportMarkdown,
  getDateRanges,
} from '../src/lib/gsc-api';

async function main() {
  console.log('');
  console.log('='.repeat(60));
  console.log('  GSC Weekly Performance Report');
  console.log('='.repeat(60));
  console.log('');

  // Check for required env vars
  const requiredEnvVars = [
    'GOOGLE_SERVICE_ACCOUNT_EMAIL',
    'GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY',
    'GSC_SITE_URL',
  ];

  const missingVars = requiredEnvVars.filter((v) => !process.env[v]);
  if (missingVars.length > 0) {
    console.error('Missing required environment variables:');
    for (const v of missingVars) {
      console.error(`  - ${v}`);
    }
    console.error('');
    console.error('Please add these to your .env.local file.');
    console.error('See the plan file for setup instructions.');
    process.exit(1);
  }

  console.log(`Site: ${process.env.GSC_SITE_URL}`);

  const dateRanges = getDateRanges();
  console.log(`Current period: ${dateRanges.current.start} to ${dateRanges.current.end}`);
  console.log(`Previous period: ${dateRanges.previous.start} to ${dateRanges.previous.end}`);
  console.log('');
  console.log('Fetching data from Google Search Console...');
  console.log('');

  try {
    // Generate the report
    const report = await generateGSCReport();

    // Format as markdown
    const markdown = formatReportMarkdown(report);

    // Print to console
    console.log(markdown);

    // Save to file
    const reportsDir = path.join(process.cwd(), 'reports');
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }

    const dateStr = new Date().toISOString().split('T')[0];
    const reportPath = path.join(reportsDir, `gsc-report-${dateStr}.md`);
    fs.writeFileSync(reportPath, markdown);
    console.log('');
    console.log('='.repeat(60));
    console.log(`Report saved to: ${reportPath}`);
    console.log('='.repeat(60));

    // Summary stats
    console.log('');
    console.log('Summary:');
    console.log(`  - Improving pages: ${report.improvingPages.length}`);
    console.log(`  - Declining pages: ${report.decliningPages.length}`);
    console.log(`  - Rising queries: ${report.risingQueries.length}`);
    console.log(`  - Recommendations: ${report.recommendations.length}`);
    console.log('');

  } catch (error) {
    console.error('Error generating report:');
    console.error(error instanceof Error ? error.message : error);
    console.error('');
    console.error('Troubleshooting:');
    console.error('1. Verify service account email is added as a user in GSC');
    console.error('2. Ensure Search Console API is enabled in GCP');
    console.error('3. Check that the private key is correctly formatted in .env.local');
    console.error('4. Verify GSC_SITE_URL matches exactly (including https://)');
    process.exit(1);
  }
}

main();
