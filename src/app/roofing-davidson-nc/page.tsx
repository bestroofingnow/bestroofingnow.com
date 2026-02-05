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
import { BreadcrumbSchema, FAQSchema, ServiceAreaPageSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roofing Davidson NC | Davidson College Area Roofers | Best Roofing Now',
  description:
    'Looking for a trusted roofing company in Davidson NC? Best Roofing Now serves Davidson and Lake Norman from our Charlotte headquarters. Expert roofers for historic homes and modern properties. BBB A+ rated, veteran-owned.',
  keywords: [
    'roofing davidson nc',
    'roofing company davidson nc',
    'davidson roofers',
    'davidson nc roofing contractor',
    'roof repair davidson nc',
    'roof replacement davidson nc',
    'davidson college area roofing',
    'roofers near davidson nc',
    'best roofer davidson',
    'historic home roofing davidson',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-davidson-nc`,
  },
  openGraph: {
    title: 'Roofing Davidson NC | Davidson College Area Roofers | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing company serving Davidson NC and Lake Norman. Expert roofers for historic homes and modern properties. Free estimates.',
    url: `${SITE_CONFIG.url}/roofing-davidson-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero4,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Davidson NC - Best Roofing Now',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Davidson homes including historic properties and modern builds.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems for Davidson businesses and commercial properties.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Expert repairs for leaks, missing shingles, and storm damage in Davidson.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with materials suited to Davidson\'s architectural styles.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Free comprehensive inspections for Davidson homeowners with detailed reports.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration and insurance claim assistance for Lake Norman.',
    href: '/services/storm-damage',
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
    icon: Users,
    title: 'Certified Installers',
    description: 'CertainTeed, GAF, and Owens Corning certified for premium warranty options.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services when Davidson residents need us most.',
  },
];

// Davidson neighborhoods and areas
const davidsonAreas = [
  'Davidson College Campus Area',
  'Downtown Davidson',
  'Davidson Bay',
  'Davidson Pointe',
  'Harbour Place',
  'Lake Davidson',
  'McConnell',
  'Old Davidson',
  'River Run',
  'St. Alban\'s',
  'The Pines',
  'The Villages',
  'Town Center',
  'West Branch',
  'Westmoreland Historic District',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Cornelius', href: '/roofing-cornelius-nc' },
  { name: 'Huntersville', href: '/roofing-huntersville-nc' },
  { name: 'Mooresville', href: '/roofing-mooresville-nc' },
  { name: 'Denver', href: '/roofing-denver-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
];

// FAQs specific to Davidson
const faqs = [
  {
    question: 'Do you provide roofing services in Davidson NC?',
    answer:
      'Yes! Best Roofing Now proudly serves Davidson NC and the entire Lake Norman area from our Charlotte headquarters. We provide complete roofing services including roof repair, replacement, inspection, and storm damage restoration to all Davidson neighborhoods, from the historic downtown to lakefront communities.',
  },
  {
    question: 'Can you work on historic homes in Davidson NC?',
    answer:
      'Absolutely. Davidson is known for its charming historic homes, particularly near Davidson College and in Old Davidson. Our team has experience working on historic properties, understanding the need to maintain architectural integrity while providing modern protection. We can match period-appropriate materials and styles.',
  },
  {
    question: 'How much does roof replacement cost in Davidson NC?',
    answer:
      'Roof replacement costs in Davidson typically range from $8,000 to $25,000 for most homes, depending on roof size, pitch, and material choice. Historic homes or properties requiring specialty materials may vary. We provide free, detailed estimates with transparent pricing.',
  },
  {
    question: 'What roofing materials work best for Davidson homes?',
    answer:
      'For Davidson homes, we recommend high-quality architectural shingles from CertainTeed, GAF, or Owens Corning. Historic properties may benefit from dimensional shingles that replicate traditional looks. Metal roofing is excellent for longevity, and we also offer slate-look synthetic options.',
  },
  {
    question: 'Do you handle insurance claims for Davidson homeowners?',
    answer:
      'Yes, we have extensive experience helping Davidson homeowners with insurance claims. Lake Norman sees severe weather, and we provide thorough damage documentation, meet with adjusters, and advocate for fair settlements. Many roofs qualify for insurance coverage after storm events.',
  },
  {
    question: 'How long does a roof replacement take in Davidson?',
    answer:
      'Most residential roof replacements in Davidson are completed in 1-3 days. We understand Davidson\'s close-knit community character and work efficiently while minimizing disruption to neighbors. Larger or historic homes may take 3-5 days to ensure proper care.',
  },
  {
    question: 'Do you offer free roof inspections in Davidson?',
    answer:
      'Yes! We offer completely free roof inspections throughout Davidson and Lake Norman. Our certified inspectors will thoroughly examine your roof - including attention to details important for historic homes - and provide a detailed written report with photos.',
  },
  {
    question: 'Are you familiar with Davidson\'s building requirements?',
    answer:
      'Yes, Davidson has specific architectural standards to preserve the town\'s character. We\'re familiar with local requirements and can help you select materials and colors that comply with Davidson\'s design guidelines while protecting your home.',
  },
];

export default function RoofingDavidsonNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Davidson NC', url: `${SITE_CONFIG.url}/roofing-davidson-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema
        city="Davidson"
        state="NC"
        slug="roofing-davidson-nc"
        distance={20}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero4}
            alt="Professional roofing services in Davidson NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Davidson from Charlotte</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Davidson NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Davidson College Area Roofers</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Expert roofing for historic homes and Lake Norman properties with {SITE_CONFIG.roofsInstalled}+ roofs installed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now serves Davidson NC and Lake Norman from our Charlotte headquarters. Whether you have
              a historic home near Davidson College or a modern property on Lake Norman, our certified team delivers
              exceptional quality roofing backed by industry-leading warranties.
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
              Complete Roofing Services in Davidson NC
            </h2>
            <p className="text-gray text-lg">
              From historic home restoration to modern roof replacements, our certified contractors serve all of
              Davidson with expert craftsmanship and attention to architectural detail.
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

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Davidson Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Davidson is a special community with deep roots and high standards. When you need a roofing company
                that respects your home and your neighborhood, Best Roofing Now delivers the quality and integrity
                that Davidson residents expect.
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
                alt="Completed roofing project in Davidson NC by Best Roofing Now"
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

      {/* Local Area Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serving All of Davidson & Lake Norman
            </h2>
            <p className="text-gray text-lg">
              From historic downtown to lakefront communities, we provide expert roofing services throughout
              Davidson and the surrounding Lake Norman area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Davidson Areas */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Davidson Neighborhoods We Serve</h3>
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
              <h3 className="text-xl font-bold text-dark mb-4">Nearby Lake Norman Cities We Serve</h3>
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

          {/* Davidson Context */}
          <div className="mt-12 bg-primary/5 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Preserving Davidson's Distinctive Character
            </h3>
            <p className="text-gray mb-4">
              Davidson is home to the prestigious Davidson College, founded in 1837, and the town's character reflects
              this rich history. With tree-lined streets, historic homes, and a walkable downtown, Davidson maintains
              strict architectural standards to preserve its charm.
            </p>
            <p className="text-gray mb-4">
              Our team understands that roofing in Davidson often means more than just protection - it's about
              maintaining the aesthetic integrity of this beloved Lake Norman community. Whether you have a Victorian
              in Old Davidson or a contemporary home in River Run, we select materials that complement your home's style.
            </p>
            <p className="text-gray">
              Located between Cornelius and Mooresville on Lake Norman's eastern shore, Davidson offers the best of
              small-town living with easy access to Charlotte. We're proud to serve this community from our Charlotte
              headquarters, bringing the same attention to detail that Davidson homeowners expect.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Need a Roofing Company in Davidson NC?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Lake Norman's most trusted roofing company.
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
                Davidson Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in Davidson NC and Lake Norman.
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
        city="Davidson"
        slug="roofing-davidson-nc"
        count={4}
        title="Recent Roofing Projects in Davidson, NC"
        subtitle="Browse completed roofing projects from the Davidson area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-davidson-nc`}
      />

      {/* Final CTA */}
      <CTASection
        title="Ready for Expert Roofing in Davidson NC?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations that respect your home's character and your budget."
      />
    </>
  );
}
