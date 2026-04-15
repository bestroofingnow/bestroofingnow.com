const https = require('https');
const fs = require('fs');
const path = require('path');

try {
  require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });
} catch {}

const login = process.env.DATAFORSEO_LOGIN;
const password = process.env.DATAFORSEO_PASSWORD;

if (!login || !password) {
  console.error('ERROR: Missing DATAFORSEO_LOGIN or DATAFORSEO_PASSWORD');
  process.exit(1);
}

const auth = Buffer.from(`${login}:${password}`).toString('base64');

// Core local keywords to analyze for improving local pages
const keywords = [
  'roofing charlotte nc',
  'roofers charlotte nc',
  'roofing company charlotte nc',
  'roof repair charlotte nc',
  'roofing huntersville nc',
  'roofing mooresville nc',
  'roofing cornelius nc',
  'roofers lake norman nc',
  'roof replacement charlotte nc',
  'best roofer charlotte nc',
  'emergency roof repair charlotte nc',
  'commercial roofing charlotte nc',
];

function makeRequest(endpoint, postData) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.dataforseo.com',
      path: endpoint,
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + auth,
        'Content-Type': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(JSON.stringify(postData));
    req.end();
  });
}

async function analyzeSERP(keyword) {
  const response = await makeRequest('/v3/serp/google/organic/live', [{
    keyword,
    location_name: 'Charlotte,North Carolina,United States',
    language_name: 'English',
    depth: 20,
  }]);

  if (!response.tasks?.[0]?.result?.[0]) return null;

  const result = response.tasks[0].result[0];
  const items = result.items || [];

  const organicResults = items
    .filter(item => item.type === 'organic')
    .slice(0, 10)
    .map((item, idx) => ({
      position: idx + 1,
      domain: item.domain,
      url: item.url,
      title: item.title,
      description: item.description,
      breadcrumb: item.breadcrumb,
    }));

  // Detect SERP features
  const serpFeatures = [];
  const allTypes = items.map(i => i.type);
  if (allTypes.includes('featured_snippet')) serpFeatures.push('Featured Snippet');
  if (allTypes.includes('people_also_ask')) serpFeatures.push('People Also Ask');
  if (allTypes.includes('local_pack')) serpFeatures.push('Local Pack');
  if (allTypes.includes('map')) serpFeatures.push('Map Pack');
  if (allTypes.includes('video')) serpFeatures.push('Video');
  if (allTypes.includes('images')) serpFeatures.push('Images');
  if (allTypes.includes('knowledge_graph')) serpFeatures.push('Knowledge Graph');
  if (allTypes.includes('related_searches')) serpFeatures.push('Related Searches');
  if (allTypes.includes('shopping')) serpFeatures.push('Shopping');
  if (allTypes.includes('top_stories')) serpFeatures.push('Top Stories');

  // Extract PAA questions
  const paaItems = items.filter(i => i.type === 'people_also_ask');
  const paaQuestions = [];
  for (const paa of paaItems) {
    if (paa.items) {
      for (const q of paa.items) {
        if (q.title) paaQuestions.push(q.title);
      }
    }
  }

  // Check if bestroofingnow.com ranks
  const ourRanking = organicResults.find(r => r.domain?.includes('bestroofingnow.com'));

  // Analyze content patterns from titles
  const contentTypes = organicResults.map(r => {
    const title = (r.title || '').toLowerCase();
    if (/\d+\s*(best|top)/.test(title) || /(best|top)\s*\d+/.test(title)) return 'listicle';
    if (/how to|guide|step/.test(title)) return 'how-to';
    if (/cost|price|estimate/.test(title)) return 'cost-guide';
    if (/review|rating/.test(title)) return 'review';
    if (/vs|compare|comparison/.test(title)) return 'comparison';
    return 'service-page';
  });

  const typeCount = {};
  for (const t of contentTypes) {
    typeCount[t] = (typeCount[t] || 0) + 1;
  }

  // Identify dominant domains
  const domainCount = {};
  for (const r of organicResults) {
    const d = r.domain;
    domainCount[d] = (domainCount[d] || 0) + 1;
  }

  return {
    keyword,
    totalResults: result.se_results_count,
    organicResults,
    serpFeatures,
    paaQuestions,
    ourRanking: ourRanking ? { position: ourRanking.position, url: ourRanking.url } : null,
    contentTypeDistribution: typeCount,
    dominantContentType: Object.entries(typeCount).sort((a, b) => b[1] - a[1])[0]?.[0] || 'service-page',
    topDomains: Object.entries(domainCount).sort((a, b) => b[1] - a[1]),
  };
}

function generateReport(allResults) {
  const lines = [];
  const date = new Date().toISOString().split('T')[0];

  lines.push(`# Local SERP Analysis Report`);
  lines.push(`**Generated:** ${date}`);
  lines.push(`**Location:** Charlotte, NC metro area`);
  lines.push(`**Keywords analyzed:** ${allResults.length}`);
  lines.push('');

  // Overview table
  lines.push('## Ranking Overview');
  lines.push('');
  lines.push('| Keyword | Our Position | Top Competitor | SERP Features |');
  lines.push('|---------|-------------|----------------|---------------|');
  for (const r of allResults) {
    const pos = r.ourRanking ? `#${r.ourRanking.position}` : 'Not in top 10';
    const topComp = r.organicResults[0]?.domain || '-';
    const features = r.serpFeatures.slice(0, 3).join(', ') || 'None';
    lines.push(`| ${r.keyword} | ${pos} | ${topComp} | ${features} |`);
  }
  lines.push('');

  // Keywords where we DON'T rank
  const notRanking = allResults.filter(r => !r.ourRanking);
  if (notRanking.length > 0) {
    lines.push('## Priority Keywords (Not in Top 10)');
    lines.push('');
    for (const r of notRanking) {
      lines.push(`### "${r.keyword}"`);
      lines.push(`- **Dominant content type:** ${r.dominantContentType}`);
      lines.push(`- **SERP features:** ${r.serpFeatures.join(', ') || 'None'}`);
      lines.push(`- **Top 3 ranking:**`);
      for (const item of r.organicResults.slice(0, 3)) {
        lines.push(`  - #${item.position} ${item.domain} — ${item.title}`);
      }
      if (r.paaQuestions.length > 0) {
        lines.push(`- **People Also Ask:**`);
        for (const q of r.paaQuestions.slice(0, 5)) {
          lines.push(`  - ${q}`);
        }
      }
      lines.push('');
    }
  }

  // Keywords where we DO rank (improvement opportunities)
  const ranking = allResults.filter(r => r.ourRanking);
  if (ranking.length > 0) {
    lines.push('## Existing Rankings (Improvement Opportunities)');
    lines.push('');
    for (const r of ranking) {
      lines.push(`### "${r.keyword}" — Currently #${r.ourRanking.position}`);
      lines.push(`- **Our URL:** ${r.ourRanking.url}`);
      lines.push(`- **Dominant content type:** ${r.dominantContentType}`);
      lines.push(`- **SERP features:** ${r.serpFeatures.join(', ') || 'None'}`);
      lines.push(`- **Competitors above us:**`);
      for (const item of r.organicResults.filter(o => o.position < r.ourRanking.position)) {
        lines.push(`  - #${item.position} ${item.domain} — ${item.title}`);
      }
      if (r.paaQuestions.length > 0) {
        lines.push(`- **People Also Ask:**`);
        for (const q of r.paaQuestions.slice(0, 5)) {
          lines.push(`  - ${q}`);
        }
      }
      lines.push('');
    }
  }

  // Content patterns analysis
  lines.push('## Content Pattern Analysis');
  lines.push('');
  const allTypes = {};
  for (const r of allResults) {
    for (const [type, count] of Object.entries(r.contentTypeDistribution)) {
      allTypes[type] = (allTypes[type] || 0) + count;
    }
  }
  const sortedTypes = Object.entries(allTypes).sort((a, b) => b[1] - a[1]);
  lines.push('| Content Type | Frequency |');
  lines.push('|-------------|-----------|');
  for (const [type, count] of sortedTypes) {
    lines.push(`| ${type} | ${count} |`);
  }
  lines.push('');

  // Competitor frequency
  lines.push('## Top Competitors Across All Keywords');
  lines.push('');
  const competitorMap = {};
  for (const r of allResults) {
    for (const item of r.organicResults) {
      if (!competitorMap[item.domain]) {
        competitorMap[item.domain] = { count: 0, keywords: [], positions: [] };
      }
      competitorMap[item.domain].count++;
      competitorMap[item.domain].keywords.push(r.keyword);
      competitorMap[item.domain].positions.push(item.position);
    }
  }
  const sortedCompetitors = Object.entries(competitorMap)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 15);

  lines.push('| Domain | Keywords | Avg Position |');
  lines.push('|--------|----------|-------------|');
  for (const [domain, data] of sortedCompetitors) {
    const avg = (data.positions.reduce((a, b) => a + b, 0) / data.positions.length).toFixed(1);
    lines.push(`| ${domain} | ${data.count}/${allResults.length} | #${avg} |`);
  }
  lines.push('');

  // Aggregate PAA questions
  const allPAA = new Set();
  for (const r of allResults) {
    for (const q of r.paaQuestions) {
      allPAA.add(q);
    }
  }
  if (allPAA.size > 0) {
    lines.push('## All People Also Ask Questions');
    lines.push('');
    lines.push('Add FAQ sections answering these questions to improve featured snippet opportunities:');
    lines.push('');
    for (const q of allPAA) {
      lines.push(`- ${q}`);
    }
    lines.push('');
  }

  // Actionable recommendations
  lines.push('## Improvement Recommendations');
  lines.push('');
  lines.push('### Quick Wins (Existing Rankings)');
  for (const r of ranking) {
    if (r.ourRanking.position <= 5) {
      lines.push(`- **"${r.keyword}"** (#${r.ourRanking.position}): Add FAQ schema, optimize meta description, add internal links from blog`);
    } else {
      lines.push(`- **"${r.keyword}"** (#${r.ourRanking.position}): Expand content, add PAA answers, improve page speed, build local citations`);
    }
  }
  lines.push('');

  lines.push('### Content Gaps (Not Ranking)');
  for (const r of notRanking) {
    lines.push(`- **"${r.keyword}"**: Create/optimize dedicated page matching "${r.dominantContentType}" format. Study top result: ${r.organicResults[0]?.url || 'N/A'}`);
  }
  lines.push('');

  lines.push('### Cross-Cutting Improvements');
  lines.push('1. **Add FAQ sections** with PAA questions to all local pages');
  lines.push('2. **Internal linking** — cross-link between city pages and service pages');
  lines.push('3. **Local signals** — ensure NAP consistency, Google Business Profile optimization');
  lines.push('4. **Schema markup** — verify LocalBusiness + Service schema on all local pages');
  lines.push('5. **Content depth** — top competitors average 1500-2500 words; ensure pages match or exceed');
  lines.push('6. **Reviews/testimonials** — add city-specific social proof');
  lines.push('7. **Page speed** — Core Web Vitals optimization for mobile');

  return lines.join('\n');
}

async function run() {
  console.log('╔' + '═'.repeat(70) + '╗');
  console.log('║   LOCAL SERP ANALYSIS — Improve Local Pages                        ║');
  console.log('║   Analyzing top 10 results for ' + keywords.length + ' core local keywords              ║');
  console.log('╚' + '═'.repeat(70) + '╝\n');

  const allResults = [];

  for (const keyword of keywords) {
    process.stdout.write(`  Analyzing: "${keyword}" ... `);
    try {
      const result = await analyzeSERP(keyword);
      if (result) {
        allResults.push(result);
        const pos = result.ourRanking ? `#${result.ourRanking.position}` : 'Not in top 10';
        console.log(`✓ (Our position: ${pos})`);
      } else {
        console.log('✗ No results');
      }
    } catch (err) {
      console.log(`✗ Error: ${err.message}`);
    }
    // Rate limit pause
    await new Promise(r => setTimeout(r, 600));
  }

  if (allResults.length === 0) {
    console.error('\nNo results retrieved. Check DataForSEO credentials.');
    process.exit(1);
  }

  // Generate markdown report
  const report = generateReport(allResults);
  const reportDir = path.join(__dirname, '..', 'research');
  if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir, { recursive: true });

  const reportPath = path.join(reportDir, 'serp-analysis-local-pages.md');
  fs.writeFileSync(reportPath, report);

  // Save raw JSON
  const jsonPath = path.join(reportDir, 'serp-analysis-local-pages.json');
  fs.writeFileSync(jsonPath, JSON.stringify(allResults, null, 2));

  console.log(`\n✓ Report saved: research/serp-analysis-local-pages.md`);
  console.log(`✓ Raw data saved: research/serp-analysis-local-pages.json`);

  // Print summary
  const ranking = allResults.filter(r => r.ourRanking);
  const notRanking = allResults.filter(r => !r.ourRanking);
  console.log(`\n${'═'.repeat(70)}`);
  console.log(`SUMMARY`);
  console.log(`${'═'.repeat(70)}`);
  console.log(`  Keywords analyzed: ${allResults.length}`);
  console.log(`  Ranking in top 10: ${ranking.length}`);
  console.log(`  Not in top 10:     ${notRanking.length}`);
  if (ranking.length > 0) {
    console.log(`\n  Current rankings:`);
    for (const r of ranking) {
      console.log(`    #${r.ourRanking.position} — "${r.keyword}"`);
    }
  }
  if (notRanking.length > 0) {
    console.log(`\n  Missing from top 10:`);
    for (const r of notRanking) {
      console.log(`    ✗ "${r.keyword}"`);
    }
  }
}

run().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
