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
  Wind,
  Thermometer,
  Home,
  DollarSign,
  Clock,
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
  title: 'Ridge Vent Installation Charlotte NC',
  description:
    'Ridge vent installation in Charlotte NC — external baffle shingle-over design, balanced 1:300 ventilation to NC code IRC R806, paired with matched soffit intake. Free estimates.',
  keywords: [
    'ridge vent installation charlotte nc',
    'ridge vent charlotte',
    'roof ventilation charlotte nc',
    'attic ventilation charlotte',
    'ridge vent replacement charlotte',
    'roof vent installation charlotte nc',
    'air vent ridge vent',
    'gaf cobra ridge vent',
    'balanced attic ventilation',
    'irc r806 ventilation',
    'nfva ratio calculator',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/ridge-vent-installation`,
  },
  openGraph: {
    title: 'Ridge Vent Installation Charlotte NC | Balanced Ventilation | Best Roofing Now',
    description: 'Ridge vent installation for balanced 1:300 attic ventilation to NC code IRC R806 — shingle-over design, external baffle weather protection.',
    url: `${SITE_CONFIG.url}/ridge-vent-installation`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Ridge vent installation in Charlotte NC' }],
  },
};

const benefits = [
  { icon: Thermometer, title: 'Reduces Attic Heat 20–40°F', description: 'Hot air exits through ridge, dramatically cooler attic in Charlotte summers when attics hit 140–160°F with inadequate ventilation.' },
  { icon: DollarSign, title: 'Lowers Summer Energy Bills 10–15%', description: 'Cooler attic reduces AC load — Charlotte summer savings typically $200–$450/year on 2,000–3,000 sq ft homes.' },
  { icon: Clock, title: 'Extends Shingle Life 3–7 Years', description: 'Underventilated attics cook shingles from below, accelerating granule loss and cracking — ventilation is the #1 preventable cause of premature shingle failure.' },
  { icon: Wind, title: 'Prevents Moisture & Mold', description: 'Winter condensation in attics causes mold, rotted decking, and drywall damage. Ridge vent exhausts moisture year-round.' },
  { icon: Home, title: 'Invisible Clean Profile', description: 'Shingle-over ridge vent is nearly invisible from street level — no box vents or turbines to clutter the roofline.' },
  { icon: Shield, title: 'External Baffle Weather Protection', description: 'Quality vents (GAF Cobra, Air Vent ShingleVent II) include external baffle that blocks wind-driven rain and snow infiltration.' },
];

const howItWorks = [
  { step: 1, title: 'Air Enters Soffit', description: 'Fresh air enters through perforated or vented soffit panels at the eaves (intake).' },
  { step: 2, title: 'Air Rises via Stack Effect', description: 'As attic air warms, natural buoyancy drives it up toward the roof peak.' },
  { step: 3, title: 'Air Exits Ridge Vent', description: 'Warm, moist air escapes through the continuous ridge vent along the roof peak (exhaust).' },
  { step: 4, title: 'Continuous Balanced Flow', description: '50/50 intake-to-exhaust ratio creates constant year-round airflow that keeps the attic dry and cool.' },
];

const ventTypes = [
  { name: 'Shingle-Over Ridge Vent (External Baffle)', description: 'Our default spec. External baffle deflects wind-driven rain. Covered by matching ridge-cap shingles for seamless look. GAF Cobra Snow Country, Air Vent ShingleVent II, Owens Corning VentSure.', price: '$10–$18/linear ft installed', bestFor: 'Asphalt shingle roofs (95% of Charlotte homes)' },
  { name: 'Internal Baffle Ridge Vent', description: 'Older design with internal baffle only. Lower cost but less weather resistant than external-baffle products. Discontinued by most major manufacturers.', price: '$7–$12/linear ft installed', bestFor: 'Budget retrofits, simple roof geometries' },
  { name: 'Aluminum Strip Ridge Vent', description: 'Metal ridge vent for standing seam and exposed-fastener metal roofs. Integrates with panel ridge cap system.', price: '$14–$22/linear ft installed', bestFor: 'Metal roofs' },
  { name: 'Low-Profile Continuous Ridge Vent', description: 'Ultra-low-profile design for architectural sensitivity (historic districts, HOAs with visible-ridge restrictions).', price: '$13–$20/linear ft installed', bestFor: 'Historic Davidson, Historic Matthews, Dilworth, Myers Park' },
];

const commonFailures = [
  'Intake soffit vents blocked by insulation (attic blown over vent chutes)',
  'Ridge slot cut too narrow (under 1.5" per side of ridge board)',
  'Ridge slot cut too wide — compromises structural integrity',
  'No matching soffit intake — ridge vent alone does not work',
  'Painted-over or paint-clogged soffit vents',
  'Ridge vent installed over gable roof without ridge (impossible)',
  'Undersized net free vent area (NFVA) vs attic square footage',
  'Cap shingles nailed through the ridge vent body (blocks airflow)',
  'Competing ventilation (box vents + ridge vent short-circuits airflow)',
  'Bugs, bird nests, or debris accumulated in vent channel over time',
];

const faqs = [
  { question: 'What is a ridge vent and why does my Charlotte home need one?', answer: 'A ridge vent is a continuous exhaust vent installed along the peak of your roof, allowing warm moist attic air to escape. Paired with matching soffit intake vents, it creates the balanced ventilation required by NC code (IRC §R806) to prevent moisture damage, shingle deterioration, and summer heat buildup. Charlotte attics without balanced ventilation commonly reach 140–160°F in summer — this cooks shingles from below, cutting roof life 25–40% and adding 10–15% to summer cooling bills.' },
  { question: 'How much does ridge vent installation cost in Charlotte NC?', answer: '2026 installed pricing: shingle-over external-baffle vent $10–$18/linear ft (our default), aluminum strip for metal roofs $14–$22/ft, low-profile architectural $13–$20/ft. A typical Charlotte home has 30–50 linear feet of ridge, so expect $400–$900 retrofit installation. Bundled with a re-roof project the install is often $300–$600 extra (labor overlap). Ventilation inspection and NFVA calculation are included with every estimate at no cost.' },
  { question: 'What does NC code require for attic ventilation?', answer: 'NC building code follows IRC §R806: 1 square foot of net free vent area (NFVA) per 150 square feet of attic floor (unbalanced), OR 1:300 with balanced 50/50 split between intake (soffit) and exhaust (ridge). The 1:300 balanced spec is modern standard. Example: 1,500 sq ft attic needs 5 sq ft NFVA total (720 sq in) split 50/50 between soffit intake and ridge exhaust. We calculate this on every Charlotte estimate — underventilation voids most shingle manufacturer warranties.' },
  { question: 'Can ridge vents be retrofitted to my existing Charlotte roof?', answer: 'Yes, on any gable, hip, or dutch-gable roof with a continuous ridge. We cut a 1.5"–2" slot along each side of the ridge board, remove existing cap shingles, install the ridge vent, and replace with matching cap shingles. Typical retrofit is 1–2 days on a standard 2,400 sq ft Charlotte home. Cannot retrofit to: flat roofs (use commercial exhaust systems), shed roofs without a ridge line, or homes with severely inadequate soffit intake (soffit fix comes first).' },
  { question: 'Do I need both ridge vents and soffit vents?', answer: 'Yes, always. Ridge vent alone does nothing without matching soffit intake — air has nowhere to enter the attic, so there is no pressure differential to drive exhaust. This is the #1 ventilation failure mode we diagnose on older Charlotte homes: a ridge vent exists but soffits are painted over, blocked by insulation, or missing. We inspect both intake and exhaust during every estimate and recommend balancing if one is undersized.' },
  { question: 'Are ridge vents better than box vents or turbines?', answer: 'Generally yes. Ridge vents provide uniform ventilation across the entire attic (continuous along the peak) vs box vents (discrete points that create ventilation "dead zones"). No moving parts to fail (turbines bearings fail at year 10–15). Lower visual profile. Better weather protection with external-baffle design. The one exception: very short ridge lengths (under 15 ft) may not provide adequate NFVA — we add box vents as supplemental exhaust in those cases, but NEVER mix ridge vent with turbines (they short-circuit each other).' },
  { question: 'Will ridge vents leak during Charlotte thunderstorms?', answer: 'Not when properly specified and installed. Quality external-baffle ridge vents (GAF Cobra Snow Country, Air Vent ShingleVent II, Owens Corning VentSure) are specifically engineered to block wind-driven rain at up to 110 MPH. Leaks trace to: (1) improper slot cut — too wide or too close to edges; (2) missing or incorrectly installed cap shingles; (3) paint-clogged baffles; (4) cheap internal-baffle products in high-exposure locations. We spec external-baffle products on every Charlotte job and install per manufacturer instructions.' },
  { question: 'Shingle-over vs exposed ridge cap — which is better?', answer: 'Shingle-over (covered by matching cap shingles) wins on every axis for residential roofs: (1) seamless appearance blending with the roofline; (2) better UV protection of the vent body (plastic baffles degrade when exposed); (3) warranty-compliant with most shingle manufacturers; (4) price parity with exposed-ridge products. Exposed aluminum ridge caps are appropriate on metal roofs and commercial shed designs but uncommon for residential.' },
  { question: 'Does my shingle warranty require balanced ventilation?', answer: 'Yes — every major shingle warranty (GAF, CertainTeed, Owens Corning, Malarkey, Atlas) explicitly requires ventilation meeting NC code IRC §R806. Inadequate ventilation is the #1 manufacturer warranty denial reason. Specifically: a 20-year-old shingle warranty claim can be denied because an attic was underventilated from year 1. Our ridge vent installation includes written NFVA calculation documentation kept on file to support future warranty claims.' },
  { question: 'Can ridge vents be added during a re-roof?', answer: 'Yes — this is the ideal time. During tear-off we: (1) expose the ridge board for clean slot cutting; (2) verify soffit intake before installing exhaust (avoiding the mismatch problem); (3) integrate ridge vent flashing with new underlayment for weather-tight seal; (4) install matching ridge-cap shingles per manufacturer spec. Adding ridge vent during a re-roof costs $300–$600 incremental — significantly cheaper than retrofitting later. We always recommend the upgrade when re-roofing a ventilation-lacking home.' },
  { question: 'What if my existing soffit vents are inadequate for a ridge vent install?', answer: 'We fix soffits first. Common Charlotte issues: (1) solid soffit with no vents — we install continuous perforated or center-strip venting; (2) vented soffit painted over — we clean or replace; (3) attic insulation blocking soffit intake from inside — we install insulation baffles (ProperVent, DuraBaffle) to maintain clearance; (4) undersized vents — we upsize to code-required NFVA. Soffit work is quoted separately but almost always required before ridge vent to avoid the #1 failure mode. See our /fascia-soffit-repair page for specifics.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Ventilation', url: `${SITE_CONFIG.url}/ventilation` },
  { name: 'Ridge Vent Installation', url: `${SITE_CONFIG.url}/ridge-vent-installation` },
];

export default function RidgeVentInstallationPage() {
  const pageUrl = `${SITE_CONFIG.url}/ridge-vent-installation`;

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Ridge Vent Installation",
          description: "Professional ridge vent installation in Charlotte NC for balanced attic ventilation to NC code IRC R806.",
          slug: "ridge-vent-installation",
        }}
      />
      <WebPageSchema
        name="Ridge Vent Installation Charlotte NC | IRC R806 Balanced Ventilation"
        description="Ridge vent installation in Charlotte NC — external baffle shingle-over design, balanced 1:300 ventilation to NC code IRC R806, paired with matched soffit intake."
        url={pageUrl}
        primaryImage={IMAGES.hero.hero3}
        breadcrumb={breadcrumbItems}
      />
      <FreeInspectionOfferSchema />
      <FeaturedSnippetListAnswerSchema
        question="What are common causes of ridge vent failure on Charlotte roofs?"
        directAnswer="Ten common failure modes that prevent ridge vents from working properly."
        items={commonFailures}
        pageUrl={pageUrl}
      />
      <SpeakableContentBlocks includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={pageUrl} pageName="Ridge Vent Installation Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero3} alt="Ridge vent installation in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Wind className="w-4 h-4" />
              <span className="text-sm font-semibold">Balanced Attic Ventilation</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Ridge Vent Installation
              <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Proper ventilation to NC code IRC §R806</p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Ridge vent installation across Charlotte NC and Lake Norman — external-baffle shingle-over design (GAF Cobra Snow Country, Air Vent ShingleVent II, Owens Corning VentSure) balanced 50/50 with matched soffit intake to achieve NC code IRC §R806 1:300 NFVA ratio. Drops Charlotte attic temps 20–40°F in summer, cuts cooling bills 10–15%, extends shingle life 3–7 years, and preserves manufacturer warranty compliance. Retrofit or bundled with re-roof.
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Benefits of Ridge Vents</h2>
            <p className="text-gray text-lg">Why ridge vents are the best choice for Charlotte attic ventilation.</p>
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">How Balanced Ventilation Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {howItWorks.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">{item.step}</div>
                  <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-gray text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-700 text-center">
                <strong className="text-primary">NC Code Formula:</strong>{' '}
                1 sq ft NFVA per 300 sq ft attic (balanced 50/50) — or 1:150 unbalanced. A 1,500 sq ft attic needs 5 sq ft NFVA total (720 sq in), split evenly between soffit intake and ridge exhaust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ridge Vent Types &amp; 2026 Pricing</h2>
            <p className="text-gray text-lg">Four vent systems — shingle-over external baffle is our Charlotte default.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {ventTypes.map((vent) => (
              <div key={vent.name} className="bg-light p-6 rounded-xl">
                <h3 className="font-bold text-dark text-xl mb-2">{vent.name}</h3>
                <p className="text-gray text-sm mb-4">{vent.description}</p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-dark">Price:</span> <span className="text-primary font-medium">{vent.price}</span></p>
                  <p><span className="font-semibold text-dark">Best For:</span> <span className="text-gray">{vent.bestFor}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">10 Common Ridge Vent Failure Modes</h2>
              <p className="text-gray text-lg">What we check on every Charlotte ventilation assessment — fixing root causes, not just installing more vent.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {commonFailures.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-700">
                <strong className="text-primary">Related services:</strong>{' '}
                <Link href="/ventilation" className="text-primary hover:underline">Roof Ventilation Overview</Link>{' · '}
                <Link href="/fascia-soffit-repair" className="text-primary hover:underline">Soffit Repair &amp; Vented Soffit</Link>{' · '}
                <Link href="/services/roof-inspection" className="text-primary hover:underline">Free Roof Inspection</Link>{' · '}
                <Link href="/services/roof-replacement" className="text-primary hover:underline">Roof Replacement</Link>{' · '}
                <Link href="/architectural-shingles" className="text-primary hover:underline">Architectural Shingles</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Improve Your Attic Ventilation</h2>
              <p className="text-white/90">Free NFVA calculation and ventilation assessment — shingle warranty depends on it.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Assessment</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="ridge-vent-installation" count={4} title="Ridge Vent Projects" subtitle="Browse completed ridge vent installations." schemaPageUrl={pageUrl} />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ridge Vent FAQs</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Related Ventilation Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/ventilation" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Roof Ventilation</h3>
              <p className="text-gray text-sm">Complete ventilation solutions and system design.</p>
            </Link>
            <Link href="/fascia-soffit-repair" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Soffit Vents</h3>
              <p className="text-gray text-sm">Intake ventilation for balanced airflow.</p>
            </Link>
            <Link href="/services/roof-inspection" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Roof Inspection</h3>
              <p className="text-gray text-sm">Assess your ventilation needs with free NFVA calc.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Ventilate Your Attic Properly" subtitle="Get a free NFVA calculation and ridge vent installation estimate." />
    </>
  );
}
