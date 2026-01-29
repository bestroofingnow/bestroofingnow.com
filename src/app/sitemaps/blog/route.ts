import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/wordpress';

const BASE_URL = 'https://www.bestroofingnow.com';

// Blog sitemap: All blog posts
export async function GET() {
  // Blog index page
  const indexPage = {
    url: `${BASE_URL}/blog`,
    lastmod: new Date().toISOString(),
    changefreq: 'daily',
    priority: '0.7',
  };

  // Fetch ALL blog posts from WordPress (paginated)
  let blogPages: { url: string; lastmod: string; changefreq: string; priority: string }[] = [];

  try {
    const posts = await getAllPosts();
    blogPages = posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastmod: post.modified ? new Date(post.modified).toISOString() : new Date().toISOString(),
      changefreq: 'monthly',
      priority: '0.6',
    }));
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
  }

  const allPages = [indexPage, ...blogPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
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
