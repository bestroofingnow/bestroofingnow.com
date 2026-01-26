const https = require('https');

const auth = Buffer.from('james@kynexpro.com:c239bdea18ad73af').toString('base64');

// Test different endpoints
const endpoints = [
  { name: 'Keywords Search Volume', path: '/v3/keywords_data/google_ads/search_volume/live' },
  { name: 'SERP Organic Live', path: '/v3/serp/google/organic/live' },
  { name: 'SERP Regular Live', path: '/v3/serp/google/organic/live/regular' },
  { name: 'DataForSEO Labs Ranked Keywords', path: '/v3/dataforseo_labs/google/ranked_keywords/live' },
  { name: 'DataForSEO Labs Domain Overview', path: '/v3/dataforseo_labs/google/domain_rank_overview/live' },
  { name: 'DataForSEO Labs Related Keywords', path: '/v3/dataforseo_labs/google/related_keywords/live' },
  { name: 'DataForSEO Labs Keyword Ideas', path: '/v3/dataforseo_labs/google/keyword_ideas/live' },
  { name: 'OnPage Summary', path: '/v3/on_page/summary' },
];

async function testEndpoint(name, path) {
  return new Promise((resolve) => {
    const testData = path.includes('keywords')
      ? JSON.stringify([{ keywords: ['test'], location_name: 'United States', language_name: 'English' }])
      : path.includes('serp')
      ? JSON.stringify([{ keyword: 'test', location_name: 'United States', language_name: 'English' }])
      : path.includes('domain') || path.includes('ranked')
      ? JSON.stringify([{ target: 'example.com', location_code: 2840, language_code: 'en' }])
      : JSON.stringify([{}]);

    const options = {
      hostname: 'api.dataforseo.com',
      path: path,
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
          const parsed = JSON.parse(data);
          resolve({
            name,
            path,
            status: res.statusCode,
            apiStatus: parsed.status_code,
            message: parsed.status_message,
            available: res.statusCode === 200 && parsed.status_code === 20000,
          });
        } catch {
          resolve({ name, path, status: res.statusCode, error: 'Parse error' });
        }
      });
    });

    req.on('error', e => resolve({ name, path, error: e.message }));
    req.write(testData);
    req.end();
  });
}

async function run() {
  console.log('Checking DataForSEO API endpoint availability...\n');
  console.log('═'.repeat(100));

  for (const ep of endpoints) {
    const result = await testEndpoint(ep.name, ep.path);
    const status = result.available ? '✅ AVAILABLE' : result.status === 404 ? '❌ NOT FOUND' : '⚠️  ' + (result.message || result.error);
    console.log(`${ep.name.padEnd(45)} | ${status}`);
    await new Promise(r => setTimeout(r, 200));
  }

  console.log('\n═'.repeat(100));
}

run();
