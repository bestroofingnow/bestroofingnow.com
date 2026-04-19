// Recovery codemod: the earlier pin-sitemap-lastmod script inserted
//   export const dynamic = 'force-static';
// inside a multi-line `import {` block, breaking the syntax. This script
// walks each affected file, removes the stray line from inside the import,
// and re-inserts it after the last import statement ends.

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
  let src = readFileSync(file, 'utf8');
  // Strip the misplaced line wherever it landed.
  src = src.replace(/\n?\s*export const dynamic = 'force-static';\s*\n?/g, '\n');
  // Find the end of the import block — last closing `;` of the top-of-file imports.
  const lines = src.split('\n');
  let lastImportEndIdx = -1;
  let inImport = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^\s*import\b/.test(line)) {
      inImport = true;
    }
    if (inImport && /;\s*$/.test(line)) {
      lastImportEndIdx = i;
      inImport = false;
    }
    // Stop scanning once we leave the import block and hit non-blank content.
    if (!inImport && line.trim() !== '' && !/^\s*import\b/.test(line) && lastImportEndIdx !== -1) {
      break;
    }
  }
  if (lastImportEndIdx === -1) {
    console.warn(`could not locate import block end: ${file}`);
    continue;
  }
  lines.splice(lastImportEndIdx + 1, 0, '', `export const dynamic = 'force-static';`);
  writeFileSync(file, lines.join('\n'), 'utf8');
  console.log(`fixed: ${file}`);
}
