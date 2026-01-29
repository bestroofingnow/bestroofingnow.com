import { NextResponse } from 'next/server';
import { fetchAllProjects } from '@/lib/pmi-api';

const BASE_URL = 'https://www.bestroofingnow.com';

// Fallback cities when API is unavailable - mirrors the story page fallback
const FALLBACK_CITIES = [
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
  const lastmod = new Date().toISOString();

  // Try to get cities from PMI API, fallback to predefined list
  let citySlugs: string[] = [];
  try {
    const projects = await fetchAllProjects();
    const cities = new Set<string>();
    projects.forEach((p) => {
      if (p.city) {
        cities.add(p.city.toLowerCase().replace(/\s+/g, '-'));
      }
    });
    if (cities.size > 0) {
      citySlugs = Array.from(cities);
    }
  } catch (error) {
    console.error('PMI API failed for sitemap, using fallback cities');
  }

  // Use fallback if API failed or returned empty
  if (citySlugs.length === 0) {
    citySlugs = FALLBACK_CITIES;
  }

  // Stories index page
  const indexPage = {
    url: `${BASE_URL}/stories`,
    changefreq: 'weekly',
    priority: '0.9',
  };

  // City story pages
  const storyPages = citySlugs.map((slug) => ({
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
