import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminToken } from '@/lib/admin-auth';
import { runPageAudit, getAuditResults } from '@/lib/seo-auditor';

/** GET — get audit results for a scan */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    const { id } = await params;
    const sortBy = (request.nextUrl.searchParams.get('sort') as 'score' | 'url') || 'score';
    const results = await getAuditResults(id, sortBy);
    return NextResponse.json({ data: results });
  } catch (error) {
    console.error('Audit fetch error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch audits' },
      { status: 500 },
    );
  }
}

/** POST — trigger a page audit for this scan */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    const { id } = await params;
    const body = await request.json().catch(() => ({}));
    const maxPages = Math.min(body.maxPages ?? 200, 500);

    const result = await runPageAudit(id, maxPages);
    return NextResponse.json({ data: result });
  } catch (error) {
    console.error('Audit run error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Audit failed' },
      { status: 500 },
    );
  }
}
