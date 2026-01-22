import { NextRequest, NextResponse } from 'next/server';
import { getDb, projects, isDatabaseConfigured } from '@/lib/db/projects-db';
import { eq } from 'drizzle-orm';

// GET /api/projects/[id] - Get single project with all photos
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { error: 'Database not configured' },
      { status: 503 }
    );
  }

  try {
    const db = getDb()!;

    // Try to find by ID first, then by slug
    let project = await db.query.projects.findFirst({
      where: eq(projects.id, id),
      with: {
        photos: {
          orderBy: (photos, { asc }) => [asc(photos.order)],
        },
      },
    });

    // If not found by ID, try slug
    if (!project) {
      project = await db.query.projects.findFirst({
        where: eq(projects.slug, id),
        with: {
          photos: {
            orderBy: (photos, { asc }) => [asc(photos.order)],
          },
        },
      });
    }

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    return NextResponse.json(
      { error: 'Failed to fetch project' },
      { status: 500 }
    );
  }
}

// PUT /api/projects/[id] - Update a project
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { error: 'Database not configured' },
      { status: 503 }
    );
  }

  try {
    const db = getDb()!;
    const body = await request.json();

    const [updatedProject] = await db
      .update(projects)
      .set({
        name: body.name,
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
        categories: body.categories,
        completedDate: body.completedDate ? new Date(body.completedDate) : undefined,
        featured: body.featured,
        published: body.published,
        slug: body.slug,
        metaTitle: body.metaTitle,
        metaDescription: body.metaDescription,
        updatedAt: new Date(),
      })
      .where(eq(projects.id, id))
      .returning();

    if (!updatedProject) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedProject);
  } catch (error) {
    console.error('Error updating project:', error);
    return NextResponse.json(
      { error: 'Failed to update project' },
      { status: 500 }
    );
  }
}

// DELETE /api/projects/[id] - Delete a project
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { error: 'Database not configured' },
      { status: 503 }
    );
  }

  try {
    const db = getDb()!;

    // Photos will be cascade deleted due to schema
    const [deletedProject] = await db
      .delete(projects)
      .where(eq(projects.id, id))
      .returning();

    if (!deletedProject) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting project:', error);
    return NextResponse.json(
      { error: 'Failed to delete project' },
      { status: 500 }
    );
  }
}
