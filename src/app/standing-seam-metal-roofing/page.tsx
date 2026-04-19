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
  Zap,
  Clock,
  Home,
  Thermometer,
  DollarSign,
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
  title: 'Standing Seam Metal Roofing Charlotte',
  description:
    'Premium standing seam metal roofing in Charlotte NC — 22/24/26 gauge steel, aluminum, zinc, copper. Kynar 500/Hylar 5000 PVDF finish, 40-50 year warranties, solar-ready.',
  keywords: [
    'standing seam metal roof charlotte nc',
    'standing seam roof installation charlotte',
    'metal roof charlotte nc',
    'standing seam roofing contractor',
    'premium metal roofing charlotte',
    'snap lock metal roof charlotte',
    'mechanically seamed metal roof',
    'kynar 500 metal roof',
    '24 gauge standing seam',
    'aluminum standing seam charlotte',
    'copper standing seam nc',
    'zinc standing seam',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/standing-seam-metal-roofing`,
  },
  openGraph: {
    title: 'Standing Seam Metal Roofing Charlotte NC | Premium Installation | Best Roofing Now',
    description: 'Premium standing seam metal roofing installation in Charlotte NC — steel, aluminum, zinc, copper with Kynar PVDF finish and 40–50 year warranties.',
    url: `${SITE_CONFIG.url}/standing-seam-metal-roofing`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Standing seam metal roofing in Charlotte NC' }],
  },
};

const benefits = [
  { icon: Clock, title: '50+ Year Lifespan', description: 'Standing seam roofs last 50–70 years with minimal maintenance — 2–3x longer than architectural shingles.' },
  { icon: Thermometer, title: 'Energy Efficient', description: 'Reflective PVDF coatings reduce cooling costs by 20–40% in Charlotte&apos;s hot summers. Energy Star eligible.' },
  { icon: Shield, title: 'Superior Durability', description: 'Withstands 140+ MPH winds, sheds debris, won&apos;t crack, rot, or warp. Class 4 impact rating on upgraded panels.' },
  { icon: Zap, title: 'Solar Ready', description: 'Ideal platform for PV solar — S-5! clamp-on mounting eliminates roof penetration and preserves warranty.' },
  { icon: Home, title: 'Architectural Appeal', description: 'Clean vertical lines complement Modern, Farmhouse, Mediterranean, Craftsman, and lakefront custom builds.' },
  { icon: DollarSign, title: 'Long-Term Value', description: 'Higher upfront cost offset by 85–95% resale ROI, insurance premium discounts, and 2–3x replacement cycle.' },
];

const panelTypes = [
  { name: 'Snap-Lock Panels', description: 'Concealed fasteners. Panels snap together on clips — no seam crimping required. Ideal for most residential applications with slopes 3:12+.', gauge: '24–26 gauge', warranty: '30–40 year paint warranty' },
  { name: 'Mechanically Seamed (Double-Lock)', description: 'Seams mechanically crimped with a powered seamer to 180° double-lock. Highest weather resistance — spec for low-slope and commercial.', gauge: '22–24 gauge', warranty: '40–50 year system warranty' },
  { name: 'Trapezoidal (Structural)', description: 'Taller rib profile for long spans on commercial and agricultural buildings. Structural strength allows wider panel support spacing.', gauge: '22–24 gauge', warranty: '40–50 year system warranty' },
  { name: 'Nail Strip / Batten Seam', description: 'Budget-friendly option with exposed fasteners at panel edges. Shorter expected life than concealed-fastener systems.', gauge: '26–29 gauge', warranty: '20–30 year warranty' },
];

const colorOptions = [
  'Matte Black', 'Charcoal Gray', 'Slate Blue', 'Forest Green', 'Galvalume Silver',
  'Copper Penny', 'Dark Bronze', 'Colonial Red', 'Stone White', 'Clay',
  'Patina Green', 'Regal White', 'Hartford Green', 'Medium Bronze',
];

const specChecklist = [
  'Select material: steel (baseline), aluminum (corrosion resistance), zinc (patina aesthetic), copper (premium)',
  'Select gauge: 22 (commercial/heavy), 24 (premium residential), 26 (standard residential), 29 (budget)',
  'Select finish: Kynar 500 or Hylar 5000 PVDF (30–40 yr color warranty) vs SMP (15–25 yr)',
  'Confirm pitch meets panel-system minimum (snap-lock 3:12+, mechanical seam 0.5:12+)',
  'Spec synthetic underlayment + high-temp ice shield at eaves, valleys, penetrations',
  'Plan thermal-movement clips (fixed + floating) to accommodate 1/8"/10ft expansion',
  'Detail panel-to-panel expansion joints on runs longer than 30 feet',
  'Engineer hidden-fastener clip spacing to wind-uplift code for Charlotte exposure',
  'Spec matching metal ridge cap, rake trim, drip edge, and sidewall flashing',
  'Document panel orientation — slope alignment, tight-to-eave, and seam spacing',
];

const faqs = [
  { question: 'How much does standing seam metal roofing cost in Charlotte NC?', answer: '2026 installed cost ranges by material and gauge: 26-gauge steel snap-lock $12–$16/sq ft, 24-gauge steel snap-lock $14–$19/sq ft, 24-gauge mechanical double-lock $16–$22/sq ft, aluminum standing seam $17–$24/sq ft (better for lakefront Lake Norman — corrosion resistance), zinc $22–$32/sq ft, copper $24–$40/sq ft. A 30-square (3,000 sq ft) Charlotte home typically runs $42,000–$66,000 for 24-gauge steel. Includes panel, clips, underlayment, flashing, ridge cap, and labor.' },
  { question: 'Is standing seam metal roofing worth the cost vs asphalt?', answer: 'For homeowners planning to stay 15+ years, almost always yes. Standing seam costs 2.5–3x architectural asphalt upfront but lasts 2–3x longer — so on a 30-year hold you avoid one full re-roof cycle. Add 20–40% summer cooling savings, 5–15% insurance discounts on properly rated panels, and 85–95% resale ROI (vs 60–70% for asphalt). For 5-year holds, the numbers are closer — asphalt is usually the better financial call in short-hold scenarios.' },
  { question: 'Are standing seam metal roofs noisy in rain?', answer: 'No — this is the #1 misconception we correct. When installed over solid decking with synthetic underlayment (as we always do on residential), standing seam is within 1–3 decibels of architectural asphalt shingle in measured rainfall. The solid substrate absorbs impact sound. The old "barn roof" noise reputation comes from exposed purlin-mounted agricultural installs with no decking — not how residential work is built.' },
  { question: 'Can standing seam go over existing shingles?', answer: 'Yes in some cases, but we usually recommend tear-off. Metal-over-shingle installs require a 1/4" minimum vented air gap or synthetic underlayment layer to prevent oil-canning and condensation. Tear-off reveals deck condition (especially rotted sheathing) and lets us install proper ice shield and ventilation upgrades. Most Charlotte homes save $1.50–$2.50/sq ft on metal-over — but add 5–8 years of foregone decking replacement risk. We quote both on every estimate.' },
  { question: 'What colors and finishes are available for standing seam in Charlotte?', answer: 'We stock 30+ colors from major coil suppliers (Sheffield, Petersen/PAC-CLAD, Drexel, Metal Sales, Taylor Metal). Finish tiers: (1) Kynar 500 or Hylar 5000 PVDF — industry gold standard, 30–40 year color/chalk/fade warranty — our default for Charlotte residential; (2) SMP (silicone-modified polyester) — lower-cost, 15–25 year warranty, fine for commercial or budget-driven work; (3) bare Galvalume — silver-gray, no paint finish, ages naturally. Copper and zinc are unpainted and develop patina over 5–15 years.' },
  { question: 'How does standing seam perform against hail in Charlotte?', answer: 'Functionally excellent — structurally unaffected by typical Piedmont 1–2" hail. Cosmetically, large hail can dent 26-gauge panels (visible from ground on bright-finish roofs). Three dent-mitigation strategies: (1) upgrade to 24-gauge (stiffer, resists denting); (2) choose hidden-rib or textured finish that disguises dents; (3) confirm your insurance carrier accepts "cosmetic-only" damage waivers. Hail damage rarely causes leaks on standing seam — denting is aesthetic and usually doesn&apos;t compromise performance.' },
  { question: 'Does standing seam work with solar panels in Charlotte?', answer: 'Better than any other roof type. We install S-5! and similar clamp-on solar mounting brackets directly onto panel seams — zero roof penetrations, full manufacturer warranty maintained, easy panel replacement if needed. Standing seam also supports the longest PV system life (25+ years) without needing to reroof mid-system. For Charlotte and Lake Norman homeowners planning solar within 15 years, standing seam is our strong recommendation vs asphalt.' },
  { question: 'How does a standing seam roof expand and contract?', answer: 'Steel panels expand/contract roughly 1/8" per 10 ft of panel length with a 100°F temperature swing — meaningful on long residential and commercial runs. We accommodate this with engineered sliding clips (fixed at one end, floating along the rest), thermal expansion joints on panels over 30 ft, and panel-to-ridge-cap and panel-to-eave details that allow movement. Improper clip spec is the most common failure mode on low-quality metal installs — oil-canning, seam tears, fastener backout.' },
  { question: 'How long does standing seam installation take?', answer: 'Typical timelines: 2,000 sq ft simple gable roof 3–5 days, 3,000 sq ft hip roof 4–7 days, 5,000+ sq ft complex roof with dormers and multiple valleys 7–12 days. Weather delays are common — we do not install during active rain or temperatures below 40°F (metal expansion behavior changes). Tear-off adds 1–2 days depending on existing roof. We fabricate most panels on-site with a portable roll-former for custom-length runs with zero seams per elevation.' },
  { question: 'Do standing seam metal roofs need maintenance?', answer: 'Very little. Annual visual inspection for debris clearing (especially in valleys), touch-up any PVDF paint scratches at fastener locations with matching factory paint, and verify exposed-fastener accessories (ridge cap screws, pipe flashings) remain tight. No re-coating required during panel warranty period. Compare to architectural asphalt: twice-annual inspections, algae streak treatments, occasional shingle replacement, complete re-roof at 20–28 years. Standing seam maintenance is genuinely close to zero.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Metal Roofing', url: `${SITE_CONFIG.url}/metal-roofing-services` },
  { name: 'Standing Seam', url: `${SITE_CONFIG.url}/standing-seam-metal-roofing` },
];

export default function StandingSeamMetalRoofingPage() {
  const pageUrl = `${SITE_CONFIG.url}/standing-seam-metal-roofing`;

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Standing Seam Metal Roofing",
          description: "Premium standing seam metal roofing installation in Charlotte NC with 50+ year lifespan.",
          slug: "standing-seam-metal-roofing",
        }}
      />
      <WebPageSchema
        name="Standing Seam Metal Roofing Charlotte NC | Premium Installation"
        description="Premium standing seam metal roofing in Charlotte NC — steel, aluminum, zinc, copper with Kynar 500/Hylar 5000 PVDF finish, 40–50 year warranties, solar-ready."
        url={pageUrl}
        primaryImage={IMAGES.hero.hero3}
        breadcrumb={breadcrumbItems}
      />
      <FreeInspectionOfferSchema />
      <FeaturedSnippetListAnswerSchema
        question="What standing seam panel systems does Best Roofing Now install in Charlotte NC?"
        directAnswer="Four standing seam panel systems covering residential, commercial, and budget scenarios."
        items={[
          'Snap-Lock (concealed fasteners, residential default)',
          'Mechanically Seamed Double-Lock (highest weather resistance)',
          'Trapezoidal Structural (long-span commercial)',
          'Nail Strip / Batten Seam (budget exposed-fastener)',
        ]}
        pageUrl={pageUrl}
      />
      <SpeakableContentBlocks includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={pageUrl} pageName="Standing Seam Metal Roofing Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero3} alt="Standing seam metal roofing in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">Premium Metal Roofing</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Standing Seam Metal Roofing
              <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">The last roof you&apos;ll ever need</p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Standing seam is the roof you probably won&apos;t replace again. 40–50 year life, handles Carolina wind, and the panels are fabricated right on your driveway so each run is one continuous piece — no seams to leak. Steel is the sweet spot for most homes; aluminum is worth the extra if you&apos;re near the lake; copper and zinc are for the custom builds that want something special. Solar-panel compatible too, if that&apos;s on your horizon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />50+ Year Warranty</span>
              <span className="flex items-center gap-2"><Award className="w-5 h-5 text-accent-light" />Certified Installers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Standing Seam?</h2>
            <p className="text-gray text-lg">The gold standard in residential and commercial metal roofing.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Panel Types We Install</h2>
            <p className="text-gray text-lg">All standing seam panel systems — from budget batten-seam to top-tier mechanically seamed.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {panelTypes.map((panel) => (
              <div key={panel.name} className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-dark text-xl mb-2">{panel.name}</h3>
                <p className="text-gray text-sm mb-4">{panel.description}</p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-dark">Gauge:</span> <span className="text-gray">{panel.gauge}</span></p>
                  <p><span className="font-semibold text-dark">Warranty:</span> <span className="text-gray">{panel.warranty}</span></p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">10-Point Standing Seam Spec Checklist</h2>
              <p className="text-gray text-lg">Decisions we make and document on every Charlotte standing seam estimate.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {specChecklist.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-light rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Popular Colors</h2>
            <p className="text-gray text-lg">30+ color options with Kynar 500 / Hylar 5000 PVDF finish for 30–40 year color retention.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {colorOptions.map((color) => (
              <span key={color} className="bg-white px-4 py-2 rounded-full text-gray font-medium border border-gray-100">{color}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Material Decision Framework</h2>
              <p className="text-gray text-lg">Four metal options — match to home style, corrosion exposure, and aesthetic goals.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-light rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Steel (Galvalume or Galvanized)</h3>
                <p className="text-xs text-primary font-semibold mb-2">Default spec • 40–50 yr system warranty</p>
                <p className="text-gray-700 text-sm">Most popular residential choice. Paired with PVDF finish for long life. Best value for inland Charlotte properties.</p>
              </div>
              <div className="bg-light rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Aluminum</h3>
                <p className="text-xs text-primary font-semibold mb-2">Lakefront spec • 40–50 yr warranty</p>
                <p className="text-gray-700 text-sm">Superior corrosion resistance — our preferred spec for lakefront Lake Norman homes and humid microclimates. 15–25% cost premium over steel.</p>
              </div>
              <div className="bg-light rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Zinc</h3>
                <p className="text-xs text-primary font-semibold mb-2">Premium architectural • 100+ yr life</p>
                <p className="text-gray-700 text-sm">Develops a self-healing patina. Popular for modern and European-inspired Charlotte architecture. 1.5–2x cost of steel.</p>
              </div>
              <div className="bg-light rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Copper</h3>
                <p className="text-xs text-primary font-semibold mb-2">Historic + luxury • 75+ yr life</p>
                <p className="text-gray-700 text-sm">Classic material with natural patina over 5–15 years. Specified for Historic Davidson, Historic Matthews, and custom luxury builds. 2–3x cost of steel.</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-700">
                <strong className="text-primary">Related services:</strong>{' '}
                <Link href="/services/metal-roofing" className="text-primary hover:underline">Metal Roofing Overview</Link>{' · '}
                <Link href="/services/roof-replacement" className="text-primary hover:underline">Roof Replacement</Link>{' · '}
                <Link href="/services/roof-inspection" className="text-primary hover:underline">Roof Inspection</Link>{' · '}
                <Link href="/services/commercial-roofing" className="text-primary hover:underline">Commercial Metal</Link>{' · '}
                <Link href="/materials/metal-roofing" className="text-primary hover:underline">Metal Material Guide</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Ready for Your Forever Roof?</h2>
              <p className="text-white/90">Get a free standing seam metal roofing estimate with 2026 pricing.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="standing-seam-metal-roofing" count={4} title="Standing Seam Projects" subtitle="Browse completed standing seam installations." schemaPageUrl={pageUrl} />

      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Standing Seam FAQs</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Standing Seam by Location</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Charlotte', 'Huntersville', 'Cornelius', 'Davidson', 'Mooresville', 'Concord', 'Fort Mill', 'Rock Hill'].map((city) => (
              <Link key={city} href={`/metal-roofing-${city.toLowerCase().replace(' ', '-')}-nc`} className="bg-light p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <span className="text-primary font-semibold">{city}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Upgrade to Standing Seam Metal" subtitle="Get a free consultation from Charlotte's metal roofing experts." />
    </>
  );
}
