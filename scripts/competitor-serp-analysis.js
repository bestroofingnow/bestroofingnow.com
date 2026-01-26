const https = require('https');
const fs = require('fs');
const path = require('path');

const auth = Buffer.from('james@kynexpro.com:c239bdea18ad73af').toString('base64');

// Top keywords to analyze competitors for
const keywords = [
  'roofing charlotte nc',
  'roofers charlotte nc',
  'roofing company charlotte nc',
  'roof repair charlotte nc',
  'commercial roofing charlotte nc',
  'roofing huntersville nc',
  'roofing mooresville nc',
  'metal roofing charlotte nc',
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

  if (response.tasks && response.tasks[0] && response.tasks[0].result) {
    const result = response.tasks[0].result[0];
    const items = result?.items || [];

    return items
      .filter(item => item.type === 'organic')
      .slice(0, 10)
      .map((item, idx) => ({
        position: idx + 1,
        domain: item.domain,
        url: item.url,
        title: item.title,
      }));
  }
  return [];
}

async function run() {
  console.log('╔' + '═'.repeat(98) + '╗');
  console.log('║' + ' '.repeat(25) + 'COMPETITOR SERP ANALYSIS' + ' '.repeat(49) + '║');
  console.log('║' + ' '.repeat(25) + 'Who ranks for your target keywords?' + ' '.repeat(38) + '║');
  console.log('╚' + '═'.repeat(98) + '╝\n');

  const allCompetitors = {};
  const results = {};

  for (const keyword of keywords) {
    console.log(`\n${'═'.repeat(100)}`);
    console.log(`🔍 KEYWORD: "${keyword}"`);
    console.log('═'.repeat(100));

    const serp = await analyzeSERP(keyword);
    results[keyword] = serp;

    if (serp.length > 0) {
      serp.forEach(item => {
        console.log(`  #${item.position.toString().padStart(2)} | ${item.domain.padEnd(40)} | ${item.title?.slice(0, 50) || ''}`);

        // Track competitor frequency
        if (!allCompetitors[item.domain]) {
          allCompetitors[item.domain] = { count: 0, keywords: [], positions: [] };
        }
        allCompetitors[item.domain].count++;
        allCompetitors[item.domain].keywords.push(keyword);
        allCompetitors[item.domain].positions.push(item.position);
      });
    }

    await new Promise(r => setTimeout(r, 500));
  }

  // Sort competitors by frequency
  const sortedCompetitors = Object.entries(allCompetitors)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 20);

  console.log('\n\n' + '═'.repeat(100));
  console.log('🏆 TOP COMPETITORS (by keyword coverage)');
  console.log('═'.repeat(100));

  sortedCompetitors.forEach(([domain, data], idx) => {
    const avgPosition = (data.positions.reduce((a, b) => a + b, 0) / data.positions.length).toFixed(1);
    console.log(`\n${idx + 1}. ${domain}`);
    console.log(`   Keywords: ${data.count}/${keywords.length} | Avg Position: #${avgPosition}`);
    console.log(`   Ranking for: ${data.keywords.join(', ')}`);
  });

  // Identify main competitors to study
  const mainCompetitors = sortedCompetitors
    .filter(([domain, data]) => data.count >= 3)
    .map(([domain]) => domain);

  console.log('\n\n' + '═'.repeat(100));
  console.log('📊 KEY INSIGHTS');
  console.log('═'.repeat(100));

  console.log('\n🎯 Main Competitors (rank for 3+ keywords):');
  mainCompetitors.forEach((domain, i) => {
    console.log(`   ${i + 1}. ${domain}`);
  });

  console.log('\n📝 Recommendations:');
  console.log('   1. Study these competitor pages for content structure and on-page SEO');
  console.log('   2. Analyze their backlink profiles');
  console.log('   3. Identify content gaps they may have that you can fill');
  console.log('   4. Build local citations and reviews to improve local authority');

  // Save results
  const output = {
    timestamp: new Date().toISOString(),
    keywords: results,
    competitors: Object.fromEntries(sortedCompetitors),
    mainCompetitors,
  };

  fs.writeFileSync(
    path.join(__dirname, 'competitor-serp-analysis.json'),
    JSON.stringify(output, null, 2)
  );

  console.log('\n\n📁 Results saved to: scripts/competitor-serp-analysis.json');
}

run().catch(console.error);
