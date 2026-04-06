import { NextRequest, NextResponse } from 'next/server';
import { getDb, isDatabaseConfigured } from '@/lib/db/projects-db';
import { ctaBanners } from '@/lib/db/schema';
import { desc, eq, and } from 'drizzle-orm';

// GET /api/admin/cta-banners - List all CTA banners
export async function GET() {
  if (!isDatabaseConfigured()) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }

  try {
    const db = getDb()!;

    const banners = await db
      .select()
      .from(ctaBanners)
      .orderBy(desc(ctaBanners.active), ctaBanners.order, desc(ctaBanners.createdAt));

    return NextResponse.json({ banners });
  } catch (error) {
    console.error('Error fetching CTA banners:', error);
    return NextResponse.json({ error: 'Failed to fetch CTA banners' }, { status: 500 });
  }
}

// POST /api/admin/cta-banners - Create a new CTA banner
export async function POST(request: NextRequest) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }

  try {
    const body = await request.json();

    if (!body.name || !body.title) {
      return NextResponse.json({ error: 'Name and title are required' }, { status: 400 });
    }

    const db = getDb()!;

    // If setting this banner as active, deactivate others with the same placement
    if (body.active) {
      await db
        .update(ctaBanners)
        .set({ active: false, updatedAt: new Date() })
        .where(eq(ctaBanners.placement, body.placement || 'global'));
    }

    const [newBanner] = await db
      .insert(ctaBanners)
      .values({
        name: body.name,
        title: body.title,
        subtitle: body.subtitle,
        buttonText: body.buttonText || 'Schedule Free Inspection',
        buttonUrl: body.buttonUrl || '/contact',
        secondaryButtonText: body.secondaryButtonText,
        secondaryButtonUrl: body.secondaryButtonUrl,
        footnote: body.footnote,
        variant: body.variant || 'accent',
        placement: body.placement || 'global',
        active: body.active || false,
        order: body.order || 0,
      })
      .returning();

    return NextResponse.json(newBanner, { status: 201 });
  } catch (error) {
    console.error('Error creating CTA banner:', error);
    return NextResponse.json({ error: 'Failed to create CTA banner' }, { status: 500 });
  }
}
