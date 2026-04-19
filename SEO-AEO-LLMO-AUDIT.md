# Best Roofing Now — SEO / AEO / LLMO Audit

**Date:** 2026-04-19
**Reviewers:** Claude (Opus 4.7) + Codex (gpt, parallel run)
**Scope:** Full site review focused on roofing lead generation + multi-engine ranking (Google, Bing, ChatGPT, Perplexity, Claude, Gemini)

---

## CRITICAL — Fix this week

### C1. `ServiceAreaPageSchema` emits wrong URL on 36 pages
**Evidence:** `src/components/seo/SchemaMarkup.tsx:2270, 2273` hardcodes `@id` and `url` as `${SITE_CONFIG.url}/locations/${slug}` — but the component is used on 36 top-level pages like `/roof-inspection-matthews-nc`, `/storm-damage-roof-repair-matthews-nc`, `/metal-roofing-lake-norman-nc`, `/commercial-roofing-davidson-nc`, etc. The schema claims the service URL is `/locations/roof-inspection-matthews-nc` — which is a 404.

**Impact:** Google treats this as contradictory data. Can suppress rich results on every affected page, including your highest-intent commercial pages. Likely hurting both rich snippet eligibility and Map Pack signals.

**Fix:** Add an optional `pageUrl` prop to `ServiceAreaPageSchema`. Default to current behavior (`/locations/${slug}`) only when `pageUrl` is not passed. Update all 36 usages to pass the real page URL. Search: `rg -n "<ServiceAreaPageSchema" src/app`

---

### C2. Sitemap index missing `/sitemaps/faq`
**Evidence:** `src/app/sitemap.xml/route.ts:7-20` lists 12 category sitemaps but omits `/sitemaps/faq` (which exists at `src/app/sitemaps/faq/route.ts` with 8 FAQ URLs).

**Impact:** FAQ hub and category FAQ pages aren't being submitted for indexing. FAQ pages are prime AEO assets — direct answer targets for AI engines.

**Fix:** Add one line to `src/app/sitemap.xml/route.ts`:
```ts
{ loc: `${BASE_URL}/sitemaps/faq`, lastmod: new Date().toISOString() },
```

---

### C3. `ServiceSchema` missing on two biggest-intent Charlotte pages
**Evidence:**
- `src/app/roof-repair-charlotte-nc/page.tsx` — no `<ServiceSchema>` (has FAQ + AI bundle only)
- `src/app/roof-replacement-charlotte-nc/page.tsx` — same

Compare to `src/app/roof-inspection-charlotte-nc/page.tsx:239` which does include it. These are your two highest commercial-intent keywords in the Charlotte market — they should have the strongest schema.

**Impact:** Missing service entity → weaker Map Pack + organic competitiveness on `roof repair charlotte` and `roof replacement charlotte`.

**Fix:** Add `<ServiceSchema service={...} includeRating={true}>` to both pages following the inspection-page pattern.

---

### C4. Blog is broken (DNS)
**Evidence:** Your memory notes `cms.bestroofingnow.com` DNS points to Vercel not WordPress — blog currently non-functional. Layout (`src/app/layout.tsx:152, 167`) still preconnects to it and preloads a hero WebP from that origin.

**Impact:** Every page ships a preconnect and image preload to a dead host → wasted request, failed preload, hurts LCP. Plus 400+ blog URLs returning errors if crawled. Double penalty.

**Fix (short term):** Comment out the preconnect + hero preload, or point them at a working CDN. **Fix (real):** Restore WordPress host OR migrate content to MDX in-app. Either way, blog content is a major AEO/LLMO asset going to waste.

---

## HIGH — Fix this month

### H1. `SEOImage.tsx` helper is unused (dead code)
**Evidence:** `src/components/ui/SEOImage.tsx` exists to auto-set `title` attr from `alt` (DataForSEO flags this). Zero usages across the codebase (`rg "<SEOImage"` → nothing). 367 page files import raw `next/image` instead.

**Impact:** Every image page-wide is missing the `title` attribute → DataForSEO reports flag it, minor on-page SEO score drag.

**Fix:** Either (a) codemod all `import Image from 'next/image'` in `src/app/**/page.tsx` to use `SEOImage`, or (b) delete `SEOImage.tsx` and add `title={alt}` at the usage sites that need it. Option (a) is the right call — one safe refactor applied broadly.

---

### H2. JSON-LD blocks not linked via `@graph`
**Evidence:** `rg "@graph" src/components/seo` returns zero matches. Every schema block is a standalone JSON-LD script. On a typical service+location page you have 6-10 separate JSON-LD scripts.

**Impact:** Standalone schemas work, but LLMs and Google benefit from `@graph` which binds entities into a single knowledge graph (business → service → FAQ → reviews all cross-referenced). Cleaner parse = better entity understanding.

**Fix:** Create a `PageGraphSchema` component that wraps all page-level schemas into one `@graph` document. Replace multi-script pattern with one script per page. Non-trivial refactor but high AEO/LLMO payoff.

---

### H3. Homepage hero preload points at likely-404 image
**Evidence:** `src/app/layout.tsx:167` preloads `https://cms.bestroofingnow.com/wp-content/uploads/2025/07/.../hero-picture.webp`. Since WordPress DNS is broken (C4), this preload fails on every page.

**Impact:** Failed preload = negative LCP signal across the entire site.

**Fix:** Move hero image to `/public/images/` or Vercel Blob, update the preload href.

---

### H4. `LocalBusinessSchema` only includes first 10 LOCATIONS for Map Pack
**Evidence:** `src/components/seo/SchemaMarkup.tsx:112` — `LOCATIONS.slice(0, 10)`. The site serves 30+ cities; schema truncates at 10.

**Impact:** Map Pack algorithm sees a smaller declared service area than you actually cover. Cities beyond position 10 (like Rock Hill, Fort Mill SC) get weaker signal.

**Fix:** Remove `.slice(0, 10)` — include all 30+ cities. Or implement tiered areaServed (primary GeoCircle + full city list).

---

### H5. No FAQ schema on commercial pages
**Evidence:** Spot-checking `/commercial-roofing-*` pages shows `FAQSchema` only on Charlotte parent. 18 commercial city pages and commercial-vertical pages (warehouse, church, school, hotel, apartment) lack FAQ schema.

**Impact:** Commercial roofing is a high-revenue, low-competition AEO target. Missing FAQ schema = missing direct answer eligibility.

**Fix:** Add `FAQSchema` with 6-10 commercial-specific Q&As (flat roof types, TPO vs EPDM, lifespan, commercial warranty, insurance) to every commercial page.

---

### H6. Title template math doesn't work for some pages
**Evidence:** `src/app/layout.tsx:43` — template is `%s | Best Roofing Now` (adds 20 chars). That means page titles must be ≤40 chars for 60 total. Spot check of `/storm-damage-roof-repair-matthews-nc` and similar pages — several likely exceed.

**Impact:** Titles truncate in SERPs. Lost click-through.

**Fix:** Audit script — list all pages with `metadata.title.length + 20 > 60`. Shorten or drop the suffix per-page with `title: { absolute: "..." }`.

---

### H7. Review content appears only inside schema, not visible on page
**Evidence:** `src/components/seo/SchemaMarkup.tsx:573-592` hardcodes 3 reviews in JSON-LD. Google now penalizes `aggregateRating` / `Review` schema that isn't backed by visible on-page review content.

**Impact:** Risk of schema being ignored OR manual action for "content not visible to user."

**Fix:** Display the same review text in visible DOM on pages that include `ReviewsSchema` (reviews page, homepage), OR only inject schema when page actually renders reviews.

---

## MEDIUM — Incremental improvements

### M1. LLM crawlers aren't separately granted the llms.txt paths
`robots.ts` disallows `/n86gB65.../` for all bots including AI crawlers. Good. But no explicit `Allow: /llms.txt` directive — minor, usually fine because of default allow, but worth making explicit for ClaudeBot/GPTBot/PerplexityBot.

### M2. `llms.txt` excellent but `llms-full.txt` not verified
The short `llms.txt` at `src/app/llms.txt/route.ts` is best-in-class. Haven't verified the `llms-full.txt` route — needs a sanity check that it's as dense and current.

### M3. No `Speakable` CSS selectors rendered on pages that declare them
`SpeakableSchema` declares selectors `.speakable-intro`, `.speakable-services`, `.speakable-contact`. If pages don't actually apply those classes, the schema is pointing at nothing.

**Fix:** Either drop the schema or add the CSS classes to the real on-page blocks they describe.

### M4. Sitemap `lastmod` uses runtime timestamp
Every request to any sitemap gets a fresh `new Date().toISOString()`. Google uses `lastmod` to prioritize re-crawling — if it changes on every request, signal is meaningless.

**Fix:** Cache `lastmod` per deployment (env var `NEXT_PUBLIC_BUILD_TIME` set at build), or compute per-page based on known content changes.

### M5. No `AggregateOffer` or price signals on service pages
Service pages describe services but don't include price ranges in schema. `Offer` / `AggregateOffer` with `priceRange` is a strong rich-result signal for "cost" and "price" queries — which are huge in roofing.

### M6. No `BreadcrumbList` testing on neighborhood pages
Neighborhood pages (e.g. `/roofing-the-peninsula-cornelius-nc`) have a three-level hierarchy but unclear if breadcrumbs use the actual city as mid-node. Worth verifying on a sample.

### M7. WordPress blog preconnect fires even on pages that don't use CMS
`layout.tsx:152-155` preconnects to `cms.bestroofingnow.com` site-wide. Only blog templates actually use CMS images. Conditional preconnect (only on `/blog/*`) saves request budget site-wide.

---

## LLMO quick wins

### L1. Add explicit citation-ready facts block
LLMs grade heavily on "can I cite a hard fact from this site?" Add a machine-readable facts footer/section to every page:
- Business founded year
- License numbers (NC + SC)
- Insurance amount
- Manufacturer certifications with expiry years
- Crew count
- Average response time

Embed both in visible HTML and `ClaimReview` / `Dataset` schema.

### L2. Add `additionalType` to every Service schema
Point at Wikipedia/Wikidata entities. E.g. `additionalType: "https://en.wikipedia.org/wiki/Roof"`. Helps LLMs disambiguate.

### L3. Don't over-optimize llms.txt
Current `llms.txt` is dense (204 lines). Some LLM crawlers truncate. Keep the short version tight (≤150 lines) and push depth to `llms-full.txt`.

### L4. Add structured "common questions" in plain HTML, not just schema
LLMs read rendered HTML more reliably than JSON-LD. Your FAQ content lives mostly in `FAQSchema`. Mirror it in real `<details><summary>` blocks or numbered Q&A visible to the reader.

### L5. Publish a `/data/service-areas.json` endpoint
Machine-readable, openly crawlable JSON listing every city + coordinates + response time. LLMs love structured endpoints over scraped prose.

### L6. Brand name consistency check
Quick grep for "Best Roofing Now" vs "BestRoofingNow" vs "Best Roofing" — inconsistent brand strings hurt LLM citation.

### L7. Add a "news" or "last updated" signal
Some AI engines downrank stale pages. Add visible "Last updated: {date}" to service + pillar pages. Pull from git or `lastModified` in metadata.

---

## Recommended new pages (keyword gaps)

### R1. Insurance-claim focused landing pages
**Queries:** "roof insurance claim charlotte", "public adjuster vs roofer charlotte", "roofer that works with [carrier] charlotte"
**Per-carrier pages:** State Farm, Allstate, USAA, Nationwide, Farm Bureau NC. High commercial intent, low competition.

### R2. Financing-specific pages (not just banner)
**Queries:** "roof financing no credit charlotte", "roof loan charlotte", "roof payment plans". Your Enhancify integration is a differentiator — dedicated pages convert.

### R3. Storm event response pages
**Template:** `/storm-response-[month]-[year]-charlotte` — activated within 24hr of a named event. Huge urgency traffic.

### R4. Cost comparison matrix pages
**Example:** `/roof-replacement-cost-calculator-charlotte`. Interactive (client-side math). Picks up "roof cost estimator" searches + dominates AI Overview for cost queries.

### R5. Commercial system comparison
**Query:** "TPO vs EPDM vs PVC charlotte" — you have individual system pages but no side-by-side. High-intent commercial decision keyword.

### R6. "Best roofer near [zip]" pages for top 10 Charlotte ZIPs
**ZIPs:** 28211 (SouthPark), 28207 (Eastover), 28210, 28226, 28277 (Ballantyne), 28209, 28270, 28078 (Huntersville), 28036 (Davidson), 28117 (Mooresville)

### R7. Spanish-language landing pages
Charlotte metro has ~15% Hispanic population. `/es/reparacion-de-techo-charlotte`. First-mover in this market.

### R8. Contractor-comparison pages
**Queries:** "Best Roofing Now vs [competitor]" — defensive SEO. Pick your top 5 competitors.

---

## Priorities — What to ship first

**Week 1 (highest ROI, lowest effort):**
1. Fix C2 (one-line sitemap index fix) — 5 min
2. Fix C1 (ServiceAreaPageSchema URL) — 1 hour
3. Add ServiceSchema to the two Charlotte pages (C3) — 30 min
4. Decide on blog fate (C4) — restore DNS OR tear out preconnect

**Week 2:**
5. Codemod to SEOImage (H1)
6. Add FAQ schema to commercial pages (H5)
7. Audit titles exceeding 60 chars (H6)

**Month 1:**
8. `@graph` refactor (H2)
9. Build 3-4 pages from R1/R2 (insurance claim + financing)

**Month 2-3:**
10. L1 citation facts block site-wide
11. R4 interactive cost calculator
12. R5 commercial system comparison

---

## Positive findings (keep doing this)

- **`llms.txt`** is genuinely excellent — one of the better examples you'll find. Dense, citation-ready, LKN-weighted strategically.
- **Schema breadth** — 52 exported schema components is exceptional.
- **Geo signal strategy** — adding Wikipedia + Google Maps on 197 pages is a smart, unusual move that LLMs reward.
- **Multi-sitemap architecture** — cleaner than one monolith.
- **Trust signal strategy** — BBB A+, veteran-owned, manufacturer certs baked into most schema.
- **Lake Norman community embedding** — chamber + SBN + KW partnerships + LKN Connect is a moat, not noise.

---

## Audit artifacts
- Codex raw output: `.codex-audit-output.md` (2346 lines, killed before final report; thinking logs have substantive findings)
- Codex prompt: `.codex-audit-prompt.md`
- This merged report: `SEO-AEO-LLMO-AUDIT.md`
