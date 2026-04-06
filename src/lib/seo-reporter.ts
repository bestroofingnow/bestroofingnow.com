/**
 * Weekly SEO Report Generator — Phase 5.
 *
 * Generates comprehensive reports from scan data:
 * - Key metrics comparison (week-over-week)
 * - Top gainers/losers
 * - AI-generated executive summary
 * - Prioritized recommendations
 *
 * Stores reports in the database and can trigger email digests.
 */

import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { eq, desc, ne } from 'drizzle-orm';
import {
  seoReports,
  pageRankings,
  type SeoReport,
} from './db/schema';
import { groqJSON } from './groq-client';

function getDb() {
  if (!process.env.POSTGRES_URL) throw new Error('Database not configured');
  return drizzle(sql);
}

interface ReportMetrics {
  totalKeywords: number;
  avgPosition: number;
  topTenKeywords: number;
  strikingDistance: number;
  totalVolume: number;
  positionGains: number;
  positionLosses: number;
  newKeywords: number;
  lostKeywords: number;
}

/**
 * Calculate metrics and changes for a scan.
 */
async function calculateMetrics(scanId: string): Promise<{
  metrics: ReportMetrics;
  gainers: { keyword: string; url: string; change: number; position: number }[];
  losers: { keyword: string; url: string; change: number; position: number }[];
}> {
  const db = getDb();
  const rankings = await db
    .select()
    .from(pageRankings)
    .where(eq(pageRankings.scanId, scanId));

  const positions = rankings.filter(r => r.position != null);
  const avgPosition = positions.length > 0
    ? positions.reduce((sum, r) => sum + r.position!, 0) / positions.length
    : 0;

  const topTen = positions.filter(r => r.position! <= 10);
  const striking = positions.filter(r => r.position! >= 11 && r.position! <= 30);
  const totalVolume = rankings.reduce((sum, r) => sum + (r.searchVolume ?? 0), 0);

  const withChange = rankings.filter(r => r.positionChange != null && r.positionChange !== 0);
  const positionGains = withChange.filter(r => r.positionChange! > 0).length;
  const positionLosses = withChange.filter(r => r.positionChange! < 0).length;

  // New keywords = have position but no previous position
  const newKeywords = rankings.filter(r => r.position != null && r.previousPosition == null).length;
  // Lost keywords = have previous position but no current position
  const lostKeywords = rankings.filter(r => r.position == null && r.previousPosition != null).length;

  const gainers = withChange
    .filter(r => r.positionChange! > 0)
    .sort((a, b) => b.positionChange! - a.positionChange!)
    .slice(0, 10)
    .map(r => ({
      keyword: r.keyword,
      url: r.url,
      change: r.positionChange!,
      position: r.position!,
    }));

  const losers = withChange
    .filter(r => r.positionChange! < 0)
    .sort((a, b) => a.positionChange! - b.positionChange!)
    .slice(0, 10)
    .map(r => ({
      keyword: r.keyword,
      url: r.url,
      change: r.positionChange!,
      position: r.position!,
    }));

  return {
    metrics: {
      totalKeywords: rankings.length,
      avgPosition: Math.round(avgPosition * 10) / 10,
      topTenKeywords: topTen.length,
      strikingDistance: striking.length,
      totalVolume,
      positionGains,
      positionLosses,
      newKeywords,
      lostKeywords,
    },
    gainers,
    losers,
  };
}

interface GroqReportResult {
  summary: string;
  recommendations: { priority: string; action: string; url?: string }[];
}

/**
 * Generate an AI executive summary for the weekly report using Groq (Llama 4 Maverick).
 */
async function generateSummary(
  metrics: ReportMetrics,
  gainers: { keyword: string; url: string; change: number; position: number }[],
  losers: { keyword: string; url: string; change: number; position: number }[],
  prevMetrics?: ReportMetrics | null,
): Promise<{ summary: string; recommendations: { priority: string; action: string; url?: string }[] }> {
  const weekOverWeek = prevMetrics ? `
WEEK-OVER-WEEK CHANGES:
- Keywords: ${metrics.totalKeywords} (prev: ${prevMetrics.totalKeywords}, ${metrics.totalKeywords > prevMetrics.totalKeywords ? '+' : ''}${metrics.totalKeywords - prevMetrics.totalKeywords})
- Avg Position: ${metrics.avgPosition} (prev: ${prevMetrics.avgPosition}, ${prevMetrics.avgPosition > metrics.avgPosition ? 'improved' : 'declined'})
- Top 10: ${metrics.topTenKeywords} (prev: ${prevMetrics.topTenKeywords})
- Striking Distance: ${metrics.strikingDistance} (prev: ${prevMetrics.strikingDistance})
- Total Volume: ${metrics.totalVolume.toLocaleString()} (prev: ${prevMetrics.totalVolume.toLocaleString()})
` : 'This is the first scan — no week-over-week comparison available.';

  const prompt = `You are an SEO analyst for Best Roofing Now (bestroofingnow.com), a roofing company in Charlotte, NC.

Generate a concise weekly SEO report summary and actionable recommendations.

CURRENT METRICS:
- Total Keywords Tracked: ${metrics.totalKeywords}
- Average Position: ${metrics.avgPosition}
- Top 10 Keywords: ${metrics.topTenKeywords}
- Striking Distance (11-30): ${metrics.strikingDistance}
- Total Search Volume: ${metrics.totalVolume.toLocaleString()}
- Position Gains: ${metrics.positionGains}
- Position Losses: ${metrics.positionLosses}
- New Keywords: ${metrics.newKeywords}
- Lost Keywords: ${metrics.lostKeywords}

${weekOverWeek}

TOP GAINERS:
${gainers.map(g => `- "${g.keyword}" +${g.change} → #${g.position} (${g.url})`).join('\n') || 'None'}

TOP LOSERS:
${losers.map(l => `- "${l.keyword}" ${l.change} → #${l.position} (${l.url})`).join('\n') || 'None'}

Respond in this JSON format:
{
  "summary": "3-5 sentence executive summary highlighting wins, concerns, and overall trajectory",
  "recommendations": [
    {"priority": "high", "action": "specific action to take", "url": "/optional-page-url"},
    {"priority": "medium", "action": "..."}
  ]
}

Keep the summary concise and business-focused. Recommendations should be specific and actionable (max 5).`;

  try {
    return await groqJSON<GroqReportResult>(prompt, {
      maxTokens: 2000,
      temperature: 0.3,
    });
  } catch (error) {
    console.error('Groq report generation failed, using fallback:', error);
    return {
      summary: `Weekly scan tracked ${metrics.totalKeywords} keywords. ${metrics.topTenKeywords} in top 10, ${metrics.strikingDistance} in striking distance. ${metrics.positionGains} gains, ${metrics.positionLosses} losses.`,
      recommendations: [],
    };
  }
}

/**
 * Generate a weekly report for a completed scan.
 */
export async function generateWeeklyReport(scanId: string): Promise<SeoReport> {
  const db = getDb();

  // Get current scan metrics
  const { metrics, gainers, losers } = await calculateMetrics(scanId);

  // Get previous report for comparison (exclude current scan to avoid self-comparison on retries)
  const prevReports = await db
    .select()
    .from(seoReports)
    .where(ne(seoReports.scanId, scanId))
    .orderBy(desc(seoReports.weekOf))
    .limit(1);

  const prevMetrics = prevReports[0]?.keyMetrics as ReportMetrics | undefined;

  // Generate AI summary
  const { summary, recommendations } = await generateSummary(metrics, gainers, losers, prevMetrics);

  // Store report
  const [report] = await db
    .insert(seoReports)
    .values({
      scanId,
      weekOf: new Date(),
      summary,
      keyMetrics: metrics,
      topGainers: gainers,
      topLosers: losers,
      recommendations,
      emailSent: false,
    })
    .returning();

  if (!report) throw new Error('Failed to insert SEO report');

  return report;
}

/**
 * Get report history.
 */
export async function getReportHistory(limit = 20): Promise<SeoReport[]> {
  const db = getDb();
  return db
    .select()
    .from(seoReports)
    .orderBy(desc(seoReports.weekOf))
    .limit(limit);
}

/**
 * Get a specific report by scan ID.
 */
export async function getReportByScan(scanId: string): Promise<SeoReport | null> {
  const db = getDb();
  const rows = await db
    .select()
    .from(seoReports)
    .where(eq(seoReports.scanId, scanId))
    .limit(1);
  return rows[0] ?? null;
}
