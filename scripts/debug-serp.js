const https = require('https');

const auth = Buffer.from('james@kynexpro.com:c239bdea18ad73af').toString('base64');

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
