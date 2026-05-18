# Daily Pulse Command

A 2-5 minute morning health check on the site's organic search position.
Designed to catch problems before they become incidents — NOT for content decisions or strategic moves.

## What this command does

1. Calls the Ahrefs MCP to pull today's GSC keyword data (yesterday's traffic, today's snapshot)
2. Writes the JSON snapshot to `scripts/gsc-snapshots/YYYY-MM-DD.json`
3. Runs `node scripts/daily-gsc-pulse.mjs` which:
   - Compares today vs the most recent prior snapshot
   - Identifies the 10 biggest movers (gainers + losers)
   - Flags any "money keyword dropped 10+ positions overnight" as an emergency
   - Writes a brief markdown report to `research/pulse/YYYY-MM-DD.md`
4. Surfaces the summary back to the user, flagging anything that needs attention

## Process

### 1. Pull GSC data via Ahrefs MCP

Use `mcp__claude_ai_Ahrefs__gsc-keywords` to pull yesterday's keyword data:
- project_id: 9751727 (Bestroofingnow)
- date_from: yesterday's date in YYYY-MM-DD
- date_to: yesterday's date in YYYY-MM-DD
- where: `{"and":[{"field":"impressions","is":["gte",5]}]}`
- limit: 200
- output: json

Also pull `mcp__claude_ai_Ahrefs__gsc-pages` for the same date range with a similar filter.

### 2. Write the snapshot file

Build a JSON object with this structure:
```json
{
  "date": "YYYY-MM-DD",
  "source": "Ahrefs GSC API",
  "summary": {
    "totalKeywords": <count>,
    "totalImpressions": <sum>,
    "totalClicks": <sum>,
    "avgPosition": <weighted avg>
  },
  "keywords": [
    {"keyword": "...", "position": 12.3, "impressions": 50, "clicks": 2, "topUrl": "https://..."}
  ],
  "topPages": [
    {"url": "...", "impressions": ..., "clicks": ..., "position": ...}
  ]
}
```

Write to `scripts/gsc-snapshots/YYYY-MM-DD.json` (today's date — even though the data is yesterday's, we name the snapshot by when it was captured).

Use Bash to ensure the directory exists: `mkdir -p scripts/gsc-snapshots`

### 3. Run the diff script

Execute `node scripts/daily-gsc-pulse.mjs`. It will:
- Read today's snapshot
- Find the most recent prior snapshot (yesterday, or the latest available within 14 days)
- Compute movers (up, down, new, gone)
- Write `research/pulse/YYYY-MM-DD.md`
- Print the count summary

### 4. Surface the highlights

Show the user:
- **Headline numbers**: total keywords today, top movers count
- **🚨 Any emergencies**: money keywords down 10+ positions
- **🟢 Top 3 gainers** with their delta
- **🔴 Top 3 losers** with their delta
- **🆕 Any net-new keywords** with notable impressions

If everything looks normal:
- ✅ "No emergencies overnight. {N} keywords tracked, {N} significant movers."
- Point to the full report path.

If there's an issue:
- Flag clearly and recommend running `/seo:weekly-audit` for deeper investigation.

## Output format

Brief — under 200 words on the screen. The full detail lives in `research/pulse/YYYY-MM-DD.md`. The user should be able to read the screen output in under 30 seconds and know whether to dig deeper.

## When NOT to run this

- More than once per day (it's a daily pulse — running it twice produces no new signal)
- When you know there was no organic-search day yet (run after 10am to ensure GSC has yesterday's data)
- As a substitute for the weekly audit — the daily pulse can't catch structural issues, only ranking movement

## Related commands

- `/seo:weekly-audit` — run this when the daily pulse flags an emergency, or just on Mondays
- `/seo:monthly-deep-dive` — full Ahrefs deep-dive for strategic planning
- `/seo:performance-review` — existing detailed performance analysis
