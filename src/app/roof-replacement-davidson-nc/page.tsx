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
  MapPin,
  RefreshCw,
  Leaf,
  Landmark,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roof Replacement Davidson NC',
  description:
    'Need a new roof in Davidson NC? Best Roofing Now specializes in roof replacement for Davidson homes, including historic properties near Davidson College. BBB A+ rated, veteran-owned. Premium materials with 50-year warranties. Free estimates!',
  keywords: [
    'roof replacement Davidson NC',
    'new roof Davidson NC',
    'Davidson roof replacement',
    'reroofing Davidson NC',
    'roof installation Davidson',
    'Davidson College area roofer',
    'historic home roofing Davidson',
    'shingle roof replacement Davidson',
    'metal roof Davidson NC',
    'roofing contractor Davidson NC',
    'roof replacement near me Davidson',
    'best roofer Davidson NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-replacement-davidson-nc`,
  },
  openGraph: {
    title: 'Roof Replacement Davidson NC | Davidson College Area | Best Roofing Now',
    description:
      'Expert roof replacement in Davidson NC. Specializing in historic homes and Davidson College area properties. BBB A+ rated, veteran-owned. Premium materials with extended warranties.',
    url: `${SITE_CONFIG.url}/roof-replacement-davidson-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.metalRoof,
        width: 1200,
        height: 630,
        alt: 'Professional roof replacement services in Davidson NC - Best Roofing Now',
      },
    ],
  },
};

// Replacement services offered
const replacementServices = [
  {
    icon: Home,
    title: 'Residential Roof Replacement',
    description: 'Complete tear-off and replacement for Davidson homes with premium roofing materials.',
    href: '/services/roof-replacement',
  },
  {
    icon: Landmark,
    title: 'Historic Home Roofing',
    description: 'Specialized roofing for Davidson\'s historic homes that preserves character while improving protection.',
    href: '/services/residential-roofing',
  },
  {
    icon: RefreshCw,
    title: 'Architectural Shingles',
    description: 'Premium dimensional shingles from CertainTeed, GAF, and Owens Corning with 50-year warranties.',
    href: '/services/roof-replacement',
  },
  {
    icon: Building2,
    title: 'Metal Roofing',
    description: 'Long-lasting metal roof systems perfect for Davidson\'s climate with 50+ year lifespans.',
    href: '/services/residential-roofing',
  },
  {
    icon: Leaf,
    title: 'Energy-Efficient Options',
    description: 'Cool roofing systems that reduce energy costs and qualify for energy efficiency rebates.',
    href: '/services/roof-replacement',
  },
  {
    icon: Wrench,
    title: 'Full-Service Installation',
    description: 'Complete service including tear-off, decking repair, underlayment, and cleanup.',
    href: '/services/roof-replacement',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Davidson homeowners.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: CheckCircle,
    title: 'Certified Installers',
    description: 'CertainTeed, GAF, and Owens Corning certified for premium warranty coverage.',
  },
  {
    icon: Landmark,
    title: 'Historic Home Experts',
    description: 'Experience with Davidson\'s historic homes and preservation-sensitive installations.',
  },
  {
    icon: Users,
    title: 'Local Knowledge',
    description: 'We understand Davidson\'s architectural styles and neighborhood requirements.',
  },
];

// Davidson neighborhoods/areas served
const davidsonAreas = [
  'Downtown Davidson',
  'Davidson College Area',
  'Historic District',
  'River Run',
  'Westbranch',
  'Bradford',
  'Village of Davidson',
  'St. Alban\'s',
  'McConnell',
  'Summers Walk',
  'Harbour Place',
  'Davidson Landing',
  'Potts-Sloan-Beatty',
  'Oak Street Area',
  'Main Street',
  'Lake Norman Waterfront',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Cornelius', href: '/roof-repair-cornelius-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Denver', href: '/roof-replacement-denver-nc' },
  { name: 'Lake Norman Area', href: '/locations/lake-norman' },
];

// FAQs about roof replacement in Davidson
const faqs = [
  {
    question: 'How much does a roof replacement cost in Davidson NC?',
    answer:
      'Roof replacement costs in Davidson typically range from $8,000-$25,000 for most homes, depending on size, pitch, material choice, and complexity. Historic homes may cost more due to special requirements. We provide detailed free estimates with transparent pricing. Financing options are available to make your new roof affordable.',
  },
  {
    question: 'How long does a roof replacement take in Davidson?',
    answer:
      'Most residential roof replacements in Davidson are completed in 1-3 days. Larger homes, complex roof designs, or historic properties may take 3-5 days. We work efficiently while maintaining quality standards and always clean up thoroughly when finished.',
  },
  {
    question: 'What roofing materials do you recommend for Davidson homes?',
    answer:
      'For most Davidson homes, we recommend premium architectural shingles from CertainTeed, GAF, or Owens Corning - they offer excellent durability and aesthetic appeal. For historic homes, we can match period-appropriate styles. Metal roofing is an excellent long-term investment, especially for lakefront properties. We\'ll recommend the best option for your specific home and budget.',
  },
  {
    question: 'Do you work on historic homes in Davidson?',
    answer:
      'Yes! Best Roofing Now has extensive experience with Davidson\'s historic homes. We understand the importance of maintaining architectural integrity while providing modern protection. We work with appropriate materials and techniques that respect your home\'s character and can coordinate with the Historic Davidson Commission if needed.',
  },
  {
    question: 'What warranties do you offer on roof replacements?',
    answer:
      'We offer comprehensive warranty coverage including manufacturer warranties up to 50 years on materials and our own workmanship warranty. As CertainTeed, GAF, and Owens Corning certified installers, we can offer enhanced warranty options like GAF Golden Pledge (50 years material + 25 years workmanship) and CertainTeed SureStart PLUS.',
  },
  {
    question: 'Can I stay in my home during a roof replacement?',
    answer:
      'Yes, you can absolutely stay in your home during the replacement. There will be noise during work hours (typically 7am-6pm), and we take every precaution to protect your property. We use tarps, catch falling debris, and clean up thoroughly each day. Most Davidson homeowners choose to stay home throughout the process.',
  },
  {
    question: 'Do you offer financing for roof replacement in Davidson?',
    answer:
      'Yes, we offer flexible financing options to make your new roof affordable. We work with several lending partners to provide competitive rates and terms. Many Davidson homeowners choose 0% interest options when available, or longer-term financing to keep monthly payments low.',
  },
  {
    question: 'How do I know if I need a roof replacement vs. repair?',
    answer:
      'Schedule a free inspection and we\'ll provide an honest assessment. Generally, if your roof is over 20 years old, has widespread damage, or you\'re experiencing multiple leaks, replacement is often more cost-effective than ongoing repairs. We\'ll never push for replacement if repairs can effectively address the issue.',
  },
];

export default function RoofReplacementDavidsonNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Replacement Davidson NC', url: `${SITE_CONFIG.url}/roof-replacement-davidson-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.metalRoof}
            alt="Professional roof replacement services in Davidson NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Historic Home Specialists | Certified Installers</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Replacement <br className="hidden md:block" />
              <span className="text-accent-light">Davidson NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium roofing for Davidson homes and historic properties
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Is it time for a new roof on your Davidson home? Best Roofing Now specializes in roof replacement
              for Davidson's unique mix of historic homes and modern properties. Our certified installers use
              premium materials backed by industry-leading warranties up to 50 years.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Replacement Quote
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
                50-Year Warranties Available
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
              Roof Replacement Services in Davidson NC
            </h2>
            <p className="text-gray text-lg">
              From classic shingles to modern metal roofing, we offer complete replacement services
              tailored to Davidson's architectural heritage and Lake Norman's climate.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {replacementServices.map((service) => (
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

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Davidson Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When investing in a new roof for your Davidson home, you want a company that understands
                the community. Best Roofing Now combines deep roofing expertise with knowledge of Davidson's
                unique architectural styles and homeowner needs.
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
                src={IMAGES.realProjects.project13}
                alt="Best Roofing Now - Trusted roof replacement company serving Davidson NC"
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
                Ready for a New Roof in Davidson?
              </h2>
              <p className="text-white/90">
                Get a free quote with financing options from Davidson's trusted roofing experts.
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
                Schedule Free Quote
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
              Roof Replacement Throughout Davidson & Lake Norman
            </h2>
            <p className="text-gray text-lg">
              We provide premium roof replacement services to homeowners throughout Davidson and the Lake Norman area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Davidson Areas */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Davidson Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {davidsonAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
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

      {/* Roofing Materials Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Premium Roofing Materials for Davidson Homes
            </h2>
            <p className="text-gray text-lg">
              We use only the highest quality roofing materials from trusted manufacturers, backed by extensive warranties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">CertainTeed Landmark</h3>
              <p className="text-gray text-sm">
                Premium architectural shingles with a classic aesthetic perfect for Davidson's traditional homes.
                Lifetime limited warranty available.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">GAF Timberline HDZ</h3>
              <p className="text-gray text-sm">
                America's #1 selling shingle with superior wind resistance up to 130 mph. Ideal for Lake Norman storms.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Owens Corning Duration</h3>
              <p className="text-gray text-sm">
                SureNail technology for exceptional wind resistance and patented tru-bond weathering asphalt.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Standing Seam Metal</h3>
              <p className="text-gray text-sm">
                Long-lasting metal roofing with 50+ year lifespan. Energy efficient and perfect for lakefront homes.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Designer Shingles</h3>
              <p className="text-gray text-sm">
                Premium designer shingles that replicate slate or cedar for historic homes without the weight or cost.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Impact-Resistant Options</h3>
              <p className="text-gray text-sm">
                Class 4 impact-resistant shingles that may qualify for insurance discounts in Davidson.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Replacement Work in Davidson
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roof replacement projects throughout Davidson and Lake Norman.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Completed roof replacement in Davidson NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed shingle installation in Davidson"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of completed roof replacement near Davidson College"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional roof replacement by Best Roofing Now in Davidson"
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
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roof Replacement FAQs for Davidson
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof replacement services in Davidson NC.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Strip */}
      <GeoProjectGalleryStrip
        pageType="location"
        city="Davidson"
        slug="roof-replacement-davidson-nc"
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Davidson"

        state="NC"

        citySlug="davidson-nc"

        service="Roof Replacement"

      />

      <CTASection
        title="Ready to Replace Your Davidson Roof?"
        subtitle="Get a free, no-obligation quote from Davidson's trusted roofing experts. We'll help you choose the perfect roofing system for your home and budget."
      />
    </>
  );
}
