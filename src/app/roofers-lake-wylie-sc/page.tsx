import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
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
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roofers Lake Wylie SC | Top-Rated Roofing Contractors',
  description:
    'Looking for trusted roofers in Lake Wylie SC? Best Roofing Now serves Lake Wylie, Tega Cay, and York County with BBB A+ rated service. Licensed, insured, veteran-owned. Free estimates. Call (704) 605-6047.',
  keywords: [
    'roofers lake wylie sc',
    'roofing contractors lake wylie',
    'best roofers lake wylie sc',
    'lake wylie roofing company',
    'roofers near me lake wylie',
    'local roofers lake wylie sc',
    'top rated roofers lake wylie',
    'roofers tega cay sc',
    'york county roofers',
    'trusted roofers lake wylie sc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofers-lake-wylie-sc`,
  },
  openGraph: {
    title: 'Roofers Lake Wylie SC | Top-Rated Roofing Contractors | Best Roofing Now',
    description:
      'BBB A+ rated roofers serving Lake Wylie SC and York County. Veteran-owned with 500+ roofs installed. Licensed, insured. Free estimates!',
    url: `${SITE_CONFIG.url}/roofers-lake-wylie-sc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero14,
        width: 1200,
        height: 630,
        alt: 'Top rated roofers Lake Wylie SC - Best Roofing Now team',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Lake Wylie homes including shingle, metal, and tile roofing.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems for Lake Wylie businesses and commercial properties.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, and storm damage in Lake Wylie.',
    href: '/roof-repair-lake-wylie-sc',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with premium materials and extended warranties.',
    href: '/roof-replacement-lake-wylie-sc',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Free comprehensive inspections with detailed reports for Lake Wylie homeowners.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration and insurance claim assistance for York County.',
    href: '/storm-damage-roof-repair-lake-wylie-sc',
  },
];

// What to look for in a roofer
const whatToLookFor = [
  {
    icon: Shield,
    title: 'Licensing & Insurance',
    description: 'Always verify your roofer is licensed in South Carolina and carries both general liability and workers compensation insurance. Best Roofing Now is fully licensed and insured.',
  },
  {
    icon: Award,
    title: 'Manufacturer Certifications',
    description: 'Certified installers can offer better warranties. We are CertainTeed ShingleMaster and GAF Factory-Certified, enabling up to 50-year warranty coverage.',
  },
  {
    icon: Star,
    title: 'Reviews & Reputation',
    description: `Look for consistent 5-star reviews and BBB accreditation. Best Roofing Now has ${SITE_CONFIG.googleReviewCount}+ Google reviews with a perfect 5.0 rating and BBB A+ accreditation.`,
  },
  {
    icon: CheckCircle,
    title: 'Written Estimates',
    description: 'Reputable roofers provide detailed written estimates with itemized costs. We always provide transparent pricing with no hidden fees or surprise charges.',
  },
  {
    icon: Users,
    title: 'Local Presence',
    description: 'Choose a roofer with a local presence who will be around for warranty service. Best Roofing Now is a locally owned company serving the Charlotte metro area.',
  },
  {
    icon: Clock,
    title: 'Responsiveness',
    description: 'A good roofer responds quickly to inquiries and emergencies. We offer same-day service for urgent repairs and 24/7 emergency response.',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied customers in Lake Wylie and Charlotte.`,
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
    description: 'Round-the-clock emergency roofing services when Lake Wylie residents need us most.',
  },
];

// Lake Wylie areas
const lakeWylieAreas = [
  'Lake Wylie',
  'Tega Cay',
  'Clover',
  'Lake Wylie Pointe',
  'River Hills',
  'The Palisades',
  'Reflection Pointe',
  'Catawba Creek',
  'McConnells',
  'Bethany',
  'Fort Mill',
  'Rock Hill',
];

// FAQs
const faqs = [
  {
    question: 'Who are the best roofers in Lake Wylie SC?',
    answer: `Best Roofing Now is one of the top-rated roofers serving Lake Wylie SC with a perfect 5.0 Google rating, BBB A+ accreditation, and over ${SITE_CONFIG.googleReviewCount} reviews. We are veteran-owned, licensed, insured, and certified by major manufacturers including CertainTeed, GAF, and Owens Corning. Our team has installed ${SITE_CONFIG.roofsInstalled}+ roofs throughout the Charlotte metro area including Lake Wylie and York County.`,
  },
  {
    question: 'How much do roofers charge in Lake Wylie SC?',
    answer: 'Roofing costs in Lake Wylie SC vary based on the type of work needed. Roof repairs typically range from $200-$1,500, while complete roof replacements range from $8,500-$25,000 for most homes depending on size, pitch, and material choice. We provide free, detailed estimates with transparent pricing and no hidden fees.',
  },
  {
    question: 'Are you licensed roofers in South Carolina?',
    answer: 'Yes, Best Roofing Now is properly licensed and insured to perform roofing work in South Carolina including Lake Wylie, Tega Cay, and all of York County. We carry comprehensive general liability insurance and workers compensation coverage, protecting you from any liability during your roofing project.',
  },
  {
    question: 'Do Lake Wylie roofers offer free estimates?',
    answer: 'Yes! Best Roofing Now offers completely free roof inspections and estimates throughout Lake Wylie SC and York County. Our certified inspectors will thoroughly examine your roof, identify any issues, and provide a detailed written proposal. There is absolutely no obligation to hire us after the inspection.',
  },
  {
    question: 'How do I choose the right roofer in Lake Wylie SC?',
    answer: 'When choosing a roofer in Lake Wylie, look for proper licensing, insurance, manufacturer certifications, consistent positive reviews, and a local presence. Ask for written estimates, check BBB ratings, and verify they pull permits. Best Roofing Now meets all these criteria with BBB A+ accreditation, manufacturer certifications, and a perfect 5.0 Google rating.',
  },
  {
    question: 'Do Lake Wylie roofers help with insurance claims?',
    answer: 'Absolutely. We have extensive experience helping Lake Wylie homeowners navigate insurance claims for storm damage and other covered repairs. We provide detailed documentation, meet with adjusters on your behalf, and advocate for fair settlements. Many Lake Wylie roofs qualify for insurance coverage after hail storms, wind damage, and other weather events.',
  },
];

export default function RoofersLakeWylieSCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofers Lake Wylie SC', url: `${SITE_CONFIG.url}/roofers-lake-wylie-sc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofers-lake-wylie-sc`}
        pageName="Roofers Lake Wylie SC"
        city="Lake Wylie"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero14}
            alt="Top rated roofers Lake Wylie SC - Best Roofing Now professional team"
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
              <span className="text-accent-light">Lake Wylie SC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Lake Wylie&apos;s trusted roofers with {SITE_CONFIG.roofsInstalled}+ roofs installed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides expert roofing services throughout Lake Wylie SC, Tega Cay, and York County.
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
              Roofing Services in Lake Wylie SC
            </h2>
            <p className="text-gray text-lg">
              From minor repairs to complete roof replacements, our certified roofers handle all your
              roofing needs in Lake Wylie and York County.
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

      {/* What to Look For Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What to Look for in Lake Wylie Roofers
            </h2>
            <p className="text-gray text-lg">
              Choosing the right roofer is one of the most important decisions you will make as a homeowner.
              Here is what to look for.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatToLookFor.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray text-sm">{item.description}</p>
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
                Why Lake Wylie Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need roofers in Lake Wylie SC, you want a company you can trust. Best Roofing
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
              <SEOImage
                src={IMAGES.realProjects.project17}
                alt="Completed roofing project by Best Roofing Now in Lake Wylie SC"
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
                Need Trusted Roofers in Lake Wylie SC?
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
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofers Serving Lake Wylie & York County
            </h2>
            <p className="text-gray text-lg">
              Our roofers serve homeowners and businesses throughout Lake Wylie, Tega Cay, and surrounding communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Lake Wylie & York County Areas</h3>
              <div className="flex flex-wrap gap-2">
                {lakeWylieAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Also Serving Nearby</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Fort Mill, SC', href: '/roofers-fort-mill-sc' },
                  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
                  { name: 'Charlotte, NC', href: '/locations/charlotte-nc' },
                  { name: 'Pineville, NC', href: '/locations/pineville-nc' },
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
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roofers Lake Wylie SC FAQs
              </h2>
              <p className="text-gray text-lg">
                Common questions about finding and hiring roofers in Lake Wylie, Tega Cay, and York County.
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

      {/* Related Pages */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              More Lake Wylie Roofing Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/roof-repair-lake-wylie-sc"
              className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roof Repair Lake Wylie SC</h3>
              <p className="text-gray text-sm mb-3">Fast, reliable repairs for leaks and storm damage.</p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/roof-replacement-lake-wylie-sc"
              className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roof Replacement Lake Wylie SC</h3>
              <p className="text-gray text-sm mb-3">Complete roof replacement with premium materials.</p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/storm-damage-roof-repair-lake-wylie-sc"
              className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Storm Damage Repair Lake Wylie SC</h3>
              <p className="text-gray text-sm mb-3">Emergency storm damage restoration with insurance help.</p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="location" city="Fort Mill" slug="roofers-lake-wylie-sc" />

      <CityGeoSection
        city="Lake Wylie"
        state="SC"
        citySlug="lake-wylie-sc"
        service="Roofers"
      />

      <CTASection
        title="Ready to Work with Lake Wylie's Top Roofers?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations tailored to your needs and budget."
      />
    </>
  );
}
