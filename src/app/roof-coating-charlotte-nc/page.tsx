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
  Building2,
  Sun,
  Layers,
  ThermometerSun,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roof Coating Charlotte NC | Extend Your Roof\'s Life 15+ Years | Best Roofing Now',
  description:
    'Professional roof coating for all roof types in Charlotte NC -- pitched, flat, residential, and commercial. Silicone, acrylic, and elastomeric coatings extend your roof\'s life by 15+ years. Free estimates from BBB A+ rated contractor.',
  keywords: [
    'roof coating Charlotte NC',
    'roof coating commercial Charlotte',
    'silicone roof coating Charlotte NC',
    'acrylic roof coating Charlotte',
    'commercial roof coating Charlotte',
    'roof restoration Charlotte NC',
    'elastomeric roof coating Charlotte',
    'cool roof coating Charlotte NC',
    'roof sealant Charlotte NC',
    'reflective roof coating Charlotte',
    'residential roof coating Charlotte NC',
    'all roof types coating Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-coating-charlotte-nc`,
  },
  openGraph: {
    title: 'Roof Coating Charlotte NC | Extend Your Roof\'s Life 15+ Years | Best Roofing Now',
    description:
      'Roof coating for all roof types in Charlotte NC -- flat, pitched, residential, and commercial. Silicone, acrylic, and elastomeric coatings extend your roof life 15+ years. Free estimates available.',
    url: `${SITE_CONFIG.url}/roof-coating-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.flatRoof,
        width: 1200,
        height: 630,
        alt: 'Professional roof coating services Charlotte NC - flat roof restoration',
      },
    ],
  },
};

// Coating types offered
const coatingTypes = [
  {
    icon: Droplets,
    title: 'Silicone Roof Coatings',
    description: 'Premium silicone coatings ideal for flat roofs with ponding water. Superior UV resistance and waterproofing.',
    benefits: ['Handles ponding water', '20+ year lifespan', 'Excellent UV protection'],
  },
  {
    icon: Sun,
    title: 'Acrylic Roof Coatings',
    description: 'Cost-effective acrylic coatings for sloped roofs. Highly reflective for energy savings.',
    benefits: ['Budget-friendly', 'Great reflectivity', 'Easy application'],
  },
  {
    icon: Layers,
    title: 'Elastomeric Coatings',
    description: 'Flexible rubber-like coatings that expand and contract with temperature changes.',
    benefits: ['Superior flexibility', 'Crack bridging', 'Seamless membrane'],
  },
  {
    icon: ThermometerSun,
    title: 'Cool Roof Coatings',
    description: 'ENERGY STAR rated reflective coatings that reduce cooling costs by up to 30%.',
    benefits: ['Reduces energy costs', 'Lowers roof temperature', 'Extends roof life'],
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Award,
    title: 'Certified Applicators',
    description: 'Factory-trained and certified in all major coating systems for proper application.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Charlotte property owners.`,
  },
  {
    icon: Shield,
    title: 'Manufacturer Warranties',
    description: 'We offer coating systems with manufacturer warranties up to 20 years.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability insurance.',
  },
  {
    icon: Users,
    title: 'Commercial Specialists',
    description: 'Extensive experience with commercial flat roof coating and restoration.',
  },
  {
    icon: Clock,
    title: 'Minimal Disruption',
    description: 'Coating application causes minimal disruption to your business operations.',
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

// FAQs about roof coatings
const faqs = [
  {
    question: 'How long does a roof coating last in Charlotte NC?',
    answer:
      'Quality roof coatings in Charlotte typically last 10-20 years depending on the type. Silicone coatings can last 20+ years, while acrylic coatings typically last 10-15 years. Charlotte\'s hot summers and UV exposure make proper coating selection crucial. We help you choose the right coating for your specific roof type and conditions.',
  },
  {
    question: 'What is the best roof coating for flat roofs in Charlotte?',
    answer:
      'For Charlotte flat roofs, we typically recommend silicone coatings because they handle ponding water without degrading. Unlike acrylic coatings that can wash away in standing water, silicone remains intact. For roofs with proper drainage, acrylic coatings offer excellent value and reflectivity. We assess your roof\'s drainage and recommend the optimal solution.',
  },
  {
    question: 'Can roof coating be applied over an existing roof?',
    answer:
      'Yes, roof coatings are designed to be applied over existing roofing materials including TPO, EPDM, modified bitumen, metal, and built-up roofing. The existing roof must be in reasonably good condition with no major structural issues. We thoroughly inspect and prepare the surface before application to ensure proper adhesion.',
  },
  {
    question: 'How much does roof coating cost in Charlotte NC?',
    answer:
      'Roof coating in Charlotte typically costs $2-5 per square foot depending on the coating type, roof condition, and accessibility. For a 10,000 sq ft commercial roof, expect $20,000-$50,000. This is significantly less than full roof replacement, which can cost 2-3 times as much. We provide free detailed estimates for all coating projects.',
  },
  {
    question: 'Will roof coating reduce my energy bills?',
    answer:
      'Yes, reflective roof coatings can reduce cooling costs by 10-30% in Charlotte\'s hot climate. White or light-colored coatings reflect solar radiation, keeping roof surface temperatures up to 50 degrees cooler. This reduces heat transfer into your building and decreases air conditioning demands. Many of our customers see significant energy savings.',
  },
  {
    question: 'How long does roof coating application take?',
    answer:
      'Most commercial roof coating projects in Charlotte take 3-7 days depending on roof size and condition. The process includes surface cleaning, repairs, primer application, and coating layers. We work around your business schedule to minimize disruption. Weather is a factor - we need dry conditions for proper application.',
  },
  {
    question: 'Does roof coating come with a warranty?',
    answer:
      'Yes, we offer comprehensive warranties on all roof coating systems. Depending on the product and application, manufacturer warranties range from 10-20 years. Additionally, we provide our own workmanship warranty. We\'ll review all warranty options during your free consultation.',
  },
  {
    question: 'Is my roof a good candidate for coating?',
    answer:
      'Most roofs with 50% or more remaining life are good candidates for coating. Signs that coating is appropriate include minor surface wear, small cracks, and loss of reflectivity. Roofs with major structural damage, extensive ponding, or saturated insulation may require repair or replacement instead. Our free inspection determines if coating is right for your roof.',
  },
];

export default function RoofCoatingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Coating Charlotte NC', url: `${SITE_CONFIG.url}/roof-coating-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.flatRoof}
            alt="Professional roof coating services Charlotte NC - flat roof restoration"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">BBB A+ Rated | Commercial Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Coating <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Extend your roof life by 10-15 years with professional roof coatings
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides expert silicone and acrylic roof coating services for commercial and residential
              properties throughout Charlotte. Protect your investment, reduce energy costs, and avoid costly
              replacement with our premium coating systems.
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
                20-Year Warranties
              </span>
              <span className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-accent-light" />
                Commercial Experts
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Coating Types Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Professional Roof Coating Systems
            </h2>
            <p className="text-gray text-lg">
              We offer a complete range of roof coating solutions to extend your roof&apos;s life and improve
              energy efficiency for properties throughout Charlotte.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {coatingTypes.map((coating) => (
              <div
                key={coating.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <coating.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2 text-xl">{coating.title}</h3>
                <p className="text-gray text-sm mb-4">{coating.description}</p>
                <ul className="space-y-2">
                  {coating.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Coat Your Roof Instead of Replacing It?
              </h2>
              <p className="text-gray text-lg mb-6">
                Roof coating is a smart, cost-effective alternative to full roof replacement. Here&apos;s why
                Charlotte property owners choose coating:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark">Save 50-70% vs Replacement</h3>
                    <p className="text-gray text-sm">Coating costs a fraction of full replacement while adding years of protection.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ThermometerSun className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark">Reduce Energy Costs 10-30%</h3>
                    <p className="text-gray text-sm">Reflective coatings lower roof temperatures and reduce cooling demands.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark">Minimal Business Disruption</h3>
                    <p className="text-gray text-sm">No tear-off required - coating is applied directly over your existing roof.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark">Seamless Waterproofing</h3>
                    <p className="text-gray text-sm">Creates a monolithic, leak-proof membrane over your entire roof surface.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.beforeAfter.commercialFlat.after}
                alt="Completed roof coating project in Charlotte NC"
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

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Best Roofing Now for Roof Coating
            </h2>
            <p className="text-gray text-lg">
              As Charlotte&apos;s trusted roof coating specialists, we deliver quality workmanship backed by
              industry-leading warranties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-4">
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
                Ready to Extend Your Roof&apos;s Life?
              </h2>
              <p className="text-white/90">
                Get a free inspection and coating estimate from Charlotte&apos;s roof coating specialists.
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
              Roof Coating Services Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              We provide professional roof coating services for commercial and residential properties across the
              Greater Charlotte area.
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
                Roof Coating FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof coating services in Charlotte NC.
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
        slug="roof-coating-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roof-coating-charlotte-nc`}
      />

      {/* Final CTA */}
      <CTASection
        title="Ready for a Free Roof Coating Estimate?"
        subtitle="Extend your roof's life and reduce energy costs with professional roof coating. Contact Charlotte's trusted coating specialists for a free inspection and estimate."
      />
    </>
  );
}
