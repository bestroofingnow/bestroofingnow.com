import { NextRequest, NextResponse } from 'next/server';
import { getEntryById, updateEntry, deleteEntry, publishEntry, unpublishEntry } from '@/lib/knowledge-base';
import { verifyAdminToken } from '@/lib/admin-auth';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    const { id } = await params;
    const entry = await getEntryById(id);
    if (!entry) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ data: entry });
  } catch (error) {
    console.error('KB get error:', error);
    return NextResponse.json({ error: 'Failed to fetch entry' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    const { id } = await params;
    const body = await request.json();

    // Handle publish/unpublish actions
    if (body.action === 'publish') {
      const entry = await publishEntry(id);
      return NextResponse.json({ data: entry });
    }
    if (body.action === 'unpublish') {
      const entry = await unpublishEntry(id);
      return NextResponse.json({ data: entry });
    }

    const entry = await updateEntry(id, body);
    if (!entry) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ data: entry });
  } catch (error) {
    console.error('KB update error:', error);
    return NextResponse.json({ error: 'Failed to update entry' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const authError = verifyAdminToken(request);
  if (authError) return authError;

  try {
    const { id } = await params;
    const deleted = await deleteEntry(id);
    if (!deleted) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('KB delete error:', error);
    return NextResponse.json({ error: 'Failed to delete entry' }, { status: 500 });
  }
}
