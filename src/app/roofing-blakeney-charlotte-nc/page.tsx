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
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
  SpeakableContentBlocks,
  FeaturedSnippetListAnswerSchema,
  FreeInspectionOfferSchema,
  WebPageSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roofing Blakeney Charlotte NC',
  robots: { index: false, follow: true },
  description:
    'Roofing contractor in Blakeney, South Charlotte NC. Roof replacement, repair, and storm damage restoration. BBB A+ rated. Free estimates.',
  keywords: [
    'roofing blakeney charlotte nc',
    'roofer blakeney charlotte',
    'blakeney roof replacement charlotte',
    'blakeney roof repair charlotte nc',
    'roofing contractor blakeney',
    'blakeney shopping center roofing',
    'south charlotte roofing blakeney',
    'blakeney neighborhood roofer',
    'best roofer blakeney charlotte nc',
    'blakeney charlotte roofing services',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-blakeney-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing Blakeney Charlotte NC | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing contractor serving Blakeney in South Charlotte. Premium roofing for 2000s-era homes. Free estimates.',
    url: `${SITE_CONFIG.url}/roofing-blakeney-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Blakeney Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

const services = [
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full roof replacement for Blakeney homes with premium architectural shingles and enhanced manufacturer warranties.',
    href: '/services/roof-replacement',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Expert repair for leaks, missing shingles, flashing failures, and wind damage on Blakeney-area homes.',
    href: '/services/roof-repair',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Fast response storm damage restoration with full insurance claim management for Blakeney homeowners.',
    href: '/services/storm-damage',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Detailed roof inspections with condition reports for maintenance, warranties, and home sales.',
    href: '/services/roof-inspection',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'Roofing services for Blakeney-area businesses, retail spaces, and commercial properties.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Shield,
    title: 'Emergency Service',
    description: '24/7 emergency roofing service for Blakeney homeowners with urgent leaks or storm damage.',
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
    description: 'GAF Factory-Certified and CertainTeed ShingleMaster for the highest quality installations.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability and workers\' comp coverage.',
  },
  {
    icon: Users,
    title: 'South Charlotte Experts',
    description: 'Deep experience with the 2000s-era homes and HOA communities common in the Blakeney area.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services for Blakeney homeowners when every minute counts.',
  },
];

const blakeneyAreas = [
  'Blakeney',
  'Blakeney Heath',
  'Blakeney Greens',
  'Rea Road',
  'Ardrey Kell Road',
  'Lancaster Highway',
  'Marvin Road',
  'Ballantyne Commons',
  'Ardrey',
  'Providence Road South',
  'Community House Road',
  'South Charlotte',
];

const nearbyAreas = [
  { name: 'Ballantyne', href: '/roofing-ballantyne-charlotte-nc' },
  { name: 'SouthPark', href: '/roofing-southpark-charlotte-nc' },
  { name: 'Waxhaw', href: '/roofing-waxhaw-nc' },
  { name: 'Weddington', href: '/roofing-weddington-nc' },
  { name: 'Pineville', href: '/roofing-pineville-nc' },
  { name: 'Matthews', href: '/roofing-matthews-nc' },
  { name: 'Marvin', href: '/roofing-marvin-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
];

const faqs = [
  {
    question: 'What roofing services do you offer in the Blakeney area?',
    answer:
      'Best Roofing Now provides complete roofing services in the Blakeney area including roof replacement, roof repair, storm damage restoration, emergency services, and roof inspections. We serve both residential and commercial properties throughout the Blakeney community.',
  },
  {
    question: 'How old are most roofs near Blakeney?',
    answer:
      'Most homes in the Blakeney area were built in the 2000s, making roofs approximately 15-25 years old. With standard architectural shingles lasting 25-30 years, many Blakeney roofs are in the window where proactive replacement can prevent costly damage from failing roofing materials.',
  },
  {
    question: 'How much does a roof replacement cost near Blakeney?',
    answer:
      'Roof replacement in the Blakeney area typically ranges from $10,000-$22,000 depending on home size, roof complexity, and material selection. Homes in the $400K-$900K range common in this area have varied roof sizes. We provide free, itemized estimates for every project.',
  },
  {
    question: 'Do you work with Blakeney-area HOAs?',
    answer:
      'Yes, we have experience working with the HOA communities surrounding Blakeney. We handle material submissions, color selection guidance, and architectural review board documentation to ensure your new roof meets all community standards.',
  },
  {
    question: 'What shingles do you recommend for Blakeney homes?',
    answer:
      'For Blakeney-area homes, we typically recommend premium architectural shingles like GAF Timberline HDZ, CertainTeed Landmark Pro, or GAF Grand Canyon designer shingles. These offer excellent value, enhanced curb appeal, and strong manufacturer warranties that match the quality of homes in this area.',
  },
  {
    question: 'Do you handle insurance claims for Blakeney storm damage?',
    answer:
      'Absolutely. We have extensive experience managing insurance claims for storm damage in the Blakeney area. We document damage thoroughly, coordinate with insurance adjusters, and ensure you receive fair coverage for proper repairs or replacement.',
  },
  {
    question: 'How quickly can you respond to emergency roof issues?',
    answer:
      'We offer 24/7 emergency roofing service for Blakeney homeowners. For urgent situations like active leaks or storm damage, we can typically respond within hours to secure your home with temporary protection and schedule permanent repairs promptly.',
  },
  {
    question: 'Do you offer financing for roof replacement?',
    answer:
      'Yes, we offer flexible financing options to help Blakeney homeowners manage the cost of roof replacement. We also work with insurance payments and can help you understand your coverage. Contact us for current financing program details.',
  },
];

export default function RoofingBlakeneyCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Blakeney Charlotte NC', url: `${SITE_CONFIG.url}/roofing-blakeney-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-blakeney-charlotte-nc`}
        pageName="Roofing Blakeney Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <WebPageSchema
        name="Roofing Blakeney Charlotte NC | Best Roofing Now"
        url={`${SITE_CONFIG.url}/roofing-blakeney-charlotte-nc`}
        description="Roofing contractor serving the Blakeney area of South Charlotte NC. Roof replacement, repair, storm damage."
        primaryImage={IMAGES.hero.hero1}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Blakeney Charlotte NC', url: `${SITE_CONFIG.url}/roofing-blakeney-charlotte-nc` },
        ]}
      />
      <FeaturedSnippetListAnswerSchema
        question="What roofing services do Blakeney-area Charlotte homeowners need most?"
        directAnswer="Blakeney is a popular Ballantyne-adjacent neighborhood built primarily in the 2000s, so most homes are now in the 20-25 year window where original architectural shingles begin to fail. The most common services we deliver here are full architectural-shingle replacement, hail/wind storm assessments with Xactimate documentation, pipe-boot and flashing repairs, HOA-compliant product selection, and gutter upsizing."
        items={[
          'Full architectural-shingle roof replacement of 2000s-builder-grade roofs reaching end of life',
          'Hail and wind storm damage assessments with Xactimate-format insurance documentation',
          'Pipe-boot, valley, and chimney-flashing repairs (8-12 year EPDM pipe-boot failure window)',
          'HOA-compliant color and product selection coordination for Blakeney homeowner associations',
          'Gutter repair and 6-inch+ upsizing to handle Piedmont rainfall intensity from neighborhood canopy',
        ]}
        pageUrl={`${SITE_CONFIG.url}/roofing-blakeney-charlotte-nc`}
      />
      <FreeInspectionOfferSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero1}
            alt="Professional roofing contractor in Blakeney Charlotte NC - Best Roofing Now"
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
              Roofing Blakeney <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Trusted Roofing for the Blakeney Area of South Charlotte
            </p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now serves homeowners in Blakeney and the surrounding Ballantyne-adjacent area
              of South Charlotte. Most Blakeney homes were built in the 2000s with architectural shingles
              now in their 20-25 year wear window — prime time for replacement before granule loss accelerates
              insurance claim risk. We hold GAF Master Elite, CertainTeed SELECT, and Owens Corning Platinum
              Preferred certifications (50-year non-prorated warranties), respond inside 2-4 hours for storm
              calls, and provide free inspections with adjuster-format Xactimate documentation.
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
              Expert Roofing Services for the Blakeney Community
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                The Blakeney area of South Charlotte has become one of the most sought-after
                neighborhoods in the city, anchored by the popular Blakeney Shopping Center and
                surrounded by well-maintained residential communities. Homes in this area, typically
                valued between $400K and $900K, were built primarily in the 2000s and represent
                a blend of upscale suburban living and urban convenience.
              </p>
              <p>
                At Best Roofing Now, we know the Blakeney area well. The homes here feature quality
                architectural shingles, moderate to complex roof designs, and active HOA communities
                that maintain high aesthetic standards. Our certified installers understand these
                requirements and deliver roofing solutions that meet both community standards and
                your expectations.
              </p>
              <p>
                With many Blakeney-area roofs now 15-25 years old, homeowners are increasingly
                facing decisions about repair versus replacement. We provide thorough inspections,
                honest recommendations, and competitive pricing so you can make the best decision
                for your home and budget.
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
              Roofing Services Near Blakeney
            </h2>
            <p className="text-gray text-lg">
              Comprehensive roofing solutions for residential and commercial properties
              in the Blakeney area of South Charlotte.
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
                Why Blakeney Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Blakeney-area homeowners choose us for our quality craftsmanship, transparent pricing,
                and deep experience with South Charlotte&apos;s HOA communities and home styles.
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
                src={IMAGES.hero.hero1}
                alt="Best Roofing Now - Trusted roofing contractor in Blakeney Charlotte NC"
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
                Need a Roofer Near Blakeney?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate for your Blakeney-area home today.
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
              Serving Blakeney &amp; Surrounding Areas
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Blakeney Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {blakeneyAreas.map((area) => (
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
                Blakeney Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in the Blakeney area of Charlotte NC.
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
        slug="roofing-blakeney-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-blakeney-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Roofing Blakeney"
      />

      <CTASection
        title="Ready to Work with Blakeney's Trusted Roofer?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations for your Blakeney-area home."
      />
    </>
  );
}
