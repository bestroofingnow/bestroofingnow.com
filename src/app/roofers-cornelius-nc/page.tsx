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
  Waves,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { MeetTheFamily } from '@/components/sections/MeetTheFamily';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roofers Cornelius NC | 5-Star',
  description:
    'Looking for trusted roofers in Cornelius NC? Best Roofing Now is a 5-star rated, veteran-owned roofing company serving Lake Norman waterfront homes. BBB A+ rated. Free estimates.',
  keywords: [
    'roofers cornelius nc',
    'cornelius roofers',
    'local roofers cornelius',
    'roofers in cornelius nc',
    'cornelius nc roofers',
    'best roofers cornelius nc',
    'top roofers cornelius',
    'professional roofers cornelius nc',
    'licensed roofers cornelius',
    'experienced roofers cornelius nc',
    'lake norman roofers',
    'roofers near the peninsula',
    'waterfront roofers cornelius',
    'roofing company cornelius nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofers-cornelius-nc`,
  },
  openGraph: {
    title: 'Roofers Cornelius NC | Lake Norman | 5-Star Rated',
    description:
      '5-star rated, veteran-owned roofers serving Cornelius NC and Lake Norman waterfront homes. BBB A+ rated with 500+ roofs completed. Free estimates and 24/7 emergency service.',
    url: `${SITE_CONFIG.url}/roofers-cornelius-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Professional roofers Cornelius NC - Best Roofing Now team at work',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Cornelius homes including shingle, metal, and luxury materials.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems for Cornelius businesses and commercial properties.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, and storm damage in Cornelius.',
    href: '/roof-repair-cornelius-nc',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with premium materials and extended warranties.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Free comprehensive inspections with detailed reports for Cornelius properties.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration and insurance claim assistance for Lake Norman.',
    href: '/storm-damage-roof-repair-cornelius-nc',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Star,
    title: '5-Star Rated',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Lake Norman area homeowners.`,
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofers with comprehensive liability insurance.',
  },
  {
    icon: Users,
    title: 'Certified Installers',
    description: 'CertainTeed, GAF, and Owens Corning certified for premium warranty options.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services for Cornelius and Lake Norman homeowners.',
  },
];

// Cornelius neighborhoods
const corneliusNeighborhoods = [
  'The Peninsula',
  'Antiquity',
  'Bailey\'s Glen',
  'Cornelius Town Center',
  'Jetton Road',
  'Magnolia Estates',
  'Oakhurst',
  'Sailview',
  'Smithville',
  'The Farms',
  'The Greens',
  'Westmoreland',
];

// FAQs
const faqs = [
  {
    question: 'How do I find the best roofers in Cornelius NC?',
    answer:
      'Look for roofers with strong reviews, proper licensing, and experience with Lake Norman properties. Best Roofing Now has 500+ five-star Google reviews, BBB A+ rating, and extensive experience with Cornelius waterfront homes including The Peninsula, Jetton Road, and Antiquity. We provide free inspections and transparent estimates.',
  },
  {
    question: 'What should I look for when hiring roofers in Cornelius?',
    answer:
      'Key factors include: NC roofing license, comprehensive insurance, manufacturer certifications (GAF, CertainTeed), strong local reviews, experience with Lake Norman weather patterns, and warranty options. Avoid roofers who require large upfront deposits or can\'t provide references from Cornelius customers.',
  },
  {
    question: 'How much do roofers in Cornelius NC charge?',
    answer:
      'Cornelius roofing costs vary by project scope: repairs typically range $300-$1,500, inspections are often free, and full replacements run $8,000-$25,000+ for standard homes. Lake Norman waterfront properties with premium materials can be $30,000-$100,000+. We provide free detailed estimates so you know exactly what to expect.',
  },
  {
    question: 'Do you offer emergency roofing services in Cornelius?',
    answer:
      'Yes, we provide 24/7 emergency roofing services throughout Cornelius and the Lake Norman area. Our emergency team can typically respond within 1-2 hours for urgent situations like active leaks, storm damage, or fallen trees. Call our emergency line anytime for immediate assistance.',
  },
  {
    question: 'Are your roofers experienced with waterfront homes?',
    answer:
      'Absolutely. Our team has extensive experience with Lake Norman waterfront properties including The Peninsula, Jetton Road estates, and other lakefront communities. We understand the unique challenges of lakefront construction including wind exposure, moisture management, and premium material requirements.',
  },
  {
    question: 'What roofing warranties do you offer in Cornelius?',
    answer:
      'We offer comprehensive warranty options: our own 10-year workmanship warranty on all installations, plus manufacturer warranties up to 50 years on premium materials. As GAF Master Elite and CertainTeed ShingleMaster certified contractors, we can offer extended warranty programs not available from standard roofers.',
  },
];

export default function RoofersCorneliusNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Cornelius NC', url: `${SITE_CONFIG.url}/roofing-cornelius-nc` },
          { name: 'Roofers Cornelius NC', url: `${SITE_CONFIG.url}/roofers-cornelius-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofers-cornelius-nc`}
        pageName="Roofers Cornelius NC"
        city="Cornelius"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero2}
            alt="Professional roofers Cornelius NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Waves className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold">Lake Norman Roofing Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofers Cornelius NC
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              5-Star Rated | Lake Norman Waterfront Experts
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is the trusted choice for Cornelius homeowners seeking reliable,
              experienced roofers. From The Peninsula to Jetton Road, we deliver quality roofing
              with military precision and family values.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Estimate
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
                <Star className="w-5 h-5 text-secondary" />
                {SITE_CONFIG.googleReviewCount}+ 5-Star Reviews
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-secondary" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-secondary" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Roofing Services in Cornelius
            </h2>
            <p className="text-gray text-lg">
              From routine repairs to full replacements, our Cornelius roofers handle all your roofing needs
              with expertise and care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray text-sm mb-3">{service.description}</p>
                <span className="inline-flex items-center text-primary font-medium text-sm">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
                Why Cornelius Homeowners Choose Our Roofers
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need roofers in Cornelius NC, choose a company with proven expertise,
                exceptional reviews, and a commitment to quality that matches the standards of
                Lake Norman&apos;s finest communities.
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
                src={IMAGES.houses.modern1}
                alt="Cornelius NC roofing project by Best Roofing Now"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-xl shadow-lg p-4">
                <p className="font-bold text-2xl">500+</p>
                <p className="text-sm text-white/90">Lake Norman Roofs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Cornelius Neighborhoods We Serve
            </h2>
            <p className="text-gray text-lg">
              Our roofers have completed projects throughout Cornelius, from waterfront estates
              to charming town center homes.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {corneliusNeighborhoods.map((neighborhood) => (
              <span
                key={neighborhood}
                className="bg-light rounded-full px-5 py-2 text-primary font-medium"
              >
                {neighborhood}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Meet The Family Section */}
      <MeetTheFamily variant="full" />

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
                Cornelius Roofers FAQs
              </h2>
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
        city="Cornelius"
        citySlug="cornelius-nc"
        variant="compact"
      />

      <GeoProjectGalleryStrip pageType="location" city="Cornelius" slug="roofers-cornelius-nc" />

      {/* Final CTA */}

      <CityGeoSection

        city="Cornelius"

        state="NC"

        citySlug="cornelius-nc"

        service="Roofers"

      />

      <CTASection
        title="Ready for Quality Roofing in Cornelius?"
        subtitle="Get a free estimate from Cornelius's most trusted roofers. Our team will assess your roof and provide honest recommendations tailored to your Lake Norman home."
      />
    </>
  );
}
