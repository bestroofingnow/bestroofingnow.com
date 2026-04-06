import { NextRequest, NextResponse } from 'next/server';
import { getKeywordData, getSerpResults } from '@/lib/dataforseo/client';
import { getCachedKeywords, cacheKeywords, getCachedSerp, cacheSerp } from '@/lib/dataforseo/cache';
import { generateContentBrief } from '@/lib/content-brief-generator';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { contentBriefs } from '@/lib/db/schema';
import { verifyAdminToken } from '@/lib/admin-auth';

export async function POST(request: NextRequest) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    const { targetKeyword, secondaryKeywords = [] } = (await request.json()) as {
      targetKeyword: string;
      secondaryKeywords?: string[];
    };

    if (!targetKeyword?.trim()) {
      return NextResponse.json({ error: 'Target keyword is required' }, { status: 400 });
    }

    // 1. Get keyword data (cached or fresh)
    const allKeywords = [targetKeyword, ...secondaryKeywords];
    const { hits, misses } = await getCachedKeywords(allKeywords);

    let keywordData = hits;
    if (misses.length > 0) {
      const fresh = await getKeywordData(misses);
      await cacheKeywords(fresh);
      keywordData = [...hits, ...fresh];
    }

    // 2. Get SERP data (cached or fresh)
    let serpData = await getCachedSerp(targetKeyword);
    if (!serpData) {
      serpData = await getSerpResults(targetKeyword);
      if (serpData) await cacheSerp(serpData);
    }

    // 3. Generate brief with Claude
    const brief = await generateContentBrief(targetKeyword, keywordData, serpData, secondaryKeywords);

    // 4. Save to database
    if (process.env.POSTGRES_URL) {
      const db = drizzle(sql);
      await db.insert(contentBriefs).values({
        title: brief.title,
        targetKeyword: brief.targetKeyword,
        secondaryKeywords: brief.secondaryKeywords,
        briefContent: brief.briefContent,
        serpData: serpData as unknown as Record<string, unknown>,
        competitorUrls: brief.competitorUrls,
        suggestedHeadings: brief.suggestedHeadings,
        suggestedFaqs: brief.suggestedFaqs,
        wordCountTarget: brief.wordCountTarget,
        status: 'draft',
      });
    }

    return NextResponse.json({ data: brief });
  } catch (error) {
    console.error('Content brief generation error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Content brief generation failed' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    if (!process.env.POSTGRES_URL) {
      return NextResponse.json({ data: [] });
    }

    const db = drizzle(sql);
    const briefs = await db.select().from(contentBriefs).orderBy(contentBriefs.createdAt);

    return NextResponse.json({ data: briefs });
  } catch (error) {
    console.error('Error fetching briefs:', error);
    return NextResponse.json({ error: 'Failed to fetch briefs' }, { status: 500 });
  }
}
