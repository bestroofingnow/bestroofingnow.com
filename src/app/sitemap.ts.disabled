import { MetadataRoute } from 'next';
import {
  SITE_CONFIG,
  LOCATIONS,
  SERVICES,
  ROOFING_GUIDES,
  ROOFING_MATERIALS,
  ROOF_TYPES,
  ROOFING_BRANDS,
  COMMERCIAL_SYSTEMS,
  ROOFING_PROBLEMS,
  SEASONAL_ROOFING,
  ROOFING_COMPARISONS,
  SHINGLE_PRODUCTS,
} from '@/lib/constants';
import { getAllNeighborhoodParams } from '@/lib/neighborhoods';
import { getAllPostsLite } from '@/lib/wordpress';
import { fetchAllProjects } from '@/lib/pmi-api';

const BASE_URL = SITE_CONFIG.url; // https://www.bestroofingnow.com

// ============================================================
// Sitemap generator for bestroofingnow.com
// Covers all static routes, dynamic routes from constants,
// blog posts from WordPress, and project pages from PMI API.
// ============================================================

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  // ----------------------------------------------------------
  // 1. HOMEPAGE (priority 1.0)
  // ----------------------------------------------------------
  const homepage: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
  ];

  // ----------------------------------------------------------
  // 2. HIGH-VALUE CHARLOTTE SEO LANDING PAGES (priority 1.0)
  // ----------------------------------------------------------
  const topSeoPages: MetadataRoute.Sitemap = [
    'roofing-charlotte-nc',
    'roofers-charlotte-nc',
    'roofing-company-charlotte-nc',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  }));

  // ----------------------------------------------------------
  // 3. PILLAR CONTENT HUB PAGES (priority 0.9)
  // ----------------------------------------------------------
  const pillarPages: MetadataRoute.Sitemap = [
    'charlotte-roofing-handbook',
    'roof-repair-vs-replacement-charlotte-nc',
    'charlotte-storm-season-roof-guide',
    'charlotte-roofing-costs-2026',
    'nc-roofing-guide',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // ----------------------------------------------------------
  // 4. CORE PAGES (priority 0.8-0.9)
  // ----------------------------------------------------------
  const corePages: MetadataRoute.Sitemap = [
    { slug: 'about', priority: 0.8, changeFrequency: 'monthly' as const },
    { slug: 'contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { slug: 'reviews', priority: 0.8, changeFrequency: 'weekly' as const },
    { slug: 'faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { slug: 'financing', priority: 0.7, changeFrequency: 'monthly' as const },
    { slug: 'emergency', priority: 0.8, changeFrequency: 'monthly' as const },
    { slug: 'warranty', priority: 0.6, changeFrequency: 'monthly' as const },
    { slug: 'ventilation', priority: 0.6, changeFrequency: 'monthly' as const },
    { slug: 'process', priority: 0.6, changeFrequency: 'monthly' as const },
    { slug: 'privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { slug: 'terms', priority: 0.3, changeFrequency: 'yearly' as const },
    { slug: 'sitemap', priority: 0.5, changeFrequency: 'weekly' as const },
    { slug: 'videos', priority: 0.7, changeFrequency: 'weekly' as const },
    { slug: 'trusted-partners', priority: 0.6, changeFrequency: 'monthly' as const },
  ].map((p) => ({
    url: `${BASE_URL}/${p.slug}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  // ----------------------------------------------------------
  // 5. MAIN SERVICE SILO PAGES (priority 0.9)
  // ----------------------------------------------------------
  const serviceSiloPages: MetadataRoute.Sitemap = [
    'services',
    'gutter-services',
    'siding-services',
    'specialty-services',
    'solar-services',
    'metal-roofing-services',
    'commercial-roofing-services',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // ----------------------------------------------------------
  // 6. DYNAMIC SERVICE PAGES from constants (priority 0.8)
  // ----------------------------------------------------------
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // ----------------------------------------------------------
  // 7. SERVICE ENTITY PAGES - standalone service pages (priority 0.8)
  // ----------------------------------------------------------
  const serviceEntityPages: MetadataRoute.Sitemap = [
    'flat-roof-repair',
    'chimney-flashing-repair',
    'skylight-installation',
    'emergency-roof-tarping',
    'fascia-soffit-repair',
    'gutter-repair',
    'standing-seam-metal-roofing',
    'architectural-shingles',
    'hail-damage-roof-repair',
    'roof-coating',
    'roof-maintenance',
    'roof-certification',
    'gutter-guards',
    'ridge-vent-installation',
    'cedar-shake-roofing',
    'tile-roofing',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // ----------------------------------------------------------
  // 8. LOCATION INDEX + DYNAMIC LOCATION PAGES (priority 0.7-0.9)
  // ----------------------------------------------------------
  const locationIndex: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/locations`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
  ];

  const locationPages: MetadataRoute.Sitemap = LOCATIONS.map((loc) => ({
    url: `${BASE_URL}/locations/${loc.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Neighborhood pages: /locations/[city]/[neighborhood]
  let neighborhoodPages: MetadataRoute.Sitemap = [];
  try {
    const neighborhoodParams = getAllNeighborhoodParams();
    neighborhoodPages = neighborhoodParams.map(({ city, neighborhood }) => ({
      url: `${BASE_URL}/locations/${city}/${neighborhood}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch {
    console.error('Error generating neighborhood sitemap entries');
  }

  // ----------------------------------------------------------
  // 9. CHARLOTTE SEO LANDING PAGES - service + city combos (priority 0.8-0.9)
  // ----------------------------------------------------------
  const charlotteSeoPages: MetadataRoute.Sitemap = [
    // Charlotte core
    { slug: 'roofing-contractor-charlotte-nc', priority: 0.9 },
    { slug: 'roof-repair-charlotte-nc', priority: 0.9 },
    { slug: 'roof-replacement-charlotte-nc', priority: 0.9 },
    { slug: 'best-roofing-company-charlotte-nc', priority: 0.9 },
    { slug: 'roof-replacement-cost-charlotte-nc', priority: 0.9 },
    { slug: 'roof-repair-cost-charlotte-nc', priority: 0.9 },
    { slug: 'residential-roofing-charlotte-nc', priority: 0.9 },
    { slug: 'industrial-roofing-charlotte-nc', priority: 0.9 },
    { slug: 'new-roof-installation-charlotte-nc', priority: 0.9 },
    { slug: 'new-construction-roofing-charlotte-nc', priority: 0.9 },
    // Storm & emergency Charlotte
    { slug: 'emergency-roof-repair-charlotte-nc', priority: 0.9 },
    { slug: 'storm-damage-roof-repair-charlotte-nc', priority: 0.9 },
    { slug: 'hail-damage-roof-repair-charlotte-nc', priority: 0.9 },
    { slug: 'wind-damage-roof-repair-charlotte-nc', priority: 0.9 },
    { slug: 'hurricane-damage-roof-repair-charlotte-nc', priority: 0.9 },
    { slug: 'tree-damage-roof-repair-charlotte-nc', priority: 0.9 },
    { slug: 'emergency-tarp-service-charlotte-nc', priority: 0.9 },
    // Service-specific Charlotte
    { slug: 'roof-inspection-charlotte-nc', priority: 0.9 },
    { slug: 'roof-leak-repair-charlotte-nc', priority: 0.9 },
    { slug: 'gutter-installation-charlotte-nc', priority: 0.9 },
    { slug: 'gutter-repair-charlotte-nc', priority: 0.9 },
    { slug: 'gutter-guards-charlotte-nc', priority: 0.9 },
    { slug: 'skylight-installation-charlotte-nc', priority: 0.9 },
    { slug: 'flat-roof-repair-charlotte-nc', priority: 0.9 },
    { slug: 'flat-roof-contractors-charlotte-nc', priority: 0.8 },
    { slug: 'roof-maintenance-charlotte-nc', priority: 0.9 },
    { slug: 'roof-coating-charlotte-nc', priority: 0.9 },
    { slug: 'flat-roof-coating-charlotte-nc', priority: 0.9 },
    { slug: 'roof-ventilation-charlotte-nc', priority: 0.9 },
    { slug: 'ridge-vent-installation-charlotte-nc', priority: 0.9 },
    { slug: 'chimney-flashing-repair-charlotte-nc', priority: 0.9 },
    { slug: 'roof-flashing-repair-charlotte-nc', priority: 0.9 },
    { slug: 'roof-valley-repair-charlotte-nc', priority: 0.9 },
    { slug: 'fascia-soffit-repair-charlotte-nc', priority: 0.9 },
    { slug: 'missing-shingles-repair-charlotte-nc', priority: 0.9 },
    { slug: 'sagging-roof-repair-charlotte-nc', priority: 0.9 },
    { slug: 'moss-algae-removal-roof-charlotte-nc', priority: 0.9 },
    { slug: 'ice-dam-prevention-charlotte-nc', priority: 0.9 },
    // Material-specific Charlotte
    { slug: 'metal-roofing-charlotte-nc', priority: 0.9 },
    { slug: 'standing-seam-metal-roof-charlotte-nc', priority: 0.9 },
    { slug: 'asphalt-shingle-roofing-charlotte-nc', priority: 0.9 },
    { slug: 'tile-roofing-charlotte-nc', priority: 0.9 },
    { slug: 'slate-roofing-charlotte-nc', priority: 0.9 },
    { slug: 'tpo-roofing-charlotte-nc', priority: 0.9 },
    { slug: 'epdm-roofing-charlotte-nc', priority: 0.9 },
    { slug: 'copper-roofing-charlotte-nc', priority: 0.9 },
    { slug: 'cedar-shake-roofing-charlotte-nc', priority: 0.9 },
    { slug: 'designer-shingles-charlotte-nc', priority: 0.9 },
    { slug: 'luxury-roofing-charlotte-nc', priority: 0.9 },
    // Brand-specific Charlotte
    { slug: 'gaf-roofing-charlotte-nc', priority: 0.9 },
    { slug: 'gaf-timberline-shingles-charlotte-nc', priority: 0.9 },
    { slug: 'owens-corning-roofing-charlotte-nc', priority: 0.9 },
    { slug: 'certainteed-shingles-charlotte-nc', priority: 0.9 },
    { slug: 'velux-skylights-charlotte-nc', priority: 0.9 },
    { slug: 'leafguard-gutters-charlotte-nc', priority: 0.9 },
    // Commercial Charlotte
    { slug: 'commercial-roofing-charlotte-nc', priority: 0.9 },
    { slug: 'commercial-roof-repair-cost-charlotte-nc', priority: 0.9 },
    // Insurance & financing Charlotte
    { slug: 'insurance-claim-roofing-charlotte-nc', priority: 0.9 },
    { slug: 'roof-financing-charlotte-nc', priority: 0.9 },
    // Affordable roofing
    { slug: 'affordable-roofing-charlotte-nc', priority: 0.8 },
    // Veteran-owned
    { slug: 'veteran-owned-roofing-company-charlotte-nc', priority: 0.8 },
  ].map((p) => ({
    url: `${BASE_URL}/${p.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: p.priority,
  }));

  // ----------------------------------------------------------
  // 10. BUILDING TYPE PAGES (priority 0.8)
  // ----------------------------------------------------------
  const buildingTypePages: MetadataRoute.Sitemap = [
    'townhouse-roofing-charlotte-nc',
    'condo-roofing-charlotte-nc',
    'apartment-roofing-charlotte-nc',
    'church-roofing-charlotte-nc',
    'warehouse-roofing-charlotte-nc',
    'distribution-center-roofing-charlotte-nc',
    'healthcare-facility-roofing-charlotte-nc',
    'office-building-roofing-charlotte-nc',
    'retail-shopping-center-roofing-charlotte-nc',
    'hotel-hospitality-roofing-charlotte-nc',
    'school-roofing-charlotte-nc',
    'manufacturing-plant-roofing-charlotte-nc',
    'government-building-roofing-charlotte-nc',
    'data-center-roofing-charlotte-nc',
    'auto-dealership-roofing-charlotte-nc',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // ----------------------------------------------------------
  // 11. SURROUNDING CITY & LAKE NORMAN PAGES (priority 0.8-0.9)
  // ----------------------------------------------------------
  const cityPages: MetadataRoute.Sitemap = [
    // Lake Norman cities
    { slug: 'roofing-cornelius-nc', priority: 0.9 },
    { slug: 'roofing-mooresville-nc', priority: 0.9 },
    { slug: 'roofing-davidson-nc', priority: 0.9 },
    { slug: 'roofing-huntersville-nc', priority: 0.9 },
    { slug: 'roofing-denver-nc', priority: 0.9 },
    { slug: 'roofing-lake-norman-nc', priority: 0.9 },
    { slug: 'roofing-sherrills-ford-nc', priority: 0.8 },
    { slug: 'roofing-terrell-nc', priority: 0.8 },
    // Surrounding cities
    { slug: 'roofing-matthews-nc', priority: 0.9 },
    { slug: 'roofing-mint-hill-nc', priority: 0.9 },
    { slug: 'roofing-pineville-nc', priority: 0.9 },
    { slug: 'roofing-concord-nc', priority: 0.9 },
    { slug: 'roofing-indian-trail-nc', priority: 0.9 },
    { slug: 'roofing-gastonia-nc', priority: 0.9 },
    { slug: 'roofing-mt-holly-nc', priority: 0.9 },
    { slug: 'roofing-fort-mill-sc', priority: 0.9 },
    { slug: 'roofing-rock-hill-sc', priority: 0.9 },
    // Luxury Lake Norman
    { slug: 'luxury-roofing-lake-norman-nc', priority: 0.9 },
  ].map((p) => ({
    url: `${BASE_URL}/${p.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: p.priority,
  }));

  // ----------------------------------------------------------
  // 12. SERVICE + CITY COMBINATION PAGES (priority 0.8)
  // ----------------------------------------------------------
  const serviceCityPages: MetadataRoute.Sitemap = [
    // Huntersville
    'roof-repair-huntersville-nc',
    'roof-replacement-huntersville-nc',
    'roofers-huntersville-nc',
    'storm-damage-roof-repair-huntersville-nc',
    'gutter-installation-huntersville-nc',
    'emergency-roof-repair-huntersville-nc',
    'metal-roofing-huntersville-nc',
    'commercial-roofing-huntersville-nc',
    // Mooresville
    'roof-repair-mooresville-nc',
    'roof-replacement-mooresville-nc',
    'roofers-mooresville-nc',
    'metal-roofing-mooresville-nc',
    'storm-damage-roof-repair-mooresville-nc',
    'commercial-roofing-mooresville-nc',
    'roof-inspection-mooresville-nc',
    'gutter-installation-mooresville-nc',
    // Cornelius
    'roof-repair-cornelius-nc',
    'roof-replacement-cornelius-nc',
    'roofers-cornelius-nc',
    'metal-roofing-cornelius-nc',
    'gutter-installation-cornelius-nc',
    'storm-damage-roof-repair-cornelius-nc',
    'commercial-roofing-cornelius-nc',
    // Denver
    'roof-repair-denver-nc',
    'roof-replacement-denver-nc',
    'roofers-denver-nc',
    'metal-roofing-denver-nc',
    'gutter-installation-denver-nc',
    'storm-damage-roof-repair-denver-nc',
    'roof-inspection-denver-nc',
    'commercial-roofing-denver-nc',
    // Davidson
    'roof-replacement-davidson-nc',
    'roofers-davidson-nc',
    'metal-roofing-davidson-nc',
    'roof-repair-davidson-nc',
    'storm-damage-roof-repair-davidson-nc',
    'commercial-roofing-davidson-nc',
    'gutter-installation-davidson-nc',
    // Mt Holly
    'roofers-mt-holly-nc',
    'roof-repair-mt-holly-nc',
    'roof-replacement-mt-holly-nc',
    'metal-roofing-mt-holly-nc',
    'gutter-installation-mt-holly-nc',
    'storm-damage-roof-repair-mt-holly-nc',
    'commercial-roofing-mt-holly-nc',
    // Matthews
    'roofers-matthews-nc',
    'roof-repair-matthews-nc',
    'roof-replacement-matthews-nc',
    'metal-roofing-matthews-nc',
    'gutter-installation-matthews-nc',
    'storm-damage-roof-repair-matthews-nc',
    'commercial-roofing-matthews-nc',
    'roof-inspection-matthews-nc',
    // Concord
    'roof-repair-concord-nc',
    'roof-replacement-concord-nc',
    'commercial-roofing-concord-nc',
    'roofers-concord-nc',
    // Fort Mill
    'roof-repair-fort-mill-sc',
    'roof-replacement-fort-mill-sc',
    'roofers-fort-mill-sc',
    'commercial-roofing-fort-mill-sc',
    // Gastonia
    'roof-replacement-gastonia-nc',
    'commercial-roofing-gastonia-nc',
    // Rock Hill
    'commercial-roofing-rock-hill-sc',
    // Pineville
    'roof-repair-pineville-nc',
    // Ice storm
    'ice-storm-damage-charlotte-nc',
    'ice-storm-damage-lake-norman-nc',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // ----------------------------------------------------------
  // 13. CHARLOTTE NEIGHBORHOOD LANDING PAGES (priority 0.8)
  // ----------------------------------------------------------
  const neighborhoodLandingPages: MetadataRoute.Sitemap = [
    'roofing-ballantyne-charlotte-nc',
    'roofing-southpark-charlotte-nc',
    'roofing-university-city-charlotte-nc',
    'roofing-dilworth-charlotte-nc',
    'roofing-myers-park-charlotte-nc',
    'roofing-plaza-midwood-charlotte-nc',
    'roofing-noda-charlotte-nc',
    'roofing-steele-creek-charlotte-nc',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // ----------------------------------------------------------
  // 14. SEASONAL PAGES (priority 0.8)
  // ----------------------------------------------------------
  const seasonalLandingPages: MetadataRoute.Sitemap = [
    'winter-roof-repair-charlotte-nc',
    'summer-roof-maintenance-charlotte-nc',
    'spring-roof-inspection-charlotte-nc',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // ----------------------------------------------------------
  // 15. EDUCATIONAL / COMPARISON LANDING PAGES (priority 0.8)
  // ----------------------------------------------------------
  const educationalPages: MetadataRoute.Sitemap = [
    'attic-moisture-control-charlotte-nc',
    'diy-roof-maintenance-checklist-charlotte-nc',
    'what-to-do-roof-leak-charlotte-nc',
    'metal-roof-vs-shingles-charlotte-nc',
    'office-building-roof-replacement-vs-coating-charlotte-nc',
    'how-to-choose-roofing-contractor-charlotte-nc',
    'warehouse-roof-repair-vs-replacement-charlotte-nc',
    'what-to-do-after-hail-storm-charlotte-nc',
    'tpo-vs-epdm-roofing-charlotte-nc',
    'gutter-cleaning-diy-guide-charlotte-nc',
    'restaurant-roof-repair-vs-replacement-charlotte-nc',
    'what-to-do-tree-falls-on-roof-charlotte-nc',
    'architectural-vs-3-tab-shingles-charlotte-nc',
    'hurricane-roof-preparation-guide-charlotte-nc',
    'church-roof-replacement-guide-charlotte-nc',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // ----------------------------------------------------------
  // 16. (landing) ROUTE GROUP - renders at root level
  // ----------------------------------------------------------
  const landingPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/free-roof-inspection`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  // ----------------------------------------------------------
  // 17. RESOURCE HUB INDEX PAGES (priority 0.7-0.8)
  // ----------------------------------------------------------
  const resourceIndexPages: MetadataRoute.Sitemap = [
    { slug: 'guides', priority: 0.7 },
    { slug: 'materials', priority: 0.7 },
    { slug: 'roof-types', priority: 0.7 },
    { slug: 'brands', priority: 0.6 },
    { slug: 'commercial-systems', priority: 0.6 },
    { slug: 'problems', priority: 0.6 },
    { slug: 'seasonal', priority: 0.5 },
    { slug: 'compare', priority: 0.6 },
    { slug: 'products', priority: 0.7 },
    { slug: 'projects', priority: 0.7 },
    { slug: 'stories', priority: 0.6 },
    { slug: 'blog', priority: 0.8 },
  ].map((p) => ({
    url: `${BASE_URL}/${p.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: p.priority,
  }));

  // ----------------------------------------------------------
  // 18. DYNAMIC RESOURCE PAGES from constants
  // ----------------------------------------------------------
  const guidePages: MetadataRoute.Sitemap = ROOFING_GUIDES.map((g) => ({
    url: `${BASE_URL}/guides/${g.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const materialPages: MetadataRoute.Sitemap = ROOFING_MATERIALS.map((m) => ({
    url: `${BASE_URL}/materials/${m.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const roofTypePages: MetadataRoute.Sitemap = ROOF_TYPES.map((rt) => ({
    url: `${BASE_URL}/roof-types/${rt.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const brandPages: MetadataRoute.Sitemap = ROOFING_BRANDS.map((b) => ({
    url: `${BASE_URL}/brands/${b.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const commercialSystemPages: MetadataRoute.Sitemap = COMMERCIAL_SYSTEMS.map((cs) => ({
    url: `${BASE_URL}/commercial-systems/${cs.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const problemPages: MetadataRoute.Sitemap = ROOFING_PROBLEMS.map((p) => ({
    url: `${BASE_URL}/problems/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const seasonalPages: MetadataRoute.Sitemap = SEASONAL_ROOFING.map((s) => ({
    url: `${BASE_URL}/seasonal/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  const comparisonPages: MetadataRoute.Sitemap = ROOFING_COMPARISONS.map((c) => ({
    url: `${BASE_URL}/compare/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const productPages: MetadataRoute.Sitemap = SHINGLE_PRODUCTS.map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // ----------------------------------------------------------
  // 19. BLOG POSTS from WordPress (priority 0.6)
  // ----------------------------------------------------------
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const posts = await getAllPostsLite();
    if (Array.isArray(posts)) {
      blogPages = posts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: post.modified
          ? new Date(post.modified).toISOString()
          : now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }));
    }
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
  }

  // ----------------------------------------------------------
  // 20. PROJECT PAGES from PMI API (priority 0.6)
  // ----------------------------------------------------------
  let projectPages: MetadataRoute.Sitemap = [];
  try {
    const projects = await fetchAllProjects();
    if (Array.isArray(projects)) {
      // Individual project pages
      const individualProjects = projects
        .filter((p) => p.photos && p.photos.length > 0)
        .map((project) => ({
          url: `${BASE_URL}/projects/${project.pmiId}`,
          lastModified: project.completedDate
            ? new Date(project.completedDate).toISOString()
            : now,
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        }));

      // City-based project pages
      const cities = [...new Set(projects.map((p) => p.city).filter(Boolean))];
      const cityProjectPages = cities.map((city) => ({
        url: `${BASE_URL}/projects/city/${city.toLowerCase().replace(/\s+/g, '-')}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }));

      projectPages = [...individualProjects, ...cityProjectPages];
    }
  } catch (error) {
    console.error('Error fetching projects for sitemap:', error);
  }

  // ----------------------------------------------------------
  // 21. STORIES PAGES - city-based (priority 0.8)
  // ----------------------------------------------------------
  let storyPages: MetadataRoute.Sitemap = [];
  try {
    const projects = await fetchAllProjects();
    const citySlugs = new Set<string>();
    projects.forEach((p) => {
      if (p.city) {
        citySlugs.add(p.city.toLowerCase().replace(/\s+/g, '-'));
      }
    });
    if (citySlugs.size > 0) {
      storyPages = Array.from(citySlugs).map((slug) => ({
        url: `${BASE_URL}/stories/${slug}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }));
    }
  } catch {
    // Fallback cities if API fails
    const fallbackCities = [
      'charlotte', 'huntersville', 'cornelius', 'davidson', 'matthews', 'mint-hill',
      'pineville', 'concord', 'kannapolis', 'harrisburg', 'monroe', 'indian-trail',
      'waxhaw', 'stallings', 'weddington', 'marvin', 'wesley-chapel', 'gastonia',
      'mt-holly', 'belmont', 'kings-mountain', 'mooresville', 'statesville', 'denver',
      'lincolnton', 'lake-norman', 'sherrills-ford', 'terrell', 'hickory', 'newton',
      'albemarle', 'shelby', 'rock-hill', 'fort-mill', 'tega-cay', 'indian-land',
      'lancaster', 'salisbury', 'china-grove', 'mount-holly',
    ];
    storyPages = fallbackCities.map((slug) => ({
      url: `${BASE_URL}/stories/${slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));
  }

  // ----------------------------------------------------------
  // 22. NEIGHBORHOODS dynamic pages (priority 0.8)
  // ----------------------------------------------------------
  const neighborhoodDynamicPages: MetadataRoute.Sitemap = [
    'ballantyne', 'southpark', 'myers-park', 'dilworth', 'plaza-midwood',
    'noda', 'uptown', 'university-city', 'south-end',
  ].map((slug) => ({
    url: `${BASE_URL}/neighborhoods/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // ----------------------------------------------------------
  // COMBINE ALL ENTRIES
  // ----------------------------------------------------------
  return [
    ...homepage,
    ...topSeoPages,
    ...pillarPages,
    ...corePages,
    ...serviceSiloPages,
    ...servicePages,
    ...serviceEntityPages,
    ...locationIndex,
    ...locationPages,
    ...neighborhoodPages,
    ...charlotteSeoPages,
    ...buildingTypePages,
    ...cityPages,
    ...serviceCityPages,
    ...neighborhoodLandingPages,
    ...seasonalLandingPages,
    ...educationalPages,
    ...landingPages,
    ...resourceIndexPages,
    ...guidePages,
    ...materialPages,
    ...roofTypePages,
    ...brandPages,
    ...commercialSystemPages,
    ...problemPages,
    ...seasonalPages,
    ...comparisonPages,
    ...productPages,
    ...blogPages,
    ...projectPages,
    ...storyPages,
    ...neighborhoodDynamicPages,
  ];
}
