/**
 * Server-side project data helpers
 * Tries the database first, falls back to pmi-export.json
 * Eliminates the need for client-side API fetches for map data
 */

import * as fs from 'fs';
import * as path from 'path';
import { getDb, projects, isDatabaseConfigured } from '@/lib/db/projects-db';
import { and, eq, isNotNull, sql } from 'drizzle-orm';

interface ProjectMarker {
  id: string;
  lat: number;
  lng: number;
  city: string;
  state: string;
  product: string | null;
  photoCount: number;
  hasPhotos: boolean;
  completedDate: string;
  thumbnail?: string | null;
  slug?: string;
}

interface ExportProject {
  pmiId: string;
  city: string;
  state: string;
  latitude: number | null;
  longitude: number | null;
  product: string | null;
  completedDate: string;
  photoCount: number;
  slug: string;
  photos?: Array<{
    url: string;
    thumbnailUrl: string;
  }>;
}

// ---- Database approach ----

async function getMarkersFromDb(cities?: string[]): Promise<ProjectMarker[]> {
  const db = getDb();
  if (!db) return [];

  try {
    const conditions = [
      eq(projects.published, true),
      isNotNull(projects.latitude),
      isNotNull(projects.longitude),
    ];

    if (cities && cities.length > 0) {
      const cityConditions = cities.map(c =>
        sql`LOWER(${projects.city}) LIKE LOWER(${'%' + c + '%'})`
      );
      const orCondition = sql.join(cityConditions, sql` OR `);
      conditions.push(sql`(${orCondition})`);
    }

    const rows = await db
      .select({
        id: projects.id,
        lat: projects.latitude,
        lng: projects.longitude,
        city: projects.city,
        state: projects.state,
        product: projects.product,
        photoCount: projects.photoCount,
        completedDate: projects.completedDate,
        slug: projects.slug,
      })
      .from(projects)
      .where(and(...conditions));

    return rows.map(p => ({
      id: p.id,
      lat: p.lat!,
      lng: p.lng!,
      city: p.city,
      state: p.state,
      product: p.product,
      photoCount: p.photoCount || 0,
      hasPhotos: (p.photoCount || 0) > 0,
      completedDate: p.completedDate?.toISOString() || '',
      slug: p.slug || undefined,
    }));
  } catch (e) {
    console.error('Database query failed for project markers:', e);
    return [];
  }
}

// ---- pmi-export.json fallback ----

let cachedData: { projects: ExportProject[] } | null = null;

function loadExportData(): ExportProject[] {
  if (cachedData) return cachedData.projects;

  try {
    const exportPath = path.join(process.cwd(), 'pmi-export.json');
    if (fs.existsSync(exportPath)) {
      cachedData = JSON.parse(fs.readFileSync(exportPath, 'utf-8'));
      return cachedData!.projects;
    }
  } catch (e) {
    console.error('Failed to load pmi-export.json:', e);
  }
  return [];
}

function projectToMarker(p: ExportProject): ProjectMarker {
  return {
    id: p.pmiId,
    slug: p.slug || p.pmiId,
    lat: p.latitude!,
    lng: p.longitude!,
    city: p.city,
    state: p.state,
    product: p.product,
    photoCount: p.photos?.length || p.photoCount || 0,
    hasPhotos: (p.photos?.length || p.photoCount || 0) > 0,
    completedDate: p.completedDate,
    thumbnail: p.photos?.[0]?.thumbnailUrl || p.photos?.[0]?.url || null,
  };
}

function getMarkersFromExport(cities?: string[]): ProjectMarker[] {
  const allProjects = loadExportData();
  let filtered = allProjects.filter(p => p.latitude && p.longitude);

  if (cities && cities.length > 0) {
    const cityLower = cities.map(c => c.toLowerCase());
    filtered = filtered.filter(p =>
      cityLower.some(c => p.city.toLowerCase().includes(c))
    );
  }

  return filtered.map(projectToMarker);
}

// ---- Public API ----

/**
 * Get project markers filtered by cities (server-side)
 * Tries database first, falls back to pmi-export.json
 */
export async function getProjectMarkersForCities(cities: string[]): Promise<ProjectMarker[]> {
  if (isDatabaseConfigured()) {
    const dbMarkers = await getMarkersFromDb(cities);
    if (dbMarkers.length > 0) return dbMarkers;
  }
  return getMarkersFromExport(cities);
}

/**
 * Get project markers for a single city (server-side)
 */
export async function getProjectMarkersForCity(city: string): Promise<ProjectMarker[]> {
  return getProjectMarkersForCities([city]);
}

/**
 * Get all project markers (server-side)
 */
export async function getAllProjectMarkers(): Promise<ProjectMarker[]> {
  if (isDatabaseConfigured()) {
    const dbMarkers = await getMarkersFromDb();
    if (dbMarkers.length > 0) return dbMarkers;
  }
  return getMarkersFromExport();
}
