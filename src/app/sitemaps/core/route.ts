import {
NextResponse } from 'next/server';

export const dynamic = 'force-static';

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
    { url: `${BASE_URL}/site-map`, changefreq: 'weekly', priority: '0.8' },
    // Trusted partners & roofing network
    { url: `${BASE_URL}/trusted-partners`, changefreq: 'monthly', priority: '0.6' },
    // YouTube videos page
    { url: `${BASE_URL}/videos`, changefreq: 'weekly', priority: '0.7' },
    // Ad landing pages
    { url: `${BASE_URL}/free-roof-inspection`, changefreq: 'monthly', priority: '0.6' },

    // ============================================
    // SERVICE ENTITY PAGES (SEO Gap Fills Feb 2026)
    // ============================================
    { url: `${BASE_URL}/flat-roof-repair`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/chimney-flashing-repair`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/skylight-installation`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/emergency-roof-tarping`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/fascia-soffit-repair`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/gutter-repair`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/standing-seam-metal-roofing`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/architectural-shingles`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/hail-damage-roof-repair`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/roof-coating`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/roof-maintenance`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/roof-certification`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/gutter-guards`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/ridge-vent-installation`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/cedar-shake-roofing`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/tile-roofing`, changefreq: 'monthly', priority: '0.8' },

    // Pillar content hub pages
    { url: `${BASE_URL}/charlotte-roofing-handbook`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roof-repair-vs-replacement-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/charlotte-storm-season-roof-guide`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/charlotte-roofing-costs-2026`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/tile-roof-vs-shingles-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    // Lake Norman pillar content
    { url: `${BASE_URL}/lake-norman-roofing-guide`, changefreq: 'weekly', priority: '0.9' },
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
    // PAA / AI Overview Q&A pages (Apr 2026)
    { url: `${BASE_URL}/25-percent-rule-roofing`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/is-30000-too-much-for-a-roof-charlotte-nc`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/how-to-tell-if-roofer-is-lying`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/residential-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    // roof-installation-charlotte-nc redirects to roof-replacement-charlotte-nc (SEO consolidation)
    { url: `${BASE_URL}/industrial-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },

    // ============================================
    // STORM & EMERGENCY PAGES
    // ============================================
    { url: `${BASE_URL}/emergency-roof-repair-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/storm-damage-roof-repair-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
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
    { url: `${BASE_URL}/synthetic-slate-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    // Solar roofing
    { url: `${BASE_URL}/solar-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/solar-roofing-lake-norman-nc`, changefreq: 'weekly', priority: '0.9' },
    // Siding
    { url: `${BASE_URL}/siding-installation-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/siding-installation-lake-norman-nc`, changefreq: 'weekly', priority: '0.9' },
    // Veteran-owned
    { url: `${BASE_URL}/veteran-owned-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.9' },

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
    // AEO educational guides (Apr 2026)
    { url: `${BASE_URL}/signs-you-need-new-roof-charlotte-nc`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/roof-maintenance-checklist-charlotte-nc`, changefreq: 'monthly', priority: '0.8' },
    // Buyer-intent FAQ pages (Apr 2026)
    { url: `${BASE_URL}/how-many-roof-estimates-charlotte-nc`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/roof-overlay-vs-tear-off-charlotte-nc`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/replace-roof-before-selling-charlotte-nc`, changefreq: 'monthly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-permits-charlotte-nc`, changefreq: 'monthly', priority: '0.8' },
    // Lake Norman specialty pages (Apr 2026)
    { url: `${BASE_URL}/flat-roofing-lake-norman-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/gutter-guards-lake-norman-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/signs-you-need-new-roof-lake-norman-nc`, changefreq: 'monthly', priority: '0.8' },

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
    // High-end Charlotte neighborhoods — INDEXED (unique content)
    { url: `${BASE_URL}/roofing-foxcroft-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-piper-glen-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-quail-hollow-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-elizabeth-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-eastover-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-uptown-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    // Conversion / discount / HOA / estimate pages
    { url: `${BASE_URL}/free-roof-estimate-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/hoa-approved-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/military-veteran-roofing-discount-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/shingle-replacement-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/siding-and-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    // High-traffic Q&A landing pages (PAA / AI Overview targets)
    { url: `${BASE_URL}/how-long-does-a-roof-last-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/do-i-need-permit-to-replace-roof-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/can-i-replace-my-own-roof-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/how-long-does-roof-replacement-take-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/roofing-warranty-comparison-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/what-color-roof-should-i-choose-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/what-time-of-year-best-to-replace-roof-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/signs-of-hail-damage-on-roof-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/how-to-prepare-for-roof-replacement-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/does-a-new-roof-increase-home-value-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/how-often-should-i-clean-gutters-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/can-i-put-solar-panels-on-my-new-roof-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/why-does-my-roof-leak-when-it-rains-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/are-metal-roofs-good-for-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/do-i-need-new-gutters-with-new-roof-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/is-class-4-impact-resistant-shingle-worth-it-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/what-is-the-best-shingle-brand-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/how-much-does-a-roof-inspection-cost-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/roof-leak-causing-mold-in-attic-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/how-do-i-know-if-i-need-new-decking-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    // Commercial Q&A landing pages
    { url: `${BASE_URL}/how-much-does-commercial-roof-replacement-cost-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/how-long-does-tpo-roof-last-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/what-is-an-ndl-warranty-commercial-roof-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/how-do-i-find-a-roof-leak-on-flat-roof-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/when-should-i-replace-my-commercial-roof-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    // Lake Norman-specific Q&A landing pages
    { url: `${BASE_URL}/why-aluminum-best-for-lake-norman-waterfront-roofing-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/lake-norman-waterfront-roof-cost-guide-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/how-do-i-protect-my-lake-norman-roof-from-wind-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/lake-norman-hoa-roof-approval-process-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/should-i-use-metal-or-asphalt-roof-on-lake-norman-home-nc`, changefreq: 'monthly', priority: '0.7' },
    // Niche Q&A landing pages
    { url: `${BASE_URL}/how-much-does-roof-flashing-repair-cost-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/should-i-replace-my-roof-in-sections-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/how-do-i-find-a-good-roofing-contractor-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/when-do-i-need-emergency-roof-tarp-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/what-is-a-roof-square-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/how-much-does-roof-decking-replacement-cost-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/what-is-roof-underlayment-and-why-does-it-matter-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/should-i-get-a-roof-inspection-before-buying-a-house-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/how-do-i-prevent-ice-dams-on-my-roof-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/what-is-roof-pitch-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    // Noindexed neighborhood pages omitted from sitemap (thin/templated content)
    // Providence Plantation, Beverly Woods, Cotswold, Arboretum, Rea Farms,
    // Blakeney, Waverly, Providence Crossing, Carmel — re-add after unique content is written

    // ============================================
    // LAKE NORMAN HUB + SERVICE PAGES
    // ============================================
    { url: `${BASE_URL}/roofing-lake-norman-nc`, changefreq: 'weekly', priority: '1.0' },
    { url: `${BASE_URL}/roof-repair-lake-norman-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roof-replacement-lake-norman-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roofers-lake-norman-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/storm-damage-roof-repair-lake-norman-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/emergency-roof-repair-lake-norman-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/commercial-roofing-lake-norman-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/metal-roofing-lake-norman-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/gutter-installation-lake-norman-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roof-inspection-lake-norman-nc`, changefreq: 'weekly', priority: '0.9' },

    // ============================================
    // LAKE WYLIE & SOUTH CHARLOTTE HUB + SERVICE PAGES
    // ============================================
    { url: `${BASE_URL}/roofing-lake-wylie-sc`, changefreq: 'weekly', priority: '1.0' },
    { url: `${BASE_URL}/roof-repair-lake-wylie-sc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roof-replacement-lake-wylie-sc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roofers-lake-wylie-sc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/storm-damage-roof-repair-lake-wylie-sc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roofing-tega-cay-sc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/commercial-roofing-lake-wylie-sc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/metal-roofing-lake-wylie-sc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/gutter-installation-lake-wylie-sc`, changefreq: 'weekly', priority: '0.9' },

    // ============================================
    // LAKE NORMAN CITY PAGES
    // ============================================
    { url: `${BASE_URL}/roofing-cornelius-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roofing-mooresville-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roofing-davidson-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roofing-huntersville-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roofing-denver-nc`, changefreq: 'weekly', priority: '0.9' },

    { url: `${BASE_URL}/roofing-sherrills-ford-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-statesville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-troutman-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-terrell-nc`, changefreq: 'weekly', priority: '0.8' },
    // Lake Norman hub content (Apr 2026)
    { url: `${BASE_URL}/roofing-lake-norman-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/lake-norman-waterfront-roofing`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/lake-norman-storm-damage-guide`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/lake-norman-roofing-costs-2026`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/best-roofer-lake-norman-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roof-replacement-lake-norman-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/hail-damage-roof-repair-lake-norman-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/insurance-claim-roofing-lake-norman-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/standing-seam-metal-roof-lake-norman-nc`, changefreq: 'weekly', priority: '0.8' },
    // Lake Norman premium material pages (Apr 2026)
    { url: `${BASE_URL}/slate-roofing-lake-norman-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/synthetic-slate-roofing-lake-norman-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/cedar-shake-roofing-lake-norman-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/tile-roofing-lake-norman-nc`, changefreq: 'weekly', priority: '0.8' },
    // Lake Norman city-level cost guides (Apr 2026)
    { url: `${BASE_URL}/roofing-cost-mooresville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-cost-cornelius-nc`, changefreq: 'weekly', priority: '0.8' },
    // Lake Norman luxury neighborhood pages (Apr 2026)
    { url: `${BASE_URL}/roofing-the-peninsula-cornelius-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-governors-island-denver-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-jetton-cove-cornelius-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-antiquity-cornelius-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-the-point-mooresville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-the-farms-mooresville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-birkdale-huntersville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-curtis-pond-mooresville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-vermillion-huntersville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-skybrook-huntersville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-northstone-huntersville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-river-run-davidson-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-davidson-pointe-davidson-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-cove-creek-mooresville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofing-sailview-denver-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/metal-roofing-the-peninsula-cornelius-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-replacement-the-point-mooresville-nc`, changefreq: 'weekly', priority: '0.8' },

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
    { url: `${BASE_URL}/roof-inspection-huntersville-nc`, changefreq: 'weekly', priority: '0.8' },
    // Mooresville
    { url: `${BASE_URL}/roof-repair-mooresville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-replacement-mooresville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/metal-roofing-mooresville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/storm-damage-roof-repair-mooresville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/commercial-roofing-mooresville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-inspection-mooresville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/gutter-installation-mooresville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/emergency-roof-repair-mooresville-nc`, changefreq: 'weekly', priority: '0.8' },
    // Cornelius
    { url: `${BASE_URL}/roof-repair-cornelius-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-replacement-cornelius-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofers-cornelius-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/metal-roofing-cornelius-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/gutter-installation-cornelius-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/storm-damage-roof-repair-cornelius-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-inspection-cornelius-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/emergency-roof-repair-cornelius-nc`, changefreq: 'weekly', priority: '0.8' },
    // Denver
    { url: `${BASE_URL}/roof-repair-denver-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-replacement-denver-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofers-denver-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/metal-roofing-denver-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/gutter-installation-denver-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/storm-damage-roof-repair-denver-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-inspection-denver-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/commercial-roofing-denver-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/emergency-roof-repair-denver-nc`, changefreq: 'weekly', priority: '0.8' },

    // Davidson
    { url: `${BASE_URL}/roof-replacement-davidson-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roofers-davidson-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/metal-roofing-davidson-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-repair-davidson-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/storm-damage-roof-repair-davidson-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/commercial-roofing-davidson-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/gutter-installation-davidson-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-inspection-davidson-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/emergency-roof-repair-davidson-nc`, changefreq: 'weekly', priority: '0.8' },
    // Sherrills Ford
    { url: `${BASE_URL}/roofers-sherrills-ford-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-repair-sherrills-ford-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-replacement-sherrills-ford-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/metal-roofing-sherrills-ford-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/gutter-installation-sherrills-ford-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/emergency-roof-repair-sherrills-ford-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/commercial-roofing-sherrills-ford-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/storm-damage-roof-repair-sherrills-ford-nc`, changefreq: 'weekly', priority: '0.8' },
    // Statesville
    { url: `${BASE_URL}/roofers-statesville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-repair-statesville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-replacement-statesville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/metal-roofing-statesville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/gutter-installation-statesville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/emergency-roof-repair-statesville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/commercial-roofing-statesville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/storm-damage-roof-repair-statesville-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-inspection-statesville-nc`, changefreq: 'weekly', priority: '0.8' },

    // Mt Holly
    { url: `${BASE_URL}/roofing-mt-holly-nc`, changefreq: 'weekly', priority: '0.9' },
    { url: `${BASE_URL}/roofers-mt-holly-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-repair-mt-holly-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-replacement-mt-holly-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/metal-roofing-mt-holly-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/gutter-installation-mt-holly-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/storm-damage-roof-repair-mt-holly-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/commercial-roofing-mt-holly-nc`, changefreq: 'weekly', priority: '0.8' },

    // Matthews
    { url: `${BASE_URL}/roofers-matthews-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-replacement-matthews-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/metal-roofing-matthews-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/gutter-installation-matthews-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/storm-damage-roof-repair-matthews-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/commercial-roofing-matthews-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/roof-inspection-matthews-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/gutter-installation-matthews-nc`, changefreq: 'weekly', priority: '0.8' },

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

    // ============================================
    // LUXURY SERVICE PAGES (Apr 2026)
    // ============================================
    { url: `${BASE_URL}/custom-home-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/gated-community-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/estate-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },
    { url: `${BASE_URL}/historic-home-roofing-charlotte-nc`, changefreq: 'weekly', priority: '0.8' },

    // Batch 27 Q&A pages (Apr 2026)
    { url: `${BASE_URL}/what-do-i-do-if-insurance-denies-my-roof-claim-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/should-i-clean-my-roof-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/how-do-i-check-my-roof-without-climbing-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/why-does-my-attic-get-so-hot-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/how-much-does-attic-ventilation-cost-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },

    // Batch 28 Q&A pages (Apr 2026)
    { url: `${BASE_URL}/what-is-a-roof-valley-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/how-do-i-clean-my-gutters-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/when-should-i-replace-my-gutters-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/what-is-a-drip-edge-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/how-do-i-prevent-ice-dams-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },

    // Batch 29 Q&A pages (Apr 2026)
    { url: `${BASE_URL}/what-is-roof-underlayment-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/how-do-i-find-a-roof-leak-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/what-is-a-roof-boot-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/how-do-i-keep-birds-off-my-roof-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/what-is-a-chimney-cricket-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },

    // Batch 30 Q&A pages (Apr 2026)
    { url: `${BASE_URL}/what-is-roof-decking-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/what-is-a-soffit-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/what-causes-roof-leaks-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/what-is-fascia-board-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/how-do-i-prevent-squirrel-damage-roof-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },

    // Batch 31 Q&A pages (Apr 2026)
    { url: `${BASE_URL}/what-is-gaf-master-elite-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/what-is-certainteed-select-shinglemaster-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/what-is-owens-corning-platinum-preferred-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/what-is-roof-flashing-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
    { url: `${BASE_URL}/how-do-i-budget-for-a-new-roof-charlotte-nc`, changefreq: 'monthly', priority: '0.7' },
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
