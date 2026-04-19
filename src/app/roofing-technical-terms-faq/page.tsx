import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
import Link from 'next/link';
import {
  BookOpen,
  Phone,
  ArrowRight,
  HelpCircle,
  CheckCircle,
  Shield,
  Star,
  Info,
  FileText,
  Layers,
  Wrench,
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
  title: 'Roofing Terms Explained FAQ | Technical Glossary & Warranty Guide | Charlotte NC',
  description:
    'Roofing terms explained in plain language. Understand underlayment, flashing, drip edge, ridge cap, soffit vents, and more. 13 technical FAQs plus glossary for Charlotte NC homeowners from Best Roofing Now.',
  keywords: [
    'roofing terms explained',
    'roofing glossary',
    'what is roof underlayment',
    'what is roof flashing',
    'roofing technical terms',
    'roof warranty explained',
    'what is drip edge',
    'what is ridge cap',
    'soffit vent purpose',
    'roof valley definition',
    'roof cricket definition',
    'roofing terminology guide',
    'roofing jargon explained Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-technical-terms-faq`,
  },
  openGraph: {
    title: 'Roofing Terms Explained FAQ | Technical Glossary & Warranty Guide',
    description:
      'Plain-language explanations of roofing technical terms, warranty types, and building code requirements. 13 FAQs plus illustrated glossary for Charlotte NC homeowners.',
    url: `${SITE_CONFIG.url}/roofing-technical-terms-faq`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero5,
        width: 1200,
        height: 630,
        alt: 'Roofing terms explained FAQ - Best Roofing Now Charlotte NC',
      },
    ],
  },
};

const technicalFAQs = [
  {
    question: 'What is roof underlayment and why does it matter?',
    answer:
      'Roof underlayment is a waterproof or water-resistant barrier installed directly on top of your roof deck (plywood or OSB), beneath the shingles or other roofing material. It serves as a secondary line of defense against water if shingles are damaged or blown off. There are three types: felt (tar paper) at $0.10-$0.25/sqft, synthetic at $0.15-$0.50/sqft, and ice and water shield (self-adhering) at $0.50-$1.50/sqft. In Charlotte NC, building codes require ice and water shield in valleys, around penetrations, and at eaves. Quality underlayment prevents leaks, extends roof life, and is required for most manufacturer warranty coverage.',
  },
  {
    question: 'What is roof flashing and where is it needed?',
    answer:
      'Roof flashing is thin sheet metal (aluminum, galvanized steel, or copper) installed at joints and transitions where the roof meets a vertical surface or where water would otherwise penetrate. Flashing is needed at: chimneys (step flashing and counter flashing), skylights, roof-to-wall transitions, valleys where two roof planes meet, around vent pipes and HVAC curbs, and at the drip edge along eaves and rakes. Flashing failure is the number one cause of roof leaks. Quality flashing costs $5-$15 per linear foot installed. Charlotte NC building codes require flashing at all penetrations and transitions.',
  },
  {
    question: 'What is a roof warranty and what types are there?',
    answer:
      'Roof warranties come in three types. Manufacturer material warranty covers defects in the roofing material itself (typically 25-50 years for shingles, limited lifetime for metal). Manufacturer system warranty covers materials and labor when the entire roof system uses one manufacturer\'s products and is installed by a certified contractor (GAF Golden Pledge and CertainTeed SureStart Plus offer the best coverage). Workmanship warranty is provided by your roofing contractor and covers installation errors (typically 5-25 years). Best Roofing Now provides a 10-year workmanship warranty plus extended manufacturer coverage through our GAF and CertainTeed certifications.',
  },
  {
    question: 'What voids a roof warranty?',
    answer:
      'Common actions that void roof warranties include: improper installation by a non-certified contractor, installing satellite dishes or antennas that penetrate the roof without proper sealing, walking on the roof excessively or with improper footwear, power washing shingles (strips granules), failing to maintain proper attic ventilation, neglecting routine maintenance and inspection, having unlicensed contractors make repairs, installing incompatible materials (mixing manufacturer systems), and making unauthorized modifications. To protect your warranty, always use a certified contractor for any roof work, keep maintenance records, and schedule regular professional inspections.',
  },
  {
    question: 'What is a roofing square?',
    answer:
      'A roofing square is the standard unit of measurement in the roofing industry, equal to 100 square feet of roof area. Contractors price materials and labor per square. For example, if a roofer quotes $350 per square for architectural shingles, that means $350 for every 100 square feet. A typical Charlotte NC home has 20-25 squares (2,000-2,500 square feet of roof area). To calculate your roof squares, multiply the footprint of your home by a pitch multiplier (1.0 for flat to 1.4 for steep). Three bundles of standard shingles cover one square.',
  },
  {
    question: 'What is roof pitch and why does it matter?',
    answer:
      'Roof pitch is the slope of your roof expressed as a ratio of vertical rise to horizontal run. A 6:12 pitch means the roof rises 6 inches for every 12 inches of horizontal run. Pitch matters because it determines: which roofing materials can be used (shingles require minimum 2:12, some materials require 4:12), labor costs (steeper roofs require more safety equipment and take longer), drainage performance (steeper slopes shed water faster), and attic space. Most Charlotte NC residential roofs have pitches between 4:12 and 8:12. Steeper pitches above 8:12 cost 15-25% more to roof due to increased labor difficulty.',
  },
  {
    question: 'What is attic ventilation and why is it important?',
    answer:
      'Attic ventilation is the system of intake vents (soffit vents) and exhaust vents (ridge vents, gable vents, or turbines) that allows air to flow through your attic space. Proper ventilation is critical because it: removes trapped heat in summer (reducing cooling costs by 10-15%), prevents moisture buildup that causes mold, rot, and ice dams, extends shingle lifespan by preventing heat-related deterioration, and is required by building codes and for warranty coverage. The standard ratio is 1 square foot of ventilation per 150 square feet of attic floor. Charlotte NC\'s hot, humid climate makes adequate ventilation especially important.',
  },
  {
    question: 'What does it mean when a roofer says they need to replace the decking?',
    answer:
      'Roof decking (also called sheathing) is the flat surface of plywood or oriented strand board (OSB) panels nailed to the rafters, onto which underlayment and shingles are installed. When a roofer says decking needs replacement, it means the wood panels have deteriorated from water damage, rot, or age and can no longer hold nails or support the roofing material safely. Decking replacement adds $2-$5 per square foot (or $1,000-$4,000 for an average Charlotte home) to the project cost. Standard decking is 7/16-inch OSB or 1/2-inch plywood. Your roofer cannot fully assess decking condition until the old roof is removed.',
  },
  {
    question: 'What is the difference between a roof tear-off and an overlay?',
    answer:
      'A tear-off involves removing all existing roofing material down to the decking before installing new roofing. An overlay installs new shingles directly over the existing layer. Tear-offs cost $1,000-$3,000 more due to labor and disposal but are almost always recommended because they allow inspection of the decking, provide a flat surface for proper installation, weigh less (important for structural integrity), and comply with most building codes that limit roofs to two layers. Charlotte NC code allows a maximum of two shingle layers. An overlay may save money short-term but can hide damage and shortens the new roof\'s lifespan.',
  },
  {
    question: 'What is drip edge and is it required?',
    answer:
      'Drip edge is an L-shaped metal strip installed along the eaves and rakes (gable ends) of a roof. It directs water away from the fascia and into the gutters, preventing water from wicking back under the shingles and rotting the roof edge. Drip edge is required by the International Building Code and by Charlotte NC building codes for all new roof installations. It is also required for GAF and CertainTeed extended warranty coverage. Drip edge costs $1-$3 per linear foot installed. Using color-matched drip edge creates a clean, finished appearance along your roofline.',
  },
  {
    question: 'What is a ridge cap and why is it different from regular shingles?',
    answer:
      'Ridge caps are specially designed shingles that cover the peak (ridge) of your roof where two sloping planes meet. Unlike regular field shingles that lie flat, ridge caps are pre-bent or can be folded over the ridge to create a watertight seal at this vulnerable point. Ridge cap shingles are thicker and stiffer than field shingles to withstand higher wind exposure at the peak. They come in matching colors and add a finished dimensional look. Hip and ridge cap bundles cost $30-$80 each and cover 20-33 linear feet. Using manufacturer-specific ridge caps (not hand-cut field shingles) is required for full warranty coverage.',
  },
  {
    question: 'What is a soffit vent and what does it do?',
    answer:
      'Soffit vents are the intake ventilation openings located in the underside of your roof overhang (the soffit). They allow fresh outside air to enter the attic at the lowest point, which then rises and exits through the ridge vent or other exhaust vents at the top. This continuous airflow is essential for regulating attic temperature and moisture. Without proper soffit ventilation, hot air gets trapped in summer (causing shingle deterioration) and moisture builds up in winter (causing mold and rot). Soffit vents should never be blocked by insulation. In Charlotte NC, continuous soffit vents provide the best performance for our humid climate.',
  },
  {
    question: 'What is a roof valley and why does it need special attention?',
    answer:
      'A roof valley is the V-shaped channel formed where two sloping roof planes meet at an inside angle. Valleys are the highest-traffic water channels on your roof, concentrating and directing large volumes of rainwater during storms. Because of this high water volume, valleys require special waterproofing: ice and water shield membrane applied from the center 18-36 inches in each direction, metal valley flashing or woven/closed-cut shingle techniques, and careful installation to prevent water from being diverted under shingles. Valley failures are among the most common leak sources. In Charlotte NC\'s heavy rain climate (43 inches annually), proper valley construction is critical.',
  },
];

const glossaryTerms = [
  {
    term: 'Drip Edge',
    definition: 'L-shaped metal strip at roof edges that directs water into gutters and prevents wicking.',
    whyItMatters: 'Required by building code and for manufacturer warranty. Prevents fascia rot and water damage behind gutters.',
  },
  {
    term: 'Ridge Cap',
    definition: 'Specially designed shingles that seal the peak where two roof slopes meet.',
    whyItMatters: 'The ridge is the most wind-exposed area. Proper ridge caps prevent leaks and blow-offs at the peak.',
  },
  {
    term: 'Soffit Vent',
    definition: 'Air intake openings in the underside of roof overhangs that allow fresh air into the attic.',
    whyItMatters: 'Without soffit vents, trapped heat shortens shingle life and moisture causes mold. Required for balanced ventilation.',
  },
  {
    term: 'Valley',
    definition: 'The V-shaped channel where two sloping roof planes meet at an inside angle.',
    whyItMatters: 'Valleys concentrate the most water. Improper valley construction is one of the top causes of roof leaks.',
  },
  {
    term: 'Cricket',
    definition: 'A small peaked structure built behind chimneys and large penetrations to divert water.',
    whyItMatters: 'Without a cricket, water pools behind chimneys causing leaks. Required by code for chimneys wider than 30 inches.',
  },
  {
    term: 'Underlayment',
    definition: 'Waterproof barrier layer between the roof deck and shingles. Types: felt, synthetic, ice and water shield.',
    whyItMatters: 'Your second line of defense if shingles fail. Required by code and for warranty coverage.',
  },
  {
    term: 'Flashing',
    definition: 'Thin metal strips sealing joints at chimneys, walls, vents, skylights, and other transitions.',
    whyItMatters: 'Flashing failure is the number one cause of roof leaks. Quality installation is critical at every transition.',
  },
  {
    term: 'Decking / Sheathing',
    definition: 'The flat plywood or OSB panels nailed to rafters that form the base surface for roofing.',
    whyItMatters: 'Rotted decking cannot hold nails or support roofing. Replacement adds $1,000-$4,000 to projects.',
  },
  {
    term: 'Fascia',
    definition: 'The vertical board along the lower edge of the roof, behind the gutter.',
    whyItMatters: 'Fascia supports gutters and protects the roof edge. Rot here indicates moisture problems that affect the roof.',
  },
  {
    term: 'Eave',
    definition: 'The lower edge of the roof that overhangs the exterior wall.',
    whyItMatters: 'Eaves are vulnerable to ice dams and wind-driven rain. Proper drip edge and ice shield protect this area.',
  },
  {
    term: 'Rake',
    definition: 'The sloped edge of a gable roof (the diagonal edge, not the horizontal eave).',
    whyItMatters: 'Rakes are exposed to wind uplift. Drip edge and proper shingle overhang (1/2 to 3/4 inch) are required here.',
  },
  {
    term: 'Step Flashing',
    definition: 'Individual L-shaped metal pieces woven into each shingle course where a roof meets a vertical wall.',
    whyItMatters: 'Step flashing allows each shingle course to shed water independently. Improper step flashing causes wall leaks.',
  },
  {
    term: 'Pipe Boot / Plumbing Vent',
    definition: 'A rubber or metal collar that seals around plumbing vent pipes protruding through the roof.',
    whyItMatters: 'Pipe boots deteriorate faster than shingles. Cracked boots are a leading cause of pinhole leaks.',
  },
];

const citationFacts = [
  {
    topic: 'roof underlayment types and costs',
    content:
      'Roof underlayment comes in three types: asphalt-saturated felt ($0.10-$0.25/sqft), synthetic ($0.15-$0.50/sqft), and ice and water shield ($0.50-$1.50/sqft). Charlotte NC building codes require ice and water shield in roof valleys, around penetrations, and at eaves. Synthetic underlayment is the most popular choice for Charlotte homes due to its tear resistance, UV stability, and moisture barrier performance.',
    source: 'Best Roofing Now - Charlotte NC roofing specifications, 2026',
  },
  {
    topic: 'roof warranty types explained',
    content:
      'Roofing warranties include three types: manufacturer material warranty (25-50 years for defects), manufacturer system warranty (covers materials and labor when certified contractor uses full system), and contractor workmanship warranty (5-25 years for installation errors). GAF Golden Pledge and CertainTeed SureStart Plus provide the most comprehensive coverage. Best Roofing Now offers a 10-year workmanship warranty plus extended manufacturer coverage for Charlotte NC homeowners.',
    source: 'Best Roofing Now - Charlotte NC warranty data, 2026',
  },
  {
    topic: 'roof flashing and leak prevention',
    content:
      'Roof flashing failure is the number one cause of roof leaks. Flashing is required at all roof-to-wall transitions, chimneys, skylights, vent pipes, and valleys. Quality flashing installation costs $5-$15 per linear foot. Charlotte NC building codes mandate flashing at every roof penetration and transition point. Step flashing, counter flashing, and valley flashing each serve different waterproofing functions at critical roof junctions.',
    source: 'Best Roofing Now - Charlotte NC roofing best practices, 2026',
  },
];

export default function RoofingTechnicalTermsFAQPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'FAQ', url: `${SITE_CONFIG.url}/faq` },
          { name: 'Roofing Technical Terms FAQ', url: `${SITE_CONFIG.url}/roofing-technical-terms-faq` },
        ]}
      />
      <FAQSchema faqs={technicalFAQs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-technical-terms-faq`}
        pageName="Roofing Technical Terms FAQ - Charlotte NC"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'What is roof underlayment?',
            answer:
              'Roof underlayment is a waterproof barrier installed on the roof deck beneath shingles. Types include felt ($0.10-$0.25/sqft), synthetic ($0.15-$0.50/sqft), and ice and water shield ($0.50-$1.50/sqft). It provides a secondary defense against water infiltration.',
            speakableAnswer:
              'Roof underlayment is a waterproof barrier under your shingles that prevents leaks. Call Best Roofing Now at 704-605-6047 for expert roofing guidance.',
          },
          {
            question: 'What is roof flashing?',
            answer:
              'Roof flashing is thin sheet metal installed at joints where the roof meets walls, chimneys, vents, and skylights. It directs water away from these vulnerable transitions. Flashing failure is the number one cause of roof leaks.',
            speakableAnswer:
              'Roof flashing is metal that seals joints at chimneys, walls, and vents. Flashing failure is the top cause of leaks. Call 704-605-6047 for a free inspection.',
          },
          {
            question: 'What types of roof warranties are there?',
            answer:
              'There are three roof warranty types: manufacturer material warranty (25-50 years), manufacturer system warranty (full system by certified installer), and contractor workmanship warranty (5-25 years). Best Roofing Now provides 10-year workmanship plus extended manufacturer coverage.',
            speakableAnswer:
              'Roof warranties include material, system, and workmanship types. Best Roofing Now offers a 10-year workmanship warranty. Call 704-605-6047 for details.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero5}
            alt="Roofing technical terms glossary and FAQ - Charlotte NC by Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-semibold">Roofing Technical Terms FAQ</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Terms Explained: <br className="hidden md:block" />
              <span className="text-accent-light">13 FAQs + Glossary</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Underlayment, Flashing, Warranties &amp; Every Term Your Roofer Uses
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Understanding roofing terminology helps you make informed decisions, evaluate contractor proposals, and protect your investment. This guide explains 13 technical concepts in plain language and includes an illustrated glossary of the terms Charlotte NC homeowners encounter most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Get Expert Consultation
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
                <Shield className="w-5 h-5 text-accent-light" />
                BBB {SITE_CONFIG.bbbRating} Rated
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Plain-Language Estimates
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white py-8 border-b border-gray-100 sticky top-0 z-20">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#glossary" className="inline-flex items-center gap-1.5 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors text-sm">
              <BookOpen className="w-4 h-4" /> Glossary
            </a>
            <a href="#warranties" className="inline-flex items-center gap-1.5 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors text-sm">
              <FileText className="w-4 h-4" /> Warranties
            </a>
            <a href="#all-faqs" className="inline-flex items-center gap-1.5 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors text-sm">
              <HelpCircle className="w-4 h-4" /> All 13 FAQs
            </a>
          </div>
        </div>
      </section>

      {/* Illustrated Glossary */}
      <section id="glossary" className="section bg-white scroll-mt-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              Roofing Terms Glossary
            </h2>
            <p className="text-gray text-lg text-center mb-8">
              Every roofing term you need to know, explained in plain language with why it matters for your home.
            </p>
            <div className="space-y-4">
              {glossaryTerms.map((item, index) => (
                <div
                  key={index}
                  className="bg-light rounded-xl p-5 hover:shadow-md transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-dark text-lg mb-1">{item.term}</h3>
                      <p className="text-gray text-sm mb-2">{item.definition}</p>
                      <div className="flex items-start gap-2">
                        <Info className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-accent font-medium">{item.whyItMatters}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Types Breakdown */}
      <section id="warranties" className="section bg-light scroll-mt-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              Roof Warranty Types Explained
            </h2>
            <p className="text-gray text-lg text-center mb-8">
              Understanding your warranty options helps you choose the right contractor and protect your investment.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-gray-300">
                <h3 className="text-lg font-bold text-dark mb-2">Material Warranty</h3>
                <span className="text-xs font-semibold text-gray bg-light px-2 py-1 rounded-full">Standard</span>
                <ul className="space-y-2 mt-4 text-sm text-gray">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Covers manufacturing defects</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> 25-50 years for shingles</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Prorated after initial period</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Does NOT cover labor</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Available from any installer</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary">
                <h3 className="text-lg font-bold text-dark mb-2">System Warranty</h3>
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">Best Coverage</span>
                <ul className="space-y-2 mt-4 text-sm text-gray">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Covers materials AND labor</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> 25-50 years non-prorated</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Requires full system install</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Certified contractor required</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> GAF Golden Pledge / CT SureStart</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-accent">
                <h3 className="text-lg font-bold text-dark mb-2">Workmanship Warranty</h3>
                <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded-full">Contractor</span>
                <ul className="space-y-2 mt-4 text-sm text-gray">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Covers installation errors</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> 5-25 years typical</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Contractor must stay in business</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Quality varies by company</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> BRN offers 10-year workmanship</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All 13 FAQs */}
      <section id="all-faqs" className="section bg-white scroll-mt-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              All 13 Technical &amp; Warranty Questions
            </h2>
            <p className="text-gray text-lg text-center mb-8">
              Detailed answers to the technical roofing questions Charlotte NC homeowners ask most.
            </p>
            <div className="space-y-4">
              {technicalFAQs.map((faq, index) => (
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
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <CitationSection
              heading="Roofing Technical Facts &mdash; Charlotte NC"
              citations={citationFacts}
            />
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
              Related Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
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
              <Link
                href="/roofing-materials-comparison-faq"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition group"
              >
                <Layers className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">
                  Materials Comparison FAQ
                </h3>
                <p className="text-gray text-sm">
                  Compare roofing materials side by side
                </p>
              </Link>
              <Link
                href="/roof-maintenance-faq"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition group"
              >
                <Wrench className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">
                  Maintenance FAQ
                </h3>
                <p className="text-gray text-sm">
                  How to maintain and extend your roof&apos;s life
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need a Roofing Expert Who Explains Everything?"
        subtitle="Best Roofing Now believes in transparent communication. We explain every term, show you every detail, and make sure you understand exactly what your roof needs before any work begins. Get a free inspection and plain-language assessment."
      />
    </>
  );
}
