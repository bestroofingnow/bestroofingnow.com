// Generate comprehensive CSV of all pages with URLs, titles, and focus keywords
const fs = require('fs');
const path = require('path');

// WordPress API for blog posts
const WP_API_URL = 'https://bestroofingnow.com/wp-json/wp/v2';

// PMI API for projects
const PMI_API_KEY = process.env.PMI_API_KEY || '';

async function fetchAllBlogPosts() {
  const posts = [];
  let page = 1;
  const perPage = 100;

  console.log('Fetching blog posts from WordPress...');

  while (true) {
    try {
      const res = await fetch(`${WP_API_URL}/posts?per_page=${perPage}&page=${page}&_embed=true`);
      if (!res.ok) break;

      const data = await res.json();
      if (data.length === 0) break;

      posts.push(...data);
      console.log(`  Fetched page ${page}: ${data.length} posts (total: ${posts.length})`);
      page++;

      // Rate limiting
      await new Promise(r => setTimeout(r, 200));
    } catch (e) {
      console.error('Error fetching posts:', e.message);
      break;
    }
  }

  return posts;
}

async function fetchAllProjects() {
  console.log('Fetching projects from PMI API...');

  try {
    const res = await fetch('https://bestroofingnow.com/api/pmi/projects');
    if (!res.ok) {
      console.log('  Could not fetch projects, skipping...');
      return [];
    }
    const data = await res.json();
    console.log(`  Fetched ${data.projects?.length || 0} projects`);
    return data.projects || [];
  } catch (e) {
    console.error('Error fetching projects:', e.message);
    return [];
  }
}

// Static page data - manually extracted from codebase
const STATIC_PAGES = [
  { url: '/', title: 'Best Roofing Company Charlotte NC | 5-Star Rated | Free Inspection', keyword: 'best roofing company Charlotte' },
  { url: '/about', title: 'About Us | Veteran-Owned Roofing Company Charlotte NC', keyword: 'veteran owned roofing company Charlotte' },
  { url: '/contact', title: 'Contact Best Roofing Now | Charlotte NC Roofing Company', keyword: 'contact roofing company Charlotte' },
  { url: '/services', title: 'Roofing Services Charlotte NC | Best Roofing Now', keyword: 'roofing services Charlotte NC' },
  { url: '/blog', title: 'Roofing Blog | Tips & Advice | Best Roofing Now Charlotte', keyword: 'roofing blog Charlotte' },
  { url: '/faq', title: 'Roofing FAQ | Frequently Asked Questions | Best Roofing Now', keyword: 'roofing FAQ Charlotte' },
  { url: '/financing', title: 'Roof Financing | Payment Options | Best Roofing Now Charlotte NC', keyword: 'roof financing Charlotte' },
  { url: '/reviews', title: 'Customer Reviews | Best Roofing Now Charlotte NC', keyword: 'roofing reviews Charlotte' },
  { url: '/warranty', title: 'Roofing Warranty Information | Best Roofing Now Charlotte NC', keyword: 'roofing warranty Charlotte' },
  { url: '/emergency', title: 'Emergency Roofing Services | 24/7 | Best Roofing Now Charlotte', keyword: 'emergency roofing Charlotte' },
  { url: '/process', title: 'Our Roofing Process | Best Roofing Now Charlotte NC', keyword: 'roofing process Charlotte' },
  { url: '/locations', title: 'Service Areas | Best Roofing Now Charlotte NC', keyword: 'roofing service areas Charlotte' },
  { url: '/brands', title: 'Roofing Brands We Install | Best Roofing Now Charlotte NC', keyword: 'roofing brands Charlotte' },
  { url: '/materials', title: 'Roofing Materials Guide | Best Roofing Now Charlotte NC', keyword: 'roofing materials Charlotte' },
  { url: '/roof-types', title: 'Roof Types & Styles | Best Roofing Now Charlotte NC', keyword: 'roof types Charlotte' },
  { url: '/seasonal', title: 'Seasonal Roofing Services | Best Roofing Now Charlotte NC', keyword: 'seasonal roofing Charlotte' },
  { url: '/problems', title: 'Common Roofing Problems | Best Roofing Now Charlotte NC', keyword: 'roofing problems Charlotte' },
  { url: '/compare', title: 'Roofing Material Comparisons | Best Roofing Now Charlotte NC', keyword: 'roofing comparison Charlotte' },
  { url: '/guides', title: 'Roofing Guides | Best Roofing Now Charlotte NC', keyword: 'roofing guides Charlotte' },
  { url: '/commercial-systems', title: 'Commercial Roofing Systems | Best Roofing Now Charlotte NC', keyword: 'commercial roofing systems Charlotte' },
  { url: '/ventilation', title: 'Roof Ventilation | Best Roofing Now Charlotte NC', keyword: 'roof ventilation Charlotte' },
  { url: '/stories', title: 'Roofing Stories | Best Roofing Now Charlotte NC', keyword: 'roofing stories Charlotte' },
  { url: '/projects', title: 'Our Roofing Projects | Charlotte NC | Best Roofing Now', keyword: 'roofing projects Charlotte' },
  { url: '/nc-roofing-guide', title: 'NC Roofing Guide | Best Roofing Now Charlotte', keyword: 'NC roofing guide' },
  { url: '/roofing-services', title: 'Roofing Services | Best Roofing Now Charlotte NC', keyword: 'roofing services' },
  { url: '/gutter-services', title: 'Gutter Services | Best Roofing Now Charlotte NC', keyword: 'gutter services Charlotte' },
  { url: '/siding-services', title: 'Siding Services | Best Roofing Now Charlotte NC', keyword: 'siding services Charlotte' },
  { url: '/storm-restoration', title: 'Storm Restoration Services | Best Roofing Now Charlotte NC', keyword: 'storm restoration Charlotte' },
  { url: '/specialty-services', title: 'Specialty Roofing Services | Best Roofing Now Charlotte NC', keyword: 'specialty roofing services' },
  { url: '/solar-services', title: 'Solar Roofing Services | Best Roofing Now Charlotte NC', keyword: 'solar roofing Charlotte' },
  { url: '/metal-roofing-services', title: 'Metal Roofing Services | Best Roofing Now Charlotte NC', keyword: 'metal roofing services' },
  { url: '/commercial-roofing-services', title: 'Commercial Roofing Services | Best Roofing Now Charlotte NC', keyword: 'commercial roofing services' },
];

// Locations data
const LOCATIONS = [
  { slug: 'charlotte-nc', city: 'Charlotte', state: 'NC' },
  { slug: 'huntersville-nc', city: 'Huntersville', state: 'NC' },
  { slug: 'cornelius-nc', city: 'Cornelius', state: 'NC' },
  { slug: 'davidson-nc', city: 'Davidson', state: 'NC' },
  { slug: 'matthews-nc', city: 'Matthews', state: 'NC' },
  { slug: 'mint-hill-nc', city: 'Mint Hill', state: 'NC' },
  { slug: 'pineville-nc', city: 'Pineville', state: 'NC' },
  { slug: 'concord-nc', city: 'Concord', state: 'NC' },
  { slug: 'kannapolis-nc', city: 'Kannapolis', state: 'NC' },
  { slug: 'harrisburg-nc', city: 'Harrisburg', state: 'NC' },
  { slug: 'monroe-nc', city: 'Monroe', state: 'NC' },
  { slug: 'indian-trail-nc', city: 'Indian Trail', state: 'NC' },
  { slug: 'waxhaw-nc', city: 'Waxhaw', state: 'NC' },
  { slug: 'stallings-nc', city: 'Stallings', state: 'NC' },
  { slug: 'weddington-nc', city: 'Weddington', state: 'NC' },
  { slug: 'marvin-nc', city: 'Marvin', state: 'NC' },
  { slug: 'wesley-chapel-nc', city: 'Wesley Chapel', state: 'NC' },
  { slug: 'gastonia-nc', city: 'Gastonia', state: 'NC' },
  { slug: 'mt-holly-nc', city: 'Mt Holly', state: 'NC' },
  { slug: 'belmont-nc', city: 'Belmont', state: 'NC' },
  { slug: 'kings-mountain-nc', city: 'Kings Mountain', state: 'NC' },
  { slug: 'mooresville-nc', city: 'Mooresville', state: 'NC' },
  { slug: 'statesville-nc', city: 'Statesville', state: 'NC' },
  { slug: 'denver-nc', city: 'Denver', state: 'NC' },
  { slug: 'lincolnton-nc', city: 'Lincolnton', state: 'NC' },
  { slug: 'lake-norman', city: 'Lake Norman', state: 'NC' },
  { slug: 'sherrills-ford-nc', city: 'Sherrills Ford', state: 'NC' },
  { slug: 'terrell-nc', city: 'Terrell', state: 'NC' },
  { slug: 'hickory-nc', city: 'Hickory', state: 'NC' },
  { slug: 'newton-nc', city: 'Newton', state: 'NC' },
  { slug: 'albemarle-nc', city: 'Albemarle', state: 'NC' },
  { slug: 'shelby-nc', city: 'Shelby', state: 'NC' },
  { slug: 'rock-hill-sc', city: 'Rock Hill', state: 'SC' },
  { slug: 'fort-mill-sc', city: 'Fort Mill', state: 'SC' },
  { slug: 'tega-cay-sc', city: 'Tega Cay', state: 'SC' },
  { slug: 'indian-land-sc', city: 'Indian Land', state: 'SC' },
  { slug: 'lancaster-sc', city: 'Lancaster', state: 'SC' },
  { slug: 'salisbury-nc', city: 'Salisbury', state: 'NC' },
  { slug: 'china-grove-nc', city: 'China Grove', state: 'NC' },
  { slug: 'landis-nc', city: 'Landis', state: 'NC' },
  { slug: 'cramerton-nc', city: 'Cramerton', state: 'NC' },
  { slug: 'lowell-nc', city: 'Lowell', state: 'NC' },
  { slug: 'dallas-nc', city: 'Dallas', state: 'NC' },
  { slug: 'cherryville-nc', city: 'Cherryville', state: 'NC' },
  { slug: 'bessemer-city-nc', city: 'Bessemer City', state: 'NC' },
  { slug: 'clover-sc', city: 'Clover', state: 'SC' },
  { slug: 'york-sc', city: 'York', state: 'SC' },
  { slug: 'lake-wylie-sc', city: 'Lake Wylie', state: 'SC' },
  { slug: 'wingate-nc', city: 'Wingate', state: 'NC' },
  { slug: 'fairview-nc', city: 'Fairview', state: 'NC' },
  { slug: 'hemby-bridge-nc', city: 'Hemby Bridge', state: 'NC' },
  { slug: 'unionville-nc', city: 'Unionville', state: 'NC' },
  { slug: 'mount-pleasant-nc', city: 'Mount Pleasant', state: 'NC' },
  { slug: 'midland-nc', city: 'Midland', state: 'NC' },
  { slug: 'locust-nc', city: 'Locust', state: 'NC' },
  { slug: 'oakboro-nc', city: 'Oakboro', state: 'NC' },
  { slug: 'norwood-nc', city: 'Norwood', state: 'NC' },
  { slug: 'maiden-nc', city: 'Maiden', state: 'NC' },
  { slug: 'conover-nc', city: 'Conover', state: 'NC' },
  { slug: 'claremont-nc', city: 'Claremont', state: 'NC' },
  { slug: 'chester-sc', city: 'Chester', state: 'SC' },
];

// Charlotte neighborhoods
const CHARLOTTE_NEIGHBORHOODS = [
  'myers-park', 'dilworth', 'south-end', 'plaza-midwood', 'noda', 'elizabeth',
  'eastover', 'southpark', 'ballantyne', 'university-city', 'steele-creek',
  'highland-creek', 'mountain-island', 'prosperity-village', 'hickory-grove',
  'uptown', 'west-charlotte', 'providence', 'cotswold', 'madison-park',
  'beverly-woods', 'montclaire', 'sedgefield', 'wilmore'
];

// SEO Landing Pages - extracted from src/app directory
const SEO_LANDING_PAGES = [
  { url: '/roof-replacement-cost-charlotte-nc', title: 'Roof Replacement Cost Charlotte NC | Free Estimates', keyword: 'roof replacement cost Charlotte NC' },
  { url: '/metal-roofing-charlotte-nc', title: 'Metal Roofing Charlotte NC | Installation & Repair', keyword: 'metal roofing Charlotte NC' },
  { url: '/roof-inspection-charlotte-nc', title: 'Roof Inspection Charlotte NC | Free Inspections', keyword: 'roof inspection Charlotte NC' },
  { url: '/roof-leak-repair-charlotte-nc', title: 'Roof Leak Repair Charlotte NC | Emergency Service', keyword: 'roof leak repair Charlotte NC' },
  { url: '/gutter-installation-charlotte-nc', title: 'Gutter Installation Charlotte NC | Seamless Gutters', keyword: 'gutter installation Charlotte NC' },
  { url: '/commercial-roofing-contractors-charlotte-nc', title: 'Commercial Roofing Contractors Charlotte NC', keyword: 'commercial roofing contractors Charlotte NC' },
  { url: '/hail-damage-roof-repair-charlotte-nc', title: 'Hail Damage Roof Repair Charlotte NC | Storm Damage', keyword: 'hail damage roof repair Charlotte NC' },
  { url: '/roof-repair-huntersville-nc', title: 'Roof Repair Huntersville NC | Local Roofers', keyword: 'roof repair Huntersville NC' },
  { url: '/best-roofing-company-charlotte-nc', title: 'Best Roofing Company Charlotte NC | 5-Star Rated', keyword: 'best roofing company Charlotte NC' },
  { url: '/residential-roofing-charlotte-nc', title: 'Residential Roofing Charlotte NC | Home Roofing', keyword: 'residential roofing Charlotte NC' },
  { url: '/gaf-roofing-charlotte-nc', title: 'GAF Roofing Charlotte NC | Certified Installer', keyword: 'GAF roofing Charlotte NC' },
  { url: '/roof-installation-charlotte-nc', title: 'Roof Installation Charlotte NC | New Roofs', keyword: 'roof installation Charlotte NC' },
  { url: '/owens-corning-roofing-charlotte-nc', title: 'Owens Corning Roofing Charlotte NC | Preferred Contractor', keyword: 'Owens Corning roofing Charlotte NC' },
  { url: '/storm-damage-roof-repair-mooresville-nc', title: 'Storm Damage Roof Repair Mooresville NC', keyword: 'storm damage roof repair Mooresville NC' },
  { url: '/roof-replacement-mooresville-nc', title: 'Roof Replacement Mooresville NC | Local Roofers', keyword: 'roof replacement Mooresville NC' },
  { url: '/skylight-installation-charlotte-nc', title: 'Skylight Installation Charlotte NC | VELUX Dealer', keyword: 'skylight installation Charlotte NC' },
  { url: '/gutter-guards-charlotte-nc', title: 'Gutter Guards Charlotte NC | LeafGuard Installation', keyword: 'gutter guards Charlotte NC' },
  { url: '/missing-shingles-repair-charlotte-nc', title: 'Missing Shingles Repair Charlotte NC | Quick Fix', keyword: 'missing shingles repair Charlotte NC' },
  { url: '/roofing-sherrills-ford-nc', title: 'Roofing Sherrills Ford NC | Lake Norman Area', keyword: 'roofing Sherrills Ford NC' },
  { url: '/standing-seam-metal-roof-charlotte-nc', title: 'Standing Seam Metal Roof Charlotte NC', keyword: 'standing seam metal roof Charlotte NC' },
  { url: '/roof-repair-cornelius-nc', title: 'Roof Repair Cornelius NC | Lake Norman Roofers', keyword: 'roof repair Cornelius NC' },
  { url: '/wind-damage-roof-repair-charlotte-nc', title: 'Wind Damage Roof Repair Charlotte NC', keyword: 'wind damage roof repair Charlotte NC' },
  { url: '/sagging-roof-repair-charlotte-nc', title: 'Sagging Roof Repair Charlotte NC | Structural Fix', keyword: 'sagging roof repair Charlotte NC' },
  { url: '/roofing-terrell-nc', title: 'Roofing Terrell NC | Catawba County', keyword: 'roofing Terrell NC' },
  { url: '/tpo-roofing-charlotte-nc', title: 'TPO Roofing Charlotte NC | Commercial Flat Roofs', keyword: 'TPO roofing Charlotte NC' },
  { url: '/roof-replacement-davidson-nc', title: 'Roof Replacement Davidson NC | Lake Norman', keyword: 'roof replacement Davidson NC' },
  { url: '/roof-maintenance-charlotte-nc', title: 'Roof Maintenance Charlotte NC | Annual Inspections', keyword: 'roof maintenance Charlotte NC' },
  { url: '/roof-ventilation-charlotte-nc', title: 'Roof Ventilation Charlotte NC | Attic Vents', keyword: 'roof ventilation Charlotte NC' },
  { url: '/roofing-fort-mill-sc', title: 'Roofing Fort Mill SC | South Charlotte Area', keyword: 'roofing Fort Mill SC' },
  { url: '/epdm-roofing-charlotte-nc', title: 'EPDM Roofing Charlotte NC | Rubber Roofs', keyword: 'EPDM roofing Charlotte NC' },
  { url: '/commercial-roofing-mooresville-nc', title: 'Commercial Roofing Mooresville NC', keyword: 'commercial roofing Mooresville NC' },
  { url: '/new-construction-roofing-charlotte-nc', title: 'New Construction Roofing Charlotte NC', keyword: 'new construction roofing Charlotte NC' },
  { url: '/leaking-roof-repair-charlotte-nc', title: 'Leaking Roof Repair Charlotte NC | Stop Leaks Fast', keyword: 'leaking roof repair Charlotte NC' },
  { url: '/ice-dam-prevention-charlotte-nc', title: 'Ice Dam Prevention Charlotte NC | Winter Roofing', keyword: 'ice dam prevention Charlotte NC' },
  { url: '/roofing-rock-hill-sc', title: 'Roofing Rock Hill SC | York County', keyword: 'roofing Rock Hill SC' },
  { url: '/storm-damage-roof-repair-huntersville-nc', title: 'Storm Damage Roof Repair Huntersville NC', keyword: 'storm damage roof repair Huntersville NC' },
  { url: '/emergency-roof-repair-huntersville-nc', title: 'Emergency Roof Repair Huntersville NC | 24/7', keyword: 'emergency roof repair Huntersville NC' },
  { url: '/gutter-installation-cornelius-nc', title: 'Gutter Installation Cornelius NC | Lake Norman', keyword: 'gutter installation Cornelius NC' },
  { url: '/roofing-ballantyne-charlotte-nc', title: 'Roofing Ballantyne Charlotte NC | South Charlotte', keyword: 'roofing Ballantyne Charlotte NC' },
  { url: '/emergency-tarp-service-charlotte-nc', title: 'Emergency Tarp Service Charlotte NC | Storm Response', keyword: 'emergency tarp service Charlotte NC' },
  { url: '/roofing-plaza-midwood-charlotte-nc', title: 'Roofing Plaza Midwood Charlotte NC', keyword: 'roofing Plaza Midwood Charlotte NC' },
  { url: '/roof-coating-charlotte-nc', title: 'Roof Coating Charlotte NC | Extend Roof Life', keyword: 'roof coating Charlotte NC' },
  { url: '/metal-roofing-huntersville-nc', title: 'Metal Roofing Huntersville NC | Standing Seam', keyword: 'metal roofing Huntersville NC' },
  { url: '/insurance-claim-roofing-charlotte-nc', title: 'Insurance Claim Roofing Charlotte NC | We Help', keyword: 'insurance claim roofing Charlotte NC' },
  { url: '/flat-roof-repair-charlotte-nc', title: 'Flat Roof Repair Charlotte NC | Commercial & Residential', keyword: 'flat roof repair Charlotte NC' },
  { url: '/gaf-timberline-shingles-charlotte-nc', title: 'GAF Timberline Shingles Charlotte NC | HDZ', keyword: 'GAF Timberline shingles Charlotte NC' },
  { url: '/roofing-southpark-charlotte-nc', title: 'Roofing SouthPark Charlotte NC', keyword: 'roofing SouthPark Charlotte NC' },
  { url: '/chimney-flashing-repair-charlotte-nc', title: 'Chimney Flashing Repair Charlotte NC | Stop Leaks', keyword: 'chimney flashing repair Charlotte NC' },
  { url: '/velux-skylights-charlotte-nc', title: 'VELUX Skylights Charlotte NC | Authorized Dealer', keyword: 'VELUX skylights Charlotte NC' },
  { url: '/roofers-charlotte-nc', title: 'Roofers Charlotte NC | Licensed & Insured', keyword: 'roofers Charlotte NC' },
  { url: '/roofing-charlotte-nc', title: 'Roofing Charlotte NC | Top Rated Contractor', keyword: 'roofing Charlotte NC' },
  { url: '/roof-repair-charlotte-nc', title: 'Roof Repair Charlotte NC | Fast & Affordable', keyword: 'roof repair Charlotte NC' },
  { url: '/roof-replacement-charlotte-nc', title: 'Roof Replacement Charlotte NC | Free Estimates', keyword: 'roof replacement Charlotte NC' },
  { url: '/emergency-roof-repair-charlotte-nc', title: 'Emergency Roof Repair Charlotte NC | 24/7 Service', keyword: 'emergency roof repair Charlotte NC' },
  { url: '/storm-damage-roof-repair-charlotte-nc', title: 'Storm Damage Roof Repair Charlotte NC', keyword: 'storm damage roof repair Charlotte NC' },
  { url: '/roofing-company-charlotte-nc', title: 'Roofing Company Charlotte NC | Best Roofing Now', keyword: 'roofing company Charlotte NC' },
  { url: '/roofing-contractor-charlotte-nc', title: 'Roofing Contractor Charlotte NC | Licensed', keyword: 'roofing contractor Charlotte NC' },
  { url: '/commercial-roofing-charlotte-nc', title: 'Commercial Roofing Charlotte NC | Business Roofs', keyword: 'commercial roofing Charlotte NC' },
  { url: '/best-roofers-charlotte-nc', title: 'Best Roofers Charlotte NC | Top Rated', keyword: 'best roofers Charlotte NC' },
  { url: '/affordable-roofing-charlotte-nc', title: 'Affordable Roofing Charlotte NC | Budget Friendly', keyword: 'affordable roofing Charlotte NC' },
  { url: '/new-roof-installation-charlotte-nc', title: 'New Roof Installation Charlotte NC', keyword: 'new roof installation Charlotte NC' },
  { url: '/asphalt-shingle-roofing-charlotte-nc', title: 'Asphalt Shingle Roofing Charlotte NC', keyword: 'asphalt shingle roofing Charlotte NC' },
  { url: '/tile-roofing-charlotte-nc', title: 'Tile Roofing Charlotte NC | Clay & Concrete', keyword: 'tile roofing Charlotte NC' },
  { url: '/slate-roofing-charlotte-nc', title: 'Slate Roofing Charlotte NC | Natural Stone', keyword: 'slate roofing Charlotte NC' },
  { url: '/flat-roof-contractors-charlotte-nc', title: 'Flat Roof Contractors Charlotte NC', keyword: 'flat roof contractors Charlotte NC' },
  { url: '/roof-financing-charlotte-nc', title: 'Roof Financing Charlotte NC | Easy Payments', keyword: 'roof financing Charlotte NC' },
  { url: '/gutter-repair-charlotte-nc', title: 'Gutter Repair Charlotte NC | Fix Leaks', keyword: 'gutter repair Charlotte NC' },
  { url: '/fascia-soffit-repair-charlotte-nc', title: 'Fascia Soffit Repair Charlotte NC', keyword: 'fascia soffit repair Charlotte NC' },
  { url: '/ridge-vent-installation-charlotte-nc', title: 'Ridge Vent Installation Charlotte NC', keyword: 'ridge vent installation Charlotte NC' },
  { url: '/roof-flashing-repair-charlotte-nc', title: 'Roof Flashing Repair Charlotte NC', keyword: 'roof flashing repair Charlotte NC' },
  { url: '/roof-valley-repair-charlotte-nc', title: 'Roof Valley Repair Charlotte NC', keyword: 'roof valley repair Charlotte NC' },
  { url: '/moss-algae-removal-roof-charlotte-nc', title: 'Moss & Algae Removal Roof Charlotte NC', keyword: 'moss algae removal roof Charlotte NC' },
  { url: '/tree-damage-roof-repair-charlotte-nc', title: 'Tree Damage Roof Repair Charlotte NC', keyword: 'tree damage roof repair Charlotte NC' },
  { url: '/hurricane-damage-roof-repair-charlotte-nc', title: 'Hurricane Damage Roof Repair Charlotte NC', keyword: 'hurricane damage roof repair Charlotte NC' },
  { url: '/spring-roof-inspection-charlotte-nc', title: 'Spring Roof Inspection Charlotte NC', keyword: 'spring roof inspection Charlotte NC' },
  { url: '/summer-roof-maintenance-charlotte-nc', title: 'Summer Roof Maintenance Charlotte NC', keyword: 'summer roof maintenance Charlotte NC' },
  { url: '/winter-roof-repair-charlotte-nc', title: 'Winter Roof Repair Charlotte NC', keyword: 'winter roof repair Charlotte NC' },
  { url: '/certainteed-shingles-charlotte-nc', title: 'CertainTeed Shingles Charlotte NC', keyword: 'CertainTeed shingles Charlotte NC' },
  { url: '/leafguard-gutters-charlotte-nc', title: 'LeafGuard Gutters Charlotte NC', keyword: 'LeafGuard gutters Charlotte NC' },
  { url: '/veteran-owned-roofing-company-charlotte-nc', title: 'Veteran Owned Roofing Company Charlotte NC', keyword: 'veteran owned roofing company Charlotte NC' },
  { url: '/church-roofing-charlotte-nc', title: 'Church Roofing Charlotte NC | Religious Buildings', keyword: 'church roofing Charlotte NC' },
  { url: '/warehouse-roofing-charlotte-nc', title: 'Warehouse Roofing Charlotte NC | Industrial', keyword: 'warehouse roofing Charlotte NC' },
  { url: '/apartment-roofing-charlotte-nc', title: 'Apartment Roofing Charlotte NC | Multi-Family', keyword: 'apartment roofing Charlotte NC' },
  { url: '/condo-roofing-charlotte-nc', title: 'Condo Roofing Charlotte NC | HOA Approved', keyword: 'condo roofing Charlotte NC' },
  { url: '/townhouse-roofing-charlotte-nc', title: 'Townhouse Roofing Charlotte NC', keyword: 'townhouse roofing Charlotte NC' },
  { url: '/industrial-roofing-charlotte-nc', title: 'Industrial Roofing Charlotte NC', keyword: 'industrial roofing Charlotte NC' },
  // Additional city-specific pages
  { url: '/roofers-huntersville-nc', title: 'Roofers Huntersville NC | Local Contractors', keyword: 'roofers Huntersville NC' },
  { url: '/roofers-mooresville-nc', title: 'Roofers Mooresville NC | Lake Norman Area', keyword: 'roofers Mooresville NC' },
  { url: '/roofers-concord-nc', title: 'Roofers Concord NC | Cabarrus County', keyword: 'roofers Concord NC' },
  { url: '/roofing-huntersville-nc', title: 'Roofing Huntersville NC | North Charlotte', keyword: 'roofing Huntersville NC' },
  { url: '/roofing-mooresville-nc', title: 'Roofing Mooresville NC | Iredell County', keyword: 'roofing Mooresville NC' },
  { url: '/roofing-concord-nc', title: 'Roofing Concord NC | Cabarrus County', keyword: 'roofing Concord NC' },
  { url: '/roofing-matthews-nc', title: 'Roofing Matthews NC | East Charlotte', keyword: 'roofing Matthews NC' },
  { url: '/roofing-mint-hill-nc', title: 'Roofing Mint Hill NC | East Mecklenburg', keyword: 'roofing Mint Hill NC' },
  { url: '/roofing-pineville-nc', title: 'Roofing Pineville NC | South Charlotte', keyword: 'roofing Pineville NC' },
  { url: '/roofing-indian-trail-nc', title: 'Roofing Indian Trail NC | Union County', keyword: 'roofing Indian Trail NC' },
  { url: '/roofing-gastonia-nc', title: 'Roofing Gastonia NC | Gaston County', keyword: 'roofing Gastonia NC' },
  { url: '/roofing-cornelius-nc', title: 'Roofing Cornelius NC | Lake Norman', keyword: 'roofing Cornelius NC' },
  { url: '/roofing-davidson-nc', title: 'Roofing Davidson NC | Lake Norman', keyword: 'roofing Davidson NC' },
  { url: '/roof-repair-matthews-nc', title: 'Roof Repair Matthews NC', keyword: 'roof repair Matthews NC' },
  { url: '/roof-repair-concord-nc', title: 'Roof Repair Concord NC', keyword: 'roof repair Concord NC' },
  { url: '/roof-repair-pineville-nc', title: 'Roof Repair Pineville NC', keyword: 'roof repair Pineville NC' },
  { url: '/roof-replacement-concord-nc', title: 'Roof Replacement Concord NC', keyword: 'roof replacement Concord NC' },
  { url: '/roof-replacement-gastonia-nc', title: 'Roof Replacement Gastonia NC', keyword: 'roof replacement Gastonia NC' },
  { url: '/roof-inspection-mooresville-nc', title: 'Roof Inspection Mooresville NC', keyword: 'roof inspection Mooresville NC' },
  { url: '/metal-roofing-mooresville-nc', title: 'Metal Roofing Mooresville NC', keyword: 'metal roofing Mooresville NC' },
  { url: '/gutter-installation-huntersville-nc', title: 'Gutter Installation Huntersville NC', keyword: 'gutter installation Huntersville NC' },
  // Neighborhood-specific pages
  { url: '/roofing-myers-park-charlotte-nc', title: 'Roofing Myers Park Charlotte NC', keyword: 'roofing Myers Park Charlotte NC' },
  { url: '/roofing-dilworth-charlotte-nc', title: 'Roofing Dilworth Charlotte NC', keyword: 'roofing Dilworth Charlotte NC' },
  { url: '/roofing-noda-charlotte-nc', title: 'Roofing NoDa Charlotte NC', keyword: 'roofing NoDa Charlotte NC' },
  { url: '/roofing-university-city-charlotte-nc', title: 'Roofing University City Charlotte NC', keyword: 'roofing University City Charlotte NC' },
  { url: '/roofing-steele-creek-charlotte-nc', title: 'Roofing Steele Creek Charlotte NC', keyword: 'roofing Steele Creek Charlotte NC' },
];

// Services
const SERVICES = [
  { slug: 'residential-roofing', title: 'Residential Roofing Services Charlotte NC', keyword: 'residential roofing Charlotte' },
  { slug: 'commercial-roofing', title: 'Commercial Roofing Services Charlotte NC', keyword: 'commercial roofing Charlotte' },
  { slug: 'roof-repair', title: 'Roof Repair Services Charlotte NC', keyword: 'roof repair Charlotte' },
  { slug: 'roof-replacement', title: 'Roof Replacement Services Charlotte NC', keyword: 'roof replacement Charlotte' },
  { slug: 'roof-inspection', title: 'Roof Inspection Services Charlotte NC', keyword: 'roof inspection Charlotte' },
  { slug: 'emergency-roofing', title: 'Emergency Roofing Services Charlotte NC', keyword: 'emergency roofing Charlotte' },
  { slug: 'storm-damage', title: 'Storm Damage Repair Charlotte NC', keyword: 'storm damage repair Charlotte' },
  { slug: 'gutters', title: 'Gutter Installation & Repair Charlotte NC', keyword: 'gutters Charlotte' },
  { slug: 'siding', title: 'Siding Installation Charlotte NC', keyword: 'siding Charlotte' },
  { slug: 'skylights', title: 'Skylight Installation Charlotte NC', keyword: 'skylights Charlotte' },
  { slug: 'ventilation', title: 'Roof Ventilation Charlotte NC', keyword: 'roof ventilation Charlotte' },
  { slug: 'insulation', title: 'Attic Insulation Charlotte NC', keyword: 'attic insulation Charlotte' },
  { slug: 'metal-roofing', title: 'Metal Roofing Installation Charlotte NC', keyword: 'metal roofing Charlotte' },
  { slug: 'flat-roofing', title: 'Flat Roofing Charlotte NC', keyword: 'flat roofing Charlotte' },
  { slug: 'tile-roofing', title: 'Tile Roofing Charlotte NC', keyword: 'tile roofing Charlotte' },
  { slug: 'slate-roofing', title: 'Slate Roofing Charlotte NC', keyword: 'slate roofing Charlotte' },
  { slug: 'shingle-roofing', title: 'Shingle Roofing Charlotte NC', keyword: 'shingle roofing Charlotte' },
  { slug: 'roof-maintenance', title: 'Roof Maintenance Charlotte NC', keyword: 'roof maintenance Charlotte' },
  { slug: 'roof-cleaning', title: 'Roof Cleaning Charlotte NC', keyword: 'roof cleaning Charlotte' },
  { slug: 'gutter-guards', title: 'Gutter Guards Charlotte NC', keyword: 'gutter guards Charlotte' },
  { slug: 'fascia-soffit', title: 'Fascia & Soffit Repair Charlotte NC', keyword: 'fascia soffit Charlotte' },
  { slug: 'chimney-repair', title: 'Chimney Repair Charlotte NC', keyword: 'chimney repair Charlotte' },
  { slug: 'flashing-repair', title: 'Roof Flashing Repair Charlotte NC', keyword: 'flashing repair Charlotte' },
  { slug: 'roof-coating', title: 'Roof Coating Charlotte NC', keyword: 'roof coating Charlotte' },
  { slug: 'insurance-claims', title: 'Insurance Claim Roofing Charlotte NC', keyword: 'insurance claim roofing Charlotte' },
];

// Materials, Brands, etc.
const MATERIALS = [
  { slug: 'asphalt-shingles', name: 'Asphalt Shingles' },
  { slug: 'metal-roofing', name: 'Metal Roofing' },
  { slug: 'tile-roofing', name: 'Tile Roofing' },
  { slug: 'slate-roofing', name: 'Slate Roofing' },
  { slug: 'wood-shakes', name: 'Wood Shakes' },
  { slug: 'flat-roofing', name: 'Flat Roofing' },
];

const BRANDS = [
  { slug: 'gaf', name: 'GAF' },
  { slug: 'certainteed', name: 'CertainTeed' },
  { slug: 'owens-corning', name: 'Owens Corning' },
  { slug: 'atlas', name: 'Atlas' },
  { slug: 'tamko', name: 'TAMKO' },
];

const ROOF_TYPES = [
  { slug: 'gable-roof', name: 'Gable Roof' },
  { slug: 'hip-roof', name: 'Hip Roof' },
  { slug: 'flat-roof', name: 'Flat Roof' },
  { slug: 'mansard-roof', name: 'Mansard Roof' },
  { slug: 'gambrel-roof', name: 'Gambrel Roof' },
  { slug: 'shed-roof', name: 'Shed Roof' },
];

const GUIDES = [
  { slug: 'roof-replacement-cost', name: 'Roof Replacement Cost Guide' },
  { slug: 'signs-you-need-new-roof', name: 'Signs You Need a New Roof' },
  { slug: 'how-long-does-roof-last', name: 'How Long Does a Roof Last' },
  { slug: 'choosing-roofing-contractor', name: 'Choosing a Roofing Contractor' },
  { slug: 'roof-maintenance-tips', name: 'Roof Maintenance Tips' },
  { slug: 'insurance-claims-guide', name: 'Insurance Claims Guide' },
];

const SEASONAL = [
  { slug: 'spring-roofing', name: 'Spring Roofing' },
  { slug: 'summer-roofing', name: 'Summer Roofing' },
  { slug: 'fall-roofing', name: 'Fall Roofing' },
  { slug: 'winter-roofing', name: 'Winter Roofing' },
];

const PROBLEMS = [
  { slug: 'roof-leak-repair', name: 'Roof Leak Repair' },
  { slug: 'storm-damage-repair', name: 'Storm Damage Repair' },
  { slug: 'missing-shingles', name: 'Missing Shingles' },
  { slug: 'sagging-roof', name: 'Sagging Roof' },
  { slug: 'poor-ventilation', name: 'Poor Ventilation' },
  { slug: 'ice-dams', name: 'Ice Dams' },
];

const COMPARISONS = [
  { slug: 'metal-vs-shingles', name: 'Metal vs Shingles' },
  { slug: 'tile-vs-shingles', name: 'Tile vs Shingles' },
  { slug: 'metal-vs-tile', name: 'Metal vs Tile' },
  { slug: 'gaf-vs-certainteed', name: 'GAF vs CertainTeed' },
];

const COMMERCIAL_SYSTEMS = [
  { slug: 'tpo-roofing', name: 'TPO Roofing' },
  { slug: 'epdm-roofing', name: 'EPDM Roofing' },
  { slug: 'pvc-roofing', name: 'PVC Roofing' },
  { slug: 'built-up-roofing', name: 'Built-Up Roofing' },
  { slug: 'modified-bitumen', name: 'Modified Bitumen' },
];

const PRODUCTS = [
  { slug: 'gaf-timberline-hdz', name: 'GAF Timberline HDZ' },
  { slug: 'gaf-timberline-ultra-hd', name: 'GAF Timberline Ultra HD' },
  { slug: 'gaf-camelot-ii', name: 'GAF Camelot II' },
  { slug: 'certainteed-landmark', name: 'CertainTeed Landmark' },
  { slug: 'certainteed-landmark-pro', name: 'CertainTeed Landmark Pro' },
  { slug: 'certainteed-presidential', name: 'CertainTeed Presidential' },
  { slug: 'owens-corning-duration', name: 'Owens Corning Duration' },
  { slug: 'owens-corning-trudefinition', name: 'Owens Corning TruDefinition' },
  { slug: 'atlas-pinnacle-pristine', name: 'Atlas Pinnacle Pristine' },
  { slug: 'tamko-heritage', name: 'TAMKO Heritage' },
  { slug: 'velux-skylights', name: 'VELUX Skylights' },
  { slug: 'sun-tunnel-skylights', name: 'Sun Tunnel Skylights' },
  { slug: 'leafguard-gutters', name: 'LeafGuard Gutters' },
  { slug: 'gutter-helmet', name: 'Gutter Helmet' },
  { slug: 'standing-seam-metal', name: 'Standing Seam Metal' },
];

function escapeCSV(str) {
  if (!str) return '';
  str = String(str);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

async function main() {
  const rows = [];

  // Add header
  rows.push('URL,Title,Focus Keyword');

  // 1. Static pages
  console.log('Adding static pages...');
  for (const page of STATIC_PAGES) {
    rows.push(`${escapeCSV(page.url)},${escapeCSV(page.title)},${escapeCSV(page.keyword)}`);
  }

  // 2. SEO Landing pages
  console.log('Adding SEO landing pages...');
  for (const page of SEO_LANDING_PAGES) {
    rows.push(`${escapeCSV(page.url)},${escapeCSV(page.title)},${escapeCSV(page.keyword)}`);
  }

  // 3. Services
  console.log('Adding service pages...');
  for (const svc of SERVICES) {
    rows.push(`/services/${svc.slug},${escapeCSV(svc.title)},${escapeCSV(svc.keyword)}`);
  }

  // 4. Location pages
  console.log('Adding location pages...');
  for (const loc of LOCATIONS) {
    const title = `Roofing Services ${loc.city} ${loc.state} | Best Roofing Now`;
    const keyword = `roofing ${loc.city} ${loc.state}`;
    rows.push(`/locations/${loc.slug},${escapeCSV(title)},${escapeCSV(keyword)}`);
  }

  // 5. Neighborhood pages (Charlotte)
  console.log('Adding neighborhood pages...');
  for (const hood of CHARLOTTE_NEIGHBORHOODS) {
    const name = hood.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const title = `Roofing ${name} Charlotte NC | Best Roofing Now`;
    const keyword = `roofing ${name} Charlotte NC`;
    rows.push(`/neighborhoods/${hood},${escapeCSV(title)},${escapeCSV(keyword)}`);

    // Also add location/neighborhood combo
    const comboTitle = `Roofing Services ${name} | Charlotte NC`;
    rows.push(`/locations/charlotte-nc/${hood},${escapeCSV(comboTitle)},${escapeCSV(keyword)}`);
  }

  // 6. Materials pages
  console.log('Adding material pages...');
  for (const mat of MATERIALS) {
    const title = `${mat.name} Roofing Charlotte NC | Best Roofing Now`;
    const keyword = `${mat.name.toLowerCase()} Charlotte NC`;
    rows.push(`/materials/${mat.slug},${escapeCSV(title)},${escapeCSV(keyword)}`);
  }

  // 7. Brands pages
  console.log('Adding brand pages...');
  for (const brand of BRANDS) {
    const title = `${brand.name} Roofing Charlotte NC | Certified Installer`;
    const keyword = `${brand.name} roofing Charlotte NC`;
    rows.push(`/brands/${brand.slug},${escapeCSV(title)},${escapeCSV(keyword)}`);
  }

  // 8. Roof types
  console.log('Adding roof type pages...');
  for (const type of ROOF_TYPES) {
    const title = `${type.name} Installation & Repair Charlotte NC`;
    const keyword = `${type.name.toLowerCase()} Charlotte NC`;
    rows.push(`/roof-types/${type.slug},${escapeCSV(title)},${escapeCSV(keyword)}`);
  }

  // 9. Guides
  console.log('Adding guide pages...');
  for (const guide of GUIDES) {
    const title = `${guide.name} | Best Roofing Now Charlotte NC`;
    const keyword = guide.name.toLowerCase();
    rows.push(`/guides/${guide.slug},${escapeCSV(title)},${escapeCSV(keyword)}`);
  }

  // 10. Seasonal
  console.log('Adding seasonal pages...');
  for (const season of SEASONAL) {
    const title = `${season.name} Services Charlotte NC | Best Roofing Now`;
    const keyword = `${season.name.toLowerCase()} Charlotte NC`;
    rows.push(`/seasonal/${season.slug},${escapeCSV(title)},${escapeCSV(keyword)}`);
  }

  // 11. Problems
  console.log('Adding problem pages...');
  for (const prob of PROBLEMS) {
    const title = `${prob.name} Charlotte NC | Best Roofing Now`;
    const keyword = `${prob.name.toLowerCase()} Charlotte NC`;
    rows.push(`/problems/${prob.slug},${escapeCSV(title)},${escapeCSV(keyword)}`);
  }

  // 12. Compare pages
  console.log('Adding comparison pages...');
  for (const comp of COMPARISONS) {
    const title = `${comp.name} Comparison | Best Roofing Now Charlotte NC`;
    const keyword = comp.name.toLowerCase();
    rows.push(`/compare/${comp.slug},${escapeCSV(title)},${escapeCSV(keyword)}`);
  }

  // 13. Commercial systems
  console.log('Adding commercial system pages...');
  for (const sys of COMMERCIAL_SYSTEMS) {
    const title = `${sys.name} Charlotte NC | Commercial Roofing`;
    const keyword = `${sys.name.toLowerCase()} Charlotte NC`;
    rows.push(`/commercial-systems/${sys.slug},${escapeCSV(title)},${escapeCSV(keyword)}`);
  }

  // 14. Products
  console.log('Adding product pages...');
  for (const prod of PRODUCTS) {
    const title = `${prod.name} Charlotte NC | Best Roofing Now`;
    const keyword = `${prod.name} Charlotte NC`;
    rows.push(`/products/${prod.slug},${escapeCSV(title)},${escapeCSV(keyword)}`);
  }

  // 15. Blog posts from WordPress
  const blogPosts = await fetchAllBlogPosts();
  console.log(`Adding ${blogPosts.length} blog posts...`);
  for (const post of blogPosts) {
    const title = post.yoast_head_json?.title || post.title?.rendered || 'Blog Post';
    const keyword = post.yoast_head_json?.description?.split(' ').slice(0, 4).join(' ') || '';
    rows.push(`/blog/${post.slug},${escapeCSV(title)},${escapeCSV(keyword)}`);
  }

  // 16. Projects
  const projects = await fetchAllProjects();
  console.log(`Adding ${projects.length} project pages...`);
  for (const proj of projects) {
    const title = `${proj.title || proj.projectType || 'Roofing Project'} | ${proj.city || 'Charlotte'} NC`;
    const keyword = `roofing project ${proj.city || 'Charlotte'} NC`;
    const slug = proj._id || proj.id;
    if (slug) {
      rows.push(`/projects/${slug},${escapeCSV(title)},${escapeCSV(keyword)}`);
    }
  }

  // 17. Stories (customer stories by city)
  console.log('Adding story pages...');
  const storyCities = [...new Set(LOCATIONS.map(l => l.slug.replace('-nc', '').replace('-sc', '')))];
  for (const city of storyCities) {
    const cityName = city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const title = `Roofing Stories ${cityName} | Customer Projects`;
    const keyword = `roofing projects ${cityName}`;
    rows.push(`/stories/${city},${escapeCSV(title)},${escapeCSV(keyword)}`);
  }

  // Write to file
  const outputPath = path.join(__dirname, 'all-pages-complete.csv');
  fs.writeFileSync(outputPath, rows.join('\n'), 'utf8');

  console.log(`\n✅ CSV generated: ${outputPath}`);
  console.log(`📊 Total pages: ${rows.length - 1}`);
}

main().catch(console.error);
