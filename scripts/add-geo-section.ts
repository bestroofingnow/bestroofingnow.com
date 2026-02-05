/**
 * Script to batch-add CityGeoSection component to all city/service pages.
 *
 * For each page:
 * 1. Add import for CityGeoSection (if not already present)
 * 2. Add <CityGeoSection> component before the final <CTASection>
 *
 * Usage: npx tsx scripts/add-geo-section.ts
 */

import * as fs from 'fs';
import * as path from 'path';

// City slug mapping from page directory name
// Maps the ending portion of directory names to city slugs and metadata
const CITY_MAPPINGS: Record<string, { citySlug: string; city: string; state: string }> = {
  // NC Cities
  'charlotte-nc': { citySlug: 'charlotte-nc', city: 'Charlotte', state: 'NC' },
  'huntersville-nc': { citySlug: 'huntersville-nc', city: 'Huntersville', state: 'NC' },
  'cornelius-nc': { citySlug: 'cornelius-nc', city: 'Cornelius', state: 'NC' },
  'davidson-nc': { citySlug: 'davidson-nc', city: 'Davidson', state: 'NC' },
  'mooresville-nc': { citySlug: 'mooresville-nc', city: 'Mooresville', state: 'NC' },
  'denver-nc': { citySlug: 'denver-nc', city: 'Denver', state: 'NC' },
  'concord-nc': { citySlug: 'concord-nc', city: 'Concord', state: 'NC' },
  'gastonia-nc': { citySlug: 'gastonia-nc', city: 'Gastonia', state: 'NC' },
  'matthews-nc': { citySlug: 'matthews-nc', city: 'Matthews', state: 'NC' },
  'pineville-nc': { citySlug: 'pineville-nc', city: 'Pineville', state: 'NC' },
  'mint-hill-nc': { citySlug: 'mint-hill-nc', city: 'Mint Hill', state: 'NC' },
  'indian-trail-nc': { citySlug: 'indian-trail-nc', city: 'Indian Trail', state: 'NC' },
  'lake-norman-nc': { citySlug: 'lake-norman', city: 'Lake Norman', state: 'NC' },
  'sherrills-ford-nc': { citySlug: 'sherrills-ford-nc', city: 'Sherrills Ford', state: 'NC' },
  'terrell-nc': { citySlug: 'terrell-nc', city: 'Terrell', state: 'NC' },
  // SC Cities
  'fort-mill-sc': { citySlug: 'fort-mill-sc', city: 'Fort Mill', state: 'SC' },
  'rock-hill-sc': { citySlug: 'rock-hill-sc', city: 'Rock Hill', state: 'SC' },
};

// Service name extraction from directory name
function extractService(dirName: string): string {
  // Remove city suffix to get service prefix
  for (const citySuffix of Object.keys(CITY_MAPPINGS)) {
    if (dirName.endsWith(citySuffix)) {
      const serviceSlug = dirName.replace(`-${citySuffix}`, '');
      const serviceMap: Record<string, string> = {
        'roofing': 'Roofing',
        'roof-repair': 'Roof Repair',
        'roof-replacement': 'Roof Replacement',
        'roofers': 'Roofers',
        'commercial-roofing': 'Commercial Roofing',
        'metal-roofing': 'Metal Roofing',
        'gutter-installation': 'Gutter Installation',
        'storm-damage-roof-repair': 'Storm Damage Roof Repair',
        'emergency-roof-repair': 'Emergency Roof Repair',
        'roof-inspection': 'Roof Inspection',
        'luxury-roofing': 'Luxury Roofing',
        'ice-storm-damage': 'Ice Storm Damage',
        'roofing-contractor': 'Roofing Contractor',
        'roofing-company': 'Roofing Company',
        'best-roofers': 'Best Roofers',
        'best-roofing-company': 'Best Roofing Company',
        'residential-roofing': 'Residential Roofing',
        'affordable-roofing': 'Affordable Roofing',
        'asphalt-shingle-roofing': 'Asphalt Shingle Roofing',
        'slate-roofing': 'Slate Roofing',
        'tile-roofing': 'Tile Roofing',
        'copper-roofing': 'Copper Roofing',
        'cedar-shake-roofing': 'Cedar Shake Roofing',
        'flat-roof-repair': 'Flat Roof Repair',
        'tpo-roofing': 'TPO Roofing',
        'epdm-roofing': 'EPDM Roofing',
        'hail-damage-roof-repair': 'Hail Damage Roof Repair',
        'wind-damage-roof-repair': 'Wind Damage Roof Repair',
        'tree-damage-roof-repair': 'Tree Damage Roof Repair',
        'hurricane-damage-roof-repair': 'Hurricane Damage Roof Repair',
        'sagging-roof-repair': 'Sagging Roof Repair',
        'winter-roof-repair': 'Winter Roof Repair',
        'spring-roof-inspection': 'Spring Roof Inspection',
        'insurance-claim-roofing': 'Insurance Claim Roofing',
        'new-construction-roofing': 'New Construction Roofing',
        'gaf-roofing': 'GAF Roofing',
        'owens-corning-roofing': 'Owens Corning Roofing',
        'roof-repair-cost': 'Roof Repair Cost',
        'roof-replacement-cost': 'Roof Replacement Cost',
        'church-roofing': 'Church Roofing',
        'condo-roofing': 'Condo Roofing',
        'apartment-roofing': 'Apartment Roofing',
        'townhouse-roofing': 'Townhouse Roofing',
        'school-roofing': 'School Roofing',
        'industrial-roofing': 'Industrial Roofing',
        'warehouse-roofing': 'Warehouse Roofing',
        'office-building-roofing': 'Office Building Roofing',
        'data-center-roofing': 'Data Center Roofing',
        'auto-dealership-roofing': 'Auto Dealership Roofing',
        'retail-shopping-center-roofing': 'Retail Shopping Center Roofing',
        'healthcare-facility-roofing': 'Healthcare Facility Roofing',
        'hotel-hospitality-roofing': 'Hotel & Hospitality Roofing',
        'government-building-roofing': 'Government Building Roofing',
        'manufacturing-plant-roofing': 'Manufacturing Plant Roofing',
        'distribution-center-roofing': 'Distribution Center Roofing',
        'veteran-owned-roofing-company': 'Veteran-Owned Roofing Company',
        'commercial-roof-repair-cost': 'Commercial Roof Repair Cost',
        'fascia-soffit-repair': 'Fascia & Soffit Repair',
        'flat-roof-coating': 'Flat Roof Coating',
        'emergency-tarp-service': 'Emergency Tarp Service',
      };
      return serviceMap[serviceSlug] || serviceSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }
  }
  return 'Roofing';
}

// Find the city info from a directory name
function findCityInfo(dirName: string): { citySlug: string; city: string; state: string } | null {
  for (const [suffix, info] of Object.entries(CITY_MAPPINGS)) {
    if (dirName.endsWith(suffix)) {
      return info;
    }
  }
  // Handle Charlotte neighborhood pages like roofing-ballantyne-charlotte-nc
  if (dirName.endsWith('charlotte-nc')) {
    return CITY_MAPPINGS['charlotte-nc'];
  }
  return null;
}

function processFile(filePath: string, dirName: string): boolean {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Skip if already has CityGeoSection
  if (content.includes('CityGeoSection')) {
    console.log(`  SKIP (already has CityGeoSection): ${dirName}`);
    return false;
  }

  // Skip if no CTASection (our insertion point)
  if (!content.includes('<CTASection')) {
    console.log(`  SKIP (no CTASection): ${dirName}`);
    return false;
  }

  const cityInfo = findCityInfo(dirName);
  if (!cityInfo) {
    console.log(`  SKIP (no city match): ${dirName}`);
    return false;
  }

  const service = extractService(dirName);

  // 1. Add import for CityGeoSection
  // Find the last import line and add after it
  const importStatement = "import { CityGeoSection } from '@/components/sections/CityGeoSection';";

  if (!content.includes(importStatement)) {
    // Add after the last import statement
    const importLines = content.split('\n');
    let lastImportIndex = -1;
    for (let i = 0; i < importLines.length; i++) {
      if (importLines[i].startsWith('import ') || importLines[i].startsWith("import {")) {
        lastImportIndex = i;
      }
    }
    if (lastImportIndex >= 0) {
      importLines.splice(lastImportIndex + 1, 0, importStatement);
      content = importLines.join('\n');
    }
  }

  // 2. Add CityGeoSection before the LAST CTASection
  // Find the last occurrence of <CTASection
  const ctaPattern = /(\s*)<CTASection/g;
  let lastMatch: RegExpExecArray | null = null;
  let match: RegExpExecArray | null;
  while ((match = ctaPattern.exec(content)) !== null) {
    lastMatch = match;
  }

  if (lastMatch) {
    const indent = lastMatch[1];
    const geoComponent = `${indent}<CityGeoSection\n${indent}  city="${cityInfo.city}"\n${indent}  state="${cityInfo.state}"\n${indent}  citySlug="${cityInfo.citySlug}"\n${indent}  service="${service}"\n${indent}/>\n`;

    content = content.slice(0, lastMatch.index) + '\n' + geoComponent + content.slice(lastMatch.index);
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`  UPDATED: ${dirName} (${cityInfo.city}, ${cityInfo.state} - ${service})`);
  return true;
}

// Main execution
const appDir = path.join(__dirname, '..', 'src', 'app');
let updated = 0;
let skipped = 0;

// Get all directories with page.tsx files
const dirs = fs.readdirSync(appDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name)
  .filter(name => {
    // Only process city-specific pages
    return Object.keys(CITY_MAPPINGS).some(suffix => name.endsWith(suffix));
  })
  .sort();

console.log(`Found ${dirs.length} city-specific page directories\n`);

for (const dir of dirs) {
  const pagePath = path.join(appDir, dir, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    if (processFile(pagePath, dir)) {
      updated++;
    } else {
      skipped++;
    }
  }
}

console.log(`\nDone! Updated: ${updated}, Skipped: ${skipped}`);
