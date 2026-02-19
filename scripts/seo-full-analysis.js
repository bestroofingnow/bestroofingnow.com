/**
 * Comprehensive SEO Analysis using DataForSEO API
 * Includes: Domain Analysis, Gap Analysis, Backlinks, Social Signals
 */

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
const COMPETITORS = [
  'roofmaxx.com',
  'southendroofing.com',
  'prohomeclt.com',
  'rfroofingnc.com',
  'goeliteroofing.com',
  'adamsroofingcharlotte.com',
  'horizonroofing.com',
  'fivestarroofingandrestoration.com',
];

const LOCATION_CODE = 2840; // United States
const CHARLOTTE_LOCATION = 'Charlotte,North Carolina,United States';

// Results storage
const results = {
  timestamp: new Date().toISOString(),
  domain: TARGET_DOMAIN,
  domainOverview: null,
  rankedKeywords: [],
  backlinks: null,
  competitors: [],
  gapAnalysis: [],
  topOpportunities: [],
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

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 1. Domain Overview
async function getDomainOverview() {
  console.log('\n📊 DOMAIN OVERVIEW');
  console.log('='.repeat(50));

  try {
    const response = await makeRequest('/v3/dataforseo_labs/google/domain_metrics_by_categories/live', [{
      target: TARGET_DOMAIN,
      location_code: LOCATION_CODE,
      language_code: 'en',
    }]);

    if (response.tasks?.[0]?.result?.[0]) {
      const data = response.tasks[0].result[0];
      results.domainOverview = data;
      console.log('  Domain:', TARGET_DOMAIN);
      console.log('  Organic Traffic:', data.metrics?.organic?.count || 'N/A');
      console.log('  Organic Keywords:', data.metrics?.organic?.keywords_count || 'N/A');
    }
  } catch (e) {
    console.log('  Error fetching domain overview:', e.message);
  }
}

// 2. Get Ranked Keywords
async function getRankedKeywords() {
  console.log('\n🔑 RANKED KEYWORDS');
  console.log('='.repeat(50));

  try {
    const response = await makeRequest('/v3/dataforseo_labs/google/ranked_keywords/live', [{
      target: TARGET_DOMAIN,
      location_code: LOCATION_CODE,
      language_code: 'en',
      limit: 500,
      order_by: ['keyword_data.keyword_info.search_volume,desc'],
    }]);

    if (response.tasks?.[0]?.result?.[0]?.items) {
      const items = response.tasks[0].result[0].items;
      results.rankedKeywords = items.map(item => ({
        keyword: item.keyword_data?.keyword,
        position: item.ranked_serp_element?.serp_item?.rank_absolute,
        searchVolume: item.keyword_data?.keyword_info?.search_volume,
        cpc: item.keyword_data?.keyword_info?.cpc,
        url: item.ranked_serp_element?.serp_item?.url,
        competition: item.keyword_data?.keyword_info?.competition,
      }));

      console.log(`  Total Ranked Keywords: ${results.rankedKeywords.length}`);

      // Top 10 by search volume
      const top10 = results.rankedKeywords.slice(0, 10);
      console.log('\n  Top 10 Keywords by Search Volume:');
      top10.forEach((kw, i) => {
        console.log(`    ${i + 1}. "${kw.keyword}" - Pos: ${kw.position}, Vol: ${kw.searchVolume}`);
      });

      // Position distribution
      const posDistribution = {
        top3: results.rankedKeywords.filter(k => k.position <= 3).length,
        top10: results.rankedKeywords.filter(k => k.position <= 10).length,
        top20: results.rankedKeywords.filter(k => k.position <= 20).length,
        top50: results.rankedKeywords.filter(k => k.position <= 50).length,
        top100: results.rankedKeywords.filter(k => k.position <= 100).length,
      };

      console.log('\n  Position Distribution:');
      console.log(`    Top 3: ${posDistribution.top3}`);
      console.log(`    Top 10: ${posDistribution.top10}`);
      console.log(`    Top 20: ${posDistribution.top20}`);
      console.log(`    Top 50: ${posDistribution.top50}`);
      console.log(`    Top 100: ${posDistribution.top100}`);
    }
  } catch (e) {
    console.log('  Error fetching ranked keywords:', e.message);
  }
}

// 3. Backlinks Analysis
async function getBacklinks() {
  console.log('\n🔗 BACKLINKS ANALYSIS');
  console.log('='.repeat(50));

  try {
    const response = await makeRequest('/v3/backlinks/summary/live', [{
      target: TARGET_DOMAIN,
      include_subdomains: true,
    }]);

    if (response.tasks?.[0]?.result?.[0]) {
      const data = response.tasks[0].result[0];
      results.backlinks = {
        totalBacklinks: data.total_backlinks,
        referringDomains: data.referring_domains,
        referringIPs: data.referring_ips,
        referringSubnets: data.referring_subnets,
        brokenBacklinks: data.broken_backlinks,
        referringDomainsNofollow: data.referring_domains_nofollow,
        domainRank: data.rank,
      };

      console.log('  Total Backlinks:', data.total_backlinks?.toLocaleString());
      console.log('  Referring Domains:', data.referring_domains?.toLocaleString());
      console.log('  Referring IPs:', data.referring_ips?.toLocaleString());
      console.log('  Domain Rank:', data.rank);
      console.log('  Broken Backlinks:', data.broken_backlinks?.toLocaleString());
      console.log('  Dofollow:', data.referring_domains - data.referring_domains_nofollow);
      console.log('  Nofollow:', data.referring_domains_nofollow);
    }
  } catch (e) {
    console.log('  Error fetching backlinks:', e.message);
  }

  // Get top referring domains
  await delay(500);
  try {
    const response = await makeRequest('/v3/backlinks/referring_domains/live', [{
      target: TARGET_DOMAIN,
      limit: 20,
      order_by: ['rank,desc'],
    }]);

    if (response.tasks?.[0]?.result?.[0]?.items) {
      const items = response.tasks[0].result[0].items;
      results.backlinks.topReferringDomains = items.map(item => ({
        domain: item.domain,
        rank: item.rank,
        backlinks: item.backlinks,
        firstSeen: item.first_seen,
      }));

      console.log('\n  Top Referring Domains:');
      items.slice(0, 10).forEach((item, i) => {
        console.log(`    ${i + 1}. ${item.domain} (Rank: ${item.rank}, Links: ${item.backlinks})`);
      });
    }
  } catch (e) {
    console.log('  Error fetching referring domains:', e.message);
  }
}

// 4. Competitor Analysis
async function getCompetitorAnalysis() {
  console.log('\n🏆 COMPETITOR ANALYSIS');
  console.log('='.repeat(50));

  for (const competitor of COMPETITORS.slice(0, 5)) {
    await delay(500);
    try {
      const response = await makeRequest('/v3/dataforseo_labs/google/ranked_keywords/live', [{
        target: competitor,
        location_code: LOCATION_CODE,
        language_code: 'en',
        limit: 100,
      }]);

      if (response.tasks?.[0]?.result?.[0]) {
        const data = response.tasks[0].result[0];
        const competitorData = {
          domain: competitor,
          totalKeywords: data.total_count,
          topKeywords: data.items?.slice(0, 5).map(item => ({
            keyword: item.keyword_data?.keyword,
            position: item.ranked_serp_element?.serp_item?.rank_absolute,
            searchVolume: item.keyword_data?.keyword_info?.search_volume,
          })) || [],
        };
        results.competitors.push(competitorData);
        console.log(`\n  ${competitor}:`);
        console.log(`    Total Keywords: ${data.total_count}`);
      }
    } catch (e) {
      console.log(`  Error analyzing ${competitor}:`, e.message);
    }
  }
}

// 5. Gap Analysis - Keywords competitors rank for but we don't
async function getGapAnalysis() {
  console.log('\n📈 KEYWORD GAP ANALYSIS');
  console.log('='.repeat(50));

  try {
    const response = await makeRequest('/v3/dataforseo_labs/google/competitors_domain/live', [{
      target: TARGET_DOMAIN,
      location_code: LOCATION_CODE,
      language_code: 'en',
      limit: 50,
    }]);

    if (response.tasks?.[0]?.result?.[0]?.items) {
      const items = response.tasks[0].result[0].items;
      console.log('\n  Top Organic Competitors:');
      items.slice(0, 10).forEach((item, i) => {
        console.log(`    ${i + 1}. ${item.domain} - Overlap: ${item.intersections}`);
      });
    }
  } catch (e) {
    console.log('  Error fetching competitors:', e.message);
  }

  // Domain intersection for gap analysis
  await delay(500);
  try {
    const mainCompetitor = COMPETITORS[0];
    const response = await makeRequest('/v3/dataforseo_labs/google/domain_intersection/live', [{
      target1: TARGET_DOMAIN,
      target2: mainCompetitor,
      location_code: LOCATION_CODE,
      language_code: 'en',
      intersections: false, // Get keywords where competitor ranks but we don't
      limit: 100,
      order_by: ['keyword_data.keyword_info.search_volume,desc'],
    }]);

    if (response.tasks?.[0]?.result?.[0]?.items) {
      const items = response.tasks[0].result[0].items;

      // Filter for opportunities - keywords where competitor ranks well but we don't
      const opportunities = items
        .filter(item => {
          const ourPos = item.target1_serp?.rank_absolute || 999;
          const theirPos = item.target2_serp?.rank_absolute || 999;
          return theirPos < 20 && ourPos > 20;
        })
        .map(item => ({
          keyword: item.keyword_data?.keyword,
          searchVolume: item.keyword_data?.keyword_info?.search_volume,
          ourPosition: item.target1_serp?.rank_absolute || 'Not ranked',
          competitorPosition: item.target2_serp?.rank_absolute,
        }));

      results.gapAnalysis = opportunities;

      console.log(`\n  Keyword Opportunities (competitor ranks, we don't):`);
      opportunities.slice(0, 15).forEach((opp, i) => {
        console.log(`    ${i + 1}. "${opp.keyword}" - Vol: ${opp.searchVolume}, Their Pos: ${opp.competitorPosition}, Our Pos: ${opp.ourPosition}`);
      });
    }
  } catch (e) {
    console.log('  Error in gap analysis:', e.message);
  }
}

// 6. Historical Rank Tracking
async function getHistoricalRanks() {
  console.log('\n📉 SERP ANALYSIS - Key Keywords');
  console.log('='.repeat(50));

  const keyKeywords = [
    'roofing charlotte nc',
    'roofers charlotte nc',
    'roof repair charlotte nc',
    'best roofing company charlotte nc',
    'roofing company charlotte nc',
  ];

  for (const keyword of keyKeywords) {
    await delay(500);
    try {
      const response = await makeRequest('/v3/serp/google/organic/live/regular', [{
        keyword,
        location_name: CHARLOTTE_LOCATION,
        language_name: 'English',
        depth: 30,
      }]);

      if (response.tasks?.[0]?.result?.[0]?.items) {
        const items = response.tasks[0].result[0].items
          .filter(item => item.type === 'organic');

        const ourRank = items.findIndex(item =>
          item.domain?.includes(TARGET_DOMAIN)
        );

        console.log(`\n  "${keyword}":`);
        if (ourRank >= 0) {
          console.log(`    Our Position: #${ourRank + 1}`);
        } else {
          console.log(`    Our Position: Not in top 30`);
        }

        console.log('    Top 5:');
        items.slice(0, 5).forEach((item, i) => {
          const marker = item.domain?.includes(TARGET_DOMAIN) ? ' ← US' : '';
          console.log(`      ${i + 1}. ${item.domain}${marker}`);
        });
      }
    } catch (e) {
      console.log(`  Error checking "${keyword}":`, e.message);
    }
  }
}

// 7. On-Page SEO Analysis
async function getOnPageAnalysis() {
  console.log('\n🔍 ON-PAGE SEO AUDIT');
  console.log('='.repeat(50));

  try {
    const response = await makeRequest('/v3/on_page/task_post', [{
      target: `https://${TARGET_DOMAIN}`,
      max_crawl_pages: 100,
      load_resources: true,
      enable_javascript: true,
    }]);

    if (response.tasks?.[0]?.id) {
      const taskId = response.tasks[0].id;
      console.log('  Crawl task created. ID:', taskId);
      console.log('  (On-page results will be available in ~2-5 minutes)');
      console.log('  Run: node scripts/get-onpage-results.js', taskId);
      results.onPageTaskId = taskId;
    }
  } catch (e) {
    console.log('  Error starting on-page audit:', e.message);
  }
}

// Generate Summary Report
function generateReport() {
  console.log('\n\n' + '='.repeat(60));
  console.log('📋 SUMMARY REPORT');
  console.log('='.repeat(60));

  console.log('\n🎯 DOMAIN HEALTH SCORE');
  console.log('-'.repeat(40));

  let healthScore = 0;
  const factors = [];

  // Ranked keywords score
  const kwCount = results.rankedKeywords.length;
  if (kwCount > 500) { healthScore += 20; factors.push('500+ ranked keywords'); }
  else if (kwCount > 200) { healthScore += 15; factors.push('200+ ranked keywords'); }
  else if (kwCount > 50) { healthScore += 10; factors.push('50+ ranked keywords'); }

  // Top 10 rankings
  const top10Count = results.rankedKeywords.filter(k => k.position <= 10).length;
  if (top10Count > 50) { healthScore += 20; factors.push('50+ top 10 rankings'); }
  else if (top10Count > 20) { healthScore += 15; factors.push('20+ top 10 rankings'); }
  else if (top10Count > 5) { healthScore += 10; factors.push('5+ top 10 rankings'); }

  // Backlinks score
  if (results.backlinks) {
    const domains = results.backlinks.referringDomains || 0;
    if (domains > 500) { healthScore += 20; factors.push('500+ referring domains'); }
    else if (domains > 100) { healthScore += 15; factors.push('100+ referring domains'); }
    else if (domains > 30) { healthScore += 10; factors.push('30+ referring domains'); }
  }

  // Domain rank
  if (results.backlinks?.domainRank > 30) {
    healthScore += 15;
    factors.push(`Domain rank ${results.backlinks.domainRank}`);
  }

  console.log(`  Overall Health Score: ${healthScore}/75`);
  console.log('  Positive Factors:');
  factors.forEach(f => console.log(`    ✓ ${f}`));

  console.log('\n📊 KEY METRICS');
  console.log('-'.repeat(40));
  console.log(`  Total Ranked Keywords: ${results.rankedKeywords.length}`);
  console.log(`  Top 3 Rankings: ${results.rankedKeywords.filter(k => k.position <= 3).length}`);
  console.log(`  Top 10 Rankings: ${results.rankedKeywords.filter(k => k.position <= 10).length}`);
  console.log(`  Total Backlinks: ${results.backlinks?.totalBacklinks?.toLocaleString() || 'N/A'}`);
  console.log(`  Referring Domains: ${results.backlinks?.referringDomains?.toLocaleString() || 'N/A'}`);

  console.log('\n🎯 TOP OPPORTUNITIES');
  console.log('-'.repeat(40));

  // High volume keywords not in top 10
  const opportunities = results.rankedKeywords
    .filter(k => k.position > 10 && k.position <= 30 && k.searchVolume >= 100)
    .sort((a, b) => b.searchVolume - a.searchVolume)
    .slice(0, 10);

  if (opportunities.length > 0) {
    console.log('  Quick Wins (Position 11-30, High Volume):');
    opportunities.forEach((opp, i) => {
      console.log(`    ${i + 1}. "${opp.keyword}" - Pos: ${opp.position}, Vol: ${opp.searchVolume}`);
    });
  }

  // Gap analysis opportunities
  if (results.gapAnalysis.length > 0) {
    console.log('\n  Competitor Gap Opportunities:');
    results.gapAnalysis.slice(0, 5).forEach((opp, i) => {
      console.log(`    ${i + 1}. "${opp.keyword}" - Vol: ${opp.searchVolume}`);
    });
  }

  // Save full results to file
  const outputPath = path.join(__dirname, 'seo-analysis-results.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log('\n💾 Full results saved to:', outputPath);

  // Save CSV summary
  const csvRows = ['Keyword,Position,Search Volume,URL'];
  results.rankedKeywords.forEach(kw => {
    csvRows.push(`"${kw.keyword}",${kw.position},${kw.searchVolume},"${kw.url || ''}"`);
  });
  const csvPath = path.join(__dirname, 'ranked-keywords.csv');
  fs.writeFileSync(csvPath, csvRows.join('\n'));
  console.log('📄 Ranked keywords CSV saved to:', csvPath);
}

// Main execution
async function main() {
  console.log('🚀 Starting Comprehensive SEO Analysis for', TARGET_DOMAIN);
  console.log('Timestamp:', new Date().toISOString());
  console.log('='.repeat(60));

  await getDomainOverview();
  await delay(500);

  await getRankedKeywords();
  await delay(500);

  await getBacklinks();
  await delay(500);

  await getCompetitorAnalysis();
  await delay(500);

  await getGapAnalysis();
  await delay(500);

  await getHistoricalRanks();
  await delay(500);

  // Optional: On-page audit (creates async task)
  // await getOnPageAnalysis();

  generateReport();

  console.log('\n✅ Analysis complete!');
}

main().catch(console.error);
