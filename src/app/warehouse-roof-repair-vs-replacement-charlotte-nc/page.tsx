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
  Shield,
  Warehouse,
  AlertTriangle,
  Scale,
  TrendingUp,
  Wrench,
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
  title: 'Warehouse Roof: Repair vs Replace Charlotte NC',
  description:
    'Should you repair or replace your warehouse roof in Charlotte? Cost analysis, decision criteria, and when each option makes sense for industrial buildings.',
  keywords: [
    'warehouse roof repair Charlotte NC',
    'warehouse roof replacement Charlotte',
    'industrial roofing Charlotte NC',
    'warehouse roof cost Charlotte',
    'commercial flat roof Charlotte',
    'warehouse roofing contractor Charlotte',
    'industrial roof repair Charlotte NC',
    'warehouse roof inspection Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/warehouse-roof-repair-vs-replacement-charlotte-nc`,
  },
  openGraph: {
    title: 'Warehouse Roof: Repair or Replace? | Charlotte NC Industrial Guide',
    description:
      'Make the right decision for your Charlotte warehouse. Complete cost analysis and decision framework.',
    url: `${SITE_CONFIG.url}/warehouse-roof-repair-vs-replacement-charlotte-nc`,
    type: 'article',
  },
};

const warehouseFAQs = [
  {
    question: 'How do I know if my warehouse roof needs replacement vs just repair?',
    answer:
      'Key indicators for replacement: roof is 20+ years old, multiple ongoing leaks, significant ponding water, wet or damaged insulation, membrane showing widespread deterioration, or repair costs approaching 30% of replacement cost. If issues are isolated and the roof is under 15 years old, repair is usually more cost-effective.',
  },
  {
    question: 'How much does warehouse roof replacement cost in Charlotte?',
    answer:
      'Charlotte warehouse roof replacement typically costs $5-$12 per square foot depending on system type. For a 50,000 sq ft warehouse, expect $250,000-$600,000. TPO and EPDM are on the lower end; metal and high-performance systems cost more. Coating can be 30-50% less.',
  },
  {
    question: 'Can my warehouse keep operating during roof work?',
    answer:
      'Usually yes. Professional commercial roofers work in sections to minimize disruption. Repair work rarely affects operations. Full replacement may require temporary relocation of inventory in work areas. We work nights and weekends when needed to minimize business impact.',
  },
  {
    question: 'How long does warehouse roof replacement take?',
    answer:
      'Timeline depends on size and complexity. A 50,000 sq ft warehouse typically takes 2-4 weeks for full replacement. Repairs take 1-5 days depending on scope. Coating projects fall between at 1-2 weeks. Weather can affect timeline.',
  },
  {
    question: 'What roofing system is best for warehouses in Charlotte?',
    answer:
      'TPO and EPDM are most common for Charlotte warehouses due to cost-effectiveness and performance. Metal roofing offers longer life but higher cost. For warehouses with heavy equipment vibration or chemical exposure, modified bitumen or specific single-ply systems may be better.',
  },
];

const repairIndicators = [
  'Isolated leaks in specific areas',
  'Roof under 15 years old',
  'Damage from specific incident (storm, impact)',
  'Seam or flashing failures only',
  'Small areas of ponding water',
  'Minor membrane damage',
  'Repair costs under 20% of replacement',
];

const replaceIndicators = [
  'Multiple recurring leaks throughout',
  'Roof 20+ years old',
  'Widespread membrane deterioration',
  'Wet or compressed insulation',
  'Structural deck damage',
  'Significant energy inefficiency',
  'Repair costs approaching 30%+ of replacement',
];

const costFactors = [
  {
    factor: 'Roof Size',
    description: 'Larger roofs have lower per-square-foot costs due to economies of scale.',
  },
  {
    factor: 'System Type',
    description: 'TPO/EPDM: $5-$8/sf, Metal: $8-$15/sf, Modified Bitumen: $6-$10/sf',
  },
  {
    factor: 'Deck Condition',
    description: 'Damaged decking adds $2-$5/sf for replacement or repairs.',
  },
  {
    factor: 'Insulation',
    description: 'New insulation adds $1-$3/sf but improves energy efficiency.',
  },
  {
    factor: 'Access & Height',
    description: 'Multi-story or difficult access increases labor costs.',
  },
  {
    factor: 'Current Roofing Removal',
    description: 'Tear-off vs overlay affects cost by $1-$3/sf.',
  },
];

const decisionMatrix = [
  {
    scenario: 'Roof is 5-10 years old with isolated leak',
    recommendation: 'Repair',
    reasoning: 'Plenty of life left. Fix the specific issue.',
  },
  {
    scenario: 'Roof is 15 years old with multiple leaks',
    recommendation: 'Assess for Coating',
    reasoning: 'If membrane is sound, coating can add 10-15 years at 40% of replacement cost.',
  },
  {
    scenario: 'Roof is 20+ years old with ongoing issues',
    recommendation: 'Replace',
    reasoning: 'Past useful life. Continued repairs waste money.',
  },
  {
    scenario: 'Storm damage to 10-year-old roof',
    recommendation: 'Repair (Insurance)',
    reasoning: 'File claim, repair damage. Roof has years of life remaining.',
  },
  {
    scenario: 'Planning to sell property in 2-3 years',
    recommendation: 'Repair or Coat',
    reasoning: 'New roof ROI unlikely if selling soon. Make it functional.',
  },
  {
    scenario: 'High energy costs, roof is 12 years old',
    recommendation: 'Coat with Reflective System',
    reasoning: 'Adds insulation value and extends life while cutting energy costs.',
  },
];

export default function WarehouseRoofRepairVsReplacementPage() {
  const pageUrl = `${SITE_CONFIG.url}/warehouse-roof-repair-vs-replacement-charlotte-nc`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="Warehouse Roof Repair vs Replacement Charlotte NC"
        description="Decision guide for Charlotte warehouse owners comparing roof repair and replacement."
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Commercial Roofing', url: `${SITE_CONFIG.url}/commercial-roofing-services` },
          { name: 'Warehouse Roof: Repair vs Replacement', url: pageUrl },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Commercial Roofing', url: `${SITE_CONFIG.url}/commercial-roofing-services` },
          { name: 'Warehouse Roof: Repair vs Replacement', url: pageUrl },
        ]}
      />
      <ArticleSchema
        post={{
          title: 'Warehouse Roof Repair vs Replacement: Charlotte NC Decision Guide',
          description: 'When to repair, when to replace your warehouse roof in Charlotte.',
          slug: 'warehouse-roof-repair-vs-replacement-charlotte-nc',
          datePublished: '2026-01-28',
          dateModified: '2026-01-28',
        }}
      />
      <FAQSchema faqs={warehouseFAQs} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={IMAGES.hero.hero26}
            alt="Charlotte warehouse industrial roofing"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Commercial Roofing', href: '/commercial-roofing-services' },
              { label: 'Warehouse Roof: Repair vs Replacement' },
            ]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <Warehouse className="w-4 h-4" />
              <span>Industrial Roofing Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Warehouse Roof: Repair or Replace?
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed">
              Charlotte NC Decision Guide for Industrial Building Owners
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              Don&apos;t spend $500,000 on replacement when repairs could solve the problem.
              But don&apos;t waste money on repairs for a roof that needs replacement.
              Here&apos;s how to make the right call.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-accent hover:bg-accent-dark text-white text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5" />
                Free Warehouse Inspection
              </a>
              <EstimateButton
                className="btn bg-white text-slate-800 hover:bg-gray-100 text-lg px-8 py-4"
                variant="outline"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Decision Guide */}
      <section className="py-8 bg-amber-50 border-y border-amber-200">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <AlertTriangle className="w-10 h-10 text-amber-600 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-dark mb-2">
              The 30% Rule of Thumb
            </h2>
            <p className="text-gray">
              If repair costs will exceed 30% of replacement cost, replacement usually
              makes more financial sense. But this depends on roof age and condition.
            </p>
          </div>
        </div>
      </section>

      {/* Repair vs Replace Indicators */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Repair vs Replace: Key Indicators
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Repair Column */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border-2 border-green-500">
              <div className="bg-green-600 text-white p-6">
                <div className="flex items-center gap-3">
                  <Wrench className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Consider Repair When:</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {repairIndicators.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Replace Column */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border-2 border-red-500">
              <div className="bg-red-600 text-white p-6">
                <div className="flex items-center gap-3">
                  <Building2 className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Consider Replacement When:</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {replaceIndicators.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Matrix */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Decision Matrix: Common Scenarios
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 text-left">Scenario</th>
                    <th className="p-4 text-center">Recommendation</th>
                    <th className="p-4 text-left">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {decisionMatrix.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-4 text-gray">{row.scenario}</td>
                      <td className="p-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          row.recommendation === 'Repair' || row.recommendation === 'Repair (Insurance)'
                            ? 'bg-green-100 text-green-700'
                            : row.recommendation === 'Replace'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-amber-100 text-amber-700'
                        }`}>
                          {row.recommendation}
                        </span>
                      </td>
                      <td className="p-4 text-gray text-sm">{row.reasoning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Cost Factors for Warehouse Roofing in Charlotte
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {costFactors.map((item, index) => (
                <div key={index} className="card">
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-dark mb-1">{item.factor}</h3>
                      <p className="text-gray text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Third Option: Coating */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Don&apos;t Forget the Third Option: Roof Coating
            </h2>
            <p className="text-xl text-white/90 mb-8">
              For warehouses with structurally sound roofs that are 10-20 years old,
              coating can extend roof life 10-15 years at 30-50% of replacement cost.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-6">
                <DollarSign className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">40-60% Savings</h3>
                <p className="text-white/80 text-sm">
                  Compared to full replacement
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <Clock className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Faster Install</h3>
                <p className="text-white/80 text-sm">
                  Days instead of weeks, minimal disruption
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <TrendingUp className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Energy Savings</h3>
                <p className="text-white/80 text-sm">
                  Reflective coatings reduce cooling costs 10-30%
                </p>
              </div>
            </div>
            <Link
              href="/office-building-roof-replacement-vs-coating-charlotte-nc"
              className="btn bg-white text-primary hover:bg-gray-100"
            >
              Learn More About Commercial Roof Coating
              <ArrowRight className="w-5 h-5" />
            </Link>
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
              {warehouseFAQs.map((faq, index) => (
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

      {/* Related Content */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              More Commercial Roofing Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/warehouse-roofing-charlotte-nc"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  Warehouse Roofing Charlotte NC
                </h3>
                <p className="text-gray text-sm">
                  Complete warehouse roofing services for Charlotte industrial facilities.
                </p>
                <span className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="/commercial-roofing-charlotte-nc"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  Commercial Roofing Charlotte NC
                </h3>
                <p className="text-gray text-sm">
                  Full-service commercial roofing for all building types.
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
        slug="warehouse-roof-repair-vs-replacement-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/warehouse-roof-repair-vs-replacement-charlotte-nc`}
      />

      {/* CTA Section */}
      <CTASection
        title="Need a Professional Assessment of Your Warehouse Roof?"
        subtitle="Get a free inspection from Best Roofing Now. We'll evaluate your roof's condition and provide honest recommendations - repair, coat, or replace."
      />
    </>
  );
}
