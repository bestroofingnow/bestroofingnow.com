// Database connection for blog optimization
// Using Drizzle ORM with Vercel Postgres (Neon) - same as projects-db

import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { eq, inArray } from 'drizzle-orm';
import * as schema from './db/schema';

// Create drizzle instance with schema (only if configured)
let dbInstance: ReturnType<typeof drizzle<typeof schema>> | null = null;

function getDb() {
  if (!dbInstance && process.env.POSTGRES_URL) {
    dbInstance = drizzle(sql, { schema });
  }
  return dbInstance;
}

// Helper to check if database is configured
export function isDatabaseConfigured(): boolean {
  return !!process.env.POSTGRES_URL;
}

// Re-export types from schema for convenience
export type { OptimizedBlog, NewOptimizedBlog, LinkablePage, NewLinkablePage } from './db/schema';

// Type for internal links (matches schema)
export interface InternalLink {
  url: string;
  anchor: string;
  keyword: string;
}

// Initialize database - just checks if configured
export async function initializeDatabase(): Promise<void> {
  const db = getDb();
  if (!db) {
    console.log('Database not configured. Blog optimization features disabled.');
    console.log('Set POSTGRES_URL environment variable to enable.');
    return;
  }
  console.log('Database configured and ready.');
}

// Get optimized blog by slug
export async function getOptimizedBlog(slug: string): Promise<schema.OptimizedBlog | null> {
  const db = getDb();
  if (!db) return null;

  try {
    const result = await db
      .select()
      .from(schema.optimizedBlogs)
      .where(eq(schema.optimizedBlogs.slug, slug))
      .limit(1);

    return result[0] || null;
  } catch (error) {
    console.error('Error fetching optimized blog:', error);
    return null;
  }
}

// Get optimized blog by WordPress post ID
export async function getOptimizedBlogByWpId(wpPostId: number): Promise<schema.OptimizedBlog | null> {
  const db = getDb();
  if (!db) return null;

  try {
    const result = await db
      .select()
      .from(schema.optimizedBlogs)
      .where(eq(schema.optimizedBlogs.wpPostId, wpPostId))
      .limit(1);

    return result[0] || null;
  } catch (error) {
    console.error('Error fetching optimized blog by WP ID:', error);
    return null;
  }
}

// Save or update optimized blog
export async function saveOptimizedBlog(
  blog: Omit<schema.NewOptimizedBlog, 'id' | 'createdAt' | 'updatedAt'>
): Promise<schema.OptimizedBlog | null> {
  const db = getDb();
  if (!db) return null;

  try {
    // Try to update first
    const existing = await db
      .select()
      .from(schema.optimizedBlogs)
      .where(eq(schema.optimizedBlogs.wpPostId, blog.wpPostId))
      .limit(1);

    if (existing[0]) {
      // Update existing
      const updated = await db
        .update(schema.optimizedBlogs)
        .set({
          ...blog,
          updatedAt: new Date(),
        })
        .where(eq(schema.optimizedBlogs.wpPostId, blog.wpPostId))
        .returning();
      return updated[0] || null;
    } else {
      // Insert new
      const inserted = await db
        .insert(schema.optimizedBlogs)
        .values(blog)
        .returning();
      return inserted[0] || null;
    }
  } catch (error) {
    console.error('Error saving optimized blog:', error);
    return null;
  }
}

// Get all linkable pages for auto-linking
export async function getLinkablePages(): Promise<schema.LinkablePage[]> {
  const db = getDb();
  if (!db) return [];

  try {
    const result = await db
      .select()
      .from(schema.linkablePages)
      .orderBy(schema.linkablePages.priority);

    return result;
  } catch (error) {
    console.error('Error fetching linkable pages:', error);
    return [];
  }
}

// Save or update linkable page
export async function saveLinkablePage(
  page: Omit<schema.NewLinkablePage, 'id' | 'createdAt'>
): Promise<schema.LinkablePage | null> {
  const db = getDb();
  if (!db) return null;

  try {
    // Try to update first
    const existing = await db
      .select()
      .from(schema.linkablePages)
      .where(eq(schema.linkablePages.url, page.url))
      .limit(1);

    if (existing[0]) {
      // Update existing
      const updated = await db
        .update(schema.linkablePages)
        .set(page)
        .where(eq(schema.linkablePages.url, page.url))
        .returning();
      return updated[0] || null;
    } else {
      // Insert new
      const inserted = await db
        .insert(schema.linkablePages)
        .values(page)
        .returning();
      return inserted[0] || null;
    }
  } catch (error) {
    console.error('Error saving linkable page:', error);
    return null;
  }
}

// Bulk insert linkable pages
export async function bulkSaveLinkablePages(
  pages: Omit<schema.NewLinkablePage, 'id' | 'createdAt'>[]
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

  const db = getDb();
  if (!db) return slugs; // Return all if not configured

  try {
    const result = await db
      .select({ slug: schema.optimizedBlogs.slug })
      .from(schema.optimizedBlogs)
      .where(inArray(schema.optimizedBlogs.slug, slugs));

    const optimizedSlugs = new Set(result.map(r => r.slug));
    return slugs.filter(slug => !optimizedSlugs.has(slug));
  } catch (error) {
    console.error('Error checking blogs needing optimization:', error);
    return slugs;
  }
}

// Get all optimized blog slugs
export async function getAllOptimizedSlugs(): Promise<string[]> {
  const db = getDb();
  if (!db) return [];

  try {
    const result = await db
      .select({ slug: schema.optimizedBlogs.slug })
      .from(schema.optimizedBlogs);

    return result.map(r => r.slug);
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
  const db = getDb();
  if (!db) return { total: 0, avgScore: 0, lastOptimized: null };

  try {
    const result = await db
      .select({
        optimizationScore: schema.optimizedBlogs.optimizationScore,
        lastOptimized: schema.optimizedBlogs.lastOptimized,
      })
      .from(schema.optimizedBlogs);

    const total = result.length;
    const avgScore = total > 0
      ? result.reduce((sum, r) => sum + (r.optimizationScore || 0), 0) / total
      : 0;
    const lastOptimized = result.length > 0
      ? new Date(Math.max(...result.filter(r => r.lastOptimized).map(r => r.lastOptimized!.getTime())))
      : null;

    return { total, avgScore, lastOptimized };
  } catch (error) {
    console.error('Error fetching optimization stats:', error);
    return { total: 0, avgScore: 0, lastOptimized: null };
  }
}
