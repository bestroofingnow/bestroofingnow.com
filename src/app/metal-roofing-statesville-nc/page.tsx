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
  Search,
  MapPin,
  Zap,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';
import { LKNPartnershipsBlock } from '@/components/sections/LKNPartnershipsBlock';
import { LKNDataCitations } from '@/components/sections/LKNDataCitations';
export const metadata: Metadata = {
  title: 'Metal Roofing Statesville NC',
  description:
    'Looking for metal roofing in Statesville NC? Best Roofing Now installs premium standing seam and metal shingle roofing in Iredell County. BBB A+ rated, veteran-owned. 50+ year lifespan, energy efficient. Free estimates!',
  keywords: [
    'metal roofing statesville nc',
    'metal roof statesville',
    'standing seam metal roof statesville nc',
    'metal roofing contractors statesville',
    'metal roof installation statesville nc',
    'iredell county metal roofing',
    'metal roof cost statesville',
    'metal roofing near me statesville',
    'best metal roofing statesville nc',
    'metal roof replacement statesville',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/metal-roofing-statesville-nc`,
  },
  openGraph: {
    title: 'Metal Roofing Statesville NC | Standing Seam Experts | Best Roofing Now',
    description:
      'Premium metal roofing installation in Statesville NC. BBB A+ rated, veteran-owned. Standing seam, metal shingles, 50+ year lifespan. Free estimates!',
    url: `${SITE_CONFIG.url}/metal-roofing-statesville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Metal roofing installation in Statesville NC - Best Roofing Now',
      },
    ],
  },
};

// Metal roofing options
const metalOptions = [
  {
    icon: Home,
    title: 'Standing Seam',
    description: 'Premium concealed-fastener panels for maximum durability and a sleek, modern appearance.',
    href: '/services/metal-roofing',
  },
  {
    icon: Shield,
    title: 'Metal Shingles',
    description: 'Metal shingles that replicate the look of traditional shingles with superior metal performance.',
    href: '/services/metal-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Metal',
    description: 'Industrial-grade metal roofing systems for Statesville commercial and industrial buildings.',
    href: '/commercial-roofing-statesville-nc',
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    description: 'Reflective metal roofing that reduces cooling costs by up to 25% for Statesville homes.',
    href: '/services/metal-roofing',
  },
  {
    icon: Wrench,
    title: 'Metal Roof Repair',
    description: 'Expert repair services for existing metal roofs including panel replacement and leak sealing.',
    href: '/roof-repair-statesville-nc',
  },
  {
    icon: Search,
    title: 'Free Consultation',
    description: 'Complimentary assessment to determine if metal roofing is right for your Statesville property.',
    href: '/roof-inspection-statesville-nc',
  },
];

// Why choose metal
const whyChooseMetal = [
  {
    icon: Clock,
    title: '50+ Year Lifespan',
    description: 'Metal roofs last 2-3 times longer than asphalt shingles, making them a smart investment.',
  },
  {
    icon: Shield,
    title: 'Storm Resistant',
    description: 'Handles high winds up to 140 mph and resists hail damage common in Iredell County storms.',
  },
  {
    icon: Zap,
    title: 'Energy Savings',
    description: 'Reflective surfaces reduce cooling costs by up to 25% during hot Statesville summers.',
  },
  {
    icon: Award,
    title: 'Low Maintenance',
    description: 'Virtually maintenance-free with no risk of rot, cracking, or insect damage.',
  },
  {
    icon: Star,
    title: 'Increases Home Value',
    description: 'Metal roofing can increase your home\'s resale value by up to 6% according to industry studies.',
  },
  {
    icon: CheckCircle,
    title: 'Eco-Friendly',
    description: 'Made from recycled materials and 100% recyclable at end of life, reducing landfill waste.',
  },
];

// Local areas
const localAreas = [
  'Downtown Statesville',
  'Historic District',
  'Signal Hill',
  'Brookdale',
  'Fourth Creek',
  'Cool Springs',
  'West End',
  'Northview',
  'Southview',
  'Amity Hill',
  'Scotts Creek',
  'Elmwood',
];

// Nearby cities
const nearbyCities = [
  { name: 'Mooresville', href: '/roofing-mooresville-nc' },
  { name: 'Troutman', href: '/roofing-troutman-nc' },
  { name: 'Hickory', href: '/locations/hickory-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Lake Norman', href: '/roofing-lake-norman-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
];

// FAQs
const faqs = [
  {
    question: 'How much does metal roofing cost in Statesville NC?',
    answer:
      'Metal roofing in Statesville typically costs $10,000-$35,000 depending on the system, material, and home size. Standing seam metal roofing is at the higher end, while metal shingles are more affordable. While the upfront cost is higher than asphalt, the 50+ year lifespan and energy savings often make metal the more economical long-term choice.',
  },
  {
    question: 'Is metal roofing good for Statesville NC weather?',
    answer:
      'Metal roofing is excellent for Statesville\'s climate. It handles the severe thunderstorms that move along the I-77/I-40 corridor, resists hail damage, withstands high winds up to 140 mph, and reflects summer heat to reduce cooling costs. Metal is one of the best roofing choices for Iredell County weather conditions.',
  },
  {
    question: 'How long does a metal roof last in Statesville?',
    answer:
      'A properly installed metal roof in Statesville will last 50-70+ years with minimal maintenance. Compare this to asphalt shingles which typically last 20-30 years. Metal roofs don\'t crack, curl, or lose granules like shingles, and they resist the humidity and algae growth common in North Carolina.',
  },
  {
    question: 'Is metal roofing noisy when it rains?',
    answer:
      'Modern metal roofing installed over solid decking with proper underlayment is no louder than asphalt shingles during rain. The combination of decking, underlayment, and attic insulation effectively dampens rain noise. Many homeowners are surprised by how quiet their metal roof is.',
  },
  {
    question: 'Can I install a metal roof over my existing shingles in Statesville?',
    answer:
      'In some cases, metal roofing can be installed over existing asphalt shingles, which can save on tear-off costs. However, we recommend a full tear-off for the best results, as it allows us to inspect and repair the roof deck. We\'ll assess your specific situation during our free consultation.',
  },
  {
    question: 'Does metal roofing increase home value in Statesville?',
    answer:
      'Yes, metal roofing typically increases home value by 1-6% according to industry studies. The long lifespan, energy efficiency, and low maintenance appeal to buyers. In Statesville\'s growing real estate market, a metal roof is an attractive selling point that can help your home stand out.',
  },
  {
    question: 'What colors are available for metal roofing?',
    answer:
      'Metal roofing comes in a wide range of colors including charcoal, matte black, bronze, dark red, forest green, and various shades of gray and blue. We offer premium paint finishes that resist fading and chalking for decades. Our team can help you choose a color that complements your Statesville home\'s style.',
  },
  {
    question: 'Do you offer warranties on metal roofing in Statesville?',
    answer:
      'Yes, our metal roofing installations in Statesville come with comprehensive warranties. This typically includes a 40-50 year paint finish warranty, a lifetime structural warranty from the manufacturer, and our own workmanship warranty. The specific coverage depends on the metal roofing system you choose.',
  },
];

export default function MetalRoofingStatesvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Metal Roofing Statesville NC', url: `${SITE_CONFIG.url}/metal-roofing-statesville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/metal-roofing-statesville-nc`}
        pageName="Metal Roofing Statesville NC"
        city="Statesville"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero2}
            alt="Metal roofing installation in Statesville NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Premium Metal Roofing Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Metal Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Statesville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              50+ year metal roofing built to withstand Iredell County weather
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Upgrade your Statesville home with premium metal roofing from Best Roofing Now. Standing seam
              and metal shingle systems provide unmatched durability, energy efficiency, and curb appeal.
              Our experienced team delivers expert installation backed by comprehensive warranties.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Metal Roof Estimate
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

      {/* Metal Options Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Metal Roofing Options for Statesville Homes
            </h2>
            <p className="text-gray text-lg">
              From standing seam to metal shingles, we offer premium metal roofing systems designed
              to protect your Iredell County property for decades.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metalOptions.map((option) => (
              <Link
                key={option.title}
                href={option.href}
                className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <option.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {option.title}
                </h3>
                <p className="text-gray text-sm mb-3">{option.description}</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Metal Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Statesville Homeowners Choose Metal Roofing
              </h2>
              <p className="text-gray text-lg mb-8">
                Metal roofing offers Statesville homeowners unmatched performance, longevity, and energy
                savings. Here is why more Iredell County residents are making the switch to metal.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseMetal.map((item) => (
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
                src={IMAGES.realProjects.drone1}
                alt="Metal roofing installation by Best Roofing Now in Statesville NC"
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
                Interested in Metal Roofing for Your Statesville Home?
              </h2>
              <p className="text-white/90">
                Get a free consultation and estimate from our metal roofing specialists.
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
                Schedule Free Consultation
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

      {/* Local Area Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Metal Roofing for Statesville & Iredell County Properties
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Metal roofing is an increasingly popular choice among Statesville homeowners, and for good reason.
                Iredell County's location at the I-77/I-40 crossroads brings severe thunderstorms, occasional hail,
                and high winds that challenge traditional roofing materials. Metal roofing stands up to these
                conditions while providing superior energy efficiency during hot North Carolina summers.
              </p>
              <p>
                For Statesville's growing neighborhoods like Signal Hill and Brookdale, metal roofing adds modern
                curb appeal and long-term value. For historic homes in downtown Statesville, metal shingles offer
                a traditional appearance with decades of maintenance-free performance. Whatever your home's style,
                there is a metal roofing solution that fits.
              </p>
              <p>
                Best Roofing Now's experienced team installs standing seam, metal shingle, and commercial metal
                roofing systems throughout Iredell County. Our BBB A+ rating and veteran-owned values ensure you
                receive honest guidance and expert installation on every metal roofing project.
              </p>
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
              Metal Roofing Throughout Statesville & Iredell County
            </h2>
            <p className="text-gray text-lg">
              We install metal roofing for homeowners and businesses throughout the Statesville area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Statesville Area Communities</h3>
              <div className="flex flex-wrap gap-2">
                {localAreas.map((area) => (
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
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Metal Roofing FAQs for Statesville
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about metal roofing in Statesville NC.
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
        city="Statesville"
        slug="metal-roofing-statesville-nc"
      />

      <CityGeoSection
        city="Statesville"
        state="NC"
        citySlug="statesville-nc"
        service="Metal Roofing"
      />


      <LKNPartnershipsBlock city={"Statesville"} />
      <LKNDataCitations city={"Statesville"} />
      <CTASection
        title="Ready for a Metal Roof on Your Statesville Home?"
        subtitle="Get a free consultation and estimate from our metal roofing specialists. We'll help you choose the perfect system for your Iredell County property."
      />
    </>
  );
}
