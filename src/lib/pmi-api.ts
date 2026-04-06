// Project data - previously fetched from ProjectMapIt API, now served from local static JSON
import projectsData from '@/data/projects.json';

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

// Cast the imported JSON to the correct type
const allProjectsData: PMIProject[] = projectsData as unknown as PMIProject[];

// Fetch all projects (now reads from local JSON)
export async function fetchAllProjects(_limit?: number): Promise<PMIProject[]> {
  return allProjectsData;
}

// Fetch a single project with full details including photos
export async function fetchProject(projectId: string): Promise<PMIProject | null> {
  return allProjectsData.find((p) => p._id === projectId) ?? null;
}

// Fetch project with full details including photos
export async function fetchProjectWithPhotos(projectId: string): Promise<PMIProject | null> {
  return allProjectsData.find((p) => p._id === projectId) ?? null;
}

// Fetch projects with their photos included
export async function fetchProjectsWithPhotoData(cityFilter?: string): Promise<PMIProject[]> {
  const filtered = cityFilter
    ? allProjectsData.filter(
        (p) =>
          p.city.toLowerCase() === cityFilter.toLowerCase() &&
          p.withPhotos &&
          p.photoCount > 0
      )
    : allProjectsData.filter((p) => p.withPhotos && p.photoCount > 0);

  return filtered;
}

// Fetch projects by city
export async function fetchProjectsByCity(city: string): Promise<PMIProject[]> {
  return allProjectsData.filter(
    (p) => p.city.toLowerCase() === city.toLowerCase()
  );
}

// Fetch projects by zip code
export async function fetchProjectsByZip(zip: string): Promise<PMIProject[]> {
  return allProjectsData.filter((p) => p.zip === zip);
}

// Fetch projects with photos
export async function fetchProjectsWithPhotos(): Promise<PMIProject[]> {
  return allProjectsData.filter((p) => p.withPhotos && p.photoCount > 0);
}

// Fetch featured projects
export async function fetchFeaturedProjects(): Promise<PMIProject[]> {
  return allProjectsData.filter((p) => p.featured);
}

// Get project page URL (previously linked to ProjectMapIt, now links to local projects page)
export function getProjectMapUrl(_project: PMIProject): string {
  return '/projects';
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
