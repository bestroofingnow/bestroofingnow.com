const fs = require('fs');
const path = require('path');

const SITEMAPS = [
  'https://bestroofingnow.com/sitemaps/core',
  'https://bestroofingnow.com/sitemaps/services',
  'https://bestroofingnow.com/sitemaps/locations',
  'https://bestroofingnow.com/sitemaps/projects',
  'https://bestroofingnow.com/sitemaps/materials',
  'https://bestroofingnow.com/sitemaps/resources',
  'https://bestroofingnow.com/sitemaps/stories',
  'https://bestroofingnow.com/sitemaps/blog',
];

async function fetchSitemap(url) {
  try {
    const res = await fetch(url);
    const text = await res.text();
    const urls = [];
    const regex = /<loc>([^<]+)<\/loc>/g;
    let match;
    while ((match = regex.exec(text)) !== null) {
      urls.push(match[1]);
    }
    return urls;
  } catch (e) {
    console.error(`Error fetching ${url}:`, e.message);
    return [];
  }
}

function urlToTitle(url) {
  const urlPath = url.replace('https://bestroofingnow.com', '');
  const slug = urlPath.split('/').pop() || 'home';
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function urlToKeyword(url) {
  const urlPath = url.replace('https://bestroofingnow.com', '');
  const segments = urlPath.split('/').filter(Boolean);

  if (segments[0] === 'blog') {
    const blogSlug = segments[1] || 'roofing blog';
    return blogSlug.replace(/-/g, ' ').slice(0, 50);
  }
  if (segments[0] === 'locations') {
    const city = segments[1] ? segments[1].replace(/-/g, ' ') : '';
    const hood = segments[2] ? segments[2].replace(/-/g, ' ') : '';
    return ('roofing ' + city + ' ' + hood).trim();
  }
  if (segments[0] === 'services') {
    const service = segments[1] ? segments[1].replace(/-/g, ' ') : '';
    return service + ' Charlotte NC';
  }
  return segments.join(' ').replace(/-/g, ' ').slice(0, 60);
}

function escapeCSV(str) {
  if (!str) return '';
  str = String(str);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

async function main() {
  const allUrls = new Set();

  for (const sitemap of SITEMAPS) {
    console.log('Fetching ' + sitemap + '...');
    const urls = await fetchSitemap(sitemap);
    console.log('  Found ' + urls.length + ' URLs');
    urls.forEach(u => allUrls.add(u));
  }

  console.log('\nTotal unique URLs: ' + allUrls.size);

  const rows = ['URL,Title,Focus Keyword'];

  for (const url of allUrls) {
    const urlPath = url.replace('https://bestroofingnow.com', '') || '/';
    const title = urlToTitle(url);
    const keyword = urlToKeyword(url);
    rows.push(escapeCSV(urlPath) + ',' + escapeCSV(title) + ',' + escapeCSV(keyword));
  }

  const outputPath = path.join(__dirname, 'all-pages.csv');
  fs.writeFileSync(outputPath, rows.join('\n'), 'utf8');
  console.log('\nCSV saved to ' + outputPath);
  console.log('Total pages: ' + (rows.length - 1));
}

main().catch(console.error);
