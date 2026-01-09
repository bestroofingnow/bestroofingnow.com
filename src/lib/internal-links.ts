// Automatic internal linking for blog posts
// Scans content for city names and service keywords and adds links

import { LOCATIONS, SERVICES } from './constants';

interface LinkMapping {
  patterns: string[];  // Keywords to match (case-insensitive)
  url: string;
  title: string;  // For anchor title attribute
}

// Build location link mappings from LOCATIONS constant
const locationLinks: LinkMapping[] = LOCATIONS.map((loc) => ({
  patterns: [
    `${loc.city}, ${loc.state}`,
    `${loc.city} ${loc.state}`,
    loc.city,
  ],
  url: `/locations/${loc.slug}`,
  title: `Roofing services in ${loc.city}, ${loc.state}`,
}));

// Additional location variations and neighborhoods
const additionalLocationLinks: LinkMapping[] = [
  {
    patterns: ['Lake Norman', 'Lake Norman area', 'Lake Norman region'],
    url: '/locations/lake-norman',
    title: 'Roofing services in Lake Norman',
  },
  {
    patterns: ['Charlotte metro', 'Charlotte area', 'Charlotte region', 'greater Charlotte'],
    url: '/locations/charlotte-nc',
    title: 'Roofing services in Charlotte, NC',
  },
  {
    patterns: ['Mecklenburg County', 'Mecklenburg'],
    url: '/locations/charlotte-nc',
    title: 'Roofing services in Mecklenburg County',
  },
  {
    patterns: ['Cabarrus County'],
    url: '/locations/concord-nc',
    title: 'Roofing services in Cabarrus County',
  },
  {
    patterns: ['Union County'],
    url: '/locations/monroe-nc',
    title: 'Roofing services in Union County',
  },
  {
    patterns: ['Iredell County'],
    url: '/locations/mooresville-nc',
    title: 'Roofing services in Iredell County',
  },
  {
    patterns: ['Gaston County'],
    url: '/locations/gastonia-nc',
    title: 'Roofing services in Gaston County',
  },
  {
    patterns: ['York County'],
    url: '/locations/rock-hill-sc',
    title: 'Roofing services in York County, SC',
  },
  {
    patterns: ['Lincoln County'],
    url: '/locations/denver-nc',
    title: 'Roofing services in Lincoln County',
  },
];

// Build service link mappings from SERVICES constant
const serviceLinks: LinkMapping[] = SERVICES.map((service) => ({
  patterns: [service.title],
  url: `/services/${service.slug}`,
  title: service.description.slice(0, 100),
}));

// Additional service keyword variations
const additionalServiceLinks: LinkMapping[] = [
  // Roof Replacement variations
  {
    patterns: ['roof replacement', 'replace your roof', 'replacing a roof', 'new roof', 'full roof replacement', 'complete roof replacement'],
    url: '/services/roof-replacement',
    title: 'Professional roof replacement in Charlotte NC',
  },
  // Roof Repair variations
  {
    patterns: ['roof repair', 'roof repairs', 'repairing a roof', 'fix your roof', 'fixing a roof', 'roof leak repair', 'leaking roof'],
    url: '/services/roof-repair',
    title: 'Expert roof repair services in Charlotte NC',
  },
  // Storm Damage variations
  {
    patterns: ['storm damage', 'hail damage', 'wind damage', 'hurricane damage', 'storm damage repair', 'storm damage restoration'],
    url: '/services/storm-damage',
    title: 'Storm damage repair and insurance claims in Charlotte NC',
  },
  // Roof Inspection variations
  {
    patterns: ['roof inspection', 'roof inspections', 'inspecting a roof', 'free inspection', 'drone inspection'],
    url: '/services/roof-inspection',
    title: 'Free roof inspections in Charlotte NC',
  },
  // Gutters variations
  {
    patterns: ['gutter installation', 'gutter repair', 'new gutters', 'gutter replacement', 'seamless gutters'],
    url: '/services/gutters',
    title: 'Gutter installation and repair in Charlotte NC',
  },
  // Commercial Roofing variations
  {
    patterns: ['commercial roofing', 'commercial roof', 'flat roof', 'flat roofing', 'business roofing', 'commercial building'],
    url: '/services/commercial-roofing',
    title: 'Commercial roofing services in Charlotte NC',
  },
  // Materials
  {
    patterns: ['asphalt shingles', 'architectural shingles', 'shingle roof', '3-tab shingles', 'three-tab shingles'],
    url: '/materials/asphalt-shingles',
    title: 'Asphalt shingle roofing in Charlotte NC',
  },
  {
    patterns: ['metal roof', 'metal roofing', 'standing seam', 'metal panels'],
    url: '/materials/metal-roofing',
    title: 'Metal roofing installation in Charlotte NC',
  },
  {
    patterns: ['tile roof', 'tile roofing', 'clay tile', 'concrete tile'],
    url: '/materials/tile-roofing',
    title: 'Tile roofing in Charlotte NC',
  },
  // Brands
  {
    patterns: ['GAF shingles', 'GAF roofing', 'GAF Timberline', 'Timberline shingles'],
    url: '/brands/gaf',
    title: 'GAF certified roofing contractor in Charlotte NC',
  },
  {
    patterns: ['CertainTeed', 'CertainTeed shingles', 'Landmark shingles'],
    url: '/brands/certainteed',
    title: 'CertainTeed certified roofing contractor in Charlotte NC',
  },
  {
    patterns: ['Owens Corning', 'Owens Corning shingles', 'Duration shingles'],
    url: '/brands/owens-corning',
    title: 'Owens Corning preferred contractor in Charlotte NC',
  },
  {
    patterns: ['IKO shingles', 'IKO roofing', 'IKO Cambridge', 'IKO Dynasty'],
    url: '/brands/iko',
    title: 'IKO certified roofing contractor in Charlotte NC',
  },
  {
    patterns: ['TAMKO shingles', 'TAMKO roofing', 'TAMKO Heritage', 'Titan XT'],
    url: '/brands/tamko',
    title: 'TAMKO certified roofing contractor in Charlotte NC',
  },
  // Product-specific links
  {
    patterns: ['Timberline HDZ', 'HDZ shingles', 'LayerLock'],
    url: '/products/gaf-timberline-hdz',
    title: 'GAF Timberline HDZ shingles in Charlotte NC',
  },
  {
    patterns: ['Timberline Ultra HD', 'Ultra HD shingles'],
    url: '/products/gaf-timberline-ultra-hd',
    title: 'GAF Timberline Ultra HD shingles in Charlotte NC',
  },
  {
    patterns: ['Landmark PRO', 'Landmark Pro shingles'],
    url: '/products/certainteed-landmark-pro',
    title: 'CertainTeed Landmark PRO shingles in Charlotte NC',
  },
  {
    patterns: ['Presidential Shake', 'Presidential shingles'],
    url: '/products/certainteed-presidential-shake',
    title: 'CertainTeed Presidential Shake shingles in Charlotte NC',
  },
  {
    patterns: ['Duration shingles', 'SureNail shingles', 'SureNail Technology'],
    url: '/products/owens-corning-duration',
    title: 'Owens Corning Duration shingles in Charlotte NC',
  },
  {
    patterns: ['Berkshire shingles', 'Berkshire Collection'],
    url: '/products/owens-corning-berkshire',
    title: 'Owens Corning Berkshire shingles in Charlotte NC',
  },
  {
    patterns: ['Cambridge shingles', 'IKO Cambridge'],
    url: '/products/iko-cambridge',
    title: 'IKO Cambridge shingles in Charlotte NC',
  },
  {
    patterns: ['Dynasty shingles', 'ArmourZone'],
    url: '/products/iko-dynasty',
    title: 'IKO Dynasty shingles in Charlotte NC',
  },
  {
    patterns: ['Heritage shingles', 'TAMKO Heritage'],
    url: '/products/tamko-heritage',
    title: 'TAMKO Heritage shingles in Charlotte NC',
  },
  {
    patterns: ['Titan XT shingles', 'SBS modified'],
    url: '/products/tamko-titan-xt',
    title: 'TAMKO Titan XT shingles in Charlotte NC',
  },
  // Insurance
  {
    patterns: ['insurance claim', 'insurance claims', 'filing a claim', 'roof insurance', 'homeowner insurance'],
    url: '/guides/insurance-claim-guide',
    title: 'Roof insurance claim guide',
  },
  // Warranty
  {
    patterns: ['roof warranty', 'roofing warranty', 'warranty coverage', 'manufacturer warranty', 'workmanship warranty'],
    url: '/warranty',
    title: 'Roofing warranty information',
  },
  // Emergency
  {
    patterns: ['emergency roof repair', 'emergency roofing', '24/7 roofing', 'roof emergency', 'urgent roof repair'],
    url: '/emergency',
    title: 'Emergency roofing services in Charlotte NC',
  },
];

// Combine all link mappings
const allLinks: LinkMapping[] = [
  ...additionalServiceLinks,  // More specific first
  ...serviceLinks,
  ...additionalLocationLinks,
  ...locationLinks,
];

// Track which links have already been added to avoid duplicates
const usedLinks = new Set<string>();

/**
 * Escapes special regex characters in a string
 */
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Adds internal links to blog content HTML
 * Only links the first occurrence of each keyword to avoid over-optimization
 * Respects existing links and doesn't link inside HTML tags
 */
export function addInternalLinks(html: string, maxLinksPerCategory = 5): string {
  usedLinks.clear();
  let linkedHtml = html;
  let locationLinksAdded = 0;
  let serviceLinksAdded = 0;

  // Process each link mapping
  for (const mapping of allLinks) {
    // Skip if we've already used this URL
    if (usedLinks.has(mapping.url)) continue;

    // Check category limits
    const isLocation = mapping.url.startsWith('/locations');
    if (isLocation && locationLinksAdded >= maxLinksPerCategory) continue;
    if (!isLocation && serviceLinksAdded >= maxLinksPerCategory) continue;

    // Try each pattern
    for (const pattern of mapping.patterns) {
      // Skip if already linked
      if (usedLinks.has(mapping.url)) break;

      // Create regex that:
      // - Matches whole words only
      // - Is case-insensitive
      // - Doesn't match inside existing links or HTML tags
      const regex = new RegExp(
        `(?<!<[^>]*)(?<!<a[^>]*>)\\b(${escapeRegex(pattern)})\\b(?![^<]*>)(?![^<]*</a>)`,
        'i'
      );

      // Check if pattern exists in content
      if (regex.test(linkedHtml)) {
        // Replace first occurrence only
        linkedHtml = linkedHtml.replace(
          regex,
          `<a href="${mapping.url}" title="${mapping.title}" class="internal-link">$1</a>`
        );
        usedLinks.add(mapping.url);

        if (isLocation) {
          locationLinksAdded++;
        } else {
          serviceLinksAdded++;
        }
        break;
      }
    }
  }

  return linkedHtml;
}

/**
 * Extracts mentioned locations from content for "Related Locations" section
 */
export function extractMentionedLocations(html: string): typeof LOCATIONS[number][] {
  const mentioned: typeof LOCATIONS[number][] = [];
  const text = html.toLowerCase();

  for (const location of LOCATIONS) {
    const patterns = [
      location.city.toLowerCase(),
      `${location.city.toLowerCase()}, ${location.state.toLowerCase()}`,
    ];

    for (const pattern of patterns) {
      if (text.includes(pattern)) {
        mentioned.push(location);
        break;
      }
    }
  }

  return mentioned.slice(0, 6); // Return max 6 locations
}

/**
 * Extracts mentioned services from content for "Related Services" section
 */
export function extractMentionedServices(html: string): typeof SERVICES[number][] {
  const mentioned: typeof SERVICES[number][] = [];
  const text = html.toLowerCase();

  // Keywords that map to services
  const serviceKeywords: Record<string, string[]> = {
    'roof-replacement': ['replacement', 'new roof', 'replace'],
    'roof-repair': ['repair', 'fix', 'patching', 'leak'],
    'storm-damage': ['storm', 'hail', 'wind damage', 'hurricane', 'tornado'],
    'roof-inspection': ['inspection', 'inspect', 'assessment', 'evaluate'],
    'gutters': ['gutter', 'drainage', 'downspout'],
    'commercial-roofing': ['commercial', 'business', 'flat roof', 'industrial'],
  };

  for (const service of SERVICES) {
    const keywords = serviceKeywords[service.slug] || [service.title.toLowerCase()];

    for (const keyword of keywords) {
      if (text.includes(keyword)) {
        if (!mentioned.find(s => s.slug === service.slug)) {
          mentioned.push(service);
        }
        break;
      }
    }
  }

  return mentioned.slice(0, 6); // Return max 6 services
}

/**
 * Gets smart related links based on content analysis
 */
export interface SmartLinks {
  locations: { name: string; url: string }[];
  services: { name: string; url: string }[];
}

export function getSmartLinks(html: string): SmartLinks {
  const locations = extractMentionedLocations(html);
  const services = extractMentionedServices(html);

  return {
    locations: locations.map(loc => ({
      name: `${loc.city}, ${loc.state}`,
      url: `/locations/${loc.slug}`,
    })),
    services: services.map(svc => ({
      name: svc.title,
      url: `/services/${svc.slug}`,
    })),
  };
}
