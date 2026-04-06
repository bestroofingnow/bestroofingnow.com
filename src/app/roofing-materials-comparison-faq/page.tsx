import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Layers,
  Phone,
  ArrowRight,
  HelpCircle,
  CheckCircle,
  Shield,
  Star,
  Palette,
  Award,
  Zap,
  ThermometerSun,
  Droplets,
  Home,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import {
  BreadcrumbSchema,
  FAQSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { CitationSection } from '@/components/seo/CitationBlock';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roofing Materials Comparison FAQ | 18 Questions Answered | Charlotte NC',
  description:
    'Compare roofing materials: metal vs shingles, GAF vs CertainTeed, best colors, and more. 18 expert answers about roofing material selection for Charlotte NC homes from Best Roofing Now.',
  keywords: [
    'best roofing material',
    'roofing material comparison',
    'metal vs shingles',
    'metal roof vs asphalt shingles',
    'best roofing material for Charlotte NC',
    'GAF vs CertainTeed',
    'Owens Corning shingles review',
    'roofing material pros and cons',
    'best shingle color',
    'architectural shingles vs 3-tab',
    'metal roofing pros cons',
    'standing seam vs metal shingles',
    'best roof for hurricane wind',
    'energy efficient roofing Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-materials-comparison-faq`,
  },
  openGraph: {
    title: 'Roofing Materials Comparison FAQ | 18 Questions Answered',
    description:
      'Expert comparison of roofing materials including metal vs shingles, brand comparisons, popular colors, and the best materials for Charlotte NC climate.',
    url: `${SITE_CONFIG.url}/roofing-materials-comparison-faq`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.metalRoof,
        width: 1200,
        height: 630,
        alt: 'Roofing materials comparison FAQ - Best Roofing Now Charlotte NC',
      },
    ],
  },
};

const materialFAQs = [
  {
    question: 'What is the best roofing material for Charlotte NC?',
    answer:
      'The best roofing material for Charlotte NC depends on your budget, goals, and home style. Architectural asphalt shingles are the most popular choice (80% of Charlotte homes) offering excellent value at $4.50-$7.00 per square foot with 25-30 year lifespans. Standing seam metal is the best long-term investment at $12-$18 per square foot with 50-70 year lifespans and superior storm resistance. For Charlotte\'s climate with hot summers, heavy rain, and hailstorms, we recommend algae-resistant architectural shingles for most homeowners and metal for those seeking maximum longevity.',
  },
  {
    question: 'What is the difference between metal roofing and asphalt shingles?',
    answer:
      'Metal roofing costs 2 to 3 times more upfront ($12-$18/sqft vs $4.50-$7.00/sqft) but lasts 2 to 3 times longer (50-70 years vs 25-30 years). Metal roofs resist wind up to 140 mph compared to 110-130 mph for shingles. Metal reflects solar heat, reducing cooling costs by 25-40%, while shingles absorb heat. Metal is virtually maintenance-free, while shingles need periodic inspection and repair. Metal roofs do not grow algae or moss. For Charlotte homeowners planning to stay in their home long-term, metal roofing often has a lower lifetime cost despite the higher initial investment.',
  },
  {
    question: 'What are the pros and cons of metal roofing?',
    answer:
      'Pros of metal roofing: 50-70 year lifespan, 140 mph wind resistance, 25-40% energy savings from heat reflection, no moss or algae growth, lightweight (reduces structural load), fully recyclable at end of life, and potential insurance discounts. Cons of metal roofing: higher upfront cost ($24,000-$36,000 for an average Charlotte home), potential for oil canning (cosmetic waviness), requires specialized installation, rain noise (mitigated by underlayment), and limited contractor availability. Metal roofing is the fastest-growing segment in Charlotte residential roofing.',
  },
  {
    question: 'What is the difference between architectural shingles and 3-tab shingles?',
    answer:
      'Architectural (dimensional) shingles are thicker, heavier, and more durable than 3-tab shingles. Architectural shingles have a layered, textured appearance that mimics wood shake or slate, while 3-tab shingles are flat with a uniform look. Architectural shingles last 25-30 years vs 15-20 years for 3-tab. They resist wind up to 110-130 mph vs 60-70 mph for 3-tab. Architectural shingles cost $4.50-$7.00/sqft vs $3.50-$5.50/sqft for 3-tab. Over 80% of Charlotte homeowners choose architectural shingles for the superior appearance, durability, and warranty coverage.',
  },
  {
    question: 'What is standing seam metal roofing?',
    answer:
      'Standing seam metal roofing uses long, vertical metal panels joined by raised seams that stand 1 to 2 inches above the flat panel surface. The seams create a distinctive, clean look and serve as the primary weatherproofing mechanism because fasteners are hidden beneath the seam rather than exposed to the elements. Standing seam is available in steel, aluminum, copper, and zinc. In Charlotte NC, Galvalume steel is the most popular choice at $14-$16 per square foot installed. Standing seam roofs last 50-70 years and are the premium metal roofing option for residential homes.',
  },
  {
    question: 'Is GAF or CertainTeed better for shingles?',
    answer:
      'Both GAF and CertainTeed are premium shingle manufacturers, and the best choice depends on your priorities. GAF Timberline HDZ is the most popular shingle in America, offering excellent wind resistance (130 mph) and a strong warranty program through GAF-certified contractors. CertainTeed Landmark offers slightly better color options and a thicker profile for a more dimensional appearance. Both brands offer 25-30 year warranties. Best Roofing Now is certified by both manufacturers, giving Charlotte homeowners access to extended warranty coverage from either brand.',
  },
  {
    question: 'How does Owens Corning compare to GAF and CertainTeed?',
    answer:
      'Owens Corning Duration shingles are a strong competitor to GAF Timberline and CertainTeed Landmark. Owens Corning uses a patented SureNail technology that provides superior wind resistance (130 mph). Their TruDefinition Duration line offers vibrant color blends. Warranty coverage is comparable to GAF and CertainTeed at 25-30 years. Owens Corning shingles cost $5.00-$7.50 per square foot, slightly higher than GAF. All three brands perform well in Charlotte NC. The most important factor is proper installation by a certified contractor, not brand selection alone.',
  },
  {
    question: 'What are the best shingle colors for Charlotte NC homes?',
    answer:
      'The most popular shingle colors in Charlotte NC are Weathered Wood (warm gray-brown), Charcoal (deep gray), Onyx Black (classic black), Pewter Gray (medium gray), and Barkwood (brown blend). Lighter colors like Pewter Gray and Weathered Wood reflect more heat, reducing cooling costs by 5-15% in Charlotte summers. Darker colors like Charcoal and Onyx Black provide striking contrast but absorb more heat. Consider your home\'s exterior color, neighborhood style, and HOA requirements when choosing. Bring home sample shingles and view them in natural daylight against your siding.',
  },
  {
    question: 'Does shingle color affect energy efficiency?',
    answer:
      'Yes, shingle color significantly affects energy efficiency in Charlotte NC. Light-colored shingles (white, light gray, tan) reflect up to 25% more solar radiation than dark shingles, reducing attic temperatures by 20-40 degrees Fahrenheit in summer. This can lower cooling costs by 10-15%. ENERGY STAR-rated cool roof shingles use special reflective granules to maximize heat reflection regardless of color. In Charlotte where summer AC costs are significant, choosing a lighter or ENERGY STAR-rated shingle can save $100-$300 per year on energy bills.',
  },
  {
    question: 'What is the best roofing material for hail protection?',
    answer:
      'The best roofing materials for hail protection are Class 4 impact-resistant shingles (UL 2218 rated) and metal roofing. Class 4 IR shingles can withstand 2-inch hailstones and qualify for 10-28% insurance discounts in Charlotte NC. Popular IR options include GAF Armor Shield II, CertainTeed Highland Slate, and Owens Corning Berkshire. Metal roofing resists hail damage better than any shingle because dents do not compromise waterproofing. For Charlotte homeowners in hail-prone areas, IR shingles offer the best balance of cost and protection.',
  },
  {
    question: 'What is the best roofing material for high winds?',
    answer:
      'For high wind resistance in Charlotte NC (which experiences severe thunderstorms and occasional hurricane remnants), the top options are: standing seam metal at 140+ mph, metal shingle panels at 120+ mph, architectural shingles at 110-130 mph, and tile roofing at 125+ mph. GAF Timberline HDZ shingles carry a 130 mph wind warranty. Proper installation with 6 nails per shingle (instead of the standard 4) further improves wind resistance. Charlotte building code requires roofing materials rated for at least 90 mph wind speeds.',
  },
  {
    question: 'Is a tile roof worth it in Charlotte NC?',
    answer:
      'Tile roofing is worth it for Charlotte homeowners seeking 50-100 year longevity and distinctive Mediterranean or Spanish-style curb appeal. Tile costs $15-$30 per square foot installed ($30,000-$60,000 for an average home), making it 3-4 times more expensive than shingles. Tile excels in heat resistance and fire protection. However, tile is heavy (800-1,000 lbs per square vs 300 lbs for shingles), requiring structural reinforcement. Tile can crack in severe hailstorms. For most Charlotte homeowners, architectural shingles or metal offer better value unless the aesthetic is a priority.',
  },
  {
    question: 'What is synthetic slate roofing?',
    answer:
      'Synthetic slate roofing is engineered from recycled rubber and plastic polymers to replicate the look of natural slate at 40-60% lower cost. Synthetic slate costs $10-$18 per square foot installed vs $20-$40 for natural slate. It weighs 70-80% less than real slate, eliminating the need for structural reinforcement. Synthetic slate lasts 40-60 years, resists impact and wind, and comes with 30-50 year warranties. Popular brands include DaVinci Roofscapes and Brava Roof Tile. It is an excellent option for Charlotte homeowners who want the slate look without the slate weight and price.',
  },
  {
    question: 'What roofing materials qualify for insurance discounts in Charlotte?',
    answer:
      'Roofing materials that qualify for insurance premium discounts in Charlotte NC include: Class 4 impact-resistant shingles (10-28% discount), standing seam metal roofing (5-15% discount), and UL Class A fire-rated materials (2-5% discount). Specific products include GAF Armor Shield II, CertainTeed Highland Slate IR, and Owens Corning Berkshire. Metal roofs qualify for both wind and impact discounts. Contact your insurance provider before choosing materials to confirm available discounts, which typically save Charlotte homeowners $200-$800 per year on premiums.',
  },
  {
    question: 'What is the most eco-friendly roofing material?',
    answer:
      'The most eco-friendly roofing materials are metal roofing (100% recyclable, contains 25-95% recycled content, lasts 50-70 years), recycled rubber/plastic shingles (made from post-consumer waste), clay tile (natural material, 50-100 year lifespan), and cool roof shingles (ENERGY STAR rated, reduce urban heat island effect). Asphalt shingles are the least eco-friendly, contributing 11 million tons to US landfills annually. In Charlotte NC, metal roofing is the most practical eco-friendly choice, combining recyclability, energy efficiency (25-40% cooling savings), and extreme longevity.',
  },
  {
    question: 'What is the lightest roofing material?',
    answer:
      'Metal roofing is the lightest roofing material at 50-150 pounds per roofing square (100 square feet). Asphalt shingles weigh 200-350 pounds per square. Wood shakes weigh 350-450 pounds per square. Concrete tile weighs 800-1,000 pounds per square. Natural slate weighs 1,000-1,500 pounds per square. Lightweight roofing is important for older Charlotte homes that may not have been engineered for heavy materials. Metal roofing can often be installed over existing shingles without structural concerns due to its low weight.',
  },
  {
    question: 'What is the best roofing material for a flat or low-slope roof?',
    answer:
      'The best materials for flat or low-slope roofs (under 2:12 pitch) in Charlotte NC are TPO membrane ($5.50-$8.50/sqft, 20-30 year lifespan, best for energy efficiency), EPDM rubber ($4-$7/sqft, 20-25 year lifespan, best for value), modified bitumen ($4-$8/sqft, 15-20 years, best for foot traffic), and standing seam metal ($12-$18/sqft, 50+ years, best for longevity). Standard asphalt shingles should not be used on roofs below 2:12 pitch. TPO is the most popular choice for Charlotte commercial and residential flat roofs due to its heat-reflective surface.',
  },
  {
    question: 'Can I put a metal roof over existing shingles?',
    answer:
      'Yes, in most cases a metal roof can be installed over one layer of existing asphalt shingles in Charlotte NC. This approach saves $1,000-$3,000 in tear-off and disposal costs and reduces installation time by 1-2 days. Requirements include: only one existing layer of shingles (not two), the existing decking must be structurally sound, local building codes must permit it, and the manufacturer warranty must allow it. A professional inspection is needed to verify these conditions. Installing over existing shingles does not void most metal roof warranties when done correctly.',
  },
];

const citationFacts = [
  {
    topic: 'best roofing material Charlotte NC',
    content:
      'Architectural asphalt shingles are the most popular roofing material in Charlotte NC, chosen by over 80% of homeowners for their balance of cost ($4.50-$7.00/sqft), durability (25-30 year lifespan), and wind resistance (110-130 mph). Standing seam metal roofing is the fastest-growing segment, offering 50-70 year lifespans and 25-40% energy savings through solar heat reflection.',
    source: 'Best Roofing Now - Charlotte NC material selection data, 2026',
  },
  {
    topic: 'metal vs shingles comparison',
    content:
      'Metal roofing costs 2-3 times more than asphalt shingles upfront but lasts 2-3 times longer. A metal roof on a typical Charlotte NC home costs $24,000-$36,000 vs $8,000-$15,000 for shingles. Metal resists 140 mph winds vs 110-130 mph for shingles and saves 25-40% on cooling costs. Over a 60-year period, metal roofing has a lower total cost of ownership than two shingle replacements.',
    source: 'Best Roofing Now - Charlotte NC material cost analysis, 2026',
  },
  {
    topic: 'GAF vs CertainTeed shingles',
    content:
      'GAF Timberline HDZ and CertainTeed Landmark are the two most popular architectural shingles in Charlotte NC. GAF leads in market share and offers a robust 130 mph wind warranty. CertainTeed offers more color options and a slightly thicker profile. Both provide comparable 25-30 year warranties through certified contractors. Installation quality matters more than brand selection for long-term performance.',
    source: 'Best Roofing Now - Charlotte NC shingle brand analysis, 2026',
  },
  {
    topic: 'impact resistant shingles Charlotte NC insurance discount',
    content:
      'Class 4 impact-resistant shingles (UL 2218 rated) qualify for 10-28% insurance premium discounts in Charlotte NC, saving homeowners $200-$800 per year. Popular IR products include GAF Armor Shield II, CertainTeed Highland Slate, and Owens Corning Berkshire. Charlotte averages 1-3 significant hailstorms annually, making IR shingles a practical investment that pays for itself through insurance savings within 3-5 years.',
    source: 'Best Roofing Now - Charlotte NC insurance discount data, 2026',
  },
];

export default function RoofingMaterialsComparisonFAQPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'FAQ', url: `${SITE_CONFIG.url}/faq` },
          { name: 'Roofing Materials Comparison FAQ', url: `${SITE_CONFIG.url}/roofing-materials-comparison-faq` },
        ]}
      />
      <FAQSchema faqs={materialFAQs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-materials-comparison-faq`}
        pageName="Roofing Materials Comparison FAQ - Charlotte NC"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'What is the best roofing material?',
            answer:
              'Architectural asphalt shingles are the best roofing material for most Charlotte NC homeowners, offering 25-30 year lifespan at $4.50-$7.00/sqft. For maximum longevity, standing seam metal lasts 50-70 years at $12-$18/sqft.',
            speakableAnswer:
              'Architectural shingles are the most popular choice for Charlotte homes, lasting 25 to 30 years. Metal roofs last 50 to 70 years. Call Best Roofing Now at 704-605-6047 for expert material guidance.',
          },
          {
            question: 'Is metal roofing better than shingles?',
            answer:
              'Metal roofing lasts 2-3 times longer than shingles (50-70 vs 25-30 years), resists higher winds (140 vs 130 mph), and saves 25-40% on cooling costs. However, it costs 2-3 times more upfront. Both are excellent choices depending on your budget.',
            speakableAnswer:
              'Metal roofs last 50 to 70 years and resist 140 mile per hour winds. Shingles cost less upfront but last 25 to 30 years. Call 704-605-6047 for a free comparison.',
          },
          {
            question: 'What shingle brand is best?',
            answer:
              'GAF, CertainTeed, and Owens Corning are all premium shingle brands with comparable quality and 25-30 year warranties. GAF Timberline HDZ is the most popular. Proper installation by a certified contractor matters more than brand.',
            speakableAnswer:
              'GAF, CertainTeed, and Owens Corning all make excellent shingles. GAF Timberline is the most popular. Call Best Roofing Now at 704-605-6047 for expert brand guidance.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.metalRoof}
            alt="Roofing materials comparison guide - metal vs shingles Charlotte NC by Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Layers className="w-4 h-4" />
              <span className="text-sm font-semibold">Roofing Materials FAQ</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Materials Comparison: <br className="hidden md:block" />
              <span className="text-accent-light">18 Questions Answered</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Metal vs Shingles, Brand Comparisons, Colors &amp; the Best Material for Charlotte NC
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Choosing the right roofing material is the most important decision in your roof replacement. This guide answers 18 expert questions about material performance, brand comparisons, color selection, and which materials work best for Charlotte NC&apos;s climate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Layers className="w-5 h-5" aria-hidden="true" />}
              >
                Get Material Recommendation
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
                {SITE_CONFIG.googleRating} Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                GAF &amp; CertainTeed Certified
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                {SITE_CONFIG.customerCount}+ Projects Completed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white py-8 border-b border-gray-100 sticky top-0 z-20">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#comparison-table" className="inline-flex items-center gap-1.5 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors text-sm">
              <Layers className="w-4 h-4" /> Material Comparison
            </a>
            <a href="#brands" className="inline-flex items-center gap-1.5 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors text-sm">
              <Award className="w-4 h-4" /> Brand Comparison
            </a>
            <a href="#colors" className="inline-flex items-center gap-1.5 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors text-sm">
              <Palette className="w-4 h-4" /> Popular Colors
            </a>
            <a href="#all-faqs" className="inline-flex items-center gap-1.5 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors text-sm">
              <HelpCircle className="w-4 h-4" /> All 18 FAQs
            </a>
          </div>
        </div>
      </section>

      {/* Material Comparison Table */}
      <section id="comparison-table" className="section bg-white scroll-mt-32">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              Roofing Material Comparison Table
            </h2>
            <p className="text-gray text-lg text-center mb-8">
              Side-by-side comparison of every major roofing material available for Charlotte NC homes.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-3 py-3 rounded-tl-lg">Material</th>
                    <th className="px-3 py-3">Cost/SqFt</th>
                    <th className="px-3 py-3">Lifespan</th>
                    <th className="px-3 py-3">Wind</th>
                    <th className="px-3 py-3">Energy</th>
                    <th className="px-3 py-3">Weight</th>
                    <th className="px-3 py-3 rounded-tr-lg">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-dark">
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3 font-semibold">3-Tab Shingles</td>
                    <td className="px-3 py-3">$3.50-$5.50</td>
                    <td className="px-3 py-3">15-20 yrs</td>
                    <td className="px-3 py-3">60-70 mph</td>
                    <td className="px-3 py-3">Low</td>
                    <td className="px-3 py-3">200 lbs/sq</td>
                    <td className="px-3 py-3">Budget</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-light/50">
                    <td className="px-3 py-3 font-semibold">Architectural Shingles</td>
                    <td className="px-3 py-3">$4.50-$7.00</td>
                    <td className="px-3 py-3">25-30 yrs</td>
                    <td className="px-3 py-3">110-130 mph</td>
                    <td className="px-3 py-3">Medium</td>
                    <td className="px-3 py-3">300 lbs/sq</td>
                    <td className="px-3 py-3">Most homes</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3 font-semibold">IR Shingles (Class 4)</td>
                    <td className="px-3 py-3">$6-$9</td>
                    <td className="px-3 py-3">25-30 yrs</td>
                    <td className="px-3 py-3">110-130 mph</td>
                    <td className="px-3 py-3">Medium</td>
                    <td className="px-3 py-3">350 lbs/sq</td>
                    <td className="px-3 py-3">Hail zones</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-light/50">
                    <td className="px-3 py-3 font-semibold">Standing Seam Metal</td>
                    <td className="px-3 py-3">$12-$18</td>
                    <td className="px-3 py-3">50-70 yrs</td>
                    <td className="px-3 py-3">140+ mph</td>
                    <td className="px-3 py-3">Excellent</td>
                    <td className="px-3 py-3">100 lbs/sq</td>
                    <td className="px-3 py-3">Long-term</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3 font-semibold">Metal Shingle Panels</td>
                    <td className="px-3 py-3">$10-$14</td>
                    <td className="px-3 py-3">40-60 yrs</td>
                    <td className="px-3 py-3">120+ mph</td>
                    <td className="px-3 py-3">Good</td>
                    <td className="px-3 py-3">75 lbs/sq</td>
                    <td className="px-3 py-3">Shingle look</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-light/50">
                    <td className="px-3 py-3 font-semibold">Concrete Tile</td>
                    <td className="px-3 py-3">$15-$25</td>
                    <td className="px-3 py-3">50-75 yrs</td>
                    <td className="px-3 py-3">125+ mph</td>
                    <td className="px-3 py-3">Good</td>
                    <td className="px-3 py-3">900 lbs/sq</td>
                    <td className="px-3 py-3">Mediterranean</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3 font-semibold">Clay Tile</td>
                    <td className="px-3 py-3">$20-$30</td>
                    <td className="px-3 py-3">75-100+ yrs</td>
                    <td className="px-3 py-3">125+ mph</td>
                    <td className="px-3 py-3">Good</td>
                    <td className="px-3 py-3">1000 lbs/sq</td>
                    <td className="px-3 py-3">Premium</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-light/50">
                    <td className="px-3 py-3 font-semibold">Synthetic Slate</td>
                    <td className="px-3 py-3">$10-$18</td>
                    <td className="px-3 py-3">40-60 yrs</td>
                    <td className="px-3 py-3">110+ mph</td>
                    <td className="px-3 py-3">Medium</td>
                    <td className="px-3 py-3">200 lbs/sq</td>
                    <td className="px-3 py-3">Slate look</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3 font-semibold">Natural Slate</td>
                    <td className="px-3 py-3">$20-$40</td>
                    <td className="px-3 py-3">75-200 yrs</td>
                    <td className="px-3 py-3">110+ mph</td>
                    <td className="px-3 py-3">Good</td>
                    <td className="px-3 py-3">1200 lbs/sq</td>
                    <td className="px-3 py-3">Luxury</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 font-semibold">TPO (Flat Roof)</td>
                    <td className="px-3 py-3">$5.50-$8.50</td>
                    <td className="px-3 py-3">20-30 yrs</td>
                    <td className="px-3 py-3">Adhered</td>
                    <td className="px-3 py-3">Excellent</td>
                    <td className="px-3 py-3">50 lbs/sq</td>
                    <td className="px-3 py-3">Flat/commercial</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray mt-4 text-center">
              * Weight listed per roofing square (100 sq ft). Prices include materials and installation in Charlotte NC, 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Comparison Section */}
      <section id="brands" className="section bg-light scroll-mt-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              Top Shingle Brand Comparison
            </h2>
            <p className="text-gray text-lg text-center mb-8">
              Charlotte NC&apos;s three most popular shingle brands compared head-to-head.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-center mb-4">
                  <Award className="w-10 h-10 text-primary mx-auto mb-2" />
                  <h3 className="text-xl font-bold text-dark">GAF</h3>
                  <span className="text-sm text-accent font-semibold">Most Popular in US</span>
                </div>
                <ul className="space-y-2 text-sm text-gray">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Timberline HDZ flagship</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> 130 mph wind warranty</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> StainGuard Plus algae</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> $4.50-$7.00/sqft</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> 25-30 year warranty</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-center mb-4">
                  <Award className="w-10 h-10 text-primary mx-auto mb-2" />
                  <h3 className="text-xl font-bold text-dark">CertainTeed</h3>
                  <span className="text-sm text-accent font-semibold">Best Color Range</span>
                </div>
                <ul className="space-y-2 text-sm text-gray">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Landmark flagship</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> 130 mph wind warranty</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> StreakFighter algae</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> $5.00-$7.50/sqft</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> 25-30 year warranty</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-center mb-4">
                  <Award className="w-10 h-10 text-primary mx-auto mb-2" />
                  <h3 className="text-xl font-bold text-dark">Owens Corning</h3>
                  <span className="text-sm text-accent font-semibold">Best Nail Technology</span>
                </div>
                <ul className="space-y-2 text-sm text-gray">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Duration flagship</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> 130 mph SureNail</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> TruDefinition colors</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> $5.00-$7.50/sqft</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> 25-30 year warranty</li>
                </ul>
              </div>
            </div>
            <p className="text-center mt-6 text-gray">
              Best Roofing Now is certified by GAF and CertainTeed, providing extended warranty coverage for Charlotte homeowners.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Colors Section */}
      <section id="colors" className="section bg-white scroll-mt-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              Most Popular Shingle Colors in Charlotte NC
            </h2>
            <p className="text-gray text-lg text-center mb-8">
              The top 5 shingle colors Charlotte homeowners choose, with energy efficiency and style notes.
            </p>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { name: 'Weathered Wood', hex: '#8B7D6B', note: 'Warm gray-brown, most popular', energy: 'Good' },
                { name: 'Charcoal', hex: '#4A4A4A', note: 'Deep gray, classic look', energy: 'Fair' },
                { name: 'Onyx Black', hex: '#2C2C2C', note: 'Bold, striking contrast', energy: 'Low' },
                { name: 'Pewter Gray', hex: '#96968C', note: 'Medium gray, versatile', energy: 'Very Good' },
                { name: 'Barkwood', hex: '#7A6652', note: 'Rich brown blend', energy: 'Good' },
              ].map((color, index) => (
                <div key={index} className="text-center">
                  <div
                    className="w-full h-20 rounded-lg mb-3 shadow-inner"
                    style={{ backgroundColor: color.hex }}
                  />
                  <h3 className="font-bold text-dark text-sm">{color.name}</h3>
                  <p className="text-xs text-gray mt-1">{color.note}</p>
                  <span className="text-xs font-semibold text-primary mt-1 block">
                    Energy: {color.energy}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray mt-6 text-center">
              Lighter colors reflect more heat, reducing summer cooling costs by 5-15% in Charlotte NC.
              ENERGY STAR-rated cool roof shingles maximize efficiency regardless of color.
            </p>
          </div>
        </div>
      </section>

      {/* All 18 FAQs */}
      <section id="all-faqs" className="section bg-light scroll-mt-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              All 18 Roofing Materials Questions
            </h2>
            <p className="text-gray text-lg text-center mb-8">
              Expert answers about every roofing material option available for Charlotte NC homes.
            </p>
            <div className="space-y-4">
              {materialFAQs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition group"
                >
                  <summary className="p-6 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="font-bold text-dark pr-8">{faq.question}</span>
                      <ArrowRight className="w-5 h-5 text-gray ml-auto flex-shrink-0 transform group-open:rotate-90 transition-transform" />
                    </div>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray pl-8">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Citation Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <CitationSection
              heading="Roofing Material Facts &mdash; Charlotte NC"
              citations={citationFacts}
            />
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
              Related Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/metal-roofing-charlotte-nc"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition group"
              >
                <Shield className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">
                  Metal Roofing Guide
                </h3>
                <p className="text-gray text-sm">
                  Complete guide to metal roofing in Charlotte NC
                </p>
              </Link>
              <Link
                href="/gaf-vs-certainteed-shingles-charlotte-nc"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition group"
              >
                <Award className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">
                  GAF vs CertainTeed
                </h3>
                <p className="text-gray text-sm">
                  Detailed brand comparison for Charlotte homes
                </p>
              </Link>
              <Link
                href="/faq"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition group"
              >
                <HelpCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">
                  Main FAQ Hub
                </h3>
                <p className="text-gray text-sm">
                  All roofing questions organized by topic
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Help Choosing the Right Material?"
        subtitle="Get a free consultation with our certified roofing experts. We will assess your home, discuss your goals, and recommend the best material for your budget and Charlotte NC climate conditions."
      />
    </>
  );
}
