const https = require('https');
const fs = require('fs');
const path = require('path');

try {
  require('dotenv').config({ path: '.env.local' });
} catch {}

const login = process.env.DATAFORSEO_LOGIN;
const password = process.env.DATAFORSEO_PASSWORD;

if (!login || !password) {
  console.error('ERROR: Missing DATAFORSEO_LOGIN or DATAFORSEO_PASSWORD');
  process.exit(1);
}

const auth = Buffer.from(`${login}:${password}`).toString('base64');

const TARGET_DOMAIN = 'bestroofingnow.com';

// Top priority keywords for Charlotte roofing
const priorityKeywords = [
  'roofing charlotte nc',
  'roofers charlotte nc',
  'roofing company charlotte nc',
  'roofing contractor charlotte nc',
  'roof repair charlotte nc',
  'roof replacement charlotte nc',
  'best roofing company charlotte nc',
  'commercial roofing charlotte nc',
  'roofing huntersville nc',
  'roofing mooresville nc',
  'roofing concord nc',
  'roof repair huntersville nc',
  'metal roofing charlotte nc',
  'emergency roof repair charlotte nc',
  'storm damage roof repair charlotte nc',
  'industrial roofing charlotte nc',
  'gutter installation charlotte nc',
  'roofing lake norman',
  'flat roof repair charlotte nc',
  'roof inspection charlotte nc',
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

async function analyzeSERPForKeyword(keyword) {
  const response = await makeRequest('/v3/serp/google/organic/live', [{
    keyword,
    location_name: 'Charlotte,North Carolina,United States',
    language_name: 'English',
    depth: 50,
  }]);

  if (response.tasks && response.tasks[0] && response.tasks[0].result) {
    const result = response.tasks[0].result[0];
    const items = result?.items || [];

    // Find our position
    let ourPosition = null;
    let ourEntry = null;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.type === 'organic' && item.domain) {
        if (item.domain.includes('bestroofingnow') ||
            item.url?.includes('bestroofingnow')) {
          ourPosition = i + 1;
          ourEntry = item;
          break;
        }
      }
    }

    // Get top 10 organic results
    const top10 = items
      .filter(item => item.type === 'organic')
      .slice(0, 10)
      .map((item, idx) => ({
        position: idx + 1,
        domain: item.domain,
        url: item.url,
        title: item.title,
      }));

    return {
      keyword,
      totalResults: result?.se_results_count || 0,
      ourPosition,
      ourEntry: ourEntry ? {
        url: ourEntry.url,
        title: ourEntry.title,
      } : null,
      top10,
    };
  }

  return { keyword, error: 'No results', raw: response };
}

async function getKeywordsForSite() {
  console.log('📊 Getting keywords where bestroofingnow.com ranks...\n');

  const response = await makeRequest('/v3/dataforseo_labs/google/ranked_keywords/live', [{
    target: TARGET_DOMAIN,
    location_code: 2840, // United States
    language_code: 'en',
    limit: 100,
  }]);

  if (response.tasks && response.tasks[0]) {
    const task = response.tasks[0];
    if (task.result && task.result[0]) {
      return task.result[0].items || [];
    }
    if (task.status_message) {
      console.log('API Message:', task.status_message);
    }
  }

  return [];
}

async function getDomainIntersection(domain1, domain2) {
  console.log(`\n🔀 Finding keyword overlap: ${domain1} vs ${domain2}...`);

  const response = await makeRequest('/v3/dataforseo_labs/google/domain_intersection/live', [{
    target1: domain1,
    target2: domain2,
    location_code: 2840,
    language_code: 'en',
    intersections: true,
    limit: 50,
  }]);

  if (response.tasks && response.tasks[0] && response.tasks[0].result) {
    return response.tasks[0].result[0]?.items || [];
  }

  return [];
}

async function runAnalysis() {
  console.log('╔' + '═'.repeat(98) + '╗');
  console.log('║' + ' '.repeat(25) + 'SEO GAP ANALYSIS REPORT v2' + ' '.repeat(47) + '║');
  console.log('║' + ' '.repeat(25) + 'bestroofingnow.com' + ' '.repeat(55) + '║');
  console.log('║' + ' '.repeat(25) + new Date().toISOString().split('T')[0] + ' '.repeat(59) + '║');
  console.log('╚' + '═'.repeat(98) + '╝\n');

  const results = {
    timestamp: new Date().toISOString(),
    keywords: [],
    ranking: [],
    notRanking: [],
    gaps: [],
    opportunities: [],
  };

  // 1. Check SERP rankings for each priority keyword
  console.log('🔍 SERP ANALYSIS - Checking rankings for priority keywords...\n');
  console.log('─'.repeat(100));

  for (const keyword of priorityKeywords) {
    process.stdout.write(`  Checking: ${keyword}... `);

    try {
      const result = await analyzeSERPForKeyword(keyword);
      results.keywords.push(result);

      if (result.ourPosition) {
        console.log(`✅ RANKING #${result.ourPosition}`);
        results.ranking.push(result);
      } else {
        console.log(`❌ NOT IN TOP 50`);
        results.notRanking.push(result);
      }

      // Rate limiting - wait between requests
      await new Promise(r => setTimeout(r, 500));
    } catch (err) {
      console.log(`⚠️ Error: ${err.message}`);
    }
  }

  // 2. Get keywords we currently rank for
  console.log('\n' + '═'.repeat(100));
  console.log('📈 KEYWORDS WHERE bestroofingnow.com RANKS');
  console.log('═'.repeat(100));

  try {
    const rankedKeywords = await getKeywordsForSite();
    if (rankedKeywords.length > 0) {
      rankedKeywords
        .sort((a, b) => (a.ranked_serp_element?.serp_item?.rank_absolute || 999) -
                        (b.ranked_serp_element?.serp_item?.rank_absolute || 999))
        .slice(0, 50)
        .forEach(kw => {
          const keyword = kw.keyword_data?.keyword || 'N/A';
          const volume = kw.keyword_data?.keyword_info?.search_volume || 0;
          const rank = kw.ranked_serp_element?.serp_item?.rank_absolute || 'N/A';
          const url = kw.ranked_serp_element?.serp_item?.url || '';
          console.log(`  #${rank.toString().padStart(2)} | ${keyword.padEnd(50)} | Vol: ${volume}/mo`);
        });
      results.currentRankings = rankedKeywords.slice(0, 100);
    } else {
      console.log('  No ranking data found - domain may be too new for historical data');
    }
  } catch (err) {
    console.log('  Error fetching ranked keywords:', err.message);
  }

  // 3. Print detailed SERP analysis
  console.log('\n' + '═'.repeat(100));
  console.log('📊 DETAILED SERP RESULTS');
  console.log('═'.repeat(100));

  console.log('\n### KEYWORDS WHERE WE RANK ###\n');
  if (results.ranking.length > 0) {
    results.ranking.sort((a, b) => a.ourPosition - b.ourPosition);
    results.ranking.forEach(r => {
      console.log(`  🏆 #${r.ourPosition.toString().padStart(2)} | ${r.keyword}`);
      if (r.ourEntry) {
        console.log(`       URL: ${r.ourEntry.url}`);
      }
    });
  } else {
    console.log('  No rankings found in top 50');
  }

  console.log('\n### KEYWORD GAPS - NOT RANKING ###\n');
  if (results.notRanking.length > 0) {
    results.notRanking.forEach(r => {
      console.log(`  ❌ ${r.keyword}`);
      if (r.top10 && r.top10.length > 0) {
        console.log('     Top 3 competitors:');
        r.top10.slice(0, 3).forEach(t => {
          console.log(`       #${t.position} - ${t.domain}`);
        });
      }
      results.gaps.push({
        keyword: r.keyword,
        competitors: r.top10?.slice(0, 5) || [],
      });
    });
  } else {
    console.log('  We rank for all priority keywords!');
  }

  // 4. Summary and recommendations
  console.log('\n' + '═'.repeat(100));
  console.log('📋 SUMMARY');
  console.log('═'.repeat(100));

  console.log(`
  Total keywords analyzed: ${priorityKeywords.length}
  ✅ Ranking in top 50:    ${results.ranking.length}
  ❌ Not ranking:          ${results.notRanking.length}

  Top Ranking Positions:`);

  results.ranking.slice(0, 10).forEach(r => {
    console.log(`    #${r.ourPosition} - ${r.keyword}`);
  });

  if (results.notRanking.length > 0) {
    console.log('\n' + '═'.repeat(100));
    console.log('🎯 RECOMMENDED ACTIONS');
    console.log('═'.repeat(100));

    console.log('\n  HIGH PRIORITY - Create/optimize pages for these keywords:\n');
    results.notRanking.forEach((r, i) => {
      console.log(`    ${i + 1}. ${r.keyword}`);
      const existingPage = guessExistingPage(r.keyword);
      if (existingPage) {
        console.log(`       → Optimize existing page: ${existingPage}`);
      } else {
        console.log(`       → Create new page: /${r.keyword.replace(/\s+/g, '-')}`);
      }
    });
  }

  // Save full results
  const outputPath = path.join(__dirname, 'seo-gap-analysis-results.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`\n\n📁 Full results saved to: ${outputPath}`);
}

function guessExistingPage(keyword) {
  const pageMap = {
    'roofing charlotte nc': '/roofing-charlotte-nc',
    'roofers charlotte nc': '/roofers-charlotte-nc',
    'roofing company charlotte nc': '/roofing-company-charlotte-nc',
    'roofing contractor charlotte nc': '/roofing-contractor-charlotte-nc',
    'roof repair charlotte nc': '/roof-repair-charlotte-nc',
    'roof replacement charlotte nc': '/roof-replacement-charlotte-nc',
    'commercial roofing charlotte nc': '/commercial-roofing-services',
    'roofing huntersville nc': '/roofing-huntersville-nc',
    'roofing mooresville nc': '/roofing-mooresville-nc',
    'roofing concord nc': '/roofing-concord-nc',
    'metal roofing charlotte nc': '/metal-roofing-charlotte-nc',
    'emergency roof repair charlotte nc': '/emergency',
    'storm damage roof repair charlotte nc': '/storm-damage-roof-repair-charlotte',
    'industrial roofing charlotte nc': '/industrial-roofing-charlotte-nc',
    'gutter installation charlotte nc': '/gutter-installation-charlotte-nc',
    'flat roof repair charlotte nc': '/flat-roof-repair-charlotte-nc',
    'roof inspection charlotte nc': '/roof-inspection-charlotte-nc',
  };

  return pageMap[keyword.toLowerCase()] || null;
}

runAnalysis().catch(console.error);
