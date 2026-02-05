import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  ArrowRight,
  CheckCircle,
  XCircle,
  DollarSign,
  Clock,
  Shield,
  Thermometer,
  Volume2,
  Palette,
  Home,
  Leaf,
  Wind,
  Sun,
  Scale,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  ArticleSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { EstimateButton } from '@/components/estimate';

export const metadata: Metadata = {
  title: 'Metal Roof vs Shingles Charlotte NC | 2026 Comparison',
  description:
    'Metal roof vs asphalt shingles in Charlotte NC: Cost, durability, energy savings, and which is best for your home. Honest comparison from local roofing experts.',
  keywords: [
    'metal roof vs shingles Charlotte NC',
    'metal roofing cost Charlotte',
    'asphalt shingles vs metal Charlotte',
    'best roofing material Charlotte NC',
    'metal roof benefits Charlotte',
    'shingle roof Charlotte NC',
    'roofing comparison Charlotte',
    'metal roof energy savings Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/metal-roof-vs-shingles-charlotte-nc`,
  },
  openGraph: {
    title: 'Metal Roof vs Shingles: Which is Best for Charlotte NC Homes?',
    description:
      'Comprehensive comparison of metal roofing and asphalt shingles for Charlotte homeowners. Cost, lifespan, energy efficiency, and more.',
    url: `${SITE_CONFIG.url}/metal-roof-vs-shingles-charlotte-nc`,
    type: 'article',
  },
};

const comparisonFAQs = [
  {
    question: 'Is a metal roof worth the extra cost in Charlotte NC?',
    answer:
      'For most Charlotte homeowners planning to stay in their home 15+ years, yes. While metal costs 2-3x more upfront ($15,000-$30,000 vs $8,000-$15,000 for shingles), it lasts 2-3x longer (40-70 years vs 20-30), reduces cooling costs 10-25% in Charlotte\'s hot summers, and often increases home value by 1-6%.',
  },
  {
    question: 'How much does a metal roof cost compared to shingles in Charlotte?',
    answer:
      'In Charlotte, asphalt shingles cost $4-$8 per square foot installed ($8,000-$16,000 for average home), while metal roofing costs $8-$15 per square foot ($16,000-$30,000+). Standing seam metal is at the higher end; metal shingles are more affordable.',
  },
  {
    question: 'Are metal roofs loud during Charlotte thunderstorms?',
    answer:
      'Modern metal roofs installed over solid decking with proper underlayment are NOT significantly louder than shingle roofs during rain. The insulation and attic space buffer sound effectively. Most Charlotte homeowners report no noticeable difference.',
  },
  {
    question: 'Do metal roofs rust in Charlotte\'s humid climate?',
    answer:
      'Quality metal roofs use Galvalume steel or aluminum with protective coatings that resist rust for decades. Charlotte\'s humidity is not a concern for properly coated metal roofing. We recommend Galvalume or aluminum for best long-term performance.',
  },
  {
    question: 'Which roofing material handles Charlotte storms better?',
    answer:
      'Metal roofs are significantly more wind and hail resistant. They\'re rated for 140+ mph winds (Class F) vs 110 mph for shingles. Metal also resists hail damage that would require shingle replacement. For Charlotte\'s storm-prone climate, metal has clear advantages.',
  },
];

const comparisonData = [
  {
    category: 'Upfront Cost',
    icon: DollarSign,
    metal: '$16,000 - $30,000+',
    metalNote: 'Higher initial investment',
    shingles: '$8,000 - $16,000',
    shinglesNote: 'More affordable upfront',
    winner: 'shingles',
  },
  {
    category: 'Lifespan',
    icon: Clock,
    metal: '40-70 years',
    metalNote: 'May last lifetime of home',
    shingles: '20-30 years',
    shinglesNote: 'Will need replacement',
    winner: 'metal',
  },
  {
    category: 'Cost Per Year',
    icon: Scale,
    metal: '$400-$750/year',
    metalNote: 'Best long-term value',
    shingles: '$400-$800/year',
    shinglesNote: 'Similar when factoring replacements',
    winner: 'tie',
  },
  {
    category: 'Energy Efficiency',
    icon: Thermometer,
    metal: 'Excellent (10-25% savings)',
    metalNote: 'Reflects heat, reduces AC',
    shingles: 'Moderate (5-10% savings)',
    shinglesNote: 'Cool roof options available',
    winner: 'metal',
  },
  {
    category: 'Storm Resistance',
    icon: Wind,
    metal: '140+ mph wind, Class 4 hail',
    metalNote: 'Superior protection',
    shingles: '110 mph wind, Class 3 hail max',
    shinglesNote: 'More vulnerable to damage',
    winner: 'metal',
  },
  {
    category: 'Maintenance',
    icon: Shield,
    metal: 'Very Low',
    metalNote: 'Occasional inspection only',
    shingles: 'Low-Moderate',
    shinglesNote: 'May need repairs over time',
    winner: 'metal',
  },
  {
    category: 'Style Options',
    icon: Palette,
    metal: 'Many colors, profiles',
    metalNote: 'Modern and traditional looks',
    shingles: 'Extensive variety',
    shinglesNote: 'Most style flexibility',
    winner: 'tie',
  },
  {
    category: 'Noise Level',
    icon: Volume2,
    metal: 'Similar when properly installed',
    metalNote: 'Solid decking eliminates issue',
    shingles: 'Quiet',
    shinglesNote: 'Natural sound dampening',
    winner: 'tie',
  },
  {
    category: 'Home Value',
    icon: Home,
    metal: '+1-6% value increase',
    metalNote: 'Premium perceived value',
    shingles: 'Neutral to slight increase',
    shinglesNote: 'Expected standard',
    winner: 'metal',
  },
  {
    category: 'Environmental Impact',
    icon: Leaf,
    metal: '25-95% recyclable, lasts longer',
    metalNote: 'Most sustainable option',
    shingles: 'Mostly landfill disposal',
    shinglesNote: 'Replaced more frequently',
    winner: 'metal',
  },
];

const metalBestFor = [
  'Homeowners staying 15+ years',
  'High-value or historic homes',
  'Storm-prone properties',
  'Those prioritizing energy efficiency',
  'Environmentally conscious homeowners',
  'Properties with steep roof pitches',
  'Coastal or lakefront homes',
];

const shinglesBestFor = [
  'Budget-conscious homeowners',
  'Planning to sell within 10 years',
  'HOAs with material restrictions',
  'Traditional neighborhood aesthetics',
  'Homes with complex roof shapes',
  'Temporary or rental properties',
  'DIY-friendly repairs needed',
];

export default function MetalRoofVsShinglesPage() {
  const pageUrl = `${SITE_CONFIG.url}/metal-roof-vs-shingles-charlotte-nc`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="Metal Roof vs Shingles Charlotte NC | Complete Comparison"
        description="Comprehensive comparison of metal roofing and asphalt shingles for Charlotte NC homeowners."
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Metal Roof vs Shingles Charlotte NC', url: pageUrl },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Metal Roof vs Shingles Charlotte NC', url: pageUrl },
        ]}
      />
      <ArticleSchema
        post={{
          title: 'Metal Roof vs Shingles: Complete Charlotte NC Comparison Guide',
          description: 'Which roofing material is best for your Charlotte home?',
          slug: 'metal-roof-vs-shingles-charlotte-nc',
          datePublished: '2026-01-27',
          dateModified: '2026-01-27',
        }}
      />
      <FAQSchema faqs={comparisonFAQs} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={IMAGES.hero.hero25}
            alt="Metal roof and shingle roof comparison Charlotte NC"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs
            items={[{ label: 'Metal Roof vs Shingles' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <Scale className="w-4 h-4" />
              <span>Roofing Comparison Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Metal Roof vs Shingles in Charlotte NC
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed">
              Complete 2026 Comparison: Cost, Durability &amp; Value
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              Trying to decide between metal roofing and asphalt shingles for your Charlotte home?
              This guide compares real costs, lifespans, energy savings, and storm performance
              to help you make the right choice.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-accent hover:bg-accent-dark text-white text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5" />
                Get Expert Advice
              </a>
              <EstimateButton
                className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
                variant="outline"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-8 bg-light border-b">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-center mb-6">Quick Summary</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border-l-4 border-slate-600">
                <h3 className="font-bold text-dark mb-2">Choose Metal If:</h3>
                <p className="text-gray text-sm">
                  You want the best long-term value, plan to stay 15+ years, prioritize storm
                  protection and energy savings, or want a &ldquo;forever roof.&rdquo;
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-amber-500">
                <h3 className="font-bold text-dark mb-2">Choose Shingles If:</h3>
                <p className="text-gray text-sm">
                  Budget is primary concern, planning to sell soon, HOA restricts materials,
                  or you prefer traditional aesthetics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Head-to-Head Comparison
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="space-y-4">
              {comparisonData.map((item, index) => (
                <div key={index} className="bg-white rounded-xl border overflow-hidden">
                  <div className="grid md:grid-cols-3 items-stretch">
                    {/* Category */}
                    <div className="bg-gray-50 p-4 flex items-center gap-3 border-b md:border-b-0 md:border-r">
                      <item.icon className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="font-bold text-dark">{item.category}</span>
                    </div>
                    {/* Metal */}
                    <div className={`p-4 border-b md:border-b-0 md:border-r ${item.winner === 'metal' ? 'bg-green-50' : ''}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-slate-700">Metal</span>
                        {item.winner === 'metal' && (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                      <p className="font-medium text-dark">{item.metal}</p>
                      <p className="text-gray text-xs mt-1">{item.metalNote}</p>
                    </div>
                    {/* Shingles */}
                    <div className={`p-4 ${item.winner === 'shingles' ? 'bg-green-50' : ''}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-amber-700">Shingles</span>
                        {item.winner === 'shingles' && (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                      <p className="font-medium text-dark">{item.shingles}</p>
                      <p className="text-gray text-xs mt-1">{item.shinglesNote}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray">
                <CheckCircle className="w-4 h-4 text-green-500 inline mr-1" />
                indicates category winner for most Charlotte homeowners
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best For Sections */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Which is Best For Your Situation?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Metal Best For */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-slate-700 text-white p-6">
                <h3 className="text-xl font-bold text-center">Metal Roofing is Best For:</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {metalBestFor.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Shingles Best For */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-amber-500 text-white p-6">
                <h3 className="text-xl font-bold text-center">Asphalt Shingles are Best For:</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {shinglesBestFor.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charlotte-Specific Considerations */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Charlotte-Specific Considerations
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <Sun className="w-8 h-8 text-amber-500" />
                  <h3 className="font-bold text-dark">Hot Summers</h3>
                </div>
                <p className="text-gray text-sm">
                  Charlotte averages 90+ degree days for months. Metal reflects solar heat,
                  keeping homes 10-25% cooler and reducing AC costs significantly.
                </p>
              </div>
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <Wind className="w-8 h-8 text-blue-500" />
                  <h3 className="font-bold text-dark">Storm Season</h3>
                </div>
                <p className="text-gray text-sm">
                  Charlotte sees frequent thunderstorms, occasional hail, and hurricane remnants.
                  Metal&apos;s superior wind and impact resistance provides better protection.
                </p>
              </div>
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <Home className="w-8 h-8 text-green-500" />
                  <h3 className="font-bold text-dark">HOA Considerations</h3>
                </div>
                <p className="text-gray text-sm">
                  Many Charlotte HOAs now allow metal roofing, especially metal shingles that
                  mimic traditional aesthetics. Check your HOA guidelines before deciding.
                </p>
              </div>
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-8 h-8 text-primary" />
                  <h3 className="font-bold text-dark">Home Values</h3>
                </div>
                <p className="text-gray text-sm">
                  Charlotte&apos;s competitive real estate market means roofing upgrades can
                  significantly impact resale. Metal roofs are increasingly desirable to buyers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {comparisonFAQs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white border rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition">
                    <h3 className="font-bold text-dark pr-4">{faq.question}</h3>
                    <ArrowRight className="w-5 h-5 text-primary transform group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-gray">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              Learn More About Each Option
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/metal-roofing-charlotte-nc"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  Metal Roofing Charlotte NC
                </h3>
                <p className="text-gray text-sm">
                  Complete guide to metal roofing options, costs, and benefits for Charlotte homes.
                </p>
                <span className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1">
                  Explore Metal Roofing <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="/asphalt-shingle-roofing-charlotte-nc"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  Asphalt Shingle Roofing Charlotte NC
                </h3>
                <p className="text-gray text-sm">
                  Everything about architectural and designer shingle options for Charlotte homes.
                </p>
                <span className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1">
                  Explore Shingles <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="metal-roof-vs-shingles-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/metal-roof-vs-shingles-charlotte-nc`}
      />

      {/* CTA Section */}
      <CTASection
        title="Still Not Sure Which is Right for You?"
        subtitle="Get a free consultation from Best Roofing Now. We'll assess your home, discuss your priorities and budget, and give you honest recommendations - no pressure."
      />
    </>
  );
}
