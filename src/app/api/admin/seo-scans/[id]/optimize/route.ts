import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminToken } from '@/lib/admin-auth';
import { runOptimizer, getOptimizations } from '@/lib/seo-optimizer';

/** GET — get optimization suggestions for a scan */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    const { id } = await params;
    const status = request.nextUrl.searchParams.get('status') ?? undefined;
    const results = await getOptimizations(id, status);
    return NextResponse.json({ data: results });
  } catch (error) {
    console.error('Optimizations fetch error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch optimizations' },
      { status: 500 },
    );
  }
}

/** POST — run AI optimizer for this scan */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    const { id } = await params;
    const body = await request.json().catch(() => ({}));
    const maxPages = Math.min(body.maxPages ?? 50, 100);

    const result = await runOptimizer(id, maxPages);
    return NextResponse.json({ data: result });
  } catch (error) {
    console.error('Optimizer run error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Optimizer failed' },
      { status: 500 },
    );
  }
}
