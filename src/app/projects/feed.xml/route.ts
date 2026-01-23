import { NextResponse } from 'next/server';
import { SITE_CONFIG } from '@/lib/constants';
import fs from 'fs';
import path from 'path';

// RSS feed for new projects - can be consumed by GoHighLevel, Zapier, Buffer, etc.
export async function GET() {
  try {
    const exportPath = path.join(process.cwd(), 'pmi-export.json');

    if (!fs.existsSync(exportPath)) {
      return new NextResponse(generateEmptyFeed(), {
        headers: {
          'Content-Type': 'application/rss+xml; charset=utf-8',
          'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
        },
      });
    }

    const data = JSON.parse(fs.readFileSync(exportPath, 'utf-8'));

    // Get projects with photos, sorted by date (newest first)
    const projects = data.projects
      .filter((p: any) => p.photos && p.photos.length > 0)
      .sort((a: any, b: any) =>
        new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime()
      )
      .slice(0, 20); // Last 20 projects for RSS

    const rssXml = generateRssFeed(projects);

    return new NextResponse(rssXml, {
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    return new NextResponse(generateEmptyFeed(), {
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
      },
    });
  }
}

function generateRssFeed(projects: any[]): string {
  const now = new Date().toUTCString();

  const items = projects.map((project) => {
    const title = `New Roof in ${project.city}, ${project.state}`;
    const link = `${SITE_CONFIG.url}/projects/${project.pmiId}`;
    const thumbnail = project.photos?.[0]?.url || project.photos?.[0]?.thumbnailUrl;
    const pubDate = new Date(project.completedDate).toUTCString();

    // Create engaging description for social media
    const productInfo = project.product ? ` featuring ${project.product}` : '';
    const photoCount = project.photos?.length || 0;
    const description = `Just completed another beautiful roofing project in ${project.city}, ${project.state}${productInfo}! 🏠✨ Check out ${photoCount} photos of this transformation. #CharlotteRoofing #${project.city.replace(/\s+/g, '')} #RoofReplacement #NewRoof`;

    // HTML content with image for platforms that support it
    const htmlContent = `
      <p>${description}</p>
      ${thumbnail ? `<p><img src="${thumbnail}" alt="Roofing project in ${project.city}" /></p>` : ''}
      <p><a href="${link}">View full project gallery →</a></p>
    `.trim();

    return `
    <item>
      <title><![CDATA[${title}]]></title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${description}]]></description>
      <content:encoded><![CDATA[${htmlContent}]]></content:encoded>
      ${thumbnail ? `<enclosure url="${thumbnail}" type="image/jpeg" length="0" />` : ''}
      ${thumbnail ? `<media:content url="${thumbnail}" medium="image" />` : ''}
      <category>${project.city}</category>
      ${project.product ? `<category>${project.product}</category>` : ''}
    </item>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:media="http://search.yahoo.com/mrss/"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_CONFIG.name} - Recent Projects</title>
    <link>${SITE_CONFIG.url}/projects</link>
    <description>Latest roofing projects from ${SITE_CONFIG.name} in Charlotte, Lake Norman, and surrounding areas.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${SITE_CONFIG.url}/projects/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_CONFIG.url}/logo.png</url>
      <title>${SITE_CONFIG.name}</title>
      <link>${SITE_CONFIG.url}</link>
    </image>
    ${items}
  </channel>
</rss>`;
}

function generateEmptyFeed(): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${SITE_CONFIG.name} - Recent Projects</title>
    <link>${SITE_CONFIG.url}/projects</link>
    <description>Latest roofing projects from ${SITE_CONFIG.name}</description>
    <language>en-us</language>
  </channel>
</rss>`;
}
