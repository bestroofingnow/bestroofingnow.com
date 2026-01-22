import { NextRequest, NextResponse } from 'next/server';
import { getDb, projects, photos, isDatabaseConfigured } from '@/lib/db/projects-db';
import { eq } from 'drizzle-orm';
import { put, del } from '@vercel/blob';

// GET /api/projects/[id]/photos - Get all photos for a project
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
    const projectPhotos = await db.query.photos.findMany({
      where: eq(photos.projectId, id),
      orderBy: (photos, { asc }) => [asc(photos.order)],
    });

    return NextResponse.json(projectPhotos);
  } catch (error) {
    console.error('Error fetching photos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch photos' },
      { status: 500 }
    );
  }
}

// POST /api/projects/[id]/photos - Upload a new photo
export async function POST(
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

    // Check if project exists
    const project = await db.query.projects.findFirst({
      where: eq(projects.id, id),
    });

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const caption = formData.get('caption') as string;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Get current max order
    const existingPhotos = await db.query.photos.findMany({
      where: eq(photos.projectId, id),
    });
    const maxOrder = Math.max(0, ...existingPhotos.map(p => p.order || 0));

    // Upload to Vercel Blob
    const filename = `projects/${id}/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;

    const blob = await put(filename, file, {
      access: 'public',
      contentType: file.type,
    });

    // Create thumbnail URL (Vercel Blob supports transformations)
    // For now, use same URL - can add image transformation later
    const thumbnailUrl = blob.url;

    // Insert photo record
    const [newPhoto] = await db
      .insert(photos)
      .values({
        projectId: id,
        url: blob.url,
        thumbnailUrl,
        caption,
        order: maxOrder + 1,
        storageProvider: 'vercel-blob',
        storagePath: filename,
      })
      .returning();

    // Update project photo count
    await db
      .update(projects)
      .set({
        photoCount: existingPhotos.length + 1,
        updatedAt: new Date(),
      })
      .where(eq(projects.id, id));

    return NextResponse.json(newPhoto, { status: 201 });
  } catch (error) {
    console.error('Error uploading photo:', error);
    return NextResponse.json(
      { error: 'Failed to upload photo' },
      { status: 500 }
    );
  }
}

// DELETE /api/projects/[id]/photos - Delete a photo
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: projectId } = await params;
  const { searchParams } = new URL(request.url);
  const photoId = searchParams.get('photoId');

  if (!photoId) {
    return NextResponse.json(
      { error: 'Photo ID required' },
      { status: 400 }
    );
  }

  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { error: 'Database not configured' },
      { status: 503 }
    );
  }

  try {
    const db = getDb()!;

    // Get photo to delete
    const photo = await db.query.photos.findFirst({
      where: eq(photos.id, photoId),
    });

    if (!photo) {
      return NextResponse.json(
        { error: 'Photo not found' },
        { status: 404 }
      );
    }

    // Delete from Vercel Blob if stored there
    if (photo.storageProvider === 'vercel-blob' && photo.url) {
      try {
        await del(photo.url);
      } catch (e) {
        console.error('Failed to delete from blob storage:', e);
      }
    }

    // Delete photo record
    await db.delete(photos).where(eq(photos.id, photoId));

    // Update project photo count
    const remainingPhotos = await db.query.photos.findMany({
      where: eq(photos.projectId, projectId),
    });

    await db
      .update(projects)
      .set({
        photoCount: remainingPhotos.length,
        updatedAt: new Date(),
      })
      .where(eq(projects.id, projectId));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting photo:', error);
    return NextResponse.json(
      { error: 'Failed to delete photo' },
      { status: 500 }
    );
  }
}
