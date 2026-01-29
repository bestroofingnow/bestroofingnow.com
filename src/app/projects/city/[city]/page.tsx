import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Camera, Calendar, ChevronRight, ArrowLeft, Star, Phone, Shield } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTASection } from '@/components/sections/CTASection';
import ProjectMap from '@/components/projects/ProjectMap';
import { getProjectMarkersForCity } from '@/lib/project-data';

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
  photos: Array<{ url: string; thumbnailUrl: string }>;
}

interface CityData {
  projects: Project[];
  total: number;
  avgLat: number;
  avgLng: number;
  counties: string[];
  products: string[];
}

// Get all projects for a city
async function getCityProjects(city: string): Promise<CityData | null> {
  try {
    const fs = await import('fs');
    const path = await import('path');
    const exportPath = path.join(process.cwd(), 'pmi-export.json');

    if (!fs.existsSync(exportPath)) {
      return null;
    }

    const data = JSON.parse(fs.readFileSync(exportPath, 'utf-8'));

    // Normalize city name for comparison
    const normalizedCity = city.toLowerCase().replace(/-/g, ' ');

    const cityProjects = data.projects.filter((p: any) => {
      const projectCity = p.city.toLowerCase();
      return projectCity === normalizedCity ||
             projectCity.replace(/\s+/g, '-') === city.toLowerCase();
    });

    if (cityProjects.length === 0) {
      return null;
    }

    // Calculate average coordinates
    const projectsWithCoords = cityProjects.filter((p: any) => p.latitude && p.longitude);
    const avgLat = projectsWithCoords.length > 0
      ? projectsWithCoords.reduce((sum: number, p: any) => sum + p.latitude, 0) / projectsWithCoords.length
      : 35.2271;
    const avgLng = projectsWithCoords.length > 0
      ? projectsWithCoords.reduce((sum: number, p: any) => sum + p.longitude, 0) / projectsWithCoords.length
      : -80.8431;

    // Get unique counties and products
    const counties = [...new Set(cityProjects.filter((p: any) => p.county).map((p: any) => p.county))] as string[];
    const products = [...new Set(cityProjects.filter((p: any) => p.product).map((p: any) => p.product))] as string[];

    return {
      projects: cityProjects
        .filter((p: any) => p.photos && p.photos.length > 0)
        .sort((a: any, b: any) => new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime()),
      total: cityProjects.length,
      avgLat,
      avgLng,
      counties,
      products,
    };
  } catch (error) {
    console.error('Error loading city projects:', error);
    return null;
  }
}

// Get all unique cities for static generation
async function getAllCities(): Promise<string[]> {
  try {
    const fs = await import('fs');
    const path = await import('path');
    const exportPath = path.join(process.cwd(), 'pmi-export.json');

    if (!fs.existsSync(exportPath)) {
      return [];
    }

    const data = JSON.parse(fs.readFileSync(exportPath, 'utf-8'));
    const cities = [...new Set(data.projects.map((p: any) => p.city))] as string[];

    return cities.map(c => c.toLowerCase().replace(/\s+/g, '-'));
  } catch {
    return [];
  }
}

// Generate static params for all cities
export async function generateStaticParams() {
  const cities = await getAllCities();
  return cities.map((city) => ({ city }));
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const cityData = await getCityProjects(city);

  if (!cityData) {
    return {
      title: 'City Not Found',
    };
  }

  const displayCity = cityData.projects[0]?.city || city.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const state = cityData.projects[0]?.state || 'NC';

  const title = `Roofing Projects in ${displayCity}, ${state} | ${cityData.total} Verified Jobs | ${SITE_CONFIG.name}`;
  const description = `View ${cityData.total} completed roofing projects in ${displayCity}, ${state}. Browse photos from verified ${cityData.products.slice(0, 3).join(', ')} installations. ${SITE_CONFIG.name} - trusted local roofers.`;

  return {
    title,
    description,
    keywords: [
      `roofing projects ${displayCity}`,
      `roof replacement ${displayCity} ${state}`,
      `roofing contractor ${displayCity}`,
      `${displayCity} roofing company`,
      `best roofer ${displayCity}`,
      ...cityData.products.map(p => `${p} ${displayCity}`),
    ],
    openGraph: {
      title,
      description,
      url: `${SITE_CONFIG.url}/projects/city/${city}`,
      type: 'website',
      images: cityData.projects[0]?.photos[0]?.url
        ? [{ url: cityData.projects[0].photos[0].url, width: 1200, height: 630 }]
        : undefined,
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/projects/city/${city}`,
    },
  };
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

export default async function CityProjectsPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const cityData = await getCityProjects(city);

  if (!cityData) {
    notFound();
  }

  const displayCity = cityData.projects[0]?.city || city.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const state = cityData.projects[0]?.state || 'NC';
  const totalPhotos = cityData.projects.reduce((sum, p) => sum + (p.photos?.length || 0), 0);
  const cityMarkers = await getProjectMarkersForCity(displayCity);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: displayCity, url: `/projects/city/${city}` },
  ];

  // Enhanced JSON-LD for local SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Roofing Projects in ${displayCity}, ${state}`,
    description: `${cityData.total} completed roofing projects in ${displayCity}, ${state} by ${SITE_CONFIG.name}`,
    url: `${SITE_CONFIG.url}/projects/city/${city}`,
    numberOfItems: cityData.total,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: cityData.total,
      itemListElement: cityData.projects.slice(0, 10).map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'ImageGallery',
          name: `${project.product || 'Roofing'} Project in ${displayCity}`,
          url: `${SITE_CONFIG.url}/projects/${project.pmiId}`,
          image: project.photos[0]?.url,
          datePublished: project.completedDate,
          contentLocation: {
            '@type': 'Place',
            name: `${displayCity}, ${state}`,
            address: {
              '@type': 'PostalAddress',
              addressLocality: displayCity,
              addressRegion: state,
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
        },
      })),
    },
    provider: {
      '@type': 'RoofingContractor',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.phoneClean,
      areaServed: {
        '@type': 'City',
        name: displayCity,
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
  };

  // Local business JSON-LD
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    name: `${SITE_CONFIG.name} - ${displayCity}`,
    url: `${SITE_CONFIG.url}/projects/city/${city}`,
    telephone: SITE_CONFIG.phoneClean,
    address: {
      '@type': 'PostalAddress',
      addressLocality: displayCity,
      addressRegion: state,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: cityData.avgLat,
      longitude: cityData.avgLng,
    },
    areaServed: {
      '@type': 'City',
      name: displayCity,
    },
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: cityData.total,
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Roofing Services',
      itemListElement: cityData.products.slice(0, 5).map((product) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: product,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      {/* Breadcrumbs */}
      <section className="bg-gray-50 py-4 border-b">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </section>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="container">
          <Link
            href="/projects"
            className="inline-flex items-center text-white/80 hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            All Projects
          </Link>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Roofing Projects in {displayCity}, {state}
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Explore {cityData.total} verified roofing projects we've completed in {displayCity}.
              See real photos from satisfied homeowners in your neighborhood.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4" />
                <span>{cityData.total} Projects</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Camera className="w-4 h-4" />
                <span>{totalPhotos} Photos</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Star className="w-4 h-4" />
                <span>5.0 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white border-b py-6">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span>5-Star Rated on Google</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-primary">
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Project Locations in {displayCity}
          </h2>
          <p className="text-gray-600 mb-6">
            Click on any marker to view project details and photos.
          </p>
          <ProjectMap city={displayCity} height="400px" initialMarkers={cityMarkers} />
        </div>
      </section>

      {/* Products/Services Filter */}
      {cityData.products.length > 0 && (
        <section className="py-8 border-b bg-white">
          <div className="container">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-gray-600 font-medium">Services completed:</span>
              {cityData.products.slice(0, 6).map((product) => (
                <span
                  key={product}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                >
                  {product}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {cityData.projects.length} Projects with Photos in {displayCity}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cityData.projects.map((project) => {
              const thumbnail = project.photos?.[0]?.thumbnailUrl || project.photos?.[0]?.url;

              return (
                <Link
                  key={project.pmiId}
                  href={`/projects/${project.pmiId}`}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden border border-gray-100"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-square">
                    {thumbnail ? (
                      <Image
                        src={thumbnail}
                        alt={`${project.product || 'Roofing'} project in ${displayCity}, ${state}`}
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
                    {project.product && (
                      <p className="font-semibold text-gray-900 truncate mb-1">{project.product}</p>
                    )}
                    {project.productColor && (
                      <p className="text-sm text-gray-600 truncate">{project.productColor}</p>
                    )}
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-2">
                      <Calendar className="w-3 h-3" />
                      {formatDate(project.completedDate)}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Professional Roofing Services in {displayCity}, {state}
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                {SITE_CONFIG.name} has proudly served homeowners in {displayCity} with high-quality
                roofing services. Our portfolio of {cityData.total} completed projects demonstrates
                our commitment to excellence and customer satisfaction in the {displayCity} area.
              </p>
              {cityData.counties.length > 0 && (
                <p>
                  We serve all neighborhoods in {displayCity}
                  {cityData.counties.length > 0 && `, including areas in ${cityData.counties.join(' and ')} County`}.
                  Whether you need a roof replacement, repair, or new installation, our experienced
                  team delivers exceptional results backed by industry-leading warranties.
                </p>
              )}
              {cityData.products.length > 0 && (
                <p>
                  Our {displayCity} projects include {cityData.products.slice(0, 5).join(', ')}, and more.
                  Each installation is performed by certified professionals using premium materials
                  from trusted manufacturers.
                </p>
              )}
            </div>

            {/* Service Areas Link */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`/locations/${city}-nc`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                <MapPin className="w-5 h-5" />
                View {displayCity} Service Area
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg border-2 border-primary hover:bg-primary/5 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      <section className="py-12 bg-white">
        <div className="container">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Explore Projects in Nearby Cities
          </h2>
          <div className="flex flex-wrap gap-3">
            {['charlotte', 'huntersville', 'cornelius', 'davidson', 'mooresville', 'denver', 'concord', 'matthews', 'gastonia', 'rock-hill']
              .filter(c => c !== city.toLowerCase())
              .slice(0, 8)
              .map((nearbyCity) => (
                <Link
                  key={nearbyCity}
                  href={`/projects/city/${nearbyCity}`}
                  className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition-colors capitalize"
                >
                  {nearbyCity.replace(/-/g, ' ')}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* City-specific FAQ Section for AEO */}
      <section className="py-12 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Roofing Questions for {displayCity} Homeowners
          </h2>
          <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
            <div className="border-b border-gray-200 pb-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-lg font-semibold text-gray-900 mb-2" itemProp="name">
                How many roofing projects has Best Roofing Now completed in {displayCity}?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-gray-600" itemProp="text">
                  Best Roofing Now has completed {cityData.total} verified roofing projects in {displayCity}, {state}.
                  Our work in {displayCity} includes {cityData.products.slice(0, 3).join(', ')}, and more.
                  Browse our photo gallery above to see examples of our craftsmanship.
                </p>
              </div>
            </div>
            <div className="border-b border-gray-200 pb-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-lg font-semibold text-gray-900 mb-2" itemProp="name">
                What roofing services are available in {displayCity}?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-gray-600" itemProp="text">
                  We provide comprehensive roofing services in {displayCity} including roof replacement, roof repair,
                  storm damage restoration, and new construction roofing. We install premium materials from GAF,
                  CertainTeed, and Owens Corning with manufacturer warranties.
                </p>
              </div>
            </div>
            <div className="border-b border-gray-200 pb-6 last:border-0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-lg font-semibold text-gray-900 mb-2" itemProp="name">
                How can I get a free roofing estimate in {displayCity}?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-gray-600" itemProp="text">
                  Getting a free roofing estimate in {displayCity} is easy! Call us at {SITE_CONFIG.phone} or
                  click the &quot;Get Free Estimate&quot; button above. We&apos;ll schedule a convenient time to inspect your roof
                  and provide a detailed written estimate with no obligation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema JSON-LD for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: `How many roofing projects has Best Roofing Now completed in ${displayCity}?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `Best Roofing Now has completed ${cityData.total} verified roofing projects in ${displayCity}, ${state}. Our work includes ${cityData.products.slice(0, 3).join(', ')}, and more.`,
                },
              },
              {
                '@type': 'Question',
                name: `What roofing services are available in ${displayCity}?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `We provide comprehensive roofing services in ${displayCity} including roof replacement, roof repair, storm damage restoration, and new construction roofing. We install premium materials from GAF, CertainTeed, and Owens Corning.`,
                },
              },
              {
                '@type': 'Question',
                name: `How can I get a free roofing estimate in ${displayCity}?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `Call us at ${SITE_CONFIG.phone} or visit our website. We'll schedule a convenient time to inspect your roof and provide a detailed written estimate with no obligation.`,
                },
              },
            ],
          }),
        }}
      />

      {/* CTA */}
      <CTASection
        title={`Ready for Your ${displayCity} Roofing Project?`}
        subtitle="Join your neighbors who trust us with their roofs. Get a free estimate today!"
      />
    </>
  );
}
