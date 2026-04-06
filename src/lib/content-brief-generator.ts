/**
 * Content brief generator using DataForSEO keyword data + Groq (Llama 4).
 * Generates structured content briefs for blog posts.
 *
 * Uses Groq for fast, cost-effective brief generation.
 * Claude is reserved for actual blog writing and deep research.
 */

import { groqJSON } from './groq-client';
import type { ParsedKeywordData, ParsedSerpData } from './dataforseo/types';

export interface GeneratedBrief {
  title: string;
  targetKeyword: string;
  secondaryKeywords: string[];
  briefContent: string;
  competitorUrls: string[];
  suggestedHeadings: string[];
  suggestedFaqs: { question: string; answer: string }[];
  wordCountTarget: number;
}

interface BriefResponse {
  title: string;
  secondaryKeywords: string[];
  suggestedHeadings: string[];
  suggestedFaqs: { question: string; answer: string }[];
  wordCountTarget: number;
  competitorInsights: string;
  briefContent: string;
}

export async function generateContentBrief(
  targetKeyword: string,
  keywordData: ParsedKeywordData[],
  serpData: ParsedSerpData | null,
  secondaryKeywords: string[] = [],
): Promise<GeneratedBrief> {
  const topCompetitors = serpData?.results?.slice(0, 5) ?? [];
  const paaQuestions = serpData?.peopleAlsoAsk ?? [];
  const hasAiOverview = serpData?.aiOverview ?? false;
  const hasFeaturedSnippet = !!serpData?.featuredSnippet;

  const prompt = `You are an SEO content strategist for Best Roofing Now, a roofing company in Charlotte, NC.

Generate a detailed content brief for a blog post targeting the keyword: "${targetKeyword}"

KEYWORD DATA:
${keywordData.map(kd => `- "${kd.keyword}" (volume: ${kd.searchVolume}, CPC: $${kd.cpc.toFixed(2)}, competition: ${(kd.competition * 100).toFixed(0)}%)`).join('\n')}

SECONDARY KEYWORDS TO INCLUDE:
${secondaryKeywords.length > 0 ? secondaryKeywords.join(', ') : 'None specified — suggest 5-8 based on the primary keyword'}

TOP COMPETING PAGES:
${topCompetitors.map((r, i) => `${i + 1}. "${r.title}" — ${r.url}`).join('\n') || 'No SERP data available'}

PEOPLE ALSO ASK QUESTIONS:
${paaQuestions.length > 0 ? paaQuestions.map(q => `- ${q}`).join('\n') : 'None found'}

SERP FEATURES:
- AI Overview present: ${hasAiOverview ? 'Yes — optimize for citation' : 'No'}
- Featured Snippet: ${hasFeaturedSnippet ? `Yes — "${serpData?.featuredSnippet?.title}"` : 'No — opportunity to win it'}
- Local Pack: ${serpData?.localPack ? 'Yes' : 'No'}

REQUIREMENTS:
1. Generate an SEO-optimized title (55-60 chars) that includes the target keyword naturally
2. Suggest 6-8 H2/H3 headings that cover the topic comprehensively
3. Include specific Charlotte NC / Lake Norman / surrounding areas context
4. Reference Best Roofing Now's expertise: veteran-owned, BBB A+, CertainTeed ShingleMaster, 500+ roofs
5. Create 4-6 FAQ items that match People Also Ask queries
6. Recommend target word count (1500-3000 words based on competition)
7. Include internal linking opportunities to /services, /locations, /financing, /faq
8. If AI Overview is present, include a concise 40-60 word answer paragraph for citation

Respond in this exact JSON format:
{
  "title": "...",
  "secondaryKeywords": ["..."],
  "suggestedHeadings": ["H2: ...", "H3: ...", ...],
  "suggestedFaqs": [{"question": "...", "answer": "..."}],
  "wordCountTarget": 2000,
  "competitorInsights": "Brief analysis of what competitors cover and gaps to fill",
  "briefContent": "Full content brief with section-by-section guidance (500+ words)"
}`;

  const parsed = await groqJSON<BriefResponse>(prompt, {
    maxTokens: 4000,
    temperature: 0.4,
  });

  return {
    title: parsed.title || `Guide to ${targetKeyword}`,
    targetKeyword,
    secondaryKeywords: parsed.secondaryKeywords || secondaryKeywords,
    briefContent: parsed.briefContent || '',
    competitorUrls: topCompetitors.map(r => r.url),
    suggestedHeadings: parsed.suggestedHeadings || [],
    suggestedFaqs: parsed.suggestedFaqs || [],
    wordCountTarget: parsed.wordCountTarget || 1500,
  };
}
