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
  Droplets,
  AlertTriangle,
  MapPin,
  Settings,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Gutter Repair Charlotte NC | Fast & Affordable',
  description:
    'Fast and affordable gutter repair in Charlotte NC. Best Roofing Now offers gutter repair, cleaning, and replacement services. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'gutter repair charlotte nc',
    'gutter services charlotte',
    'gutter repair near me charlotte',
    'fix gutters charlotte nc',
    'gutter cleaning charlotte',
    'seamless gutter repair charlotte',
    'leaking gutter repair charlotte',
    'gutter contractors charlotte nc',
    'affordable gutter repair charlotte',
    'gutter maintenance charlotte nc',
    'sagging gutter repair charlotte',
    'clogged gutter repair charlotte nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gutter-repair-charlotte-nc`,
  },
  openGraph: {
    title: 'Gutter Repair Charlotte NC | Fast & Affordable',
    description:
      'Fast and affordable gutter repair in Charlotte NC. BBB A+ rated, veteran-owned. Gutter repair, cleaning, and replacement services. Free estimates.',
    url: `${SITE_CONFIG.url}/gutter-repair-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.gutters,
        width: 1200,
        height: 630,
        alt: 'Gutter repair Charlotte NC - Best Roofing Now gutter services',
      },
    ],
  },
};

// Gutter services offered
const gutterServices = [
  {
    icon: Wrench,
    title: 'Gutter Repair',
    description: 'Fix leaks, sagging, holes, and damaged sections quickly and affordably.',
    href: '/services/gutters',
  },
  {
    icon: Droplets,
    title: 'Gutter Cleaning',
    description: 'Professional cleaning to remove debris and ensure proper water flow.',
    href: '/services/gutters',
  },
  {
    icon: Settings,
    title: 'Gutter Replacement',
    description: 'Complete gutter system replacement with seamless aluminum options.',
    href: '/services/gutters',
  },
  {
    icon: Home,
    title: 'Seamless Gutters',
    description: 'Custom-fit seamless gutters manufactured on-site for your home.',
    href: '/services/gutters',
  },
  {
    icon: Shield,
    title: 'Gutter Guards',
    description: 'Protective covers to prevent clogs and reduce maintenance needs.',
    href: '/services/gutters',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Repairs',
    description: 'Fast response for storm damage and urgent gutter issues.',
    href: '/services/gutters',
  },
];

// Common gutter problems we fix
const gutterProblems = [
  {
    problem: 'Leaking Gutters',
    solution: 'Seal joints, repair holes, and replace damaged sections to stop leaks.',
  },
  {
    problem: 'Sagging Gutters',
    solution: 'Replace hangers, re-secure fascia boards, and restore proper slope.',
  },
  {
    problem: 'Clogged Gutters',
    solution: 'Remove debris, flush downspouts, and install gutter guards.',
  },
  {
    problem: 'Overflowing Gutters',
    solution: 'Improve drainage, add downspouts, and resize undersized gutters.',
  },
  {
    problem: 'Damaged Downspouts',
    solution: 'Repair or replace downspouts and extensions for proper drainage.',
  },
  {
    problem: 'Fascia Damage',
    solution: 'Repair water-damaged fascia boards before installing new gutters.',
  },
];

// Why choose us for gutter services
const whyChooseUs = [
  {
    icon: Clock,
    title: 'Fast Service',
    description: 'Same-day and next-day appointments available for gutter repairs.',
  },
  {
    icon: Star,
    title: '5-Star Rated',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star reviews from satisfied Charlotte customers.`,
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating.',
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Military values of integrity and excellence in every job.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Skilled technicians with years of gutter repair experience.',
  },
  {
    icon: CheckCircle,
    title: 'Fair Pricing',
    description: 'Transparent, competitive pricing with no hidden fees.',
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

// FAQs about gutter repair
const faqs = [
  {
    question: 'How much does gutter repair cost in Charlotte NC?',
    answer:
      'Gutter repair costs in Charlotte typically range from $100-$500 depending on the extent of damage. Simple fixes like resealing joints or replacing hangers are on the lower end, while replacing damaged sections or fixing fascia damage costs more. Full gutter replacement ranges from $1,000-$3,500 for most homes. We provide free estimates with transparent pricing.',
  },
  {
    question: 'What are signs I need gutter repair?',
    answer:
      'Watch for these signs: water overflowing during rain, visible sagging or pulling away from the house, leaking or dripping at seams, peeling paint or water stains on fascia, pooling water near your foundation, rust spots or holes in metal gutters, and plants growing in gutters. If you notice any of these, schedule a free inspection.',
  },
  {
    question: 'How often should gutters be cleaned in Charlotte?',
    answer:
      'In Charlotte, we recommend cleaning gutters at least twice a year - once in late fall after leaves drop and once in late spring. Homes with many trees nearby may need more frequent cleaning. Gutter guards can significantly reduce cleaning frequency. Regular cleaning prevents clogs that cause overflow and damage.',
  },
  {
    question: 'Can you repair gutters in the rain?',
    answer:
      'While we can assess gutter problems in light rain, most repairs are best performed in dry conditions for proper sealing and safety. However, we can perform emergency temporary repairs during rain to prevent further damage, then return for permanent repairs when weather permits.',
  },
  {
    question: 'Should I repair or replace my gutters?',
    answer:
      'Repair is usually best for isolated issues like small leaks, loose hangers, or minor sagging. Consider replacement if you have widespread damage, multiple problem areas, gutters over 20 years old, or if repair costs approach 50% of replacement cost. We\'ll give you honest advice on the most cost-effective solution.',
  },
  {
    question: 'What type of gutters do you recommend for Charlotte homes?',
    answer:
      'We typically recommend 5-inch or 6-inch seamless aluminum gutters for Charlotte homes. Seamless gutters have fewer leak points than sectional gutters. For homes with heavy tree coverage or high rainfall areas, 6-inch gutters with larger downspouts provide better capacity. We also offer copper and steel options.',
  },
  {
    question: 'Do you offer gutter guards installation?',
    answer:
      'Yes! We install several types of gutter guards to reduce debris buildup and maintenance needs. Options include mesh guards, reverse curve systems, and foam inserts. Gutter guards are especially valuable for Charlotte homes with nearby trees. We\'ll recommend the best option for your specific situation.',
  },
  {
    question: 'How quickly can you repair my gutters?',
    answer:
      'We offer fast service for gutter repairs in Charlotte. Many repairs can be scheduled within 1-2 days, and we offer same-day service for emergencies like active leaking causing water damage. Most gutter repairs are completed in just a few hours once our team arrives.',
  },
];

export default function GutterRepairCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Gutter Repair Charlotte NC', url: `${SITE_CONFIG.url}/gutter-repair-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.gutters}
            alt="Gutter repair Charlotte NC - Best Roofing Now gutter services"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Droplets className="w-4 h-4" />
              <span className="text-sm font-semibold">Fast & Affordable | Veteran-Owned</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Gutter Repair <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Fast, affordable gutter services from Charlotte&apos;s trusted roofing experts
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides professional gutter repair, cleaning, and replacement services
              throughout Charlotte NC. From fixing leaks to complete gutter system installation, our
              experienced team delivers quality work with fast turnaround times.
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
                <Clock className="w-5 h-5 text-green-400" />
                Fast Service
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
              Complete Gutter Services in Charlotte
            </h2>
            <p className="text-gray text-lg">
              From minor repairs to complete gutter system replacement, we handle all your gutter
              needs with expert craftsmanship and quality materials.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gutterServices.map((service) => (
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

      {/* Common Problems Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Common Gutter Problems We Fix
            </h2>
            <p className="text-gray text-lg">
              Our experienced team can diagnose and repair all types of gutter issues quickly and
              affordably.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gutterProblems.map((item) => (
              <div key={item.problem} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-accent" />
                  {item.problem}
                </h3>
                <p className="text-gray text-sm">
                  <span className="font-semibold text-primary">Our Solution:</span> {item.solution}
                </p>
              </div>
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
                Why Charlotte Chooses Us for Gutter Repair
              </h2>
              <p className="text-gray text-lg mb-8">
                Your gutters protect your home from water damage. Trust Charlotte&apos;s most reliable
                gutter repair team to keep them working properly.
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
                src={IMAGES.services.gutters}
                alt="Gutter repair Charlotte NC - professional gutter services"
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
                Need Gutter Repair in Charlotte?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Charlotte&apos;s trusted gutter experts.
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

      {/* Why Gutters Matter Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Gutter Maintenance Matters in Charlotte
              </h2>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <p className="text-gray mb-4">
                Charlotte receives an average of 43 inches of rain per year, making properly
                functioning gutters essential for protecting your home. Damaged or clogged gutters
                can lead to:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray"><strong>Foundation damage</strong> from water pooling near your home</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray"><strong>Basement flooding</strong> and moisture problems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray"><strong>Fascia and soffit rot</strong> from overflow and leaking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray"><strong>Landscape erosion</strong> from uncontrolled water flow</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray"><strong>Pest infestations</strong> in clogged, debris-filled gutters</span>
                </li>
              </ul>
              <p className="text-gray">
                Regular gutter maintenance and prompt repairs protect your home from costly water
                damage. Our team provides fast, affordable gutter services to keep your home safe.
              </p>
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
              Gutter Repair Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              Our gutter repair team serves all of Charlotte and surrounding communities.
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
                Gutter Repair FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about gutter repair in Charlotte NC.
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

      {/* Final CTA */}
      <CTASection
        title="Ready for Professional Gutter Repair in Charlotte?"
        subtitle="Get a free, no-obligation estimate from our experienced team. We'll assess your gutters and provide honest recommendations with transparent pricing."
      />
    </>
  );
}
