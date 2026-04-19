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
  Droplets,
  Wrench,
  Wind,
  Bug,
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
  title: 'Fascia & Soffit Repair Charlotte NC',
  description:
    'Fascia and soffit repair in Charlotte NC — wood, PVC (Azek/Kleer), and aluminum coil wrap. Ventilated soffit for code-compliant attic airflow. Rot remediation, pest damage.',
  keywords: [
    'fascia repair charlotte nc',
    'soffit repair charlotte nc',
    'fascia replacement charlotte',
    'soffit replacement charlotte',
    'rotted fascia repair',
    'aluminum soffit installation',
    'wood fascia repair charlotte',
    'azek fascia charlotte',
    'kleer pvc fascia',
    'ventilated soffit charlotte',
    'attic ventilation fascia',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/fascia-soffit-repair`,
  },
  openGraph: {
    title: 'Fascia & Soffit Repair Charlotte NC | Best Roofing Now',
    description: 'Fascia and soffit repair and replacement in Charlotte NC — wood, PVC, aluminum wrap, and ventilated soffit systems.',
    url: `${SITE_CONFIG.url}/fascia-soffit-repair`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Fascia and soffit repair in Charlotte NC' }],
  },
};

const services = [
  { icon: Wrench, title: 'Fascia Repair', description: 'Replace rotted 1×6 or 1×8 fascia sections with treated/primed wood, PVC, or aluminum wrap.' },
  { icon: Home, title: 'Fascia Replacement', description: 'Full elevation replacement — commonly bundled with gutter install when hangers can no longer anchor.' },
  { icon: Wind, title: 'Soffit Repair', description: 'Repair or replace individual damaged soffit panels while matching existing vent pattern and profile.' },
  { icon: Shield, title: 'Ventilated Soffit Install', description: 'Vented aluminum or vinyl panels to meet NC code 1/150 unvented or 1/300 balanced-ventilation ratio.' },
  { icon: Bug, title: 'Pest Damage Repair', description: 'Repair soffit holes from squirrels, woodpeckers, bats, and starlings; install stainless hardware cloth barriers.' },
  { icon: Droplets, title: 'Water Damage Repair', description: 'Address fascia/soffit damage from gutter overflow, ice dams, and wind-driven rain — fix root cause plus cosmetics.' },
];

const materials = [
  { name: 'Pine Fascia (Painted Wood)', description: 'Traditional 1×6 or 1×8 pre-primed pine. Classic look, repaintable. Requires 5–7 year paint refresh under Charlotte canopy.', price: '$5–$10 per linear ft' },
  { name: 'PVC Fascia (Azek/Kleer)', description: 'Cellular PVC — never rots, holds paint 20+ years, impervious to pests. Our premium default for tree-canopied Charlotte homes.', price: '$10–$16 per linear ft' },
  { name: 'Aluminum Coil Wrap', description: 'Baked-enamel aluminum wraps existing wood. Fast refresh, eliminates paint maintenance. Hides existing damage — not a substitute for rotted wood replacement.', price: '$7–$13 per linear ft' },
  { name: 'Vinyl Soffit (Vented)', description: 'Affordable, low maintenance. Continuous perforated or center-vent patterns. Standard for budget-driven Charlotte work.', price: '$4–$9 per linear ft' },
  { name: 'Aluminum Soffit (Vented)', description: 'Durable, fire-resistant, holds color. Better airflow specs than vinyl. Preferred on custom builds and historic-district work.', price: '$7–$14 per linear ft' },
  { name: 'PVC Soffit (Beaded/V-Groove)', description: 'Premium cellular PVC — matches PVC fascia. Architectural beaded profile for Historic Matthews, Historic Davidson, Myers Park.', price: '$9–$15 per linear ft' },
];

const damageSigns = [
  'Peeling or flaking paint on fascia',
  'Visible rot or soft spots in wood',
  'Gaps between fascia and roof edge',
  'Pests entering attic through soffit',
  'Sagging or warped fascia boards',
  'Water stains on soffit panels',
  'Missing or damaged soffit vents',
  'Gutters pulling away from fascia',
];

const installChecklist = [
  'Inspect every linear foot of existing fascia with a probe — soft spots indicate rot',
  'Identify rot source (gutter overflow, ice dam, improper drip-edge, pest entry) and fix root cause',
  'Measure total linear footage by elevation for accurate material take-off',
  'Confirm net free vent area (NFVA) meets NC code 1/150 or 1/300 with balanced ridge venting',
  'Check existing soffit for bird/squirrel/bat entry points — install stainless hardware cloth',
  'Select material tier (pine, PVC, aluminum wrap) based on budget and maintenance preference',
  'Color-match to home trim, shutters, and gutter system via baked-enamel coil stock',
  'Verify gutter-removal need vs in-place repair — bundle gutter replacement if hangers damaged',
  'Plan drip-edge integration so water directs into gutter, not behind fascia',
  'Document pre-repair condition photos and pest-entry points for insurance or warranty',
];

const faqs = [
  { question: 'What is the difference between fascia and soffit?', answer: 'Fascia is the vertical board at the roof edge where gutters attach — it caps the ends of roof rafters and provides structural support for the gutter system. Soffit is the horizontal panel tucked under the roof overhang between the fascia and the exterior wall — it provides attic ventilation intake when perforated or vented. Both protect the roof structure and attic from weather, pests, and moisture. Fascia damage is more visible from the street; soffit damage is often hidden until it affects ventilation or allows pest entry.' },
  { question: 'How much does fascia and soffit repair cost in Charlotte NC?', answer: '2026 Charlotte market pricing: pine fascia $5–$10/linear ft installed, PVC (Azek/Kleer) $10–$16/linear ft, aluminum coil wrap $7–$13/linear ft, vinyl vented soffit $4–$9/linear ft, aluminum vented soffit $7–$14/linear ft, PVC beaded soffit $9–$15/linear ft. A typical 2,400 sq ft Charlotte home with 160–200 linear feet of fascia and proportional soffit needs $2,400–$6,400 for full replacement in pine-and-vinyl, or $4,000–$9,500 in PVC. Bundled with new gutter install saves 15–25% on total.' },
  { question: 'Why is my fascia rotting?', answer: 'Five common causes in Charlotte: (1) clogged gutters overflowing behind the fascia — the #1 cause we see, especially under mature oak/pine canopy; (2) ice dam backflow during the rare severe Charlotte freeze events; (3) missing or reversed drip edge directing water behind fascia instead of into gutters; (4) failed paint film on pine allowing moisture intrusion (typical at year 8–12 without refresh); (5) pest damage creating entry points for moisture. We always fix the root cause along with the visible rot — otherwise new fascia rots within 2–4 years.' },
  { question: 'Should I replace fascia/soffit in wood, PVC, or aluminum wrap?', answer: 'Our recommendation matrix: (1) PVC (Azek/Kleer) for homes under heavy Charlotte tree canopy, historic districts requiring traditional profile, and long-term holds — never rots, 20+ year paint life, premium cost; (2) painted pine for budget projects and matching existing material in kind; (3) aluminum coil wrap only when the underlying wood is sound — wraps hide existing damage rather than fix it, and wrapped rot continues to spread invisibly. We do NOT recommend aluminum wrap over compromised wood as a repair method.' },
  { question: 'Can you match my existing fascia color in Charlotte?', answer: 'Yes. We stock 30+ baked-on enamel coil colors matching most Charlotte-area builder palettes, plus we can field-paint pine or PVC with Sherwin-Williams exterior enamel in any custom color. Color-matching includes not just the fascia itself but also the gutter, downspout, and soffit for a visually cohesive elevation. For custom or historic colors we can special-order coil stock in 5–10 business days.' },
  { question: 'Do I need vented soffit in Charlotte, and how much ventilation?', answer: 'Yes — vented soffit is code-required on essentially all residential homes for attic ventilation intake. NC code follows IRC §R806: you need 1 sq ft of net free vent area (NFVA) per 150 sq ft of attic floor, OR 1:300 if you have a balanced system with 50% intake at soffit and 50% exhaust at ridge (the typical modern spec). We calculate NFVA during the estimate and install continuous-vent or center-vent soffit to hit the right ratio. Inadequate soffit venting shortens roof life 3–7 years.' },
  { question: 'Can you repair fascia without replacing my gutters?', answer: 'Usually yes, for targeted-section repairs. We carefully detach gutter sections, replace the damaged fascia, and reinstall the gutters with new hangers if the existing hangers are rusted or bent. For full-elevation fascia replacement or when existing gutters are 15+ years old with visible sealant failure at seams/miters, we typically recommend bundled replacement — the labor overlap saves 30–40% vs doing them separately later. We quote both paths on every estimate.' },
  { question: 'How long does fascia and soffit repair take in Charlotte?', answer: 'Typical timelines: single-section fascia repair 3–5 hours, full elevation fascia replacement 1–1.5 days per side (a typical 4-sided Charlotte home runs 3–5 days total), soffit replacement 0.5–1 day per elevation, bundled fascia+soffit+gutter install 3–6 days total. Weather delays apply during active rain and sustained temperatures below 45°F (paint won&apos;t cure). Most Charlotte jobs are single-week or faster.' },
  { question: 'How does fascia/soffit affect home resale value?', answer: 'Significantly. Visible fascia rot, peeling paint, or damaged soffit is one of the top curb-appeal red flags home inspectors and appraisers flag on Charlotte-area home sales. PVC or freshly painted fascia with aluminum vented soffit typically returns 80–110% of installed cost at resale on Charlotte and Lake Norman homes, in addition to preventing downstream roof and siding damage. For homeowners preparing to sell within 1–3 years, fascia/soffit refresh is high-ROI curb appeal.' },
  { question: 'Will my HOA or architectural review board approve new fascia/soffit?', answer: 'Usually yes for in-kind replacement (same color, same profile). Changes to material or color typically require HOA approval in most Charlotte and Lake Norman communities — especially in Ballantyne, Providence, Olde Sycamore, River Run, Bailey&apos;s Glen, and Davidson Village. Historic districts (Historic Matthews, Historic Davidson, Dilworth, Fourth Ward, Myers Park) require architectural review board approval for any visible exterior trim change. We submit paint chips, material samples, and elevation photos on your behalf.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Services', url: `${SITE_CONFIG.url}/services` },
  { name: 'Fascia & Soffit Repair', url: `${SITE_CONFIG.url}/fascia-soffit-repair` },
];

export default function FasciaSoffitRepairPage() {
  const pageUrl = `${SITE_CONFIG.url}/fascia-soffit-repair`;

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Fascia and Soffit Repair",
          description: "Professional fascia and soffit repair and replacement services in Charlotte NC.",
          slug: "fascia-soffit-repair",
        }}
      />
      <WebPageSchema
        name="Fascia & Soffit Repair Charlotte NC | Wood, PVC, Aluminum"
        description="Fascia and soffit repair in Charlotte NC — wood, PVC (Azek/Kleer), aluminum coil wrap, and ventilated soffit systems for code-compliant attic airflow."
        url={pageUrl}
        primaryImage={IMAGES.hero.hero3}
        breadcrumb={breadcrumbItems}
      />
      <FreeInspectionOfferSchema />
      <FeaturedSnippetListAnswerSchema
        question="What are the signs of fascia and soffit damage?"
        directAnswer="Eight common warning signs indicate fascia or soffit damage on Charlotte NC homes."
        items={damageSigns}
        pageUrl={pageUrl}
      />
      <SpeakableContentBlocks includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={pageUrl} pageName="Fascia Soffit Repair Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero3} alt="Fascia and soffit repair in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Home className="w-4 h-4" />
              <span className="text-sm font-semibold">Protect Your Roof Edge</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Fascia &amp; Soffit Repair
              <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Expert repair and replacement for your roof edge</p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Fascia and soffit repair across Charlotte NC and Lake Norman — painted pine, PVC (Azek and Kleer), aluminum coil wrap, and ventilated soffit systems in vinyl, aluminum, and PVC. Code-compliant attic ventilation (1/150 or 1/300 NFVA ratio), pest-damage remediation with stainless hardware cloth, and root-cause fixes for gutter overflow, ice-dam backflow, and drip-edge failure. Color-matched coil stock and bundled gutter-replacement available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />Licensed &amp; Insured</span>
              <span className="flex items-center gap-2"><Award className="w-5 h-5 text-accent-light" />BBB A+ Rated</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Fascia &amp; Soffit Services</h2>
            <p className="text-gray text-lg">Complete repair and replacement for your Charlotte home&apos;s roof edge.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Signs You Need Fascia or Soffit Repair</h2>
              <p className="text-gray text-lg mb-6">Watch for these warning signs of fascia and soffit damage:</p>
              <ul className="space-y-3">
                {damageSigns.map((sign, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <SEOImage src={IMAGES.realProjects.drone1} alt="Fascia and soffit inspection" width={600} height={450} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Material Options &amp; 2026 Pricing</h2>
            <p className="text-gray text-lg">Six material tiers — match to your budget, maintenance preference, and HOA requirements.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material) => (
              <div key={material.name} className="bg-light p-6 rounded-xl">
                <h3 className="font-bold text-dark mb-2">{material.name}</h3>
                <p className="text-gray text-sm mb-4">{material.description}</p>
                <p className="text-primary font-bold">{material.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">10-Point Fascia &amp; Soffit Assessment</h2>
              <p className="text-gray text-lg">What we check and document on every Charlotte job — ventilation math, root causes, color matching.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {installChecklist.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Bundle Decision: With Gutters or Standalone?</h2>
              <p className="text-gray text-lg">Two common fascia-repair paths — the right choice depends on gutter age and hanger condition.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-light rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Standalone Fascia Repair</h3>
                <p className="text-xs text-primary font-semibold mb-2">Gutters less than 10 years old, hangers tight</p>
                <p className="text-gray-700 text-sm">We carefully detach gutter sections, replace damaged fascia, reinstall gutters with new hangers. Saves the gutter-replacement cost when gutters still have useful life. Faster project, lower total cost.</p>
              </div>
              <div className="bg-light rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Bundled Fascia + Gutter Replacement</h3>
                <p className="text-xs text-primary font-semibold mb-2">Gutters 15+ years old or hangers failing</p>
                <p className="text-gray-700 text-sm">Replace fascia and install new seamless 5" or 6" K-style gutters together. Labor overlap saves 30–40% vs sequencing. Also the right time to upgrade downspout sizing if stormwater has been a problem.</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-700">
                <strong className="text-primary">Related services:</strong>{' '}
                <Link href="/gutter-installation-matthews-nc" className="text-primary hover:underline">Gutter Installation</Link>{' · '}
                <Link href="/gutter-repair" className="text-primary hover:underline">Gutter Repair</Link>{' · '}
                <Link href="/services/gutters" className="text-primary hover:underline">Gutter Services</Link>{' · '}
                <Link href="/services/siding" className="text-primary hover:underline">Siding Services</Link>{' · '}
                <Link href="/services/roof-ventilation" className="text-primary hover:underline">Roof Ventilation</Link>{' · '}
                <Link href="/services/roof-repair" className="text-primary hover:underline">Roof Repair</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Damaged Fascia or Soffit?</h2>
              <p className="text-white/90">Get a free inspection with root-cause analysis and 2026 estimate.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="fascia-soffit-repair" count={4} title="Fascia &amp; Soffit Projects" subtitle="Browse completed fascia and soffit repairs." schemaPageUrl={pageUrl} />

      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Fascia &amp; Soffit FAQs</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/gutter-repair" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Gutter Repair</h3>
              <p className="text-gray text-sm">Fix sagging, leaking, or damaged gutters.</p>
            </Link>
            <Link href="/siding-services" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Siding Services</h3>
              <p className="text-gray text-sm">Complete siding installation and repair.</p>
            </Link>
            <Link href="/ventilation" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Roof Ventilation</h3>
              <p className="text-gray text-sm">Improve attic ventilation and extend roof life.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Protect Your Roof Edge" subtitle="Get a free estimate for fascia and soffit repair or replacement." />
    </>
  );
}
