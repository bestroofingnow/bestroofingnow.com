/**
 * Lake Norman Content Gap Analysis
 * Finds Lake Norman roofing keywords BRN doesn't rank for yet.
 */
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const LOGIN = process.env.DATAFORSEO_LOGIN;
const PASSWORD = process.env.DATAFORSEO_PASSWORD;
const AUTH = 'Basic ' + Buffer.from(`${LOGIN}:${PASSWORD}`).toString('base64');
const BASE = 'https://api.dataforseo.com';

async function api(endpoint, data) {
  const res = await fetch(`${BASE}${endpoint}`, {
    method: 'POST',
    headers: { 'Authorization': AUTH, 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`API ${res.status}: ${res.statusText}`);
  return res.json();
}

// Step 1: Get BRN's Lake Norman keywords
console.log('Step 1: Fetching BRN Lake Norman keywords...');
const brnRes = await api('/v3/dataforseo_labs/google/ranked_keywords/live', [{
  target: 'bestroofingnow.com',
  location_code: 2840,
  language_code: 'en',
  limit: 500,
  order_by: ['keyword_data.keyword_info.search_volume,desc'],
  filters: [['keyword_data.keyword', 'like', '%lake norman%']],
}]);
const brnItems = brnRes.tasks?.[0]?.result?.[0]?.items || [];
const brnKeywords = new Set();
brnItems.forEach(i => { if (i.keyword_data?.keyword) brnKeywords.add(i.keyword_data.keyword.toLowerCase()); });
console.log(`BRN ranks for ${brnKeywords.size} Lake Norman keywords:`);
brnItems.slice(0, 20).forEach(i => {
  const kd = i.keyword_data;
  const pos = i.ranked_serp_element?.serp_item?.rank_absolute || '?';
  console.log(`  #${pos} - "${kd.keyword}" (vol: ${kd.keyword_info?.search_volume || 0})`);
});

// Step 2: Find Lake Norman keyword opportunities via related + suggestions
console.log('\nStep 2: Finding Lake Norman keyword opportunities...');
const seeds = [
  'roofing lake norman nc',
  'roofer lake norman',
  'roof repair lake norman',
  'roofing contractor lake norman',
  'roof replacement lake norman nc',
  'lake norman roofing companies',
  'lake norman roof inspection',
  'lake norman storm damage roof',
  'lake norman gutter installation',
  'mooresville roofing',
  'cornelius roofing',
  'davidson roofing',
  'denver nc roofing',
];

const allKeywords = new Map();

for (const seed of seeds) {
  try {
    const kwRes = await api('/v3/dataforseo_labs/google/related_keywords/live', [{
      keyword: seed,
      location_code: 2840,
      language_code: 'en',
      limit: 50,
      order_by: ['keyword_data.keyword_info.search_volume,desc'],
    }]);
    const items = kwRes.tasks?.[0]?.result?.[0]?.items || [];
    for (const item of items) {
      const kd = item.keyword_data;
      if (!kd?.keyword) continue;
      const kw = kd.keyword.toLowerCase();
      if (!allKeywords.has(kw) || (kd.keyword_info?.search_volume || 0) > (allKeywords.get(kw)?.searchVolume || 0)) {
        allKeywords.set(kw, {
          keyword: kw,
          searchVolume: kd.keyword_info?.search_volume || 0,
          cpc: kd.keyword_info?.cpc || 0,
          competition: kd.keyword_info?.competition || 0,
        });
      }
    }
    console.log(`  "${seed}" -> ${items.length} related keywords`);
  } catch (err) {
    console.log(`  "${seed}" -> error: ${err.message}`);
  }
}

// Also get suggestions
for (const seed of ['lake norman roofing', 'lake norman roof', 'lake norman roofer', 'mooresville roofer', 'cornelius roofer']) {
  try {
    const sugRes = await api('/v3/dataforseo_labs/google/keyword_suggestions/live', [{
      keyword: seed,
      location_code: 2840,
      language_code: 'en',
      limit: 50,
      order_by: ['keyword_info.search_volume,desc'],
    }]);
    const items = sugRes.tasks?.[0]?.result?.[0]?.items || [];
    for (const item of items) {
      if (!item.keyword) continue;
      const kw = item.keyword.toLowerCase();
      if (!allKeywords.has(kw)) {
        allKeywords.set(kw, {
          keyword: kw,
          searchVolume: item.keyword_info?.search_volume || 0,
          cpc: item.keyword_info?.cpc || 0,
          competition: item.keyword_info?.competition || 0,
        });
      }
    }
    console.log(`  suggestions "${seed}" -> ${items.length} keywords`);
  } catch (err) {
    console.log(`  suggestions "${seed}" -> error: ${err.message}`);
  }
}

console.log(`\nTotal unique keywords discovered: ${allKeywords.size}`);

// Step 3: Filter for Lake Norman area relevance and identify gaps
const lakeNormanTerms = ['lake norman', 'cornelius', 'davidson', 'mooresville', 'denver nc', 'huntersville', 'sherrills ford', 'terrell', 'troutman', 'statesville'];
const gaps = [];

for (const [kw, data] of allKeywords) {
  if (brnKeywords.has(kw)) continue;
  if (data.searchVolume < 10) continue;
  if (kw.includes('norman rockwell')) continue;

  // Must be relevant to Lake Norman area OR roofing
  const isLakeNormanArea = lakeNormanTerms.some(t => kw.includes(t));
  const roofingTerms = ['roof', 'roofing', 'roofer', 'gutter', 'shingle', 'flashing', 'leak', 'siding', 'soffit', 'fascia', 'skylight', 'tpo', 'epdm', 'metal roof', 'flat roof', 'hail', 'storm damage', 'contractor', 'inspection'];
  const isRoofing = roofingTerms.some(t => kw.includes(t));

  if (!isLakeNormanArea && !isRoofing) continue;

  let score = 0;
  score += Math.min(40, data.searchVolume / 10);
  score += data.cpc * 3;
  score -= data.competition * 10;
  if (isLakeNormanArea) score += 10; // Bonus for Lake Norman specific

  let contentType = 'service-page';
  if (kw.includes('how to') || kw.includes('how do')) contentType = 'how-to-guide';
  else if (kw.includes('cost') || kw.includes('price') || kw.includes('much')) contentType = 'cost-guide';
  else if (kw.includes('vs') || kw.includes('versus')) contentType = 'comparison';
  else if (kw.includes('best') || kw.includes('top')) contentType = 'listicle';
  else if (isLakeNormanArea || kw.includes('near me')) contentType = 'location-page';
  else if (kw.includes('review') || kw.includes('rated')) contentType = 'review-page';

  let intent = 'informational';
  if (data.cpc > 5 || kw.includes('near me') || kw.includes('company') || kw.includes('contractor')) intent = 'commercial';
  if (kw.includes('hire') || kw.includes('call') || kw.includes('schedule')) intent = 'transactional';

  const priority = score >= 40 ? 'CRITICAL' : score >= 25 ? 'HIGH' : score >= 12 ? 'MEDIUM' : 'LOW';

  gaps.push({ ...data, score, priority, contentType, intent });
}

gaps.sort((a, b) => b.score - a.score);

console.log('\n' + '='.repeat(80));
console.log('LAKE NORMAN CONTENT GAP ANALYSIS - bestroofingnow.com');
console.log(`Date: ${new Date().toISOString().split('T')[0]}`);
console.log(`BRN Lake Norman keywords: ${brnKeywords.size}`);
console.log(`Total gap opportunities: ${gaps.length}`);
console.log('='.repeat(80));

const top30 = gaps.slice(0, 30);
console.log(`\nTOP ${top30.length} LAKE NORMAN CONTENT GAPS\n`);
top30.forEach((g, i) => {
  console.log(`${i + 1}. [${g.priority}] "${g.keyword}"`);
  console.log(`   Volume: ${g.searchVolume} | CPC: $${g.cpc.toFixed(2)} | Score: ${g.score.toFixed(0)}`);
  console.log(`   Intent: ${g.intent} | Content type: ${g.contentType}`);
  console.log('');
});

const critical = gaps.filter(g => g.priority === 'CRITICAL').length;
const high = gaps.filter(g => g.priority === 'HIGH').length;
const medium = gaps.filter(g => g.priority === 'MEDIUM').length;
console.log('PRIORITY SUMMARY:');
console.log(`  CRITICAL: ${critical} | HIGH: ${high} | MEDIUM: ${medium} | LOW: ${gaps.length - critical - high - medium}`);
console.log(`  Total addressable volume: ${gaps.reduce((s, g) => s + g.searchVolume, 0).toLocaleString()}/mo`);

// Save report
const fs = await import('fs');
fs.mkdirSync('research', { recursive: true });
const outPath = `research/lake-norman-gaps-${new Date().toISOString().split('T')[0]}.json`;
fs.writeFileSync(outPath, JSON.stringify({
  date: new Date().toISOString(),
  brnKeywordCount: brnKeywords.size,
  brnKeywords: [...brnKeywords],
  gaps,
}, null, 2));
console.log(`\nFull report saved to: ${outPath}`);
