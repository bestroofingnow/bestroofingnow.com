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
  ClipboardCheck,
  TrendingUp,
  Hammer,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { JamesTip } from '@/components/sections/PersonalTouch';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { Lightbulb, CloudRain, Sun, Leaf, Snowflake } from 'lucide-react';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roof Maintenance Charlotte NC',
  description:
    'Professional roof maintenance programs in Charlotte NC. Annual inspections, preventive repairs, and maintenance plans to extend your roof life. BBB A+ rated, veteran-owned company.',
  keywords: [
    'roof maintenance Charlotte NC',
    'roof maintenance program',
    'annual roof inspection Charlotte',
    'preventive roof maintenance',
    'roof maintenance plan Charlotte',
    'roof care Charlotte NC',
    'roof maintenance service near me',
    'residential roof maintenance Charlotte',
    'commercial roof maintenance Charlotte',
    'extend roof life Charlotte',
    'roof inspection plan Charlotte NC',
    'roof preventive care',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-maintenance-charlotte-nc`,
  },
  openGraph: {
    title: 'Roof Maintenance Charlotte NC | Annual Inspection Plans | Best Roofing Now',
    description:
      'Professional roof maintenance programs to extend your roof life. Annual inspections and preventive repairs in Charlotte NC.',
    url: `${SITE_CONFIG.url}/roof-maintenance-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.inspection,
        width: 1200,
        height: 630,
        alt: 'Professional roof maintenance Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Maintenance services
const services = [
  {
    icon: Search,
    title: 'Annual Roof Inspections',
    description: 'Comprehensive yearly inspections to catch problems early before they become costly repairs.',
    href: '/services/roof-inspection',
  },
  {
    icon: ClipboardCheck,
    title: 'Maintenance Plans',
    description: 'Customized maintenance programs with scheduled inspections and priority service.',
    href: '/services/roof-inspection',
  },
  {
    icon: Wrench,
    title: 'Preventive Repairs',
    description: 'Minor repairs and adjustments during inspections to prevent larger issues.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Gutter Cleaning',
    description: 'Regular gutter cleaning to ensure proper drainage and prevent water damage.',
    href: '/services/gutters',
  },
  {
    icon: Hammer,
    title: 'Flashing & Sealant Service',
    description: 'Inspection and resealing of flashing, vents, and penetrations.',
    href: '/services/roof-repair',
  },
  {
    icon: TrendingUp,
    title: 'Roof Life Extension',
    description: 'Proactive care strategies to maximize your roof investment and extend its lifespan.',
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
    title: 'Certified Inspectors',
    description: 'Factory-trained inspectors certified by CertainTeed, GAF, and Owens Corning.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Convenient appointment times that work with your schedule, including weekends.',
  },
];

// Maintenance plan features
const maintenancePlanFeatures = [
  'Annual comprehensive roof inspection',
  'Detailed written inspection report with photos',
  'Minor repairs included (up to $200 value)',
  'Gutter debris removal during inspection',
  'Flashing and sealant check',
  'Attic ventilation assessment',
  'Priority scheduling for any repairs',
  '10% discount on all future repairs',
  'Storm damage inspection after major weather',
  'Transferable to new homeowner if you sell',
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

// FAQs about roof maintenance
const faqs = [
  {
    question: 'How often should I have my roof inspected in Charlotte?',
    answer:
      'We recommend annual roof inspections for Charlotte homes, plus additional inspections after significant storms. Charlotte experiences severe weather including thunderstorms, hail, and occasional tropical systems that can damage roofs. Regular inspections catch minor issues before they become expensive repairs.',
  },
  {
    question: 'What does a roof maintenance inspection include?',
    answer:
      'Our comprehensive inspection covers: shingle condition and granule loss, flashing around chimneys and vents, ridge caps and edge details, gutter condition and attachment, soffit and fascia, attic ventilation, signs of leaks or water damage, and overall structural integrity. You receive a detailed written report with photos.',
  },
  {
    question: 'How much does roof maintenance cost in Charlotte NC?',
    answer:
      'Individual roof inspections start at $150-$250, while our annual maintenance plans range from $199-$349 per year depending on roof size and coverage level. Maintenance plans include annual inspections plus minor repairs, making them excellent value. Many homeowners save thousands by catching problems early.',
  },
  {
    question: 'Can roof maintenance really extend my roof life?',
    answer:
      'Absolutely. A well-maintained roof can last 25-30 years or more, while a neglected roof may fail in 15-20 years. Regular maintenance catches small issues like lifted shingles, deteriorating caulk, or minor flashing problems before they lead to water damage and premature roof failure.',
  },
  {
    question: 'What minor repairs are included in the maintenance plan?',
    answer:
      'Our maintenance plans include minor repairs up to $200 in value during each inspection. This typically covers: reattaching loose shingles, resealing small areas around vents and flashing, clearing debris from valleys, and adjusting gutter hangers. More extensive repairs are quoted separately but receive a 10% discount.',
  },
  {
    question: 'Do you offer commercial roof maintenance programs?',
    answer:
      'Yes, we offer customized commercial roof maintenance programs for businesses throughout Charlotte. Commercial plans can include quarterly inspections, drain clearing, membrane checks for flat roofs, and detailed documentation for property management. Contact us for a custom commercial maintenance quote.',
  },
  {
    question: 'When is the best time to schedule roof maintenance?',
    answer:
      'Spring and fall are ideal times for roof maintenance in Charlotte. Spring inspections catch any winter damage and prepare your roof for summer storms. Fall inspections ensure your roof is ready for winter weather. However, we perform inspections year-round and recommend timing based on your roof type and age.',
  },
  {
    question: 'Is your roof maintenance plan transferable if I sell my home?',
    answer:
      'Yes! Our maintenance plans are fully transferable to new homeowners. This can be a selling point when you list your home, as it demonstrates you have maintained the roof properly. We simply update the account information at no additional charge.',
  },
];

export default function RoofMaintenanceCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Maintenance Charlotte NC', url: `${SITE_CONFIG.url}/roof-maintenance-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-maintenance-charlotte-nc`}
        pageName="Roof Maintenance Charlotte NC"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How often should I have my roof inspected in Charlotte NC?',
            answer: 'Charlotte homeowners should have their roof inspected annually, plus after any major storm. Charlotte experiences severe thunderstorms, hail, and occasional tropical systems. Best Roofing Now offers annual maintenance plans starting at $199/year.',
            speakableAnswer: 'You should inspect your Charlotte roof at least once a year, plus after major storms. Best Roofing Now offers maintenance plans starting at $199 a year. Call 704-605-6047.',
          },
          {
            question: 'What does a roof maintenance plan include?',
            answer: 'A roof maintenance plan from Best Roofing Now includes annual comprehensive inspection, written report with photos, minor repairs up to $200, gutter debris removal, flashing and sealant checks, attic ventilation assessment, priority scheduling, 10% repair discount, and storm damage inspections.',
            speakableAnswer: 'Our maintenance plan includes annual inspection, minor repairs, gutter cleaning, and priority service starting at $199 a year. Call Best Roofing Now at 704-605-6047.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.inspection}
            alt="Professional roof maintenance Charlotte NC - Best Roofing Now"
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
              Roof Maintenance <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Annual inspection plans that extend your roof life
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Protect your biggest investment with proactive roof maintenance. Best Roofing Now offers comprehensive
              maintenance programs including annual inspections, preventive repairs, and priority service. Catch
              problems early and avoid costly emergency repairs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Maintenance Quote
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
              Roof Maintenance Services in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Comprehensive maintenance services to keep your roof in peak condition and prevent costly repairs.
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

      {/* Maintenance Plan Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Annual Roof Maintenance Plan
              </h2>
              <p className="text-gray text-lg mb-6">
                Our comprehensive maintenance plan gives you peace of mind knowing your roof is professionally
                monitored and maintained year after year.
              </p>
              <ul className="space-y-3">
                {maintenancePlanFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
                >
                  Get Plan Details
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Professional roof maintenance inspection in Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">Starting at</p>
                  <p className="text-4xl font-bold text-accent">$199/yr</p>
                  <p className="text-sm text-gray">Annual Maintenance Plan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Benefits of Regular Roof Maintenance
            </h2>
            <p className="text-gray text-lg">
              Proactive maintenance saves money and extends your roof's lifespan significantly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-dark mb-2">Extend Roof Life</h3>
              <p className="text-gray text-sm">Add 5-10 years to your roof's lifespan with proper care.</p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-dark mb-2">Prevent Water Damage</h3>
              <p className="text-gray text-sm">Catch leaks early before they damage your home interior.</p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-dark mb-2">Maintain Warranty</h3>
              <p className="text-gray text-sm">Many warranties require regular maintenance for coverage.</p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-dark mb-2">Increase Home Value</h3>
              <p className="text-gray text-sm">A well-maintained roof adds value when selling your home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner's Story - Why We Started Maintenance Plans */}
      <section className="section bg-gradient-to-br from-primary/5 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                  <Lightbulb className="w-4 h-4" />
                  <span className="text-sm font-semibold">From the Owner</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Why I Started Offering Maintenance Plans
                </h2>
                <div className="space-y-4 text-gray">
                  <p>
                    &ldquo;Early in my career, I got a call from a family in Dilworth whose roof was leaking into
                    their daughter&apos;s bedroom. Turns out they&apos;d had a small flashing issue two years earlier
                    but never got it checked. Two years of water damage had rotted the decking and ruined their
                    insulation. What could have been a $150 repair turned into an $8,000 emergency.&rdquo;
                  </p>
                  <p>
                    &ldquo;That night I went home and told Shirley we needed to start doing things differently.
                    No homeowner should have to put a bucket in their kid&apos;s room to catch rainwater. That&apos;s
                    when we created our annual maintenance plans &mdash; because catching problems early is always
                    cheaper than fixing them later.&rdquo;
                  </p>
                  <p className="font-medium text-primary">
                    &mdash; James Turner, Founder &amp; Owner
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <JamesTip tipId="maintenance-saves" />
                <div className="mt-6 bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-dark mb-3">Maintenance by the Numbers</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between">
                      <span className="text-gray">Average repair cost avoided</span>
                      <span className="font-bold text-accent">$3,200</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray">Years added to roof life</span>
                      <span className="font-bold text-accent">5-10 yrs</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray">Issues caught early (%)</span>
                      <span className="font-bold text-accent">92%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray">Annual plan cost</span>
                      <span className="font-bold text-green-600">$199</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charlotte Seasonal Maintenance Guide */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Charlotte Seasonal Roof Maintenance Guide
            </h2>
            <p className="text-gray text-lg">
              Charlotte&apos;s subtropical climate brings unique challenges each season. Here&apos;s what James
              recommends checking throughout the year.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-green-50 rounded-xl p-6 border-t-4 border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="w-6 h-6 text-green-600" />
                <h3 className="font-bold text-dark">Spring (Mar-May)</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Inspect for winter damage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Clean gutters of pollen buildup</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Trim branches near roofline</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Check flashing and sealants</span>
                </li>
              </ul>
              <p className="mt-4 text-xs italic text-green-700">
                &ldquo;Charlotte pollen season is no joke. Those yellow clouds clog gutters faster than you&apos;d think.&rdquo; &mdash; James
              </p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-6 border-t-4 border-yellow-500">
              <div className="flex items-center gap-3 mb-4">
                <Sun className="w-6 h-6 text-yellow-600" />
                <h3 className="font-bold text-dark">Summer (Jun-Aug)</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Check for curling shingles from heat</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Verify attic ventilation is working</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Inspect after thunderstorms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Look for granule loss in gutters</span>
                </li>
              </ul>
              <p className="mt-4 text-xs italic text-yellow-700">
                &ldquo;95-degree days make shingles expand and contract. If they&apos;re curling at the edges, they&apos;re telling you something.&rdquo; &mdash; James
              </p>
            </div>
            <div className="bg-orange-50 rounded-xl p-6 border-t-4 border-orange-500">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="w-6 h-6 text-orange-600" />
                <h3 className="font-bold text-dark">Fall (Sep-Nov)</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Clear leaves from valleys and gutters</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Schedule annual inspection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Reseal around vents and chimneys</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Check attic insulation before winter</span>
                </li>
              </ul>
              <p className="mt-4 text-xs italic text-orange-700">
                &ldquo;Leaves pile up in valleys and hold moisture. 30 minutes of cleanup saves thousands in rot damage.&rdquo; &mdash; James
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border-t-4 border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <CloudRain className="w-6 h-6 text-blue-600" />
                <h3 className="font-bold text-dark">Winter (Dec-Feb)</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>Watch for ice dam formation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>Check attic for condensation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>Remove any hanging icicles safely</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>Inspect after ice or snow events</span>
                </li>
              </ul>
              <p className="mt-4 text-xs italic text-blue-700">
                &ldquo;Charlotte ice storms don&apos;t happen every year, but when they do, they cause serious damage. Proper insulation prevents most ice dam problems.&rdquo; &mdash; James
              </p>
            </div>
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
              Professional roof maintenance from a company you can trust.
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
                Ready to Protect Your Roof Investment?
              </h2>
              <p className="text-white/90">
                Start with a free inspection and learn about our maintenance plans.
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
                Schedule Free Inspection
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
              Roof Maintenance Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              We provide roof maintenance services across the Greater Charlotte metro area.
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
                Roof Maintenance FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof maintenance in Charlotte NC.
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
        pageType="main-service-area"
        city="Charlotte"
        slug="roof-maintenance-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roof-maintenance-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Roof Maintenance"

      />

      <CTASection
        title="Start Protecting Your Roof Today"
        subtitle="Schedule a free roof inspection and learn how our maintenance plans can save you money while extending your roof's lifespan."
      />
    </>
  );
}
