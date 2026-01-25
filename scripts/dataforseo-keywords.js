const https = require('https');

const auth = Buffer.from('james@bestroofingnow.com:a3a032cad088f3c4').toString('base64');

// Keywords to research for search volume and competition
const keywords = [
  // Service + City combinations - Charlotte area
  'roof repair charlotte nc',
  'roof replacement charlotte nc',
  'roofing company charlotte nc',
  'roofers charlotte nc',
  'best roofers charlotte nc',
  'roof repair near me charlotte',
  'affordable roofing charlotte nc',

  // Lake Norman cities
  'roofing company cornelius nc',
  'roofing contractor mooresville nc',
  'roof repair huntersville nc',
  'roofing company davidson nc',
  'roof replacement lake norman',
  'roofers lake norman nc',
  'roofing denver nc',
  'roof repair sherrills ford nc',

  // Emergency and storm
  'emergency roof repair charlotte',
  'storm damage roof repair charlotte',
  'hail damage roof repair charlotte nc',
  'wind damage roof repair charlotte',
  '24 hour roof repair charlotte',

  // Service specific
  'roof inspection charlotte nc',
  'roof leak repair charlotte nc',
  'gutter installation charlotte nc',
  'gutter repair charlotte nc',
  'skylight installation charlotte nc',
  'roof maintenance charlotte nc',

  // Commercial
  'commercial roofing charlotte nc',
  'flat roof repair charlotte nc',
  'tpo roofing charlotte nc',
  'epdm roofing charlotte nc',

  // Materials
  'metal roofing charlotte nc',
  'standing seam metal roof charlotte',
  'asphalt shingle roofing charlotte',
  'architectural shingles charlotte nc',
  'slate roofing charlotte nc',
  'tile roofing charlotte nc',

  // Neighborhoods
  'roofing ballantyne nc',
  'roof repair south charlotte',
  'roofing company myers park',
  'roof replacement dilworth',
  'roofers plaza midwood',
  'roofing noda charlotte',
  'roof repair uptown charlotte',

  // Specific services
  'new roof installation charlotte nc',
  'roof replacement cost charlotte',
  'free roof inspection charlotte',
  'insurance claim roofing charlotte',
  'roof financing charlotte nc'
];

const postData = JSON.stringify([{
  keywords: keywords,
  location_name: 'Charlotte,North Carolina,United States',
  language_name: 'English'
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

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const result = JSON.parse(data);
    if (result.tasks && result.tasks[0] && result.tasks[0].result) {
      const keywordData = result.tasks[0].result;
      // Sort by search volume
      keywordData.sort((a, b) => (b.search_volume || 0) - (a.search_volume || 0));
      console.log('TOP KEYWORD OPPORTUNITIES BY SEARCH VOLUME:\n');
      console.log('='.repeat(80));
      keywordData.forEach(kw => {
        if (kw.search_volume > 0) {
          const competition = kw.competition || 'N/A';
          const cpc = kw.cpc ? '$' + kw.cpc.toFixed(2) : 'N/A';
          console.log(`${kw.keyword}`);
          console.log(`  Volume: ${kw.search_volume}/mo | Competition: ${competition} | CPC: ${cpc}`);
          console.log('');
        }
      });
      console.log('\n='.repeat(80));
      console.log(`Total keywords with volume: ${keywordData.filter(k => k.search_volume > 0).length}`);
    } else {
      console.log('Error or unexpected response:');
      console.log(JSON.stringify(result, null, 2));
    }
  });
});

req.on('error', e => console.error('Request error:', e));
req.write(postData);
req.end();
