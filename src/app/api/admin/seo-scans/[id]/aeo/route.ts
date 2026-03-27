import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminToken } from '@/lib/admin-auth';
import { runAeoPipeline, getAeoOptimizations } from '@/lib/aeo-optimizer';

/** GET — get AEO optimizations for a scan */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    const { id } = await params;
    const results = await getAeoOptimizations(id);
    return NextResponse.json({ data: results });
  } catch (error) {
    console.error('AEO fetch error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch AEO data' },
      { status: 500 },
    );
  }
}

/** POST — run AEO pipeline for this scan */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    const { id } = await params;
    const body = await request.json().catch(() => ({}));
    const maxPages = Math.min(body.maxPages ?? 30, 100);

    const result = await runAeoPipeline(id, maxPages);
    return NextResponse.json({ data: result });
  } catch (error) {
    console.error('AEO pipeline error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'AEO pipeline failed' },
      { status: 500 },
    );
  }
}
