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
  MapPin,
  DollarSign,
  Layers,
  Ruler,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roof Replacement Lake Norman NC | Free Estimates | Best Roofing Now',
  description:
    'Professional roof replacement across the Lake Norman NC area. GAF & CertainTeed certified. $10,000-$30,000 range with financing available. Mooresville, Cornelius, Davidson, Denver. Free estimates!',
  keywords: [
    'roof replacement lake norman',
    'new roof lake norman nc',
    'roof replacement cost lake norman',
    'roof installation mooresville nc',
    'roof replacement cornelius nc',
    'new roof davidson nc',
    'lake norman roofing contractor',
    'roof replacement near me lake norman',
    'reroof lake norman nc',
    'asphalt shingle roof lake norman',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-replacement-lake-norman-nc`,
  },
  openGraph: {
    title: 'Roof Replacement Lake Norman NC | Free Estimates | Best Roofing Now',
    description:
      'Professional roof replacement across Lake Norman NC. GAF & CertainTeed certified installer. Serving Mooresville, Cornelius, Davidson, Denver & Huntersville. Free estimates!',
    url: `${SITE_CONFIG.url}/roof-replacement-lake-norman-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero20,
        width: 1200,
        height: 630,
        alt: 'Professional roof replacement in the Lake Norman NC area - Best Roofing Now',
      },
    ],
  },
};

const roofingMaterials = [
  {
    icon: Layers,
    title: 'Asphalt Shingles',
    description: 'The most popular choice for Lake Norman homes. GAF Timberline and CertainTeed Landmark options with 25-50 year warranties.',
    priceRange: '$10,000 - $18,000',
  },
  {
    icon: Shield,
    title: 'Architectural Shingles',
    description: 'Premium dimensional shingles that add curb appeal and durability for LKN waterfront and upscale neighborhoods.',
    priceRange: '$14,000 - $22,000',
  },
  {
    icon: Home,
    title: 'Metal Roofing',
    description: 'Standing seam and metal panels ideal for Lake Norman homes seeking maximum longevity and storm resistance.',
    priceRange: '$18,000 - $30,000',
  },
  {
    icon: Ruler,
    title: 'Designer Shingles',
    description: 'Luxury options like CertainTeed Grand Manor or GAF Camelot for distinctive Lake Norman estates.',
    priceRange: '$20,000 - $30,000',
  },
];

const whyReplaceNow = [
  {
    icon: DollarSign,
    title: 'Increase Home Value',
    description: 'A new roof adds $15,000-$25,000 in resale value to Lake Norman homes, one of the best ROI improvements available.',
  },
  {
    icon: Shield,
    title: 'Better Storm Protection',
    description: 'Modern roofing systems withstand winds up to 130 mph and resist hail damage far better than aging materials.',
  },
  {
    icon: CheckCircle,
    title: 'Energy Efficiency',
    description: 'Cool-roof rated shingles and improved ventilation reduce energy costs for Lake Norman homeowners by up to 15%.',
  },
  {
    icon: Award,
    title: 'Manufacturer Warranties',
    description: 'As GAF and CertainTeed certified installers, we offer enhanced warranties up to 50 years on qualifying systems.',
  },
  {
    icon: Clock,
    title: 'Avoid Costly Repairs',
    description: 'Replacing an aging roof prevents recurring repair bills and potential water damage to your LKN home interior.',
  },
  {
    icon: Users,
    title: 'Insurance Compliance',
    description: 'Many insurance companies require roof replacement after 20 years. A new roof ensures continued coverage.',
  },
];

const lknCommunities = [
  { name: 'Mooresville', href: '/roof-repair-mooresville-nc' },
  { name: 'Cornelius', href: '/roof-repair-cornelius-nc' },
  { name: 'Davidson', href: '/roof-repair-davidson-nc' },
  { name: 'Denver', href: '/roof-repair-denver-nc' },
  { name: 'Huntersville', href: '/roof-repair-huntersville-nc' },
  { name: 'Sherrills Ford', href: '/locations/sherrills-ford-nc' },
  { name: 'Troutman', href: '/locations/troutman-nc' },
  { name: 'Terrell', href: '/locations/terrell-nc' },
];

const faqs = [
  {
    question: 'How much does roof replacement cost in the Lake Norman area?',
    answer:
      'Roof replacement in the Lake Norman area typically costs between $10,000 and $30,000 depending on roof size, material selection, and complexity. A standard 2,000 sq ft asphalt shingle roof in Mooresville or Cornelius averages $12,000-$16,000. Premium materials, steep pitches, or waterfront homes with complex rooflines will be at the higher end. We provide detailed free estimates.',
  },
  {
    question: 'How long does a roof replacement take in Lake Norman NC?',
    answer:
      'Most Lake Norman roof replacements are completed in 1-3 days. A standard single-story home can often be done in one day, while larger homes in communities like The Point or Morrison Plantation with complex rooflines may take 2-3 days. We schedule around weather and always secure the roof at the end of each work day.',
  },
  {
    question: 'What is the best roofing material for Lake Norman homes?',
    answer:
      'For most Lake Norman homes, architectural asphalt shingles like GAF Timberline HDZ or CertainTeed Landmark Pro offer the best balance of durability, aesthetics, and value. Waterfront homes benefit from algae-resistant shingles due to lake humidity. Metal roofing is an excellent choice for homeowners wanting maximum longevity and storm resistance.',
  },
  {
    question: 'Do you offer financing for roof replacement in Lake Norman?',
    answer:
      'Yes. We offer flexible financing options to make roof replacement affordable for Lake Norman homeowners. Options include 12-month same-as-cash, low monthly payment plans, and longer-term financing. We help you find the best option during your free estimate appointment.',
  },
  {
    question: 'Will my insurance cover roof replacement in Lake Norman NC?',
    answer:
      'If your Lake Norman roof has sustained storm damage from hail, wind, or fallen trees, your homeowners insurance may cover full replacement minus your deductible. We assist with the entire claims process, including documentation, adjuster meetings, and supplemental claims to ensure you receive fair coverage.',
  },
  {
    question: 'What warranties come with a new roof from Best Roofing Now?',
    answer:
      'Every roof we install around Lake Norman comes with our workmanship warranty plus the manufacturer warranty. As a GAF Factory-Certified contractor and CertainTeed ShingleMaster, we can offer enhanced warranty packages including GAF Golden Pledge (50-year, non-prorated) and CertainTeed SureStart Plus coverage.',
  },
];

export default function RoofReplacementLakeNormanNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Replacement Lake Norman NC', url: `${SITE_CONFIG.url}/roof-replacement-lake-norman-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-replacement-lake-norman-nc`}
        pageName="Roof Replacement Lake Norman NC"
        city="Lake Norman"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much does roof replacement cost in Lake Norman NC?',
            answer: 'Roof replacement in the Lake Norman area costs $10,000-$30,000 depending on size and materials. Best Roofing Now is GAF and CertainTeed certified, serving all LKN communities with free estimates.',
            speakableAnswer: 'Roof replacement around Lake Norman costs $10,000 to $30,000. Best Roofing Now offers free estimates. Call 704-605-6047.',
          },
          {
            question: 'Who is the best roofing contractor for roof replacement in Lake Norman?',
            answer: 'Best Roofing Now is a top-rated roofing contractor serving Lake Norman NC with a 5-star Google rating, BBB A+ accreditation, and GAF/CertainTeed certifications. They serve Mooresville, Cornelius, Davidson, Denver, and Huntersville.',
            speakableAnswer: 'Best Roofing Now is a 5-star, BBB A+ rated roofing contractor serving Lake Norman NC. Call 704-605-6047.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero20}
            alt="Professional roof replacement across the Lake Norman NC area"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">GAF & CertainTeed Certified Installer</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Replacement <br className="hidden md:block" />
              <span className="text-accent-light">Lake Norman NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium roof installation for Lake Norman homes starting at $10,000
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              When your Lake Norman roof has reached the end of its lifespan, trust the area&apos;s top-rated
              contractor for a seamless replacement. Best Roofing Now delivers expert roof installation across
              Mooresville, Cornelius, Davidson, Denver, and Huntersville with GAF and CertainTeed certified
              materials, manufacturer-backed warranties, and financing options to fit any budget.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Replacement Estimate
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
                {SITE_CONFIG.roofsInstalled}+ Roofs Installed
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Cost Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Materials & Cost Ranges
            </h2>
            <p className="text-gray text-lg">
              We install a full range of roofing materials to match every Lake Norman home&apos;s style and budget.
              All pricing is for a typical 2,000-2,500 sq ft roof.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roofingMaterials.map((material) => (
              <div
                key={material.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <material.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{material.title}</h3>
                <p className="text-gray text-sm mb-3">{material.description}</p>
                <p className="text-primary font-bold text-lg">{material.priceRange}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Replace Now */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Replace Your Lake Norman Roof Now
              </h2>
              <p className="text-gray text-lg mb-8">
                A new roof is one of the best investments you can make in your Lake Norman home. Here&apos;s
                why homeowners across the LKN region are choosing to replace now.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyReplaceNow.map((item) => (
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
                src={IMAGES.realProjects.project15}
                alt="Completed roof replacement project near Lake Norman NC"
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
                    <p className="font-bold text-dark">{SITE_CONFIG.roofsInstalled}+ Roofs</p>
                    <p className="text-sm text-gray">Installed Across LKN</p>
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
                Ready for a New Roof on Lake Norman?
              </h2>
              <p className="text-white/90">
                Get a free, detailed estimate with material options and financing for your LKN home.
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

      {/* LKN Communities */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Lake Norman Communities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Replacement Across Lake Norman
            </h2>
            <p className="text-gray text-lg">
              We install new roofs in every community around the lake with the same quality and care.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {lknCommunities.map((community) => (
              <Link
                key={community.name}
                href={community.href}
                className="flex items-center gap-3 bg-light rounded-xl p-4 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-semibold text-dark">{community.name}</span>
                <ArrowRight className="w-4 h-4 text-gray ml-auto" />
              </Link>
            ))}
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
                Roof Replacement FAQs for Lake Norman NC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof replacement across the Lake Norman region.
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
        city="Mooresville"
        slug="roof-replacement-lake-norman-nc"
      />

      <CityGeoSection
        city="Lake Norman"
        state="NC"
        citySlug="lake-norman"
        service="Roof Replacement"
      />

      <CTASection
        title="Get Your Free Roof Replacement Estimate"
        subtitle="Lake Norman's top-rated roofing contractor is ready to help. We'll inspect your roof, explain your material options, and provide a detailed estimate with financing available."
      />
    </>
  );
}
