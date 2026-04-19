import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone, Home, Info, CheckCircle, HelpCircle, Wind, Droplets, Layers, Building2 } from 'lucide-react';
import { SITE_CONFIG, ROOF_TYPES } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { EstimateButton } from '@/components/estimate';
import {
  BreadcrumbSchema,
  WebPageSchema,
  CollectionPageSchema,
  FAQSchema,
  SpeakableContentBlocks,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Roof Types & Styles | Gable, Hip, Mansard, Flat | Charlotte NC',
  description:
    'Compare roof shapes for Charlotte NC homes: gable, hip, mansard, gambrel, flat/low-slope, shed, dutch gable, butterfly. Climate fit, drainage, pitch, and cost implications.',
  keywords: [
    'roof types charlotte nc',
    'roof styles',
    'gable roof charlotte',
    'hip roof nc',
    'mansard roof',
    'gambrel roof',
    'flat roof charlotte',
    'dutch gable roof',
    'shed roof',
    'butterfly roof',
    'roof shape guide',
    'residential roof designs',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-types`,
  },
  openGraph: {
    title: 'Roof Types & Styles | Charlotte NC | Best Roofing Now',
    description: 'Complete guide to residential roof shapes — gable, hip, mansard, gambrel, flat/low-slope, and more. Climate fit, drainage, and cost guidance for Charlotte.',
    url: `${SITE_CONFIG.url}/roof-types`,
    type: 'website',
  },
};

const whatYoullFind = [
  'Defining characteristics and identifying features of each roof shape',
  'Pitch/slope ranges and the materials compatible with each',
  'Drainage and ventilation implications for Piedmont NC weather',
  'Wind and storm performance in the Charlotte hail belt',
  'Common Charlotte and Lake Norman neighborhoods featuring each style',
  'Cost and maintenance trade-offs — simple shapes vs. complex geometries',
];

interface StyleGuide {
  icon: typeof Home;
  title: string;
  summary: string;
  recommendations: string;
  tradeoffs: string;
}

const styleGuides: StyleGuide[] = [
  {
    icon: Home,
    title: 'Classic American / Colonial',
    summary: 'Gable, hip, or Dutch gable roofs — the workhorse shapes behind most Charlotte residential architecture from 1950 through today.',
    recommendations: 'Gable for traditional and Colonial, Hip for ranch and Craftsman, Dutch gable for transitional architectural styles.',
    tradeoffs: 'Gable is cheapest to build but most wind-vulnerable; Hip sheds wind best but costs 10–20% more to build and re-roof.',
  },
  {
    icon: Wind,
    title: 'High-Wind / Lake Norman Lakefront',
    summary: 'Hip roofs outperform gables against sustained wind and tropical remnants — no vertical gable end walls to catch gust pressure.',
    recommendations: 'Hip or compound hip with metal standing seam or Class 4 asphalt. Add 6-nail patterns and enhanced starter strip on exposed slopes.',
    tradeoffs: 'Hip roofs have slightly less attic volume. Compound hip designs multiply valley count and flashing complexity.',
  },
  {
    icon: Layers,
    title: 'Historic / Luxury Character',
    summary: 'Mansard, gambrel, butterfly, and dutch gable roofs signal distinct architectural eras — common in Historic Matthews, Historic Davidson, Dilworth, Myers Park, and custom lakefront builds.',
    recommendations: 'Match original roof shape when re-roofing historic homes. Slate, cedar shake, synthetic composite, or standing seam copper for luxury character.',
    tradeoffs: 'Complex roof shapes cost 25–60% more to re-roof than gable due to flashing, valleys, and specialized labor.',
  },
  {
    icon: Building2,
    title: 'Modern / Low-Slope / Commercial',
    summary: 'Flat, low-slope, and shed roofs for modern residential architecture, Downtown mixed-use, and all commercial buildings. Requires single-ply or multi-ply membrane rather than shingles.',
    recommendations: 'TPO, EPDM, PVC, or modified bitumen per the building use. White reflective membranes for NC energy code and HVAC savings.',
    tradeoffs: 'Flat roofs require more frequent inspection — typical 2x/year PM — and stricter drainage. Ponding is the #1 failure mode.',
  },
];

const faqs = [
  { question: 'How do I identify what type of roof I have?', answer: 'Look from the street at the front elevation: (1) Triangular wall at each end = gable roof. (2) All four sides slope down to eaves with no vertical wall = hip roof. (3) Two slopes on each of four sides, lower slope steeper = mansard. (4) Two slopes per side, upper shallow and lower steep = gambrel (barn-style). (5) Single flat or nearly-flat plane = flat/low-slope. (6) Single slope only = shed. (7) Hip roof with small gable near the peak = dutch gable. Send us photos and we will identify it for free.' },
  { question: 'Which roof type is best for the Charlotte NC climate?', answer: 'For most Charlotte homes: hip or gable with 6/12 to 9/12 pitch is optimal. Hip roofs shed Piedmont wind best (140+ MPH rated with proper installation) and handle tropical remnants like Florence and Helene. Gable roofs are cheaper to build and re-roof, with slightly better attic ventilation. Avoid very low-slope (under 3/12) shingle installations — they leak at valleys and flashings under Charlotte&apos;s intense summer rainfall. For anything flatter than 3/12, switch to TPO, EPDM, PVC, or modified bitumen membrane.' },
  { question: 'Which roof type is hardest (and most expensive) to re-roof?', answer: 'Generally ranked cheapest to most expensive for re-roofing: (1) simple gable — most square footage per hour; (2) hip roof — +10–20%; (3) dutch gable — +15–25% (more valleys); (4) gambrel — +20–35% (break-point detailing); (5) mansard — +30–50% (steep lower slopes require scaffolding or staging); (6) butterfly — +40–60% (unusual geometry, specialized drainage). Complex multi-valley roofs with multiple dormers and skylights can run higher still. Flat and low-slope commercial roofs are priced per square foot of membrane plus insulation.' },
  { question: 'What pitch (slope) do I have, and which materials does it allow?', answer: 'Pitch is rise-over-run, expressed as x/12. Measure in feet over a 12-ft horizontal run: (1) Under 2/12 = low-slope/flat — requires TPO, EPDM, PVC, modified bitumen, or BUR. Shingles not code-compliant. (2) 2/12 to 4/12 = low-slope with double underlayment — asphalt shingles permitted with special underlayment. (3) 4/12 to 12/12 = conventional — any material; standard installation. (4) 12/12+ = steep-slope — enhanced fastening, jack rafters on scaffold. We can measure your pitch during a free inspection.' },
  { question: 'Which roof type has the best drainage in Piedmont rainstorms?', answer: 'Ranked by drainage performance (best to worst): steep gable and hip (6/12+) shed water fastest; moderately-pitched hip and gable (4/12–6/12) drain well with correctly sized gutters; dutch gable and gambrel drain well upper-section, require careful valley detailing lower-section; mansard roofs require sized-up drainage and aggressive maintenance; flat/low-slope needs tapered insulation or crickets to prevent ponding. Undersized gutters overflow on all shapes — we size gutters based on drainage area, not roof shape alone.' },
  { question: 'Can I change my roof type during a replacement?', answer: 'Rarely practical. Changing roof shape (e.g., gable to hip) requires re-engineering the truss system, altering load paths, and rebuilding sheathing and fascia. Engineering and structural work typically adds $15,000–$60,000 to a re-roof depending on scope — usually not economical unless driven by a major addition or dormer project. What we CAN adjust without framing changes: pitch within the existing slope, material choice, color, and ridge/hip ventilation strategy. For new construction, roof shape is a free architectural choice.' },
  { question: 'Which roof types are most common in Charlotte NC neighborhoods?', answer: 'Mecklenburg suburbs (Matthews, Pineville, Huntersville, Ballantyne): predominantly gable and hip with 6/12–9/12 pitch on architectural shingle. Lake Norman lakefront (Cornelius, Davidson, Mooresville, Denver): mix of hip, compound hip, and occasional standing seam metal with enhanced wind detail. Historic districts (Historic Matthews, Historic Davidson, Dilworth, Fourth Ward, Myers Park): gable, Dutch gable, mansard, and gambrel on slate, cedar, or period-correct architectural shingle. Uptown Charlotte and Downtown mixed-use: flat/low-slope TPO, EPDM, or modified bitumen.' },
  { question: 'Does my roof type affect insurance premiums?', answer: 'Sometimes. Hip roofs typically qualify for a 5–15% wind/hail premium discount with NC carriers — they perform better in testing and insurers recognize the reduced loss exposure. Gable roofs are the baseline. Flat and low-slope roofs may carry separate or higher wind/hail deductibles on commercial policies. Impact-rated Class 4 shingle upgrades unlock further 10–30% discounts regardless of roof shape. We document roof shape and materials for your insurance agent.' },
];

export default function RoofTypesPage() {
  const pageUrl = `${SITE_CONFIG.url}/roof-types`;

  const items = ROOF_TYPES.map((t) => ({
    name: t.name,
    url: `${SITE_CONFIG.url}/roof-types/${t.slug}`,
    description: t.description,
  }));

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Types', url: pageUrl },
        ]}
      />
      <WebPageSchema
        name="Roof Types & Styles | Charlotte NC"
        description="Complete guide to residential roof shapes — gable, hip, mansard, gambrel, flat, shed, and more — with climate fit and cost guidance for Charlotte NC."
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Types', url: pageUrl },
        ]}
      />
      <CollectionPageSchema
        name="Roof Types & Styles"
        description="All residential roof shapes installed by Best Roofing Now — gable, hip, mansard, gambrel, flat/low-slope, shed, dutch gable, butterfly, and more."
        url={pageUrl}
        items={items}
      />
      <FAQSchema faqs={faqs} />
      <SpeakableContentBlocks includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={pageUrl} pageName="Roof Types and Styles" />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[{ label: 'Roof Types' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Roof Types &amp; Styles
            </h1>
            <p className="speakable-intro text-xl text-white/90 mb-8">
              Gable, hip, mansard, gambrel, flat, shed, Dutch gable, and butterfly — understanding your roof&apos;s shape affects drainage, ventilation, material compatibility, storm performance, and re-roofing cost. This guide covers every residential roof shape found in Charlotte NC and Lake Norman, with pitch ranges, climate fit, common neighborhoods, and material recommendations per shape.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-accent hover:bg-accent-dark text-white"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Talk to a Roofing Expert
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Roof type is more than a style choice. The shape of your roof affects drainage, ventilation, material options, and long term maintenance. A simple gable roof can be straightforward to repair, while complex designs with multiple valleys, dormers, and low slope sections often require more detailed flashing and water management.
              </p>
              <p>
                In the Charlotte area, heavy seasonal rain and wind driven storms make proper slope and drainage especially important. If you are planning a major project, we recommend pairing roof style decisions with a material choice that matches your goals for lifespan, curb appeal, and warranty coverage.
              </p>
              <p>
                Need help identifying your roof type or choosing the best option for a replacement? Start with a <a href="/services/roof-inspection">free roof inspection</a>, or explore <a href="/materials">roofing materials</a> to compare pros, cons, and costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Find */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What You&apos;ll Find on Every Roof-Type Page</h2>
              <p className="text-gray text-lg">Six data points we cover per shape so you can match your roof to the right material and installation approach.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {whatYoullFind.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roof Types Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">All Roof Shapes</h2>
            <p className="text-gray text-lg">Click any shape for full characteristics, pitch range, material compatibility, and Charlotte-specific guidance.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOF_TYPES.map((roofType) => (
              <Link
                key={roofType.slug}
                href={`/roof-types/${roofType.slug}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition">
                  {roofType.name}
                </h3>
                <p className="text-gray text-sm mb-4">
                  {roofType.description.slice(0, 120)}...
                </p>
                <div className="text-sm text-primary/80 mb-4">
                  <strong>Best for:</strong> {roofType.bestFor.slice(0, 60)}...
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Style Decision Guide */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Roof Shape Decision Guide</h2>
            <p className="text-gray text-lg">Four common use cases in the Charlotte metro — find yours, then drill into the specific shape.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {styleGuides.map((guide) => (
              <div key={guide.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <guide.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-dark text-lg">{guide.title}</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">{guide.summary}</p>
                <p className="text-xs text-gray-700 mb-2">
                  <span className="font-semibold text-primary">Typical spec:</span> {guide.recommendations}
                </p>
                <p className="text-xs text-gray-600">
                  <span className="font-semibold text-dark">Trade-off:</span> {guide.tradeoffs}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Which Roof Type Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Which Roof Type is Right for You?
            </h2>
            <p className="text-gray mb-8">
              The best roof style depends on your home&apos;s architecture, local climate,
              budget, and personal preferences. Here are key factors to consider:
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-light rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <Droplets className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h3 className="font-bold text-primary">Climate Considerations</h3>
                </div>
                <ul className="text-gray text-sm space-y-2">
                  <li>• <strong>Heavy rain:</strong> Steeper slopes (gable, hip) shed water better</li>
                  <li>• <strong>High winds:</strong> Hip roofs offer superior wind resistance</li>
                  <li>• <strong>Hot summers:</strong> Light-colored or reflective materials help</li>
                </ul>
              </div>

              <div className="bg-light rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <Home className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h3 className="font-bold text-primary">Architectural Style</h3>
                </div>
                <ul className="text-gray text-sm space-y-2">
                  <li>• <strong>Colonial homes:</strong> Gable or gambrel roofs</li>
                  <li>• <strong>Ranch style:</strong> Hip or low-slope gable</li>
                  <li>• <strong>Modern design:</strong> Flat or shed roofs</li>
                </ul>
              </div>

              <div className="bg-light rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h3 className="font-bold text-primary">Budget &amp; Maintenance</h3>
                </div>
                <ul className="text-gray text-sm space-y-2">
                  <li>• <strong>Most affordable:</strong> Simple gable roofs</li>
                  <li>• <strong>Lowest maintenance:</strong> Hip roofs, metal materials</li>
                  <li>• <strong>Higher investment:</strong> Mansard, complex designs</li>
                </ul>
              </div>

              <div className="bg-light rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <Wind className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h3 className="font-bold text-primary">Space &amp; Functionality</h3>
                </div>
                <ul className="text-gray text-sm space-y-2">
                  <li>• <strong>Extra living space:</strong> Mansard or gambrel</li>
                  <li>• <strong>Rooftop use:</strong> Flat roofs</li>
                  <li>• <strong>Solar panels:</strong> South-facing shed roofs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Identifying &amp; Choosing</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Roof Shape FAQs</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expert Tip */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-8">
              <div className="flex items-start gap-4">
                <Info className="w-8 h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-primary text-xl mb-2">Expert Tip</h3>
                  <p className="text-gray">
                    Not sure which roof type you have or what style would work best for your
                    home? Our roofing experts can assess your property and provide recommendations
                    based on your specific needs and budget. Schedule a free consultation today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help with Your Roof?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you need repairs, replacement, or a new roof for construction,
            our experts are ready to help with any roof type.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-white text-accent hover:bg-light text-lg px-8"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {SITE_CONFIG.phone}
            </a>
            <EstimateButton
              variant="accent"
              size="lg"
              className="px-8"
            >
              Get Free Instant Estimate
            </EstimateButton>
          </div>
        </div>
      </section>
    </>
  );
}
