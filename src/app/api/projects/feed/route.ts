import { NextResponse } from 'next/server';
import { SITE_CONFIG } from '@/lib/constants';
import fs from 'fs';
import path from 'path';

// JSON Feed for projects - alternative to RSS for modern tools
// Spec: https://jsonfeed.org/version/1.1
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Math.min(parseInt(searchParams.get('limit') || '20'), 50);
    const format = searchParams.get('format') || 'json';

    const exportPath = path.join(process.cwd(), 'pmi-export.json');

    if (!fs.existsSync(exportPath)) {
      return NextResponse.json({
        version: 'https://jsonfeed.org/version/1.1',
        title: `${SITE_CONFIG.name} - Recent Projects`,
        home_page_url: `${SITE_CONFIG.url}/projects`,
        feed_url: `${SITE_CONFIG.url}/api/projects/feed`,
        items: [],
      });
    }

    const data = JSON.parse(fs.readFileSync(exportPath, 'utf-8'));

    // Get projects with photos, sorted by date (newest first)
    const projects = data.projects
      .filter((p: any) => p.photos && p.photos.length > 0)
      .sort((a: any, b: any) =>
        new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime()
      )
      .slice(0, limit);

    // Return simple format for easy social posting
    if (format === 'simple') {
      const items = projects.map((project: any) => ({
        id: project.pmiId,
        city: project.city,
        state: project.state,
        product: project.product,
        completedDate: project.completedDate,
        photoCount: project.photos?.length || 0,
        thumbnail: project.photos?.[0]?.url || null,
        url: `${SITE_CONFIG.url}/projects/${project.pmiId}`,
        // Pre-formatted social content
        social: {
          title: `New Roof in ${project.city}, ${project.state}`,
          caption: generateSocialCaption(project),
          hashtags: generateHashtags(project),
        },
      }));

      return NextResponse.json({
        total: items.length,
        lastUpdated: new Date().toISOString(),
        feedUrl: `${SITE_CONFIG.url}/api/projects/feed?format=simple`,
        rssUrl: `${SITE_CONFIG.url}/projects/feed.xml`,
        items,
      });
    }

    // JSON Feed 1.1 format
    const items = projects.map((project: any) => {
      const thumbnail = project.photos?.[0]?.url || project.photos?.[0]?.thumbnailUrl;

      return {
        id: `${SITE_CONFIG.url}/projects/${project.pmiId}`,
        url: `${SITE_CONFIG.url}/projects/${project.pmiId}`,
        title: `New Roof in ${project.city}, ${project.state}`,
        content_text: generateSocialCaption(project),
        content_html: generateHtmlContent(project),
        date_published: new Date(project.completedDate).toISOString(),
        image: thumbnail,
        tags: [project.city, project.state, project.product].filter(Boolean),
        _social: {
          caption: generateSocialCaption(project),
          hashtags: generateHashtags(project),
        },
      };
    });

    return NextResponse.json({
      version: 'https://jsonfeed.org/version/1.1',
      title: `${SITE_CONFIG.name} - Recent Projects`,
      home_page_url: `${SITE_CONFIG.url}/projects`,
      feed_url: `${SITE_CONFIG.url}/api/projects/feed`,
      description: `Latest roofing projects from ${SITE_CONFIG.name} in Charlotte and Lake Norman`,
      icon: `${SITE_CONFIG.url}/logo.png`,
      favicon: `${SITE_CONFIG.url}/favicon.ico`,
      items,
    });
  } catch (error) {
    console.error('Error generating JSON feed:', error);
    return NextResponse.json({ error: 'Failed to generate feed' }, { status: 500 });
  }
}

function generateSocialCaption(project: any): string {
  const productInfo = project.product ? ` featuring ${project.product}` : '';
  const photoCount = project.photos?.length || 0;

  const captions = [
    `Just completed another beautiful roofing project in ${project.city}, ${project.state}${productInfo}! 🏠✨ Check out ${photoCount} photos of this transformation.`,
    `Another happy homeowner in ${project.city}! 🎉 We just finished this stunning roof${productInfo}. See the results in our gallery!`,
    `New roof alert! 🚨 Our team just wrapped up this project in ${project.city}, ${project.state}${productInfo}. ${photoCount} photos inside!`,
    `Check out our latest work in ${project.city}! 🏡 This ${project.product || 'new roof'} turned out amazing. See the before & after!`,
  ];

  // Rotate captions based on project ID to add variety
  const index = parseInt(project.pmiId.replace(/\D/g, '').slice(-2) || '0') % captions.length;
  return captions[index];
}

function generateHashtags(project: any): string[] {
  const tags = [
    '#CharlotteRoofing',
    '#RoofReplacement',
    '#NewRoof',
    `#${project.city.replace(/\s+/g, '')}`,
    '#HomeImprovement',
    '#RoofingContractor',
  ];

  if (project.state === 'NC') {
    tags.push('#NorthCarolina');
  } else if (project.state === 'SC') {
    tags.push('#SouthCarolina');
  }

  if (project.product?.toLowerCase().includes('gaf')) {
    tags.push('#GAFRoofing');
  } else if (project.product?.toLowerCase().includes('certainteed')) {
    tags.push('#CertainTeed');
  } else if (project.product?.toLowerCase().includes('owens')) {
    tags.push('#OwensCorning');
  }

  return tags;
}

function generateHtmlContent(project: any): string {
  const thumbnail = project.photos?.[0]?.url;
  const link = `${SITE_CONFIG.url}/projects/${project.pmiId}`;

  return `
    <p>${generateSocialCaption(project)}</p>
    ${thumbnail ? `<p><img src="${thumbnail}" alt="Roofing project in ${project.city}" /></p>` : ''}
    <p><a href="${link}">View full project gallery →</a></p>
    <p>${generateHashtags(project).join(' ')}</p>
  `.trim();
}
