import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminToken } from '@/lib/admin-auth';
import { getScanMovers } from '@/lib/seo-scanner';

/** GET — get top gainers and losers for a specific scan */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    const { id } = await params;
    const { gainers, losers } = await getScanMovers(id);
    return NextResponse.json({ data: { gainers, losers } });
  } catch (error) {
    console.error('Movers fetch error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch movers' },
      { status: 500 },
    );
  }
}
