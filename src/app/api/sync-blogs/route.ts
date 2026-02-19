// API route for bulk blog synchronization and optimization
// POST /api/sync-blogs - Start sync process
// GET /api/sync-blogs - Get sync status

import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { getAllPosts } from '@/lib/wordpress';
import { batchOptimizeBlogs } from '@/lib/blog-optimizer';
import { initializeDatabase, getOptimizationStats } from '@/lib/db';

// Simple in-memory sync status (in production, use Redis or DB)
let syncStatus = {
  isRunning: false,
  startedAt: null as Date | null,
  completed: 0,
  total: 0,
  currentSlug: '',
  lastError: null as string | null,
  lastCompleted: null as Date | null,
  results: {
    success: 0,
    failed: 0,
    skipped: 0,
  },
};

export async function GET() {
  try {
    const stats = await getOptimizationStats();
    return NextResponse.json({
      syncStatus,
      dbStats: stats,
    });
  } catch (error) {
    return NextResponse.json({
      syncStatus,
      dbStats: null,
      error: 'Failed to get database stats',
    });
  }
}

export async function POST(request: NextRequest) {
  // Check authorization (simple API key check)
  const authHeader = request.headers.get('authorization');
  const apiKey = process.env.SYNC_API_KEY || process.env.ANTHROPIC_API_KEY;

  if (apiKey && authHeader !== `Bearer ${apiKey}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Prevent concurrent syncs
  if (syncStatus.isRunning) {
    return NextResponse.json({
      error: 'Sync already in progress',
      status: syncStatus,
    }, { status: 409 });
  }

  try {
    // Get options from request body
    const body = await request.json().catch(() => ({}));
    const limit = body.limit || null; // Optional limit for testing
    const forceReoptimize = body.forceReoptimize || false;

    // Initialize database tables
    await initializeDatabase();

    // Start sync process
    syncStatus = {
      isRunning: true,
      startedAt: new Date(),
      completed: 0,
      total: 0,
      currentSlug: 'Fetching posts...',
      lastError: null,
      lastCompleted: null,
      results: { success: 0, failed: 0, skipped: 0 },
    };

    // Fetch all posts from WordPress
    const posts = await getAllPosts();
    const postsToProcess = limit ? posts.slice(0, limit) : posts;

    syncStatus.total = postsToProcess.length;
    syncStatus.currentSlug = 'Starting optimization...';

    // Run optimization in background (don't await)
    processBlogs(postsToProcess, forceReoptimize);

    return NextResponse.json({
      message: 'Sync started',
      totalPosts: postsToProcess.length,
      status: syncStatus,
    });
  } catch (error) {
    syncStatus.isRunning = false;
    syncStatus.lastError = error instanceof Error ? error.message : 'Unknown error';

    return NextResponse.json({
      error: 'Failed to start sync',
      details: syncStatus.lastError,
    }, { status: 500 });
  }
}

// Background processing function
async function processBlogs(posts: any[], forceReoptimize: boolean) {
  try {
    const results = await batchOptimizeBlogs(posts, {
      delayMs: 3000, // 3 second delay between API calls to avoid rate limits
      onProgress: (completed, total, currentSlug) => {
        syncStatus.completed = completed;
        syncStatus.currentSlug = currentSlug;
      },
    });

    syncStatus.results = results;
    syncStatus.lastCompleted = new Date();

    // Revalidate cached WordPress content after sync completes
    revalidateTag('wordpress-posts', { expire: 0 });
  } catch (error) {
    syncStatus.lastError = error instanceof Error ? error.message : 'Unknown error';
  } finally {
    syncStatus.isRunning = false;
  }
}
