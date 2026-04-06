/**
 * Knowledge Base data access layer.
 * Provides CRUD operations and search for the knowledge base.
 */

import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { eq, desc, and, ilike, or } from 'drizzle-orm';
import { knowledgeBase, type KnowledgeBaseEntry, type NewKnowledgeBaseEntry } from './db/schema';

function getDb() {
  if (!process.env.POSTGRES_URL) throw new Error('Database not configured');
  return drizzle(sql);
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 100);
}

// ============================================
// Read operations (public + admin)
// ============================================

export async function getPublishedEntries(category?: string, limit = 100): Promise<KnowledgeBaseEntry[]> {
  const db = getDb();
  const conditions = [eq(knowledgeBase.published, true)];
  if (category) conditions.push(eq(knowledgeBase.category, category));

  return db
    .select()
    .from(knowledgeBase)
    .where(and(...conditions))
    .orderBy(desc(knowledgeBase.publishedAt))
    .limit(limit);
}

export async function getEntryBySlug(slug: string): Promise<KnowledgeBaseEntry | null> {
  const db = getDb();
  const rows = await db
    .select()
    .from(knowledgeBase)
    .where(eq(knowledgeBase.slug, slug))
    .limit(1);
  return rows[0] ?? null;
}

export async function getAllEntries(limit = 200): Promise<KnowledgeBaseEntry[]> {
  const db = getDb();
  return db.select().from(knowledgeBase).orderBy(desc(knowledgeBase.createdAt)).limit(limit);
}

export async function getEntryById(id: string): Promise<KnowledgeBaseEntry | null> {
  const db = getDb();
  const rows = await db.select().from(knowledgeBase).where(eq(knowledgeBase.id, id)).limit(1);
  return rows[0] ?? null;
}

export async function getCategories(): Promise<{ category: string; count: number }[]> {
  const db = getDb();
  const entries = await db.select().from(knowledgeBase).where(eq(knowledgeBase.published, true));

  const countMap = new Map<string, number>();
  for (const entry of entries) {
    countMap.set(entry.category, (countMap.get(entry.category) || 0) + 1);
  }

  return Array.from(countMap.entries())
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count);
}

export async function getRelatedEntries(slug: string, limit = 5): Promise<KnowledgeBaseEntry[]> {
  const entry = await getEntryBySlug(slug);
  if (!entry) return [];

  const db = getDb();

  // Get by related slugs first, then by same category
  if (entry.relatedSlugs && entry.relatedSlugs.length > 0) {
    // Fetch entries matching related slugs directly
    const relatedBySlug: KnowledgeBaseEntry[] = [];
    for (const relatedSlug of entry.relatedSlugs) {
      if (relatedSlug === slug) continue;
      const related = await getEntryBySlug(relatedSlug);
      if (related?.published) relatedBySlug.push(related);
    }

    if (relatedBySlug.length >= limit) return relatedBySlug.slice(0, limit);

    // Fill with same category
    const sameCategory = await db
      .select()
      .from(knowledgeBase)
      .where(and(
        eq(knowledgeBase.published, true),
        eq(knowledgeBase.category, entry.category),
      ))
      .limit(limit + 1);

    const filtered = sameCategory.filter(r =>
      r.slug !== slug && !relatedBySlug.some(rb => rb.slug === r.slug)
    );

    return [...relatedBySlug, ...filtered].slice(0, limit);
  }

  return db
    .select()
    .from(knowledgeBase)
    .where(and(
      eq(knowledgeBase.published, true),
      eq(knowledgeBase.category, entry.category),
    ))
    .limit(limit + 1)
    .then(rows => rows.filter(r => r.slug !== slug).slice(0, limit));
}

/**
 * Search knowledge base entries by keyword matching.
 * Used by the AI assistant for RAG-lite retrieval.
 */
export async function searchEntries(query: string, limit = 5): Promise<KnowledgeBaseEntry[]> {
  const db = getDb();
  const terms = query.toLowerCase().split(/\s+/).filter(t => t.length > 2);

  if (terms.length === 0) return [];

  // Search by question and answer text matching
  const allPublished = await db
    .select()
    .from(knowledgeBase)
    .where(eq(knowledgeBase.published, true));

  // Score each entry based on keyword matches
  const scored = allPublished.map(entry => {
    let score = 0;
    const questionLower = entry.question.toLowerCase();
    const answerLower = entry.answer.toLowerCase();
    const triggerKws = (entry.triggerKeywords || []).map(k => k.toLowerCase());

    for (const term of terms) {
      // Trigger keyword match (highest weight)
      if (triggerKws.some(tk => tk.includes(term))) score += 10;
      // Question match
      if (questionLower.includes(term)) score += 5;
      // Answer match
      if (answerLower.includes(term)) score += 2;
      // Category match
      if (entry.category.toLowerCase().includes(term)) score += 3;
    }

    return { entry, score };
  });

  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(s => s.entry);
}

// ============================================
// Write operations (admin only)
// ============================================

export async function createEntry(data: Omit<NewKnowledgeBaseEntry, 'id' | 'createdAt' | 'updatedAt'>): Promise<KnowledgeBaseEntry> {
  const db = getDb();
  const slug = data.slug || slugify(data.question);

  const rows = await db.insert(knowledgeBase).values({
    ...data,
    slug,
    updatedAt: new Date(),
  }).returning();

  return rows[0];
}

export async function updateEntry(id: string, data: Partial<NewKnowledgeBaseEntry>): Promise<KnowledgeBaseEntry | null> {
  const db = getDb();
  const rows = await db
    .update(knowledgeBase)
    .set({ ...data, updatedAt: new Date() })
    .where(eq(knowledgeBase.id, id))
    .returning();
  return rows[0] ?? null;
}

export async function deleteEntry(id: string): Promise<boolean> {
  const db = getDb();
  const rows = await db.delete(knowledgeBase).where(eq(knowledgeBase.id, id)).returning();
  return rows.length > 0;
}

export async function publishEntry(id: string): Promise<KnowledgeBaseEntry | null> {
  return updateEntry(id, { published: true, publishedAt: new Date() });
}

export async function unpublishEntry(id: string): Promise<KnowledgeBaseEntry | null> {
  return updateEntry(id, { published: false });
}

// ============================================
// Seed from existing FAQs
// ============================================

export async function seedFromExistingFaqs(): Promise<{ created: number; skipped: number }> {
  // Dynamic import to avoid circular dependencies
  const { CHARLOTTE_AI_FAQS, EXTENDED_AI_FAQS } = await import('./ai-search-faqs');

  let created = 0;
  let skipped = 0;

  const allFaqs = [
    ...CHARLOTTE_AI_FAQS.map(f => ({ ...f, category: 'general' })),
    ...EXTENDED_AI_FAQS.map(f => ({ ...f, category: 'general' })),
  ];

  for (const faq of allFaqs) {
    const slug = slugify(faq.question);

    // Check if already exists
    const existing = await getEntryBySlug(slug);
    if (existing) {
      skipped++;
      continue;
    }

    await createEntry({
      slug,
      question: faq.question,
      answer: faq.answer,
      shortAnswer: faq.speakableAnswer || faq.answer.slice(0, 200),
      category: faq.category,
      triggerKeywords: faq.triggerKeywords,
      intent: faq.intent,
      voiceOptimized: faq.voiceOptimized,
      speakableAnswer: faq.speakableAnswer,
      sourceCitations: [],
      relatedSlugs: [],
      published: true,
      publishedAt: new Date(),
    });
    created++;
  }

  return { created, skipped };
}
