#!/usr/bin/env node
/**
 * Daily GSC pulse — runs in 2-5 seconds, writes a brief snapshot of the
 * site's organic position state for the day, and (if a previous snapshot
 * exists) emits a top-mover delta.
 *
 * What this script DOES:
 *   - Stub data structure for the daily snapshot
 *   - Compares today's snapshot to yesterday's
 *   - Outputs the top 10 movers (gainers + losers)
 *   - Writes results to research/pulse/YYYY-MM-DD.md
 *
 * What this script DOES NOT:
 *   - Pull live GSC data (that requires the Ahrefs MCP, which is only
 *     accessible from inside a Claude Code session — not a plain Node run)
 *   - This script is a SCAFFOLD that the /seo:daily-pulse slash command
 *     calls in two passes:
 *       1. Claude calls Ahrefs MCP to fetch GSC data and writes the JSON
 *          to scripts/gsc-snapshots/YYYY-MM-DD.json
 *       2. This script reads the JSON, generates the markdown diff
 *
 * Run via slash command: /seo:daily-pulse
 *   OR manually after a Claude-side snapshot exists:
 *   node scripts/daily-gsc-pulse.mjs
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const SNAPSHOTS_DIR = path.join(__dirname, 'gsc-snapshots');
const PULSE_DIR = path.join(ROOT, 'research', 'pulse');
const TODAY = new Date().toISOString().split('T')[0];

function isoDateNDaysAgo(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().split('T')[0];
}

async function readSnapshot(date) {
  try {
    const raw = await fs.readFile(path.join(SNAPSHOTS_DIR, `${date}.json`), 'utf8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/** Build a keyword index for fast lookup. */
function indexByKeyword(snapshot) {
  const idx = new Map();
  if (!snapshot || !snapshot.keywords) return idx;
  for (const kw of snapshot.keywords) {
    idx.set(kw.keyword, kw);
  }
  return idx;
}

/** Compare two snapshots and return movers. */
function computeMovers(todaySnap, yesterdaySnap) {
  const yIdx = indexByKeyword(yesterdaySnap);
  const tIdx = indexByKeyword(todaySnap);

  const movers = [];
  for (const [kw, tEntry] of tIdx) {
    const yEntry = yIdx.get(kw);
    if (!yEntry) {
      movers.push({ keyword: kw, type: 'new', tPos: tEntry.position, tImps: tEntry.impressions, delta: null });
      continue;
    }
    const delta = yEntry.position - tEntry.position; // positive = improved
    if (Math.abs(delta) >= 3) {
      movers.push({
        keyword: kw,
        type: delta > 0 ? 'up' : 'down',
        tPos: tEntry.position,
        yPos: yEntry.position,
        tImps: tEntry.impressions,
        tClicks: tEntry.clicks,
        delta,
      });
    }
  }
  // Disappeared keywords
  for (const [kw, yEntry] of yIdx) {
    if (!tIdx.has(kw)) {
      movers.push({ keyword: kw, type: 'gone', yPos: yEntry.position, yImps: yEntry.impressions, delta: null });
    }
  }
  return movers;
}

function fmt(n) {
  if (n === null || n === undefined) return '—';
  return typeof n === 'number' ? n.toFixed(1).replace(/\.0$/, '') : String(n);
}

async function main() {
  const todaySnap = await readSnapshot(TODAY);
  if (!todaySnap) {
    console.log(`No snapshot found for today (${TODAY}).`);
    console.log(`Expected: ${path.relative(ROOT, path.join(SNAPSHOTS_DIR, `${TODAY}.json`))}`);
    console.log('Run /seo:daily-pulse to generate today\'s snapshot first.');
    process.exit(0);
  }

  // Find the most recent prior snapshot (yesterday, or further back)
  let yesterdaySnap = null;
  let yesterdayDate = null;
  for (let i = 1; i <= 14; i++) {
    const date = isoDateNDaysAgo(i);
    const snap = await readSnapshot(date);
    if (snap) {
      yesterdaySnap = snap;
      yesterdayDate = date;
      break;
    }
  }

  const movers = yesterdaySnap ? computeMovers(todaySnap, yesterdaySnap) : [];
  const ups = movers.filter((m) => m.type === 'up').sort((a, b) => b.delta - a.delta);
  const downs = movers.filter((m) => m.type === 'down').sort((a, b) => a.delta - b.delta);
  const news = movers.filter((m) => m.type === 'new').sort((a, b) => (b.tImps || 0) - (a.tImps || 0));
  const gones = movers.filter((m) => m.type === 'gone').sort((a, b) => (b.yImps || 0) - (a.yImps || 0));

  // Build markdown report
  const lines = [];
  lines.push(`# Daily Pulse — ${TODAY}`);
  lines.push('');
  lines.push(`**Compared against:** ${yesterdayDate || '(no prior snapshot)'}`);
  lines.push(`**Total keywords today:** ${todaySnap.keywords?.length ?? 0}`);
  if (todaySnap.summary) {
    lines.push(`**Top-page impressions:** ${todaySnap.summary.totalImpressions ?? '—'}`);
    lines.push(`**Top-page clicks:** ${todaySnap.summary.totalClicks ?? '—'}`);
    lines.push(`**Avg position:** ${fmt(todaySnap.summary.avgPosition)}`);
  }
  lines.push('');

  if (!yesterdaySnap) {
    lines.push('_First snapshot in this series. Movers analysis will be available tomorrow._');
  } else {
    lines.push('## 🟢 Top movers UP (≥3 positions)');
    lines.push('');
    if (ups.length === 0) {
      lines.push('_No significant gains today._');
    } else {
      lines.push('| Keyword | Was | Now | Δ | Imps | Clicks |');
      lines.push('|---|---|---|---|---|---|');
      for (const m of ups.slice(0, 10)) {
        lines.push(`| ${m.keyword} | ${fmt(m.yPos)} | ${fmt(m.tPos)} | **+${m.delta.toFixed(1)}** | ${m.tImps ?? '—'} | ${m.tClicks ?? '—'} |`);
      }
    }
    lines.push('');

    lines.push('## 🔴 Top movers DOWN (≥3 positions)');
    lines.push('');
    if (downs.length === 0) {
      lines.push('_No significant losses today._');
    } else {
      lines.push('| Keyword | Was | Now | Δ | Imps | Clicks |');
      lines.push('|---|---|---|---|---|---|');
      for (const m of downs.slice(0, 10)) {
        lines.push(`| ${m.keyword} | ${fmt(m.yPos)} | ${fmt(m.tPos)} | **${m.delta.toFixed(1)}** | ${m.tImps ?? '—'} | ${m.tClicks ?? '—'} |`);
      }
    }
    lines.push('');

    lines.push('## 🆕 New keywords entered ranking');
    lines.push('');
    if (news.length === 0) {
      lines.push('_No new keywords today._');
    } else {
      for (const m of news.slice(0, 10)) {
        lines.push(`- **${m.keyword}** — entered at pos ${fmt(m.tPos)}, ${m.tImps ?? 0} imps`);
      }
    }
    lines.push('');

    lines.push('## ⚰️ Disappeared from ranking');
    lines.push('');
    if (gones.length === 0) {
      lines.push('_No keywords dropped out today._');
    } else {
      for (const m of gones.slice(0, 10)) {
        lines.push(`- **${m.keyword}** — was pos ${fmt(m.yPos)}, ${m.yImps ?? 0} imps yesterday`);
      }
    }
    lines.push('');
  }

  // Status flags
  lines.push('## Status flags');
  lines.push('');
  const bigDowns = downs.filter((m) => m.delta <= -10 && (m.tImps ?? 0) > 10);
  if (bigDowns.length > 0) {
    lines.push(`🚨 **${bigDowns.length} money keyword(s) dropped 10+ positions overnight** — escalate to weekly review:`);
    for (const m of bigDowns) lines.push(`   - ${m.keyword} (${fmt(m.yPos)} → ${fmt(m.tPos)})`);
  } else {
    lines.push('✅ No major ranking emergencies overnight.');
  }
  lines.push('');

  await fs.mkdir(PULSE_DIR, { recursive: true });
  const outPath = path.join(PULSE_DIR, `${TODAY}.md`);
  await fs.writeFile(outPath, lines.join('\n'), 'utf8');

  console.log(`Pulse: ${ups.length} up, ${downs.length} down, ${news.length} new, ${gones.length} gone`);
  console.log(`Report: ${path.relative(ROOT, outPath)}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
