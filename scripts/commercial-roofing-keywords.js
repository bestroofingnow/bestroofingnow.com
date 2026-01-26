const https = require('https');

const auth = Buffer.from('james@kynexpro.com:c239bdea18ad73af').toString('base64');

// NC and SC cities to target
const cities = [
  // Major NC cities
  { city: 'Charlotte', state: 'NC', location: 'Charlotte,North Carolina,United States' },
  { city: 'Raleigh', state: 'NC', location: 'Raleigh,North Carolina,United States' },
  { city: 'Greensboro', state: 'NC', location: 'Greensboro,North Carolina,United States' },
  { city: 'Winston-Salem', state: 'NC', location: 'Winston-Salem,North Carolina,United States' },
  { city: 'Durham', state: 'NC', location: 'Durham,North Carolina,United States' },
  { city: 'Fayetteville', state: 'NC', location: 'Fayetteville,North Carolina,United States' },
  { city: 'Gastonia', state: 'NC', location: 'Gastonia,North Carolina,United States' },
  { city: 'Concord', state: 'NC', location: 'Concord,North Carolina,United States' },
  { city: 'Mooresville', state: 'NC', location: 'Mooresville,North Carolina,United States' },
  { city: 'Huntersville', state: 'NC', location: 'Huntersville,North Carolina,United States' },
  // SC cities
  { city: 'Rock Hill', state: 'SC', location: 'Rock Hill,South Carolina,United States' },
  { city: 'Fort Mill', state: 'SC', location: 'Fort Mill,South Carolina,United States' },
  { city: 'Columbia', state: 'SC', location: 'Columbia,South Carolina,United States' },
  { city: 'Greenville', state: 'SC', location: 'Greenville,South Carolina,United States' },
  { city: 'Spartanburg', state: 'SC', location: 'Spartanburg,South Carolina,United States' },
];

// Commercial roofing keyword templates
const keywordTemplates = [
  // Commercial roofing general
  'commercial roofing {city} {state}',
  'commercial roofing contractors {city}',
  'commercial roofing company {city} {state}',
  'commercial roofers {city} {state}',
  'commercial roof repair {city}',
  'commercial roof replacement {city} {state}',
  'commercial roofing services {city}',

  // Industrial roofing
  'industrial roofing {city} {state}',
  'industrial roof repair {city}',
  'industrial roofing contractors {city}',
  'warehouse roofing {city} {state}',
  'factory roofing {city}',
  'manufacturing plant roofing {city}',

  // Flat roof specific
  'flat roof repair {city} {state}',
  'flat roof replacement {city}',
  'flat roofing contractors {city}',
  'flat roof installation {city} {state}',
  'flat roof coating {city}',

  // Material specific commercial
  'tpo roofing {city} {state}',
  'tpo roof installation {city}',
  'tpo roof repair {city}',
  'epdm roofing {city} {state}',
  'epdm roof repair {city}',
  'pvc roofing {city} {state}',
  'metal roofing commercial {city}',
  'standing seam metal roof commercial {city}',
  'built-up roofing {city}',
  'modified bitumen roofing {city}',
  'spray foam roofing {city} {state}',
  'roof coating {city} {state}',
  'silicone roof coating {city}',

  // Building types
  'office building roofing {city}',
  'retail building roofing {city}',
  'shopping center roofing {city}',
  'strip mall roofing {city}',
  'restaurant roofing {city}',
  'hotel roofing {city} {state}',
  'apartment complex roofing {city}',
  'multi-family roofing {city}',
  'church roofing {city} {state}',
  'school roofing {city}',
  'medical building roofing {city}',
  'healthcare facility roofing {city}',

  // Services
  'commercial roof inspection {city}',
  'commercial roof maintenance {city}',
  'commercial roof leak repair {city}',
  'emergency commercial roofing {city}',
  'commercial storm damage roofing {city}',
  'commercial roof warranty {city}',

  // Cost/price queries
  'commercial roofing cost {city}',
  'commercial roof replacement cost {city}',
  'tpo roofing cost {city}',
  'flat roof cost {city}',
];

// Generate all keywords for all cities
function generateKeywords(cities, templates) {
  const allKeywords = [];
  cities.forEach(({ city, state }) => {
    templates.forEach(template => {
      const keyword = template
        .replace('{city}', city)
        .replace('{state}', state);
      allKeywords.push(keyword);
    });
  });
  return allKeywords;
}

// Research keywords for a specific location
async function researchKeywords(keywords, location) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify([{
      keywords: keywords,
      location_name: location,
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
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

// Main execution
async function main() {
  console.log('='.repeat(100));
  console.log('COMMERCIAL & INDUSTRIAL ROOFING KEYWORD RESEARCH - NC & SC');
  console.log('='.repeat(100));
  console.log('');

  // Research Charlotte area first (main target)
  const charlotteKeywords = keywordTemplates.map(t =>
    t.replace('{city}', 'Charlotte').replace('{state}', 'NC')
  );

  console.log(`Researching ${charlotteKeywords.length} commercial roofing keywords for Charlotte NC...`);

  try {
    const result = await researchKeywords(charlotteKeywords, 'Charlotte,North Carolina,United States');

    if (result.tasks && result.tasks[0] && result.tasks[0].result) {
      const keywordData = result.tasks[0].result;

      // Sort by search volume
      keywordData.sort((a, b) => (b.search_volume || 0) - (a.search_volume || 0));

      console.log('\n' + '='.repeat(100));
      console.log('TOP COMMERCIAL ROOFING KEYWORDS - CHARLOTTE NC (by search volume)');
      console.log('='.repeat(100) + '\n');

      const withVolume = keywordData.filter(k => k.search_volume > 0);

      // Output top 30 keywords
      withVolume.slice(0, 30).forEach((kw, idx) => {
        const competition = kw.competition || 'N/A';
        const cpc = kw.cpc ? '$' + kw.cpc.toFixed(2) : 'N/A';
        console.log(`${idx + 1}. ${kw.keyword}`);
        console.log(`   Volume: ${kw.search_volume}/mo | Competition: ${competition} | CPC: ${cpc}`);
      });

      // Group by category
      console.log('\n' + '='.repeat(100));
      console.log('KEYWORDS GROUPED BY CATEGORY');
      console.log('='.repeat(100));

      const categories = {
        'Commercial General': withVolume.filter(k => k.keyword.includes('commercial') && !k.keyword.includes('industrial')),
        'Industrial': withVolume.filter(k => k.keyword.includes('industrial') || k.keyword.includes('warehouse') || k.keyword.includes('factory')),
        'Flat Roof': withVolume.filter(k => k.keyword.includes('flat roof')),
        'TPO': withVolume.filter(k => k.keyword.includes('tpo')),
        'EPDM': withVolume.filter(k => k.keyword.includes('epdm')),
        'Building Types': withVolume.filter(k =>
          k.keyword.includes('office') || k.keyword.includes('retail') ||
          k.keyword.includes('church') || k.keyword.includes('school') ||
          k.keyword.includes('hotel') || k.keyword.includes('apartment')
        ),
      };

      Object.entries(categories).forEach(([cat, keywords]) => {
        if (keywords.length > 0) {
          console.log(`\n${cat}:`);
          keywords.slice(0, 10).forEach(kw => {
            console.log(`  - ${kw.keyword} (${kw.search_volume}/mo)`);
          });
        }
      });

      // Output JSON for further processing
      console.log('\n' + '='.repeat(100));
      console.log('JSON OUTPUT FOR PAGE CREATION');
      console.log('='.repeat(100));

      const pageData = {
        charlotte: {
          topKeywords: withVolume.slice(0, 20).map(k => ({
            keyword: k.keyword,
            volume: k.search_volume,
            cpc: k.cpc,
            competition: k.competition
          })),
          totalKeywordsWithVolume: withVolume.length
        }
      };

      console.log(JSON.stringify(pageData, null, 2));

    } else {
      console.log('Unexpected response:', JSON.stringify(result, null, 2));
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
