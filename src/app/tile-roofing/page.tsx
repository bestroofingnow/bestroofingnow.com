import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
import Link from 'next/link';
import {
  CheckCircle,
  Phone,
  Calendar,
  Shield,
  Star,
  HelpCircle,
  Award,
  Home,
  Clock,
  Thermometer,
  Wrench,
  DollarSign,
  AlertTriangle,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  ServiceSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
  WebPageSchema,
  FeaturedSnippetListAnswerSchema,
  SpeakableContentBlocks,
  FreeInspectionOfferSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Tile Roofing Charlotte NC | Clay & Concrete',
  description:
    'Tile roofing in Charlotte NC — clay (terracotta), concrete, Spanish S, flat slate-look, and synthetic alternatives. 50-100 year lifespan, structural engineering required.',
  keywords: [
    'tile roofing charlotte nc',
    'clay tile roof charlotte',
    'concrete tile roofing charlotte nc',
    'spanish tile roof charlotte',
    'barrel tile charlotte',
    'flat tile charlotte nc',
    'tile roof repair charlotte nc',
    'mediterranean tile roofing charlotte',
    'terracotta roof charlotte',
    'synthetic tile davinci brava',
    'tile roof structural engineering',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/tile-roofing`,
  },
  openGraph: {
    title: 'Tile Roofing Charlotte NC | Clay & Concrete | Best Roofing Now',
    description: 'Premium tile roofing installation and repair in Charlotte NC — clay, concrete, Spanish S, flat slate-look, and synthetic composite alternatives.',
    url: `${SITE_CONFIG.url}/tile-roofing`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Tile roofing in Charlotte NC' }],
  },
};

const services = [
  { icon: Home, title: 'New Installation', description: 'Full clay or concrete tile install with structural engineering review, 2-ply underlayment, and specialty hip/ridge/rake tiles.' },
  { icon: Wrench, title: 'Tile Repair', description: 'Replace cracked, broken, or displaced tiles without disturbing surrounding tiles — walking path protocol protects adjacent tiles.' },
  { icon: Shield, title: 'Underlayment Replacement', description: 'Underlayment fails in 30–50 years, tiles outlast it. Remove tiles, replace 60# felt or synthetic underlayment, re-set tiles.' },
  { icon: Clock, title: 'Tile Restoration', description: 'Clean algae/moss, reseal cracked tiles, replace broken specialty caps, re-point mortar on historic clay roofs.' },
  { icon: Thermometer, title: 'Re-Roofing &amp; Conversion', description: 'Asphalt-to-tile conversion with structural engineering for load increase (250 to 900-1,200 lb/sq delta).' },
  { icon: DollarSign, title: 'Maintenance Programs', description: 'Annual tile inspection, cracked-tile replacement, ridge mortar check, and underlayment condition monitoring.' },
];

const tileTypes = [
  { name: 'Clay Tile (Terracotta)', description: 'Traditional fired-clay tiles. Natural color never fades, develops patina. Highest durability tier. Standard for Mediterranean and Spanish architecture.', lifespan: '75–100 years', weight: '900–1,100 lb/sq', price: '$20–$35 per sq ft installed' },
  { name: 'Concrete Tile', description: 'Molded concrete with surface coloring. 40% less expensive than clay, similar appearance. Multiple color options. Higher weight than clay.', lifespan: '50–75 years', weight: '900–1,200 lb/sq', price: '$14–$22 per sq ft installed' },
  { name: 'Spanish/Barrel S-Tile', description: 'Classic interlocking S-curved profile. Iconic Mediterranean look. Available in clay or concrete.', lifespan: '75–100 years (clay) / 50–75 (concrete)', weight: '900–1,200 lb/sq', price: '$16–$28 per sq ft installed' },
  { name: 'Flat Slate-Look Tile', description: 'Flat profile mimicking natural slate. Modern aesthetic. Lighter than barrel tiles but still heavy vs asphalt.', lifespan: '50–75 years', weight: '800–1,000 lb/sq', price: '$15–$25 per sq ft installed' },
  { name: 'Synthetic Tile Composite', description: 'Polymer composite (DaVinci Slate, Brava Spanish, Classic Metal Tile) — lighter weight (250–400 lb/sq), no structural reinforcement needed, Class A/4 rated.', lifespan: '40–50 years', weight: '250–400 lb/sq', price: '$14–$24 per sq ft installed' },
];

const benefits = [
  'Industry-longest lifespan — clay 75–100 years, concrete 50–75 years',
  'Exceptional durability — fireproof (Class A), termite proof, rot proof',
  'Natural air circulation under tiles reduces attic heat 20–40°F',
  'Low maintenance — tiles themselves need little; underlayment is the limiting factor',
  'Increases property appraisal value on Mediterranean and luxury homes',
  'Made from natural materials — clay/concrete are environmentally sustainable',
  'Wind resistant — rated 150+ MPH when properly installed with hurricane clips',
  '30+ color and profile options — Spanish S, flat slate, French, shake-mimicking',
];

const structuralChecklist = [
  'Verify existing rafter spacing and size can support 900–1,200 lb/square dead load',
  'Engineer review for asphalt-to-tile conversion (250→1,100 lb/sq delta, 4x weight increase)',
  'Confirm header and load-path capacity at bearing walls',
  'Specify 2-ply 60# felt or synthetic underlayment (tile life exceeds underlayment life)',
  'Install tile battens on spaced layout for proper tile engagement',
  'Specify clay bird-stop closures at eaves (prevents nesting and debris)',
  'Install hurricane clips on all tiles in exposed coastal or lakefront spec',
  'Plan hip, ridge, and rake specialty tiles to match field pattern',
  'Document load calcs for insurance and permit submission',
  'For re-roofs: full tear-off required (cannot go over existing shingles)',
];

const faqs = [
  { question: 'How long do tile roofs really last in Charlotte?', answer: 'Clay tile 75–100 years (the tile itself), concrete tile 50–75 years. The critical nuance: underlayment beneath the tiles typically needs replacement at 30–50 years even though the tiles are fine. This is not a defect — it is designed behavior. Charlotte clay tile roofs often outlast 2 underlayment cycles. Total system cost over 100 years is lower than 5 asphalt replacement cycles, but upfront investment is 4–5x higher. Realistic Charlotte expectation: 60–80 years for a complete clay system including one underlayment replacement.' },
  { question: 'How much does tile roofing cost in Charlotte NC?', answer: '2026 Charlotte installed pricing: clay barrel tile $20–$35/sq ft, concrete tile $14–$22/sq ft, Spanish S-tile $16–$28/sq ft, flat slate-look tile $15–$25/sq ft, synthetic tile composite $14–$24/sq ft. A 30-square (3,000 sq ft) Charlotte home runs $42,000–$105,000 depending on material and profile. Add 10–20% for structural engineering and reinforcement on asphalt-to-tile conversions — often $8,000–$25,000 incremental cost. Underlayment replacement (year 30–50) typically runs 40–50% of initial install cost.' },
  { question: 'Can my Charlotte home support a tile roof?', answer: 'Depends — structural engineering required. Asphalt roofs are typically designed for 250 lb/sq dead load. Tile weighs 900–1,200 lb/sq — 4x the asphalt load. Most Charlotte post-1990 homes with truss-style framing require meaningful reinforcement ($8,000–$25,000) to support tile. Older stick-framed homes with oversized rafters sometimes support tile without reinforcement. Synthetic tile composite (DaVinci, Brava) weighs 250–400 lb/sq — roughly equivalent to asphalt — and installs on standard framing with no reinforcement. We run engineer review on every tile estimate.' },
  { question: 'Which Charlotte neighborhoods commonly have tile roofs?', answer: 'Tile is uncommon in the Charlotte metro overall but exists in specific architectural zones: (1) Myers Park and Eastover — historic Mediterranean and Colonial Revival homes; (2) Custom lakefront Lake Norman builds with Mediterranean or Spanish architecture; (3) Foxcroft, SouthPark, Quail Hollow — selective luxury-home specifications; (4) Dilworth — occasional on pre-1940 homes; (5) Historic Matthews — rare, typically on commercial buildings. Most Charlotte HOAs prohibit tile on production homes for aesthetic consistency — verify before specifying.' },
  { question: 'What is the difference between clay and concrete tile?', answer: 'Clay: fired terracotta, natural color (never fades), lighter weight (900–1,100 lb/sq), 75–100 year lifespan, 40% more expensive, premium aesthetic. Concrete: molded cement with surface pigment, color can fade 20–30% over 40 years, heavier (900–1,200 lb/sq), 50–75 year lifespan, 40% less expensive, wider color palette. For heritage architecture: clay. For budget-conscious Mediterranean aesthetic: concrete. For lightest-weight tile-look: synthetic composite (not clay or concrete).' },
  { question: 'Does tile roofing need special installation in Charlotte?', answer: 'Yes — tile requires specialty installation skills uncommon among Charlotte general roofers. Critical details: (1) 2-ply 60# felt or synthetic underlayment (vs single-layer for asphalt); (2) battens for proper tile engagement; (3) bird-stop closures at eaves; (4) hurricane clips on hip/ridge/rake; (5) walking paths during install to prevent tile breakage under foot traffic; (6) specialty hip, ridge, and rake tiles matching field pattern. Improperly installed tile fails in 10–15 years instead of 75+. Ask for specific tile-install photos before hiring any contractor.' },
  { question: 'Are tile roofs good in severe weather?', answer: 'Excellent when properly installed. Wind: rated 150+ MPH with hurricane clips — better than all shingle options. Hail: Class 4 impact rated for most clay and concrete products, withstands 2" hail without breakage. Fire: Class A fire rating (highest) — inherently fireproof material. Ice/snow: handles it fine in Charlotte (rare occurrence). Tree fall: individual tile breakage but easily repaired without disturbing surrounding tiles. Tile is one of the best severe-weather-resistant materials available.' },
  { question: 'Can broken tiles be replaced individually?', answer: 'Yes — and this is one of tile&apos;s major advantages. Individual broken tiles can be replaced by lifting adjacent tiles, removing the broken piece, sliding in a matching replacement, and re-seating. No bundle removal required. Key consideration: matching aged tiles can be challenging — we source closest-match tile from the original manufacturer where possible, or use salvaged older tiles. We keep inventory of common clay and concrete tile profiles for rapid Charlotte repair response.' },
  { question: 'How does insurance treat tile roofing in Charlotte?', answer: 'Mostly favorable. Most NC carriers write homeowner policies for tile roofs without issue — Class A fire rating and 150+ MPH wind resistance are recognized positively. Some carriers offer premium discounts for Class 4 impact-rated tile (similar to Class 4 shingle discounts, 5–15% typical). Replacement cost coverage can be generous given tile&apos;s longevity. Rare concerns: (1) hail damage claim valuation (cosmetic vs functional damage dispute); (2) very old clay tiles where replacement availability is uncertain. We review policy fit during every tile consultation.' },
  { question: 'Should I consider synthetic tile (DaVinci, Brava) instead of real clay?', answer: 'Yes for most Charlotte homes — synthetic is often the smarter specification. Synthetic tile composite costs similar to concrete tile ($14–$24/sq ft) but weighs 250–400 lb/sq (no structural engineering needed), carries Class A fire and Class 4 impact ratings, has 40–50 year transferable warranties, and installs faster. Trade-offs: (1) not accepted in all historic districts (verify first); (2) no true natural material aesthetic; (3) polymer composition is not biodegradable. For custom lakefront builds and HOA-flexible specs, synthetic is often our recommendation over real tile.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Roofing Materials', url: `${SITE_CONFIG.url}/materials` },
  { name: 'Tile Roofing', url: `${SITE_CONFIG.url}/tile-roofing` },
];

export default function TileRoofingPage() {
  const pageUrl = `${SITE_CONFIG.url}/tile-roofing`;

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Tile Roofing",
          description: "Premium tile roofing installation and repair in Charlotte NC with clay and concrete options.",
          slug: "tile-roofing",
        }}
      />
      <WebPageSchema
        name="Tile Roofing Charlotte NC | Clay, Concrete &amp; Synthetic"
        description="Tile roofing in Charlotte NC — clay (terracotta), concrete, Spanish S, flat slate-look, and synthetic alternatives. 50-100 year lifespan, structural engineering included."
        url={pageUrl}
        primaryImage={IMAGES.hero.hero3}
        breadcrumb={breadcrumbItems}
      />
      <FreeInspectionOfferSchema />
      <FeaturedSnippetListAnswerSchema
        question="What tile roofing types does Best Roofing Now install in Charlotte NC?"
        directAnswer="Five tile roof types covering heritage clay, budget concrete, and lightweight synthetic alternatives."
        items={[
          'Clay Tile (terracotta, 75-100 year)',
          'Concrete Tile (40% below clay cost)',
          'Spanish/Barrel S-Tile (Mediterranean)',
          'Flat Slate-Look Tile (modern)',
          'Synthetic Tile Composite (DaVinci, Brava)',
        ]}
        pageUrl={pageUrl}
      />
      <SpeakableContentBlocks includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={pageUrl} pageName="Tile Roofing Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-orange-800 via-orange-700 to-orange-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero3} alt="Tile roofing in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">The Century Roof</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Tile Roofing Charlotte NC
              <br className="hidden md:block" />
              <span className="text-orange-200">Clay, Concrete &amp; Synthetic</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">The ultimate in beauty and longevity</p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Tile roofing across Charlotte NC and Lake Norman — clay (terracotta), concrete, Spanish S-tile, flat slate-look, and synthetic composite alternatives (DaVinci Slate, Brava Spanish). 75–100 year clay lifespan, Class A fire rating, 150+ MPH wind resistance. Structural engineering review included — tile at 900–1,200 lb/sq requires framing assessment; synthetic tile at 250–400 lb/sq installs on standard framing. Common in Myers Park, Eastover, Foxcroft, SouthPark Mediterranean architecture, and custom lakefront builds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" className="bg-white !text-orange-800 hover:bg-white/90" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-800" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-orange-200" />50–100 Year Lifespan</span>
              <span className="flex items-center gap-2"><Award className="w-5 h-5 text-orange-200" />Tile-Specialist Installers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Tile Roofing Services</h2>
            <p className="text-gray text-lg">Complete tile roofing solutions from installation to restoration.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-orange-700" />
                </div>
                <h3 className="font-bold text-dark mb-2">{service.title}</h3>
                <p className="text-gray text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Tile Types &amp; 2026 Pricing</h2>
            <p className="text-gray text-lg">Weight, lifespan, and price vary significantly — match to your structure and goals.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tileTypes.map((tile) => (
              <div key={tile.name} className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-dark text-xl mb-2">{tile.name}</h3>
                <p className="text-gray text-sm mb-4">{tile.description}</p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-dark">Lifespan:</span> <span className="text-gray">{tile.lifespan}</span></p>
                  <p><span className="font-semibold text-dark">Weight:</span> <span className="text-gray">{tile.weight}</span></p>
                  <p><span className="font-semibold text-dark">Price:</span> <span className="text-orange-700 font-medium">{tile.price}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Choose Tile Roofing?</h2>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-700 flex-shrink-0 mt-0.5" />
                    <span className="text-gray">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <SEOImage src={IMAGES.realProjects.drone2} alt="Tile roof installation" width={600} height={450} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">10-Point Tile Install Checklist</h2>
              <p className="text-gray text-lg">What we verify and document on every Charlotte tile install — structural, underlayment, detailing.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {structuralChecklist.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-orange-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-orange-50 rounded-xl border border-orange-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-gray-700">
                  <strong className="text-orange-900">Structural warning:</strong> Most post-1990 Charlotte homes with truss framing cannot support 900–1,200 lb/sq tile without $8,000–$25,000 in reinforcement. Synthetic tile composite (250–400 lb/sq) installs on standard framing with no engineering — often the better path.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Clay vs Concrete vs Synthetic</h2>
              <p className="text-gray text-lg">Three paths to the tile aesthetic — the right choice depends on structure, budget, and HOA.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-light rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Clay Tile</h3>
                <p className="text-xs text-primary font-semibold mb-2">Heritage + longest life</p>
                <p className="text-gray-700 text-sm"><strong>Pros:</strong> 75–100 year life, natural color never fades, accepted everywhere, premium aesthetic.</p>
                <p className="text-gray-700 text-sm mt-2"><strong>Cons:</strong> Most expensive, heavy, requires structural reinforcement.</p>
              </div>
              <div className="bg-light rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Concrete Tile</h3>
                <p className="text-xs text-primary font-semibold mb-2">Mediterranean aesthetic at scale</p>
                <p className="text-gray-700 text-sm"><strong>Pros:</strong> 40% below clay cost, wide color range, 50–75 year life, similar look.</p>
                <p className="text-gray-700 text-sm mt-2"><strong>Cons:</strong> Still heavy (structural work needed), color can fade 20–30% over 40 years.</p>
              </div>
              <div className="bg-light rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Synthetic Composite</h3>
                <p className="text-xs text-primary font-semibold mb-2">Low-weight smart path</p>
                <p className="text-gray-700 text-sm"><strong>Pros:</strong> 250–400 lb/sq (no structural work), Class A/4 rated, 40–50 yr warranty.</p>
                <p className="text-gray-700 text-sm mt-2"><strong>Cons:</strong> Not accepted in all historic districts, polymer composition.</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-700">
                <strong className="text-primary">Related materials:</strong>{' '}
                <Link href="/materials/tile-roofing" className="text-primary hover:underline">Tile Material Guide</Link>{' · '}
                <Link href="/cedar-shake-roofing" className="text-primary hover:underline">Cedar Shake</Link>{' · '}
                <Link href="/standing-seam-metal-roofing" className="text-primary hover:underline">Standing Seam Metal</Link>{' · '}
                <Link href="/architectural-shingles" className="text-primary hover:underline">Architectural Shingles</Link>{' · '}
                <Link href="/materials" className="text-primary hover:underline">All Materials</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange-700 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Interested in Tile Roofing?</h2>
              <p className="text-white/90">Free consultation includes structural engineer review and HOA viability check.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-700" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Consultation</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-orange-700 hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="tile-roofing" count={4} title="Tile Roofing Projects" subtitle="Browse completed tile installations." schemaPageUrl={pageUrl} />

      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Tile Roofing FAQs</h2>
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

      <section className="section bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Explore Other Premium Materials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/cedar-shake-roofing" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Cedar Shake</h3>
              <p className="text-gray text-sm">Natural wood roofing beauty.</p>
            </Link>
            <Link href="/standing-seam-metal-roofing" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Standing Seam Metal</h3>
              <p className="text-gray text-sm">Premium metal roofing solutions.</p>
            </Link>
            <Link href="/architectural-shingles" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Architectural Shingles</h3>
              <p className="text-gray text-sm">Premium asphalt options.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Invest in a Century Roof" subtitle="Get a free consultation for clay, concrete, or synthetic tile roofing." />
    </>
  );
}
