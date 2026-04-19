/**
 * Inserts <LKNExpertiseSchema /> onto LKN authority pages so the
 * knowledge-graph Organization entity emits for AI engines and Google.
 * Idempotent.
 *
 * Only target the highest-authority LKN pages — the schema is large,
 * so don't broadcast on every city/service page.
 *
 * Usage: npx tsx scripts/add-lkn-expertise-schema.ts [--dry-run]
 */
import * as fs from 'fs';
import * as path from 'path';

const DRY_RUN = process.argv.includes('--dry-run');
const APP_DIR = path.resolve(__dirname, '..', 'src', 'app');

const TARGETS = [
  'lake-norman-roofing-guide',
  'roofing-lake-norman-nc',
  'best-roofer-lake-norman-nc',
  'roofers-lake-norman-nc',
  'roof-repair-lake-norman-nc',
  'roof-replacement-lake-norman-nc',
  'lake-norman-waterfront-roofing',
  'lake-norman-storm-damage-guide',
  'lake-norman-roofing-costs-2026',
];

interface Result {
  slug: string;
  changed: boolean;
  reason: string;
}

function patch(slug: string): Result {
  const filePath = path.join(APP_DIR, slug, 'page.tsx');
  if (!fs.existsSync(filePath)) return { slug, changed: false, reason: 'missing-file' };

  const original = fs.readFileSync(filePath, 'utf8');
  if (original.includes('LKNExpertiseSchema')) return { slug, changed: false, reason: 'already-present' };
  if (!original.includes('<LKNHowToBundle')) return { slug, changed: false, reason: 'no-howto-anchor' };

  let updated = original;

  // Add import after last @/components/seo line.
  const importLine = `import { LKNExpertiseSchema } from '@/components/seo/LKNExpertiseSchema';`;
  const seoImportRegex = /^import .* from ['"]@\/components\/seo\/[^'"]+['"];?\s*$/gm;
  const matches = [...original.matchAll(seoImportRegex)];
  if (matches.length === 0) return { slug, changed: false, reason: 'no-seo-import-anchor' };
  const last = matches[matches.length - 1];
  const at = last.index! + last[0].length;
  updated = updated.slice(0, at) + '\n' + importLine + updated.slice(at);

  // Insert <LKNExpertiseSchema /> right after <LKNHowToBundle ... />
  const howToRegex = /<LKNHowToBundle[^>]*\/>/;
  const howToMatch = updated.match(howToRegex);
  if (!howToMatch) return { slug, changed: false, reason: 'howto-tag-lost' };
  const after = howToMatch.index! + howToMatch[0].length;
  const pageUrlExpr = '`${SITE_CONFIG.url}/' + slug + '`';
  const insertion = `\n      <LKNExpertiseSchema pageUrl={${pageUrlExpr}} />`;
  updated = updated.slice(0, after) + insertion + updated.slice(after);

  if (!DRY_RUN) fs.writeFileSync(filePath, updated);
  return { slug, changed: true, reason: 'patched' };
}

function main() {
  const results = TARGETS.map(patch);
  const changed = results.filter((r) => r.changed);
  const skipped = results.filter((r) => !r.changed);
  console.log(`\n${DRY_RUN ? '[DRY RUN] ' : ''}LKNExpertiseSchema patch:`);
  console.log(`  Targets: ${TARGETS.length}, Patched: ${changed.length}, Skipped: ${skipped.length}`);
  for (const c of changed) console.log(`  + ${c.slug}`);
  for (const s of skipped) console.log(`  - ${s.slug} (${s.reason})`);
}

main();
