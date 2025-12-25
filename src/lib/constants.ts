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
  customerCount: 400,
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
    bbb: 'https://www.bbb.org/us/nc/charlotte/profile/roofing-contractors/best-roofing-now-0473-908763',
    certainteed: 'https://www.certainteed.com/profiles/bestroofingnowllc',
    lknConnect: 'https://lknconnectcommunity.com/business-listing/best-roofing-now/',
    businessLeaders: 'https://www.businessleadersofcharlotte.com/Sys/PublicProfile/66833596',
    nextdoor: 'https://nextdoor.com/pages/best-roofing-now-llc-charlotte-nc/',
    projectMapIt: 'https://projectmapit.com/best-roofing-now-llc',
    digitalJournal: 'https://www.digitaljournal.com/pr/news/revupmarketer/best-roofing-llc-unveils-cost-effective-1822246992.html',
    wheree: 'https://best-roofing-now-llc.wheree.com/',
    roofingDirect: 'https://www.roofingdirect.com/contractors/best-roofing-now-llc/',
    mapquest: 'https://www.mapquest.com/us/north-carolina/best-roofing-now-428835039',
    lakeNormanChamber: 'https://business.lakenormanchamber.org/directory/details/best-roofing-now-4317292',
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
    bookingCalendar: 'https://manage.bestroofingnow.com/widget/bookings/bestroofingnowconsultation',
    instantEstimate: 'https://journeys.demand-iq.com/631cdf2c-ff57-11ef-b232-0a58a9feac02?journeyId=40ddea4c-3884-48bb-9acb-1fcbf409bc60',
  },
  projectMapIt: {
    baseUrl: 'https://projectmapit.com/best-roofing-now-llc/map',
    apiBase: 'https://projectmapit.com/api/v1',
    apiKey: '97151bdc-175f-402a-a56d-cf8e1f80047e',
  },
  assets: {
    logo: 'https://storage.googleapis.com/msgsndr/YnvUmp9cZqt5xmVLrnoq/media/6927385cc3c18274f73920b2.png',
    tiktokIcon: 'https://storage.googleapis.com/msgsndr/YnvUmp9cZqt5xmVLrnoq/media/692efc8e4fb26d70315b0277.png',
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

// Service areas / locations with project map links
export const LOCATIONS = [
  { slug: 'charlotte-nc', city: 'Charlotte', state: 'NC', isPrimary: true, county: 'Mecklenburg', mapUrl: 'https://projectmapit.com/best-roofing-now-llc/map?map=6929921876fb8fa56e295536' },
  { slug: 'concord-nc', city: 'Concord', state: 'NC', isPrimary: false, county: 'Cabarrus', mapUrl: 'https://projectmapit.com/best-roofing-now-llc/map?map=692991a9a73e38e6e4a2a783' },
  { slug: 'huntersville-nc', city: 'Huntersville', state: 'NC', isPrimary: false, county: 'Mecklenburg', mapUrl: 'https://projectmapit.com/best-roofing-now-llc/map?map=692991c876fb8fa56e29522f' },
  { slug: 'cornelius-nc', city: 'Cornelius', state: 'NC', isPrimary: false, county: 'Mecklenburg', mapUrl: 'https://projectmapit.com/best-roofing-now-llc/map?map=692991e176fb8fa56e2952dc' },
  { slug: 'davidson-nc', city: 'Davidson', state: 'NC', isPrimary: false, county: 'Mecklenburg', mapUrl: 'https://projectmapit.com/best-roofing-now-llc/map?map=692991eb76fb8fa56e29530f' },
  { slug: 'mooresville-nc', city: 'Mooresville', state: 'NC', isPrimary: false, county: 'Iredell', mapUrl: 'https://projectmapit.com/best-roofing-now-llc/map?map=692991f476fb8fa56e295399' },
  { slug: 'lake-norman', city: 'Lake Norman', state: 'NC', isPrimary: false, county: 'Multiple', mapUrl: 'https://projectmapit.com/best-roofing-now-llc/map?map=6929920c76fb8fa56e2954b8' },
  { slug: 'matthews-nc', city: 'Matthews', state: 'NC', isPrimary: false, county: 'Mecklenburg', mapUrl: 'https://projectmapit.com/best-roofing-now-llc/map?map=6929924976fb8fa56e295607' },
  { slug: 'mint-hill-nc', city: 'Mint Hill', state: 'NC', isPrimary: false, county: 'Mecklenburg', mapUrl: 'https://projectmapit.com/best-roofing-now-llc/map?map=6929925176fb8fa56e295637' },
  { slug: 'harrisburg-nc', city: 'Harrisburg', state: 'NC', isPrimary: false, county: 'Cabarrus' },
  { slug: 'kannapolis-nc', city: 'Kannapolis', state: 'NC', isPrimary: false, county: 'Cabarrus', mapUrl: 'https://projectmapit.com/best-roofing-now-llc/map?map=692991baa73e38e6e4a2a7dc' },
  { slug: 'gastonia-nc', city: 'Gastonia', state: 'NC', isPrimary: false, county: 'Gaston', mapUrl: 'https://projectmapit.com/best-roofing-now-llc/map?map=6929923d76fb8fa56e2955c9' },
  { slug: 'pineville-nc', city: 'Pineville', state: 'NC', isPrimary: false, county: 'Mecklenburg' },
  { slug: 'denver-nc', city: 'Denver', state: 'NC', isPrimary: false, county: 'Lincoln', mapUrl: 'https://projectmapit.com/best-roofing-now-llc/map?map=6929920076fb8fa56e29545b' },
  { slug: 'monroe-nc', city: 'Monroe', state: 'NC', isPrimary: false, county: 'Union' },
  { slug: 'mt-holly-nc', city: 'Mt Holly', state: 'NC', isPrimary: false, county: 'Gaston', mapUrl: 'https://projectmapit.com/best-roofing-now-llc/map?map=6929922b76fb8fa56e295597' },
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
