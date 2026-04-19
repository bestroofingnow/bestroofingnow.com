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
  Droplets,
  Thermometer,
  Clock,
  DollarSign,
  Building2,
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
  title: 'Roof Coating Charlotte NC | Silicone, Acrylic, SPF',
  description:
    'Commercial roof coating in Charlotte NC — silicone, acrylic, SPF, elastomeric. Adds 10-15 years to aged membranes at 50-70% below tear-off cost. Duke Energy rebates documented.',
  keywords: [
    'roof coating charlotte nc',
    'silicone roof coating charlotte',
    'commercial roof coating charlotte nc',
    'elastomeric roof coating charlotte',
    'acrylic roof coating',
    'spf roof coating charlotte',
    'reflective roof coating charlotte',
    'flat roof coating charlotte nc',
    'roof restoration charlotte',
    'cool roof coating',
    'capex deferred maintenance coating',
    'duke energy roof rebate',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-coating`,
  },
  openGraph: {
    title: 'Roof Coating Charlotte NC | Silicone & Elastomeric | Best Roofing Now',
    description: 'Professional roof coating services — silicone, acrylic, SPF, elastomeric — to extend membrane life and reduce HVAC load in Charlotte NC commercial buildings.',
    url: `${SITE_CONFIG.url}/roof-coating`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Roof coating in Charlotte NC' }],
  },
};

const coatingTypes = [
  { name: 'Silicone Coating', description: 'Our default Charlotte spec. Handles ponding water without degradation, UV stable, high SRI reflectivity. Typical 22 mil DFT applied in 2 coats.', lifespan: '15–20 years', bestFor: 'Flat roofs with ponding, high UV exposure, Energy Star spec' },
  { name: 'Acrylic (Elastomeric) Coating', description: 'Water-based, flexible, good adhesion to most substrates. Lower cost than silicone but requires good drainage — not for ponding roofs.', lifespan: '10–15 years', bestFor: 'Sloped metal, BUR, mod-bit with proper slope' },
  { name: 'SPF (Spray Polyurethane Foam)', description: 'Foam base adds R-value insulation plus waterproof membrane in one application. Requires annual SPF-compatible top-coat refresh.', lifespan: '20–30 years with recoat cycle', bestFor: 'Adding insulation value, transforming uninsulated steel deck roofs' },
  { name: 'Polyurethane (Aliphatic) Coating', description: 'Extremely durable, great UV and abrasion resistance. Standard for high-traffic roofs with foot traffic and HVAC service paths.', lifespan: '15–20 years', bestFor: 'High-traffic, industrial, military-spec projects' },
  { name: 'Asphalt Emulsion Coating', description: 'Budget restoration for aged BUR and modified bitumen. Good short-term protection; lower UV and weathering resistance than polymer coatings.', lifespan: '5–10 years', bestFor: 'Budget-driven restoration of aged asphalt systems' },
];

const benefits = [
  { icon: Clock, title: 'Extends Roof Life 10–15 Years', description: 'Add meaningful remaining life to aged membranes without tear-off disruption — critical for capex-constrained properties.' },
  { icon: Thermometer, title: 'Cuts Cooling Costs 20–40%', description: 'White silicone reaches SRI 104+. Energy Star eligible coatings reduce Charlotte summer HVAC load materially.' },
  { icon: DollarSign, title: '50–70% Below Tear-Off Cost', description: 'Coating at $2.50–$6/sq ft vs tear-off and replace at $6–$13/sq ft. Often treated as capex-deferred maintenance on commercial books.' },
  { icon: Droplets, title: 'Monolithic Seamless Seal', description: 'Self-flashing around penetrations, curbs, drains, and parapet terminations — no seams or laps to fail.' },
  { icon: Shield, title: 'UV Protection', description: 'Protects the underlying membrane from UV oxidation that accelerates failure on exposed TPO/EPDM/mod-bit.' },
  { icon: Building2, title: 'Minimal Business Disruption', description: 'No tear-off debris, quieter install, tenant spaces stay occupied. Typical 2–5 day application window.' },
];

const candidateRoofs = [
  'TPO, EPDM, or PVC with 5+ years remaining life and under 10% moisture',
  'Metal roofs with surface rust or fading',
  'Modified bitumen or built-up roofs with intact structure',
  'Spray foam (SPF) roofs needing scheduled top-coat refresh',
  'Roofs with minor weathering and isolated leak history',
  'Properties where full replacement is not in the current capex budget',
];

const notCandidateRoofs = [
  'Widespread ponding water documented 48+ hours after rainfall',
  'Moisture survey shows 10%+ wet insulation — coating traps moisture, accelerates failure',
  'Membrane is past 80% of rated life with brittle, cracking surface',
  'Extensive mechanical damage or structural deck issues',
  'Roofs with chronic mold, algae, or biological growth not remediated',
  'Recently repaired or patched areas not fully cured',
];

const applicationChecklist = [
  'Moisture survey — capacitance meter or infrared scan to confirm under 10% wet insulation',
  'Pressure wash with manufacturer-approved cleaner to remove contaminants',
  'Repair all seams, penetrations, and mechanical damage before coating',
  'Verify substrate is dry, temperature above 50°F, humidity under 85%',
  'Reinforce transitions and penetrations with polyester fabric embed',
  'Apply base coat at manufacturer-specified mil thickness with wet-mil gauge',
  'Allow proper cure time between coats per manufacturer spec',
  'Apply top coat to full dry film thickness (typical 22 mil for silicone)',
  'Document SRI values and square footage for Duke Energy rebate submission',
  'Register manufacturer warranty — 10, 15, or 20 year options depending on mil thickness',
];

const faqs = [
  { question: 'How much does roof coating cost in Charlotte NC?', answer: '2026 Charlotte market ranges: silicone coating $3–$6/sq ft (default spec), acrylic elastomeric $2.50–$4.50/sq ft, SPF with protective top-coat $4.50–$8/sq ft, polyurethane aliphatic $4–$7/sq ft, asphalt emulsion $1.75–$3/sq ft. A 20,000 sq ft commercial building typically runs $50,000–$120,000 for silicone — 50–70% below the $140,000–$240,000 cost of full tear-off and replacement. Price variance driven by existing substrate condition, required prep work, and mil thickness (warranty tier).' },
  { question: 'When does coating save money vs full roof tear-off and replacement?', answer: 'Coating wins when: (1) membrane has 5+ years remaining life but is oxidizing; (2) moisture survey shows under 10% wet insulation; (3) ponding is absent or limited; (4) your capex budget is constrained this fiscal year; (5) you want to extend the roof to a planned future tear-off window (often 10–15 years out). Coating LOSES to replacement when moisture is widespread, membrane is past 80% life, or ponding is severe. We perform moisture survey before recommending path.' },
  { question: 'What is the difference between silicone, acrylic, and SPF coatings?', answer: 'Silicone: UV-stable, ponding-tolerant, high SRI reflectivity — our Charlotte default for flat roofs with any ponding history. Acrylic (water-based elastomeric): lower cost, good adhesion, but NOT ponding-tolerant — strong only when drainage is confirmed. SPF (spray polyurethane foam): unique because it adds R-value insulation plus waterproof membrane in one application — used to transform uninsulated steel-deck buildings. Each has different substrate compatibility and surface prep requirements.' },
  { question: 'Can you coat any roof in Charlotte?', answer: 'Most flat and low-slope roofs yes, with clear exclusions. Good candidates: TPO/EPDM/PVC/mod-bit/BUR with under 10% moisture and 5+ years remaining life, metal roofs with surface rust, aged SPF needing top-coat refresh. NOT candidates: widespread ponding, 10%+ wet insulation (coating traps moisture and accelerates deck failure), brittle membrane past 80% life, chronic mold not remediated. We perform capacitance or infrared moisture survey before every Charlotte coating quote.' },
  { question: 'Will coating fix my existing commercial roof leaks?', answer: 'Depends on leak type. Coating CAN seal: micro-cracks, weathered surface, UV-oxidized membrane, minor seam wear, small punctures patched before coating. Coating CANNOT fix: active structural leaks, damaged flashings, membrane punctures under ponding, deteriorated roof drains, wet insulation causing interior water intrusion. Our Charlotte process repairs all identified leak sources BEFORE coating — otherwise the coating traps water and makes the problem worse.' },
  { question: 'How long does coating installation take?', answer: 'Typical Charlotte timelines: 5,000 sq ft 2–3 days, 10,000 sq ft 3–5 days, 25,000 sq ft 5–8 days, 50,000+ sq ft 8–15 days. Weather-dependent — we pause during active rain and require 24 hours between coats for cure. Ideal application windows in Charlotte: April–May and September–October when temperatures stay 55–85°F and humidity is manageable. The roof is walkable within 24 hours of final coat for emergency access; full cure takes 7–14 days.' },
  { question: 'What manufacturer warranties come with roof coatings?', answer: 'Typical options: 10-year material warranty (base spec, single-coat systems), 15-year material warranty (full-system 2-coat with manufacturer-approved prep), 20-year material warranty (premium silicone systems with higher mil thickness), 20-year NDL (No Dollar Limit) system warranty for authorized installers (covers material + labor). We are authorized Charlotte installers for GAF Unisil/Henry Dura-Brite/Carlisle CCW-LM silicone programs, unlocking the strongest warranty tier. Warranty registration requires submission within 90 days of install.' },
  { question: 'Do Charlotte coating projects qualify for energy rebates or tax deductions?', answer: 'Two programs matter. (1) Duke Energy Commercial Business Energy Program — periodically offers rebates on reflective roof upgrades; we document SRI value and square footage for submission. Available credits vary year to year. (2) Commercial tax treatment — coating is often eligible for expense treatment as capex-deferred maintenance (vs capitalized replacement), depending on your accountant&apos;s interpretation of IRS repair regs. We provide itemized documentation to support the classification your CPA recommends.' },
  { question: 'Can I recoat an existing coated roof?', answer: 'Yes — and scheduled recoat cycles are how properly maintained coatings last 20–30+ years. Silicone recoat every 15–20 years, acrylic every 10–15 years, SPF needs top-coat refresh every 10–15 years even when the foam remains intact. Recoat prep is simpler than initial coating — typically clean, spot-repair, and apply full-thickness top coat. Recoat cost runs 60–75% of initial coating application. We track recoat timing on maintenance-program customers and proactively notify before warranty expiration.' },
  { question: 'Does coating change how I inspect and maintain my roof?', answer: 'Largely no — but maintenance matters more. Coated roofs need the same 2x/year inspections (spring and fall): drain and scupper cleanout, visual scan for mechanical damage, sealant checks at penetrations, walkpad verification. Key difference: coating does not tolerate chemical contamination (HVAC condensate, kitchen grease, some cleaning products). We include coating-specific maintenance in PM contracts and can add annual coating-condition reports for customers with 15-year warranty coverage.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Commercial Roofing', url: `${SITE_CONFIG.url}/services/commercial-roofing` },
  { name: 'Roof Coating', url: `${SITE_CONFIG.url}/roof-coating` },
];

export default function RoofCoatingPage() {
  const pageUrl = `${SITE_CONFIG.url}/roof-coating`;

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Roof Coating",
          description: "Professional roof coating services in Charlotte NC to extend roof life and reduce energy costs.",
          slug: "roof-coating",
        }}
      />
      <WebPageSchema
        name="Roof Coating Charlotte NC | Silicone, Acrylic, SPF"
        description="Commercial roof coating in Charlotte NC — silicone, acrylic, SPF, elastomeric. Adds 10-15 years to aged membranes at 50-70% below tear-off cost."
        url={pageUrl}
        primaryImage={IMAGES.hero.hero3}
        breadcrumb={breadcrumbItems}
      />
      <FreeInspectionOfferSchema />
      <FeaturedSnippetListAnswerSchema
        question="What types of roof coating does Best Roofing Now apply in Charlotte NC?"
        directAnswer="Five coating systems covering every commercial roof type and budget."
        items={[
          'Silicone (default for ponding/UV)',
          'Acrylic elastomeric (budget sloped)',
          'SPF (insulation + waterproof)',
          'Polyurethane aliphatic (high-traffic)',
          'Asphalt emulsion (budget restoration)',
        ]}
        pageUrl={pageUrl}
      />
      <SpeakableContentBlocks includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={pageUrl} pageName="Roof Coating Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero3} alt="Roof coating in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-semibold">Extend Your Roof Life 10–15 Years</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Coating Charlotte NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Commercial Roof Restoration</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Extend membrane life at a fraction of replacement cost</p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Commercial roof coating across Charlotte NC and Lake Norman — silicone (our default spec, handles ponding), acrylic elastomeric, SPF (adds insulation R-value), polyurethane aliphatic, and asphalt emulsion. Authorized installer for GAF Unisil, Henry Dura-Brite, and Carlisle CCW-LM silicone programs with 10/15/20-year manufacturer warranties and NDL tier for authorized installers. Moisture survey required before every quote — coating is NOT appropriate for roofs with widespread ponding or 10%+ wet insulation. Duke Energy rebate documentation and capex-deferred-maintenance tax support included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />Licensed &amp; Insured</span>
              <span className="flex items-center gap-2"><Award className="w-5 h-5 text-accent-light" />Certified Applicators</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Benefits of Roof Coating</h2>
            <p className="text-gray text-lg">Why Charlotte commercial building owners choose coating over full replacement.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Coating Types We Apply</h2>
            <p className="text-gray text-lg">We match the coating system to your substrate, slope, and budget.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {coatingTypes.map((coating) => (
              <div key={coating.name} className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-dark text-xl mb-2">{coating.name}</h3>
                <p className="text-gray text-sm mb-4">{coating.description}</p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-dark">Lifespan:</span> <span className="text-gray">{coating.lifespan}</span></p>
                  <p><span className="font-semibold text-dark">Best For:</span> <span className="text-gray">{coating.bestFor}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-light rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" aria-hidden="true" />
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Good Coating Candidates</h2>
              </div>
              <p className="text-gray mb-4 text-sm">Roof coating works best for these situations:</p>
              <ul className="space-y-3">
                {candidateRoofs.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" aria-hidden="true" />
                <h2 className="text-2xl md:text-3xl font-bold text-primary">NOT Coating Candidates</h2>
              </div>
              <p className="text-gray mb-4 text-sm">Coating is the WRONG choice in these situations — tear-off and replace instead:</p>
              <ul className="space-y-3">
                {notCandidateRoofs.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">10-Step Professional Application Process</h2>
              <p className="text-gray text-lg">What we do on every Charlotte coating project — moisture survey through warranty registration.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {applicationChecklist.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-700">
                <strong className="text-primary">Related services:</strong>{' '}
                <Link href="/services/commercial-roofing" className="text-primary hover:underline">Commercial Roofing</Link>{' · '}
                <Link href="/flat-roof-repair" className="text-primary hover:underline">Flat Roof Repair</Link>{' · '}
                <Link href="/services/commercial-roof-maintenance" className="text-primary hover:underline">Commercial PM Programs</Link>{' · '}
                <Link href="/roof-maintenance" className="text-primary hover:underline">Roof Maintenance</Link>{' · '}
                <Link href="/services/roof-inspection" className="text-primary hover:underline">Roof Inspection</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Extend Your Roof&apos;s Life</h2>
              <p className="text-white/90">Get a free moisture survey to see if coating is the right path for your Charlotte property.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Assessment</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="roof-coating" count={4} title="Roof Coating Projects" subtitle="Browse completed roof coatings." schemaPageUrl={pageUrl} />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Roof Coating FAQs</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Related Commercial Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/commercial-roofing" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Commercial Roofing</h3>
              <p className="text-gray text-sm">Full commercial roofing services.</p>
            </Link>
            <Link href="/flat-roof-repair" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Flat Roof Repair</h3>
              <p className="text-gray text-sm">Repair leaks and damage on flat roofs.</p>
            </Link>
            <Link href="/roof-maintenance" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Roof Maintenance</h3>
              <p className="text-gray text-sm">Preventive maintenance programs.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Save Money with Roof Coating" subtitle="Get a free moisture survey from Charlotte's commercial roofing experts." />
    </>
  );
}
