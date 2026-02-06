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
  Hammer,
  FileText,
  Handshake,
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
  title: 'New Construction Roofing Charlotte',
  description:
    'Professional new construction roofing services in Charlotte NC. Reliable builder partnerships, quality materials, and on-schedule completion. BBB A+ rated, veteran-owned company.',
  keywords: [
    'new construction roofing Charlotte NC',
    'new home roofing Charlotte',
    'builder roofing services Charlotte',
    'residential builder roofer Charlotte',
    'new build roofing contractor',
    'construction roofing Charlotte NC',
    'builder roofing partnerships Charlotte',
    'new home roof installation Charlotte',
    'tract home roofing Charlotte',
    'custom home roofing Charlotte NC',
    'roofing contractor for builders',
    'new construction roof Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/new-construction-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'New Construction Roofing Charlotte NC | Builder Services | Best Roofing Now',
    description:
      'Reliable new construction roofing for Charlotte builders. Quality materials, on-schedule completion, competitive pricing.',
    url: `${SITE_CONFIG.url}/new-construction-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'New construction roofing Charlotte NC - Best Roofing Now builder services',
      },
    ],
  },
};

// Builder services
const services = [
  {
    icon: Home,
    title: 'Single-Family New Construction',
    description: 'Complete roofing solutions for new single-family homes from foundation to finish.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Multi-Family & Townhomes',
    description: 'Efficient roofing for townhome developments and multi-family residential projects.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Hammer,
    title: 'Custom Home Roofing',
    description: 'Premium materials and specialized installation for custom and luxury homes.',
    href: '/services/residential-roofing',
  },
  {
    icon: Handshake,
    title: 'Builder Partnership Programs',
    description: 'Dedicated account management and volume pricing for production builders.',
    href: '/contact',
  },
  {
    icon: FileText,
    title: 'Material Selection Consulting',
    description: 'Help buyers choose the right roofing materials, colors, and upgrades.',
    href: '/services/roof-replacement',
  },
  {
    icon: Wrench,
    title: 'Warranty Service Support',
    description: 'Reliable warranty coverage and responsive post-construction service.',
    href: '/services/roof-repair',
  },
];

// Why builders choose us
const whyChooseUs = [
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We understand construction schedules. We show up on time and complete work on schedule.',
  },
  {
    icon: Award,
    title: 'Quality Craftsmanship',
    description: 'Factory-certified installers ensure every roof meets or exceeds manufacturer specifications.',
  },
  {
    icon: Users,
    title: 'Dedicated Crews',
    description: 'Consistent crews familiar with your specifications and quality standards.',
  },
  {
    icon: Shield,
    title: 'Fully Licensed & Insured',
    description: 'Full liability coverage and workers comp protect you and your projects.',
  },
  {
    icon: Star,
    title: 'Builder References',
    description: 'Proven track record with Charlotte-area builders and developers.',
  },
  {
    icon: Handshake,
    title: 'Competitive Pricing',
    description: 'Volume pricing and builder programs that help your bottom line.',
  },
];

// Materials offered
const materialOptions = [
  {
    name: 'Architectural Shingles',
    description: 'Premium dimensional shingles from CertainTeed, GAF, and Owens Corning with 30-50 year warranties.',
  },
  {
    name: 'Metal Roofing',
    description: 'Standing seam and metal shingle options for modern and contemporary designs.',
  },
  {
    name: 'Tile Roofing',
    description: 'Clay and concrete tile for Mediterranean, Spanish, and upscale custom homes.',
  },
  {
    name: 'Synthetic Slate & Shake',
    description: 'Low-maintenance alternatives that replicate the look of natural materials.',
  },
  {
    name: 'Flat Roofing Systems',
    description: 'TPO, EPDM, and modified bitumen for flat and low-slope applications.',
  },
  {
    name: 'Premium Upgrades',
    description: 'Enhanced ventilation, ice/water shield, and impact-resistant shingles available.',
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

// FAQs for builders
const faqs = [
  {
    question: 'Do you offer volume pricing for builders?',
    answer:
      'Yes, we offer competitive volume pricing for builders with ongoing new construction projects. Our builder partnership program includes dedicated account management, priority scheduling, and pricing structures that improve with volume. Contact us to discuss your specific needs and project pipeline.',
  },
  {
    question: 'How do you handle scheduling for new construction?',
    answer:
      'We understand that timing is critical in new construction. We work directly with your superintendent or project manager to coordinate with your construction schedule. Our dedicated crews are trained to complete work efficiently and can often dry-in a home in a single day, keeping your project on track.',
  },
  {
    question: 'What roofing materials do you recommend for new construction?',
    answer:
      'For most new construction in Charlotte, we recommend architectural shingles from CertainTeed, GAF, or Owens Corning. These offer excellent durability, warranty coverage, and curb appeal at competitive prices. For custom and luxury homes, we also install metal, tile, and synthetic slate/shake roofing.',
  },
  {
    question: 'Do you offer buyer upgrade options?',
    answer:
      'Yes, we work with builders to offer homebuyer upgrade packages. Common upgrades include premium shingle lines with enhanced warranties, impact-resistant shingles (which can reduce insurance costs), upgraded ventilation systems, and color options beyond the standard selections.',
  },
  {
    question: 'What is your warranty on new construction roofing?',
    answer:
      'Our new construction roofing includes comprehensive warranty coverage. Material warranties range from 30-50 years depending on the product selected. We also provide a 5-year workmanship warranty and can extend coverage through manufacturer programs like GAF Golden Pledge or CertainTeed SureStart PLUS.',
  },
  {
    question: 'Can you handle both large developments and custom homes?',
    answer:
      'Absolutely. We have the capacity and crews to handle production builder developments while also providing the detailed craftsmanship required for custom homes. Our team includes specialists experienced in both high-volume efficiency and custom work with complex roof designs.',
  },
  {
    question: 'How do you handle punch list items and warranty service?',
    answer:
      'We take warranty service seriously and respond promptly to punch list items. Our warranty team addresses any issues quickly to keep closings on schedule. We maintain detailed documentation for each home and stand behind our work throughout the warranty period.',
  },
  {
    question: 'Are you certified by major roofing manufacturers?',
    answer:
      'Yes, we are certified by CertainTeed (ShingleMaster), GAF (Factory-Certified), and Owens Corning (Preferred Contractor). These certifications allow us to offer enhanced warranties and ensure our installation meets manufacturer specifications.',
  },
];

export default function NewConstructionRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'New Construction Roofing Charlotte NC', url: `${SITE_CONFIG.url}/new-construction-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="New construction roofing Charlotte NC - Best Roofing Now builder services"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Handshake className="w-4 h-4" />
              <span className="text-sm font-semibold">Builder Partner Programs</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              New Construction Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Reliable roofing services for builders and developers
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is Charlotte's trusted new construction roofing partner. We deliver quality
              craftsmanship, on-time completion, and competitive pricing for production builders, custom home
              builders, and developers. Our certified crews and dedicated account management keep your projects
              on schedule.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Partner With Us
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
                {SITE_CONFIG.roofsInstalled}+ Roofs Installed
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
                Manufacturer Certified
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
              New Construction Roofing Services
            </h2>
            <p className="text-gray text-lg">
              Comprehensive roofing solutions for residential builders and developers throughout Charlotte.
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

      {/* Why Builders Choose Us */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Charlotte Builders Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                We understand what builders need: reliable crews, quality work, on-time completion, and competitive
                pricing. Our builder partnership program is designed to make your job easier.
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
                src={IMAGES.realProjects.drone1}
                alt="New construction roofing project in Charlotte NC"
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
                    <p className="font-bold text-dark">{SITE_CONFIG.roofsInstalled}+ Roofs</p>
                    <p className="text-sm text-gray">Installed in Charlotte</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Quality Roofing Materials
            </h2>
            <p className="text-gray text-lg">
              We install premium materials from industry-leading manufacturers with comprehensive warranty options.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materialOptions.map((material) => (
              <div key={material.name} className="bg-light rounded-xl p-6">
                <h3 className="font-bold text-dark mb-2">{material.name}</h3>
                <p className="text-gray text-sm">{material.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap justify-center items-center gap-8">
              <div className="text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-2" />
                <p className="font-bold text-dark">CertainTeed</p>
                <p className="text-sm text-gray">ShingleMaster</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-2" />
                <p className="font-bold text-dark">GAF</p>
                <p className="text-sm text-gray">Factory-Certified</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-2" />
                <p className="font-bold text-dark">Owens Corning</p>
                <p className="text-sm text-gray">Preferred Contractor</p>
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
                Ready to Partner With Us?
              </h2>
              <p className="text-white/90">
                Contact us to discuss your new construction roofing needs and builder partnership options.
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
                Request Quote
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
              Serving Builders Throughout Greater Charlotte
            </h2>
            <p className="text-gray text-lg">
              We provide new construction roofing services across the Charlotte metro and surrounding areas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Neighborhoods */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Neighborhoods</h3>
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
              New Construction Projects
            </h2>
            <p className="text-gray text-lg">
              Examples of our new construction roofing work throughout the Charlotte area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="New construction roof installation Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed shingle installation on new home"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of new construction roofing project"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Completed new home roof in Charlotte"
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
                <span className="text-sm font-semibold">Builder FAQs</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                New Construction Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Common questions from builders about our new construction roofing services.
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
        slug="new-construction-roofing-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/new-construction-roofing-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="New Construction Roofing"

      />

      <CTASection
        title="Partner With Charlotte's Trusted Roofing Contractor"
        subtitle="Contact us to discuss your new construction roofing needs. We offer competitive pricing, reliable scheduling, and quality craftsmanship for builders throughout the Charlotte metro."
      />
    </>
  );
}
