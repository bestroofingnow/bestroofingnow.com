/**
 * AI-Powered SEO Page Optimizer (Phase 3).
 *
 * Takes scan + audit data and uses Claude to generate:
 * - Optimized meta titles and descriptions
 * - Improved heading structures
 * - Content expansion suggestions
 * - Internal linking recommendations
 * - Schema markup improvements
 *
 * All suggestions are stored as pending optimizations for admin review.
 */

import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { eq, and, desc } from 'drizzle-orm';
import {
  pageOptimizations,
  pageAudits,
  pageRankings,
  type PageAudit,
  type PageRanking,
  type PageOptimization,
} from './db/schema';
import { groqJSON } from './groq-client';

function getDb() {
  if (!process.env.POSTGRES_URL) throw new Error('Database not configured');
  return drizzle(sql);
}

interface OptimizationSuggestion {
  optimizationType: 'meta' | 'headings' | 'content' | 'schema' | 'links';
  currentValue: string | null;
  suggestedValue: string;
  reasoning: string;
  impact: 'low' | 'medium' | 'high' | 'critical';
}

/**
 * Generate AI optimizations for a single page using audit + ranking data.
 */
async function generatePageOptimizations(
  audit: PageAudit,
  rankings: PageRanking[],
): Promise<OptimizationSuggestion[]> {
  const topKeywords = rankings
    .filter(r => r.position != null)
    .sort((a, b) => (a.position ?? 999) - (b.position ?? 999))
    .slice(0, 10);

  const strikingDistance = rankings.filter(r => {
    const pos = r.position ?? 999;
    return pos >= 11 && pos <= 30;
  });

  const prompt = `You are an expert SEO consultant for Best Roofing Now (bestroofingnow.com), a roofing company in Charlotte, NC.

Analyze this page and generate specific, actionable SEO + AEO optimizations.

PAGE: ${audit.url}
CURRENT TITLE: ${audit.title || 'MISSING'}
TITLE LENGTH: ${audit.titleLength} chars
CURRENT META DESCRIPTION: ${audit.metaDescription || 'MISSING'}
META DESC LENGTH: ${audit.metaDescriptionLength} chars
H1 COUNT: ${audit.h1Count}
H2 COUNT: ${audit.h2Count}
WORD COUNT: ${audit.wordCount}
IMAGES: ${audit.imageCount} total, ${audit.imagesWithoutAlt} missing alt
INTERNAL LINKS: ${audit.internalLinks}
SCHEMA: ${audit.hasSchemaMarkup ? `Yes (${(audit.schemaTypes as string[] || []).join(', ')})` : 'None'}
FAQ SCHEMA: ${audit.hasFaqSchema ? 'Yes' : 'No'}
SEO SCORE: ${audit.score}/100

CURRENT ISSUES:
${(audit.issues as { severity: string; message: string }[] || []).map(i => `- [${i.severity}] ${i.message}`).join('\n') || 'None'}

RANKING KEYWORDS (top 10):
${topKeywords.map(k => `- "${k.keyword}" — position #${k.position}, volume: ${k.searchVolume}`).join('\n') || 'No ranking data'}

STRIKING DISTANCE KEYWORDS (positions 11-30):
${strikingDistance.map(k => `- "${k.keyword}" — position #${k.position}, volume: ${k.searchVolume}`).join('\n') || 'None'}

REQUIREMENTS:
Generate optimizations in these categories. Only include categories where real improvement is needed:

1. **meta** — Optimized title tag (50-60 chars) and meta description (120-160 chars) that naturally include the primary keyword and a compelling CTA. Keep "Charlotte NC" and "Best Roofing Now" when relevant.

2. **headings** — Suggest improved H1 and H2 structure that covers the topic comprehensively and includes striking-distance keywords naturally.

3. **content** — If word count is low (<800), suggest a content expansion plan. Include specific sections to add, targeting striking-distance keywords. Include a 40-60 word "citation paragraph" optimized for AI Overview citation.

4. **schema** — Suggest specific JSON-LD schema types to add (LocalBusiness, FAQPage, Service, HowTo, etc.) with the exact markup.

5. **links** — Suggest 3-5 internal linking opportunities to relevant pages on the site (/services, /locations, /blog, /financing, /faq).

Respond in this exact JSON array format:
[
  {
    "optimizationType": "meta",
    "currentValue": "current title or description",
    "suggestedValue": "optimized version",
    "reasoning": "why this is better",
    "impact": "high"
  }
]

Only include optimizations that will meaningfully improve rankings or AEO visibility. Be specific, not generic.`;

  try {
    const parsed = await groqJSON<OptimizationSuggestion[]>(prompt, {
      maxTokens: 4000,
      temperature: 0.3,
    });

    const suggestions = Array.isArray(parsed) ? parsed : [];
    return suggestions.filter(s =>
      s.optimizationType && s.suggestedValue && s.reasoning && s.impact
    );
  } catch (error) {
    console.error('Failed to generate optimizations via Groq:', error);
    return [];
  }
}

/**
 * Run AI optimizer for all pages in a scan.
 * Processes pages with the worst audit scores first.
 */
export async function runOptimizer(
  scanId: string,
  maxPages = 50,
): Promise<{
  pagesOptimized: number;
  totalSuggestions: number;
  highImpact: number;
}> {
  const db = getDb();

  // Get audit results sorted by score (worst first)
  const audits = await db
    .select()
    .from(pageAudits)
    .where(eq(pageAudits.scanId, scanId));

  const sortedAudits = audits
    .sort((a, b) => (a.score ?? 0) - (b.score ?? 0))
    .slice(0, maxPages);

  let totalSuggestions = 0;
  let highImpact = 0;
  let pagesOptimized = 0;

  // Process pages sequentially to avoid rate limits
  for (const audit of sortedAudits) {
    try {
      // Get ranking data for this page
      const rankings = await db
        .select()
        .from(pageRankings)
        .where(and(
          eq(pageRankings.scanId, scanId),
          eq(pageRankings.url, audit.url),
        ));

      const suggestions = await generatePageOptimizations(audit, rankings);

      if (suggestions.length > 0) {
        pagesOptimized++;
        totalSuggestions += suggestions.length;

        for (const s of suggestions) {
          if (s.impact === 'high' || s.impact === 'critical') highImpact++;

          await db.insert(pageOptimizations).values({
            scanId,
            url: audit.url,
            optimizationType: s.optimizationType,
            currentValue: s.currentValue,
            suggestedValue: s.suggestedValue,
            reasoning: s.reasoning,
            impact: s.impact,
            status: 'pending',
          });
        }
      }
    } catch (error) {
      console.error(`Optimizer error for ${audit.url}:`, error);
    }
  }

  return { pagesOptimized, totalSuggestions, highImpact };
}

/**
 * Get all optimization suggestions for a scan.
 */
export async function getOptimizations(
  scanId: string,
  status?: string,
): Promise<PageOptimization[]> {
  const db = getDb();
  const conditions = [eq(pageOptimizations.scanId, scanId)];
  if (status) conditions.push(eq(pageOptimizations.status, status));

  return db
    .select()
    .from(pageOptimizations)
    .where(and(...conditions))
    .orderBy(desc(pageOptimizations.createdAt));
}

/**
 * Get optimizations for a specific page URL.
 */
export async function getPageOptimizations(url: string, limit = 50): Promise<PageOptimization[]> {
  const db = getDb();
  return db
    .select()
    .from(pageOptimizations)
    .where(eq(pageOptimizations.url, url))
    .orderBy(desc(pageOptimizations.createdAt))
    .limit(limit);
}

/**
 * Update optimization status (approve, reject, apply).
 */
export async function updateOptimizationStatus(
  id: string,
  status: 'approved' | 'applied' | 'rejected',
): Promise<PageOptimization | null> {
  const db = getDb();
  const values: { status: string; appliedAt?: Date } = { status };
  if (status === 'applied') values.appliedAt = new Date();

  const rows = await db
    .update(pageOptimizations)
    .set(values)
    .where(eq(pageOptimizations.id, id))
    .returning();

  return rows[0] ?? null;
}
