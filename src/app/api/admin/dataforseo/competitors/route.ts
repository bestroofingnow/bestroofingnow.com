import { NextRequest, NextResponse } from 'next/server';
import { getCompetitors } from '@/lib/dataforseo/client';
import { verifyAdminToken } from '@/lib/admin-auth';

export async function GET(request: NextRequest) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    const { searchParams } = new URL(request.url);
    const domain = searchParams.get('domain') || undefined;
    const limit = parseInt(searchParams.get('limit') || '20', 10);

    const competitors = await getCompetitors(domain, limit);

    return NextResponse.json({ data: competitors });
  } catch (error) {
    console.error('Competitor analysis error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Competitor analysis failed' },
      { status: 500 }
    );
  }
}
