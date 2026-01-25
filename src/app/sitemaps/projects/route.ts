import { NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';

const BASE_URL = 'https://bestroofingnow.com';

// Projects sitemap - dynamically loads from pmi-export.json
export async function GET() {
  const pages: { url: string; changefreq: string; priority: string; lastmod?: string }[] = [];

  // Add main projects page
  pages.push({
    url: `${BASE_URL}/projects`,
    changefreq: 'weekly',
    priority: '0.8',
  });

  // Load projects from pmi-export.json
  try {
    const exportPath = path.join(process.cwd(), 'pmi-export.json');
    if (fs.existsSync(exportPath)) {
      const data = JSON.parse(fs.readFileSync(exportPath, 'utf-8'));

      // Add individual project pages
      if (data.projects && Array.isArray(data.projects)) {
        data.projects
          .filter((p: { pmiId: string; photos?: unknown[] }) => p.photos && p.photos.length > 0)
          .forEach((project: { pmiId: string; completedDate?: string }) => {
            pages.push({
              url: `${BASE_URL}/projects/${project.pmiId}`,
              changefreq: 'monthly',
              priority: '0.6',
              lastmod: project.completedDate
                ? new Date(project.completedDate).toISOString()
                : undefined,
            });
          });
      }

      // Add city-based project pages
      const cities = [...new Set(data.projects.map((p: { city: string }) => p.city))];
      cities.forEach((city: string) => {
        const slug = city.toLowerCase().replace(/\s+/g, '-');
        pages.push({
          url: `${BASE_URL}/projects/city/${slug}`,
          changefreq: 'weekly',
          priority: '0.7',
        });
      });
    }
  } catch (error) {
    console.error('Error loading projects for sitemap:', error);
  }

  const lastmod = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod || lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
