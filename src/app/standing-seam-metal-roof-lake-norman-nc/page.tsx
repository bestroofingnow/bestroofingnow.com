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
  Home,
  Wrench,
  Wind,
  MapPin,
  Zap,
  Waves,
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
import { LKNPartnershipsBlock } from '@/components/sections/LKNPartnershipsBlock';
import { LKNDataCitations } from '@/components/sections/LKNDataCitations';
import { LKNHowToBundle } from '@/components/seo/LKNHowToSchemas';
export const metadata: Metadata = {
  title: 'Standing Seam Metal Roof Lake Norman NC',
  description:
    'Standing seam metal roofing for Lake Norman NC homes. Wind-resistant, energy-efficient, 50-70 year lifespan. BBB A+ rated. Free estimates.',
  keywords: [
    'standing seam metal roof lake norman',
    'metal roofing lake norman nc',
    'standing seam metal roof cornelius nc',
    'lake norman metal roof contractor',
    'wind resistant roofing lake norman',
    'waterfront metal roofing lake norman nc',
    'standing seam roof davidson nc',
    'metal roof mooresville nc',
    'lake norman waterfront roofing',
    'energy efficient metal roofing lake norman',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/standing-seam-metal-roof-lake-norman-nc`,
  },
  openGraph: {
    title: 'Standing Seam Metal Roof Lake Norman NC | Wind Resistant | Best Roofing Now',
    description:
      'Lake Norman\'s standing seam metal roofing specialists. Wind-resistant, energy-efficient metal roofs for waterfront and lakeside homes. Free estimates.',
    url: `${SITE_CONFIG.url}/standing-seam-metal-roof-lake-norman-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Standing seam metal roof Lake Norman NC - Best Roofing Now',
      },
    ],
  },
};

const services = [
  {
    icon: Home,
    title: 'Standing Seam Installation',
    description: 'Complete standing seam metal roof installation with concealed fasteners and premium Kynar finishes for Lake Norman homes.',
    href: '/metal-roofing-charlotte-nc',
  },
  {
    icon: Wind,
    title: 'Wind-Resistant Roofing',
    description: 'Metal roofing systems rated for 140+ MPH winds, ideal for Lake Norman\'s exposed waterfront properties.',
    href: '/metal-roofing-charlotte-nc',
  },
  {
    icon: Zap,
    title: 'Energy-Efficient Systems',
    description: 'Cool metal roofing with reflective coatings that reduce cooling costs by up to 25% in Lake Norman\'s hot summers.',
    href: '/metal-roofing-charlotte-nc',
  },
  {
    icon: Wrench,
    title: 'Metal Roof Repair',
    description: 'Expert repair of existing metal roofing including panel replacement, sealant renewal, and fastener maintenance.',
    href: '/services/roof-repair',
  },
  {
    icon: Waves,
    title: 'Waterfront Solutions',
    description: 'Corrosion-resistant metal roofing designed for lakefront humidity and moisture exposure unique to Lake Norman.',
    href: '/metal-roofing-charlotte-nc',
  },
  {
    icon: Shield,
    title: 'Storm Damage Restoration',
    description: 'Metal roof storm damage assessment and restoration with insurance claim expertise for Lake Norman properties.',
    href: '/services/storm-damage',
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'Metal Roofing Experts',
    description: 'Specialized training in standing seam metal installation techniques and premium panel systems.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from homeowners across the Lake Norman region.`,
  },
  {
    icon: Shield,
    title: 'Manufacturer Certified',
    description: 'Certified installers for leading metal roofing manufacturers ensuring warranty-backed installations.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability and workers\' compensation coverage.',
  },
  {
    icon: Users,
    title: 'Lake Norman Experience',
    description: 'Extensive experience with Lake Norman\'s waterfront properties, HOA requirements, and local building codes.',
  },
  {
    icon: Clock,
    title: '50-70 Year Lifespan',
    description: 'Standing seam metal roofs last 50-70+ years, often the last roof a Lake Norman homeowner will ever need.',
  },
];

const metalBenefits = [
  {
    title: 'Wind Resistance',
    description: 'Standing seam metal roofs are rated for 140+ MPH winds, providing superior protection during Lake Norman storms and straight-line winds.',
    stat: '140+ MPH',
    label: 'Wind Rating',
  },
  {
    title: 'Energy Efficiency',
    description: 'Reflective metal panels with cool roof coatings can reduce cooling costs by 20-25% in Lake Norman\'s hot, humid summers.',
    stat: '20-25%',
    label: 'Cooling Savings',
  },
  {
    title: 'Longevity',
    description: 'Standing seam metal roofs last 50-70+ years with minimal maintenance, far outlasting shingle roofs in the Lake Norman climate.',
    stat: '50-70+',
    label: 'Year Lifespan',
  },
  {
    title: 'Corrosion Resistance',
    description: 'Premium Galvalume steel and aluminum panels with Kynar 500 finishes resist the humidity and moisture of lakefront living.',
    stat: 'Kynar 500',
    label: 'Premium Finish',
  },
];

const lakeNormanAreas = [
  { name: 'Cornelius', href: '/roofing-cornelius-nc' },
  { name: 'Davidson', href: '/roofing-davidson-nc' },
  { name: 'Mooresville', href: '/roofing-mooresville-nc' },
  { name: 'Huntersville', href: '/roofing-huntersville-nc' },
  { name: 'Denver', href: '/roofing-denver-nc' },
  { name: 'Sherrills Ford', href: '/roofing-contractor-charlotte-nc' },
  { name: 'The Peninsula', href: '/roofing-cornelius-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
];

const faqs = [
  {
    question: 'Why is standing seam metal a good choice for Lake Norman waterfront homes?',
    answer:
      'Standing seam metal roofing is ideal for Lake Norman waterfront homes because it offers superior wind resistance (140+ MPH rating), excellent corrosion resistance against lakefront humidity, energy efficiency through reflective coatings, and a 50-70+ year lifespan. The concealed fastener system prevents water intrusion, and the sleek profile complements both modern and traditional lakefront architecture.',
  },
  {
    question: 'How does standing seam metal roofing handle Lake Norman storms?',
    answer:
      'Standing seam metal roofs are among the most wind-resistant roofing systems available. The interlocking panel design with concealed fasteners creates a virtually impenetrable surface that withstands high winds without lifting or tearing. Unlike shingle roofs, there are no individual pieces that can be blown off during Lake Norman\'s severe thunderstorms and straight-line wind events.',
  },
  {
    question: 'What colors and finishes are available for standing seam metal roofs?',
    answer:
      'We offer standing seam metal roofing in 30+ colors with premium Kynar 500 (PVDF) finishes that resist fading, chalking, and weathering for 40+ years. Popular Lake Norman choices include Charcoal Gray, Slate Blue, Burnished Bronze, Dark Bronze, and Galvalume Silver. We bring color samples to your home so you can see how each option looks against your property and the lake.',
  },
  {
    question: 'How much does a standing seam metal roof cost at Lake Norman?',
    answer:
      'Standing seam metal roofing at Lake Norman typically costs $12-$22 per square foot installed, depending on panel gauge, finish quality, and roof complexity. For a typical 2,500 sq ft Lake Norman home, expect $30,000-$55,000. While the initial cost is higher than shingles, the 50-70+ year lifespan and energy savings make it a superior long-term investment.',
  },
  {
    question: 'Are metal roofs noisy during rain at Lake Norman?',
    answer:
      'Modern standing seam metal roofs installed over solid decking with proper underlayment are no louder than other roofing materials during rain. The solid plywood decking, synthetic underlayment, and attic insulation in Lake Norman homes effectively dampen sound. Many homeowners report they cannot tell any difference from their previous shingle roof.',
  },
  {
    question: 'Do Lake Norman HOAs allow standing seam metal roofing?',
    answer:
      'Most Lake Norman HOAs allow standing seam metal roofing, especially in earth-tone and traditional colors. Some communities like The Peninsula, Trump National, and The Point have pre-approved metal roofing profiles. We review your HOA\'s guidelines, prepare material samples and documentation, and handle the approval process before beginning any work.',
  },
  {
    question: 'How long does standing seam metal roof installation take?',
    answer:
      'A typical Lake Norman standing seam metal roof installation takes 3-7 days depending on roof size and complexity. Waterfront properties with complex rooflines or steep pitches may require additional time. We coordinate material delivery and crew scheduling to complete your project efficiently while maintaining the highest quality standards.',
  },
  {
    question: 'What maintenance does a standing seam metal roof require?',
    answer:
      'Standing seam metal roofs require minimal maintenance. We recommend annual visual inspections, clearing debris from valleys and gutters, and occasional cleaning to maintain appearance. There are no shingles to replace, no granules to lose, and no moss or algae issues common with asphalt roofs on Lake Norman. The Kynar 500 finish resists fading and chalking for decades.',
  },
];

export default function StandingSeamMetalRoofLakeNormanNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Standing Seam Metal Roof Lake Norman NC', url: `${SITE_CONFIG.url}/standing-seam-metal-roof-lake-norman-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/standing-seam-metal-roof-lake-norman-nc`}
        pageName="Standing Seam Metal Roof Lake Norman NC"
        city="Cornelius"
      />
      <VoiceSearchActionSchema />
      <LKNHowToBundle pageUrl={`${SITE_CONFIG.url}/standing-seam-metal-roof-lake-norman-nc`} city={"Lake Norman"} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero1}
            alt="Standing seam metal roof Lake Norman NC - wind resistant metal roofing"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 rounded-full px-4 py-2 mb-4">
              <Wind className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold text-blue-200">Wind-Resistant Metal Roofing</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Standing Seam Metal Roof <br className="hidden md:block" />
              <span className="text-blue-300">Lake Norman NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium Metal Roofing for Lake Norman Waterfront &amp; Lakeside Homes
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now specializes in standing seam metal roof installations for Lake Norman
              homes. Wind-resistant, energy-efficient, and built to last 50-70+ years, metal roofing
              is the ultimate choice for lakefront living in Cornelius, Davidson, and Mooresville.
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
                className="border-white text-white hover:bg-white hover:text-slate-900"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-blue-300 fill-blue-300" />
                5.0 Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-300" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <Wind className="w-5 h-5 text-blue-300" />
                140+ MPH Wind Rated
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-300" />
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
              Why Lake Norman Homeowners Choose Standing Seam Metal
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Lake Norman&apos;s waterfront properties face unique challenges that make standing seam
                metal roofing the ideal choice. From high winds sweeping across the water to the
                persistent humidity of lakefront living, a metal roof provides superior protection
                that traditional shingle roofs simply cannot match.
              </p>
              <p>
                Standing seam metal roofing features interlocking panels with concealed fasteners
                that create a seamless, watertight surface. This design eliminates the weak points
                found in shingle roofs where individual pieces can lift, tear, or blow off during
                storms. For Lake Norman homes, this means peace of mind during severe weather.
              </p>
              <p>
                Beyond durability, standing seam metal roofs offer exceptional energy efficiency.
                Reflective Kynar 500 finishes bounce solar heat away from your home, reducing
                cooling costs by 20-25% during Lake Norman&apos;s hot summers. With a lifespan of
                50-70+ years, a standing seam metal roof is often the last roof a homeowner
                will ever need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Standing Seam Metal Roof Benefits
            </h2>
            <p className="text-gray text-lg">
              Why standing seam metal is the superior roofing choice for Lake Norman properties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metalBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-3xl font-bold text-primary mb-1">{benefit.stat}</div>
                <div className="text-sm text-gray mb-4">{benefit.label}</div>
                <h3 className="font-bold text-dark mb-2">{benefit.title}</h3>
                <p className="text-gray text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Metal Roofing Services for Lake Norman
            </h2>
            <p className="text-gray text-lg">
              Comprehensive standing seam metal roofing solutions for Lake Norman&apos;s waterfront
              and lakeside properties.
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

      {/* Why Choose Us */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Lake Norman Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Lake Norman homeowners choose us for our specialized metal roofing expertise,
                waterfront property experience, and commitment to installations that stand up to
                lakefront conditions for decades.
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
                alt="Standing seam metal roof installation at Lake Norman NC - Best Roofing Now"
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready for a Standing Seam Metal Roof?
              </h2>
              <p className="text-white/90">
                Get a free estimate for your Lake Norman home from our metal roofing specialists.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-700"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Free Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-blue-700 hover:bg-white/90"
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
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serving All of Lake Norman
            </h2>
            <p className="text-gray text-lg">
              We provide standing seam metal roofing throughout the Lake Norman region.
            </p>
          </div>
          <div className="bg-light rounded-xl p-6 shadow-md max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-3">
              {lakeNormanAreas.map((area) => (
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
                Standing Seam Metal Roof FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about standing seam metal roofing for Lake Norman homes.
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
        pageType="other"
        city="Cornelius"
        slug="standing-seam-metal-roof-lake-norman-nc"
        count={4}
        title="Recent Roofing Projects in the Lake Norman Area"
        subtitle="Browse completed roofing projects from the Lake Norman area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/standing-seam-metal-roof-lake-norman-nc`}
      />

      <CityGeoSection
        city="Cornelius"
        state="NC"
        citySlug="cornelius-nc"
        service="Standing Seam Metal Roofing"
      />

      {/* Lake Norman Guide Cross-Link */}
      <section className="py-8 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray mb-4">Want to learn everything about roofing on Lake Norman?</p>
            <Link href="/lake-norman-roofing-guide" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-lg">
              Read The Complete Lake Norman Roofing Guide (2026) <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>


      <LKNPartnershipsBlock city={"Lake Norman"} />
      <LKNDataCitations city={"Lake Norman"} />
      <CTASection
        title="Ready for Wind-Resistant Metal Roofing?"
        subtitle="Get a free estimate from Lake Norman's standing seam metal roofing specialists. We'll assess your property, recommend the best metal panel system, and deliver an installation built to last 50-70+ years."
      />
    </>
  );
}
