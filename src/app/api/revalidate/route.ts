// On-demand revalidation webhook endpoint
// Receives notifications from WordPress on publish/update and from daily cron sync
//
// Auth: ?secret=TOKEN query param or Authorization: Bearer TOKEN header
// Checked against process.env.REVALIDATE_SECRET
//
// Usage:
//   POST /api/revalidate?secret=TOKEN&tag=wordpress-posts          → revalidateTag
//   POST /api/revalidate?secret=TOKEN&path=/blog/my-slug           → revalidatePath
//   POST /api/revalidate?secret=TOKEN  body: { post_slug: "slug" } → revalidates tag + path
//   POST /api/revalidate?secret=TOKEN  (no params/body)            → bulk revalidate wordpress-posts
//   GET  /api/revalidate?secret=TOKEN&tag=wordpress-posts          → revalidateTag (convenience)

import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag, revalidatePath } from 'next/cache';

function isAuthorized(request: NextRequest): boolean {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) return false;

  const urlSecret = request.nextUrl.searchParams.get('secret');
  if (urlSecret === secret) return true;

  const authHeader = request.headers.get('authorization');
  if (authHeader === `Bearer ${secret}`) return true;

  return false;
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
  }

  const revalidated: string[] = [];

  // Check query params first
  const tag = request.nextUrl.searchParams.get('tag');
  const path = request.nextUrl.searchParams.get('path');

  if (tag) {
    revalidateTag(tag, { expire: 0 });
    revalidated.push(`tag:${tag}`);
  }

  if (path) {
    revalidatePath(path);
    revalidated.push(`path:${path}`);
  }

  // Check request body for WordPress webhook payload
  try {
    const body = await request.json().catch(() => null);
    if (body?.post_slug) {
      const slug = body.post_slug;
      revalidateTag('wordpress-posts', { expire: 0 });
      revalidateTag(`wordpress-post-${slug}`, { expire: 0 });
      revalidatePath(`/blog/${slug}`);
      revalidated.push(`tag:wordpress-posts`, `tag:wordpress-post-${slug}`, `path:/blog/${slug}`);
    }
  } catch {
    // No body or invalid JSON — that's fine
  }

  // If nothing specific was requested, do a bulk revalidation
  if (revalidated.length === 0) {
    revalidateTag('wordpress-posts', { expire: 0 });
    revalidated.push('tag:wordpress-posts');
  }

  return NextResponse.json({
    revalidated: true,
    items: revalidated,
    timestamp: new Date().toISOString(),
  });
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
  }

  const revalidated: string[] = [];

  const tag = request.nextUrl.searchParams.get('tag');
  const path = request.nextUrl.searchParams.get('path');

  if (tag) {
    revalidateTag(tag, { expire: 0 });
    revalidated.push(`tag:${tag}`);
  }

  if (path) {
    revalidatePath(path);
    revalidated.push(`path:${path}`);
  }

  if (revalidated.length === 0) {
    revalidateTag('wordpress-posts', { expire: 0 });
    revalidated.push('tag:wordpress-posts');
  }

  return NextResponse.json({
    revalidated: true,
    items: revalidated,
    timestamp: new Date().toISOString(),
  });
}
