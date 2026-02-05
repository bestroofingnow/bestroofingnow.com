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
  Landmark,
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
  title: 'Roofers Davidson NC | 5-Star',
  description:
    'Looking for trusted roofers in Davidson NC? Best Roofing Now is a 5-star rated, veteran-owned roofing company. Historic home expertise. Davidson College area specialists. Free estimates.',
  keywords: [
    'roofers davidson nc',
    'davidson roofers',
    'local roofers davidson',
    'roofers in davidson nc',
    'davidson nc roofers',
    'best roofers davidson nc',
    'top roofers davidson',
    'professional roofers davidson nc',
    'licensed roofers davidson',
    'historic home roofers davidson',
    'lake norman roofers davidson',
    'davidson college area roofers',
    'roofing company davidson nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofers-davidson-nc`,
  },
  openGraph: {
    title: 'Roofers Davidson NC | Lake Norman | Historic Home Experts',
    description:
      '5-star rated, veteran-owned roofers serving Davidson NC. Historic home specialists with Lake Norman expertise. BBB A+ rated. Free estimates.',
    url: `${SITE_CONFIG.url}/roofers-davidson-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Professional roofers Davidson NC - Best Roofing Now team',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Davidson homes including shingle, metal, slate, and cedar shake.',
    href: '/services/residential-roofing',
  },
  {
    icon: Landmark,
    title: 'Historic Home Roofing',
    description: 'Specialized expertise preserving the character of Davidson\'s historic properties.',
    href: '/services/residential-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, and storm damage in Davidson.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with premium materials and extended warranties.',
    href: '/roof-replacement-davidson-nc',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Free comprehensive inspections with detailed reports for Davidson properties.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration and insurance claim assistance.',
    href: '/services/storm-damage',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Star,
    title: '5-Star Rated',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Lake Norman homeowners.`,
  },
  {
    icon: Landmark,
    title: 'Historic Home Experts',
    description: 'Specialized experience with Davidson\'s historic properties and preservation requirements.',
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned with military values of integrity and excellence.',
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with zero complaints.',
  },
  {
    icon: Users,
    title: 'Certified Installers',
    description: 'GAF Master Elite and CertainTeed SELECT certified for premium warranties.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services for Davidson homeowners.',
  },
];

// Davidson neighborhoods
const davidsonNeighborhoods = [
  'Downtown Davidson',
  'River Run',
  'Summers Walk',
  'Bradford',
  'Westbranch',
  'Davidson Bay',
  'Harbour Place',
  'Historic District',
  'Davidson College Area',
  'McConnell',
  'St. Alban\'s',
  'Potts-Sloan-Beaty',
];

// FAQs
const faqs = [
  {
    question: 'Do you have experience with historic homes in Davidson?',
    answer:
      'Yes, we have extensive experience with Davidson\'s historic properties, particularly in the downtown historic district and areas near Davidson College. We understand the importance of preserving architectural character while ensuring modern protection. We work with appropriate materials like slate, cedar shake, and period-appropriate shingles.',
  },
  {
    question: 'How do I find the best roofers in Davidson NC?',
    answer:
      'Look for roofers with strong local reviews, proper NC licensing, and experience with both Lake Norman waterfront properties and historic homes. Best Roofing Now has 500+ five-star reviews, BBB A+ rating, and specialized expertise with Davidson\'s unique mix of historic and lakefront properties.',
  },
  {
    question: 'What should roofers in Davidson know about local requirements?',
    answer:
      'Davidson has specific requirements for historic districts and certain neighborhoods. Roofers should understand local architectural guidelines, HOA requirements, and preservation standards. Our team stays current with Davidson\'s building codes and works with the town\'s planning department when needed.',
  },
  {
    question: 'How much do roofers in Davidson NC charge?',
    answer:
      'Davidson roofing costs vary by project: repairs typically $300-$1,500, full replacements $10,000-$30,000+ for standard homes. Historic homes with specialty materials like slate or cedar can be $40,000-$80,000+. Lake Norman waterfront properties with premium materials may exceed $100,000. We provide free detailed estimates.',
  },
  {
    question: 'Do you offer emergency roofing services in Davidson?',
    answer:
      'Yes, we provide 24/7 emergency roofing services throughout Davidson and the Lake Norman area. Our emergency team typically responds within 1-2 hours for urgent situations like active leaks, storm damage, or fallen trees affecting roofs.',
  },
  {
    question: 'What roofing materials work best for Davidson homes?',
    answer:
      'For Davidson, we recommend: architectural shingles for most residential homes, cedar shake or synthetic slate for historic properties, standing seam metal for lakefront homes needing wind resistance, and natural slate for high-end estates. We help you select materials that match your home\'s style and meet any HOA requirements.',
  },
];

export default function RoofersDavidsonNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Davidson NC', url: `${SITE_CONFIG.url}/roofing-davidson-nc` },
          { name: 'Roofers Davidson NC', url: `${SITE_CONFIG.url}/roofers-davidson-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofers-davidson-nc`}
        pageName="Roofers Davidson NC"
        city="Davidson"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero2}
            alt="Professional roofers Davidson NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Landmark className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold">Historic Home & Lake Norman Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofers Davidson NC
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              5-Star Rated | Historic Home Experts
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is the trusted choice for Davidson homeowners. From historic downtown
              properties to River Run lakefront estates, we deliver quality roofing with military
              precision and small-town values.
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
                <Landmark className="w-5 h-5 text-secondary" />
                Historic Home Experts
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
              Complete Roofing Services in Davidson
            </h2>
            <p className="text-gray text-lg">
              From historic home restoration to lakefront new construction, our Davidson roofers
              handle all your roofing needs with expertise and care.
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
                Why Davidson Homeowners Choose Our Roofers
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need roofers in Davidson NC, choose a company with historic home expertise,
                exceptional reviews, and understanding of what makes Davidson special.
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
                src={IMAGES.houses.house1}
                alt="Davidson NC roofing project by Best Roofing Now"
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
              Davidson Neighborhoods We Serve
            </h2>
            <p className="text-gray text-lg">
              Our roofers have completed projects throughout Davidson, from historic downtown
              to lakefront communities.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {davidsonNeighborhoods.map((neighborhood) => (
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
                Davidson Roofers FAQs
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
        city="Davidson"
        citySlug="davidson-nc"
        variant="compact"
      />

      <GeoProjectGalleryStrip pageType="location" city="Davidson" slug="roofers-davidson-nc" />

      {/* Final CTA */}

      <CityGeoSection

        city="Davidson"

        state="NC"

        citySlug="davidson-nc"

        service="Roofers"

      />

      <CTASection
        title="Ready for Quality Roofing in Davidson?"
        subtitle="Get a free estimate from Davidson's most trusted roofers. Our team will assess your roof and provide honest recommendations tailored to your historic or lakefront home."
      />
    </>
  );
}
