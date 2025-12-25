import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Services } from '@/components/sections/Services';
import { FAQ } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTASection';
import { LocationSchema, BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { SITE_CONFIG, SERVICES, LOCATIONS } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

// Location-specific content for unique pages
const locationContent: Record<
  string,
  {
    description: string;
    neighborhoods?: string[];
    highlights?: string[];
  }
> = {
  'charlotte-nc': {
    description:
      'As Charlotte\'s premier roofing company, Best Roofing Now has been serving homeowners and businesses throughout the Queen City since 2020. Our team knows Charlotte\'s unique weather challenges—from summer storms to occasional ice and hail—and we build roofs that stand up to it all.',
    neighborhoods: [
      'Ballantyne', 'SouthPark', 'Myers Park', 'Dilworth', 'NoDa',
      'Plaza Midwood', 'University City', 'Steele Creek', 'Cotswold',
      'Elizabeth', 'Eastover', 'Wesley Heights', 'Highland Creek',
    ],
    highlights: [
      'Main office location at 10130 Mallard Creek Rd',
      'Same-day emergency service available',
      'Deep knowledge of Charlotte building codes',
      'Partnerships with local suppliers for faster service',
    ],
  },
  'concord-nc': {
    description:
      'Best Roofing Now proudly serves Concord and Cabarrus County with expert roofing services. Whether you\'re near the Concord Mills area, downtown, or in one of the many beautiful neighborhoods, our team provides the same quality service that has earned us a 5-star reputation.',
    neighborhoods: [
      'Concord Mills', 'Afton Village', 'Christenbury', 'Moss Creek',
      'Georgian Woods', 'Highland Creek', 'Skybrook',
    ],
    highlights: [
      'Quick response times to Cabarrus County',
      'Familiar with local HOA requirements',
      'Storm damage specialists for the area',
    ],
  },
  'huntersville-nc': {
    description:
      'Huntersville homeowners trust Best Roofing Now for reliable, honest roofing services. From the historic downtown area to newer developments near Birkdale Village, we understand the diverse roofing needs of this growing community.',
    neighborhoods: [
      'Birkdale Village', 'Rosedale', 'Vermillion', 'Skybrook',
      'Cedarfield', 'Monteith Park', 'The Hamptons',
    ],
    highlights: [
      'Serving Huntersville since our founding',
      'Experience with both new construction and older homes',
      'Local team members who live in the community',
    ],
  },
  'cornelius-nc': {
    description:
      'Lake Norman living deserves Lake Norman quality roofing. Best Roofing Now serves Cornelius residents with premium roofing services designed to protect your home from the unique weather conditions near the lake.',
    neighborhoods: [
      'Antiquity', 'Bailey\'s Glen', 'Jetton Cove', 'Westmoreland',
      'The Peninsula', 'Chesapeake',
    ],
    highlights: [
      'Understanding of lakefront property needs',
      'Premium materials for coastal-style weather',
      'Quick emergency response for the LKN area',
    ],
  },
  'davidson-nc': {
    description:
      'Davidson\'s charming community deserves roofing services that match its character. Best Roofing Now brings expertise and integrity to every Davidson roofing project, from historic homes near the college to newer developments.',
    neighborhoods: [
      'Davidson Village', 'River Run', 'Bradford', 'Summers Walk',
      'Westbranch',
    ],
    highlights: [
      'Respect for Davidson\'s historic character',
      'Experience with varied architectural styles',
      'Community-focused service approach',
    ],
  },
  'mooresville-nc': {
    description:
      'Race City trusts Best Roofing Now for fast, reliable roofing services. From lakefront properties to downtown Mooresville, we deliver championship-quality roofing with the speed and precision this community expects.',
    neighborhoods: [
      'The Point', 'Langtree', 'Curtis Pond', 'Morrison Plantation',
      'Muirfield', 'Bridgeport',
    ],
    highlights: [
      'Serving the entire Mooresville area',
      'Lakefront roofing specialists',
      'Commercial and residential expertise',
    ],
  },
  'lake-norman': {
    description:
      'The Lake Norman region demands roofing that can handle everything from summer storms to winter weather. Best Roofing Now is the trusted choice for LKN homeowners who want quality, durability, and honest service.',
    neighborhoods: [
      'Denver', 'Cornelius', 'Davidson', 'Mooresville', 'Huntersville',
      'Sherrills Ford',
    ],
    highlights: [
      'Comprehensive Lake Norman coverage',
      'Understanding of waterfront property needs',
      'Premium materials for harsh weather protection',
    ],
  },
  'matthews-nc': {
    description:
      'Matthews residents deserve roofing services that match their community\'s standards. Best Roofing Now brings honest, quality-focused service to every Matthews home, from historic downtown to newer subdivisions.',
    neighborhoods: [
      'Sardis Woods', 'Matthews Township', 'Fullwood',
      'Crown Point', 'Weddington Chase',
    ],
    highlights: [
      'Quick service to Union County border',
      'Experience with Matthews home styles',
      'Strong local reputation',
    ],
  },
  'mint-hill-nc': {
    description:
      'Mint Hill\'s family-friendly community deserves a family-owned roofing company. Best Roofing Now brings small-town values and big-city expertise to every Mint Hill roofing project.',
    neighborhoods: [
      'Bonterra', 'Summerwood', 'Cheval', 'Plantation Estates',
    ],
    highlights: [
      'Family-owned serving families',
      'Honest assessments, fair prices',
      'Quick response times',
    ],
  },
  'harrisburg-nc': {
    description:
      'Harrisburg\'s growing community needs roofing contractors who understand both new construction and established homes. Best Roofing Now serves Harrisburg with the expertise this vibrant town deserves.',
    neighborhoods: [
      'Highland Creek', 'Harrisburg Town Center', 'Rocky River Crossing',
    ],
    highlights: [
      'Serving Harrisburg\'s growth',
      'New construction expertise',
      'Established home renovations',
    ],
  },
  'kannapolis-nc': {
    description:
      'From the revitalized downtown to established neighborhoods, Kannapolis homeowners trust Best Roofing Now for quality roofing services. We\'re proud to serve this historic community.',
    neighborhoods: [
      'Downtown Kannapolis', 'Afton Ridge', 'Irish Buffalo Creek',
    ],
    highlights: [
      'Serving Kannapolis families',
      'Understanding of local architecture',
      'Competitive pricing for the area',
    ],
  },
  'gastonia-nc': {
    description:
      'Gastonia and Gaston County residents choose Best Roofing Now for reliable, professional roofing services. We bring Charlotte-quality work to the western suburbs with local responsiveness.',
    neighborhoods: [
      'Downtown Gastonia', 'Cramerton', 'Belmont area', 'Mount Holly area',
    ],
    highlights: [
      'Expanding service to Gaston County',
      'Competitive rates for the area',
      'Same quality as Charlotte service',
    ],
  },
  'pineville-nc': {
    description:
      'Pineville residents near Carolina Place and throughout the community trust Best Roofing Now for honest, quality roofing services. We\'re your neighbors serving neighbors.',
    neighborhoods: [
      'Carolina Place', 'McMullen Creek', 'Park Crossing',
    ],
    highlights: [
      'Convenient location for Pineville',
      'Quick response times',
      'Local expertise',
    ],
  },
  'denver-nc': {
    description:
      'Denver and Lincoln County homeowners choose Best Roofing Now for Lake Norman-quality service. We understand the unique needs of this lakeside community.',
    neighborhoods: [
      'Westport', 'Lake Norman area', 'East Lincoln',
    ],
    highlights: [
      'Lake Norman specialists',
      'Premium materials available',
      'Storm damage response',
    ],
  },
  'monroe-nc': {
    description:
      'Monroe and Union County residents deserve roofing services that match their community values. Best Roofing Now brings integrity and quality to every Monroe roofing project.',
    neighborhoods: [
      'Downtown Monroe', 'Wesley Chapel', 'Indian Trail area',
    ],
    highlights: [
      'Serving Union County',
      'Competitive pricing',
      'Quality workmanship',
    ],
  },
};

// Default content for locations without specific content
const defaultContent = {
  description:
    'Best Roofing Now proudly serves this community with the same quality, integrity, and expertise that has made us Charlotte\'s trusted roofing company. Our team is ready to help with all your roofing needs.',
  neighborhoods: [],
  highlights: [
    'Same quality service as Charlotte',
    'Free estimates and inspections',
    'Licensed, bonded, and insured',
    'Satisfaction guaranteed',
  ],
};

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return LOCATIONS.map((location) => ({
    city: location.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const location = LOCATIONS.find((l) => l.slug === city);

  if (!location) {
    return { title: 'Location Not Found' };
  }

  return {
    title: `Roofing Company ${location.city}, ${location.state} | Roof Repair & Replacement`,
    description: `Best Roofing Now serves ${location.city}, ${location.state} with professional roofing services. Residential & commercial roofing, roof repair, replacement, and emergency services. Free estimates!`,
    keywords: [
      `roofing company ${location.city} ${location.state}`,
      `${location.city} roofers`,
      `roof repair ${location.city}`,
      `roof replacement ${location.city} ${location.state}`,
    ],
    alternates: {
      canonical: `${SITE_CONFIG.url}/locations/${city}`,
    },
    openGraph: {
      title: `Roofing Services in ${location.city}, ${location.state}`,
      description: `Professional roofing services in ${location.city}. Free estimates, quality workmanship, BBB A+ rated.`,
      url: `${SITE_CONFIG.url}/locations/${city}`,
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { city } = await params;
  const location = LOCATIONS.find((l) => l.slug === city);

  if (!location) {
    notFound();
  }

  const content = locationContent[city] || defaultContent;
  const otherLocations = LOCATIONS.filter((l) => l.slug !== city).slice(0, 6);

  return (
    <>
      <LocationSchema location={location} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Service Areas', url: `${SITE_CONFIG.url}/locations` },
          { name: `${location.city}, ${location.state}`, url: `${SITE_CONFIG.url}/locations/${city}` },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="font-semibold">{location.county} County</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Roofing Company in {location.city}, {location.state}
            </h1>
            <p className="text-xl text-white/90 mb-8">{content.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                className="bg-accent hover:bg-accent-dark text-white"
              >
                Get Free Estimate in {location.city}
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

      {/* Image Gallery */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Our Work in the {location.city} Area
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.hero.roofTeam}
                alt={`Roofing crew working in ${location.city}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.services.inspection}
                alt={`Roof inspection in ${location.city}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.beforeAfter.general}
                alt={`Before and after roofing project in ${location.city}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.hero.metalRoof}
                alt={`New roof installation in ${location.city}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for This Location */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Why {location.city} Homeowners Choose Us
              </h2>
              <ul className="space-y-4 mb-8">
                {(content.highlights || defaultContent.highlights).map((highlight, index) => (
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
                  <span className="text-dark">BBB A+ accredited since 2021</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-dark">Veteran-founded, family owned</span>
                </li>
              </ul>
              <Button href="/contact">
                Schedule Your Free Inspection
              </Button>
            </div>

            {/* Neighborhoods Served */}
            {content.neighborhoods && content.neighborhoods.length > 0 && (
              <div className="bg-light rounded-2xl p-8">
                <h3 className="text-xl font-bold text-primary mb-6">
                  Neighborhoods We Serve in {location.city}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {content.neighborhoods.map((neighborhood) => (
                    <div
                      key={neighborhood}
                      className="flex items-center gap-2 bg-white rounded-lg p-3"
                    >
                      <MapPin className="w-4 h-4 text-accent" />
                      <span className="text-dark text-sm">{neighborhood}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <Services
        title={`Roofing Services in ${location.city}`}
        subtitle={`We offer comprehensive roofing solutions for ${location.city} homes and businesses.`}
        showAll={true}
      />

      {/* Project Map */}
      {location.mapUrl && (
        <section className="section">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Our Recent Projects in {location.city}
              </h2>
              <p className="text-gray">
                Explore roofing projects we have completed in the {location.city} area.
              </p>
            </div>
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src={location.mapUrl}
                width="100%"
                height="600"
                frameBorder="0"
                title={`Roofing Projects in ${location.city}`}
                className="w-full"
              />
            </div>
          </div>
        </section>
      )}

      {/* Contact Info */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Contact Our {location.city} Roofing Team
            </h2>
            <p className="text-gray text-lg mb-6">
              Ready to get started? Our team serves {location.city} and all of {location.county} County
              with professional roofing services. Call us today for a free estimate!
            </p>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-bold text-dark mb-2">Office Address</h3>
                  <p className="text-gray">
                    {SITE_CONFIG.address.street}<br />
                    {SITE_CONFIG.address.suite}<br />
                    {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-2">Contact</h3>
                  <p className="text-gray">
                    Phone: <a href={`tel:${SITE_CONFIG.phoneClean}`} className="text-primary font-semibold">{SITE_CONFIG.phone}</a><br />
                    Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary">{SITE_CONFIG.email}</a><br />
                    Hours: {SITE_CONFIG.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Other Areas We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {otherLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow group"
              >
                <MapPin className="w-5 h-5 text-primary mx-auto mb-2 group-hover:text-accent transition-colors" />
                <span className="text-dark font-medium group-hover:text-primary transition-colors">
                  {loc.city}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Service Areas <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        title={`${location.city} Roofing FAQ`}
        subtitle={`Common questions about roofing services in ${location.city}`}
      />

      {/* CTA */}
      <CTASection
        title={`Need a Roofer in ${location.city}?`}
        subtitle={`Get a free estimate from ${location.city}'s trusted roofing company. No pressure, just honest advice.`}
      />
    </>
  );
}
