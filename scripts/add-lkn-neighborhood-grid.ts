/**
 * Inserts <LKNNeighborhoodGrid /> into Lake Norman hub + LKN city pages so
 * the 17 LKN neighborhood landing pages get internal-link surface area.
 * Idempotent — skips pages that already contain LKNNeighborhoodGrid.
 *
 * Usage: npx tsx scripts/add-lkn-neighborhood-grid.ts [--dry-run]
 */
import * as fs from 'fs';
import * as path from 'path';

const DRY_RUN = process.argv.includes('--dry-run');
const APP_DIR = path.resolve(__dirname, '..', 'src', 'app');

// Targets: city = the city to bias neighborhood ordering toward.
// Empty city = show all neighborhoods in declared order.
const TARGETS: Array<{ slug: string; city?: string; currentSlug?: string }> = [
  // LKN regional hubs (no specific city — show all neighborhoods)
  { slug: 'lake-norman-roofing-guide' },
  { slug: 'roofing-lake-norman-nc' },
  { slug: 'best-roofer-lake-norman-nc' },
  { slug: 'roofers-lake-norman-nc' },
  { slug: 'roof-repair-lake-norman-nc' },
  { slug: 'roof-replacement-lake-norman-nc' },
  { slug: 'lake-norman-waterfront-roofing' },
  { slug: 'lake-norman-storm-damage-guide' },
  { slug: 'lake-norman-roofing-costs-2026' },

  // City hub pages (bias toward matching city)
  { slug: 'roofing-cornelius-nc', city: 'Cornelius' },
  { slug: 'roofing-davidson-nc', city: 'Davidson' },
  { slug: 'roofing-mooresville-nc', city: 'Mooresville' },
  { slug: 'roofing-huntersville-nc', city: 'Huntersville' },
  { slug: 'roofing-denver-nc', city: 'Denver' },

  // Cost guides (bias toward matching city)
  { slug: 'roofing-cost-mooresville-nc', city: 'Mooresville' },
  { slug: 'roofing-cost-cornelius-nc', city: 'Cornelius' },

  // Individual LKN neighborhood pages (currentSlug auto-excludes self).
  // Cornelius
  { slug: 'roofing-the-peninsula-cornelius-nc', city: 'Cornelius' },
  { slug: 'roofing-antiquity-cornelius-nc', city: 'Cornelius' },
  { slug: 'roofing-jetton-cove-cornelius-nc', city: 'Cornelius' },
  { slug: 'metal-roofing-the-peninsula-cornelius-nc', city: 'Cornelius' },
  // Davidson
  { slug: 'roofing-river-run-davidson-nc', city: 'Davidson' },
  { slug: 'roofing-davidson-pointe-davidson-nc', city: 'Davidson' },
  // Mooresville
  { slug: 'roofing-the-point-mooresville-nc', city: 'Mooresville' },
  { slug: 'roof-replacement-the-point-mooresville-nc', city: 'Mooresville' },
  { slug: 'roofing-the-farms-mooresville-nc', city: 'Mooresville' },
  { slug: 'roofing-curtis-pond-mooresville-nc', city: 'Mooresville' },
  { slug: 'roofing-cove-creek-mooresville-nc', city: 'Mooresville' },
  // Huntersville
  { slug: 'roofing-birkdale-huntersville-nc', city: 'Huntersville' },
  { slug: 'roofing-vermillion-huntersville-nc', city: 'Huntersville' },
  { slug: 'roofing-skybrook-huntersville-nc', city: 'Huntersville' },
  { slug: 'roofing-northstone-huntersville-nc', city: 'Huntersville' },
  // Denver
  { slug: 'roofing-sailview-denver-nc', city: 'Denver' },
  { slug: 'roofing-governors-island-denver-nc', city: 'Denver' },
];

interface PatchResult {
  slug: string;
  changed: boolean;
  reason: string;
}

function patchFile(slug: string, city?: string): PatchResult {
  const filePath = path.join(APP_DIR, slug, 'page.tsx');
  if (!fs.existsSync(filePath)) {
    return { slug, changed: false, reason: 'missing-file' };
  }

  const original = fs.readFileSync(filePath, 'utf8');
  if (original.includes('LKNNeighborhoodGrid')) {
    return { slug, changed: false, reason: 'already-present' };
  }

  // Need a stable insertion anchor. Prefer LKNPartnershipsBlock (most pages
  // have it after iteration #1 patch). Fall back to <CTASection.
  const anchor = original.includes('<LKNPartnershipsBlock')
    ? '<LKNPartnershipsBlock'
    : original.includes('<CTASection')
    ? '<CTASection'
    : null;

  if (!anchor) {
    return { slug, changed: false, reason: 'no-anchor' };
  }

  // Add import.
  const importLine = `import { LKNNeighborhoodGrid } from '@/components/sections/LKNNeighborhoodGrid';`;
  let updated = original;

  const sectionsImportRegex = /^import .* from ['"]@\/components\/sections\/[^'"]+['"];?\s*$/gm;
  const matches = [...original.matchAll(sectionsImportRegex)];
  if (matches.length > 0) {
    const lastMatch = matches[matches.length - 1];
    const at = lastMatch.index! + lastMatch[0].length;
    updated = updated.slice(0, at) + '\n' + importLine + updated.slice(at);
  } else {
    const importBlock = updated.match(/^(?:import[^;]*;[\s]*)+/m);
    if (!importBlock) return { slug, changed: false, reason: 'no-import-block' };
    updated = updated.replace(importBlock[0], importBlock[0].trimEnd() + '\n' + importLine + '\n');
  }

  // Build the JSX block.
  const props: string[] = [];
  if (city) props.push(`currentCity="${city}"`);
  props.push(`currentSlug="${slug}"`);
  const jsx = `      <LKNNeighborhoodGrid ${props.join(' ')} />\n`;

  // Insert before the anchor tag (find it post-import-update, walk to start of line).
  const anchorIdx = updated.indexOf(anchor);
  if (anchorIdx === -1) {
    return { slug, changed: false, reason: 'anchor-lost' };
  }
  let lineStart = anchorIdx;
  while (lineStart > 0 && updated[lineStart - 1] !== '\n') lineStart--;
  updated = updated.slice(0, lineStart) + jsx + updated.slice(lineStart);

  if (!DRY_RUN) {
    fs.writeFileSync(filePath, updated);
  }
  return { slug, changed: true, reason: 'patched' };
}

function main() {
  const results = TARGETS.map((t) => patchFile(t.slug, t.city));
  const changed = results.filter((r) => r.changed);
  const skipped = results.filter((r) => !r.changed);

  console.log(`\n${DRY_RUN ? '[DRY RUN] ' : ''}LKNNeighborhoodGrid patch results:`);
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
