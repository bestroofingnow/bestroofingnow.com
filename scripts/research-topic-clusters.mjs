/**
 * Topic Cluster Analysis for BestRoofingNow.com
 *
 * Clusters ranked keywords into topic groups, calculates authority scores,
 * identifies coverage gaps using DataForSEO, and generates a prioritized report.
 *
 * Usage: node scripts/research-topic-clusters.mjs
 */
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config({ path: '.env.local' });

const BASE_URL = 'https://api.dataforseo.com';
const LOGIN = process.env.DATAFORSEO_LOGIN;
const PASSWORD = process.env.DATAFORSEO_PASSWORD;
const AUTH = 'Basic ' + Buffer.from(`${LOGIN}:${PASSWORD}`).toString('base64');
const TARGET = 'bestroofingnow.com';

// ─── Topic Definitions ─────────────────────────────────────────────────────────
// Each topic has a name, patterns to match keywords, and seed keywords for gap analysis.
const TOPIC_DEFINITIONS = [
  {
    name: 'Charlotte Local SEO',
    patterns: [/charlotte/, /mecklenburg/],
    seedKeywords: ['roofing charlotte nc', 'roofer charlotte nc', 'roofing company charlotte'],
    category: 'local',
  },
  {
    name: 'Lake Norman / North Towns',
    patterns: [/mooresville/, /huntersville/, /davidson/, /cornelius/, /lake norman/, /lkn/, /statesville/],
    seedKeywords: ['roofer mooresville nc', 'roofing huntersville nc'],
    category: 'local',
  },
  {
    name: 'South Charlotte / Union County',
    patterns: [/matthews/, /indian trail/, /waxhaw/, /marvin/, /monroe/, /ballantyne/, /pineville/, /mint hill/],
    seedKeywords: ['roofer matthews nc', 'roofing waxhaw nc', 'roofing monroe nc'],
    category: 'local',
  },
  {
    name: 'Gaston / Lincoln / Catawba',
    patterns: [/gastonia/, /gaston/, /belmont/, /hickory/, /newton/, /conover/, /catawba/, /shelby/, /lowell/, /lincoln/],
    seedKeywords: ['roofer gastonia nc', 'roofing hickory nc'],
    category: 'local',
  },
  {
    name: 'South Carolina Markets',
    patterns: [/rock hill/, /lancaster/, /york/, /fort mill/, / sc\b/],
    seedKeywords: ['roofer rock hill sc', 'roofing lancaster sc'],
    category: 'local',
  },
  {
    name: 'Other NC Locations',
    patterns: [/concord/, /albemarle/, /china grove/, /terrell/, /midland/, /stanly/],
    seedKeywords: ['roofer concord nc'],
    category: 'local',
  },
  {
    name: 'Roof Replacement & When to Replace',
    patterns: [/replace|replacement|when (should|to) (replace|get new)|need(s)? (new|replaced)|how often/],
    seedKeywords: ['roof replacement cost', 'when to replace roof', 'roof replacement timeline', 'signs you need a new roof'],
    category: 'informational',
  },
  {
    name: 'Shingle Cost & Pricing',
    patterns: [/shingle.*(cost|price|per square)|cost.*(shingle|per square)|price.*(shingle|per square)|how much.*(shingle|roof cost)/],
    seedKeywords: ['shingle roof cost', 'cost per square foot shingles', 'roof replacement cost calculator', 'average roof cost 2025'],
    category: 'informational',
  },
  {
    name: 'Roof Cricket / Anatomy / Parts',
    patterns: [/roof cricket|anatomy|ridge|valley|parts of.*(roof)|roof.*(part|component)|drain cricket|lingo|slang|jargon/],
    seedKeywords: ['roof parts names', 'roof anatomy diagram', 'what is a roof cricket', 'roof ridge cap', 'roof valley'],
    category: 'informational',
  },
  {
    name: 'Metal Roofing',
    patterns: [/metal roof/],
    seedKeywords: ['metal roof cost', 'metal roof vs shingles', 'standing seam metal roof', 'metal roof colors', 'metal roof pros and cons'],
    category: 'informational',
  },
  {
    name: 'Flat / Commercial Roofing',
    patterns: [/flat roof|tpo|epdm|modified bitumen|commercial roof|rubber roof|commercial gutter/],
    seedKeywords: ['flat roof replacement cost', 'TPO vs EPDM', 'commercial roof types', 'flat roof repair', 'commercial roofing cost per square foot'],
    category: 'informational',
  },
  {
    name: 'Gutters & Gutter Guards',
    patterns: [/gutter/],
    seedKeywords: ['gutter guard cost', 'gutter installation cost', 'gutter cleaning near me', 'best gutter guards', 'seamless gutters cost'],
    category: 'informational',
  },
  {
    name: 'Storm Damage & Insurance',
    patterns: [/storm|hail|insurance|emergency|wind damage/],
    seedKeywords: ['roof storm damage insurance claim', 'hail damage roof', 'emergency roof repair', 'roof insurance claim tips', 'storm damage repair near me'],
    category: 'informational',
  },
  {
    name: 'Brand Comparisons (GAF vs CertainTeed)',
    patterns: [/gaf|certainteed|owens corning|flintlastic|presidential/],
    seedKeywords: ['GAF vs CertainTeed vs Owens Corning', 'best shingle brands', 'CertainTeed Landmark review', 'GAF Timberline review'],
    category: 'informational',
  },
  {
    name: 'Roof Inspection & Maintenance',
    patterns: [/inspection|maintenance|maintain|rejuvenation|repair(?!.*charlotte|.*nc|.*sc|.*rock|.*matthews|.*monroe|.*gastonia|.*hickory|.*huntersville|.*mooresville|.*waxhaw|.*indian|.*concord)/],
    seedKeywords: ['roof inspection cost', 'roof maintenance checklist', 'roof inspection near me', 'annual roof inspection', 'roof rejuvenation'],
    category: 'informational',
  },
  {
    name: 'Energy Efficiency & Eco-Friendly',
    patterns: [/energy.?efficient|eco.?friendly|sustainable|algae.?resistant|green roof|cool roof/],
    seedKeywords: ['energy efficient roofing', 'eco-friendly roof materials', 'cool roof technology', 'sustainable roofing 2025', 'green roofing options'],
    category: 'informational',
  },
  {
    name: 'Financing & Payment Plans',
    patterns: [/financ|payment plan|credit check|\$99|no credit/],
    seedKeywords: ['roof financing options', 'roof replacement payment plans', 'roof financing no credit check', 'roof loan rates'],
    category: 'informational',
  },
  {
    name: 'Siding',
    patterns: [/siding/],
    seedKeywords: ['siding repair cost', 'siding replacement near me', 'siding vs roof replacement order', 'vinyl siding cost'],
    category: 'informational',
  },
  {
    name: 'Tile Roofing',
    patterns: [/tile roof/],
    seedKeywords: ['tile roof repair cost', 'tile roof vs shingles', 'concrete tile roof', 'clay tile roof cost', 'tile roof installation'],
    category: 'informational',
  },
  {
    name: 'Skylights',
    patterns: [/skylight/],
    seedKeywords: ['skylight installation cost', 'skylight during roof replacement', 'best skylights 2025', 'skylight pros and cons'],
    category: 'informational',
  },
  {
    name: 'Veteran / Trust / Reviews',
    patterns: [/veteran|trust|reliable|review|top.?rated|best (choice|case|roofer)|quality roofer/],
    seedKeywords: ['veteran owned roofing company', 'most trusted roofer near me', 'how to choose a roofer', 'roofing company reviews'],
    category: 'brand',
  },
];

// ─── Helpers ────────────────────────────────────────────────────────────────────

async function apiCall(endpoint, data) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Authorization': AUTH, 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`API ${res.status}: ${res.statusText}`);
  return res.json();
}

function parseCSV(text) {
  const lines = text.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.replace(/"/g, '').trim());
  return lines.slice(1).map(line => {
    // Handle quoted fields with commas
    const fields = [];
    let current = '';
    let inQuotes = false;
    for (const char of line) {
      if (char === '"') { inQuotes = !inQuotes; continue; }
      if (char === ',' && !inQuotes) { fields.push(current.trim()); current = ''; continue; }
      current += char;
    }
    fields.push(current.trim());
    const obj = {};
    headers.forEach((h, i) => { obj[h] = fields[i] || ''; });
    return obj;
  });
}

function classifyKeyword(keyword) {
  const kw = keyword.toLowerCase();
  for (const topic of TOPIC_DEFINITIONS) {
    for (const pattern of topic.patterns) {
      if (pattern.test(kw)) return topic.name;
    }
  }
  return 'Uncategorized';
}

function calcAuthorityScore(cluster) {
  const { keywords } = cluster;
  const count = keywords.length;
  const avgPos = keywords.reduce((s, k) => s + k.position, 0) / count;
  const totalVol = keywords.reduce((s, k) => s + k.volume, 0);
  const top10Count = keywords.filter(k => k.position <= 10).length;
  const top20Count = keywords.filter(k => k.position <= 20).length;
  const top50Count = keywords.filter(k => k.position <= 50).length;

  // Scoring: coverage (count), ranking quality, demand capture
  let score = 0;
  score += Math.min(count * 4, 30);           // Up to 30 pts for breadth
  score += Math.min(top10Count * 8, 25);      // Up to 25 pts for page 1
  score += Math.min(top20Count * 3, 15);      // Up to 15 pts for page 2
  score += Math.min(top50Count * 1.5, 10);    // Up to 10 pts for top 50
  score += avgPos < 15 ? 10 : avgPos < 30 ? 6 : avgPos < 50 ? 3 : 0; // Avg position bonus
  score += totalVol > 5000 ? 10 : totalVol > 2000 ? 6 : totalVol > 500 ? 3 : 1; // Demand

  return Math.min(Math.round(score), 100);
}

function authorityLevel(score) {
  if (score >= 70) return 'Strong';
  if (score >= 45) return 'Moderate';
  if (score >= 20) return 'Weak';
  return 'Minimal';
}

// ─── Main ───────────────────────────────────────────────────────────────────────

async function main() {
  console.log('=== Topic Cluster Analysis for BestRoofingNow.com ===\n');

  // Step 1: Load ranked keywords
  console.log('Step 1: Loading ranked keywords...');
  const csvPath = path.join(process.cwd(), 'scripts', 'ranked-keywords.csv');
  let keywords;

  if (fs.existsSync(csvPath)) {
    const csvText = fs.readFileSync(csvPath, 'utf8');
    keywords = parseCSV(csvText).map(row => ({
      keyword: row.Keyword || row.keyword,
      position: parseInt(row.Position || row.position, 10),
      volume: parseInt(row['Search Volume'] || row.search_volume || '0', 10),
      url: row.URL || row.url || '',
    })).filter(k => k.keyword && !isNaN(k.position));
    console.log(`  Loaded ${keywords.length} keywords from CSV\n`);
  } else {
    // Fallback: fetch from DataForSEO
    console.log('  CSV not found, fetching from DataForSEO...');
    const response = await apiCall('/v3/dataforseo_labs/google/ranked_keywords/live', [{
      target: TARGET,
      location_code: 2840,
      language_code: 'en',
      limit: 1000,
      order_by: ['keyword_data.keyword_info.search_volume,desc'],
    }]);
    const items = response.tasks?.[0]?.result?.[0]?.items || [];
    keywords = items.map(item => ({
      keyword: item.keyword_data?.keyword,
      position: item.ranked_serp_element?.serp_item?.rank_absolute || 100,
      volume: item.keyword_data?.keyword_info?.search_volume || 0,
      url: item.ranked_serp_element?.serp_item?.relative_url || '',
    })).filter(k => k.keyword);
    console.log(`  Fetched ${keywords.length} keywords from DataForSEO\n`);
  }

  // Step 2: Cluster keywords
  console.log('Step 2: Clustering keywords into topics...');
  const clusters = {};
  const uncategorized = [];

  for (const kw of keywords) {
    const topicName = classifyKeyword(kw.keyword);
    if (topicName === 'Uncategorized') {
      uncategorized.push(kw);
      continue;
    }
    if (!clusters[topicName]) {
      clusters[topicName] = { keywords: [], definition: TOPIC_DEFINITIONS.find(t => t.name === topicName) };
    }
    clusters[topicName].keywords.push(kw);
  }

  // Calculate authority scores
  const clusterResults = Object.entries(clusters).map(([name, data]) => {
    const score = calcAuthorityScore(data);
    const level = authorityLevel(score);
    const avgPos = (data.keywords.reduce((s, k) => s + k.position, 0) / data.keywords.length).toFixed(1);
    const totalVol = data.keywords.reduce((s, k) => s + k.volume, 0);
    const totalClicks = data.keywords.reduce((s, k) => s + Math.max(0, k.volume * (k.position <= 3 ? 0.3 : k.position <= 10 ? 0.1 : 0.02)), 0);
    return {
      name,
      score,
      level,
      category: data.definition?.category || 'other',
      keywordCount: data.keywords.length,
      avgPosition: parseFloat(avgPos),
      totalVolume: totalVol,
      estimatedClicks: Math.round(totalClicks),
      top5: data.keywords.sort((a, b) => a.position - b.position).slice(0, 5),
      allKeywords: data.keywords.sort((a, b) => b.volume - a.volume),
      seedKeywords: data.definition?.seedKeywords || [],
    };
  }).sort((a, b) => b.totalVolume - a.totalVolume);

  const strong = clusterResults.filter(c => c.level === 'Strong');
  const moderate = clusterResults.filter(c => c.level === 'Moderate');
  const weak = clusterResults.filter(c => c.level === 'Weak');
  const minimal = clusterResults.filter(c => c.level === 'Minimal');

  console.log(`  ${clusterResults.length} topics identified`);
  console.log(`  Strong: ${strong.length} | Moderate: ${moderate.length} | Weak: ${weak.length} | Minimal: ${minimal.length}`);
  console.log(`  Uncategorized: ${uncategorized.length} keywords\n`);

  // Step 3: Fetch coverage gaps for weak/moderate clusters
  console.log('Step 3: Fetching coverage gaps for weak & moderate topics...');
  const gapTargets = [...weak, ...minimal].filter(c => c.seedKeywords.length > 0);

  for (const cluster of gapTargets) {
    try {
      const seedKWs = cluster.seedKeywords.slice(0, 5);
      console.log(`  Fetching gaps for "${cluster.name}" (seeds: ${seedKWs.length})...`);

      const response = await apiCall('/v3/dataforseo_labs/google/keyword_suggestions/live', [{
        keyword: seedKWs[0],
        location_code: 2840,
        language_code: 'en',
        limit: 15,
        order_by: ['keyword_info.search_volume,desc'],
        filters: [['keyword_info.search_volume', '>', 30]],
      }]);

      const items = response.tasks?.[0]?.result?.[0]?.items || [];
      const existingKWs = new Set(cluster.allKeywords.map(k => k.keyword.toLowerCase()));

      cluster.gaps = items
        .filter(item => !existingKWs.has(item.keyword?.toLowerCase()))
        .map(item => ({
          keyword: item.keyword,
          volume: item.keyword_info?.search_volume || 0,
          competition: item.keyword_info?.competition_level || 'unknown',
          cpc: item.keyword_info?.cpc || 0,
        }))
        .slice(0, 10);

      // Small delay to respect rate limits
      await new Promise(r => setTimeout(r, 300));
    } catch (err) {
      console.log(`    Error fetching gaps for "${cluster.name}": ${err.message}`);
      cluster.gaps = [];
    }
  }

  // Step 4: Generate report
  console.log('\nStep 4: Generating report...');
  const today = new Date().toISOString().split('T')[0];
  const reportPath = path.join(process.cwd(), 'research', `topic-clusters-${today}.md`);

  // Ensure research/ exists
  fs.mkdirSync(path.join(process.cwd(), 'research'), { recursive: true });

  let report = `# Topic Cluster Authority Analysis — BestRoofingNow.com
**Generated:** ${today}
**Keywords Analyzed:** ${keywords.length}
**Topics Identified:** ${clusterResults.length}
**Uncategorized Keywords:** ${uncategorized.length}

---

## Authority Distribution

| Level | Count | Topics |
|-------|-------|--------|
| Strong (70-100) | ${strong.length} | ${strong.map(c => c.name).join(', ') || 'None'} |
| Moderate (45-69) | ${moderate.length} | ${moderate.map(c => c.name).join(', ') || 'None'} |
| Weak (20-44) | ${weak.length} | ${weak.map(c => c.name).join(', ') || 'None'} |
| Minimal (0-19) | ${minimal.length} | ${minimal.map(c => c.name).join(', ') || 'None'} |

---

## All Topics — Ranked by Total Search Volume

| # | Topic | Score | Level | Keywords | Avg Pos | Volume/mo | Est. Clicks |
|---|-------|-------|-------|----------|---------|-----------|-------------|
${clusterResults.map((c, i) => `| ${i + 1} | ${c.name} | ${c.score} | ${c.level} | ${c.keywordCount} | ${c.avgPosition} | ${c.totalVolume.toLocaleString()} | ${c.estimatedClicks.toLocaleString()} |`).join('\n')}

---

## WEAK & MINIMAL AUTHORITY — BIGGEST OPPORTUNITIES

`;

  for (const cluster of [...weak, ...minimal].sort((a, b) => b.totalVolume - a.totalVolume)) {
    report += `### ${cluster.name} (Score: ${cluster.score}/100 — ${cluster.level})

- **Keywords Ranking:** ${cluster.keywordCount}
- **Average Position:** ${cluster.avgPosition}
- **Total Volume:** ${cluster.totalVolume.toLocaleString()}/mo
- **Category:** ${cluster.category}

**Current Rankings:**
${cluster.top5.map(k => `- "${k.keyword}" — pos ${k.position} (${k.volume.toLocaleString()} vol) → ${k.url}`).join('\n')}

`;
    if (cluster.gaps && cluster.gaps.length > 0) {
      report += `**Coverage Gaps (keywords you DON'T rank for):**
| Keyword | Volume | Competition | CPC |
|---------|--------|-------------|-----|
${cluster.gaps.map(g => `| ${g.keyword} | ${g.volume.toLocaleString()} | ${g.competition} | $${g.cpc?.toFixed(2) || '0.00'} |`).join('\n')}

`;
    }

    report += `**Action:** Build ${cluster.keywordCount < 3 ? '8-12' : '5-8'} article cluster targeting gaps. Create pillar page + supporting content.

---

`;
  }

  report += `## MODERATE AUTHORITY — STRENGTHEN THESE

`;

  for (const cluster of moderate.sort((a, b) => b.totalVolume - a.totalVolume)) {
    report += `### ${cluster.name} (Score: ${cluster.score}/100)

- **Keywords:** ${cluster.keywordCount} | **Avg Pos:** ${cluster.avgPosition} | **Volume:** ${cluster.totalVolume.toLocaleString()}/mo

**Top Performers:**
${cluster.top5.map(k => `- "${k.keyword}" — pos ${k.position} (${k.volume.toLocaleString()} vol)`).join('\n')}

**Action:** Add 3-5 supporting articles to strengthen from moderate → strong.

---

`;
  }

  report += `## STRONG AUTHORITY — MAINTAIN & EXPAND

`;

  for (const cluster of strong.sort((a, b) => b.totalVolume - a.totalVolume)) {
    report += `### ${cluster.name} (Score: ${cluster.score}/100)

- **Keywords:** ${cluster.keywordCount} | **Avg Pos:** ${cluster.avgPosition} | **Volume:** ${cluster.totalVolume.toLocaleString()}/mo

**Top Performers:**
${cluster.top5.map(k => `- "${k.keyword}" — pos ${k.position} (${k.volume.toLocaleString()} vol)`).join('\n')}

**Action:** Maintain freshness, expand with advanced subtopics.

---

`;
  }

  if (uncategorized.length > 0) {
    report += `## Uncategorized Keywords (${uncategorized.length})

These keywords didn't match any topic pattern. Review for new cluster opportunities.

| Keyword | Position | Volume |
|---------|----------|--------|
${uncategorized.sort((a, b) => b.volume - a.volume).slice(0, 30).map(k => `| ${k.keyword} | ${k.position} | ${k.volume.toLocaleString()} |`).join('\n')}

`;
  }

  report += `---

## Next Steps

1. **Priority 1:** Pick top 2-3 weak clusters with highest volume → build comprehensive content clusters
2. **Priority 2:** Strengthen moderate clusters with 3-5 targeted articles each
3. **Priority 3:** Maintain strong clusters — keep content fresh, expand with advanced topics
4. Use \`/seo:research-serp [keyword]\` to analyze SERP for each gap keyword
5. Use \`/seo:write [keyword]\` to create optimized content for each piece
`;

  fs.writeFileSync(reportPath, report);
  console.log(`\nReport saved: ${reportPath}`);
  console.log('\n=== Summary ===');
  console.log(`Strong: ${strong.length} topics (${strong.reduce((s, c) => s + c.keywordCount, 0)} keywords)`);
  console.log(`Moderate: ${moderate.length} topics (${moderate.reduce((s, c) => s + c.keywordCount, 0)} keywords)`);
  console.log(`Weak: ${weak.length} topics (${weak.reduce((s, c) => s + c.keywordCount, 0)} keywords)`);
  console.log(`Minimal: ${minimal.length} topics (${minimal.reduce((s, c) => s + c.keywordCount, 0)} keywords)`);
  console.log(`\nBiggest Opportunities (weak + minimal with highest volume):`);
  [...weak, ...minimal].sort((a, b) => b.totalVolume - a.totalVolume).slice(0, 5).forEach((c, i) => {
    console.log(`  ${i + 1}. ${c.name} — ${c.totalVolume.toLocaleString()} vol/mo, ${c.keywordCount} keywords, score ${c.score}`);
  });
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
