import { NextRequest, NextResponse } from 'next/server';
import { seedFromExistingFaqs } from '@/lib/knowledge-base';
import { verifyAdminToken } from '@/lib/admin-auth';

export async function POST(request: NextRequest) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    const result = await seedFromExistingFaqs();
    return NextResponse.json({
      message: `Seeded ${result.created} entries, skipped ${result.skipped} duplicates`,
      ...result,
    });
  } catch (error) {
    console.error('KB seed error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Seed failed' },
      { status: 500 }
    );
  }
}
