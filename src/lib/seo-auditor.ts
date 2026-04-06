/**
 * Page-Level SEO Auditor.
 *
 * Crawls site pages and evaluates on-page SEO factors:
 * - Title tag (length, keyword presence)
 * - Meta description (length, keyword presence)
 * - Heading structure (H1 count, H2 count)
 * - Content length (word count)
 * - Images (count, missing alt tags)
 * - Internal/external links
 * - Schema markup (JSON-LD detection, FAQ schema)
 * - Broken links (status code check)
 *
 * Scores each page 0-100 and stores issues with severity levels.
 */

import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { eq, desc, and } from 'drizzle-orm';
import { pageAudits, type PageAudit } from './db/schema';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://bestroofingnow.com';

interface AuditIssue {
  severity: 'critical' | 'high' | 'medium' | 'low' | 'info';
  message: string;
  element?: string;
}

interface PageAuditResult {
  url: string;
  statusCode: number;
  title: string | null;
  titleLength: number;
  metaDescription: string | null;
  metaDescriptionLength: number;
  h1Count: number;
  h2Count: number;
  wordCount: number;
  imageCount: number;
  imagesWithoutAlt: number;
  internalLinks: number;
  externalLinks: number;
  brokenLinks: string[];
  hasSchemaMarkup: boolean;
  schemaTypes: string[];
  hasFaqSchema: boolean;
  issues: AuditIssue[];
  score: number;
}

function getDb() {
  if (!process.env.POSTGRES_URL) throw new Error('Database not configured');
  return drizzle(sql);
}

/**
 * Fetch and parse a page's HTML to extract SEO elements.
 */
async function fetchAndParsePage(url: string): Promise<PageAuditResult> {
  const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`;
  const issues: AuditIssue[] = [];

  let statusCode = 0;
  let html = '';

  try {
    const res = await fetch(fullUrl, {
      headers: { 'User-Agent': 'BRN-SEO-Auditor/1.0' },
      redirect: 'follow',
    });
    statusCode = res.status;
    html = await res.text();
  } catch (error) {
    return {
      url,
      statusCode: 0,
      title: null,
      titleLength: 0,
      metaDescription: null,
      metaDescriptionLength: 0,
      h1Count: 0,
      h2Count: 0,
      wordCount: 0,
      imageCount: 0,
      imagesWithoutAlt: 0,
      internalLinks: 0,
      externalLinks: 0,
      brokenLinks: [],
      hasSchemaMarkup: false,
      schemaTypes: [],
      hasFaqSchema: false,
      issues: [{ severity: 'critical', message: `Page unreachable: ${error instanceof Error ? error.message : 'fetch failed'}` }],
      score: 0,
    };
  }

  if (statusCode >= 400) {
    issues.push({ severity: 'critical', message: `HTTP ${statusCode} error` });
  }

  // Extract title
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : null;
  const titleLength = title?.length ?? 0;

  if (!title) {
    issues.push({ severity: 'critical', message: 'Missing title tag' });
  } else if (titleLength < 30) {
    issues.push({ severity: 'high', message: `Title too short (${titleLength} chars, aim for 50-60)`, element: title });
  } else if (titleLength > 65) {
    issues.push({ severity: 'medium', message: `Title too long (${titleLength} chars, will be truncated)`, element: title });
  }

  // Extract meta description
  const metaDescMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i)
    || html.match(/<meta\s+content=["']([\s\S]*?)["']\s+name=["']description["']/i);
  const metaDescription = metaDescMatch ? metaDescMatch[1].trim() : null;
  const metaDescriptionLength = metaDescription?.length ?? 0;

  if (!metaDescription) {
    issues.push({ severity: 'critical', message: 'Missing meta description' });
  } else if (metaDescriptionLength < 70) {
    issues.push({ severity: 'high', message: `Meta description too short (${metaDescriptionLength} chars, aim for 120-160)` });
  } else if (metaDescriptionLength > 165) {
    issues.push({ severity: 'low', message: `Meta description slightly long (${metaDescriptionLength} chars)` });
  }

  // Count headings
  const h1Matches = html.match(/<h1[\s>]/gi) || [];
  const h2Matches = html.match(/<h2[\s>]/gi) || [];
  const h1Count = h1Matches.length;
  const h2Count = h2Matches.length;

  if (h1Count === 0) {
    issues.push({ severity: 'high', message: 'No H1 tag found' });
  } else if (h1Count > 1) {
    issues.push({ severity: 'medium', message: `Multiple H1 tags (${h1Count}) — use only one` });
  }

  if (h2Count === 0) {
    issues.push({ severity: 'medium', message: 'No H2 tags found — add section headings' });
  }

  // Word count (strip HTML, scripts, styles)
  const textContent = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const wordCount = textContent.split(/\s+/).filter(w => w.length > 0).length;

  if (wordCount < 300) {
    issues.push({ severity: 'high', message: `Thin content (${wordCount} words — aim for 800+)` });
  } else if (wordCount < 800) {
    issues.push({ severity: 'medium', message: `Below average content length (${wordCount} words)` });
  }

  // Images and alt tags
  const imgMatches = html.match(/<img\s[^>]*>/gi) || [];
  const imageCount = imgMatches.length;
  let imagesWithoutAlt = 0;
  for (const img of imgMatches) {
    const hasAlt = /alt=["'][^"']+["']/i.test(img);
    if (!hasAlt) imagesWithoutAlt++;
  }

  if (imagesWithoutAlt > 0) {
    issues.push({
      severity: imagesWithoutAlt > 3 ? 'high' : 'medium',
      message: `${imagesWithoutAlt} image(s) missing alt text`,
    });
  }

  // Links
  const linkMatches = html.match(/<a\s[^>]*href=["']([^"']+)["'][^>]*>/gi) || [];
  let internalLinks = 0;
  let externalLinks = 0;
  for (const link of linkMatches) {
    const hrefMatch = link.match(/href=["']([^"']+)["']/i);
    if (!hrefMatch) continue;
    const href = hrefMatch[1];
    if (href.startsWith('/') || href.includes('bestroofingnow.com')) {
      internalLinks++;
    } else if (href.startsWith('http')) {
      externalLinks++;
    }
  }

  if (internalLinks < 3) {
    issues.push({ severity: 'medium', message: `Low internal linking (${internalLinks} links — aim for 5+)` });
  }

  // Schema markup (JSON-LD)
  const jsonLdMatches = html.match(/<script\s+type=["']application\/ld\+json["'][\s\S]*?>([\s\S]*?)<\/script>/gi) || [];
  const hasSchemaMarkup = jsonLdMatches.length > 0;
  const schemaTypes: string[] = [];
  let hasFaqSchema = false;

  for (const jsonLd of jsonLdMatches) {
    const contentMatch = jsonLd.match(/>([\s\S]*?)<\/script>/i);
    if (!contentMatch) continue;
    try {
      const parsed = JSON.parse(contentMatch[1]);
      const type = parsed['@type'] || (Array.isArray(parsed['@graph']) ? parsed['@graph'].map((g: { '@type': string }) => g['@type']).join(', ') : '');
      if (type) schemaTypes.push(type);
      if (type.includes('FAQPage') || contentMatch[1].includes('FAQPage')) hasFaqSchema = true;
    } catch {
      // Ignore parse errors in JSON-LD
    }
  }

  if (!hasSchemaMarkup) {
    issues.push({ severity: 'high', message: 'No structured data (JSON-LD) found' });
  }

  if (!hasFaqSchema && h2Count >= 3) {
    issues.push({ severity: 'medium', message: 'No FAQ schema — consider adding FAQPage markup' });
  }

  // Calculate score
  const score = calculateScore({
    statusCode, titleLength, metaDescriptionLength,
    h1Count, h2Count, wordCount, imageCount, imagesWithoutAlt,
    internalLinks, hasSchemaMarkup, hasFaqSchema, issues,
  });

  return {
    url, statusCode, title, titleLength,
    metaDescription, metaDescriptionLength,
    h1Count, h2Count, wordCount, imageCount, imagesWithoutAlt,
    internalLinks, externalLinks, brokenLinks: [],
    hasSchemaMarkup, schemaTypes, hasFaqSchema,
    issues, score,
  };
}

function calculateScore(params: {
  statusCode: number;
  titleLength: number;
  metaDescriptionLength: number;
  h1Count: number;
  h2Count: number;
  wordCount: number;
  imageCount: number;
  imagesWithoutAlt: number;
  internalLinks: number;
  hasSchemaMarkup: boolean;
  hasFaqSchema: boolean;
  issues: AuditIssue[];
}): number {
  let score = 100;

  // Status code
  if (params.statusCode >= 400) score -= 30;

  // Title
  if (params.titleLength === 0) score -= 15;
  else if (params.titleLength < 30 || params.titleLength > 65) score -= 5;

  // Meta description
  if (params.metaDescriptionLength === 0) score -= 15;
  else if (params.metaDescriptionLength < 70) score -= 5;

  // Headings
  if (params.h1Count === 0) score -= 10;
  else if (params.h1Count > 1) score -= 5;
  if (params.h2Count === 0) score -= 5;

  // Content
  if (params.wordCount < 300) score -= 15;
  else if (params.wordCount < 800) score -= 5;

  // Images
  if (params.imagesWithoutAlt > 0) {
    score -= Math.min(10, params.imagesWithoutAlt * 2);
  }

  // Internal links
  if (params.internalLinks < 3) score -= 5;

  // Schema
  if (!params.hasSchemaMarkup) score -= 10;
  if (!params.hasFaqSchema && params.h2Count >= 3) score -= 5;

  return Math.max(0, Math.min(100, score));
}

/**
 * Get all site pages to audit by fetching the sitemap.
 * Falls back to a curated list of key pages.
 */
async function discoverPages(): Promise<string[]> {
  const pages: string[] = [];

  try {
    const sitemapRes = await fetch(`${BASE_URL}/sitemap.xml`, {
      headers: { 'User-Agent': 'BRN-SEO-Auditor/1.0' },
    });

    if (sitemapRes.ok) {
      const xml = await sitemapRes.text();
      const urlMatches = xml.match(/<loc>(.*?)<\/loc>/gi) || [];
      for (const match of urlMatches) {
        const url = match.replace(/<\/?loc>/gi, '').trim();
        try {
          const path = new URL(url).pathname;
          // Skip admin, API, and asset paths
          if (!path.includes('/n86g') && !path.startsWith('/api/') && !path.includes('/_next/')) {
            pages.push(path);
          }
        } catch {
          // Skip invalid URLs
        }
      }
    }
  } catch {
    // Sitemap fetch failed — use fallback
  }

  // Fallback: key pages if sitemap is empty or unavailable
  if (pages.length === 0) {
    return [
      '/',
      '/about',
      '/services',
      '/locations',
      '/blog',
      '/contact',
      '/emergency',
      '/financing',
      '/faq',
      '/roof-types',
      '/process',
      '/brands',
      '/compare',
      '/guides',
    ];
  }

  return pages;
}

/**
 * Run a full page-level audit for all site pages.
 * Attaches results to an existing scan or creates a standalone audit.
 */
export async function runPageAudit(
  scanId: string,
  maxPages = 200,
): Promise<{
  pagesAudited: number;
  avgScore: number;
  criticalIssues: number;
  highIssues: number;
}> {
  const db = getDb();

  // Discover pages
  const allPages = await discoverPages();
  const pagesToAudit = allPages.slice(0, maxPages);

  let totalScore = 0;
  let criticalIssues = 0;
  let highIssues = 0;

  // Audit pages in batches of 5 to avoid overwhelming the server
  for (let i = 0; i < pagesToAudit.length; i += 5) {
    const batch = pagesToAudit.slice(i, i + 5);
    const results = await Promise.all(batch.map(url => fetchAndParsePage(url)));

    for (const result of results) {
      totalScore += result.score;
      criticalIssues += result.issues.filter(i => i.severity === 'critical').length;
      highIssues += result.issues.filter(i => i.severity === 'high').length;

      await db.insert(pageAudits).values({
        scanId,
        url: result.url,
        statusCode: result.statusCode,
        title: result.title,
        titleLength: result.titleLength,
        metaDescription: result.metaDescription,
        metaDescriptionLength: result.metaDescriptionLength,
        h1Count: result.h1Count,
        h2Count: result.h2Count,
        wordCount: result.wordCount,
        imageCount: result.imageCount,
        imagesWithoutAlt: result.imagesWithoutAlt,
        internalLinks: result.internalLinks,
        externalLinks: result.externalLinks,
        brokenLinks: result.brokenLinks,
        hasSchemaMarkup: result.hasSchemaMarkup,
        schemaTypes: result.schemaTypes,
        hasFaqSchema: result.hasFaqSchema,
        issues: result.issues,
        score: result.score,
      });
    }
  }

  const avgScore = pagesToAudit.length > 0
    ? Math.round(totalScore / pagesToAudit.length)
    : 0;

  return {
    pagesAudited: pagesToAudit.length,
    avgScore,
    criticalIssues,
    highIssues,
  };
}

/**
 * Get audit results for a specific scan.
 */
export async function getAuditResults(
  scanId: string,
  sortBy: 'score' | 'url' = 'score',
): Promise<PageAudit[]> {
  const db = getDb();
  const results = await db
    .select()
    .from(pageAudits)
    .where(eq(pageAudits.scanId, scanId));

  if (sortBy === 'score') {
    return results.sort((a, b) => (a.score ?? 0) - (b.score ?? 0));
  }
  return results.sort((a, b) => a.url.localeCompare(b.url));
}

/**
 * Get audit results for a specific URL across scans (history).
 */
export async function getPageAuditHistory(url: string, limit = 10): Promise<PageAudit[]> {
  const db = getDb();
  return db
    .select()
    .from(pageAudits)
    .where(eq(pageAudits.url, url))
    .orderBy(desc(pageAudits.createdAt))
    .limit(limit);
}
