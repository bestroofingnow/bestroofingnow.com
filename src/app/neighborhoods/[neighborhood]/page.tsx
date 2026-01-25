import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, CheckCircle, ArrowRight, Home, Clock, Building, Ruler, Calendar, Trees, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { FAQ } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTASection';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { EstimateButton } from '@/components/estimate';
import {
  Neighborhood,
  NEIGHBORHOODS,
  getNeighborhood
} from '@/lib/neighborhoods';

// Charlotte neighborhood data with SEO-focused content for the target neighborhoods
const CHARLOTTE_NEIGHBORHOODS: Record<string, {
  distanceFromHQ: number;
  responseTime: string;
  typicalHomeAges: string;
  commonMaterials: string[];
  seoFocus: string[];
}> = {
  'ballantyne': {
    distanceFromHQ: 18,
    responseTime: '35-45 minutes',
    typicalHomeAges: '1991-present',
    commonMaterials: ['Architectural Shingles', 'Designer Shingles', 'Synthetic Slate'],
    seoFocus: ['ballantyne roofing contractor', 'ballantyne roof repair', 'ballantyne roof replacement'],
  },
  'southpark': {
    distanceFromHQ: 12,
    responseTime: '25-35 minutes',
    typicalHomeAges: '1960s-2020s',
    commonMaterials: ['Architectural Shingles', 'Designer Shingles', 'Slate', 'Metal'],
    seoFocus: ['southpark roofing contractor', 'southpark roof repair', 'southpark roofer'],
  },
  'myers-park': {
    distanceFromHQ: 10,
    responseTime: '20-30 minutes',
    typicalHomeAges: '1920s-1960s',
    commonMaterials: ['Slate', 'Cedar Shake', 'Architectural Shingles', 'Copper'],
    seoFocus: ['myers park roofing contractor', 'myers park historic roofing', 'myers park roof repair'],
  },
  'dilworth': {
    distanceFromHQ: 8,
    responseTime: '15-25 minutes',
    typicalHomeAges: '1891-1940s',
    commonMaterials: ['Slate', 'Architectural Shingles', 'Metal Standing Seam', 'Cedar Shake'],
    seoFocus: ['dilworth roofing contractor', 'dilworth historic roof repair', 'dilworth roofer'],
  },
  'plaza-midwood': {
    distanceFromHQ: 6,
    responseTime: '15-20 minutes',
    typicalHomeAges: '1920s-1960s',
    commonMaterials: ['Architectural Shingles', '3-Tab Shingles', 'Metal Standing Seam'],
    seoFocus: ['plaza midwood roofing contractor', 'plaza midwood roof repair', 'plaza midwood roofer'],
  },
  'noda': {
    distanceFromHQ: 5,
    responseTime: '10-20 minutes',
    typicalHomeAges: '1903-1940s (mill houses), 2010s-present (new)',
    commonMaterials: ['Architectural Shingles', '3-Tab Shingles', 'Metal Standing Seam'],
    seoFocus: ['noda roofing contractor', 'north davidson roofing', 'noda roof repair'],
  },
  'uptown': {
    distanceFromHQ: 7,
    responseTime: '15-25 minutes',
    typicalHomeAges: '2000s-present (residential)',
    commonMaterials: ['TPO Membrane', 'Modified Bitumen', 'Metal Standing Seam', 'Architectural Shingles'],
    seoFocus: ['uptown charlotte roofing', 'uptown condo roofing', 'center city roofing contractor'],
  },
  'university-city': {
    distanceFromHQ: 3,
    responseTime: '5-15 minutes',
    typicalHomeAges: '1970s-present',
    commonMaterials: ['Architectural Shingles', '3-Tab Shingles', 'Modified Bitumen'],
    seoFocus: ['university city roofing contractor', 'uncc area roofer', 'university city roof repair'],
  },
  'south-end': {
    distanceFromHQ: 9,
    responseTime: '20-30 minutes',
    typicalHomeAges: '2005-present (residential)',
    commonMaterials: ['TPO Membrane', 'Architectural Shingles', 'Metal Standing Seam'],
    seoFocus: ['south end roofing contractor', 'south end townhome roofing', 'south end roof repair'],
  },
};

// Generate neighborhood-specific FAQs
function generateNeighborhoodFAQs(neighborhood: Neighborhood, extraData: typeof CHARLOTTE_NEIGHBORHOODS['ballantyne']): { question: string; answer: string }[] {
  return [
    {
      question: `How much does a new roof cost in ${neighborhood.name}?`,
      answer: `Roof replacement costs in ${neighborhood.name} typically range from $8,000 to $25,000 for residential homes, depending on size, materials, and complexity. ${neighborhood.name} homes often feature ${neighborhood.homeStyles.toLowerCase()}, which may require specialized materials. We offer free inspections and detailed estimates for ${neighborhood.name} homeowners. Contact us at ${SITE_CONFIG.phone} for your free estimate.`,
    },
    {
      question: `What roofing materials are best for ${neighborhood.name} homes?`,
      answer: `${neighborhood.name} homes commonly use ${extraData.commonMaterials.join(', ')}. The best choice depends on your home's architectural style, HOA requirements, and budget. ${neighborhood.name}'s ${neighborhood.characteristics.split(',')[0].toLowerCase()} makes material selection important. We're certified installers of CertainTeed, GAF, and Owens Corning products suitable for ${neighborhood.name}.`,
    },
    {
      question: `How quickly can you respond to roof emergencies in ${neighborhood.name}?`,
      answer: `Best Roofing Now responds to ${neighborhood.name} emergencies within ${extraData.responseTime}. Located just ${extraData.distanceFromHQ} miles from our Charlotte headquarters at ${SITE_CONFIG.address.street}, we can quickly reach ${neighborhood.name} for storm damage, active leaks, and other urgent situations. Call our 24/7 emergency line at ${SITE_CONFIG.phone}.`,
    },
    {
      question: `Do you work with ${neighborhood.name} HOAs?`,
      answer: `Yes, we have extensive experience working with ${neighborhood.name} HOA requirements. ${neighborhood.localData.hoaInfo} We handle all HOA communications and ensure our work meets community standards. Our team understands ${neighborhood.name}'s architectural guidelines.`,
    },
    {
      question: `What are common roofing problems in ${neighborhood.name}?`,
      answer: `${neighborhood.roofingChallenges} Our team has completed numerous projects in ${neighborhood.name} and understands these specific challenges. We use advanced drone technology for thorough inspections and provide detailed assessments.`,
    },
    {
      question: `How long do roofs typically last in ${neighborhood.name}?`,
      answer: `Roof lifespan in ${neighborhood.name} depends on materials and maintenance. Architectural shingles last 25-30 years, while premium materials like slate can last 75-100 years. ${neighborhood.name} homes built ${extraData.typicalHomeAges} may have roofs approaching replacement age. Schedule a free inspection to assess your roof's condition.`,
    },
  ];
}

interface PageProps {
  params: Promise<{ neighborhood: string }>;
}

// Generate static params for all Charlotte neighborhoods
export async function generateStaticParams() {
  const charlotteNeighborhoods = NEIGHBORHOODS['charlotte-nc'] || [];

  // Include both existing neighborhoods and our target SEO neighborhoods
  const targetSlugs = [
    'ballantyne',
    'southpark',
    'myers-park',
    'dilworth',
    'plaza-midwood',
    'noda',
    'uptown',
    'university-city',
    'south-end',
  ];

  const existingSlugs = charlotteNeighborhoods.map(n => n.slug);
  const allSlugs = [...new Set([...existingSlugs, ...targetSlugs])];

  return allSlugs.map((slug) => ({
    neighborhood: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { neighborhood: neighborhoodSlug } = await params;
  const neighborhood = getNeighborhood('charlotte-nc', neighborhoodSlug);

  // Format display name (handle special cases like NoDa, SouthPark)
  const displayName = neighborhood?.name ||
    neighborhoodSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const title = `Roofing Services in ${displayName} Charlotte | Best Roofing Now`;
  const description = neighborhood
    ? `${displayName} roofing contractor serving Charlotte NC. Expert roof repair, replacement & storm damage services for ${displayName} homes. ${neighborhood.homeStyles.split(',')[0]}. Free inspections. Call ${SITE_CONFIG.phone}.`
    : `Professional roofing services in ${displayName}, Charlotte NC. Local roofer with 5-star rating. Roof repair, replacement, and storm damage. Free estimates! ${SITE_CONFIG.phone}`;

  const keywords = [
    `${displayName.toLowerCase()} roofing contractor`,
    `${displayName.toLowerCase()} roofer`,
    `${displayName.toLowerCase()} roof repair`,
    `${displayName.toLowerCase()} roof replacement`,
    `roofing company ${displayName.toLowerCase()} charlotte`,
    `roofer near me ${displayName.toLowerCase()}`,
    `storm damage ${displayName.toLowerCase()} nc`,
    `${displayName.toLowerCase()} charlotte roofing`,
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/neighborhoods/${neighborhoodSlug}`,
    },
    openGraph: {
      title: `${displayName} Roofing Contractor | Best Roofing Now Charlotte`,
      description: `Expert roofing services for ${displayName} homes. 5-star rated, BBB A+ accredited. Free inspections.`,
      url: `${SITE_CONFIG.url}/neighborhoods/${neighborhoodSlug}`,
      type: 'website',
      images: [
        {
          url: IMAGES.hero.roofTeam,
          width: 1200,
          height: 630,
          alt: `Roofing services in ${displayName}, Charlotte NC`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${displayName} Roofing | Best Roofing Now`,
      description: `Professional roofing for ${displayName} Charlotte. Free estimates.`,
    },
  };
}

export default async function NeighborhoodPage({ params }: PageProps) {
  const { neighborhood: neighborhoodSlug } = await params;
  const neighborhood = getNeighborhood('charlotte-nc', neighborhoodSlug);
  const extraData = CHARLOTTE_NEIGHBORHOODS[neighborhoodSlug];

  // If we don't have neighborhood data, show 404
  if (!neighborhood && !extraData) {
    notFound();
  }

  // Get display name
  const displayName = neighborhood?.name ||
    neighborhoodSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  // Generate FAQs if we have full neighborhood data
  const faqs = neighborhood && extraData
    ? generateNeighborhoodFAQs(neighborhood, extraData)
    : [
        {
          question: `Do you serve ${displayName}, Charlotte?`,
          answer: `Yes! Best Roofing Now proudly serves ${displayName} and all Charlotte neighborhoods. We offer free roof inspections, repairs, replacements, and storm damage restoration. Call us at ${SITE_CONFIG.phone}.`,
        },
        {
          question: `How quickly can you get to ${displayName}?`,
          answer: `We can typically reach ${displayName} within 30-45 minutes from our Charlotte headquarters. For emergencies, we prioritize rapid response. Call ${SITE_CONFIG.phone} for immediate assistance.`,
        },
      ];

  const pageUrl = `${SITE_CONFIG.url}/neighborhoods/${neighborhoodSlug}`;
  const responseTime = extraData?.responseTime || '30-45 minutes';
  const distanceFromHQ = extraData?.distanceFromHQ || 10;

  // Schema for Service focused on the neighborhood
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}/#service`,
    name: `Roofing Services in ${displayName}`,
    description: neighborhood?.description || `Professional roofing services for ${displayName}, Charlotte NC homes. Roof repair, replacement, and storm damage restoration.`,
    url: pageUrl,
    serviceType: 'Roofing Services',
    provider: {
      '@type': 'RoofingContractor',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${SITE_CONFIG.address.street} ${SITE_CONFIG.address.suite}`,
        addressLocality: SITE_CONFIG.address.city,
        addressRegion: SITE_CONFIG.address.state,
        postalCode: SITE_CONFIG.address.zip,
        addressCountry: 'US',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: SITE_CONFIG.googleRating,
        reviewCount: SITE_CONFIG.googleReviewCount,
        bestRating: 5,
        worstRating: 1,
      },
    },
    areaServed: {
      '@type': 'Neighborhood',
      name: displayName,
      containedInPlace: {
        '@type': 'City',
        name: 'Charlotte',
        containedInPlace: {
          '@type': 'State',
          name: 'North Carolina',
        },
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Roofing Services for ${displayName}`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Roof Repair',
            description: `Professional roof repair services in ${displayName}`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Roof Replacement',
            description: `Complete roof replacement in ${displayName}`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Storm Damage Repair',
            description: `Storm damage restoration in ${displayName}`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Free Roof Inspection',
            description: `Complimentary roof inspections for ${displayName} homeowners`,
          },
        },
      ],
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Distance from Charlotte HQ',
        value: `${distanceFromHQ} miles`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Typical Response Time',
        value: responseTime,
      },
    ],
  };

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name={`Roofing Services in ${displayName} Charlotte | Best Roofing Now`}
        description={neighborhood?.description || `Professional roofing contractor serving ${displayName}, Charlotte NC.`}
        url={pageUrl}
        primaryImage={IMAGES.hero.roofTeam}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Locations', url: `${SITE_CONFIG.url}/locations` },
          { name: 'Charlotte, NC', url: `${SITE_CONFIG.url}/locations/charlotte-nc` },
          { name: displayName, url: pageUrl },
        ]}
      />

      {/* Service Schema with areaServed set to neighborhood */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <FAQSchema faqs={faqs} />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Locations', url: `${SITE_CONFIG.url}/locations` },
          { name: 'Charlotte, NC', url: `${SITE_CONFIG.url}/locations/charlotte-nc` },
          { name: displayName, url: pageUrl },
        ]}
      />

      {/* Visual Breadcrumbs */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs
            items={[
              { name: 'Locations', href: '/locations' },
              { name: 'Charlotte, NC', href: '/locations/charlotte-nc' },
              { name: displayName, href: `/neighborhoods/${neighborhoodSlug}` },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 lg:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-medium text-white/90">Charlotte Neighborhood</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {displayName} Roofing Contractor
            </h1>
            <p className="text-xl text-white/90 mb-6">
              {neighborhood?.description ||
                `Professional roofing services for ${displayName}, Charlotte NC. Expert roof repair, replacement, and storm damage restoration from Charlotte's top-rated roofing company.`}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="flex justify-center mb-2">
                  <MapPin className="w-6 h-6" />
                </div>
                <p className="text-2xl font-bold">{distanceFromHQ}</p>
                <p className="text-sm text-white/80">Miles from HQ</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="w-6 h-6" />
                </div>
                <p className="text-lg font-bold">{responseTime}</p>
                <p className="text-sm text-white/80">Response Time</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="flex justify-center mb-2">
                  <Star className="w-6 h-6" />
                </div>
                <p className="text-2xl font-bold">{SITE_CONFIG.googleRating}</p>
                <p className="text-sm text-white/80">Google Rating</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="w-6 h-6" />
                </div>
                <p className="text-2xl font-bold">A+</p>
                <p className="text-sm text-white/80">BBB Rating</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <EstimateButton
                variant="accent"
                className="bg-accent hover:bg-accent-dark text-white"
              >
                Get Free Estimate in {displayName}
              </EstimateButton>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={<Phone className="w-5 h-5" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Details Section */}
      {neighborhood && (
        <section className="section">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Roofing Services in {displayName}
                </h2>

                {/* Home Styles */}
                <div className="mb-6">
                  <h3 className="font-bold text-dark mb-2 flex items-center gap-2">
                    <Home className="w-5 h-5 text-primary" />
                    Architectural Styles in {displayName}
                  </h3>
                  <p className="text-gray">{neighborhood.homeStyles}</p>
                </div>

                {/* Home Ages */}
                <div className="mb-6">
                  <h3 className="font-bold text-dark mb-2 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Typical Home Ages
                  </h3>
                  <p className="text-gray">
                    {displayName} homes were primarily built {extraData?.typicalHomeAges || neighborhood.housingStats.medianAge}.
                    {neighborhood.housingStats.priceRange && ` Home values typically range from ${neighborhood.housingStats.priceRange}.`}
                  </p>
                </div>

                {/* Common Roofing Materials */}
                <div className="mb-6">
                  <h3 className="font-bold text-dark mb-2 flex items-center gap-2">
                    <Ruler className="w-5 h-5 text-primary" />
                    Common Roofing Materials
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.housingStats.commonRoofTypes.map((material) => (
                      <span
                        key={material}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tree Canopy */}
                <div className="mb-6">
                  <h3 className="font-bold text-dark mb-2 flex items-center gap-2">
                    <Trees className="w-5 h-5 text-primary" />
                    Tree Canopy
                  </h3>
                  <p className="text-gray">{neighborhood.localData.treeCanopy}</p>
                </div>
              </div>

              <div>
                {/* Roofing Challenges */}
                <div className="bg-accent/5 rounded-xl p-6 border border-accent/10 mb-6">
                  <h3 className="font-bold text-dark mb-4">
                    Roofing Challenges in {displayName}
                  </h3>
                  <p className="text-gray">{neighborhood.roofingChallenges}</p>
                </div>

                {/* Our Expertise */}
                <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                  <h3 className="font-bold text-dark mb-4">
                    Why Choose Us for {displayName}
                  </h3>
                  <ul className="space-y-3">
                    {neighborhood.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Our Services in {displayName}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Roof Repair in {displayName}</h3>
              <p className="text-gray text-sm mb-4">
                Fast, reliable repairs for leaks, storm damage, and wear. Our {displayName} roofing team responds quickly with {responseTime} response times.
              </p>
              <Link href="/services/roof-repair" className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Roof Replacement in {displayName}</h3>
              <p className="text-gray text-sm mb-4">
                Complete roof replacement with premium materials and lifetime warranties. Expert installation for {displayName}'s unique home styles.
              </p>
              <Link href="/services/roof-replacement" className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Storm Damage in {displayName}</h3>
              <p className="text-gray text-sm mb-4">
                24/7 emergency response and insurance claim assistance. {neighborhood?.localData.stormHistory?.split('.')[0] || `${displayName} experiences severe storms that can damage roofs`}.
              </p>
              <Link href="/services/storm-damage" className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Free Roof Inspection</h3>
              <p className="text-gray text-sm mb-4">
                Comprehensive drone inspections with detailed photo documentation. Know your roof's condition before problems arise.
              </p>
              <Link href="/services/roof-inspection" className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Gutter Services</h3>
              <p className="text-gray text-sm mb-4">
                Professional gutter installation and repair. {neighborhood?.localData.treeCanopy?.includes('Heavy') ? 'Essential for managing debris from the heavy tree canopy.' : 'Keep your home protected from water damage.'}
              </p>
              <Link href="/gutter-services" className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Commercial Roofing</h3>
              <p className="text-gray text-sm mb-4">
                Flat roofs, metal roofing, and TPO systems for {displayName} businesses and multi-family properties.
              </p>
              <Link href="/commercial-roofing-services" className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="section">
        <div className="container">
          <div className="bg-primary/5 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Fast Response to {displayName}
                </h2>
                <p className="text-gray mb-6">
                  Located just {distanceFromHQ} miles from our Charlotte headquarters at {SITE_CONFIG.address.street},
                  our team can reach {displayName} in approximately {responseTime}. Whether you need an emergency
                  repair or a scheduled inspection, we're your local roofing experts.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Building className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark">Charlotte Headquarters</p>
                      <p className="text-sm text-gray">{SITE_CONFIG.address.full}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark">24/7 Emergency Service</p>
                      <p className="text-sm text-gray">Available for urgent roof repairs</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark">{SITE_CONFIG.phone}</p>
                      <p className="text-sm text-gray">Call for immediate assistance</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src={IMAGES.hero.roofTeam}
                  alt={`Best Roofing Now team serving ${displayName}`}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            {displayName} Roofing FAQs
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQ faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Nearby Neighborhoods */}
      {neighborhood?.nearbyNeighborhoods && neighborhood.nearbyNeighborhoods.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="text-2xl font-bold text-primary text-center mb-6">
              We Also Serve Nearby Neighborhoods
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {neighborhood.nearbyNeighborhoods.map((slug) => {
                const nearbyNeighborhood = getNeighborhood('charlotte-nc', slug);
                const name = nearbyNeighborhood?.name ||
                  slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
                return (
                  <Link
                    key={slug}
                    href={`/neighborhoods/${slug}`}
                    className="bg-white border border-gray-200 rounded-full px-4 py-2 text-gray hover:text-primary hover:border-primary transition-colors"
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Back to Charlotte Link */}
      <section className="py-8 border-t border-gray-200">
        <div className="container text-center">
          <Link
            href="/locations/charlotte-nc"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Charlotte, NC Roofing Services
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={`Ready for Your Free Roof Inspection in ${displayName}?`}
        subtitle={`Get a comprehensive roof assessment from Charlotte's top-rated roofing contractor. Our team knows ${displayName} homes and can provide expert recommendations for your specific needs.`}
      />
    </>
  );
}
