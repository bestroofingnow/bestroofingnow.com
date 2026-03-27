import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminToken } from '@/lib/admin-auth';
import { updateOptimizationStatus } from '@/lib/seo-optimizer';

/** PATCH — update optimization status (approve/reject/apply) */
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    const { id } = await params;
    const { status } = (await request.json()) as { status: 'approved' | 'applied' | 'rejected' };

    if (!['approved', 'applied', 'rejected'].includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    const result = await updateOptimizationStatus(id, status);
    if (!result) {
      return NextResponse.json({ error: 'Optimization not found' }, { status: 404 });
    }

    return NextResponse.json({ data: result });
  } catch (error) {
    console.error('Optimization update error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Update failed' },
      { status: 500 },
    );
  }
}
