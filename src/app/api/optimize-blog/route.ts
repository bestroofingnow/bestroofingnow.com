// API route for single blog optimization
// POST /api/optimize-blog - Optimize a single blog post
// GET /api/optimize-blog?slug=xxx - Get optimized content for a blog

import { NextRequest, NextResponse } from 'next/server';
import { getPostBySlug } from '@/lib/wordpress';
import { optimizeAndSaveBlog } from '@/lib/blog-optimizer';
import { getOptimizedBlog, initializeDatabase } from '@/lib/db';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    return NextResponse.json({ error: 'Slug parameter required' }, { status: 400 });
  }

  try {
    const optimized = await getOptimizedBlog(slug);

    if (!optimized) {
      return NextResponse.json({
        found: false,
        message: 'Blog not yet optimized',
      });
    }

    return NextResponse.json({
      found: true,
      data: {
        slug: optimized.slug,
        optimizedTitle: optimized.optimizedTitle,
        metaDescription: optimized.metaDescription,
        keywords: optimized.focusKeywords,
        optimizationScore: optimized.optimizationScore,
        lastOptimized: optimized.lastOptimized,
        hasOptimizedContent: !!optimized.optimizedContent,
        schemaMarkup: optimized.schemaMarkup,
      },
    });
  } catch (error) {
    return NextResponse.json({
      error: 'Failed to fetch optimized blog',
      details: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  // Check authorization
  const authHeader = request.headers.get('authorization');
  const apiKey = process.env.SYNC_API_KEY || process.env.ANTHROPIC_API_KEY;

  if (apiKey && authHeader !== `Bearer ${apiKey}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { slug, forceReoptimize = false } = body;

    if (!slug) {
      return NextResponse.json({ error: 'Slug required in request body' }, { status: 400 });
    }

    // Initialize database
    await initializeDatabase();

    // Check if already optimized (unless forcing)
    if (!forceReoptimize) {
      const existing = await getOptimizedBlog(slug);
      if (existing && existing.optimizationScore && existing.optimizationScore > 0) {
        return NextResponse.json({
          message: 'Blog already optimized',
          alreadyOptimized: true,
          data: {
            slug: existing.slug,
            optimizedTitle: existing.optimizedTitle,
            optimizationScore: existing.optimizationScore,
            lastOptimized: existing.lastOptimized,
          },
        });
      }
    }

    // Fetch post from WordPress
    const post = await getPostBySlug(slug);

    if (!post) {
      return NextResponse.json({ error: 'Blog post not found in WordPress' }, { status: 404 });
    }

    // Optimize and save
    const result = await optimizeAndSaveBlog(post);

    if (!result) {
      return NextResponse.json({ error: 'Optimization failed' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: 'Blog optimized successfully',
      data: {
        slug: result.slug,
        optimizedTitle: result.optimizedTitle,
        metaDescription: result.metaDescription,
        keywords: result.focusKeywords,
        optimizationScore: result.optimizationScore,
        lastOptimized: result.lastOptimized,
      },
    });
  } catch (error) {
    return NextResponse.json({
      error: 'Failed to optimize blog',
      details: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}
