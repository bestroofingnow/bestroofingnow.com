// Cron job for daily blog sync
// Runs at 2 AM daily via Vercel Cron
// GET /api/cron/sync-blogs

import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/wordpress';
import { batchOptimizeBlogs } from '@/lib/blog-optimizer';
import { initializeDatabase, getBlogsNeedingOptimization } from '@/lib/db';

export async function GET(request: NextRequest) {
  // Verify cron secret for Vercel
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  // Allow if CRON_SECRET matches or if running locally
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    console.log('Starting daily blog sync cron job...');

    // Initialize database
    await initializeDatabase();

    // Fetch all posts from WordPress
    const allPosts = await getAllPosts();
    const allSlugs = allPosts.map(p => p.slug);

    // Find blogs that haven't been optimized yet
    const needsOptimization = await getBlogsNeedingOptimization(allSlugs);

    if (needsOptimization.length === 0) {
      console.log('All blogs are already optimized');
      return NextResponse.json({
        message: 'All blogs are already optimized',
        totalPosts: allPosts.length,
        needsOptimization: 0,
      });
    }

    // Filter posts to only those needing optimization
    const postsToOptimize = allPosts.filter(p => needsOptimization.includes(p.slug));

    // Limit to 10 posts per cron run to stay within time limits
    const limitedPosts = postsToOptimize.slice(0, 10);

    console.log(`Optimizing ${limitedPosts.length} blogs (${postsToOptimize.length} total need optimization)`);

    // Run optimization
    const results = await batchOptimizeBlogs(limitedPosts, {
      delayMs: 3000,
      onProgress: (completed, total, currentSlug) => {
        console.log(`Progress: ${completed + 1}/${total} - ${currentSlug}`);
      },
    });

    console.log('Cron job completed:', results);

    return NextResponse.json({
      success: true,
      message: 'Cron sync completed',
      totalPosts: allPosts.length,
      needsOptimization: postsToOptimize.length,
      processedThisRun: limitedPosts.length,
      results,
    });
  } catch (error) {
    console.error('Cron job failed:', error);

    return NextResponse.json({
      error: 'Cron sync failed',
      details: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}

// Vercel Cron configuration
export const runtime = 'nodejs';
export const maxDuration = 300; // 5 minutes max for cron
