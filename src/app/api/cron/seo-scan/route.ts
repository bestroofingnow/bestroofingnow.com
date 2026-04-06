import { NextRequest, NextResponse } from 'next/server';
import { runSiteScan } from '@/lib/seo-scanner';

/**
 * Cron-triggered weekly SEO scan.
 *
 * Vercel Cron:  Add to vercel.json:
 *   { "crons": [{ "path": "/api/cron/seo-scan", "schedule": "0 6 * * 1" }] }
 *
 * External scheduler: POST with Authorization: Bearer <CRON_SECRET>
 *
 * Environment: CRON_SECRET must be set.
 */
export async function GET(request: NextRequest) {
  return handleCron(request);
}

export async function POST(request: NextRequest) {
  return handleCron(request);
}

async function handleCron(request: NextRequest): Promise<NextResponse> {
  // Verify cron secret (Vercel sends it as Authorization header)
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) {
    return NextResponse.json({ error: 'CRON_SECRET not configured' }, { status: 503 });
  }

  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const result = await runSiteScan('cron', 1000);
    return NextResponse.json({ data: result });
  } catch (error) {
    console.error('Cron scan error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Cron scan failed' },
      { status: 500 },
    );
  }
}
