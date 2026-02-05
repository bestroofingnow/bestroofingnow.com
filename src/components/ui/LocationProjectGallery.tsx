'use client';

import { useState, useEffect } from 'react';
import { SEOImage as Image } from '@/components/ui/SEOImage';
import Link from 'next/link';
import { MapPin, Camera, ChevronRight, Calendar, Star, ArrowRight } from 'lucide-react';

interface ProjectPhoto {
  _id: string;
  url: string;
  thumbnailUrl?: string;
  caption?: string;
}

interface Project {
  _id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  created: string;
  photoCount: number;
  withPhotos: boolean;
  photos?: ProjectPhoto[];
  categories?: Array<{ name: string; parent?: { name: string } }>;
}

interface LocationProjectGalleryProps {
  cities: string[];
  title?: string;
  subtitle?: string;
  maxProjects?: number;
  showViewAll?: boolean;
  className?: string;
}

// Extract product info from categories
function extractProductInfo(project: Project): { product: string | null; color: string | null } {
  let product: string | null = null;
  let color: string | null = null;

  if (!project.categories) return { product, color };

  for (const cat of project.categories) {
    if (
      cat.name.includes('CertainTeed') ||
      cat.name.includes('GAF') ||
      cat.name.includes('Owens Corning') ||
      cat.name.includes('IKO') ||
      cat.name.includes('TAMKO')
    ) {
      product = cat.name;
    } else if (cat.parent?.name) {
      product = cat.parent.name;
      color = cat.name;
    }
  }

  return { product, color };
}

export function LocationProjectGallery({
  cities,
  title = 'Recent Roofing Projects in Your Area',
  subtitle,
  maxProjects = 6,
  showViewAll = true,
  className = '',
}: LocationProjectGalleryProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/pmi/projects');
        if (!response.ok) throw new Error('Failed to fetch projects');

        const allProjects: Project[] = await response.json();

        // Filter by cities (case-insensitive)
        const cityLower = cities.map(c => c.toLowerCase());
        const filtered = allProjects.filter(
          p => cityLower.some(city => p.city.toLowerCase().includes(city)) && p.withPhotos && p.photoCount > 0
        );

        // Sort by date (newest first) and limit
        const sorted = filtered
          .sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime())
          .slice(0, maxProjects);

        setProjects(sorted);
      } catch (err) {
        setError('Unable to load projects');
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, [cities, maxProjects]);

  if (loading) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="aspect-square bg-gray-200 rounded-xl"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error || projects.length === 0) {
    return null; // Don't show section if no projects
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  return (
    <section className={`${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">{title}</h2>
        {subtitle && <p className="text-gray-600">{subtitle}</p>}
        <p className="text-sm text-gray-500 mt-2">
          <Camera className="w-4 h-4 inline mr-1" />
          {projects.length} verified projects with photos
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => {
          const { product, color } = extractProductInfo(project);
          const thumbnail = project.photos?.[0]?.thumbnailUrl || project.photos?.[0]?.url;

          return (
            <div
              key={project._id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative aspect-square">
                {thumbnail ? (
                  <Image
                    src={thumbnail}
                    alt={`Roofing project in ${project.city}, NC - ${product || 'Professional installation'}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                    <Camera className="w-12 h-12 text-primary/60" />
                  </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <p className="font-semibold text-sm">{project.photoCount} Photos</p>
                    <p className="text-xs text-white/80">Click to view</p>
                  </div>
                </div>

                {/* Photo count badge */}
                <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <Camera className="w-3 h-3" />
                  {project.photoCount}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-dark text-sm truncate flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-primary flex-shrink-0" />
                      {project.city}, {project.state}
                    </p>
                    {product && (
                      <p className="text-xs text-gray-600 truncate">{product}</p>
                    )}
                    {color && (
                      <p className="text-xs text-gray-500 truncate">{color}</p>
                    )}
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(project.created)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All Link */}
      {showViewAll && (
        <div className="text-center mt-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
          >
            View All Projects on Map
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg text-dark">
                  Roofing Project in {selectedProject.city}
                </h3>
                <p className="text-sm text-gray-500">
                  {formatDate(selectedProject.created)} &bull; {selectedProject.photoCount} photos
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close"
              >
                <ChevronRight className="w-6 h-6 rotate-45" />
              </button>
            </div>

            {/* Photo Gallery */}
            <div className="p-4">
              {selectedProject.photos && selectedProject.photos.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {selectedProject.photos.map((photo, index) => (
                    <div key={photo._id} className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src={photo.url}
                        alt={`${selectedProject.city} roofing project - Photo ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 py-8">Loading photos...</p>
              )}

              {/* Project Details */}
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Location</h4>
                    <p className="text-gray-600 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      {selectedProject.city}, {selectedProject.state} {selectedProject.zip}
                    </p>
                  </div>
                  {extractProductInfo(selectedProject).product && (
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Materials</h4>
                      <p className="text-gray-600">
                        {extractProductInfo(selectedProject).product}
                        {extractProductInfo(selectedProject).color && (
                          <span className="text-gray-500"> - {extractProductInfo(selectedProject).color}</span>
                        )}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Verified project completed by Best Roofing Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default LocationProjectGallery;
