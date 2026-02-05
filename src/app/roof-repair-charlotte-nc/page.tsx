import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  Calendar,
  Shield,
  Star,
  ArrowRight,
  HelpCircle,
  Award,
  Clock,
  Wrench,
  CloudRain,
  MapPin,
  Droplets,
  Wind,
  Zap,
  AlertTriangle,
  ThumbsUp,
  DollarSign,
  FileText,
  TreePine,
  CloudHail,
  Hammer,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { GeoTaggedProjectImage } from '@/components/ui/GeoTaggedProjectImage';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { RelatedCitiesLinks } from '@/components/ui/RelatedCitiesLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { getGeoImages } from '@/lib/geo-images';
import { IMAGES, CITY_COORDINATES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roof Repair Charlotte NC | Fast',
  description:
    'Expert roof repair in Charlotte NC. 24/7 emergency service, leak repair, storm damage restoration, and shingle replacement. Fast response, affordable prices. Free estimates from BBB A+ rated roofers.',
  keywords: [
    'roof repair charlotte nc',
    'roof repair near me charlotte',
    'roof leak repair charlotte nc',
    'emergency roof repair charlotte',
    'storm damage roof repair charlotte',
    'affordable roof repair charlotte nc',
    'fast roof repair charlotte',
    'roof repair cost charlotte nc',
    'roof repair company charlotte',
    'professional roof repair charlotte nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-repair-charlotte-nc`,
  },
  openGraph: {
    title: 'Roof Repair Charlotte NC | Fast & Affordable | Best Roofing Now',
    description:
      'Professional roof repair services in Charlotte NC. 24/7 emergency response, leak repair, storm damage, and shingle replacement. BBB A+ rated. Free estimates.',
    url: `${SITE_CONFIG.url}/roof-repair-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Professional roof repair Charlotte NC - Best Roofing Now technician fixing roof',
      },
    ],
  },
};

// Common roof repair types
const repairTypes = [
  {
    icon: Droplets,
    title: 'Leak Repair',
    description: 'Fast, permanent solutions for roof leaks. We locate the source of water intrusion and fix it right the first time.',
    href: '/services/roof-repair',
  },
  {
    icon: Wind,
    title: 'Shingle Replacement',
    description: 'Missing, cracked, or curling shingles replaced with perfect color matches and proper installation.',
    href: '/services/roof-repair',
  },
  {
    icon: Wrench,
    title: 'Flashing Repair',
    description: 'Critical repairs to flashing around chimneys, vents, skylights, and valleys to prevent water damage.',
    href: '/services/roof-repair',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency repairs for hail, wind, and storm damage. Insurance claim assistance included.',
    href: '/storm-damage-roof-repair-charlotte',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Repairs',
    description: '24/7 emergency response for urgent roof problems. Temporary tarping and permanent repairs available.',
    href: '/services/emergency-roofing',
  },
  {
    icon: Zap,
    title: 'Flat Roof Repair',
    description: 'Specialized repairs for TPO, EPDM, and modified bitumen flat roof systems on commercial buildings.',
    href: '/flat-roof-repair-charlotte-nc',
  },
];

// Why choose us for roof repairs
const whyChooseUs = [
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Roof emergencies do not wait. Our crews respond quickly day or night to protect your home.',
  },
  {
    icon: Star,
    title: '5-Star Rated Repairs',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews for quality roof repair work in Charlotte.`,
  },
  {
    icon: ThumbsUp,
    title: 'Fix It Right the First Time',
    description: 'Our experienced technicians diagnose problems accurately and provide lasting repairs.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Transparent, competitive pricing with no hidden fees. We work with your budget.',
  },
  {
    icon: FileText,
    title: 'Insurance Claim Help',
    description: 'We assist with documentation and work directly with insurance adjusters.',
  },
  {
    icon: Shield,
    title: 'Warranty Protection',
    description: 'All repairs backed by our workmanship warranty and manufacturer guarantees.',
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
  { name: 'Huntersville', href: '/roof-repair-huntersville-nc' },
  { name: 'Cornelius', href: '/roof-repair-cornelius-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Mint Hill', href: '/locations/mint-hill-nc' },
  { name: 'Pineville', href: '/locations/pineville-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Gastonia', href: '/locations/gastonia-nc' },
  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
  { name: 'Fort Mill, SC', href: '/roofing-fort-mill-sc' },
  { name: 'Indian Trail', href: '/locations/indian-trail-nc' },
];

// FAQs about roof repair in Charlotte
const faqs = [
  {
    question: 'How much does roof repair cost in Charlotte NC?',
    answer:
      'Roof repair costs in Charlotte typically range from $200-$1,500 for minor repairs like fixing a few shingles or small leaks. Moderate repairs such as flashing replacement or larger leak repairs run $500-$3,000. More extensive repairs can cost $2,000-$5,000. We provide free inspections and detailed estimates so you know exactly what to expect before any work begins.',
  },
  {
    question: 'How quickly can you respond to a roof emergency in Charlotte?',
    answer:
      'We offer 24/7 emergency roof repair service with typical response times of 1-4 hours in the Charlotte area. Our emergency crews can install temporary tarps to prevent further water damage and then schedule permanent repairs. Call us immediately if you have an active leak or storm damage.',
  },
  {
    question: 'Will my homeowners insurance cover roof repairs?',
    answer:
      'Many roof repairs caused by storms, hail, wind, or fallen trees are covered by homeowners insurance. We help Charlotte homeowners navigate the claims process by providing thorough documentation, detailed repair estimates, and meeting with adjusters on your behalf. Routine wear and maintenance repairs are typically not covered.',
  },
  {
    question: 'How do I know if I need a roof repair or full replacement?',
    answer:
      'We recommend repair when damage is localized to a small area (less than 30% of roof), your roof is under 15 years old, and structural integrity is sound. Full replacement may be better if damage is widespread, your roof is near end of life, or repair costs approach 50% of replacement cost. Our free inspection will give you an honest assessment.',
  },
  {
    question: 'What are signs I need roof repair in Charlotte?',
    answer:
      'Common warning signs include: water stains on ceilings or walls, missing or damaged shingles visible from the ground, granules in gutters, light visible through roof boards in attic, sagging roof sections, higher than normal energy bills, and mold or mildew in attic. If you notice any of these, schedule a free inspection promptly.',
  },
  {
    question: 'Do you offer warranties on roof repairs?',
    answer:
      'Yes, all our roof repairs are backed by our workmanship warranty, and we use manufacturer-certified materials that carry their own guarantees. For shingle repairs, we ensure color matching and proper installation techniques. Ask about our warranty details during your free estimate.',
  },
  {
    question: 'Can you repair my roof in bad weather?',
    answer:
      'For emergencies, our crews can install temporary tarps and protective coverings in most weather conditions to prevent further damage. Permanent repairs require dry conditions for proper material adhesion and safety. We monitor weather forecasts and schedule repairs accordingly, prioritizing your roof as soon as conditions allow.',
  },
  {
    question: 'How long does a typical roof repair take?',
    answer:
      'Most minor repairs (shingle replacement, small leak fixes) can be completed in 1-4 hours. Moderate repairs like flashing replacement or larger sections take 4-8 hours or a full day. Emergency tarping is typically done within hours of arrival. We work efficiently while maintaining quality standards.',
  },
];

export default function RoofRepairCharlotteNCPage() {
  const inlineImages = getGeoImages({ pageType: 'main-service-area', city: 'Charlotte', count: 2, seed: 'roof-repair-charlotte-nc-inline' });

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Repair Charlotte NC', url: `${SITE_CONFIG.url}/roof-repair-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-repair-charlotte-nc`}
        pageName="Roof Repair Charlotte NC"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much does roof repair cost in Charlotte NC?',
            answer: 'Roof repair in Charlotte NC costs $200-$1,500 for minor repairs like fixing shingles or small leaks, and $500-$5,000 for moderate to extensive repairs. Best Roofing Now provides free inspections and transparent estimates with no hidden fees. Most storm damage repairs are covered by insurance. Call (704) 605-6047 for a free estimate.',
            speakableAnswer: 'Roof repair in Charlotte costs $200 to $1,500 for minor repairs, up to $5,000 for extensive work. Best Roofing Now offers free estimates. Call 704-605-6047.',
          },
          {
            question: 'Who does roof repair in Charlotte NC?',
            answer: 'Best Roofing Now is Charlotte\'s top-rated roof repair company with 5-star Google reviews and BBB A+ accreditation. This veteran-owned company provides 24/7 emergency service, same-day repairs, and full insurance claim assistance. They repair all roof types including shingles, metal, flat roofs, and tile.',
            speakableAnswer: 'Best Roofing Now is Charlotte\'s top-rated roof repair company. 5-star rated, veteran-owned, with 24/7 emergency service. Call 704-605-6047.',
          },
          {
            question: 'How fast can you fix a roof leak in Charlotte?',
            answer: 'Best Roofing Now offers same-day and 24/7 emergency roof leak repair in Charlotte NC. For active leaks, they typically respond within 1-4 hours. Non-emergency repairs are usually scheduled within 24-48 hours. Emergency tarping is available to prevent further water damage.',
            speakableAnswer: 'Best Roofing Now responds to Charlotte roof leaks within 1-4 hours for emergencies. Same-day repairs available. Call 704-605-6047.',
          },
          {
            question: 'Does insurance cover roof repair in Charlotte NC?',
            answer: 'Yes, most homeowners insurance covers roof repairs caused by storms, hail, wind, and fallen trees in Charlotte NC. Best Roofing Now helps with insurance claims by documenting damage, meeting with adjusters, and advocating for fair settlements. You typically pay only your deductible.',
            speakableAnswer: 'Yes, most insurance covers storm-related roof repairs in Charlotte. Best Roofing Now helps with claims. You typically pay only your deductible.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Professional roof repair Charlotte NC - Best Roofing Now technician repairing roof"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Clock className="w-4 h-4 text-accent-light" />
              <span className="text-sm font-semibold">24/7 Emergency Service Available</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Fast, Affordable Roof Repairs You Can Trust
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Leaking roof? Storm damage? Missing shingles? Best Roofing Now provides expert roof repair
              services throughout Charlotte NC with same-day emergency response, honest assessments, and
              lasting repairs backed by warranty.
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
                Emergency: {SITE_CONFIG.phone}
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
                Same-Day Service
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Common Roof Repair Types Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Repairs We Handle in Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              From minor fixes to major storm damage, our experienced repair technicians handle all types
              of roof problems with precision and care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairTypes.map((repair) => (
              <Link
                key={repair.title}
                href={repair.href}
                className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <repair.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {repair.title}
                </h3>
                <p className="text-gray text-sm mb-3">{repair.description}</p>
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
                Why Charlotte Homeowners Choose Us for Roof Repairs
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need roof repair in Charlotte NC, you want a company that responds fast,
                diagnoses accurately, and repairs correctly. Best Roofing Now has earned the trust
                of hundreds of Charlotte homeowners with our commitment to quality and customer service.
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
              {inlineImages[0] && (
                <GeoTaggedProjectImage
                  image={inlineImages[0]}
                  width={600}
                  height={450}
                  className="rounded-xl shadow-lg"
                  context={{ serviceName: 'Roof repair', pageTitle: 'Roof Repair Charlotte NC' }}
                  includeSchema={true}
                  schemaPageUrl={`${SITE_CONFIG.url}/roof-repair-charlotte-nc`}
                />
              )}
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
                Need Roof Repair in Charlotte? Get a Free Estimate Today!
              </h2>
              <p className="text-white/90">
                Our expert technicians will inspect your roof and provide honest repair recommendations.
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

      {/* Repair Process Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Charlotte Roof Repair Process
            </h2>
            <p className="text-gray text-lg">
              We make roof repairs simple and stress-free with our proven 4-step process.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Free Inspection',
                description: 'We thoroughly inspect your roof, identify all problems, and document findings with photos.',
              },
              {
                step: '2',
                title: 'Detailed Estimate',
                description: 'You receive a clear, written estimate explaining repairs needed and transparent pricing.',
              },
              {
                step: '3',
                title: 'Expert Repair',
                description: 'Our certified technicians complete repairs using quality materials and proven techniques.',
              },
              {
                step: '4',
                title: 'Final Walkthrough',
                description: 'We review completed work with you, clean up thoroughly, and explain your warranty.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 24/7 Emergency Roof Repair Section */}
      <section id="emergency" className="section bg-red-700 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white rounded-full px-4 py-2 mb-4 animate-pulse">
              <AlertTriangle className="w-5 h-5" />
              <span className="text-sm font-bold">24/7 EMERGENCY SERVICE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Emergency Roof Repair Charlotte NC
            </h2>
            <p className="text-white/90 text-lg">
              Roof emergency? Do not wait - water damage spreads fast. Our emergency crews respond
              within 1-4 hours to protect your Charlotte home from further damage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <CloudRain className="w-6 h-6 text-yellow-300" />
              </div>
              <h3 className="font-bold text-white mb-2">Active Roof Leaks</h3>
              <p className="text-white/80 text-sm">Water entering your home needs immediate attention. We stop leaks fast to prevent mold and structural damage.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <CloudHail className="w-6 h-6 text-yellow-300" />
              </div>
              <h3 className="font-bold text-white mb-2">Storm Damage</h3>
              <p className="text-white/80 text-sm">Hail, wind, and severe storms require immediate response. We secure your property and document for insurance.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <TreePine className="w-6 h-6 text-yellow-300" />
              </div>
              <h3 className="font-bold text-white mb-2">Fallen Tree Damage</h3>
              <p className="text-white/80 text-sm">Trees or branches on your roof need urgent attention. We coordinate removal and repairs.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Hammer className="w-6 h-6 text-yellow-300" />
              </div>
              <h3 className="font-bold text-white mb-2">Emergency Tarping</h3>
              <p className="text-white/80 text-sm">Professional tarping protects your home while permanent repairs are scheduled.</p>
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-1">1-4 hrs</div>
                <p className="text-white/80 text-sm">Response Time</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-1">24/7</div>
                <p className="text-white/80 text-sm">Availability</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-1">500+</div>
                <p className="text-white/80 text-sm">Emergencies Handled</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-1">A+</div>
                <p className="text-white/80 text-sm">BBB Rating</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-white/90 mb-6">
              Call our 24/7 emergency line any time, day or night - including weekends and holidays.
            </p>
            <Button
              href={`tel:${SITE_CONFIG.phoneClean}`}
              variant="primary"
              size="lg"
              className="bg-white !text-red-700 hover:bg-yellow-300 hover:!text-red-800 font-bold text-lg"
              icon={<Phone className="w-6 h-6" />}
            >
              Call Now: {SITE_CONFIG.phone}
            </Button>
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
              Roof Repair Service Areas in Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              We provide fast, reliable roof repair services throughout the Greater Charlotte region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Neighborhoods */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {charlotteNeighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby Cities */}
            <div className="bg-white rounded-xl p-6 shadow-md">
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
      <GeoProjectGalleryStrip
        pageType="main-service-area"
        city="Charlotte"
        slug="roof-repair-charlotte-nc"
        count={4}
        title="Recent Roof Repair Projects in Charlotte, NC"
        subtitle="See our latest roof repair work across the Charlotte metro area."
        schemaPageUrl={`${SITE_CONFIG.url}/roof-repair-charlotte-nc`}
      />

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
                Roof Repair FAQs for Charlotte NC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof repair costs, timing, and process in Charlotte.
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

      {/* Service City Links */}
      <ServiceCityLinks
        city="Charlotte"
        citySlug="charlotte-nc"
        title="All Roofing Services in Charlotte NC"
        subtitle="Beyond repairs, we offer complete roofing solutions for Charlotte homeowners."
      />

      {/* Related Cities */}
      <RelatedCitiesLinks
        currentCity="Charlotte"
        service="Roof Repair"
        serviceSlug="roof-repair"
        title="Roof Repair in Nearby Cities"
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Roof Repair"

      />

      <CTASection
        title="Ready to Fix Your Roof? Contact Charlotte's Trusted Repair Experts"
        subtitle="Get a free, no-obligation estimate for your roof repair. Fast response, honest assessments, and quality repairs backed by warranty."
      />
    </>
  );
}
