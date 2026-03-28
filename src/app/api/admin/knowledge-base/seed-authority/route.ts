import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminToken } from '@/lib/admin-auth';
import { createEntry, getEntryBySlug } from '@/lib/knowledge-base';
import { AUTHORITY_KNOWLEDGE_BASE } from '@/lib/knowledge-base-seed-authority';
import { AUTHORITY_KNOWLEDGE_BASE_2 } from '@/lib/knowledge-base-seed-authority-2';

/** POST — seed the knowledge base with comprehensive roofing authority content */
export async function POST(request: NextRequest) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  let created = 0;
  let skipped = 0;
  const errors: string[] = [];

  const allEntries = [...AUTHORITY_KNOWLEDGE_BASE, ...AUTHORITY_KNOWLEDGE_BASE_2];

  for (const entry of allEntries) {
    const slug = entry.question
      .toLowerCase()
      .replace(/['']/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 100);

    try {
      const existing = await getEntryBySlug(slug);
      if (existing) {
        skipped++;
        continue;
      }

      await createEntry({
        slug,
        question: entry.question,
        answer: entry.answer,
        shortAnswer: entry.shortAnswer,
        speakableAnswer: entry.speakableAnswer,
        category: entry.category,
        subcategory: entry.subcategory,
        intent: entry.intent,
        triggerKeywords: entry.triggerKeywords,
        relatedSlugs: entry.relatedSlugs,
        voiceOptimized: entry.voiceOptimized,
        sourceCitations: [],
        published: true,
        publishedAt: new Date(),
      });
      created++;
    } catch (error) {
      errors.push(`${slug}: ${error instanceof Error ? error.message : 'unknown error'}`);
    }
  }

  return NextResponse.json({
    data: {
      total: allEntries.length,
      created,
      skipped,
      errors: errors.length,
      errorDetails: errors.slice(0, 10),
    },
  });
}
