import {
NextResponse } from 'next/server';
import { getSitemapLastmod } from '@/lib/sitemap';

export const dynamic = 'force-static';

const BASE_URL = 'https://www.bestroofingnow.com';

// Static city list for sitemap generation (PMI API dependency removed)
const CITIES = [
  'charlotte', 'huntersville', 'cornelius', 'davidson', 'matthews', 'mint-hill',
  'pineville', 'concord', 'kannapolis', 'harrisburg', 'monroe', 'indian-trail',
  'waxhaw', 'stallings', 'weddington', 'marvin', 'wesley-chapel', 'gastonia',
  'mt-holly', 'belmont', 'kings-mountain', 'mooresville', 'statesville', 'denver',
  'lincolnton', 'lake-norman', 'sherrills-ford', 'terrell', 'hickory', 'newton',
  'albemarle', 'shelby', 'rock-hill', 'fort-mill', 'tega-cay', 'indian-land',
  'lancaster', 'salisbury', 'china-grove', 'mount-holly'
];

// Stories sitemap: All city story pages
export async function GET() {
  const lastmod = getSitemapLastmod();

  // Stories index page
  const indexPage = {
    url: `${BASE_URL}/stories`,
    changefreq: 'weekly',
    priority: '0.9',
  };

  // City story pages
  const storyPages = CITIES.map((slug) => ({
    url: `${BASE_URL}/stories/${slug}`,
    changefreq: 'weekly',
    priority: '0.8',
  }));

  const allPages = [indexPage, ...storyPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
