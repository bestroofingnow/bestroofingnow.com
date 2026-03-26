/**
 * DB-backed cache layer for DataForSEO API results.
 * Avoids repeated API calls for the same keywords/queries.
 *
 * TTL: 7 days for keyword data, 3 days for SERP data.
 */

import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { eq } from 'drizzle-orm';
import { keywordResearch, serpAnalyses } from '../db/schema';
import type { ParsedKeywordData, ParsedSerpData } from './types';

const KEYWORD_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
const SERP_TTL_MS = 3 * 24 * 60 * 60 * 1000; // 3 days

function getDb() {
  if (!process.env.POSTGRES_URL) return null;
  return drizzle(sql);
}

function isStale(fetchedAt: Date, ttlMs: number): boolean {
  return Date.now() - fetchedAt.getTime() > ttlMs;
}

/**
 * Get cached keyword data. Returns null if not cached or stale.
 */
export async function getCachedKeyword(keyword: string): Promise<ParsedKeywordData | null> {
  const db = getDb();
  if (!db) return null;

  try {
    const rows = await db
      .select()
      .from(keywordResearch)
      .where(eq(keywordResearch.keyword, keyword.toLowerCase()))
      .limit(1);

    const row = rows[0];
    if (!row || isStale(row.fetchedAt, KEYWORD_TTL_MS)) return null;

    return {
      keyword: row.keyword,
      searchVolume: row.searchVolume ?? 0,
      cpc: row.cpc ?? 0,
      competition: row.competition ?? 0,
      difficulty: row.difficulty ?? 0,
      trends: (row.trends as number[]) ?? [],
      serpFeatures: (row.serpFeatures as string[]) ?? [],
    };
  } catch (error) {
    console.error('Cache read error (keyword):', error);
    return null;
  }
}

/**
 * Cache keyword data in the database.
 */
export async function cacheKeyword(data: ParsedKeywordData): Promise<void> {
  const db = getDb();
  if (!db) return;

  try {
    // Upsert: delete old then insert
    await db.delete(keywordResearch).where(eq(keywordResearch.keyword, data.keyword.toLowerCase()));
    await db.insert(keywordResearch).values({
      keyword: data.keyword.toLowerCase(),
      searchVolume: data.searchVolume,
      cpc: data.cpc,
      competition: data.competition,
      difficulty: data.difficulty,
      trends: data.trends,
      serpFeatures: data.serpFeatures,
      fetchedAt: new Date(),
    });
  } catch (error) {
    console.error('Cache write error (keyword):', error);
  }
}

/**
 * Bulk cache keywords. Returns which keywords were cache hits vs misses.
 */
export async function getCachedKeywords(keywords: string[]): Promise<{
  hits: ParsedKeywordData[];
  misses: string[];
}> {
  const hits: ParsedKeywordData[] = [];
  const misses: string[] = [];

  for (const kw of keywords) {
    const cached = await getCachedKeyword(kw);
    if (cached) {
      hits.push(cached);
    } else {
      misses.push(kw);
    }
  }

  return { hits, misses };
}

/**
 * Bulk cache keyword data.
 */
export async function cacheKeywords(data: ParsedKeywordData[]): Promise<void> {
  for (const kw of data) {
    await cacheKeyword(kw);
  }
}

/**
 * Get cached SERP analysis. Returns null if not cached or stale.
 */
export async function getCachedSerp(keyword: string): Promise<ParsedSerpData | null> {
  const db = getDb();
  if (!db) return null;

  try {
    const rows = await db
      .select()
      .from(serpAnalyses)
      .where(eq(serpAnalyses.keyword, keyword.toLowerCase()))
      .limit(1);

    const row = rows[0];
    if (!row || isStale(row.fetchedAt, SERP_TTL_MS)) return null;

    return {
      keyword: row.keyword,
      results: (row.serpResults as ParsedSerpData['results']) ?? [],
      featuredSnippet: row.featuredSnippet as ParsedSerpData['featuredSnippet'],
      peopleAlsoAsk: (row.peopleAlsoAsk as string[]) ?? [],
      localPack: row.localPack as ParsedSerpData['localPack'],
      aiOverview: row.aiOverview ?? false,
    };
  } catch (error) {
    console.error('Cache read error (serp):', error);
    return null;
  }
}

/**
 * Cache SERP analysis in the database.
 */
export async function cacheSerp(data: ParsedSerpData): Promise<void> {
  const db = getDb();
  if (!db) return;

  try {
    await db.delete(serpAnalyses).where(eq(serpAnalyses.keyword, data.keyword.toLowerCase()));
    await db.insert(serpAnalyses).values({
      keyword: data.keyword.toLowerCase(),
      serpResults: data.results,
      featuredSnippet: data.featuredSnippet,
      peopleAlsoAsk: data.peopleAlsoAsk,
      localPack: data.localPack,
      aiOverview: data.aiOverview,
      fetchedAt: new Date(),
    });
  } catch (error) {
    console.error('Cache write error (serp):', error);
  }
}
