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
  Building2,
  CloudRain,
  Search,
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
  title: 'Roofing SouthPark Charlotte NC',
  description:
    'Looking for a trusted roofer in SouthPark Charlotte NC? Best Roofing Now serves the SouthPark Mall area with premium roofing services for upscale neighborhoods. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'roofing southpark charlotte nc',
    'roof repair southpark',
    'southpark roofing contractor',
    'southpark mall area roofers',
    'southpark roof replacement',
    'roofing company southpark nc',
    'upscale home roofing southpark',
    'best roofer southpark charlotte',
    'southpark charlotte roofing services',
    'roofers near southpark mall',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-southpark-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing SouthPark Charlotte NC | SouthPark Mall Area | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing contractor serving SouthPark Charlotte NC. Premium roofing services for upscale neighborhoods near SouthPark Mall. Free estimates.',
    url: `${SITE_CONFIG.url}/roofing-southpark-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in SouthPark Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Luxury Home Roofing',
    description: 'Premium roofing solutions for SouthPark\'s elegant homes with designer shingles and high-end materials.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'Expert commercial roofing for SouthPark businesses, retail centers, and office buildings.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, and storm damage in SouthPark.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with premium materials that enhance your home\'s value.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Free comprehensive inspections for SouthPark homeowners with detailed photo reports.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration and insurance claim assistance for SouthPark residents.',
    href: '/services/storm-damage',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied SouthPark homeowners.`,
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
    title: 'Premium Materials',
    description: 'We use only the finest materials from CertainTeed, GAF, and Owens Corning.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services when SouthPark homeowners need us most.',
  },
];

// SouthPark neighborhoods and communities
const southparkNeighborhoods = [
  'SouthPark',
  'Barclay Downs',
  'Foxcroft',
  'Quail Hollow',
  'Sharon Woods',
  'Fairmeade',
  'Colony Woods',
  'Sharon View',
  'Mountainbrook',
  'Park Crossing',
  'Morrocroft',
  'Sharon Square',
  'Park South Station',
  'Raintree',
  'Pineville-Matthews Road',
  'Carnegie',
  'Lansdowne',
  'Colony Park',
  'Olde Providence',
  'Carmel Country Club',
];

// Nearby areas served
const nearbyAreas = [
  { name: 'Myers Park', href: '/roofing-myers-park-charlotte-nc' },
  { name: 'Ballantyne', href: '/roofing-ballantyne-charlotte-nc' },
  { name: 'Dilworth', href: '/roofing-dilworth-charlotte-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Pineville', href: '/locations/pineville-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Cotswold', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Eastover', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Providence Plantation', href: '/roofing-ballantyne-charlotte-nc' },
  { name: 'Quail Hollow', href: '/roofing-contractor-charlotte-nc' },
];

// FAQs specific to SouthPark
const faqs = [
  {
    question: 'What roofing services do you offer in SouthPark Charlotte NC?',
    answer:
      'Best Roofing Now provides complete roofing services in SouthPark including roof repair, roof replacement, new roof installation, storm damage repair, emergency roofing services, and free roof inspections. We specialize in premium architectural shingles and designer roofing that complements SouthPark\'s upscale homes.',
  },
  {
    question: 'Why should SouthPark homeowners choose Best Roofing Now?',
    answer:
      'SouthPark homeowners choose us because we understand the high expectations of this prestigious area. We\'re BBB A+ rated, veteran-owned, and use only premium materials. Our attention to detail, professional crew, and commitment to cleanliness matches the standards of SouthPark\'s discerning residents.',
  },
  {
    question: 'How much does a roof replacement cost in SouthPark?',
    answer:
      'Roof replacement costs in SouthPark typically range from $12,000-$30,000+ depending on home size, roof complexity, and material choice. Many SouthPark homes feature architectural shingles or premium materials that enhance curb appeal. We provide free, detailed estimates with transparent pricing.',
  },
  {
    question: 'Do you work with SouthPark HOAs?',
    answer:
      'Yes, we have extensive experience working with SouthPark HOAs and neighborhood associations. We understand the architectural guidelines and approval processes for communities like Foxcroft, Quail Hollow, and Barclay Downs. We can help select materials that meet HOA requirements.',
  },
  {
    question: 'How long does a roof replacement take in SouthPark?',
    answer:
      'Most SouthPark roof replacements are completed in 1-3 days, depending on the size and complexity of your home. Larger homes or complex roof designs may take 3-5 days. We work efficiently while maintaining meticulous attention to detail and always clean up thoroughly.',
  },
  {
    question: 'Do you offer financing for roofing projects in SouthPark?',
    answer:
      'Yes, we offer flexible financing options for SouthPark homeowners including 0% APR for qualified buyers. This makes it easier to invest in premium roofing materials that protect your investment and enhance your home\'s value in the competitive SouthPark market.',
  },
  {
    question: 'What warranty do you provide on SouthPark roofing projects?',
    answer:
      'We offer comprehensive warranty coverage including manufacturer warranties up to 50 years on materials and our own workmanship warranty. As certified installers, we can offer enhanced warranties like GAF Golden Pledge and CertainTeed SureStart PLUS protection.',
  },
  {
    question: 'Do you handle insurance claims for storm damage in SouthPark?',
    answer:
      'Absolutely. We have extensive experience with insurance claims for storm damage in SouthPark. We provide thorough documentation, meet with adjusters, and advocate for fair settlements. Charlotte\'s severe weather makes storm damage coverage a common need for SouthPark homeowners.',
  },
];

export default function RoofingSouthParkCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing SouthPark Charlotte NC', url: `${SITE_CONFIG.url}/roofing-southpark-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Professional roofing contractor in SouthPark Charlotte NC - Best Roofing Now crew"
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
              Roofing SouthPark <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium Roofing Services for the SouthPark Mall Area
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is the trusted choice for SouthPark homeowners seeking exceptional roofing services.
              From the prestigious neighborhoods around SouthPark Mall to Foxcroft and Quail Hollow, we deliver
              quality that matches the elegance of Charlotte's premier shopping and residential district.
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
                Premium Materials
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SouthPark-Specific Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Premium Roofing Services for SouthPark's Elegant Homes
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                SouthPark is the heart of Charlotte's upscale living and shopping experience. With its beautiful
                tree-lined streets, prestigious neighborhoods like Foxcroft and Barclay Downs, and proximity to
                world-class amenities, SouthPark homeowners deserve roofing services that match their community's elegance.
              </p>
              <p>
                At Best Roofing Now, we've proudly served SouthPark residents with premium roofing solutions that
                protect and enhance their significant investments. Whether you live near SouthPark Mall, in the
                exclusive Quail Hollow area, or anywhere in between, our certified team delivers exceptional
                craftsmanship using only the finest materials.
              </p>
              <p>
                We understand that SouthPark homes often feature distinctive architectural details and complex roof
                designs that require specialized expertise. Our certified installers are trained to handle these
                challenges while maintaining the aesthetic integrity that makes SouthPark one of Charlotte's most
                desirable addresses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Roofing Services in SouthPark
            </h2>
            <p className="text-gray text-lg">
              From premium roof replacements to emergency repairs, our certified contractors deliver
              exceptional quality for SouthPark's discerning homeowners.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
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

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why SouthPark Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When you're looking for a roofing contractor in SouthPark, you want a company that understands
                the expectations of Charlotte's most prestigious neighborhoods. Best Roofing Now has built our
                reputation on delivering exceptional quality and service that matches SouthPark's refined standards.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item) => (
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
                src={IMAGES.realProjects.drone2}
                alt="Best Roofing Now - Trusted roofing contractor in SouthPark Charlotte NC"
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

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Need a Roofing Contractor in SouthPark?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Charlotte's most trusted roofing company.
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
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serving All SouthPark Neighborhoods
            </h2>
            <p className="text-gray text-lg">
              We provide premium roofing services throughout SouthPark and surrounding Charlotte neighborhoods.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* SouthPark Neighborhoods */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">SouthPark Communities We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {southparkNeighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Nearby Areas We Serve</h3>
              <div className="grid grid-cols-2 gap-3">
                {nearbyAreas.map((area) => (
                  <Link
                    key={area.name}
                    href={area.href}
                    className="flex items-center gap-2 text-gray hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>{area.name}</span>
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

      {/* Certifications Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Certified for Premium Roofing Excellence
            </h2>
            <p className="text-gray text-lg">
              Our certifications from industry-leading manufacturers mean SouthPark homeowners get premium
              materials backed by the best warranty coverage available.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">CertainTeed SELECT ShingleMaster</h3>
              <p className="text-gray text-sm">
                Top-tier certification with access to premium warranties and specialized training.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">GAF Factory-Certified</h3>
              <p className="text-gray text-sm">
                Authorized to offer GAF's Golden Pledge warranty - the best in the industry.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Owens Corning Preferred</h3>
              <p className="text-gray text-sm">
                Preferred Contractor status with Owens Corning for extended warranty options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Work in the SouthPark Area
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roofing projects in SouthPark and surrounding areas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Completed residential roof replacement in SouthPark Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed shingle installation in SouthPark"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Aerial view of completed roof project in SouthPark"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional roofing work in SouthPark area"
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
                SouthPark Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in SouthPark Charlotte NC.
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
        slug="roofing-southpark-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-southpark-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Roofing Southpark"

      />

      <CTASection
        title="Ready to Work with SouthPark's Best Roofers?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations tailored to your SouthPark home."
      />
    </>
  );
}
