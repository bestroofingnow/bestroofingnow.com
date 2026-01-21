import { NextResponse } from 'next/server';
import { fetchAllProjects, fetchProjectWithPhotos } from '@/lib/pmi-api';
import type { PMIProject } from '@/lib/pmi-api';

// Cache for 1 hour
export const revalidate = 3600;

export async function GET() {
  try {
    // Fetch all projects
    const allProjects = await fetchAllProjects();

    // Filter to only projects with photos
    const projectsWithPhotos = allProjects.filter(
      (p) => p.withPhotos && p.photoCount > 0
    );

    // Sort by created date (newest first)
    projectsWithPhotos.sort(
      (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
    );

    // Enrich top projects with photo data (limit to 20 to avoid too many API calls)
    const enrichedProjects: PMIProject[] = await Promise.all(
      projectsWithPhotos.slice(0, 20).map(async (project) => {
        try {
          const detailed = await fetchProjectWithPhotos(project._id);
          return detailed || project;
        } catch {
          return project;
        }
      })
    );

    // Return enriched projects plus the rest without photos
    const result = [
      ...enrichedProjects,
      ...projectsWithPhotos.slice(20),
    ];

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching PMI projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}
