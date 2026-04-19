// Audit rendered SEO titles. Layout template is `%s | Best Roofing Now` (suffix
// = " | Best Roofing Now" = 20 chars). Absolute titles bypass the template.
//
// Reports: all pages whose rendered title (title + suffix where applicable)
// would exceed 60 characters. Also reports on pages with no title metadata.

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SUFFIX = ' | Best Roofing Now';
const LIMIT = 60;

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

// Parse title out of a page.tsx metadata block. Handles:
//   title: 'foo'
//   title: "foo"
//   title: { absolute: '...' }
//   title: { default: '...', template: '...' }
// Returns { value, isAbsolute } or null when none found.
function extractTitle(src) {
  const metaMatch = src.match(/export\s+const\s+metadata[^{]*=\s*\{([\s\S]*?)^\};/m);
  if (!metaMatch) return null;
  const body = metaMatch[1];

  const absolute = body.match(/title\s*:\s*\{\s*absolute\s*:\s*["'`]([^"'`]+)["'`]/);
  if (absolute) return { value: absolute[1], isAbsolute: true };

  const plainSingle = body.match(/title\s*:\s*'([^']+)'/);
  if (plainSingle) return { value: plainSingle[1], isAbsolute: false };

  const plainDouble = body.match(/title\s*:\s*"([^"]+)"/);
  if (plainDouble) return { value: plainDouble[1], isAbsolute: false };

  const defaultTitle = body.match(/title\s*:\s*\{\s*default\s*:\s*["'`]([^"'`]+)["'`]/);
  if (defaultTitle) return { value: defaultTitle[1], isAbsolute: false };

  return null;
}

const pages = walk('src/app').filter((f) => !f.includes('n86gB65') && !f.includes('[slug]') && !f.includes('[city]') && !f.includes('[neighborhood]') && !f.includes('[id]'));

const overflows = [];
const missing = [];
const absoluteTitles = [];

for (const file of pages) {
  const src = readFileSync(file, 'utf8');
  const t = extractTitle(src);
  if (!t) {
    missing.push(file);
    continue;
  }
  const rendered = t.isAbsolute ? t.value : t.value + SUFFIX;
  if (rendered.length > LIMIT) {
    overflows.push({ file, title: t.value, rendered, length: rendered.length, isAbsolute: t.isAbsolute });
  }
  if (t.isAbsolute) absoluteTitles.push({ file, title: t.value });
}

overflows.sort((a, b) => b.length - a.length);

console.log(`\n=== OVERFLOWS (${overflows.length} pages with rendered title > ${LIMIT} chars) ===\n`);
for (const o of overflows) {
  const marker = o.isAbsolute ? '[abs]' : '     ';
  console.log(`${marker} ${String(o.length).padStart(3)} ${o.file.replace('src\\app\\', '').replace('\\page.tsx', '')}`);
  console.log(`         rendered: ${o.rendered}`);
}

console.log(`\n=== PAGES WITH NO TITLE METADATA (${missing.length}) ===\n`);
for (const f of missing.slice(0, 30)) {
  console.log('  ' + f.replace('src\\app\\', '').replace('\\page.tsx', ''));
}
if (missing.length > 30) console.log(`  ... and ${missing.length - 30} more`);

console.log(`\n=== SUMMARY ===`);
console.log(`Total pages scanned:       ${pages.length}`);
console.log(`Overflow (> ${LIMIT} chars):        ${overflows.length}`);
console.log(`Missing title metadata:    ${missing.length}`);
console.log(`Using absolute titles:     ${absoluteTitles.length}`);
