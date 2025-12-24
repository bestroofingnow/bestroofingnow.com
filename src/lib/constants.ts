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
    suite: 'Suite 300',
    city: 'Charlotte',
    state: 'NC',
    zip: '28262',
    full: '10130 Mallard Creek Rd Suite 300, Charlotte, NC 28262',
  },
  hours: 'Open 24 Hours',
  founded: '2020',
  googleRating: 5.0,
  googleReviewCount: 61,
  bbbRating: 'A+',
  social: {
    facebook: 'https://www.facebook.com/bestroofingnow',
    instagram: 'https://www.instagram.com/bestroofingnow',
    youtube: 'https://www.youtube.com/bestroofingnow',
    linkedin: 'https://www.linkedin.com/company/bestroofingnow',
    yelp: 'https://www.yelp.com/biz/best-roofing-now-charlotte',
    tiktok: 'https://www.tiktok.com/@bestroofingnow',
  },
  geo: {
    latitude: 35.3107,
    longitude: -80.7497,
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

// Service areas / locations
export const LOCATIONS = [
  { slug: 'charlotte-nc', city: 'Charlotte', state: 'NC', isPrimary: true, county: 'Mecklenburg' },
  { slug: 'concord-nc', city: 'Concord', state: 'NC', isPrimary: false, county: 'Cabarrus' },
  { slug: 'huntersville-nc', city: 'Huntersville', state: 'NC', isPrimary: false, county: 'Mecklenburg' },
  { slug: 'cornelius-nc', city: 'Cornelius', state: 'NC', isPrimary: false, county: 'Mecklenburg' },
  { slug: 'davidson-nc', city: 'Davidson', state: 'NC', isPrimary: false, county: 'Mecklenburg' },
  { slug: 'mooresville-nc', city: 'Mooresville', state: 'NC', isPrimary: false, county: 'Iredell' },
  { slug: 'lake-norman', city: 'Lake Norman', state: 'NC', isPrimary: false, county: 'Multiple' },
  { slug: 'matthews-nc', city: 'Matthews', state: 'NC', isPrimary: false, county: 'Mecklenburg' },
  { slug: 'mint-hill-nc', city: 'Mint Hill', state: 'NC', isPrimary: false, county: 'Mecklenburg' },
  { slug: 'harrisburg-nc', city: 'Harrisburg', state: 'NC', isPrimary: false, county: 'Cabarrus' },
  { slug: 'kannapolis-nc', city: 'Kannapolis', state: 'NC', isPrimary: false, county: 'Cabarrus' },
  { slug: 'gastonia-nc', city: 'Gastonia', state: 'NC', isPrimary: false, county: 'Gaston' },
  { slug: 'pineville-nc', city: 'Pineville', state: 'NC', isPrimary: false, county: 'Mecklenburg' },
  { slug: 'denver-nc', city: 'Denver', state: 'NC', isPrimary: false, county: 'Lincoln' },
  { slug: 'monroe-nc', city: 'Monroe', state: 'NC', isPrimary: false, county: 'Union' },
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
