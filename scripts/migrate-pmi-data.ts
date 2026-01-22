/**
 * PMI Data Migration Script
 *
 * This script exports all data from ProjectMapIt and imports it into
 * our local database + Vercel Blob storage.
 *
 * Usage:
 *   npx tsx scripts/migrate-pmi-data.ts
 *
 * Environment variables required:
 *   - POSTGRES_URL (Vercel Postgres connection string)
 *   - BLOB_READ_WRITE_TOKEN (Vercel Blob token)
 *   - PMI_API_KEY (ProjectMapIt API key - already have this)
 */

import { put } from '@vercel/blob';

const PMI_API_BASE = 'https://projectmapit.com/api/v1';
const PMI_API_KEY = '97151bdc-175f-402a-a56d-cf8e1f80047e';

interface PMIProject {
  _id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  location: [number, number];
  created: string;
  active: boolean;
  featured: boolean;
  photoCount: number;
  withPhotos: boolean;
  categories: PMICategory[];
  gmb?: {
    postData?: {
      description?: string;
    };
  };
  photos?: PMIPhoto[];
}

interface PMICategory {
  _id: string;
  name: string;
  parent?: {
    name: string;
  };
}

interface PMIPhoto {
  _id: string;
  url: string;
  thumbnailUrl?: string;
  caption?: string;
  order: number;
}

interface PMIProjectsResponse {
  page: number;
  pages: number;
  perPage: number;
  totalCount: number;
  results: PMIProject[];
}

// Fetch all projects from PMI
async function fetchAllPMIProjects(): Promise<PMIProject[]> {
  console.log('📥 Fetching all projects from PMI...');
  const allProjects: PMIProject[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const response = await fetch(
      `${PMI_API_BASE}/projects?page=${page}&limit=50`,
      {
        headers: {
          Authorization: `Bearer ${PMI_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`PMI API Error: ${response.status}`);
    }

    const data: PMIProjectsResponse = await response.json();
    allProjects.push(...data.results);

    console.log(`  Page ${page}/${data.pages}: ${data.results.length} projects`);

    hasMore = page < data.pages;
    page++;
  }

  console.log(`✅ Fetched ${allProjects.length} total projects`);
  return allProjects;
}

// Fetch single project with photos
async function fetchProjectWithPhotos(projectId: string): Promise<PMIProject | null> {
  try {
    const response = await fetch(`${PMI_API_BASE}/project/${projectId}`, {
      headers: {
        Authorization: `Bearer ${PMI_API_KEY}`,
      },
    });

    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    console.error(`  Error fetching project ${projectId}:`, error);
    return null;
  }
}

// Download image and upload to Vercel Blob
async function migrateImage(imageUrl: string, projectId: string, photoId: string, isThumb: boolean = false): Promise<string | null> {
  try {
    // Download image from PMI
    const response = await fetch(imageUrl);
    if (!response.ok) {
      console.error(`  Failed to download image: ${imageUrl}`);
      return null;
    }

    const imageBuffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    // Determine file extension
    const ext = contentType.includes('png') ? 'png' : contentType.includes('webp') ? 'webp' : 'jpg';
    const suffix = isThumb ? '-thumb' : '';
    const filename = `projects/${projectId}/${photoId}${suffix}.${ext}`;

    // Upload to Vercel Blob
    const blob = await put(filename, imageBuffer, {
      access: 'public',
      contentType,
    });

    return blob.url;
  } catch (error) {
    console.error(`  Error migrating image ${imageUrl}:`, error);
    return null;
  }
}

// Extract product info from categories
function extractProductInfo(categories: PMICategory[]): { product: string | null; color: string | null; serviceType: string | null } {
  let product: string | null = null;
  let color: string | null = null;
  let serviceType: string | null = null;

  for (const cat of categories) {
    if (
      cat.name.includes('CertainTeed') ||
      cat.name.includes('GAF') ||
      cat.name.includes('Owens Corning') ||
      cat.name.includes('IKO') ||
      cat.name.includes('TAMKO')
    ) {
      product = cat.name;
    } else if (cat.parent?.name) {
      product = cat.parent.name;
      color = cat.name;
    } else if (
      cat.name === 'Service Provided' ||
      cat.name === 'Insurance Work' ||
      cat.name === 'REPAIRS'
    ) {
      serviceType = cat.name;
    }
  }

  return { product, color, serviceType };
}

// Generate slug from project
function generateSlug(project: PMIProject): string {
  const date = new Date(project.created);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const city = project.city.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const shortId = project._id.slice(-6);
  return `${year}-${month}-${city}-${shortId}`;
}

// Main migration function
async function migrateData() {
  console.log('🚀 Starting PMI Data Migration\n');

  // Check environment
  if (!process.env.POSTGRES_URL) {
    console.error('❌ POSTGRES_URL not set. Please configure Vercel Postgres first.');
    console.log('\nTo set up:');
    console.log('1. Go to Vercel Dashboard > Your Project > Storage');
    console.log('2. Create a new Postgres database');
    console.log('3. Copy the connection string to .env.local');
    process.exit(1);
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('❌ BLOB_READ_WRITE_TOKEN not set. Please configure Vercel Blob first.');
    console.log('\nTo set up:');
    console.log('1. Go to Vercel Dashboard > Your Project > Storage');
    console.log('2. Create a new Blob store');
    console.log('3. Copy the token to .env.local');
    process.exit(1);
  }

  // Step 1: Fetch all projects
  const projects = await fetchAllPMIProjects();

  // Step 2: Filter to projects with photos
  const projectsWithPhotos = projects.filter(p => p.withPhotos && p.photoCount > 0);
  console.log(`\n📸 ${projectsWithPhotos.length} projects have photos\n`);

  // Step 3: Export data as JSON (backup)
  const exportData = {
    exportedAt: new Date().toISOString(),
    totalProjects: projects.length,
    projectsWithPhotos: projectsWithPhotos.length,
    projects: [] as any[],
  };

  // Step 4: Process each project
  console.log('🔄 Processing projects with photos...\n');

  for (let i = 0; i < projectsWithPhotos.length; i++) {
    const project = projectsWithPhotos[i];
    console.log(`[${i + 1}/${projectsWithPhotos.length}] ${project.city}, ${project.state} - ${project.name}`);

    // Fetch full project details with photos
    const fullProject = await fetchProjectWithPhotos(project._id);
    if (!fullProject) {
      console.log('  ⚠️ Could not fetch full project details, skipping');
      continue;
    }

    // Extract product info
    const { product, color, serviceType } = extractProductInfo(fullProject.categories || []);

    // Prepare project data
    const projectData = {
      pmiId: fullProject._id,
      name: fullProject.name.split(' ')[0], // First name only for privacy
      description: fullProject.gmb?.postData?.description || null,
      street: fullProject.street.replace(/^\d+\s*/, ''), // Remove house number
      city: fullProject.city,
      state: fullProject.state,
      zip: fullProject.zip,
      latitude: fullProject.location?.[1] || null,
      longitude: fullProject.location?.[0] || null,
      serviceType,
      product,
      productColor: color,
      categories: fullProject.categories?.map(c => c.name) || [],
      completedDate: fullProject.created,
      featured: fullProject.featured,
      photoCount: fullProject.photoCount,
      slug: generateSlug(fullProject),
      photos: [] as any[],
    };

    // Process photos
    if (fullProject.photos && fullProject.photos.length > 0) {
      console.log(`  📷 Processing ${fullProject.photos.length} photos...`);

      for (const photo of fullProject.photos) {
        // For now, just store the original URLs
        // In production migration, we'd upload to Vercel Blob
        projectData.photos.push({
          pmiId: photo._id,
          url: photo.url,
          thumbnailUrl: photo.thumbnailUrl || photo.url,
          caption: photo.caption || null,
          order: photo.order || 0,
        });
      }
    }

    exportData.projects.push(projectData);

    // Rate limiting - don't hammer PMI API
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  // Also include projects without photos (for map coverage)
  console.log('\n📍 Adding projects without photos for map coverage...');
  const projectsWithoutPhotos = projects.filter(p => !p.withPhotos || p.photoCount === 0);

  for (const project of projectsWithoutPhotos) {
    const { product, color, serviceType } = extractProductInfo(project.categories || []);

    exportData.projects.push({
      pmiId: project._id,
      name: project.name.split(' ')[0],
      description: project.gmb?.postData?.description || null,
      street: project.street.replace(/^\d+\s*/, ''),
      city: project.city,
      state: project.state,
      zip: project.zip,
      latitude: project.location?.[1] || null,
      longitude: project.location?.[0] || null,
      serviceType,
      product,
      productColor: color,
      categories: project.categories?.map(c => c.name) || [],
      completedDate: project.created,
      featured: project.featured,
      photoCount: 0,
      slug: generateSlug(project),
      photos: [],
    });
  }

  // Step 5: Save export as JSON file
  const fs = await import('fs');
  const exportPath = './pmi-export.json';
  fs.writeFileSync(exportPath, JSON.stringify(exportData, null, 2));
  console.log(`\n✅ Export saved to ${exportPath}`);

  // Summary
  console.log('\n📊 Migration Summary:');
  console.log(`   Total projects: ${exportData.projects.length}`);
  console.log(`   Projects with photos: ${projectsWithPhotos.length}`);
  console.log(`   Projects without photos: ${projectsWithoutPhotos.length}`);

  // Stats by city
  const cityStats = exportData.projects.reduce((acc, p) => {
    acc[p.city] = (acc[p.city] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  console.log('\n📍 Projects by City:');
  (Object.entries(cityStats) as [string, number][])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15)
    .forEach(([city, count]) => {
      console.log(`   ${city}: ${count}`);
    });

  console.log('\n✨ PMI data export complete!');
  console.log('\nNext steps:');
  console.log('1. Set up Vercel Postgres: vercel storage create postgres');
  console.log('2. Run database migrations: npx drizzle-kit push');
  console.log('3. Run import script: npx tsx scripts/import-to-database.ts');
}

// Run migration
migrateData().catch(console.error);
