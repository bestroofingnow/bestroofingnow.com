import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminToken } from '@/lib/admin-auth';
import { getPagesSummary } from '@/lib/seo-scanner';

/** GET — get page summary for a specific scan */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    const { id } = await params;
    const pages = await getPagesSummary(id);
    return NextResponse.json({ data: pages });
  } catch (error) {
    console.error('Scan detail error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch scan details' },
      { status: 500 },
    );
  }
}
