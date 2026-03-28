/**
 * Competitor Gap Analysis Script
 * Uses DataForSEO to find keywords competitors rank for that BRN doesn't.
 */
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const BASE_URL = 'https://api.dataforseo.com';
const LOGIN = process.env.DATAFORSEO_LOGIN;
const PASSWORD = process.env.DATAFORSEO_PASSWORD;
const AUTH = 'Basic ' + Buffer.from(`${LOGIN}:${PASSWORD}`).toString('base64');
const TARGET = 'bestroofingnow.com';

async function apiCall(endpoint, data) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Authorization': AUTH, 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`API ${res.status}: ${res.statusText}`);
  return res.json();
}

// Step 1: Get competitors
console.log('📊 Step 1: Finding competitors for', TARGET, '...');
const compResponse = await apiCall('/v3/dataforseo_labs/google/competitors_domain/live', [{
  target: TARGET,
  location_code: 2840,
  language_code: 'en',
  limit: 7,
  filters: [["avg_position", "<", 50]],
}]);

const competitors = compResponse.tasks?.[0]?.result?.[0]?.items || [];
console.log(`Found ${competitors.length} competitors:`);
competitors.forEach(c => console.log(`  - ${c.domain} (avg pos: ${c.avg_position?.toFixed(1)}, intersections: ${c.intersections})`));

// Step 2: Get BRN's current ranked keywords
console.log('\n📊 Step 2: Fetching BRN ranked keywords...');
const brnResponse = await apiCall('/v3/dataforseo_labs/google/ranked_keywords/live', [{
  target: TARGET,
  location_code: 2840,
  language_code: 'en',
  limit: 1000,
  order_by: ['keyword_data.keyword_info.search_volume,desc'],
}]);

const brnKeywords = new Set();
const brnItems = brnResponse.tasks?.[0]?.result?.[0]?.items || [];
brnItems.forEach(item => {
  if (item.keyword_data?.keyword) brnKeywords.add(item.keyword_data.keyword.toLowerCase());
});
console.log(`BRN ranks for ${brnKeywords.size} keywords`);

// Step 3: For each top competitor, find keywords they rank for that BRN doesn't
console.log('\n📊 Step 3: Finding content gaps...');
const gaps = [];
const topCompetitors = competitors.slice(0, 5);

for (const comp of topCompetitors) {
  console.log(`  Analyzing ${comp.domain}...`);

  // Use domain intersection with intersections=false to find keywords comp has but BRN doesn't
  try {
    const intResponse = await apiCall('/v3/dataforseo_labs/google/domain_intersection/live', [{
      target1: comp.domain,
      target2: TARGET,
      location_code: 2840,
      language_code: 'en',
      intersections: false, // Keywords target1 has but target2 doesn't
      limit: 100,
      order_by: ['keyword_data.keyword_info.search_volume,desc'],
      filters: [["keyword_data.keyword_info.search_volume", ">", 50]],
    }]);

    const intItems = intResponse.tasks?.[0]?.result?.[0]?.items || [];

    for (const item of intItems) {
      const kw = item.keyword_data;
      if (!kw?.keyword) continue;

      const keyword = kw.keyword.toLowerCase();

      // Skip branded keywords
      if (keyword.includes(comp.domain.split('.')[0])) continue;
      if (keyword.includes('best roofing now')) continue;

      // Must be roofing-related
      const roofingTerms = ['roof', 'roofing', 'roofer', 'gutter', 'shingle', 'flashing', 'leak', 'siding', 'attic', 'ventilation', 'eave', 'soffit', 'fascia', 'chimney', 'skylight', 'tpo', 'epdm', 'metal roof', 'flat roof', 'hail', 'storm damage', 'contractor', 'inspection'];
      const isRoofingRelated = roofingTerms.some(t => keyword.includes(t));
      if (!isRoofingRelated) continue;

      // Check if BRN already ranks for this
      if (brnKeywords.has(keyword)) continue;

      const ki = kw.keyword_info || {};
      const serpItem = item.first_domain_serp_element?.serp_item || {};

      gaps.push({
        keyword,
        searchVolume: ki.search_volume || 0,
        cpc: ki.cpc || 0,
        competition: ki.competition || 0,
        competitorDomain: comp.domain,
        competitorPosition: serpItem.rank_absolute || serpItem.rank_group || null,
        competitorUrl: serpItem.url || null,
      });
    }
  } catch (err) {
    console.log(`    Error analyzing ${comp.domain}: ${err.message}`);
  }
}

// Deduplicate and score
const uniqueGaps = new Map();
for (const gap of gaps) {
  const existing = uniqueGaps.get(gap.keyword);
  if (!existing || gap.searchVolume > existing.searchVolume) {
    uniqueGaps.set(gap.keyword, gap);
  }
}

// Score and sort
const scored = Array.from(uniqueGaps.values()).map(gap => {
  let score = 0;
  score += Math.min(40, gap.searchVolume / 25); // Volume score (max 40)
  score += gap.cpc * 5; // CPC indicates commercial intent (max ~30)
  if (gap.competitorPosition && gap.competitorPosition <= 10) score += 20; // Competitor is top 10
  if (gap.competitorPosition && gap.competitorPosition <= 3) score += 10; // Competitor is top 3
  score -= gap.competition * 10; // Penalize high competition

  const priority = score >= 50 ? 'CRITICAL' : score >= 30 ? 'HIGH' : score >= 15 ? 'MEDIUM' : 'LOW';

  // Determine content type
  let contentType = 'service-page';
  if (gap.keyword.includes('how to') || gap.keyword.includes('how do')) contentType = 'how-to-guide';
  else if (gap.keyword.includes('cost') || gap.keyword.includes('price') || gap.keyword.includes('much')) contentType = 'cost-guide';
  else if (gap.keyword.includes('vs') || gap.keyword.includes('versus') || gap.keyword.includes('comparison')) contentType = 'comparison';
  else if (gap.keyword.includes('best') || gap.keyword.includes('top')) contentType = 'listicle';
  else if (gap.keyword.includes('near me') || gap.keyword.match(/\b(nc|sc|charlotte)\b/)) contentType = 'location-page';
  else if (gap.keyword.includes('review') || gap.keyword.includes('rated')) contentType = 'review-page';

  // Determine search intent
  let intent = 'informational';
  if (gap.cpc > 5 || gap.keyword.includes('near me') || gap.keyword.includes('company') || gap.keyword.includes('contractor')) intent = 'commercial';
  if (gap.keyword.includes('hire') || gap.keyword.includes('call') || gap.keyword.includes('schedule')) intent = 'transactional';

  return { ...gap, score, priority, contentType, intent };
}).sort((a, b) => b.score - a.score);

// Output report
console.log('\n' + '='.repeat(80));
console.log('COMPETITOR GAP ANALYSIS — bestroofingnow.com');
console.log('Date:', new Date().toISOString().split('T')[0]);
console.log('Competitors analyzed:', topCompetitors.map(c => c.domain).join(', '));
console.log('BRN current keywords:', brnKeywords.size);
console.log('Unique gaps found:', scored.length);
console.log('='.repeat(80));

const top30 = scored.slice(0, 30);
console.log(`\nTOP ${top30.length} CONTENT GAP OPPORTUNITIES\n`);

top30.forEach((gap, i) => {
  console.log(`${i + 1}. [${gap.priority}] "${gap.keyword}"`);
  console.log(`   Volume: ${gap.searchVolume} | CPC: $${gap.cpc.toFixed(2)} | Score: ${gap.score.toFixed(0)}`);
  console.log(`   Competitor: ${gap.competitorDomain} (#${gap.competitorPosition || '?'})`);
  console.log(`   Intent: ${gap.intent} | Content type: ${gap.contentType}`);
  console.log('');
});

// Summary by priority
const critical = scored.filter(g => g.priority === 'CRITICAL').length;
const high = scored.filter(g => g.priority === 'HIGH').length;
const medium = scored.filter(g => g.priority === 'MEDIUM').length;
console.log('PRIORITY SUMMARY:');
console.log(`  CRITICAL: ${critical} | HIGH: ${high} | MEDIUM: ${medium} | LOW: ${scored.length - critical - high - medium}`);
console.log(`  Total addressable search volume: ${scored.reduce((sum, g) => sum + g.searchVolume, 0).toLocaleString()}/mo`);

// Output JSON for programmatic use
const outputPath = 'research/competitor-gaps-' + new Date().toISOString().split('T')[0] + '.json';
const fs = await import('fs');
fs.mkdirSync('research', { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify({
  date: new Date().toISOString(),
  competitors: topCompetitors.map(c => ({ domain: c.domain, avgPosition: c.avg_position, intersections: c.intersections })),
  brnKeywordCount: brnKeywords.size,
  gaps: scored,
}, null, 2));
console.log(`\nFull report saved to: ${outputPath}`);
