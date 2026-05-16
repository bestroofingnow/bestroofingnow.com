# Content Priorities — Delta Report

**Generated:** 2026-05-15
**Type:** Delta from [priorities-2026-05-11.md](./priorities-2026-05-11.md) (4 days prior)
**Data Sources:** Git working tree, Ahrefs GSC connector (Apr 15 – May 15), Ahrefs Site Explorer (May 15 vs Apr 15)
**Project:** Bestroofingnow (Ahrefs project_id 9751727)

---

## 🚨 HEADLINE FINDING — ACT FIRST

**Nothing from the May 11 plan has shipped.** The action items were applied to the working tree (550 modified files, mostly page rewrites + new components) but **no commits exist since 2026-04-27**. None of the May 11 work is live on production.

Until those changes are committed and deployed, the May 11 plan is **delivering zero impact**. Every metric in this report measures the same pre-May-11 page versions Google has been crawling.

**Required first action (15 minutes):**
1. Review the working-tree diff (`git status` shows 550 changes) and confirm scope is intentional
2. Stage + commit in logical groups (homepage, locations, cost pages, schema additions)
3. Push and verify Vercel deploy
4. Re-pull GSC in 14 days to measure the actual lift

---

## ✅ MAY 11 ACTION ITEMS — VERIFICATION

Verified by inspecting working-tree diffs. **All "applied" items are unshipped — see headline finding.**

| # | Item | Status | Notes |
|---|---|---|---|
| 1 | `/metal-roof-cost` — size-based H3 grid (1000/1500/2000/2500/3000 sq ft) | ✅ Applied (uncommitted) | Inline comment dates change to 2026-05-11. New IDs `#1000-sq-ft-metal-roof-cost` etc. |
| 2 | Homepage title + meta rewrite | ✅ Applied (uncommitted) | New title: `Best Roofing Company Charlotte NC \| 5★ BBB A+ \| (704) 605-6047`. Adds `LocalBusinessSchema` w/ `includeRating`, `CitationFacts` section. |
| 3 | `/charlotte-roofing-costs-2026` title rewrite + 2026 pricing | ✅ Applied (uncommitted) | New title: `Roof Replacement Cost Charlotte NC 2026 \| Average Pricing Guide` |
| 4 | Plaza Midwood neighborhood depth | ✅ Applied (uncommitted) | 1,237-line diff — full page rewrite. URL mismatch: May 11 plan used `/locations/charlotte-nc/plaza-midwood` but actual route is `/roofing-plaza-midwood-charlotte-nc/`. |
| 5 | Dilworth/Providence Plantation/University City title fixes | ✅ Applied (uncommitted) | All three pages rewritten (1,300–1,500 line diffs each). Same URL-shape mismatch as #4. |
| 6 | `/shingle-vs-metal-roof-cost` phrase-variant H2s | ✅ Applied (uncommitted) | Adds H2 anchors `#shingle-versus-metal-roof-cost`, `#cost-of-shingle-roof-vs-metal-roof`. |
| 7 | `/blog/energy-efficient-roofing-...` 2026 update + consolidation | ❌ **NOT DONE** | No diff on either energy-efficient blog post. Outstanding. |
| 8 | `/services/flat-roof-repair` commercial expansion | ✅ Applied (uncommitted) | New title: `Flat Roof Repair Charlotte NC \| Commercial & Residential \| TPO EPDM`. Meta adds 24/7 + phone. |
| 9 | Storm/emergency "near me" NEW pages | ❌ **NOT DONE** | Existing `/storm-damage-roof-repair-charlotte-nc` and `/emergency-roof-repair-charlotte-nc` modified but no `/storm-damage-roof-repair-near-me` or `/emergency-roof-repair-near-me` URLs created. |
| 10 | Asphalt shingle cost cluster | 🟡 Partial (uncommitted) | Pillar `/asphalt-shingle-roof-cost` has phrase-variant H2s added (126-line diff). Supporting articles ("Cost by Brand", "Cost of Replacement Calculator") still missing. |

**Score: 7 of 10 applied, 3 of 10 outstanding, 0 of 10 deployed.**

---

## 🚨 NEW CRITICAL FINDING — LOCAL PACK CANNIBALIZATION CONFIRMED

The May 11 plan flagged this as a *caveat* for 3 location pages. The fresh GSC data shows it is the **dominant traffic dynamic on this site**, far bigger than first scoped.

**Homepage (last 30 days):**
- Position 2.25 across **763 keywords**
- **19,377 impressions / 16 clicks / 0.08% CTR** (was 0.12% on May 11 — still trending down)

**Top homepage keywords ranking pos 1.0–2.0 with ZERO clicks:**

| Keyword | Pos | Impressions | Clicks |
|---|---|---|---|
| roof replacement | 1.06 | 1,632 | **0** |
| roofing contractor | 1.42 | 1,373 | **0** |
| roofers near me | 1.38 | 1,139 | **0** |
| roofing company near me | 1.52 | 962 | **0** |
| roof installation | 1.16 | 910 | **0** |
| roofers 28269 | 1.00 | 514 | **0** |
| residential roofing company | 1.02 | 462 | **0** |
| charlotte roofing company | 1.00 | 457 | **0** |
| best roofing company near me | 1.12 | 452 | **0** |
| roofing repairs | 1.02 | 448 | **0** |
| roofing companies near me | 2.73 | 433 | **0** |
| free roof estimate | 1.47 | 253 | **0** |
| emergency roof repair charlotte | 1.06 | 158 | **0** |
| commercial roofing contractors charlotte | 1.00 | 60 | **0** |
| ... (25+ more at pos 1.0–2.5, ~30 imp each) | | | **0** |

**Combined: ~13,000 pos-1-2 impressions in 30 days driving 0 organic clicks.**

This is not a title/meta problem. The site is being **fully eclipsed by Google's local pack (the 3-pack map result)** for every commercial-local query in Charlotte. The clicks are going to the GBP listing, not the organic listing — they're not lost, but they're not being measured here.

**Strategic implication — pivot:** The May 11 plan's #2 (homepage title rewrite) and #5 (location title rewrites) **will not move the needle on these clicks**, because the organic listing isn't being shown to most clickers. What WILL move the needle:

1. **Google Business Profile optimization** — that's where the click traffic for these queries is going. Cannot be fixed via this codebase.
2. **Target queries the local pack doesn't dominate** — informational, comparison, cost-by-detail, "near me + qualifier" queries (e.g., "metal roof cost 1500 sq ft" — non-local pack — vs. "roofer near me" — pure local pack).
3. **Accept the trade-off** for hyper-local queries: optimize the GBP, measure clicks there (via GA4 GBP utm tagging or GBP Insights), and stop expecting organic CTR to recover for `roofers near me` / `roof replacement` / branded local queries.

This reframes priorities #2 and #5 from "title fixes" to "GBP audit + speakable/HowTo schema for AI Overview eligibility (the other place the click could go)."

---

## 📊 DELTA vs MAY 11 — WHAT MOVED

### Ahrefs-tracked rankings (May 15 vs Apr 15)

**Only 1 keyword in the priorities band moved positively:**
| Keyword | Was | Now | Δ | Volume | URL |
|---|---|---|---|---|---|
| best roofing companies charlotte | 10 | 9 | **+1** | 100 | homepage |

**Everything else flat.** Expected — the May 11 work is uncommitted and Google hasn't been able to crawl it. **The +1 move on "best roofing companies charlotte" is noise, not signal.**

### GSC quick wins still on page 2 (Apr 15 – May 15, pos 10–21, ≥10 impressions)

Persisting from May 11 (homepage / commercial cluster):
- `roofing companies charlotte nc` — pos 10.4 (was 14.0 on May 11 — **improved 4 spots, 1 click earned!**)
- `roofers in charlotte nc` — pos 17.8, 11 imp, 1 click
- `roofing contractors in my area` — pos 21.0, 20 imp
- `roofing company charlotte, nc` — pos 19.6, 21 imp

**New in this 30-day window (not flagged on May 11):**

| Keyword | Pos | Imp (30d) | Cluster |
|---|---|---|---|
| **local roofing companies** | 17.7 | **36** | brand/commercial |
| **roofing firms** | 20.4 | **32** | brand/commercial |
| **roofer for hire** | 20.3 | **29** | brand/commercial |
| **commercial roofing** | 11.0 | 23 | commercial 🎯 |
| **best commercial roof replacement** | 12.6 | 19 | commercial 🎯 |
| **best commercial roof installation service** | 10.7 | 14 | commercial 🎯 |
| **best commercial roofing systems 2025** | 12.8 | 13 | commercial 🎯 |
| **office roof replacement** | 12.1 | 13 | commercial 🎯 |
| **insurance roof replacement** | 11.9 | 11 | insurance 🎯 |
| **24/7 emergency roofing services for homes and businesses** | 11.3 | 15 | emergency 🎯 |
| roofing beverly woods charlotte nc | 16.3 | 15 | hyper-local |
| best roofing franchise | 12.4 | 14 | (low intent) |

**Pattern:** A *commercial roofing* cluster is consolidating at pos 10–13 on the **homepage**, not on the dedicated `/commercial-roofing-charlotte-nc` page. Two reads:
1. Homepage has stronger authority than the commercial page (likely)
2. The flat-roof-repair commercial expansion (#8) is the right play but needs to be replicated on `/commercial-roofing-charlotte-nc` to give it a real shot

---

## 🆕 NEW TOP-5 OPPORTUNITIES (post May 11)

These are net-new since May 11 — either fresh GSC quick wins or strategic pivots based on the local-pack finding.

### N1. SHIP THE MAY 11 WORK — DEPLOYMENT | Priority: CRITICAL
- **Effort:** 15 min
- **Impact:** Unlocks the entire May 11 roadmap. Every other priority is blocked by this.
- **Risk:** 550 uncommitted files — review the homepage, location, and cost-page diffs before committing en masse. A few targeted commits per logical area is safer than one giant commit.

**Action:**
- [ ] `git status` review — confirm no accidental changes
- [ ] Commit in groups: schema-additions, homepage-rewrite, location-pages, cost-pages, flat-roof-commercial, asphalt-shingle-pillar
- [ ] Push + verify Vercel deploy of each
- [ ] Re-pull GSC keywords on 2026-05-29 (2 weeks) and 2026-06-12 (4 weeks)

---

### N2. GOOGLE BUSINESS PROFILE AUDIT + SPEAKABLE/AI-OVERVIEW SCHEMA — NEW WORK | Priority: HIGH
- **Why now:** The local-pack cannibalization finding means the homepage / `roof replacement` / `roofer near me` clicks are flowing to GBP. The biggest CTR lever on the site lives outside this codebase.
- **Opportunity Score:** 90/100 (revised — was deferred on May 11)

**Action (GBP — outside codebase):**
- [ ] Audit GBP profile completeness: services, photos (≥50 recent), Q&A (answer all), posts (weekly), description
- [ ] Verify GBP categories include both "Roofing contractor" + "Commercial roofing contractor" + "Roofing supply store" (if applicable)
- [ ] Check GBP review count, rating, response rate — note baseline
- [ ] Add UTM-tagged website link in GBP so GA4 can measure GBP→site clicks separately
- [ ] Verify GBP service-area cities (Mecklenburg, Mooresville, Cornelius, Davidson, Huntersville, Lake Norman, Statesville, Lake Wylie SC)

**Action (codebase — boost AI Overview eligibility for queries the local pack misses):**
- [ ] Audit `SpeakableContent` + `HowTo` schema coverage on `/metal-roof-cost`, `/charlotte-roofing-costs-2026`, `/shingle-vs-metal-roof-cost`
- [ ] Add FAQ schema to homepage targeting the actual pos-1-2 zero-click queries: "how do I find a roofer near me?", "what does roof replacement cost?", "do you do emergency roof repair?"
- [ ] Add `Organization > sameAs` linking to GBP profile URL — strengthens entity association

---

### N3. COMMERCIAL ROOFING CLUSTER — `/commercial-roofing-charlotte-nc` UPGRADE | Priority: HIGH
- **Why now:** Six commercial-cluster keywords are at **pos 10–13** in the last 30d, all on the **homepage** (which means no dedicated page is winning). Move them to a dedicated commercial page with proper signals and they can break top 10.
- **Keywords (all GSC, 30d):**
  - "best commercial roof installation service" — pos 10.7, 14 imp
  - "best commercial roof replacement" — pos 12.6, 19 imp
  - "best commercial roofing systems 2025" — pos 12.8, 13 imp
  - "commercial roofing" — pos 11.0, 23 imp
  - "office roof replacement" — pos 12.1, 13 imp
  - "commercial roofing contractors charlotte" — pos 1.0, 60 imp (homepage — local pack)
- **CPC for commercial queries: $20–40 (2–4× residential)**
- **Opportunity Score:** 81/100

**Action:**
- [ ] Audit `/commercial-roofing-charlotte-nc` page — does it exist? What's its current rank?
- [ ] Upgrade with: TPO/EPDM/Modified Bitumen/PVC system breakdowns, NDL warranty section, "2026 commercial roofing systems" comparison (matches `best commercial roofing systems 2025` query verbatim — update to 2026)
- [ ] Add "Office Roof Replacement" H2/section
- [ ] Add Service + LocalBusiness schema with `serviceType: "Commercial Roofing"` and `priceRange` indicator
- [ ] Cross-link from homepage commercial cluster, `/services/flat-roof-repair`, location pages with commercial properties
- [ ] Target position: 5–7

---

### N4. STORM DAMAGE / EMERGENCY "NEAR ME" — STILL OUTSTANDING FROM MAY 11 #9 | Priority: HIGH
- **No change** from May 11 — still not built. **Most lucrative CPC on the site ($17–44).**
- **Why now (still):** Spring storm season in NC peaks April–August. We're mid-window. Building in May still captures most of June–Aug demand if shipped in 14 days.
- **NEW data point:** "24/7 emergency roofing services for homes and businesses" is now at pos 11.3 / 15 imp on the homepage — direct on-ramp keyword for a near-me variant.
- **Opportunity Score:** 88/100 (unchanged)

**Action:** (same as May 11 #9 — consolidate vs. split decision still pending)
- [ ] Decide: upgrade `/storm-damage-roof-repair-charlotte-nc` to target "storm damage roof repair near me" (it ranks the latter via geo inference) **OR** build a non-Charlotte-specific `/storm-damage-roof-repair-near-me` for broader near-me match
- [ ] Build/upgrade `/emergency-roof-repair-near-me` (or repurpose `/emergency-roof-repair`) with phone-first hero, sub-2-hour response promise, EmergencyService schema
- [ ] Add Emergency CTA banner on all location pages
- [ ] Add `WebSite > SearchAction` to homepage so "emergency roof repair" sitelinks search works

---

### N5. INSURANCE / CLAIM CONTENT CLUSTER — NEW DISCOVERY | Priority: MEDIUM-HIGH
- **Why now:** "insurance roof replacement" surfaced at pos 11.9 / 11 imp in May, plus "24/7 emergency roofing services for homes and businesses" — insurance claim adjacency is showing fresh signal.
- **Existing assets:** `/roof-storm-damage-insurance-claim-charlotte-nc`, plus the recent Q&A blitz includes O&P, public adjuster, RCV vs ACV, IBHS Fortified, Class 4 ROI — strong topical cluster *already built but not interlinked into a hub*.
- **Opportunity Score:** 72/100

**Action:**
- [ ] Build `/roof-insurance-claims-charlotte-nc` hub page (or upgrade existing) linking to all the recent Q&A pages (RCV vs ACV, O&P, public adjuster, etc.)
- [ ] Add table-of-contents schema (HowTo with steps: document damage → call insurance → adjuster meeting → settlement → repair)
- [ ] Internal link from `/storm-damage-roof-repair-charlotte-nc` and homepage "What to do after a storm" callout
- [ ] Target keywords: "insurance roof replacement", "roof insurance claim charlotte", "how to file roof insurance claim nc"
- [ ] Target position: top 10 within 60 days

---

## 📋 STILL OUTSTANDING FROM MAY 11 (not done as of today)

| Original # | Item | Status | Recommended action |
|---|---|---|---|
| #7 | Energy-efficient roofing blog consolidation + 2026 update | Not started | 2-hour task — do this week. Title currently says 2025, easy win. |
| #9 | Storm/emergency near-me new pages | Not started | See N4 above. Spring storm season urgency. |
| #10 | Asphalt shingle cost cluster — supporting articles | Pillar done, articles not | After deploying May 11 work, monitor pillar rank for 30d. If it moves to top 30, build supporting articles. |

---

## 📅 RECOMMENDED NEXT 7 DAYS

**Day 1 (TODAY):**
1. **Commit + deploy the 550-file working tree** — biggest single-action unlock
2. **GBP audit** (1 hr — outside codebase)

**Day 2–3:**
3. **Energy-efficient blog 2026 update + consolidation** (#7 outstanding — easy win)
4. **Build/upgrade `/commercial-roofing-charlotte-nc`** (N3 — captures pos-10-13 cluster)

**Day 4–5:**
5. **Build the storm/emergency near-me pages** (N4 — spring season urgency)
6. Add `Organization > sameAs` GBP link + speakable/HowTo schema on top-3 cost pages

**Day 6–7:**
7. **Insurance hub page** (N5 — interlinks existing Q&A library)
8. Re-pull GSC delta on 2026-05-22 — verify any pages have started moving post-deploy

---

## 🔍 VERIFICATION TARGETS (set expectations now)

After the deploy + 14 days:
- **Homepage CTR**: expect 0.08% → 1–3% on Charlotte-qualified queries (NOT on bare `roofers near me` — local pack still wins there)
- **`/metal-roof-cost`** pos 10 → expect 6–8 for "1,500 sq ft metal roof cost" (size tables now match the query verbatim)
- **`/shingle-vs-metal-roof-cost`** pos 19 → expect 12–15 within 4 weeks (3 phrase-variant H2s now exist)
- **Plaza Midwood / Dilworth / Providence Plantation / University City**: depends on GBP overlap — if GBP serves the same queries, organic CTR stays low and these pages don't lift in clicks. Measure GBP clicks separately.

After 30 days:
- Re-run `/seo:priorities` (full comprehensive) to set the next roadmap

---

## 🔍 NOTES + CAVEATS

- **URL-shape mismatch in May 11 plan:** the plan referenced `/locations/charlotte-nc/{neighborhood}` but actual routes are `/roofing-{neighborhood}-charlotte-nc/`. GSC data shows the old `/locations/...` URLs still surfacing (e.g., `/locations/charlotte-nc/waverly` at pos 27.9 for "roofing beverly woods charlotte nc" — 25 imp, 0 clicks) — that's the old structure being indexed. If the new routes have full redirects from the old, the GSC data will catch up. Verify the redirect chain.
- **GSC sees 1 page above the 30-imp threshold** (homepage). The next-largest individual page (`/locations/charlotte-nc/waverly`) has only 25 impressions in 30 days. **The entire long tail of this site rolls up to the homepage** — that's both why local-pack cannibalization hurts so much and why the May 11 plan's homepage focus was correct in concept.
- **Ahrefs sees only 7 keywords** at the priority intersection of (pos 4–20, vol ≥100, KD ≤15). All 7 are on URLs we already touched in May 11 (homepage, metal-roof-cost, shingle-vs-metal-roof-cost, locations/lancaster-sc). The keyword universe for this site at the "easy-low-hanging-fruit" intersection is small — most growth must come from new content or deeper cluster builds, not pure quick wins.
- **The commercial cluster pattern** (6 keywords on homepage at pos 10–13) is the most actionable NEW signal — homepage authority is leaking onto a topic it doesn't deserve to win. Build the dedicated commercial page well and these can break top 10 with internal-link redirection.

---

**Next Commands:**
- `git status` then commit in logical groups — **the single highest-leverage action right now**
- `/seo:write commercial roofing systems 2026` — start the N3 commercial page upgrade
- `/seo:rewrite /blog/energy-efficient-roofing-in-2025-...` — knock out the #7 outstanding item
- Re-run `/seo:priorities` on 2026-06-15 for a full comprehensive refresh after deploy + 4 weeks of fresh data
