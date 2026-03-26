import { NextRequest, NextResponse } from 'next/server';
import { getPublishedEntries, getEntryBySlug, searchEntries, getCategories } from '@/lib/knowledge-base';

/**
 * Public knowledge base API.
 * Used by the AI assistant for RAG retrieval and by crawlers.
 *
 * GET /api/knowledge-base?q=search_query      — search
 * GET /api/knowledge-base?category=costs       — filter by category
 * GET /api/knowledge-base?slug=how-much-roof   — single entry
 * GET /api/knowledge-base?categories=true       — list categories
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    const category = searchParams.get('category');
    const slug = searchParams.get('slug');
    const showCategories = searchParams.get('categories');

    if (showCategories === 'true') {
      const categories = await getCategories();
      return NextResponse.json({ data: categories });
    }

    if (slug) {
      const entry = await getEntryBySlug(slug);
      if (!entry || !entry.published) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 });
      }
      return NextResponse.json({ data: entry });
    }

    if (query) {
      const results = await searchEntries(query, 5);
      return NextResponse.json({ data: results });
    }

    const entries = await getPublishedEntries(category || undefined);
    return NextResponse.json({ data: entries });
  } catch (error) {
    console.error('Knowledge base API error:', error);
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
