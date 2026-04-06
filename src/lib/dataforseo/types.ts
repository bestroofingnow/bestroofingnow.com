// DataForSEO API response types

export interface DfsApiResponse<T = unknown> {
  version: string;
  status_code: number;
  status_message: string;
  tasks: DfsTask<T>[];
}

export interface DfsTask<T = unknown> {
  id: string;
  status_code: number;
  status_message: string;
  time: string;
  cost: number;
  result_count: number;
  result: T[];
}

// Keyword Data (Labs API)
export interface DfsKeywordResult {
  total_count: number;
  items_count: number;
  items: DfsKeywordItem[];
}

export interface DfsKeywordItem {
  keyword_data: {
    keyword: string;
    keyword_info: {
      search_volume: number | null;
      cpc: number | null;
      competition: number | null;
      competition_level: string | null;
      monthly_searches: { month: number; year: number; search_volume: number }[] | null;
    };
    keyword_info_normalized_with_bing: {
      search_volume: number | null;
    } | null;
  };
  ranked_serp_element?: {
    serp_item: {
      rank_absolute: number;
      url: string;
      title: string;
      description: string;
    };
  };
}

// Keyword Search Volume (Keywords Data API)
export interface DfsSearchVolumeResult {
  items: DfsSearchVolumeItem[];
}

export interface DfsSearchVolumeItem {
  keyword: string;
  search_volume: number | null;
  cpc: number | null;
  competition: number | null;
  competition_level: string | null;
  monthly_searches: { month: number; year: number; search_volume: number }[] | null;
}

// SERP Live Results
export interface DfsSerpResult {
  keyword: string;
  check_url: string;
  item_types: string[];
  items_count: number;
  items: DfsSerpItem[];
}

export interface DfsSerpItem {
  type: string;
  rank_group: number;
  rank_absolute: number;
  position: string;
  title?: string;
  url?: string;
  description?: string;
  // Featured snippet fields
  featured_title?: string;
  description_rows?: string[];
  // People Also Ask fields
  items?: { title: string; url?: string; description?: string }[];
  // Local pack fields
  rating?: { value: number; votes_count: number };
}

// Competitor domain data
export interface DfsCompetitorResult {
  total_count: number;
  items: DfsCompetitorItem[];
}

export interface DfsCompetitorItem {
  domain: string;
  avg_position: number;
  sum_position: number;
  intersections: number;
  full_domain_metrics: {
    organic: {
      count: number;
      estimated_traffic_volume: number;
    };
  }[];
}

// Parsed keyword data for our application
export interface ParsedKeywordData {
  keyword: string;
  searchVolume: number;
  cpc: number;
  competition: number;
  difficulty: number;
  trends: number[];
  serpFeatures: string[];
  /** SERP rank position (present when returned by getRankedKeywords) */
  position?: number;
  /** Ranking URL (present when returned by getRankedKeywords) */
  url?: string;
}

// Parsed SERP data for our application
export interface ParsedSerpData {
  keyword: string;
  results: {
    position: number;
    title: string;
    url: string;
    description: string;
  }[];
  featuredSnippet: {
    title: string;
    description: string;
    url: string;
  } | null;
  peopleAlsoAsk: string[];
  localPack: {
    title: string;
    rating: number;
    reviews: number;
  }[] | null;
  aiOverview: boolean;
}
