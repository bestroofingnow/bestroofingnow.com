// Fix pages whose metadata.title already contains " | Best Roofing Now"
// and then get the same suffix appended by the layout template, producing
// "... | Best Roofing Now | Best Roofing Now" in SERPs.
//
// Strategy: strip the trailing ` | Best Roofing Now` from the title value
// so the template appends it exactly once.

import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const SUFFIX_RE = /\s*\|\s*Best Roofing Now\s*$/;

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

const pages = walk('src/app');
let fixed = 0;

for (const file of pages) {
  const src = readFileSync(file, 'utf8');

  // Only touch non-absolute title string forms. Match the first occurrence of
  // `title:` inside a metadata export.
  const metadataMatch = src.match(/export\s+const\s+metadata[^{]*=\s*\{[\s\S]*?^\};/m);
  if (!metadataMatch) continue;

  // Skip files that use absolute title — those bypass the template so no duplication.
  if (/title\s*:\s*\{\s*absolute\s*:/.test(metadataMatch[0])) continue;

  // Pattern 1: `title: 'foo | Best Roofing Now'`
  const singleRe = /(title\s*:\s*)'([^']+)'/;
  // Pattern 2: `title: "foo | Best Roofing Now"`
  const doubleRe = /(title\s*:\s*)"([^"]+)"/;
  // Pattern 3: `title: { default: 'foo | Best Roofing Now', ... }`
  const defaultRe = /(title\s*:\s*\{\s*default\s*:\s*)(["'])([^"']+)\2/;

  let changed = false;
  const originalSrc = src;

  let newSrc = src.replace(singleRe, (m, prefix, val) => {
    if (SUFFIX_RE.test(val)) { changed = true; return `${prefix}'${val.replace(SUFFIX_RE, '')}'`; }
    return m;
  });

  if (!changed) {
    newSrc = src.replace(doubleRe, (m, prefix, val) => {
      if (SUFFIX_RE.test(val)) { changed = true; return `${prefix}"${val.replace(SUFFIX_RE, '')}"`; }
      return m;
    });
  }

  if (!changed) {
    newSrc = src.replace(defaultRe, (m, prefix, quote, val) => {
      if (SUFFIX_RE.test(val)) { changed = true; return `${prefix}${quote}${val.replace(SUFFIX_RE, '')}${quote}`; }
      return m;
    });
  }

  if (changed && newSrc !== originalSrc) {
    writeFileSync(file, newSrc, 'utf8');
    console.log(`fixed: ${file}`);
    fixed += 1;
  }
}

console.log(`\nFixed ${fixed} files with duplicated brand suffix.`);
