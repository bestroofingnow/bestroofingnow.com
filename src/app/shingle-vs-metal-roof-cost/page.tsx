import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
import Link from 'next/link';
import {
  Phone,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Shield,
  TrendingUp,
  Zap,
  Home,
  Calculator,
  Wrench,
  Wind,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  ArticleSchema,
  AISearchOptimizationBundle,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import EstimateButton from '@/components/estimate/EstimateButton';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Shingle vs Metal Roof Cost: Complete 2026 Comparison Guide | Charlotte NC',
  description:
    'Shingle vs metal roof cost comparison for Charlotte NC homeowners. Upfront costs, lifetime value, insurance savings, and ROI breakdown. Find out which roofing material saves you more money over 50 years.',
  keywords: [
    'shingle vs metal roof cost',
    'metal roof cost vs shingle',
    'cost of shingle roof vs metal roof',
    'shingle versus metal roof cost',
    'is a metal roof worth the extra cost',
    'metal roof vs asphalt shingles cost comparison',
    'metal roof vs shingles pros and cons',
    'metal roof cost Charlotte NC',
    'shingle roof cost Charlotte NC',
    'metal roof lifetime cost comparison',
    'metal roof insurance savings Charlotte',
    'metal roof energy savings Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/shingle-vs-metal-roof-cost`,
  },
  openGraph: {
    title: 'Shingle vs Metal Roof Cost: Which Saves You More Money?',
    description:
      'Side-by-side cost comparison of shingle and metal roofing for Charlotte NC homes. Upfront price, lifetime value, insurance discounts, and energy savings analyzed.',
    url: `${SITE_CONFIG.url}/shingle-vs-metal-roof-cost`,
    type: 'article',
    images: [
      {
        url: IMAGES.hero.metalRoof,
        width: 1200,
        height: 630,
        alt: 'Shingle vs metal roof cost comparison - Charlotte NC roofing guide',
      },
    ],
  },
};

const costFAQs = [
  {
    question: 'How much does a shingle roof cost compared to a metal roof?',
    answer:
      'In Charlotte NC, a standard asphalt shingle roof costs $8,500 to $15,000 for an average home, while a metal roof costs $15,000 to $30,000. However, metal roofs last 40-70 years versus 20-30 years for shingles, so the cost per year is often similar or lower for metal when you factor in replacements, maintenance savings, and energy efficiency.',
  },
  {
    question: 'Is a metal roof worth the extra cost in Charlotte NC?',
    answer:
      'For most Charlotte homeowners staying 15+ years, yes. Metal roofs deliver a lower lifetime cost because you avoid a second roof replacement, save 10-30% on insurance premiums, reduce energy bills by 10-25%, and add 1-6% to your home resale value. Over 50 years, a metal roof typically costs $10,000-$20,000 less than two shingle roofs.',
  },
  {
    question: 'How much can I save on insurance with a metal roof in Charlotte?',
    answer:
      'Charlotte homeowners with metal roofs typically save 10-30% on homeowner insurance premiums. On an average Charlotte policy of $2,000 per year, that is $200 to $600 annually or $8,000 to $24,000 over the life of a metal roof. Some insurers offer even larger discounts due to Charlotte\'s storm exposure and hail risk.',
  },
  {
    question: 'What is the cost per square foot for shingles vs metal roofing?',
    answer:
      'Asphalt shingles cost $4.50 to $7.50 per square foot installed in Charlotte. Standing seam metal roofing costs $8.00 to $14.00 per square foot, while metal shingle panels cost $7.00 to $12.00 per square foot. These prices include materials, labor, underlayment, and tear-off of the existing roof.',
  },
  {
    question: 'How does the lifetime cost of metal vs shingle roofing compare?',
    answer:
      'Over 50 years on an average Charlotte home: shingle roofing costs $25,000-$42,000 (two replacements plus maintenance), while metal roofing costs $15,000-$32,000 (one installation, minimal maintenance). Metal saves $8,000-$20,000 in lifetime roofing costs before factoring in insurance and energy savings.',
  },
  {
    question: 'Do metal roofs really save on energy costs in Charlotte?',
    answer:
      'Yes. Metal roofs with reflective coatings reduce cooling costs by 10-25% in Charlotte\'s hot summers. On average, Charlotte homeowners save $200 to $500 per year on energy bills with a metal roof. Over 50 years, that is $10,000 to $25,000 in cumulative energy savings.',
  },
  {
    question: 'What metal roofing style is most cost-effective?',
    answer:
      'Corrugated metal panels are the most affordable at $7.00-$10.00 per square foot installed, but standing seam metal roofing at $8.00-$14.00 per square foot offers the best long-term value with superior weather resistance, a 50-year warranty, and the highest energy efficiency. For Charlotte homes, standing seam is the most popular choice.',
  },
  {
    question: 'Does a metal roof increase home resale value?',
    answer:
      'Metal roofs add an average of 1-6% to home resale value nationwide, and the return is even stronger in Charlotte where buyers value storm durability. A $350,000 Charlotte home could see a $3,500 to $21,000 increase in sale price. Metal roofs also help homes sell faster because buyers know they will not need a new roof for decades.',
  },
  {
    question: 'Should I choose shingles if I am selling my house soon?',
    answer:
      'If you plan to sell within 5 years and need a new roof, architectural shingles at $8,500-$15,000 are usually the better financial choice. The lower upfront cost and modern appearance satisfy most buyers. However, if your home is in a premium Charlotte neighborhood, a metal roof can be a strong selling point that commands a higher sale price.',
  },
  {
    question: 'Can I finance a metal roof to offset the higher upfront cost?',
    answer:
      'Yes. Best Roofing Now offers flexible financing that lets you spread the cost of a metal roof over 5-15 years. Monthly payments of $150-$300 are common, and when you subtract insurance and energy savings, the effective monthly cost is often comparable to what you would pay for a shingle roof without financing.',
  },
];

const comparisonData = [
  { category: 'Upfront Cost (Avg Home)', shingle: '$8,500-$15,000', metal: '$15,000-$30,000', winner: 'shingle' },
  { category: 'Cost Per Sq Ft', shingle: '$4.50-$7.50', metal: '$8.00-$14.00', winner: 'shingle' },
  { category: 'Lifespan', shingle: '20-30 years', metal: '40-70 years', winner: 'metal' },
  { category: 'Lifetime Cost (50 yrs)', shingle: '$25,000-$42,000', metal: '$15,000-$32,000', winner: 'metal' },
  { category: 'Cost Per Year of Life', shingle: '$350-$600/year', metal: '$250-$450/year', winner: 'metal' },
  { category: 'Maintenance Cost/Year', shingle: '$100-$300', metal: '$0-$100', winner: 'metal' },
  { category: 'Insurance Savings', shingle: 'Standard rates', metal: '10-30% discount', winner: 'metal' },
  { category: 'Energy Savings/Year', shingle: 'Baseline', metal: '$200-$500', winner: 'metal' },
  { category: 'Resale Value Impact', shingle: 'Neutral to +1%', metal: '+1-6%', winner: 'metal' },
  { category: 'Warranty Length', shingle: '25-30 years', metal: '40-50 years', winner: 'metal' },
];

const shingleBestFor = [
  'Budget-conscious homeowners needing a roof now',
  'Homes you plan to sell within 5-10 years',
  'Historic neighborhoods with HOA shingle requirements',
  'Rental or investment properties',
  'Simple roof designs with standard pitches',
  'Homeowners who prefer traditional aesthetics',
];

const metalBestFor = [
  'Long-term homeowners (staying 15+ years)',
  'Charlotte storm zones (hail, wind, hurricanes)',
  'Energy-conscious homeowners reducing utility bills',
  'Homes where insurance savings offset the premium',
  'Properties with steep or complex roof designs',
  'Homeowners who want a once-in-a-lifetime roof',
];

export default function ShingleVsMetalRoofCostPage() {
  const pageUrl = `${SITE_CONFIG.url}/shingle-vs-metal-roof-cost`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="Shingle vs Metal Roof Cost: Complete Comparison Guide"
        description="Side-by-side cost comparison of shingle and metal roofing for Charlotte NC homes."
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Costs', url: `${SITE_CONFIG.url}/charlotte-roofing-costs-2026` },
          { name: 'Shingle vs Metal Roof Cost', url: pageUrl },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Costs', url: `${SITE_CONFIG.url}/charlotte-roofing-costs-2026` },
          { name: 'Shingle vs Metal Roof Cost', url: pageUrl },
        ]}
      />
      <ArticleSchema
        post={{
          title: 'Shingle vs Metal Roof Cost: Complete Comparison Guide',
          description: 'Side-by-side cost comparison of shingle and metal roofing for Charlotte NC homes.',
          slug: 'shingle-vs-metal-roof-cost',
          datePublished: '2026-03-28',
          dateModified: '2026-03-28',
        }}
      />
      <FAQSchema faqs={costFAQs} />
      <AISearchOptimizationBundle
        pageUrl={pageUrl}
        pageName="Shingle vs Metal Roof Cost Comparison"
        city="Charlotte"
        skipFAQ={true}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <SEOImage
            src={IMAGES.hero.metalRoof}
            alt="Metal roof and shingle roof cost comparison Charlotte NC"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Roofing Costs', href: '/charlotte-roofing-costs-2026' },
              { label: 'Shingle vs Metal Roof Cost' },
            ]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <DollarSign className="w-4 h-4" />
              <span>Cost Comparison Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Shingle vs Metal Roof Cost
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed">
              Complete Comparison Guide for Charlotte NC Homeowners
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              Which roofing material actually saves you more money? We break down upfront costs,
              lifetime value, insurance savings, and energy efficiency so you can make the
              smartest investment for your Charlotte home.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-accent hover:bg-accent-dark text-white text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5" />
                Get a Cost Breakdown
              </a>
              <EstimateButton
                className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
                variant="outline"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Cost Snapshot */}
      <section className="py-8 bg-light border-b">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-50 rounded-xl p-6 mb-4">
                <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-dark mb-2">Asphalt Shingle Roof</h3>
                <p className="text-3xl font-bold text-blue-700 mb-2">$8,500 - $15,000</p>
                <p className="text-gray text-sm">
                  Upfront cost for average Charlotte home. Lasts 20-30 years
                  with regular maintenance.
                </p>
              </div>
              <p className="text-sm text-gray">Architectural shingles recommended</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-50 rounded-xl p-6 mb-4">
                <Shield className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-dark mb-2">Metal Roof</h3>
                <p className="text-3xl font-bold text-amber-700 mb-2">$15,000 - $30,000</p>
                <p className="text-gray text-sm">
                  Upfront cost for average Charlotte home. Lasts 40-70 years
                  with virtually no maintenance.
                </p>
              </div>
              <p className="text-sm text-gray">Standing seam most popular</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Real Cost Story */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">
              The Real Cost Story: Upfront Price vs Lifetime Value
            </h2>
            <p className="text-lg text-gray mb-6">
              When Charlotte homeowners compare shingle vs metal roof cost, the conversation usually
              starts and stops at the sticker price. Metal costs nearly twice as much upfront. But
              that is only half the story. The <strong>true cost of a roof</strong> includes how long
              it lasts, what you spend on repairs, how much you save on insurance and energy, and
              what it does to your home&apos;s value.
            </p>
            <p className="text-lg text-gray mb-6">
              Here is the reality for a typical Charlotte home with a 2,000 square foot roof:
              over a 50-year period, you will need <strong>two shingle roofs</strong> but only
              <strong> one metal roof</strong>. When you add up both shingle installations, ongoing
              maintenance, higher insurance premiums, and larger energy bills, shingles often cost
              $8,000 to $20,000 <em>more</em> than metal over the long run.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                50-Year Cost Breakdown: Average Charlotte Home
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-dark mb-3">Shingle Roof (50-Year Total)</h4>
                  <ul className="space-y-2 text-gray text-sm">
                    <li className="flex justify-between">
                      <span>First roof installation</span>
                      <span className="font-medium">$12,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Second roof (year 25)</span>
                      <span className="font-medium">$14,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Maintenance (50 years)</span>
                      <span className="font-medium">$8,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Insurance premium (standard)</span>
                      <span className="font-medium">Baseline</span>
                    </li>
                    <li className="flex justify-between border-t pt-2 mt-2">
                      <span className="font-bold text-dark">Total</span>
                      <span className="font-bold text-dark">~$34,000</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-dark mb-3">Metal Roof (50-Year Total)</h4>
                  <ul className="space-y-2 text-gray text-sm">
                    <li className="flex justify-between">
                      <span>One-time installation</span>
                      <span className="font-medium">$22,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Second roof</span>
                      <span className="font-medium text-green-600">Not needed</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Maintenance (50 years)</span>
                      <span className="font-medium">$2,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Insurance savings (50 yrs)</span>
                      <span className="font-medium text-green-600">-$15,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Energy savings (50 yrs)</span>
                      <span className="font-medium text-green-600">-$15,000</span>
                    </li>
                    <li className="flex justify-between border-t pt-2 mt-2">
                      <span className="font-bold text-dark">Net Total</span>
                      <span className="font-bold text-green-700">~$-6,000</span>
                    </li>
                  </ul>
                  <p className="text-xs text-green-600 mt-2">
                    * Metal roof pays for itself and saves ~$6,000 over 50 years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Side-by-Side Cost Comparison
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left">Cost Category</th>
                  <th className="p-4 text-center">Asphalt Shingles</th>
                  <th className="p-4 text-center">Metal Roofing</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium">{row.category}</td>
                    <td className={`p-4 text-center ${row.winner === 'shingle' ? 'bg-green-50 font-medium' : ''}`}>
                      {row.shingle}
                      {row.winner === 'shingle' && <CheckCircle className="w-4 h-4 text-green-500 inline ml-2" />}
                    </td>
                    <td className={`p-4 text-center ${row.winner === 'metal' ? 'bg-green-50 font-medium' : ''}`}>
                      {row.metal}
                      {row.winner === 'metal' && <CheckCircle className="w-4 h-4 text-green-500 inline ml-2" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray mt-4">
            <CheckCircle className="w-4 h-4 text-green-500 inline mr-1" /> indicates cost advantage.
            All prices reflect 2026 Charlotte NC market rates.
          </p>
        </div>
      </section>

      {/* Insurance Savings Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Charlotte Insurance Savings: A Hidden Cost Advantage
            </h2>
            <p className="text-lg text-gray mb-6">
              One of the most overlooked factors in the shingle vs metal roof cost debate is
              <strong> homeowner insurance</strong>. Charlotte sits in one of the most active
              severe weather corridors in the Southeast. Hail, high winds, and tropical storm
              remnants hit the metro area multiple times per year. Insurance companies reward
              homeowners who reduce their risk with impact-resistant metal roofing.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-primary mb-2">10-30%</p>
                <p className="text-gray text-sm">Average premium discount with metal roof in Charlotte</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <DollarSign className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <p className="text-3xl font-bold text-green-600 mb-2">$200-$600</p>
                <p className="text-gray text-sm">Annual savings on Charlotte homeowner policies</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <TrendingUp className="w-10 h-10 text-amber-600 mx-auto mb-3" />
                <p className="text-3xl font-bold text-amber-600 mb-2">$8,000-$24,000</p>
                <p className="text-gray text-sm">Lifetime insurance savings over 40-year metal roof</p>
              </div>
            </div>
            <p className="text-gray">
              <strong>Pro tip:</strong> Before choosing your roofing material, call your insurance
              agent and ask what discount they offer for a Class 4 impact-rated metal roof. Many
              Charlotte homeowners are surprised to learn their annual savings alone justify
              a significant portion of the metal roof premium.
            </p>
          </div>
        </div>
      </section>

      {/* Energy Efficiency */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Energy Efficiency: How Metal Roofs Cut Charlotte Utility Bills
            </h2>
            <p className="text-lg text-gray mb-6">
              Charlotte summers average 90+ degrees from June through September. Your roof absorbs
              more heat than any other part of your home. Dark asphalt shingles can reach surface
              temperatures of 150-170&deg;F, radiating heat into your attic and driving up air
              conditioning costs. Metal roofs with reflective coatings stay 50-60 degrees cooler.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Zap className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-dark mb-3">Shingle Roof Energy Profile</h3>
                <ul className="space-y-2 text-gray">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">&#x2022;</span>
                    <span>Surface temp: 150-170&deg;F in summer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">&#x2022;</span>
                    <span>Absorbs 60-70% of solar radiation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">&#x2022;</span>
                    <span>Average Charlotte cooling cost: $1,200-$1,800/yr</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">&#x2022;</span>
                    <span>No Energy Star rating available</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Zap className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-dark mb-3">Metal Roof Energy Profile</h3>
                <ul className="space-y-2 text-gray">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">&#x2022;</span>
                    <span>Surface temp: 100-110&deg;F in summer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">&#x2022;</span>
                    <span>Reflects 60-70% of solar radiation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">&#x2022;</span>
                    <span>Cooling savings: 10-25% ($200-$500/yr)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">&#x2022;</span>
                    <span>Energy Star certified options available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get Your Personalized Cost Comparison</h2>
            <p className="text-xl text-white/90 mb-6">
              Every Charlotte roof is different. Let our experts measure your roof, analyze your
              specific situation, and provide a detailed side-by-side estimate for shingles
              vs metal &mdash; including projected insurance and energy savings.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-white text-primary hover:bg-gray-100"
              >
                <Phone className="w-5 h-5" />
                Call {SITE_CONFIG.phone}
              </a>
              <EstimateButton
                variant="accent"
                size="lg"
              >
                Get Free Instant Estimate
              </EstimateButton>
            </div>
          </div>
        </div>
      </section>

      {/* When Shingles Make More Sense */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            When Does Each Material Make Financial Sense?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-blue-600 text-white p-6">
                <h3 className="text-xl font-bold text-center">Choose Shingles If:</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {shingleBestFor.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-gray">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-gray">
                    <strong>Bottom line:</strong> Shingles are the right choice when upfront
                    cost matters most and you do not plan to stay in the home long enough for
                    metal&apos;s lifetime savings to outweigh the price difference.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-amber-500 text-white p-6">
                <h3 className="text-xl font-bold text-center">Choose Metal If:</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {metalBestFor.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      <span className="text-gray">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 bg-amber-50 rounded-lg p-4">
                  <p className="text-sm text-gray">
                    <strong>Bottom line:</strong> Metal roofing is the smarter investment for
                    Charlotte homeowners staying long-term. The break-even point is typically
                    12-18 years when you factor in insurance and energy savings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charlotte-Specific Factors */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Charlotte-Specific Factors That Affect Your Decision
            </h2>
            <p className="text-lg text-gray mb-8">
              Charlotte&apos;s unique climate, real estate market, and regulatory environment
              create conditions that can tip the scale in either direction. Here is what local
              homeowners need to consider:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-dark mb-3 flex items-center gap-2">
                  <Wind className="w-5 h-5 text-primary" />
                  Storm Frequency
                </h3>
                <p className="text-gray text-sm">
                  Charlotte averages 5-8 significant storm events per year, including hail, severe
                  thunderstorms, and tropical remnants. Metal roofs rated for 140 mph winds and
                  Class 4 hail offer dramatically better protection. After Hurricane Helene in 2024,
                  metal roofs in the Charlotte area had 90%+ survival rates with no damage.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-dark mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Insurance Market
                </h3>
                <p className="text-gray text-sm">
                  North Carolina insurance premiums have risen 15-25% since 2023 due to increasing
                  storm claims. Metal roof discounts are becoming more valuable every year. Some
                  Charlotte insurers now require impact-rated roofing for preferred rates, giving
                  metal roof owners a significant ongoing advantage.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-dark mb-3 flex items-center gap-2">
                  <Home className="w-5 h-5 text-primary" />
                  HOA Considerations
                </h3>
                <p className="text-gray text-sm">
                  Most Charlotte HOAs now approve standing seam and metal shingle-style roofing,
                  especially in newer developments. However, some historic neighborhoods like
                  Dilworth and Myers Park may have architectural review requirements. Always check
                  your HOA guidelines before choosing. Metal shingle panels that mimic traditional
                  appearance often pass even strict HOA reviews.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-dark mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Real Estate Market
                </h3>
                <p className="text-gray text-sm">
                  Charlotte&apos;s real estate market remains competitive. Metal roofs are
                  increasingly seen as a premium feature by buyers, particularly in Lake Norman,
                  South Charlotte, and Ballantyne. Homes with metal roofs sell faster and often
                  command higher offers because buyers recognize they will not face a costly roof
                  replacement for decades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Breakdown */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">
              ROI Calculator: When Does Metal Pay for Itself?
            </h2>
            <p className="text-lg text-gray mb-8">
              The break-even point depends on your specific situation, but here is how a typical
              Charlotte homeowner recovers the higher upfront cost of a metal roof:
            </p>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="bg-primary text-white p-4">
                <h3 className="text-lg font-bold text-center">
                  Metal Roof ROI Timeline (vs. Shingle Baseline)
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-right font-bold text-primary">Year 0</div>
                    <div className="flex-1 bg-red-50 rounded-lg p-3">
                      <p className="text-sm text-gray">
                        <strong className="text-red-600">-$10,000</strong> &mdash; Extra upfront cost
                        ($22,000 metal vs $12,000 shingles)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-right font-bold text-primary">Years 1-5</div>
                    <div className="flex-1 bg-yellow-50 rounded-lg p-3">
                      <p className="text-sm text-gray">
                        <strong className="text-yellow-700">-$6,500</strong> &mdash; Insurance savings
                        ($400/yr) + energy savings ($300/yr) = $3,500 recovered
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-right font-bold text-primary">Years 6-12</div>
                    <div className="flex-1 bg-yellow-50 rounded-lg p-3">
                      <p className="text-sm text-gray">
                        <strong className="text-yellow-700">-$1,600</strong> &mdash; Continued savings
                        + avoided shingle repairs ($200/yr). $4,900 more recovered.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-right font-bold text-green-600">Years 13-15</div>
                    <div className="flex-1 bg-green-50 rounded-lg p-3">
                      <p className="text-sm text-gray">
                        <strong className="text-green-600">Break Even</strong> &mdash; Metal roof has
                        fully paid back the cost difference through savings alone.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-right font-bold text-green-600">Year 25+</div>
                    <div className="flex-1 bg-green-50 rounded-lg p-3">
                      <p className="text-sm text-gray">
                        <strong className="text-green-600">+$14,000+</strong> &mdash; Shingle homeowner
                        pays for second roof. Metal homeowner keeps saving. Gap widens every year.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray mt-4 text-center">
              Based on average Charlotte NC pricing, insurance rates, and energy costs. Your actual
              ROI may vary. <Link href="/contact" className="text-primary hover:underline">Contact us</Link> for
              a personalized analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Maintenance Costs */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Maintenance Costs: The Expense Most Homeowners Forget
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-blue-500" />
                  Shingle Maintenance Schedule
                </h3>
                <ul className="space-y-3 text-gray">
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span><strong>Annual inspection:</strong> $100-$200 recommended</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span><strong>Moss/algae cleaning:</strong> $200-$500 every 2-3 years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span><strong>Shingle replacement:</strong> $200-$800 after storms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span><strong>Flashing repairs:</strong> $200-$600 every 5-10 years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span><strong>Estimated 30-year total:</strong> $4,000-$8,000</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-amber-500" />
                  Metal Roof Maintenance Schedule
                </h3>
                <ul className="space-y-3 text-gray">
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                    <span><strong>Annual inspection:</strong> Visual only, often DIY</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                    <span><strong>Panel cleaning:</strong> Rain handles most cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                    <span><strong>Sealant touch-up:</strong> $100-$300 every 15-20 years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                    <span><strong>Fastener inspection:</strong> $100-$200 every 10 years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                    <span><strong>Estimated 50-year total:</strong> $1,000-$2,500</span>
                  </li>
                </ul>
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
              Frequently Asked Questions: Shingle vs Metal Roof Cost
            </h2>
            <div className="space-y-4">
              {costFAQs.map((faq, index) => (
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
              Related Cost Guides and Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/charlotte-roofing-costs-2026"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  Charlotte Roofing Costs 2026
                </h3>
                <p className="text-gray text-sm">
                  Complete pricing guide for all roofing materials and services in Charlotte NC.
                </p>
                <span className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1">
                  View Guide <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="/architectural-vs-3-tab-shingles-charlotte-nc"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  Architectural vs 3-Tab Shingles
                </h3>
                <p className="text-gray text-sm">
                  Choosing between shingle types? Compare cost, durability, and appearance.
                </p>
                <span className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1">
                  Compare Shingles <ArrowRight className="w-4 h-4" />
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
                  Full comparison beyond cost: durability, noise, aesthetics, and performance.
                </p>
                <span className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1">
                  Full Comparison <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="/metal-roofing-charlotte-nc"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  Metal Roofing Charlotte NC
                </h3>
                <p className="text-gray text-sm">
                  Everything about metal roofing services, styles, and installations in Charlotte.
                </p>
                <span className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="/standing-seam-metal-roof-charlotte-nc"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  Standing Seam Metal Roofing
                </h3>
                <p className="text-gray text-sm">
                  The premium metal roofing option: costs, benefits, and Charlotte installations.
                </p>
                <span className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1">
                  Explore Options <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="/asphalt-shingle-roofing-charlotte-nc"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  Asphalt Shingle Roofing
                </h3>
                <p className="text-gray text-sm">
                  Complete guide to asphalt shingle options for Charlotte homes.
                </p>
                <span className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1">
                  Shingle Guide <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="shingle-vs-metal-roof-cost"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed shingle and metal roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={pageUrl}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Shingle Vs Metal Roof Cost"
      />

      <CTASection
        title="Ready to Compare Your Roofing Options?"
        subtitle="Get a free, side-by-side estimate for shingle and metal roofing from Best Roofing Now. We will help you choose the material that fits your budget, timeline, and long-term goals."
      />
    </>
  );
}
