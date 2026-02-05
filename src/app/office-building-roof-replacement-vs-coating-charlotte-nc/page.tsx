import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Building2,
  DollarSign,
  Clock,
  Shield,
  Leaf,
  XCircle,
  Scale,
  TrendingUp,
  Calendar,
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
  title: 'Office Roof: Replacement vs Coating | Charlotte NC',
  description:
    'Is your Charlotte office building roof replacement a waste of money? Compare commercial roof coating vs full replacement. Cost analysis, ROI, and when each option makes sense.',
  keywords: [
    'office building roof replacement Charlotte NC',
    'commercial roof coating Charlotte',
    'office roof repair vs replace Charlotte',
    'commercial roofing cost Charlotte NC',
    'office building roofing Charlotte',
    'TPO roof coating Charlotte',
    'commercial flat roof Charlotte NC',
    'office building roof restoration Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/office-building-roof-replacement-vs-coating-charlotte-nc`,
  },
  openGraph: {
    title: 'Office Building Roof: Is Replacement Wasted Money? | Charlotte NC',
    description:
      'When does coating make more sense than replacement for Charlotte office buildings? Complete cost analysis and decision guide.',
    url: `${SITE_CONFIG.url}/office-building-roof-replacement-vs-coating-charlotte-nc`,
    type: 'article',
  },
};

const commercialFAQs = [
  {
    question: 'When is roof coating a better choice than replacement for my Charlotte office building?',
    answer:
      'Coating is ideal when your existing roof membrane is structurally sound with no major damage, less than 15-20 years old, has isolated issues like minor leaks or UV degradation, and you want to extend roof life 10-15 years at 20-40% of replacement cost. It\'s also great for adding energy efficiency without full replacement.',
  },
  {
    question: 'How much does commercial roof coating cost vs replacement in Charlotte?',
    answer:
      'In Charlotte, commercial roof coating typically costs $3-$7 per square foot, while full replacement costs $8-$15+ per square foot depending on system. For a 20,000 sq ft office building, that\'s $60,000-$140,000 for coating vs $160,000-$300,000+ for replacement.',
  },
  {
    question: 'How long does commercial roof coating last on Charlotte office buildings?',
    answer:
      'Quality commercial roof coatings in Charlotte typically last 10-15 years with proper application. Some silicone coatings can be recoated indefinitely, potentially extending roof life to 30+ years total. This makes coating a sustainable long-term strategy for many buildings.',
  },
  {
    question: 'Will roof coating fix active leaks in my office building?',
    answer:
      'Coating alone won\'t fix active leaks - the underlying issue must be repaired first. However, once repairs are made, coating creates a seamless waterproof membrane that prevents future leaks. We repair problem areas before coating application.',
  },
  {
    question: 'Does commercial roof coating help with energy costs in Charlotte?',
    answer:
      'Yes, significantly. Reflective roof coatings can reduce rooftop temperatures by 50-80°F in Charlotte summers, lowering cooling costs 10-30%. For a large office building running AC constantly, this can mean $5,000-$20,000+ in annual energy savings.',
  },
];

const replacementPros = [
  'Complete system warranty (20-30 years)',
  'Addresses all underlying issues',
  'New insulation improves energy efficiency',
  'Resets roof life expectancy completely',
  'May be required for severe damage',
  'Can upgrade to better roofing system',
];

const replacementCons = [
  'Highest upfront cost ($8-$15+/sq ft)',
  'Significant business disruption',
  'Landfill waste from old roof',
  'Longer project timeline (weeks)',
  'May require building permits',
  'Potential hidden costs during tear-off',
];

const coatingPros = [
  'Cost: 20-40% of replacement',
  'Minimal business disruption',
  'Completed in days, not weeks',
  'No tear-off waste (environmentally friendly)',
  'Reflects heat, reduces energy costs 10-30%',
  'Can be recoated to extend life further',
];

const coatingCons = [
  'Requires structurally sound existing roof',
  'Won\'t fix underlying structural issues',
  'Shorter warranty (10-15 years typically)',
  'Not suitable for severely damaged roofs',
  'Must repair leaks before coating',
  'May not work on all roof types',
];

const whenToReplace = [
  {
    situation: 'Roof is 25+ years old',
    explanation: 'Multiple systems may have failed. Full replacement addresses all issues simultaneously.',
  },
  {
    situation: 'Significant ponding water issues',
    explanation: 'Coating won\'t fix structural slope problems. Replacement can add proper drainage.',
  },
  {
    situation: 'Wet or damaged insulation',
    explanation: 'Compromised insulation must be replaced. Coating over wet insulation traps moisture.',
  },
  {
    situation: 'Multiple membrane failures',
    explanation: 'When the membrane has extensive damage, coating is just a Band-Aid solution.',
  },
  {
    situation: 'Planning to sell the building',
    explanation: 'New roof warranty is more attractive to buyers than a coating warranty.',
  },
];

const whenToCoat = [
  {
    situation: 'Roof is 10-20 years old, structurally sound',
    explanation: 'Prime candidate for coating. Extend life another 10-15 years at fraction of replacement cost.',
  },
  {
    situation: 'Minor leaks or localized damage',
    explanation: 'Repair issues, then coat. Coating creates seamless waterproof barrier.',
  },
  {
    situation: 'High energy costs from summer heat',
    explanation: 'Reflective coating immediately reduces cooling costs 10-30%.',
  },
  {
    situation: 'Budget constraints',
    explanation: 'Coating buys time. Plan full replacement when budget allows while protecting roof now.',
  },
  {
    situation: 'Can\'t afford business disruption',
    explanation: 'Coating is minimally invasive. No tear-off noise, debris, or extended closure needed.',
  },
];

const costComparison = [
  {
    buildingSize: '10,000 sq ft',
    replacementLow: '$80,000',
    replacementHigh: '$150,000',
    coatingLow: '$30,000',
    coatingHigh: '$70,000',
    savings: '$50,000 - $80,000',
  },
  {
    buildingSize: '25,000 sq ft',
    replacementLow: '$200,000',
    replacementHigh: '$375,000',
    coatingLow: '$75,000',
    coatingHigh: '$175,000',
    savings: '$125,000 - $200,000',
  },
  {
    buildingSize: '50,000 sq ft',
    replacementLow: '$400,000',
    replacementHigh: '$750,000',
    coatingLow: '$150,000',
    coatingHigh: '$350,000',
    savings: '$250,000 - $400,000',
  },
];

export default function OfficeBuildingRoofReplacementVsCoatingPage() {
  const pageUrl = `${SITE_CONFIG.url}/office-building-roof-replacement-vs-coating-charlotte-nc`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="Office Building Roof: Replacement vs Coating | Charlotte NC"
        description="Comprehensive guide to commercial roof replacement vs coating for Charlotte office buildings."
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Commercial Roofing', url: `${SITE_CONFIG.url}/commercial-roofing-services` },
          { name: 'Office Building Roof: Replacement vs Coating', url: pageUrl },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Commercial Roofing', url: `${SITE_CONFIG.url}/commercial-roofing-services` },
          { name: 'Office Building Roof: Replacement vs Coating', url: pageUrl },
        ]}
      />
      <ArticleSchema
        post={{
          title: 'Office Building Roof: Replacement vs Coating - Charlotte NC Guide',
          description: 'When is replacement a waste of money? Cost analysis for Charlotte office buildings.',
          slug: 'office-building-roof-replacement-vs-coating-charlotte-nc',
          datePublished: '2026-01-27',
          dateModified: '2026-01-27',
        }}
      />
      <FAQSchema faqs={commercialFAQs} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={IMAGES.hero.hero26}
            alt="Charlotte office building commercial roof"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Commercial Roofing', href: '/commercial-roofing-services' },
              { label: 'Office Building: Replacement vs Coating' },
            ]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <Building2 className="w-4 h-4" />
              <span>Commercial Roofing Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Is Your Office Building Roof Replacement a Waste of Money?
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed">
              When Commercial Roof Coating Makes More Sense Than Replacement
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              Before spending $200,000+ on a new roof for your Charlotte office building,
              consider this: coating could extend your roof&apos;s life 10-15 years at 20-40% of the cost.
              Here&apos;s how to know which option is right for your building.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-accent hover:bg-accent-dark text-white text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5" />
                Free Commercial Assessment
              </a>
              <EstimateButton
                className="btn bg-white text-slate-800 hover:bg-gray-100 text-lg px-8 py-4"
                variant="outline"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Question Section */}
      <section className="section bg-amber-50 border-y border-amber-200">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <AlertTriangle className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">
              The $100,000+ Question Every Building Owner Should Ask
            </h2>
            <p className="text-lg text-gray mb-6">
              &ldquo;Does my roof actually need replacement, or am I about to waste money
              on a problem that could be solved for a fraction of the cost?&rdquo;
            </p>
            <p className="text-gray">
              Many Charlotte building owners are told they need full replacement when coating
              would be equally effective. Let&apos;s examine when each option makes sense.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="section">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
              Cost Comparison: Replacement vs Coating in Charlotte
            </h2>
            <p className="text-gray text-center mb-8">
              Real cost ranges for Charlotte-area office buildings
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 text-left">Building Size</th>
                    <th className="p-4 text-center">Full Replacement</th>
                    <th className="p-4 text-center">Roof Coating</th>
                    <th className="p-4 text-center">Potential Savings</th>
                  </tr>
                </thead>
                <tbody>
                  {costComparison.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-4 font-medium">{row.buildingSize}</td>
                      <td className="p-4 text-center text-red-600">{row.replacementLow} - {row.replacementHigh}</td>
                      <td className="p-4 text-center text-green-600">{row.coatingLow} - {row.coatingHigh}</td>
                      <td className="p-4 text-center font-bold text-primary">{row.savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray text-center mt-4">
              *Costs vary based on roof condition, access, system type, and specific building requirements
            </p>
          </div>
        </div>
      </section>

      {/* Side by Side Comparison */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Full Replacement vs Roof Coating: Pros &amp; Cons
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Replacement Column */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-slate-700 text-white p-6">
                <h3 className="text-2xl font-bold text-center">Full Roof Replacement</h3>
                <p className="text-center text-white/80 mt-2">Complete tear-off and new system</p>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-green-600 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Advantages
                </h4>
                <ul className="space-y-2 mb-6">
                  {replacementPros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="font-bold text-red-600 mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Disadvantages
                </h4>
                <ul className="space-y-2">
                  {replacementCons.map((con, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Coating Column */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border-2 border-green-500">
              <div className="bg-green-600 text-white p-6">
                <h3 className="text-2xl font-bold text-center">Roof Coating System</h3>
                <p className="text-center text-white/80 mt-2">Restore and protect existing roof</p>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-green-600 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Advantages
                </h4>
                <ul className="space-y-2 mb-6">
                  {coatingPros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="font-bold text-red-600 mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Disadvantages
                </h4>
                <ul className="space-y-2">
                  {coatingCons.map((con, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Replace */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
              When Full Replacement IS the Right Choice
            </h2>
            <p className="text-gray text-center mb-8">
              Sometimes replacement is unavoidable. Here&apos;s when to invest in a new roof:
            </p>
            <div className="space-y-4">
              {whenToReplace.map((item, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 border-l-4 border-slate-600">
                  <h3 className="font-bold text-dark mb-2">{item.situation}</h3>
                  <p className="text-gray text-sm">{item.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* When to Coat */}
      <section className="section bg-green-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">
              When Coating Saves You Money
            </h2>
            <p className="text-gray text-center mb-8">
              These situations are ideal for commercial roof coating:
            </p>
            <div className="space-y-4">
              {whenToCoat.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border-l-4 border-green-600">
                  <h3 className="font-bold text-dark mb-2">{item.situation}</h3>
                  <p className="text-gray text-sm">{item.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Analysis */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8" />
              <h2 className="text-3xl font-bold">ROI Analysis: A Real Charlotte Example</h2>
            </div>
            <div className="bg-white/10 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">25,000 Sq Ft Office Building in South Charlotte</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-amber-300 mb-3">Option A: Full Replacement</h4>
                  <ul className="space-y-2 text-sm">
                    <li>Cost: $275,000</li>
                    <li>Warranty: 25 years</li>
                    <li>Energy savings: ~15% ($8,000/year)</li>
                    <li>Downtime: 3-4 weeks of disruption</li>
                    <li>Cost per year of life: $11,000</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-300 mb-3">Option B: Silicone Coating</h4>
                  <ul className="space-y-2 text-sm">
                    <li>Cost: $100,000</li>
                    <li>Warranty: 15 years (recoatable)</li>
                    <li>Energy savings: ~25% ($13,000/year)</li>
                    <li>Downtime: 3-5 days, minimal disruption</li>
                    <li>Cost per year of life: $6,667</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="font-bold text-lg">
                  Result: Coating saves $175,000 upfront, provides better energy savings,
                  and costs 40% less per year of roof life.
                </p>
                <p className="text-white/80 text-sm mt-2">
                  *This building&apos;s roof was 12 years old with a sound membrane - ideal coating candidate
                </p>
              </div>
            </div>
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
              {commercialFAQs.map((faq, index) => (
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

      {/* Related Commercial Content */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              More Commercial Roofing Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/commercial-roofing-charlotte-nc"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  Commercial Roofing Charlotte NC
                </h3>
                <p className="text-gray text-sm">
                  Complete commercial roofing services for Charlotte businesses.
                </p>
                <span className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="/tpo-roofing-charlotte-nc"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  TPO Roofing Charlotte NC
                </h3>
                <p className="text-gray text-sm">
                  Energy-efficient TPO roofing for commercial buildings.
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
        slug="office-building-roof-replacement-vs-coating-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/office-building-roof-replacement-vs-coating-charlotte-nc`}
      />

      {/* CTA Section */}
      <CTASection
        title="Not Sure Which Option is Right for Your Building?"
        subtitle="Get a free commercial roof assessment from Best Roofing Now. We'll inspect your roof, provide honest recommendations, and give you options - not a sales pitch."
      />
    </>
  );
}
