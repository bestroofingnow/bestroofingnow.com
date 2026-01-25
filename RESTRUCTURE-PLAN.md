# SEO Page Structure Restructure Plan

## Current Issues Identified

1. **Location pages** (`/locations/[city]`) use inconsistent titles and aren't optimized as "Service Area Pages"
2. **Service-city pages** exist but lack consistent coverage across all key cities
3. **Internal linking** is incomplete - service-city pages not properly linked from location pages
4. **Title formats** don't follow best practices for local SEO

## New Structure

### 1. Location Pages (Service Area Pages)

**URL Pattern:** `/locations/{city-slug}`

**Purpose:** Main landing page for each city - establishes Best Roofing Now as THE roofing company in that area

**New Title Format (based on research):**
```
Top-Rated Roofing Company in {City} NC | 5-Star Reviews | Best Roofing Now
```

**Why "Top-Rated" instead of "#1":**
- Research shows "#1" claims can trigger Google scrutiny unless verifiable
- "Top-Rated" is defensible when backed by actual 5-star reviews
- Includes social proof (5-Star Reviews) for trust signals

**Alternative formats for variety:**
- Charlotte: `Top-Rated Roofing Company in Charlotte NC | 500+ Roofs | Best Roofing Now`
- Huntersville: `Trusted Roofing Company in Huntersville NC | 5-Star Rated | Best Roofing Now`
- Mooresville: `Local Roofing Company in Mooresville NC | Lake Norman Area | Best Roofing Now`

### 2. Service-City Pages

**URL Pattern:** `/{service}-{city}-nc`

**Core Services to Cover for Each Key City:**

| Service | URL Pattern | Title Format |
|---------|-------------|--------------|
| Roof Repair | `/roof-repair-{city}-nc` | `Roof Repair {City} NC | Same-Day Service | Best Roofing Now` |
| Roof Replacement | `/roof-replacement-{city}-nc` | `Roof Replacement {City} NC | Free Estimates | Best Roofing Now` |
| Roof Installation | `/roof-installation-{city}-nc` | `Roof Installation {City} NC | Expert Installers | Best Roofing Now` |
| Roof Maintenance | `/roof-maintenance-{city}-nc` | `Roof Maintenance {City} NC | Preventive Care | Best Roofing Now` |
| Commercial Roofing | `/commercial-roofing-{city}-nc` | `Commercial Roofing {City} NC | Flat & Metal | Best Roofing Now` |
| Flat Roof | `/flat-roof-{city}-nc` | `Flat Roof Repair & Installation {City} NC | Best Roofing Now` |
| Emergency | `/emergency-roof-repair-{city}-nc` | `Emergency Roof Repair {City} NC | 24/7 Service | Best Roofing Now` |
| Storm Damage | `/storm-damage-roof-repair-{city}-nc` | `Storm Damage Roof Repair {City} NC | Insurance Help | Best Roofing Now` |

### 3. Key Cities to Prioritize

Based on search volume and market importance:

**Tier 1 (Full coverage - all 8 service pages):**
- Charlotte NC
- Huntersville NC
- Mooresville NC
- Concord NC

**Tier 2 (Core services - 5 pages):**
- Cornelius NC
- Davidson NC
- Matthews NC
- Gastonia NC

**Tier 3 (Essential services - 3 pages):**
- Fort Mill SC
- Rock Hill SC
- Pineville NC
- Mint Hill NC

### 4. Internal Linking Strategy

**From Location Pages:**
- Add "Our Roofing Services in {City}" section with cards linking to each service-city page
- Include in footer: links to service-city pages
- Add breadcrumbs: Home > Locations > {City}

**From Service-City Pages:**
- Link back to location page: "Learn more about our service area in {City}"
- Link to related services in same city
- Link to same service in nearby cities
- Add breadcrumbs: Home > Services > {Service} > {City}

**Navigation Updates:**
- MegaMenu: Add service links per major city
- Footer: Add "Charlotte Services" and "Lake Norman Services" sections

### 5. Schema Markup Updates

**Location Pages:**
```json
{
  "@type": "LocalBusiness",
  "areaServed": {
    "@type": "City",
    "name": "{City}",
    "sameAs": "https://en.wikipedia.org/wiki/{City}"
  }
}
```

**Service-City Pages:**
```json
{
  "@type": "Service",
  "serviceType": "{Service Type}",
  "areaServed": "{City}, NC",
  "provider": {
    "@type": "RoofingContractor",
    "name": "Best Roofing Now"
  }
}
```

## Implementation Checklist

### Phase 1: Update Location Page Metadata
- [ ] Update title format for all location pages
- [ ] Update meta descriptions with new format
- [ ] Add service links section to each location page

### Phase 2: Create Missing Service-City Pages
- [ ] Audit existing pages
- [ ] Create template for consistent pages
- [ ] Generate pages for Tier 1 cities
- [ ] Generate pages for Tier 2 cities

### Phase 3: Internal Linking
- [ ] Add service cards to location pages
- [ ] Update footer with service-city links
- [ ] Update MegaMenu with city-service links
- [ ] Add cross-links between related pages

### Phase 4: Verify & Test
- [ ] Check all canonicals are self-referencing
- [ ] Verify no duplicate content issues
- [ ] Test internal links work
- [ ] Validate schema markup
- [ ] Check mobile responsiveness

## Files to Modify

1. `src/app/locations/[city]/page.tsx` - Update metadata generation
2. `src/components/layout/Footer.tsx` - Add service-city links
3. `src/components/layout/MegaMenu.tsx` - Add service-city navigation
4. Create new service-city page templates
5. `src/lib/constants.ts` - Add service-city data structure
