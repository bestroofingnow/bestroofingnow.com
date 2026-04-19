/**
 * Inserts LKNPartnershipsBlock and LKNDataCitations into Lake Norman pages
 * before the final <CTASection>. Idempotent — skips pages that already contain
 * the components.
 *
 * Usage: npx tsx scripts/add-lkn-aeo-blocks.ts [--dry-run]
 */
import * as fs from 'fs';
import * as path from 'path';

const DRY_RUN = process.argv.includes('--dry-run');
const APP_DIR = path.resolve(__dirname, '..', 'src', 'app');

const LKN_CITY_TOKENS = [
  'lake-norman-nc',
  'huntersville-nc',
  'cornelius-nc',
  'davidson-nc',
  'mooresville-nc',
  'denver-nc',
  'sherrills-ford-nc',
  'statesville-nc',
  'troutman-nc',
  'terrell-nc',
];

// Pages already covered with full partnership treatment, or special pages that
// shouldn't get the city block.
const SKIP_RELATIVE = new Set([
  'lake-norman-roofing-guide/page.tsx',
  'lake-norman-storm-damage-guide/page.tsx',
  'lake-norman-waterfront-roofing/page.tsx',
  'lake-norman-roofing-costs-2026/page.tsx',
  'best-roofer-lake-norman-nc/page.tsx',
  'roofers-lake-norman-nc/page.tsx',
  'roofing-lake-norman-nc/page.tsx',
  'roof-repair-lake-norman-nc/page.tsx',
  'roof-replacement-lake-norman-nc/page.tsx',
  'locations/[city]/page.tsx',
  'page.tsx',
  'site-map/page.tsx',
  'charlotte-storm-season-roof-guide/page.tsx',
  'gutter-guards/page.tsx',
  'gutter-repair/page.tsx',
  'metal-roof-cost/page.tsx',
]);

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
    } else if (entry.isFile() && entry.name === 'page.tsx') {
      out.push(full);
    }
  }
  return out;
}

function hasLKNToken(filePath: string): boolean {
  const rel = path.relative(APP_DIR, filePath).replace(/\\/g, '/');
  return LKN_CITY_TOKENS.some((tok) => rel.includes(tok));
}

function deriveCity(relPath: string): string {
  const lower = relPath.toLowerCase();
  if (lower.includes('huntersville-nc')) return 'Huntersville';
  if (lower.includes('cornelius-nc')) return 'Cornelius';
  if (lower.includes('davidson-nc')) return 'Davidson';
  if (lower.includes('mooresville-nc')) return 'Mooresville';
  if (lower.includes('denver-nc')) return 'Denver';
  if (lower.includes('sherrills-ford-nc')) return 'Sherrills Ford';
  if (lower.includes('statesville-nc')) return 'Statesville';
  if (lower.includes('troutman-nc')) return 'Troutman';
  if (lower.includes('terrell-nc')) return 'Terrell';
  return 'Lake Norman';
}

interface PatchResult {
  file: string;
  changed: boolean;
  reason: string;
}

function patchFile(filePath: string): PatchResult {
  const rel = path.relative(APP_DIR, filePath).replace(/\\/g, '/');
  if (SKIP_RELATIVE.has(rel)) return { file: rel, changed: false, reason: 'skip-list' };

  const original = fs.readFileSync(filePath, 'utf8');
  const alreadyHasPartnerships = original.includes('LKNPartnershipsBlock');
  const alreadyHasCitations = original.includes('LKNDataCitations');
  if (alreadyHasPartnerships && alreadyHasCitations) {
    return { file: rel, changed: false, reason: 'already-present' };
  }

  if (!original.includes('<CTASection')) {
    return { file: rel, changed: false, reason: 'no-ctasection' };
  }

  const city = deriveCity(rel);
  let updated = original;

  // Add imports if missing. Insert after the last existing import line that
  // references @/components/.
  const newImports: string[] = [];
  if (!alreadyHasPartnerships) {
    newImports.push(`import { LKNPartnershipsBlock } from '@/components/sections/LKNPartnershipsBlock';`);
  }
  if (!alreadyHasCitations) {
    newImports.push(`import { LKNDataCitations } from '@/components/sections/LKNDataCitations';`);
  }

  // Find the last `import` statement.
  const importBlockMatch = updated.match(/^(?:import[^;]*;[\s]*)+/m);
  if (importBlockMatch) {
    const block = importBlockMatch[0];
    const insertion = block.trimEnd() + '\n' + newImports.join('\n') + '\n';
    updated = updated.replace(block, insertion);
  } else {
    updated = newImports.join('\n') + '\n' + updated;
  }

  // Build the JSX block to insert.
  const cityProp = JSON.stringify(city);
  const blockJsx: string[] = [];
  if (!alreadyHasPartnerships) {
    blockJsx.push(`      <LKNPartnershipsBlock city={${cityProp}} />`);
  }
  if (!alreadyHasCitations) {
    blockJsx.push(`      <LKNDataCitations city={${cityProp}} />`);
  }
  const insertion = '\n' + blockJsx.join('\n') + '\n';

  // Insert before the FIRST occurrence of `<CTASection`.
  const ctaIdx = updated.indexOf('<CTASection');
  if (ctaIdx === -1) {
    return { file: rel, changed: false, reason: 'cta-not-found-after-imports' };
  }

  // Walk back to the start of the line.
  let lineStart = ctaIdx;
  while (lineStart > 0 && updated[lineStart - 1] !== '\n') lineStart--;
  updated = updated.slice(0, lineStart) + insertion + updated.slice(lineStart);

  if (!DRY_RUN) {
    fs.writeFileSync(filePath, updated);
  }
  return { file: rel, changed: true, reason: 'patched' };
}

function main() {
  const allPages = walk(APP_DIR);
  const lknPages = allPages.filter(hasLKNToken);

  const results: PatchResult[] = [];
  for (const file of lknPages) {
    results.push(patchFile(file));
  }

  const changed = results.filter((r) => r.changed);
  const skipped = results.filter((r) => !r.changed);

  console.log(`\n${DRY_RUN ? '[DRY RUN] ' : ''}LKN AEO patch results:`);
  console.log(`  LKN pages found: ${lknPages.length}`);
  console.log(`  Patched: ${changed.length}`);
  console.log(`  Skipped: ${skipped.length}`);

  const reasons = new Map<string, number>();
  for (const s of skipped) reasons.set(s.reason, (reasons.get(s.reason) ?? 0) + 1);
  for (const [r, n] of reasons) console.log(`    skip:${r} = ${n}`);

  console.log('\nPatched files:');
  for (const c of changed) console.log(`  + ${c.file}`);

  if (skipped.length) {
    console.log('\nSkipped (non-trivial reasons):');
    for (const s of skipped.filter((s) => !['skip-list', 'already-present'].includes(s.reason))) {
      console.log(`  - ${s.file} (${s.reason})`);
    }
  }
}

main();
