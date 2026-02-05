import { NextResponse } from 'next/server';

const BASE_URL = 'https://www.bestroofingnow.com';

// Core pages sitemap: Homepage, about, contact, reviews, financing, faq, and main service silos
export async function GET() {
  const pages = [
    { url: BASE_URL, changefreq: 'weekly', priority: '1.0' },
    { url: `${BASE_URL}/about`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/contact`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/reviews`, changefreq: 'weekly', priority: '0.7' },
    { url: `${BASE_URL}/faq`, changefreq: 'monthly', priority: '0.5' },
    { url: `${BASE_URL}/nc-roofing-guide`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/sitemap`, changefreq: 'weekly', priority: '0.8' },
    // Trusted partners & roofing network
    { url: `${BASE_URL}/trusted-partners`, changefreq: 'monthly', priority: '0.6' },
    // Ad landing pages
    { url: `${BASE_URL}/free-roof-inspection`, changefreq: 'monthly', priority: '0.6' },
    // Pillar content hub pages
    { url: `${BASE_URL}/charlotte-roofing-handbook`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roof-repair-vs-replacement-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/charlotte-storm-season-roof-guide`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/charlotte-roofing-costs-2026`, changefreq: 'weekly', priority: '0.9' },
    // Main service silo pages - GBP category aligned
    { url: `${BASE_URL}/gutter-services`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/siding-services`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/specialty-services`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/solar-services`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/metal-roofing-services`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/commercial-roofing-services`, changefreq: 'weekly', priority: '0.9' },

    // ============================================
    // HIGH-VALUE CHARLOTTE SEO LANDING PAGES
    // Top 100 keyword targets from DataForSEO
    // ============================================
    { url: `${BASE_URL}/roofing-charlotte-nc`, changefreq: 'weekly', priority: '1.0' },
    { url: `${BASE_URL}/roofers-charlotte-nc`, changefreq: 'weekly', priority: '1.0' },
    { url: `${BASE_URL}/roofing-company-charlotte-nc`, changefreq: 'weekly', priority: '1.0' },
    { url: `${BASE_URL}/roofing-contractor-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roof-repair-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roof-replacement-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/best-roofing-company-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roof-replacement-cost-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roof-repair-cost-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/residential-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    // roof-installation-charlotte-nc redirects to roof-replacement-charlotte-nc (SEO consolidation)
    { url: `${BASE_URL}/industrial-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },

    // ============================================
    // STORM & EMERGENCY PAGES
    // ============================================


    { url: `${BASE_URL}/hail-damage-roof-repair-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/wind-damage-roof-repair-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/hurricane-damage-roof-repair-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/tree-damage-roof-repair-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/emergency-tarp-service-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },

    // ============================================
    // SERVICE-SPECIFIC CHARLOTTE PAGES
    // ============================================
    { url: `${BASE_URL}/roof-inspection-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roof-leak-repair-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/gutter-installation-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/gutter-repair-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/gutter-guards-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/skylight-installation-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/flat-roof-repair-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roof-maintenance-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/new-construction-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roof-coating-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/flat-roof-coating-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roof-ventilation-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/ridge-vent-installation-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/chimney-flashing-repair-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roof-flashing-repair-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roof-valley-repair-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/fascia-soffit-repair-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },

    { url: `${BASE_URL}/missing-shingles-repair-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/sagging-roof-repair-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/moss-algae-removal-roof-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/ice-dam-prevention-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },


    // ============================================
    // MATERIAL-SPECIFIC PAGES
    // ============================================
    { url: `${BASE_URL}/metal-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/standing-seam-metal-roof-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/asphalt-shingle-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/tile-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/slate-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/tpo-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/epdm-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    // Premium/Luxury Material Pages
    { url: `${BASE_URL}/luxury-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/luxury-roofing-lake-norman-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/copper-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/designer-shingles-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/cedar-shake-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },

    // ============================================
    // BRAND-SPECIFIC PAGES
    // ============================================
    { url: `${BASE_URL}/gaf-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/gaf-timberline-shingles-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/owens-corning-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/certainteed-shingles-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/velux-skylights-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/leafguard-gutters-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },

    // ============================================
    // SEASONAL PAGES
    // ============================================
    { url: `${BASE_URL}/winter-roof-repair-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/summer-roof-maintenance-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/spring-roof-inspection-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },

    // ============================================
    // EDUCATIONAL / BLOG CONTENT
    // ============================================
    { url: `${BASE_URL}/attic-moisture-control-charlotte-nc`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/diy-roof-maintenance-checklist-charlotte-nc`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/what-to-do-roof-leak-charlotte-nc`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/metal-roof-vs-shingles-charlotte-nc`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/office-building-roof-replacement-vs-coating-charlotte-nc`, changefreq: 'monthly', priority: '0.8' },
    // Scheduled blogs Jan 28
    { url: `${BASE_URL}/how-to-choose-roofing-contractor-charlotte-nc`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/warehouse-roof-repair-vs-replacement-charlotte-nc`, changefreq: 'monthly', priority: '0.8' },
    // Scheduled blogs Jan 29
    { url: `${BASE_URL}/what-to-do-after-hail-storm-charlotte-nc`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/tpo-vs-epdm-roofing-charlotte-nc`, changefreq: 'monthly', priority: '0.8' },
    // Scheduled blogs Jan 30
    { url: `${BASE_URL}/gutter-cleaning-diy-guide-charlotte-nc`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/restaurant-roof-repair-vs-replacement-charlotte-nc`, changefreq: 'monthly', priority: '0.8' },
    // Scheduled blogs Jan 31
    { url: `${BASE_URL}/what-to-do-tree-falls-on-roof-charlotte-nc`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/architectural-vs-3-tab-shingles-charlotte-nc`, changefreq: 'monthly', priority: '0.8' },
    // Scheduled blogs Feb 1
    { url: `${BASE_URL}/hurricane-roof-preparation-guide-charlotte-nc`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/church-roof-replacement-guide-charlotte-nc`, changefreq: 'monthly', priority: '0.8' },

    // ============================================
    // INSURANCE & FINANCING PAGES
    // ============================================
    { url: `${BASE_URL}/insurance-claim-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roof-financing-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },




    // ============================================
    // BUILDING TYPE PAGES
    // ============================================
    { url: `${BASE_URL}/townhouse-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/condo-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/apartment-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/church-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/warehouse-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/distribution-center-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/healthcare-facility-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/office-building-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/retail-shopping-center-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/hotel-hospitality-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/school-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/manufacturing-plant-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/government-building-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/data-center-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/auto-dealership-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },

    // ============================================
    // CHARLOTTE NEIGHBORHOOD PAGES
    // ============================================
    { url: `${BASE_URL}/neighborhoods/ballantyne`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/neighborhoods/southpark`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/neighborhoods/myers-park`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/neighborhoods/dilworth`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/neighborhoods/plaza-midwood`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/neighborhoods/noda`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/neighborhoods/uptown`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/neighborhoods/university-city`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/neighborhoods/south-end`, changefreq: 'monthly', priority: '0.8' },
    // Neighborhood-specific landing pages
    { url: `${BASE_URL}/roofing-ballantyne-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-southpark-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-university-city-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-dilworth-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-myers-park-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-plaza-midwood-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-noda-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-steele-creek-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },



    // ============================================
    // LAKE NORMAN CITY PAGES
    // ============================================
    { url: `${BASE_URL}/roofing-cornelius-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roofing-mooresville-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roofing-davidson-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roofing-huntersville-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roofing-denver-nc`, changefreq: 'weekly', priority: '0.9' },

    { url: `${BASE_URL}/roofing-sherrills-ford-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-terrell-nc`, changefreq: 'weekly', priority: '0.8' },

    // ============================================
    // SURROUNDING CITY PAGES
    // ============================================
    { url: `${BASE_URL}/roofing-matthews-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roofing-mint-hill-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roofing-pineville-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roofing-concord-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roofing-indian-trail-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roofing-gastonia-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roofing-fort-mill-sc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roof-repair-fort-mill-sc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roof-replacement-fort-mill-sc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roofers-fort-mill-sc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roofing-rock-hill-sc`, changefreq: 'weekly', priority: '0.9' },

    // ============================================
    // SERVICE + CITY COMBINATION PAGES
    // ============================================
    // Huntersville
    { url: `${BASE_URL}/roof-repair-huntersville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-replacement-huntersville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofers-huntersville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/storm-damage-roof-repair-huntersville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/gutter-installation-huntersville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/emergency-roof-repair-huntersville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/metal-roofing-huntersville-nc`, changefreq: 'weekly', priority: '0.8' },
    // Mooresville
    { url: `${BASE_URL}/roof-repair-mooresville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-replacement-mooresville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/metal-roofing-mooresville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/storm-damage-roof-repair-mooresville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/commercial-roofing-mooresville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-inspection-mooresville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/gutter-installation-mooresville-nc`, changefreq: 'weekly', priority: '0.8' },
    // Cornelius
    { url: `${BASE_URL}/roof-repair-cornelius-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-replacement-cornelius-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofers-cornelius-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/metal-roofing-cornelius-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/gutter-installation-cornelius-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/storm-damage-roof-repair-cornelius-nc`, changefreq: 'weekly', priority: '0.8' },
    // Denver
    { url: `${BASE_URL}/roof-repair-denver-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-replacement-denver-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofers-denver-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/metal-roofing-denver-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/gutter-installation-denver-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/storm-damage-roof-repair-denver-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-inspection-denver-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/commercial-roofing-denver-nc`, changefreq: 'weekly', priority: '0.8' },

    // Davidson
    { url: `${BASE_URL}/roof-replacement-davidson-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofers-davidson-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/metal-roofing-davidson-nc`, changefreq: 'weekly', priority: '0.8' },

    // Other cities
    { url: `${BASE_URL}/roof-repair-pineville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-repair-matthews-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-repair-concord-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-replacement-concord-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/commercial-roofing-concord-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-replacement-gastonia-nc`, changefreq: 'weekly', priority: '0.8' },

    // ============================================
    // COMMERCIAL ROOFING CITY PAGES
    // ============================================
    { url: `${BASE_URL}/commercial-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/commercial-roof-repair-cost-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/commercial-roofing-huntersville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/commercial-roofing-cornelius-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/commercial-roofing-gastonia-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/commercial-roofing-rock-hill-sc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/commercial-roofing-fort-mill-sc`, changefreq: 'weekly', priority: '0.8' },
  ];

  const lastmod = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
