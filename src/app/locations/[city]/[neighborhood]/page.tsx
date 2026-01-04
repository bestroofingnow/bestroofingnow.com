import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, CheckCircle, ArrowRight, Home, Calendar, Shield } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { FAQ } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG, LOCATIONS } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { getNeighborhood, getAllNeighborhoodParams, getNeighborhoodsByCity, Neighborhood } from '@/lib/neighborhoods';
import { generateNeighborhoodFAQs } from '@/lib/faqs';

interface PageProps {
  params: Promise<{ city: string; neighborhood: string }>;
}

export async function generateStaticParams() {
  return getAllNeighborhoodParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city, neighborhood: neighborhoodSlug } = await params;
  const neighborhoodData = getNeighborhood(city, neighborhoodSlug);
  const location = LOCATIONS.find((l) => l.slug === city);

  if (!neighborhoodData || !location) {
    return { title: 'Neighborhood Not Found' };
  }

  const title = `Roofing Company in ${neighborhoodData.name}, ${location.city} ${location.state} | Best Roofing Now`;
  const description = `Professional roofing services in ${neighborhoodData.name}, ${location.city}. Roof repair, replacement, and inspection for ${neighborhoodData.homeStyles.split(',')[0].toLowerCase()} and more. Free estimates! Call (704) 605-6047.`;

  return {
    title,
    description,
    keywords: [
      `${neighborhoodData.name} roofing company`,
      `roof repair ${neighborhoodData.name} ${location.city}`,
      `roof replacement ${neighborhoodData.name}`,
      `roofers near ${neighborhoodData.name}`,
      `${location.city} ${location.state} roofer`,
    ],
    alternates: {
      canonical: `${SITE_CONFIG.url}/locations/${city}/${neighborhoodSlug}`,
    },
    openGraph: {
      title: `Roofing Services in ${neighborhoodData.name}, ${location.city}`,
      description: `Professional roofing for ${neighborhoodData.name} homes. ${neighborhoodData.highlights[0]}. Free inspections available.`,
      url: `${SITE_CONFIG.url}/locations/${city}/${neighborhoodSlug}`,
    },
  };
}

export default async function NeighborhoodPage({ params }: PageProps) {
  const { city, neighborhood: neighborhoodSlug } = await params;
  const neighborhoodData = getNeighborhood(city, neighborhoodSlug);
  const location = LOCATIONS.find((l) => l.slug === city);

  if (!neighborhoodData || !location) {
    notFound();
  }

  // Get FAQs for this neighborhood
  const neighborhoodFAQs = generateNeighborhoodFAQs(
    neighborhoodData.name,
    location.city,
    location.state,
    neighborhoodData.homeStyles
  );

  // Get nearby neighborhoods for internal linking
  const allCityNeighborhoods = getNeighborhoodsByCity(city);
  const nearbyNeighborhoods = neighborhoodData.nearbyNeighborhoods
    .map(slug => allCityNeighborhoods.find(n => n.slug === slug))
    .filter((n): n is Neighborhood => n !== undefined);

  // Get other neighborhoods in the same city for the "More Neighborhoods" section
  const otherNeighborhoods = allCityNeighborhoods
    .filter(n => n.slug !== neighborhoodSlug)
    .slice(0, 8);

  return (
    <>
      <FAQSchema faqs={neighborhoodFAQs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Service Areas', url: `${SITE_CONFIG.url}/locations` },
          { name: `${location.city}, ${location.state}`, url: `${SITE_CONFIG.url}/locations/${city}` },
          { name: neighborhoodData.name, url: `${SITE_CONFIG.url}/locations/${city}/${neighborhoodSlug}` },
        ]}
      />

      {/* Visual Breadcrumbs */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs
            items={[
              { name: 'Locations', href: '/locations' },
              { name: `${location.city}, ${location.state}`, href: `/locations/${city}` },
              { name: neighborhoodData.name, href: `/locations/${city}/${neighborhoodSlug}` },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">{neighborhoodData.name}, {location.city}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Roofing Company in {neighborhoodData.name}, {location.city} {location.state}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Trusted roofing services for {neighborhoodData.name} homeowners. We understand the unique character
              of your neighborhood and provide expert care for {neighborhoodData.homeStyles.split(',')[0].toLowerCase()} and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                className="bg-accent hover:bg-accent-dark text-white"
              >
                Get Free Estimate
              </Button>
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

      {/* About the Neighborhood */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                About {neighborhoodData.name}
              </h2>
              <div className="prose prose-lg text-gray mb-6">
                <p>{neighborhoodData.description}</p>
              </div>

              {/* Neighborhood Details */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-light rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Home className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-dark">Home Styles</span>
                  </div>
                  <p className="text-sm text-gray">{neighborhoodData.homeStyles}</p>
                </div>
                <div className="bg-light rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-dark">Established</span>
                  </div>
                  <p className="text-sm text-gray">{neighborhoodData.established}</p>
                </div>
              </div>

              <div className="bg-light rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-dark">Neighborhood Character</span>
                </div>
                <p className="text-sm text-gray">{neighborhoodData.characteristics}</p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={IMAGES.houses.house1}
                  alt={`Roofing services in ${neighborhoodData.name}, ${location.city}`}
                  width={600}
                  height={400}
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roofing Challenges Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Roofing Considerations in {neighborhoodData.name}
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <p className="text-gray text-lg leading-relaxed">
                {neighborhoodData.roofingChallenges}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Why {neighborhoodData.name} Homeowners Choose Best Roofing Now
              </h2>
              <ul className="space-y-4 mb-8">
                {neighborhoodData.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-dark">{highlight}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-dark">5.0 star Google rating with {SITE_CONFIG.googleReviewCount}+ reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-dark">BBB A+ accredited roofing company</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-dark">Veteran-founded, family owned and operated</span>
                </li>
              </ul>
              <Button href="/contact">
                Schedule Your Free Inspection
              </Button>
            </div>

            <div className="bg-light rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary mb-6">
                Our Services in {neighborhoodData.name}
              </h3>
              <div className="grid gap-4">
                <Link
                  href="/services/roof-repair"
                  className="flex items-center gap-3 bg-white rounded-lg p-4 hover:shadow-md transition group"
                >
                  <span className="text-dark group-hover:text-primary transition">Roof Repair</span>
                  <ArrowRight className="w-4 h-4 text-gray ml-auto group-hover:text-primary transition" />
                </Link>
                <Link
                  href="/services/roof-replacement"
                  className="flex items-center gap-3 bg-white rounded-lg p-4 hover:shadow-md transition group"
                >
                  <span className="text-dark group-hover:text-primary transition">Roof Replacement</span>
                  <ArrowRight className="w-4 h-4 text-gray ml-auto group-hover:text-primary transition" />
                </Link>
                <Link
                  href="/services/roof-inspection"
                  className="flex items-center gap-3 bg-white rounded-lg p-4 hover:shadow-md transition group"
                >
                  <span className="text-dark group-hover:text-primary transition">Roof Inspection</span>
                  <ArrowRight className="w-4 h-4 text-gray ml-auto group-hover:text-primary transition" />
                </Link>
                <Link
                  href="/services/storm-damage"
                  className="flex items-center gap-3 bg-white rounded-lg p-4 hover:shadow-md transition group"
                >
                  <span className="text-dark group-hover:text-primary transition">Storm Damage & Insurance</span>
                  <ArrowRight className="w-4 h-4 text-gray ml-auto group-hover:text-primary transition" />
                </Link>
                <Link
                  href="/services/gutters"
                  className="flex items-center gap-3 bg-white rounded-lg p-4 hover:shadow-md transition group"
                >
                  <span className="text-dark group-hover:text-primary transition">Gutter Services</span>
                  <ArrowRight className="w-4 h-4 text-gray ml-auto group-hover:text-primary transition" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Neighborhoods */}
      {nearbyNeighborhoods.length > 0 && (
        <section className="section bg-light">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
              Nearby Neighborhoods We Serve
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {nearbyNeighborhoods.map((n) => (
                <Link
                  key={n.slug}
                  href={`/locations/${city}/${n.slug}`}
                  className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow group"
                >
                  <MapPin className="w-5 h-5 text-primary mx-auto mb-2 group-hover:text-accent transition-colors" />
                  <span className="text-dark font-medium group-hover:text-primary transition-colors">
                    {n.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <FAQ
        faqs={neighborhoodFAQs}
        title={`${neighborhoodData.name} Roofing FAQ`}
        subtitle={`Common questions about roofing services in ${neighborhoodData.name}, ${location.city}`}
      />

      {/* More Neighborhoods in This City */}
      {otherNeighborhoods.length > 0 && (
        <section className="section bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary text-center mb-4">
              More {location.city} Neighborhoods
            </h2>
            <p className="text-gray text-center mb-8 max-w-2xl mx-auto">
              We proudly serve homeowners throughout {location.city}. Explore our other neighborhood pages.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {otherNeighborhoods.map((n) => (
                <Link
                  key={n.slug}
                  href={`/locations/${city}/${n.slug}`}
                  className="bg-light rounded-lg p-4 text-center hover:bg-primary/5 transition-colors group"
                >
                  <span className="text-dark font-medium group-hover:text-primary transition-colors">
                    {n.name}
                  </span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                href={`/locations/${city}`}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                View All {location.city} Services <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection
        title={`Need a Roofer in ${neighborhoodData.name}?`}
        subtitle={`Get a free estimate from ${neighborhoodData.name}'s trusted roofing experts. No pressure, just honest advice.`}
      />
    </>
  );
}
