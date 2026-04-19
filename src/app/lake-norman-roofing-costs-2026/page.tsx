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
  MapPin,
  DollarSign,
  Home,
  TrendingUp,
  Calculator,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
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
import { CityGeoSection } from '@/components/sections/CityGeoSection';
import { LKNNeighborhoodGrid } from '@/components/sections/LKNNeighborhoodGrid';
import { LKNHowToBundle } from '@/components/seo/LKNHowToSchemas';
import { LKNExpertiseSchema } from '@/components/seo/LKNExpertiseSchema';
import { LKNFounderSchema } from '@/components/seo/LKNFounderSchema';
export const metadata: Metadata = {
  title: 'Lake Norman Roofing Costs 2026',
  description:
    'Lake Norman roofing costs for 2026. Replacement pricing from $8K-$60K+ for standard to luxury homes. Free estimates. Call (704) 605-6047.',
  keywords: [
    'roof replacement cost lake norman',
    'roofing prices mooresville nc',
    'new roof cost cornelius nc',
    'lake norman roofing costs 2026',
    'roof replacement price lake norman nc',
    'how much does a new roof cost lake norman',
    'roofing estimate lake norman',
    'waterfront roofing cost lake norman',
    'metal roof cost lake norman nc',
    'roof replacement cost davidson nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/lake-norman-roofing-costs-2026`,
  },
  openGraph: {
    title: 'Lake Norman Roofing Costs 2026 | Pricing Guide',
    description:
      'Complete 2026 roofing cost guide for Lake Norman. Pricing by home size, material, and community. Standard, waterfront, and luxury options.',
    url: `${SITE_CONFIG.url}/lake-norman-roofing-costs-2026`,
    type: 'website',
    images: [
      {
        url: IMAGES.houses.modern1,
        width: 1200,
        height: 630,
        alt: 'Lake Norman roofing costs 2026 - pricing guide for LKN homeowners',
      },
    ],
  },
};

// Cost by home size
const costBySize = [
  { size: '1,500 sq ft', squares: '15-18', standard: '$8,000 - $12,000', waterfront: '$15,000 - $20,000', luxury: '$25,000 - $35,000' },
  { size: '2,000 sq ft', squares: '20-24', standard: '$10,000 - $15,000', waterfront: '$18,000 - $25,000', luxury: '$30,000 - $42,000' },
  { size: '2,500 sq ft', squares: '25-30', standard: '$12,000 - $17,000', waterfront: '$22,000 - $30,000', luxury: '$35,000 - $50,000' },
  { size: '3,000 sq ft', squares: '30-36', standard: '$14,000 - $18,000', waterfront: '$25,000 - $35,000', luxury: '$42,000 - $60,000' },
  { size: '4,000+ sq ft', squares: '40+', standard: '$18,000+', waterfront: '$35,000+', luxury: '$60,000+' },
];

// Material cost comparison
const materialCosts = [
  {
    material: '3-Tab Asphalt Shingles',
    costPerSqFt: '$3.50 - $5.50',
    lifespan: '15-20 years',
    bestFor: 'Budget-friendly, rental properties',
    recommendation: 'Not recommended for Lake Norman waterfront due to low wind rating',
  },
  {
    material: 'Architectural Shingles',
    costPerSqFt: '$5.00 - $8.00',
    lifespan: '25-30 years',
    bestFor: 'Most Lake Norman homes',
    recommendation: 'Best value for inland LKN homes. GAF Timberline HDZ or CertainTeed Landmark recommended.',
  },
  {
    material: 'Impact-Resistant Shingles (Class 4)',
    costPerSqFt: '$7.00 - $11.00',
    lifespan: '30-50 years',
    bestFor: 'Waterfront homes, hail-prone areas',
    recommendation: 'Our top recommendation for Lake Norman. Insurance discount of 10-28% offsets higher cost.',
  },
  {
    material: 'Standing Seam Metal',
    costPerSqFt: '$12.00 - $22.00',
    lifespan: '50-70 years',
    bestFor: 'Waterfront estates, long-term value',
    recommendation: 'Premium choice for lakefront. Highest wind rating, zero maintenance, best longevity.',
  },
  {
    material: 'Natural Slate',
    costPerSqFt: '$20.00 - $40.00',
    lifespan: '75-150 years',
    bestFor: 'Luxury estates, historic homes',
    recommendation: 'Ultimate durability for The Peninsula, River Run, and other luxury LKN communities.',
  },
  {
    material: 'Synthetic Slate / Composite',
    costPerSqFt: '$10.00 - $18.00',
    lifespan: '40-60 years',
    bestFor: 'Luxury look at reduced cost',
    recommendation: 'DaVinci and Brava options deliver slate aesthetics at 40% less weight and cost.',
  },
];

// City-specific cost notes
const cityPricing = [
  {
    name: 'Cornelius',
    slug: 'cornelius-nc',
    avgCost: '$15,000 - $35,000',
    note: 'Higher average due to Peninsula waterfront estates and strict HOA material requirements',
  },
  {
    name: 'Davidson',
    slug: 'davidson-nc',
    avgCost: '$14,000 - $30,000',
    note: 'Historic district homes may require architectural review and specialty materials',
  },
  {
    name: 'Mooresville',
    slug: 'mooresville-nc',
    avgCost: '$10,000 - $28,000',
    note: 'Wide range reflecting diverse housing from starter homes to The Point lakefront estates',
  },
  {
    name: 'Huntersville',
    slug: 'huntersville-nc',
    avgCost: '$9,000 - $20,000',
    note: 'Primarily suburban homes with standard roofing. Hail corridor may affect insurance deductibles.',
  },
  {
    name: 'Denver',
    slug: 'denver-nc',
    avgCost: '$12,000 - $30,000',
    note: 'Westport lakefront properties drive higher averages. Wind-resistant upgrades recommended.',
  },
  {
    name: 'Sherrills Ford',
    slug: 'sherrills-ford-nc',
    avgCost: '$10,000 - $25,000',
    note: 'Mix of lakefront and rural properties. Catawba County permits may differ from Mecklenburg.',
  },
];

// Factors affecting cost
const costFactors = [
  {
    title: 'Roof Size & Complexity',
    description: 'Steeper pitches, multiple valleys, dormers, and skylights increase labor costs by 15-30%. Lake Norman\'s larger homes average 25-35 roofing squares vs 15-20 in Charlotte proper.',
  },
  {
    title: 'Material Selection',
    description: 'Materials account for 40-60% of total cost. Upgrading from standard architectural to Class 4 impact-resistant adds $2-$4 per square foot but saves on insurance and longevity.',
  },
  {
    title: 'Waterfront Premium',
    description: 'Lakefront installations require enhanced underlayment, 6-nail fastening patterns, and upgraded edge details. Expect a 15-30% premium over identical inland installations.',
  },
  {
    title: 'Tear-Off & Disposal',
    description: 'Removing an existing layer costs $1,500-$3,000. Two-layer tear-offs cost more. Lake Norman\'s larger homes produce more waste, affecting disposal fees.',
  },
  {
    title: 'Deck Repairs',
    description: 'Rotted or damaged plywood decking costs $75-$150 per sheet to replace. Waterfront homes with long-term moisture exposure may need more deck replacement.',
  },
  {
    title: 'Permits & HOA',
    description: 'Building permits in Mecklenburg, Iredell, and Catawba counties run $150-$400. Some LKN HOAs require architectural approval which can affect material choices and timelines.',
  },
];

// FAQs
const costFAQs = [
  {
    question: 'How much does a new roof cost in Lake Norman in 2026?',
    answer:
      'In 2026, a standard roof replacement on a Lake Norman home costs $8,000-$18,000 for most homes. Waterfront properties typically run $15,000-$35,000 due to enhanced materials and installation methods. Luxury estates with premium materials range from $25,000-$60,000+. Best Roofing Now provides free, no-obligation estimates for all Lake Norman communities.',
  },
  {
    question: 'Why does waterfront roofing cost more on Lake Norman?',
    answer:
      'Waterfront roofing costs 15-30% more because lakefront homes require enhanced underlayment systems (ice and water shield extended 6+ feet from eaves), 6-nail high-wind fastening patterns, higher-grade materials rated for 130+ MPH, and additional waterproofing at penetrations. These upgrades dramatically extend roof life in lake-exposed conditions, making them cost-effective over time.',
  },
  {
    question: 'What is the cheapest roofing option for a Lake Norman home?',
    answer:
      '3-tab asphalt shingles are the lowest-cost option at $3.50-$5.50 per square foot installed. However, we do not recommend them for Lake Norman due to their low wind rating (60-70 MPH) and 15-20 year lifespan. Architectural shingles at $5.00-$8.00 per square foot offer significantly better value with 25-30 year lifespans and higher wind resistance.',
  },
  {
    question: 'Can I get financing for a new roof in Lake Norman?',
    answer:
      'Yes. Best Roofing Now offers flexible financing options for Lake Norman homeowners. We partner with multiple lenders to provide 0% APR promotional periods, low monthly payments, and terms from 12-180 months. Most Lake Norman homeowners qualify for financing with no money down. Ask about financing during your free estimate.',
  },
  {
    question: 'Does roof replacement increase home value in Lake Norman?',
    answer:
      'Absolutely. A new roof in Lake Norman typically recoups 60-70% of its cost in home value. On Lake Norman waterfront properties, where buyers are especially conscious of weather protection, a new roof with premium materials can increase resale value by $15,000-$30,000 and significantly reduce time on market.',
  },
  {
    question: 'How do roofing costs in Lake Norman compare to Charlotte?',
    answer:
      'Lake Norman roofing costs average 10-20% higher than Charlotte proper. This reflects larger home sizes (LKN averages 2,500+ sq ft vs 1,800 in Charlotte), more complex roof designs, waterfront premium requirements, and higher material specifications. However, Lake Norman home values are also higher, and the ROI on quality roofing is proportionally greater.',
  },
  {
    question: 'Will my insurance cover any of the roof replacement cost?',
    answer:
      'If your roof needs replacement due to storm damage (hail, wind, fallen trees), your homeowner insurance typically covers the full replacement minus your deductible. Most Lake Norman policies have a 1-2% wind/hail deductible. On a $500K home, that is $5K-$10K out of pocket. We help document storm damage and work with your insurer to maximize coverage.',
  },
  {
    question: 'How can I save money on a Lake Norman roof replacement?',
    answer:
      'Smart savings strategies include: choosing Class 4 impact-resistant shingles for insurance discounts (10-28% premium reduction), scheduling in fall/winter when demand is lower, combining roof work with gutter or siding projects, and selecting materials with the best cost-per-year of service life. Standing seam metal at $15/sq ft with a 60-year lifespan costs less per year than architectural shingles at $6/sq ft lasting 25 years.',
  },
];

export default function LakeNormanRoofingCostsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Lake Norman Roofing', url: `${SITE_CONFIG.url}/roofing-lake-norman-nc` },
          { name: 'Roofing Costs 2026', url: `${SITE_CONFIG.url}/lake-norman-roofing-costs-2026` },
        ]}
      />
      <LocalBusinessSchema includeRating={true} />
      <FAQSchema faqs={costFAQs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/lake-norman-roofing-costs-2026`}
        pageName="Lake Norman Roofing Costs 2026 | Pricing Guide"
        city="Lake Norman"
      />
      <VoiceSearchActionSchema />
      <LKNHowToBundle pageUrl={`${SITE_CONFIG.url}/lake-norman-roofing-costs-2026`} city={"Lake Norman"} />
      <LKNExpertiseSchema pageUrl={`${SITE_CONFIG.url}/lake-norman-roofing-costs-2026`} />
      <LKNFounderSchema pageUrl={`${SITE_CONFIG.url}/lake-norman-roofing-costs-2026`} />

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.houses.modern2}
            alt="Lake Norman roofing costs 2026 - pricing guide for LKN homeowners"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">2026 Pricing Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Lake Norman Roofing Costs<br />
              <span className="text-accent">2026 Pricing Guide</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Transparent pricing for every Lake Norman community. From standard homes
              to waterfront estates, know what to expect before you call.
              Free estimates with no hidden fees.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span>{SITE_CONFIG.googleRating} Google Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Calculator className="w-5 h-5 text-accent" />
                <span>Free Estimates</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Shield className="w-5 h-5 text-accent" />
                <span>No Hidden Fees</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                <Calendar className="w-5 h-5" />
                Get Your Free Estimate
              </Button>
              <Button href={`tel:${SITE_CONFIG.phone}`} variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Phone className="w-5 h-5" />
                (704) 605-6047
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cost by Home Size */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Replacement Cost by Home Size
            </h2>
            <p className="text-gray-600 text-lg">
              2026 pricing for Lake Norman roof replacements based on home size.
              Waterfront and luxury tiers include enhanced materials and installation methods.
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-light rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-6 py-4 text-left font-bold">Home Size</th>
                  <th className="px-6 py-4 text-left font-bold">Squares</th>
                  <th className="px-6 py-4 text-left font-bold">Standard</th>
                  <th className="px-6 py-4 text-left font-bold">Waterfront</th>
                  <th className="px-6 py-4 text-left font-bold">Luxury</th>
                </tr>
              </thead>
              <tbody>
                {costBySize.map((row, index) => (
                  <tr key={row.size} className={index % 2 === 0 ? 'bg-white' : 'bg-light'}>
                    <td className="px-6 py-4 font-semibold text-primary">{row.size}</td>
                    <td className="px-6 py-4 text-gray-600">{row.squares}</td>
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.standard}</td>
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.waterfront}</td>
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.luxury}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Prices reflect 2026 Lake Norman market rates. Actual costs vary based on roof
              complexity, material selection, and specific site conditions. Contact us for an exact quote.
            </p>
          </div>
        </div>
      </section>

      {/* Material Cost Comparison */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Material Cost Comparison
            </h2>
            <p className="text-gray-600 text-lg">
              Compare roofing materials by cost, lifespan, and suitability for Lake Norman
              conditions to find the best value for your home.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-4">
            {materialCosts.map((item) => (
              <div key={item.material} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="grid md:grid-cols-4 gap-4 items-start">
                  <div className="md:col-span-1">
                    <h3 className="font-bold text-primary text-lg">{item.material}</h3>
                    <p className="text-accent font-semibold mt-1">{item.costPerSqFt}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Lifespan</p>
                    <p className="font-medium text-gray-700">{item.lifespan}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Best For</p>
                    <p className="font-medium text-gray-700">{item.bestFor}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">LKN Recommendation</p>
                    <p className="text-gray-600 text-sm">{item.recommendation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factors Affecting Cost */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                What Affects Lake Norman Roofing Costs?
              </h2>
              <p className="text-gray-600 mb-8">
                Several factors unique to the Lake Norman area influence your final roofing cost.
                Understanding these helps you budget accurately and avoid surprises.
              </p>
              <div className="space-y-5">
                {costFactors.map((factor) => (
                  <div key={factor.title} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-dark mb-1">{factor.title}</h3>
                      <p className="text-gray-600 text-sm">{factor.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.houses.house2}
                alt="Lake Norman home roof replacement - factors affecting cost"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">{SITE_CONFIG.roofsInstalled}+</div>
                <div className="text-sm text-white/80">Roofs Installed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Per-City Pricing */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Costs by Lake Norman Community
            </h2>
            <p className="text-gray-600 text-lg">
              Average costs vary by community based on home sizes, waterfront proximity,
              and local building requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityPricing.map((city) => (
              <Link
                key={city.slug}
                href={`/roofing-${city.slug}`}
                className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {city.name}
                  </h3>
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <p className="text-accent font-bold text-lg mb-2">{city.avgCost}</p>
                <p className="text-gray-600 text-sm">{city.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Why Best Roofing Now Delivers the Best Value on Lake Norman
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              The lowest price is not always the best value. Here is why Lake Norman
              homeowners choose Best Roofing Now for their roofing investment.
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Manufacturer Certified</h3>
              <p className="text-gray-600 text-sm">
                GAF and CertainTeed certified means enhanced warranties up to 50 years.
                Lesser contractors cannot offer these warranty levels.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Insurance Savings</h3>
              <p className="text-gray-600 text-sm">
                Class 4 impact-resistant installations save 10-28% on annual premiums.
                Over 10 years, that is $5,000-$20,000+ in savings.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Home Value Impact</h3>
              <p className="text-gray-600 text-sm">
                A quality roof replacement recoups 60-70% in home value. On LKN waterfront
                properties, premium roofing can add $15K-$30K to resale value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">Roofing Cost FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Common questions from Lake Norman homeowners about roofing costs,
              financing, and getting the best value.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {costFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-primary mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            More Lake Norman Roofing Resources
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/roofing-lake-norman-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Lake Norman Roofing</h3>
              <p className="text-sm text-gray-600">Complete LKN roofing hub</p>
            </Link>
            <Link href="/lake-norman-waterfront-roofing" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Waterfront Roofing</h3>
              <p className="text-sm text-gray-600">Lakefront home specialists</p>
            </Link>
            <Link href="/roofing-cornelius-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Cornelius NC</h3>
              <p className="text-sm text-gray-600">Peninsula &amp; Jetton pricing</p>
            </Link>
            <Link href="/roofing-mooresville-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Mooresville NC</h3>
              <p className="text-sm text-gray-600">Race City roofing costs</p>
            </Link>
            <Link href="/roofing-davidson-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Davidson NC</h3>
              <p className="text-sm text-gray-600">Historic home pricing</p>
            </Link>
            <Link href="/roofing-huntersville-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Huntersville NC</h3>
              <p className="text-sm text-gray-600">Suburban home costs</p>
            </Link>
            <Link href="/roofing-denver-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Denver NC</h3>
              <p className="text-sm text-gray-600">Western shore pricing</p>
            </Link>
            <Link href="/best-roofer-lake-norman-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Best Roofer LKN</h3>
              <p className="text-sm text-gray-600">Top rated on Lake Norman</p>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="location"
        city="Mooresville"
        slug="lake-norman-roofing-costs-2026"
        count={4}
        title="Recent Lake Norman Roofing Projects"
        subtitle="Browse completed roofing projects from the Lake Norman area with transparent pricing by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/lake-norman-roofing-costs-2026`}
      />

      <CityGeoSection
        city="Lake Norman"
        state="NC"
        citySlug="lake-norman"
        service="Roofing"
      />

      {/* Lake Norman Guide Cross-Link */}
      <section className="py-8 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray mb-4">Want to learn everything about roofing on Lake Norman?</p>
            <Link href="/lake-norman-roofing-guide" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-lg">
              Read The Complete Lake Norman Roofing Guide (2026) <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <LKNNeighborhoodGrid currentSlug="lake-norman-roofing-costs-2026" />
      <CTASection
        title="Get Your Free Lake Norman Roofing Estimate"
        subtitle="Transparent pricing with no hidden fees. Contact Lake Norman's trusted roofers for a detailed, no-obligation estimate for your home."
      />
    </>
  );
}
