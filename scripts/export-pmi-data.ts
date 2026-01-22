/**
 * PMI Data Export Script
 *
 * This script exports ALL data from ProjectMapIt to a JSON file.
 * Run this BEFORE canceling PMI subscription!
 *
 * Usage:
 *   npx tsx scripts/export-pmi-data.ts
 */

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

// Main export function
async function exportData() {
  console.log('🚀 Starting PMI Data Export\n');
  console.log('This will capture ALL your project data from PMI.\n');

  // Step 1: Fetch all projects
  const projects = await fetchAllPMIProjects();

  // Step 2: Filter to projects with photos
  const projectsWithPhotos = projects.filter(p => p.withPhotos && p.photoCount > 0);
  console.log(`\n📸 ${projectsWithPhotos.length} projects have photos\n`);

  // Step 3: Prepare export data
  const exportData = {
    exportedAt: new Date().toISOString(),
    totalProjects: projects.length,
    projectsWithPhotos: projectsWithPhotos.length,
    projects: [] as any[],
  };

  // Step 4: Process each project with photos
  console.log('🔄 Fetching full project details with photos...\n');

  for (let i = 0; i < projectsWithPhotos.length; i++) {
    const project = projectsWithPhotos[i];
    process.stdout.write(`\r[${i + 1}/${projectsWithPhotos.length}] ${project.city}, ${project.state} - ${project.name.padEnd(20)}`);

    // Fetch full project details with photos
    const fullProject = await fetchProjectWithPhotos(project._id);
    if (!fullProject) {
      continue;
    }

    // Extract product info
    const { product, color, serviceType } = extractProductInfo(fullProject.categories || []);

    // Prepare project data
    const projectData = {
      pmiId: fullProject._id,
      name: fullProject.name,
      namePrivate: fullProject.name.split(' ')[0], // First name only
      description: fullProject.gmb?.postData?.description || null,
      street: fullProject.street,
      streetPrivate: fullProject.street.replace(/^\d+\s*/, ''), // Remove house number
      city: fullProject.city,
      state: fullProject.state,
      zip: fullProject.zip,
      country: fullProject.country,
      latitude: fullProject.location?.[1] || null,
      longitude: fullProject.location?.[0] || null,
      serviceType,
      product,
      productColor: color,
      categories: fullProject.categories || [],
      completedDate: fullProject.created,
      featured: fullProject.featured,
      active: fullProject.active,
      photoCount: fullProject.photoCount,
      slug: generateSlug(fullProject),
      photos: fullProject.photos?.map((photo: any) => ({
        pmiId: photo._id,
        url: photo.path?.large || photo.url,
        thumbnailUrl: photo.path?.small || photo.thumbnailUrl || photo.path?.large || photo.url,
        caption: photo.caption || null,
        order: photo.order || 0,
      })) || [],
    };

    exportData.projects.push(projectData);

    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log('\n');

  // Step 5: Add projects without photos (for map coverage)
  console.log('📍 Adding projects without photos...');
  const projectsWithoutPhotos = projects.filter(p => !p.withPhotos || p.photoCount === 0);

  for (const project of projectsWithoutPhotos) {
    const { product, color, serviceType } = extractProductInfo(project.categories || []);

    exportData.projects.push({
      pmiId: project._id,
      name: project.name,
      namePrivate: project.name.split(' ')[0],
      description: project.gmb?.postData?.description || null,
      street: project.street,
      streetPrivate: project.street.replace(/^\d+\s*/, ''),
      city: project.city,
      state: project.state,
      zip: project.zip,
      country: project.country,
      latitude: project.location?.[1] || null,
      longitude: project.location?.[0] || null,
      serviceType,
      product,
      productColor: color,
      categories: project.categories || [],
      completedDate: project.created,
      featured: project.featured,
      active: project.active,
      photoCount: 0,
      slug: generateSlug(project),
      photos: [],
    });
  }

  // Step 6: Save export as JSON file
  const fs = await import('fs');
  const exportPath = './pmi-export.json';
  fs.writeFileSync(exportPath, JSON.stringify(exportData, null, 2));
  console.log(`\n✅ Export saved to ${exportPath}`);

  // Step 7: Calculate statistics
  const cityStats = exportData.projects.reduce((acc, p) => {
    acc[p.city] = (acc[p.city] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const productStats = exportData.projects.reduce((acc, p) => {
    if (p.product) acc[p.product] = (acc[p.product] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const totalPhotos = exportData.projects.reduce((sum, p) => sum + (p.photos?.length || 0), 0);

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('📊 EXPORT SUMMARY');
  console.log('='.repeat(50));
  console.log(`   Total projects: ${exportData.projects.length}`);
  console.log(`   Projects with photos: ${projectsWithPhotos.length}`);
  console.log(`   Projects without photos: ${projectsWithoutPhotos.length}`);
  console.log(`   Total photos: ${totalPhotos}`);

  console.log('\n📍 Top Cities:');
  (Object.entries(cityStats) as [string, number][])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .forEach(([city, count]) => {
      console.log(`   ${city}: ${count} projects`);
    });

  console.log('\n🏷️ Top Products:');
  (Object.entries(productStats) as [string, number][])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .forEach(([product, count]) => {
      console.log(`   ${product}: ${count} projects`);
    });

  console.log('\n' + '='.repeat(50));
  console.log('✨ PMI data export complete!');
  console.log('='.repeat(50));

  console.log('\n📁 Your data is saved in: pmi-export.json');
  console.log('   This file contains ALL your PMI data.');
  console.log('   Keep this safe - it\'s your backup!\n');

  console.log('Next steps:');
  console.log('1. Set up Vercel Postgres in your Vercel dashboard');
  console.log('2. Set up Vercel Blob storage');
  console.log('3. Run: npx tsx scripts/import-to-database.ts');
}

// Run export
exportData().catch(console.error);
