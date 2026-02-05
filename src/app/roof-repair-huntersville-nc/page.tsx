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
  AlertTriangle,
  CloudRain,
  Search,
  MapPin,
  Zap,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocationSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roof Repair Huntersville NC',
  description:
    'Need roof repair in Huntersville NC? Best Roofing Now offers fast, reliable roof repair services including leak repair, storm damage, and emergency repairs. BBB A+ rated, veteran-owned. Free estimates!',
  keywords: [
    'roof repair Huntersville NC',
    'roofers Huntersville',
    'Huntersville roof repair',
    'roof leak repair Huntersville',
    'emergency roof repair Huntersville NC',
    'roof repair near me Huntersville',
    'storm damage repair Huntersville',
    'shingle repair Huntersville NC',
    'fix roof leak Huntersville',
    'roofing company Huntersville NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-repair-huntersville-nc`,
  },
  openGraph: {
    title: 'Roof Repair Huntersville NC | Fast Emergency Service | Best Roofing Now',
    description:
      'Fast, reliable roof repair in Huntersville NC. BBB A+ rated, veteran-owned roofing company. Emergency service available. Free estimates for all roof repairs.',
    url: `${SITE_CONFIG.url}/roof-repair-huntersville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Professional roof repair services in Huntersville NC - Best Roofing Now',
      },
    ],
  },
};

// Repair services offered
const repairServices = [
  {
    icon: AlertTriangle,
    title: 'Leak Repair',
    description: 'Fast identification and repair of roof leaks before they cause water damage to your Huntersville home.',
    href: '/services/roof-repair',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Expert repair of wind, hail, and storm damage with insurance claim assistance.',
    href: '/services/storm-damage',
  },
  {
    icon: Zap,
    title: 'Emergency Repairs',
    description: '24/7 emergency roof repair service for urgent situations that cannot wait.',
    href: '/services/emergency-roofing',
  },
  {
    icon: Home,
    title: 'Shingle Repair',
    description: 'Replacement of missing, cracked, or damaged shingles to restore your roof.',
    href: '/services/residential-roofing',
  },
  {
    icon: Wrench,
    title: 'Flashing Repair',
    description: 'Repair or replacement of damaged flashing around chimneys, vents, and skylights.',
    href: '/services/roof-repair',
  },
  {
    icon: Search,
    title: 'Free Inspection',
    description: 'Complimentary roof inspection to identify problems and provide honest repair recommendations.',
    href: '/services/roof-inspection',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Clock,
    title: 'Fast Response Time',
    description: 'Same-day service available for urgent roof repairs in Huntersville and Lake Norman area.',
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and excellent track record.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied customers throughout the region.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with a commitment to integrity and quality work.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability and workers comp insurance.',
  },
  {
    icon: Users,
    title: 'Expert Technicians',
    description: 'Certified repair specialists with years of experience diagnosing and fixing roof problems.',
  },
];

// Huntersville neighborhoods/areas
const huntersvilleAreas = [
  'Birkdale Village',
  'Rosedale',
  'Skybrook',
  'The Farms at Huntersville',
  'Vermillion',
  'Magnolia Estates',
  'Cedarfield',
  'Northstone Club',
  'Highland Creek',
  'Gilead Ridge',
  'Wynfield',
  'Beckett',
];

// Nearby cities
const nearbyCities = [
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Denver', href: '/roof-repair-denver-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
];

// FAQs specific to roof repair in Huntersville
const faqs = [
  {
    question: 'How quickly can you repair my roof in Huntersville?',
    answer:
      'For most roof repairs in Huntersville, we can respond the same day or next day. Emergency repairs are prioritized with our 24/7 service. Minor repairs like replacing a few shingles can often be completed in a few hours, while more extensive repairs may take 1-2 days. We always provide a clear timeline before starting work.',
  },
  {
    question: 'How much does roof repair cost in Huntersville NC?',
    answer:
      'Roof repair costs in Huntersville typically range from $200-$1,500 for most common repairs. Minor repairs like replacing a few shingles start around $200-$400. Leak repairs average $400-$900, while more extensive damage may cost $1,000-$1,500. We provide free inspections and upfront pricing with no hidden fees.',
  },
  {
    question: 'Do you offer emergency roof repair in Huntersville?',
    answer:
      'Yes! Best Roofing Now offers 24/7 emergency roof repair services in Huntersville and throughout the Lake Norman area. Whether you have an active leak, storm damage, or a tree on your roof, our emergency team responds quickly to prevent further damage and protect your home.',
  },
  {
    question: 'Will my insurance cover roof repairs in Huntersville?',
    answer:
      'Many roof repairs in Huntersville are covered by homeowners insurance, especially those caused by storms, hail, or fallen trees. We have extensive experience working with insurance companies and provide detailed documentation to support your claim. We offer free inspections to help determine if your damage may be covered.',
  },
  {
    question: 'How do I know if my roof needs repair or replacement?',
    answer:
      'We recommend repair when damage is localized and your roof still has significant life remaining. Signs you may need repair include a few missing shingles, minor leaks, or small areas of damage. Replacement is better when your roof is over 20 years old, has widespread damage, or when repairs would cost more than 30% of replacement cost. Our free inspection helps determine the best option.',
  },
  {
    question: 'What types of roof damage do you repair in Huntersville?',
    answer:
      'We repair all types of roof damage in Huntersville including: missing or damaged shingles, roof leaks, storm and hail damage, wind damage, flashing problems, vent boot failures, gutter damage, ice dam damage, and more. Our technicians are experienced with all roofing materials including asphalt shingles, metal, tile, and flat roofing systems.',
  },
  {
    question: 'Do you provide a warranty on roof repairs?',
    answer:
      'Yes, all our roof repairs in Huntersville come with a workmanship warranty. The specific warranty depends on the type of repair performed. We also use quality materials from manufacturers like CertainTeed, GAF, and Owens Corning, which carry their own material warranties. We stand behind our work 100%.',
  },
  {
    question: 'Can you repair my roof while I am at work?',
    answer:
      'Absolutely! Many of our Huntersville customers are not home during repairs. We simply need access to the exterior of your home. We will provide a detailed quote beforehand, keep you updated via text or phone, and leave the property clean when finished. Payment can be handled remotely for your convenience.',
  },
];

export default function RoofRepairHuntersvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Repair Huntersville NC', url: `${SITE_CONFIG.url}/roof-repair-huntersville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocationSchema
        location={{
          city: 'Huntersville',
          state: 'NC',
          slug: 'huntersville-nc',
          county: 'Mecklenburg',
        }}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-repair-huntersville-nc`}
        pageName="Roof Repair Huntersville NC"
        city="Huntersville"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Professional roof repair services in Huntersville NC"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">Fast Emergency Service Available</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Huntersville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Fast, reliable roof repairs from the Lake Norman area's trusted roofing company
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides expert roof repair services throughout Huntersville and the surrounding Lake Norman area.
              From minor leak repairs to emergency storm damage, our certified technicians respond quickly to protect your home.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Estimate
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
                <Clock className="w-5 h-5 text-accent-light" />
                Same-Day Service
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Licensed & Insured
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
              Roof Repair Services in Huntersville NC
            </h2>
            <p className="text-gray text-lg">
              Whether you have a small leak or major storm damage, our expert repair team has you covered.
              We diagnose problems accurately and provide lasting repairs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairServices.map((service) => (
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
                Why Huntersville Homeowners Trust Us for Roof Repairs
              </h2>
              <p className="text-gray text-lg mb-8">
                When your roof needs repair, you need a company that responds fast, diagnoses accurately, and fixes it right
                the first time. Best Roofing Now has built our reputation on honest assessments and quality workmanship.
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
                src={IMAGES.realProjects.certainteed1}
                alt="Completed roof repair project in Huntersville NC"
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
                Need Roof Repair in Huntersville?
              </h2>
              <p className="text-white/90">
                Get a free inspection and honest assessment. We will find the problem and fix it right.
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
                Schedule Inspection
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
              Roof Repair Throughout Huntersville & Lake Norman
            </h2>
            <p className="text-gray text-lg">
              We provide fast roof repair services throughout Huntersville and the surrounding Lake Norman communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Huntersville Areas */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Huntersville Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {huntersvilleAreas.map((area) => (
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
                Roof Repair FAQs - Huntersville NC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof repair services in Huntersville.
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
        pageType="location"
        city="Huntersville"
        slug="roof-repair-huntersville-nc"
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Huntersville"

        state="NC"

        citySlug="huntersville-nc"

        service="Roof Repair"

      />

      <CTASection
        title="Ready to Get Your Roof Repaired in Huntersville?"
        subtitle="Contact us today for a free inspection and estimate. Our expert team will diagnose your roof problems and provide honest repair recommendations."
      />
    </>
  );
}
