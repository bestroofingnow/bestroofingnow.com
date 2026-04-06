import { NextRequest, NextResponse } from 'next/server';
import { getSerpResults } from '@/lib/dataforseo/client';
import { getCachedSerp, cacheSerp } from '@/lib/dataforseo/cache';
import { verifyAdminToken } from '@/lib/admin-auth';

export async function POST(request: NextRequest) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    const { keyword } = (await request.json()) as { keyword: string };

    if (!keyword?.trim()) {
      return NextResponse.json(
        { error: 'Keyword is required' },
        { status: 400 }
      );
    }

    // Check cache first
    const cached = await getCachedSerp(keyword);
    if (cached) {
      return NextResponse.json({ data: cached, cached: true });
    }

    // Fetch from DataForSEO
    const result = await getSerpResults(keyword);
    if (!result) {
      return NextResponse.json(
        { error: 'No SERP results found' },
        { status: 404 }
      );
    }

    // Cache the result
    await cacheSerp(result);

    return NextResponse.json({ data: result, cached: false });
  } catch (error) {
    console.error('SERP analysis error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'SERP analysis failed' },
      { status: 500 }
    );
  }
}
