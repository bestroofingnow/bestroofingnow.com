// AI-powered blog optimization for SEO and AEO
// Uses Claude API to enhance blog content

import Anthropic from '@anthropic-ai/sdk';
import { saveOptimizedBlog, getOptimizedBlog } from './db';
import type { OptimizedBlog } from './db/schema';
import { type WPPost } from './wordpress';

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

export interface OptimizationResult {
  optimizedTitle: string;
  metaDescription: string;
  optimizedContent: string;
  keywords: string[];
  faqs: FAQ[];
  optimizationScore: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

// Strip HTML tags from content
function stripHtml(html: string): string {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

// Calculate a simple SEO score
function calculateSeoScore(result: OptimizationResult, originalTitle: string): number {
  let score = 50; // Base score

  // Title optimization (max 20 points)
  if (result.optimizedTitle.length <= 60) score += 5;
  if (result.optimizedTitle.length >= 30) score += 5;
  if (result.keywords.some(k => result.optimizedTitle.toLowerCase().includes(k.toLowerCase()))) score += 10;

  // Meta description (max 15 points)
  if (result.metaDescription.length >= 150 && result.metaDescription.length <= 160) score += 10;
  else if (result.metaDescription.length >= 120) score += 5;
  if (result.keywords.some(k => result.metaDescription.toLowerCase().includes(k.toLowerCase()))) score += 5;

  // Keywords (max 10 points)
  if (result.keywords.length >= 3) score += 5;
  if (result.keywords.length >= 5) score += 5;

  // FAQs for AEO (max 5 points)
  if (result.faqs.length >= 3) score += 5;

  return Math.min(100, score);
}

// Main optimization function using Claude
export async function optimizeBlogPost(post: WPPost): Promise<OptimizationResult> {
  const title = stripHtml(post.title.rendered);
  const content = stripHtml(post.content.rendered);

  // Truncate content if too long (Claude has token limits)
  const maxContentLength = 15000;
  const truncatedContent = content.length > maxContentLength
    ? content.substring(0, maxContentLength) + '...'
    : content;

  const prompt = `You are an SEO and AEO (Answer Engine Optimization) expert for a roofing company in Charlotte, NC called "Best Roofing Now".

Analyze and optimize this blog post for search engines and AI answer engines:

ORIGINAL TITLE: ${title}

ORIGINAL CONTENT:
${truncatedContent}

Please provide optimizations in the following JSON format (respond ONLY with valid JSON, no markdown):

{
  "optimizedTitle": "Improved title under 60 characters, includes main keyword, compelling for clicks",
  "metaDescription": "150-160 character description that includes the main keyword and a call to action",
  "optimizedContent": "The cleaned up and improved content with better formatting, clearer headings, and natural keyword integration. Keep the same general structure but improve readability. Use HTML tags for formatting (h2, h3, p, ul, li, strong). Add a clear introduction and conclusion.",
  "keywords": ["primary keyword", "secondary keyword", "long-tail keyword 1", "long-tail keyword 2", "local keyword"],
  "faqs": [
    {"question": "Common question about the topic?", "answer": "Concise, helpful answer that would be good for featured snippets."},
    {"question": "Another relevant question?", "answer": "Clear answer with specific information."},
    {"question": "Third question related to Charlotte/roofing?", "answer": "Local-focused answer mentioning Charlotte NC when appropriate."}
  ]
}

Guidelines:
1. Keep the brand voice professional but approachable
2. Include Charlotte, NC references naturally where appropriate
3. Focus on roofing-related keywords
4. Make FAQs answer-engine friendly (concise, direct answers)
5. Ensure content flows naturally - don't over-optimize
6. Preserve any existing good content while improving weak areas`;

  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    // Extract text content from response
    const textContent = response.content.find(block => block.type === 'text');
    if (!textContent || textContent.type !== 'text') {
      throw new Error('No text content in response');
    }

    // Parse JSON response
    const result = JSON.parse(textContent.text) as OptimizationResult;

    // Calculate SEO score
    result.optimizationScore = calculateSeoScore(result, title);

    return result;
  } catch (error) {
    console.error('Error optimizing blog post:', error);

    // Return minimal optimization if AI fails
    return {
      optimizedTitle: title,
      metaDescription: content.substring(0, 160).trim(),
      optimizedContent: post.content.rendered,
      keywords: [],
      faqs: [],
      optimizationScore: 0,
    };
  }
}

// Optimize and save a blog post to the database
export async function optimizeAndSaveBlog(post: WPPost): Promise<OptimizedBlog | null> {
  try {
    // Check if already optimized
    const existing = await getOptimizedBlog(post.slug);
    if (existing && existing.optimizationScore && existing.optimizationScore > 0) {
      console.log(`Blog "${post.slug}" already optimized with score ${existing.optimizationScore}`);
      return existing;
    }

    console.log(`Optimizing blog: ${post.slug}`);
    const result = await optimizeBlogPost(post);

    // Generate FAQ schema markup
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: result.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };

    // Save to database
    const saved = await saveOptimizedBlog({
      wpPostId: post.id,
      slug: post.slug,
      originalTitle: stripHtml(post.title.rendered),
      optimizedTitle: result.optimizedTitle,
      originalContent: post.content.rendered,
      optimizedContent: result.optimizedContent,
      metaDescription: result.metaDescription,
      focusKeywords: result.keywords,
      internalLinks: [], // Will be populated by auto-linker
      schemaMarkup: faqSchema,
      optimizationScore: result.optimizationScore,
      lastOptimized: new Date(),
    });

    console.log(`Saved optimized blog "${post.slug}" with score ${result.optimizationScore}`);
    return saved;
  } catch (error) {
    console.error(`Error optimizing and saving blog ${post.slug}:`, error);
    return null;
  }
}

// Batch optimize multiple blogs with rate limiting
export async function batchOptimizeBlogs(
  posts: WPPost[],
  options: {
    delayMs?: number;
    onProgress?: (completed: number, total: number, currentSlug: string) => void;
  } = {}
): Promise<{ success: number; failed: number; skipped: number }> {
  const { delayMs = 2000, onProgress } = options;
  let success = 0;
  let failed = 0;
  let skipped = 0;

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    if (onProgress) {
      onProgress(i, posts.length, post.slug);
    }

    try {
      // Check if already optimized
      const existing = await getOptimizedBlog(post.slug);
      if (existing && existing.optimizationScore && existing.optimizationScore > 0) {
        skipped++;
        continue;
      }

      const result = await optimizeAndSaveBlog(post);
      if (result) {
        success++;
      } else {
        failed++;
      }

      // Rate limiting delay between API calls
      if (i < posts.length - 1) {
        await new Promise(resolve => setTimeout(resolve, delayMs));
      }
    } catch (error) {
      console.error(`Failed to optimize ${post.slug}:`, error);
      failed++;
    }
  }

  return { success, failed, skipped };
}

// Generate enhanced content with FAQs appended
export function generateEnhancedContent(
  optimizedContent: string,
  faqs: FAQ[]
): string {
  if (faqs.length === 0) return optimizedContent;

  const faqHtml = `
<section class="faq-section" itemscope itemtype="https://schema.org/FAQPage">
  <h2>Frequently Asked Questions</h2>
  ${faqs.map(faq => `
  <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">${faq.question}</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <p itemprop="text">${faq.answer}</p>
    </div>
  </div>
  `).join('')}
</section>`;

  return optimizedContent + faqHtml;
}
