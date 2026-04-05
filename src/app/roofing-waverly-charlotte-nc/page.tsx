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
import {
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roofing Waverly Charlotte NC',
  description:
    'Trusted roofing contractor serving Waverly in South Charlotte NC. Roof replacement, repair, and storm damage for newer 2010s luxury homes. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'roofing waverly charlotte nc',
    'roofer waverly charlotte',
    'waverly roof replacement charlotte',
    'waverly roof repair charlotte nc',
    'roofing contractor waverly charlotte',
    'waverly south charlotte roofing',
    'waverly neighborhood roofer',
    'best roofer waverly charlotte nc',
    'waverly charlotte roofing services',
    'waverly luxury home roofing charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-waverly-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing Waverly Charlotte NC | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing contractor serving Waverly in South Charlotte. Expert care for newer luxury homes. Free estimates.',
    url: `${SITE_CONFIG.url}/roofing-waverly-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Waverly Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

const services = [
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Premium roof replacement for Waverly homes using top-tier architectural shingles and designer options.',
    href: '/services/roof-replacement',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Expert repairs for storm damage, leaks, and wear on Waverly\'s newer 2010s-era construction.',
    href: '/services/roof-repair',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Rapid storm damage response with full insurance claim assistance for Waverly homeowners.',
    href: '/services/storm-damage',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Comprehensive inspections for maintenance, warranty verification, and real estate needs.',
    href: '/services/roof-inspection',
  },
  {
    icon: Building2,
    title: 'HOA Compliant Roofing',
    description: 'We navigate Waverly\'s HOA requirements, handling material approvals and color selections.',
    href: '/services/residential-roofing',
  },
  {
    icon: Shield,
    title: 'Emergency Service',
    description: '24/7 emergency roofing for Waverly homeowners facing urgent leak or storm situations.',
    href: '/services/emergency-roofing',
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from homeowners across South Charlotte.`,
  },
  {
    icon: Shield,
    title: 'Manufacturer Certified',
    description: 'GAF Factory-Certified and CertainTeed ShingleMaster for premium, warranty-backed installations.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability and workers\' comp coverage.',
  },
  {
    icon: Users,
    title: 'Newer Home Expertise',
    description: 'Understanding of the premium materials and modern construction methods used in Waverly homes.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency response when Waverly homeowners need immediate roofing help.',
  },
];

const waverlyAreas = [
  'Waverly',
  'Waverly Walk',
  'Waverly Farms',
  'Providence Road West',
  'Ardrey Kell Road',
  'Rea Road',
  'Community House Road',
  'Ballantyne',
  'Blakeney',
  'Marvin',
  'Weddington',
  'South Charlotte',
];

const nearbyAreas = [
  { name: 'Ballantyne', href: '/roofing-ballantyne-charlotte-nc' },
  { name: 'SouthPark', href: '/roofing-southpark-charlotte-nc' },
  { name: 'Waxhaw', href: '/roofing-waxhaw-nc' },
  { name: 'Weddington', href: '/roofing-weddington-nc' },
  { name: 'Marvin', href: '/roofing-marvin-nc' },
  { name: 'Pineville', href: '/roofing-pineville-nc' },
  { name: 'Matthews', href: '/roofing-matthews-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
];

const faqs = [
  {
    question: 'What roofing services do you offer in Waverly?',
    answer:
      'Best Roofing Now provides full-service roofing in Waverly including roof replacement, roof repair, storm damage restoration, emergency services, and comprehensive inspections. We understand the newer construction and premium materials used in Waverly homes.',
  },
  {
    question: 'How new are the roofs in Waverly?',
    answer:
      'Waverly is a newer South Charlotte community with most homes built in the 2010s, making roofs approximately 5-15 years old. While most are still within their warranty period, storm damage, manufacturing defects, and improper installation can create issues that require professional attention.',
  },
  {
    question: 'Why would newer Waverly homes need roofing services?',
    answer:
      'Even newer homes may need roofing services due to storm damage from Charlotte\'s severe thunderstorms and hail, wind damage from straight-line winds, manufacturing defects, or improper original installation. We also provide proactive maintenance inspections to catch small issues before they become expensive problems.',
  },
  {
    question: 'How much does a roof replacement cost in Waverly?',
    answer:
      'Roof replacement in Waverly typically ranges from $10,000-$20,000 depending on home size and material selection. Homes in the $400K-$800K range in this area have varied roof sizes. We provide free, detailed estimates and can help you understand warranty options.',
  },
  {
    question: 'Do you handle Waverly HOA roofing requirements?',
    answer:
      'Yes, we work with Waverly\'s HOA and handle the complete approval process for any roofing work that requires community approval. We prepare material submissions, color samples, and documentation for architectural review to ensure compliance.',
  },
  {
    question: 'What materials do you recommend for Waverly homes?',
    answer:
      'For Waverly\'s modern luxury homes, we recommend premium architectural shingles like GAF Timberline HDZ or CertainTeed Landmark Pro. For homeowners seeking upgrades, designer shingles and standing seam metal panels complement Waverly\'s contemporary architectural styles beautifully.',
  },
  {
    question: 'Do you offer storm damage insurance claim help?',
    answer:
      'Absolutely. We help Waverly homeowners through the entire insurance claim process including damage documentation, adjuster meetings, and ensuring fair settlements. Charlotte storms can cause hidden damage that inexperienced contractors miss, but our trained inspectors identify all storm-related issues.',
  },
  {
    question: 'How long does a roof replacement take?',
    answer:
      'Most Waverly roof replacements are completed in 1-3 days depending on home size and complexity. We schedule work to minimize disruption and maintain clean, safe job sites throughout the process.',
  },
];

export default function RoofingWaverlyCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Waverly Charlotte NC', url: `${SITE_CONFIG.url}/roofing-waverly-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-waverly-charlotte-nc`}
        pageName="Roofing Waverly Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Professional roofing contractor in Waverly Charlotte NC - Best Roofing Now"
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
              Roofing Waverly <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Expert Roofing for Waverly&apos;s Newer Luxury Homes
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now serves the Waverly community in South Charlotte with expert roofing
              for newer luxury homes built in the 2010s. From storm damage repairs to proactive
              maintenance and full replacements, we deliver the quality your Waverly home deserves.
            </p>

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

      {/* Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Quality Roofing for Waverly&apos;s Modern Homes
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Waverly is one of South Charlotte&apos;s newest and most desirable luxury communities,
                featuring modern homes built in the 2010s with values ranging from $400K to $800K.
                With its contemporary architecture, tree-lined streets, and active community
                lifestyle, Waverly represents the best of new South Charlotte living.
              </p>
              <p>
                While Waverly homes are relatively new, Charlotte&apos;s severe weather can impact
                any roof. Hailstorms, straight-line winds, and heavy rain events can cause damage
                that requires professional assessment and repair. Best Roofing Now provides the
                expert care your Waverly home needs, whether addressing storm damage, performing
                proactive maintenance, or planning ahead for eventual replacement.
              </p>
              <p>
                Our team understands the modern construction methods and premium materials used in
                Waverly homes. We work within the community&apos;s HOA guidelines and deliver results
                that maintain the high standards of this exceptional neighborhood.
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
              Roofing Services in Waverly
            </h2>
            <p className="text-gray text-lg">
              Comprehensive roofing solutions for Waverly&apos;s modern luxury homes.
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

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Waverly Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Waverly homeowners choose us for our certified expertise, premium material
                knowledge, and commitment to the quality standards this community expects.
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
                alt="Best Roofing Now - Trusted roofing contractor in Waverly Charlotte NC"
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
                Need a Roofer in Waverly?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate for your Waverly home today.
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

      {/* Service Areas */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serving Waverly &amp; Surrounding Areas
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Waverly Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {waverlyAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
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
                Waverly Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in Waverly Charlotte NC.
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
        slug="roofing-waverly-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-waverly-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Roofing Waverly"
      />

      <CTASection
        title="Ready to Work with Waverly's Trusted Roofer?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide expert recommendations for your Waverly home."
      />
    </>
  );
}
