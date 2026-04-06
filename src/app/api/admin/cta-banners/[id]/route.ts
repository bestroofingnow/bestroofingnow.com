import { NextRequest, NextResponse } from 'next/server';
import { getDb, isDatabaseConfigured } from '@/lib/db/projects-db';
import { ctaBanners } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET /api/admin/cta-banners/[id] - Get a single CTA banner
export async function GET(_request: NextRequest, { params }: RouteParams) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }

  try {
    const { id } = await params;
    const db = getDb()!;

    const [banner] = await db
      .select()
      .from(ctaBanners)
      .where(eq(ctaBanners.id, id))
      .limit(1);

    if (!banner) {
      return NextResponse.json({ error: 'CTA banner not found' }, { status: 404 });
    }

    return NextResponse.json(banner);
  } catch (error) {
    console.error('Error fetching CTA banner:', error);
    return NextResponse.json({ error: 'Failed to fetch CTA banner' }, { status: 500 });
  }
}

// PUT /api/admin/cta-banners/[id] - Update a CTA banner
export async function PUT(request: NextRequest, { params }: RouteParams) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }

  try {
    const { id } = await params;
    const body = await request.json();
    const db = getDb()!;

    // If activating this banner, deactivate others with same placement
    if (body.active === true) {
      const [current] = await db.select().from(ctaBanners).where(eq(ctaBanners.id, id)).limit(1);
      if (current) {
        await db
          .update(ctaBanners)
          .set({ active: false, updatedAt: new Date() })
          .where(eq(ctaBanners.placement, current.placement));
      }
    }

    const updateData: Record<string, unknown> = { updatedAt: new Date() };

    const allowedFields = [
      'name', 'title', 'subtitle', 'buttonText', 'buttonUrl',
      'secondaryButtonText', 'secondaryButtonUrl', 'footnote',
      'variant', 'placement', 'active', 'order',
    ];

    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        updateData[field] = body[field];
      }
    }

    const [updated] = await db
      .update(ctaBanners)
      .set(updateData)
      .where(eq(ctaBanners.id, id))
      .returning();

    if (!updated) {
      return NextResponse.json({ error: 'CTA banner not found' }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error updating CTA banner:', error);
    return NextResponse.json({ error: 'Failed to update CTA banner' }, { status: 500 });
  }
}

// DELETE /api/admin/cta-banners/[id] - Delete a CTA banner
export async function DELETE(_request: NextRequest, { params }: RouteParams) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }

  try {
    const { id } = await params;
    const db = getDb()!;

    const [deleted] = await db
      .delete(ctaBanners)
      .where(eq(ctaBanners.id, id))
      .returning();

    if (!deleted) {
      return NextResponse.json({ error: 'CTA banner not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting CTA banner:', error);
    return NextResponse.json({ error: 'Failed to delete CTA banner' }, { status: 500 });
  }
}
