const https = require('https');

const auth = Buffer.from('james@kynexpro.com:c239bdea18ad73af').toString('base64');

// Comprehensive seed keywords for roofing market
const seedKeywords = [
  'roofing',
  'roof repair',
  'roof replacement',
  'roofers',
  'roofing contractor',
  'gutter installation',
  'storm damage roof',
  'metal roofing',
  'roof inspection',
  'emergency roof repair',
  'commercial roofing',
  'residential roofing',
  'roof leak',
  'shingle roof',
  'flat roof',
];

// All cities/areas to target
const locations = [
  'charlotte nc',
  'charlotte',
  'huntersville nc',
  'cornelius nc',
  'davidson nc',
  'mooresville nc',
  'matthews nc',
  'mint hill nc',
  'pineville nc',
  'concord nc',
  'gastonia nc',
  'fort mill sc',
  'rock hill sc',
  'indian trail nc',
  'denver nc',
  'lake norman',
  'ballantyne',
  'southpark',
  'myers park',
  'dilworth',
  'plaza midwood',
  'university city',
];

// Generate all keyword combinations
const allKeywords = [];
seedKeywords.forEach(seed => {
  locations.forEach(loc => {
    allKeywords.push(`${seed} ${loc}`);
    allKeywords.push(`${seed} near ${loc}`);
  });
});

// Add more specific service keywords
const specificServices = [
  'asphalt shingle installation',
  'architectural shingles',
  'metal roof installation',
  'standing seam metal roof',
  'TPO roofing',
  'EPDM roofing',
  'flat roof repair',
  'slate roof repair',
  'tile roof',
  'cedar shake roof',
  'roof coating',
  'roof cleaning',
  'moss removal',
  'gutter guards',
  'gutter cleaning',
  'gutter repair',
  'downspout installation',
  'fascia repair',
  'soffit repair',
  'roof ventilation',
  'attic ventilation',
  'ridge vent installation',
  'skylight installation',
  'skylight repair',
  'chimney flashing',
  'roof flashing',
  'roof valley repair',
  'ice dam prevention',
  'hail damage repair',
  'wind damage repair',
  'storm damage restoration',
  'insurance claim roofer',
  'roof financing',
  'free roof inspection',
  'roof estimate',
  'new roof cost',
  'roof replacement cost',
  'best roofer',
  'licensed roofer',
  'insured roofer',
  'veteran owned roofer',
  'local roofer',
  'affordable roofer',
  'quality roofer',
  '24 hour roof repair',
  'emergency tarp service',
  'roof leak detection',
  'roof moisture survey',
  'infrared roof inspection',
];

specificServices.forEach(service => {
  allKeywords.push(`${service} charlotte nc`);
  allKeywords.push(`${service} charlotte`);
});

// Get unique keywords (first 700 due to API limits)
const uniqueKeywords = [...new Set(allKeywords)].slice(0, 700);

console.log(`Analyzing ${uniqueKeywords.length} keywords...\n`);

const postData = JSON.stringify([{
  keywords: uniqueKeywords,
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

      // Filter keywords with search volume
      const withVolume = keywordData.filter(k => k.search_volume > 0);

      // Sort by search volume
      withVolume.sort((a, b) => (b.search_volume || 0) - (a.search_volume || 0));

      console.log('='.repeat(100));
      console.log(`KEYWORDS WITH SEARCH VOLUME: ${withVolume.length}`);
      console.log('='.repeat(100));

      // Group by volume
      const highVolume = withVolume.filter(k => k.search_volume >= 100);
      const mediumVolume = withVolume.filter(k => k.search_volume >= 20 && k.search_volume < 100);
      const lowVolume = withVolume.filter(k => k.search_volume >= 10 && k.search_volume < 20);

      console.log(`\nHigh Volume (100+): ${highVolume.length} keywords`);
      console.log(`Medium Volume (20-99): ${mediumVolume.length} keywords`);
      console.log(`Low Volume (10-19): ${lowVolume.length} keywords`);

      console.log('\n## HIGH VOLUME KEYWORDS (100+ monthly searches) ##\n');
      highVolume.forEach(k => {
        console.log(`${k.keyword} | Vol: ${k.search_volume} | Comp: ${k.competition || 'N/A'}`);
      });

      console.log('\n## MEDIUM VOLUME KEYWORDS (20-99 monthly searches) ##\n');
      mediumVolume.slice(0, 100).forEach(k => {
        console.log(`${k.keyword} | Vol: ${k.search_volume} | Comp: ${k.competition || 'N/A'}`);
      });

      console.log('\n## LOW VOLUME KEYWORDS (10-19 monthly searches) ##\n');
      lowVolume.slice(0, 50).forEach(k => {
        console.log(`${k.keyword} | Vol: ${k.search_volume} | Comp: ${k.competition || 'N/A'}`);
      });

      // Calculate total potential pages
      console.log('\n' + '='.repeat(100));
      console.log('PAGE OPPORTUNITY ANALYSIS');
      console.log('='.repeat(100));
      console.log(`\nTotal keywords with volume: ${withVolume.length}`);
      console.log(`Estimated unique page opportunities: ${Math.ceil(withVolume.length * 0.8)}`);
      console.log(`Total monthly search volume potential: ${withVolume.reduce((sum, k) => sum + k.search_volume, 0)}`);

    } else {
      console.log('Error:', JSON.stringify(result, null, 2));
    }
  });
});

req.on('error', e => console.error('Request error:', e));
req.write(postData);
req.end();
