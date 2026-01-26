const https = require('https');
const fs = require('fs');
const path = require('path');

const auth = Buffer.from('james@kynexpro.com:c239bdea18ad73af').toString('base64');

const TARGET_DOMAIN = 'bestroofingnow.com';

// Priority keywords by category
const keywordGroups = {
  'CHARLOTTE CORE': [
    'roofing charlotte nc',
    'roofers charlotte nc',
    'roofing company charlotte nc',
    'roofing contractor charlotte nc',
    'roof repair charlotte nc',
    'roof replacement charlotte nc',
    'best roofing company charlotte nc',
  ],
  'COMMERCIAL': [
    'commercial roofing charlotte nc',
    'industrial roofing charlotte nc',
    'flat roof repair charlotte nc',
    'commercial roofers charlotte nc',
  ],
  'SURROUNDING CITIES': [
    'roofing huntersville nc',
    'roofing mooresville nc',
    'roofing concord nc',
    'roof repair huntersville nc',
    'roofing cornelius nc',
  ],
  'SPECIALTY': [
    'metal roofing charlotte nc',
    'emergency roof repair charlotte nc',
    'storm damage roof repair charlotte nc',
    'gutter installation charlotte nc',
  ],
};

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

async function getSERPResults(keyword) {
  const response = await makeRequest('/v3/serp/google/organic/live/regular', [{
    keyword,
    location_name: 'Charlotte,North Carolina,United States',
    language_name: 'English',
    depth: 50,
  }]);

  if (response.tasks && response.tasks[0] && response.tasks[0].result) {
    const result = response.tasks[0].result[0];
    const items = result?.items || [];

    return items
      .filter(item => item.type === 'organic')
      .map((item, idx) => ({
        position: item.rank_absolute || idx + 1,
        domain: item.domain,
        url: item.url,
        title: item.title,
      }));
  }
  return [];
}

async function getRankedKeywords() {
  console.log('📊 Fetching current rankings for bestroofingnow.com...\n');

  const response = await makeRequest('/v3/dataforseo_labs/google/ranked_keywords/live', [{
    target: TARGET_DOMAIN,
    location_code: 2840,
    language_code: 'en',
    limit: 200,
  }]);

  if (response.tasks && response.tasks[0] && response.tasks[0].result) {
    return response.tasks[0].result[0]?.items || [];
  }
  return [];
}

async function getKeywordIdeas(seedKeyword) {
  const response = await makeRequest('/v3/dataforseo_labs/google/keyword_ideas/live', [{
    keyword: seedKeyword,
    location_code: 2840,
    language_code: 'en',
    include_serp_info: true,
    limit: 50,
  }]);

  if (response.tasks && response.tasks[0] && response.tasks[0].result) {
    return response.tasks[0].result[0]?.items || [];
  }
  return [];
}

async function runAnalysis() {
  console.log('╔' + '═'.repeat(98) + '╗');
  console.log('║' + ' '.repeat(20) + 'COMPREHENSIVE SEO GAP ANALYSIS' + ' '.repeat(48) + '║');
  console.log('║' + ' '.repeat(20) + 'bestroofingnow.com | ' + new Date().toISOString().split('T')[0] + ' '.repeat(45) + '║');
  console.log('╚' + '═'.repeat(98) + '╝\n');

  const results = {
    timestamp: new Date().toISOString(),
    currentRankings: [],
    serpAnalysis: {},
    gaps: [],
    opportunities: [],
    competitorDomains: {},
  };

  // 1. Get current rankings
  console.log('━'.repeat(100));
  console.log('STEP 1: CURRENT RANKINGS FOR BESTROOFINGNOW.COM');
  console.log('━'.repeat(100) + '\n');

  const rankedKeywords = await getRankedKeywords();

  if (rankedKeywords.length > 0) {
    // Group by position ranges
    const top10 = rankedKeywords.filter(k => (k.ranked_serp_element?.serp_item?.rank_absolute || 999) <= 10);
    const top20 = rankedKeywords.filter(k => {
      const rank = k.ranked_serp_element?.serp_item?.rank_absolute || 999;
      return rank > 10 && rank <= 20;
    });
    const top50 = rankedKeywords.filter(k => {
      const rank = k.ranked_serp_element?.serp_item?.rank_absolute || 999;
      return rank > 20 && rank <= 50;
    });

    console.log(`Total keywords ranking: ${rankedKeywords.length}`);
    console.log(`  • Top 10: ${top10.length} keywords`);
    console.log(`  • 11-20:  ${top20.length} keywords`);
    console.log(`  • 21-50:  ${top50.length} keywords`);

    console.log('\n### TOP 10 RANKINGS ###\n');
    top10.sort((a, b) => (a.ranked_serp_element?.serp_item?.rank_absolute || 999) - (b.ranked_serp_element?.serp_item?.rank_absolute || 999));
    top10.forEach(kw => {
      const keyword = kw.keyword_data?.keyword || 'N/A';
      const volume = kw.keyword_data?.keyword_info?.search_volume || 0;
      const rank = kw.ranked_serp_element?.serp_item?.rank_absolute || 'N/A';
      console.log(`  #${rank.toString().padStart(2)} | ${keyword.padEnd(50)} | Vol: ${volume}/mo`);
    });

    console.log('\n### POSITIONS 11-20 (Near First Page) ###\n');
    top20.sort((a, b) => (a.ranked_serp_element?.serp_item?.rank_absolute || 999) - (b.ranked_serp_element?.serp_item?.rank_absolute || 999));
    top20.forEach(kw => {
      const keyword = kw.keyword_data?.keyword || 'N/A';
      const volume = kw.keyword_data?.keyword_info?.search_volume || 0;
      const rank = kw.ranked_serp_element?.serp_item?.rank_absolute || 'N/A';
      console.log(`  #${rank.toString().padStart(2)} | ${keyword.padEnd(50)} | Vol: ${volume}/mo`);
    });

    results.currentRankings = rankedKeywords.slice(0, 100).map(kw => ({
      keyword: kw.keyword_data?.keyword,
      rank: kw.ranked_serp_element?.serp_item?.rank_absolute,
      volume: kw.keyword_data?.keyword_info?.search_volume,
      url: kw.ranked_serp_element?.serp_item?.url,
    }));
  } else {
    console.log('No ranking data available - domain may be too new');
  }

  // 2. Analyze SERPs for priority keywords
  console.log('\n' + '━'.repeat(100));
  console.log('STEP 2: SERP ANALYSIS FOR PRIORITY KEYWORDS');
  console.log('━'.repeat(100) + '\n');

  for (const [category, keywords] of Object.entries(keywordGroups)) {
    console.log(`\n### ${category} ###\n`);

    for (const keyword of keywords) {
      process.stdout.write(`  Analyzing: ${keyword}... `);

      try {
        const serp = await getSERPResults(keyword);
        results.serpAnalysis[keyword] = serp;

        // Find our position
        const ourResult = serp.find(item =>
          item.domain?.includes('bestroofingnow') ||
          item.url?.includes('bestroofingnow')
        );

        if (ourResult) {
          console.log(`✅ #${ourResult.position}`);
        } else {
          console.log(`❌ Not in top 50`);
          results.gaps.push({
            keyword,
            category,
            topCompetitors: serp.slice(0, 5).map(s => s.domain),
          });
        }

        // Track competitor domains
        serp.slice(0, 10).forEach(item => {
          if (!results.competitorDomains[item.domain]) {
            results.competitorDomains[item.domain] = { count: 0, keywords: [] };
          }
          results.competitorDomains[item.domain].count++;
          results.competitorDomains[item.domain].keywords.push(keyword);
        });

        await new Promise(r => setTimeout(r, 300));
      } catch (err) {
        console.log(`⚠️ Error: ${err.message}`);
      }
    }
  }

  // 3. Identify keyword opportunities
  console.log('\n' + '━'.repeat(100));
  console.log('STEP 3: KEYWORD OPPORTUNITY DISCOVERY');
  console.log('━'.repeat(100) + '\n');

  console.log('Finding related keywords with high potential...\n');

  try {
    const ideas = await getKeywordIdeas('roofing charlotte nc');
    const highValueIdeas = ideas
      .filter(idea =>
        idea.keyword_data?.keyword_info?.search_volume >= 50 &&
        (idea.keyword_data?.keyword_info?.competition === 'LOW' ||
         idea.keyword_data?.keyword_info?.competition_index < 40)
      )
      .slice(0, 20);

    if (highValueIdeas.length > 0) {
      console.log('### HIGH-VALUE KEYWORD OPPORTUNITIES ###\n');
      highValueIdeas.forEach((idea, i) => {
        const kw = idea.keyword_data;
        console.log(`  ${i + 1}. ${kw.keyword}`);
        console.log(`     Volume: ${kw.keyword_info?.search_volume}/mo | Competition: ${kw.keyword_info?.competition} | CPC: $${kw.keyword_info?.cpc?.toFixed(2) || 'N/A'}`);
        results.opportunities.push({
          keyword: kw.keyword,
          volume: kw.keyword_info?.search_volume,
          competition: kw.keyword_info?.competition,
          cpc: kw.keyword_info?.cpc,
        });
      });
    }
  } catch (err) {
    console.log('Error fetching keyword ideas:', err.message);
  }

  // 4. Summary
  console.log('\n' + '═'.repeat(100));
  console.log('SUMMARY & RECOMMENDATIONS');
  console.log('═'.repeat(100));

  const rankingCount = Object.values(results.serpAnalysis).filter(serp =>
    serp.some(item => item.domain?.includes('bestroofingnow'))
  ).length;

  const totalKeywords = Object.keys(results.serpAnalysis).length;

  console.log(`
  📊 METRICS:
     • Priority keywords checked: ${totalKeywords}
     • Ranking in top 50: ${rankingCount}
     • Keyword gaps: ${results.gaps.length}
     • Opportunities found: ${results.opportunities.length}
  `);

  // Top competitors
  const sortedCompetitors = Object.entries(results.competitorDomains)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 10);

  console.log('  🏆 TOP COMPETITORS:');
  sortedCompetitors.forEach(([domain, data], i) => {
    console.log(`     ${i + 1}. ${domain} (ranks for ${data.count} keywords)`);
  });

  if (results.gaps.length > 0) {
    console.log('\n  ⚠️ PRIORITY GAPS TO ADDRESS:');
    results.gaps.forEach((gap, i) => {
      console.log(`     ${i + 1}. ${gap.keyword}`);
      console.log(`        Top competitor: ${gap.topCompetitors[0]}`);
    });
  }

  console.log(`
  📝 RECOMMENDATIONS:
     1. Focus on building backlinks to improve domain authority
     2. Optimize existing pages for target keywords with better content
     3. Create dedicated landing pages for gap keywords
     4. Build local citations (Google Business Profile, Yelp, BBB)
     5. Get more customer reviews on Google Maps
     6. Study competitor content structure and improve upon it
  `);

  // Save results
  const outputPath = path.join(__dirname, 'seo-gap-final-results.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`\n📁 Full results saved to: ${outputPath}`);
}

runAnalysis().catch(console.error);
