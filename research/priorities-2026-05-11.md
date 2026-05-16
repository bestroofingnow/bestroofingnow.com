# Content Priorities — Top 10 Opportunities
**Generated:** 2026-05-11
**Data Sources:** Ahrefs GSC connector (last 90d), Ahrefs Site Explorer (live), existing topic-clusters (2026-03-28), trending research (2026-03-28), Lake Norman gap analysis (2026-04-10)
**Project:** Bestroofingnow (Ahrefs project_id 9751727)

---

## SCORING METHODOLOGY

Each opportunity is scored 0–100 on five factors:
- **Proximity to page 1** (closer = higher) — distance from position 10
- **Search volume** (higher = higher) — Ahrefs-reported monthly searches
- **Commercial value** (CPC + intent flags) — Ahrefs commercial/transactional flags weighted with CPC
- **Trend momentum** — overlap with rising trend research (2026-03-28)
- **Topic cluster leverage** — does the win reinforce a weak/moderate authority cluster?

Existing-content updates rank higher because they're faster wins. New-content items are ranked when the volume and commercial value justify the build.

---

## DATA OVERVIEW

- **GSC keywords on page 2 (pos 11–20, last 90d):** 55 — top tier mostly homepage + neighborhood location pages
- **Ahrefs-tracked rankings pos 4–20 with volume ≥ 30:** 15 keywords, most clustered around `/metal-roof-cost`, homepage, and `/charlotte-roofing-costs-2026`
- **Homepage**: pos 2.2 on 1,324 keywords / 50,890 impressions / 0.12% CTR — biggest single CTR optimization target on the site
- **Three location pages ranking top 5 with 0 clicks** (Dilworth, Providence Plantation, University City) — title/meta refresh, not ranking work

---

## 🏆 TOP 10 PRIORITIES

---

### 1. `/metal-roof-cost` — EXISTING CONTENT UPDATE | Priority: HIGH
- **Top keyword:** "1,500 sq ft metal roof cost"
- **Current position:** 10 (just outside top 10)
- **Search Volume:** 1,500/mo
- **Keyword Difficulty:** 3
- **Current traffic:** 47/mo (Ahrefs estimate)
- **Potential traffic at pos 5–7:** ~150–200/mo
- **Additional clicks:** +100–150/mo
- **Opportunity Score:** 94/100

**Also ranking on this URL:**
- "metal roof replacement cost" — pos 25, 700/mo, CPC $0.08
- "1000 sq ft metal roof cost" — pos 10, 100/mo
- "corrugated metal roof cost" — pos 12, 100/mo, CPC $2.34 (commercial + transactional)
- "average cost of metal roof on 1500 square foot homes" — pos 13, 40/mo

**Why it matters:** Best single-URL opportunity on the site. Already ranking pos 10 for a 1,500/mo low-difficulty keyword and pulling 47 visits/mo. Page is the natural pillar for the entire metal-roof-cost cluster — five related keywords are within striking distance on the same URL. Topic cluster authority for "Metal Roofing" is only 33/100 (weak); this page is the linchpin.

**Action:**
- [ ] Expand with size-based cost tables (1000/1500/2000/2500/3000 sq ft) — captures every "X sq ft metal roof cost" variant
- [ ] Add dedicated section "Metal Roof Replacement Cost" (700/mo at pos 25 — needs deeper coverage to move up)
- [ ] Add "Corrugated Metal Roof Cost" subsection with material-by-material pricing
- [ ] Add 2026 Charlotte/NC regional pricing and labor multipliers
- [ ] Build interlinks from `/shingle-vs-metal-roof-cost`, `/services/metal-roofing`, and all metal-roofing location pages
- [ ] Add FAQ schema for "how much does a metal roof cost in NC" / "is a metal roof worth it in Charlotte"
- [ ] Target position: 4–6

---

### 2. Homepage Title + Meta Description Rewrite — EXISTING CONTENT UPDATE | Priority: HIGH
- **URL:** `https://bestroofingnow.com/`
- **Current position (avg):** 2.21
- **Impressions (90d):** 50,890
- **Clicks (90d):** 63
- **Current CTR:** 0.12% — *industry baseline at pos 2 is ~15–18%*
- **Ahrefs keyword count:** 1,324 keywords
- **Top commercial keyword in GSC quick wins:** "roofing contractor charlotte nc" (pos 12.0, 42 imp), "roofing companies charlotte nc" (pos 14.0, 58 imp)
- **Best money keyword (Ahrefs):** "best roofing company charlotte nc" — pos 9, 150/mo, CPC **$12.35**
- **Estimated additional clicks if CTR moves from 0.12% to 4%:** +650/qtr (~+217/mo)
- **Opportunity Score:** 92/100

**Why it matters:** The single biggest underperformer on the site. The homepage already ranks pos 2.21 across 1,324 keywords but is only converting 0.12% of impressions into clicks. That's a snippet/title problem, not a ranking problem. Even moving CTR to the modest 4% range for a pos-2 listing yields +200 clicks/mo without any new content or links.

**Diagnostics to confirm:**
- [ ] Check current `<title>` and meta description in `src/app/page.tsx` — are they truncated, generic, or missing the "Charlotte NC" geo qualifier?
- [ ] Check for missing FAQ/HowTo/LocalBusiness rich-result eligibility (the 0.12% CTR pattern often indicates the SERP listing is being eclipsed by sitelinks, AI Overview, or local pack)
- [ ] Check if the homepage is being served as a generic snippet vs. a curated meta description

**Action:**
- [ ] Rewrite homepage `<title>` to lead with "Charlotte NC Roofing Company" + benefit ("Free Estimate" / "Lifetime Warranty" / "0% Financing") — ≤42 chars after the layout suffix
- [ ] Rewrite meta description with active voice CTA, Charlotte geo, 2 review/trust signals, and a phone number
- [ ] Audit homepage `Person`/`Organization`/`LocalBusiness` schema for review counts, aggregateRating, and openingHours
- [ ] Add `WebSite > SearchAction` schema (gets sitelinks search box)
- [ ] Verify Google Site Settings → review snippet visibility
- [ ] Re-pull GSC CTR in 4 weeks; expect 5–10× lift

---

### 3. `/charlotte-roofing-costs-2026` — EXISTING CONTENT UPDATE | Priority: HIGH
- **Keywords ranking on this URL:**
  - "how much does a new roof cost in nc" — pos 9, 70/mo, KD 1
  - "roof replacement cost charlotte nc" — pos 5, 30/mo, CPC **$5.03**
- **Plus from GSC:** "average roof replacement cost charlotte" — pos 11.6, 14 imp
- **GSC pages data:** `/guides/roof-replacement-cost` shows 7 keywords at avg pos 15.3 — sibling page also has lift potential
- **Current traffic:** ~6/mo Ahrefs estimate (very low capture)
- **Opportunity Score:** 86/100

**Why it matters:** Two keywords already in the top 10 (one at #5 with $5 CPC). Cost-of-X queries convert: searchers in the pricing-research stage are 30–60 days from buying. The "Shingle Cost & Pricing" cluster is only 40/100 authority (weak) and has 9,970/mo addressable volume sitting in untouched gap keywords (see #10 below). This page is the local-Charlotte anchor for that cluster.

**Action:**
- [ ] Add 2026 pricing tables with per-square-foot Charlotte regional rates
- [ ] Add side-by-side material cost comparison (asphalt / metal / tile / synthetic slate) — captures the comparison subqueries
- [ ] Add cost-by-size table (1500 / 2000 / 2500 / 3000 sq ft Charlotte homes) — interlocks with `/metal-roof-cost` pillar
- [ ] Add financing snippet linking to financing page (Financing cluster scores 11/100 — minimal authority, easy lift)
- [ ] Add `Cost` schema (Product or HowMuch) for AI Overview eligibility
- [ ] Cross-link with `/guides/roof-replacement-cost`, `/asphalt-shingle-roof-cost`, `/metal-roof-cost`
- [ ] Target position: 3–5

---

### 4. `/locations/charlotte-nc/plaza-midwood` — EXISTING CONTENT UPDATE | Priority: HIGH
- **GSC keywords ranking (last 90d):**
  - "roofing services plaza midwood charlotte nc" — pos 11.9, 27 imp
  - "roofer plaza midwood charlotte nc" — pos 13.8, 23 imp
  - "roofing contractor plaza midwood charlotte nc" — pos 12.3, 16 imp
  - "roofing plaza midwood charlotte nc" — pos 12.6, 15 imp
- **Page total:** 5 keywords, avg pos 11.78, 106 impressions, **0 clicks**
- **Opportunity Score:** 79/100

**Why it matters:** Five "near me" intent keywords all sitting between pos 11 and 14 — a single rank improvement breaks the page onto page 1 across the entire keyword set simultaneously. The "South Charlotte / Union County" cluster scores 49/100 (moderate) and Plaza Midwood feeds it.

**Action:**
- [ ] Audit page word count vs. competitor neighborhood pages (likely thin — needs 800–1200 words)
- [ ] Add Plaza Midwood-specific signals: nearby landmarks (Independence Park, Common Market), housing stock (1920s bungalows, mid-century ranches), typical roof types in the neighborhood
- [ ] Add 3–5 Plaza Midwood project photos via PMI
- [ ] Add ServiceArea schema with Plaza Midwood ZIP codes (28205, 28204)
- [ ] Interlink from `/locations/charlotte-nc/` parent and from `/locations/charlotte-nc/dilworth` (geographically adjacent)
- [ ] Target position: 6–8

---

### 5. Location Page Title/Meta CTR Fixes (Dilworth, Providence Plantation, University City) — EXISTING CONTENT UPDATE | Priority: HIGH
- **`/locations/charlotte-nc/dilworth`** — pos 3.26 / 39 imp / **0 clicks**
- **`/locations/charlotte-nc/providence-plantation`** — pos 1.97 / 33 imp / **0 clicks**
- **`/locations/charlotte-nc/university-city`** — pos 5.10 / 98 imp / **0 clicks**
- **Combined impressions:** 170 / 90d → 56/mo
- **Opportunity Score:** 76/100

**Why it matters:** Three pages already inside the top 5 with **zero** clicks. This is purely a snippet problem — the SERP listings are not earning the click. Easiest 5-minute optimization on the site. Even moving CTR to 3% across these three pages adds ~12 leads/yr at high local intent.

**Diagnostic check first:**
- [ ] View each page's current title + meta in browser DevTools or `view-source:` — are they templated/identical/missing?
- [ ] Check if these listings are being suppressed by Google local pack (zero clicks at pos 2 strongly suggests local-pack cannibalization)
- [ ] Verify the GBP listing isn't covering the same query (if so, the click is going to GBP — not lost, just attributed elsewhere)

**Action:**
- [ ] If GBP is cannibalizing → mark these as informational priority, not lead priority
- [ ] If not → rewrite each page's `<title>` and meta description with neighborhood-specific value props ("Dilworth Historic-District Roofing — Bungalow & Craftsman Specialists")
- [ ] Add a phone number to meta description
- [ ] Add Speakable/FAQ schema for AI Overview pickup
- [ ] Re-pull GSC CTR in 4 weeks

---

### 6. `/shingle-vs-metal-roof-cost` — EXISTING CONTENT UPDATE | Priority: HIGH
- **Top keyword:** "cost of metal roof vs shingle"
- **Current position:** 19
- **Search Volume:** 600/mo
- **Keyword Difficulty:** 3
- **CPC:** $2.03
- **Cluster gap keywords (per Mar 28 research):**
  - "shingle versus metal roof cost" — 6,600/mo (not ranking)
  - "cost of shingle roof vs metal roof" — 6,600/mo (not ranking)
  - "metal roof cost vs shingle" — 6,600/mo (not ranking)
- **Opportunity Score:** 81/100

**Why it matters:** Comparison-cost queries are decision-stage. The current page ranks pos 19 with KD 3 — a real ranking improvement opportunity. Beyond the existing keyword, the page is positioned to absorb three 6,600/mo variant keywords that the page is *almost certainly* matching internally but not optimizing for in headers/anchors.

**Action:**
- [ ] Add H2/H3 sections targeting each phrase variant: "Shingle vs Metal Roof Cost," "Cost of Shingle Roof vs Metal Roof," "Metal Roof Cost vs Shingle"
- [ ] Add a head-to-head cost-per-year ROI table (initial cost ÷ realistic lifespan)
- [ ] Add Charlotte-specific note: HOA approval differences, hail/storm resistance, insurance discounts for metal in NC
- [ ] Add FAQ schema with the three variant phrases as questions
- [ ] Interlink heavily from `/metal-roof-cost`, `/services/metal-roofing`, and all shingle cost pages
- [ ] Target position: 6–8

---

### 7. `/blog/energy-efficient-roofing-in-2025-...` — EXISTING CONTENT UPDATE | Priority: MEDIUM-HIGH
- **GSC keyword:** "most energy-efficient roofing options for homes 2025 or 2026" — pos 11.6, 52 imp
- **Cluster:** "Energy Efficiency & Eco-Friendly" — only 21/100 authority (weakest topical area with real volume)
- **Page total:** 3 keywords, avg pos 11.5, 54 imp, 0 clicks
- **Sibling page** `/blog/the-best-roofing-materials-for-energy-efficiency-in-north-carolina` — 15 keywords at avg pos 17.6, 46 impressions — needs consolidation or cross-linking
- **Opportunity Score:** 73/100

**Why it matters:** Page is sitting just outside the top 10 on a topic where you currently have *no* topical authority. Energy-efficient roofing is a rising commercial intent topic (homeowners increasingly searching cool-roof / SRI). Two near-duplicate blog posts likely cannibalizing each other.

**Action:**
- [ ] Audit duplication between the two energy-efficiency posts; consolidate into one canonical pillar or build clear pillar→supporting structure
- [ ] Update title and H1 to "2026" (currently dated 2025)
- [ ] Add NC-specific climate data (cooling degree days, summer attic temps) and ROI calculation
- [ ] Add specific cool-roof product mentions (CertainTeed Solaris, GAF Timberline Cool Series)
- [ ] Add internal links from `/services/metal-roofing`, `/architectural-shingles`, location pages
- [ ] Target position: 5–7

---

### 8. `/services/flat-roof-repair` — EXISTING CONTENT UPDATE | Priority: MEDIUM-HIGH
- **Top keyword:** "flat roof repair charlotte nc"
- **Current position:** 9 (just outside top 5)
- **Search Volume:** 80/mo
- **Keyword Difficulty:** 0
- **Intent:** Commercial + local
- **CPC:** (Ahrefs null but cluster CPCs run $15–30 for commercial roofing)
- **Cluster:** "Flat / Commercial Roofing" — 36/100 (weak)
- **GSC quick wins also pointing to this cluster:**
  - "commercial roof maintenance contractor" — pos 11.2, 17 imp
  - "commercial roof installation service" — pos 11.2, 49 imp
  - "preventative commercial roof maintenance" — pos 12.1, 10 imp
  - "flat roof maintenance commercial" — pos 12.8, 20 imp
  - "scheduled commercial roof inspection" — pos 11.9, 18 imp
- **Opportunity Score:** 71/100

**Why it matters:** Multiple commercial-roof queries clustered at pos 11–13 (just below page 1), and the service hub page is at pos 9 on its target keyword. Commercial CPCs are 2–4× residential. A flat-roof + commercial-maintenance content push reinforces an entire cluster simultaneously.

**Action:**
- [ ] Expand the flat-roof page with sections on commercial maintenance contracts, scheduled inspections, and PM (preventative maintenance) — these match the GSC near-misses verbatim
- [ ] Add commercial system breakdowns (TPO / EPDM / modified bitumen) with Charlotte climate notes
- [ ] Create or link to a `/services/commercial-roof-maintenance-charlotte-nc` if absent
- [ ] Add Service + LocalBusiness schema with `areaServed`
- [ ] Target position: 4–6

---

### 9. **Storm Damage / Emergency Roof Repair "near me" cluster** — NEW CONTENT CREATION | Priority: HIGH
- **Target keywords:**
  - "storm damage roof repair near me" — **+179% growth**, 2,900/mo, CPC **$17.67**, NOT RANKING
  - "emergency roof repair near me" — **+85% growth**, 6,600/mo, CPC **$44.52**, NOT RANKING
  - "roof storm damage near me" — pos 16.8 (GSC), 10 imp — already crawling, no anchor page
  - "after storm roof damage" — pos 16.3 (GSC) — borderline
- **Combined addressable volume:** ~9,600/mo with the highest CPCs on the site
- **Opportunity Score:** 88/100 (NEW content multiplier applied)

**Why it matters:** Storm/emergency "near me" is the most lucrative intent on this site by an order of magnitude — $44 CPC means each click is worth tens of dollars in paid-equivalent value. Growth trend is the strongest in the trending research (Mar 28). Spring storm season in NC peaks April–August; acting in May captures peak demand. Current `/problems/storm-damage-repair` exists but is targeting a different phrase variant and ranks pos 16.8 on the local-intent variant.

**Action:**
- [ ] Audit the existing `/problems/storm-damage-repair` and `/storm-damage-roof-repair-charlotte-nc` pages — decide consolidate vs. split
- [ ] Build (or significantly upgrade) one page targeting "storm damage roof repair near me" with: 24/7 response time, insurance claim process, Charlotte/Mecklenburg storm history, before/after photos, on-page LocalBusiness + EmergencyService schema, response-time speakable
- [ ] Build a sibling page for "emergency roof repair near me" with phone-first CTA, sub-2-hour response promise, what-to-do-now checklist
- [ ] Add Emergency CTA banner on all location pages linking to both
- [ ] Add to sitemap core route + middleware KNOWN_ROUTES
- [ ] Target position: top 10 within 60 days

---

### 10. **Asphalt Shingle Cost Cluster** — NEW CONTENT CREATION | Priority: HIGH
- **Pillar target:** `/asphalt-shingle-roof-cost` (already exists — verify and upgrade)
- **Gap keywords (per Mar 28 cluster analysis, all LOW competition):**
  - "cost of an asphalt shingle roof" — 12,100/mo, CPC $7.64
  - "asphalt shingle roof cost" — 12,100/mo, CPC $7.64
  - "cost of asphalt shingle roof replacement" — 8,100/mo, CPC $12.44
  - "asphalt shingle roof replacement cost" — 8,100/mo, CPC $12.44
- **Combined addressable volume:** ~40,400/mo (low competition)
- **Current cluster authority:** 40/100 (weak)
- **Existing page** `/blog/roof-shingle-cost-per-square-foot` ranks pos 60 for "roofing shingles prices" (5,400/mo) — overperforming for position; signals topical potential
- **Opportunity Score:** 84/100

**Why it matters:** Biggest unclaimed volume cluster on the site. Existing blog post at pos 60 is already driving 108 est. clicks/mo (massive overperformance) — moving any of this cluster into the top 20, let alone page 1, compounds. CPCs are $7–12 across the cluster.

**Action:**
- [ ] Verify `/asphalt-shingle-roof-cost` exists and audit its current state — if absent, build a 2,500-word pillar
- [ ] Build supporting articles:
  - "Cost of Asphalt Shingle Roof Replacement: 2026 Calculator"
  - "Asphalt Shingle Cost by Brand (GAF, Owens Corning, CertainTeed, Atlas)"
  - "Asphalt Shingle Cost vs Metal Roof Cost: Charlotte NC Breakdown" (cross-links with #6)
- [ ] Add internal links from `/blog/roof-shingle-cost-per-square-foot`, `/architectural-shingles`, `/asphalt-shingle-roofing-charlotte-nc`
- [ ] Add Product/Offer schema with price ranges
- [ ] Target: top 50 within 30 days, top 20 within 90 days, top 10 within 120 days

---

## 🔧 HONORABLE MENTIONS (Next 5)

| # | Opportunity | Type | Score |
|---|---|---|---|
| 11 | `/locations/charlotte-nc/blakeney` — 218 imp, pos 44.9. High-impression page that needs content depth before it can rank | UPDATE | 67 |
| 12 | `/locations/charlotte-nc/waverly` — pos 58.5 on "roofing beverly woods charlotte nc" (real local query, page positioned poorly) | UPDATE | 64 |
| 13 | Build `/locations/statesville-nc` + `/locations/troutman-nc` (entirely missing per Apr 10 Lake Norman gap analysis) | NEW | 62 |
| 14 | Solar Roofing Lake Norman service page (competitors ranking, no BRN coverage) | NEW | 60 |
| 15 | `/blog/best-roofing-company-near-concord-nc` — 18 keywords at pos 55.75 / 88 imp. Strong topical signal, major content refresh needed | UPDATE | 58 |

---

## 📊 SUMMARY

**Content Type Breakdown:**
- Existing Content Updates: 8 items (#1–#8)
- New Content Creation: 2 items (#9, #10)
- Honorable Mentions: 5 items (mix)

**Estimated Combined Potential (top 10 only, conservative):**
- Current measurable monthly clicks across these URLs: ~120
- Potential monthly clicks if successful: ~700–900
- Additional monthly clicks: **+600–780**
- Highest CPC-weighted value: Storm/Emergency cluster (+$10K+/mo paid-equivalent)

**Recommended Execution Order (next 30 days):**

**Week 1 (the "instant wins"):**
1. Homepage title + meta rewrite (#2) — 30 min of work, biggest leverage
2. Location title/meta fixes for Dilworth + Providence Plantation + University City (#5) — 1 hr
3. Audit + plan for storm/emergency "near me" cluster (#9) — decide consolidate vs. new

**Week 2 (the "expand and refresh"):**
4. `/metal-roof-cost` expansion with size-based tables (#1)
5. `/shingle-vs-metal-roof-cost` H2 expansion (#6)
6. Plaza Midwood neighborhood depth pass (#4)

**Week 3 (the "cluster build"):**
7. `/charlotte-roofing-costs-2026` 2026 pricing refresh (#3)
8. Energy-efficient roofing consolidation + 2026 update (#7)
9. `/services/flat-roof-repair` commercial-maintenance expansion (#8)

**Week 4 (the "new builds"):**
10. Storm damage / emergency repair "near me" — ship pages (#9)
11. Begin asphalt shingle cost cluster (#10)

**Verification cadence:**
- Re-pull GSC quick wins in 4 weeks (target: 2026-06-08)
- Watch CTR specifically on homepage + the 3 location fixes — expect 5–10× lift on CTR fixes within 2 weeks
- Watch position on `/metal-roof-cost` for "1,500 sq ft metal roof cost" — target pos 4–6

---

## 🔍 NOTES + CAVEATS

- **Existing research files** (priorities-2026-03-28.md, topic-clusters-2026-03-28.md, trending-2026-03-28.md) are 6 weeks old. The cluster authority scores and trending growth rates are directional but not current. Trend momentum is likely still valid for the storm/emergency keywords given the seasonal pattern.
- **Local-pack cannibalization** is the #1 alternative explanation for the homepage's 0.12% CTR and the three location pages with 0 clicks at top-5 positions. Confirm by checking the actual SERPs for these queries before assuming title/meta is the fix.
- **DataForSEO scripts** in `/scripts` could replace this with deeper trend + competitor data on the next run; consider running `scripts/research-trending.mjs` and `scripts/lake-norman-gaps.mjs` to refresh those datasets if this roadmap is reused.
- **GSC has thin 30-day data** for this property — only 1 quick-win keyword in the most recent 30-day window. The 90-day pull (Feb 11 – May 11) is more representative.
- Three high-position / 0-click location pages (Dilworth, Providence Plantation, University City) are the most diagnostic-sensitive item: verify GBP isn't cannibalizing before investing in title rewrites.

---

**Next Commands:**
- `/seo:analyze-existing /metal-roof-cost` — deep dive on the #1 opportunity
- `/seo:write storm damage roof repair near me` — start the #9 build
- `/seo:optimize /charlotte-roofing-costs-2026` — pre-publish optimization for the #3 refresh
