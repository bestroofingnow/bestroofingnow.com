// Automatic internal linking for blog posts
// Scans content for city names and service keywords and adds links
// Also cleans up excessive blog-to-blog links and handles competitor mentions

import { LOCATIONS, SERVICES } from './constants';

// Known competitor roofing companies that might be mentioned in content
// These should be handled to avoid SEO confusion about our identity/location
const COMPETITOR_COMPANIES = [
  // National/large companies often mentioned in general roofing content
  { name: 'Lowe\'s', type: 'retailer' },
  { name: 'Home Depot', type: 'retailer' },
  { name: 'Menards', type: 'retailer' },
  // Out-of-area roofing companies that should not be linked or emphasized
  { name: 'ABC Roofing', pattern: /ABC\s+Roofing/gi, type: 'competitor' },
  { name: 'XYZ Roofing', pattern: /XYZ\s+Roofing/gi, type: 'competitor' },
];

// Our business identity markers - these should be emphasized
const OUR_BRAND_MARKERS = [
  'Best Roofing Now',
  'BestRoofingNow',
  'Charlotte roofing',
  'Charlotte NC roofing',
  'Charlotte roofer',
];

/**
 * Cleans up blog-to-blog internal links, keeping only the most relevant ones
 * Replaces excessive blog links with plain text to reduce link dilution
 */
function cleanupBlogLinks(html: string, maxBlogLinks = 2): string {
  let cleanedHtml = html;
  let blogLinkCount = 0;

  // Pattern to match internal blog links: /blog/something or full URLs to our blog
  const blogLinkPattern = /<a\s+[^>]*href=["'](?:https?:\/\/(?:www\.)?bestroofingnow\.com)?\/blog\/[^"']+["'][^>]*>(.*?)<\/a>/gi;

  cleanedHtml = cleanedHtml.replace(blogLinkPattern, (match, linkText) => {
    blogLinkCount++;
    // Keep first few blog links, convert rest to plain text
    if (blogLinkCount <= maxBlogLinks) {
      return match;
    }
    // Return just the text without the link
    return linkText;
  });

  return cleanedHtml;
}

/**
 * Handles competitor company mentions to avoid SEO confusion
 * - Removes links to competitor websites
 * - Optionally adds nofollow to external references
 * - Ensures our branding is prominent
 */
function handleCompetitorMentions(html: string): string {
  let processedHtml = html;

  // Remove any links to competitor websites (keep text, remove link)
  // This pattern catches links to obvious competitor roofing sites
  const competitorLinkPattern = /<a\s+[^>]*href=["'][^"']*(?:roofing|roofer|roof)[^"']*\.com[^"']*["'][^>]*>(.*?)<\/a>/gi;

  // Only remove links that are NOT to our own site
  processedHtml = processedHtml.replace(competitorLinkPattern, (match, linkText) => {
    // Keep links to our own site
    if (match.toLowerCase().includes('bestroofingnow.com')) {
      return match;
    }
    // Keep links to manufacturer sites (GAF, CertainTeed, etc.)
    const manufacturers = ['gaf.com', 'certainteed.com', 'owenscorning.com', 'iko.com', 'tamko.com'];
    if (manufacturers.some(m => match.toLowerCase().includes(m))) {
      return match;
    }
    // Remove competitor links, keep text
    return linkText;
  });

  // Add our brand emphasis where appropriate
  // If content mentions "local roofer" or "local roofing company" without linking, add our link
  const localRooferPattern = /(?<!<a[^>]*>)\b(local\s+(?:roofer|roofing\s+company|roofing\s+contractor))\b(?![^<]*<\/a>)/gi;
  processedHtml = processedHtml.replace(localRooferPattern, (match) => {
    return `<a href="/about" title="Best Roofing Now - Your Local Charlotte Roofer" class="internal-link">${match}</a>`;
  });

  return processedHtml;
}

/**
 * Removes or cleans external links that could cause SEO confusion
 * about our geographic service area
 */
function cleanupGeographicConfusion(html: string): string {
  let processedHtml = html;

  // States we DO serve
  const ourStates = ['NC', 'SC', 'North Carolina', 'South Carolina'];

  // Pattern to find location mentions with links to other states
  // If content links to roofing in Texas, Florida, etc., remove those links
  const statePattern = /(?:Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming)/gi;

  // Find links containing state names that aren't ours
  const linkWithStatePattern = /<a\s+[^>]*href=["'][^"']*["'][^>]*>([^<]*(?:Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|Florida|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming)[^<]*)<\/a>/gi;

  processedHtml = processedHtml.replace(linkWithStatePattern, (match, linkText) => {
    // Check if it's a link to NC or SC (our service area) - keep those
    if (/(?:NC|SC|North\s+Carolina|South\s+Carolina)/i.test(linkText)) {
      return match;
    }
    // Remove links to other states, keep text
    return linkText;
  });

  return processedHtml;
}

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
  // Charlotte - primary service area (most patterns to catch mentions)
  {
    patterns: [
      'Charlotte metro', 'Charlotte area', 'Charlotte region', 'greater Charlotte',
      'Charlotte NC', 'Charlotte, NC', 'Charlotte North Carolina',
      'in Charlotte', 'near Charlotte', 'around Charlotte',
      'Queen City', 'CLT area'
    ],
    url: '/locations/charlotte-nc',
    title: 'Roofing services in Charlotte, NC',
  },
  // Lake Norman
  {
    patterns: [
      'Lake Norman', 'Lake Norman area', 'Lake Norman region',
      'LKN', 'LKN area', 'the lake'
    ],
    url: '/locations/lake-norman',
    title: 'Roofing services in Lake Norman',
  },
  // County-based patterns
  {
    patterns: ['Mecklenburg County', 'Mecklenburg'],
    url: '/locations/charlotte-nc',
    title: 'Roofing services in Mecklenburg County',
  },
  {
    patterns: ['Cabarrus County', 'Cabarrus'],
    url: '/locations/concord-nc',
    title: 'Roofing services in Cabarrus County',
  },
  {
    patterns: ['Union County'],
    url: '/locations/monroe-nc',
    title: 'Roofing services in Union County',
  },
  {
    patterns: ['Iredell County', 'Iredell'],
    url: '/locations/mooresville-nc',
    title: 'Roofing services in Iredell County',
  },
  {
    patterns: ['Gaston County', 'Gaston'],
    url: '/locations/gastonia-nc',
    title: 'Roofing services in Gaston County',
  },
  {
    patterns: ['York County', 'York County SC'],
    url: '/locations/rock-hill-sc',
    title: 'Roofing services in York County, SC',
  },
  {
    patterns: ['Lincoln County'],
    url: '/locations/denver-nc',
    title: 'Roofing services in Lincoln County',
  },
  {
    patterns: ['Rowan County', 'Rowan'],
    url: '/locations/salisbury-nc',
    title: 'Roofing services in Rowan County',
  },
  // Specific city variations commonly mentioned in blogs
  {
    patterns: ['Huntersville NC', 'Huntersville, NC', 'in Huntersville'],
    url: '/locations/huntersville-nc',
    title: 'Roofing services in Huntersville, NC',
  },
  {
    patterns: ['Cornelius NC', 'Cornelius, NC', 'in Cornelius'],
    url: '/locations/cornelius-nc',
    title: 'Roofing services in Cornelius, NC',
  },
  {
    patterns: ['Davidson NC', 'Davidson, NC', 'in Davidson', 'Davidson town'],
    url: '/locations/davidson-nc',
    title: 'Roofing services in Davidson, NC',
  },
  {
    patterns: ['Mooresville NC', 'Mooresville, NC', 'in Mooresville', 'Race City'],
    url: '/locations/mooresville-nc',
    title: 'Roofing services in Mooresville, NC',
  },
  {
    patterns: ['Concord NC', 'Concord, NC', 'in Concord'],
    url: '/locations/concord-nc',
    title: 'Roofing services in Concord, NC',
  },
  {
    patterns: ['Matthews NC', 'Matthews, NC', 'in Matthews'],
    url: '/locations/matthews-nc',
    title: 'Roofing services in Matthews, NC',
  },
  {
    patterns: ['Mint Hill NC', 'Mint Hill, NC', 'in Mint Hill'],
    url: '/locations/mint-hill-nc',
    title: 'Roofing services in Mint Hill, NC',
  },
  {
    patterns: ['Indian Trail NC', 'Indian Trail, NC', 'in Indian Trail'],
    url: '/locations/indian-trail-nc',
    title: 'Roofing services in Indian Trail, NC',
  },
  {
    patterns: ['Waxhaw NC', 'Waxhaw, NC', 'in Waxhaw'],
    url: '/locations/waxhaw-nc',
    title: 'Roofing services in Waxhaw, NC',
  },
  {
    patterns: ['Fort Mill SC', 'Fort Mill, SC', 'in Fort Mill'],
    url: '/locations/fort-mill-sc',
    title: 'Roofing services in Fort Mill, SC',
  },
  {
    patterns: ['Rock Hill SC', 'Rock Hill, SC', 'in Rock Hill'],
    url: '/locations/rock-hill-sc',
    title: 'Roofing services in Rock Hill, SC',
  },
  {
    patterns: ['Gastonia NC', 'Gastonia, NC', 'in Gastonia'],
    url: '/locations/gastonia-nc',
    title: 'Roofing services in Gastonia, NC',
  },
];

// Build service link mappings from SERVICES constant
const serviceLinks: LinkMapping[] = SERVICES.map((service) => ({
  patterns: [service.title],
  url: `/services/${service.slug}`,
  title: service.description.slice(0, 100),
}));

// Additional service keyword variations - ordered by specificity (most specific first)
const additionalServiceLinks: LinkMapping[] = [
  // Roof Replacement variations (very common in blog content)
  {
    patterns: [
      'roof replacement', 'replace your roof', 'replacing a roof', 'replacing your roof',
      'new roof', 'new roofing', 'full roof replacement', 'complete roof replacement',
      'roof replacement cost', 'cost of a new roof', 'reroof', 're-roof', 'reroofing',
      'time to replace', 'needs to be replaced', 'should be replaced'
    ],
    url: '/services/roof-replacement',
    title: 'Professional roof replacement in Charlotte NC',
  },
  // Roof Repair variations (very common)
  {
    patterns: [
      'roof repair', 'roof repairs', 'repairing a roof', 'repairing your roof',
      'fix your roof', 'fixing a roof', 'roof leak repair', 'leaking roof',
      'roof leak', 'leaky roof', 'patching a roof', 'roof damage',
      'damaged roof', 'repair your roof', 'roof fix', 'minor roof repair',
      'small roof repair', 'roof patching'
    ],
    url: '/services/roof-repair',
    title: 'Expert roof repair services in Charlotte NC',
  },
  // Storm Damage variations
  {
    patterns: [
      'storm damage', 'hail damage', 'wind damage', 'hurricane damage',
      'storm damage repair', 'storm damage restoration', 'tornado damage',
      'severe weather damage', 'storm-damaged roof', 'hail-damaged',
      'wind-damaged', 'after a storm', 'storm damage claim'
    ],
    url: '/services/storm-damage',
    title: 'Storm damage repair and insurance claims in Charlotte NC',
  },
  // Roof Inspection variations
  {
    patterns: [
      'roof inspection', 'roof inspections', 'inspecting a roof', 'inspect your roof',
      'free inspection', 'drone inspection', 'roof assessment', 'roof evaluation',
      'professional inspection', 'annual roof inspection', 'get your roof inspected',
      'have your roof inspected', 'roofing inspection'
    ],
    url: '/services/roof-inspection',
    title: 'Free roof inspections in Charlotte NC',
  },
  // Residential Roofing variations
  {
    patterns: [
      'residential roofing', 'residential roof', 'home roofing', 'house roof',
      'homeowner roofing', 'residential roofing contractor', 'home roof replacement',
      'residential roofer'
    ],
    url: '/services/residential-roofing',
    title: 'Residential roofing services in Charlotte NC',
  },
  // Commercial Roofing variations
  {
    patterns: [
      'commercial roofing', 'commercial roof', 'flat roof', 'flat roofing',
      'business roofing', 'commercial building', 'industrial roofing',
      'commercial roof repair', 'commercial roof replacement', 'office building roof',
      'warehouse roof', 'retail roofing'
    ],
    url: '/services/commercial-roofing',
    title: 'Commercial roofing services in Charlotte NC',
  },
  // Gutters variations
  {
    patterns: [
      'gutter installation', 'gutter repair', 'new gutters', 'gutter replacement',
      'seamless gutters', 'gutter cleaning', 'gutter system', 'rain gutters',
      'gutter guards', 'downspouts', 'gutter damage'
    ],
    url: '/services/gutters',
    title: 'Gutter installation and repair in Charlotte NC',
  },
  // Roof Maintenance variations (new service)
  {
    patterns: [
      'roof maintenance', 'roofing maintenance', 'maintaining your roof',
      'roof upkeep', 'preventive maintenance', 'routine maintenance',
      'extend roof life', 'roof care', 'annual maintenance'
    ],
    url: '/services/roof-maintenance',
    title: 'Roof maintenance services in Charlotte NC',
  },
  // Emergency Roofing variations
  {
    patterns: [
      'emergency roofing', 'emergency roof repair', '24/7 roofing',
      'urgent roof repair', 'roof emergency', 'emergency roofer',
      'same day roof repair', 'immediate roof repair'
    ],
    url: '/services/emergency-roofing',
    title: 'Emergency roofing services in Charlotte NC',
  },
  // Skylight Installation
  {
    patterns: [
      'skylight installation', 'skylight repair', 'new skylight',
      'skylight replacement', 'roof skylight', 'install a skylight'
    ],
    url: '/services/skylight-installation',
    title: 'Skylight installation in Charlotte NC',
  },
  // Roof Ventilation
  {
    patterns: [
      'roof ventilation', 'attic ventilation', 'roof vents',
      'ridge vents', 'soffit vents', 'ventilation system',
      'proper ventilation', 'ventilation issues'
    ],
    url: '/services/roof-ventilation',
    title: 'Roof ventilation services in Charlotte NC',
  },
  // Chimney Services
  {
    patterns: [
      'chimney repair', 'chimney flashing', 'chimney leak',
      'chimney cap', 'chimney crown', 'chimney services'
    ],
    url: '/services/chimney-services',
    title: 'Chimney repair services in Charlotte NC',
  },
  // Soffit & Fascia
  {
    patterns: [
      'soffit repair', 'fascia repair', 'soffit and fascia',
      'soffit replacement', 'fascia replacement', 'damaged soffit',
      'rotted fascia', 'fascia board'
    ],
    url: '/services/soffit-fascia',
    title: 'Soffit and fascia repair in Charlotte NC',
  },
  // Siding
  {
    patterns: [
      'siding installation', 'siding repair', 'vinyl siding',
      'new siding', 'siding replacement', 'home siding'
    ],
    url: '/services/siding',
    title: 'Siding installation in Charlotte NC',
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
 * Now includes cleanup of excessive blog links and competitor handling
 * Prioritizes service and location pages over blog-to-blog links
 *
 * Link Strategy:
 * - Ideal: 5 internal links total
 * - Maximum: 7 internal links total
 * - Minimum: 1 service link + 1 location link
 * - Blog-to-blog: Max 2 (cleaned up before adding new links)
 *
 * @param html - The HTML content from WordPress
 * @param options - Configuration options
 */
export function addInternalLinks(
  html: string,
  options: {
    maxTotalLinks?: number;
    idealTotalLinks?: number;
    minServiceLinks?: number;
    minLocationLinks?: number;
    maxBlogLinks?: number;
    cleanupCompetitors?: boolean;
    cleanupGeographic?: boolean;
  } = {}
): string {
  const {
    maxTotalLinks = 7,        // Hard limit on total internal links
    idealTotalLinks = 5,      // Target number of links
    minServiceLinks = 1,      // Must have at least 1 service link
    minLocationLinks = 1,     // Must have at least 1 location link
    maxBlogLinks = 2,         // Limit blog-to-blog links
    cleanupCompetitors = true,
    cleanupGeographic = true,
  } = options;

  usedLinks.clear();

  // Step 1: Clean up existing blog-to-blog links (keep only a few)
  let processedHtml = cleanupBlogLinks(html, maxBlogLinks);

  // Step 2: Handle competitor mentions and links
  if (cleanupCompetitors) {
    processedHtml = handleCompetitorMentions(processedHtml);
  }

  // Step 3: Clean up geographic confusion (links to other states)
  if (cleanupGeographic) {
    processedHtml = cleanupGeographicConfusion(processedHtml);
  }

  // Step 4: Add our internal links (services and locations prioritized)
  let locationLinksAdded = 0;
  let serviceLinksAdded = 0;
  let totalLinksAdded = 0;

  // Helper function to try adding a link
  const tryAddLink = (mapping: LinkMapping): boolean => {
    if (usedLinks.has(mapping.url)) return false;

    for (const pattern of mapping.patterns) {
      const regex = new RegExp(
        `(?<!<[^>]*)(?<!<a[^>]*>)\\b(${escapeRegex(pattern)})\\b(?![^<]*>)(?![^<]*</a>)`,
        'i'
      );

      if (regex.test(processedHtml)) {
        processedHtml = processedHtml.replace(
          regex,
          `<a href="${mapping.url}" title="${mapping.title}" class="internal-link">$1</a>`
        );
        usedLinks.add(mapping.url);
        return true;
      }
    }
    return false;
  };

  // Phase 1: Ensure minimum required links (1 service + 1 location)
  // Try to add at least one service link
  if (serviceLinksAdded < minServiceLinks) {
    for (const mapping of allLinks) {
      if (totalLinksAdded >= maxTotalLinks) break;

      const isService = mapping.url.startsWith('/services') ||
                        mapping.url.startsWith('/materials') ||
                        mapping.url.startsWith('/brands') ||
                        mapping.url.startsWith('/products');

      if (isService && tryAddLink(mapping)) {
        serviceLinksAdded++;
        totalLinksAdded++;
        if (serviceLinksAdded >= minServiceLinks) break;
      }
    }
  }

  // Try to add at least one location link
  if (locationLinksAdded < minLocationLinks) {
    for (const mapping of allLinks) {
      if (totalLinksAdded >= maxTotalLinks) break;

      const isLocation = mapping.url.startsWith('/locations');

      if (isLocation && tryAddLink(mapping)) {
        locationLinksAdded++;
        totalLinksAdded++;
        if (locationLinksAdded >= minLocationLinks) break;
      }
    }
  }

  // Phase 2: Add more links up to ideal/max limit, balanced between services and locations
  // Calculate remaining slots
  const remainingSlots = Math.min(idealTotalLinks, maxTotalLinks) - totalLinksAdded;

  if (remainingSlots > 0) {
    // Distribute remaining slots: prioritize services slightly (3:2 ratio)
    const maxMoreServices = Math.ceil(remainingSlots * 0.6);
    const maxMoreLocations = Math.floor(remainingSlots * 0.4);

    let moreServicesAdded = 0;
    let moreLocationsAdded = 0;

    for (const mapping of allLinks) {
      if (totalLinksAdded >= idealTotalLinks) break;

      const isLocation = mapping.url.startsWith('/locations');
      const isService = mapping.url.startsWith('/services') ||
                        mapping.url.startsWith('/materials') ||
                        mapping.url.startsWith('/brands') ||
                        mapping.url.startsWith('/products');

      // Check if we can add more of this type
      if (isService && moreServicesAdded >= maxMoreServices) continue;
      if (isLocation && moreLocationsAdded >= maxMoreLocations) continue;

      if (tryAddLink(mapping)) {
        totalLinksAdded++;
        if (isLocation) {
          locationLinksAdded++;
          moreLocationsAdded++;
        } else if (isService) {
          serviceLinksAdded++;
          moreServicesAdded++;
        }
      }
    }
  }

  return processedHtml;
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
