import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle,
  Phone,
  Calendar,
  Shield,
  Star,
  ArrowRight,
  HelpCircle,
  Award,
  Users,
  Clock,
  Wrench,
  Home,
  Sun,
  Thermometer,
  Gem,
  Palette,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Tile Roofing Charlotte NC',
  description:
    'Professional tile roofing installation in Charlotte NC. Clay tiles, concrete tiles, Mediterranean styles. Durable, beautiful, and long-lasting. BBB A+ rated, veteran-owned company.',
  keywords: [
    'tile roofing Charlotte NC',
    'clay tile roof Charlotte',
    'concrete tile roofing Charlotte',
    'tile roof installation Charlotte',
    'Mediterranean tile roof Charlotte',
    'Spanish tile roof Charlotte NC',
    'tile roof replacement Charlotte',
    'tile roof repair Charlotte NC',
    'terracotta roof tiles Charlotte',
    'tile roofing contractor Charlotte',
    'clay roof tiles Charlotte NC',
    'tile roof cost Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/tile-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Tile Roofing Charlotte NC | Clay & Concrete Tiles | Best Roofing Now',
    description:
      'Premium tile roofing installation in Charlotte NC. Clay and concrete tiles for lasting beauty and durability.',
    url: `${SITE_CONFIG.url}/tile-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero13,
        width: 1200,
        height: 630,
        alt: 'Tile roofing Charlotte NC - Best Roofing Now installation',
      },
    ],
  },
};

// Tile roofing services
const services = [
  {
    icon: Home,
    title: 'Clay Tile Installation',
    description: 'Traditional terracotta and clay tile roofing for Mediterranean and Spanish-style homes.',
    href: '/services/residential-roofing',
  },
  {
    icon: Gem,
    title: 'Concrete Tile Roofing',
    description: 'Durable concrete tiles in various profiles and colors for modern and traditional homes.',
    href: '/services/residential-roofing',
  },
  {
    icon: Palette,
    title: 'Synthetic Tile Options',
    description: 'Lightweight synthetic alternatives that replicate the look of clay and concrete.',
    href: '/services/residential-roofing',
  },
  {
    icon: Wrench,
    title: 'Tile Roof Repair',
    description: 'Expert repair of cracked, broken, or displaced tiles to restore your roof.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Tile Roof Replacement',
    description: 'Complete tile roof replacement with modern materials and improved underlayment.',
    href: '/services/roof-replacement',
  },
  {
    icon: Sun,
    title: 'Tile Roof Maintenance',
    description: 'Regular inspection and maintenance to maximize your tile roof lifespan.',
    href: '/services/roof-inspection',
  },
];

// Why choose tile roofing
const tileRoofBenefits = [
  {
    icon: Clock,
    title: '50+ Year Lifespan',
    description: 'Clay and concrete tiles can last 50-100 years with proper installation and maintenance.',
  },
  {
    icon: Thermometer,
    title: 'Energy Efficient',
    description: 'Tile roofs provide natural insulation, reducing cooling costs in Charlotte summers.',
  },
  {
    icon: Shield,
    title: 'Weather Resistant',
    description: 'Tiles withstand high winds, hail, and are naturally fire-resistant (Class A rating).',
  },
  {
    icon: Palette,
    title: 'Timeless Beauty',
    description: 'Classic aesthetic that enhances curb appeal and never goes out of style.',
  },
  {
    icon: Sun,
    title: 'Low Maintenance',
    description: 'Tiles require minimal maintenance and retain their color for decades.',
  },
  {
    icon: Gem,
    title: 'Increased Home Value',
    description: 'Premium tile roofing adds significant value to your Charlotte home.',
  },
];

// Tile styles
const tileStyles = [
  {
    name: 'Spanish/Mediterranean',
    description: 'Classic barrel-shaped clay tiles with curved profiles. Perfect for Mediterranean and Spanish Revival architecture.',
  },
  {
    name: 'Mission Tiles',
    description: 'Traditional half-cylinder tiles that create a distinctive ridged appearance popular in Southwestern styles.',
  },
  {
    name: 'Flat/Interlocking',
    description: 'Sleek, modern flat tiles that interlock for a clean, contemporary look. Available in concrete and clay.',
  },
  {
    name: 'French Tiles',
    description: 'Low-profile interlocking tiles with a subtle curve. Elegant option for European-inspired architecture.',
  },
  {
    name: 'Slate-Look Tiles',
    description: 'Concrete or clay tiles designed to replicate the appearance of natural slate at a lower cost.',
  },
  {
    name: 'Shake-Look Tiles',
    description: 'Tiles that mimic the rustic appearance of wood shakes without the fire risk or maintenance.',
  },
];

// Why choose us
const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Charlotte homeowners.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability insurance.',
  },
  {
    icon: Users,
    title: 'Tile Specialists',
    description: 'Experienced installers trained in proper tile roofing techniques and best practices.',
  },
  {
    icon: Clock,
    title: 'Comprehensive Warranty',
    description: 'Extended warranties on tile roofing materials and our installation workmanship.',
  },
];

// Charlotte neighborhoods served
const charlotteNeighborhoods = [
  'Myers Park',
  'Dilworth',
  'South End',
  'NoDa',
  'Plaza Midwood',
  'Ballantyne',
  'University City',
  'Cotswold',
  'Elizabeth',
  'Eastover',
  'SouthPark',
  'Uptown Charlotte',
  'Wesley Heights',
  'Fourth Ward',
  'Cherry',
  'Madison Park',
  'Montford',
  'Chantilly',
  'Commonwealth',
  'Sedgefield',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Mint Hill', href: '/locations/mint-hill-nc' },
  { name: 'Pineville', href: '/locations/pineville-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Gastonia', href: '/locations/gastonia-nc' },
  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
  { name: 'Fort Mill, SC', href: '/locations/fort-mill-sc' },
  { name: 'Indian Trail', href: '/locations/indian-trail-nc' },
];

// FAQs about tile roofing
const faqs = [
  {
    question: 'How much does a tile roof cost in Charlotte NC?',
    answer:
      'Tile roofing in Charlotte typically costs $15-$30 per square foot installed, or $22,500-$45,000+ for an average home. The cost depends on tile type (clay is more expensive than concrete), roof complexity, and any structural reinforcement needed. While more expensive upfront than shingles, tile roofs last 2-3 times longer, often making them more cost-effective over time.',
  },
  {
    question: 'What is the difference between clay and concrete tiles?',
    answer:
      'Clay tiles are made from natural clay and fired in a kiln, offering a classic terracotta look and exceptional longevity (75-100+ years). Concrete tiles are made from sand, cement, and water, providing similar durability (50-75 years) at a lower cost. Concrete tiles come in more colors and profiles. Both are excellent choices for Charlotte homes.',
  },
  {
    question: 'Can my Charlotte home support a tile roof?',
    answer:
      'Tile roofs are heavier than asphalt shingles, so we first assess your home\'s structural capacity. Most homes built to modern codes can support tile. Older homes may need reinforcement, which we can evaluate during a free consultation. Lightweight synthetic tiles are also available as an alternative that requires no structural changes.',
  },
  {
    question: 'How long does a tile roof last?',
    answer:
      'Clay tile roofs can last 75-100+ years, while concrete tiles typically last 50-75 years. The underlayment beneath the tiles usually needs replacement every 20-30 years, but the tiles themselves can often be reused. Proper installation and maintenance are key to achieving maximum lifespan.',
  },
  {
    question: 'Are tile roofs good for Charlotte weather?',
    answer:
      'Yes, tile roofs perform excellently in Charlotte\'s climate. They provide natural insulation that reduces cooling costs in summer, are highly wind-resistant (many rated for 125+ mph winds), and are naturally fire-resistant. They also handle Charlotte\'s rain well when properly installed with appropriate underlayment.',
  },
  {
    question: 'Do tile roofs require more maintenance?',
    answer:
      'Tile roofs actually require less maintenance than many other roofing materials. The tiles themselves are extremely durable and don\'t rot, warp, or require painting. We recommend annual inspections to check for cracked or displaced tiles and to ensure the underlayment remains in good condition.',
  },
  {
    question: 'Can you repair individual broken tiles?',
    answer:
      'Yes, one of the advantages of tile roofing is that individual tiles can be replaced without affecting the rest of the roof. We carry common tile types and can source matching tiles for most roofs. For older or discontinued tiles, we can often find suitable matches or recommend alternatives.',
  },
  {
    question: 'What colors and styles of tile roofing do you offer?',
    answer:
      'We offer a wide range of tile roofing options including Spanish/Mediterranean barrel tiles, mission tiles, flat interlocking tiles, and tiles that replicate slate or wood shake. Colors range from traditional terracotta and red to brown, gray, black, and custom blends. We help you select the perfect style for your home\'s architecture.',
  },
];

export default function TileRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Tile Roofing Charlotte NC', url: `${SITE_CONFIG.url}/tile-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero13}
            alt="Tile roofing Charlotte NC - Best Roofing Now clay and concrete tile installation"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">BBB A+ Rated | Veteran-Owned</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Tile Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Clay and concrete tiles for lasting beauty and durability
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Tile roofing offers unmatched beauty and longevity for Charlotte homes. Best Roofing Now installs
              premium clay and concrete tile roofing systems that can last 50-100+ years. Whether you prefer
              Mediterranean style, modern flat tiles, or classic Spanish barrel tiles, our expert team delivers
              exceptional craftsmanship.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Your Free Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Tile Roofing Services in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Complete tile roofing solutions from installation to repair and maintenance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray text-sm mb-3">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Benefits of Tile Roofing
              </h2>
              <p className="text-gray text-lg mb-8">
                Tile roofing is a premium choice that offers exceptional durability, energy efficiency, and
                timeless beauty for Charlotte homes.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {tileRoofBenefits.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                      <p className="text-gray text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Beautiful tile roof installation in Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-dark">50-100+ Years</p>
                    <p className="text-sm text-gray">Average Tile Roof Lifespan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tile Styles Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Tile Roofing Styles We Install
            </h2>
            <p className="text-gray text-lg">
              Choose from a variety of tile profiles and styles to complement your home's architecture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tileStyles.map((style) => (
              <div key={style.name} className="bg-light rounded-xl p-6">
                <h3 className="font-bold text-dark mb-2">{style.name}</h3>
                <p className="text-gray text-sm">{style.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Charlotte Homeowners Choose Best Roofing Now
            </h2>
            <p className="text-gray text-lg">
              Expert tile roofing installation from a company you can trust.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-6 bg-white rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                  <p className="text-gray text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready for a Beautiful Tile Roof?
              </h2>
              <p className="text-white/90">
                Get a free estimate on premium tile roofing for your Charlotte home.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-accent"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Free Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-accent hover:bg-white/90"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Tile Roofing Installation Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              We install tile roofing for homeowners across the Greater Charlotte metro area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Neighborhoods */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {charlotteNeighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby Cities */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Nearby Cities We Serve</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {nearbyCities.map((city) => (
                  <Link
                    key={city.name}
                    href={city.href}
                    className="flex items-center gap-2 text-gray hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>{city.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Service Areas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Work Across Charlotte
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of roofing projects throughout the Charlotte area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Tile roofing project in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="Premium roofing installation Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of roofing project Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Completed roof installation Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Tile Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about tile roofing in Charlotte NC.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-light rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="tile-roofing-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/tile-roofing-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Tile Roofing"

      />

      <CTASection
        title="Transform Your Home with Tile Roofing"
        subtitle="Get a free, no-obligation estimate on premium tile roofing for your Charlotte home. Experience the beauty and durability that can last a lifetime."
      />
    </>
  );
}
