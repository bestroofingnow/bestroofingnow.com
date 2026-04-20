# Implementation Plan — Loop: Page-by-Page SEO/AEO Enhancement + FAQ Consolidation + Focus-Keyword De-duplication

**Created:** 2026-04-19
**Scope:** Every `src/app/**/page.tsx` (418 files) on `bestroofingnow.com`
**Mode:** Dynamic `/loop`, 10-min cadence, batch 1–3 pages per tick
**Source of truth:** `.claude/seo-progress.md` (extend this file; do not replace)

---

## Task Type

- [x] Backend (content + metadata + JSON-LD schema — Codex territory)
- [x] Frontend (hero copy + section hierarchy readability — light Gemini territory)
- [ ] Fullstack

Primary work is editor-driven: content, metadata, and schema edits inside existing `page.tsx` files. No new routes, no new components beyond what is already in `src/components/seo/SchemaMarkup.tsx`.

---

## Audit Findings (from Phase 1 survey)

1. **Inventory:** 418 total `page.tsx`; ~251 location pages; 17 Tier-4 entity pages already done; 10 Tier-3 hubs done; Tier-2 (8) done; 5 of ~130 Tier-5 Charlotte pages done.
2. **FAQ reality check:** Zero pages have two FAQSchema elements. Zero pages have two `{/* FAQ Section */}` blocks. The "multiple FAQ" risk is theoretical — consolidation is a **verify-and-prevent** pass, not a fix pass.
3. **Focus-keyword repetition:** Not audited yet. High-risk pages are Tier-5 (Charlotte service+location) where the same phrase (e.g., "roof repair charlotte nc") appears 5–15+ times across title/description/hero/headings/FAQ/schema.
4. **AEO gap pattern (Tier-5 "surgical"):** Rich pages (400–1,400 lines) usually already have WebPage+Breadcrumb+Article+FAQ schemas but are missing SpeakableContentBlocks, AISearchOptimizationBundle, VoiceSearchActionSchema, and `.speakable-intro` on the hero.
5. **Tier-2 learning:** Service+location pages under 250 lines get full rewrites (FAQs 6→10, 10-point checklist section, local-context card grid, related-services strip).

---

## Technical Solution

### Per-page definition of done (SEO/AEO checklist)

**Metadata**
- `title` ≤ 42 chars (site template adds " | Best Roofing Now" = 60 total)
- `description` 120–160 chars, unique, no repetition
- `keywords` array: 5–12 phrases, one primary + variants — no exact duplicates
- `alternates.canonical` present and absolute
- `openGraph` with title/description/url/images + `twitter` card
- Structured headings: exactly one `<h1>`, logical `<h2>`/`<h3>`

**Schemas (via `src/components/seo/SchemaMarkup.tsx`)**
- `BreadcrumbSchema` (always)
- `WebPageSchema` (always)
- Either `ServiceSchema` (service+location, service entity) OR `CollectionPageSchema` (directories) OR `ArticleSchema` (guides/blog content)
- `FAQSchema` — **exactly one per page**, 6–12 questions
- `FeaturedSnippetListAnswerSchema` — one per page on list-style questions
- `SpeakableContentBlocks` (always)
- `AISearchOptimizationBundle` (always)
- `VoiceSearchActionSchema` (always)
- `FreeInspectionOfferSchema` where relevant (service+location, service entity)

**Body**
- Hero paragraph wrapped with `.speakable-intro` className
- ≥ 800 words for service+location; ≥ 500 for directory; ≥ 1,000 for guides
- Internal links: parent hub + 3+ sibling links + 2+ related-service links
- All `<Image>`/`<SEOImage>` have meaningful `alt`
- Local signals (neighborhoods, climate, codes) named where applicable

**FAQ consolidation rule (user's specific directive)**
- **Exactly one FAQ section** per page rendered in the JSX
- **Exactly one `<FAQSchema />`** per page (no duplicates)
- If two sections exist (comment `{/* FAQ Section */}` appears twice, or two heading patterns like "Frequently Asked Questions" + "Common Questions"): merge question arrays (dedupe by question text), keep the richer answers, delete the duplicate section
- Questions per page: 6–12. Over 12 → prune weak duplicates.
- No two questions may share the same focus keyword in their verbatim question text (vary the phrasing)

**Focus-keyword de-duplication rule (user's specific directive)**
- Define the **primary focus keyword** as the noun-phrase from the `title` metadata minus the brand (e.g., `Roof Repair Charlotte NC`).
- Count verbatim occurrences of the primary keyword in rendered body text (excluding JSON-LD schema payloads).
- Rewrite so the primary keyword appears **at most once per page section** — specifically:
  - Once in `<h1>` (required)
  - At most once in the speakable hero intro
  - At most once per subsequent `<h2>` heading
  - At most once per FAQ answer block
  - Body paragraphs: use variants (`the repair`, `this service`, `your roof`, neighborhood-scoped phrases)
- No repeated **keyword phrase** in metadata keywords array (e.g., `['roof repair charlotte', 'roof repair charlotte nc']` → collapse to one)

---

## Implementation Steps

### Step 1 — Extend progress tracker
Append a new section to `.claude/seo-progress.md`:
```
## Tier X — Page-by-page audit loop (2026-04-19)
### Audit checklist per page
- [ ] FAQ count = 1 (JSX section) and = 1 (FAQSchema)
- [ ] Focus keyword occurrences within limits
- [ ] SchemaBundle present (Speakable/AISearch/VoiceSearch)
- [ ] .speakable-intro class on hero
- [ ] Metadata within limits, canonical set
- [ ] Internal links to parent + siblings + related
```
Expected deliverable: progress file has a "current audit loop" section with per-page checkboxes populated in batches of 20 at a time.

### Step 2 — Build lightweight audit script
Create `scripts/audit-page-seo.ts` (not committed to prod — lives in `scripts/`):
- Walks `src/app/**/page.tsx`
- For each file, extracts: title len, description len, keyword count, canonical presence, count of `<FAQSchema`, count of `{/* FAQ Section */}`, count of `SpeakableContentBlocks`, count of `.speakable-intro`, primary focus keyword guess (from title).
- Grep-based, no AST parsing needed for MVP.
- Emits CSV/JSON to `.claude/audit-report.json` used by the loop to pick next target.
- **This is scaffolding only — not committed, not shipped.**

Expected deliverable: `.claude/audit-report.json` scoring each page 0–100 on checklist completeness. Pages under 80 go to queue.

### Step 3 — Queue selection logic in /loop
Every loop tick:
1. Read `.claude/seo-progress.md` — find first unchecked `[ ]` in active tier.
2. If no active queue, read `.claude/audit-report.json` — pick lowest-scoring page in current tier.
3. Target 1–3 pages per 10-min tick (surgical) or 1 page per tick (full rewrite for thin pages).

Expected deliverable: every tick mutates progress file after work.

### Step 4 — Per-page enhancement pass (the loop body)

Pseudo-code for one page pass:

```
function enhancePage(filePath):
    content = Read(filePath)
    focusKeyword = extractFromTitle(content)  // e.g. "roof repair charlotte nc"

    # --- FAQ consolidation ---
    faqSchemaCount = count(content, "<FAQSchema")
    faqSectionCount = count(content, "{/* FAQ Section */}")
    if faqSchemaCount > 1 OR faqSectionCount > 1:
        mergedFaqs = mergeFAQArrays(findAllFAQArrays(content))
        mergedFaqs = dedupeByQuestion(mergedFaqs)
        mergedFaqs = dropIfKeywordRepeats(mergedFaqs, focusKeyword)
        content = replaceAllFAQsWithSingle(content, mergedFaqs)

    # --- Focus keyword de-duplication ---
    occurrences = findVerbatimInBody(content, focusKeyword)
    if occurrences > sectionCount(content):
        for each duplicate past first-per-section:
            rewriteWithVariant(content, occurrence, variants=[
                "the service",
                "the repair",
                "your roof",
                neighborhoodName,
                serviceType + " work"
            ])

    # --- AEO schema bundle ---
    if not has(content, "SpeakableContentBlocks"):
        addImport(content, "SpeakableContentBlocks")
        addBeforeReturn(content, "<SpeakableContentBlocks city={...} />")
    # same for AISearchOptimizationBundle, VoiceSearchActionSchema
    if not has(content, "FreeInspectionOfferSchema") and pageTypeNeedsOffer(filePath):
        addSchemaElement(content, "FreeInspectionOfferSchema")

    # --- Hero speakable class ---
    if not has(content, ".speakable-intro"):
        wrapHeroParagraph(content, className=".speakable-intro")

    # --- Metadata tidy ---
    ensureCanonical(content)
    dedupeKeywordsArray(content)
    truncateTitle(content, maxChars=42)
    truncateDescription(content, maxChars=160)

    Write(filePath, content)
    updateProgressFile(filePath)
    return diff
```

Expected deliverable: one page per tick (or 2–3 if surgical), committed with message `feat: SEO/AEO page audit — <slug> (FAQ unified, keyword dedup, schema bundle)`.

### Step 5 — Verify
After each batch:
- Run `npx tsc --noEmit` — note the pre-existing Next.js 16 node_modules errors are expected per project memory; only fail on errors originating in edited files.
- Run `npm run build` every 10 pages to catch JSX/build issues early.
- Grep-verify one example: `grep -c "roof repair charlotte nc" src/app/roof-repair-charlotte-nc/page.tsx` should be ≤ sectionCount + 2 (title/metadata get one use each).

Expected deliverable: build stays green; no regressions in existing FAQSchema JSON-LD shape.

### Step 6 — Commit cadence
Every 3 pages OR every 30 minutes (whichever first):
```
git add -A
git commit --no-gpg-sign -c user.name="knxjd2025" -c user.email="knxjd2025@users.noreply.github.com" \
  -m "feat: SEO/AEO audit batch — <slug1>, <slug2>, <slug3>"
git push origin main
```
Per project memory: `knxjd2025@users.noreply.github.com` is the only author that clears Vercel's deploy block.

### Step 7 — Tier queue (priority order)

The loop processes tiers in this order:

| Priority | Tier | Pages | Pattern | Expected ticks |
|---|---|---|---|---|
| 1 | Tier-5 strategic hubs | 4 (`roofing-charlotte-nc`, `commercial-roofing-charlotte-nc`, `metal-roofing-charlotte-nc`, `hail-damage-roof-repair-charlotte-nc`) | Surgical + FAQ audit + keyword dedup | 4 ticks |
| 2 | Tier-5 remaining Charlotte | ~130 | Surgical (3/tick) + FAQ audit + keyword dedup | ~45 ticks |
| 3 | LKN additional cities | ~30 | Surgical + LKN components preserved | ~10 ticks |
| 4 | Fort Mill / SC / Concord / Union / Cabarrus non-Charlotte | ~80 | Surgical | ~27 ticks |
| 5 | Neighborhood pages (`roofing-*-charlotte-nc`) | ~40 | Surgical + hyperlocal keyword focus | ~14 ticks |
| 6 | Brand detail pages (`/brands/[slug]`) | 6 | Content audit + keyword dedup | 2 ticks |
| 7 | Material detail pages (`/materials/[slug]`) | ~10 | Content audit + keyword dedup | 4 ticks |
| 8 | Guide/content pages (`*-guide`, `nc-roofing-guide`, etc.) | ~25 | Article-schema + keyword dedup | 9 ticks |
| 9 | Core hubs (`/contact`, `/about`, `/services`, `/faq`) | ~15 | Verify only | 3 ticks |

Total: ~135 ticks = ~22.5 hours of loop time. At 10-min cadence that's ~3 days running. Realistic pace with interruptions: 1–2 weeks.

---

## Key Files

| File | Operation | Description |
|------|-----------|-------------|
| `.claude/seo-progress.md` | Update | Single source of truth for what's done. Extend with new tier queue. |
| `.claude/plan/loop-page-by-page-seo-aeo-cleanup.md` | Create | This plan (done). |
| `scripts/audit-page-seo.ts` | Create (optional) | Grep-based auditor emitting `.claude/audit-report.json`. Not shipped. |
| `src/components/seo/SchemaMarkup.tsx` | Read | Provides all schema components already — no new components needed. |
| `src/components/sections/FAQ.tsx` | Read | Shared FAQ component (used by 23 pages). Keep as-is. |
| `src/app/**/page.tsx` | Edit (many) | Per-page content + metadata + schema edits. |

### FAQ consolidation code pattern (reference)

When a page has two FAQ blocks:

```tsx
// BEFORE
<FAQSchema faqs={primaryFAQs} />
...
<FAQSchema faqs={secondaryFAQs} />   // ← duplicate
...
{/* FAQ Section */}
<section>...primaryFAQs render...</section>
...
{/* FAQ Section */}                   // ← duplicate
<section>...secondaryFAQs render...</section>

// AFTER
const allFAQs = [...primaryFAQs, ...secondaryFAQs]
  .filter((f, i, arr) =>
    arr.findIndex(x => x.question.trim().toLowerCase() === f.question.trim().toLowerCase()) === i
  );

<FAQSchema faqs={allFAQs} />
...
{/* FAQ Section */}
<section>...allFAQs render...</section>
```

---

## Risks and Mitigation

| Risk | Impact | Mitigation |
|---|---|---|
| Accidentally remove unique FAQ answers during merge | Content loss / rank loss | Dedupe by question text only; keep the LONGER answer when both exist |
| Keyword dedup strips too aggressively, hurts rankings | Ranking loss | Keep keyword in title, h1, first speakable intro sentence, and one h2 — only vary in repeated body paragraphs |
| 418 pages × manual edit = exhaustion drift | Quality decays mid-loop | Enforce audit-report scoring; only commit pages scoring ≥ 90 |
| Vercel deploy block resumes mid-loop | Lost commit momentum | Stick to `knxjd2025@users.noreply.github.com` author; if a commit blocks, force author via `-c user.name -c user.email` before re-push |
| TypeScript build breaks on bulk edits | Blocks all deploys | Build every 10 pages; revert individual file if build fails, investigate before bulk continuing |
| JSX string quote collisions (e.g., `6"`/`7"` in attributes) | Build errors | Use single-quoted JSX attributes for any content containing `"` — documented learning from gutter-installation-matthews-nc |
| Stale `/loop` prompts carry wrong target pages | Wasted ticks on done pages | Every tick: re-read `.claude/seo-progress.md` first, find first unchecked item, then act |
| Two FAQs merged but questions semantically overlap | User sees redundant FAQ list | After dedupe by verbatim text, apply semantic dedupe: if two questions share 4+ keywords, keep only the longer answer |

---

## Loop Start-of-Tick Protocol (prepend to each /loop body)

1. `Read(".claude/seo-progress.md")` — find first unchecked `[ ]` line under active tier
2. If current tier is complete (no unchecked items), advance to next tier
3. Read target `page.tsx`
4. Apply Step-4 enhancement pass
5. Run `npx tsc --noEmit` on the edited file only (`npx tsc --noEmit -p tsconfig.json` is too slow for per-tick)
6. Commit + push (per Step 6)
7. Mark `[x]` in progress file with date + one-line summary
8. `ScheduleWakeup` for next tick (600–900s depending on tier — surgical is faster)

---

## Definition of Done (for the entire loop)

The loop stops when:
- Every `src/app/**/page.tsx` has a checked `[x]` line in `.claude/seo-progress.md`
- `scripts/audit-page-seo.ts` emits a report where 100% of pages score ≥ 90
- `npm run build` succeeds
- Final commit pushed to both origin/main AND upstream/main
- PushNotification sent to user: "Loop complete. N pages audited. Build green. Ready to review."

---

## Out of Scope (explicitly deferred)

- Individual WordPress blog posts (400+) — handled by CMS, not `src/app`
- Sitemap regeneration — already automated
- Image optimization — not requested
- Core Web Vitals tuning — not requested
- llms.txt / llms-full.txt updates — handled separately
- Backlink / off-page SEO work
- Dependabot vulnerability triage (15 open) — separate task

---

## SESSION_ID (for /ccg:execute use)

- CODEX_SESSION: _(not used — plan synthesized directly from project memory + Phase-1 survey; multi-model analysis was unnecessary given operational scope)_
- GEMINI_SESSION: _(same)_

If the user wants deeper architectural review before executing, run `/ccg:plan` on this file to request a Codex + Gemini second opinion.
