// Supabase database connection and queries
// Setup: Create Supabase project, add SUPABASE_URL and SUPABASE_ANON_KEY to env

import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Types for optimized blog content
export interface OptimizedBlog {
  id: number;
  wp_post_id: number;
  slug: string;
  original_title: string;
  optimized_title: string;
  original_content: string;
  optimized_content: string;
  meta_description: string;
  focus_keywords: string[];
  internal_links: InternalLink[];
  schema_markup: Record<string, unknown>;
  optimization_score: number;
  last_optimized: Date;
  created_at: Date;
}

export interface InternalLink {
  url: string;
  anchor: string;
  keyword: string;
}

export interface LinkablePage {
  id: number;
  url: string;
  title: string;
  keywords: string[];
  page_type: 'service' | 'location' | 'blog' | 'landing';
  priority: number;
}

// Initialize database tables (run this once via API route)
export async function initializeDatabase(): Promise<void> {
  // Tables should be created via Supabase dashboard or migrations
  // This function checks if tables exist
  try {
    const { error: blogsError } = await supabase
      .from('optimized_blogs')
      .select('id')
      .limit(1);

    if (blogsError && blogsError.code === '42P01') {
      console.log('Tables not yet created. Please run the SQL migrations in Supabase dashboard.');
      console.log('See /src/lib/db-schema.sql for the required schema.');
    }
  } catch (error) {
    console.error('Error checking database:', error);
  }
}

// Get optimized blog by slug
export async function getOptimizedBlog(slug: string): Promise<OptimizedBlog | null> {
  try {
    const { data, error } = await supabase
      .from('optimized_blogs')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      if (error.code !== 'PGRST116') { // Not found is OK
        console.error('Error fetching optimized blog:', error);
      }
      return null;
    }

    return data as OptimizedBlog;
  } catch (error) {
    console.error('Error fetching optimized blog:', error);
    return null;
  }
}

// Get optimized blog by WordPress post ID
export async function getOptimizedBlogByWpId(wpPostId: number): Promise<OptimizedBlog | null> {
  try {
    const { data, error } = await supabase
      .from('optimized_blogs')
      .select('*')
      .eq('wp_post_id', wpPostId)
      .single();

    if (error) {
      if (error.code !== 'PGRST116') {
        console.error('Error fetching optimized blog by WP ID:', error);
      }
      return null;
    }

    return data as OptimizedBlog;
  } catch (error) {
    console.error('Error fetching optimized blog by WP ID:', error);
    return null;
  }
}

// Save or update optimized blog
export async function saveOptimizedBlog(
  blog: Omit<OptimizedBlog, 'id' | 'created_at'>
): Promise<OptimizedBlog | null> {
  try {
    const { data, error } = await supabase
      .from('optimized_blogs')
      .upsert(
        {
          wp_post_id: blog.wp_post_id,
          slug: blog.slug,
          original_title: blog.original_title,
          optimized_title: blog.optimized_title,
          original_content: blog.original_content,
          optimized_content: blog.optimized_content,
          meta_description: blog.meta_description,
          focus_keywords: blog.focus_keywords,
          internal_links: blog.internal_links,
          schema_markup: blog.schema_markup,
          optimization_score: blog.optimization_score,
          last_optimized: new Date().toISOString(),
        },
        {
          onConflict: 'wp_post_id',
        }
      )
      .select()
      .single();

    if (error) {
      console.error('Error saving optimized blog:', error);
      return null;
    }

    return data as OptimizedBlog;
  } catch (error) {
    console.error('Error saving optimized blog:', error);
    return null;
  }
}

// Get all linkable pages for auto-linking
export async function getLinkablePages(): Promise<LinkablePage[]> {
  try {
    const { data, error } = await supabase
      .from('linkable_pages')
      .select('*')
      .order('priority', { ascending: false });

    if (error) {
      console.error('Error fetching linkable pages:', error);
      return [];
    }

    return data as LinkablePage[];
  } catch (error) {
    console.error('Error fetching linkable pages:', error);
    return [];
  }
}

// Save or update linkable page
export async function saveLinkablePage(
  page: Omit<LinkablePage, 'id'>
): Promise<LinkablePage | null> {
  try {
    const { data, error } = await supabase
      .from('linkable_pages')
      .upsert(
        {
          url: page.url,
          title: page.title,
          keywords: page.keywords,
          page_type: page.page_type,
          priority: page.priority,
        },
        {
          onConflict: 'url',
        }
      )
      .select()
      .single();

    if (error) {
      console.error('Error saving linkable page:', error);
      return null;
    }

    return data as LinkablePage;
  } catch (error) {
    console.error('Error saving linkable page:', error);
    return null;
  }
}

// Bulk insert linkable pages
export async function bulkSaveLinkablePages(
  pages: Omit<LinkablePage, 'id'>[]
): Promise<number> {
  let savedCount = 0;
  for (const page of pages) {
    const saved = await saveLinkablePage(page);
    if (saved) savedCount++;
  }
  return savedCount;
}

// Get blogs that need optimization (not optimized or outdated)
export async function getBlogsNeedingOptimization(slugs: string[]): Promise<string[]> {
  if (slugs.length === 0) return [];

  try {
    const { data, error } = await supabase
      .from('optimized_blogs')
      .select('slug')
      .in('slug', slugs);

    if (error) {
      console.error('Error checking blogs needing optimization:', error);
      return slugs; // Return all if we can't check
    }

    const optimizedSlugs = new Set((data || []).map((r: { slug: string }) => r.slug));
    return slugs.filter((slug) => !optimizedSlugs.has(slug));
  } catch (error) {
    console.error('Error checking blogs needing optimization:', error);
    return slugs;
  }
}

// Get all optimized blog slugs
export async function getAllOptimizedSlugs(): Promise<string[]> {
  try {
    const { data, error } = await supabase
      .from('optimized_blogs')
      .select('slug');

    if (error) {
      console.error('Error fetching optimized slugs:', error);
      return [];
    }

    return (data || []).map((r: { slug: string }) => r.slug);
  } catch (error) {
    console.error('Error fetching optimized slugs:', error);
    return [];
  }
}

// Get optimization stats
export async function getOptimizationStats(): Promise<{
  total: number;
  avgScore: number;
  lastOptimized: Date | null;
}> {
  try {
    const { data, error } = await supabase
      .from('optimized_blogs')
      .select('optimization_score, last_optimized');

    if (error) {
      console.error('Error fetching optimization stats:', error);
      return { total: 0, avgScore: 0, lastOptimized: null };
    }

    const records = data || [];
    const total = records.length;
    const avgScore =
      total > 0
        ? records.reduce((sum: number, r: { optimization_score: number }) => sum + r.optimization_score, 0) / total
        : 0;
    const lastOptimized =
      records.length > 0
        ? new Date(
            Math.max(
              ...records.map((r: { last_optimized: string }) => new Date(r.last_optimized).getTime())
            )
          )
        : null;

    return { total, avgScore, lastOptimized };
  } catch (error) {
    console.error('Error fetching optimization stats:', error);
    return { total: 0, avgScore: 0, lastOptimized: null };
  }
}
