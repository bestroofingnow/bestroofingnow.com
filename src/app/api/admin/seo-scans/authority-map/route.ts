import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminToken } from '@/lib/admin-auth';
import { analyzeTopicalCoverage } from '@/lib/authority-mapper';

/** GET — analyze topical authority coverage */
export async function GET(request: NextRequest) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    const result = await analyzeTopicalCoverage();
    return NextResponse.json({ data: result });
  } catch (error) {
    console.error('Authority map error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Authority analysis failed' },
      { status: 500 },
    );
  }
}
