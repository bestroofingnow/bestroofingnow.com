import { NextRequest, NextResponse } from 'next/server';
import { getDb, isDatabaseConfigured } from '@/lib/db/projects-db';
import { blogPosts } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET /api/admin/blogs/[id] - Get a single blog post
export async function GET(_request: NextRequest, { params }: RouteParams) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }

  try {
    const { id } = await params;
    const db = getDb()!;

    const [post] = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.id, id))
      .limit(1);

    if (!post) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json({ error: 'Failed to fetch blog post' }, { status: 500 });
  }
}

// PUT /api/admin/blogs/[id] - Update a blog post
export async function PUT(request: NextRequest, { params }: RouteParams) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }

  try {
    const { id } = await params;
    const body = await request.json();
    const db = getDb()!;

    const updateData: Record<string, unknown> = { updatedAt: new Date() };

    // Only update provided fields
    const allowedFields = [
      'title', 'slug', 'content', 'excerpt', 'featuredImage', 'featuredImageAlt',
      'category', 'tags', 'metaTitle', 'metaDescription', 'focusKeyword',
      'author', 'published',
    ];

    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        updateData[field] = body[field];
      }
    }

    // Set publishedAt when first published
    if (body.published === true) {
      const [existing] = await db.select().from(blogPosts).where(eq(blogPosts.id, id)).limit(1);
      if (existing && !existing.publishedAt) {
        updateData.publishedAt = new Date();
      }
    }

    const [updated] = await db
      .update(blogPosts)
      .set(updateData)
      .where(eq(blogPosts.id, id))
      .returning();

    if (!updated) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json({ error: 'Failed to update blog post' }, { status: 500 });
  }
}

// DELETE /api/admin/blogs/[id] - Delete a blog post
export async function DELETE(_request: NextRequest, { params }: RouteParams) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }

  try {
    const { id } = await params;
    const db = getDb()!;

    const [deleted] = await db
      .delete(blogPosts)
      .where(eq(blogPosts.id, id))
      .returning();

    if (!deleted) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 500 });
  }
}
