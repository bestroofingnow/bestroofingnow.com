import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Camera, Calendar, ChevronLeft, ChevronRight, ArrowLeft, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTASection } from '@/components/sections/CTASection';
import ProjectGallery from '@/components/projects/ProjectGallery';
import { BreadcrumbSchema, ProjectSchema, PlaceSchema, EnhancedSpeakableSchema } from '@/components/seo/SchemaMarkup';

interface ProjectPhoto {
  id: string;
  url: string;
  thumbnailUrl: string;
  caption?: string;
}

interface Project {
  pmiId: string;
  city: string;
  state: string;
  county?: string;
  latitude?: number;
  longitude?: number;
  product?: string;
  productColor?: string;
  serviceType?: string;
  completedDate: string;
  photos: ProjectPhoto[];
}

// Load project from PMI export
async function getProject(slug: string): Promise<Project | null> {
  try {
    const fs = await import('fs');
    const path = await import('path');
    const exportPath = path.join(process.cwd(), 'pmi-export.json');

    if (!fs.existsSync(exportPath)) {
      return null;
    }

    const data = JSON.parse(fs.readFileSync(exportPath, 'utf-8'));

    // Find project by slug (pmiId in this case)
    const project = data.projects.find((p: any) => p.pmiId === slug);

    return project || null;
  } catch (error) {
    console.error('Error loading project:', error);
    return null;
  }
}

// Get related projects from same city
async function getRelatedProjects(city: string, excludeId: string): Promise<Project[]> {
  try {
    const fs = await import('fs');
    const path = await import('path');
    const exportPath = path.join(process.cwd(), 'pmi-export.json');

    if (!fs.existsSync(exportPath)) {
      return [];
    }

    const data = JSON.parse(fs.readFileSync(exportPath, 'utf-8'));

    return data.projects
      .filter((p: any) => p.city === city && p.pmiId !== excludeId && p.photos?.length > 0)
      .slice(0, 4);
  } catch {
    return [];
  }
}

// Generate static params for all projects
export async function generateStaticParams() {
  try {
    const fs = await import('fs');
    const path = await import('path');
    const exportPath = path.join(process.cwd(), 'pmi-export.json');

    if (!fs.existsSync(exportPath)) {
      return [];
    }

    const data = JSON.parse(fs.readFileSync(exportPath, 'utf-8'));

    // Only generate pages for projects with photos
    return data.projects
      .filter((p: any) => p.photos && p.photos.length > 0)
      .map((p: any) => ({
        slug: p.pmiId,
      }));
  } catch {
    return [];
  }
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const title = `${project.product || 'Roofing'} Project in ${project.city}, ${project.state} | ${SITE_CONFIG.name}`;
  const description = `View photos of our ${project.product || 'roofing'} project completed in ${project.city}, ${project.state}${project.county ? ` (${project.county} County)` : ''}. ${project.photos.length} photos from this verified installation.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_CONFIG.url}/projects/${project.pmiId}`,
      images: project.photos[0]?.url
        ? [{ url: project.photos[0].url, width: 1200, height: 630 }]
        : undefined,
    },
  };
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
  return date.toLocaleDateString('en-US', options);
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = await getRelatedProjects(project.city, project.pmiId);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: `${project.city}, ${project.state}`, url: `/projects/${project.pmiId}` },
  ];

  // JSON-LD structured data - ImageGallery
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: `${project.product || 'Roofing'} Project in ${project.city}, ${project.state}`,
    description: `Professional roofing project completed in ${project.city}, ${project.state}`,
    image: project.photos.map(p => p.url),
    numberOfItems: project.photos.length,
    datePublished: project.completedDate,
    author: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    contentLocation: {
      '@type': 'Place',
      name: `${project.city}, ${project.state}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: project.city,
        addressRegion: project.state,
        addressCountry: 'US',
      },
      ...(project.latitude && project.longitude
        ? {
            geo: {
              '@type': 'GeoCoordinates',
              latitude: project.latitude,
              longitude: project.longitude,
            },
          }
        : {}),
    },
  };

  // JSON-LD for Local Business / Service
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${project.serviceType || project.product || 'Roofing'} in ${project.city}`,
    description: `Professional ${project.product || 'roofing'} installation completed in ${project.city}, ${project.state}`,
    provider: {
      '@type': 'RoofingContractor',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.phoneClean,
      areaServed: {
        '@type': 'City',
        name: project.city,
        containedInPlace: {
          '@type': 'State',
          name: 'North Carolina',
        },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '100',
        bestRating: '5',
        worstRating: '1',
      },
    },
    areaServed: {
      '@type': 'City',
      name: project.city,
    },
    ...(project.latitude && project.longitude
      ? {
          serviceArea: {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: project.latitude,
              longitude: project.longitude,
            },
            geoRadius: '50',
          },
        }
      : {}),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Roofing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: project.product || 'Roofing',
          },
        },
      ],
    },
  };

  return (
    <>
      {/* Enhanced Schema Markup for AI readability */}
      <BreadcrumbSchema items={breadcrumbs} />
      <ProjectSchema
        project={{
          slug: project.pmiId,
          city: project.city,
          state: project.state,
          lat: project.latitude,
          lng: project.longitude,
          product: project.product,
          completedDate: project.completedDate,
          photos: project.photos.map(p => ({ url: p.url, caption: p.caption })),
        }}
      />
      <PlaceSchema
        city={project.city}
        state={project.state}
        county={project.county}
        lat={project.latitude}
        lng={project.longitude}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Enhanced Speakable Schema for Voice Assistants */}
      <EnhancedSpeakableSchema
        pageUrl={`${SITE_CONFIG.url}/projects/${project.pmiId}`}
        pageName={`${project.product || 'Roofing'} Project in ${project.city}, ${project.state} | Best Roofing Now`}
        cssSelectors={['h1', '.project-description', '.project-details']}
      />

      {/* Breadcrumbs */}
      <section className="bg-gray-50 py-4 border-b">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </section>

      {/* Header */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <Link
            href="/projects"
            className="inline-flex items-center text-primary hover:underline mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to All Projects
          </Link>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {project.product || 'Roofing'} Project
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <span className="flex items-center gap-1">
                  <MapPin className="w-5 h-5 text-primary" />
                  {project.city}, {project.state}
                  {project.county && ` (${project.county} County)`}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-5 h-5 text-primary" />
                  {formatDate(project.completedDate)}
                </span>
                <span className="flex items-center gap-1">
                  <Camera className="w-5 h-5 text-primary" />
                  {project.photos.length} Photos
                </span>
              </div>
            </div>

            {/* Project Details */}
            {(project.product || project.productColor || project.serviceType) && (
              <div className="bg-gray-50 rounded-lg px-6 py-4">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Project Details</h3>
                <div className="space-y-1 text-sm">
                  {project.serviceType && (
                    <p>
                      <span className="text-gray-600">Service:</span>{' '}
                      <span className="font-medium">{project.serviceType}</span>
                    </p>
                  )}
                  {project.product && (
                    <p>
                      <span className="text-gray-600">Product:</span>{' '}
                      <span className="font-medium">{project.product}</span>
                    </p>
                  )}
                  {project.productColor && (
                    <p>
                      <span className="text-gray-600">Color:</span>{' '}
                      <span className="font-medium">{project.productColor}</span>
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-8">
        <div className="container">
          <ProjectGallery photos={project.photos} projectTitle={`${project.city} ${project.product || 'Roofing'} Project`} />
        </div>
      </section>

      {/* Location Info */}
      <section className="py-8 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Location Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Location</h2>
              <p className="text-gray-600 mb-4">
                This {project.product || 'roofing'} project was completed in {project.city},{' '}
                {project.state}
                {project.county && ` in ${project.county} County`}. {SITE_CONFIG.name} is proud to
                serve homeowners throughout the Charlotte and Lake Norman region with professional
                roofing services.
              </p>

              <div className="space-y-3">
                <Link
                  href={`/projects/city/${project.city.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <MapPin className="w-4 h-4" />
                  View all projects in {project.city}
                  <ChevronRight className="w-4 h-4" />
                </Link>

                {project.product && (
                  <div className="block">
                    <Link
                      href={`/materials/${project.product.toLowerCase().includes('metal') ? 'metal-roofing' : 'asphalt-shingles'}`}
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Learn more about {project.product}
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Mini Map */}
            {project.latitude && project.longitude && (
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <iframe
                  title={`Map of project location in ${project.city}`}
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${project.longitude - 0.02}%2C${project.latitude - 0.02}%2C${project.longitude + 0.02}%2C${project.latitude + 0.02}&layer=mapnik&marker=${project.latitude}%2C${project.longitude}`}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  loading="lazy"
                />
                <div className="p-4 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  {project.city}, {project.state}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              More Projects in {project.city}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProjects.map((related: any) => {
                const thumbnail = related.photos?.[0]?.thumbnailUrl || related.photos?.[0]?.url;

                return (
                  <Link
                    key={related.pmiId}
                    href={`/projects/${related.pmiId}`}
                    className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden border border-gray-100"
                  >
                    <div className="relative aspect-square">
                      {thumbnail ? (
                        <Image
                          src={thumbnail}
                          alt={`Roofing project in ${related.city}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                          <Camera className="w-12 h-12 text-primary/60" />
                        </div>
                      )}
                      <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <Camera className="w-3 h-3" />
                        {related.photos?.length || 0}
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="font-medium text-gray-900 text-sm truncate">
                        {related.product || 'Roofing Project'}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatDate(related.completedDate)}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection
        title="Need a Similar Roofing Project?"
        subtitle={`Get a free estimate for your ${project.city} home. We'll match the quality you see here.`}
      />
    </>
  );
}
