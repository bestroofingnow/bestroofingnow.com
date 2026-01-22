import { NextRequest, NextResponse } from 'next/server';
import { getDb, projects, isDatabaseConfigured } from '@/lib/db/projects-db';
import { desc, eq, like, or, and, sql } from 'drizzle-orm';

// GET /api/projects - List all projects with filtering
export async function GET(request: NextRequest) {
  // Check if database is configured
  if (!isDatabaseConfigured()) {
    // Return data from PMI export file as fallback
    return NextResponse.json({
      message: 'Database not configured. Using PMI export data.',
      projects: [],
    });
  }

  try {
    const { searchParams } = new URL(request.url);

    // Pagination
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;

    // Filters
    const city = searchParams.get('city');
    const state = searchParams.get('state');
    const product = searchParams.get('product');
    const featured = searchParams.get('featured');
    const withPhotos = searchParams.get('withPhotos');
    const search = searchParams.get('search');

    // Build where conditions
    const conditions = [];

    // Only show published projects
    conditions.push(eq(projects.published, true));

    if (city) {
      conditions.push(like(projects.city, `%${city}%`));
    }
    if (state) {
      conditions.push(eq(projects.state, state));
    }
    if (product) {
      conditions.push(like(projects.product, `%${product}%`));
    }
    if (featured === 'true') {
      conditions.push(eq(projects.featured, true));
    }
    if (withPhotos === 'true') {
      conditions.push(sql`${projects.photoCount} > 0`);
    }
    if (search) {
      conditions.push(
        or(
          like(projects.city, `%${search}%`),
          like(projects.product, `%${search}%`),
          like(projects.description, `%${search}%`)
        )
      );
    }

    const db = getDb()!;

    // Query projects
    const projectList = await db.query.projects.findMany({
      where: conditions.length > 0 ? and(...conditions) : undefined,
      with: {
        photos: {
          orderBy: (photos, { asc }) => [asc(photos.order)],
          limit: 5, // Only get first 5 photos for listing
        },
      },
      orderBy: [desc(projects.completedDate)],
      limit,
      offset,
    });

    // Get total count
    const totalResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(projects)
      .where(conditions.length > 0 ? and(...conditions) : undefined);

    const total = Number(totalResult[0]?.count || 0);

    return NextResponse.json({
      projects: projectList,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

// POST /api/projects - Create a new project (admin only)
export async function POST(request: NextRequest) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { error: 'Database not configured' },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();

    const db = getDb()!;

    // Validate required fields
    if (!body.city || !body.state) {
      return NextResponse.json(
        { error: 'City and state are required' },
        { status: 400 }
      );
    }

    // Generate slug if not provided
    const slug = body.slug || generateSlug(body);

    // Insert project
    const [newProject] = await db
      .insert(projects)
      .values({
        name: body.name || 'Project',
        description: body.description,
        street: body.street,
        city: body.city,
        state: body.state,
        zip: body.zip,
        county: body.county,
        latitude: body.latitude,
        longitude: body.longitude,
        serviceType: body.serviceType,
        product: body.product,
        productColor: body.productColor,
        categories: body.categories || [],
        completedDate: body.completedDate ? new Date(body.completedDate) : new Date(),
        featured: body.featured || false,
        published: body.published !== false,
        slug,
        metaTitle: body.metaTitle,
        metaDescription: body.metaDescription,
      })
      .returning();

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}

function generateSlug(body: any): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const city = (body.city || 'project').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const random = Math.random().toString(36).substring(2, 8);
  return `${year}-${month}-${city}-${random}`;
}
