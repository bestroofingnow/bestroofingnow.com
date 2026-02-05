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
  Droplets,
  Wind,
  Hammer,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roof Repair Denver NC | Lake Norman | Free Estimates',
  description:
    'Fast roof repair in Denver NC. Leak repair, storm damage, shingle replacement for Lake Norman western shore homes. BBB A+ rated, veteran-owned. Free estimates!',
  keywords: [
    'roof repair denver nc',
    'roofing repair denver nc',
    'denver nc roof repair',
    'roof leak repair denver nc',
    'emergency roof repair denver nc',
    'lake norman western shore roofer',
    'shingle repair denver nc',
    'storm damage repair denver nc',
    'roof repair near me denver nc',
    'fix roof leak denver nc',
    'lincoln county roof repair',
    'trilogy at lake norman roof repair',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-repair-denver-nc`,
  },
  openGraph: {
    title: 'Roof Repair Denver NC | Lake Norman Western Shore | Best Roofing Now',
    description:
      'Fast, reliable roof repair in Denver NC on Lake Norman\'s western shore. BBB A+ rated, veteran-owned roofing company. Emergency repairs, leak fixes, and storm damage restoration. Free estimates!',
    url: `${SITE_CONFIG.url}/roof-repair-denver-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.repairs,
        width: 1200,
        height: 630,
        alt: 'Professional roof repair services in Denver NC - Best Roofing Now',
      },
    ],
  },
};

// Repair services offered
const repairServices = [
  {
    icon: Droplets,
    title: 'Leak Repair',
    description: 'Fast detection and repair of roof leaks to prevent water damage in Denver homes along the western shore.',
    href: '/services/roof-repair',
  },
  {
    icon: Wind,
    title: 'Storm Damage Repair',
    description: 'Emergency repairs for wind, hail, and storm damage from Lake Norman\'s western exposure weather patterns.',
    href: '/services/storm-damage',
  },
  {
    icon: Hammer,
    title: 'Shingle Repair',
    description: 'Missing, cracked, or curling shingle replacement to restore your Denver roof\'s protection.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Flashing Repair',
    description: 'Expert repair of flashing around chimneys, vents, and skylights - critical for lakeside wind exposure.',
    href: '/services/roof-repair',
  },
  {
    icon: Wrench,
    title: 'Emergency Repairs',
    description: '24/7 emergency roof repair services for Denver and Lincoln County when you need immediate help.',
    href: '/services/emergency-roofing',
  },
  {
    icon: Search,
    title: 'Damage Assessment',
    description: 'Free comprehensive roof inspections to identify all repair needs before any work begins.',
    href: '/services/roof-inspection',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Lake Norman homeowners.`,
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
    icon: Clock,
    title: 'Fast Response',
    description: 'Same-day service available for urgent repairs throughout Denver and Lincoln County.',
  },
  {
    icon: Users,
    title: 'Western Shore Experts',
    description: 'We understand Denver\'s unique western shore exposure and Lincoln County building requirements.',
  },
];

// Denver neighborhoods/areas served
const denverAreas = [
  'Trilogy at Lake Norman',
  'Sailview',
  'Westport',
  'East Lincoln',
  'Beatty\'s Ford',
  'Lake Norman State Park Area',
  'Pinnacle Shores',
  'Magnolia Shores',
  'Island Point',
  'Coves of Lake Norman',
  'Highway 16 Corridor',
  'Highway 73 Area',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Mooresville', href: '/roof-repair-mooresville-nc' },
  { name: 'Huntersville', href: '/roof-repair-huntersville-nc' },
  { name: 'Cornelius', href: '/roof-repair-cornelius-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Davidson', href: '/roofing-davidson-nc' },
  { name: 'Lake Norman Area', href: '/locations/lake-norman' },
];

// FAQs about roof repair in Denver
const faqs = [
  {
    question: 'How much does roof repair cost in Denver NC?',
    answer:
      'Roof repair costs in Denver typically range from $250-$1,500 depending on the type and extent of damage. Simple shingle repairs run $250-$500, while more involved leak repairs or flashing work around lakefront homes range $500-$1,500. Lincoln County permit fees, if required, are included in our transparent pricing. We provide free estimates with no hidden charges.',
  },
  {
    question: 'Do you offer emergency roof repair in Denver NC?',
    answer:
      'Yes! Best Roofing Now offers 24/7 emergency roof repair services throughout Denver and the Lake Norman western shore. When you have an active leak or storm damage, our emergency team responds quickly to secure your property and prevent further water intrusion. Call us anytime at (704) 605-6047 for immediate assistance.',
  },
  {
    question: 'Why do Denver NC roofs get damaged more often than inland homes?',
    answer:
      'Denver sits on the western shore of Lake Norman, and prevailing weather systems approach from the west. This means Denver homes face storms head-on before they cross the lake. The open water fetch also amplifies wind speeds near the shoreline. Homes in Sailview, Pinnacle Shores, and other lakefront communities experience greater wind stress on their roofing systems, making regular inspections and prompt repairs essential.',
  },
  {
    question: 'How quickly can you repair my roof in Denver NC?',
    answer:
      'For emergency repairs in Denver, we typically respond within 2-4 hours. Standard repairs are usually completed within 1-3 business days of your initial call. We understand that a damaged roof cannot wait, especially with Lake Norman weather patterns, so we prioritize fast response times while maintaining our quality standards.',
  },
  {
    question: 'Do you handle Lincoln County permits for roof repairs?',
    answer:
      'Yes. Denver is in Lincoln County, not Mecklenburg County, which means different permitting requirements apply. Our team handles all necessary Lincoln County permit applications and inspections for your roof repair project. Many homeowners are unaware of this distinction, but proper permitting protects your home and ensures code compliance.',
  },
  {
    question: 'Can you repair roofs in the Trilogy at Lake Norman community?',
    answer:
      'Absolutely! We regularly work in Trilogy at Lake Norman, Denver\'s popular 55+ active adult community. We are familiar with the community\'s architectural guidelines and HOA requirements. We coordinate directly with Trilogy\'s management for access and scheduling, and we ensure all repairs meet the community\'s aesthetic standards.',
  },
  {
    question: 'Do you help with insurance claims for storm damage in Denver?',
    answer:
      'Yes, and this is one of our specialties. Denver\'s western shore location means homes here face greater storm exposure from Lake Norman weather patterns. We provide thorough damage documentation with photos and measurements, meet with your insurance adjuster on-site, and advocate for a fair settlement so your roof is properly restored.',
  },
  {
    question: 'What types of roof damage should I look for after a storm in Denver?',
    answer:
      'After storms, Denver homeowners should check for missing or lifted shingles, damaged flashing around chimneys and vents, dented metal components from hail, granule accumulation in gutters, and any signs of water intrusion in the attic. Due to western shore wind exposure, pay special attention to ridge caps, edges, and any areas where wind can get underneath shingles. We offer free post-storm inspections.',
  },
];

export default function RoofRepairDenverNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Repair Denver NC', url: `${SITE_CONFIG.url}/roof-repair-denver-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-repair-denver-nc`}
        pageName="Roof Repair Denver NC"
        city="Denver"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.repairs}
            alt="Professional roof repair services in Denver NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Lake Norman Western Shore Roof Repair</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Denver NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Fast, reliable roof repairs for Denver homes on Lake Norman&apos;s western shore
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Is your Denver roof leaking or damaged? Best Roofing Now provides professional roof repair
              services throughout Denver and Lake Norman&apos;s western shore. From emergency leak repairs in
              Sailview to storm damage restoration in Trilogy at Lake Norman, our certified team delivers
              fast, quality repairs backed by our satisfaction guarantee.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Repair Estimate
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
                <Clock className="w-5 h-5 text-green-400" />
                Same-Day Service Available
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
              Roof Repair Services in Denver NC
            </h2>
            <p className="text-gray text-lg">
              From minor repairs to major storm damage restoration, our certified technicians handle
              all your roofing repair needs across Denver and Lincoln County with expert craftsmanship.
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
                Why Denver Homeowners Trust Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When your roof needs repair in Denver, you want a company that understands western shore
                conditions and Lincoln County requirements. Best Roofing Now has built our reputation on
                honest assessments, quality workmanship, and fast response times for the Denver community.
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
                alt="Best Roofing Now - Trusted roof repair company serving Denver NC and Lake Norman western shore"
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
                Need Roof Repair in Denver NC?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation repair estimate from Lake Norman&apos;s western shore roofing experts.
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
              Roof Repair Throughout Denver &amp; Lake Norman
            </h2>
            <p className="text-gray text-lg">
              We provide roof repair services to homeowners throughout Denver and the surrounding
              Lake Norman western shore communities in Lincoln County.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Denver Areas */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Denver Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {denverAreas.map((area) => (
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

      {/* Common Repairs Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Common Roof Repairs in Denver NC
            </h2>
            <p className="text-gray text-lg">
              Lake Norman&apos;s western shore climate presents unique challenges for roofs. Here are the most common
              repairs we handle for Denver homeowners.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Western Shore Wind Damage</h3>
              <p className="text-gray text-sm">
                Prevailing westerly winds drive storms directly into Denver&apos;s lakefront homes.
                We repair lifted shingles, damaged ridge caps, and compromised edge flashing caused
                by sustained wind exposure.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Leak Detection &amp; Repair</h3>
              <p className="text-gray text-sm">
                From minor drips to major water intrusion, we locate and fix roof leaks quickly.
                Denver&apos;s humidity and rain exposure make prompt leak repair essential to prevent
                mold and structural damage.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Hail Damage Restoration</h3>
              <p className="text-gray text-sm">
                Summer storms crossing Lake Norman frequently bring hail to Denver. We assess and
                repair hail damage to shingles, gutters, and flashing, and assist with insurance claims.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Flashing &amp; Penetration Sealing</h3>
              <p className="text-gray text-sm">
                Damaged or corroded flashing around chimneys, vents, and skylights is especially
                common in lakeside environments. We repair and reseal all roof penetrations.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Gutter &amp; Drainage Repairs</h3>
              <p className="text-gray text-sm">
                Tree debris from wooded lots near Lake Norman State Park can clog gutters and
                cause water backup under your roof. We repair and maintain your complete drainage system.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Attic Ventilation Issues</h3>
              <p className="text-gray text-sm">
                Denver&apos;s humid lake climate makes proper attic ventilation critical. Poor ventilation
                causes heat buildup, moisture problems, and premature shingle deterioration. We repair
                and upgrade ventilation systems.
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
              Our Repair Work Near Lake Norman
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roof repair projects throughout Denver and the Lake Norman area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Completed roof repair in Denver NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="Shingle repair work on Lake Norman western shore"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of completed roof repair near Lake Norman State Park"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional roof repair by Best Roofing Now in Denver NC"
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
                Roof Repair FAQs for Denver NC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof repair services in Denver NC and Lincoln County.
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
        city="Denver"
        slug="roof-repair-denver-nc"
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Denver"

        state="NC"

        citySlug="denver-nc"

        service="Roof Repair"

      />

      <CTASection
        title="Ready to Fix Your Denver NC Roof?"
        subtitle="Get a free, no-obligation repair estimate from Lake Norman's western shore roofing experts. We'll assess the damage and provide honest recommendations for your Denver home."
      />
    </>
  );
}
