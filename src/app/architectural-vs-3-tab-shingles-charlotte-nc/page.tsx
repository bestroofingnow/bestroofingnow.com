import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Home,
  DollarSign,
  Clock,
  Shield,
  Scale,
  Palette,
  Wind,
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
  title: 'Architectural vs 3-Tab Shingles Charlotte NC',
  description:
    'Architectural shingles vs 3-tab in Charlotte NC: Compare cost, durability, appearance, and value. Expert guide to choosing the right shingles for your home.',
  keywords: [
    'architectural shingles vs 3-tab Charlotte NC',
    'architectural shingles Charlotte',
    '3-tab shingles Charlotte NC',
    'dimensional shingles Charlotte',
    'best shingles Charlotte NC',
    'shingle comparison Charlotte',
    'asphalt shingle types Charlotte',
    'laminated shingles Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/architectural-vs-3-tab-shingles-charlotte-nc`,
  },
  openGraph: {
    title: 'Architectural vs 3-Tab Shingles: Charlotte NC Comparison Guide',
    description:
      'Which asphalt shingle type is best for your Charlotte home? Complete comparison of cost, durability, and value.',
    url: `${SITE_CONFIG.url}/architectural-vs-3-tab-shingles-charlotte-nc`,
    type: 'article',
  },
};

const shingleFAQs = [
  {
    question: 'What\'s the difference between architectural and 3-tab shingles?',
    answer:
      'Architectural (dimensional) shingles have multiple layers creating a 3D appearance, weigh 50% more, and last 25-30 years. 3-tab shingles are single-layer, flat, uniform, and last 15-20 years. Architectural shingles offer better wind resistance (130 mph vs 60-70 mph) and more aesthetic appeal.',
  },
  {
    question: 'How much more do architectural shingles cost than 3-tab in Charlotte?',
    answer:
      'In Charlotte, architectural shingles typically cost 20-40% more than 3-tab. For an average home, expect $10,000-$15,000 for architectural vs $7,000-$10,000 for 3-tab. The cost difference is usually $2,000-$5,000 total, but architectural shingles last 10+ years longer.',
  },
  {
    question: 'Are architectural shingles worth the extra money?',
    answer:
      'For most Charlotte homeowners, yes. The longer lifespan (25-30 years vs 15-20), better wind resistance (critical for Charlotte storms), improved appearance, and higher home value typically outweigh the 20-40% higher upfront cost. Cost per year of life is often similar or better.',
  },
  {
    question: 'Which shingle type handles Charlotte weather better?',
    answer:
      'Architectural shingles handle Charlotte\'s weather significantly better. They\'re rated for 130 mph winds (vs 60-70 mph for 3-tab), resist hail damage better due to their thickness, and their multi-layer construction handles temperature extremes better.',
  },
  {
    question: 'Do architectural shingles increase home value?',
    answer:
      'Yes. Studies show architectural shingles can increase home value by 1-3% compared to 3-tab. In Charlotte\'s competitive real estate market, they also make homes more attractive to buyers who recognize the quality difference.',
  },
];

const comparisonData = [
  { category: 'Upfront Cost', architectural: '$10,000-$15,000', threeTab: '$7,000-$10,000', winner: '3tab' },
  { category: 'Lifespan', architectural: '25-30 years', threeTab: '15-20 years', winner: 'arch' },
  { category: 'Cost Per Year', architectural: '$400-$500/year', threeTab: '$400-$600/year', winner: 'tie' },
  { category: 'Wind Resistance', architectural: '110-130 mph', threeTab: '60-70 mph', winner: 'arch' },
  { category: 'Appearance', architectural: '3D dimensional look', threeTab: 'Flat uniform', winner: 'arch' },
  { category: 'Weight', architectural: '300-400 lbs/square', threeTab: '200-250 lbs/square', winner: 'tie' },
  { category: 'Warranty', architectural: '30-50 years', threeTab: '20-25 years', winner: 'arch' },
  { category: 'Hail Resistance', architectural: 'Class 3-4', threeTab: 'Class 1-2', winner: 'arch' },
  { category: 'Color Options', architectural: 'Extensive', threeTab: 'Limited', winner: 'arch' },
  { category: 'Home Value', architectural: '+1-3%', threeTab: 'Neutral', winner: 'arch' },
];

const architecturalBestFor = [
  'Primary residences (staying 10+ years)',
  'Homes in storm-prone areas',
  'Homeowners prioritizing aesthetics',
  'Homes for sale in competitive market',
  'HOAs with appearance standards',
  'Charlotte\'s frequent severe weather',
];

const threeTabBestFor = [
  'Rental properties',
  'Tight budgets',
  'Homes being sold soon',
  'Secondary/vacation homes',
  'Simple roof designs',
  'Temporary housing solutions',
];

export default function ArchitecturalVs3TabShinglesPage() {
  const pageUrl = `${SITE_CONFIG.url}/architectural-vs-3-tab-shingles-charlotte-nc`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="Architectural vs 3-Tab Shingles Charlotte NC"
        description="Complete comparison of architectural and 3-tab shingles for Charlotte homes."
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Architectural vs 3-Tab Shingles', url: pageUrl },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Architectural vs 3-Tab Shingles', url: pageUrl },
        ]}
      />
      <ArticleSchema
        post={{
          title: 'Architectural vs 3-Tab Shingles: Charlotte NC Comparison',
          description: 'Which asphalt shingle type is best for your Charlotte home?',
          slug: 'architectural-vs-3-tab-shingles-charlotte-nc',
          datePublished: '2026-01-31',
          dateModified: '2026-01-31',
        }}
      />
      <FAQSchema faqs={shingleFAQs} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={IMAGES.hero.hero25}
            alt="Asphalt shingle roofing Charlotte NC"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs
            items={[{ label: 'Architectural vs 3-Tab Shingles' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <Scale className="w-4 h-4" />
              <span>Shingle Comparison Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Architectural vs 3-Tab Shingles
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed">
              Which Asphalt Shingle is Right for Your Charlotte Home?
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              Compare durability, cost, appearance, and storm performance to make
              the best choice for your roof replacement.
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

      {/* Visual Comparison */}
      <section className="py-8 bg-light border-b">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-amber-100 rounded-xl p-6 mb-4">
                <h3 className="text-xl font-bold text-dark mb-2">Architectural Shingles</h3>
                <p className="text-gray text-sm">
                  Multi-layered, dimensional appearance with shadow lines.
                  Thicker and heavier construction.
                </p>
              </div>
              <p className="text-sm text-gray">Also called: Dimensional, Laminated</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-xl p-6 mb-4">
                <h3 className="text-xl font-bold text-dark mb-2">3-Tab Shingles</h3>
                <p className="text-gray text-sm">
                  Single-layer, flat appearance with uniform tabs.
                  Traditional, basic construction.
                </p>
              </div>
              <p className="text-sm text-gray">Also called: Strip shingles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Side-by-Side Comparison
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left">Category</th>
                  <th className="p-4 text-center">Architectural</th>
                  <th className="p-4 text-center">3-Tab</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium">{row.category}</td>
                    <td className={`p-4 text-center ${row.winner === 'arch' ? 'bg-green-50 font-medium' : ''}`}>
                      {row.architectural}
                      {row.winner === 'arch' && <CheckCircle className="w-4 h-4 text-green-500 inline ml-2" />}
                    </td>
                    <td className={`p-4 text-center ${row.winner === '3tab' ? 'bg-green-50 font-medium' : ''}`}>
                      {row.threeTab}
                      {row.winner === '3tab' && <CheckCircle className="w-4 h-4 text-green-500 inline ml-2" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray mt-4">
            <CheckCircle className="w-4 h-4 text-green-500 inline mr-1" /> indicates advantage
          </p>
        </div>
      </section>

      {/* Best For Sections */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Which is Right for You?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-amber-500 text-white p-6">
                <h3 className="text-xl font-bold text-center">Choose Architectural If:</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {architecturalBestFor.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-gray-600 text-white p-6">
                <h3 className="text-xl font-bold text-center">Choose 3-Tab If:</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {threeTabBestFor.map((item, index) => (
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

      {/* Our Recommendation */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Recommendation for Charlotte Homes</h2>
            <p className="text-xl text-white/90 mb-6">
              For most Charlotte homeowners, <strong>architectural shingles</strong> are the better
              investment. Charlotte&apos;s severe thunderstorms, occasional hurricanes, and hail events
              make the superior wind and impact resistance worth the modest additional cost.
            </p>
            <p className="text-white/80 mb-8">
              The 20-40% higher upfront cost is typically offset by the 50%+ longer lifespan,
              better storm performance, and enhanced home value.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-white text-primary hover:bg-gray-100"
            >
              <Phone className="w-5 h-5" />
              Discuss Options with an Expert
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {shingleFAQs.map((faq, index) => (
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

      {/* Related Links */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              Related Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/asphalt-shingle-roofing-charlotte-nc"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  Asphalt Shingle Roofing Charlotte NC
                </h3>
                <p className="text-gray text-sm">
                  Complete guide to asphalt shingle options for Charlotte homes.
                </p>
                <span className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="/metal-roof-vs-shingles-charlotte-nc"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  Metal Roof vs Shingles
                </h3>
                <p className="text-gray text-sm">
                  Compare shingles to metal roofing for Charlotte homes.
                </p>
                <span className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="architectural-vs-3-tab-shingles-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/architectural-vs-3-tab-shingles-charlotte-nc`}
      />

      {/* CTA Section */}
      <CTASection
        title="Ready to Choose Your New Shingles?"
        subtitle="Get a free estimate from Best Roofing Now. We'll show you samples, explain options, and help you choose the best shingles for your Charlotte home."
      />
    </>
  );
}
