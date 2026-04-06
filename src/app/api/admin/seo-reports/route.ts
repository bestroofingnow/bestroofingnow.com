import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminToken } from '@/lib/admin-auth';
import { generateWeeklyReport, getReportHistory, getReportByScan } from '@/lib/seo-reporter';

/** GET — list report history */
export async function GET(request: NextRequest) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    const scanId = request.nextUrl.searchParams.get('scanId');

    if (scanId) {
      const report = await getReportByScan(scanId);
      return NextResponse.json({ data: report });
    }

    const reports = await getReportHistory(20);
    return NextResponse.json({ data: reports });
  } catch (error) {
    console.error('Report fetch error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch reports' },
      { status: 500 },
    );
  }
}

/** POST — generate a report for a scan */
export async function POST(request: NextRequest) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    const { scanId } = (await request.json()) as { scanId: string };
    if (!scanId) {
      return NextResponse.json({ error: 'scanId required' }, { status: 400 });
    }

    const report = await generateWeeklyReport(scanId);
    return NextResponse.json({ data: report });
  } catch (error) {
    console.error('Report generation error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Report generation failed' },
      { status: 500 },
    );
  }
}
