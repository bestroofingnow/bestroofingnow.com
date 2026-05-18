# SEO & AEO Continuous-Improvement Plan

**For:** bestroofingnow.com
**Owner:** James (with Claude Code assistance)
**Generated:** 2026-05-17

This plan defines the rhythm of ongoing SEO/AEO work after the one-time cleanup pushes are complete. Three cadences — daily / weekly / monthly — each with a clear scope, time budget, automation hook, and pass/fail metrics.

The philosophy: **most SEO work is monitoring + small course corrections, not constant rebuilding.** Big strategic moves happen monthly. Weekly is for spotting trends and clearing small issues. Daily is for not missing emergencies.

---

## At a glance

| Cadence | Time budget | Primary purpose | Automation |
|---|---|---|---|
| **Daily** | 5-10 min | Status check, anomaly detection | `/seo:daily-pulse` slash command + scripts/daily-gsc-pulse.mjs |
| **Weekly** | 60-90 min | Audit refresh, opportunity capture, content scheduling | `/seo:weekly-audit` slash command + scripts/weekly-audit-bundle.mjs |
| **Monthly** | 4-6 hrs | Strategic review, full deep-dive, roadmap refresh | `/seo:monthly-deep-dive` slash command + existing `/seo:priorities` |

---

## DAILY (5-10 minutes)

### Purpose

Catch problems before they become incidents. **Not** the right cadence for content decisions or strategic moves — just monitoring.

### What to check

1. **Site availability**
   - Is bestroofingnow.com loading? (`curl -sI` or just visit)
   - Did the latest Vercel deploy succeed?
   - Any 5xx errors in Vercel logs?

2. **GSC anomalies**
   - Any "Coverage" issues new in the last 24h?
   - Any "Manual Action" or "Security Issue" notifications? (Should be never — but check.)
   - Any URLs reporting "Indexing errors"?

3. **GBP review monitoring**
   - Any new reviews? Respond to every one within 24 hours. (Per the action items doc, this is the single biggest local-pack signal.)

4. **Top-mover keywords**
   - Any keyword that moved ±5 positions overnight on a query that matters?
   - Output of `scripts/daily-gsc-pulse.mjs` shows the top 10 movers automatically.

5. **New backlinks (passive)**
   - Glance at your inbox for Google Alerts mentions of "Best Roofing Now"
   - Check if anything triggered the `/seo:research-performance` pipeline

### Automation

Run the slash command:

```
/seo:daily-pulse
```

This invokes Claude Code, which:
1. Calls `scripts/daily-gsc-pulse.mjs` to pull yesterday's GSC top movers
2. Diffs against the prior day's snapshot
3. Surfaces the 5-10 biggest movers (up + down) with context
4. Flags any new "needs attention" issues
5. Writes results to `research/pulse/YYYY-MM-DD.md`

**Time: 2-5 minutes including reading the output.** If nothing's flagged, you're done.

### Pass criteria

- ✅ Vercel deploy: green
- ✅ GSC: no new Manual Actions, no new Security Issues, Coverage stable
- ✅ Top movers: any negative move > 10 positions on a money keyword has an explanation
- ✅ GBP: any new reviews from yesterday are responded to

### Fail criteria (escalate to weekly)

- ❌ Multiple Charlotte-money keywords dropped > 5 positions overnight (algorithm update or technical issue)
- ❌ GSC Coverage flagged > 50 new errors in a day (deploy regression or crawl issue)
- ❌ Site returning 5xx for any pages (Vercel incident)

---

## WEEKLY (60-90 minutes, typically Monday morning)

### Purpose

Refresh the audit, capture week-over-week trends, schedule the week's content/link-acquisition work, and clear any small fires before they grow.

### What to do

#### 1. Re-run the audit suite (15 min, automated)

```
/seo:weekly-audit
```

This:
- Runs `scripts/cannibalization-audit.mjs` — flag any new duplicate titles/H1s/canonicals
- Runs `scripts/seo-aeo-quick-audit.mjs` — flag new over-length titles/descriptions, missing speakable, etc.
- Pulls 7-day GSC keyword + page deltas via Ahrefs MCP
- Pulls Ahrefs Site Audit issues delta
- Pulls referring-domains delta (gains + losses)
- Outputs combined report to `research/weekly/YYYY-Www.md` (week-numbered)

#### 2. Review the audit report (15-20 min, manual)

Read `research/weekly/YYYY-Www.md`. Look for:
- New duplicate titles/H1s introduced this week (likely from new pages) → fix in code
- New 4XX errors → likely a deploy issue or broken outbound link
- Schema validation regressions → check SchemaMarkup.tsx for accidental changes
- Lost referring domains → if a DR 40+ domain dropped, investigate per-page (was it a content change?)

#### 3. Update the Tier 3 backlog (10 min)

From the deep-dive doc, the standing Tier 3 backlog is:
- 46 over-length titles still need manual review
- 85 titles under 30 chars (could use cluster-specific expansion)
- 16 still-over descriptions (escaped-quote files)
- 4 still-missing speakable
- 5 missing AISearchBundle
- 4 missing OpenGraph
- 1 missing canonical

Each week, take 2-5 items off the backlog. Don't try to clear it all at once — small consistent passes beat one heroic push.

#### 4. Quick-wins keyword check (15 min)

```
/seo:research-performance
```

This surfaces keywords on page 2 (positions 11-20) where small improvements would move them to page 1. The output is a prioritized list of pages to revisit.

If you find 1-3 new quick wins this week:
- For existing-content updates: open the page, add a missing H2/section, improve internal linking, refresh stats
- For content gaps: queue for the monthly content calendar

#### 5. GBP weekly tasks (15 min — see action items doc Section 2)

- [ ] Post a new GBP post (What's New / Offer / Event / Product — rotate)
- [ ] Upload 1-3 new project photos
- [ ] Answer any new Q&A
- [ ] Respond to any reviews not yet responded to
- [ ] Review GBP Insights: profile views, direction requests, calls trending

#### 6. HARO + outreach (15 min)

- [ ] Send 2-3 HARO pitches for relevant journalist requests this week
- [ ] Send 1 partner outreach email (manufacturer / supply house / chamber follow-up)

### Pass criteria

- ✅ Audit metrics not regressed (compare to last week's report)
- ✅ At least 1 backlog item cleared
- ✅ GBP cadence maintained (post, photos, reviews answered)
- ✅ At least 1 outbound outreach sent

### Fail criteria (escalate to monthly)

- ❌ Audit metrics REGRESSED — investigate deploy log + revert
- ❌ Same Tier 3 backlog items have sat untouched for 4+ weeks (means the cadence isn't working — either delegate or de-prioritize)

---

## MONTHLY (4-6 hours, typically first Monday of the month)

### Purpose

Strategic review: what's working, what's not, where to invest the next 30 days. The monthly run takes the longest because it's the **content / backlinks / strategy** check, not just monitoring.

### What to do

#### 1. Full priorities refresh (60 min, automated)

```
/seo:priorities
```

This is the comprehensive multi-module research:
- GSC quick wins (last 30 days)
- Competitor gap analysis
- Performance matrix
- Topic clusters
- Trending topics

Generates `research/priorities-YYYY-MM-DD.md` with the new top-10 opportunities.

#### 2. Full Ahrefs deep-dive (60 min)

```
/seo:monthly-deep-dive
```

This wraps the deep-dive flow from `research/deep-dive-2026-05-17.md`:
- DR + backlink stats
- Top-pages by traffic delta vs last month
- Competitors organic-keywords overlap
- Referring-domains gains and losses
- Anchor profile health (any new spam to disavow?)
- Site Audit health-score trend
- Broken-backlinks list (any new reclamation targets?)
- Internal-link orphan list

Writes `research/deep-dive-YYYY-MM-DD.md`.

#### 3. Local-pack visibility scan (15 min)

Use Local Falcon (or similar local-pack tracking tool) to run a 7×7 grid scan around your service area for these queries:
- "roofer near me"
- "roofing company charlotte nc"
- "metal roof replacement charlotte nc"
- "storm damage roof repair near me"
- "emergency roof repair near me"

Each scan shows your rank in each grid cell. Track the average rank trend month over month. The GBP optimization work from the action items doc should be moving this number down (better) over time.

#### 4. Content calendar build (60 min)

```
/seo:content-calendar
```

Based on priorities + clusters + GBP/social, build the next 30 days of:
- Blog posts to publish (or static pages, if CMS still disconnected)
- GBP posts (one per week minimum)
- Social posts
- Email touches

#### 5. Backlink campaign progress review (30 min)

Cross-check against `research/seo-action-items-2026-05-17.md`:
- [ ] Manufacturer directories: all 4 active? (GAF, OC, Atlas, Malarkey)
- [ ] Chamber memberships: all 4 active? (LKN, Charlotte, Concord, Gastonia)
- [ ] Supply houses: all 3 listed? (ABC, SRS, Beacon)
- [ ] HARO placements this month: aim for ≥1
- [ ] New Google reviews this month: aim for ≥10
- [ ] BBB dofollow status: still confirmed?

For each that's missing or stalled, set a 30-day next-step.

#### 6. Strategic adjustments (60 min)

Based on the month's data:
- Which clusters are gaining? (double down on content)
- Which clusters are flat? (consider pause or pivot)
- Which competitors are gaining on us? (steal their backlink sources via the Ahrefs gap report)
- What did GBP Insights show? (which photo types / posts drove the most clicks?)
- Local-pack scan trend (improving or stagnant?)

Write the 1-page "Month X Strategic Adjustments" doc into `research/monthly-strategy/YYYY-MM.md` with 3-5 specific changes for the next 30 days.

#### 7. Disavow file refresh (15 min)

```
/seo:scrub
```

Re-pull Ahrefs anchors + flagged-spam referring domains. If new spam appeared since last month, add to `research/disavow-YYYY-MM-DD.txt`, re-upload to GSC. (Same disavow tool URL.)

### Pass criteria

- ✅ Priorities doc refreshed with current quarter data
- ✅ Deep-dive shows audit health improving month over month
- ✅ Local-pack avg-rank improving
- ✅ At least 1 new dofollow backlink earned
- ✅ Content calendar shipped for next 30 days
- ✅ Strategic adjustments doc written (even if "stay the course" — explicit decision)

### Fail criteria (escalate to quarterly)

- ❌ Site health score stuck below 70 for 2+ consecutive months → deeper technical audit
- ❌ Ahrefs DR stuck at same level for 6+ months → backlink campaign isn't working, change tactic
- ❌ Local-pack average rank worsening → GBP-side problem, not on-page

---

## Quarterly (every 3 months, ~4 hours)

Not a separate routine but worth flagging: every 3 months, set aside time to:

1. **Re-audit the whole site SEO/AEO landscape from scratch** — `/seo:research` end-to-end
2. **Competitor pivot scan** — are new competitors appearing in your local pack? Are old ones leaving?
3. **Manufacturer / partner relationship review** — any new certifications worth pursuing? Any expired?
4. **Pricing-page accuracy review** — are 2026 prices still 2026? Updates needed?
5. **Big content refresh** — pick the top 5 traffic-driving pages and do a deep rewrite

---

## Automation architecture

### Scripts (in `scripts/`)

| Script | Cadence | What it does |
|---|---|---|
| `daily-gsc-pulse.mjs` | Daily | Pulls yesterday's GSC top movers via Ahrefs MCP, writes `research/pulse/YYYY-MM-DD.md`, diffs against previous day |
| `weekly-audit-bundle.mjs` | Weekly | Runs cannibalization + seo-aeo audits, pulls 7-day GSC + Ahrefs deltas, writes `research/weekly/YYYY-Www.md` |
| `cannibalization-audit.mjs` | Weekly (called by bundle) | Existing — flags duplicate titles/H1s/canonicals |
| `seo-aeo-quick-audit.mjs` | Weekly (called by bundle) | Existing — flags length / schema / canonical issues |
| `cannibalization-audit.mjs` | Pre-commit hook | Catches regressions before they ship |

### Slash commands (in `.claude/commands/seo/`)

| Command | Cadence | Invokes |
|---|---|---|
| `/seo:daily-pulse` | Daily | scripts/daily-gsc-pulse.mjs + Claude analyzes output |
| `/seo:weekly-audit` | Weekly | scripts/weekly-audit-bundle.mjs + Claude summarizes + prioritizes |
| `/seo:monthly-deep-dive` | Monthly | Wraps existing /seo:priorities + Ahrefs deep-dive flow |
| `/seo:priorities` | Monthly | Existing — top-10 opportunities roadmap |
| `/seo:scrub` | Monthly | Existing — disavow + technical hygiene |
| `/seo:research-performance` | Weekly | Existing — quick-win keyword analysis |
| `/seo:content-calendar` | Monthly | Existing — content schedule |

### Optional: scheduled automation (Claude Code `/schedule` skill)

You can set up Claude to run these automatically via the `/schedule` skill:

```
/schedule create "Daily SEO pulse" "0 8 * * 1-5" /seo:daily-pulse
/schedule create "Weekly SEO audit" "0 9 * * 1" /seo:weekly-audit
/schedule create "Monthly deep dive" "0 10 1 * *" /seo:monthly-deep-dive
```

Each runs in the background and posts results to a Claude session you can pick up later. Adjust the cron strings (https://crontab.guru) to your timezone preference. Results get committed to `research/` automatically.

### Optional: GitHub Actions / Vercel Cron

For things that should run independent of Claude (e.g., site uptime monitoring), use either:

- **Vercel Cron Jobs** (free tier supports daily cron): add a route handler like `/api/cron/daily-uptime-check` that hits your homepage + key URLs, alerts on failures
- **GitHub Actions** (free for public repos, generous for private): can run the audit scripts on a schedule, commit the resulting reports automatically

Example `.github/workflows/weekly-audit.yml` skeleton:

```yaml
name: Weekly SEO Audit
on:
  schedule:
    - cron: '0 9 * * 1'  # Monday 9am UTC
  workflow_dispatch:
jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: node scripts/weekly-audit-bundle.mjs
      - uses: stefanzweifel/git-auto-commit-action@v5
        with:
          commit_message: "chore(seo): weekly audit YYYY-Www"
```

This commits the report automatically so you have a history of weekly audits even when you're not actively running them.

---

## Pre-commit hook — prevent regressions

The biggest risk to all this work is shipping a new commit that breaks the gains. A pre-commit hook can prevent the most common regressions:

```
# .husky/pre-commit or .git/hooks/pre-commit
#!/bin/sh
node scripts/cannibalization-audit.mjs > /tmp/cannib-audit.log
DUPES=$(grep -E "Exact-duplicate (titles|H1s|canonicals): [^0]" /tmp/cannib-audit.log)
if [ -n "$DUPES" ]; then
  echo "❌ New cannibalization issues introduced — see /tmp/cannib-audit.log"
  exit 1
fi
```

Drop this in via husky (`npx husky add .husky/pre-commit "node scripts/cannibalization-audit.mjs"`) or use a Claude Code PreToolUse hook on Edit/Write of `src/app/**/page.tsx` files. Either way, every code change that introduces a duplicate title or H1 gets blocked at commit time.

---

## How to start

Day 1 (today): set up the slash commands (already done in this commit). Run `/seo:daily-pulse` to confirm it works.

Day 7 (next Monday): run `/seo:weekly-audit` for the first time. Compare against the 5/17 baseline numbers.

Day 30 (next month): run `/seo:monthly-deep-dive`. Write the first "Month X Strategic Adjustments" doc.

Day 90: reassess this plan. What's working? What's noise? Adjust cadence based on observed value.

---

## Indicator tree — when to dig deeper

The plan above is the steady state. These signals trigger a deeper investigation:

| Signal | Likely cause | Action |
|---|---|---|
| Sudden organic-traffic drop > 25% week-over-week | Algorithm update OR major technical regression | Run `/seo:monthly-deep-dive` immediately, check Search Console Coverage, check Vercel deploy log |
| Multiple money keywords drop > 10 positions in one day | Algorithm update affecting specific intent (e.g., local-pack changes) | Wait 7 days for stabilization, then re-evaluate |
| New DR 70+ referring domain gained | Big win — capitalize | Look at WHICH page they linked to and replicate that page pattern for other clusters |
| New DR 70+ referring domain lost | Site changed/redesigned and removed the link | Look up the page on archive.org; reach out to ask them to restore it |
| Ahrefs DR drops 3+ points | Mass-disavow processed OR major link rot | Check anchors report — is the fake-testimonial scheme finally being discounted? (Good!) |
| Site Audit health score drops > 10 points | New 4XX cluster OR new schema bug | Re-run cannibalization + SEO/AEO audits, look at git diff since last green audit |

---

## What this plan is NOT

- **Not a substitute for the action items in `research/seo-action-items-2026-05-17.md`.** That doc is the one-time setup of GBP, disavow, manufacturer directories, etc. This doc is the ongoing rhythm.
- **Not a substitute for human judgment on content.** The audits flag issues; you decide which to fix. The priorities script suggests opportunities; you decide which to pursue.
- **Not for emergencies.** If the site goes down or Google issues a manual action, that's not a daily-pulse problem — that's a "drop everything and fix" problem.
- **Not perfect day one.** Cadence will need to adjust based on what surfaces. Maybe the daily check is too noisy and becomes a Mon/Wed/Fri check. Maybe the monthly deep-dive needs to become bi-weekly when you're aggressively expanding. Iterate.

---

**Files generated by this plan:**
- `research/pulse/YYYY-MM-DD.md` — daily snapshots
- `research/weekly/YYYY-Www.md` — weekly audit reports
- `research/priorities-YYYY-MM-DD.md` — monthly priorities refresh
- `research/deep-dive-YYYY-MM-DD.md` — monthly Ahrefs deep-dive
- `research/monthly-strategy/YYYY-MM.md` — monthly strategic adjustments doc
- `research/disavow-YYYY-MM-DD.txt` — refreshed disavow file (when needed)
- `scripts/seo-audit-results/cannibalization-YYYY-MM-DD.md` — weekly cannibalization audit
- `scripts/seo-audit-results/seo-aeo-YYYY-MM-DD.md` — weekly SEO/AEO audit

Everything is version-controlled. Future-you can look back at "what did we know in May 2026?" and see exactly the data and decisions of the moment.
