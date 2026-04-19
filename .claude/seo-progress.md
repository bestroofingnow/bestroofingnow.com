# SEO / AEO / LLMO Audit Progress

**Started:** 2026-04-19
**Loop:** /loop dynamic mode, 10-min cadence
**Scope:** Audit + enhance every page on bestroofingnow.com for SEO, AEO (Answer Engine Optimization), and LLMO (LLM discoverability)

## Audit Framework (applied to each page)

**SEO:**
- Metadata: title ≤42 chars, description 120–160, keywords array, canonical, openGraph (title, desc, url, images), twitter card
- Structured headings: one H1, logical H2/H3 nesting
- Internal links: parent hub + sibling services + related cities
- Image alt text on all images
- Word count sufficient for intent (≥800 words for service+location)

**AEO:**
- FAQSchema (10+ questions minimum for service+location)
- FeaturedSnippetListAnswerSchema (one per page, list-format question)
- SpeakableContentBlocks (company + services + contact)
- VoiceSearchActionSchema
- Speakable intro paragraph with `.speakable-intro` class
- AISearchOptimizationBundle
- FreeInspectionOfferSchema (where relevant)

**LLMO:**
- Listed in `/llms.txt` and `/llms-full.txt`
- Listed in appropriate sitemap (core, lake-norman, etc.)
- WebPageSchema with full breadcrumb + primaryImage
- Local context: named neighborhoods, climate stressors, common issues
- Citations-ready content (pricing ranges, service timelines, specific brands)

## Queue (priority-ordered)

### Tier 1 — High-value hubs (already heavily optimized, verify only)
- [x] `/` (homepage) — 2026-04-19 — Comprehensive, no enhancement needed. 16+ schemas, full AEO bundle, speakable content blocks, featured snippet schema, geo-tagged gallery, community sections.

### Tier 2 — Thin service+location pages (200–250 lines, highest enhancement ROI)
- [x] `roof-inspection-matthews-nc` — 2026-04-19 — Added 4 schemas (WebPage, FeaturedSnippet, Speakable, FreeInspectionOffer), expanded FAQs 6→10 with Matthews-specific answers, added 10-point inspector checklist section, added "Roof Conditions Unique to Matthews" section (4 local climate cards), added speakable-intro with neighborhoods, added related-services internal link strip. 199→287 lines.
- [x] `storm-damage-roof-repair-matthews-nc` — 2026-04-19 — Same enhancement pattern as inspection page: +4 schemas, FAQs 6→10 with claim/insurance specifics, 10-point damage red-flags section, Matthews storm history + insurance carriers section, speakable-intro with neighborhoods, related-services link strip. 201→322 lines.
- [x] `storm-damage-roof-repair-davidson-nc` — 2026-04-19 — Mirrored Matthews pattern with Lake Norman framing: +4 schemas (WebPage, FeaturedSnippet, Speakable, FreeInspectionOffer), FAQs 6→10 with LKN-specific context (lakefront wind fetch, lakefront deductibles, lakefront cost range), 10-point damage red-flags section, Davidson + LKN storm history card grid (lake-effect wind exposure added), speakable-intro with River Run/Bailey's Glen/St. Alban's/Summers Walk/Davidson College neighborhoods, related-services link strip. Preserved existing LKNPartnershipsBlock + LKNDataCitations. 202→283 lines.
- [x] `commercial-roofing-matthews-nc` — 2026-04-19 — Commercial-specific enhancement pass: +4 schemas (WebPage, FeaturedSnippet, Speakable, FreeInspectionOffer), FAQs 6→10 with commercial specifics (2026 pricing by system, NDL warranties, re-cover vs tear-off, cool roof/energy code, building types, Duke Energy rebates), added 6-system roofing-systems grid with pricing/warranties, replaced inspection section with 10-point commercial inspection checklist (moisture survey, termination bar, drain strainers, lightning protection), added Matthews commercial context 4-card grid (building types, corridors like Independence Blvd / Matthews Township Pkwy, certifications, IECC zone 4A energy code), speakable-intro enumerating corridors + building types, related-services link strip. 203→284 lines.
- [x] `roof-repair-davidson-nc` — 2026-04-19 — +4 schemas, FAQs 6→10 with Davidson specifics (2026 pricing per repair type, lakefront premium, wood shake/metal/tile repair, insurance deductibles for lakefront), expanded repair-types descriptions, added 10-point repair red-flags section, added Davidson context 4-card grid (Lake Norman wind, common failure points with ages, Historic Davidson considerations, repair-vs-replace math crossover), speakable-intro with neighborhoods, related-services link strip. Preserved LKN components. 204→279 lines.
- [x] `commercial-roofing-davidson-nc` — 2026-04-19 — Mirrored Matthews commercial pattern with Davidson/LKN framing: +4 schemas, FAQs 6→10 with Davidson commercial specifics (Downtown/Jetton/Griffith corridor pricing, Davidson College LEED, lakefront perimeter attachment, multi-family portfolios), 6-system pricing grid, 10-point commercial inspection checklist, Davidson context 4-card grid (building types, corridors, certifications, lake + IECC 4A climate), speakable-intro enumerating Davidson commercial corridors. Preserved LKN components. 205→285 lines.
- [x] `gutter-installation-matthews-nc` — 2026-04-19 — +4 schemas, FAQs 6→10 with gutter specifics (2026 per-ft pricing for 5"/6"/7"/half-round/copper, sizing by roof area, micro-mesh vs reverse-curve for oak/pine canopy, .032 vs .027 aluminum lifespan, fascia-repair bundle, buried 4" drain routing, rainfall-intensity sizing), added 10-point sizing checklist, added Matthews context 4-card grid (tree canopy, Piedmont rainfall intensity, Mecklenburg clay soil, Historic Downtown half-round/copper), speakable-intro with neighborhoods + canopy note, related-services link strip. Also fixed HTML entity `&amp;` in a string literal that would have rendered literally. 207→312 lines.
- [x] `gutter-installation-davidson-nc` — 2026-04-19 — Mirrored Matthews gutter pattern with Davidson/LKN framing: +4 schemas, FAQs 6→10 with Davidson specifics (2026 per-ft pricing with lakefront premium, sizing rules with lakefront/canopy adjustments, micro-mesh vs foam in humid lake climate, lake-safe downspout discharge and shoreline protection, Historic Davidson heritage profiles, Davidson HOA color matching), 10-point sizing checklist including lakefront and Historic Davidson items, Davidson context 4-card grid (tree canopy + lakefront cypress, Piedmont + lake-effect rainfall, lakefront drainage/shoreline, Historic Davidson aesthetics), speakable-intro with neighborhoods + lake-safe discharge note, related-services link strip. Used JSX single-quoted attribute to avoid inch-mark quote collision (lesson learned from Matthews round). Preserved LKN components. 209→310 lines.

### Tier 2 status: COMPLETE
All 8 Tier 2 service+location pages enhanced. Next pass: Tier 3 directory/listing pages, starting with `locations` (146 lines).

### Tier 2 template learnings
After 3 rounds (inspection-matthews, storm-matthews, storm-davidson), the enhancement recipe is stable:
1. Add 4 schemas: WebPageSchema, FreeInspectionOfferSchema, FeaturedSnippetListAnswerSchema, SpeakableContentBlocks
2. Expand FAQs 6→10 with hyperlocal answers (pricing ranges, carriers, deductibles, neighborhoods)
3. Add a 10-point "red flags / inspection checklist" grid section
4. Add a 4-card local context grid (climate, carriers, materials, property type)
5. Add `.speakable-intro` class to hero paragraph, enumerate neighborhoods
6. Add related-services internal link strip inside the context section
7. Preserve existing LKN components on LKN cities (Davidson, Cornelius, Huntersville, Mooresville, Denver, Troutman, Sherrills Ford)
Candidate for extraction once 2 more siblings done: `<ServiceLocationEnhancementBlock city service neighborhoods />` wrapper.

### Tier 3 — Directory/listing pages
- [x] `locations` — 2026-04-19 — Directory page enhancement (different recipe than Tier 2). Added: WebPageSchema, CollectionPageSchema (maps all 45+ cities to schema.org ItemList), FAQSchema (7 coverage FAQs), SpeakableContentBlocks, AISearchOptimizationBundle, VoiceSearchActionSchema. Added speakable-intro listing 12 counties across NC + SC. Regrouped flat grid into by-county sections (Mecklenburg, Cabarrus, Union, Gaston, Iredell, Lincoln, Catawba, Rowan, Cleveland, Stanly, York SC, Lancaster SC) with county-level descriptor paragraphs. Added 6-point coverage checklist ("What You'll Find on Every City Page"). Each city card now shows distance-from-HQ. Fixed keyword set, canonical, og tags. 146→268 lines.
- [x] `blog` — 2026-04-19 — Directory enhancement. Preserved existing Blog schema + BlogPosting loop + BlogContent component. Added: WebPageSchema, FAQSchema (6 blog-meta FAQs covering authorship, update cadence, scope, commercial coverage, CMS hosting, NC geo-scope), SpeakableContentBlocks, AISearchOptimizationBundle, VoiceSearchActionSchema. Added speakable-intro paragraph describing content scope and team. Added 6-item "What You'll Find" pillar checklist. Added 6-cluster "Browse by Topic" section — storms/hail, insurance claims, repair-vs-replace, materials/comparisons, maintenance/seasonal, cost/financing/warranties — each with 3 curated anchor links to representative posts for topic-cluster internal linking. Expanded metadata keywords, canonical, og. 160→279 lines.
- [x] `products` — 2026-04-19 — Directory enhancement (page had strong foundation: WebPage + CollectionPage + Breadcrumb). Added: FAQSchema (8 shingle-choice FAQs covering brand-vs-brand, warranty structure real-world interpretation, Class 4 ROI/insurance discount math, NC wind-rating code, color selection for Charlotte home styles + HOA, designer/specialty installation, how shingle tier affects total cost, manufacturer certifications we hold), SpeakableContentBlocks, AISearchOptimizationBundle, VoiceSearchActionSchema. Added speakable-intro hero paragraph naming the 5 certified manufacturers. Added 6-item "What You'll Find" pillar checklist. Added 4-tier "Shingle Decision Tiers" grid (Good/Better/Best/Luxury) with 2026 price bands and representative SKUs per tier. Reorganized brand sections under "All Products by Brand" h2, showed product count per brand. Expanded metadata keywords and og tags. 187→303 lines.
- [x] `materials` — 2026-04-19 — Directory enhancement. Added: WebPageSchema, CollectionPageSchema (mapping all ROOFING_MATERIALS), FAQSchema (8 material-comparison FAQs covering popularity by share, longest-lasting material by climate, 2026 cost-per-sq-ft ranges for all 10+ materials, metal vs asphalt ROI math, storm/hail performance, HOA restrictions, structural engineering for material switches, Class 4 insurance discount qualification), SpeakableContentBlocks, AISearchOptimizationBundle, VoiceSearchActionSchema. Added speakable-intro hero paragraph listing all material categories. Added 6-item "What You'll Find" pillar checklist. Added 4-use-case decision guide (Budget-Friendly Family / Long-Term Energy Savings / Historic or Luxury / Commercial Flat) with rationale per use case and links to matching material or service page. Preserved existing comparison table + material grid. Expanded keywords and og tags. 212→329 lines.
- [ ] `brands` (215 lines)
- [ ] `roof-types` (215 lines)
- [ ] `seasonal` (215 lines)
- [ ] `guides` (217 lines)
- [ ] `services` (230 lines)
- [ ] `compare` (234 lines)

### Tier 4 — Service entity pages
- [ ] `flat-roof-repair` (227 lines)
- [ ] `chimney-flashing-repair` (238 lines)
- [ ] `skylight-installation` (241 lines)
- [ ] `standing-seam-metal-roofing` (244 lines)
- [ ] `emergency-roof-tarping`
- [ ] `fascia-soffit-repair`
- [ ] `gutter-repair`
- [ ] `architectural-shingles`
- [ ] `hail-damage-roof-repair`
- [ ] `roof-coating`
- [ ] `roof-maintenance`
- [ ] `roof-certification`
- [ ] `gutter-guards`
- [ ] `ridge-vent-installation`
- [ ] `cedar-shake-roofing`
- [ ] `tile-roofing`

### Tier 5+ — Charlotte service+location (expand queue as we go)
- Pending: ~90 Charlotte-suffix pages
- Pending: ~30 Lake Norman cluster pages
- Pending: ~25 neighborhood pages
- Pending: brand pages, building-type pages, blog posts

## Notes
- Homepage needs no changes — skip in future passes.
- Service+location templates (Matthews/Davidson pattern) are the highest-leverage enhancement targets: many siblings, same template gaps.
- After fixing ~5 siblings of same template, consider extracting the enhancements into a shared helper/component.
