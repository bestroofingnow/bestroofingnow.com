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
  title: 'Roofing Beverly Woods Charlotte NC',
  description:
    'Trusted roofer in Beverly Woods Charlotte NC. Roofing for mid-century ranches and renovated homes. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'roofing beverly woods charlotte nc',
    'roofers beverly woods',
    'beverly woods roofing contractor',
    'south charlotte roofers beverly woods',
    'beverly woods roof repair',
    'beverly woods roof replacement',
    'mid-century ranch roofing charlotte',
    'architectural shingles beverly woods',
    'best roofer beverly woods charlotte',
    'beverly woods charlotte roofing services',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-beverly-woods-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing Beverly Woods Charlotte NC | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing contractor serving Beverly Woods in south Charlotte NC. Architectural shingles and metal roofing for mid-century and renovated homes. Free estimates.',
    url: `${SITE_CONFIG.url}/roofing-beverly-woods-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Beverly Woods Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Expert roofing for Beverly Woods\' mid-century ranches, split-levels, and beautifully renovated homes.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'Professional roofing for commercial properties along Park Road and Montford Drive near Beverly Woods.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Reliable repairs for aging mid-century roofing systems including flat sections, low slopes, and traditional pitches.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full replacement with architectural shingles or modern metal roofing that transforms mid-century homes.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Thorough inspections for Beverly Woods homes with detailed reports on condition, ventilation, and insulation.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Fast storm damage restoration for Beverly Woods\' mature tree canopy where wind and debris impact roofs.',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Beverly Woods homeowners.`,
  },
  {
    icon: Shield,
    title: 'Mid-Century Expertise',
    description: 'Deep experience with 1950s-1970s home designs including ranches, split-levels, and their unique roofing needs.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability insurance.',
  },
  {
    icon: Users,
    title: 'Premium Materials',
    description: 'CertainTeed, GAF, and Owens Corning shingles plus standing seam metal options for renovated homes.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services when Beverly Woods homeowners need us most.',
  },
];

// Beverly Woods neighborhoods and areas
const beverlyWoodsAreas = [
  'Beverly Woods',
  'Beverly Woods East',
  'Park Road',
  'Montford Drive',
  'Selwyn Avenue',
  'Fairview Road',
  'Runnymede Lane',
  'Knob Oak Lane',
  'Woodlark Lane',
  'Cheverton Lane',
  'Castleton Road',
  'Haverford Place',
  'Beverly Drive',
  'Fieldstone Road',
  'Woodhaven Drive',
  'Old Colony Road',
  'Quail Hollow Road',
  'Sharon Road West',
  'Park South Drive',
  'Colony Road',
];

// Nearby areas served
const nearbyAreas = [
  { name: 'SouthPark', href: '/roofing-southpark-charlotte-nc' },
  { name: 'Myers Park', href: '/roofing-myers-park-charlotte-nc' },
  { name: 'Foxcroft', href: '/roofing-southpark-charlotte-nc' },
  { name: 'Cotswold', href: '/roofing-cotswold-charlotte-nc' },
  { name: 'Dilworth', href: '/roofing-dilworth-charlotte-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Ballantyne', href: '/roofing-ballantyne-charlotte-nc' },
  { name: 'Quail Hollow', href: '/roofing-southpark-charlotte-nc' },
  { name: 'South End', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Pineville', href: '/roofing-pineville-nc' },
];

// FAQs specific to Beverly Woods
const faqs = [
  {
    question: 'What roofing services do you offer in Beverly Woods Charlotte NC?',
    answer:
      'Best Roofing Now provides complete roofing services in Beverly Woods including roof repair, roof replacement, new roof installation, storm damage repair, emergency services, and comprehensive inspections. We specialize in roofing for mid-century ranches, split-levels, and renovated homes with architectural shingles and metal roofing options.',
  },
  {
    question: 'How much does a roof replacement cost in Beverly Woods?',
    answer:
      'Roof replacement costs in Beverly Woods typically range from $10,000-$30,000 depending on home size (most are 2,000-4,000 sq ft), roof complexity, and material choice. Renovated homes with added dormers or second stories may cost more. We provide detailed, transparent estimates for every project.',
  },
  {
    question: 'What roofing materials work best for Beverly Woods\' mid-century homes?',
    answer:
      'Beverly Woods\' 1950s-1970s ranches and split-levels work beautifully with premium architectural shingles from CertainTeed, GAF, or Owens Corning. Many homeowners renovating these classic homes are also choosing standing seam metal roofing for a modern upgrade that complements the mid-century aesthetic.',
  },
  {
    question: 'Do many Beverly Woods homes need roof replacement?',
    answer:
      'Yes, Beverly Woods homes built in the 1950s-1970s have likely been through multiple roof replacements already. If your current roof is 20+ years old or showing signs of wear, we recommend a professional inspection. Many Beverly Woods homeowners use replacement as an opportunity to upgrade materials and improve energy efficiency.',
  },
  {
    question: 'How long does a roof replacement take in Beverly Woods?',
    answer:
      'Most Beverly Woods homes require 1-3 days for complete roof replacement, as many are single-story ranches with relatively straightforward roof designs. Renovated homes with added complexity may require additional time. We work efficiently while maintaining the highest quality standards.',
  },
  {
    question: 'Can you roof a flat or low-slope section on a mid-century home?',
    answer:
      'Absolutely. Many Beverly Woods mid-century ranches and split-levels feature flat or low-slope sections that require specialized roofing systems. We install TPO, modified bitumen, and standing seam metal on these areas, ensuring proper drainage and long-lasting waterproofing.',
  },
  {
    question: 'What warranty do you provide for Beverly Woods roofing projects?',
    answer:
      'We offer comprehensive warranty coverage including manufacturer warranties up to 50 years on materials and our own workmanship warranty. As certified installers for CertainTeed, GAF, and Owens Corning, we can offer enhanced warranties like GAF Golden Pledge and CertainTeed SureStart PLUS.',
  },
  {
    question: 'Do you handle insurance claims for storm damage in Beverly Woods?',
    answer:
      'Absolutely. Beverly Woods\' beautiful mature tree canopy makes homes susceptible to wind and debris damage during storms. We provide thorough documentation, work directly with insurance adjusters, and ensure your claim covers proper restoration with quality materials.',
  },
];

export default function RoofingBeverlyWoodsCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Beverly Woods Charlotte NC', url: `${SITE_CONFIG.url}/roofing-beverly-woods-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Professional roofing contractor in Beverly Woods Charlotte NC - Best Roofing Now crew"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">BBB A+ Rated | South Charlotte Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Beverly Woods <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Expert Roofing for South Charlotte's Classic Mid-Century Community
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is the trusted choice for Beverly Woods homeowners. We specialize in roofing
              for mid-century ranches, split-levels, and beautifully renovated homes, delivering expert
              craftsmanship with premium materials that protect and enhance this affluent south Charlotte neighborhood.
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
                Premium Materials
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Beverly Woods-Specific Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Quality Roofing for Beverly Woods' Classic and Renovated Homes
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Beverly Woods is one of south Charlotte's most established affluent neighborhoods, featuring
                classic mid-century ranches, split-levels, and an increasing number of beautifully renovated
                homes. Built primarily in the 1950s through 1970s, these homes range from 2,000 to 4,000
                square feet with home values from $400K to $800K.
              </p>
              <p>
                The charm of Beverly Woods lies in its mature tree canopy, generous lot sizes, and proximity
                to SouthPark and Park Road shopping. At Best Roofing Now, we understand the unique roofing
                challenges these mid-century homes present — from low-slope sections on ranches to the added
                complexity of second-story additions on renovated properties.
              </p>
              <p>
                Whether you own an original mid-century ranch on Montford Drive, a lovingly updated split-level
                in Beverly Woods East, or a newly renovated home near Park Road, our team delivers premium
                roofing solutions that protect your investment and enhance your home's character in this
                desirable neighborhood.
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
              Roofing Services in Beverly Woods
            </h2>
            <p className="text-gray text-lg">
              From mid-century ranch re-roofs to modern metal installations on renovated homes,
              our certified contractors deliver quality roofing for Beverly Woods' diverse housing stock.
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
                Why Beverly Woods Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Beverly Woods homeowners choose us because we understand mid-century homes and the unique
                roofing challenges they present. Our combination of experience, premium materials, and
                reliable craftsmanship makes us the trusted roofer for this classic south Charlotte neighborhood.
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
                src={IMAGES.hero.hero1}
                alt="Best Roofing Now - Trusted roofing contractor in Beverly Woods Charlotte NC"
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
                Need a Trusted Roofer in Beverly Woods?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from south Charlotte's trusted roofing experts.
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
              Serving All of Beverly Woods
            </h2>
            <p className="text-gray text-lg">
              We provide expert roofing services throughout Beverly Woods and surrounding south Charlotte neighborhoods.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Beverly Woods Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Beverly Woods Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {beverlyWoodsAreas.map((neighborhood) => (
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

      {/* Premium Materials Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Materials for Beverly Woods Homes
            </h2>
            <p className="text-gray text-lg">
              We offer materials that complement Beverly Woods' mid-century architecture
              and meet the needs of both original and renovated homes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Architectural Shingles</h3>
              <p className="text-gray text-sm">
                CertainTeed Landmark, GAF Timberline HDZ, and Owens Corning Duration shingles that add dimension and curb appeal to mid-century ranches and split-levels.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Standing Seam Metal</h3>
              <p className="text-gray text-sm">
                Modern standing seam metal roofing that transforms renovated Beverly Woods homes with a contemporary look, superior durability, and energy efficiency.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Low-Slope Solutions</h3>
              <p className="text-gray text-sm">
                TPO, modified bitumen, and specialty low-slope systems for the flat and low-pitch roof sections common on mid-century ranch-style homes.
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
              Our Work Near Beverly Woods
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roofing projects in Beverly Woods and surrounding south Charlotte neighborhoods.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Completed roof replacement in Beverly Woods Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed architectural shingle installation in south Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Aerial view of completed roof project near Beverly Woods"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Professional roofing work in Beverly Woods area"
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
                Beverly Woods Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in Beverly Woods Charlotte NC.
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
        slug="roofing-beverly-woods-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-beverly-woods-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Roofing Beverly Woods"
      />

      <CTASection
        title="Ready for Expert Roofing in Beverly Woods?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide recommendations tailored to your Beverly Woods home."
      />
    </>
  );
}
