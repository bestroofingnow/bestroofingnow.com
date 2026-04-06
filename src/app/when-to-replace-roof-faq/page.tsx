import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Clock,
  Phone,
  ArrowRight,
  HelpCircle,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Shield,
  Star,
  Home,
  Thermometer,
  Wrench,
  Sun,
  CloudRain,
  Leaf,
  Snowflake,
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
  title: 'When to Replace Your Roof FAQ | 15 Timing Questions Answered | Charlotte NC',
  description:
    'When should you replace your roof? Get answers to 15 common questions about roof lifespan, repair vs replace decisions, seasonal timing, and warning signs. Expert Charlotte NC roofing advice from Best Roofing Now.',
  keywords: [
    'when to replace roof faq',
    'how long does a roof last',
    'should i repair or replace roof',
    'roof lifespan Charlotte NC',
    'when to get new roof',
    'roof replacement timing',
    'signs roof needs replacing',
    'roof age replacement',
    'best time to replace roof Charlotte',
    'roof repair vs replace decision',
    'how often replace roof',
    'roof replacement schedule',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/when-to-replace-roof-faq`,
  },
  openGraph: {
    title: 'When to Replace Your Roof FAQ | 15 Timing Questions Answered',
    description:
      'Expert answers to 15 common questions about when to replace your roof, how long roofs last, and whether to repair or replace. Charlotte NC roofing guidance from Best Roofing Now.',
    url: `${SITE_CONFIG.url}/when-to-replace-roof-faq`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'When to replace your roof FAQ - Best Roofing Now Charlotte NC',
      },
    ],
  },
};

const timingFAQs = [
  {
    question: 'How long does an asphalt shingle roof last in Charlotte NC?',
    answer:
      'Asphalt shingle roofs last 20 to 30 years in Charlotte NC when properly maintained. Three-tab shingles typically last 15 to 20 years, while architectural (dimensional) shingles last 25 to 30 years. Charlotte\'s humid subtropical climate with hot summers, heavy rain, and occasional hailstorms can shorten lifespan by 3 to 5 years compared to milder climates. Regular inspections and prompt repairs help maximize your roof\'s full lifespan.',
  },
  {
    question: 'How long does a metal roof last?',
    answer:
      'A metal roof lasts 40 to 70 years depending on the material. Standing seam metal roofs last 50 to 70 years. Metal shingle panels last 40 to 60 years. Corrugated metal lasts 25 to 40 years. Metal roofs in Charlotte NC perform exceptionally well because they resist wind up to 140 mph, reflect heat to reduce cooling costs, and do not promote algae growth. With minimal maintenance, a metal roof can be the last roof your home ever needs.',
  },
  {
    question: 'How long does a tile roof last?',
    answer:
      'Clay and concrete tile roofs last 50 to 100 years. Clay tiles can last 75 to 100 years or more, while concrete tiles typically last 50 to 75 years. In Charlotte NC, tile roofs handle heat and rain well but may crack during severe hailstorms. The underlayment beneath tile roofs needs replacement every 20 to 30 years even if the tiles remain in good condition. Tile roofs add significant weight, so your roof structure must be engineered to support them.',
  },
  {
    question: 'How long does a slate roof last?',
    answer:
      'Natural slate roofs last 75 to 200 years, making them the longest-lasting residential roofing material available. Hard slate varieties can exceed 150 years, while soft slate lasts 75 to 100 years. Slate roofs in Charlotte NC are uncommon due to their high cost ($20 to $40 per square foot installed) and the structural reinforcement required, but they offer unmatched longevity and curb appeal for homeowners willing to invest.',
  },
  {
    question: 'What are the warning signs that my roof needs replacement?',
    answer:
      'The top warning signs your roof needs replacement include: shingles that are curling, cracking, or buckling; granules accumulating in gutters (indicating shingle deterioration); missing shingles after storms; daylight visible through the attic; sagging or uneven roof deck; water stains on ceilings or interior walls; moss or algae growth covering large areas; and your roof being over 20 years old. If you notice two or more of these signs, schedule a free inspection with Best Roofing Now immediately.',
  },
  {
    question: 'Should I repair or replace my roof?',
    answer:
      'Repair your roof if the damage is isolated to a small area (less than 30% of the roof), the roof is less than 15 years old, there is no structural damage to the decking, and the repair cost is less than 30% of a full replacement. Replace your roof if damage is widespread, the roof is over 20 years old, you are seeing recurring leaks in multiple locations, energy bills are rising due to poor insulation, or you plan to sell your home within 5 years. Best Roofing Now provides honest assessments and will recommend repair when replacement is not necessary.',
  },
  {
    question: 'How do I know if my roof damage is repairable or needs full replacement?',
    answer:
      'Repairable damage includes isolated missing shingles from wind, localized leaks from damaged flashing, small areas of storm damage, and single-point issues like cracked pipe boots. Damage requiring full replacement includes widespread granule loss, multiple areas of sagging decking, pervasive water intrusion, structural rot affecting rafters or trusses, and more than 3 layers of patching over the years. A professional inspection is the only reliable way to determine which option your roof needs.',
  },
  {
    question: 'What is the best time of year to replace a roof in Charlotte NC?',
    answer:
      'The best time to replace a roof in Charlotte NC is late spring (April to May) or early fall (September to October). These seasons offer mild temperatures ideal for shingle adhesion (40 to 85 degrees Fahrenheit), lower humidity than summer, and reduced storm risk. Summer replacements are common but the extreme heat can make installation more challenging and expensive. Winter replacements are possible but cold temperatures below 40 degrees Fahrenheit can prevent shingles from sealing properly. Plan ahead and schedule during shoulder seasons for the best results and pricing.',
  },
  {
    question: 'Can I replace my roof in the winter in Charlotte?',
    answer:
      'Yes, roof replacement is possible during Charlotte winters, though it requires special considerations. Charlotte winter temperatures typically range from 30 to 55 degrees Fahrenheit. Shingle manufacturers recommend installation above 40 degrees Fahrenheit for proper thermal sealing. Experienced contractors use hand-sealing techniques on cold days and time installations during warmer afternoon hours. Winter replacements may take slightly longer but are a good option if you have an emergency or want to avoid peak-season pricing.',
  },
  {
    question: 'How long does a roof replacement take?',
    answer:
      'A standard residential roof replacement in Charlotte NC takes 1 to 3 days for most homes. A straightforward 2,000 square foot home with a simple roof layout typically takes 1 to 2 days. Larger homes, steep pitches, complex designs with many valleys and dormers, or bad weather delays can extend the timeline to 3 to 5 days. Metal roof installations take 3 to 7 days. Tile roofs take 5 to 10 days. Best Roofing Now provides a specific timeline estimate before work begins.',
  },
  {
    question: 'Does my roof need replacement if my neighbors are replacing theirs?',
    answer:
      'If your neighbors are replacing their roofs, it is a strong indicator that your roof may need attention too. Homes in the same neighborhood are often built within the same time frame using similar materials and exposed to identical weather conditions. If homes around you are getting new roofs, your roof has likely experienced the same aging and storm damage. Schedule a free inspection to assess your specific roof condition rather than waiting for a leak to appear.',
  },
  {
    question: 'How does hail damage affect when I need to replace my roof?',
    answer:
      'Hail damage can drastically reduce your roof\'s remaining lifespan. Charlotte NC averages 1 to 3 significant hailstorms per year between March and June. Even small hail (1 inch diameter) can crack shingles and dislodge protective granules. Hail damage may not cause immediate leaks but accelerates deterioration over 1 to 3 years. After any hailstorm, have your roof inspected promptly. If hail damage is confirmed, file an insurance claim within North Carolina\'s one-year deadline. Many Charlotte homeowners get full roof replacements covered by insurance after hail events.',
  },
  {
    question: 'Should I replace my roof before selling my house?',
    answer:
      'Replacing your roof before selling increases home value by an average of $12,000 to $15,000 and recovers 60 to 70% of the investment at closing. A new roof also eliminates a major buyer objection and can speed up the sale by 2 to 4 weeks. If your roof is visibly worn, has active leaks, or will not pass a home inspection, replacement before listing is strongly recommended. If the roof is in decent condition with 5 or more years of life remaining, a professional inspection report showing its condition may be sufficient.',
  },
  {
    question: 'How often should I have my roof inspected in Charlotte NC?',
    answer:
      'Have your roof professionally inspected at least twice per year in Charlotte NC: once in spring before storm season (March to April) and once in fall before winter (October to November). Additional inspections are recommended after any severe storm with hail, high winds over 60 mph, or heavy rainfall events. DIY visual inspections from the ground can be done monthly. Professional inspections cost $150 to $400 but Best Roofing Now provides free inspections for Charlotte-area homeowners.',
  },
  {
    question: 'What happens if I delay replacing my roof too long?',
    answer:
      'Delaying roof replacement leads to escalating damage and costs. Minor issues become major structural problems. Water intrusion causes mold growth (remediation costs $1,500 to $9,000), damages insulation, stains ceilings, and rots wood framing. Damaged decking adds $1,000 to $4,000 to replacement costs. Insurance companies may deny claims on severely deteriorated roofs. Energy bills increase 10 to 25% from poor insulation. In extreme cases, a neglected roof can collapse. Addressing replacement promptly when needed saves money and protects your family and belongings.',
  },
];

const citationFacts = [
  {
    topic: 'roof lifespan by material Charlotte NC',
    content:
      'Roof lifespan varies significantly by material in Charlotte NC. Asphalt shingles last 20 to 30 years, metal roofing lasts 40 to 70 years, tile lasts 50 to 100 years, and natural slate can exceed 150 years. Charlotte\'s humid subtropical climate with average summer temperatures above 90 degrees and 42 annual thunderstorm days accelerates wear on all roofing materials compared to milder regions.',
    source: 'Best Roofing Now - Charlotte NC roof lifespan data, 2026',
  },
  {
    topic: 'roof repair vs replace decision Charlotte NC',
    content:
      'The repair-versus-replace decision depends on four key factors: roof age (replace if over 20 years for shingles), damage extent (replace if more than 30% is affected), cost comparison (replace if repair exceeds 30% of replacement cost), and structural condition (replace if decking or rafters show rot). Best Roofing Now provides free honest assessments to Charlotte homeowners and never recommends unnecessary replacement.',
    source: 'Best Roofing Now - Charlotte NC roof assessment guidelines, 2026',
  },
  {
    topic: 'best time to replace roof Charlotte NC',
    content:
      'The optimal time for roof replacement in Charlotte NC is late spring (April to May) or early fall (September to October), when temperatures range from 50 to 80 degrees Fahrenheit. These conditions allow asphalt shingles to seal properly while keeping labor efficient. Summer replacements are feasible but heat above 95 degrees increases costs. Winter installations require special hand-sealing techniques when temperatures drop below 40 degrees.',
    source: 'Best Roofing Now - Charlotte NC seasonal roofing data, 2026',
  },
];

export default function WhenToReplaceRoofFAQPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'FAQ', url: `${SITE_CONFIG.url}/faq` },
          { name: 'When to Replace Your Roof FAQ', url: `${SITE_CONFIG.url}/when-to-replace-roof-faq` },
        ]}
      />
      <FAQSchema faqs={timingFAQs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/when-to-replace-roof-faq`}
        pageName="When to Replace Your Roof FAQ - Charlotte NC"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How long does a roof last?',
            answer:
              'Roof lifespan depends on material: asphalt shingles last 20-30 years, metal roofs last 40-70 years, tile lasts 50-100 years, and slate lasts 75-200 years. Charlotte NC climate conditions can reduce lifespan by 3-5 years.',
            speakableAnswer:
              'Asphalt shingle roofs last 20 to 30 years in Charlotte. Metal roofs last 40 to 70 years. Tile lasts 50 to 100 years. Call Best Roofing Now at 704-605-6047 for a free inspection.',
          },
          {
            question: 'Should I repair or replace my roof?',
            answer:
              'Repair if damage is isolated, the roof is under 15 years old, and repair cost is under 30% of replacement. Replace if damage is widespread, the roof is over 20 years old, or you have recurring leaks in multiple areas.',
            speakableAnswer:
              'Repair your roof if damage is small and isolated. Replace it if the roof is over 20 years old or damage is widespread. Call 704-605-6047 for a free honest assessment.',
          },
          {
            question: 'When is the best time to replace a roof in Charlotte?',
            answer:
              'The best time is late spring (April-May) or early fall (September-October) when temperatures are 50-80 degrees. Summer works but is hotter and more expensive. Winter is possible with special techniques.',
            speakableAnswer:
              'The best time to replace a roof in Charlotte is April, May, September, or October. Call Best Roofing Now at 704-605-6047 to schedule your replacement.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="When to replace your roof - Charlotte NC roofing timing guide by Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-semibold">Roof Replacement Timing FAQ</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              When to Replace Your Roof: <br className="hidden md:block" />
              <span className="text-accent-light">15 Questions Answered</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Lifespan by Material, Repair vs Replace Decisions &amp; Seasonal Timing for Charlotte NC
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Knowing when to replace your roof saves you thousands. This guide answers the 15 most common timing questions Charlotte homeowners ask, covering roof lifespan, warning signs, repair vs replace decisions, and the best season to schedule your project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Free Inspection
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
                Free Honest Assessments
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white py-8 border-b border-gray-100 sticky top-0 z-20">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#lifespan" className="inline-flex items-center gap-1.5 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors text-sm">
              <Clock className="w-4 h-4" /> Roof Lifespan
            </a>
            <a href="#warning-signs" className="inline-flex items-center gap-1.5 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors text-sm">
              <AlertTriangle className="w-4 h-4" /> Warning Signs
            </a>
            <a href="#repair-vs-replace" className="inline-flex items-center gap-1.5 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors text-sm">
              <Wrench className="w-4 h-4" /> Repair vs Replace
            </a>
            <a href="#seasonal-timing" className="inline-flex items-center gap-1.5 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors text-sm">
              <Calendar className="w-4 h-4" /> Seasonal Timing
            </a>
          </div>
        </div>
      </section>

      {/* Roof Lifespan Table */}
      <section id="lifespan" className="section bg-white scroll-mt-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              Roof Lifespan by Material
            </h2>
            <p className="text-gray text-lg text-center mb-8">
              How long each roofing material lasts in Charlotte NC&apos;s climate, including cost and best use cases.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 rounded-tl-lg">Material</th>
                    <th className="px-4 py-3">Lifespan</th>
                    <th className="px-4 py-3">Cost per Sq Ft</th>
                    <th className="px-4 py-3">Wind Rating</th>
                    <th className="px-4 py-3 rounded-tr-lg">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-dark">
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-semibold">3-Tab Shingles</td>
                    <td className="px-4 py-3">15-20 years</td>
                    <td className="px-4 py-3">$3.50-$5.50</td>
                    <td className="px-4 py-3">60-70 mph</td>
                    <td className="px-4 py-3">Budget-conscious, rentals</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-light/50">
                    <td className="px-4 py-3 font-semibold">Architectural Shingles</td>
                    <td className="px-4 py-3">25-30 years</td>
                    <td className="px-4 py-3">$4.50-$7.00</td>
                    <td className="px-4 py-3">110-130 mph</td>
                    <td className="px-4 py-3">Most Charlotte homes</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-semibold">Standing Seam Metal</td>
                    <td className="px-4 py-3">50-70 years</td>
                    <td className="px-4 py-3">$12-$18</td>
                    <td className="px-4 py-3">140+ mph</td>
                    <td className="px-4 py-3">Long-term investment</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-light/50">
                    <td className="px-4 py-3 font-semibold">Metal Shingle Panels</td>
                    <td className="px-4 py-3">40-60 years</td>
                    <td className="px-4 py-3">$10-$14</td>
                    <td className="px-4 py-3">120+ mph</td>
                    <td className="px-4 py-3">Metal look, shingle style</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-semibold">Concrete Tile</td>
                    <td className="px-4 py-3">50-75 years</td>
                    <td className="px-4 py-3">$15-$25</td>
                    <td className="px-4 py-3">125+ mph</td>
                    <td className="px-4 py-3">Mediterranean aesthetic</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-light/50">
                    <td className="px-4 py-3 font-semibold">Clay Tile</td>
                    <td className="px-4 py-3">75-100+ years</td>
                    <td className="px-4 py-3">$20-$30</td>
                    <td className="px-4 py-3">125+ mph</td>
                    <td className="px-4 py-3">Premium homes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Natural Slate</td>
                    <td className="px-4 py-3">75-200 years</td>
                    <td className="px-4 py-3">$20-$40</td>
                    <td className="px-4 py-3">110+ mph</td>
                    <td className="px-4 py-3">Historic, luxury homes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray mt-4 text-center">
              * Lifespans assume proper installation and regular maintenance in Charlotte NC climate conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Repair vs Replace Decision Matrix */}
      <section id="repair-vs-replace" className="section bg-light scroll-mt-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              Repair vs Replace Decision Matrix
            </h2>
            <p className="text-gray text-lg text-center mb-8">
              Use this decision guide to determine whether your roof needs a repair or full replacement.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-green-500" />
                  Repair Is Likely Right If:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Roof is less than 15 years old</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Damage is isolated to one area (less than 30%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray">No structural or decking damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Repair cost is under 30% of replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Single leak with identifiable source</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Storm damage to a limited section</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
                  <Home className="w-5 h-5 text-red-500" />
                  Replace Is Likely Right If:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Roof is over 20 years old (shingles)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Widespread damage across multiple areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Sagging deck or visible structural damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Multiple recurring leaks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Energy bills rising from poor insulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Planning to sell home within 5 years</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
      <section id="warning-signs" className="section bg-white scroll-mt-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              8 Warning Signs Your Roof Needs Attention
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { sign: 'Curling, cracking, or buckling shingles', severity: 'High' },
                { sign: 'Granules accumulating in gutters', severity: 'Medium' },
                { sign: 'Missing shingles after storms', severity: 'High' },
                { sign: 'Daylight visible through the attic', severity: 'Critical' },
                { sign: 'Sagging or uneven roof deck', severity: 'Critical' },
                { sign: 'Water stains on ceilings or walls', severity: 'High' },
                { sign: 'Moss or algae covering large areas', severity: 'Medium' },
                { sign: 'Roof is over 20 years old', severity: 'Medium' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-light rounded-lg p-4">
                  <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                    item.severity === 'Critical' ? 'bg-red-500' :
                    item.severity === 'High' ? 'bg-orange-500' : 'bg-yellow-500'
                  }`} />
                  <span className="text-dark font-medium">{item.sign}</span>
                  <span className={`ml-auto text-xs font-semibold px-2 py-1 rounded-full ${
                    item.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                    item.severity === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {item.severity}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Roof Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Timing Guide */}
      <section id="seasonal-timing" className="section bg-light scroll-mt-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              Charlotte NC Seasonal Roofing Guide
            </h2>
            <p className="text-gray text-lg text-center mb-8">
              When to schedule your roof replacement based on Charlotte&apos;s seasonal weather patterns.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark">Spring (Mar-May)</h3>
                    <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Best Season</span>
                  </div>
                </div>
                <p className="text-gray text-sm">Ideal temperatures (50-80 F). Schedule early before storm season peaks. April and May are the most popular months for roof work in Charlotte.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Sun className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark">Summer (Jun-Aug)</h3>
                    <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full">Good, But Hot</span>
                  </div>
                </div>
                <p className="text-gray text-sm">Most common season but heat above 95 F makes installation challenging. Crews start early to beat the heat. Slightly higher labor costs during peak demand.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark">Fall (Sep-Nov)</h3>
                    <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Best Season</span>
                  </div>
                </div>
                <p className="text-gray text-sm">Ideal conditions with mild temperatures and lower humidity. September and October offer the best combination of weather and contractor availability.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Snowflake className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark">Winter (Dec-Feb)</h3>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">Possible</span>
                  </div>
                </div>
                <p className="text-gray text-sm">Charlotte winters are mild enough for roof work most days. Temperatures below 40 F require hand-sealing. Off-season pricing may be available.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All 15 FAQs */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              All 15 Roof Replacement Timing Questions
            </h2>
            <p className="text-gray text-lg text-center mb-8">
              Detailed answers to the most common questions Charlotte homeowners ask about when to replace their roof.
            </p>
            <div className="space-y-4">
              {timingFAQs.map((faq, index) => (
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
              heading="Roof Replacement Timing Facts &mdash; Charlotte NC"
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
                href="/when-to-replace-roof-charlotte-nc"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition group"
              >
                <Calendar className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">
                  Full Replacement Guide
                </h3>
                <p className="text-gray text-sm">
                  In-depth guide to roof replacement timing in Charlotte
                </p>
              </Link>
              <Link
                href="/roofing-costs-2026"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition group"
              >
                <Clock className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">
                  2026 Cost Guide
                </h3>
                <p className="text-gray text-sm">
                  Complete pricing for all roofing services
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Not Sure If Your Roof Needs Replacing?"
        subtitle="Get a free, honest assessment from our certified roofing experts. We will inspect your roof, explain what we find, and give you a straightforward recommendation. No pressure, no obligation."
      />
    </>
  );
}
