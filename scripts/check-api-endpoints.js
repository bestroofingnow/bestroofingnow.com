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

const endpoints = [
  { name: 'Keywords Search Volume', path: '/v3/keywords_data/google_ads/search_volume/live' },
  { name: 'SERP Organic Live Advanced', path: '/v3/serp/google/organic/live/advanced' },
  { name: 'SERP Regular Live', path: '/v3/serp/google/organic/live/regular' },
  { name: 'DataForSEO Labs Ranked Keywords', path: '/v3/dataforseo_labs/google/ranked_keywords/live' },
  { name: 'DataForSEO Labs Domain Overview', path: '/v3/dataforseo_labs/google/domain_rank_overview/live' },
  { name: 'DataForSEO Labs Related Keywords', path: '/v3/dataforseo_labs/google/related_keywords/live' },
  { name: 'DataForSEO Labs Keyword Ideas', path: '/v3/dataforseo_labs/google/keyword_ideas/live' },
  { name: 'OnPage Lighthouse Live JSON', path: '/v3/on_page/lighthouse/live/json' },
];

async function testEndpoint(name, endpointPath) {
  return new Promise((resolve) => {
    const testData = endpointPath.includes('ranked_keywords') || endpointPath.includes('domain_rank_overview')
      ? JSON.stringify([{ target: 'example.com', location_code: 2840, language_code: 'en' }])
      : endpointPath.includes('keyword_ideas')
        ? JSON.stringify([{ keywords: ['roof repair'], location_code: 2840, language_code: 'en', limit: 1 }])
        : endpointPath.includes('related_keywords')
        ? JSON.stringify([{ keyword: 'roof repair', location_code: 2840, language_code: 'en', limit: 1 }])
        : endpointPath.includes('keywords_data')
          ? JSON.stringify([{ keywords: ['test'], location_name: 'United States', language_name: 'English' }])
          : endpointPath.includes('serp')
            ? JSON.stringify([{ keyword: 'test', location_name: 'United States', language_name: 'English' }])
            : endpointPath.includes('lighthouse')
              ? JSON.stringify([{ url: 'https://example.com/', for_mobile: false, categories: ['seo'] }])
              : JSON.stringify([{}]);

    const req = https.request({
      hostname: 'api.dataforseo.com',
      path: endpointPath,
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + auth,
        'Content-Type': 'application/json',
      },
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve({
            name,
            path: endpointPath,
            status: res.statusCode,
            apiStatus: parsed.status_code,
            taskStatus: parsed.tasks?.[0]?.status_code,
            message: parsed.tasks?.[0]?.status_message || parsed.status_message,
            available: res.statusCode === 200 && parsed.status_code === 20000 && parsed.tasks?.[0]?.status_code === 20000,
          });
        } catch {
          resolve({ name, path: endpointPath, status: res.statusCode, error: 'Parse error' });
        }
      });
    });

    req.on('error', e => resolve({ name, path: endpointPath, error: e.message }));
    req.write(testData);
    req.end();
  });
}

async function run() {
  console.log('Checking DataForSEO API endpoint availability...\n');
  console.log('='.repeat(100));

  for (const endpoint of endpoints) {
    const result = await testEndpoint(endpoint.name, endpoint.path);
    const status = result.available ? 'AVAILABLE' : result.status === 404 ? 'NOT FOUND' : 'WARNING: ' + (result.message || result.error);
    const code = result.taskStatus || result.apiStatus || result.status || '';
    console.log(`${endpoint.name.padEnd(45)} | ${status}${code ? ` (${code})` : ''}`);
    await new Promise(resolve => setTimeout(resolve, 200));
  }

  console.log('\n' + '='.repeat(100));
}

run();
