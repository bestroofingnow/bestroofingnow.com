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
  Leaf,
  Droplets,
  ShieldCheck,
  Wind,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import YouTubeShort from '@/components/sections/YouTubeShort';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Gutter Guards Charlotte NC',
  description:
    'Professional gutter guard installation in Charlotte NC. Mesh, micro-mesh, screen, brush, and reverse-curve systems to prevent clogs and protect your home. Compare all gutter guard types. Free estimates from BBB A+ rated, veteran-owned company.',
  keywords: [
    'gutter guards Charlotte NC',
    'gutter guard Charlotte',
    'leaf guards Charlotte',
    'gutter protection Charlotte NC',
    'gutter screens Charlotte',
    'micro mesh gutter guards Charlotte',
    'clog-free gutters Charlotte',
    'gutter guard installation near me',
    'best gutter guards Charlotte NC',
    'gutter protection systems Charlotte',
    'mesh gutter guards Charlotte',
    'screen gutter guards Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gutter-guards-charlotte-nc`,
  },
  openGraph: {
    title: 'Gutter Guards Charlotte NC | Mesh, Micro-Mesh & Screen Systems | Best Roofing Now',
    description:
      'BBB A+ rated gutter guard installation in Charlotte NC. Mesh, micro-mesh, screen, and reverse-curve systems. Prevent clogs, protect your home. Free estimates.',
    url: `${SITE_CONFIG.url}/gutter-guards-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.gutters,
        width: 1200,
        height: 630,
        alt: 'Professional gutter guard installation Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Gutter guard types and services
const services = [
  {
    icon: ShieldCheck,
    title: 'Micro-Mesh Gutter Guards',
    description: 'Fine mesh screens that block even the smallest debris while allowing water to flow freely.',
    href: '/services/gutters',
  },
  {
    icon: Leaf,
    title: 'Leaf Guard Systems',
    description: 'Premium leaf protection systems that keep leaves and debris out of your gutters year-round.',
    href: '/services/gutters',
  },
  {
    icon: Home,
    title: 'Screen Gutter Guards',
    description: 'Cost-effective screen solutions that prevent large debris from entering your gutter system.',
    href: '/services/gutters',
  },
  {
    icon: Droplets,
    title: 'Reverse Curve Guards',
    description: 'Surface tension systems that direct water into gutters while debris falls away.',
    href: '/services/gutters',
  },
  {
    icon: Wrench,
    title: 'Gutter Guard Repair',
    description: 'Expert repair and replacement of existing gutter protection systems.',
    href: '/services/gutters',
  },
  {
    icon: Wind,
    title: 'Complete Gutter Solutions',
    description: 'Full gutter installation with integrated gutter guard protection systems.',
    href: '/services/gutters',
  },
];

// Why choose us points
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
    description: 'Fully licensed NC contractor with comprehensive liability insurance coverage.',
  },
  {
    icon: Users,
    title: 'Expert Installers',
    description: 'Trained and certified gutter guard installation specialists with years of experience.',
  },
  {
    icon: Clock,
    title: 'Lifetime Warranties',
    description: 'Many of our gutter guard systems come with lifetime no-clog warranties.',
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

// FAQs about gutter guards
const faqs = [
  {
    question: 'What are the best gutter guards for Charlotte NC homes?',
    answer:
      'The best gutter guards for Charlotte homes depend on your specific needs and budget. Micro-mesh guards offer the best protection against pine needles and small debris common in our area. Reverse curve systems work well for homes with heavy leaf fall. Our experts will assess your property and recommend the ideal solution for your situation during a free consultation.',
  },
  {
    question: 'How much do gutter guards cost in Charlotte NC?',
    answer:
      'Gutter guard costs in Charlotte typically range from $7-$30 per linear foot installed, depending on the type and quality. Basic screen guards start around $7-$10/ft, while premium micro-mesh systems range from $15-$30/ft. A typical Charlotte home with 150-200 feet of gutters can expect to pay between $1,500-$4,500 for quality gutter guard installation.',
  },
  {
    question: 'Do gutter guards really work?',
    answer:
      'Yes, quality gutter guards are highly effective at preventing clogs and reducing gutter maintenance. While no system is 100% maintenance-free, good gutter guards can reduce cleaning frequency from 2-4 times per year to once every few years. They also prevent pest infestations, ice dams, and water damage caused by clogged gutters.',
  },
  {
    question: 'Can you install gutter guards on existing gutters?',
    answer:
      'Absolutely. Most gutter guard systems are designed to retrofit onto existing gutters without replacing them. Our technicians will inspect your current gutters to ensure they are in good condition and properly pitched before installing guards. If repairs are needed, we can handle those as well.',
  },
  {
    question: 'How long do gutter guards last?',
    answer:
      'Quality gutter guards typically last 20-25 years or more with proper installation. Many premium systems come with lifetime warranties. The longevity depends on the material - aluminum and stainless steel micro-mesh guards last the longest, while plastic screens may need replacement after 10-15 years.',
  },
  {
    question: 'Will gutter guards prevent ice dams?',
    answer:
      'Gutter guards help reduce ice dam formation by keeping gutters clear of debris that can trap water and freeze. However, for complete ice dam prevention in Charlotte winters, we recommend combining gutter guards with proper attic insulation and ventilation. We can assess your home and recommend a comprehensive solution.',
  },
  {
    question: 'Do gutter guards work with pine needles?',
    answer:
      'Standard gutter guards may struggle with pine needles, which is important since Charlotte has many pine trees. Micro-mesh gutter guards are the best solution for pine needle problems, as the fine mesh prevents even small needles from entering while still allowing water to flow through.',
  },
  {
    question: 'Do you offer warranties on gutter guard installation?',
    answer:
      'Yes, we offer comprehensive warranties on all gutter guard installations. This includes our own workmanship warranty plus manufacturer warranties that often extend 20-25 years or even lifetime coverage. We stand behind our installations and will address any issues that arise.',
  },
];

export default function GutterGuardsCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Gutter Guards Charlotte NC', url: `${SITE_CONFIG.url}/gutter-guards-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.gutters}
            alt="Professional gutter guard installation Charlotte NC - Best Roofing Now"
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
              Gutter Guards <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              LeafGuard and professional gutter protection installation
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Stop climbing ladders to clean clogged gutters. Best Roofing Now installs premium gutter guard systems
              that keep leaves, pine needles, and debris out while allowing water to flow freely. Protect your home
              from water damage with our professional gutter guard solutions.
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
              Gutter Guard Solutions in Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              We install a variety of gutter protection systems to match your home's needs, budget, and the types
              of debris common in your neighborhood.
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
                Why Install Gutter Guards in Charlotte?
              </h2>
              <p className="text-gray text-lg mb-6">
                Charlotte's tree-lined neighborhoods are beautiful, but they create a constant battle with falling
                leaves, pine needles, and debris. Gutter guards eliminate the hassle and protect your home.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-dark">Prevent Water Damage</strong>
                    <p className="text-gray text-sm">Clogged gutters cause water to overflow, damaging foundations, siding, and landscaping.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-dark">Eliminate Gutter Cleaning</strong>
                    <p className="text-gray text-sm">Stop climbing ladders 2-4 times per year to clean out debris.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-dark">Prevent Pest Infestations</strong>
                    <p className="text-gray text-sm">Standing water and debris attract mosquitoes, birds, and rodents.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-dark">Extend Gutter Lifespan</strong>
                    <p className="text-gray text-sm">Guards prevent rust and corrosion caused by trapped debris and moisture.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-dark">Reduce Ice Dam Risk</strong>
                    <p className="text-gray text-sm">Clear gutters reduce ice buildup during Charlotte's occasional winter freezes.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Gutter guard installation protecting Charlotte NC home"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-dark">5.0 Rating</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.googleReviewCount}+ Google Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Charlotte Homeowners Choose Best Roofing Now
            </h2>
            <p className="text-gray text-lg">
              When you need gutter guard installation in Charlotte, you want a company you can trust.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-6 bg-light rounded-xl">
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

      <YouTubeShort
        videoId="CXaG6atl-nE"
        title="The $10,000 Gutter Mistake"
        heading="Watch: The $10,000 Gutter Mistake"
        description="See why gutter guards are one of the best investments you can make for your home."
      />

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready for Clog-Free Gutters?
              </h2>
              <p className="text-white/90">
                Get a free estimate on professional gutter guard installation for your Charlotte home.
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
              Gutter Guard Installation Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              We install gutter guards for homeowners throughout the Greater Charlotte metro area.
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
              Browse our portfolio of completed gutter and roofing projects throughout the Charlotte area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Gutter guard installation in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="Professional gutter protection by Best Roofing Now"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of gutter guard project in Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Complete gutter protection system installation"
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
                Gutter Guard FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about gutter guards in Charlotte NC.
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
        slug="gutter-guards-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/gutter-guards-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Gutter Guards"

      />

      <CTASection
        title="Ready to Protect Your Gutters?"
        subtitle="Get a free, no-obligation estimate on gutter guard installation for your Charlotte home. Say goodbye to clogged gutters forever."
      />
    </>
  );
}
