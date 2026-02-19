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

const postData = JSON.stringify([{
  keyword: 'roofing charlotte nc',
  location_name: 'Charlotte,North Carolina,United States',
  language_name: 'English',
  depth: 20,
}]);

const options = {
  hostname: 'api.dataforseo.com',
  path: '/v3/serp/google/organic/live',
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
    console.log('Status:', res.statusCode);
    console.log('\nFull Response:\n');
    const parsed = JSON.parse(data);
    console.log(JSON.stringify(parsed, null, 2));
  });
});

req.on('error', e => console.error('Error:', e));
req.write(postData);
req.end();
