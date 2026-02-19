import { NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';

// Cache for 24 hours (reads local JSON, can't use cache tags)
export const revalidate = 86400;

// Load projects from local PMI export file
function loadPMIExport() {
  try {
    const exportPath = path.join(process.cwd(), 'pmi-export.json');
    if (fs.existsSync(exportPath)) {
      return JSON.parse(fs.readFileSync(exportPath, 'utf-8'));
    }
  } catch (error) {
    console.error('Error loading PMI export:', error);
  }
  return null;
}

export async function GET() {
  try {
    const exportData = loadPMIExport();

    if (!exportData) {
      return NextResponse.json({
        projects: [],
        error: 'PMI export file not found',
      });
    }

    // Return all projects from the export
    return NextResponse.json({
      projects: exportData.projects || [],
      total: exportData.projects?.length || 0,
      exportedAt: exportData.exportedAt,
      source: 'pmi-export',
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects', projects: [] },
      { status: 500 }
    );
  }
}
