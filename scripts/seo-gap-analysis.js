const https = require('https');
const fs = require('fs');
const path = require('path');

const auth = Buffer.from('james@kynexpro.com:c239bdea18ad73af').toString('base64');

const TARGET_DOMAIN = 'bestroofingnow.com';

// Priority keywords to check rankings for
const priorityKeywords = [
  // Top Charlotte keywords
  'roofing charlotte nc',
  'roofers charlotte nc',
  'roofing company charlotte nc',
  'roofing contractor charlotte nc',
  'roof repair charlotte nc',
  'roof replacement charlotte nc',
  'best roofing company charlotte nc',
  'roof inspection charlotte nc',
  'residential roofing charlotte nc',
  'commercial roofing charlotte nc',

  // Storm/Emergency
  'emergency roof repair charlotte nc',
  'storm damage roof repair charlotte nc',
  'hail damage roof repair charlotte nc',

  // Surrounding cities
  'roofing huntersville nc',
  'roofing mooresville nc',
  'roofing concord nc',
  'roofing cornelius nc',
  'roof repair huntersville nc',
  'roof repair concord nc',

  // Lake Norman
  'roofing lake norman',
  'roofers lake norman',

  // Commercial
  'industrial roofing charlotte nc',
  'warehouse roofing charlotte nc',
  'flat roof repair charlotte nc',
  'tpo roofing charlotte nc',
  'commercial roof replacement charlotte nc',

  // Specialty
  'metal roofing charlotte nc',
  'gutter installation charlotte nc',
  'roof leak repair charlotte nc',
  'new roof cost charlotte nc',
  'roof replacement cost charlotte nc',
];

// Known competitors in Charlotte roofing market
const competitors = [
  'roofersofcharlotte.com',
  'charlotteroofingpros.com',
  'southendroofing.com',
  'nationwideroofing.com',
  'premiersouthernroofing.com',
  'yorkroofing.com',
  'srsroofing.com',
  'hornersroofing.com',
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

async function checkSERPRankings() {
  console.log('='.repeat(100));
  console.log('SEO GAP ANALYSIS - SERP RANKINGS CHECK');
  console.log('Target Domain: ' + TARGET_DOMAIN);
  console.log('='.repeat(100));
  console.log('\nChecking rankings for priority keywords...\n');

  const results = {
    ranking: [],
    notRanking: [],
    competitorWins: [],
  };

  // Process keywords in batches of 10 to avoid rate limits
  const batchSize = 10;
  for (let i = 0; i < priorityKeywords.length; i += batchSize) {
    const batch = priorityKeywords.slice(i, i + batchSize);
    console.log(`Processing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(priorityKeywords.length/batchSize)}...`);

    const tasks = batch.map(keyword => ({
      keyword,
      location_name: 'Charlotte,North Carolina,United States',
      language_name: 'English',
      depth: 30,
    }));

    try {
      const response = await makeRequest('/v3/serp/google/organic/live', tasks);

      if (response.tasks) {
        for (const task of response.tasks) {
          if (task.result && task.result[0]) {
            const keyword = task.data.keyword;
            const items = task.result[0].items || [];

            // Find our domain
            const ourRank = items.findIndex(item =>
              item.domain && item.domain.includes(TARGET_DOMAIN)
            );

            // Find competitor rankings
            const competitorRanks = [];
            competitors.forEach(comp => {
              const rank = items.findIndex(item =>
                item.domain && item.domain.includes(comp.replace('www.', ''))
              );
              if (rank !== -1) {
                competitorRanks.push({ domain: comp, rank: rank + 1 });
              }
            });

            const result = {
              keyword,
              ourRank: ourRank !== -1 ? ourRank + 1 : null,
              competitors: competitorRanks,
              topDomains: items.slice(0, 5).map(item => ({
                domain: item.domain,
                rank: item.rank_absolute,
                title: item.title,
              })),
            };

            if (ourRank !== -1) {
              results.ranking.push(result);
            } else {
              results.notRanking.push(result);
            }

            // Check if competitors outrank us
            if (competitorRanks.length > 0) {
              const ourPos = ourRank !== -1 ? ourRank + 1 : 999;
              const winningComps = competitorRanks.filter(c => c.rank < ourPos);
              if (winningComps.length > 0) {
                results.competitorWins.push({
                  keyword,
                  ourRank: ourPos === 999 ? 'Not ranking' : ourPos,
                  winners: winningComps,
                });
              }
            }
          }
        }
      }
    } catch (error) {
      console.error('Error processing batch:', error.message);
    }

    // Small delay between batches
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  return results;
}

async function getCompetitorKeywords() {
  console.log('\n' + '='.repeat(100));
  console.log('COMPETITOR KEYWORD ANALYSIS');
  console.log('='.repeat(100));

  const competitorKeywords = {};

  for (const competitor of competitors.slice(0, 3)) { // Limit to top 3 to save API calls
    console.log(`\nAnalyzing: ${competitor}...`);

    try {
      const response = await makeRequest('/v3/dataforseo_labs/google/ranked_keywords/live', [{
        target: competitor,
        location_name: 'United States',
        language_name: 'English',
        filters: [
          ['keyword_data.keyword_info.search_volume', '>', 10],
          ['ranked_serp_element.serp_item.rank_absolute', '<=', 20]
        ],
        limit: 100,
      }]);

      if (response.tasks && response.tasks[0] && response.tasks[0].result) {
        const items = response.tasks[0].result[0]?.items || [];
        competitorKeywords[competitor] = items.map(item => ({
          keyword: item.keyword_data?.keyword,
          volume: item.keyword_data?.keyword_info?.search_volume,
          rank: item.ranked_serp_element?.serp_item?.rank_absolute,
          cpc: item.keyword_data?.keyword_info?.cpc,
        })).filter(k => k.keyword);

        console.log(`  Found ${competitorKeywords[competitor].length} keywords`);
      }
    } catch (error) {
      console.error(`  Error: ${error.message}`);
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  return competitorKeywords;
}

async function getDomainOverview() {
  console.log('\n' + '='.repeat(100));
  console.log('DOMAIN RANKING OVERVIEW');
  console.log('='.repeat(100));

  try {
    const response = await makeRequest('/v3/dataforseo_labs/google/domain_rank_overview/live', [{
      target: TARGET_DOMAIN,
      location_name: 'United States',
      language_name: 'English',
    }]);

    if (response.tasks && response.tasks[0] && response.tasks[0].result) {
      const data = response.tasks[0].result[0];
      return {
        metrics: data.metrics,
        totalKeywords: data.metrics?.organic?.count,
        estimatedTraffic: data.metrics?.organic?.etv,
        topKeywords: data.metrics?.organic?.keywords_positions_distribution,
      };
    }
  } catch (error) {
    console.error('Error getting domain overview:', error.message);
  }

  return null;
}

async function runGapAnalysis() {
  console.log('\n');
  console.log('╔' + '═'.repeat(98) + '╗');
  console.log('║' + ' '.repeat(30) + 'SEO GAP ANALYSIS REPORT' + ' '.repeat(45) + '║');
  console.log('║' + ' '.repeat(30) + 'bestroofingnow.com' + ' '.repeat(50) + '║');
  console.log('║' + ' '.repeat(30) + new Date().toISOString().split('T')[0] + ' '.repeat(54) + '║');
  console.log('╚' + '═'.repeat(98) + '╝');

  // 1. Get domain overview
  console.log('\n📊 Getting domain metrics...');
  const domainOverview = await getDomainOverview();

  if (domainOverview) {
    console.log('\n### DOMAIN METRICS ###');
    console.log(`Total Organic Keywords: ${domainOverview.totalKeywords || 'N/A'}`);
    console.log(`Estimated Monthly Traffic: ${domainOverview.estimatedTraffic || 'N/A'}`);
    if (domainOverview.topKeywords) {
      console.log('\nKeyword Position Distribution:');
      console.log(`  Top 3: ${domainOverview.topKeywords?.pos_1_3 || 0} keywords`);
      console.log(`  4-10: ${domainOverview.topKeywords?.pos_4_10 || 0} keywords`);
      console.log(`  11-20: ${domainOverview.topKeywords?.pos_11_20 || 0} keywords`);
      console.log(`  21-30: ${domainOverview.topKeywords?.pos_21_30 || 0} keywords`);
    }
  }

  // 2. Check SERP rankings for priority keywords
  console.log('\n🔍 Checking SERP rankings for priority keywords...');
  const serpResults = await checkSERPRankings();

  // 3. Print ranking results
  console.log('\n' + '='.repeat(100));
  console.log('KEYWORDS WHERE WE RANK (Top 30)');
  console.log('='.repeat(100));

  if (serpResults.ranking.length > 0) {
    serpResults.ranking.sort((a, b) => a.ourRank - b.ourRank);
    serpResults.ranking.forEach(r => {
      const compInfo = r.competitors.length > 0
        ? ` | Competitors: ${r.competitors.map(c => `${c.domain.split('.')[0]}(#${c.rank})`).join(', ')}`
        : '';
      console.log(`  #${r.ourRank.toString().padStart(2)} - ${r.keyword}${compInfo}`);
    });
  } else {
    console.log('  No rankings found in top 30 for priority keywords');
  }

  console.log('\n' + '='.repeat(100));
  console.log('⚠️  KEYWORD GAPS - NOT RANKING (Top 30)');
  console.log('='.repeat(100));

  if (serpResults.notRanking.length > 0) {
    serpResults.notRanking.forEach(r => {
      console.log(`\n  ❌ ${r.keyword}`);
      console.log(`     Top 3 ranking: ${r.topDomains.slice(0, 3).map(d => d.domain).join(', ')}`);
      if (r.competitors.length > 0) {
        console.log(`     Competitors ranking: ${r.competitors.map(c => `${c.domain}(#${c.rank})`).join(', ')}`);
      }
    });
  } else {
    console.log('  Great! We rank for all priority keywords');
  }

  console.log('\n' + '='.repeat(100));
  console.log('🎯 COMPETITOR WINS - They Outrank Us');
  console.log('='.repeat(100));

  if (serpResults.competitorWins.length > 0) {
    serpResults.competitorWins.forEach(r => {
      console.log(`\n  Keyword: ${r.keyword}`);
      console.log(`  Our Position: ${r.ourRank}`);
      console.log(`  Beating us: ${r.winners.map(w => `${w.domain}(#${w.rank})`).join(', ')}`);
    });
  } else {
    console.log('  No direct competitors outranking us on priority keywords');
  }

  // 4. Get competitor keywords for gap analysis
  console.log('\n🔎 Analyzing competitor keywords...');
  const competitorKeywords = await getCompetitorKeywords();

  // Find keywords competitors rank for that we might be missing
  console.log('\n' + '='.repeat(100));
  console.log('COMPETITOR KEYWORD OPPORTUNITIES');
  console.log('='.repeat(100));

  const allCompKeywords = new Set();
  Object.entries(competitorKeywords).forEach(([domain, keywords]) => {
    console.log(`\n### ${domain} ###`);
    const roofingKeywords = keywords.filter(k =>
      k.keyword && (
        k.keyword.includes('roof') ||
        k.keyword.includes('gutter') ||
        k.keyword.includes('shingle') ||
        k.keyword.includes('charlotte') ||
        k.keyword.includes('huntersville') ||
        k.keyword.includes('mooresville') ||
        k.keyword.includes('concord')
      )
    );

    roofingKeywords.slice(0, 15).forEach(k => {
      console.log(`  ${k.keyword} - Vol: ${k.volume}/mo - Rank: #${k.rank}`);
      allCompKeywords.add(k.keyword);
    });
  });

  // Export results
  const exportData = {
    timestamp: new Date().toISOString(),
    domain: TARGET_DOMAIN,
    domainOverview,
    serpResults: {
      rankingCount: serpResults.ranking.length,
      notRankingCount: serpResults.notRanking.length,
      competitorWinsCount: serpResults.competitorWins.length,
      ranking: serpResults.ranking,
      notRanking: serpResults.notRanking,
      competitorWins: serpResults.competitorWins,
    },
    competitorKeywords: Object.fromEntries(
      Object.entries(competitorKeywords).map(([k, v]) => [k, v.slice(0, 50)])
    ),
    recommendations: [],
  };

  // Generate recommendations
  if (serpResults.notRanking.length > 0) {
    exportData.recommendations.push({
      priority: 'HIGH',
      type: 'KEYWORD_GAP',
      message: `Create or optimize pages for ${serpResults.notRanking.length} keywords where we don't rank`,
      keywords: serpResults.notRanking.map(r => r.keyword),
    });
  }

  if (serpResults.competitorWins.length > 0) {
    exportData.recommendations.push({
      priority: 'HIGH',
      type: 'COMPETITIVE',
      message: `Optimize pages for ${serpResults.competitorWins.length} keywords where competitors outrank us`,
      keywords: serpResults.competitorWins.map(r => r.keyword),
    });
  }

  // Save to file
  const outputPath = path.join(__dirname, 'seo-gap-analysis.json');
  fs.writeFileSync(outputPath, JSON.stringify(exportData, null, 2));
  console.log(`\n\n📁 Full analysis exported to: ${outputPath}`);

  // Print summary
  console.log('\n' + '═'.repeat(100));
  console.log('SUMMARY & RECOMMENDATIONS');
  console.log('═'.repeat(100));
  console.log(`\n✅ Keywords ranking (top 30): ${serpResults.ranking.length}`);
  console.log(`❌ Keywords NOT ranking: ${serpResults.notRanking.length}`);
  console.log(`⚔️  Competitor wins: ${serpResults.competitorWins.length}`);

  if (serpResults.notRanking.length > 0) {
    console.log('\n🎯 PRIORITY ACTIONS:');
    console.log('\n1. Create/Optimize pages for these missing keywords:');
    serpResults.notRanking.forEach(r => {
      console.log(`   - ${r.keyword}`);
    });
  }

  if (serpResults.competitorWins.length > 0) {
    console.log('\n2. Improve rankings for keywords where competitors beat us:');
    serpResults.competitorWins.forEach(r => {
      console.log(`   - ${r.keyword} (we're #${r.ourRank})`);
    });
  }

  console.log('\n' + '═'.repeat(100));
}

// Run the analysis
runGapAnalysis().catch(console.error);
