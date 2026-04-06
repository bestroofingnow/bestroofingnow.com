/**
 * DataForSEO TypeScript API client.
 * Ported from python/clients/dataforseo.py.
 *
 * Env vars:
 *   DATAFORSEO_LOGIN    (email)
 *   DATAFORSEO_PASSWORD (API key)
 */

import type {
  DfsApiResponse,
  DfsKeywordResult,
  DfsSerpResult,
  DfsCompetitorResult,
  DfsSearchVolumeResult,
  ParsedKeywordData,
  ParsedSerpData,
} from './types';

const BASE_URL = 'https://api.dataforseo.com';
const LOCATION_CODE = 2840; // United States
const LANGUAGE_CODE = 'en';
const TARGET_DOMAIN = 'bestroofingnow.com';

function getAuthHeader(): string {
  const login = process.env.DATAFORSEO_LOGIN || process.env.DATAFORSEO_EMAIL || '';
  const password = process.env.DATAFORSEO_PASSWORD || process.env.DATAFORSEO_API_KEY || '';

  if (!login || !password) {
    throw new Error('DataForSEO credentials not configured. Set DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD.');
  }

  return 'Basic ' + Buffer.from(`${login}:${password}`).toString('base64');
}

async function makeRequest<T>(endpoint: string, data: Record<string, unknown>[]): Promise<DfsApiResponse<T>> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Authorization': getAuthHeader(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`DataForSEO API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

function extractTaskResult<T>(response: DfsApiResponse<T>): T | null {
  const task = response.tasks?.[0];
  if (!task || task.status_code !== 20000) {
    console.error('DataForSEO task error:', task?.status_message);
    return null;
  }
  return task.result?.[0] ?? null;
}

/**
 * Get keyword search volume, CPC, competition, and trends.
 * Uses the DataForSEO Labs Keyword Overview endpoint.
 */
export async function getKeywordData(keywords: string[]): Promise<ParsedKeywordData[]> {
  const response = await makeRequest<DfsSearchVolumeResult>(
    '/v3/keywords_data/google_ads/search_volume/live',
    [{
      keywords,
      location_code: LOCATION_CODE,
      language_code: LANGUAGE_CODE,
    }]
  );

  const result = extractTaskResult(response);
  if (!result?.items) return [];

  return result.items.map(item => ({
    keyword: item.keyword,
    searchVolume: item.search_volume ?? 0,
    cpc: item.cpc ?? 0,
    competition: item.competition ?? 0,
    difficulty: Math.round((item.competition ?? 0) * 100),
    trends: item.monthly_searches?.map(m => m.search_volume) ?? [],
    serpFeatures: [],
  }));
}

/**
 * Get ranked keywords for a domain (DataForSEO Labs).
 */
export async function getRankedKeywords(
  domain: string = TARGET_DOMAIN,
  limit: number = 500,
): Promise<ParsedKeywordData[]> {
  const response = await makeRequest<DfsKeywordResult>(
    '/v3/dataforseo_labs/google/ranked_keywords/live',
    [{
      target: domain,
      location_code: LOCATION_CODE,
      language_code: LANGUAGE_CODE,
      limit,
      order_by: ['keyword_data.keyword_info.search_volume,desc'],
    }]
  );

  const result = extractTaskResult(response);
  if (!result?.items) return [];

  return result.items
    .filter(item => item.keyword_data?.keyword)
    .map(item => {
      const kd = item.keyword_data;
      const ki = kd.keyword_info;
      return {
        keyword: kd.keyword,
        searchVolume: ki.search_volume ?? 0,
        cpc: ki.cpc ?? 0,
        competition: ki.competition ?? 0,
        difficulty: Math.round((ki.competition ?? 0) * 100),
        trends: ki.monthly_searches?.map(m => m.search_volume) ?? [],
        serpFeatures: [],
        position: item.ranked_serp_element?.serp_item?.rank_absolute,
        url: item.ranked_serp_element?.serp_item?.url,
      };
    });
}

/**
 * Get live SERP results for a keyword.
 */
export async function getSerpResults(keyword: string): Promise<ParsedSerpData | null> {
  const response = await makeRequest<DfsSerpResult>(
    '/v3/serp/google/organic/live/advanced',
    [{
      keyword,
      location_code: LOCATION_CODE,
      language_code: LANGUAGE_CODE,
      device: 'desktop',
      os: 'windows',
    }]
  );

  const result = extractTaskResult(response);
  if (!result) return null;

  const organicResults = result.items
    ?.filter(item => item.type === 'organic')
    .slice(0, 20)
    .map(item => ({
      position: item.rank_absolute,
      title: item.title || '',
      url: item.url || '',
      description: item.description || '',
    })) ?? [];

  // Extract featured snippet
  const snippetItem = result.items?.find(item => item.type === 'featured_snippet');
  const featuredSnippet = snippetItem ? {
    title: snippetItem.title || snippetItem.featured_title || '',
    description: snippetItem.description || snippetItem.description_rows?.join(' ') || '',
    url: snippetItem.url || '',
  } : null;

  // Extract People Also Ask
  const paaItem = result.items?.find(item => item.type === 'people_also_ask');
  const peopleAlsoAsk = paaItem?.items?.map(i => i.title) ?? [];

  // Extract Local Pack
  const localPackItem = result.items?.find(item => item.type === 'local_pack');
  const localPack = localPackItem?.items?.map(i => ({
    title: i.title || '',
    rating: (i as unknown as { rating?: { value: number } }).rating?.value ?? 0,
    reviews: (i as unknown as { rating?: { votes_count: number } }).rating?.votes_count ?? 0,
  })) ?? null;

  // Check for AI overview
  const aiOverview = result.item_types?.includes('ai_overview') ?? false;

  return {
    keyword,
    results: organicResults,
    featuredSnippet,
    peopleAlsoAsk,
    localPack,
    aiOverview,
  };
}

/**
 * Get competitor domains for a target domain.
 */
export async function getCompetitors(
  domain: string = TARGET_DOMAIN,
  limit: number = 20,
): Promise<{
  domain: string;
  avgPosition: number;
  intersections: number;
  estimatedTraffic: number;
}[]> {
  const response = await makeRequest<DfsCompetitorResult>(
    '/v3/dataforseo_labs/google/competitors_domain/live',
    [{
      target: domain,
      location_code: LOCATION_CODE,
      language_code: LANGUAGE_CODE,
      limit,
    }]
  );

  const result = extractTaskResult(response);
  if (!result?.items) return [];

  return result.items.map(item => ({
    domain: item.domain,
    avgPosition: item.avg_position,
    intersections: item.intersections,
    estimatedTraffic: item.full_domain_metrics?.[0]?.organic?.estimated_traffic_volume ?? 0,
  }));
}

/**
 * Get keyword suggestions / related keywords.
 */
export async function getKeywordSuggestions(
  keyword: string,
  limit: number = 50,
): Promise<ParsedKeywordData[]> {
  const response = await makeRequest<DfsKeywordResult>(
    '/v3/dataforseo_labs/google/keyword_suggestions/live',
    [{
      keyword,
      location_code: LOCATION_CODE,
      language_code: LANGUAGE_CODE,
      limit,
      include_serp_info: false,
    }]
  );

  const result = extractTaskResult(response);
  if (!result?.items) return [];

  return result.items
    .filter(item => item.keyword_data?.keyword)
    .map(item => {
      const ki = item.keyword_data.keyword_info;
      return {
        keyword: item.keyword_data.keyword,
        searchVolume: ki.search_volume ?? 0,
        cpc: ki.cpc ?? 0,
        competition: ki.competition ?? 0,
        difficulty: Math.round((ki.competition ?? 0) * 100),
        trends: ki.monthly_searches?.map(m => m.search_volume) ?? [],
        serpFeatures: [],
      };
    });
}
