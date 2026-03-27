import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminToken } from '@/lib/admin-auth';
import { getScanRankings } from '@/lib/seo-scanner';

/** GET — get keyword rankings for a specific scan */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    const { id } = await params;
    const url = request.nextUrl.searchParams.get('url') ?? undefined;
    const limit = Math.min(
      parseInt(request.nextUrl.searchParams.get('limit') ?? '500', 10),
      2000,
    );

    const rankings = await getScanRankings(id, url, limit);
    return NextResponse.json({ data: rankings });
  } catch (error) {
    console.error('Rankings fetch error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch rankings' },
      { status: 500 },
    );
  }
}
