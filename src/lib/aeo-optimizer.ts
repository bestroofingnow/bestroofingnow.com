/**
 * AEO (Answer Engine Optimization) Pipeline — Phase 4.
 *
 * Generates structured data and AI-optimized content for AI Overview citations:
 * - FAQ schema (FAQPage JSON-LD) based on keyword PAA data
 * - LocalBusiness schema enhancements
 * - Service schema for service pages
 * - Citation-optimized paragraphs (40-60 words, factual, concise)
 * - AEO scoring per page
 *
 * Integrates with DataForSEO SERP data (AI Overview detection, PAA questions).
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
} from './db/schema';
import { getSerpResults } from './dataforseo/client';
import { getCachedSerp, cacheSerp } from './dataforseo/cache';
import { groqJSON } from './groq-client';

function getDb() {
  if (!process.env.POSTGRES_URL) throw new Error('Database not configured');
  return drizzle(sql);
}

/** Business info for LocalBusiness schema */
const BUSINESS_INFO = {
  name: 'Best Roofing Now',
  type: 'RoofingContractor',
  url: 'https://bestroofingnow.com',
  phone: '(704) 305-1980',
  email: 'info@bestroofingnow.com',
  address: {
    streetAddress: '1108 Greenwood Cliff',
    addressLocality: 'Charlotte',
    addressRegion: 'NC',
    postalCode: '28204',
    addressCountry: 'US',
  },
  geo: { latitude: 35.2271, longitude: -80.8431 },
  areaServed: [
    'Charlotte', 'Huntersville', 'Cornelius', 'Davidson', 'Mooresville',
    'Concord', 'Matthews', 'Mint Hill', 'Indian Trail', 'Fort Mill',
    'Rock Hill', 'Gastonia', 'Mt Holly', 'Denver', 'Lake Norman',
  ],
  priceRange: '$$',
  rating: { value: 4.9, count: 150 },
};

interface AeoSuggestion {
  type: 'faq_schema' | 'citation_paragraph' | 'local_schema' | 'service_schema' | 'how_to_schema';
  content: string;
  reasoning: string;
  targetKeyword?: string;
}

/**
 * Generate FAQ Schema JSON-LD for a page based on PAA questions and keywords.
 */
function generateFaqSchema(faqs: { question: string; answer: string }[]): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
  return JSON.stringify(schema, null, 2);
}

/**
 * Generate LocalBusiness schema JSON-LD.
 */
function generateLocalBusinessSchema(): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': BUSINESS_INFO.type,
    name: BUSINESS_INFO.name,
    url: BUSINESS_INFO.url,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      '@type': 'PostalAddress',
      ...BUSINESS_INFO.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...BUSINESS_INFO.geo,
    },
    areaServed: BUSINESS_INFO.areaServed.map(city => ({
      '@type': 'City',
      name: city,
    })),
    priceRange: BUSINESS_INFO.priceRange,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS_INFO.rating.value,
      reviewCount: BUSINESS_INFO.rating.count,
    },
    sameAs: [
      'https://www.facebook.com/bestroofingnow',
      'https://www.google.com/maps/place/Best+Roofing+Now',
    ],
  };
  return JSON.stringify(schema, null, 2);
}

/**
 * Use Claude to generate AEO-optimized content for a page.
 */
interface GroqAeoResult {
  faqs: { question: string; answer: string }[];
  citationParagraphs: { text: string; targetKeyword: string }[];
  serviceSchema: { name: string; description: string } | null;
}

async function generateAeoContent(
  audit: PageAudit,
  rankings: PageRanking[],
  paaQuestions: string[],
  hasAiOverview: boolean,
): Promise<AeoSuggestion[]> {
  const topKeywords = rankings
    .filter(r => r.position != null)
    .sort((a, b) => (a.position ?? 999) - (b.position ?? 999))
    .slice(0, 5);

  const primaryKeyword = topKeywords[0]?.keyword || audit.url.replace(/^\//, '').replace(/-/g, ' ');

  const prompt = `You are an AEO (Answer Engine Optimization) specialist for Best Roofing Now, a roofing company in Charlotte, NC.

Generate content optimized for AI Overview citations and answer engines (ChatGPT, Perplexity, Google AI Overview).

PAGE: ${audit.url}
PRIMARY KEYWORD: ${primaryKeyword}
AI OVERVIEW DETECTED: ${hasAiOverview ? 'Yes — this keyword triggers AI Overview' : 'No — opportunity to be first'}
HAS FAQ SCHEMA: ${audit.hasFaqSchema ? 'Yes' : 'No — add FAQPage schema'}

PEOPLE ALSO ASK QUESTIONS:
${paaQuestions.length > 0 ? paaQuestions.map(q => `- ${q}`).join('\n') : 'None found — generate relevant questions'}

TOP RANKING KEYWORDS:
${topKeywords.map(k => `- "${k.keyword}" — #${k.position}, vol: ${k.searchVolume}`).join('\n') || 'None'}

Generate the following:

1. **FAQ Schema Content**: 3-5 Q&A pairs relevant to this page. Each answer should be:
   - 40-80 words (concise, factual, citation-worthy)
   - Include specific Charlotte NC context
   - Reference Best Roofing Now expertise naturally
   - Structured to match PAA questions when available

2. **Citation Paragraphs**: 2-3 standalone paragraphs (40-60 words each) that AI can directly cite. These should:
   - Start with a direct factual statement
   - Include the primary keyword naturally
   - Mention Charlotte NC / Lake Norman area
   - Be self-contained (make sense without surrounding context)
   - Include a specific stat, fact, or actionable insight

3. **Service Schema** (if service page): Suggest a Service schema with name, description, provider, areaServed.

Respond in this exact JSON format:
{
  "faqs": [
    {"question": "...", "answer": "..."}
  ],
  "citationParagraphs": [
    {"text": "...", "targetKeyword": "..."}
  ],
  "serviceSchema": null
}`;

  try {
    const parsed = await groqJSON<GroqAeoResult>(prompt, {
      maxTokens: 4000,
      temperature: 0.3,
    });

    const suggestions: AeoSuggestion[] = [];

    // FAQ schema
    if (parsed.faqs?.length > 0 && !audit.hasFaqSchema) {
      const faqSchemaJson = generateFaqSchema(parsed.faqs);
      suggestions.push({
        type: 'faq_schema',
        content: faqSchemaJson,
        reasoning: `Add FAQPage schema with ${parsed.faqs.length} Q&As targeting PAA queries. This enables FAQ rich results and improves AI citation probability.`,
        targetKeyword: primaryKeyword,
      });
    }

    // Citation paragraphs
    for (const cp of (parsed.citationParagraphs || [])) {
      suggestions.push({
        type: 'citation_paragraph',
        content: cp.text,
        reasoning: 'AI-optimized citation paragraph: concise, factual, self-contained. Designed for direct AI Overview extraction.',
        targetKeyword: cp.targetKeyword || primaryKeyword,
      });
    }

    // Service schema
    if (parsed.serviceSchema) {
      const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: parsed.serviceSchema.name,
        description: parsed.serviceSchema.description,
        provider: {
          '@type': BUSINESS_INFO.type,
          name: BUSINESS_INFO.name,
          url: BUSINESS_INFO.url,
        },
        areaServed: BUSINESS_INFO.areaServed.map(city => ({
          '@type': 'City',
          name: city,
        })),
      };
      suggestions.push({
        type: 'service_schema',
        content: JSON.stringify(serviceSchema, null, 2),
        reasoning: 'Add Service schema to help search engines and AI understand the specific service offered on this page.',
        targetKeyword: primaryKeyword,
      });
    }

    // LocalBusiness schema if not present
    if (!audit.hasSchemaMarkup && audit.url === '/') {
      suggestions.push({
        type: 'local_schema',
        content: generateLocalBusinessSchema(),
        reasoning: 'Add comprehensive LocalBusiness schema with address, geo, ratings, and area served. Critical for local SEO and AI visibility.',
      });
    }

    return suggestions;
  } catch (error) {
    console.error('Failed to generate AEO content via Groq:', error);
    return [];
  }
}

/**
 * Run AEO pipeline for all pages in a scan.
 */
export async function runAeoPipeline(
  scanId: string,
  maxPages = 30,
): Promise<{
  pagesProcessed: number;
  faqSchemas: number;
  citationParagraphs: number;
  serviceSchemas: number;
}> {
  const db = getDb();

  // Get audits, prioritize pages without FAQ schema
  const audits = await db
    .select()
    .from(pageAudits)
    .where(eq(pageAudits.scanId, scanId));

  const sorted = audits
    .sort((a, b) => {
      // Prioritize pages without schema, then by score
      if (a.hasFaqSchema !== b.hasFaqSchema) return a.hasFaqSchema ? 1 : -1;
      return (a.score ?? 0) - (b.score ?? 0);
    })
    .slice(0, maxPages);

  let faqSchemas = 0;
  let citationParagraphs = 0;
  let serviceSchemas = 0;
  let pagesProcessed = 0;

  for (const audit of sorted) {
    try {
      // Get rankings for this page
      const rankings = await db
        .select()
        .from(pageRankings)
        .where(and(
          eq(pageRankings.scanId, scanId),
          eq(pageRankings.url, audit.url),
        ));

      // Get PAA data from the primary keyword's SERP
      const primaryKeyword = rankings
        .filter(r => r.position != null)
        .sort((a, b) => (a.position ?? 999) - (b.position ?? 999))[0]?.keyword;

      let paaQuestions: string[] = [];
      let hasAiOverview = false;

      if (primaryKeyword) {
        let serpData = await getCachedSerp(primaryKeyword);
        if (!serpData) {
          serpData = await getSerpResults(primaryKeyword);
          if (serpData) await cacheSerp(serpData);
        }
        if (serpData) {
          paaQuestions = serpData.peopleAlsoAsk || [];
          hasAiOverview = serpData.aiOverview || false;
        }
      }

      const suggestions = await generateAeoContent(audit, rankings, paaQuestions, hasAiOverview);

      if (suggestions.length > 0) {
        pagesProcessed++;

        for (const s of suggestions) {
          if (s.type === 'faq_schema') faqSchemas++;
          if (s.type === 'citation_paragraph') citationParagraphs++;
          if (s.type === 'service_schema' || s.type === 'local_schema') serviceSchemas++;

          await db.insert(pageOptimizations).values({
            scanId,
            url: audit.url,
            optimizationType: 'aeo',
            currentValue: s.type,
            suggestedValue: s.content,
            reasoning: s.reasoning,
            impact: s.type === 'faq_schema' ? 'high' : s.type === 'local_schema' ? 'critical' : 'medium',
            status: 'pending',
          });
        }
      }
    } catch (error) {
      console.error(`AEO error for ${audit.url}:`, error);
    }
  }

  return { pagesProcessed, faqSchemas, citationParagraphs, serviceSchemas };
}

/**
 * Get AEO-specific optimizations for a scan.
 */
export async function getAeoOptimizations(scanId: string) {
  const db = getDb();
  return db
    .select()
    .from(pageOptimizations)
    .where(and(
      eq(pageOptimizations.scanId, scanId),
      eq(pageOptimizations.optimizationType, 'aeo'),
    ))
    .orderBy(desc(pageOptimizations.createdAt));
}
