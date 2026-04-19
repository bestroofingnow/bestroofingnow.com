// One-off codemod: add `pagePath` prop to every <ServiceAreaPageSchema .../>
// usage in src/app so the schema URL matches the real page path.
//
// Rules:
// - For pages under src/app/locations/[city]/page.tsx: leave alone (the default
//   `/locations/${slug}` is already correct).
// - For every other top-level page: set pagePath to `/<slug-value>`.
//
// Matches both single-line and multi-line JSX forms.

import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p));
    else if (entry === 'page.tsx') out.push(p);
  }
  return out;
}

const allPages = walk('src/app');
const files = allPages.filter((f) => {
  if (f.includes('locations') && f.includes('[city]')) return false;
  const src = readFileSync(f, 'utf8');
  return src.includes('<ServiceAreaPageSchema');
});

let totalEdits = 0;
let filesChanged = 0;

for (const file of files) {
  const src = readFileSync(file, 'utf8');

  // Find every <ServiceAreaPageSchema ...> or <ServiceAreaPageSchema .../> block.
  // Support both self-closing and closing-tag forms (component is self-closing
  // in practice, but be defensive).
  const blockRegex = /<ServiceAreaPageSchema\b([\s\S]*?)\/>/g;

  let edits = 0;
  const next = src.replace(blockRegex, (match, inner) => {
    if (/\bpagePath\s*=/.test(inner)) return match; // already migrated

    const slugMatch = inner.match(/\bslug=(?:"([^"]+)"|\{([^}]+)\})/);
    if (!slugMatch) {
      console.warn(`WARN: no slug prop in block in ${file}`);
      return match;
    }
    const slugValue = slugMatch[1];
    if (!slugValue) {
      // Template/variable slug — skip; caller must handle manually
      console.warn(`WARN: computed slug (not a string literal) in ${file}; skipping`);
      return match;
    }

    // Insert pagePath right after the slug prop occurrence.
    const slugToken = slugMatch[0];
    const replaced = inner.replace(slugToken, `${slugToken} pagePath="/${slugValue}"`);
    edits += 1;
    return `<ServiceAreaPageSchema${replaced}/>`;
  });

  if (edits > 0 && next !== src) {
    writeFileSync(file, next, 'utf8');
    totalEdits += edits;
    filesChanged += 1;
    console.log(`${file}: ${edits} edit(s)`);
  }
}

console.log(`\nDone. ${totalEdits} edits across ${filesChanged} files.`);
