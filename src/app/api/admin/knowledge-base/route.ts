import { NextRequest, NextResponse } from 'next/server';
import { getAllEntries, createEntry } from '@/lib/knowledge-base';
import { verifyAdminToken } from '@/lib/admin-auth';

export async function GET(request: NextRequest) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    const entries = await getAllEntries();
    return NextResponse.json({ data: entries });
  } catch (error) {
    console.error('KB list error:', error);
    return NextResponse.json({ error: 'Failed to fetch entries' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    const body = await request.json();

    if (!body.question?.trim() || !body.answer?.trim()) {
      return NextResponse.json({ error: 'Question and answer are required' }, { status: 400 });
    }

    const entry = await createEntry({
      slug: body.slug || undefined,
      question: body.question,
      answer: body.answer,
      shortAnswer: body.shortAnswer || null,
      category: body.category || 'general',
      subcategory: body.subcategory || null,
      triggerKeywords: body.triggerKeywords || [],
      intent: body.intent || 'informational',
      voiceOptimized: body.voiceOptimized ?? true,
      speakableAnswer: body.speakableAnswer || null,
      sourceCitations: body.sourceCitations || [],
      relatedSlugs: body.relatedSlugs || [],
      searchVolume: body.searchVolume || null,
      published: body.published ?? false,
      publishedAt: body.published ? new Date() : null,
    });

    return NextResponse.json({ data: entry }, { status: 201 });
  } catch (error) {
    console.error('KB create error:', error);
    return NextResponse.json({ error: 'Failed to create entry' }, { status: 500 });
  }
}
