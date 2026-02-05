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
  Search,
  Leaf,
  CloudRain,
  MapPin,
  FileText,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Spring Roof Inspection Charlotte',
  description:
    'Free spring roof inspections in Charlotte NC. Assess winter damage, clear debris, and prepare for spring storms. Expert post-winter evaluation with detailed reports and photos.',
  keywords: [
    'spring roof inspection Charlotte NC',
    'roof inspection spring Charlotte',
    'post-winter roof check',
    'winter damage assessment Charlotte',
    'spring roof maintenance',
    'free roof inspection Charlotte NC',
    'spring roofing services',
    'roof debris cleaning',
    'Charlotte spring roofer',
    'seasonal roof inspection',
    'roof condition assessment',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/spring-roof-inspection-charlotte-nc`,
  },
  openGraph: {
    title: 'Spring Roof Inspection Charlotte NC | Post-Winter Check | Best Roofing Now',
    description:
      'Free spring roof inspections in Charlotte NC. Catch winter damage early and prepare for spring storms. BBB A+ rated, veteran-owned.',
    url: `${SITE_CONFIG.url}/spring-roof-inspection-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero7,
        width: 1200,
        height: 630,
        alt: 'Spring roof inspection services in Charlotte NC - Best Roofing Now post-winter experts',
      },
    ],
  },
};

// Spring-specific services
const springServices = [
  {
    icon: Search,
    title: 'Free Spring Inspection',
    description: 'Comprehensive post-winter roof assessment with detailed report and photos.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Winter Damage Assessment',
    description: 'Identify damage from ice, snow, and freeze-thaw cycles before it worsens.',
    href: '/services/roof-repair',
  },
  {
    icon: Leaf,
    title: 'Spring Cleaning',
    description: 'Remove winter debris, leaves, and buildup that can trap moisture and cause damage.',
    href: '/services/gutters',
  },
  {
    icon: Home,
    title: 'Gutter Inspection',
    description: 'Check gutters and downspouts for winter damage and proper drainage.',
    href: '/services/gutter-services',
  },
  {
    icon: Wrench,
    title: 'Preventive Repairs',
    description: 'Address minor issues found during inspection before spring storms arrive.',
    href: '/services/roof-repair',
  },
  {
    icon: FileText,
    title: 'Documentation',
    description: 'Detailed written report with photos for your records and insurance purposes.',
    href: '/services/roof-inspection',
  },
];

// Why choose us points for spring
const whyChooseUs = [
  {
    icon: Award,
    title: 'Thorough Inspections',
    description: 'Our certified inspectors check every component - shingles, flashing, vents, gutters, and more.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Charlotte homeowners.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned with attention to detail honed through military service.',
  },
  {
    icon: CheckCircle,
    title: 'Honest Assessments',
    description: 'We tell you exactly what we find - no upselling, no pressure, just the facts.',
  },
  {
    icon: Users,
    title: 'Certified Inspectors',
    description: 'Our team is trained and certified by CertainTeed, GAF, and Owens Corning.',
  },
  {
    icon: Clock,
    title: 'Same-Day Reports',
    description: 'Receive your detailed inspection report with photos the same day.',
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

// FAQs about spring roof inspection
const faqs = [
  {
    question: 'Why should I get a spring roof inspection in Charlotte?',
    answer:
      'Spring is the ideal time to assess any damage from Charlotte\'s winter weather. Even our mild winters include freeze-thaw cycles, occasional ice storms, and heavy rains that stress roofing materials. A spring inspection catches problems early when they\'re less expensive to repair and prepares your roof for spring thunderstorm season. It\'s also the perfect time to clean debris that accumulated over winter before it causes moisture problems.',
  },
  {
    question: 'Is the spring roof inspection really free?',
    answer:
      'Yes, Best Roofing Now offers completely free, no-obligation spring roof inspections throughout Charlotte. Our certified inspector will thoroughly examine your roof, identify any issues, and provide a detailed written report with photos. There\'s no pressure to hire us for repairs - we believe in building relationships through honest, helpful service. Many homeowners use our free inspections annually as part of their home maintenance routine.',
  },
  {
    question: 'What does your spring inspection include?',
    answer:
      'Our comprehensive spring inspection covers shingle condition (looking for winter damage, granule loss, cracking), flashing around vents, chimneys, and skylights, vent and boot seals, gutter condition and drainage, soffit and fascia inspection, debris assessment and removal recommendations, attic ventilation check, and documentation with photos. We provide a written report same-day with our findings and recommendations.',
  },
  {
    question: 'What signs of winter damage do you look for?',
    answer:
      'We look for specific winter damage indicators including lifted or displaced shingles from wind, cracked shingles from freeze-thaw cycles, ice dam damage along eaves, flashing that\'s pulled away or compromised, vent boot cracks from temperature fluctuations, gutter damage from ice weight, soffit or fascia damage from ice backup, and any signs of moisture intrusion in the attic. Charlotte winters may be mild, but they still take a toll.',
  },
  {
    question: 'How long does a spring roof inspection take?',
    answer:
      'A typical spring inspection takes 30-60 minutes depending on roof size, complexity, and accessibility. We don\'t rush - our goal is a thorough evaluation that catches problems before they become expensive repairs. If we find significant issues that warrant closer examination, we may take additional time. You\'ll receive your detailed report with photos the same day.',
  },
  {
    question: 'Should I clean my roof in spring?',
    answer:
      'Yes, spring cleaning is important for your roof\'s health. Over winter, leaves, pine needles, branches, and debris accumulate in valleys, around penetrations, and in gutters. This debris traps moisture against roofing materials, promotes moss and algae growth, and can clog drainage. We recommend professional cleaning for safety, but at minimum, ensure gutters are clear and visible debris is removed from valleys.',
  },
  {
    question: 'How often should I have my roof inspected?',
    answer:
      'We recommend annual roof inspections for most Charlotte homes, ideally in spring after winter. Additionally, you should have your roof inspected after any significant storm event (hail, high winds, heavy rain), when buying or selling a home, when you notice interior signs like water stains, and when your roof reaches 15+ years of age. Regular inspections catch small problems before they become costly repairs.',
  },
  {
    question: 'What happens if you find damage during the inspection?',
    answer:
      'If we find damage or issues during your spring inspection, we\'ll document everything with photos and explain our findings clearly. We\'ll provide repair recommendations with estimated costs and prioritize issues from urgent to routine. There\'s no pressure to make decisions on the spot or hire us for repairs. If it\'s storm damage that might be covered by insurance, we can help you understand your options and assist with the claims process if you choose.',
  },
];

export default function SpringRoofInspectionCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Spring Roof Inspection Charlotte NC', url: `${SITE_CONFIG.url}/spring-roof-inspection-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero7}
            alt="Spring roof inspection in Charlotte NC - Best Roofing Now post-winter experts"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-semibold">Free Post-Winter Inspections</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Spring Roof Inspection <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Free post-winter assessment to catch damage before spring storms
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Winter takes a toll on Charlotte roofs. Our free spring inspection identifies damage from freeze-thaw
              cycles, clears winter debris, and prepares your roof for thunderstorm season. Get a detailed report with
              photos and honest recommendations - no pressure, no obligation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Free Inspection
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
                100% Free Inspections
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Spring Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Spring Roofing Services in Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              Comprehensive spring services to assess winter damage, prepare for storm season, and keep your roof in
              top condition.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {springServices.map((service) => (
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
                Charlotte's Trusted Spring Inspection Experts
              </h2>
              <p className="text-gray text-lg mb-8">
                A thorough spring inspection is your best defense against expensive repairs. Our certified inspectors
                examine every component of your roof system and provide honest, detailed assessments you can trust -
                whether you need repairs or not.
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
                src={IMAGES.services.inspection}
                alt="Best Roofing Now - Spring roof inspection experts in Charlotte NC"
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
                Schedule Your Free Spring Inspection Today
              </h2>
              <p className="text-white/90">
                No cost, no obligation. Just honest answers about your roof's condition.
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
                Book Free Inspection
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
              Free Spring Inspections Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              Our inspection team serves homeowners throughout the Greater Charlotte metro area with free spring
              assessments.
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

      {/* Inspection Checklist Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Our Spring Inspection Covers
            </h2>
            <p className="text-gray text-lg">
              A comprehensive 25-point inspection to ensure nothing is missed.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2 text-center">Shingle Assessment</h3>
              <p className="text-gray text-sm text-center">
                Check for cracking, curling, granule loss, lifting, and other signs of winter damage or age.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2 text-center">Flashing & Seals</h3>
              <p className="text-gray text-sm text-center">
                Inspect all flashing, vent boots, pipe collars, and seals for cracks and separation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2 text-center">Structure & Drainage</h3>
              <p className="text-gray text-sm text-center">
                Evaluate gutters, downspouts, soffit, fascia, and overall structural integrity.
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
              Spring Roof Projects Across Charlotte
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of spring inspections and repairs throughout the Charlotte area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Spring roof inspection completed in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="Post-winter roof repair in Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of spring roof project in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional spring roofing work in Charlotte area"
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
                Spring Roof Inspection FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about spring roof inspections in Charlotte NC.
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

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="spring-roof-inspection-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/spring-roof-inspection-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Spring Roof Inspection"

      />

      <CTASection
        title="Ready for Your Free Spring Inspection?"
        subtitle="Schedule your complimentary post-winter roof assessment today. Our certified inspectors provide honest evaluations with detailed reports - no obligation, no pressure."
      />
    </>
  );
}
