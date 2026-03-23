import { NextRequest, NextResponse } from 'next/server';
import { getDb, isDatabaseConfigured } from '@/lib/db/projects-db';
import { blogPosts } from '@/lib/db/schema';
import { desc, eq, like, or, and, sql } from 'drizzle-orm';

// GET /api/admin/blogs - List all blog posts
export async function GET(request: NextRequest) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;
    const search = searchParams.get('search');
    const published = searchParams.get('published');

    const conditions = [];

    if (published === 'true') {
      conditions.push(eq(blogPosts.published, true));
    } else if (published === 'false') {
      conditions.push(eq(blogPosts.published, false));
    }

    if (search) {
      conditions.push(
        or(
          like(blogPosts.title, `%${search}%`),
          like(blogPosts.excerpt, `%${search}%`),
          like(blogPosts.category, `%${search}%`)
        )
      );
    }

    const db = getDb()!;

    const posts = await db
      .select()
      .from(blogPosts)
      .where(conditions.length > 0 ? and(...conditions) : undefined)
      .orderBy(desc(blogPosts.createdAt))
      .limit(limit)
      .offset(offset);

    const totalResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(blogPosts)
      .where(conditions.length > 0 ? and(...conditions) : undefined);

    const total = Number(totalResult[0]?.count || 0);

    return NextResponse.json({
      posts,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}

// POST /api/admin/blogs - Create a new blog post
export async function POST(request: NextRequest) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }

  try {
    const body = await request.json();

    if (!body.title || !body.content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
    }

    const slug = body.slug || generateSlug(body.title);

    const db = getDb()!;

    const [newPost] = await db
      .insert(blogPosts)
      .values({
        title: body.title,
        slug,
        content: body.content,
        excerpt: body.excerpt || body.content.replace(/<[^>]*>/g, '').slice(0, 200),
        featuredImage: body.featuredImage,
        featuredImageAlt: body.featuredImageAlt,
        category: body.category,
        tags: body.tags || [],
        metaTitle: body.metaTitle,
        metaDescription: body.metaDescription,
        focusKeyword: body.focusKeyword,
        author: body.author || 'Best Roofing Now',
        published: body.published || false,
        publishedAt: body.published ? new Date() : null,
      })
      .returning();

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 });
  }
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}
