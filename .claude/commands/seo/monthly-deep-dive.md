# Monthly Deep Dive Command

A 4-6 hour comprehensive strategic review, designed to run on the first Monday of each month. This is where strategic decisions get made — what to invest in for the next 30 days based on the prior month's data.

## What this command does

This is the umbrella command that ties together:

1. **Full priorities refresh** — runs `/seo:priorities` for the top-10 opportunity roadmap
2. **Ahrefs deep-dive** — DR/backlink/competitor/Site Audit metrics over the last 30 days
3. **Local-pack visibility scan** — guidance for Local Falcon (or similar) grid scan
4. **Content calendar** — runs `/seo:content-calendar` for the next 30 days
5. **Backlink campaign progress review** — cross-check against `research/seo-action-items-2026-05-17.md`
6. **Strategic adjustments** — 1-page doc capturing 3-5 specific changes for the next 30 days
7. **Disavow refresh** — `/seo:scrub` to update the disavow file if new spam appeared

## Process

### 1. Read the prior month's strategic adjustments doc

If `research/monthly-strategy/{prior month}.md` exists, read it first. The "next 30-day actions" from last month define what to evaluate this month — did we ship them? Did they move the metrics?

### 2. Run the full priorities refresh

Invoke `/seo:priorities` (or run it inline if context allows). Saves a new `research/priorities-YYYY-MM-DD.md` with the top-10 opportunities.

### 3. Run the Ahrefs deep-dive

Pull each of these via Ahrefs MCP and write a deep-dive doc at `research/deep-dive-YYYY-MM-DD.md`:

#### 3a. Site metrics
- `mcp__claude_ai_Ahrefs__site-explorer-metrics` — overall org_keywords, traffic, value
- `mcp__claude_ai_Ahrefs__site-explorer-domain-rating` — DR + ahrefs_rank
- `mcp__claude_ai_Ahrefs__site-explorer-backlinks-stats` — live links, live RDs

Compare against last month's deep-dive. Highlight: DR change, RD change, traffic change.

#### 3b. Competitors
- `mcp__claude_ai_Ahrefs__site-explorer-organic-competitors`
- Select: competitor_domain, domain_rating, keywords_common, keywords_competitor, keywords_target, traffic, pages
- Order by keywords_common:desc, limit 15

Compare to last month's top competitors. Note any new entrants or movers.

#### 3c. Top pages
- `mcp__claude_ai_Ahrefs__site-explorer-top-pages`
- Select: url, sum_traffic, value, keywords, top_keyword, top_keyword_volume, top_keyword_best_position, referring_domains
- Order by sum_traffic:desc, limit 25

Compare against last month. Surface biggest traffic gainers and losers per URL.

#### 3d. Referring domains
- `mcp__claude_ai_Ahrefs__site-explorer-referring-domains`
- Filter by first_seen in the last 30 days
- Order by domain_rating:desc, limit 30

Highlight DR 40+ new dofollows.

#### 3e. Anchors (spam check)
- `mcp__claude_ai_Ahrefs__site-explorer-anchors`
- Look for new fake-testimonial patterns
- Compare to known-spam patterns (SEOExpress, Telegram-channel cloaked, etc.)

If new spam patterns appear, add to the disavow file (step 7).

#### 3f. Broken backlinks
- `mcp__claude_ai_Ahrefs__site-explorer-broken-backlinks`
- Identify any new broken-target URLs that need redirects in `next.config.ts`

#### 3g. Site Audit
- `mcp__claude_ai_Ahrefs__site-audit-projects` (current health score)
- `mcp__claude_ai_Ahrefs__site-audit-issues` (compare to 30 days ago)

Highlight: health score change, any error category that grew.

### 4. Local-pack visibility guidance

Tell the user to run a Local Falcon (or similar) 7×7 grid scan for these queries:
- "roofer near me"
- "roofing company charlotte nc"
- "metal roof replacement charlotte nc"
- "storm damage roof repair near me"
- "emergency roof repair near me"

Capture the average rank per query. Compare to last month. Move toward Position 1 in each grid cell.

### 5. Content calendar

Run `/seo:content-calendar` to build the next 30 days of content based on priorities + clusters.

### 6. Backlink campaign progress review

Read `research/seo-action-items-2026-05-17.md` (the master action document). For each campaign item, check status:

- [ ] Manufacturer directories: all 4 active? (GAF, OC, Atlas, Malarkey)
- [ ] Chamber memberships: all 4 active? (LKN, Charlotte, Concord, Gastonia)
- [ ] Supply houses: all 3 listed? (ABC, SRS, Beacon)
- [ ] HARO placements this month: aim for ≥1
- [ ] New Google reviews this month: aim for ≥10
- [ ] BBB dofollow status: still confirmed?

For each missing or stalled item, set a 30-day next-step.

### 7. Strategic adjustments doc

Write `research/monthly-strategy/YYYY-MM.md` with this structure:

```markdown
# Strategic Adjustments — Month YYYY-MM

## Last month's targets vs. actuals
| Target | Status | Outcome |
|---|---|---|
| (from prior month's doc) | shipped / partial / not shipped | (impact observed) |

## This month's data
- DR: {prev → curr}
- RDs: {prev → curr}
- Top mover (page): X gained Y traffic
- Local pack avg rank: {prev → curr}

## Strategic adjustments for next 30 days
1. {Specific change with measurable target}
2. {Specific change with measurable target}
3. {Specific change with measurable target}
4. ...
5. ...

## Risks watched
- {Risk + mitigation}
```

3-5 concrete actions. Each must be measurable (so next month's deep-dive can grade it).

### 8. Disavow refresh

Invoke `/seo:scrub` to re-check anchor profile and refresh the disavow file if new spam domains have appeared. If the disavow file changed, upload it to GSC (manual user action — surface this clearly).

## Output format

Two outputs:

1. **Full reports** in `research/`:
   - `research/priorities-YYYY-MM-DD.md`
   - `research/deep-dive-YYYY-MM-DD.md`
   - `research/monthly-strategy/YYYY-MM.md`
   - Possibly `research/disavow-YYYY-MM-DD.txt`
2. **Screen summary** — under 500 words. Lead with last-month's wins/losses, then this month's top 3 priorities

## When to run

- **First Monday of every month**, ideally before noon so the day is open for any follow-up work
- **After a major Google algorithm update** — out-of-cycle deep-dive to assess impact
- **Quarterly** — combine with deeper end-of-quarter reflection

## Pass criteria

- ✅ Priorities doc refreshed
- ✅ Deep-dive shows audit health improving (or explanation if not)
- ✅ Local-pack avg-rank improving (or explanation if not)
- ✅ At least 1 new dofollow backlink earned in the prior month
- ✅ Content calendar shipped for next 30 days
- ✅ Strategic adjustments doc written (even if "stay the course" — explicit decision)

## Fail criteria (escalate to quarterly review)

- ❌ Site health score stuck below 70 for 2+ consecutive months → deeper technical audit needed
- ❌ Ahrefs DR stuck at same level for 6+ months → backlink campaign isn't working, change tactic
- ❌ Local-pack average rank worsening → GBP-side problem, not on-page

## Related commands

- `/seo:daily-pulse` — lightweight daily check
- `/seo:weekly-audit` — weekly audit + opportunity review
- `/seo:priorities` — full opportunity refresh (called as sub-step)
- `/seo:scrub` — disavow + technical hygiene (called as sub-step)
- `/seo:content-calendar` — content schedule (called as sub-step)
