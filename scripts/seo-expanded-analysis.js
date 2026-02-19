/**
 * Expanded SEO Analysis - SERP competitors, keyword suggestions, and on-page audit
 * Uses DataForSEO API
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
const CHARLOTTE_LOCATION = 'Charlotte,North Carolina,United States';
const LOCATION_CODE = 1024231; // Charlotte NC

const results = {
  timestamp: new Date().toISOString(),
  serpResults: {},
  keywordSuggestions: [],
  localCompetitors: [],
  contentGaps: [],
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

// 1. Extended SERP Analysis for more keywords
async function extendedSerpAnalysis() {
  console.log('\n📊 EXTENDED SERP ANALYSIS - Charlotte Roofing Keywords');
  console.log('='.repeat(60));

  const targetKeywords = [
    // Primary targets
    'roofing contractor charlotte nc',
    'roof replacement charlotte nc',
    'commercial roofing charlotte nc',
    'metal roofing charlotte nc',
    'emergency roof repair charlotte nc',
    // Lake Norman area
    'roofing huntersville nc',
    'roofing mooresville nc',
    'roofing cornelius nc',
    // Service-specific
    'storm damage roof repair charlotte',
    'hail damage roof charlotte',
    'roof inspection charlotte nc',
    'gutter installation charlotte nc',
    // Long-tail high intent
    'affordable roofing charlotte nc',
    'best rated roofer charlotte',
    'licensed roofing contractor charlotte',
  ];

  for (const keyword of targetKeywords) {
    await delay(600);
    try {
      const response = await makeRequest('/v3/serp/google/organic/live/regular', [{
        keyword,
        location_name: CHARLOTTE_LOCATION,
        language_name: 'English',
        depth: 20,
      }]);

      if (response.tasks?.[0]?.result?.[0]?.items) {
        const items = response.tasks[0].result[0].items
          .filter(item => item.type === 'organic');

        const ourRank = items.findIndex(item =>
          item.domain?.includes(TARGET_DOMAIN) || item.url?.includes(TARGET_DOMAIN)
        );

        const serpData = {
          keyword,
          ourPosition: ourRank >= 0 ? ourRank + 1 : 'Not ranked',
          top5: items.slice(0, 5).map(item => ({
            position: item.rank_absolute,
            domain: item.domain,
            title: item.title,
            url: item.url,
          })),
          totalResults: response.tasks[0].result[0].se_results_count,
        };

        results.serpResults[keyword] = serpData;

        console.log(`\n  "${keyword}":`);
        console.log(`    Our Position: ${ourRank >= 0 ? '#' + (ourRank + 1) : 'Not in top 20'}`);
        console.log(`    Top 3:`);
        items.slice(0, 3).forEach((item, i) => {
          const marker = item.domain?.includes(TARGET_DOMAIN) ? ' ← US' : '';
          console.log(`      ${i + 1}. ${item.domain}${marker}`);
        });

        // Track local competitors
        items.slice(0, 10).forEach(item => {
          if (!item.domain?.includes(TARGET_DOMAIN) &&
              !['yelp.com', 'bbb.org', 'angi.com', 'homeadvisor.com', 'facebook.com', 'reddit.com', 'youtube.com'].includes(item.domain)) {
            const existing = results.localCompetitors.find(c => c.domain === item.domain);
            if (existing) {
              existing.keywords.push(keyword);
              existing.appearances++;
            } else {
              results.localCompetitors.push({
                domain: item.domain,
                keywords: [keyword],
                appearances: 1,
              });
            }
          }
        });
      }
    } catch (e) {
      console.log(`  Error checking "${keyword}":`, e.message);
    }
  }

  // Sort local competitors by appearances
  results.localCompetitors.sort((a, b) => b.appearances - a.appearances);

  console.log('\n\n🏆 TOP LOCAL COMPETITORS (by SERP appearances):');
  console.log('-'.repeat(50));
  results.localCompetitors.slice(0, 15).forEach((comp, i) => {
    console.log(`  ${i + 1}. ${comp.domain} - Appears in ${comp.appearances} SERPs`);
  });
}

// 2. Keyword Suggestions using Google Ads Keywords
async function getKeywordSuggestions() {
  console.log('\n\n🔑 KEYWORD SUGGESTIONS');
  console.log('='.repeat(60));

  const seedKeywords = [
    'roofing contractor charlotte',
    'roof repair charlotte nc',
    'best roofer near me',
  ];

  for (const seed of seedKeywords) {
    await delay(600);
    try {
      const response = await makeRequest('/v3/keywords_data/google_ads/keywords_for_keywords/live', [{
        keywords: [seed],
        location_code: LOCATION_CODE,
        language_code: 'en',
        include_seed_keyword: true,
        limit: 50,
      }]);

      if (response.tasks?.[0]?.result) {
        const keywords = response.tasks[0].result;

        console.log(`\n  Suggestions for "${seed}":`);

        const filtered = keywords
          .filter(k => k.search_volume >= 50)
          .sort((a, b) => b.search_volume - a.search_volume);

        filtered.slice(0, 10).forEach((k, i) => {
          console.log(`    ${i + 1}. "${k.keyword}" - Vol: ${k.search_volume}, CPC: $${k.cpc?.toFixed(2) || 'N/A'}`);
          results.keywordSuggestions.push({
            keyword: k.keyword,
            searchVolume: k.search_volume,
            cpc: k.cpc,
            competition: k.competition,
            seed,
          });
        });
      }
    } catch (e) {
      console.log(`  Error getting suggestions for "${seed}":`, e.message);
    }
  }
}

// 3. Related Keywords (questions, related searches)
async function getRelatedKeywords() {
  console.log('\n\n❓ RELATED QUESTIONS & SEARCHES');
  console.log('='.repeat(60));

  const keywords = [
    'roofing contractor charlotte nc',
    'roof replacement cost charlotte',
    'how much does a new roof cost',
  ];

  for (const keyword of keywords) {
    await delay(600);
    try {
      const response = await makeRequest('/v3/serp/google/organic/live/regular', [{
        keyword,
        location_name: CHARLOTTE_LOCATION,
        language_name: 'English',
        depth: 100,
      }]);

      if (response.tasks?.[0]?.result?.[0]?.items) {
        const items = response.tasks[0].result[0].items;

        const questions = items.filter(item => item.type === 'people_also_ask');
        const relatedSearches = items.filter(item => item.type === 'related_searches');

        if (questions.length > 0) {
          console.log(`\n  People Also Ask for "${keyword}":`);
          questions.forEach(q => {
            if (q.items) {
              q.items.slice(0, 5).forEach((item, i) => {
                console.log(`    ${i + 1}. ${item.title}`);
                results.contentGaps.push({
                  type: 'question',
                  keyword,
                  question: item.title,
                });
              });
            }
          });
        }

        if (relatedSearches.length > 0) {
          console.log(`\n  Related Searches for "${keyword}":`);
          relatedSearches.forEach(rs => {
            if (rs.items) {
              rs.items.slice(0, 5).forEach((item, i) => {
                console.log(`    ${i + 1}. ${item.title || item.keyword}`);
              });
            }
          });
        }
      }
    } catch (e) {
      console.log(`  Error getting related for "${keyword}":`, e.message);
    }
  }
}

// 4. Check Google Business Profile / Local Pack
async function checkLocalPack() {
  console.log('\n\n📍 LOCAL PACK ANALYSIS');
  console.log('='.repeat(60));

  const localKeywords = [
    'roofers near me',
    'roofing company near me',
    'roof repair near me',
    'roofing charlotte nc',
    'roofing huntersville nc',
  ];

  for (const keyword of localKeywords) {
    await delay(600);
    try {
      const response = await makeRequest('/v3/serp/google/organic/live/regular', [{
        keyword,
        location_name: CHARLOTTE_LOCATION,
        language_name: 'English',
        depth: 30,
      }]);

      if (response.tasks?.[0]?.result?.[0]?.items) {
        const items = response.tasks[0].result[0].items;
        const localPack = items.find(item => item.type === 'local_pack');

        console.log(`\n  "${keyword}":`);

        if (localPack && localPack.items) {
          console.log('    Local Pack Results:');
          localPack.items.slice(0, 5).forEach((item, i) => {
            const isUs = item.title?.toLowerCase().includes('best roofing') ? ' ← US?' : '';
            console.log(`      ${i + 1}. ${item.title}${isUs}`);
            console.log(`         Rating: ${item.rating || 'N/A'} (${item.reviews_count || 0} reviews)`);
          });
        } else {
          console.log('    No local pack found');
        }
      }
    } catch (e) {
      console.log(`  Error checking local pack for "${keyword}":`, e.message);
    }
  }
}

// Generate expanded report
function generateExpandedReport() {
  console.log('\n\n' + '='.repeat(70));
  console.log('📋 EXPANDED SEO ANALYSIS SUMMARY');
  console.log('='.repeat(70));

  // Keywords where we rank
  const rankedKeywords = Object.entries(results.serpResults)
    .filter(([_, data]) => data.ourPosition !== 'Not ranked')
    .sort((a, b) => a[1].ourPosition - b[1].ourPosition);

  console.log('\n✅ KEYWORDS WHERE WE RANK:');
  console.log('-'.repeat(40));
  if (rankedKeywords.length > 0) {
    rankedKeywords.forEach(([keyword, data]) => {
      console.log(`  #${data.ourPosition}: "${keyword}"`);
    });
  } else {
    console.log('  None found in top 20 for tested keywords');
  }

  // Keywords where we don't rank
  const notRankedKeywords = Object.entries(results.serpResults)
    .filter(([_, data]) => data.ourPosition === 'Not ranked')
    .map(([keyword]) => keyword);

  console.log('\n❌ KEYWORDS TO TARGET (Not in top 20):');
  console.log('-'.repeat(40));
  notRankedKeywords.forEach(keyword => {
    console.log(`  - ${keyword}`);
  });

  // Top competitors
  console.log('\n🎯 TOP LOCAL COMPETITORS TO ANALYZE:');
  console.log('-'.repeat(40));
  results.localCompetitors.slice(0, 10).forEach((comp, i) => {
    console.log(`  ${i + 1}. ${comp.domain} (${comp.appearances} keyword overlaps)`);
  });

  // Content gap opportunities
  console.log('\n📝 CONTENT OPPORTUNITIES (People Also Ask):');
  console.log('-'.repeat(40));
  const uniqueQuestions = [...new Set(results.contentGaps.map(c => c.question))];
  uniqueQuestions.slice(0, 10).forEach((q, i) => {
    console.log(`  ${i + 1}. ${q}`);
  });

  // High-value keyword suggestions
  console.log('\n💰 HIGH-VALUE KEYWORD SUGGESTIONS:');
  console.log('-'.repeat(40));
  const uniqueSuggestions = results.keywordSuggestions
    .filter((s, i, arr) => arr.findIndex(x => x.keyword === s.keyword) === i)
    .sort((a, b) => b.searchVolume - a.searchVolume);

  uniqueSuggestions.slice(0, 15).forEach((s, i) => {
    console.log(`  ${i + 1}. "${s.keyword}" - Vol: ${s.searchVolume}, CPC: $${s.cpc?.toFixed(2) || 'N/A'}`);
  });

  // Save results
  const outputPath = path.join(__dirname, 'seo-expanded-results.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log('\n💾 Full results saved to:', outputPath);
}

// Main execution
async function main() {
  console.log('🚀 Starting Expanded SEO Analysis for', TARGET_DOMAIN);
  console.log('Timestamp:', new Date().toISOString());
  console.log('Using DataForSEO API with Charlotte, NC location');
  console.log('='.repeat(60));

  await extendedSerpAnalysis();
  await getKeywordSuggestions();
  await getRelatedKeywords();
  await checkLocalPack();

  generateExpandedReport();

  console.log('\n✅ Expanded analysis complete!');
}

main().catch(console.error);
