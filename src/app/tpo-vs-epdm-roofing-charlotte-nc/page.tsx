import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  ArrowRight,
  CheckCircle,
  XCircle,
  Building2,
  DollarSign,
  Clock,
  Thermometer,
  Shield,
  Scale,
  Droplets,
  Sun,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
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
  title: 'TPO vs EPDM Roofing Charlotte NC | Commercial Roof Comparison',
  description:
    'TPO vs EPDM commercial roofing in Charlotte NC: Cost, durability, energy efficiency compared. Which single-ply membrane is best for your building?',
  keywords: [
    'TPO vs EPDM Charlotte NC',
    'TPO roofing Charlotte',
    'EPDM roofing Charlotte',
    'commercial flat roof Charlotte NC',
    'single ply roofing Charlotte',
    'TPO roof cost Charlotte',
    'EPDM roof cost Charlotte',
    'best commercial roofing Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/tpo-vs-epdm-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'TPO vs EPDM Roofing: Which is Best for Charlotte Buildings?',
    description:
      'Complete comparison of TPO and EPDM commercial roofing systems for Charlotte NC buildings.',
    url: `${SITE_CONFIG.url}/tpo-vs-epdm-roofing-charlotte-nc`,
    type: 'article',
  },
};

const comparisonFAQs = [
  {
    question: 'Which is better for Charlotte buildings, TPO or EPDM?',
    answer:
      'For most Charlotte commercial buildings, TPO offers better value due to its heat reflectivity (reducing cooling costs 10-30%), white color options, and competitive pricing. EPDM may be preferred for buildings prioritizing longest-term durability over energy efficiency, or for budgets where the lower upfront cost is critical.',
  },
  {
    question: 'How much does TPO roofing cost vs EPDM in Charlotte?',
    answer:
      'In Charlotte, TPO typically costs $5-$8 per square foot installed, while EPDM costs $4-$7 per square foot. The price difference narrows when you factor in TPO\'s energy savings. For a 20,000 sq ft building, expect $100,000-$160,000 for TPO or $80,000-$140,000 for EPDM.',
  },
  {
    question: 'Which lasts longer, TPO or EPDM?',
    answer:
      'EPDM has a longer track record with proven 30+ year lifespans. Quality TPO can last 20-30 years, but as a newer technology (widely used since 2000s), it doesn\'t have the same decades of field performance data. Both have excellent warranties when properly installed.',
  },
  {
    question: 'Does TPO really save money on cooling costs in Charlotte?',
    answer:
      'Yes. TPO\'s white reflective surface can reduce roof surface temperatures by 50-80°F compared to dark EPDM. In Charlotte\'s hot summers, this translates to 10-30% cooling cost savings. For a large commercial building running AC 6+ months per year, this can be $5,000-$20,000+ annually.',
  },
  {
    question: 'Can EPDM be white or reflective like TPO?',
    answer:
      'Standard EPDM is black, but white EPDM is available. However, white EPDM typically costs more than TPO and may not perform as well for reflectivity. If energy efficiency is a priority, TPO is usually the better choice for a white/reflective roof.',
  },
];

const comparisonData = [
  {
    category: 'Installed Cost',
    tpo: '$5-$8/sq ft',
    epdm: '$4-$7/sq ft',
    winner: 'epdm',
    notes: 'EPDM slightly cheaper upfront',
  },
  {
    category: 'Energy Efficiency',
    tpo: 'Excellent (reflective white)',
    epdm: 'Moderate (absorbs heat)',
    winner: 'tpo',
    notes: 'TPO reduces cooling costs 10-30%',
  },
  {
    category: 'Lifespan',
    tpo: '20-30 years',
    epdm: '25-35+ years',
    winner: 'epdm',
    notes: 'EPDM has longer track record',
  },
  {
    category: 'Heat Resistance',
    tpo: 'Very Good',
    epdm: 'Excellent',
    winner: 'tie',
    notes: 'Both handle Charlotte heat well',
  },
  {
    category: 'UV Resistance',
    tpo: 'Very Good (with additives)',
    epdm: 'Excellent (inherent)',
    winner: 'epdm',
    notes: 'EPDM naturally resists UV',
  },
  {
    category: 'Puncture Resistance',
    tpo: 'Good',
    epdm: 'Very Good',
    winner: 'epdm',
    notes: 'EPDM more flexible',
  },
  {
    category: 'Chemical Resistance',
    tpo: 'Excellent',
    epdm: 'Good (avoid oils/solvents)',
    winner: 'tpo',
    notes: 'TPO better for restaurants/industrial',
  },
  {
    category: 'Seam Strength',
    tpo: 'Excellent (heat-welded)',
    epdm: 'Good (adhesive/tape)',
    winner: 'tpo',
    notes: 'TPO seams often stronger than membrane',
  },
  {
    category: 'Color Options',
    tpo: 'White, tan, gray',
    epdm: 'Black (white available)',
    winner: 'tpo',
    notes: 'More aesthetic flexibility',
  },
  {
    category: 'Repairability',
    tpo: 'Requires heat welding',
    epdm: 'Easy patch repairs',
    winner: 'epdm',
    notes: 'EPDM simpler to repair',
  },
];

const tpoBestFor = [
  'Buildings prioritizing energy efficiency',
  'High cooling cost facilities',
  'White/light colored roof requirements',
  'Restaurants and food service (grease resistant)',
  'Chemical processing facilities',
  'New construction projects',
  'Buildings seeking LEED points',
];

const epdmBestFor = [
  'Budget-conscious projects',
  'Buildings with rooftop equipment/foot traffic',
  'Longest-term durability priority',
  'Cold storage facilities',
  'Buildings not prioritizing reflectivity',
  'Roof replacements matching existing systems',
  'Projects requiring proven 30+ year track record',
];

export default function TPOvsEPDMRoofingPage() {
  const pageUrl = `${SITE_CONFIG.url}/tpo-vs-epdm-roofing-charlotte-nc`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="TPO vs EPDM Roofing Charlotte NC"
        description="Complete comparison of TPO and EPDM commercial roofing for Charlotte buildings."
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Commercial Roofing', url: `${SITE_CONFIG.url}/commercial-roofing-services` },
          { name: 'TPO vs EPDM Roofing', url: pageUrl },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Commercial Roofing', url: `${SITE_CONFIG.url}/commercial-roofing-services` },
          { name: 'TPO vs EPDM Roofing', url: pageUrl },
        ]}
      />
      <ArticleSchema
        post={{
          title: 'TPO vs EPDM Roofing: Charlotte NC Commercial Comparison',
          description: 'Which single-ply membrane is best for your Charlotte building?',
          slug: 'tpo-vs-epdm-roofing-charlotte-nc',
          datePublished: '2026-01-29',
          dateModified: '2026-01-29',
        }}
      />
      <FAQSchema faqs={comparisonFAQs} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={IMAGES.hero.hero26}
            alt="Commercial TPO and EPDM roofing Charlotte NC"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Commercial Roofing', href: '/commercial-roofing-services' },
              { label: 'TPO vs EPDM Comparison' },
            ]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <Scale className="w-4 h-4" />
              <span>Commercial Roofing Comparison</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              TPO vs EPDM Roofing in Charlotte NC
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed">
              Which Single-Ply Membrane is Best for Your Building?
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              Both TPO and EPDM are excellent commercial roofing options, but they excel in
              different situations. Here&apos;s how to choose the right one for your Charlotte
              building.
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
              <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500">
                <h3 className="font-bold text-dark mb-2">Choose TPO If:</h3>
                <p className="text-gray text-sm">
                  Energy efficiency is priority, you want a white/reflective roof, or your
                  building has chemical exposure (restaurants, industrial).
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-slate-600">
                <h3 className="font-bold text-dark mb-2">Choose EPDM If:</h3>
                <p className="text-gray text-sm">
                  Budget is primary concern, you need proven long-term durability, or you
                  have heavy rooftop traffic/equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Head-to-Head Comparison
          </h2>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left">Category</th>
                  <th className="p-4 text-center">TPO</th>
                  <th className="p-4 text-center">EPDM</th>
                  <th className="p-4 text-left hidden md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium">{row.category}</td>
                    <td className={`p-4 text-center ${row.winner === 'tpo' ? 'bg-green-50 font-medium' : ''}`}>
                      {row.tpo}
                      {row.winner === 'tpo' && <CheckCircle className="w-4 h-4 text-green-500 inline ml-2" />}
                    </td>
                    <td className={`p-4 text-center ${row.winner === 'epdm' ? 'bg-green-50 font-medium' : ''}`}>
                      {row.epdm}
                      {row.winner === 'epdm' && <CheckCircle className="w-4 h-4 text-green-500 inline ml-2" />}
                    </td>
                    <td className="p-4 text-sm text-gray hidden md:table-cell">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Best For Sections */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Which is Best For Your Building?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* TPO Best For */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-blue-600 text-white p-6">
                <h3 className="text-xl font-bold text-center">TPO is Best For:</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {tpoBestFor.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* EPDM Best For */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-slate-700 text-white p-6">
                <h3 className="text-xl font-bold text-center">EPDM is Best For:</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {epdmBestFor.map((item, index) => (
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
              Charlotte Climate Considerations
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <Sun className="w-8 h-8 text-amber-500" />
                  <h3 className="font-bold text-dark">Hot Summers</h3>
                </div>
                <p className="text-gray text-sm">
                  Charlotte averages 90°F+ for months. TPO&apos;s reflectivity significantly
                  reduces heat absorption, lowering cooling costs. EPDM absorbs heat but
                  handles it well.
                </p>
              </div>
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <Droplets className="w-8 h-8 text-blue-500" />
                  <h3 className="font-bold text-dark">Heavy Rainfall</h3>
                </div>
                <p className="text-gray text-sm">
                  Charlotte gets 40+ inches of rain annually. Both systems are waterproof
                  when properly installed. TPO&apos;s heat-welded seams may have slight advantage
                  for seam integrity.
                </p>
              </div>
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <Thermometer className="w-8 h-8 text-primary" />
                  <h3 className="font-bold text-dark">Temperature Swings</h3>
                </div>
                <p className="text-gray text-sm">
                  Charlotte sees temperature swings of 50°F in a single day. EPDM&apos;s rubber
                  composition handles expansion/contraction exceptionally well.
                </p>
              </div>
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-8 h-8 text-green-500" />
                  <h3 className="font-bold text-dark">Energy Costs</h3>
                </div>
                <p className="text-gray text-sm">
                  With Charlotte&apos;s long cooling season, TPO&apos;s energy savings can offset
                  its higher upfront cost within 5-7 years for many buildings.
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
                href="/tpo-roofing-charlotte-nc"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  TPO Roofing Charlotte NC
                </h3>
                <p className="text-gray text-sm">
                  Complete guide to TPO roofing for Charlotte commercial buildings.
                </p>
                <span className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1">
                  Explore TPO <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="/epdm-roofing-charlotte-nc"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  EPDM Roofing Charlotte NC
                </h3>
                <p className="text-gray text-sm">
                  Complete guide to EPDM roofing for Charlotte commercial buildings.
                </p>
                <span className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1">
                  Explore EPDM <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need Help Choosing Between TPO and EPDM?"
        subtitle="Get expert advice from Best Roofing Now. We'll assess your building, discuss your priorities, and recommend the best roofing system for your specific needs."
      />
    </>
  );
}
