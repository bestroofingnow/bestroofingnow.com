// Site-wide constants
export const SITE_CONFIG = {
  name: 'Best Roofing Now',
  legalName: 'Best Roofing Now LLC',
  tagline: "Charlotte's Trusted Roofing Company",
  description: 'Family-owned, veteran-operated roofing company serving Charlotte NC and surrounding areas. Roof repair, replacement, inspection, and emergency services. BBB A+ rated.',
  url: 'https://bestroofingnow.com',
  phone: '(704) 605-6047',
  phoneClean: '+17046056047',
  email: 'info@bestroofingnow.com',
  address: {
    street: '10130 Mallard Creek Rd',
    suite: 'Ste 300',
    city: 'Charlotte',
    state: 'NC',
    zip: '28262',
    full: '10130 Mallard Creek Rd Ste 300, Charlotte, NC 28262',
  },
  hours: 'Open 24 Hours',
  founded: '2020',
  googleRating: 5.0,
  googleReviewCount: 62,
  customerCount: 100,
  bbbRating: 'A+',
  social: {
    instagram: 'https://www.instagram.com/bestroofingnow',
    twitter: 'https://x.com/bestroofingnow',
    tiktok: 'https://www.tiktok.com/@bestroofingnow',
    pinterest: 'https://www.pinterest.com/bestroofingnowllc/',
    facebook: 'https://www.facebook.com/bestroofingnowllc',
    youtube: 'https://www.youtube.com/@bestroofingnowllc',
    linkedin: 'https://www.linkedin.com/company/best-roofing-now-llc/',
    linkedinPersonal: 'https://www.linkedin.com/in/bestroofingnow/',
    yelp: 'https://www.yelp.com/biz/best-roofing-now-charlotte-9',
  },
  externalProfiles: {
    // Primary review/map platforms (from Yext)
    googleMaps: 'https://maps.google.com/maps?cid=6441773537007702181',
    appleMaps: 'https://maps.apple.com/place?auid=9396785621220896178',
    bingMaps: 'https://www.bing.com/maps?ss=ypid.YNB21A0F8F3BC68D05&mkt=en-US',
    bbb: 'https://www.bbb.org/us/nc/charlotte/profile/roofing-contractors/best-roofing-now-0473-908763',
    nextdoor: 'https://nextdoor.com/pages/best-roofing-now-llc-charlotte-nc/',
    // Manufacturer certifications
    certainteed: 'https://www.certainteed.com/profiles/bestroofingnowllc',
    // Business directories (from Yext)
    yellowPages: 'https://www.yellowpages.com/charlotte-nc/mip/best-roofing-now-561757375',
    chamberOfCommerce: 'https://www.chamberofcommerce.com/business-directory/north-carolina/charlotte/roofing-contractor/2012422657-best-roofing-now',
    mapquest: 'https://www.mapquest.com/us/north-carolina/best-roofing-now-428835039',
    brownbook: 'https://www.brownbook.net/business/50145694/best-roofing-now/',
    cylex: 'https://www.cylex.us.com/company/best-roofing-now-36772885.html',
    hotfrog: 'https://www.hotfrog.com/company/1439541993828352',
    insiderPages: 'https://www.insiderpages.com/profile/23378802',
    merchantCircle: 'https://www.merchantcircle.com/best-roofing-now-charlotte-nc',
    showMeLocal: 'https://www.showmelocal.com/profile.aspx?bid=24903150',
    tupalo: 'https://www.tupalo.co/charlotte-north-carolina/best-roofing-now-mallard-creek-road-suite-300',
    iGlobal: 'https://www.iglobal.co/united-states/charlotte/best-roofing-now',
    goLocal247: 'https://www.golocal247.com/biz/best-roofing-now/charlotte-nc/YEXT3830788',
    ezLocal: 'http://ezlocal.com/nc/charlotte/roofing-contractor/0916786300',
    citySquares: 'https://citysquares.com/b/best-roofing-now-24693240',
    // Local Charlotte profiles
    lknConnect: 'https://lknconnectcommunity.com/business-listing/best-roofing-now/',
    businessLeaders: 'https://www.businessleadersofcharlotte.com/Sys/PublicProfile/66833596',
    lakeNormanChamber: 'https://business.lakenormanchamber.org/directory/details/best-roofing-now-4317292',
    // Other profiles
    projectMapIt: 'https://projectmapit.com/best-roofing-now-llc',
    digitalJournal: 'https://www.digitaljournal.com/pr/news/revupmarketer/best-roofing-llc-unveils-cost-effective-1822246992.html',
    wheree: 'https://best-roofing-now-llc.wheree.com/',
    roofingDirect: 'https://www.roofingdirect.com/contractors/best-roofing-now-llc/',
  },
  geo: {
    latitude: 35.3388195,
    longitude: -80.7695464,
  },
};

// External widget and API configuration
export const EXTERNAL_RESOURCES = {
  widgets: {
    chatWidget: {
      src: 'https://widgets.leadconnectorhq.com/loader.js',
      resourcesUrl: 'https://widgets.leadconnectorhq.com',
      widgetId: '692def99cf45951b90d25076',
    },
    reviewWidget: 'https://manage.bestroofingnow.com/reputation/widgets/review_widget/YnvUmp9cZqt5xmVLrnoq?widgetId=691f1dc6f44c6d6cf097352c',
    bookingCalendar: 'https://manage.bestroofingnow.com/widget/bookings/brn-roof-consultation',
    instantEstimate: 'https://journeys.demand-iq.com/631cdf2c-ff57-11ef-b232-0a58a9feac02?journeyId=40ddea4c-3884-48bb-9acb-1fcbf409bc60',
  },
  projectMapIt: {
    baseUrl: 'https://projectmapit.com/best-roofing-now-llc/map',
    apiBase: 'https://projectmapit.com/api/v1',
    apiKey: '97151bdc-175f-402a-a56d-cf8e1f80047e',
  },
};

// Brand colors (from current site)
export const BRAND_COLORS = {
  primary: '#1A43AA',      // Primary blue
  primaryDark: '#142F7A',  // Darker blue for hover
  accent: '#C62F2F',       // Red accent/CTA
  accentHover: '#A52525',  // Darker red for hover
  link: '#046bd2',         // Link blue
  dark: '#334155',         // Dark text
  light: '#F0F5FA',        // Light background
  white: '#FFFFFF',
};

// Services offered
export const SERVICES = [
  {
    slug: 'residential-roofing',
    title: 'Residential Roofing',
    shortTitle: 'Residential',
    description: 'Complete residential roofing services including installation, repair, and replacement for homes throughout Charlotte.',
    icon: 'Home',
    keywords: ['residential roofing Charlotte NC', 'home roofing', 'house roof replacement'],
  },
  {
    slug: 'commercial-roofing',
    title: 'Commercial Roofing',
    shortTitle: 'Commercial',
    description: 'Expert commercial roofing solutions for businesses, including flat roofs, TPO, PVC, and metal roofing systems.',
    icon: 'Building2',
    keywords: ['commercial roofing Charlotte NC', 'flat roof contractors', 'business roofing'],
  },
  {
    slug: 'roof-repair',
    title: 'Roof Repair',
    shortTitle: 'Repair',
    description: 'Fast, reliable roof repair services for leaks, storm damage, and general wear. Same-day service available.',
    icon: 'Wrench',
    keywords: ['roof repair Charlotte NC', 'roof leak repair', 'fix my roof'],
  },
  {
    slug: 'roof-replacement',
    title: 'Roof Replacement',
    shortTitle: 'Replacement',
    description: 'Full roof replacement with premium materials from CertainTeed, GAF, and Owens Corning. Financing available.',
    icon: 'RefreshCw',
    keywords: ['roof replacement Charlotte NC', 'new roof cost', 'replace my roof'],
  },
  {
    slug: 'roof-inspection',
    title: 'Roof Inspection',
    shortTitle: 'Inspection',
    description: 'Free comprehensive roof inspections with detailed reports. We help identify issues before they become costly problems.',
    icon: 'Search',
    keywords: ['roof inspection Charlotte NC', 'free roof inspection', 'roof assessment'],
  },
  {
    slug: 'emergency-roofing',
    title: 'Emergency Roofing',
    shortTitle: 'Emergency',
    description: '24/7 emergency roof repair services. Immediate response for storm damage, leaks, and urgent repairs.',
    icon: 'AlertTriangle',
    keywords: ['emergency roof repair Charlotte', '24 hour roofer', 'urgent roof repair'],
  },
  {
    slug: 'storm-damage',
    title: 'Storm Damage & Insurance Claims',
    shortTitle: 'Storm Damage',
    description: 'Expert storm damage assessment and insurance claim assistance. We work directly with your insurance company.',
    icon: 'CloudRain',
    keywords: ['storm damage roof repair Charlotte NC', 'hail damage roof', 'insurance claim roofing'],
  },
  {
    slug: 'gutters',
    title: 'Gutter Services',
    shortTitle: 'Gutters',
    description: 'Complete gutter installation, repair, cleaning, and gutter guard services for residential and commercial properties.',
    icon: 'Droplets',
    keywords: ['gutter installation Charlotte NC', 'gutter repair', 'seamless gutters'],
  },
  {
    slug: 'siding',
    title: 'Siding Services',
    shortTitle: 'Siding',
    description: 'Professional siding installation and repair. Vinyl, fiber cement, and wood siding options available.',
    icon: 'Layers',
    keywords: ['siding Charlotte NC', 'siding replacement', 'vinyl siding'],
  },
];

// Service areas / locations - 50 mile radius around Charlotte NC
// Organized by county for SEO and user navigation
export const LOCATIONS = [
  // === MECKLENBURG COUNTY (Primary) ===
  { slug: 'charlotte-nc', city: 'Charlotte', state: 'NC', isPrimary: true, county: 'Mecklenburg', distance: 0 },
  { slug: 'huntersville-nc', city: 'Huntersville', state: 'NC', isPrimary: false, county: 'Mecklenburg', distance: 13 },
  { slug: 'cornelius-nc', city: 'Cornelius', state: 'NC', isPrimary: false, county: 'Mecklenburg', distance: 18 },
  { slug: 'davidson-nc', city: 'Davidson', state: 'NC', isPrimary: false, county: 'Mecklenburg', distance: 20 },
  { slug: 'matthews-nc', city: 'Matthews', state: 'NC', isPrimary: false, county: 'Mecklenburg', distance: 10 },
  { slug: 'mint-hill-nc', city: 'Mint Hill', state: 'NC', isPrimary: false, county: 'Mecklenburg', distance: 11 },
  { slug: 'pineville-nc', city: 'Pineville', state: 'NC', isPrimary: false, county: 'Mecklenburg', distance: 12 },

  // === CABARRUS COUNTY ===
  { slug: 'concord-nc', city: 'Concord', state: 'NC', isPrimary: false, county: 'Cabarrus', distance: 20 },
  { slug: 'kannapolis-nc', city: 'Kannapolis', state: 'NC', isPrimary: false, county: 'Cabarrus', distance: 22 },
  { slug: 'harrisburg-nc', city: 'Harrisburg', state: 'NC', isPrimary: false, county: 'Cabarrus', distance: 15 },

  // === UNION COUNTY ===
  { slug: 'monroe-nc', city: 'Monroe', state: 'NC', isPrimary: false, county: 'Union', distance: 25 },
  { slug: 'indian-trail-nc', city: 'Indian Trail', state: 'NC', isPrimary: false, county: 'Union', distance: 14 },
  { slug: 'waxhaw-nc', city: 'Waxhaw', state: 'NC', isPrimary: false, county: 'Union', distance: 22 },
  { slug: 'stallings-nc', city: 'Stallings', state: 'NC', isPrimary: false, county: 'Union', distance: 13 },
  { slug: 'weddington-nc', city: 'Weddington', state: 'NC', isPrimary: false, county: 'Union', distance: 15 },
  { slug: 'marvin-nc', city: 'Marvin', state: 'NC', isPrimary: false, county: 'Union', distance: 18 },
  { slug: 'wesley-chapel-nc', city: 'Wesley Chapel', state: 'NC', isPrimary: false, county: 'Union', distance: 16 },

  // === GASTON COUNTY ===
  { slug: 'gastonia-nc', city: 'Gastonia', state: 'NC', isPrimary: false, county: 'Gaston', distance: 20 },
  { slug: 'mt-holly-nc', city: 'Mt Holly', state: 'NC', isPrimary: false, county: 'Gaston', distance: 11 },
  { slug: 'belmont-nc', city: 'Belmont', state: 'NC', isPrimary: false, county: 'Gaston', distance: 10 },
  { slug: 'kings-mountain-nc', city: 'Kings Mountain', state: 'NC', isPrimary: false, county: 'Cleveland', distance: 28 },

  // === IREDELL COUNTY ===
  { slug: 'mooresville-nc', city: 'Mooresville', state: 'NC', isPrimary: false, county: 'Iredell', distance: 26 },
  { slug: 'statesville-nc', city: 'Statesville', state: 'NC', isPrimary: false, county: 'Iredell', distance: 39 },

  // === LINCOLN COUNTY ===
  { slug: 'denver-nc', city: 'Denver', state: 'NC', isPrimary: false, county: 'Lincoln', distance: 22 },
  { slug: 'lincolnton-nc', city: 'Lincolnton', state: 'NC', isPrimary: false, county: 'Lincoln', distance: 29 },

  // === LAKE NORMAN AREA ===
  { slug: 'lake-norman', city: 'Lake Norman', state: 'NC', isPrimary: false, county: 'Multiple', distance: 20 },

  // === CATAWBA COUNTY ===
  { slug: 'hickory-nc', city: 'Hickory', state: 'NC', isPrimary: false, county: 'Catawba', distance: 45 },
  { slug: 'newton-nc', city: 'Newton', state: 'NC', isPrimary: false, county: 'Catawba', distance: 37 },

  // === STANLY COUNTY ===
  { slug: 'albemarle-nc', city: 'Albemarle', state: 'NC', isPrimary: false, county: 'Stanly', distance: 37 },

  // === CLEVELAND COUNTY ===
  { slug: 'shelby-nc', city: 'Shelby', state: 'NC', isPrimary: false, county: 'Cleveland', distance: 39 },

  // === SOUTH CAROLINA (York County) ===
  { slug: 'rock-hill-sc', city: 'Rock Hill', state: 'SC', isPrimary: false, county: 'York', distance: 23 },
  { slug: 'fort-mill-sc', city: 'Fort Mill', state: 'SC', isPrimary: false, county: 'York', distance: 16 },
  { slug: 'tega-cay-sc', city: 'Tega Cay', state: 'SC', isPrimary: false, county: 'York', distance: 18 },

  // === SOUTH CAROLINA (Lancaster County) ===
  { slug: 'indian-land-sc', city: 'Indian Land', state: 'SC', isPrimary: false, county: 'Lancaster', distance: 20 },
  { slug: 'lancaster-sc', city: 'Lancaster', state: 'SC', isPrimary: false, county: 'Lancaster', distance: 35 },
];

// Trust badges and certifications
export const TRUST_BADGES = [
  { name: 'BBB A+ Accredited', image: '/images/badges/bbb-a-plus.svg' },
  { name: 'CertainTeed Certified', image: '/images/badges/certainteed.svg' },
  { name: 'GAF Certified', image: '/images/badges/gaf.svg' },
  { name: 'Owens Corning Preferred', image: '/images/badges/owens-corning.svg' },
  { name: 'Angi Super Service Award', image: '/images/badges/angi.svg' },
  { name: 'Veteran Owned', image: '/images/badges/veteran-owned.svg' },
];

// Roofing Materials for SEO pages
export const ROOFING_MATERIALS = [
  {
    slug: 'asphalt-shingles',
    name: 'Asphalt Shingles',
    shortName: 'Asphalt',
    description: 'The most popular roofing material in America, asphalt shingles offer excellent value, durability, and a wide range of styles and colors.',
    benefits: [
      'Most affordable roofing option',
      'Wide variety of colors and styles',
      '20-30 year lifespan with proper maintenance',
      'Easy to install and repair',
      'Good wind and impact resistance',
    ],
    lifespan: '20-30 years',
    costRange: '$3.50-$5.50 per sq ft installed',
    bestFor: 'Budget-conscious homeowners seeking reliable protection',
    keywords: ['asphalt shingles Charlotte NC', 'architectural shingles', '3-tab shingles', 'asphalt roof cost'],
  },
  {
    slug: 'metal-roofing',
    name: 'Metal Roofing',
    shortName: 'Metal',
    description: 'Durable, energy-efficient, and long-lasting, metal roofs are increasingly popular for both residential and commercial properties in Charlotte.',
    benefits: [
      '50+ year lifespan',
      'Excellent energy efficiency',
      'Fire and wind resistant',
      'Low maintenance',
      'Eco-friendly and recyclable',
    ],
    lifespan: '40-70 years',
    costRange: '$7-$14 per sq ft installed',
    bestFor: 'Homeowners seeking long-term value and energy savings',
    keywords: ['metal roofing Charlotte NC', 'standing seam metal roof', 'metal roof cost', 'steel roofing'],
  },
  {
    slug: 'tile-roofing',
    name: 'Tile Roofing',
    shortName: 'Tile',
    description: 'Clay and concrete tile roofs offer Mediterranean elegance and exceptional durability, popular in upscale Charlotte neighborhoods.',
    benefits: [
      '50-100 year lifespan',
      'Fire resistant',
      'Excellent insulation',
      'Timeless aesthetic appeal',
      'Low maintenance',
    ],
    lifespan: '50-100 years',
    costRange: '$10-$18 per sq ft installed',
    bestFor: 'Luxury homes and Mediterranean-style architecture',
    keywords: ['tile roofing Charlotte NC', 'clay tile roof', 'concrete tile roof', 'Spanish tile roofing'],
  },
  {
    slug: 'slate-roofing',
    name: 'Slate Roofing',
    shortName: 'Slate',
    description: 'Natural slate is the premium choice for discerning homeowners, offering unmatched beauty and a lifespan measured in centuries.',
    benefits: [
      '75-200 year lifespan',
      'Natural beauty and elegance',
      'Fire and weather resistant',
      'Increases home value',
      'Environmentally sustainable',
    ],
    lifespan: '75-200 years',
    costRange: '$15-$30 per sq ft installed',
    bestFor: 'Historic homes and luxury properties',
    keywords: ['slate roofing Charlotte NC', 'natural slate roof', 'slate roof installation', 'slate roof repair'],
  },
  {
    slug: 'flat-roofing',
    name: 'Flat Roofing (TPO, EPDM, PVC)',
    shortName: 'Flat Roof',
    description: 'Commercial and modern residential flat roofing systems including TPO, EPDM rubber, and PVC membranes.',
    benefits: [
      'Cost-effective for large areas',
      'Easy maintenance and inspection',
      'Energy-efficient options available',
      'Ideal for rooftop equipment',
      'Multiple material options',
    ],
    lifespan: '20-30 years',
    costRange: '$4-$10 per sq ft installed',
    bestFor: 'Commercial buildings and modern homes with flat roofs',
    keywords: ['flat roof Charlotte NC', 'TPO roofing', 'EPDM rubber roof', 'commercial flat roof'],
  },
  {
    slug: 'cedar-shake',
    name: 'Cedar Shake & Shingle',
    shortName: 'Cedar',
    description: 'Natural cedar roofing offers rustic beauty and excellent insulation, perfect for traditional and craftsman-style homes.',
    benefits: [
      'Natural beauty that ages gracefully',
      'Excellent natural insulation',
      'Eco-friendly and sustainable',
      'Unique character for each home',
      '30-40 year lifespan with maintenance',
    ],
    lifespan: '30-40 years',
    costRange: '$8-$14 per sq ft installed',
    bestFor: 'Craftsman, rustic, and traditional home styles',
    keywords: ['cedar shake roofing Charlotte NC', 'wood shake roof', 'cedar shingle roof', 'natural wood roofing'],
  },
];

// Roofing Comparisons for SEO pages
export const ROOFING_COMPARISONS = [
  {
    slug: 'metal-vs-shingles',
    title: 'Metal Roofing vs Asphalt Shingles',
    description: 'Compare metal roofing and asphalt shingles to determine which is best for your Charlotte home.',
    material1: 'metal-roofing',
    material2: 'asphalt-shingles',
    keywords: ['metal vs shingle roof', 'metal roof vs asphalt', 'which roof is better'],
  },
  {
    slug: 'tile-vs-shingles',
    title: 'Tile Roofing vs Asphalt Shingles',
    description: 'Compare tile roofing and asphalt shingles for durability, cost, and aesthetic appeal.',
    material1: 'tile-roofing',
    material2: 'asphalt-shingles',
    keywords: ['tile vs shingle roof', 'tile roof vs asphalt', 'tile roofing cost comparison'],
  },
  {
    slug: 'metal-vs-tile',
    title: 'Metal Roofing vs Tile Roofing',
    description: 'Compare two premium roofing options: metal and tile roofing for longevity and value.',
    material1: 'metal-roofing',
    material2: 'tile-roofing',
    keywords: ['metal vs tile roof', 'premium roofing comparison', 'best long-lasting roof'],
  },
  {
    slug: 'gaf-vs-certainteed',
    title: 'GAF vs CertainTeed Shingles',
    description: 'Compare the two leading shingle manufacturers to choose the best brand for your roof.',
    material1: 'gaf',
    material2: 'certainteed',
    keywords: ['GAF vs CertainTeed', 'best shingle brand', 'shingle brand comparison'],
  },
];

// Roofing Guides for SEO pages
export const ROOFING_GUIDES = [
  {
    slug: 'roof-replacement-cost',
    title: 'Roof Replacement Cost Guide 2025',
    shortTitle: 'Cost Guide',
    description: 'Complete guide to roof replacement costs in Charlotte NC. Learn what factors affect pricing and how to budget for your new roof.',
    keywords: ['roof replacement cost Charlotte', 'new roof cost NC', 'roof replacement estimate', 'how much does roof cost'],
  },
  {
    slug: 'signs-you-need-new-roof',
    title: '10 Signs You Need a New Roof',
    shortTitle: 'Warning Signs',
    description: 'Learn the telltale signs that indicate your roof needs replacement. Don\'t wait until it\'s too late.',
    keywords: ['signs need new roof', 'when to replace roof', 'roof replacement signs', 'roof damage indicators'],
  },
  {
    slug: 'how-long-does-roof-last',
    title: 'How Long Does a Roof Last?',
    shortTitle: 'Roof Lifespan',
    description: 'Understand the lifespan of different roofing materials and factors that affect roof longevity in Charlotte\'s climate.',
    keywords: ['roof lifespan', 'how long does roof last', 'roof age', 'roof replacement timeline'],
  },
  {
    slug: 'roof-maintenance-tips',
    title: 'Essential Roof Maintenance Tips',
    shortTitle: 'Maintenance Tips',
    description: 'Extend your roof\'s lifespan with these essential maintenance tips from Charlotte\'s roofing experts.',
    keywords: ['roof maintenance tips', 'roof care guide', 'extend roof life', 'roof maintenance checklist'],
  },
  {
    slug: 'insurance-claim-guide',
    title: 'Roof Insurance Claim Guide',
    shortTitle: 'Insurance Claims',
    description: 'Step-by-step guide to filing a successful roof insurance claim after storm damage in North Carolina.',
    keywords: ['roof insurance claim', 'storm damage claim', 'roofing insurance process', 'file roof claim'],
  },
  {
    slug: 'choosing-roofing-contractor',
    title: 'How to Choose a Roofing Contractor',
    shortTitle: 'Choosing a Roofer',
    description: 'Essential tips for choosing a reputable roofing contractor in Charlotte. What to look for and red flags to avoid.',
    keywords: ['choose roofing contractor', 'find roofer Charlotte', 'best roofing company', 'roofing contractor tips'],
  },
];

// Roof Types/Styles for SEO pages
export const ROOF_TYPES = [
  {
    slug: 'gable-roof',
    name: 'Gable Roof',
    shortName: 'Gable',
    description: 'The most popular roof style in America, gable roofs feature two sloping sides that meet at a ridge, creating triangular end walls called gables.',
    characteristics: [
      'Two sloping sides meeting at a peak',
      'Excellent water and snow shedding',
      'Good attic ventilation',
      'Cost-effective to build',
      'Easy to construct and maintain',
    ],
    bestFor: 'Most residential homes, especially in areas with rain or snow',
    considerations: 'Can be vulnerable to high winds if not properly braced',
    keywords: ['gable roof Charlotte', 'gable roof repair', 'gable roof replacement', 'triangle roof'],
  },
  {
    slug: 'hip-roof',
    name: 'Hip Roof',
    shortName: 'Hip',
    description: 'Hip roofs have four sloping sides that meet at a ridge, providing excellent stability and wind resistance for Charlotte homes.',
    characteristics: [
      'Four sloping sides',
      'No vertical ends (gables)',
      'Superior wind resistance',
      'Self-bracing design',
      'Excellent for covered porches',
    ],
    bestFor: 'Hurricane and high-wind areas, homes seeking extra stability',
    considerations: 'More complex construction, slightly higher cost than gable',
    keywords: ['hip roof Charlotte', 'hip roof repair', 'hip roof installation', 'four-sided roof'],
  },
  {
    slug: 'flat-roof',
    name: 'Flat Roof',
    shortName: 'Flat',
    description: 'Flat roofs are nearly level with a slight pitch for drainage, common on commercial buildings and modern residential architecture.',
    characteristics: [
      'Minimal slope (1/4" per foot)',
      'Easy access for maintenance',
      'Ideal for rooftop equipment',
      'Modern aesthetic appeal',
      'Usable outdoor space potential',
    ],
    bestFor: 'Commercial buildings, modern homes, rooftop patios or gardens',
    considerations: 'Requires proper drainage and more frequent maintenance',
    keywords: ['flat roof Charlotte', 'flat roof repair', 'commercial flat roof', 'flat roof replacement'],
  },
  {
    slug: 'mansard-roof',
    name: 'Mansard Roof',
    shortName: 'Mansard',
    description: 'A French-inspired four-sided roof with two slopes on each side—the lower slope is steeper, creating additional living space.',
    characteristics: [
      'Double-sloped sides',
      'Maximum attic/living space',
      'Elegant, historic appearance',
      'Flexibility for future additions',
      'Distinctive dormer windows',
    ],
    bestFor: 'Historic homes, those wanting extra living space, French or Victorian architecture',
    considerations: 'Lower slope can collect debris, more expensive to build',
    keywords: ['mansard roof Charlotte', 'mansard roof repair', 'French roof', 'mansard roof restoration'],
  },
  {
    slug: 'gambrel-roof',
    name: 'Gambrel Roof',
    shortName: 'Gambrel',
    description: 'Often called a barn roof, gambrel roofs have two slopes on each side with the lower slope being steeper than the upper.',
    characteristics: [
      'Barn-style appearance',
      'Maximizes upper floor space',
      'Simple two-sided design',
      'Classic American look',
      'Easy to frame',
    ],
    bestFor: 'Farmhouses, colonial-style homes, outbuildings, garages',
    considerations: 'Not ideal for high-wind or heavy snow areas',
    keywords: ['gambrel roof Charlotte', 'barn roof repair', 'gambrel roof replacement', 'Dutch colonial roof'],
  },
  {
    slug: 'shed-roof',
    name: 'Shed Roof',
    shortName: 'Shed',
    description: 'A single-sloped roof that pitches in one direction, popular for additions, porches, and modern architectural designs.',
    characteristics: [
      'Single sloping plane',
      'Simple, modern aesthetic',
      'Excellent water runoff',
      'Easy to construct',
      'Great for solar panels',
    ],
    bestFor: 'Modern homes, additions, covered patios, contemporary architecture',
    considerations: 'May not suit traditional home styles',
    keywords: ['shed roof Charlotte', 'mono-pitch roof', 'single slope roof', 'modern roof design'],
  },
];

// Common Roofing Problems for SEO pages
export const ROOFING_PROBLEMS = [
  {
    slug: 'roof-leak-repair',
    name: 'Roof Leaks',
    shortName: 'Leaks',
    title: 'Roof Leak Repair Charlotte NC',
    description: 'Expert roof leak detection and repair services in Charlotte. We find and fix leaks fast to protect your home from water damage.',
    causes: [
      'Damaged or missing shingles',
      'Cracked flashing around chimneys',
      'Clogged gutters causing backup',
      'Ice dams in winter',
      'Age and wear of roofing materials',
    ],
    signs: [
      'Water stains on ceilings or walls',
      'Dripping water during rain',
      'Mold or mildew in attic',
      'Peeling paint near roofline',
      'Musty odors in upper floors',
    ],
    solution: 'Our leak detection experts use advanced techniques to pinpoint the source of your leak and provide lasting repairs.',
    keywords: ['roof leak repair Charlotte', 'fix roof leak', 'leaking roof', 'water damage roof'],
  },
  {
    slug: 'storm-damage-repair',
    name: 'Storm Damage',
    shortName: 'Storm Damage',
    title: 'Storm Damage Roof Repair Charlotte NC',
    description: 'Fast response storm damage repair and insurance claim assistance. We help Charlotte homeowners recover from hail, wind, and severe weather.',
    causes: [
      'Hail impact damage',
      'High wind uplift',
      'Fallen trees or branches',
      'Flying debris',
      'Tornado or hurricane damage',
    ],
    signs: [
      'Missing or displaced shingles',
      'Dents in metal flashing or vents',
      'Granules in gutters after storms',
      'Visible holes or punctures',
      'Damaged ridge caps',
    ],
    solution: 'We provide emergency tarping, thorough damage assessment, and work directly with your insurance company.',
    keywords: ['storm damage roof repair Charlotte', 'hail damage roof', 'wind damage repair', 'emergency roof repair'],
  },
  {
    slug: 'missing-shingles',
    name: 'Missing Shingles',
    shortName: 'Missing Shingles',
    title: 'Missing Shingle Repair Charlotte NC',
    description: 'Quick replacement of missing or blown-off shingles to prevent water damage and protect your Charlotte home.',
    causes: [
      'High winds',
      'Storm damage',
      'Age and deterioration',
      'Improper installation',
      'Animal damage',
    ],
    signs: [
      'Visible gaps in shingle coverage',
      'Shingles found in yard',
      'Exposed underlayment or decking',
      'Dark patches on roof',
      'Leaks during rain',
    ],
    solution: 'We match your existing shingles for seamless repairs or recommend full replacement if damage is extensive.',
    keywords: ['missing shingles repair Charlotte', 'replace missing shingles', 'blown off shingles', 'shingle replacement'],
  },
  {
    slug: 'sagging-roof',
    name: 'Sagging Roof',
    shortName: 'Sagging',
    title: 'Sagging Roof Repair Charlotte NC',
    description: 'Structural roof repairs for sagging or drooping rooflines. Don\'t ignore this serious warning sign—call the experts.',
    causes: [
      'Water damage to decking',
      'Inadequate structural support',
      'Excessive roof load',
      'Foundation settling',
      'Termite or rot damage',
    ],
    signs: [
      'Visible dip or curve in roofline',
      'Wavy or uneven roof surface',
      'Doors or windows sticking',
      'Cracks in interior walls',
      'Bowing rafters in attic',
    ],
    solution: 'We assess structural integrity and provide comprehensive repairs including decking replacement and reinforcement.',
    keywords: ['sagging roof repair Charlotte', 'roof structural repair', 'drooping roof fix', 'roof deck repair'],
  },
  {
    slug: 'flashing-repair',
    name: 'Damaged Flashing',
    shortName: 'Flashing',
    title: 'Roof Flashing Repair Charlotte NC',
    description: 'Expert flashing repair and replacement around chimneys, vents, skylights, and roof valleys in Charlotte.',
    causes: [
      'Age and corrosion',
      'Storm damage',
      'Improper installation',
      'Thermal expansion/contraction',
      'Sealant failure',
    ],
    signs: [
      'Rust stains on roof',
      'Lifted or bent flashing',
      'Leaks around chimneys or vents',
      'Visible gaps in flashing',
      'Water stains near roof penetrations',
    ],
    solution: 'We install quality aluminum or galvanized steel flashing with proper sealants for lasting protection.',
    keywords: ['roof flashing repair Charlotte', 'chimney flashing', 'vent flashing repair', 'flashing replacement'],
  },
  {
    slug: 'gutter-problems',
    name: 'Gutter Issues',
    shortName: 'Gutters',
    title: 'Gutter Repair & Replacement Charlotte NC',
    description: 'Complete gutter services including repair, replacement, and gutter guard installation for Charlotte homes.',
    causes: [
      'Debris accumulation',
      'Improper slope',
      'Age and corrosion',
      'Storm damage',
      'Ice dam formation',
    ],
    signs: [
      'Overflowing during rain',
      'Sagging or pulling away',
      'Water pooling at foundation',
      'Rust or visible damage',
      'Plants growing in gutters',
    ],
    solution: 'We repair, replace, or install new seamless gutters with optional gutter guards to prevent future clogs.',
    keywords: ['gutter repair Charlotte', 'gutter replacement', 'seamless gutters', 'gutter installation Charlotte'],
  },
];

// Seasonal Roofing Content for SEO pages
export const SEASONAL_ROOFING = [
  {
    slug: 'spring-roofing',
    season: 'Spring',
    title: 'Spring Roofing Services Charlotte NC',
    description: 'Spring is the perfect time for roof inspections and repairs after winter damage. Schedule your spring roofing assessment today.',
    tips: [
      'Schedule post-winter inspection',
      'Check for ice dam damage',
      'Clean gutters of winter debris',
      'Look for missing or damaged shingles',
      'Trim overhanging tree branches',
    ],
    whyNow: 'Spring offers mild temperatures ideal for roof work before summer heat and storm season arrives.',
    keywords: ['spring roof inspection Charlotte', 'spring roofing', 'post-winter roof check', 'spring roof repair'],
  },
  {
    slug: 'summer-roofing',
    season: 'Summer',
    title: 'Summer Roofing Services Charlotte NC',
    description: 'Beat the heat with energy-efficient roofing solutions. Summer is peak season for roof replacements in Charlotte.',
    tips: [
      'Consider cool roof options',
      'Check attic ventilation',
      'Schedule morning installations',
      'Address storm damage quickly',
      'Prepare for hurricane season',
    ],
    whyNow: 'Longer days mean more work hours, and dry conditions make summer ideal for major roofing projects.',
    keywords: ['summer roof replacement Charlotte', 'summer roofing', 'cool roof installation', 'heat-resistant roofing'],
  },
  {
    slug: 'fall-roofing',
    season: 'Fall',
    title: 'Fall Roofing Services Charlotte NC',
    description: 'Prepare your roof for winter with fall maintenance and repairs. Don\'t wait until the first freeze—act now.',
    tips: [
      'Complete repairs before winter',
      'Clean gutters of fallen leaves',
      'Check for proper attic insulation',
      'Inspect and seal flashings',
      'Schedule pre-winter inspection',
    ],
    whyNow: 'Fall temperatures are ideal for shingle installation, and addressing issues now prevents winter emergencies.',
    keywords: ['fall roof maintenance Charlotte', 'fall roofing', 'pre-winter roof prep', 'autumn roof inspection'],
  },
  {
    slug: 'winter-roofing',
    season: 'Winter',
    title: 'Winter Roofing Services Charlotte NC',
    description: 'Emergency roof repairs available all winter. We handle ice dam removal, emergency leaks, and storm damage year-round.',
    tips: [
      'Watch for ice dam formation',
      'Keep gutters clear of ice',
      'Monitor for roof leaks',
      'Check attic for condensation',
      'Know emergency repair contacts',
    ],
    whyNow: 'While not ideal for full replacements, emergency repairs can\'t wait. We provide 24/7 winter emergency services.',
    keywords: ['winter roof repair Charlotte', 'ice dam removal', 'emergency roof repair winter', 'winter roofing'],
  },
];

// FAQ for homepage (subset)
export const HOMEPAGE_FAQ = [
  {
    question: 'How much does a new roof cost in Charlotte, NC?',
    answer: 'The cost of a new roof in Charlotte typically ranges from $8,000 to $25,000+ depending on the size of your home, materials chosen, and complexity of the installation. We offer free inspections and detailed quotes with no hidden fees.',
  },
  {
    question: 'Do you offer free roof inspections?',
    answer: 'Yes! We provide completely free, no-obligation roof inspections. Our certified inspectors will assess your roof\'s condition and provide a detailed report with photos and recommendations.',
  },
  {
    question: 'How long does a roof replacement take?',
    answer: 'Most residential roof replacements are completed in 1-3 days, depending on the size and complexity. We work efficiently while maintaining the highest quality standards and always clean up thoroughly.',
  },
  {
    question: 'Do you help with insurance claims?',
    answer: 'Absolutely. We specialize in storm damage claims and work directly with your insurance company. Our team documents all damage thoroughly and advocates on your behalf to ensure you receive fair compensation.',
  },
  {
    question: 'What roofing materials do you recommend?',
    answer: 'We primarily install CertainTeed, GAF, and Owens Corning shingles—the top brands in the industry. We\'ll help you choose the best option based on your budget, aesthetic preferences, and durability needs.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes, Best Roofing Now is fully licensed, bonded, and insured in North Carolina. We\'re also BBB A+ accredited and certified by major manufacturers including CertainTeed and GAF.',
  },
];
