// Pin sitemap `lastmod` timestamps to build time by adding
//   export const dynamic = 'force-static';
// to each sitemap route. Next.js then evaluates `new Date().toISOString()`
// once at build — Google sees a single stable lastmod per deployment instead
// of a fresh timestamp on every request (which is meaningless as a crawl signal).
//
// Skips routes that pull dynamic data (projects, blog, images).

import { readFileSync, writeFileSync } from 'node:fs';

const routes = [
  'src/app/sitemap.xml/route.ts',
  'src/app/sitemaps/core/route.ts',
  'src/app/sitemaps/services/route.ts',
  'src/app/sitemaps/locations/route.ts',
  'src/app/sitemaps/lake-norman/route.ts',
  'src/app/sitemaps/products/route.ts',
  'src/app/sitemaps/materials/route.ts',
  'src/app/sitemaps/resources/route.ts',
  'src/app/sitemaps/faq/route.ts',
  'src/app/sitemaps/stories/route.ts',
  'src/app/sitemaps/videos/route.ts',
];

for (const file of routes) {
  const src = readFileSync(file, 'utf8');
  if (/export\s+const\s+dynamic\s*=/.test(src)) {
    console.log(`skip (already set): ${file}`);
    continue;
  }
  // Insert after last `import` line.
  const importRe = /^(import .+?;?\s*)+/ms;
  const match = src.match(importRe);
  if (!match) {
    console.warn(`no imports found, prepending to file: ${file}`);
    writeFileSync(file, `export const dynamic = 'force-static';\n\n${src}`, 'utf8');
    continue;
  }
  const before = src.slice(0, match[0].length);
  const after = src.slice(match[0].length);
  const next = `${before}\nexport const dynamic = 'force-static';\n${after}`;
  writeFileSync(file, next, 'utf8');
  console.log(`pinned: ${file}`);
}
