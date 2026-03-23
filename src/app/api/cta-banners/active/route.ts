import { NextRequest, NextResponse } from 'next/server';
import { getDb, isDatabaseConfigured } from '@/lib/db/projects-db';
import { ctaBanners } from '@/lib/db/schema';
import { eq, and } from 'drizzle-orm';

// GET /api/cta-banners/active?placement=global - Get the active CTA banner for a placement
export async function GET(request: NextRequest) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json({ banner: null });
  }

  try {
    const { searchParams } = new URL(request.url);
    const placement = searchParams.get('placement') || 'global';

    const db = getDb()!;

    const [banner] = await db
      .select()
      .from(ctaBanners)
      .where(and(eq(ctaBanners.active, true), eq(ctaBanners.placement, placement)))
      .limit(1);

    return NextResponse.json(
      { banner: banner || null },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching active CTA banner:', error);
    return NextResponse.json({ banner: null });
  }
}
