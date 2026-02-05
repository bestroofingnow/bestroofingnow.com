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
  Droplets,
  Home,
  AlertTriangle,
  Flame,
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
  title: 'Chimney Flashing Repair Charlotte NC | Leak Prevention',
  description:
    'Expert chimney flashing repair in Charlotte NC. Stop chimney leaks with professional flashing installation and waterproofing. BBB A+ rated, licensed contractor. Free inspections available.',
  keywords: [
    'chimney flashing repair Charlotte NC',
    'chimney leak repair Charlotte',
    'chimney flashing Charlotte NC',
    'chimney waterproofing Charlotte NC',
    'chimney cap installation Charlotte',
    'chimney crown repair Charlotte NC',
    'leaking chimney Charlotte',
    'chimney flashing replacement Charlotte',
    'chimney step flashing Charlotte NC',
    'chimney counter flashing Charlotte',
    'chimney leak fix Charlotte',
    'chimney cricket installation Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/chimney-flashing-repair-charlotte-nc`,
  },
  openGraph: {
    title: 'Chimney Flashing Repair Charlotte NC | Leak Prevention | Best Roofing Now',
    description:
      'Stop chimney leaks with expert flashing repair and waterproofing in Charlotte NC. Licensed contractor with 5-star reviews. Free inspections available.',
    url: `${SITE_CONFIG.url}/chimney-flashing-repair-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Professional chimney flashing repair Charlotte NC',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Droplets,
    title: 'Step Flashing Repair',
    description: 'Repair or replace step flashing where your roof meets the chimney sides to prevent water infiltration.',
    features: ['Aluminum or copper materials', 'Proper overlap technique', 'Sealed integration'],
  },
  {
    icon: Shield,
    title: 'Counter Flashing Installation',
    description: 'Install counter flashing embedded in chimney mortar joints to cover step flashing and ensure watertight seal.',
    features: ['Mortar joint installation', 'Proper sealing', 'Long-term protection'],
  },
  {
    icon: Flame,
    title: 'Chimney Cap Installation',
    description: 'Protect your flue from rain, animals, and debris with properly fitted chimney caps.',
    features: ['Stainless steel caps', 'Custom sizing', 'Spark arrestors'],
  },
  {
    icon: Home,
    title: 'Cricket/Saddle Installation',
    description: 'Install chimney crickets to divert water around wide chimneys and prevent pooling.',
    features: ['Proper drainage', 'Prevents ice dams', 'Extends flashing life'],
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Award,
    title: 'Flashing Specialists',
    description: 'Our team specializes in chimney flashing with proper installation techniques that last.',
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
    title: 'Certified Team',
    description: 'CertainTeed and GAF certified installers for proper flashing installation.',
  },
  {
    icon: Clock,
    title: 'Same-Day Service',
    description: 'Emergency chimney leak repairs available to prevent further water damage.',
  },
];

// Common chimney leak signs
const leakSigns = [
  'Water stains on ceiling or walls near chimney',
  'Musty odors in the attic or living space',
  'Damp or discolored masonry on chimney',
  'Efflorescence (white staining) on chimney bricks',
  'Rusted damper or firebox',
  'Damaged or missing mortar joints',
  'Visible gaps between flashing and chimney',
  'Water pooling at chimney base during rain',
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
];

// Nearby cities served
const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Gastonia', href: '/locations/gastonia-nc' },
  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
];

// FAQs about chimney flashing
const faqs = [
  {
    question: 'Why is my chimney leaking in Charlotte NC?',
    answer:
      'Chimney leaks in Charlotte are most commonly caused by failed flashing, cracked chimney crowns, deteriorated mortar joints, or missing chimney caps. Charlotte\'s heavy rainfall (43+ inches annually) and freeze-thaw cycles put significant stress on chimney waterproofing. Our free inspection identifies the exact cause of your leak and the best repair solution.',
  },
  {
    question: 'How much does chimney flashing repair cost in Charlotte?',
    answer:
      'Chimney flashing repair in Charlotte typically costs $300-$800 for basic repairs and $500-$1,500 for complete flashing replacement. The cost depends on chimney size, flashing material (aluminum vs copper), accessibility, and extent of damage. We provide free estimates with transparent pricing.',
  },
  {
    question: 'What is chimney flashing and why is it important?',
    answer:
      'Chimney flashing is the metal (usually aluminum, copper, or galvanized steel) installed where your chimney meets the roof. It creates a waterproof barrier that prevents rain from entering your home. Flashing consists of step flashing along the chimney sides and counter flashing embedded in the mortar joints. Properly installed flashing is critical for preventing leaks.',
  },
  {
    question: 'How long does chimney flashing last?',
    answer:
      'Quality chimney flashing should last 20-30 years with proper installation. However, in Charlotte\'s climate, flashing may need attention sooner due to thermal expansion, settling, and weather exposure. Aluminum flashing typically lasts 20-25 years, while copper flashing can last 50+ years. We recommend annual inspections to catch issues early.',
  },
  {
    question: 'Can you repair chimney flashing without replacing the roof?',
    answer:
      'Yes, chimney flashing can typically be repaired or replaced without affecting the rest of your roof. We carefully remove the old flashing, install new step and counter flashing, and integrate it with your existing roofing materials. This targeted repair is much more cost-effective than roof replacement.',
  },
  {
    question: 'What is a chimney cricket and do I need one?',
    answer:
      'A chimney cricket (or saddle) is a small peaked structure installed behind a chimney to divert water around it. Chimneys wider than 30 inches on the uphill side of the roof typically need crickets to prevent water pooling and ice dams. If your wide chimney lacks a cricket, we recommend adding one when repairing flashing.',
  },
  {
    question: 'How do I know if my chimney flashing needs repair?',
    answer:
      'Signs of failing chimney flashing include: water stains on ceilings/walls near the chimney, musty smells in the attic, visible rust or gaps in the flashing, deteriorated caulk or sealant, and water in the firebox. If you notice any of these signs, schedule a free inspection to prevent further damage.',
  },
  {
    question: 'Do you offer emergency chimney leak repair?',
    answer:
      'Yes, we offer emergency chimney leak repair services in Charlotte. Active chimney leaks can cause significant water damage to your home\'s interior and structure. Call us at (704) 605-6047 for same-day emergency service to stop the leak and prevent further damage.',
  },
];

export default function ChimneyFlashingRepairCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Chimney Flashing Repair Charlotte NC', url: `${SITE_CONFIG.url}/chimney-flashing-repair-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Professional chimney flashing repair Charlotte NC"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">BBB A+ Rated | Leak Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Chimney Flashing Repair <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Stop chimney leaks with expert flashing repair and waterproofing
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now specializes in chimney flashing repair and replacement throughout Charlotte.
              Our certified team properly installs step flashing, counter flashing, and chimney caps to
              permanently stop leaks and protect your home.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Your Free Inspection
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
                <Clock className="w-5 h-5 text-accent-light" />
                Same-Day Service
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
              Complete Chimney Flashing Services
            </h2>
            <p className="text-gray text-lg">
              From minor repairs to complete flashing replacement, we have the expertise to permanently
              stop chimney leaks and protect your home.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2 text-xl">{service.title}</h3>
                <p className="text-gray text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs of Chimney Leaks Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Chimney flashing inspection Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-10 h-10 text-accent" />
                  <div>
                    <p className="font-bold text-dark">Leaking Chimney?</p>
                    <p className="text-sm text-gray">Free Inspection Available</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Signs Your Chimney Flashing Needs Repair
              </h2>
              <p className="text-gray text-lg mb-6">
                Chimney leaks can cause significant damage to your home if not addressed quickly.
                Look for these warning signs:
              </p>
              <ul className="space-y-3">
                {leakSigns.map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray">{sign}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button
                  href="/contact"
                  variant="primary"
                  icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
                >
                  Schedule Free Inspection
                </Button>
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
              Why Charlotte Homeowners Trust Us
            </h2>
            <p className="text-gray text-lg">
              When it comes to chimney flashing repair, proper installation makes all the difference.
              Here&apos;s why homeowners choose Best Roofing Now.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-4 bg-light rounded-lg">
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
                Chimney Leaking? We Can Help!
              </h2>
              <p className="text-white/90">
                Get a free inspection and repair estimate from Charlotte&apos;s chimney flashing specialists.
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
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Chimney Flashing Repair Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              We provide professional chimney flashing services for homes throughout the Greater Charlotte area.
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
                Chimney Flashing Repair FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about chimney flashing repair in Charlotte NC.
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
        slug="chimney-flashing-repair-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/chimney-flashing-repair-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Chimney Flashing Repair"

      />

      <CTASection
        title="Ready to Fix Your Chimney Leak?"
        subtitle="Don't let a chimney leak damage your home. Get a free inspection and repair estimate from Charlotte's chimney flashing specialists."
      />
    </>
  );
}
