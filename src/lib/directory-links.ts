// Directory Links - Organized by category and relevance
// These are official business listings that should be distributed throughout the site
// Maximum 3 links per page, placed based on relevance

export interface DirectoryLink {
  url: string;
  name: string;
  category: DirectoryCategory;
  location?: 'lake-norman' | 'charlotte' | 'general';
  priority: number; // 1 = highest, 5 = lowest
}

export type DirectoryCategory =
  | 'social'
  | 'reviews'
  | 'maps'
  | 'business-directory'
  | 'industry'
  | 'local-chamber'
  | 'certification'
  | 'media';

// All directory links organized by category
export const DIRECTORY_LINKS: DirectoryLink[] = [
  // === SOCIAL MEDIA === (Priority 1)
  { url: 'https://www.instagram.com/bestroofingnow', name: 'Instagram', category: 'social', priority: 1 },
  { url: 'https://x.com/bestroofingnow', name: 'X (Twitter)', category: 'social', priority: 1 },
  { url: 'https://www.tiktok.com/@bestroofingnow', name: 'TikTok', category: 'social', priority: 1 },
  { url: 'https://www.pinterest.com/bestroofingnowllc/', name: 'Pinterest', category: 'social', priority: 2 },
  { url: 'https://www.facebook.com/bestroofingnowllc', name: 'Facebook', category: 'social', priority: 1 },
  { url: 'https://www.youtube.com/@bestroofingnowllc', name: 'YouTube', category: 'social', priority: 1 },
  { url: 'https://www.linkedin.com/company/best-roofing-now-llc/', name: 'LinkedIn', category: 'social', priority: 1 },
  { url: 'https://www.linkedin.com/in/bestroofingnow/', name: 'LinkedIn (Personal)', category: 'social', priority: 3 },
  { url: 'https://www.threads.com/@bestroofingnow', name: 'Threads', category: 'social', priority: 2 },
  { url: 'https://www.reddit.com/user/BRNadmin/', name: 'Reddit', category: 'social', priority: 3 },
  { url: 'https://www.flickr.com/photos/199706165@N03/', name: 'Flickr', category: 'social', priority: 4 },
  { url: 'https://www.instapaper.com/p/13458887', name: 'Instapaper', category: 'social', priority: 5 },

  // === REVIEW PLATFORMS === (Priority 1)
  { url: 'https://g.page/r/CaUQ2-TmxmVZEAE/review', name: 'Google Reviews', category: 'reviews', priority: 1 },
  { url: 'https://www.yelp.com/biz/best-roofing-now-charlotte-9', name: 'Yelp', category: 'reviews', priority: 1 },
  { url: 'https://www.bbb.org/us/nc/charlotte/profile/roofing-contractors/best-roofing-now-0473-908763', name: 'BBB', category: 'reviews', priority: 1 },
  { url: 'https://nextdoor.com/pages/best-roofing-now-llc-charlotte-nc/', name: 'Nextdoor', category: 'reviews', location: 'charlotte', priority: 1 },
  { url: 'https://www.thumbtack.com/services?servicePk=458573394032246790', name: 'Thumbtack', category: 'reviews', priority: 2 },
  { url: 'https://www.houzz.com/pro/bestroofingnow', name: 'Houzz', category: 'reviews', priority: 2 },
  { url: 'https://homeguide.com/nc/charlotte/roofing/best-roofing-now-llc', name: 'HomeGuide', category: 'reviews', priority: 2 },

  // === MAP PLATFORMS === (Priority 1)
  { url: 'https://share.google/pYPUjCaFCR0BvkjKp', name: 'Google Maps Share', category: 'maps', priority: 1 },
  { url: 'https://maps.apple.com/place?place-id=I826816BC775EADB2&address=10130+Mallard+Creek+Rd%2C+Ste+300%2C+Charlotte%2C+NC++28262%2C+United+States&coordinate=35.3388182%2C-80.7696184&name=Best+Roofing+Now&_provider=9902', name: 'Apple Maps', category: 'maps', priority: 1 },
  { url: 'https://www.bing.com/maps/search?amp%3Bamp%3Bmkt=en-US&ss=id.ypid%3AYNB21A0F8F3BC68D05&cp=35.338783%7E-80.769554&lvl=16&style=r', name: 'Bing Maps', category: 'maps', priority: 2 },
  { url: 'https://www.mapquest.com/us/north-carolina/best-roofing-now-428835039', name: 'MapQuest', category: 'maps', priority: 2 },

  // === INDUSTRY / CERTIFICATION === (Priority 1)
  { url: 'https://www.certainteed.com/profiles/bestroofingnowllc', name: 'CertainTeed Certified', category: 'certification', priority: 1 },
  { url: 'https://www.roofingdirect.com/contractors/best-roofing-now-llc/', name: 'RoofingDirect', category: 'industry', priority: 2 },
  { url: 'https://roofingloc.com/branch/best-roofing-now-llc-charlotte-10130-mallard-creek-rd-300-charlotte-nc-28262', name: 'RoofingLoc', category: 'industry', priority: 3 },
  { url: 'https://projectmapit.com/best-roofing-now-llc', name: 'ProjectMapIt', category: 'industry', priority: 2 },

  // === LOCAL CHAMBERS / LAKE NORMAN === (Priority 1-2)
  { url: 'https://business.lakenormanchamber.org/directory/details/best-roofing-now-4317292', name: 'Lake Norman Chamber', category: 'local-chamber', location: 'lake-norman', priority: 1 },
  { url: 'https://lknconnectcommunity.com/business-listing/best-roofing-now-2/', name: 'LKN Connect', category: 'local-chamber', location: 'lake-norman', priority: 1 },
  { url: 'https://www.businessleadersofcharlotte.com/Sys/PublicProfile/66833596', name: 'Business Leaders of Charlotte', category: 'local-chamber', location: 'charlotte', priority: 2 },

  // === GENERAL BUSINESS DIRECTORIES === (Priority 2-4)
  { url: 'https://www.chamberofcommerce.com/business-directory/north-carolina/charlotte/roofing-contractor/2012422657-best-roofing-now', name: 'Chamber of Commerce', category: 'business-directory', priority: 2 },
  { url: 'https://www.superpages.com/charlotte-nc/bpp/best-roofing-now-561757375', name: 'SuperPages', category: 'business-directory', priority: 3 },
  { url: 'https://www.dexknows.com/charlotte-nc/bp/best-roofing-now-561757375', name: 'DexKnows', category: 'business-directory', priority: 3 },
  { url: 'https://brownbook.net/business/50145694/best-roofing-now', name: 'BrownBook', category: 'business-directory', priority: 3 },
  { url: 'https://citysquares.com/b/best-roofing-now-24693240', name: 'CitySquares', category: 'business-directory', priority: 3 },
  { url: 'https://www.cylex.us.com/company/best-roofing-now-36772885.html', name: 'Cylex', category: 'business-directory', priority: 4 },
  { url: 'https://www.hotfrog.com/company/1439541993828352/best-roofing-now/charlotte/contractor-equipment-services', name: 'HotFrog', category: 'business-directory', priority: 4 },
  { url: 'https://www.hours.com/us/Best-Roofing-Now/Huntersville/10130-Mallard-Creek-Rd-Suite-300/', name: 'Hours.com', category: 'business-directory', priority: 4 },
  { url: 'https://www.ibegin.com/directory/us/north-carolina/charlotte/best-roofing-now-10130-mallard-creek-rd/', name: 'iBegin', category: 'business-directory', priority: 4 },
  { url: 'https://www.insiderpages.com/profile/23378802/', name: 'InsiderPages', category: 'business-directory', priority: 3 },
  { url: 'https://www.iglobal.co/united-states/charlotte/best-roofing-now', name: 'iGlobal', category: 'business-directory', priority: 4 },
  { url: 'https://www.merchantcircle.com/best-roofing-now-charlotte-nc', name: 'MerchantCircle', category: 'business-directory', priority: 3 },
  { url: 'https://www.n49.com/biz/4202117/best-roofing-now-nc-charlotte-10130-mallard-creek-road-suite-300/', name: 'N49', category: 'business-directory', priority: 4 },
  { url: 'https://charlotte.opendi.us/11987307.html', name: 'Opendi', category: 'business-directory', priority: 4 },
  { url: 'https://www.showmelocal.com/profile.aspx?bid=24903150', name: 'ShowMeLocal', category: 'business-directory', priority: 4 },
  { url: 'https://www.tupalo.co/charlotte-north-carolina/best-roofing-now-mallard-creek-road-suite-300', name: 'Tupalo', category: 'business-directory', priority: 4 },
  { url: 'https://alexabusiness.com/directory/best-roofing-now-llc/', name: 'AlexaBusiness', category: 'business-directory', priority: 4 },
  { url: 'https://find-open.com/charlotte/best-roofing-now-14589945', name: 'FindOpen', category: 'business-directory', priority: 4 },
  { url: 'https://www.golocal247.com/biz/best-roofing-now/charlotte-nc/YEXT3830788', name: 'GoLocal247', category: 'business-directory', priority: 3 },
  { url: 'https://ezlocal.com/nc/charlotte/roofing-contractor/0916786300', name: 'EZLocal', category: 'business-directory', priority: 3 },
  { url: 'https://www.elocal.com/profile/23378802/', name: 'eLocal', category: 'business-directory', priority: 4 },
  { url: 'https://www.tellows.com/num/7046056047', name: 'Tellows', category: 'business-directory', priority: 5 },
  { url: 'https://best-roofing-now-llc.wheree.com/', name: 'Wheree', category: 'business-directory', priority: 4 },
  { url: 'https://www.yext.com/partnerpages/aroundme/best-roofing-now-charlotte-north-carolina-us-b94b25', name: 'AroundMe', category: 'business-directory', priority: 4 },
  { url: 'https://www.yext.com/partnerpages/navmii/best-roofing-now-charlotte-north-carolina-us-b94b25', name: 'Navmii', category: 'business-directory', priority: 4 },
  { url: 'https://provider.streetfair.app/v1/62e5debb-66f7-41c0-ab44-2b9e8624f49f', name: 'StreetFair', category: 'business-directory', priority: 5 },
  { url: 'https://www.dnb.com/business-directory/company-profiles.best_roofing_now_llc.3c4c51c8b26d8c28dcb30178fc6529ed.html', name: 'Dun & Bradstreet', category: 'business-directory', priority: 2 },
  { url: 'https://www.8coupons.com/stores/local/best-roofing-now-charlotte-28262-1096131928-1', name: '8Coupons', category: 'business-directory', priority: 5 },

  // === MEDIA / PRESS === (Priority 2)
  { url: 'https://www.digitaljournal.com/pr/news/revupmarketer/best-roofing-llc-unveils-cost-effective-1822246992.html', name: 'Digital Journal', category: 'media', priority: 2 },
];

// Page type to category mapping - defines which directory categories are relevant for each page type
export const PAGE_DIRECTORY_MAPPING: Record<string, DirectoryCategory[]> = {
  // Homepage - most trusted sources
  'home': ['reviews', 'certification', 'local-chamber'],

  // About - certifications and trust signals
  'about': ['certification', 'reviews', 'media'],

  // Reviews - all review platforms
  'reviews': ['reviews'],

  // Contact - maps and directories
  'contact': ['maps', 'business-directory'],

  // Services - industry and certifications
  'services': ['certification', 'industry', 'reviews'],
  'service-detail': ['certification', 'industry'],

  // Location pages - local chambers and maps
  'location': ['local-chamber', 'maps', 'business-directory'],
  'location-lake-norman': ['local-chamber'], // Will get Lake Norman specific links

  // Blog - social and media
  'blog': ['social', 'media'],

  // Products/Brands - certifications
  'products': ['certification', 'industry'],
  'brands': ['certification'],

  // FAQ - trust signals
  'faq': ['reviews', 'certification'],

  // Financing - trust signals
  'financing': ['reviews', 'certification'],

  // Default fallback
  'default': ['business-directory'],
};

// Lake Norman location slugs - these pages get Lake Norman specific links
export const LAKE_NORMAN_LOCATIONS = [
  'huntersville-nc',
  'cornelius-nc',
  'davidson-nc',
  'mooresville-nc',
  'denver-nc',
  'sherrills-ford-nc',
  'terrell-nc',
  'lake-norman',
];

// Function to get relevant directory links for a page
export function getDirectoryLinksForPage(
  pageType: string,
  locationSlug?: string,
  maxLinks: number = 3
): DirectoryLink[] {
  // Check if this is a Lake Norman location
  const isLakeNorman = locationSlug && LAKE_NORMAN_LOCATIONS.some(ln =>
    locationSlug.toLowerCase().includes(ln.replace('-nc', '').replace('-', ' '))
  );

  // Get relevant categories for this page type
  const categories = PAGE_DIRECTORY_MAPPING[pageType] || PAGE_DIRECTORY_MAPPING['default'];

  // Filter links by category
  let relevantLinks = DIRECTORY_LINKS.filter(link => categories.includes(link.category));

  // For Lake Norman pages, prioritize Lake Norman specific links
  if (isLakeNorman) {
    const lakeNormanLinks = relevantLinks.filter(link => link.location === 'lake-norman');
    const otherLinks = relevantLinks.filter(link => link.location !== 'lake-norman');
    relevantLinks = [...lakeNormanLinks, ...otherLinks];
  }

  // Sort by priority
  relevantLinks.sort((a, b) => a.priority - b.priority);

  // Return max links
  return relevantLinks.slice(0, maxLinks);
}

// Function to get all directory links not yet used (for Footer or dedicated page)
export function getAllDirectoryLinks(): DirectoryLink[] {
  return [...DIRECTORY_LINKS].sort((a, b) => a.priority - b.priority);
}

// Function to get links by category
export function getLinksByCategory(category: DirectoryCategory): DirectoryLink[] {
  return DIRECTORY_LINKS.filter(link => link.category === category)
    .sort((a, b) => a.priority - b.priority);
}

// Get social links (for footer)
export function getSocialLinks(): DirectoryLink[] {
  return getLinksByCategory('social').filter(link => link.priority <= 2);
}

// Get review platform links
export function getReviewLinks(): DirectoryLink[] {
  return getLinksByCategory('reviews');
}

// Get certification links
export function getCertificationLinks(): DirectoryLink[] {
  return getLinksByCategory('certification');
}
