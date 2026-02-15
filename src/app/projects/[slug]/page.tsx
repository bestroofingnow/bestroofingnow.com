import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Camera, Calendar, ChevronRight, ArrowLeft, ExternalLink, Shield, Star, CloudRain, Home, Wrench } from 'lucide-react';
import { SITE_CONFIG, LOCATIONS } from '@/lib/constants';
import { getRoofingContractorIdentity } from '@/lib/schema-helpers';
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
  slug: string;
  city: string;
  state: string;
  county?: string;
  zip?: string;
  latitude?: number;
  longitude?: number;
  product?: string;
  productColor?: string;
  serviceType?: string;
  completedDate: string;
  photoCount: number;
  photos: ProjectPhoto[];
}

// Cached export data to avoid re-reading the file
let cachedExportData: { projects: any[] } | null = null;

function loadExportData(): any[] {
  if (cachedExportData) return cachedExportData.projects;
  try {
    const fs = require('fs');
    const path = require('path');
    const exportPath = path.join(process.cwd(), 'pmi-export.json');
    if (fs.existsSync(exportPath)) {
      cachedExportData = JSON.parse(fs.readFileSync(exportPath, 'utf-8'));
      return cachedExportData!.projects;
    }
  } catch (e) {
    console.error('Failed to load pmi-export.json:', e);
  }
  return [];
}

// Load project by SEO slug or pmiId
async function getProject(slugParam: string): Promise<Project | null> {
  const projects = loadExportData();
  // Search by SEO-friendly slug first, then fall back to pmiId
  return projects.find((p: any) => p.slug === slugParam) ||
         projects.find((p: any) => p.pmiId === slugParam) ||
         null;
}

// Get related projects from same city
async function getRelatedProjects(city: string, excludeId: string): Promise<Project[]> {
  const projects = loadExportData();
  return projects
    .filter((p: any) => p.city === city && p.pmiId !== excludeId && p.photos?.length > 0)
    .slice(0, 4);
}

// Get city project count
function getCityProjectCount(city: string): number {
  const projects = loadExportData();
  return projects.filter((p: any) => p.city === city).length;
}

// Get location data from LOCATIONS constant
function getLocationData(city: string) {
  return LOCATIONS.find(l => l.city.toLowerCase() === city.toLowerCase());
}

// Generate static params using SEO-friendly slugs
export async function generateStaticParams() {
  const projects = loadExportData();
  return projects
    .filter((p: any) => p.photos && p.photos.length > 0)
    .map((p: any) => ({
      slug: p.slug || p.pmiId,
    }));
}

// Generate metadata with hyper-local SEO optimization
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  const location = getLocationData(project.city);
  const county = project.county || location?.county;
  const cityState = `${project.city}, ${project.state}`;
  const productType = project.product || 'Roofing';
  const serviceType = project.serviceType || 'roof installation';
  const projectSlug = project.slug || project.pmiId;

  const title = `${productType} in ${project.city}, NC | ${project.photos.length} Photos | ${SITE_CONFIG.name}`;
  const description = `See ${project.photos.length} verified photos from our ${productType.toLowerCase()} project in ${cityState}${county ? `, ${county} County` : ''}. Professional ${serviceType} by Charlotte's top-rated roofer. BBB A+ rated, veteran-owned. Free estimates: ${SITE_CONFIG.phone}.`;

  const keywords = [
    `${productType.toLowerCase()} ${project.city} nc`,
    `roofer ${project.city} nc`,
    `roofing contractor ${project.city}`,
    `${serviceType} ${project.city}`,
    `roof project ${project.city} nc`,
    `roofing company ${project.city}`,
    county ? `roofing ${county} county nc` : '',
    `${productType.toLowerCase()} installation near me`,
    `best roofer ${project.city}`,
  ].filter(k => k);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/projects/${projectSlug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_CONFIG.url}/projects/${projectSlug}`,
      type: 'article',
      images: project.photos[0]?.url
        ? [{ url: project.photos[0].url, width: 1200, height: 630, alt: `${productType} project in ${cityState}` }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

// Local area roofing context based on city
function getAreaContext(city: string, county?: string): { description: string; challenges: string[]; tip: string } {
  const contexts: Record<string, { description: string; challenges: string[]; tip: string }> = {
    'Charlotte': {
      description: 'Charlotte homeowners face unique roofing challenges due to the city\'s humid subtropical climate. With 44 inches of annual rainfall, summer temperatures exceeding 90\u00B0F, and occasional severe storms, roofs in the Queen City need materials that can handle heat, moisture, and wind.',
      challenges: ['Heavy summer thunderstorms with potential hail', 'High humidity causing algae and moss growth', 'UV degradation from intense summer sun', 'Wind damage from severe weather events'],
      tip: 'We recommend algae-resistant, impact-rated shingles for Charlotte homes to combat the humid climate and storm exposure.',
    },
    'Huntersville': {
      description: 'Huntersville sits at the gateway to Lake Norman, where lake-effect weather patterns can intensify storms. The growing community features a mix of newer subdivisions and established neighborhoods, each with distinct roofing needs.',
      challenges: ['Lake-effect weather amplifying storms', 'HOA architectural requirements for roofing materials', 'Newer construction with builder-grade materials needing upgrades', 'Tree coverage causing debris accumulation'],
      tip: 'Many Huntersville HOAs require architectural shingles in specific color palettes. We work directly with your HOA to ensure compliance.',
    },
    'Cornelius': {
      description: 'Cornelius is a lakefront community on Lake Norman where waterfront and near-lake homes face increased weather exposure. The town\'s mix of luxury lakefront properties and family neighborhoods requires versatile roofing solutions.',
      challenges: ['Increased wind exposure near Lake Norman', 'Salt and moisture from lake proximity', 'Higher-end homes requiring premium materials', 'Steep roof pitches common in lakefront designs'],
      tip: 'Lakefront homes in Cornelius benefit from wind-rated shingles (130+ MPH) and enhanced ventilation to combat lake moisture.',
    },
    'Mooresville': {
      description: 'Known as Race City USA, Mooresville combines small-town charm with rapid growth. The area\'s mix of historic downtown homes and modern Lake Norman estates creates diverse roofing demands.',
      challenges: ['Wide range of home ages and styles', 'Lake Norman weather exposure for waterfront properties', 'Rapid growth means many homes hitting first roof replacement age', 'Varying soil conditions affecting foundation and roof stress'],
      tip: 'Mooresville homes built in the 2000s boom are now reaching the 20-year mark\u2014the ideal time for a proactive roof inspection before leaks start.',
    },
    'Concord': {
      description: 'Concord, the seat of Cabarrus County, features growing residential neighborhoods alongside commercial corridors. The area sees its share of severe weather rolling through the Piedmont.',
      challenges: ['Cabarrus County storm corridor exposure', 'Mix of residential and commercial roofing needs', 'Older neighborhoods with aging roof systems', 'Summer heat stress on roofing materials'],
      tip: 'Concord homeowners should consider impact-resistant shingles that may qualify for insurance discounts in the storm-prone Cabarrus County area.',
    },
    'Davidson': {
      description: 'Davidson is an upscale college town on Lake Norman with strict architectural standards. The historic downtown and newer lakefront developments both require careful attention to roofing aesthetics and performance.',
      challenges: ['Strict town architectural review requirements', 'Historic district preservation standards', 'Lake Norman weather exposure', 'Premium homes requiring high-end materials'],
      tip: 'Davidson\'s architectural review board may require specific materials and colors. We handle the approval process to streamline your project.',
    },
    'Denver': {
      description: 'Denver sits on the western shore of Lake Norman in Lincoln County. The community features many lakefront and lake-access homes that face direct weather exposure from the lake.',
      challenges: ['Direct Lake Norman weather exposure on the western shore', 'Rural area with tall trees creating debris risk', 'Lincoln County storm patterns', 'Mix of waterfront and inland roofing needs'],
      tip: 'Denver\'s western exposure to Lake Norman means homes here get the brunt of storm systems moving east. Enhanced wind protection is essential.',
    },
    'Matthews': {
      description: 'Matthews is a charming suburb southeast of Charlotte with tree-lined neighborhoods and a vibrant downtown. The mature tree canopy, while beautiful, creates specific roofing maintenance needs.',
      challenges: ['Heavy tree canopy dropping leaves and debris', 'Older neighborhoods with original roofs nearing end of life', 'Shade-induced moss and algae growth', 'Storm debris from mature trees'],
      tip: 'Matthews\' beautiful tree canopy means regular gutter cleaning and moss-resistant shingles are important for roof longevity.',
    },
    'Mint Hill': {
      description: 'Mint Hill maintains a semi-rural character on Charlotte\'s eastern edge with larger lots and established neighborhoods. Many homes feature older roofing systems that benefit from modern material upgrades.',
      challenges: ['Larger roof areas on spacious lots', 'Mature trees and rural debris exposure', 'Older homes needing comprehensive roof replacement', 'Limited contractor availability in outer suburbs'],
      tip: 'Mint Hill\'s larger homes often mean bigger roof areas. We provide detailed measurements using satellite imaging for accurate estimates.',
    },
    'Monroe': {
      description: 'Monroe is the seat of Union County, a growing area south of Charlotte. The mix of historic homes near the courthouse and newer developments creates varied roofing needs across the community.',
      challenges: ['Union County storm corridor', 'Historic homes requiring careful restoration', 'Fast-growing subdivisions with builder-grade materials', 'Distance from Charlotte means fewer contractor options'],
      tip: 'Monroe homeowners in newer subdivisions should have their builder-grade roofs inspected around the 10-year mark for early signs of wear.',
    },
    'Rock Hill': {
      description: 'Rock Hill is a growing city just across the South Carolina border in York County. The area\'s lower cost of living attracts Charlotte commuters, and its roofing market benefits from our cross-state service area.',
      challenges: ['South Carolina building codes differ from NC', 'Southern exposure increasing UV damage', 'Growing community with diverse housing stock', 'Cross-border insurance considerations'],
      tip: 'We\'re licensed in both NC and SC, so Rock Hill homeowners get the same quality service and warranty protection as our Charlotte customers.',
    },
    'Fort Mill': {
      description: 'Fort Mill is one of the fastest-growing communities in the Charlotte metro, with numerous new subdivisions. Many homes are reaching the age where their original builder-grade roofs need attention.',
      challenges: ['Builder-grade materials reaching end of warranty', 'HOA requirements in planned communities', 'South Carolina code compliance', 'Rapid growth straining local contractor availability'],
      tip: 'Fort Mill homes built during the 2005-2015 boom are now due for their first roof assessment. Early inspection can prevent costly damage.',
    },
    'Gastonia': {
      description: 'Gastonia is the seat of Gaston County, west of Charlotte. The city features a wide range of home styles from historic mill houses to modern developments, each with unique roofing requirements.',
      challenges: ['Gaston County storm exposure from western weather systems', 'Historic mill homes requiring specialized roofing', 'Wide range of home ages and conditions', 'Cost-conscious market requiring value-focused solutions'],
      tip: 'Gastonia\'s position west of Charlotte means storm systems hit here first. We recommend proactive inspections after every major storm event.',
    },
    'Kannapolis': {
      description: 'Kannapolis is a revitalized city in Cabarrus County, home to the minor league stadium district and growing residential areas. The mix of renovated historic homes and new construction creates diverse roofing opportunities.',
      challenges: ['Cabarrus County severe weather exposure', 'Mix of renovated historic and new construction', 'Downtown revitalization affecting roofing standards', 'Industrial heritage homes with unique roof structures'],
      tip: 'Kannapolis\' revitalization means many renovated homes need roofing that matches both historic character and modern performance standards.',
    },
  };

  // Default for cities not in the map
  const defaultContext = {
    description: `${city} homeowners in the greater Charlotte metro area face the challenges of North Carolina's humid subtropical climate. With significant annual rainfall, summer heat, and seasonal storms, choosing the right roofing materials and contractor is essential for long-term home protection.`,
    challenges: ['Seasonal severe weather and storm exposure', 'High humidity promoting algae and moisture issues', 'Temperature extremes affecting material longevity', 'Wind and hail risk during storm season'],
    tip: `As a locally-owned roofing company serving ${city} and the greater Charlotte area, we understand the specific weather patterns and building requirements in your community.`,
  };

  return contexts[city] || defaultContext;
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
  const location = getLocationData(project.city);
  const county = project.county || location?.county;
  const cityProjectCount = getCityProjectCount(project.city);
  const areaContext = getAreaContext(project.city, county);
  const projectSlug = project.slug || project.pmiId;
  const citySlug = project.city.toLowerCase().replace(/\s+/g, '-');

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: `${project.city}`, url: `/projects/city/${citySlug}` },
    { name: `${project.product || 'Project'}`, url: `/projects/${projectSlug}` },
  ];

  // JSON-LD structured data - ImageGallery with enhanced local signals
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: `${project.product || 'Roofing'} Project in ${project.city}, ${project.state}`,
    description: `Professional ${project.product || 'roofing'} project completed in ${project.city}, ${project.state}${county ? ` (${county} County)` : ''}`,
    image: project.photos.map(p => p.url),
    numberOfItems: project.photos.length,
    datePublished: project.completedDate,
    url: `${SITE_CONFIG.url}/projects/${projectSlug}`,
    author: getRoofingContractorIdentity(),
    contentLocation: {
      '@type': 'Place',
      name: `${project.city}, ${project.state}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: project.city,
        addressRegion: project.state,
        ...(project.zip ? { postalCode: project.zip } : {}),
        ...(county ? { addressCounty: county } : {}),
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

  // JSON-LD for Service with enhanced local business signals
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${project.serviceType || project.product || 'Roofing'} in ${project.city}, ${project.state}`,
    description: `Professional ${project.product || 'roofing'} completed in ${project.city}, ${project.state}. View ${project.photos.length} verified project photos.`,
    provider: {
      ...getRoofingContractorIdentity(),
      areaServed: {
        '@type': 'City',
        name: project.city,
        containedInPlace: {
          '@type': 'State',
          name: project.state === 'NC' ? 'North Carolina' : 'South Carolina',
        },
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
  };

  return (
    <>
      {/* Enhanced Schema Markup */}
      <BreadcrumbSchema items={breadcrumbs} />
      <ProjectSchema
        project={{
          slug: projectSlug,
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
        county={county}
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
      <EnhancedSpeakableSchema
        pageUrl={`${SITE_CONFIG.url}/projects/${projectSlug}`}
        pageName={`${project.product || 'Roofing'} Project in ${project.city}, ${project.state} | Best Roofing Now`}
        cssSelectors={['h1', '.project-description', '.area-context']}
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
                {project.product || 'Roofing'} Project in {project.city}, {project.state}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <span className="flex items-center gap-1">
                  <MapPin className="w-5 h-5 text-primary" />
                  {project.city}, {project.state}
                  {county && ` \u2022 ${county} County`}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-5 h-5 text-primary" />
                  {formatDate(project.completedDate)}
                </span>
                <span className="flex items-center gap-1">
                  <Camera className="w-5 h-5 text-primary" />
                  {project.photos.length} Verified Photos
                </span>
              </div>
            </div>

            {/* Project Details Card */}
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
                  <p>
                    <span className="text-gray-600">Location:</span>{' '}
                    <span className="font-medium">{project.city}, {project.state}{project.zip ? ` ${project.zip}` : ''}</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Description - SEO-rich content */}
      <section className="py-6 bg-white border-b">
        <div className="container">
          <p className="project-description text-gray-700 text-lg max-w-4xl">
            This {project.product || 'professional roofing'} project was completed in{' '}
            <strong>{project.city}, {project.state}</strong>
            {county && ` (${county} County)`} in {formatDate(project.completedDate)}.
            {' '}{SITE_CONFIG.name} installed{' '}
            {project.product ? <strong>{project.product}</strong> : 'quality roofing materials'}{' '}
            {project.productColor && `in ${project.productColor} `}
            to protect this {project.city} home for decades to come.
            Browse {project.photos.length} verified photos of the completed installation below.
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-8">
        <div className="container">
          <ProjectGallery photos={project.photos} projectTitle={`${project.product || 'Roofing'} Project in ${project.city}`} />
        </div>
      </section>

      {/* Area Context - Local SEO Content */}
      <section className="py-10 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Local Area Info */}
            <div className="area-context">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Roofing in {project.city}, {project.state}
              </h2>
              <p className="text-gray-600 mb-4">
                {areaContext.description}
              </p>

              {/* Local Roofing Challenges */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CloudRain className="w-5 h-5 text-primary" />
                {project.city} Roofing Challenges
              </h3>
              <ul className="space-y-2 mb-6">
                {areaContext.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                    <Wrench className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {challenge}
                  </li>
                ))}
              </ul>

              {/* Pro Tip */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-700">
                  <strong className="text-primary">Local Pro Tip:</strong> {areaContext.tip}
                </p>
              </div>

              {/* Internal Links */}
              <div className="space-y-3">
                <Link
                  href={`/projects/city/${citySlug}`}
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  <MapPin className="w-4 h-4" />
                  View all {cityProjectCount} projects in {project.city}
                  <ChevronRight className="w-4 h-4" />
                </Link>

                <div className="block">
                  <Link
                    href={`/locations/${citySlug}-nc`}
                    className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    <Home className="w-4 h-4" />
                    {project.city} Roofing Services
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

                {project.product && (
                  <div className="block">
                    <Link
                      href={project.product.toLowerCase().includes('certainteed') ? '/certainteed-shingles-charlotte-nc'
                        : project.product.toLowerCase().includes('gaf') ? '/brands/gaf'
                        : project.product.toLowerCase().includes('owens') ? '/brands/owens-corning'
                        : project.product.toLowerCase().includes('metal') ? '/metal-roofing-services'
                        : '/asphalt-shingle-roofing-charlotte-nc'}
                      className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Learn more about {project.product}
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}

                <div className="block">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    <Camera className="w-4 h-4" />
                    Browse all 230+ project photos
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Map + Trust Signals */}
            <div className="space-y-6">
              {/* Mini Map */}
              {project.latitude && project.longitude && (
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <iframe
                    title={`Map of roofing project location in ${project.city}, ${project.state}`}
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${project.longitude - 0.02}%2C${project.latitude - 0.02}%2C${project.longitude + 0.02}%2C${project.latitude + 0.02}&layer=mapnik&marker=${project.latitude}%2C${project.longitude}`}
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    loading="lazy"
                  />
                  <div className="p-4 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 inline mr-1 text-primary" />
                    Project completed in {project.city}, {project.state}
                    {county && ` \u2022 ${county} County`}
                  </div>
                </div>
              )}

              {/* Trust Signals */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Why Homeowners in {project.city} Choose Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>BBB A+ rated &amp; veteran-owned roofing company</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <span>5-star rated with 100+ verified reviews</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{cityProjectCount}+ completed projects in {project.city} alone</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <Camera className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Every project documented with verified photos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              More Roofing Projects in {project.city}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProjects.map((related: any) => {
                const thumbnail = related.photos?.[0]?.thumbnailUrl || related.photos?.[0]?.url;
                const relatedSlug = related.slug || related.pmiId;

                return (
                  <Link
                    key={related.pmiId}
                    href={`/projects/${relatedSlug}`}
                    className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden border border-gray-100"
                  >
                    <div className="relative aspect-square">
                      {thumbnail ? (
                        <Image
                          src={thumbnail}
                          alt={`${related.product || 'Roofing'} project in ${related.city}, ${related.state}`}
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
                        {related.city} &bull; {formatDate(related.completedDate)}
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
        title={`Need a Roofer in ${project.city}?`}
        subtitle={`Get a free estimate for your ${project.city} home. We've completed ${cityProjectCount}+ projects in your area.`}
      />
    </>
  );
}
