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

export const metadata: Metadata = {
  title: 'Gutter Installation Matthews NC',
  description:
    'Seamless gutter installation in Matthews NC. K-style aluminum, half-round copper, 5"/6"/7" sizes, gutter guards. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'gutter installation matthews nc',
    'seamless gutters matthews nc',
    'gutter replacement matthews',
    'gutter contractors matthews nc',
    'new gutters matthews nc',
    'gutter guards matthews',
    'gutter company matthews nc',
    '6 inch gutters matthews nc',
    'copper gutters matthews',
    'k style gutters matthews nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gutter-installation-matthews-nc`,
  },
  openGraph: {
    title: 'Gutter Installation Matthews NC | Seamless Gutters | Best Roofing Now',
    description: 'Professional gutter installation in Matthews NC. Seamless aluminum, copper, and steel gutters with gutter guard options.',
    url: `${SITE_CONFIG.url}/gutter-installation-matthews-nc`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Gutter installation in Matthews NC' }],
  },
};

const gutterServices = [
  { icon: Droplets, title: 'Seamless K-Style Gutters', description: 'On-site machine-formed aluminum K-style in 5", 6", and 7" — 30+ colors, single continuous runs eliminate leak-prone seams.' },
  { icon: Shield, title: 'Gutter Guards', description: 'Micro-mesh, reverse-curve, and foam inserts. Critical in Matthews with mature oak, pine, and sweetgum canopy debris.' },
  { icon: Home, title: 'Full System Replacement', description: 'Gutter, downspout, hanger, and fascia-board replacement. Fix root causes, not symptoms.' },
  { icon: CheckCircle, title: 'Downspout Sizing & Routing', description: '3x4" oversized downspouts, buried drains, and splash-block routing away from foundation.' },
  { icon: Award, title: 'Half-Round & Copper', description: 'Premium half-round and copper systems for Historic Downtown Matthews and custom builds.' },
  { icon: Droplets, title: 'Gutter Repair', description: 'Re-hang sagging runs, re-seal endcap and miter leaks, replace damaged downspouts.' },
];

const benefits = [
  'Protects your foundation from water damage',
  'Prevents basement flooding and moisture issues',
  'Reduces soil erosion around your home',
  'Prevents fascia and soffit rot',
  'Protects landscaping from water runoff',
  'Increases curb appeal and home value',
];

const faqs = [
  { question: 'How much do new gutters cost in Matthews NC?', answer: 'Typical 2026 Matthews pricing: 5" K-style seamless aluminum $8–$13 per linear foot installed, 6" K-style $11–$16/ft, 7" K-style $14–$20/ft, half-round aluminum $16–$24/ft, copper K-style $28–$40/ft, copper half-round $38–$55/ft. A typical 2,400 sq ft Matthews home needs 150–200 linear feet, so expect $1,400–$3,500 for 5–6" aluminum or $4,500–$8,500 for copper. Gutter guards add $8–$18/ft depending on type.' },
  { question: 'What size gutters do I need on a Matthews home?', answer: 'For most Matthews single-story homes, 5" K-style is adequate. We recommend upsizing to 6" when: roof slopes are steep (10/12 or greater), drainage area exceeds 1,200 sq ft per downspout, or the home sits under heavy oak/pine canopy (common in Olde Sycamore, Matthews Woods, Providence Country Club). For 2-story homes with long uninterrupted eaves, 6" is the default. 7" is reserved for very large custom homes.' },
  { question: 'Are seamless gutters worth it in Matthews?', answer: 'Yes — seamless gutters are now the default spec for Matthews residential work. They are machine-formed on-site from a single coil, eliminating the leak-prone seams every 10 ft that you get with sectional gutters. Over a 25-year service life, sectionals typically require 2–3 round of re-sealing at the joints. Cost difference is minor ($1–$2 per foot) for a substantially better system.' },
  { question: 'Do you install gutter guards, and which style works best in Matthews?', answer: 'Yes. For Matthews tree canopy — especially oak tassels, sweetgum balls, pine needles, and maple helicopters — we recommend stainless micro-mesh guards over foam or reverse-curve. Micro-mesh blocks debris down to ~50 microns, resists UV degradation, and is machine-crimped onto the gutter for a permanent fit. Reverse-curve systems can fail in heavy downpours common during Piedmont summer storms.' },
  { question: 'How long do gutters last in Matthews NC?', answer: '.032" aluminum (standard) lasts 20–25 years, .027" budget aluminum lasts 15–18 years, galvanized steel 20–30 years, stainless steel 30–50+ years, copper 50–75+ years. Key failure modes in Matthews are hanger fatigue from heavy wet-leaf debris, freeze-thaw warping at improperly sloped sections, and fastener backout at long runs. Oversized 3x4" downspouts and correct hanger spacing (24–30") dramatically extend lifespan.' },
  { question: 'Can you match my existing gutter color?', answer: 'Yes. We stock 30+ baked-on enamel colors from Senox and Amerimax coil stock, matching factory colors from GAF, CertainTeed, James Hardie siding, LP, and most common Matthews-area builder palettes. For rare or custom colors, we can special-order a matching coil in 5–10 business days. On-site we also can paint gutters with Sherwin-Williams exterior enamel for permanent color changes.' },
  { question: 'Do you handle fascia repair when installing new gutters in Matthews?', answer: 'Yes — and we strongly recommend addressing rotted fascia before or during install. Damaged fascia cannot hold new gutter hangers securely. We replace rotted 1x6 or 1x8 fascia with new treated/primed fascia or PVC (Azek/Kleer). PVC fascia is premium for Matthews homes under heavy tree canopy — never rots, holds paint 20+ years. Typical cost $8–$14/ft for fascia replacement bundled with gutter install.' },
  { question: 'How long does gutter installation take on a typical Matthews home?', answer: 'Standard 5" or 6" aluminum K-style install on a 150–200 linear-foot Matthews home: 1 day with a 2–3 person crew. Copper, half-round, or projects requiring fascia replacement: 1.5–2 days. Gutter guards add 0.5–1 day depending on linear footage. We arrive with on-site forming machines so gutters are cut to exact length with zero seams on each elevation.' },
  { question: 'Do your gutters handle Matthews stormwater and hurricane-remnant rainfall?', answer: 'Yes, if correctly sized and downspouted. A properly spec&apos;d Matthews system handles the 6"/hour design rainfall common during tropical remnants (Helene 2024 brought 4"+ in parts of Mecklenburg). Key factors: downspout quantity (one per 35–40 linear feet of gutter), 3x4" oversized downspouts where slopes exceed 1,200 sq ft, and correct 1/4"-per-10-ft slope toward drops. Undersized or under-dropped systems overflow under Piedmont thunderstorm conditions.' },
  { question: 'Do you install buried downspout drains in Matthews?', answer: 'Yes. Buried 4" PVC drains route water 10–20 ft away from the foundation and discharge via pop-up emitters or daylight ends. Essential on Matthews lots with poor grade, basement homes, or clay-heavy soil that sheds water slowly. We coordinate with landscaping and irrigation crews when needed, and we recommend catch basins at high-volume corners to prevent wash-out during heavy storms.' },
];

const sizingChecklist = [
  '1,200+ sq ft draining to one downspout → upsize to 6"',
  'Roof slope 10/12 or steeper → upsize to 6" to prevent overshoot',
  'Heavy oak/pine canopy above → 6" + micro-mesh gutter guard',
  'Long eave run with no mid-drop → add mid-run downspout',
  'Steep valley dumping to a gutter corner → 7" corner miter',
  '2-story home with long uninterrupted eave → 6" minimum',
  'Historic Downtown Matthews aesthetic → half-round or copper',
  'Clay soil or basement home → buried 4" drain line',
  'Existing rotted fascia → replace before new hangers',
  'Old sectional gutters leaking at seams → seamless replacement',
];

export default function GutterInstallationMatthewsNCPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Gutter Installation', url: `${SITE_CONFIG.url}/services/gutter-installation` }, { name: 'Matthews NC', url: `${SITE_CONFIG.url}/gutter-installation-matthews-nc` }]} />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <ServiceAreaPageSchema city="Matthews" state="NC" slug="gutter-installation-matthews-nc" pagePath="/gutter-installation-matthews-nc" distance={12} />
      <WebPageSchema
        name="Gutter Installation Matthews NC | Seamless K-Style, Half-Round, Copper"
        description='Seamless gutter installation in Matthews NC. 5"/6"/7" K-style aluminum, half-round, copper, micro-mesh gutter guards, fascia repair. Free estimates, BBB A+ rated.'
        url={`${SITE_CONFIG.url}/gutter-installation-matthews-nc`}
        primaryImage={IMAGES.hero.hero3}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Gutter Installation', url: `${SITE_CONFIG.url}/services/gutter-installation` },
          { name: 'Matthews NC', url: `${SITE_CONFIG.url}/gutter-installation-matthews-nc` },
        ]}
      />
      <FreeInspectionOfferSchema />
      <FeaturedSnippetListAnswerSchema
        question="What size gutters should I install on a Matthews NC home?"
        directAnswer="Choose gutter size based on roof area, slope, tree canopy, and home height."
        items={[
          '5" K-style for most 1-story Matthews homes',
          '6" K-style for 2-story or steep-slope homes',
          '6" K-style for drainage areas over 1,200 sq ft per downspout',
          '6" + micro-mesh for heavy tree canopy neighborhoods',
          '7" K-style for large custom/luxury homes',
          'Half-round or copper for Historic Downtown Matthews',
          '3x4" oversized downspouts on all 6"+ systems',
        ]}
        pageUrl={`${SITE_CONFIG.url}/gutter-installation-matthews-nc`}
      />
      <SpeakableContentBlocks city="Matthews" includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/gutter-installation-matthews-nc`} pageName="Gutter Installation Matthews NC" city="Matthews" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero3} alt="Gutter installation in Matthews NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Matthews &amp; South Charlotte</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Gutter Installation Matthews NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Protect Your Home from Water</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Seamless gutters custom-fitted to your Matthews home</p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now installs seamless K-style aluminum, half-round, and copper gutter systems across Matthews — Olde Sycamore, Matthews Woods, Providence Country Club, Willowmere, Windsor Forest, Matthews Ridge, Shannamara, and Historic Downtown Matthews. Machine-formed on-site in 5", 6", and 7" sizes, matched to your home&apos;s color, paired with 3x4" oversized downspouts and micro-mesh gutter guards sized for our heavy oak, pine, and sweetgum canopy. BBB A+ rated, veteran-owned.
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Gutter Services in Matthews NC</h2>
            <p className="text-gray text-lg">From seamless aluminum to premium copper, we offer complete gutter solutions.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why New Gutters Matter</h2>
              <p className="text-gray text-lg mb-6">Gutters protect your home&apos;s foundation, siding, and landscaping from water damage.</p>
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
              <SEOImage src={IMAGES.realProjects.drone2} alt="Gutter installation project in Matthews NC" width={600} height={450} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Matthews Gutter Sizing &amp; Spec Checklist</h2>
              <p className="text-gray text-lg">10 decision points we evaluate before quoting your Matthews gutter project.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Matthews Gutter Context &amp; Climate Factors</h2>
              <p className="text-gray text-lg">Local canopy, rainfall, and soil conditions that shape Matthews gutter specifications.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Matthews Tree Canopy</h3>
                <p className="text-gray-700 text-sm">Matthews neighborhoods — especially Olde Sycamore, Matthews Woods, and Providence Country Club — feature mature oak, loblolly pine, sweetgum, and maple canopy. The debris load is heavier than open-canopy developments, driving strong preference for 6" gutters with stainless micro-mesh guards. Without guards, expect 2–4 cleanouts per year; with micro-mesh, annual or biennial is typical.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Piedmont Rainfall Intensity</h3>
                <p className="text-gray-700 text-sm">Matthews receives ~44" annual rainfall with peak summer thunderstorm intensity of 2"–6"/hour. Tropical remnants (Florence 2018, Helene 2024) have pushed 4"+ single-event rainfall over the Charlotte metro. Undersized 5" + 2x3" downspouts routinely overflow under these conditions. We design 6" + 3x4" systems to handle the 100-yr storm for standard Matthews roofs.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Mecklenburg Clay Soil</h3>
                <p className="text-gray-700 text-sm">Matthews sits on Cecil-series red clay — poor infiltration, slow drying, and a source of foundation water issues when gutter runoff discharges at grade. We route 4" buried PVC drains to pop-up emitters 10–20 ft from foundation, with catch basins at high-volume corners. Critical for basement homes and slab-on-grade builds where hydrostatic pressure can crack footings.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Historic Downtown Matthews</h3>
                <p className="text-gray-700 text-sm">Homes in Historic Downtown Matthews — along John Street, Trade Street, Matthews-Mint Hill Rd — often benefit from half-round or copper gutters for aesthetic authenticity. Copper half-round with cast brass hangers is period-correct for pre-1950 homes and develops a patina over 5–10 years. We coordinate with Historic Matthews design guidelines when required.</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-700">
                <strong className="text-primary">Related Matthews services:</strong>{' '}
                <Link href="/roof-inspection-matthews-nc" className="text-primary hover:underline">Roof Inspection</Link>{' · '}
                <Link href="/roof-repair-matthews-nc" className="text-primary hover:underline">Roof Repair</Link>{' · '}
                <Link href="/roof-replacement-matthews-nc" className="text-primary hover:underline">Roof Replacement</Link>{' · '}
                <Link href="/storm-damage-roof-repair-matthews-nc" className="text-primary hover:underline">Storm Damage Repair</Link>{' · '}
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
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Need New Gutters in Matthews?</h2>
              <p className="text-white/90">Get a free estimate for seamless gutter installation.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Matthews" slug="gutter-installation-matthews-nc" count={4} title="Gutter Projects in Matthews" subtitle="Browse completed gutter installation projects." schemaPageUrl={`${SITE_CONFIG.url}/gutter-installation-matthews-nc`} />

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

      <ServiceCityLinks city="Matthews" citySlug="matthews-nc" title="Complete Roofing Services in Matthews" subtitle="Beyond gutters, we offer comprehensive roofing solutions." />
      <RelatedCitiesLinks currentCity="Matthews" service="Gutter Installation" serviceSlug="gutter-installation" title="Gutter Installation in Nearby Cities" />
      <CityGeoSection city="Matthews" state="NC" citySlug="matthews-nc" service="Gutter Installation" />
      <CTASection title="Protect Your Matthews Home with New Gutters" subtitle="Get a free estimate for seamless gutter installation." />
    </>
  );
}
