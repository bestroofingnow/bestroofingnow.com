/**
 * Google Search Console API Client
 *
 * Fetches search analytics data to identify improving pages
 * and generate optimization recommendations.
 *
 * Authentication: Uses Google Service Account
 * Requires: GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY, GSC_SITE_URL
 */

// Types for GSC API responses
export interface SearchAnalyticsRow {
  keys: string[]; // [page] or [query] or [page, query] depending on dimensions
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export interface SearchAnalyticsResponse {
  rows?: SearchAnalyticsRow[];
  responseAggregationType?: string;
}

export interface PageMetrics {
  page: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export interface PageComparison {
  page: string;
  current: PageMetrics;
  previous: PageMetrics;
  changes: {
    clicks: number;
    clicksPercent: number;
    impressions: number;
    impressionsPercent: number;
    ctr: number;
    position: number; // negative = improvement (lower position number is better)
  };
}

export interface QueryMetrics {
  query: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export interface QueryComparison {
  query: string;
  current: QueryMetrics;
  previous: QueryMetrics;
  changes: {
    impressions: number;
    impressionsPercent: number;
  };
}

export interface GSCReport {
  dateRange: {
    current: { start: string; end: string };
    previous: { start: string; end: string };
  };
  improvingPages: PageComparison[];
  decliningPages: PageComparison[];
  risingQueries: QueryComparison[];
  recommendations: string[];
  generatedAt: string;
}

// JWT Token generation for Service Account auth
async function createJWT(): Promise<string> {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!email || !privateKey) {
    throw new Error('Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY');
  }

  const header = {
    alg: 'RS256',
    typ: 'JWT',
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: email,
    scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600, // 1 hour
  };

  // Base64URL encode
  const base64UrlEncode = (obj: object): string => {
    const json = JSON.stringify(obj);
    const base64 = Buffer.from(json).toString('base64');
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  };

  const headerEncoded = base64UrlEncode(header);
  const payloadEncoded = base64UrlEncode(payload);
  const signatureInput = `${headerEncoded}.${payloadEncoded}`;

  // Sign with RSA-SHA256
  const crypto = await import('crypto');
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(signatureInput);
  const signature = sign.sign(privateKey, 'base64');
  const signatureEncoded = signature.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');

  return `${signatureInput}.${signatureEncoded}`;
}

// Get OAuth access token using JWT
async function getAccessToken(): Promise<string> {
  const jwt = await createJWT();

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to get access token: ${error}`);
  }

  const data = await response.json();
  return data.access_token;
}

// Format date as YYYY-MM-DD
function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

// Get date range for comparison (last 7 days vs previous 7 days)
export function getDateRanges(): {
  current: { start: string; end: string };
  previous: { start: string; end: string };
} {
  const today = new Date();
  // GSC data has ~3 day delay, so end 3 days ago
  const endDate = new Date(today);
  endDate.setDate(endDate.getDate() - 3);

  const currentStart = new Date(endDate);
  currentStart.setDate(currentStart.getDate() - 6); // 7 days total

  const previousEnd = new Date(currentStart);
  previousEnd.setDate(previousEnd.getDate() - 1);

  const previousStart = new Date(previousEnd);
  previousStart.setDate(previousStart.getDate() - 6); // 7 days total

  return {
    current: {
      start: formatDate(currentStart),
      end: formatDate(endDate),
    },
    previous: {
      start: formatDate(previousStart),
      end: formatDate(previousEnd),
    },
  };
}

// Fetch search analytics from GSC API
export async function fetchSearchAnalytics(
  startDate: string,
  endDate: string,
  dimensions: ('page' | 'query')[],
  rowLimit: number = 1000
): Promise<SearchAnalyticsRow[]> {
  const siteUrl = process.env.GSC_SITE_URL;
  if (!siteUrl) {
    throw new Error('Missing GSC_SITE_URL environment variable');
  }

  const accessToken = await getAccessToken();
  const encodedSiteUrl = encodeURIComponent(siteUrl);

  const response = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodedSiteUrl}/searchAnalytics/query`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        startDate,
        endDate,
        dimensions,
        rowLimit,
        dataState: 'final', // Only use finalized data
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`GSC API error: ${response.status} - ${error}`);
  }

  const data: SearchAnalyticsResponse = await response.json();
  return data.rows || [];
}

// Get page metrics for a date range
export async function getPageMetrics(
  startDate: string,
  endDate: string
): Promise<Map<string, PageMetrics>> {
  const rows = await fetchSearchAnalytics(startDate, endDate, ['page']);
  const metrics = new Map<string, PageMetrics>();

  for (const row of rows) {
    const page = row.keys[0];
    // Convert full URL to path
    const path = page.replace(process.env.GSC_SITE_URL || '', '') || '/';
    metrics.set(path, {
      page: path,
      clicks: row.clicks,
      impressions: row.impressions,
      ctr: row.ctr,
      position: row.position,
    });
  }

  return metrics;
}

// Get query metrics for a date range
export async function getQueryMetrics(
  startDate: string,
  endDate: string
): Promise<Map<string, QueryMetrics>> {
  const rows = await fetchSearchAnalytics(startDate, endDate, ['query']);
  const metrics = new Map<string, QueryMetrics>();

  for (const row of rows) {
    const query = row.keys[0];
    metrics.set(query, {
      query,
      clicks: row.clicks,
      impressions: row.impressions,
      ctr: row.ctr,
      position: row.position,
    });
  }

  return metrics;
}

// Compare metrics between two periods
export async function compareMetrics(): Promise<{
  pages: PageComparison[];
  queries: QueryComparison[];
}> {
  const dateRanges = getDateRanges();

  console.log(`Fetching current period: ${dateRanges.current.start} to ${dateRanges.current.end}`);
  console.log(`Fetching previous period: ${dateRanges.previous.start} to ${dateRanges.previous.end}`);

  // Fetch data for both periods
  const [currentPages, previousPages, currentQueries, previousQueries] = await Promise.all([
    getPageMetrics(dateRanges.current.start, dateRanges.current.end),
    getPageMetrics(dateRanges.previous.start, dateRanges.previous.end),
    getQueryMetrics(dateRanges.current.start, dateRanges.current.end),
    getQueryMetrics(dateRanges.previous.start, dateRanges.previous.end),
  ]);

  // Compare pages
  const pageComparisons: PageComparison[] = [];
  for (const [path, current] of currentPages) {
    const previous = previousPages.get(path);
    if (previous) {
      const impressionChange = current.impressions - previous.impressions;
      const impressionPercent = previous.impressions > 0
        ? ((impressionChange / previous.impressions) * 100)
        : current.impressions > 0 ? 100 : 0;

      const clickChange = current.clicks - previous.clicks;
      const clickPercent = previous.clicks > 0
        ? ((clickChange / previous.clicks) * 100)
        : current.clicks > 0 ? 100 : 0;

      pageComparisons.push({
        page: path,
        current,
        previous,
        changes: {
          clicks: clickChange,
          clicksPercent: clickPercent,
          impressions: impressionChange,
          impressionsPercent: impressionPercent,
          ctr: (current.ctr - previous.ctr) * 100, // Convert to percentage points
          position: previous.position - current.position, // Positive = improved
        },
      });
    }
  }

  // Compare queries
  const queryComparisons: QueryComparison[] = [];
  for (const [query, current] of currentQueries) {
    const previous = previousQueries.get(query);
    if (previous) {
      const impressionChange = current.impressions - previous.impressions;
      const impressionPercent = previous.impressions > 0
        ? ((impressionChange / previous.impressions) * 100)
        : current.impressions > 0 ? 100 : 0;

      queryComparisons.push({
        query,
        current,
        previous,
        changes: {
          impressions: impressionChange,
          impressionsPercent: impressionPercent,
        },
      });
    }
  }

  return { pages: pageComparisons, queries: queryComparisons };
}

// Get top improving pages (sorted by impression growth)
export function getTopImprovingPages(
  comparisons: PageComparison[],
  minImpressions: number = 50,
  limit: number = 10
): PageComparison[] {
  return comparisons
    .filter((p) => p.current.impressions >= minImpressions) // Filter low-traffic pages
    .filter((p) => p.changes.impressionsPercent > 0) // Only improving
    .sort((a, b) => b.changes.impressionsPercent - a.changes.impressionsPercent)
    .slice(0, limit);
}

// Get declining pages (sorted by impression drop)
export function getDecliningPages(
  comparisons: PageComparison[],
  minImpressions: number = 50,
  limit: number = 10
): PageComparison[] {
  return comparisons
    .filter((p) => p.previous.impressions >= minImpressions) // Had meaningful traffic
    .filter((p) => p.changes.impressionsPercent < -10) // Significant decline
    .sort((a, b) => a.changes.impressionsPercent - b.changes.impressionsPercent)
    .slice(0, limit);
}

// Get rising queries
export function getRisingQueries(
  comparisons: QueryComparison[],
  minImpressions: number = 20,
  limit: number = 15
): QueryComparison[] {
  return comparisons
    .filter((q) => q.current.impressions >= minImpressions)
    .filter((q) => q.changes.impressionsPercent > 10)
    .sort((a, b) => b.changes.impressionsPercent - a.changes.impressionsPercent)
    .slice(0, limit);
}

// Generate recommendations based on data
export function generateRecommendations(
  improvingPages: PageComparison[],
  risingQueries: QueryComparison[]
): string[] {
  const recommendations: string[] = [];

  // Recommendations for improving pages
  for (const page of improvingPages.slice(0, 5)) {
    if (page.current.position > 10 && page.current.position <= 20) {
      recommendations.push(
        `Optimize "${page.page}" - Currently position ${page.current.position.toFixed(1)}, ` +
          `gaining momentum (+${page.changes.impressionsPercent.toFixed(0)}% impressions). ` +
          `Add content, improve internal linking to push to page 1.`
      );
    } else if (page.current.position <= 10 && page.current.ctr < 0.05) {
      recommendations.push(
        `Improve CTR for "${page.page}" - Position ${page.current.position.toFixed(1)} but only ` +
          `${(page.current.ctr * 100).toFixed(1)}% CTR. Update title/meta description for more clicks.`
      );
    } else if (page.current.position <= 5) {
      recommendations.push(
        `Maintain "${page.page}" - Strong position ${page.current.position.toFixed(1)}. ` +
          `Consider adding FAQ schema for featured snippets.`
      );
    }
  }

  // Recommendations for rising queries without dedicated pages
  const existingPages = new Set(improvingPages.map((p) => p.page));
  for (const query of risingQueries.slice(0, 5)) {
    // Check if query likely has a dedicated page (simplified check)
    const querySlug = query.query.toLowerCase().replace(/\s+/g, '-');
    const hasPage = Array.from(existingPages).some((p) => p.includes(querySlug));

    if (!hasPage && query.current.impressions > 100) {
      recommendations.push(
        `Create content for "${query.query}" - Rising query (+${query.changes.impressionsPercent.toFixed(0)}% impressions) ` +
          `with ${query.current.impressions} impressions. Consider dedicated landing page.`
      );
    }
  }

  return recommendations;
}

// Generate full report
export async function generateGSCReport(): Promise<GSCReport> {
  const dateRanges = getDateRanges();
  const { pages, queries } = await compareMetrics();

  const improvingPages = getTopImprovingPages(pages);
  const decliningPages = getDecliningPages(pages);
  const risingQueries = getRisingQueries(queries);
  const recommendations = generateRecommendations(improvingPages, risingQueries);

  return {
    dateRange: dateRanges,
    improvingPages,
    decliningPages,
    risingQueries,
    recommendations,
    generatedAt: new Date().toISOString(),
  };
}

// Format report as markdown
export function formatReportMarkdown(report: GSCReport): string {
  const lines: string[] = [];

  lines.push(`# GSC Weekly Report`);
  lines.push('');
  lines.push(`Generated: ${new Date(report.generatedAt).toLocaleString()}`);
  lines.push(`Current Period: ${report.dateRange.current.start} to ${report.dateRange.current.end}`);
  lines.push(`Previous Period: ${report.dateRange.previous.start} to ${report.dateRange.previous.end}`);
  lines.push('');

  // Improving Pages
  lines.push(`## Top Improving Pages (by impression growth)`);
  lines.push('');
  if (report.improvingPages.length === 0) {
    lines.push('No significantly improving pages found.');
  } else {
    for (let i = 0; i < report.improvingPages.length; i++) {
      const p = report.improvingPages[i];
      lines.push(`### ${i + 1}. ${p.page}`);
      lines.push('');
      lines.push(`| Metric | Previous | Current | Change |`);
      lines.push(`|--------|----------|---------|--------|`);
      lines.push(
        `| Impressions | ${p.previous.impressions.toLocaleString()} | ${p.current.impressions.toLocaleString()} | +${p.changes.impressionsPercent.toFixed(0)}% |`
      );
      lines.push(
        `| Clicks | ${p.previous.clicks.toLocaleString()} | ${p.current.clicks.toLocaleString()} | ${p.changes.clicksPercent >= 0 ? '+' : ''}${p.changes.clicksPercent.toFixed(0)}% |`
      );
      lines.push(
        `| CTR | ${(p.previous.ctr * 100).toFixed(1)}% | ${(p.current.ctr * 100).toFixed(1)}% | ${p.changes.ctr >= 0 ? '+' : ''}${p.changes.ctr.toFixed(1)}pp |`
      );
      lines.push(
        `| Position | ${p.previous.position.toFixed(1)} | ${p.current.position.toFixed(1)} | ${p.changes.position >= 0 ? '↑' : '↓'}${Math.abs(p.changes.position).toFixed(1)} |`
      );
      lines.push('');
    }
  }

  // Declining Pages
  if (report.decliningPages.length > 0) {
    lines.push(`## Declining Pages (need attention)`);
    lines.push('');
    for (const p of report.decliningPages.slice(0, 5)) {
      lines.push(
        `- **${p.page}**: ${p.changes.impressionsPercent.toFixed(0)}% impressions (${p.previous.impressions.toLocaleString()} → ${p.current.impressions.toLocaleString()})`
      );
    }
    lines.push('');
  }

  // Rising Queries
  lines.push(`## Rising Queries`);
  lines.push('');
  if (report.risingQueries.length === 0) {
    lines.push('No significantly rising queries found.');
  } else {
    lines.push(`| Query | Impressions | Change |`);
    lines.push(`|-------|-------------|--------|`);
    for (const q of report.risingQueries) {
      lines.push(
        `| "${q.query}" | ${q.current.impressions.toLocaleString()} | +${q.changes.impressionsPercent.toFixed(0)}% |`
      );
    }
  }
  lines.push('');

  // Recommendations
  lines.push(`## Action Items`);
  lines.push('');
  if (report.recommendations.length === 0) {
    lines.push('No specific recommendations at this time.');
  } else {
    for (let i = 0; i < report.recommendations.length; i++) {
      lines.push(`${i + 1}. ${report.recommendations[i]}`);
    }
  }
  lines.push('');

  return lines.join('\n');
}
