import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Camera, Calendar, ChevronRight, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTASection } from '@/components/sections/CTASection';
import ProjectMap from '@/components/projects/ProjectMap';

export const metadata: Metadata = {
  title: `Our Roofing Projects | ${SITE_CONFIG.name}`,
  description: `View ${SITE_CONFIG.name}'s completed roofing projects across Charlotte, Lake Norman, and surrounding areas. See real before/after photos and verified installations.`,
  openGraph: {
    title: `Roofing Projects Gallery | ${SITE_CONFIG.name}`,
    description: 'Explore our portfolio of completed roofing projects in Charlotte and Lake Norman.',
    url: `${SITE_CONFIG.url}/projects`,
  },
};

// Get project data - works with both database and PMI export
async function getProjects() {
  try {
    // Try to load from PMI export first (works without database)
    const fs = await import('fs');
    const path = await import('path');
    const exportPath = path.join(process.cwd(), 'pmi-export.json');

    if (fs.existsSync(exportPath)) {
      const data = JSON.parse(fs.readFileSync(exportPath, 'utf-8'));
      return {
        projects: data.projects
          .filter((p: any) => p.photos && p.photos.length > 0)
          .sort((a: any, b: any) => new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime())
          .slice(0, 24),
        total: data.projects.filter((p: any) => p.photos && p.photos.length > 0).length,
        source: 'pmi-export',
      };
    }

    return { projects: [], total: 0, source: 'none' };
  } catch (error) {
    console.error('Error loading projects:', error);
    return { projects: [], total: 0, source: 'error' };
  }
}

// Get city stats for filtering
async function getCityStats() {
  try {
    const fs = await import('fs');
    const path = await import('path');
    const exportPath = path.join(process.cwd(), 'pmi-export.json');

    if (fs.existsSync(exportPath)) {
      const data = JSON.parse(fs.readFileSync(exportPath, 'utf-8'));
      const stats: Record<string, number> = {};

      data.projects.forEach((p: any) => {
        if (p.photos && p.photos.length > 0) {
          stats[p.city] = (stats[p.city] || 0) + 1;
        }
      });

      return Object.entries(stats)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([city, count]) => ({ city, count }));
    }

    return [];
  } catch {
    return [];
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

export default async function ProjectsPage() {
  const { projects, total } = await getProjects();
  const cityStats = await getCityStats();

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
  ];

  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-gray-50 py-4 border-b">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </section>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Roofing Projects
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Explore {total}+ completed roofing projects across Charlotte, Lake Norman, and surrounding communities.
              Every project includes verified photos and location data.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4" />
                <span>{total}+ Verified Projects</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Camera className="w-4 h-4" />
                <span>2,000+ Project Photos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Project Map
          </h2>
          <ProjectMap height="500px" className="mb-8" />
          <p className="text-sm text-gray-500 text-center">
            Click on markers to view project details. Blue markers indicate projects with photos.
          </p>
        </div>
      </section>

      {/* City Filter */}
      {cityStats.length > 0 && (
        <section className="py-8 border-b">
          <div className="container">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-gray-600 font-medium">Filter by city:</span>
              <Link
                href="/projects"
                className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium"
              >
                All Cities
              </Link>
              {cityStats.slice(0, 8).map(({ city, count }) => (
                <Link
                  key={city}
                  href={`/projects?city=${encodeURIComponent(city)}`}
                  className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition-colors"
                >
                  {city} ({count})
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Recent Projects
          </h2>

          {projects.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {projects.map((project: any) => {
                const thumbnail = project.photos?.[0]?.thumbnailUrl || project.photos?.[0]?.url;

                return (
                  <div
                    key={project.pmiId}
                    className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden border border-gray-100"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-square">
                      {thumbnail ? (
                        <Image
                          src={thumbnail}
                          alt={`Roofing project in ${project.city}, ${project.state}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                          <Camera className="w-12 h-12 text-primary/60" />
                        </div>
                      )}

                      {/* Photo count badge */}
                      <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <Camera className="w-3 h-3" />
                        {project.photos?.length || 0}
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                          <p className="font-semibold text-sm">View Project</p>
                          <p className="text-xs text-white/80">Click to see all photos</p>
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-4">
                      <p className="font-semibold text-gray-900 flex items-center gap-1 mb-1">
                        <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                        {project.city}, {project.state}
                      </p>
                      {project.product && (
                        <p className="text-sm text-gray-600 truncate">{project.product}</p>
                      )}
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-2">
                        <Calendar className="w-3 h-3" />
                        {formatDate(project.completedDate)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600">No projects found.</p>
            </div>
          )}

          {/* View All Link */}
          {total > projects.length && (
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Showing {projects.length} of {total} projects
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <p className="text-4xl font-bold text-primary mb-2">{total}+</p>
              <p className="text-gray-600">Total Projects</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <p className="text-4xl font-bold text-primary mb-2">2,100+</p>
              <p className="text-gray-600">Project Photos</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <p className="text-4xl font-bold text-primary mb-2">{cityStats.length}+</p>
              <p className="text-gray-600">Cities Served</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <p className="text-4xl font-bold text-primary mb-2">5.0</p>
              <p className="text-gray-600">Google Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Start Your Roofing Project?"
        subtitle="Get a free estimate and join our growing list of satisfied customers."
      />
    </>
  );
}
