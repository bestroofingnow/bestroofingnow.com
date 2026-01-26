/**
 * SEO Rank Tracker for Best Roofing Now
 * Monitors rankings for top 50 keywords in Charlotte and Lake Norman areas
 * Uses DataForSEO API for daily ranking checks
 *
 * Usage: node scripts/seo-rank-tracker.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// DataForSEO credentials
const auth = Buffer.from('james@kynexpro.com:c239bdea18ad73af').toString('base64');
const TARGET_DOMAIN = 'bestroofingnow.com';

// Top 50 Priority Keywords for Charlotte and Lake Norman
const TOP_50_KEYWORDS = {
  // TIER 1: Charlotte Core (Highest Volume)
  'CHARLOTTE_CORE': [
    'roofing charlotte nc',
    'roofers charlotte nc',
    'roofing company charlotte nc',
    'roofing contractor charlotte nc',
    'roof repair charlotte nc',
    'roof replacement charlotte nc',
    'best roofing company charlotte nc',
    'roofing companies charlotte nc',
  ],

  // TIER 2: Charlotte Services
  'CHARLOTTE_SERVICES': [
    'commercial roofing charlotte nc',
    'residential roofing charlotte nc',
    'emergency roof repair charlotte nc',
    'storm damage roof repair charlotte nc',
    'metal roofing charlotte nc',
    'flat roof repair charlotte nc',
    'roof inspection charlotte nc',
    'gutter installation charlotte nc',
  ],

  // TIER 3: Lake Norman Core
  'LAKE_NORMAN_CORE': [
    'roofing huntersville nc',
    'roofing mooresville nc',
    'roofing cornelius nc',
    'roofing davidson nc',
    'roof repair huntersville nc',
    'roof replacement mooresville nc',
    'roofers huntersville nc',
    'roofers mooresville nc',
  ],

  // TIER 4: Surrounding Cities
  'SURROUNDING_CITIES': [
    'roofing concord nc',
    'roofing matthews nc',
    'roofing gastonia nc',
    'roofing mint hill nc',
    'roofing indian trail nc',
    'roof repair concord nc',
    'roof replacement gastonia nc',
    'roofers concord nc',
  ],

  // TIER 5: Commercial Keywords
  'COMMERCIAL': [
    'commercial roofing contractors charlotte nc',
    'industrial roofing charlotte nc',
    'warehouse roofing charlotte nc',
    'flat roof contractors charlotte nc',
    'tpo roofing charlotte nc',
    'commercial roof repair charlotte nc',
  ],

  // TIER 6: Long-Tail & Specialty
  'SPECIALTY': [
    'hail damage roof repair charlotte nc',
    'wind damage roof repair charlotte nc',
    'insurance claim roofing charlotte nc',
    'veteran owned roofing company charlotte nc',
    'best roofers near me charlotte',
    'affordable roofing charlotte nc',
    'roof leak repair charlotte nc',
    'new roof installation charlotte nc',
  ],
};

// Flatten keywords into a single array
const ALL_KEYWORDS = Object.values(TOP_50_KEYWORDS).flat();

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

async function getSERPPosition(keyword) {
  try {
    const response = await makeRequest('/v3/serp/google/organic/live/regular', [{
      keyword,
      location_name: 'Charlotte,North Carolina,United States',
      language_name: 'English',
      depth: 100,
    }]);

    if (response.tasks && response.tasks[0] && response.tasks[0].result) {
      const result = response.tasks[0].result[0];
      const items = result?.items || [];

      // Find our position
      const ourResult = items.find(item =>
        item.type === 'organic' &&
        (item.domain?.includes('bestroofingnow') || item.url?.includes('bestroofingnow'))
      );

      if (ourResult) {
        return {
          keyword,
          position: ourResult.rank_absolute || ourResult.rank_group,
          url: ourResult.url,
          title: ourResult.title,
          found: true,
          topCompetitors: items.filter(i => i.type === 'organic').slice(0, 5).map(i => ({
            position: i.rank_absolute,
            domain: i.domain,
            url: i.url,
          })),
        };
      } else {
        return {
          keyword,
          position: null,
          found: false,
          topCompetitors: items.filter(i => i.type === 'organic').slice(0, 5).map(i => ({
            position: i.rank_absolute,
            domain: i.domain,
            url: i.url,
          })),
        };
      }
    }
    return { keyword, position: null, found: false, error: 'No data' };
  } catch (err) {
    return { keyword, position: null, found: false, error: err.message };
  }
}

async function getKeywordMetrics(keywords) {
  try {
    const response = await makeRequest('/v3/keywords_data/google_ads/search_volume/live', [{
      keywords,
      location_code: 1013962, // Charlotte DMA
      language_code: 'en',
    }]);

    if (response.tasks && response.tasks[0] && response.tasks[0].result) {
      return response.tasks[0].result.map(r => ({
        keyword: r.keyword,
        searchVolume: r.search_volume,
        competition: r.competition,
        cpc: r.cpc,
      }));
    }
    return [];
  } catch (err) {
    console.error('Error getting keyword metrics:', err.message);
    return [];
  }
}

async function runDailyCheck() {
  const timestamp = new Date().toISOString();
  const dateStr = timestamp.split('T')[0];

  console.log('╔' + '═'.repeat(98) + '╗');
  console.log('║' + ' '.repeat(25) + 'DAILY SEO RANK CHECK' + ' '.repeat(53) + '║');
  console.log('║' + ' '.repeat(25) + `bestroofingnow.com | ${dateStr}` + ' '.repeat(40) + '║');
  console.log('╚' + '═'.repeat(98) + '╝\n');

  const results = {
    timestamp,
    totalKeywords: ALL_KEYWORDS.length,
    rankings: [],
    summary: {
      top3: 0,
      top10: 0,
      top20: 0,
      top50: 0,
      notRanking: 0,
    },
    improvements: [],
    priorities: [],
  };

  // Check rankings for each keyword
  console.log('Checking rankings for', ALL_KEYWORDS.length, 'keywords...\n');

  for (const [category, keywords] of Object.entries(TOP_50_KEYWORDS)) {
    console.log(`\n━━━ ${category} ━━━\n`);

    for (const keyword of keywords) {
      process.stdout.write(`  ${keyword.padEnd(50)}`);

      const result = await getSERPPosition(keyword);
      results.rankings.push({ ...result, category });

      if (result.found) {
        const pos = result.position;
        console.log(`#${pos.toString().padStart(3)} ✅`);

        if (pos <= 3) results.summary.top3++;
        if (pos <= 10) results.summary.top10++;
        if (pos <= 20) results.summary.top20++;
        if (pos <= 50) results.summary.top50++;

        // Identify improvement opportunities
        if (pos > 3 && pos <= 10) {
          results.improvements.push({
            keyword,
            currentPos: pos,
            targetPos: 3,
            priority: 'HIGH',
            action: 'Optimize content, add internal links, build backlinks',
          });
        } else if (pos > 10 && pos <= 20) {
          results.improvements.push({
            keyword,
            currentPos: pos,
            targetPos: 10,
            priority: 'MEDIUM',
            action: 'Improve page content, add FAQs, enhance schema markup',
          });
        }
      } else {
        console.log(`Not in top 100 ❌`);
        results.summary.notRanking++;

        results.priorities.push({
          keyword,
          priority: 'CRITICAL',
          action: 'Create or significantly improve dedicated landing page',
          topCompetitors: result.topCompetitors,
        });
      }

      // Rate limiting
      await new Promise(r => setTimeout(r, 500));
    }
  }

  // Summary
  console.log('\n' + '═'.repeat(100));
  console.log('SUMMARY');
  console.log('═'.repeat(100));
  console.log(`
  📊 RANKING DISTRIBUTION:
     • Top 3:      ${results.summary.top3} keywords
     • Top 10:     ${results.summary.top10} keywords
     • Top 20:     ${results.summary.top20} keywords
     • Top 50:     ${results.summary.top50} keywords
     • Not Ranking: ${results.summary.notRanking} keywords

  🎯 SCORE: ${Math.round((results.summary.top10 / results.totalKeywords) * 100)}% of keywords in top 10
  `);

  // High-Priority Improvements
  if (results.improvements.length > 0) {
    console.log('\n📈 HIGH-PRIORITY IMPROVEMENTS:');
    results.improvements.slice(0, 10).forEach((imp, i) => {
      console.log(`   ${i + 1}. "${imp.keyword}" - Position ${imp.currentPos} → Target: ${imp.targetPos}`);
      console.log(`      Action: ${imp.action}`);
    });
  }

  // Critical Keywords Not Ranking
  if (results.priorities.length > 0) {
    console.log('\n🚨 CRITICAL - KEYWORDS NOT RANKING:');
    results.priorities.slice(0, 10).forEach((p, i) => {
      console.log(`   ${i + 1}. "${p.keyword}"`);
      const topCompetitor = p.topCompetitors && p.topCompetitors[0] ? p.topCompetitors[0].domain : 'N/A';
      console.log(`      Top competitor: ${topCompetitor}`);
    });
  }

  // Save results
  const outputPath = path.join(__dirname, `rank-check-${dateStr}.json`);
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`\n📁 Full results saved to: ${outputPath}`);

  // Generate improvement tasks
  generateImprovementTasks(results);

  return results;
}

function generateImprovementTasks(results) {
  const tasksPath = path.join(__dirname, 'seo-improvement-tasks.md');
  const dateStr = new Date().toISOString().split('T')[0];

  let tasks = `# SEO Improvement Tasks - ${dateStr}

## Current Status
- **Keywords Tracked:** ${results.totalKeywords}
- **In Top 10:** ${results.summary.top10} (${Math.round((results.summary.top10 / results.totalKeywords) * 100)}%)
- **In Top 3:** ${results.summary.top3}
- **Not Ranking:** ${results.summary.notRanking}

## Priority Actions

### CRITICAL - Create/Optimize Pages
${results.priorities.slice(0, 10).map((p, i) => `
${i + 1}. **${p.keyword}**
   - Status: Not ranking in top 100
   - Top competitor: ${p.topCompetitors[0]?.domain || 'Unknown'}
   - Action: Create comprehensive landing page with 2000+ words, FAQs, schema markup
`).join('')}

### HIGH - Improve to Top 3
${results.improvements.filter(i => i.priority === 'HIGH').slice(0, 10).map((imp, i) => `
${i + 1}. **${imp.keyword}** (Position ${imp.currentPos})
   - Target: Top 3
   - Actions:
     - Add more relevant content
     - Improve internal linking
     - Build quality backlinks
     - Enhance schema markup
`).join('')}

### MEDIUM - Improve to Top 10
${results.improvements.filter(i => i.priority === 'MEDIUM').slice(0, 10).map((imp, i) => `
${i + 1}. **${imp.keyword}** (Position ${imp.currentPos})
   - Target: Top 10
   - Actions:
     - Expand content with more detail
     - Add FAQs and "People Also Ask" content
     - Improve page load speed
     - Add more internal links
`).join('')}

## Next Check
Run this script daily to track progress:
\`\`\`bash
node scripts/seo-rank-tracker.js
\`\`\`
`;

  fs.writeFileSync(tasksPath, tasks);
  console.log(`\n📋 Improvement tasks saved to: ${tasksPath}`);
}

// Check if we should compare to previous results
async function compareWithPrevious(currentResults) {
  const scriptsDir = __dirname;
  const files = fs.readdirSync(scriptsDir).filter(f => f.startsWith('rank-check-') && f.endsWith('.json'));

  if (files.length < 2) return null;

  // Sort by date and get the previous one
  files.sort().reverse();
  const previousFile = files[1]; // Second most recent

  try {
    const previousResults = JSON.parse(fs.readFileSync(path.join(scriptsDir, previousFile), 'utf8'));

    const changes = {
      improved: [],
      declined: [],
      newRankings: [],
      lostRankings: [],
    };

    currentResults.rankings.forEach(current => {
      const previous = previousResults.rankings.find(p => p.keyword === current.keyword);

      if (previous) {
        if (current.found && previous.found) {
          const diff = previous.position - current.position;
          if (diff > 0) {
            changes.improved.push({ keyword: current.keyword, from: previous.position, to: current.position, diff });
          } else if (diff < 0) {
            changes.declined.push({ keyword: current.keyword, from: previous.position, to: current.position, diff: Math.abs(diff) });
          }
        } else if (current.found && !previous.found) {
          changes.newRankings.push({ keyword: current.keyword, position: current.position });
        } else if (!current.found && previous.found) {
          changes.lostRankings.push({ keyword: current.keyword, previousPosition: previous.position });
        }
      }
    });

    return changes;
  } catch (err) {
    return null;
  }
}

// Main execution
runDailyCheck().then(results => {
  compareWithPrevious(results).then(changes => {
    if (changes) {
      console.log('\n' + '═'.repeat(100));
      console.log('CHANGES SINCE LAST CHECK');
      console.log('═'.repeat(100));

      if (changes.improved.length > 0) {
        console.log('\n✅ IMPROVED:');
        changes.improved.forEach(c => console.log(`   "${c.keyword}": ${c.from} → ${c.to} (+${c.diff} positions)`));
      }

      if (changes.declined.length > 0) {
        console.log('\n⚠️ DECLINED:');
        changes.declined.forEach(c => console.log(`   "${c.keyword}": ${c.from} → ${c.to} (-${c.diff} positions)`));
      }

      if (changes.newRankings.length > 0) {
        console.log('\n🆕 NEW RANKINGS:');
        changes.newRankings.forEach(c => console.log(`   "${c.keyword}": Now #${c.position}`));
      }

      if (changes.lostRankings.length > 0) {
        console.log('\n❌ LOST RANKINGS:');
        changes.lostRankings.forEach(c => console.log(`   "${c.keyword}": Was #${c.previousPosition}, now not in top 100`));
      }
    }
  });
}).catch(console.error);
