import { NextRequest, NextResponse } from 'next/server';
import { getRankedKeywords } from '@/lib/dataforseo/client';
import { verifyAdminToken } from '@/lib/admin-auth';

export async function POST(request: NextRequest) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    const { slug } = (await request.json()) as { slug: string };

    if (!slug?.trim()) {
      return NextResponse.json({ error: 'Blog slug is required' }, { status: 400 });
    }

    // Fetch all ranked keywords for the domain
    const allKeywords = await getRankedKeywords('bestroofingnow.com', 500);

    // Filter to keywords ranking for this blog URL
    const blogUrl = `/blog/${slug}`;
    const blogKeywords = allKeywords.filter(kw => kw.url?.includes(blogUrl));

    // Calculate scores
    const totalVolume = blogKeywords.reduce((sum, kw) => sum + kw.searchVolume, 0);
    const avgPosition = blogKeywords.length > 0
      ? blogKeywords.reduce((sum, kw) => sum + (kw.position ?? 100), 0) / blogKeywords.length
      : 0;
    const strikingDistance = blogKeywords.filter(kw => {
      const pos = kw.position ?? 100;
      return pos >= 11 && pos <= 30;
    });
    const topTen = blogKeywords.filter(kw => (kw.position ?? 100) <= 10);

    // Score: 0-100
    let score = 0;
    if (blogKeywords.length > 0) score += Math.min(20, blogKeywords.length * 2);
    if (totalVolume > 100) score += 15;
    if (totalVolume > 500) score += 10;
    if (topTen.length > 0) score += Math.min(25, topTen.length * 5);
    if (avgPosition > 0 && avgPosition <= 20) score += 15;
    if (strikingDistance.length > 0) score += Math.min(15, strikingDistance.length * 3);

    return NextResponse.json({
      slug,
      score: Math.min(100, score),
      totalKeywords: blogKeywords.length,
      totalVolume,
      avgPosition: Math.round(avgPosition * 10) / 10,
      topTenKeywords: topTen.length,
      strikingDistanceKeywords: strikingDistance.length,
      keywords: blogKeywords.slice(0, 20).map(kw => ({
        keyword: kw.keyword,
        volume: kw.searchVolume,
        position: kw.position,
      })),
    });
  } catch (error) {
    console.error('Blog score error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Blog scoring failed' },
      { status: 500 }
    );
  }
}
