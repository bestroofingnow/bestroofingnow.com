/**
 * Trending Research Script
 * Identifies roofing topics gaining search interest NOW for time-sensitive content.
 * Uses DataForSEO Google Trends + Ranked Keywords to find opportunities.
 */
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config({ path: '.env.local' });

const BASE_URL = 'https://api.dataforseo.com';
const LOGIN = process.env.DATAFORSEO_LOGIN;
const PASSWORD = process.env.DATAFORSEO_PASSWORD;
const AUTH = 'Basic ' + Buffer.from(`${LOGIN}:${PASSWORD}`).toString('base64');
const TARGET = 'bestroofingnow.com';
const TODAY = new Date().toISOString().split('T')[0];

async function apiCall(endpoint, data) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Authorization': AUTH, 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API ${res.status}: ${text.slice(0, 200)}`);
  }
  return res.json();
}

// ── Step 1: Get BRN's current ranked keywords ──
console.log('Step 1: Fetching BRN ranked keywords...');
const brnResponse = await apiCall('/v3/dataforseo_labs/google/ranked_keywords/live', [{
  target: TARGET,
  location_code: 2840,
  language_code: 'en',
  limit: 1000,
  order_by: ['keyword_data.keyword_info.search_volume,desc'],
}]);

const brnKeywords = new Map();
const brnItems = brnResponse.tasks?.[0]?.result?.[0]?.items || [];
for (const item of brnItems) {
  const kw = item.keyword_data?.keyword?.toLowerCase();
  if (kw) {
    brnKeywords.set(kw, {
      position: item.ranked_serp_element?.serp_item?.rank_group || null,
      volume: item.keyword_data?.keyword_info?.search_volume || 0,
      url: item.ranked_serp_element?.serp_item?.url || null,
    });
  }
}
console.log(`  BRN ranks for ${brnKeywords.size} keywords`);

// ── Step 2: Get Google Trends rising queries for roofing seed terms ──
console.log('\nStep 2: Fetching Google Trends rising queries...');

const seedTerms = [
  'roofing', 'roof replacement', 'roofing cost', 'metal roofing',
  'roof repair', 'roofing contractor', 'roof insurance claim',
  'flat roof', 'roof inspection', 'storm damage roof',
];

const allRisingQueries = [];
const allTopQueries = [];

for (const seed of seedTerms) {
  try {
    console.log(`  Querying trends for "${seed}"...`);
    const trendRes = await apiCall('/v3/keywords_data/google_trends/explore/live', [{
      keywords: [seed],
      location_code: 2840,
      language_code: 'en',
      time_range: 'past_12_months',
      type: 'web',
      item_types: ['google_trends_queries_list'],
    }]);

    const items = trendRes.tasks?.[0]?.result || [];
    for (const result of items) {
      if (result.items) {
        for (const item of result.items) {
          if (item.type === 'google_trends_queries_list' && item.data) {
            const rising = item.data.rising || [];
            const top = item.data.top || [];
            for (const q of rising) {
              allRisingQueries.push({ ...q, seed });
            }
            for (const q of top) {
              allTopQueries.push({ ...q, seed });
            }
          }
        }
      }
    }
  } catch (err) {
    console.log(`    Error for "${seed}": ${err.message}`);
  }
}

console.log(`  Found ${allRisingQueries.length} rising queries, ${allTopQueries.length} top queries`);

// ── Step 3: Deduplicate and filter roofing-relevant queries ──
console.log('\nStep 3: Filtering and deduplicating...');

const roofingTerms = [
  'roof', 'roofing', 'roofer', 'gutter', 'shingle', 'flashing', 'leak',
  'siding', 'attic', 'ventilation', 'eave', 'soffit', 'fascia', 'chimney',
  'skylight', 'tpo', 'epdm', 'metal roof', 'flat roof', 'hail', 'storm damage',
  'contractor', 'inspection', 'insulation', 'asphalt', 'tile roof', 'slate',
  'waterproof', 'ice dam', 'ridge', 'vent', 'underlayment', 'drip edge',
  'solar', 'green roof', 'membrane', 'tar', 'pitch', 'gable',
];

function isRoofingRelated(query) {
  const lower = query.toLowerCase();
  return roofingTerms.some(t => lower.includes(t));
}

// Deduplicate rising queries
const risingMap = new Map();
for (const q of allRisingQueries) {
  const key = q.query?.toLowerCase();
  if (!key || !isRoofingRelated(key)) continue;
  // Skip branded
  if (key.includes('best roofing now')) continue;

  const existing = risingMap.get(key);
  if (!existing || (q.value && q.value > (existing.value || 0))) {
    risingMap.set(key, q);
  }
}

// Deduplicate top queries
const topMap = new Map();
for (const q of allTopQueries) {
  const key = q.query?.toLowerCase();
  if (!key || !isRoofingRelated(key)) continue;
  if (key.includes('best roofing now')) continue;

  const existing = topMap.get(key);
  if (!existing || (q.value && q.value > (existing.value || 0))) {
    topMap.set(key, q);
  }
}

console.log(`  ${risingMap.size} unique rising queries, ${topMap.size} unique top queries`);

// ── Step 4: Enrich with search volume from DataForSEO ──
console.log('\nStep 4: Enriching with search volume data...');

const allKeywords = [...new Set([...risingMap.keys(), ...topMap.keys()])];
const volumeData = new Map();

// Batch keywords in groups of 100
const batchSize = 100;
for (let i = 0; i < allKeywords.length; i += batchSize) {
  const batch = allKeywords.slice(i, i + batchSize);
  try {
    const volRes = await apiCall('/v3/dataforseo_labs/google/keyword_overview/live', [{
      keywords: batch,
      location_code: 2840,
      language_code: 'en',
    }]);

    const volItems = volRes.tasks?.[0]?.result || [];
    for (const item of volItems) {
      if (item.items) {
        for (const kd of item.items) {
          const kw = kd.keyword?.toLowerCase();
          if (kw) {
            volumeData.set(kw, {
              searchVolume: kd.keyword_info?.search_volume || 0,
              cpc: kd.keyword_info?.cpc || 0,
              competition: kd.keyword_info?.competition || 0,
              monthlySearches: kd.keyword_info?.monthly_searches || [],
            });
          }
        }
      }
    }
    console.log(`  Enriched batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(allKeywords.length / batchSize)}`);
  } catch (err) {
    console.log(`  Error enriching batch: ${err.message}`);
  }
}

// ── Step 5: Calculate growth rate from monthly search data ──
console.log('\nStep 5: Calculating growth and scoring opportunities...');

const opportunities = [];

for (const [keyword, risingData] of risingMap) {
  const vol = volumeData.get(keyword) || {};
  const brn = brnKeywords.get(keyword);

  // Calculate growth from monthly searches
  const monthly = vol.monthlySearches || [];
  let growthPct = risingData.value || 0; // Google Trends growth value
  let recentVolume = 0;
  let olderVolume = 0;

  if (monthly.length >= 3) {
    // Last 3 months vs prior 3 months
    const recent = monthly.slice(0, 3);
    const older = monthly.slice(3, 6);
    recentVolume = recent.reduce((s, m) => s + (m.search_volume || 0), 0) / recent.length;
    olderVolume = older.length > 0
      ? older.reduce((s, m) => s + (m.search_volume || 0), 0) / older.length
      : 0;

    if (olderVolume > 0) {
      growthPct = Math.round(((recentVolume - olderVolume) / olderVolume) * 100);
    }
  }

  // Determine urgency
  let urgency = 'MODERATE';
  if (growthPct >= 150 || (risingData.value && String(risingData.value).includes('Breakout'))) {
    urgency = 'CRITICAL';
  } else if (growthPct >= 75) {
    urgency = 'HIGH';
  }

  // Calculate opportunity score
  const searchVolume = vol.searchVolume || 0;
  const currentPosition = brn?.position || null;

  let score = 0;
  // Growth rate (40%)
  score += Math.min(40, (growthPct / 10));
  // Search volume (30%)
  score += Math.min(30, searchVolume / 50);
  // Position advantage (30%) - closer to ranking = higher score
  if (currentPosition && currentPosition <= 10) score += 30;
  else if (currentPosition && currentPosition <= 20) score += 25;
  else if (currentPosition && currentPosition <= 30) score += 20;
  else if (currentPosition && currentPosition <= 50) score += 10;
  else score += 5; // Not ranking at all = still some opportunity

  // Determine intent
  let intent = 'informational';
  if (vol.cpc > 5 || keyword.includes('near me') || keyword.includes('contractor') || keyword.includes('company')) {
    intent = 'commercial';
  } else if (keyword.includes('cost') || keyword.includes('price') || keyword.includes('how much')) {
    intent = 'commercial-investigation';
  } else if (keyword.includes('hire') || keyword.includes('call') || keyword.includes('schedule') || keyword.includes('quote')) {
    intent = 'transactional';
  }

  // Determine content type
  let contentType = 'guide';
  if (keyword.includes('how to') || keyword.includes('how do')) contentType = 'how-to';
  else if (keyword.includes('cost') || keyword.includes('price') || keyword.includes('much')) contentType = 'cost-guide';
  else if (keyword.includes('vs') || keyword.includes('versus')) contentType = 'comparison';
  else if (keyword.includes('best') || keyword.includes('top')) contentType = 'listicle';
  else if (keyword.includes('near me') || keyword.match(/\b(nc|sc|charlotte|raleigh)\b/)) contentType = 'location-page';

  // Determine action
  let action = '';
  if (currentPosition && currentPosition <= 30) {
    action = `UPDATE existing page (currently #${currentPosition}): add trending angle, refresh content, update title`;
  } else {
    action = `CREATE new ${contentType}: target this keyword with comprehensive 2000+ word content`;
  }

  const timeline = urgency === 'CRITICAL' ? '3-7 days' : urgency === 'HIGH' ? '1-2 weeks' : '2-4 weeks';

  opportunities.push({
    keyword,
    growthPct,
    trendValue: risingData.value,
    searchVolume,
    cpc: vol.cpc || 0,
    competition: vol.competition || 0,
    currentPosition,
    currentUrl: brn?.url || null,
    urgency,
    score: Math.round(score),
    intent,
    contentType,
    action,
    timeline,
    seed: risingData.seed,
  });
}

// Also include high-volume top queries we don't rank for
for (const [keyword, topData] of topMap) {
  if (risingMap.has(keyword)) continue; // Already captured in rising
  const vol = volumeData.get(keyword) || {};
  const brn = brnKeywords.get(keyword);
  const searchVolume = vol.searchVolume || 0;

  if (searchVolume < 100) continue; // Skip low volume top queries
  if (brn?.position && brn.position <= 10) continue; // Already ranking well

  let intent = 'informational';
  if (vol.cpc > 5 || keyword.includes('near me')) intent = 'commercial';
  else if (keyword.includes('cost') || keyword.includes('price')) intent = 'commercial-investigation';

  let contentType = 'guide';
  if (keyword.includes('how to')) contentType = 'how-to';
  else if (keyword.includes('cost') || keyword.includes('price')) contentType = 'cost-guide';
  else if (keyword.includes('vs')) contentType = 'comparison';

  const action = brn?.position
    ? `OPTIMIZE existing page (#${brn.position}): refresh and expand content`
    : `CREATE new ${contentType}: high-volume evergreen topic`;

  opportunities.push({
    keyword,
    growthPct: 0,
    trendValue: topData.value,
    searchVolume,
    cpc: vol.cpc || 0,
    competition: vol.competition || 0,
    currentPosition: brn?.position || null,
    currentUrl: brn?.url || null,
    urgency: 'MODERATE',
    score: Math.round(Math.min(30, searchVolume / 50) + 15),
    intent,
    contentType,
    action,
    timeline: '2-4 weeks',
    seed: topData.seed,
  });
}

// Sort by score descending
opportunities.sort((a, b) => b.score - a.score);

// ── Step 6: Generate report ──
console.log('\nStep 6: Generating report...');

const critical = opportunities.filter(o => o.urgency === 'CRITICAL');
const high = opportunities.filter(o => o.urgency === 'HIGH');
const moderate = opportunities.filter(o => o.urgency === 'MODERATE');

let report = `# Trending Research Report — bestroofingnow.com
**Date:** ${TODAY}
**Keywords Tracked:** ${brnKeywords.size}
**Rising Queries Found:** ${risingMap.size}
**Total Opportunities:** ${opportunities.length}

---

## Summary

| Urgency | Count | Action Window |
|---------|-------|---------------|
| CRITICAL | ${critical.length} | 3-7 days |
| HIGH | ${high.length} | 1-2 weeks |
| MODERATE | ${moderate.length} | 2-4 weeks |

**Total Addressable Volume:** ${opportunities.reduce((s, o) => s + o.searchVolume, 0).toLocaleString()}/mo

---

`;

function formatSection(title, emoji, items) {
  if (items.length === 0) return '';
  let section = `## ${emoji} ${title}\n\n`;
  for (const opp of items) {
    const posStr = opp.currentPosition ? `#${opp.currentPosition}` : 'Not ranking';
    const growthStr = opp.growthPct > 0 ? `+${opp.growthPct}%` : (opp.trendValue ? `Trend: ${opp.trendValue}` : 'Steady');
    section += `### "${opp.keyword}"
- **Growth:** ${growthStr}
- **Volume:** ${opp.searchVolume.toLocaleString()}/mo | **CPC:** $${opp.cpc.toFixed(2)}
- **Your Position:** ${posStr}
- **Intent:** ${opp.intent} | **Content Type:** ${opp.contentType}
- **Score:** ${opp.score}/100
- **Action:** ${opp.action}
- **Timeline:** ${opp.timeline}
${opp.currentUrl ? `- **Current URL:** ${opp.currentUrl}` : ''}

`;
  }
  return section;
}

report += formatSection('CRITICAL Urgency — Act within 1 week', '\uD83D\uDD25', critical);
report += formatSection('HIGH Urgency — Act within 2 weeks', '\u26A1', high);
report += formatSection('MODERATE Urgency — Act within 1 month', '\u23F3', moderate.slice(0, 20));

if (moderate.length > 20) {
  report += `\n*... and ${moderate.length - 20} more moderate opportunities (see JSON for full list)*\n\n`;
}

report += `---

## Recommended Action Plan

### Week 1: Critical Trends
${critical.slice(0, 5).map((o, i) => `${i + 1}. ${o.currentPosition ? 'Update' : 'Create'}: "${o.keyword}" (${o.searchVolume.toLocaleString()}/mo)`).join('\n') || 'No critical trends detected this cycle.'}

### Week 2: High Priority
${high.slice(0, 5).map((o, i) => `${i + 1}. ${o.currentPosition ? 'Update' : 'Create'}: "${o.keyword}" (${o.searchVolume.toLocaleString()}/mo)`).join('\n') || 'No high-priority trends detected.'}

### Week 3-4: Moderate & Monitor
- Work through moderate urgency items
- Re-run \`/seo:research-trending\` to catch new spikes
- Track position changes for published content

---

## Next Steps
- \`/seo:research-serp [keyword]\` — Deep SERP analysis for top opportunities
- \`/seo:write [keyword]\` — Create content for trending topics
- \`/seo:optimize [url]\` — Update existing pages for trending queries
`;

// Save files
fs.mkdirSync('research', { recursive: true });
fs.writeFileSync(`research/trending-${TODAY}.md`, report);
fs.writeFileSync(`research/trending-${TODAY}.json`, JSON.stringify({
  date: TODAY,
  brnKeywordCount: brnKeywords.size,
  risingQueryCount: risingMap.size,
  opportunities,
}, null, 2));

console.log(`\nReport saved to: research/trending-${TODAY}.md`);
console.log(`JSON data saved to: research/trending-${TODAY}.json`);

// Print summary to console
console.log('\n' + '='.repeat(70));
console.log('TRENDING RESEARCH SUMMARY — bestroofingnow.com');
console.log('='.repeat(70));
console.log(`CRITICAL: ${critical.length} | HIGH: ${high.length} | MODERATE: ${moderate.length}`);
console.log(`Total addressable volume: ${opportunities.reduce((s, o) => s + o.searchVolume, 0).toLocaleString()}/mo\n`);

const top10 = opportunities.slice(0, 10);
if (top10.length > 0) {
  console.log('TOP 10 OPPORTUNITIES:\n');
  for (const [i, opp] of top10.entries()) {
    const posStr = opp.currentPosition ? `#${opp.currentPosition}` : 'N/A';
    const growthStr = opp.growthPct > 0 ? `+${opp.growthPct}%` : `trend:${opp.trendValue}`;
    console.log(`${i + 1}. [${opp.urgency}] "${opp.keyword}"`);
    console.log(`   Growth: ${growthStr} | Vol: ${opp.searchVolume} | Pos: ${posStr} | Score: ${opp.score}`);
    console.log(`   Action: ${opp.action}`);
    console.log('');
  }
}
