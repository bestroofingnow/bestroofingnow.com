/**
 * Inserts LKNHowToBundle into Lake Norman hub pages so HowTo schemas emit
 * for AI search engines. Idempotent — skips pages that already contain
 * <LKNHowToBundle>.
 *
 * Usage: npx tsx scripts/add-lkn-howto-schemas.ts [--dry-run]
 */
import * as fs from 'fs';
import * as path from 'path';

const DRY_RUN = process.argv.includes('--dry-run');
const APP_DIR = path.resolve(__dirname, '..', 'src', 'app');

// LKN hub pages where the extra HowTo schema weight is justified.
// These are high-traffic, high-intent pages that benefit most from being
// cited by AI engines for "how do I..." queries about LKN roofing.
const TARGETS: Array<{ slug: string; city: string }> = [
  { slug: 'lake-norman-roofing-guide', city: 'Lake Norman' },
  { slug: 'best-roofer-lake-norman-nc', city: 'Lake Norman' },
  { slug: 'roofers-lake-norman-nc', city: 'Lake Norman' },
  { slug: 'roofing-lake-norman-nc', city: 'Lake Norman' },
  { slug: 'roof-repair-lake-norman-nc', city: 'Lake Norman' },
  { slug: 'roof-replacement-lake-norman-nc', city: 'Lake Norman' },
  { slug: 'lake-norman-roofing-costs-2026', city: 'Lake Norman' },
  { slug: 'lake-norman-waterfront-roofing', city: 'Lake Norman' },
  { slug: 'lake-norman-storm-damage-guide', city: 'Lake Norman' },
  { slug: 'slate-roofing-lake-norman-nc', city: 'Lake Norman' },
  { slug: 'cedar-shake-roofing-lake-norman-nc', city: 'Lake Norman' },
  { slug: 'synthetic-slate-roofing-lake-norman-nc', city: 'Lake Norman' },
  { slug: 'tile-roofing-lake-norman-nc', city: 'Lake Norman' },
  { slug: 'standing-seam-metal-roof-lake-norman-nc', city: 'Lake Norman' },
  { slug: 'roofing-cost-mooresville-nc', city: 'Mooresville' },
  { slug: 'roofing-cost-cornelius-nc', city: 'Cornelius' },
  // LKN hyper-local neighborhood pages (Apr 18 2026)
  { slug: 'roofing-birkdale-huntersville-nc', city: 'Huntersville' },
  { slug: 'roofing-vermillion-huntersville-nc', city: 'Huntersville' },
  { slug: 'roofing-skybrook-huntersville-nc', city: 'Huntersville' },
  { slug: 'roofing-northstone-huntersville-nc', city: 'Huntersville' },
  { slug: 'roofing-river-run-davidson-nc', city: 'Davidson' },
  { slug: 'roofing-davidson-pointe-davidson-nc', city: 'Davidson' },
  { slug: 'roofing-the-farms-mooresville-nc', city: 'Mooresville' },
  { slug: 'roofing-curtis-pond-mooresville-nc', city: 'Mooresville' },
  { slug: 'roofing-cove-creek-mooresville-nc', city: 'Mooresville' },
  { slug: 'roofing-sailview-denver-nc', city: 'Denver' },
  { slug: 'metal-roofing-the-peninsula-cornelius-nc', city: 'Cornelius' },
  { slug: 'roof-replacement-the-point-mooresville-nc', city: 'Mooresville' },
  // LKN city hub pages
  { slug: 'roofing-cornelius-nc', city: 'Cornelius' },
  { slug: 'roofing-davidson-nc', city: 'Davidson' },
  { slug: 'roofing-mooresville-nc', city: 'Mooresville' },
  { slug: 'roofing-huntersville-nc', city: 'Huntersville' },
  { slug: 'roofing-denver-nc', city: 'Denver' },
];

interface PatchResult {
  slug: string;
  changed: boolean;
  reason: string;
}

function patchFile(slug: string, city: string): PatchResult {
  const filePath = path.join(APP_DIR, slug, 'page.tsx');
  if (!fs.existsSync(filePath)) {
    return { slug, changed: false, reason: 'missing-file' };
  }

  const original = fs.readFileSync(filePath, 'utf8');
  if (original.includes('LKNHowToBundle')) {
    return { slug, changed: false, reason: 'already-present' };
  }

  if (!original.includes('<VoiceSearchActionSchema')) {
    return { slug, changed: false, reason: 'no-voice-anchor' };
  }

  // Add import after the last existing @/components/seo import line.
  // Fall back to inserting after the last import line if none match.
  let updated = original;
  const seoImportRegex = /^import .* from ['"]@\/components\/seo\/[^'"]+['"];?\s*$/gm;
  const seoMatches = [...original.matchAll(seoImportRegex)];
  const importLine = `import { LKNHowToBundle } from '@/components/seo/LKNHowToSchemas';`;

  if (seoMatches.length > 0) {
    const lastSeoMatch = seoMatches[seoMatches.length - 1];
    const insertAt = lastSeoMatch.index! + lastSeoMatch[0].length;
    updated =
      updated.slice(0, insertAt) +
      '\n' +
      importLine +
      updated.slice(insertAt);
  } else {
    // Fallback: insert after first import block
    const importBlock = updated.match(/^(?:import[^;]*;[\s]*)+/m);
    if (!importBlock) {
      return { slug, changed: false, reason: 'no-import-block' };
    }
    const insertion = importBlock[0].trimEnd() + '\n' + importLine + '\n';
    updated = updated.replace(importBlock[0], insertion);
  }

  // Insert <LKNHowToBundle ... /> right after <VoiceSearchActionSchema ... />.
  // Match either self-closing or with explicit children patterns.
  const voiceTagRegex = /<VoiceSearchActionSchema[^>]*\/>/;
  const voiceMatch = updated.match(voiceTagRegex);
  if (!voiceMatch) {
    return { slug, changed: false, reason: 'voice-tag-not-found-after-import' };
  }
  const voiceEnd = voiceMatch.index! + voiceMatch[0].length;

  // Detect SITE_CONFIG.url usage in the file to figure out the canonical URL pattern.
  // Most pages use `${SITE_CONFIG.url}/<slug>` — use that.
  const pageUrlExpr = '`${SITE_CONFIG.url}/' + slug + '`';
  const cityProp = JSON.stringify(city);
  const insertion = `\n      <LKNHowToBundle pageUrl={${pageUrlExpr}} city={${cityProp}} />`;

  updated = updated.slice(0, voiceEnd) + insertion + updated.slice(voiceEnd);

  if (!DRY_RUN) {
    fs.writeFileSync(filePath, updated);
  }
  return { slug, changed: true, reason: 'patched' };
}

function main() {
  const results: PatchResult[] = TARGETS.map((t) => patchFile(t.slug, t.city));
  const changed = results.filter((r) => r.changed);
  const skipped = results.filter((r) => !r.changed);

  console.log(`\n${DRY_RUN ? '[DRY RUN] ' : ''}LKN HowTo bundle patch results:`);
  console.log(`  Targets: ${TARGETS.length}`);
  console.log(`  Patched: ${changed.length}`);
  console.log(`  Skipped: ${skipped.length}`);

  console.log('\nPatched:');
  for (const c of changed) console.log(`  + ${c.slug}`);

  if (skipped.length) {
    console.log('\nSkipped:');
    for (const s of skipped) console.log(`  - ${s.slug} (${s.reason})`);
  }
}

main();
