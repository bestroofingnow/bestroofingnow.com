import { NextRequest, NextResponse } from 'next/server';
import { getDb, projects, isDatabaseConfigured } from '@/lib/db/projects-db';
import { and, eq, isNotNull, sql } from 'drizzle-orm';
import * as fs from 'fs';
import * as path from 'path';

// Fallback to PMI export data if database not configured
function getExportData() {
  try {
    const exportPath = path.join(process.cwd(), 'pmi-export.json');
    if (fs.existsSync(exportPath)) {
      return JSON.parse(fs.readFileSync(exportPath, 'utf-8'));
    }
  } catch (e) {
    console.error('Failed to load export data:', e);
  }
  return null;
}

// GET /api/projects/map - Get project coordinates for map display
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');
  const cities = searchParams.get('cities'); // Comma-separated list of cities (e.g., "Mooresville,Cornelius,Davidson")
  const bounds = searchParams.get('bounds'); // "sw_lat,sw_lng,ne_lat,ne_lng"

  // If database not configured, use PMI export as fallback
  if (!isDatabaseConfigured()) {
    const exportData = getExportData();

    if (!exportData) {
      return NextResponse.json({ markers: [] });
    }

    let markers = exportData.projects
      .filter((p: any) => p.latitude && p.longitude)
      .map((p: any) => ({
        id: p.pmiId,
        slug: p.pmiId, // Use pmiId as slug for direct linking
        lat: p.latitude,
        lng: p.longitude,
        city: p.city,
        state: p.state,
        product: p.product,
        photoCount: p.photos?.length || 0,
        hasPhotos: (p.photos?.length || 0) > 0,
        completedDate: p.completedDate,
        thumbnail: p.photos?.[0]?.thumbnailUrl || p.photos?.[0]?.url || null,
      }));

    // Filter by multiple cities if specified
    if (cities) {
      const cityList = cities.split(',').map(c => c.trim().toLowerCase());
      markers = markers.filter((m: any) =>
        cityList.some(c => m.city.toLowerCase().includes(c))
      );
    }
    // Filter by single city if specified
    else if (city) {
      markers = markers.filter((m: any) =>
        m.city.toLowerCase().includes(city.toLowerCase())
      );
    }

    return NextResponse.json({
      markers,
      total: markers.length,
      source: 'pmi-export',
    });
  }

  try {
    const db = getDb()!;

    // Build where conditions
    const conditions = [
      eq(projects.published, true),
      isNotNull(projects.latitude),
      isNotNull(projects.longitude),
    ];

    // Filter by multiple cities
    if (cities) {
      const cityList = cities.split(',').map(c => c.trim());
      const cityConditions = cityList.map(c =>
        sql`LOWER(${projects.city}) LIKE LOWER(${'%' + c + '%'})`
      );
      // OR together all city conditions
      if (cityConditions.length > 0) {
        const orCondition = sql.join(cityConditions, sql` OR `);
        conditions.push(sql`(${orCondition})`);
      }
    }
    // Filter by single city
    else if (city) {
      conditions.push(sql`LOWER(${projects.city}) LIKE LOWER(${'%' + city + '%'})`);
    }

    // Parse bounds for map viewport filtering
    if (bounds) {
      const [swLat, swLng, neLat, neLng] = bounds.split(',').map(Number);
      if (!isNaN(swLat) && !isNaN(swLng) && !isNaN(neLat) && !isNaN(neLng)) {
        conditions.push(sql`${projects.latitude} BETWEEN ${swLat} AND ${neLat}`);
        conditions.push(sql`${projects.longitude} BETWEEN ${swLng} AND ${neLng}`);
      }
    }

    // Query only what we need for map markers
    const projectMarkers = await db
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

    const markers = projectMarkers.map(p => ({
      id: p.id,
      lat: p.lat,
      lng: p.lng,
      city: p.city,
      state: p.state,
      product: p.product,
      photoCount: p.photoCount || 0,
      hasPhotos: (p.photoCount || 0) > 0,
      completedDate: p.completedDate,
      slug: p.slug,
    }));

    return NextResponse.json({
      markers,
      total: markers.length,
      source: 'database',
    });
  } catch (error) {
    console.error('Error fetching map data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch map data', markers: [] },
      { status: 500 }
    );
  }
}
