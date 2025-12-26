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
import { IMAGES, LOCATION_HERO_IMAGES } from '@/lib/images';

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
      'When Charlotte homeowners need a roofing company they can trust, they turn to Best Roofing Now. As the Queen City and largest metropolitan area in the Carolinas, Charlotte combines Southern charm with modern urban living. From the historic tree-lined streets of Myers Park to the bustling energy of Uptown, Charlotte homeowners take pride in properties that reflect the city\'s rich heritage. Charlotte\'s humid subtropical climate brings hot summers, frequent afternoon thunderstorms from April through September, and occasional ice storms in winter. That\'s why choosing a local Charlotte roofing company with storm damage experience matters.',
    neighborhoods: [
      'Myers Park', 'Dilworth', 'South End', 'NoDa', 'University City',
      'Ballantyne', 'Plaza Midwood', 'Elizabeth', 'Eastover', 'SouthPark',
      'Highland Creek', 'Steele Creek', 'Wesley Heights',
    ],
    highlights: [
      'Main office location with fastest response times',
      'Deep knowledge of Charlotte building codes',
      'Insurance claim expertise and adjuster coordination',
      'Free drone inspections with detailed photo documentation',
    ],
  },
  'concord-nc': {
    description:
      'When Concord homeowners need a roofing company they can trust, they turn to Best Roofing Now. Founded in 1796, Concord\'s name meaning "harmony" reflects the spirit of this thriving city that has grown from a textile hub into one of the fastest-growing communities in the Charlotte metro. Home to Charlotte Motor Speedway and Concord Mills, the city blends historic charm with modern attractions. Concord\'s position in Cabarrus County makes it susceptible to severe thunderstorms moving through the I-85 corridor with high winds, hail, and heavy downpours.',
    neighborhoods: [
      'Historic Downtown', 'Odell School', 'Afton Village', 'Gibson Village',
      'Charlotte Motor Speedway area', 'Christenbury', 'Moss Creek', 'Skybrook',
    ],
    highlights: [
      'Quick response times to Cabarrus County',
      'Experience with historic Union Street residences',
      'Storm damage specialists for the I-85 corridor',
      'Understanding of textile-era architectural roofing',
    ],
  },
  'huntersville-nc': {
    description:
      'When Huntersville homeowners need a roofing company they can trust, they turn to Best Roofing Now. As the southern gateway to Lake Norman, Huntersville perfectly balances suburban convenience with outdoor recreation. With a population exceeding 52,000, this thriving community offers residents access to Birkdale Village shopping, excellent schools, and countless parks including Blythe Landing. Huntersville\'s location between Uptown Charlotte and Lake Norman exposes homes to unique weather patterns, including lake-effect conditions and severe storms that track along the I-77 corridor.',
    neighborhoods: [
      'Birkdale Village', 'Rosedale', 'Vermillion', 'Skybrook',
      'The Farms', 'Gilead Road area', 'Cedarfield', 'Monteith Park',
    ],
    highlights: [
      'Extensive experience with HOA requirements',
      'Understanding of planned community aesthetic standards',
      'Lake-effect weather expertise',
      'Serving both established and newer developments',
    ],
  },
  'cornelius-nc': {
    description:
      'When Cornelius homeowners need a roofing company they can trust, they turn to Best Roofing Now. With 70 miles of Lake Norman shoreline, Cornelius has transformed from a small railroad town to one of the most desirable lakefront communities in the Carolinas. Home to Ramsey Creek Park and Holiday Marina, Cornelius offers an unparalleled lakeside lifestyle. Waterfront properties face unique challenges from lake-effect weather patterns, including increased wind exposure and humidity that can accelerate roof aging.',
    neighborhoods: [
      'The Peninsula', 'Birkdale', 'Jetton Road', 'Antiquity',
      'Caldwell Station', 'Connor Quay', 'Bailey\'s Glen', 'Westmoreland',
    ],
    highlights: [
      'Specialized expertise for lakefront properties',
      'Premium architectural shingles and metal roofing',
      'Wind-resistant installation techniques',
      'Understanding of waterfront home aesthetics',
    ],
  },
  'davidson-nc': {
    description:
      'When Davidson homeowners need a roofing company they can trust, they turn to Best Roofing Now. Home to Davidson College since 1837, this charming community blends academic excellence with small-town character. Davidson\'s walkable downtown, historic architecture, and strong sense of community make it one of the most distinctive towns in the Lake Norman region. Davidson\'s mature tree canopy provides beautiful shade but also presents roofing challenges during storms with falling limbs and accumulated debris.',
    neighborhoods: [
      'Historic Downtown', 'West Branch', 'Summers Walk', 'Davidson Bay',
      'Bradford', 'Davidson College area', 'River Run',
    ],
    highlights: [
      'Respect for historic architectural preservation',
      'Experience with varied architectural styles',
      'Tree damage and debris removal expertise',
      'Community-focused service approach',
    ],
  },
  'mooresville-nc': {
    description:
      'When Mooresville homeowners need a roofing company they can trust, they turn to Best Roofing Now. Known as Race City USA for its connection to NASCAR, Mooresville offers the most extensive Lake Norman shoreline access with communities divided by I-77 into lakeside and eastern neighborhoods. The town combines motorsports heritage with family-friendly living and excellent schools in the Iredell-Statesville district. Mooresville\'s larger geographic footprint means homes experience varying weather conditions, from lakeside humidity and wind exposure on the west to the more protected eastern neighborhoods.',
    neighborhoods: [
      'The Point', 'Sailor\'s Watch', 'Sisters Cove', 'Morrison Plantation',
      'Curtis Pond', 'Langtree', 'Muirfield', 'Bridgeport',
    ],
    highlights: [
      'Serving both lakefront estates and family homes',
      'Lower Iredell County taxes - protect your investment',
      'Diverse housing expertise',
      'Commercial and residential roofing',
    ],
  },
  'lake-norman': {
    description:
      'When Lake Norman homeowners need a roofing company they can trust, they turn to Best Roofing Now. As North Carolina\'s largest man-made lake with 520 miles of shoreline, Lake Norman draws residents seeking waterfront living within easy reach of Charlotte. Often called the "Inland Sea," the lake area spans four counties and includes some of the most prestigious communities in the region. Lake Norman properties face enhanced weather exposure due to the open water, experiencing stronger winds, increased humidity, and unique microclimate conditions.',
    neighborhoods: [
      'Cornelius waterfront', 'Davidson waterfront', 'Huntersville waterfront',
      'Mooresville waterfront', 'Denver', 'Sherrills Ford',
    ],
    highlights: [
      'Comprehensive four-county Lake Norman coverage',
      'Wind-resistant installation techniques',
      'Materials for constant moisture exposure',
      'Premium waterfront property expertise',
    ],
  },
  'matthews-nc': {
    description:
      'When Matthews homeowners need a roofing company they can trust, they turn to Best Roofing Now. This charming southeast Mecklenburg town maintains its small-town character while providing excellent schools and a thriving downtown district. Matthews\' annual festivals, historic depot, and walkable downtown attract families seeking community-oriented living within easy reach of Charlotte. Matthews\' position in southeast Mecklenburg puts it in the path of storms moving through the region from the southwest with frequent thunderstorms, occasional tornado warnings, and significant hail events.',
    neighborhoods: [
      'Historic Downtown', 'Sardis Forest', 'McKee Farms', 'Matthews Farm',
      'Stallings Road area', 'Sardis Woods', 'Crown Point', 'Weddington Chase',
    ],
    highlights: [
      'Quick service to Union County border',
      'Experience with mature tree neighborhoods',
      'Strong local reputation',
      'Maintaining community aesthetic standards',
    ],
  },
  'mint-hill-nc': {
    description:
      'When Mint Hill homeowners need a roofing company they can trust, they turn to Best Roofing Now. Known for its rural character and spacious properties, Mint Hill offers a country feel just minutes from Charlotte. The town\'s commitment to preserving green space and its excellent schools in both Mecklenburg and Union county districts make it attractive to families seeking more land. Mint Hill\'s open spaces and larger lots can increase wind exposure during storms, with thunderstorms, hail, and occasional tornado activity affecting homes throughout the community.',
    neighborhoods: [
      'Clear Creek', 'Chestnut Lane', 'Bain School Road area',
      'Potter Road communities', 'Bonterra', 'Summerwood', 'Cheval',
    ],
    highlights: [
      'Service for primary residences and outbuildings',
      'Experience with larger properties',
      'Family-owned serving families',
      'Barns, workshops, and guest house roofing',
    ],
  },
  'harrisburg-nc': {
    description:
      'When Harrisburg homeowners need a roofing company they can trust, they turn to Best Roofing Now. Positioned at the intersection of Mecklenburg, Cabarrus, and Union counties, Harrisburg has experienced tremendous growth while maintaining its small-town appeal. The town\'s excellent schools and convenient access to Charlotte, Concord, and University City make it ideal for families. Harrisburg\'s location in the path of storms moving northeast from Charlotte means homes frequently experience severe weather, with recent tornado confirmations highlighting the importance of storm-resistant roofing.',
    neighborhoods: [
      'Highland Creek', 'Rocky River Crossing', 'Stallings Road area',
      'Pharr Mill communities', 'Harrisburg Town Center',
    ],
    highlights: [
      'Master-planned community experience',
      'New construction and established home expertise',
      'Storm-resistant roofing specialists',
      'Rapid growth area specialists',
    ],
  },
  'kannapolis-nc': {
    description:
      'When Kannapolis homeowners need a roofing company they can trust, they turn to Best Roofing Now. Once home to Cannon Mills and the world\'s largest towel producer, Kannapolis has reinvented itself with the NC Research Campus biotechnology hub. The hometown of Dale Earnhardt maintains its working-class heritage while embracing a biotech-driven future. Kannapolis homes, particularly those built during the textile mill era, feature roof systems that have weathered decades of Carolina storms.',
    neighborhoods: [
      'Downtown Kannapolis', 'Fieldcrest area', 'Gem Theatre district',
      'NC Research Campus area', 'Afton Ridge', 'Irish Buffalo Creek',
    ],
    highlights: [
      'Historic mill-era home expertise',
      'Understanding of architectural preservation',
      'Competitive pricing for the area',
      'Modern technology for historic properties',
    ],
  },
  'gastonia-nc': {
    description:
      'When Gastonia homeowners need a roofing company they can trust, they turn to Best Roofing Now. As Gaston County\'s largest city, Gastonia offers affordable living with easy access to Charlotte via I-85. The city\'s revitalized downtown, historic neighborhoods, and proximity to Crowders Mountain State Park attract residents seeking value without sacrificing convenience. Gastonia\'s position along the I-85 corridor makes it susceptible to severe storms with frequent lightning strikes, high winds, and hail events.',
    neighborhoods: [
      'Downtown Gastonia', 'Forestbrook', 'Ashley Park',
      'Ranlo Road area', 'New Hope', 'Cramerton', 'Belmont area',
    ],
    highlights: [
      'Affordable solutions for every budget',
      'Financing options available',
      'Charlotte-quality work in western suburbs',
      'Storm damage specialists',
    ],
  },
  'pineville-nc': {
    description:
      'When Pineville homeowners need a roofing company they can trust, they turn to Best Roofing Now. Charlotte\'s southernmost suburb offers convenient access to Carolina Place Mall and the I-485 loop while maintaining a distinct community identity. Pineville\'s affordable housing options and excellent location attract first-time homebuyers and growing families. Pineville experiences severe weather with summer thunderstorms, occasional hail, and high winds, with storms moving north from South Carolina often impacting Pineville first.',
    neighborhoods: [
      'Carolina Place Mall area', 'McMullen Creek', 'Historic Downtown Pineville',
      'Park Crossing',
    ],
    highlights: [
      'Solutions for every price point',
      'First-time homebuyer friendly',
      'Starter homes to established neighborhoods',
      'Quick response times',
    ],
  },
  'denver-nc': {
    description:
      'When Denver homeowners need a roofing company they can trust, they turn to Best Roofing Now. This quiet Lake Norman community on the lake\'s western shore offers a slower pace of life with lakefront access, festivals like the annual Strawberry Festival, and proximity to Lake Norman State Park. Denver attracts retirees, families, and anyone seeking affordable lakefront living. Denver\'s location on Lake Norman\'s western shore exposes homes to storms moving across the open water with flash flooding, high winds, and regular storm damage.',
    neighborhoods: [
      'Trilogy at Lake Norman', 'Sailview', 'Westport',
      'Beatty\'s Ford Park area', 'East Lincoln',
    ],
    highlights: [
      '55+ community experience',
      'Lakefront retreat specialists',
      'Family home expertise',
      'Lincoln County knowledge',
    ],
  },
  'monroe-nc': {
    description:
      'When Monroe homeowners need a roofing company they can trust, they turn to Best Roofing Now. Union County\'s seat offers historic Southern charm with a thriving downtown courthouse square. Monroe\'s excellent schools, affordable real estate, and access to Charlotte via Highway 74 make it attractive to families seeking space and value. Monroe\'s location in Union County puts it in the path of severe weather moving through the region with frequent thunderstorms, tornado warnings, and hail events.',
    neighborhoods: [
      'Historic Downtown', 'Wedgewood', 'Indian Trail Road area',
      'Airport area communities', 'Wesley Chapel',
    ],
    highlights: [
      'Historic property preservation',
      'Modern construction expertise',
      'Union County specialists',
      'Competitive pricing with quality',
    ],
  },
  'mt-holly-nc': {
    description:
      'When Mt Holly homeowners need a roofing company they can trust, they turn to Best Roofing Now. This historic Gaston County town on the Catawba River offers small-town living with convenient access to Charlotte and the Mountain Island Lake area. Mt Holly\'s revitalized downtown and affordable housing attract residents seeking community-oriented living. Mt Holly\'s riverside location and proximity to Mountain Island Lake create unique weather patterns with severe storms bringing damaging winds, hail, and heavy rainfall.',
    neighborhoods: [
      'Downtown Mt Holly', 'Catawba Heights', 'Lucia Road area',
      'Stanley area communities',
    ],
    highlights: [
      'Riverside property expertise',
      'Historic home specialists',
      'Increased humidity and storm exposure knowledge',
      'Catawba River area experience',
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
                src={LOCATION_HERO_IMAGES[city] || IMAGES.hero.hero11}
                alt={`Roofing crew working in ${location.city}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.houses.house1}
                alt={`Residential roofing in ${location.city}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.projects.work1}
                alt={`Roofing project in ${location.city}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.houses.modern1}
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
