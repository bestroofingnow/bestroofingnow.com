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
  Clock,
  Zap,
  Wind,
  Waves,
  Leaf,
  DollarSign,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Metal Roofing Denver NC',
  description:
    'Premium metal roofing in Denver NC. Standing seam & corrugated for Lake Norman western shore homes. 140+ MPH wind rated. 40-70 year lifespan. Free estimates.',
  keywords: [
    'metal roofing denver nc',
    'denver nc metal roof',
    'standing seam metal roof denver nc',
    'metal roof installation denver nc',
    'metal roofing contractors denver nc',
    'lake norman western shore metal roofing',
    'lincoln county metal roofing',
    'metal roof replacement denver nc',
    'metal roofing cost denver nc',
    'wind resistant roofing denver nc',
    'metal roof trilogy lake norman',
    'denver nc metal roofing company',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/metal-roofing-denver-nc`,
  },
  openGraph: {
    title: 'Metal Roofing Denver NC | Lake Norman Western Shore Specialists',
    description:
      'Premium metal roofing for Denver NC and Lake Norman western shore homes. Standing seam rated 140+ MPH. 40-70 year lifespan with minimal maintenance. Free estimates.',
    url: `${SITE_CONFIG.url}/metal-roofing-denver-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.houses.modern1,
        width: 1200,
        height: 630,
        alt: 'Metal roofing Denver NC - Best Roofing Now',
      },
    ],
  },
};

// Metal roofing benefits
const benefits = [
  {
    icon: Clock,
    title: '40-70 Year Lifespan',
    description: 'Metal roofs last 2-3x longer than asphalt shingles, making them ideal for Denver\'s lakefront investment properties.',
  },
  {
    icon: Wind,
    title: 'Wind Resistance 140+ MPH',
    description: 'Standing seam metal handles Lake Norman western shore wind exposure where prevailing winds cross open water.',
  },
  {
    icon: Zap,
    title: 'Energy Efficiency',
    description: 'Reflects solar heat reducing cooling costs 10-25% for Denver homes during hot North Carolina summers.',
  },
  {
    icon: Waves,
    title: 'Lake Norman Weather Protection',
    description: 'Engineered for western shore conditions including lake-effect moisture, wind-driven rain, and hail events.',
  },
  {
    icon: Shield,
    title: 'Fire Resistance',
    description: 'Class A fire rating provides maximum protection, especially valuable for Denver properties near wooded areas and Lake Norman State Park.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: '100% recyclable with 25-95% recycled content. Reduces landfill waste and lowers Denver homeowners\' carbon footprint.',
  },
];

// Metal roofing options
const metalOptions = [
  {
    title: 'Standing Seam',
    description: 'Premium concealed fastener system with clean, modern lines. The top choice for Denver lakefront homes in Trilogy, Sailview, and Pinnacle Shores where wind resistance is paramount.',
    lifespan: '40-70 years',
    windRating: '140+ MPH',
  },
  {
    title: 'Corrugated Metal',
    description: 'Classic ribbed profile popular for modern architectural and farmhouse styles found throughout Denver\'s rural and lakeside neighborhoods.',
    lifespan: '40-50 years',
    windRating: '120+ MPH',
  },
  {
    title: 'Metal Shingles',
    description: 'Metal panels designed to look like traditional shingles, slate, or cedar shake. Perfect for Denver HOA communities that require a traditional aesthetic.',
    lifespan: '40-60 years',
    windRating: '110+ MPH',
  },
  {
    title: 'Copper Accents',
    description: 'Premium copper panels and accents with stunning natural patina development. A luxurious upgrade for high-end Lake Norman western shore estates.',
    lifespan: '100+ years',
    windRating: '140+ MPH',
  },
];

// FAQs
const faqs = [
  {
    question: 'How much does metal roofing cost in Denver NC?',
    answer:
      'Metal roofing in Denver NC typically costs $15-30 per square foot installed for standing seam, depending on panel style, gauge, and coating. For a typical Denver home, expect $25,000-$50,000. Lakefront properties in Trilogy at Lake Norman, Sailview, or Pinnacle Shores with premium options like copper accents often range $40,000-$80,000+. While more expensive upfront than shingles, metal\'s 40-70 year lifespan makes it the most cost-effective option long-term.',
  },
  {
    question: 'Is metal roofing good for Lake Norman western shore homes?',
    answer:
      'Metal roofing is the ideal choice for Lake Norman western shore properties in Denver. The western shore faces prevailing winds that cross miles of open water, creating higher wind loads than eastern shore communities. Standing seam metal rated for 140+ MPH handles this exposure easily. It also resists moisture, will not rot or grow mold from lake humidity, and handles temperature swings throughout the year.',
  },
  {
    question: 'How long does a metal roof last in Denver NC?',
    answer:
      'Metal roofs in Denver NC typically last 40-70 years, with copper lasting 100+ years. This is 2-3x longer than asphalt shingles, which typically need replacement every 15-25 years in our climate. Most metal roofs in the Lake Norman area still perform well after 50+ years. The key is proper installation by certified contractors who understand western shore wind patterns.',
  },
  {
    question: 'Why is metal roofing especially recommended for Denver\'s western shore?',
    answer:
      'Denver sits on the western shore of Lake Norman where prevailing westerly winds cross open water before hitting homes. Communities like Sailview, Island Point, and Pinnacle Shores experience consistently higher wind loads than inland areas. Metal roofing, especially standing seam systems rated 140+ MPH, is engineered for exactly this type of sustained wind exposure and offers superior performance compared to shingle roofs in these conditions.',
  },
  {
    question: 'Does Denver NC require special permits for metal roofing?',
    answer:
      'Yes, Denver is in Lincoln County (not Mecklenburg County), so roof replacements require Lincoln County building permits and inspections. We handle the full permitting process for every Denver metal roofing project, ensuring compliance with Lincoln County building codes. Metal roofing easily meets and exceeds all Lincoln County wind load and fire resistance requirements.',
  },
  {
    question: 'Will a metal roof be noisy during Lake Norman storms?',
    answer:
      'Modern metal roofs installed over solid decking with proper underlayment are no louder than shingle roofs during rain and storms. The combination of decking, synthetic underlayment, and attic insulation absorbs sound effectively. Many Denver homeowners are surprised how quiet their metal roof is, even during strong Lake Norman thunderstorms.',
  },
  {
    question: 'What colors are available for metal roofing in Denver NC?',
    answer:
      'We offer metal roofing in 20+ colors to match Denver neighborhood aesthetics and HOA requirements. Popular choices for Trilogy at Lake Norman and Sailview include charcoal gray, bronze, dark brown, and slate blue. Kynar/PVDF coatings ensure color retention for 30+ years, even under Lake Norman\'s intense sun exposure. We help you select colors that complement your home and meet community guidelines.',
  },
  {
    question: 'Can you install metal roofing over existing shingles in Denver?',
    answer:
      'In some cases, yes. Metal roofing can be installed over a single layer of existing shingles, which reduces labor costs and landfill waste. However, for Denver lakefront homes with high wind exposure, we typically recommend a full tear-off to inspect the decking and install enhanced underlayment for maximum western shore wind protection. We evaluate each Denver property individually and recommend the best approach.',
  },
];

export default function MetalRoofingDenverNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Denver NC', url: `${SITE_CONFIG.url}/locations/denver-nc` },
          { name: 'Metal Roofing Denver NC', url: `${SITE_CONFIG.url}/metal-roofing-denver-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/metal-roofing-denver-nc`}
        pageName="Metal Roofing Denver NC"
        city="Denver"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/30 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Waves className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold">Lake Norman Western Shore Metal Roofing Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Metal Roofing <br className="hidden md:block" />
              <span className="text-blue-300">Denver NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Standing Seam | 140+ MPH Rated | 40-70 Year Lifespan
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now specializes in premium metal roofing for Denver and Lake Norman
              western shore homes. Our standing seam systems are engineered for the elevated wind
              exposure that Sailview, Trilogy, and Pinnacle Shores homeowners face, delivering
              decades of maintenance-free performance in Lincoln County.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-blue-500 hover:bg-blue-400"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Metal Roof Quote
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
                <Wind className="w-5 h-5 text-blue-300" />
                140+ MPH Wind Rated
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-300" />
                40-70 Year Lifespan
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-300" />
                Class 4 Impact Rated
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Metal Roofing for Denver NC Homes?
            </h2>
            <p className="text-gray text-lg">
              Metal roofing offers unmatched performance for Lake Norman&apos;s western shore climate - from
              open-water wind exposure to intense summer heat and severe storms rolling across the lake.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="font-bold text-dark mb-2">{benefit.title}</h3>
                <p className="text-gray text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metal Options Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Metal Roofing Options for Denver NC
            </h2>
            <p className="text-gray text-lg">
              We install a full range of metal roofing systems to match your home&apos;s style
              and the Lake Norman western shore&apos;s demanding performance requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {metalOptions.map((option) => (
              <div key={option.title} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark text-xl mb-2">{option.title}</h3>
                <p className="text-gray mb-4">{option.description}</p>
                <div className="flex gap-4 text-sm">
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                    {option.lifespan}
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {option.windRating}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Western Shore Wind Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Engineered for Western Shore Wind Exposure
              </h2>
              <p className="text-gray text-lg mb-6">
                Denver&apos;s position on the western shore of Lake Norman creates a unique wind
                environment that demands superior roofing materials. Prevailing westerly winds
                travel across miles of open water before hitting western shore communities, generating
                consistently higher wind loads than inland or eastern shore properties.
              </p>
              <p className="text-gray mb-6">
                Our metal roofing systems are specifically selected and installed for this exposure.
                Standing seam panels with concealed fasteners eliminate the wind-lift vulnerabilities
                of exposed-fastener systems, while our enhanced fastening patterns exceed Lincoln
                County minimum requirements for lakefront installations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray">Certified metal roofing installers with western shore experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray">Enhanced clip spacing for Sailview, Island Point, and lakefront homes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray">Premium materials from Sheffield Metals, ATAS, and McElroy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray">Comprehensive warranties up to 50 years on materials and coatings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray">Lincoln County permits and inspections fully managed</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.houses.modern1}
                alt="Metal roofing installation Denver NC - Lake Norman western shore"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-slate-800 text-white rounded-xl shadow-lg p-4">
                <p className="font-bold text-2xl">40-70</p>
                <p className="text-sm text-white/90">Year Lifespan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Denver Neighborhoods for Metal Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Metal Roofing for Denver NC Communities
            </h2>
            <p className="text-gray text-lg">
              We install metal roofing throughout Denver&apos;s lakefront and inland neighborhoods,
              with solutions tailored to each community&apos;s wind exposure and aesthetic requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-dark mb-2">Trilogy at Lake Norman</h3>
              <p className="text-gray text-sm">
                Active adult community with premium homes that benefit from metal roofing&apos;s
                low maintenance and long lifespan. Standing seam and metal shingles are popular choices.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-dark mb-2">Sailview</h3>
              <p className="text-gray text-sm">
                Waterfront community with direct western exposure requiring maximum wind-rated roofing.
                Standing seam metal at 140+ MPH is the top recommendation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-dark mb-2">Westport</h3>
              <p className="text-gray text-sm">
                Established lakefront neighborhood where metal roofing provides decades of protection
                and modern curb appeal for both new builds and re-roofs.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-dark mb-2">Pinnacle Shores</h3>
              <p className="text-gray text-sm">
                Premium lakefront community where standing seam metal complements high-end architecture
                while handling elevated waterfront wind loads.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-dark mb-2">Island Point</h3>
              <p className="text-gray text-sm">
                Peninsula-style community surrounded by water on multiple sides. Metal roofing is strongly
                recommended for the exceptional wind exposure these homes face.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-dark mb-2">Magnolia Shores</h3>
              <p className="text-gray text-sm">
                Beautiful lakeside community where metal shingles offer the traditional aesthetic
                homeowners want with the performance Lake Norman demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Denver NC Metal Roofing FAQs
              </h2>
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

      {/* Related Services */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Related Denver NC Roofing Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/roofers-denver-nc" className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofers Denver NC</h3>
              <p className="text-gray text-sm mb-3">Complete roofing services for Lake Norman western shore homes</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/commercial-roofing-denver-nc" className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Commercial Roofing Denver NC</h3>
              <p className="text-gray text-sm mb-3">TPO, EPDM, and metal for Lincoln County businesses</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/copper-roofing-charlotte-nc" className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Copper Roofing</h3>
              <p className="text-gray text-sm mb-3">Premium copper roofs and accents for luxury lakefront homes</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Service City Links */}
      <ServiceCityLinks
        city="Denver"
        citySlug="denver-nc"
        variant="compact"
      />

      <GeoProjectGalleryStrip
        pageType="location"
        city="Denver"
        slug="metal-roofing-denver-nc"
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Denver"

        state="NC"

        citySlug="denver-nc"

        service="Metal Roofing"

      />

      <CTASection
        title="Ready for Metal Roofing in Denver NC?"
        subtitle="Get a free quote for premium metal roofing from Lake Norman's western shore specialists. Our standing seam systems are engineered for Denver's lakefront wind exposure and backed by warranties up to 50 years."
      />
    </>
  );
}
