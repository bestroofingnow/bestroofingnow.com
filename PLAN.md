# SEO Fix Implementation Plan

Based on the DataForSEO audit (Feb 5, 2026), this plan addresses all identified issues across ~200 pages.

---

## Phase 1: Fix 404 Returns 301 (CRITICAL)

**Problem:** The middleware at `src/middleware.ts` lines 133-143 redirects ANY unknown single-segment path to `/blog/{slug}` with a 301. So `/fake-page` → 301 → `/blog/fake-page` → renders 404. Google sees "301 → soft 404" which wastes crawl budget and breaks canonicalization.

**Files to modify:**
- `src/middleware.ts` — Add blog slug validation
- `src/lib/blog-slugs.ts` — New file: static set of known WordPress blog slugs
- `scripts/generate-blog-slugs.ts` — New file: build-time script to fetch slugs from WordPress API
- `package.json` — Add `prebuild` script to regenerate slugs
- `src/app/not-found.tsx` — Add `metadata` export with `robots: { index: false }`

**Changes:**
1. Create `scripts/generate-blog-slugs.ts` that fetches all blog post slugs from the WordPress REST API (`getAllPostSlugs()` already exists in `src/lib/wordpress.ts`) and writes them to `src/lib/blog-slugs.ts` as an exported `Set<string>`
2. In `src/middleware.ts` lines 133-143, replace the blind redirect with:
   - Import `KNOWN_BLOG_SLUGS` from `@/lib/blog-slugs`
   - Only redirect if `KNOWN_BLOG_SLUGS.has(slug)` — otherwise let it fall through to Next.js 404
3. Add metadata to `src/app/not-found.tsx`:
   ```tsx
   export const metadata: Metadata = {
     title: 'Page Not Found',
     robots: { index: false, follow: true },
   };
   ```
4. Add `"prebuild": "npx tsx scripts/generate-blog-slugs.ts"` to package.json scripts

---

## Phase 2: Fix Title Tags (CRITICAL — 100+ pages)

**Problem:** Two compounding issues:
1. **Double brand name:** Layout template appends `| Best Roofing Now` to all pages, but ~80+ pages ALREADY include `| Best Roofing Now` in their title string → rendered as `Title | Best Roofing Now | Best Roofing Now`
2. **Too long:** Even after removing the double, many titles exceed 60 characters. Google truncates at ~60.

**Target:** Page-level title ≤ 42 chars (so total with template = ≤ 60 chars).

### Phase 2A: Fix layout defaults
**File:** `src/app/layout.tsx`
- Line 41: Change default title to `Best Roofer Charlotte NC | 5-Star | BBB A+` (44 chars, this IS the full rendered title for pages without their own title)
- Line 42: Keep template as `%s | Best Roofing Now` (no change)

### Phase 2B: Fix homepage title
**File:** `src/app/page.tsx`
- Line 36: Change to absolute title to bypass template:
  ```tsx
  title: { absolute: 'Best Roofing Company Charlotte NC | Free Inspection' }
  ```

### Phase 2C: Remove `| Best Roofing Now` from ALL static page titles (~80+ files)

Systematic search-and-replace across all `src/app/**/page.tsx` files. Remove these suffixes from the `title` property in `metadata` exports:
- `| Best Roofing Now Charlotte NC`
- `| Best Roofing Now Charlotte`
- `| Best Roofing Now`

**DO NOT** remove brand from `openGraph.title` or `twitter.title` — those don't use the template.

Example files (representative, not exhaustive):
- `src/app/roofing-charlotte-nc/page.tsx`: `'Roofing Charlotte NC | #1 Rated Roofing Company (500+ Roofs) | Best Roofing Now'` → `'Roofing Charlotte NC | 500+ Roofs Done'`
- `src/app/roofers-charlotte-nc/page.tsx`: `'Roofers Charlotte NC | Top-Rated Local Roofers (5.0 Stars) | Best Roofing Now'` → `'Roofers Charlotte NC | 5-Star Rated'`
- `src/app/roofing-huntersville-nc/page.tsx`: `'Roofing Huntersville NC | Top-Rated Roofers | Best Roofing Now'` → `'Roofing Huntersville NC | Top Roofers'`
- `src/app/commercial-roofing-charlotte-nc/page.tsx`: Remove brand, shorten qualifier
- All `roofers-*-nc`, `roof-repair-*-nc`, `roof-replacement-*-nc`, `roofing-*-nc` pages
- All `metal-roofing-*`, `gutter-installation-*`, `storm-damage-*` pages
- All `commercial-roofing-*` pages
- Specialty pages: `siding-services`, `solar-services`, `specialty-services`, `ventilation`, `warranty`, `process`, etc.

**Title shortening guidelines:**
| Page Pattern | Max Title (before template) | Example |
|---|---|---|
| `roofing-{city}-nc` | `Roofing {City} NC \| Top Roofers` | 35 chars |
| `roofers-{city}-nc` | `Roofers {City} NC \| 5-Star` | 30 chars |
| `roof-repair-{city}-nc` | `Roof Repair {City} NC \| Fast` | 32 chars |
| `roof-replacement-{city}-nc` | `Roof Replacement {City} NC` | 30 chars |
| `commercial-roofing-{city}` | `Commercial Roofing {City} NC` | 32 chars |
| `metal-roofing-{city}` | `Metal Roofing {City} NC` | 27 chars |
| `gutter-installation-{city}` | `Gutter Install {City} NC` | 27 chars |
| Charlotte specialty pages | `{Service} Charlotte NC` | 25-35 chars |

### Phase 2D: Fix dynamic route titles

**File: `src/app/locations/[city]/page.tsx`** (line 620-626)
- Remove `| Best Roofing Now` from all title variants (template adds it)
- Shorten: `Top-Rated Roofing Company in Charlotte NC | 500+ Roofs Installed` (63 chars!) → `Top Roofer Charlotte NC | 500+ Roofs` (36 chars)
- Other cities: `Top Roofer in {City} NC | 5-Star` (~35 chars)

**File: `src/app/services/[slug]/page.tsx`** (line 758)
- Current: `` `${service.title} Charlotte NC | ${qualifier}` `` — this is OK for most services as it's typically ~35-42 chars
- Verify no service title + qualifier exceeds 42 chars; truncate qualifier if needed

**File: `src/app/blog/[slug]/page.tsx`** (line 73)
- Current: `` `${title} | Roofing Blog` `` — blog titles are variable. If WordPress title is long, total could exceed 60.
- Add truncation: if `title.length > 42`, truncate to 42 chars before appending template
- Actually the template adds `| Best Roofing Now` AND the page adds `| Roofing Blog`. Result: `Blog Title | Roofing Blog | Best Roofing Now`. Remove `| Roofing Blog` — the template brand is sufficient.

**Other dynamic routes to fix:**
- `src/app/brands/[slug]/page.tsx`
- `src/app/guides/[slug]/page.tsx`
- `src/app/compare/[slug]/page.tsx`
- `src/app/materials/[slug]/page.tsx`
- `src/app/roof-types/[slug]/page.tsx`
- `src/app/commercial-systems/[slug]/page.tsx`
- `src/app/products/[slug]/page.tsx`
- `src/app/problems/[slug]/page.tsx`
- `src/app/seasonal/[slug]/page.tsx`
- `src/app/neighborhoods/[neighborhood]/page.tsx`
- `src/app/stories/[slug]/page.tsx`
- `src/app/locations/[city]/[neighborhood]/page.tsx`

---

## Phase 3: Add Image Title Attributes (MODERATE — 6 components)

**Problem:** 20+ pages flagged for missing image `title` attributes. Images have `alt` but not `title`.

**Solution:** Create `SEOImage` wrapper component, update key image components.

### Step 3A: Create SEOImage wrapper
**New file:** `src/components/ui/SEOImage.tsx`
```tsx
import Image, { ImageProps } from 'next/image';

export function SEOImage({ alt, title, ...props }: ImageProps) {
  return <Image {...props} alt={alt} title={title || (typeof alt === 'string' ? alt : undefined)} />;
}
```

### Step 3B: Update GeoTaggedProjectImage
**File:** `src/components/ui/GeoTaggedProjectImage.tsx` (line 70)
- Add `title={altText}` to the `<Image>` component

### Step 3C: Update other image components
Replace `import Image from 'next/image'` with `import { SEOImage as Image } from '@/components/ui/SEOImage'` in:
- `src/components/sections/Hero.tsx`
- `src/components/sections/ProjectGallery.tsx`
- `src/components/ui/BeforeAfterSlider.tsx`
- `src/components/ui/LocationProjectGallery.tsx`
- `src/components/sections/MeetTheFamily.tsx`

### Step 3D: Fix blog content images
**File:** `src/app/blog/[slug]/page.tsx`
- Add HTML processing function to inject `title` attributes into WordPress `<img>` tags:
```tsx
function addImageTitles(html: string): string {
  return html.replace(/<img([^>]*)alt="([^"]*)"([^>]*?)>/gi, (match, before, alt, after) => {
    if (match.includes('title=')) return match;
    return `<img${before}alt="${alt}" title="${alt}"${after}>`;
  });
}
```
- Apply this function to the WordPress content before rendering

---

## Phase 4: Fix Broken Resources (MODERATE)

**Problem:** 30 broken resource references detected.

**Steps:**
1. Query DataForSEO on-page API for specific broken resource URLs from task `02051240-1345-0216-0000-74dd26813bb1`
2. Fix WordPress blog image URLs that may reference old domain (`bestroofingnow.com/wp-content/` → `cms.bestroofingnow.com/wp-content/`)
3. Audit `src/lib/images.ts` for any broken image URLs
4. Add URL rewriting in blog content rendering

**File:** `src/app/blog/[slug]/page.tsx`
```tsx
function fixImageUrls(html: string): string {
  return html.replace(
    /https?:\/\/bestroofingnow\.com\/wp-content/g,
    'https://cms.bestroofingnow.com/wp-content'
  );
}
```

---

## Phase 5: Fix Misspellings (MODERATE — 29 pages)

**Problem:** DataForSEO detected misspellings on 29 of 32 pages crawled.

**Steps:**
1. Pull specific misspelling data from DataForSEO on-page API (pages endpoint with spelling filter)
2. Separate genuine misspellings from false positives (industry terms: TPO, EPDM, CertainTeed, VELUX, soffit, fascia, NoDa, SouthPark, etc.)
3. Fix genuine misspellings across affected pages
4. This is primarily a content audit — search for flagged words and verify/fix

---

## Phase 6: Add Content Depth to Thin Pages (MODERATE — 20+ pages)

**Problem:** 20 of 32 pages flagged for low content rate (text-to-HTML ratio too low).

**Affected page types:**
- Homepage (`/`)
- Service hub pages (`/services`, `/gutter-services`, `/siding-services`, `/solar-services`, etc.)
- City landing pages (`/roofing-huntersville-nc`, `/roofing-mooresville-nc`, etc.)
- Contact, reviews, projects pages

**Solution for each page type:**

### Static service+city pages (e.g., `roofing-huntersville-nc`)
Add 200-400 words of unique, substantive content:
- Local climate/weather data and how it affects roofs in that city
- Specific neighborhoods served within that city
- Local building codes or permit requirements
- Recent project examples from that city (reference PMI data)
- City-specific FAQ expansion

### Service hub pages (e.g., `gutter-services`, `siding-services`)
Add:
- Detailed service descriptions with material specifications
- Cost range information (general, not exact pricing)
- Comparison content (e.g., seamless vs. sectional gutters)
- Process detail expansion

### Homepage
- Add a brief "About Us" content block with company story
- Add service area text content (not just links)
- Expand the "Why Choose Us" section with more detail

---

## Phase 7: Optimize Render-Blocking Resources (LOW — 20 pages)

**Problem:** 20 pages flagged for render-blocking resources. Site already uses font-display: swap, lazy loading, etc.

**Potential improvements:**
- Review preconnect hints in `src/app/layout.tsx` for necessity
- Ensure third-party scripts (LeadConnector) use `strategy="lazyOnload"` (already done)
- Consider deferring non-critical CSS
- This is the lowest priority since the site is already well-optimized (Vercel edge, optimizeCss, etc.)

---

## Implementation Order

| # | Phase | Impact | Files | Priority |
|---|-------|--------|-------|----------|
| 1 | Fix 404 redirect (middleware) | Critical | 4-5 files | P0 |
| 2A | Fix layout default title | Critical | 1 file | P0 |
| 2B | Fix homepage title | Critical | 1 file | P0 |
| 2C | Remove brand from static page titles | Critical | ~80 files | P1 |
| 2D | Fix dynamic route titles | Critical | ~12 files | P1 |
| 3 | Add image title attributes | Moderate | ~8 files | P2 |
| 4 | Fix broken resources | Moderate | ~3 files | P2 |
| 5 | Fix misspellings | Moderate | Various | P2 |
| 6 | Add content depth | Moderate | ~20 files | P3 |
| 7 | Render-blocking optimization | Low | 1-2 files | P4 |

---

## Validation

After implementation, verify with:
1. `npx next build` — ensure no build errors
2. Check rendered title tags on key pages (should all be ≤ 60 chars)
3. Visit a non-existent URL (e.g., `/this-does-not-exist`) — should return 404 status, NOT 301
4. Check image elements in DevTools — should all have `title` attributes
5. Re-run DataForSEO on-page crawl to verify score improvement
