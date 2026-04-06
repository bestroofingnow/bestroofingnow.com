import { NextRequest, NextResponse } from 'next/server';
import { getKeywordData } from '@/lib/dataforseo/client';
import { getCachedKeywords, cacheKeywords } from '@/lib/dataforseo/cache';
import { verifyAdminToken } from '@/lib/admin-auth';

export async function POST(request: NextRequest) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    const { keywords } = (await request.json()) as { keywords: string[] };

    if (!keywords?.length || keywords.length > 50) {
      return NextResponse.json(
        { error: 'Provide 1-50 keywords' },
        { status: 400 }
      );
    }

    // Check cache first
    const { hits, misses } = await getCachedKeywords(keywords);

    let freshData = hits;

    // Fetch uncached keywords from DataForSEO
    if (misses.length > 0) {
      const apiResults = await getKeywordData(misses);
      await cacheKeywords(apiResults);
      freshData = [...hits, ...apiResults];
    }

    // Sort by search volume descending
    freshData.sort((a, b) => b.searchVolume - a.searchVolume);

    return NextResponse.json({
      data: freshData,
      cached: hits.length,
      fetched: misses.length,
    });
  } catch (error) {
    console.error('Keyword research error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Keyword research failed' },
      { status: 500 }
    );
  }
}
