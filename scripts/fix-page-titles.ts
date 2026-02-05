/**
 * Automated script to fix SEO title issues across all page.tsx files:
 * 1. Remove "| Best Roofing Now" suffix from metadata titles (template adds it)
 * 2. Keep brand in openGraph.title and twitter.title (those don't use template)
 * 3. Report titles that are still too long after fix (> 42 chars, since template adds 18)
 */

import * as fs from 'fs';
import * as path from 'path';

function findPageFiles(dir: string): string[] {
  const results: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findPageFiles(fullPath));
    } else if (entry.name === 'page.tsx') {
      results.push(fullPath);
    }
  }
  return results;
}

// Brand suffixes to remove (order matters - longest first)
const BRAND_SUFFIXES = [
  ' | Best Roofing Now Charlotte NC',
  ' | Best Roofing Now Charlotte',
  ' | Best Roofing Now',
];

function processFile(filePath: string): { changed: boolean; warnings: string[] } {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  const warnings: string[] = [];
  const relPath = path.relative(process.cwd(), filePath).replace(/\\/g, '/');

  // Skip admin pages, blocked page, and homepage (already fixed separately)
  if (relPath.includes('/admin/') || relPath === 'src/app/page.tsx') {
    return { changed: false, warnings: [] };
  }

  // Strategy: We need to remove brand from metadata-level title properties
  // but NOT from openGraph.title or twitter.title.
  //
  // The tricky part is that title appears in multiple contexts in the same file.
  // We'll use a state machine to track whether we're inside openGraph/twitter blocks.

  const lines = content.split('\n');
  let braceDepth = 0;
  let inOpenGraph = false;
  let inTwitter = false;
  let ogBraceStart = 0;
  let twitterBraceStart = 0;
  let changed = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Track openGraph block
    if (line.match(/openGraph\s*[:=]\s*\{/)) {
      inOpenGraph = true;
      ogBraceStart = braceDepth;
    }
    if (line.match(/twitter\s*[:=]\s*\{/)) {
      inTwitter = true;
      twitterBraceStart = braceDepth;
    }

    // Count braces
    for (const ch of line) {
      if (ch === '{') braceDepth++;
      if (ch === '}') {
        braceDepth--;
        if (inOpenGraph && braceDepth <= ogBraceStart) inOpenGraph = false;
        if (inTwitter && braceDepth <= twitterBraceStart) inTwitter = false;
      }
    }

    // Skip if inside openGraph or twitter blocks
    if (inOpenGraph || inTwitter) continue;

    // Check if this line has a title with brand suffix
    if (line.match(/title[\s]*[:=]/) && line.includes('Best Roofing Now')) {
      let newLine = line;
      for (const suffix of BRAND_SUFFIXES) {
        if (newLine.includes(suffix)) {
          newLine = newLine.replace(suffix, '');
          changed = true;
          break;
        }
      }
      lines[i] = newLine;

      // Check resulting title length
      const titleMatch = newLine.match(/title[\s]*[:=]\s*['"`](.+?)['"`]/);
      if (titleMatch) {
        const titleText = titleMatch[1];
        const totalLength = titleText.length + ' | Best Roofing Now'.length;
        if (totalLength > 60) {
          warnings.push(`${relPath}:${i + 1} - Title "${titleText}" (${titleText.length} chars) → total ${totalLength} chars (over 60)`);
        }
      }
    }
  }

  if (changed) {
    content = lines.join('\n');
    fs.writeFileSync(filePath, content, 'utf8');
  }

  return { changed, warnings };
}

// Main
const srcDir = path.join(process.cwd(), 'src', 'app');
const pageFiles = findPageFiles(srcDir);

console.log(`Found ${pageFiles.length} page.tsx files\n`);

let totalChanged = 0;
const allWarnings: string[] = [];

for (const file of pageFiles) {
  const { changed, warnings } = processFile(file);
  if (changed) {
    totalChanged++;
    const relPath = path.relative(process.cwd(), file).replace(/\\/g, '/');
    console.log(`  FIXED: ${relPath}`);
  }
  allWarnings.push(...warnings);
}

console.log(`\n${totalChanged} files modified`);

if (allWarnings.length > 0) {
  console.log(`\n=== WARNINGS: ${allWarnings.length} titles still over 60 chars total ===`);
  allWarnings.forEach(w => console.log(`  ${w}`));
}
