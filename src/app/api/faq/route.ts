import { NextRequest, NextResponse } from 'next/server';
import { searchEntries, getPublishedEntries, getCategories } from '@/lib/knowledge-base';
import type { KnowledgeBaseEntry } from '@/lib/db/schema';

const BASE_URL = 'https://www.bestroofingnow.com';

const CACHE_HEADERS = {
  'Cache-Control': 'public, max-age=3600, s-maxage=3600',
} as const;

interface FaqItem {
  question: string;
  answer: string;
  shortAnswer: string | null;
  speakableAnswer: string | null;
  category: string;
  url: string;
}

function toFaqItem(entry: KnowledgeBaseEntry): FaqItem {
  return {
    question: entry.question,
    answer: entry.answer,
    shortAnswer: entry.shortAnswer,
    speakableAnswer: entry.speakableAnswer,
    category: entry.category,
    url: `${BASE_URL}/roofing-faq#${entry.slug}`,
  };
}

/**
 * Public FAQ API for AI tools and external consumers.
 *
 * GET /api/faq              - returns all published FAQs
 * GET /api/faq?q=query      - search FAQs by keyword
 * GET /api/faq?category=xxx - filter FAQs by category
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const query = searchParams.get('q');
    const category = searchParams.get('category');

    let entries: KnowledgeBaseEntry[];

    if (query && query.trim().length > 0) {
      entries = await searchEntries(query.trim(), 10);
    } else if (category && category.trim().length > 0) {
      entries = await getPublishedEntries(category.trim());
    } else {
      entries = await getPublishedEntries();
    }

    const data = entries.map(toFaqItem);

    return NextResponse.json({ data }, { headers: CACHE_HEADERS });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Failed to fetch FAQs';

    return NextResponse.json(
      { data: [], error: message },
      { status: 500 },
    );
  }
}
