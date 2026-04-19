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
  TreeDeciduous,
  Clock,
  Home,
  Wrench,
  Droplets,
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
  title: 'Cedar Shake Roofing Charlotte NC',
  description:
    'Cedar shake roofing in Charlotte NC — Certi-Split, Certi-Sawn, Certi-Shake grades in Western Red Cedar. Fire-retardant Class B/C treatment. Synthetic cedar alternatives available.',
  keywords: [
    'cedar shake roofing charlotte nc',
    'cedar shake roof installation charlotte',
    'cedar shingle roofing charlotte nc',
    'wood shake roof charlotte',
    'cedar roof repair charlotte nc',
    'cedar shake replacement charlotte',
    'western red cedar roofing',
    'alaskan yellow cedar roof',
    'certi-split shake',
    'certi-sawn shake',
    'fire retardant cedar',
    'synthetic cedar davinci',
    'brava shake',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/cedar-shake-roofing`,
  },
  openGraph: {
    title: 'Cedar Shake Roofing Charlotte NC | Natural Wood & Synthetic | Best Roofing Now',
    description: 'Cedar shake roofing installation and repair in Charlotte NC — natural Western Red Cedar and synthetic DaVinci/Brava alternatives.',
    url: `${SITE_CONFIG.url}/cedar-shake-roofing`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Cedar shake roofing in Charlotte NC' }],
  },
};

const services = [
  { icon: Home, title: 'New Installation', description: 'Certi-Grade cedar or synthetic composite install with proper spaced sheathing, breather membrane, and stainless fasteners.' },
  { icon: Wrench, title: 'Cedar Roof Repair', description: 'Replace split, curled, or missing shakes with color-matched cedar weathered to blend with existing roof.' },
  { icon: TreeDeciduous, title: 'Shake Replacement', description: 'Targeted section replacement preserving surrounding roof — ideal for storm and tree-fall damage.' },
  { icon: Shield, title: 'Preservation &amp; Oil Treatment', description: 'Oil-based preservative treatment every 3–5 years to extend Charlotte-climate lifespan.' },
  { icon: Droplets, title: 'Moss &amp; Algae Removal', description: 'Gentle chemical cleaning and zinc strip installation to prevent regrowth — Charlotte humidity is the #1 cedar enemy.' },
  { icon: Clock, title: 'Restoration', description: 'Full restoration of weathered cedar roofs — clean, treat, repair, and re-oil to extend life 10–15 additional years.' },
];

const benefits = [
  'Timeless natural beauty that develops a silver-gray patina over 5–10 years',
  '25–40 year realistic lifespan in Charlotte humid climate (shorter than Pacific Northwest)',
  'Excellent natural insulation — R-1.2 per inch, roughly 2x asphalt shingle',
  'Increases appraisal value on historic and luxury homes',
  'Eco-friendly, renewable, and biodegradable at end-of-life',
  'Natural resistance to insects (cedar oils repel pests)',
  'Unique, non-uniform appearance — no two roofs are identical',
  'Meets Historic Matthews, Historic Davidson, and architectural review board requirements',
];

const cedarTypes = [
  { name: 'Certi-Split Shake', description: 'Hand-split on both sides for the most rustic, heavily textured appearance. Thickest profile (3/4"-1-1/4" butt). Standard for historic and luxury homes.', lifespan: '30–40 years (Charlotte)', price: '$18–$28 per sq ft installed' },
  { name: 'Certi-Sawn Shake', description: 'Machine-sawn on both sides for uniform refined look. Smoother surface, more uniform exposure. Budget-favorable cedar option.', lifespan: '25–35 years (Charlotte)', price: '$14–$22 per sq ft installed' },
  { name: 'Certi-Shake (Taper-Sawn)', description: 'Sawn on back, hand-split on face. Best of both worlds — rustic face, uniform back. Mid-tier cedar spec.', lifespan: '28–38 years (Charlotte)', price: '$16–$25 per sq ft installed' },
  { name: 'Fire-Retardant Treated Cedar', description: 'Pressure-treated with Class B (ASTM E108 rated) or Class A fire-retardant chemicals. Required by many Charlotte HOAs and NC building code in some situations.', lifespan: '30–40 years', price: '$20–$32 per sq ft installed' },
  { name: 'Synthetic Cedar (DaVinci / Brava)', description: 'Polymer composite mimicking cedar shake appearance. Class A fire rating, Class 4 impact, 50-year warranty, no oiling required. Our recommended alternative for Charlotte climate.', lifespan: '40–50 years', price: '$14–$22 per sq ft installed' },
];

const maintenanceSchedule = [
  'Year 1: Post-install inspection, document initial condition',
  'Year 2–3: First oil-based preservative treatment ($400–$900)',
  'Every 3–5 years: Re-oil treatment; clean algae/moss with gentle chemical wash',
  'Year 7–10: Major cleaning + preservative treatment + spot replacement of damaged shakes',
  'Year 15: Deep restoration — clean, treat, re-set loose shakes, replace worn sections',
  'Year 20+: Evaluate for full replacement vs major restoration (case-by-case)',
  'Every year: Remove debris, trim overhanging branches, verify drainage',
  'Every year: Check zinc strip condition (prevents algae on cedar)',
];

const faqs = [
  { question: 'How long does a cedar shake roof really last in Charlotte NC?', answer: 'Realistic expectations for the humid Charlotte climate: Certi-Split 30–40 years, Certi-Sawn 25–35 years, Certi-Shake 28–38 years, fire-retardant treated 30–40 years. Pacific Northwest marketing claims of 50–70 years do NOT apply to the Charlotte Piedmont — our humidity, summer heat, tree canopy shade, and mold/algae pressure reduce cedar life 25–40% vs the northwest. Synthetic cedar (DaVinci, Brava) delivers 40–50 years in Charlotte climate with no maintenance degradation.' },
  { question: 'How much does cedar shake roofing cost in Charlotte NC?', answer: '2026 Charlotte installed pricing: Certi-Sawn $14–$22/sq ft, Certi-Shake (taper-sawn) $16–$25/sq ft, Certi-Split (hand-split) $18–$28/sq ft, fire-retardant treated $20–$32/sq ft, synthetic cedar composite $14–$22/sq ft. A 30-square (3,000 sq ft) Charlotte home runs $42,000–$96,000 depending on tier and steepness. Cedar requires spaced sheathing installation (add 10–20% over typical solid-deck install). Lifetime maintenance adds $3,000–$8,000 over 30 years.' },
  { question: 'What is Certi-Grade and why does it matter?', answer: 'Certi-Grade is the Cedar Shake & Shingle Bureau (CSSB) certification for premium-grade cedar shakes and shingles. Three tiers: Certi-Split (hand-split both sides, thickest, most rustic), Certi-Sawn (machine-sawn both sides, uniform), Certi-Shake (sawn back, split face). All Certi-Grade products are 100% heartwood, kiln-dried, and graded for cedar species (Western Red Cedar or Alaskan Yellow Cedar). Avoid non-graded "barn shake" products — they mix sapwood and heartwood and fail 5–10 years sooner.' },
  { question: 'Are cedar shake roofs fire-resistant in Charlotte?', answer: 'Natural untreated cedar has limited fire resistance. Fire-retardant treated cedar meets Class A (highest), Class B, or Class C fire ratings per ASTM E108 — the treatment is pressure-impregnated, not topical. NC code requires Class B or better in Wildland-Urban Interface (WUI) zones; most Charlotte metro is not in a WUI zone but some HOAs require Class A regardless. Synthetic cedar composites (DaVinci, Brava) are inherently Class A rated without chemical treatment. Insurance carriers increasingly require Class A for cedar coverage — always verify before ordering.' },
  { question: 'What Charlotte HOAs and neighborhoods accept cedar shake roofs?', answer: 'Historic districts usually require cedar or period-matched material: Historic Matthews, Historic Davidson, Dilworth, Fourth Ward, Elizabeth, Plaza Midwood. Some luxury neighborhoods permit cedar: Myers Park, Eastover, Providence Country Club, Foxcroft, SouthPark, lakefront Lake Norman custom builds. Many newer Charlotte HOAs prohibit cedar or require Class A fire-retardant. Some insurance carriers decline cedar coverage entirely or surcharge 20–40%. We confirm HOA approval and insurance viability before recommending cedar for any Charlotte home.' },
  { question: 'Do cedar roofs require a lot of maintenance?', answer: 'Yes — meaningfully more than asphalt. Expected Charlotte cedar maintenance cycle: annual inspection + debris clearing, preservative oil treatment every 3–5 years ($400–$900), gentle algae/moss chemical wash every 3–5 years ($300–$600), spot shake replacement every 5–10 years as needed. Total lifetime maintenance runs $3,000–$8,000 over 30 years. Neglected cedar fails in 15–20 years rather than 30–40. If you will not commit to maintenance, do NOT install cedar — choose synthetic cedar composite instead.' },
  { question: 'Can you repair individual cedar shakes?', answer: 'Yes. Individual damaged shakes can be replaced by splitting the shake above, sliding new cedar into position, and securing with stainless fasteners — no shingle-bundle removal required. Typical cost $45–$120 per shake replaced plus a $175–$350 trip fee. We keep color-matched cedar inventory for common Charlotte installs and can artificially weather new shakes to blend with aged roof. Wood-shake repair is a specialty skill — most general roofers cannot do it well.' },
  { question: 'Is cedar roofing environmentally friendly?', answer: 'Yes — one of the most sustainable roofing choices. Cedar is: (1) renewable — CSSB-certified cedar comes from managed forests with sustainable harvest practices; (2) biodegradable at end of life; (3) low embodied energy (roughly 1/10th the manufacturing energy of asphalt shingles); (4) carbon-negative during its first 30+ years. Trade-off: cedar requires 5–7x more virgin timber than synthetic composite alternatives. The environmental calculus favors synthetic when the primary concern is forestry; favors natural cedar when the concern is end-of-life biodegradability.' },
  { question: 'What about synthetic cedar alternatives — DaVinci, Brava, CeDUR?', answer: 'Excellent options for Charlotte — often our recommendation over natural cedar. Synthetic cedar composite tiles (DaVinci Multi-Width, Brava Cedar Shake, CeDUR Walden) cost $14–$22/sq ft installed (similar to natural cedar), carry 40–50 year transferable warranties, meet Class A fire rating without chemicals, hold Class 4 UL 2218 impact rating (insurance discount eligible), need zero maintenance, and come in 30+ cedar-mimicking color blends. They look nearly identical to cedar from street distance but outperform on longevity in Charlotte climate.' },
  { question: 'Can I install cedar as a replacement on an asphalt roof?', answer: 'Yes but with caveats. Cedar requires spaced sheathing (1x4 or 1x6 boards with air gap between) for proper back-ventilation — your existing roof likely has solid plywood deck. We install breather membrane (Cedar Breather brand) over solid deck to create the required air gap. Add 10–20% to install cost for this detail. Alternative: synthetic cedar composite installs over solid deck without breather membrane — one reason we often recommend synthetic for re-roof conversions.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Roofing Materials', url: `${SITE_CONFIG.url}/materials` },
  { name: 'Cedar Shake Roofing', url: `${SITE_CONFIG.url}/cedar-shake-roofing` },
];

export default function CedarShakeRoofingPage() {
  const pageUrl = `${SITE_CONFIG.url}/cedar-shake-roofing`;

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Cedar Shake Roofing",
          description: "Premium cedar shake roofing installation and repair in Charlotte NC.",
          slug: "cedar-shake-roofing",
        }}
      />
      <WebPageSchema
        name="Cedar Shake Roofing Charlotte NC | Natural &amp; Synthetic"
        description="Cedar shake roofing in Charlotte NC — Certi-Split, Certi-Sawn, Certi-Shake grades in Western Red Cedar. Fire-retardant treatment. Synthetic alternatives (DaVinci, Brava)."
        url={pageUrl}
        primaryImage={IMAGES.hero.hero3}
        breadcrumb={breadcrumbItems}
      />
      <FreeInspectionOfferSchema />
      <FeaturedSnippetListAnswerSchema
        question="What cedar shake types does Best Roofing Now install in Charlotte NC?"
        directAnswer="Five cedar roof types covering every budget, aesthetic, and maintenance preference."
        items={[
          'Certi-Split Shake (hand-split, most rustic)',
          'Certi-Sawn Shake (machine-sawn, refined)',
          'Certi-Shake (taper-sawn, mid-tier)',
          'Fire-Retardant Treated Cedar (Class A/B)',
          'Synthetic Cedar Composite (DaVinci, Brava)',
        ]}
        pageUrl={pageUrl}
      />
      <SpeakableContentBlocks includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={pageUrl} pageName="Cedar Shake Roofing Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-amber-800 via-amber-700 to-amber-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero3} alt="Cedar shake roofing in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <TreeDeciduous className="w-4 h-4" />
              <span className="text-sm font-semibold">Natural Wood &amp; Synthetic Alternatives</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Cedar Shake Roofing
              <br className="hidden md:block" />
              <span className="text-amber-200">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Timeless natural beauty for historic and luxury homes</p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Cedar shake is beautiful. It&apos;s also work — it needs cleaning and oiling over the years, and Charlotte&apos;s humidity is harder on it than the Pacific Northwest, so lifespan is more like 25–40 years than the 50+ you&apos;ll see in marketing. We do the real thing on historic and custom homes in Matthews, Davidson, Dilworth, Myers Park, and around Lake Norman — plus a modern synthetic option that looks like cedar without the maintenance. We&apos;ll help you pick the right path for your place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" className="bg-white !text-amber-800 hover:bg-white/90" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-amber-800" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-amber-200" />25–40 Year Lifespan</span>
              <span className="flex items-center gap-2"><Award className="w-5 h-5 text-amber-200" />CSSB Certified Installer</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Cedar Shake Services</h2>
            <p className="text-gray text-lg">Complete cedar roofing solutions from installation to restoration.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-amber-700" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Choose Cedar Shake?</h2>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span className="text-gray">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <SEOImage src={IMAGES.realProjects.drone1} alt="Cedar shake roof" width={600} height={450} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Cedar Types &amp; 2026 Pricing</h2>
            <p className="text-gray text-lg">CSSB Certi-Grade products plus fire-retardant and synthetic alternatives.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cedarTypes.map((type) => (
              <div key={type.name} className="bg-light p-6 rounded-xl">
                <h3 className="font-bold text-dark text-xl mb-2">{type.name}</h3>
                <p className="text-gray text-sm mb-4">{type.description}</p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-dark">Lifespan:</span> <span className="text-gray">{type.lifespan}</span></p>
                  <p><span className="font-semibold text-dark">Price:</span> <span className="text-amber-700 font-medium">{type.price}</span></p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Cedar Maintenance Schedule (Charlotte)</h2>
              <p className="text-gray text-lg">Cedar requires more attention than asphalt — here&apos;s the realistic 20+ year schedule.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {maintenanceSchedule.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-gray-700">
                  <strong className="text-amber-900">Honest trade-off:</strong> If you will not commit to maintenance, synthetic cedar (DaVinci, Brava) delivers similar aesthetics with 40–50 year life and zero maintenance — often the better choice for Charlotte&apos;s humid climate.
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Natural Cedar vs Synthetic Composite</h2>
              <p className="text-gray text-lg">Two paths to the cedar shake look — trade-offs matter in Charlotte.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h3 className="font-bold text-amber-900 mb-2">Natural Cedar (Western Red)</h3>
                <p className="text-xs text-amber-700 font-semibold mb-2">Authenticity + historic compliance</p>
                <p className="text-gray-700 text-sm mb-2"><strong>Pros:</strong> True heritage material, ages to natural silver patina, biodegradable, accepted in all historic districts.</p>
                <p className="text-gray-700 text-sm"><strong>Cons:</strong> 25–40 year Charlotte lifespan, $3,000–$8,000 lifetime maintenance, Class B/C fire rating without treatment, some insurance carriers surcharge or decline.</p>
              </div>
              <div className="bg-light rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Synthetic Composite (DaVinci / Brava)</h3>
                <p className="text-xs text-primary font-semibold mb-2">Low maintenance + superior specs</p>
                <p className="text-gray-700 text-sm mb-2"><strong>Pros:</strong> 40–50 year warranty, Class A fire, Class 4 impact (insurance discount), zero oil maintenance, consistent color, 30+ blends available.</p>
                <p className="text-gray-700 text-sm"><strong>Cons:</strong> Not accepted in some historic districts (check first), no patina development, polymer composition not biodegradable.</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-700">
                <strong className="text-primary">Related materials:</strong>{' '}
                <Link href="/materials/cedar-shake" className="text-primary hover:underline">Cedar Material Guide</Link>{' · '}
                <Link href="/tile-roofing" className="text-primary hover:underline">Tile Roofing</Link>{' · '}
                <Link href="/standing-seam-metal-roofing" className="text-primary hover:underline">Standing Seam Metal</Link>{' · '}
                <Link href="/architectural-shingles" className="text-primary hover:underline">Architectural Shingles</Link>{' · '}
                <Link href="/materials" className="text-primary hover:underline">All Roofing Materials</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-700 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Interested in Cedar Shake Roofing?</h2>
              <p className="text-white/90">Free consultation includes HOA and insurance viability check before you commit.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-amber-700" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Consultation</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-amber-700 hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="cedar-shake-roofing" count={4} title="Cedar Shake Projects" subtitle="Browse completed cedar shake installations." schemaPageUrl={pageUrl} />

      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Cedar Shake FAQs</h2>
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
            <Link href="/tile-roofing" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Tile Roofing</h3>
              <p className="text-gray text-sm">Clay and concrete tile options.</p>
            </Link>
            <Link href="/standing-seam-metal-roofing" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Standing Seam Metal</h3>
              <p className="text-gray text-sm">Premium metal roofing solutions.</p>
            </Link>
            <Link href="/architectural-shingles" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Architectural Shingles</h3>
              <p className="text-gray text-sm">Premium asphalt shingle options.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Experience Natural Cedar Beauty" subtitle="Get a free consultation for cedar shake or synthetic cedar composite roofing." />
    </>
  );
}
