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
  Home,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
  ServiceAreaPageSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
  WebPageSchema,
  FeaturedSnippetListAnswerSchema,
  SpeakableContentBlocks,
  FreeInspectionOfferSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { RelatedCitiesLinks } from '@/components/ui/RelatedCitiesLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';
import { LKNPartnershipsBlock } from '@/components/sections/LKNPartnershipsBlock';
import { LKNDataCitations } from '@/components/sections/LKNDataCitations';

export const metadata: Metadata = {
  title: 'Gutter Installation Davidson NC',
  description:
    'Seamless gutter installation in Davidson NC. K-style aluminum, half-round copper, 5"/6"/7" sizes, micro-mesh gutter guards for Lake Norman tree canopy. BBB A+ rated.',
  keywords: [
    'gutter installation davidson nc',
    'seamless gutters davidson nc',
    'gutter replacement davidson',
    'gutter contractors davidson nc',
    'new gutters davidson nc',
    'gutter guards davidson',
    'copper gutters davidson',
    '6 inch gutters davidson nc',
    'k style gutters davidson nc',
    'lake norman gutters',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gutter-installation-davidson-nc`,
  },
  openGraph: {
    title: 'Gutter Installation Davidson NC | Seamless Gutters | Best Roofing Now',
    description: 'Professional gutter installation in Davidson NC for Lake Norman homes — seamless aluminum, half-round, copper, micro-mesh guards.',
    url: `${SITE_CONFIG.url}/gutter-installation-davidson-nc`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Gutter installation in Davidson NC' }],
  },
};

const gutterServices = [
  { icon: Droplets, title: 'Seamless K-Style Gutters', description: 'On-site machine-formed aluminum K-style in 5", 6", and 7" — 30+ colors, continuous runs eliminate leak-prone seams.' },
  { icon: Shield, title: 'Gutter Guards', description: 'Micro-mesh, reverse-curve, and foam inserts — essential for Davidson oak, loblolly pine, and lakefront tree canopy debris.' },
  { icon: Home, title: 'Full System Replacement', description: 'Gutter, downspout, hanger, and fascia-board replacement — fix root causes, not symptoms.' },
  { icon: CheckCircle, title: 'Downspout Sizing & Routing', description: '3x4" oversized downspouts, buried drains, and lake-safe discharge routing.' },
  { icon: Award, title: 'Half-Round & Copper', description: 'Premium half-round and copper systems for Historic Davidson, Davidson College district, and lakefront custom homes.' },
  { icon: Droplets, title: 'Gutter Repair', description: 'Re-hang sagging runs, re-seal miters and endcaps, replace damaged downspouts.' },
];

const benefits = [
  'Protects your foundation from water damage',
  'Prevents basement flooding and moisture issues',
  'Reduces soil erosion on sloped lakefront lots',
  'Prevents fascia and soffit rot (critical in humid lake climate)',
  'Protects landscaping from water runoff',
  'Preserves lakefront grading and shoreline stability',
];

const faqs = [
  { question: 'How much do new gutters cost in Davidson NC?', answer: 'Typical 2026 Davidson pricing: 5" K-style seamless aluminum $8–$14/linear foot installed, 6" K-style $11–$17/ft, 7" K-style $14–$21/ft, half-round aluminum $16–$24/ft, copper K-style $28–$42/ft, copper half-round $38–$58/ft. A typical 2,400 sq ft Davidson home needs 150–200 linear feet: $1,500–$3,700 for 5–6" aluminum or $4,800–$9,200 for copper. Lakefront and Historic Davidson homes with steep pitches or complex eaves can run 10–20% higher.' },
  { question: 'What size gutters do I need on a Davidson home?', answer: 'For most Davidson single-story homes, 5" K-style is adequate. We recommend 6" when: roof slopes exceed 10/12, drainage area exceeds 1,200 sq ft per downspout, or the home is under heavy oak/pine canopy (common throughout River Run, Bailey&apos;s Glen, the Davidson College corridor, and lakefront lots). 2-story Davidson homes with long eaves default to 6". 7" is reserved for very large custom and lakefront estate builds.' },
  { question: 'Are seamless gutters worth it for Davidson homes?', answer: 'Yes — seamless is the default spec for Davidson residential work. Machine-formed on-site from a single aluminum coil, seamless gutters eliminate the leak-prone sectional seams every 10 ft. Over a 25-year service life, sectional systems typically require 2–3 rounds of re-sealing at the joints. Cost difference is minor ($1–$2/ft) for a markedly better system, especially on Davidson homes with long uninterrupted eaves.' },
  { question: 'Which gutter guard style works best in Davidson?', answer: 'For Davidson tree canopy — oak tassels, loblolly pine needles, sweetgum balls, lakefront cypress — we recommend stainless micro-mesh guards over foam or reverse-curve. Micro-mesh blocks debris down to ~50 microns, resists UV degradation, and is machine-crimped onto the gutter for a permanent fit. Reverse-curve systems can fail during Piedmont summer thunderstorms. Foam inserts degrade within 3–5 years in humid lake climates.' },
  { question: 'How long do gutters last in Davidson NC?', answer: 'Service life depends on material and thickness. .032" aluminum (our standard) 20–25 years, .027" budget aluminum 15–18 years, galvanized steel 20–30 years, stainless steel 30–50+ years, copper 50–75+ years. Key Davidson failure modes are hanger fatigue from heavy wet-leaf debris, lakefront wind-driven rain overloading undersized 5" systems, and fastener backout on long eave runs. Oversized 3x4" downspouts and 24–30" hanger spacing dramatically extend lifespan.' },
  { question: 'Can you match my existing gutter color?', answer: 'Yes. We stock 30+ baked-on enamel colors matching factory colors from GAF, CertainTeed, James Hardie, LP SmartSide, and most Davidson-area builder palettes (including River Run, St. Alban&apos;s, Summers Walk, Bailey&apos;s Glen, and Davidson Village HOA specs). Rare or custom colors can be special-ordered in 5–10 business days. On-site Sherwin-Williams enamel painting is available for permanent color changes.' },
  { question: 'Do you handle fascia and soffit repair during Davidson gutter installs?', answer: 'Yes — and we strongly recommend it. Rotted fascia cannot hold new gutter hangers. We replace rotted 1x6 or 1x8 fascia with new treated/primed fascia or PVC (Azek/Kleer). PVC fascia is the premium choice for Davidson homes under heavy canopy or lakefront moisture — never rots, holds paint 20+ years. Bundled cost with gutter install: $8–$14/ft. Historic Davidson homes may require cedar or period-matched materials.' },
  { question: 'How long does gutter installation take on a Davidson home?', answer: 'Standard 5" or 6" aluminum K-style on a 150–200 linear-foot Davidson home: 1 day with a 2–3 person crew. Copper, half-round, or projects requiring fascia replacement: 1.5–2 days. Gutter guards add 0.5–1 day depending on footage. We arrive with on-site forming machines so runs are cut to exact length with zero seams per elevation. Lakefront lots with staging constraints or long driveways may add half a day.' },
  { question: 'Do your gutters handle Lake Norman stormwater and hurricane-remnant rainfall?', answer: 'Yes, when correctly sized and downspouted. Properly spec&apos;d Davidson systems handle the 6"/hour design rainfall common during tropical remnants (Helene 2024 brought 4"+ across parts of Mecklenburg). Key factors: one downspout per 35–40 linear feet of gutter, 3x4" oversized downspouts where slopes exceed 1,200 sq ft, 1/4"-per-10-ft slope toward drops, and correct discharge routing for lakefront lots to avoid shoreline erosion.' },
  { question: 'Do you install buried downspout drains and lake-safe discharge on Davidson lots?', answer: 'Yes. Buried 4" PVC drains route water 10–20+ ft from the foundation, discharging via pop-up emitters, daylight ends, or engineered dispersal trenches. On lakefront Davidson lots we design discharge paths to protect shoreline stability and coordinate with local stormwater regs. Clay-heavy Davidson soils (Cecil series) shed water slowly — catch basins at high-volume corners prevent wash-out during Piedmont thunderstorms.' },
];

const sizingChecklist = [
  '1,200+ sq ft draining to one downspout → upsize to 6"',
  'Roof slope 10/12 or steeper → upsize to 6" to prevent overshoot',
  'Heavy oak/pine canopy above → 6" + stainless micro-mesh guard',
  'Long eave run with no mid-drop → add mid-run downspout',
  'Steep valley dumping to a gutter corner → 7" corner miter',
  '2-story Davidson home with long uninterrupted eave → 6" minimum',
  'Historic Davidson or Davidson College aesthetic → half-round or copper',
  'Lakefront lot → buried drain with lake-safe discharge',
  'Cecil clay soil or basement home → buried 4" PVC + catch basin',
  'Rotted fascia or existing sectional leaks → replace before new hangers',
];

export default function GutterInstallationDavidsonNCPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Gutter Installation', url: `${SITE_CONFIG.url}/services/gutter-installation` }, { name: 'Davidson NC', url: `${SITE_CONFIG.url}/gutter-installation-davidson-nc` }]} />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <ServiceAreaPageSchema city="Davidson" state="NC" slug="gutter-installation-davidson-nc" pagePath="/gutter-installation-davidson-nc" distance={18} />
      <WebPageSchema
        name="Gutter Installation Davidson NC | Seamless K-Style, Half-Round, Copper"
        description='Seamless gutter installation in Davidson NC and Lake Norman. 5"/6"/7" K-style aluminum, half-round, copper, micro-mesh gutter guards, fascia repair. Free estimates.'
        url={`${SITE_CONFIG.url}/gutter-installation-davidson-nc`}
        primaryImage={IMAGES.hero.hero3}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Gutter Installation', url: `${SITE_CONFIG.url}/services/gutter-installation` },
          { name: 'Davidson NC', url: `${SITE_CONFIG.url}/gutter-installation-davidson-nc` },
        ]}
      />
      <FreeInspectionOfferSchema />
      <FeaturedSnippetListAnswerSchema
        question="What size gutters should I install on a Davidson NC home?"
        directAnswer="Choose gutter size based on roof area, slope, tree canopy, lakefront exposure, and home height."
        items={[
          '5" K-style for most 1-story Davidson homes',
          '6" K-style for 2-story or steep-slope homes',
          '6" K-style for drainage areas over 1,200 sq ft per downspout',
          '6" + micro-mesh for Davidson tree canopy neighborhoods',
          '7" K-style for large custom and lakefront estate homes',
          'Half-round or copper for Historic Davidson and Davidson College district',
          '3x4" oversized downspouts with buried drains on lakefront lots',
        ]}
        pageUrl={`${SITE_CONFIG.url}/gutter-installation-davidson-nc`}
      />
      <SpeakableContentBlocks city="Davidson" includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/gutter-installation-davidson-nc`} pageName="Gutter Installation Davidson NC" city="Davidson" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero3} alt="Gutter installation in Davidson NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Davidson &amp; Lake Norman</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Gutter Installation Davidson NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Protect Your Home from Water</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Seamless gutters custom-fitted to your Davidson home</p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now installs seamless K-style aluminum, half-round, and copper gutter systems throughout Davidson NC and the Lake Norman corridor — River Run, The Farm at Bailey&apos;s Glen, St. Alban&apos;s Square, Summers Walk, McConnell, Lake Davidson Preserve, Historic Davidson, and the Davidson College district. Machine-formed on-site in 5", 6", and 7" sizes, color-matched to your home, paired with 3x4" oversized downspouts and stainless micro-mesh gutter guards sized for Davidson oak, loblolly pine, and lakefront tree canopy. Lake-safe downspout discharge routing on waterfront lots.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Your Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />BBB A+ Rated</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" />Licensed &amp; Insured</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Gutter Services in Davidson NC</h2>
            <p className="text-gray text-lg">From seamless aluminum to premium copper — complete gutter solutions for Davidson and Lake Norman homes.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gutterServices.map((service) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why New Gutters Matter in Davidson</h2>
              <p className="text-gray text-lg mb-6">Gutters protect your Davidson home&apos;s foundation, siding, shoreline, and landscaping from water damage.</p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <SEOImage src={IMAGES.realProjects.drone2} alt="Gutter installation project in Davidson NC" width={600} height={450} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Davidson Gutter Sizing &amp; Spec Checklist</h2>
              <p className="text-gray text-lg">10 decision points we evaluate before quoting your Davidson or Lake Norman project.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {sizingChecklist.map((item, index) => (
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Davidson &amp; Lake Norman Gutter Context</h2>
              <p className="text-gray text-lg">Local canopy, rainfall, shoreline conditions, and historic district factors shaping Davidson gutter specs.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Davidson Tree Canopy</h3>
                <p className="text-gray-700 text-sm">Davidson neighborhoods — Historic Davidson, the Davidson College corridor, River Run, Bailey&apos;s Glen, and most lakefront subdivisions — carry mature oak, loblolly pine, sweetgum, maple, and lakefront cypress. Debris load is among the heaviest in north Mecklenburg, driving strong preference for 6" gutters with stainless micro-mesh. Without guards: 2–4 cleanouts/year; with micro-mesh: annual or biennial.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Piedmont + Lake Rainfall</h3>
                <p className="text-gray-700 text-sm">Davidson receives ~44" annual rainfall with peak thunderstorm intensity of 2"–6"/hour. Tropical remnants (Florence 2018, Helene 2024) have delivered 4"+ single-event totals. Lake Norman lake-effect moisture and wind-driven rain further tax undersized systems — we design 6" + 3x4" downspouts to handle 100-yr storm intensity for standard Davidson roof areas.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Lakefront Drainage &amp; Shoreline</h3>
                <p className="text-gray-700 text-sm">Lakefront Davidson lots demand careful downspout discharge routing — uncontrolled runoff erodes shoreline, undermines bulkheads, and can violate local stormwater regs. We design buried 4" PVC drains to pop-up emitters or engineered dispersal trenches that protect the lake edge. Catch basins at high-volume corners prevent wash-out during Piedmont thunderstorms.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Historic Davidson Aesthetics</h3>
                <p className="text-gray-700 text-sm">Homes in Historic Davidson and near the Davidson College campus often benefit from half-round or copper gutters for architectural authenticity. Copper half-round with cast brass hangers is period-correct for pre-1950 homes and develops a natural patina over 5–10 years. We coordinate with Davidson Historic Preservation guidelines when required by local review.</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-700">
                <strong className="text-primary">Related Davidson services:</strong>{' '}
                <Link href="/roof-inspection-davidson-nc" className="text-primary hover:underline">Roof Inspection</Link>{' · '}
                <Link href="/roof-repair-davidson-nc" className="text-primary hover:underline">Roof Repair</Link>{' · '}
                <Link href="/roof-replacement-davidson-nc" className="text-primary hover:underline">Roof Replacement</Link>{' · '}
                <Link href="/storm-damage-roof-repair-davidson-nc" className="text-primary hover:underline">Storm Damage Repair</Link>{' · '}
                <Link href="/services/gutter-repair" className="text-primary hover:underline">Gutter Repair</Link>{' · '}
                <Link href="/services/gutter-guards" className="text-primary hover:underline">Gutter Guards</Link>{' · '}
                <Link href="/services/fascia-soffit-repair" className="text-primary hover:underline">Fascia &amp; Soffit Repair</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Need New Gutters in Davidson?</h2>
              <p className="text-white/90">Get a free estimate for seamless gutter installation.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Davidson" slug="gutter-installation-davidson-nc" count={4} title="Gutter Projects in Davidson" subtitle="Browse completed gutter installation projects." schemaPageUrl={`${SITE_CONFIG.url}/gutter-installation-davidson-nc`} />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Gutter Installation FAQs</h2>
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

      <ServiceCityLinks city="Davidson" citySlug="davidson-nc" title="Complete Roofing Services in Davidson" subtitle="Beyond gutters, we offer comprehensive solutions." />
      <RelatedCitiesLinks currentCity="Davidson" service="Gutter Installation" serviceSlug="gutter-installation" title="Gutter Installation in Nearby Cities" />
      <CityGeoSection city="Davidson" state="NC" citySlug="davidson-nc" service="Gutter Installation" />

      <LKNPartnershipsBlock city={"Davidson"} />
      <LKNDataCitations city={"Davidson"} />
      <CTASection title="Protect Your Davidson Home with New Gutters" subtitle="Get a free estimate for seamless gutter installation." />
    </>
  );
}
