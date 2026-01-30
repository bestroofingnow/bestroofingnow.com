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
  Building2,
  MapPin,
  Wrench,
  DollarSign,
  Zap,
  Thermometer,
  Layers,
  Calculator,
  Droplets,
  Sun,
  Paintbrush,
  ShieldCheck,
  Leaf,
  TrendingDown,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import EstimateButton from '@/components/estimate/EstimateButton';
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
  title: 'Flat Roof Coating Charlotte NC | Silicone, Acrylic & Elastomeric | Best Roofing Now',
  description:
    'Professional flat roof coating services in Charlotte NC. Silicone, acrylic & elastomeric roof coatings that extend roof life 15-20 years at 50-70% less than replacement. Free infrared moisture scans. Licensed & insured.',
  keywords: [
    'flat roof coating charlotte nc',
    'commercial roof coating charlotte',
    'silicone roof coating charlotte',
    'roof coating charlotte nc',
    'flat roof coating near me',
    'acrylic roof coating charlotte nc',
    'elastomeric roof coating charlotte',
    'reflective roof coating charlotte nc',
    'flat roof restoration charlotte',
    'commercial roof coating contractors charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/flat-roof-coating-charlotte-nc`,
  },
  openGraph: {
    title: 'Flat Roof Coating Charlotte NC | Silicone, Acrylic & Elastomeric | Best Roofing Now',
    description:
      'Professional flat roof coating services in Charlotte NC. Extend your roof life 15-20 years at 50-70% less than full replacement. Free infrared moisture scans. Licensed & insured.',
    url: `${SITE_CONFIG.url}/flat-roof-coating-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.flatRoof,
        width: 1200,
        height: 630,
        alt: 'Flat roof coating Charlotte NC - Best Roofing Now commercial roof coating project',
      },
    ],
  },
};

// Coating types
const coatingTypes = [
  {
    icon: Droplets,
    title: 'Silicone Roof Coating',
    description: 'The best choice for ponding water areas. UV resistant, highly flexible, and delivers a 15-20 year lifespan. Ideal for Charlotte\'s heavy rain seasons.',
  },
  {
    icon: Sun,
    title: 'Acrylic Roof Coating',
    description: 'A budget-friendly option that offers excellent UV reflectivity and color retention. Best suited for sloped flat roofs where water drainage is adequate.',
  },
  {
    icon: Thermometer,
    title: 'Elastomeric Roof Coating',
    description: 'Highly flexible and capable of bridging existing cracks. Excellent performance in Charlotte\'s temperature swings from freezing winters to 95\u00B0F+ summers.',
  },
  {
    icon: Shield,
    title: 'Polyurethane Roof Coating',
    description: 'Superior impact resistance and abrasion protection, making it ideal for roofs with heavy foot traffic from HVAC maintenance or rooftop equipment access.',
  },
  {
    icon: Zap,
    title: 'Reflective Roof Coating',
    description: 'Energy Star rated coatings that reduce cooling costs by 10-30%. Reflects solar heat away from your building, lowering HVAC strain in Charlotte summers.',
  },
  {
    icon: Paintbrush,
    title: 'Rubberized Roof Coating',
    description: 'Creates a seamless waterproof membrane over your existing roof. Great for aging flat roofs that need new life without the cost of full tear-off replacement.',
  },
];

// When to coat vs replace
const coatVsReplace = [
  {
    icon: Building2,
    title: 'Roof Is Structurally Sound but Aging',
    description: 'If your roof deck and insulation are in good condition but the membrane is weathered, a coating restores protection at a fraction of replacement cost.',
  },
  {
    icon: Wrench,
    title: 'Minor Leaks with No Deck Damage',
    description: 'Small leaks caused by membrane wear, seam failures, or flashing issues can be repaired and sealed with a high-performance coating system.',
  },
  {
    icon: Zap,
    title: 'Energy Costs Are Too High',
    description: 'Reflective roof coatings reduce surface temperatures by up to 50\u00B0F, cutting cooling costs by 10-30% and improving building comfort immediately.',
  },
  {
    icon: Clock,
    title: 'Roof Has 5+ Years of Life Left',
    description: 'Coating a roof that still has remaining useful life extends its total lifespan by 10-20 additional years, maximizing your original roofing investment.',
  },
  {
    icon: DollarSign,
    title: 'Budget Constraints',
    description: 'Roof coating costs 50-70% less than full replacement. For a 10,000 sq ft roof, that can mean saving $30,000-$50,000 while still getting decades of protection.',
  },
  {
    icon: Leaf,
    title: 'Environmental Considerations',
    description: 'Roof coatings generate far less landfill waste than tear-off replacements. Choose the sustainable option that also reduces your building\'s energy footprint.',
  },
];

// Why choose us for roof coating
const whyChooseUs = [
  {
    icon: Award,
    title: 'Factory-Certified Applicators',
    description: 'Our crews are certified by leading coating manufacturers including GAF, Henry, and Gaco. Proper application is critical for warranty coverage and longevity.',
  },
  {
    icon: ShieldCheck,
    title: 'Free Infrared Moisture Scan',
    description: 'Before coating, we perform infrared moisture scans to identify trapped moisture in your roof system. This ensures we address problems before sealing them in.',
  },
  {
    icon: Shield,
    title: '10-20 Year Warranties',
    description: 'We offer manufacturer-backed warranties ranging from 10 to 20 years depending on the coating system and mil thickness selected for your project.',
  },
  {
    icon: Thermometer,
    title: 'Charlotte Climate Expertise',
    description: 'We know Charlotte\'s weather patterns, from humid summers to ice storms. We select and apply coatings optimized for our specific climate challenges.',
  },
  {
    icon: Clock,
    title: 'Minimal Business Disruption',
    description: 'Roof coating is applied without tear-off, meaning no debris, less noise, and faster completion. Most projects are done in 2-5 days with zero downtime.',
  },
  {
    icon: Calculator,
    title: 'Cost-Transparent Pricing',
    description: 'We provide detailed, itemized estimates with no hidden fees. You\'ll know exactly what you\'re paying for before we start any work on your roof.',
  },
];

// Charlotte service areas
const serviceAreas = [
  'Uptown Charlotte',
  'South End / SouthPark',
  'University City',
  'NoDa / Plaza Midwood',
  'Steele Creek Industrial',
  'Airport / CLT Area',
  'Northlake Business Park',
  'Arrowood Industrial',
  'Freedom Drive Corridor',
  'Brookshire Industrial',
  'Pineville Commercial',
  'I-77 / I-85 Corridors',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Gastonia', href: '/locations/gastonia-nc' },
  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
  { name: 'Fort Mill, SC', href: '/locations/fort-mill-sc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Mount Holly', href: '/locations/mount-holly-nc' },
];

// FAQs about flat roof coatings
const faqs = [
  {
    question: 'How long does flat roof coating last in Charlotte?',
    answer:
      'A professionally applied flat roof coating in Charlotte typically lasts 10-20 years depending on the coating type and thickness. Silicone coatings generally offer the longest lifespan at 15-20 years due to their superior resistance to ponding water and UV degradation. Acrylic coatings last 10-15 years on properly sloped roofs. Charlotte\'s humid subtropical climate with intense summer UV makes coating selection critical for longevity.',
  },
  {
    question: 'How much does flat roof coating cost per square foot?',
    answer:
      'Flat roof coating in Charlotte typically costs $2.50 to $5.50 per square foot depending on the coating type, number of coats, and roof condition. Acrylic coatings start around $2.50-$4.00/sq ft, elastomeric coatings run $3.00-$4.50/sq ft, and silicone coatings cost $3.50-$5.50/sq ft. For a 10,000 sq ft commercial roof, expect to invest $25,000-$55,000, which is 50-70% less than full replacement.',
  },
  {
    question: 'Can you coat a roof that already has an existing coating?',
    answer:
      'Yes, in most cases an existing coated roof can be recoated. However, compatibility between the old and new coating is critical. Silicone coatings can be recoated with silicone. Acrylic can be recoated with acrylic or silicone. We always perform adhesion testing and moisture scans before recoating to ensure the existing coating is properly bonded and the substrate is dry.',
  },
  {
    question: 'What is the best roof coating for flat roofs in NC?',
    answer:
      'For most flat roofs in North Carolina, silicone roof coating is the best overall choice. It handles ponding water without degrading, provides excellent UV protection during our hot summers, and maintains flexibility through temperature swings. For sloped flat roofs with good drainage, acrylic coatings offer an excellent budget-friendly alternative. We assess each roof individually to recommend the optimal coating system.',
  },
  {
    question: 'How long does the coating process take?',
    answer:
      'Most commercial flat roof coating projects in Charlotte take 2-5 days depending on roof size, condition, and weather. A typical 10,000 sq ft roof takes about 3 days: one day for preparation and repairs, one day for primer application, and one day for the finish coat. Larger roofs or those needing extensive prep work may take longer. We schedule around weather to ensure proper curing.',
  },
  {
    question: 'Does roof coating stop leaks?',
    answer:
      'Roof coating can stop minor leaks caused by membrane wear, small cracks, and deteriorated seams. Before applying the coating, we repair all identified leak points, reinforce seams and flashings, and apply fabric reinforcement over problem areas. However, if your roof has significant structural damage, deck rot, or saturated insulation, those issues must be addressed before coating can be effective.',
  },
  {
    question: 'Is roof coating a good investment compared to replacement?',
    answer:
      'Absolutely. Roof coating is one of the best ROI investments for commercial building owners. At 50-70% less than full replacement, you get 10-20 additional years of roof life, immediate energy savings from reflective properties, no business disruption from tear-off, and reduced landfill waste. Many building owners coat their roofs multiple times over the decades, avoiding full replacement entirely.',
  },
  {
    question: 'What time of year is best for roof coating in Charlotte?',
    answer:
      'The best time for roof coating in Charlotte is late spring through early fall (April-October) when temperatures are consistently above 50\u00B0F and humidity levels allow for proper curing. Ideal application conditions are 60-85\u00B0F with low humidity and no rain in the forecast for 24-48 hours. We monitor weather closely and will reschedule if conditions aren\'t optimal for a quality application.',
  },
];

export default function FlatRoofCoatingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Flat Roof Coating Charlotte NC', url: `${SITE_CONFIG.url}/flat-roof-coating-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/flat-roof-coating-charlotte-nc`}
        pageName="Flat Roof Coating Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.flatRoof}
            alt="Flat roof coating Charlotte NC - Best Roofing Now commercial roof coating project"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Layers className="w-4 h-4" />
              <span className="text-sm font-semibold">Silicone | Acrylic | Elastomeric</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Flat Roof Coating <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Extend Your Roof Life 15-20 Years at 50-70% Less Than Full Replacement
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now applies professional-grade roof coatings that seal, protect, and restore your flat roof
              without the cost and disruption of a full tear-off replacement. Save thousands while getting decades more
              life from your existing commercial roof.
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
                <Shield className="w-5 h-5 text-accent-light" />
                10-20 Year Warranties
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent-light" />
                Energy Star Rated
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Licensed &amp; Insured
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Factory-Certified Applicators
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Coating Types Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Flat Roof Coating Types We Apply
            </h2>
            <p className="text-gray text-lg">
              We are certified applicators for all major coating systems. We&apos;ll recommend the right coating
              based on your roof&apos;s condition, slope, ponding issues, and budget.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coatingTypes.map((type) => (
              <div
                key={type.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">
                  {type.title}
                </h3>
                <p className="text-gray text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Coat vs Replace Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              When to Coat vs. Replace Your Flat Roof
            </h2>
            <p className="text-gray text-lg">
              Roof coating isn&apos;t right for every situation, but when conditions are right, it&apos;s the
              smartest investment a building owner can make. Here&apos;s when coating makes sense.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coatVsReplace.map((item) => (
              <div
                key={item.title}
                className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
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
                Why Charlotte&apos;s Building Owners Trust Best Roofing Now for Roof Coatings
              </h2>
              <p className="text-gray text-lg mb-8">
                Roof coating is only as good as its application. Improper surface prep, wrong mil thickness, or the
                wrong coating for your roof type can lead to premature failure. We get it right the first time.
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
                src={IMAGES.commercial.flatRoof}
                alt="Flat roof coating project in Charlotte NC - commercial roof restoration"
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
                    <p className="font-bold text-dark">Coating Specialists</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.roofsInstalled}+ Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section bg-gradient-to-br from-primary via-primary to-primary-dark text-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-bold">TRANSPARENT PRICING</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Flat Roof Coating Cost in Charlotte NC
            </h2>
            <p className="text-xl text-white/90 mb-2">
              Honest pricing with no hidden fees — see what your coating project will cost before we start.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Silicone Coating</h3>
              <p className="text-3xl font-bold text-accent mb-2">$3.50 - $5.50</p>
              <p className="text-white/80 text-sm">per square foot installed</p>
              <p className="text-white/60 text-xs mt-2">Best for ponding water areas</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Acrylic Coating</h3>
              <p className="text-3xl font-bold text-accent mb-2">$2.50 - $4.00</p>
              <p className="text-white/80 text-sm">per square foot installed</p>
              <p className="text-white/60 text-xs mt-2">Best for sloped surfaces</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Elastomeric Coating</h3>
              <p className="text-3xl font-bold text-accent mb-2">$3.00 - $4.50</p>
              <p className="text-white/80 text-sm">per square foot installed</p>
              <p className="text-white/60 text-xs mt-2">Best for temperature extremes</p>
            </div>
          </div>

          <div className="text-center">
            <EstimateButton variant="white" size="lg" className="text-lg px-10" estimateType="commercial">
              Get Your Instant Coating Estimate
            </EstimateButton>
            <p className="text-white/60 text-sm mt-4">
              No obligation &bull; Instant results &bull; 100% free
            </p>
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
              Flat Roof Coating Across the Charlotte Region
            </h2>
            <p className="text-gray text-lg">
              We apply roof coatings on commercial and industrial buildings throughout the Greater Charlotte metro area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Areas */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Commercial Areas</h3>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby Cities */}
            <div className="bg-white rounded-xl p-6">
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
                Flat Roof Coating FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about flat roof coating services in Charlotte NC.
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

      {/* Related Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Related Commercial Roofing Services
            </h2>
            <p className="text-gray">
              Explore our full range of commercial and flat roofing solutions in Charlotte NC.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/commercial-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Commercial Roofing Charlotte
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/flat-roof-repair-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Flat Roof Repair
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/flat-roof-contractors-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Flat Roof Contractors
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/commercial-roofing-contractors-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Commercial Roofing Contractors
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/industrial-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Industrial Roofing Charlotte
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Extend Your Flat Roof's Life?"
        subtitle="Get a free, no-obligation estimate for your flat roof coating project. Our team will perform a thorough inspection including infrared moisture scanning and provide honest recommendations tailored to your roof's condition and your budget."
      />
    </>
  );
}
