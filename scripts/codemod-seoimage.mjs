// Replace raw `next/image` usage with the site-wide `SEOImage` wrapper inside
// `src/app/**/page.tsx`. The wrapper sets `title={title || alt}` so DataForSEO
// stops flagging missing image title attributes.
//
// Scope: only page.tsx files under src/app, because components (Header, Footer,
// etc.) may rely on next/image being the exact untouched export and we don't
// want to regress LCP-critical paths by mistake.
//
// Rules:
// - Transform `import Image from 'next/image'` → `import { SEOImage } from '@/components/ui/SEOImage'`.
// - Preserve ImageProps (and any other named imports) from next/image — keep a
//   side import line when needed.
// - Rewrite JSX `<Image ...>` / `</Image>` → `<SEOImage ...>` / `</SEOImage>`.
// - Skip files that already import SEOImage.
// - Skip files that use a renamed import (`import Image as X`) — those need manual review.

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

const pages = walk('src/app');
let changed = 0;
let skippedAlready = 0;
let skippedWeird = 0;

for (const file of pages) {
  const src = readFileSync(file, 'utf8');

  if (/from\s+['"]@\/components\/ui\/SEOImage['"]/.test(src)) {
    skippedAlready += 1;
    continue;
  }

  const importPatterns = [
    // `import Image from 'next/image';`
    { re: /^import\s+Image\s+from\s+['"]next\/image['"];?\s*$/m, keepProps: [] },
    // `import Image, { ImageProps } from 'next/image';`
    { re: /^import\s+Image\s*,\s*\{\s*([^}]+)\s*\}\s*from\s+['"]next\/image['"];?\s*$/m, keepProps: 'captured' },
  ];

  let matched = null;
  for (const p of importPatterns) {
    const m = src.match(p.re);
    if (m) { matched = { pattern: p, match: m }; break; }
  }

  // Detect renamed default import — skip for manual review.
  if (!matched && /import\s+\w+\s+from\s+['"]next\/image['"]/.test(src)) {
    skippedWeird += 1;
    continue;
  }

  if (!matched) continue;

  // Build replacement import lines.
  const newImport = `import { SEOImage } from '@/components/ui/SEOImage';`;
  let replacementImport = newImport;
  if (matched.pattern.keepProps === 'captured') {
    const named = matched.match[1].trim();
    replacementImport = `import type { ${named} } from 'next/image';\n${newImport}`;
  }

  let next = src.replace(matched.match[0], replacementImport);

  // Rewrite JSX usages. Use word-boundary lookahead so things like `<Images>` or
  // `<ImageGallery>` are left alone.
  next = next.replace(/<Image(\s|\/|>)/g, '<SEOImage$1');
  next = next.replace(/<\/Image>/g, '</SEOImage>');

  if (next !== src) {
    writeFileSync(file, next, 'utf8');
    changed += 1;
  }
}

console.log(`Changed: ${changed}`);
console.log(`Skipped (already using SEOImage): ${skippedAlready}`);
console.log(`Skipped (renamed import, manual review needed): ${skippedWeird}`);
console.log(`Total pages scanned: ${pages.length}`);
