/**
 * SEO Site Scanner — orchestrates weekly ranking scans.
 *
 * Workflow:
 * 1. Discover all site pages (from sitemap or known routes)
 * 2. Fetch ranked keywords for the domain via DataForSEO
 * 3. Compare positions against the previous scan
 * 4. Store per-page ranking snapshots
 * 5. Update scan summary metrics
 */

import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { eq, desc, and, isNotNull } from 'drizzle-orm';
import {
  seoScans,
  pageRankings,
  type SeoScan,
  type PageRanking,
} from './db/schema';
import { getRankedKeywords } from './dataforseo/client';
import type { ParsedKeywordData } from './dataforseo/types';
import { runPageAudit } from './seo-auditor';
import { generateWeeklyReport } from './seo-reporter';

const TARGET_DOMAIN = 'bestroofingnow.com';

/** All known site paths — used to match DataForSEO URLs back to pages. */
const TRACKED_PAGE_PREFIXES = [
  '/',
  '/about',
  '/blog',
  '/services',
  '/locations',
  '/emergency',
  '/commercial',
  '/contact',
  '/faq',
  '/financing',
  '/projects',
  '/roof-types',
  '/guides',
  '/process',
  '/brands',
  '/compare',
  '/materials',
  '/ventilation',
  '/seasonal',
  '/problems',
  '/gutter',
  '/flat-roof',
  '/metal-roof',
  '/cedar-shake',
  '/architectural',
  '/chimney',
  '/fascia',
  '/hail',
  '/storm',
  '/hurricane',
  '/ice',
  '/luxury',
  '/copper',
  '/slate',
  '/tile',
  '/tpo',
  '/epdm',
  '/standing-seam',
];

function getDb() {
  if (!process.env.POSTGRES_URL) throw new Error('Database not configured');
  return drizzle(sql);
}

/**
 * Normalize a DataForSEO URL to a relative path on our domain.
 * e.g. "https://bestroofingnow.com/services" → "/services"
 */
function toRelativePath(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (!parsed.hostname.includes(TARGET_DOMAIN)) return null;
    return parsed.pathname || '/';
  } catch {
    if (url.startsWith('/')) return url;
    return null;
  }
}

/**
 * Get the most recent completed scan (for position comparison).
 */
async function getPreviousScan(): Promise<SeoScan | null> {
  const db = getDb();
  const rows = await db
    .select()
    .from(seoScans)
    .where(and(eq(seoScans.status, 'completed'), isNotNull(seoScans.completedAt)))
    .orderBy(desc(seoScans.completedAt))
    .limit(1);
  return rows[0] ?? null;
}

/**
 * Get previous rankings for a specific scan, keyed by url+keyword.
 */
async function getPreviousRankings(scanId: string): Promise<Map<string, number>> {
  const db = getDb();
  const rows = await db
    .select()
    .from(pageRankings)
    .where(eq(pageRankings.scanId, scanId));

  const map = new Map<string, number>();
  for (const row of rows) {
    if (row.position != null) {
      map.set(`${row.url}::${row.keyword}`, row.position);
    }
  }
  return map;
}

export interface ScanResult {
  scanId: string;
  status: 'completed' | 'failed';
  pagesScanned: number;
  keywordsTracked: number;
  totalVolume: number;
  avgPosition: number;
  topTenCount: number;
  strikingDistanceCount: number;
  duration: number;
  error?: string;
}

/**
 * Run a full site scan.
 *
 * @param trigger - What initiated the scan (manual, cron, api)
 * @param keywordLimit - Max keywords to fetch from DataForSEO (default 1000)
 */
export async function runSiteScan(
  trigger: 'manual' | 'cron' | 'api' = 'manual',
  keywordLimit = 1000,
): Promise<ScanResult> {
  const db = getDb();
  const startTime = Date.now();

  // 1. Create scan record
  const [scan] = await db
    .insert(seoScans)
    .values({
      status: 'running',
      trigger,
      startedAt: new Date(),
    })
    .returning();

  try {
    // 2. Fetch ranked keywords from DataForSEO
    const rankedKeywords = await getRankedKeywords(TARGET_DOMAIN, keywordLimit);

    // 3. Get previous scan for position comparison
    const prevScan = await getPreviousScan();
    const prevRankings = prevScan ? await getPreviousRankings(prevScan.id) : new Map<string, number>();

    // 4. Process and store per-page rankings
    const pagesSet = new Set<string>();
    const rankingRows: {
      scanId: string;
      url: string;
      keyword: string;
      position: number | null;
      previousPosition: number | null;
      positionChange: number | null;
      searchVolume: number;
      cpc: number;
    }[] = [];

    for (const kw of rankedKeywords) {
      const relativePath = kw.url ? toRelativePath(kw.url) : null;
      if (!relativePath) continue;

      pagesSet.add(relativePath);

      const prevKey = `${relativePath}::${kw.keyword}`;
      const prevPos = prevRankings.get(prevKey) ?? null;
      const currentPos = kw.position ?? null;

      // Position change: positive = improved (went from 15 to 5 = +10)
      const change = (prevPos != null && currentPos != null)
        ? prevPos - currentPos
        : null;

      rankingRows.push({
        scanId: scan.id,
        url: relativePath,
        keyword: kw.keyword,
        position: currentPos,
        previousPosition: prevPos,
        positionChange: change,
        searchVolume: kw.searchVolume,
        cpc: kw.cpc,
      });
    }

    // Batch insert rankings (chunks of 100)
    for (let i = 0; i < rankingRows.length; i += 100) {
      const chunk = rankingRows.slice(i, i + 100);
      await db.insert(pageRankings).values(chunk);
    }

    // 5. Calculate summary metrics
    const positions = rankingRows
      .filter(r => r.position != null)
      .map(r => r.position!);

    const avgPosition = positions.length > 0
      ? positions.reduce((sum, p) => sum + p, 0) / positions.length
      : 0;

    const topTenCount = positions.filter(p => p <= 10).length;
    const strikingDistanceCount = positions.filter(p => p >= 11 && p <= 30).length;
    const totalVolume = rankingRows.reduce((sum, r) => sum + r.searchVolume, 0);

    // 6. Run page-level audit (Phase 2)
    try {
      await runPageAudit(scan.id, 200);
    } catch (auditError) {
      console.error('Page audit failed (non-blocking):', auditError);
    }

    // 7. Generate weekly report (Phase 5)
    try {
      await generateWeeklyReport(scan.id);
    } catch (reportError) {
      console.error('Report generation failed (non-blocking):', reportError);
    }

    // 8. Update scan record with results
    await db
      .update(seoScans)
      .set({
        status: 'completed',
        pagesScanned: pagesSet.size,
        keywordsTracked: rankingRows.length,
        totalVolume,
        avgPosition: Math.round(avgPosition * 10) / 10,
        topTenCount,
        strikingDistanceCount,
        completedAt: new Date(),
      })
      .where(eq(seoScans.id, scan.id));

    const duration = Date.now() - startTime;

    return {
      scanId: scan.id,
      status: 'completed',
      pagesScanned: pagesSet.size,
      keywordsTracked: rankingRows.length,
      totalVolume,
      avgPosition: Math.round(avgPosition * 10) / 10,
      topTenCount,
      strikingDistanceCount,
      duration,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown scan error';

    // Clean up partial ranking data to avoid corrupting next scan's position comparison
    try {
      await db.delete(pageRankings).where(eq(pageRankings.scanId, scan.id));
    } catch (cleanupError) {
      console.error('Failed to clean up partial rankings:', cleanupError);
    }

    await db
      .update(seoScans)
      .set({
        status: 'failed',
        errorLog: errorMessage,
        completedAt: new Date(),
      })
      .where(eq(seoScans.id, scan.id));

    return {
      scanId: scan.id,
      status: 'failed',
      pagesScanned: 0,
      keywordsTracked: 0,
      totalVolume: 0,
      avgPosition: 0,
      topTenCount: 0,
      strikingDistanceCount: 0,
      duration: Date.now() - startTime,
      error: errorMessage,
    };
  }
}

/**
 * Get scan history (most recent first).
 */
export async function getScanHistory(limit = 20): Promise<SeoScan[]> {
  const db = getDb();
  return db
    .select()
    .from(seoScans)
    .orderBy(desc(seoScans.createdAt))
    .limit(limit);
}

/**
 * Get rankings for a specific scan, optionally filtered by URL.
 */
export async function getScanRankings(
  scanId: string,
  url?: string,
  limit = 500,
): Promise<PageRanking[]> {
  const db = getDb();
  const conditions = [eq(pageRankings.scanId, scanId)];
  if (url) conditions.push(eq(pageRankings.url, url));

  return db
    .select()
    .from(pageRankings)
    .where(and(...conditions))
    .limit(limit);
}

/**
 * Get top gainers and losers from a scan.
 */
export async function getScanMovers(scanId: string): Promise<{
  gainers: PageRanking[];
  losers: PageRanking[];
}> {
  const db = getDb();
  const all = await db
    .select()
    .from(pageRankings)
    .where(eq(pageRankings.scanId, scanId));

  const withChange = all.filter(r => r.positionChange != null && r.positionChange !== 0);

  const gainers = withChange
    .filter(r => r.positionChange! > 0)
    .sort((a, b) => b.positionChange! - a.positionChange!)
    .slice(0, 20);

  const losers = withChange
    .filter(r => r.positionChange! < 0)
    .sort((a, b) => a.positionChange! - b.positionChange!)
    .slice(0, 20);

  return { gainers, losers };
}

/**
 * Get a summary of all pages and their best ranking keyword.
 */
export async function getPagesSummary(scanId: string): Promise<{
  url: string;
  totalKeywords: number;
  bestPosition: number | null;
  bestKeyword: string | null;
  totalVolume: number;
}[]> {
  const db = getDb();
  const rankings = await db
    .select()
    .from(pageRankings)
    .where(eq(pageRankings.scanId, scanId));

  const pageMap = new Map<string, PageRanking[]>();
  for (const r of rankings) {
    const existing = pageMap.get(r.url) ?? [];
    existing.push(r);
    pageMap.set(r.url, existing);
  }

  return Array.from(pageMap.entries())
    .map(([url, kws]) => {
      const withPosition = kws.filter(k => k.position != null);
      const best = withPosition.sort((a, b) => (a.position ?? 999) - (b.position ?? 999))[0];

      return {
        url,
        totalKeywords: kws.length,
        bestPosition: best?.position ?? null,
        bestKeyword: best?.keyword ?? null,
        totalVolume: kws.reduce((sum, k) => sum + (k.searchVolume ?? 0), 0),
      };
    })
    .sort((a, b) => (a.bestPosition ?? 999) - (b.bestPosition ?? 999));
}
