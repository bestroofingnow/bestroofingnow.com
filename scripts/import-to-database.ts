/**
 * Import PMI Data to Vercel Postgres
 *
 * This script imports the exported PMI data into your Vercel Postgres database
 * and optionally uploads images to Vercel Blob.
 *
 * Prerequisites:
 *   1. Set up Vercel Postgres in your Vercel dashboard
 *   2. Copy POSTGRES_URL to .env.local
 *   3. Run: npx drizzle-kit push (to create tables)
 *   4. Optional: Set up Vercel Blob and add BLOB_READ_WRITE_TOKEN
 *
 * Usage:
 *   npx tsx scripts/import-to-database.ts
 *
 * Options:
 *   --migrate-images    Also download and upload images to Vercel Blob
 *   --dry-run          Preview what would be imported without making changes
 */

import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import * as fs from 'fs';
import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { put } from '@vercel/blob';
import * as schema from '../src/lib/db/schema';

const db = drizzle(sql, { schema });

interface ExportedProject {
  pmiId: string;
  name: string;
  namePrivate: string;
  description: string | null;
  street: string;
  streetPrivate: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  latitude: number | null;
  longitude: number | null;
  serviceType: string | null;
  product: string | null;
  productColor: string | null;
  categories: any[];
  completedDate: string;
  featured: boolean;
  active: boolean;
  photoCount: number;
  slug: string;
  photos: ExportedPhoto[];
}

interface ExportedPhoto {
  pmiId: string;
  url: string;
  thumbnailUrl: string;
  caption: string | null;
  order: number;
}

interface ExportData {
  exportedAt: string;
  totalProjects: number;
  projectsWithPhotos: number;
  projects: ExportedProject[];
}

// Download image and upload to Vercel Blob
async function migrateImage(
  imageUrl: string,
  projectId: string,
  photoId: string,
  isThumb: boolean = false
): Promise<string | null> {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) return null;

    const imageBuffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';
    const ext = contentType.includes('png') ? 'png' : contentType.includes('webp') ? 'webp' : 'jpg';
    const suffix = isThumb ? '-thumb' : '';
    const filename = `projects/${projectId}/${photoId}${suffix}.${ext}`;

    const blob = await put(filename, imageBuffer, {
      access: 'public',
      contentType,
    });

    return blob.url;
  } catch (error) {
    console.error(`  Failed to migrate image: ${imageUrl}`);
    return null;
  }
}

async function importData(migrateImages: boolean = false, dryRun: boolean = false) {
  console.log('🚀 Starting Database Import\n');

  // Check environment
  if (!process.env.POSTGRES_URL) {
    console.error('❌ POSTGRES_URL not set.');
    console.log('\nTo set up Vercel Postgres:');
    console.log('1. Go to Vercel Dashboard > Your Project > Storage');
    console.log('2. Click "Create Database" > "Postgres"');
    console.log('3. Copy connection strings to .env.local:');
    console.log('   POSTGRES_URL="postgres://..."');
    console.log('   POSTGRES_URL_NON_POOLING="postgres://..."');
    process.exit(1);
  }

  if (migrateImages && !process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('❌ BLOB_READ_WRITE_TOKEN not set (required for --migrate-images)');
    console.log('\nTo set up Vercel Blob:');
    console.log('1. Go to Vercel Dashboard > Your Project > Storage');
    console.log('2. Click "Create Database" > "Blob"');
    console.log('3. Copy token to .env.local');
    process.exit(1);
  }

  // Load export data
  const exportPath = './pmi-export.json';
  if (!fs.existsSync(exportPath)) {
    console.error(`❌ Export file not found: ${exportPath}`);
    console.log('Run: npx tsx scripts/export-pmi-data.ts');
    process.exit(1);
  }

  const exportData: ExportData = JSON.parse(fs.readFileSync(exportPath, 'utf-8'));
  console.log(`📁 Loaded export from ${exportData.exportedAt}`);
  console.log(`   ${exportData.totalProjects} projects, ${exportData.projectsWithPhotos} with photos\n`);

  if (dryRun) {
    console.log('🔍 DRY RUN - No changes will be made\n');
  }

  // Import projects
  console.log('📥 Importing projects...\n');

  let imported = 0;
  let skipped = 0;
  let errors = 0;
  let photosImported = 0;

  for (let i = 0; i < exportData.projects.length; i++) {
    const project = exportData.projects[i];
    process.stdout.write(`\r[${i + 1}/${exportData.projects.length}] ${project.city} - ${project.namePrivate.padEnd(15)}`);

    if (dryRun) {
      imported++;
      photosImported += project.photos.length;
      continue;
    }

    try {
      // Check if project already exists
      const existing = await db.query.projects.findFirst({
        where: (projects, { eq }) => eq(projects.pmiId, project.pmiId),
      });

      if (existing) {
        skipped++;
        continue;
      }

      // Insert project
      const [insertedProject] = await db
        .insert(schema.projects)
        .values({
          pmiId: project.pmiId,
          name: project.namePrivate,
          description: project.description,
          street: project.streetPrivate,
          city: project.city,
          state: project.state,
          zip: project.zip,
          latitude: project.latitude,
          longitude: project.longitude,
          serviceType: project.serviceType,
          product: project.product,
          productColor: project.productColor,
          categories: project.categories.map((c: any) => c.name || c),
          completedDate: new Date(project.completedDate),
          featured: project.featured,
          published: project.active,
          photoCount: project.photoCount,
          slug: project.slug,
        })
        .returning();

      // Import photos
      for (const photo of project.photos) {
        // Skip photos without a valid URL
        if (!photo.url) {
          console.log(`    Skipping photo without URL: ${photo.pmiId}`);
          continue;
        }

        let photoUrl = photo.url;
        let thumbnailUrl = photo.thumbnailUrl || photo.url;

        // Optionally migrate images to Vercel Blob
        if (migrateImages) {
          const newUrl = await migrateImage(photo.url, insertedProject.id, photo.pmiId, false);
          const newThumb = await migrateImage(photo.thumbnailUrl, insertedProject.id, photo.pmiId, true);
          if (newUrl) photoUrl = newUrl;
          if (newThumb) thumbnailUrl = newThumb;
        }

        await db.insert(schema.photos).values({
          pmiId: photo.pmiId,
          projectId: insertedProject.id,
          url: photoUrl,
          thumbnailUrl: thumbnailUrl,
          caption: photo.caption || null,
          order: photo.order || 0,
          storageProvider: migrateImages ? 'vercel-blob' : 'pmi',
        });

        photosImported++;
      }

      imported++;
    } catch (error) {
      errors++;
      console.error(`\n  Error importing ${project.pmiId}:`, error);
    }

    // Rate limiting for image migration
    if (migrateImages) {
      await new Promise(resolve => setTimeout(resolve, 50));
    }
  }

  console.log('\n\n' + '='.repeat(50));
  console.log('📊 IMPORT SUMMARY');
  console.log('='.repeat(50));
  console.log(`   Projects imported: ${imported}`);
  console.log(`   Projects skipped (already exist): ${skipped}`);
  console.log(`   Errors: ${errors}`);
  console.log(`   Photos imported: ${photosImported}`);

  if (migrateImages) {
    console.log(`   Images migrated to Vercel Blob: Yes`);
  } else {
    console.log(`   Images: Still using PMI URLs`);
    console.log(`   (Run with --migrate-images to copy to Vercel Blob)`);
  }

  console.log('='.repeat(50));

  if (dryRun) {
    console.log('\n✨ Dry run complete. Run without --dry-run to import.');
  } else {
    console.log('\n✨ Import complete!');
  }

  console.log('\nNext steps:');
  console.log('1. Visit /admin/projects to manage your projects');
  console.log('2. Visit /projects to see the public gallery');
  console.log('3. Visit /projects/map to see the project map');
}

// Parse command line arguments
const args = process.argv.slice(2);
const migrateImages = args.includes('--migrate-images');
const dryRun = args.includes('--dry-run');

importData(migrateImages, dryRun).catch(console.error);
