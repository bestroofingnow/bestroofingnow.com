const https = require('https');

const auth = Buffer.from('james@bestroofingnow.com:a3a032cad088f3c4').toString('base64');

// Target keywords for all focus areas
const targetKeywords = [
  // Charlotte core roofing
  'roofing charlotte nc',
  'roofers charlotte nc',
  'roofing contractor charlotte nc',
  'roofing company charlotte nc',
  'roof repair charlotte nc',
  'roof replacement charlotte nc',
  'roof inspection charlotte nc',
  'new roof charlotte nc',
  'roofing near me charlotte',

  // Lake Norman
  'roofing lake norman',
  'roofers lake norman',
  'roofing contractor lake norman',
  'roof repair lake norman',

  // Huntersville
  'roofing huntersville nc',
  'roofers huntersville nc',
  'roofing contractor huntersville',
  'roof repair huntersville nc',

  // Concord
  'roofing concord nc',
  'roofers concord nc',
  'roofing contractor concord nc',
  'roof repair concord nc',

  // Mooresville
  'roofing mooresville nc',
  'roofers mooresville nc',
  'roofing contractor mooresville',
  'roof repair mooresville nc',

  // Cornelius
  'roofing cornelius nc',
  'roofers cornelius nc',
  'roofing contractor cornelius',
  'roof repair cornelius nc',

  // Commercial roofing Charlotte
  'commercial roofing charlotte nc',
  'commercial roofers charlotte',
  'commercial roofing contractor charlotte',
  'flat roof repair charlotte nc',
  'tpo roofing charlotte nc',
  'epdm roofing charlotte',
  'commercial roof replacement charlotte',
  'industrial roofing charlotte nc',

  // Service-specific Charlotte
  'storm damage roof repair charlotte',
  'hail damage roof charlotte nc',
  'emergency roof repair charlotte',
  'roof leak repair charlotte nc',
  'gutter installation charlotte nc',
  'metal roofing charlotte nc',
  'shingle roof charlotte nc',
  'roof inspection near me',
  'free roof inspection charlotte',
];

const postData = JSON.stringify([{
  keywords: targetKeywords,
  location_name: 'Charlotte,North Carolina,United States',
  language_name: 'English',
}]);

const options = {
  hostname: 'api.dataforseo.com',
  path: '/v3/keywords_data/google_ads/search_volume/live',
  method: 'POST',
  headers: {
    'Authorization': 'Basic ' + auth,
    'Content-Type': 'application/json'
  }
};

console.log('Fetching keyword data from DataForSEO...\n');

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const result = JSON.parse(data);
      if (result.tasks && result.tasks[0] && result.tasks[0].result) {
        const keywords = result.tasks[0].result;

        // Sort by search volume (highest first)
        keywords.sort((a, b) => (b.search_volume || 0) - (a.search_volume || 0));

        console.log('='.repeat(100));
        console.log('TOP 100 ROOFING KEYWORDS - CHARLOTTE & SURROUNDING AREAS');
        console.log('Focus: Charlotte, Lake Norman, Huntersville, Concord, Mooresville, Cornelius');
        console.log('='.repeat(100));

        // Group by category
        const categories = {
          'CHARLOTTE CORE': [],
          'LAKE NORMAN': [],
          'HUNTERSVILLE': [],
          'CONCORD': [],
          'MOORESVILLE': [],
          'CORNELIUS': [],
          'COMMERCIAL': [],
          'SERVICES': [],
        };

        keywords.forEach(kw => {
          if (!kw.keyword) return;
          const keyword = kw.keyword.toLowerCase();

          if (keyword.includes('commercial') || keyword.includes('tpo') || keyword.includes('epdm') ||
              keyword.includes('flat roof') || keyword.includes('industrial')) {
            categories['COMMERCIAL'].push(kw);
          } else if (keyword.includes('lake norman')) {
            categories['LAKE NORMAN'].push(kw);
          } else if (keyword.includes('huntersville')) {
            categories['HUNTERSVILLE'].push(kw);
          } else if (keyword.includes('concord')) {
            categories['CONCORD'].push(kw);
          } else if (keyword.includes('mooresville')) {
            categories['MOORESVILLE'].push(kw);
          } else if (keyword.includes('cornelius')) {
            categories['CORNELIUS'].push(kw);
          } else if (keyword.includes('storm') || keyword.includes('hail') || keyword.includes('emergency') ||
                     keyword.includes('leak') || keyword.includes('gutter') || keyword.includes('metal') ||
                     keyword.includes('shingle') || keyword.includes('inspection')) {
            categories['SERVICES'].push(kw);
          } else if (keyword.includes('charlotte')) {
            categories['CHARLOTTE CORE'].push(kw);
          }
        });

        // Print each category
        let rank = 1;
        Object.entries(categories).forEach(([category, kws]) => {
          if (kws.length > 0) {
            console.log(`\n${'#'.repeat(3)} ${category} ${'#'.repeat(3)}\n`);
            kws.forEach(kw => {
              const volume = kw.search_volume || 0;
              const competition = kw.competition || 'N/A';
              const cpc = kw.cpc ? '$' + kw.cpc.toFixed(2) : 'N/A';
              const competitionIndex = kw.competition_index || 0;

              console.log(`${rank.toString().padStart(3)}. ${kw.keyword}`);
              console.log(`     Volume: ${volume}/mo | Competition: ${competition} (${competitionIndex}) | CPC: ${cpc}`);
              rank++;
            });
          }
        });

        // Summary stats
        console.log('\n' + '='.repeat(100));
        console.log('SUMMARY');
        console.log('='.repeat(100));
        console.log(`Total keywords analyzed: ${keywords.length}`);

        const highVolume = keywords.filter(k => (k.search_volume || 0) >= 100);
        console.log(`High volume keywords (100+/mo): ${highVolume.length}`);

        const lowCompetition = keywords.filter(k => k.competition === 'LOW' || k.competition_index < 30);
        console.log(`Low competition opportunities: ${lowCompetition.length}`);

        // Top 10 opportunities (high volume + low competition)
        console.log('\n### TOP OPPORTUNITIES (High Volume + Low Competition) ###\n');
        const opportunities = keywords
          .filter(k => (k.search_volume || 0) >= 50 && (k.competition_index < 50 || k.competition === 'LOW'))
          .slice(0, 20);

        opportunities.forEach((kw, i) => {
          const volume = kw.search_volume || 0;
          const cpc = kw.cpc ? '$' + kw.cpc.toFixed(2) : 'N/A';
          console.log(`${(i+1).toString().padStart(2)}. ${kw.keyword} - ${volume}/mo - CPC: ${cpc}`);
        });

        // Export as JSON for processing
        const exportData = {
          timestamp: new Date().toISOString(),
          total: keywords.length,
          keywords: keywords.map(kw => ({
            keyword: kw.keyword,
            volume: kw.search_volume || 0,
            competition: kw.competition,
            competitionIndex: kw.competition_index || 0,
            cpc: kw.cpc || 0,
          }))
        };

        require('fs').writeFileSync(
          require('path').join(__dirname, 'top-100-keywords.json'),
          JSON.stringify(exportData, null, 2)
        );
        console.log('\nKeyword data exported to scripts/top-100-keywords.json');

      } else {
        console.log('Error or no results:');
        console.log(JSON.stringify(result, null, 2));
      }
    } catch (e) {
      console.error('Parse error:', e);
      console.log('Raw response:', data);
    }
  });
});

req.on('error', e => console.error('Request error:', e));
req.write(postData);
req.end();
