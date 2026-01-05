import { NextResponse } from 'next/server';
import { IMAGES } from '@/lib/images';

const BASE_URL = 'https://bestroofingnow.com';

interface VideoEntry {
  pageUrl: string;
  video: {
    thumbnailLoc: string;
    title: string;
    description: string;
    contentLoc: string;
    duration?: number;
    publicationDate?: string;
    familyFriendly?: boolean;
  };
}

// Google Video Sitemap format
export async function GET() {
  const videoEntries: VideoEntry[] = [];

  // Charlotte NC page has a video hero
  const charlotteVideoUrl = 'https://cms.bestroofingnow.com/wp-content/uploads/2025/12/Untitled-design-10.mp4';

  videoEntries.push({
    pageUrl: `${BASE_URL}/locations/charlotte-nc`,
    video: {
      thumbnailLoc: IMAGES.hero.hero1,
      title: 'Best Roofing Now - Charlotte NC Roofing Company',
      description: 'Professional roofing services in Charlotte, North Carolina. Residential and commercial roof repair, replacement, and installation. Veteran-owned, family-operated since 2019.',
      contentLoc: charlotteVideoUrl,
      duration: 30,
      publicationDate: '2025-12-01',
      familyFriendly: true,
    },
  });

  // Homepage video (if applicable)
  videoEntries.push({
    pageUrl: BASE_URL,
    video: {
      thumbnailLoc: IMAGES.hero.roofTeam,
      title: 'Best Roofing Now - Premier Charlotte Roofing Contractor',
      description: 'Watch our team in action. Best Roofing Now provides expert residential and commercial roofing services throughout the Charlotte metro area. Free inspections, insurance claim assistance, and quality craftsmanship.',
      contentLoc: charlotteVideoUrl,
      duration: 30,
      publicationDate: '2025-12-01',
      familyFriendly: true,
    },
  });

  // Build XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${videoEntries.map(entry => `  <url>
    <loc>${entry.pageUrl}</loc>
    <video:video>
      <video:thumbnail_loc>${entry.video.thumbnailLoc}</video:thumbnail_loc>
      <video:title>${escapeXml(entry.video.title)}</video:title>
      <video:description>${escapeXml(entry.video.description)}</video:description>
      <video:content_loc>${entry.video.contentLoc}</video:content_loc>
${entry.video.duration ? `      <video:duration>${entry.video.duration}</video:duration>` : ''}
${entry.video.publicationDate ? `      <video:publication_date>${entry.video.publicationDate}</video:publication_date>` : ''}
      <video:family_friendly>${entry.video.familyFriendly ? 'yes' : 'no'}</video:family_friendly>
    </video:video>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
