# SEO & Content Optimization Skills

This document captures reusable patterns for local SEO and content optimization applied to this roofing website.

## 1. Near-Me FAQ Pattern

**Goal:** Capture "near me" local search traffic for location pages.

**Pattern:**
```typescript
// Add these FAQs to location-specific pages
const nearMeFAQs = [
  {
    question: `Who is the best [service] near me in ${city}, ${state}?`,
    answer: `[Business Name] is the highest-rated [service] near ${city} with [credibility markers: rating, reviews, certifications]. Call ${phone} for a free inspection.`,
  },
  {
    question: `Where can I find a [service] company near me in ${city}?`,
    answer: `[Business Name] serves ${city} and all of ${county} County from [address]. [Unique value props]. Call ${phone} for same-day estimates.`,
  },
  {
    question: `What [service providers] near me serve ${city}, ${state}?`,
    answer: `[Business Name] proudly serves ${city}. [List services]. Call ${phone} for a free estimate.`,
  },
];
```

**Key Elements:**
- Include "near me" in question phrasing
- Mention city, state, and county for geo-targeting
- Include phone number in answers for conversion
- Add credibility markers (ratings, certifications, BBB)

## 2. Cost Landing Page Pattern

**Goal:** Target "[service] cost [city]" search queries with pricing transparency.

**Structure:**
1. Hero with cost range headline
2. Pricing table by home size/project type
3. Cost factors breakdown
4. Comparison with alternatives
5. Financing CTA
6. FAQ with pricing questions

**Schema Markup:**
- PriceSpecification schema
- FAQPage schema
- LocalBusiness schema

**Example Keywords:**
- "roof replacement cost charlotte nc"
- "how much does a new roof cost"
- "[service] cost [city] 2026"

## 3. Emergency Service Page Pattern

**Goal:** Target 24/7 and emergency search queries.

**Key Elements:**
1. "24/7" in title and H1
2. Emergency response time guarantees
3. Clear phone CTA above the fold
4. After-hours availability messaging
5. Trust signals (licensing, insurance)

**Schema Markup:**
- Service schema with availability
- EmergencyService schema
- Hourly availability in OpeningHoursSpecification

**Example Keywords:**
- "24/7 emergency [service] [city]"
- "emergency [service] near me"
- "[service] emergency service tonight"

## 4. Service Combination Page Pattern

**Goal:** Target customers needing multiple related services.

**Common Combinations:**
- Roof + Gutter replacement
- Storm damage (roof + siding)
- Roof + Solar installation
- Full exterior (roof + siding + gutters)

**Structure:**
1. Bundle savings value proposition
2. Why combine services (seamless integration)
3. Cost breakdown for combined vs separate
4. Single warranty benefit
5. Process timeline
6. Cross-links to individual services

**Key Messaging:**
- "Save 10-15% with bundle pricing"
- "One contractor, one warranty"
- "Seamless project coordination"

## 5. FAQ Generation Pattern

**Goal:** Create AEO-optimized FAQs for each page type.

**FAQ Types by Page:**
- Location pages: Local service availability, pricing, timing
- Service pages: Process, cost, duration, warranty
- Problem pages: Causes, solutions, urgency
- Material pages: Comparison, lifespan, cost

**Best Practices:**
- Answer in 2-4 sentences
- Include specific numbers/ranges
- Mention location/service name
- Add call-to-action with phone

## 6. Performance Optimization Patterns

### Font Loading
```typescript
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'], // Minimal weights
  adjustFontFallback: true,
});
```

### Script Loading
- Use `lazyOnload` for analytics (Clarity, Facebook Pixel)
- Use `afterInteractive` for critical widgets only
- Use `beforeInteractive` sparingly (only consent tools)

### CSS Containment for LCP
```css
section:first-of-type {
  contain: layout style;
}
section:first-of-type h1 {
  contain: layout style;
  content-visibility: visible;
}
```

### Image Optimization
- Add blur placeholder for above-fold images
- Use `fetchPriority="low"` for logo (let hero be LCP)
- Preconnect to image CDN
- Use webp format when possible

## 7. Internal Linking Patterns

**Service Hub Model:**
- Main service page links to sub-services
- Sub-services link back to hub and siblings
- Cross-link related service categories

**Location + Service Matrix:**
- Each location links to all services
- Each service links to all locations
- Creates comprehensive internal link network

**Content Silos:**
- Materials → Brands → Comparisons
- Problems → Solutions → Services
- Locations → Neighborhoods → Services

## 8. Schema Markup Patterns

**Essential Schemas for Local Service:**
- LocalBusiness (with geo coordinates)
- Service (for each service page)
- FAQPage (on all content pages)
- BreadcrumbList (for navigation)
- WebPage (with primaryImage)
- PriceSpecification (for cost pages)

**Rich Result Targeting:**
- FAQ snippets
- Local pack inclusion
- Price ranges in search

## Usage Notes

1. Apply Near-Me FAQs to ALL location pages, not just Charlotte
2. Create cost landing pages for high-value services
3. Bundle service combination pages for common requests
4. Keep emergency pages focused on rapid conversion
5. Update FAQ content quarterly with new questions from customer calls
6. Monitor PageSpeed after each deployment
