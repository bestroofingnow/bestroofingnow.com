// ProjectMapIt API Integration
// Fetches project data and photos for neighborhood stories

const PMI_API_BASE = 'https://projectmapit.com/api/v1';
const PMI_API_KEY = '97151bdc-175f-402a-a56d-cf8e1f80047e';

export interface PMIProject {
  _id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  location: [number, number]; // [lng, lat]
  created: string;
  active: boolean;
  featured: boolean;
  photoCount: number;
  withPhotos: boolean;
  categories: PMICategory[];
  gmb?: {
    postData?: {
      description?: string;
      ctaType?: string;
    };
  };
  photos?: PMIPhoto[];
}

export interface PMICategory {
  _id: string;
  name: string;
  parent?: {
    name: string;
  };
}

export interface PMIPhoto {
  _id: string;
  url: string;
  thumbnailUrl?: string;
  caption?: string;
  order: number;
}

export interface PMIProjectsResponse {
  page: number;
  pages: number;
  perPage: number;
  totalCount: number;
  results: PMIProject[];
}

// Fetch all projects with pagination
export async function fetchAllProjects(limit = 50): Promise<PMIProject[]> {
  const allProjects: PMIProject[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const response = await fetch(
      `${PMI_API_BASE}/projects?page=${page}&limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${PMI_API_KEY}`,
        },
        next: { revalidate: 86400, tags: ['pmi-projects'] },
      }
    );

    if (!response.ok) {
      console.error('PMI API Error:', response.status);
      break;
    }

    const data: PMIProjectsResponse = await response.json();
    allProjects.push(...data.results);

    hasMore = page < data.pages;
    page++;
  }

  return allProjects;
}

// Fetch a single project with full details including photos
export async function fetchProject(projectId: string): Promise<PMIProject | null> {
  try {
    const response = await fetch(`${PMI_API_BASE}/project/${projectId}`, {
      headers: {
        Authorization: `Bearer ${PMI_API_KEY}`,
      },
      next: { revalidate: 86400, tags: ['pmi-projects'] },
    });

    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
}

// Fetch project with full details including photos
export async function fetchProjectWithPhotos(projectId: string): Promise<PMIProject | null> {
  try {
    const response = await fetch(`${PMI_API_BASE}/project/${projectId}`, {
      headers: {
        Authorization: `Bearer ${PMI_API_KEY}`,
      },
      next: { revalidate: 86400, tags: ['pmi-projects'] },
    });

    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    console.error('Error fetching project with photos:', error);
    return null;
  }
}

// Fetch projects with their photos included from individual project endpoints
export async function fetchProjectsWithPhotoData(cityFilter?: string): Promise<PMIProject[]> {
  const allProjects = await fetchAllProjects();
  const projectsToEnrich = cityFilter
    ? allProjects.filter(p => p.city.toLowerCase() === cityFilter.toLowerCase() && p.withPhotos && p.photoCount > 0)
    : allProjects.filter(p => p.withPhotos && p.photoCount > 0);

  // Fetch detailed project data for projects that have photos (limit to avoid too many requests)
  const enrichedProjects = await Promise.all(
    projectsToEnrich.slice(0, 10).map(async (project) => {
      const detailedProject = await fetchProjectWithPhotos(project._id);
      return detailedProject || project;
    })
  );

  return enrichedProjects.filter((p): p is PMIProject => p !== null);
}

// Fetch projects by city
export async function fetchProjectsByCity(city: string): Promise<PMIProject[]> {
  const allProjects = await fetchAllProjects();
  return allProjects.filter(
    (p) => p.city.toLowerCase() === city.toLowerCase()
  );
}

// Fetch projects by zip code
export async function fetchProjectsByZip(zip: string): Promise<PMIProject[]> {
  const allProjects = await fetchAllProjects();
  return allProjects.filter((p) => p.zip === zip);
}

// Fetch projects with photos
export async function fetchProjectsWithPhotos(): Promise<PMIProject[]> {
  const allProjects = await fetchAllProjects();
  return allProjects.filter((p) => p.withPhotos && p.photoCount > 0);
}

// Fetch featured projects
export async function fetchFeaturedProjects(): Promise<PMIProject[]> {
  const allProjects = await fetchAllProjects();
  return allProjects.filter((p) => p.featured);
}

// Get project photo URL (via PMI public map)
export function getProjectMapUrl(project: PMIProject): string {
  return `https://projectmapit.com/best-roofing-now-llc/map?project=${project._id}`;
}

// Get project thumbnail from photos array
export function getProjectThumbnail(project: PMIProject): string | null {
  if (!project.photos || project.photos.length === 0) return null;
  return project.photos[0].thumbnailUrl || project.photos[0].url;
}

// Extract product info from categories
export function extractProductInfo(project: PMIProject): {
  product: string | null;
  color: string | null;
  serviceType: string | null;
} {
  let product: string | null = null;
  let color: string | null = null;
  let serviceType: string | null = null;

  for (const cat of project.categories) {
    // Product brands
    if (
      cat.name.includes('CertainTeed') ||
      cat.name.includes('GAF') ||
      cat.name.includes('Owens Corning') ||
      cat.name.includes('IKO') ||
      cat.name.includes('TAMKO')
    ) {
      product = cat.name;
    }
    // Colors (usually have parent)
    else if (cat.parent?.name) {
      product = cat.parent.name;
      color = cat.name;
    }
    // Service types
    else if (
      cat.name === 'Service Provided' ||
      cat.name === 'Insurance Work' ||
      cat.name === 'REPAIRS'
    ) {
      serviceType = cat.name;
    }
  }

  return { product, color, serviceType };
}

// Format project for display
export function formatProjectForDisplay(project: PMIProject): {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  date: string;
  year: number;
  month: string;
  product: string | null;
  color: string | null;
  serviceType: string | null;
  photoCount: number;
  mapUrl: string;
  description: string | null;
} {
  const { product, color, serviceType } = extractProductInfo(project);
  const createdDate = new Date(project.created);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return {
    id: project._id,
    name: project.name.split(' ')[0], // First name only for privacy
    street: project.street.replace(/^\d+\s*/, ''), // Remove house number
    city: project.city,
    state: project.state,
    zip: project.zip,
    date: `${months[createdDate.getMonth()]} ${createdDate.getFullYear()}`,
    year: createdDate.getFullYear(),
    month: months[createdDate.getMonth()],
    product,
    color,
    serviceType,
    photoCount: project.photoCount,
    mapUrl: getProjectMapUrl(project),
    description: project.gmb?.postData?.description || null,
  };
}

// Get project statistics by city
export async function getProjectStatsByCity(): Promise<
  Record<string, { count: number; withPhotos: number }>
> {
  const projects = await fetchAllProjects();
  const stats: Record<string, { count: number; withPhotos: number }> = {};

  for (const project of projects) {
    if (!stats[project.city]) {
      stats[project.city] = { count: 0, withPhotos: 0 };
    }
    stats[project.city].count++;
    if (project.withPhotos) {
      stats[project.city].withPhotos++;
    }
  }

  return stats;
}

// Get product popularity stats
export async function getProductStats(): Promise<Record<string, number>> {
  const projects = await fetchAllProjects();
  const stats: Record<string, number> = {};

  for (const project of projects) {
    const { product } = extractProductInfo(project);
    if (product) {
      stats[product] = (stats[product] || 0) + 1;
    }
  }

  return stats;
}
