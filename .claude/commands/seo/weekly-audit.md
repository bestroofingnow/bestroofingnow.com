# Weekly Audit Command

A 60-90 minute comprehensive site audit + opportunity review, designed to run every Monday morning. Combines the in-repo audit scripts with fresh Ahrefs/GSC data pulls.

## What this command does

1. Runs `scripts/weekly-audit-bundle.mjs` to refresh:
   - Cannibalization audit (duplicate titles/H1s/canonicals)
   - SEO/AEO quick audit (over-length titles/descriptions, missing speakable, etc.)
2. Pulls 7-day deltas via Ahrefs MCP:
   - GSC keywords + pages performance change
   - Referring-domains gains and losses
   - Site Audit issues delta (4XX, schema errors, orphans)
3. Synthesizes findings into a single weekly report at `research/weekly/YYYY-Www.md`
4. Surfaces a prioritized action list (3-5 items) to address this week

## Process

### 1. Run in-repo audit bundle

Execute via Bash:
```
node scripts/weekly-audit-bundle.mjs
```

This generates the audit count table and writes the base weekly report. It also flags any week-over-week regressions.

### 2. Pull 7-day GSC delta via Ahrefs MCP

Use `mcp__claude_ai_Ahrefs__gsc-keywords` with project_id 9751727:
- date_from: 7 days ago (in YYYY-MM-DD)
- date_to: yesterday (in YYYY-MM-DD)
- where: `{"and":[{"field":"impressions","is":["gte",10]}]}`
- limit: 100
- output: json

Use `mcp__claude_ai_Ahrefs__gsc-pages` for the same date range.

Append findings to the weekly report under a "## 7-day GSC summary" section. Highlight:
- Top 5 keywords by impressions this week
- Any keyword that improved 5+ positions
- Any keyword that worsened 5+ positions
- Page-level: which pages drove the most clicks

### 3. Pull referring-domains delta via Ahrefs

Use `mcp__claude_ai_Ahrefs__site-explorer-referring-domains`:
- target: bestroofingnow.com
- mode: subdomains
- select: domain,domain_rating,first_seen,is_dofollow,is_spam
- where: filter to `first_seen` in the last 7 days
- order_by: domain_rating:desc
- limit: 20

Append under "## Backlinks gained this week" section. Flag:
- Any DR 50+ new dofollow (celebration)
- Any spam-flagged new domain (queue for next disavow refresh)

### 4. Pull Site Audit issues delta

Use `mcp__claude_ai_Ahrefs__site-audit-issues` with project_id 9751727 and `date_compared` set to 7 days ago.

Append under "## Site Audit deltas" section. Highlight:
- Health score change
- Any new error category that has appeared
- Any error count that increased

### 5. Surface 3-5 prioritized weekly actions

Based on all the data, recommend the top 3-5 things to do this week. Examples:
- "Title regression on 3 new pages — fix in commit X"
- "DR 60 backlink gained from manufacturerY — replicate the pitch pattern for manufacturerZ"
- "Schema-error count regressed +12 — likely caused by commit ABC, investigate"
- "Tier 3 backlog: 5 more pages need missing OpenGraph — do this week"

These show up in the report under a "## Recommended actions" section at the top.

### 6. Run the quick-wins check

Invoke `/seo:research-performance` as a sub-step if not already done this week. Surfaces keywords on page 2 that are close to page 1.

## Output format

Two outputs:

1. **Full report** at `research/weekly/YYYY-Www.md` — comprehensive, version-controlled, ~300-500 lines
2. **Screen summary** — under 400 words. Lead with regressions if any, then weekly highlights, then the 3-5 prioritized actions

## When to run

- **Default:** every Monday morning between 8-10am
- **Trigger:** any time `/seo:daily-pulse` flags an emergency that needs deeper investigation
- **Trigger:** after a major deploy with many file changes (verify no regressions)

## Related commands

- `/seo:daily-pulse` — lightweight daily check
- `/seo:monthly-deep-dive` — strategic monthly review (next layer up)
- `/seo:research-performance` — quick-win keyword analysis (called as sub-step)
- `/seo:priorities` — full opportunity refresh (monthly cadence, not weekly)
