const https = require('https');

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

// Get related keywords for high-value terms
const seedKeywords = [
  'roofing charlotte nc',
  'roof repair charlotte',
  'roof replacement charlotte',
  'roofing lake norman',
  'gutter installation charlotte'
];

const postData = JSON.stringify([{
  keywords: seedKeywords,
  location_name: 'Charlotte,North Carolina,United States',
  language_name: 'English',
  include_seed_keyword: true,
  limit: 100
}]);

const options = {
  hostname: 'api.dataforseo.com',
  path: '/v3/keywords_data/google_ads/keywords_for_keywords/live',
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
      console.log('RELATED KEYWORD OPPORTUNITIES:\n');
      console.log('='.repeat(80));

      // Filter for roofing-related and Charlotte/NC area
      const relevantKeywords = keywordData.filter(kw => {
        const keyword = kw.keyword.toLowerCase();
        return (keyword.includes('roof') || keyword.includes('gutter') || keyword.includes('shingle')) &&
               (keyword.includes('charlotte') || keyword.includes('nc') || keyword.includes('lake norman') ||
                keyword.includes('mooresville') || keyword.includes('huntersville') || keyword.includes('cornelius') ||
                keyword.includes('davidson') || keyword.includes('denver'));
      });

      relevantKeywords.slice(0, 50).forEach(kw => {
        if (kw.search_volume > 0) {
          const competition = kw.competition || 'N/A';
          const cpc = kw.cpc ? '$' + kw.cpc.toFixed(2) : 'N/A';
          console.log(`${kw.keyword}`);
          console.log(`  Volume: ${kw.search_volume}/mo | Competition: ${competition} | CPC: ${cpc}`);
          console.log('');
        }
      });
      console.log('\n' + '='.repeat(80));
      console.log(`Total relevant keywords: ${relevantKeywords.filter(k => k.search_volume > 0).length}`);
    } else {
      console.log('Response:');
      console.log(JSON.stringify(result, null, 2));
    }
  });
});

req.on('error', e => console.error('Request error:', e));
req.write(postData);
req.end();
