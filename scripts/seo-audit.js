const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '../src/app');
const pages = [];

function extractMetadata(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Extract title
    const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
    const title = titleMatch ? titleMatch[1] : null;

    // Extract description
    const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/) ||
                      content.match(/description:\s*\n?\s*['"`]([^'"`]+)['"`]/);
    const description = descMatch ? descMatch[1] : null;

    // Extract keywords array
    const keywordsMatch = content.match(/keywords:\s*\[([^\]]+)\]/s);
    let keywords = [];
    if (keywordsMatch) {
      keywords = keywordsMatch[1]
        .split(',')
        .map(k => k.trim().replace(/['"`]/g, ''))
        .filter(k => k.length > 0);
    }

    // Extract canonical URL
    const canonicalMatch = content.match(/canonical:\s*[`'"]([^`'"]+)[`'"]/);
    const canonical = canonicalMatch ? canonicalMatch[1] : null;

    // Get relative path
    const relativePath = filePath.replace(appDir, '').replace(/\\/g, '/').replace('/page.tsx', '') || '/';

    return {
      path: relativePath,
      title,
      description,
      keywords,
      canonical,
      hasSchema: content.includes('Schema'),
      hasFAQ: content.includes('FAQSchema'),
      hasBreadcrumb: content.includes('BreadcrumbSchema'),
    };
  } catch (error) {
    return null;
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file === 'page.tsx') {
      const metadata = extractMetadata(filePath);
      if (metadata && metadata.title) {
        pages.push(metadata);
      }
    }
  }
}

walkDir(appDir);

// Sort by path
pages.sort((a, b) => a.path.localeCompare(b.path));

console.log('='.repeat(100));
console.log('SEO AUDIT REPORT - ' + pages.length + ' Pages Analyzed');
console.log('='.repeat(100));

// Check for duplicate titles
console.log('\n## DUPLICATE TITLE CHECK ##\n');
const titleMap = {};
pages.forEach(p => {
  if (p.title) {
    const normalizedTitle = p.title.toLowerCase().replace(/\s*\|\s*best roofing now$/i, '');
    if (!titleMap[normalizedTitle]) {
      titleMap[normalizedTitle] = [];
    }
    titleMap[normalizedTitle].push(p.path);
  }
});

let duplicateTitles = 0;
Object.entries(titleMap).forEach(([title, paths]) => {
  if (paths.length > 1) {
    duplicateTitles++;
    console.log(`DUPLICATE: "${title}"`);
    paths.forEach(p => console.log(`  - ${p}`));
    console.log('');
  }
});
if (duplicateTitles === 0) {
  console.log('✓ No duplicate titles found');
}

// Check for keyword cannibalization
console.log('\n## KEYWORD CANNIBALIZATION CHECK ##\n');
const keywordMap = {};
pages.forEach(p => {
  p.keywords.forEach(keyword => {
    const normalizedKeyword = keyword.toLowerCase().trim();
    if (normalizedKeyword.length > 3) {
      if (!keywordMap[normalizedKeyword]) {
        keywordMap[normalizedKeyword] = [];
      }
      keywordMap[normalizedKeyword].push(p.path);
    }
  });
});

let cannibalizedKeywords = 0;
const highPriorityKeywords = [
  'roofing contractor charlotte nc',
  'roofers charlotte nc',
  'roofing company charlotte nc',
  'roof repair charlotte nc',
  'roof replacement charlotte nc',
  'metal roofing charlotte nc',
  'commercial roofing charlotte nc',
  'gutter installation charlotte nc',
];

highPriorityKeywords.forEach(keyword => {
  const paths = keywordMap[keyword] || [];
  if (paths.length > 1) {
    cannibalizedKeywords++;
    console.log(`⚠ CANNIBALIZATION: "${keyword}" appears on ${paths.length} pages:`);
    paths.forEach(p => console.log(`  - ${p}`));
    console.log('');
  } else if (paths.length === 1) {
    console.log(`✓ "${keyword}" -> ${paths[0]}`);
  } else {
    console.log(`✗ "${keyword}" - NOT TARGETED`);
  }
});

// Check for missing SEO elements
console.log('\n## MISSING SEO ELEMENTS ##\n');
let missingSchema = 0;
let missingFAQ = 0;
let missingBreadcrumb = 0;

pages.forEach(p => {
  if (!p.hasSchema) {
    missingSchema++;
    console.log(`Missing Schema: ${p.path}`);
  }
  if (!p.hasBreadcrumb && !p.path.includes('[')) {
    missingBreadcrumb++;
  }
});

console.log(`\nSchema coverage: ${pages.length - missingSchema}/${pages.length} pages`);
console.log(`FAQ Schema: ${pages.filter(p => p.hasFAQ).length}/${pages.length} pages`);
console.log(`Breadcrumb Schema: ${pages.length - missingBreadcrumb}/${pages.length} pages`);

// List all pages by category
console.log('\n## PAGE ORGANIZATION ##\n');

const categories = {
  'Core Pages': [],
  'Service Pages': [],
  'Location Pages (Charlotte)': [],
  'Location Pages (Lake Norman)': [],
  'Location Pages (Surrounding)': [],
  'Neighborhood Pages': [],
  'Material Pages': [],
  'Brand Pages': [],
  'Problem Pages': [],
  'Guides & Resources': [],
  'Dynamic Routes': [],
  'Other': [],
};

pages.forEach(p => {
  const path = p.path;
  if (path.includes('[')) {
    categories['Dynamic Routes'].push(p);
  } else if (['/', '/about', '/contact', '/faq', '/reviews', '/financing', '/warranty', '/process'].includes(path)) {
    categories['Core Pages'].push(p);
  } else if (path.includes('services') || path.includes('-services')) {
    categories['Service Pages'].push(p);
  } else if (path.includes('charlotte-nc') && !path.includes('roofing-')) {
    categories['Location Pages (Charlotte)'].push(p);
  } else if (path.includes('cornelius') || path.includes('mooresville') || path.includes('davidson') || path.includes('huntersville') || path.includes('denver') || path.includes('sherrills') || path.includes('terrell')) {
    categories['Location Pages (Lake Norman)'].push(p);
  } else if (path.includes('matthews') || path.includes('mint-hill') || path.includes('pineville') || path.includes('concord') || path.includes('indian-trail') || path.includes('gastonia') || path.includes('fort-mill') || path.includes('rock-hill')) {
    categories['Location Pages (Surrounding)'].push(p);
  } else if (path.includes('roofing-') && path.includes('-charlotte-nc')) {
    categories['Neighborhood Pages'].push(p);
  } else if (path.includes('materials') || path.includes('shingle') || path.includes('metal') || path.includes('tpo') || path.includes('epdm') || path.includes('slate') || path.includes('tile')) {
    categories['Material Pages'].push(p);
  } else if (path.includes('gaf') || path.includes('owens') || path.includes('certainteed') || path.includes('velux') || path.includes('leafguard')) {
    categories['Brand Pages'].push(p);
  } else if (path.includes('repair') || path.includes('damage') || path.includes('leak') || path.includes('problem') || path.includes('sagging') || path.includes('missing')) {
    categories['Problem Pages'].push(p);
  } else if (path.includes('guide') || path.includes('blog') || path.includes('stories')) {
    categories['Guides & Resources'].push(p);
  } else {
    categories['Other'].push(p);
  }
});

Object.entries(categories).forEach(([category, categoryPages]) => {
  if (categoryPages.length > 0) {
    console.log(`\n### ${category} (${categoryPages.length} pages) ###`);
    categoryPages.forEach(p => {
      const titleShort = p.title ? p.title.substring(0, 60) : 'NO TITLE';
      console.log(`  ${p.path} -> ${titleShort}...`);
    });
  }
});

// Summary
console.log('\n' + '='.repeat(100));
console.log('SUMMARY');
console.log('='.repeat(100));
console.log(`Total Pages: ${pages.length}`);
console.log(`Duplicate Titles: ${duplicateTitles}`);
console.log(`High-Priority Keyword Conflicts: ${cannibalizedKeywords}`);
console.log(`Pages with Schema: ${pages.length - missingSchema}`);
console.log(`Pages with FAQ Schema: ${pages.filter(p => p.hasFAQ).length}`);
