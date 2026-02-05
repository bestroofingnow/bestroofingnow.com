/**
 * Shorten metadata titles that are still over 42 chars (60 total with template).
 * Maps specific long titles to shorter versions.
 */

import * as fs from 'fs';
import * as path from 'path';

// Map of file -> { old title, new title }
// These are the metadata-level titles that need shortening
const TITLE_REPLACEMENTS: Record<string, { old: string; new: string }[]> = {
  // Charlotte core pages
  'src/app/roofing-charlotte-nc/page.tsx': [
    { old: 'Roofing Charlotte NC | #1 Rated Roofing Company (500+ Roofs)', new: 'Roofing Charlotte NC | 500+ Roofs' },
  ],
  'src/app/roofers-charlotte-nc/page.tsx': [
    { old: 'Roofers Charlotte NC | Top-Rated Local Roofers (5.0 Stars)', new: 'Roofers Charlotte NC | 5-Star' },
  ],
  'src/app/roofing-company-charlotte-nc/page.tsx': [
    { old: 'Roofing Company Charlotte NC | Veteran-Owned | 5-Star Rated', new: 'Roofing Company Charlotte NC' },
  ],
  'src/app/roof-repair-charlotte-nc/page.tsx': [
    { old: 'Roof Repair Charlotte NC | Fast & Affordable', new: 'Roof Repair Charlotte NC | Fast' },
  ],
  'src/app/roof-replacement-charlotte-nc/page.tsx': [
    { old: 'Roof Replacement Charlotte NC | New Roof Installation', new: 'Roof Replacement Charlotte NC' },
  ],
  'src/app/roof-inspection-charlotte-nc/page.tsx': [
    { old: 'Roof Inspection Charlotte NC | Free Roof Inspections', new: 'Roof Inspection Charlotte NC | Free' },
  ],
  'src/app/reviews/page.tsx': [
    { old: 'Best Roofing Now Reviews | 5-Star Charlotte Roofing Company', new: 'Customer Reviews | 5-Star Rated' },
  ],
  'src/app/ventilation/page.tsx': [
    { old: 'Attic Ventilation & Roof Energy Efficiency | Charlotte NC', new: 'Attic Ventilation Charlotte NC' },
  ],

  // Roof repair city pages
  'src/app/roof-repair-cornelius-nc/page.tsx': [
    { old: 'Roof Repair Cornelius NC | Lake Norman Emergency Roofers', new: 'Roof Repair Cornelius NC' },
  ],
  'src/app/roof-repair-huntersville-nc/page.tsx': [
    { old: 'Roof Repair Huntersville NC | Fast Emergency Service', new: 'Roof Repair Huntersville NC' },
  ],
  'src/app/roof-repair-matthews-nc/page.tsx': [
    { old: 'Roof Repair Matthews NC | South Charlotte Roofers', new: 'Roof Repair Matthews NC | Fast' },
  ],
  'src/app/roof-repair-pineville-nc/page.tsx': [
    { old: 'Roof Repair Pineville NC | Carolina Place Area', new: 'Roof Repair Pineville NC' },
  ],
  'src/app/roof-repair-fort-mill-sc/page.tsx': [
    { old: 'Roof Repair Fort Mill SC | Emergency & Storm Damage', new: 'Roof Repair Fort Mill SC' },
  ],
  'src/app/roof-repair-concord-nc/page.tsx': [
    { old: 'Roof Repair Concord NC | Fast & Affordable', new: 'Roof Repair Concord NC | Fast' },
  ],
  'src/app/roof-repair-cost-charlotte-nc/page.tsx': [
    { old: 'Roof Repair Cost Charlotte NC | 2026 Pricing Guide', new: 'Roof Repair Cost Charlotte NC' },
  ],

  // Roof replacement city pages
  'src/app/roof-replacement-concord-nc/page.tsx': [
    { old: 'Roof Replacement Concord NC | Cabarrus County Roofers', new: 'Roof Replacement Concord NC' },
  ],
  'src/app/roof-replacement-davidson-nc/page.tsx': [
    { old: 'Roof Replacement Davidson NC | Davidson College Area', new: 'Roof Replacement Davidson NC' },
  ],
  'src/app/roof-replacement-fort-mill-sc/page.tsx': [
    { old: 'Roof Replacement Fort Mill SC | New Roof Installation', new: 'Roof Replacement Fort Mill SC' },
  ],
  'src/app/roof-replacement-gastonia-nc/page.tsx': [
    { old: 'Roof Replacement Gastonia NC | Expert Installation', new: 'Roof Replacement Gastonia NC' },
  ],
  'src/app/roof-replacement-mooresville-nc/page.tsx': [
    { old: 'Roof Replacement Mooresville NC | Lake Norman Experts', new: 'Roof Replacement Mooresville NC' },
  ],

  // Roofing city pages
  'src/app/roofing-huntersville-nc/page.tsx': [
    { old: 'Roofing Huntersville NC | Top-Rated Roofers', new: 'Roofing Huntersville NC | 5-Star' },
  ],
  'src/app/roofing-mooresville-nc/page.tsx': [
    { old: 'Roofing Mooresville NC | Trusted Lake Norman Roofers', new: 'Roofing Mooresville NC | 5-Star' },
  ],
  'src/app/roofing-concord-nc/page.tsx': [
    { old: 'Roofing Concord NC | Speedway Area Roofing Company', new: 'Roofing Concord NC | Top Rated' },
  ],
  'src/app/roofing-cornelius-nc/page.tsx': [
    { old: 'Roofing Cornelius NC | Lake Norman Roofing Company', new: 'Roofing Cornelius NC | 5-Star' },
  ],
  'src/app/roofing-davidson-nc/page.tsx': [
    { old: 'Roofing Davidson NC | Davidson College Area Roofers', new: 'Roofing Davidson NC | Top Rated' },
  ],
  'src/app/roofing-matthews-nc/page.tsx': [
    { old: 'Roofing Matthews NC | South Charlotte Roofing Company', new: 'Roofing Matthews NC | Top Rated' },
  ],
  'src/app/roofing-fort-mill-sc/page.tsx': [
    { old: 'Roofing Fort Mill SC | South Charlotte Roofing', new: 'Roofing Fort Mill SC | Top Rated' },
  ],
  'src/app/roofing-rock-hill-sc/page.tsx': [
    { old: 'Roofing Rock Hill SC | York County Roofing Company', new: 'Roofing Rock Hill SC | 5-Star' },
  ],
  'src/app/roofing-pineville-nc/page.tsx': [
    { old: 'Roofing Pineville NC | Carolina Place Area Roofers', new: 'Roofing Pineville NC | Top Rated' },
  ],
  'src/app/roofing-mint-hill-nc/page.tsx': [
    { old: 'Roofing Mint Hill NC | East Charlotte Roofers', new: 'Roofing Mint Hill NC | 5-Star' },
  ],
  'src/app/roofing-gastonia-nc/page.tsx': [
    { old: 'Roofing Gastonia NC | Gaston County Roofers', new: 'Roofing Gastonia NC | Top Rated' },
  ],
  'src/app/roofing-terrell-nc/page.tsx': [
    { old: 'Roofing Terrell NC | West Lake Norman Roofers', new: 'Roofing Terrell NC | Lake Norman' },
  ],
  'src/app/roofing-sherrills-ford-nc/page.tsx': [
    { old: 'Roofing Sherrills Ford NC | Lake Norman Roofing', new: 'Roofing Sherrills Ford NC' },
  ],
  'src/app/roofing-ballantyne-charlotte-nc/page.tsx': [
    { old: 'Roofing Ballantyne Charlotte NC | South Charlotte Roofers', new: 'Roofing Ballantyne Charlotte NC' },
  ],
  'src/app/roofing-dilworth-charlotte-nc/page.tsx': [
    { old: 'Roofing Dilworth Charlotte NC | Historic Home Experts', new: 'Roofing Dilworth Charlotte NC' },
  ],
  'src/app/roofing-myers-park-charlotte-nc/page.tsx': [
    { old: 'Roofing Myers Park Charlotte NC | Luxury Home Roofers', new: 'Roofing Myers Park Charlotte NC' },
  ],
  'src/app/roofing-noda-charlotte-nc/page.tsx': [
    { old: 'Roofing NoDa Charlotte NC | Arts District Roofers', new: 'Roofing NoDa Charlotte NC' },
  ],
  'src/app/roofing-southpark-charlotte-nc/page.tsx': [
    { old: 'Roofing SouthPark Charlotte NC | SouthPark Mall Area', new: 'Roofing SouthPark Charlotte NC' },
  ],
  'src/app/roofing-steele-creek-charlotte-nc/page.tsx': [
    { old: 'Roofing Steele Creek Charlotte NC | Southwest Charlotte', new: 'Roofing Steele Creek Charlotte NC' },
  ],
  'src/app/roofing-plaza-midwood-charlotte-nc/page.tsx': [
    { old: 'Roofing Plaza Midwood Charlotte NC | Historic Craftsman Homes', new: 'Roofing Plaza Midwood Charlotte NC' },
  ],
  'src/app/roofing-university-city-charlotte-nc/page.tsx': [
    { old: 'Roofing University City Charlotte NC | UNCC Area', new: 'Roofing University City Charlotte' },
  ],

  // Roofers city pages
  'src/app/roofers-cornelius-nc/page.tsx': [
    { old: 'Roofers Cornelius NC | Lake Norman | 5-Star Rated', new: 'Roofers Cornelius NC | 5-Star' },
  ],
  'src/app/roofers-davidson-nc/page.tsx': [
    { old: 'Roofers Davidson NC | Lake Norman | Historic Home Experts', new: 'Roofers Davidson NC | 5-Star' },
  ],
  'src/app/roofers-denver-nc/page.tsx': [
    { old: 'Roofers Denver NC | Lake Norman | 5-Star Rated', new: 'Roofers Denver NC | 5-Star' },
  ],
  'src/app/roofers-fort-mill-sc/page.tsx': [
    { old: 'Roofers Fort Mill SC | Top Rated Roofing Company', new: 'Roofers Fort Mill SC | Top Rated' },
  ],

  // Commercial roofing city pages
  'src/app/commercial-roofing-concord-nc/page.tsx': [
    { old: 'Commercial Roofing Concord NC | Flat Roof & TPO', new: 'Commercial Roofing Concord NC' },
  ],
  'src/app/commercial-roofing-cornelius-nc/page.tsx': [
    { old: 'Commercial Roofing Cornelius NC | Flat Roof Experts', new: 'Commercial Roofing Cornelius NC' },
  ],
  'src/app/commercial-roofing-denver-nc/page.tsx': [
    { old: 'Commercial Roofing Denver NC | TPO & Flat Roof', new: 'Commercial Roofing Denver NC' },
  ],
  'src/app/commercial-roofing-fort-mill-sc/page.tsx': [
    { old: 'Commercial Roofing Fort Mill SC | Kingsley & Baxter', new: 'Commercial Roofing Fort Mill SC' },
  ],
  'src/app/commercial-roofing-gastonia-nc/page.tsx': [
    { old: 'Commercial Roofing Gastonia NC | Industrial & Warehouse', new: 'Commercial Roofing Gastonia NC' },
  ],
  'src/app/commercial-roofing-huntersville-nc/page.tsx': [
    { old: 'Commercial Roofing Huntersville NC | Flat Roof & TPO Experts', new: 'Commercial Roofing Huntersville' },
  ],
  'src/app/commercial-roofing-mooresville-nc/page.tsx': [
    { old: 'Commercial Roofing Mooresville NC | Race Shop Roofing', new: 'Commercial Roofing Mooresville NC' },
  ],
  'src/app/commercial-roofing-rock-hill-sc/page.tsx': [
    { old: 'Commercial Roofing Rock Hill SC | Industrial & Flat Roof', new: 'Commercial Roofing Rock Hill SC' },
  ],

  // Emergency / Storm damage pages
  'src/app/emergency-roof-repair-huntersville-nc/page.tsx': [
    { old: 'Emergency Roof Repair Huntersville NC | 24/7 Service', new: 'Emergency Roof Repair Huntersville' },
  ],
  'src/app/emergency-tarp-service-charlotte-nc/page.tsx': [
    { old: 'Emergency Roof Tarp Service Charlotte NC | 24/7', new: 'Emergency Tarp Service Charlotte' },
  ],
  'src/app/hurricane-damage-roof-repair-charlotte-nc/page.tsx': [
    { old: 'Hurricane Damage Roof Repair Charlotte NC | Storm Recovery', new: 'Hurricane Roof Repair Charlotte' },
  ],
  'src/app/storm-damage-roof-repair-denver-nc/page.tsx': [
    { old: 'Storm Damage Roof Repair Denver NC | Insurance Help', new: 'Storm Damage Repair Denver NC' },
  ],
  'src/app/storm-damage-roof-repair-mooresville-nc/page.tsx': [
    { old: 'Storm Damage Roof Repair Mooresville NC | Insurance Claims', new: 'Storm Damage Repair Mooresville' },
  ],
  'src/app/hail-damage-roof-repair-charlotte-nc/page.tsx': [
    { old: 'Hail Damage Roof Repair Charlotte NC | Insurance Claims Help', new: 'Hail Damage Roof Repair Charlotte' },
  ],
  'src/app/tree-damage-roof-repair-charlotte-nc/page.tsx': [
    { old: 'Tree Damage Roof Repair Charlotte NC | Storm Cleanup', new: 'Tree Damage Roof Repair Charlotte' },
  ],

  // Metal roofing city pages
  'src/app/metal-roofing-denver-nc/page.tsx': [
    { old: 'Metal Roofing Denver NC | Standing Seam Experts', new: 'Metal Roofing Denver NC' },
  ],
  'src/app/metal-roofing-huntersville-nc/page.tsx': [
    { old: 'Metal Roofing Huntersville NC | Standing Seam Experts', new: 'Metal Roofing Huntersville NC' },
  ],
  'src/app/metal-roofing-mooresville-nc/page.tsx': [
    { old: 'Metal Roofing Mooresville NC | Standing Seam Experts', new: 'Metal Roofing Mooresville NC' },
  ],

  // Gutter pages
  'src/app/gutter-installation-charlotte-nc/page.tsx': [
    { old: 'Gutter Installation Charlotte NC | Seamless Gutters', new: 'Gutter Installation Charlotte NC' },
  ],
  'src/app/gutter-installation-cornelius-nc/page.tsx': [
    { old: 'Gutter Installation Cornelius NC | Seamless Gutters', new: 'Gutter Installation Cornelius NC' },
  ],
  'src/app/gutter-installation-denver-nc/page.tsx': [
    { old: 'Gutter Installation Denver NC | Seamless Gutters', new: 'Gutter Installation Denver NC' },
  ],
  'src/app/gutter-installation-huntersville-nc/page.tsx': [
    { old: 'Gutter Installation Huntersville NC | Seamless Gutters', new: 'Gutter Install Huntersville NC' },
  ],
  'src/app/gutter-guards-charlotte-nc/page.tsx': [
    { old: 'Gutter Guards Charlotte NC | Mesh, Micro-Mesh & Screen Systems', new: 'Gutter Guards Charlotte NC' },
  ],

  // Specialty Charlotte pages
  'src/app/condo-roofing-charlotte-nc/page.tsx': [
    { old: 'Condo Roofing Charlotte NC | Association Approved', new: 'Condo Roofing Charlotte NC | HOA' },
  ],
  'src/app/fascia-soffit-repair-charlotte-nc/page.tsx': [
    { old: 'Fascia & Soffit Repair Charlotte NC | Trim Specialists', new: 'Fascia & Soffit Charlotte NC' },
  ],
  'src/app/flat-roof-coating-charlotte-nc/page.tsx': [
    { old: "Flat Roof Coating Charlotte NC | Silicone, Acrylic & Elastomeric", new: 'Flat Roof Coating Charlotte NC' },
  ],
  'src/app/flat-roof-contractors-charlotte-nc/page.tsx': [
    { old: 'Flat Roof Contractors Charlotte NC | Licensed & Insured Specialists', new: 'Flat Roof Contractors Charlotte' },
  ],
  'src/app/flat-roof-repair-charlotte-nc/page.tsx': [
    { old: 'Flat Roof Repair Charlotte NC | Commercial & Residential', new: 'Flat Roof Repair Charlotte NC' },
  ],
  'src/app/gaf-roofing-charlotte-nc/page.tsx': [
    { old: 'GAF Roofing Charlotte NC | Factory-Certified Contractor', new: 'GAF Roofing Charlotte NC' },
  ],
  'src/app/gaf-timberline-shingles-charlotte-nc/page.tsx': [
    { old: 'GAF Timberline Shingles Charlotte NC | HDZ & NS', new: 'GAF Timberline Charlotte NC' },
  ],
  'src/app/ice-dam-prevention-charlotte-nc/page.tsx': [
    { old: 'Ice Dam Prevention Charlotte NC | Winter Roofing', new: 'Ice Dam Prevention Charlotte NC' },
  ],
  'src/app/insurance-claim-roofing-charlotte-nc/page.tsx': [
    { old: 'Insurance Claim Roofing Charlotte NC | Storm Damage Experts', new: 'Insurance Claim Roofing Charlotte' },
  ],
  'src/app/leafguard-gutters-charlotte-nc/page.tsx': [
    { old: 'LeafGuard Gutters Charlotte NC | Clog-Free Guarantee', new: 'LeafGuard Gutters Charlotte NC' },
  ],
  'src/app/missing-shingles-repair-charlotte-nc/page.tsx': [
    { old: 'Missing Shingles Repair Charlotte NC | Fast Service', new: 'Missing Shingles Repair Charlotte' },
  ],
  'src/app/moss-algae-removal-roof-charlotte-nc/page.tsx': [
    { old: 'Moss & Algae Removal Charlotte NC | Roof Cleaning', new: 'Moss & Algae Removal Charlotte' },
  ],
  'src/app/new-construction-roofing-charlotte-nc/page.tsx': [
    { old: 'New Construction Roofing Charlotte NC | Builder Services', new: 'New Construction Roofing Charlotte' },
  ],
  'src/app/new-roof-installation-charlotte-nc/page.tsx': [
    { old: 'New Roof Installation Charlotte NC | First-Time Roof & New Construction', new: 'New Roof Install Charlotte NC' },
  ],
  'src/app/owens-corning-roofing-charlotte-nc/page.tsx': [
    { old: 'Owens Corning Roofing Charlotte NC | Preferred Contractor', new: 'Owens Corning Charlotte NC' },
  ],
  'src/app/ridge-vent-installation-charlotte-nc/page.tsx': [
    { old: 'Ridge Vent Installation Charlotte NC | Attic Ventilation', new: 'Ridge Vent Install Charlotte NC' },
  ],
  'src/app/roof-coating-charlotte-nc/page.tsx': [
    { old: "Roof Coating Charlotte NC | Extend Your Roof\\", new: 'Roof Coating Charlotte NC' },
  ],
  'src/app/roof-financing-charlotte-nc/page.tsx': [
    { old: 'Roof Financing Charlotte NC | 0% Interest Options', new: 'Roof Financing Charlotte NC | 0%' },
  ],
  'src/app/roof-flashing-repair-charlotte-nc/page.tsx': [
    { old: 'Roof Flashing Repair Charlotte NC | Wall, Vent & Pipe Flashing Experts', new: 'Roof Flashing Repair Charlotte' },
  ],
  'src/app/roof-leak-repair-charlotte-nc/page.tsx': [
    { old: 'Roof Leak Repair Charlotte NC | Fast Leak Detection', new: 'Roof Leak Repair Charlotte NC' },
  ],
  'src/app/roof-maintenance-charlotte-nc/page.tsx': [
    { old: 'Roof Maintenance Charlotte NC | Annual Inspection Plans', new: 'Roof Maintenance Charlotte NC' },
  ],
  'src/app/roof-valley-repair-charlotte-nc/page.tsx': [
    { old: 'Roof Valley Repair Charlotte NC | Valley Leak Experts', new: 'Roof Valley Repair Charlotte NC' },
  ],
  'src/app/roof-ventilation-charlotte-nc/page.tsx': [
    { old: 'Roof Ventilation Charlotte NC | Attic Ventilation Experts', new: 'Roof Ventilation Charlotte NC' },
  ],
  'src/app/roof-inspection-denver-nc/page.tsx': [
    { old: 'Roof Inspection Denver NC | Free Estimates', new: 'Roof Inspection Denver NC | Free' },
  ],
  'src/app/roof-inspection-mooresville-nc/page.tsx': [
    { old: 'Roof Inspection Mooresville NC | Free Estimates', new: 'Roof Inspection Mooresville NC' },
  ],
  'src/app/sagging-roof-repair-charlotte-nc/page.tsx': [
    { old: 'Sagging Roof Repair Charlotte NC | Structural Experts', new: 'Sagging Roof Repair Charlotte NC' },
  ],
  'src/app/skylight-installation-charlotte-nc/page.tsx': [
    { old: 'Skylight Installation Charlotte NC | VELUX Certified', new: 'Skylight Install Charlotte NC' },
  ],
  'src/app/solar-services/page.tsx': [
    { old: 'Solar Roofing Charlotte NC | Solar Panel Integration', new: 'Solar Roofing Charlotte NC' },
  ],
  'src/app/spring-roof-inspection-charlotte-nc/page.tsx': [
    { old: 'Spring Roof Inspection Charlotte NC | Post-Winter Check', new: 'Spring Roof Inspection Charlotte' },
  ],
  'src/app/summer-roof-maintenance-charlotte-nc/page.tsx': [
    { old: 'Summer Roof Maintenance Charlotte NC | Heat Protection', new: 'Summer Roof Maintenance Charlotte' },
  ],
  'src/app/tile-roofing-charlotte-nc/page.tsx': [
    { old: 'Tile Roofing Charlotte NC | Clay & Concrete Tiles', new: 'Tile Roofing Charlotte NC' },
  ],
  'src/app/townhouse-roofing-charlotte-nc/page.tsx': [
    { old: 'Townhouse Roofing Charlotte NC | HOA Compliant', new: 'Townhouse Roofing Charlotte NC' },
  ],
  'src/app/velux-skylights-charlotte-nc/page.tsx': [
    { old: 'VELUX Skylights Charlotte NC | Certified Installers', new: 'VELUX Skylights Charlotte NC' },
  ],
  'src/app/veteran-owned-roofing-company-charlotte-nc/page.tsx': [
    { old: 'Veteran-Owned Roofing Company Charlotte NC', new: 'Veteran-Owned Roofer Charlotte' },
  ],
  'src/app/warehouse-roofing-charlotte-nc/page.tsx': [
    { old: 'Warehouse Roofing Charlotte NC | Flat Roof Specialists', new: 'Warehouse Roofing Charlotte NC' },
  ],
  'src/app/winter-roof-repair-charlotte-nc/page.tsx': [
    { old: 'Winter Roof Repair Charlotte NC | Cold Weather Experts', new: 'Winter Roof Repair Charlotte NC' },
  ],

  // Commercial specialty pages
  'src/app/data-center-roofing-charlotte-nc/page.tsx': [
    { old: 'Data Center Roofing Charlotte NC | Server Farm & Tech Facility Roofs', new: 'Data Center Roofing Charlotte NC' },
  ],
  'src/app/distribution-center-roofing-charlotte-nc/page.tsx': [
    { old: 'Distribution Center Roofing Charlotte NC | Warehouse & Logistics Roofs', new: 'Distribution Center Roofing CLT' },
  ],
  'src/app/government-building-roofing-charlotte-nc/page.tsx': [
    { old: 'Government Building Roofing Charlotte NC | Municipal & Federal Facilities', new: 'Government Roofing Charlotte NC' },
  ],
  'src/app/healthcare-facility-roofing-charlotte-nc/page.tsx': [
    { old: 'Healthcare Facility Roofing Charlotte NC | Hospital & Medical Office Roofs', new: 'Healthcare Roofing Charlotte NC' },
  ],
  'src/app/hotel-hospitality-roofing-charlotte-nc/page.tsx': [
    { old: 'Hotel & Hospitality Roofing Charlotte NC | Hotels, Resorts & Convention Centers', new: 'Hotel Roofing Charlotte NC' },
  ],
  'src/app/industrial-roofing-charlotte-nc/page.tsx': [
    { old: 'Industrial Roofing Charlotte NC | Warehouse & Factory Roofs', new: 'Industrial Roofing Charlotte NC' },
  ],
  'src/app/manufacturing-plant-roofing-charlotte-nc/page.tsx': [
    { old: 'Manufacturing Plant Roofing Charlotte NC | Factories & Processing Facilities', new: 'Manufacturing Roofing Charlotte' },
  ],
  'src/app/office-building-roofing-charlotte-nc/page.tsx': [
    { old: 'Office Building Roofing Charlotte NC | Corporate & Commercial Roofs', new: 'Office Building Roofing Charlotte' },
  ],
  'src/app/retail-shopping-center-roofing-charlotte-nc/page.tsx': [
    { old: 'Retail & Shopping Center Roofing Charlotte NC | Mall & Strip Center Roofs', new: 'Retail Center Roofing Charlotte' },
  ],
  'src/app/school-roofing-charlotte-nc/page.tsx': [
    { old: 'School Roofing Charlotte NC | K-12, Universities & Educational Facilities', new: 'School Roofing Charlotte NC' },
  ],
};

function main() {
  let totalChanged = 0;
  let totalFailed = 0;

  for (const [relFile, replacements] of Object.entries(TITLE_REPLACEMENTS)) {
    const filePath = path.join(process.cwd(), relFile);

    if (!fs.existsSync(filePath)) {
      console.log(`  SKIP (not found): ${relFile}`);
      totalFailed++;
      continue;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let fileChanged = false;

    for (const { old: oldTitle, new: newTitle } of replacements) {
      if (content.includes(oldTitle)) {
        content = content.replace(oldTitle, newTitle);
        fileChanged = true;

        const total = newTitle.length + ' | Best Roofing Now'.length;
        const status = total <= 60 ? 'OK' : `WARN (${total} chars)`;
        console.log(`  ${status}: "${newTitle}" (${newTitle.length} + 18 = ${total})`);
      } else {
        console.log(`  MISS: "${oldTitle}" not found in ${relFile}`);
        totalFailed++;
      }
    }

    if (fileChanged) {
      fs.writeFileSync(filePath, content, 'utf8');
      totalChanged++;
    }
  }

  console.log(`\n${totalChanged} files modified, ${totalFailed} missed/failed`);
}

main();
