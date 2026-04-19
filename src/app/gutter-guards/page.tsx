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
  Leaf,
  Droplets,
  Clock,
  DollarSign,
  Home,
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
  title: 'Gutter Guards Charlotte NC | Micro-Mesh, Reverse Curve',
  description:
    'Gutter guard installation in Charlotte NC — stainless micro-mesh (our default), reverse-curve, screen, foam, brush. Engineered for Charlotte oak/pine/sweetgum canopy.',
  keywords: [
    'gutter guards charlotte nc',
    'gutter protection charlotte',
    'leaf guard charlotte nc',
    'gutter screens charlotte',
    'micro mesh gutter guards charlotte',
    'stainless micro mesh charlotte',
    'reverse curve gutter guards',
    'leaffilter charlotte nc',
    'guttergloveve charlotte',
    'leafguard charlotte',
    'gutter cover installation',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gutter-guards`,
  },
  openGraph: {
    title: 'Gutter Guards Charlotte NC | Micro-Mesh Default | Best Roofing Now',
    description: 'Professional gutter guard installation in Charlotte NC — stainless micro-mesh for heavy canopy, reverse-curve, screen, foam, brush. 5 types, 5 price tiers.',
    url: `${SITE_CONFIG.url}/gutter-guards`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Gutter guards in Charlotte NC' }],
  },
};

const guardTypes = [
  { name: 'Stainless Micro-Mesh', description: 'Fine 316-grade stainless mesh (~50 micron) crimped to top of gutter. Blocks oak tassels, pine needles, sweetgum balls, and shingle grit. Our default spec for Charlotte.', effectiveness: 'Excellent (99%+)', price: '$15–$30/ft installed', bestFor: 'Heavy tree canopy, Charlotte default' },
  { name: 'Reverse-Curve (Surface Tension)', description: 'Solid-topped cover uses water surface tension to wrap around curve into gutter. Debris slides off. Effective in light-to-moderate debris, can overshoot in heavy Piedmont downpours.', effectiveness: 'Good (80–90%)', price: '$12–$25/ft installed', bestFor: 'Light debris, simple roofs' },
  { name: 'Aluminum Screen', description: 'Expanded aluminum mesh with larger holes. Catches leaves, lets smaller debris (shingle grit, pine needles) through. Budget option.', effectiveness: 'Fair (60–75%)', price: '$5–$10/ft installed', bestFor: 'Leaf-only debris, budget-driven' },
  { name: 'Foam Inserts', description: 'Polyurethane foam blocks sit inside gutter. DIY-friendly. Degrades in Charlotte humid climate in 3–5 years — not a long-term solution.', effectiveness: 'Fair (50–70%, degrades)', price: '$3–$6/ft installed', bestFor: 'Short-term budget, renters' },
  { name: 'Bottle Brush', description: 'Cylindrical bristles fill the gutter. Easy to rinse. Vulnerable to matting under heavy wet pine needle load.', effectiveness: 'Fair (50–70%)', price: '$4–$8/ft installed', bestFor: 'Light leaf debris, DIY option' },
];

const benefits = [
  { icon: Leaf, title: 'Annual Cleanout Drop — 60–80%', description: 'With stainless micro-mesh, typical cleanout frequency drops from 2–4 times/year to annual or biennial rinse.' },
  { icon: Droplets, title: 'Prevents Overflow Damage', description: 'Clogged gutters during Piedmont thunderstorms overflow behind fascia, causing rot and foundation erosion.' },
  { icon: Shield, title: 'Protects Gutter Investment', description: 'Debris weight is a leading cause of hanger fatigue and fascia pull-out — guards extend gutter life 5–8 years.' },
  { icon: Home, title: 'Prevents Foundation Damage', description: 'Blocked gutters discharge at grade against foundation; guards keep downspouts flowing into proper discharge path.' },
  { icon: Clock, title: 'Eliminates Fall Risk', description: 'Annual ladder-fall risk on gutter cleaning is the #1 home-injury claim — guards remove the task almost entirely.' },
  { icon: DollarSign, title: 'Cleaning Cost Offset', description: 'Avoid $125–$300/year professional cleaning. Micro-mesh pays back in 5–7 years; other tiers in 3–5 years.' },
];

const idealFor = [
  'Homes under mature oak, pine, or sweetgum canopy',
  'Multi-story homes (dangerous to DIY clean)',
  'Vacation homes or rental properties with no on-site caretaker',
  'Elderly homeowners or those unable to safely use ladders',
  'Homes with documented foundation or basement moisture issues',
  'Neighborhoods with known annual leaf volume — Olde Sycamore, Matthews Woods, Dilworth, Myers Park, Historic Davidson',
];

const installMethods = [
  { method: 'Snap-On (Most Common)', description: 'Guard clips or snaps onto gutter edges. Works with most existing 5"/6" K-style aluminum. Easiest install, easiest to remove for occasional deep cleaning.', useCase: 'Existing gutters under 10 years old, standard K-style profile' },
  { method: 'Screw-Down', description: 'Stainless screws secure guard to outer gutter lip. More permanent, withstands wind uplift on exposed roofs.', useCase: 'Coastal or lakefront homes, exposed ridgeline installations' },
  { method: 'Integrated with New Gutters', description: 'Guards factory-integrated or installed during new gutter install. Best continuous seal, priority pricing when bundled.', useCase: 'Re-roof or gutter replacement projects — bundle for savings' },
];

const faqs = [
  { question: 'Do gutter guards really work in Charlotte NC?', answer: 'Yes — the best ones. Stainless 316-grade micro-mesh guards block 99%+ of Charlotte debris including oak tassels, pine needles, sweetgum balls, and shingle grit. Reverse-curve guards work but can overshoot in heavy Piedmont downpours (2-6"/hour thunderstorm intensity). Screen and foam guards are partial solutions that block leaves but still let smaller debris through. Do NOT spend money on guards that will fail within 3-5 years — invest once in micro-mesh for 20+ year performance.' },
  { question: 'How much do gutter guards cost in Charlotte NC?', answer: '2026 Charlotte installed pricing by type: stainless micro-mesh $15–$30/ft (our default), reverse-curve $12–$25/ft, aluminum screen $5–$10/ft, foam inserts $3–$6/ft (short-term), bottle brush $4–$8/ft. A typical 2,400 sq ft Charlotte home needs 150–200 linear feet of gutter; expect $2,300–$6,000 for micro-mesh, $1,800–$5,000 for reverse-curve, $750–$2,000 for screen. Bundling with new gutter install saves 15–25% on guard labor.' },
  { question: 'Do "never clean gutters again" claims hold up?', answer: 'Mostly marketing, with a kernel of truth. Quality stainless micro-mesh dramatically reduces cleaning — typical drop from 2–4 times/year to annual or biennial surface rinse. But "never" is overstating it: debris still accumulates on TOP of the mesh and occasionally needs a leaf-blower or hose rinse (5 minutes, no ladder needed for many configurations). Products that claim "never clean again" are marketing against the real-world Charlotte heavy-canopy use case — take those claims with skepticism regardless of brand.' },
  { question: 'Which gutter guard is best for heavy Charlotte tree canopy?', answer: 'Stainless 316-grade micro-mesh, consistently. Neighborhoods under heavy canopy (Olde Sycamore, Matthews Woods, Providence Country Club, Dilworth, Myers Park, Historic Davidson) deposit oak tassels, loblolly pine needles (2-3 inches long), sweetgum gum balls, and maple helicopters — each requires different filtration. Micro-mesh handles all of them with 99%+ block rate. Reverse-curve gets overwhelmed by pine needles and gum balls. Screens let 2-inch pine needles through. Foam degrades in humid Charlotte climate within 3-5 years.' },
  { question: 'How long do gutter guards last in Charlotte?', answer: '316-grade stainless micro-mesh lasts 20+ years in Charlotte climate — the stainless resists UV and saltwater better than aluminum or plastic variants. Aluminum reverse-curve 15–20 years. Aluminum screens 10–15 years. Foam inserts 3–5 years then degrade to mush. Bottle brush 5–10 years before bristles mat. Warranty terms: micro-mesh products typically carry 20-40 year transferable product warranties from major manufacturers (LeafFilter, Gutterglove, MasterShield).' },
  { question: 'Will gutter guards void my gutter warranty?', answer: 'Not if installed correctly. Most gutter manufacturer warranties specifically permit guard installation; some require the guard be installed without drilling new holes in the gutter trough (we use snap-on or existing-hanger attachments when possible). Improperly installed screws through the gutter bottom CAN void some warranties. We confirm compatibility before install and document the install method so your gutter warranty stays in force.' },
  { question: 'Can gutter guards be installed on my existing Charlotte gutters?', answer: 'Yes, in most cases. Existing gutters under 10 years old with .032" aluminum trough (our standard spec) accept all guard types. Older sectional gutters from the 1990s–2000s may need edge reinforcement for snap-on micro-mesh — an extra $1–$2/ft. Gutters with rust or active seam leaks should be repaired or replaced FIRST — no guard on a failing gutter fixes the underlying problem. We inspect during the free estimate and flag any prep work needed.' },
  { question: 'Do gutter guards work during heavy Charlotte rainstorms?', answer: 'Quality micro-mesh and reverse-curve handle Piedmont thunderstorms (typically 2–6 inch/hour intensity) when properly sized. Concerns: (1) undersized 5" gutters with any guard will still overflow during tropical remnant events (Helene 2024 delivered 4"+ single-event rainfall) — upsizing to 6" gutter is the real fix; (2) reverse-curve can overshoot in 4"+/hour intensity, spraying water past the gutter; (3) debris sitting ON TOP of guards blocks flow — micro-mesh needs occasional rinsing. For extreme rain performance: 6" gutter + 3x4" downspouts + stainless micro-mesh combo is the gold-standard spec.' },
  { question: 'Can I install gutter guards myself?', answer: 'Foam inserts and bottle brush — yes, these are legitimately DIY-appropriate. Screens — yes, with care (ladder safety is the main issue). Reverse-curve and micro-mesh — NO, these require adjusting gutter pitch, integrating with shingle lap, and maintaining warranty-compliant installation. Big-box store DIY micro-mesh kits often damage gutters, void manufacturer warranties, and perform worse than professional install. The $1,500–$4,000 professional install gap vs DIY is one of the highest-ROI pro-install decisions Charlotte homeowners make.' },
  { question: 'Do gutter guards qualify for insurance or tax benefits?', answer: 'Not directly — gutter guards are maintenance-category improvements and do not qualify for federal energy tax credits, unlike solar skylights or Class 4 shingles. HOWEVER, they can qualify for property-value increase at resale (typical 1.5–2x installed cost returned) and may reduce foundation-repair insurance claims in areas with documented gutter-overflow history. Some Charlotte-area insurance carriers give minor premium discounts for documented foundation-protection measures — rare but worth asking your agent.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Gutter Services', url: `${SITE_CONFIG.url}/gutter-installation-huntersville-nc` },
  { name: 'Gutter Guards', url: `${SITE_CONFIG.url}/gutter-guards` },
];

export default function GutterGuardsPage() {
  const pageUrl = `${SITE_CONFIG.url}/gutter-guards`;

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Gutter Guard Installation",
          description: "Professional gutter guard installation in Charlotte NC to keep debris out of your gutters.",
          slug: "gutter-guards",
        }}
      />
      <WebPageSchema
        name="Gutter Guards Charlotte NC | Micro-Mesh, Reverse Curve"
        description="Gutter guard installation in Charlotte NC — stainless micro-mesh default, reverse-curve, screen, foam, brush. 5 types, 5 price tiers for every budget."
        url={pageUrl}
        primaryImage={IMAGES.hero.hero3}
        breadcrumb={breadcrumbItems}
      />
      <FreeInspectionOfferSchema />
      <FeaturedSnippetListAnswerSchema
        question="What gutter guard types does Best Roofing Now install in Charlotte NC?"
        directAnswer="Five gutter guard types covering every budget and canopy scenario."
        items={[
          'Stainless 316-grade micro-mesh (default for heavy canopy)',
          'Reverse-curve (surface tension)',
          'Aluminum expanded screen (budget)',
          'Polyurethane foam inserts (short-term)',
          'Bottle brush cylindrical bristles',
        ]}
        pageUrl={pageUrl}
      />
      <SpeakableContentBlocks includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={pageUrl} pageName="Gutter Guards Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero3} alt="Gutter guards in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-semibold">Engineered for Charlotte Canopy</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Gutter Guards Charlotte NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Micro-Mesh, Reverse-Curve &amp; More</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Professional gutter protection sized to Piedmont debris load</p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Gutter guard installation across Charlotte NC and Lake Norman — 5 systems ranging from stainless 316-grade micro-mesh (our default for the heavy oak, loblolly pine, sweetgum, and maple canopy common in Matthews, Davidson, Dilworth, Myers Park, and lakefront subdivisions) down to budget foam inserts. Stainless micro-mesh blocks 99%+ of Charlotte debris and drops typical cleanout frequency from 2–4 times/year to annual or biennial. Installed on existing gutters or integrated with new gutter systems for bundled savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />Licensed &amp; Insured</span>
              <span className="flex items-center gap-2"><Award className="w-5 h-5 text-accent-light" />Lifetime Warranty Options</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Benefits of Gutter Guards</h2>
            <p className="text-gray text-lg">Why thousands of Charlotte homeowners under heavy canopy choose gutter protection.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{benefit.title}</h3>
                <p className="text-gray text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Gutter Guard Types &amp; 2026 Pricing</h2>
            <p className="text-gray text-lg">Five systems ranked by effectiveness — stainless micro-mesh is our Charlotte default.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guardTypes.map((guard) => (
              <div key={guard.name} className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-dark text-xl mb-2">{guard.name}</h3>
                <p className="text-gray text-sm mb-4">{guard.description}</p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-dark">Effectiveness:</span> <span className="text-gray">{guard.effectiveness}</span></p>
                  <p><span className="font-semibold text-dark">Price:</span> <span className="text-primary font-medium">{guard.price}</span></p>
                  <p><span className="font-semibold text-dark">Best For:</span> <span className="text-gray">{guard.bestFor}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Installation Methods</h2>
              <p className="text-gray text-lg">Three install approaches — match to your gutter condition and bundling opportunity.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {installMethods.map((method) => (
                <div key={method.method} className="bg-light rounded-xl p-6 border border-gray-100">
                  <h3 className="font-bold text-primary mb-2">{method.method}</h3>
                  <p className="text-gray-700 text-sm mb-3">{method.description}</p>
                  <p className="text-xs text-gray-600">
                    <span className="font-semibold text-dark">Best for:</span> {method.useCase}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-700">
                <strong className="text-primary">Related services:</strong>{' '}
                <Link href="/gutter-installation-matthews-nc" className="text-primary hover:underline">New Gutter Installation</Link>{' · '}
                <Link href="/gutter-repair" className="text-primary hover:underline">Gutter Repair</Link>{' · '}
                <Link href="/services/gutter-cleaning" className="text-primary hover:underline">Gutter Cleaning</Link>{' · '}
                <Link href="/fascia-soffit-repair" className="text-primary hover:underline">Fascia &amp; Soffit</Link>{' · '}
                <Link href="/services/gutters" className="text-primary hover:underline">All Gutter Services</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Gutter Guards Are Ideal For</h2>
              <ul className="space-y-3">
                {idealFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <SEOImage src={IMAGES.realProjects.drone1} alt="Gutter guards installed on home" width={600} height={450} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Tired of Cleaning Gutters?</h2>
              <p className="text-white/90">Get a free estimate for stainless micro-mesh — 99%+ debris block for Charlotte canopy.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="gutter-guards" count={4} title="Gutter Guard Projects" subtitle="Browse completed gutter guard installations." schemaPageUrl={pageUrl} />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Gutter Guard FAQs</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-light rounded-xl p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Related Gutter Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/gutter-installation-huntersville-nc" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Gutter Installation</h3>
              <p className="text-gray text-sm">New seamless gutter systems.</p>
            </Link>
            <Link href="/gutter-repair" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Gutter Repair</h3>
              <p className="text-gray text-sm">Fix leaks, sagging, and damage.</p>
            </Link>
            <Link href="/fascia-soffit-repair" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Fascia &amp; Soffit</h3>
              <p className="text-gray text-sm">Repair and replacement services.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Protect Your Gutters from Debris" subtitle="Get a free estimate for professional gutter guard installation." />
    </>
  );
}
