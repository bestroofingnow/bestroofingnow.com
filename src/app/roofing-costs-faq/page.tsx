import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  HelpCircle,
  Phone,
  ArrowRight,
  DollarSign,
  CheckCircle,
  Calculator,
  Home,
  Layers,
  Wrench,
  TrendingUp,
  PiggyBank,
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
  title: 'Roofing Cost FAQ | 25 Pricing Questions Answered | Charlotte NC 2026',
  description:
    'How much does a roof cost in Charlotte NC? Get 25 detailed roofing cost answers with 2026 pricing for roof replacement ($8,000-$15,000), metal roofing ($12-18/sqft), repairs ($250-$4,500), and more. Free estimates from Best Roofing Now.',
  keywords: [
    'how much does a roof cost',
    'roofing cost questions',
    'roof replacement cost Charlotte NC',
    'how much is a new roof',
    'roof repair cost',
    'metal roof cost per square foot',
    'roofing price per square',
    'average roof cost 2026',
    'roofing estimate Charlotte NC',
    'roof cost calculator',
    'cheap roofing Charlotte NC',
    'roofing financing Charlotte NC',
    'roof replacement cost per square foot',
    'gutter cost Charlotte NC',
    'siding cost Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-costs-faq`,
  },
  openGraph: {
    title: 'Roofing Cost FAQ | 25 Pricing Questions Answered | Charlotte NC 2026',
    description:
      'Comprehensive roofing cost FAQ for Charlotte NC homeowners. 25 detailed pricing questions answered with real 2026 numbers from a BBB A+ rated contractor.',
    url: `${SITE_CONFIG.url}/roofing-costs-faq`,
    type: 'website',
  },
};

const costFaqs = [
  {
    question: 'How much does a new roof cost in Charlotte NC in 2026?',
    answer:
      'A new roof in Charlotte NC costs $8,000 to $15,000 for architectural asphalt shingles on a typical 1,800 to 2,200 square foot home in 2026. Metal roofing ranges from $24,000 to $36,000. Premium materials like slate or tile cost $30,000 to $60,000. The final price depends on roof size, material choice, pitch, complexity, and whether tear-off is required. Best Roofing Now provides free, itemized estimates.',
  },
  {
    question: 'How much does roof replacement cost per square foot?',
    answer:
      'Roof replacement costs per square foot in Charlotte NC in 2026: 3-tab asphalt shingles $3.50 to $5.50, architectural asphalt shingles $4.50 to $7.00, standing seam metal $12 to $18, metal shingle panels $10 to $14, clay tile $15 to $25, and slate $20 to $30. These prices include materials, labor, tear-off, disposal, and standard warranties.',
  },
  {
    question: 'What is the average cost of a roof replacement in 2026?',
    answer:
      'The average cost of a roof replacement in Charlotte NC is $9,000 to $14,000 for a standard 2,000 square foot home with architectural asphalt shingles in 2026. This represents a 3 to 5 percent increase over 2025 prices due to rising material and labor costs. The national average is $10,000 to $16,000, making Charlotte slightly below national averages.',
  },
  {
    question: 'How much does a metal roof cost in Charlotte NC?',
    answer:
      'A metal roof in Charlotte NC costs $24,000 to $36,000 for a typical home in 2026. Standing seam metal averages $14 to $16 per square foot installed. Metal shingle panels cost $10 to $14 per square foot. Corrugated metal runs $8 to $12 per square foot. Metal roofs last 40 to 70 years with wind resistance up to 140 mph, making them excellent for Charlotte storm protection.',
  },
  {
    question: 'How much does roof repair cost?',
    answer:
      'Roof repair costs in Charlotte NC range from $250 to $4,500 in 2026. Minor repairs like patching a leak or replacing a few shingles cost $250 to $600. Moderate repairs involving flashing, valley work, or section replacement run $600 to $1,800. Major repairs requiring structural work or decking replacement cost $1,800 to $4,500. Emergency storm repairs may include premium pricing.',
  },
  {
    question: 'How much does it cost to fix a roof leak?',
    answer:
      'Fixing a roof leak in Charlotte NC costs $250 to $1,500 depending on the cause and location. Simple patches around pipe boots or small flashing repairs cost $250 to $500. Valley leak repairs run $400 to $1,000. Chimney flashing leak repairs cost $300 to $800. Complex leaks requiring section tear-off and deck repair run $800 to $1,500. Best Roofing Now provides free leak inspections.',
  },
  {
    question: 'What does it cost to replace roof shingles?',
    answer:
      'Replacing roof shingles in Charlotte NC costs $4.50 to $7.00 per square foot for architectural shingles and $3.50 to $5.50 for 3-tab shingles in 2026. For a partial replacement of a damaged section, expect $500 to $2,000 depending on the area size. A full shingle replacement on a typical 2,000 square foot roof runs $8,000 to $15,000 including tear-off and disposal.',
  },
  {
    question: 'How much does a flat roof cost?',
    answer:
      'A flat roof in Charlotte NC costs $5 to $12 per square foot installed in 2026 depending on the membrane type. TPO (thermoplastic polyolefin) costs $5 to $8 per square foot. EPDM rubber membrane runs $5 to $9 per square foot. Modified bitumen costs $4 to $7 per square foot. PVC membrane costs $7 to $12 per square foot. Flat roofs are common on Charlotte commercial buildings and home additions.',
  },
  {
    question: 'How much do gutters cost with a new roof?',
    answer:
      'Gutter installation costs $600 to $2,400 for a typical Charlotte home in 2026. Aluminum gutters cost $4 to $9 per linear foot. Seamless aluminum gutters run $6 to $12 per linear foot. Copper gutters cost $15 to $30 per linear foot. Gutter guards add $7 to $15 per linear foot. Many contractors including Best Roofing Now offer bundled pricing when gutters are installed with a roof replacement.',
  },
  {
    question: 'How much does siding cost in Charlotte NC?',
    answer:
      'Siding installation in Charlotte NC costs $5 to $15 per square foot in 2026. Vinyl siding costs $5 to $8 per square foot. Fiber cement (HardiePlank) siding runs $8 to $12 per square foot and is the most popular choice in Charlotte. Engineered wood siding costs $7 to $11 per square foot. Full siding replacement on a typical home ranges from $8,000 to $25,000.',
  },
  {
    question: 'What factors affect roofing cost the most?',
    answer:
      'The five biggest factors affecting roofing cost in Charlotte NC are: roof size measured in squares of 100 square feet, material choice (shingles at $4.50 to $7.00/sqft versus metal at $12 to $18/sqft), roof pitch and steepness (steeper roofs cost more for labor and safety), complexity (dormers, valleys, skylights, multiple levels), and whether a complete tear-off is needed versus an overlay.',
  },
  {
    question: 'Is it cheaper to repair or replace a roof?',
    answer:
      'Repair is cheaper in the short term at $250 to $4,500 versus $8,000 to $15,000+ for replacement. However, replace if your roof is over 20 years old, has widespread damage, or if repair costs exceed 30 percent of replacement cost. Multiple repairs on an aging roof often cost more than replacement over time. Best Roofing Now provides honest assessments on which option makes financial sense.',
  },
  {
    question: 'How much does roof decking replacement cost?',
    answer:
      'Roof decking replacement costs $2 to $5 per square foot for plywood or OSB in Charlotte NC. A full decking replacement on a 2,000 square foot roof runs $4,000 to $10,000. Most roofs only need partial decking replacement in water-damaged areas, costing $500 to $2,000. Decking condition is assessed during tear-off and priced as an additional line item.',
  },
  {
    question: 'Does a new roof increase home value?',
    answer:
      'Yes, a new roof typically increases home value by $12,000 to $20,000 in the Charlotte NC market, recovering 60 to 70 percent of the investment at resale. According to Remodeling Magazine, a new asphalt shingle roof has one of the highest returns on investment among home improvement projects. Homes with new roofs sell faster and attract higher offers.',
  },
  {
    question: 'How much does a roof inspection cost?',
    answer:
      'Best Roofing Now provides free roof inspections for Charlotte area homeowners. Some companies charge $150 to $400. A professional inspection includes a detailed written report with photos of any damage, measurements, and an honest recommendation on repair versus replacement. Free inspections from reputable contractors carry no obligation.',
  },
  {
    question: 'Can I finance a new roof in Charlotte NC?',
    answer:
      'Yes, most reputable Charlotte roofing contractors offer financing. Best Roofing Now partners with lending providers offering monthly payment plans with competitive rates. Many homeowners qualify for 0 percent APR promotional periods of 12 to 24 months. Some plans extend to 5 to 10 year terms. Insurance claims can also significantly offset costs for storm damage.',
  },
  {
    question: 'Why do roofing estimates vary so much?',
    answer:
      'Roofing estimates vary due to differences in material quality and brand, labor rates and crew experience, warranty coverage length, overhead costs, and whether the estimate includes all line items. Some low estimates omit tear-off, disposal, new flashing, drip edge, or proper underlayment. Always compare detailed written estimates line by line and verify contractor credentials.',
  },
  {
    question: 'How much does a tile roof cost in Charlotte?',
    answer:
      'A tile roof in Charlotte NC costs $15 to $25 per square foot for clay tile and $10 to $20 per square foot for concrete tile in 2026. For a typical 2,000 square foot home, clay tile runs $30,000 to $50,000 and concrete tile runs $20,000 to $40,000. Tile roofs last 50 to 100 years but require reinforced framing due to their weight.',
  },
  {
    question: 'What is the cheapest type of roof to install?',
    answer:
      '3-tab asphalt shingles are the cheapest roofing material at $3.50 to $5.50 per square foot installed, running $7,000 to $11,000 for a typical Charlotte home. However, architectural shingles at $4.50 to $7.00 per square foot last 10 years longer, resist 130 mph winds versus 60 mph for 3-tab, and look significantly better, making them the better value.',
  },
  {
    question: 'How much does it cost to replace a roof on a 2000 sq ft house?',
    answer:
      'Replacing a roof on a 2,000 square foot house in Charlotte NC costs $9,000 to $14,000 for architectural asphalt shingles, $24,000 to $36,000 for standing seam metal, and $30,000 to $50,000 for tile in 2026. Note that roof area is typically 20 to 40 percent larger than the home footprint due to pitch, overhangs, and dormers.',
  },
  {
    question: 'How much does emergency roof repair cost?',
    answer:
      'Emergency roof repair in Charlotte NC costs $300 to $2,500 depending on the scope. Emergency tarping to prevent further water damage costs $200 to $500. After-hours and weekend service may include a $100 to $300 premium. Storm damage repairs range from $500 to $2,500. Best Roofing Now offers 24/7 emergency response for Charlotte area homeowners.',
  },
  {
    question: 'How much does it cost to replace flashing on a roof?',
    answer:
      'Replacing roof flashing in Charlotte NC costs $200 to $800 per area in 2026. Chimney flashing replacement runs $300 to $800. Pipe boot flashing costs $100 to $250 each. Valley flashing runs $400 to $1,000 per valley. Step flashing along walls costs $200 to $600 per section. During a full roof replacement, all flashing should be replaced and is included in the total price.',
  },
  {
    question: 'What is the labor cost for roof installation?',
    answer:
      'Roofing labor costs in Charlotte NC run $1.50 to $3.50 per square foot in 2026, accounting for 40 to 60 percent of the total project cost. Labor costs increase for steep roofs above 8/12 pitch, complex roof designs, and multi-story homes requiring additional safety equipment. Experienced crews with manufacturer certifications ensure proper installation and valid warranties.',
  },
  {
    question: 'How much does it cost to add a skylight during roof replacement?',
    answer:
      'Adding a skylight during a roof replacement in Charlotte NC costs $800 to $3,000 per skylight including framing, flashing, and installation. Fixed skylights cost $800 to $1,500. Venting skylights run $1,200 to $2,500. Tubular skylights cost $500 to $1,000. Installing skylights during a roof replacement is significantly cheaper than retrofitting later.',
  },
  {
    question: 'Does insurance cover roofing costs in Charlotte NC?',
    answer:
      'Homeowners insurance typically covers roofing costs when damage is caused by storms, hail, wind, or fallen trees. Normal wear and aging are not covered. Charlotte experiences significant storm activity, and many roof repairs and replacements qualify for coverage. Best Roofing Now works with insurance companies and assists with the entire claims process to maximize your coverage.',
  },
];

// Pricing tables data
const pricingTables = [
  {
    title: 'Roof Replacement Cost by Material',
    rows: [
      { material: '3-Tab Asphalt Shingles', perSqFt: '$3.50 - $5.50', typical: '$7,000 - $11,000' },
      { material: 'Architectural Shingles', perSqFt: '$4.50 - $7.00', typical: '$8,000 - $15,000' },
      { material: 'Metal Shingle Panels', perSqFt: '$10 - $14', typical: '$20,000 - $28,000' },
      { material: 'Standing Seam Metal', perSqFt: '$12 - $18', typical: '$24,000 - $36,000' },
      { material: 'Concrete Tile', perSqFt: '$10 - $20', typical: '$20,000 - $40,000' },
      { material: 'Clay Tile', perSqFt: '$15 - $25', typical: '$30,000 - $50,000' },
      { material: 'Slate', perSqFt: '$20 - $30', typical: '$40,000 - $60,000' },
    ],
  },
  {
    title: 'Roof Repair Cost by Scope',
    rows: [
      { material: 'Minor (leak patch, shingle replacement)', perSqFt: '-', typical: '$250 - $600' },
      { material: 'Moderate (flashing, valley, section)', perSqFt: '-', typical: '$600 - $1,800' },
      { material: 'Major (structural, decking)', perSqFt: '-', typical: '$1,800 - $4,500' },
      { material: 'Emergency (tarping, storm response)', perSqFt: '-', typical: '$300 - $2,500' },
    ],
  },
  {
    title: 'Additional Services',
    rows: [
      { material: 'Gutter Installation', perSqFt: '$4 - $12/ft', typical: '$600 - $2,400' },
      { material: 'Gutter Guards', perSqFt: '$7 - $15/ft', typical: '$1,050 - $3,000' },
      { material: 'Siding (Vinyl)', perSqFt: '$5 - $8', typical: '$8,000 - $14,000' },
      { material: 'Siding (Fiber Cement)', perSqFt: '$8 - $12', typical: '$14,000 - $25,000' },
      { material: 'Skylight Installation', perSqFt: '-', typical: '$800 - $3,000 each' },
      { material: 'Roof Inspection', perSqFt: '-', typical: 'FREE' },
    ],
  },
];

// Citation facts
const citationFacts = [
  {
    topic: 'roof replacement cost 2026',
    content:
      'A roof replacement in Charlotte NC costs between $8,000 and $15,000 for asphalt shingles on a typical 1,800 to 2,200 square foot home in 2026. Architectural shingles average $4.50 to $7.00 per square foot installed. Metal roofing costs $24,000 to $36,000. Prices include materials, labor, tear-off, disposal, and standard manufacturer warranties.',
    source: 'Best Roofing Now - Charlotte NC contractor pricing data, 2026',
  },
  {
    topic: 'metal roof cost per square foot',
    content:
      'Metal roofing costs $12 to $18 per square foot installed in Charlotte NC in 2026. Standing seam metal averages $14 to $16 per square foot. Metal shingle panels cost $10 to $14 per square foot. A complete metal roof on a 2,000 square foot home costs $24,000 to $36,000 and lasts 40 to 70 years with 140 mph wind resistance.',
    source: 'Best Roofing Now - Charlotte NC metal roofing pricing, 2026',
  },
  {
    topic: 'roof repair cost Charlotte NC',
    content:
      'Roof repair in Charlotte NC costs $250 to $4,500 in 2026. Minor repairs including leak patching cost $250 to $600. Moderate repairs involving flashing and valley work run $600 to $1,800. Major structural repairs cost $1,800 to $4,500. Emergency storm damage repairs are available 24/7. Free inspections determine exact repair needs.',
    source: 'Best Roofing Now - Charlotte NC repair pricing, 2026',
  },
  {
    topic: 'roofing cost factors',
    content:
      'The five biggest factors affecting roofing costs in Charlotte NC are roof size (measured in roofing squares of 100 sq ft), material choice (shingles $4.50-$7.00/sqft vs metal $12-$18/sqft vs tile $15-$25/sqft), roof pitch and steepness, complexity (dormers, valleys, skylights), and whether tear-off is needed. Always get 3 detailed written estimates.',
    source: 'Best Roofing Now - Charlotte NC cost analysis, 2026',
  },
];

export default function RoofingCostsFAQPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing FAQ', url: `${SITE_CONFIG.url}/roofing-faq` },
          { name: 'Roofing Costs FAQ', url: `${SITE_CONFIG.url}/roofing-costs-faq` },
        ]}
      />
      <FAQSchema faqs={costFaqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-costs-faq`}
        pageName="Roofing Cost FAQ - Charlotte NC 2026"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much does a new roof cost in Charlotte NC?',
            answer:
              'A new roof in Charlotte NC costs $8,000-$15,000 for asphalt shingles, $24,000-$36,000 for metal, and $30,000-$60,000 for tile on a typical 2,000 sq ft home in 2026. Best Roofing Now provides free estimates.',
            speakableAnswer:
              'A new roof in Charlotte costs 8 to 15 thousand dollars for shingles or 24 to 36 thousand for metal in 2026. Call Best Roofing Now at 704-605-6047 for a free estimate.',
          },
          {
            question: 'How much does roof repair cost?',
            answer:
              'Roof repair in Charlotte NC costs $250-$4,500. Minor repairs run $250-$600, moderate repairs $600-$1,800, and major repairs $1,800-$4,500+. Best Roofing Now provides free inspections.',
            speakableAnswer:
              'Roof repair in Charlotte costs $250 to $4,500 depending on the scope. Call 704-605-6047 for a free roof inspection.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.stock.heroSuburbanHomes}
            alt="Roofing cost guide Charlotte NC - Best Roofing Now FAQ"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="mb-6 text-white/70 text-sm">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/roofing-faq" className="hover:text-white transition">Roofing FAQ</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Roofing Costs FAQ</span>
            </nav>
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-semibold">2026 Cost FAQ</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Cost FAQ <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC (2026)</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              25 Detailed Pricing Questions Answered with Real Local Numbers
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Every cost question Charlotte homeowners ask, answered with transparent 2026 pricing from a BBB A+ rated contractor with {SITE_CONFIG.customerCount}+ completed projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calculator className="w-5 h-5" aria-hidden="true" />}
              >
                Get Your Free Estimate
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
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <TrendingUp className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">2026 Pricing at a Glance</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Charlotte NC Roofing Prices (2026)
              </h2>
              <p className="text-gray text-lg">
                Quick reference pricing tables based on real Charlotte market data.
              </p>
            </div>
            {pricingTables.map((table, tableIndex) => (
              <div key={tableIndex} className="mb-10 last:mb-0">
                <h3 className="text-xl font-bold text-primary mb-4">{table.title}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="px-4 py-3 rounded-tl-lg">Service / Material</th>
                        <th className="px-4 py-3">Per Sq Ft / Unit</th>
                        <th className="px-4 py-3 rounded-tr-lg">Typical Project Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row, rowIndex) => (
                        <tr
                          key={rowIndex}
                          className={rowIndex % 2 === 0 ? 'bg-light' : 'bg-white'}
                        >
                          <td className="px-4 py-3 font-medium text-dark">{row.material}</td>
                          <td className="px-4 py-3 text-gray">{row.perSqFt}</td>
                          <td className="px-4 py-3 font-semibold text-primary">{row.typical}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
            <p className="text-sm text-gray mt-4 text-center">
              All prices are estimates for the Charlotte NC metro area in 2026. Actual costs may vary based on specific project requirements. Contact Best Roofing Now for a free, detailed estimate.
            </p>
          </div>
        </div>
      </section>

      {/* All 25 FAQs */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">25 Cost Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Every Roofing Cost Question, Answered
              </h2>
              <p className="text-gray text-lg">
                Detailed answers with real 2026 Charlotte NC pricing from Best Roofing Now.
              </p>
            </div>
            <div className="space-y-4">
              {costFaqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition group"
                >
                  <summary className="p-6 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-bold text-primary flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="font-bold text-dark pr-8">{faq.question}</span>
                      <ArrowRight className="w-5 h-5 text-gray ml-auto flex-shrink-0 transform group-open:rotate-90 transition-transform" />
                    </div>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray pl-11">{faq.answer}</p>
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
              heading="2026 Roofing Cost Facts &mdash; Charlotte NC"
              citations={citationFacts}
            />
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Related Roofing Resources
            </h2>
            <p className="text-gray mb-8">
              Explore more detailed guides and FAQs for Charlotte NC homeowners.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/roofing-faq"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition group"
              >
                <HelpCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">
                  Full Roofing FAQ Hub
                </h3>
                <p className="text-gray text-sm">
                  100+ roofing questions organized by category
                </p>
              </Link>
              <Link
                href="/roofing-costs-2026"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition group"
              >
                <TrendingUp className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">
                  Complete Cost Guide 2026
                </h3>
                <p className="text-gray text-sm">
                  In-depth pricing for every roofing service
                </p>
              </Link>
              <Link
                href="/choosing-roofing-contractor-faq"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition group"
              >
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">
                  Choosing a Contractor FAQ
                </h3>
                <p className="text-gray text-sm">
                  How to find and vet the right roofer
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Want an Exact Price for Your Roof?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Every roof is different. Get a free, no-obligation estimate with transparent line-by-line pricing for your specific home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-accent hover:bg-accent-dark text-white"
            >
              <Phone className="w-5 h-5" />
              {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact"
              className="btn bg-white text-primary hover:bg-light"
            >
              Request Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
