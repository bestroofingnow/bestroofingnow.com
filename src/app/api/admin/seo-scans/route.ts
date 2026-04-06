import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminToken } from '@/lib/admin-auth';
import { runSiteScan, getScanHistory } from '@/lib/seo-scanner';

/** GET — list scan history */
export async function GET(request: NextRequest) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    const scans = await getScanHistory(50);
    return NextResponse.json({ data: scans });
  } catch (error) {
    console.error('Scan history error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch scan history' },
      { status: 500 },
    );
  }
}

/** POST — trigger a new scan */
export async function POST(request: NextRequest) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    const body = await request.json().catch(() => ({}));
    const trigger = (body.trigger as 'manual' | 'cron' | 'api') || 'manual';
    const keywordLimit = Math.min(body.keywordLimit ?? 1000, 2000);

    const result = await runSiteScan(trigger, keywordLimit);

    return NextResponse.json({ data: result });
  } catch (error) {
    console.error('Scan trigger error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Scan failed to start' },
      { status: 500 },
    );
  }
}
