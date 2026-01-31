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

export const metadata: Metadata = {
  title: 'Roofers Fort Mill SC | Top Rated Roofing Company | Best Roofing Now',
  description:
    'Looking for trusted roofers in Fort Mill SC? Best Roofing Now serves Fort Mill, Tega Cay, and York County with BBB A+ rated service. Licensed, insured, veteran-owned. Free estimates for all roofing services. Call (704) 605-6047.',
  keywords: [
    'roofers fort mill sc',
    'fort mill roofers',
    'roofers near me fort mill',
    'best roofers fort mill sc',
    'fort mill sc roofing company',
    'local roofers fort mill',
    'top rated roofers fort mill sc',
    'roofers tega cay sc',
    'york county roofers',
    'trusted roofers fort mill',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofers-fort-mill-sc`,
  },
  openGraph: {
    title: 'Roofers Fort Mill SC | Top Rated Roofing Company | Best Roofing Now',
    description:
      'BBB A+ rated roofers serving Fort Mill SC and York County. Veteran-owned with 500+ roofs installed. Licensed, insured. Free estimates!',
    url: `${SITE_CONFIG.url}/roofers-fort-mill-sc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Top rated roofers Fort Mill SC - Best Roofing Now team',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Fort Mill homes including shingle, metal, and tile roofing.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems for Fort Mill businesses and commercial properties.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, and storm damage in York County.',
    href: '/roof-repair-fort-mill-sc',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with premium materials and extended warranties.',
    href: '/roof-replacement-fort-mill-sc',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Free comprehensive inspections with detailed reports for Fort Mill homeowners.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration and insurance claim assistance for York County.',
    href: '/services/storm-damage',
  },
];

// Why choose us
const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied customers in Fort Mill and Charlotte.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed roofing contractor with comprehensive liability insurance for SC work.',
  },
  {
    icon: Users,
    title: 'Certified Installers',
    description: 'CertainTeed, GAF, and Owens Corning certified for premium warranty options.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services when Fort Mill residents need us most.',
  },
];

// Fort Mill areas
const fortMillAreas = [
  'Fort Mill',
  'Baxter Village',
  'Tega Cay',
  'Kingsley',
  'Springfield',
  'Regent Park',
  'Massey',
  'Sutton',
  'Indian Land',
  'Lake Wylie',
  'Riverwalk',
  'Catawba Ridge',
];

// FAQs
const faqs = [
  {
    question: 'Who are the best roofers in Fort Mill SC?',
    answer: `Best Roofing Now is one of the top-rated roofers serving Fort Mill SC with a perfect 5.0 Google rating, BBB A+ accreditation, and over ${SITE_CONFIG.googleReviewCount} reviews. We are veteran-owned, licensed, insured, and certified by major manufacturers including CertainTeed, GAF, and Owens Corning. Our team has installed 500+ roofs throughout the Charlotte metro area including Fort Mill and York County.`,
  },
  {
    question: 'How much do roofers charge in Fort Mill SC?',
    answer: 'Roofing costs in Fort Mill SC vary based on the type of work needed. Roof repairs typically range from $200-$1,500, while complete roof replacements range from $8,000-$25,000 for most homes depending on size, pitch, and material choice. We provide free, detailed estimates with transparent pricing and no hidden fees.',
  },
  {
    question: 'Are you licensed roofers in South Carolina?',
    answer: 'Yes, Best Roofing Now is properly licensed and insured to perform roofing work in South Carolina including Fort Mill, Tega Cay, and all of York County. We carry comprehensive general liability insurance and workers compensation coverage, protecting you from any liability during your roofing project.',
  },
  {
    question: 'Do Fort Mill roofers offer free estimates?',
    answer: 'Yes! Best Roofing Now offers completely free roof inspections and estimates throughout Fort Mill SC and York County. Our certified inspectors will thoroughly examine your roof, identify any issues, and provide a detailed written proposal. There is absolutely no obligation to hire us after the inspection.',
  },
  {
    question: 'How quickly can Fort Mill roofers repair my roof?',
    answer: 'Most routine roof repairs in Fort Mill are completed the same day or within 24-48 hours. For emergencies like active leaks or storm damage, we offer 24/7 service and can often respond within 2-4 hours. Complete roof replacements typically take 1-3 days depending on roof size and complexity.',
  },
  {
    question: 'Do you help with insurance claims in Fort Mill?',
    answer: 'Absolutely. We have extensive experience helping Fort Mill homeowners navigate insurance claims for storm damage and other covered repairs. We provide detailed documentation, meet with adjusters on your behalf, and advocate for fair settlements. Many Fort Mill roofs qualify for insurance coverage after hail storms, wind damage, and other weather events.',
  },
  {
    question: 'What roofing materials do Fort Mill roofers recommend?',
    answer: 'For Fort Mill homes, we typically recommend architectural asphalt shingles for their excellent balance of durability, affordability, and style. Popular choices include GAF Timberline HDZ, CertainTeed Landmark Pro, and Owens Corning Duration. Metal roofing is also an excellent option for homeowners seeking maximum longevity (40-70 years). We help you choose the best material based on your home, budget, and goals.',
  },
  {
    question: 'What warranty do Fort Mill roofers offer?',
    answer: 'We offer comprehensive warranty coverage including manufacturer warranties up to 50 years on materials and our own workmanship warranty. As CertainTeed, GAF, and Owens Corning certified installers, we can offer enhanced warranties like GAF Golden Pledge (50 years material + 25 years workmanship) and CertainTeed SureStart Plus.',
  },
];

export default function RoofersFortMillSCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofers Fort Mill SC', url: `${SITE_CONFIG.url}/roofers-fort-mill-sc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofers-fort-mill-sc`}
        pageName="Roofers Fort Mill SC"
        city="Fort Mill"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Top rated roofers Fort Mill SC - Best Roofing Now professional team"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold">Top Rated Roofers | BBB A+ | Veteran-Owned</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofers <br className="hidden md:block" />
              <span className="text-accent-light">Fort Mill SC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Fort Mill&apos;s trusted roofers with {SITE_CONFIG.roofsInstalled}+ roofs installed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides expert roofing services throughout Fort Mill SC, Tega Cay, and York County.
              From repairs to complete replacements, our certified team delivers exceptional quality backed by
              industry-leading warranties and a BBB A+ rating.
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
              Roofing Services in Fort Mill SC
            </h2>
            <p className="text-gray text-lg">
              From minor repairs to complete roof replacements, our certified roofers handle all your
              roofing needs in Fort Mill and York County.
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
                Why Fort Mill Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need roofers in Fort Mill SC, you want a company you can trust. Best Roofing
                Now has built our reputation on honesty, quality workmanship, and putting customers first.
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
                alt="Completed roofing project by Best Roofing Now in Fort Mill SC"
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
                Need Trusted Roofers in Fort Mill SC?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from York County&apos;s top-rated roofing company.
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
              Roofers Serving Fort Mill & York County
            </h2>
            <p className="text-gray text-lg">
              Our roofers serve homeowners and businesses throughout Fort Mill, Tega Cay, and surrounding communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Fort Mill & York County Areas</h3>
              <div className="flex flex-wrap gap-2">
                {fortMillAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Also Serving Nearby</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
                  { name: 'Charlotte, NC', href: '/locations/charlotte-nc' },
                  { name: 'Pineville, NC', href: '/locations/pineville-nc' },
                  { name: 'Matthews, NC', href: '/locations/matthews-nc' },
                  { name: 'Indian Trail, NC', href: '/locations/indian-trail-nc' },
                  { name: 'Waxhaw, NC', href: '/locations/waxhaw-nc' },
                ].map((city) => (
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
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roofers Fort Mill SC FAQs
              </h2>
              <p className="text-gray text-lg">
                Common questions about finding and hiring roofers in Fort Mill, Tega Cay, and York County.
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

      {/* Related Pages */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              More Fort Mill Roofing Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/roofing-fort-mill-sc"
              className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roofing Fort Mill SC</h3>
              <p className="text-gray text-sm mb-3">Complete roofing services overview for Fort Mill.</p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/roof-repair-fort-mill-sc"
              className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roof Repair Fort Mill SC</h3>
              <p className="text-gray text-sm mb-3">Fast, reliable repairs for leaks and storm damage.</p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/roof-replacement-fort-mill-sc"
              className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roof Replacement Fort Mill SC</h3>
              <p className="text-gray text-sm mb-3">Complete roof replacement with premium materials.</p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Work with Fort Mill's Top Roofers?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations tailored to your needs and budget."
      />
    </>
  );
}
