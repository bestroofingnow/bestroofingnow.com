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
  Wrench,
  Home,
  AlertTriangle,
  ArrowDown,
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
  title: 'Gutter Repair Charlotte NC',
  description:
    'Gutter repair in Charlotte NC — miter and endcap re-seal, sagging re-pitch, hidden-hanger re-set at 18-24", downspout replacement. 2026 pricing, same-day service available.',
  keywords: [
    'gutter repair charlotte nc',
    'leaking gutter repair charlotte',
    'sagging gutter fix charlotte nc',
    'downspout repair charlotte',
    'gutter seam repair',
    'miter leak repair charlotte',
    'endcap gutter repair',
    'gutter re-pitch charlotte',
    'gutter hanger replacement',
    'clogged gutter repair',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gutter-repair`,
  },
  openGraph: {
    title: 'Gutter Repair Charlotte NC | Fix Leaks & Sagging | Best Roofing Now',
    description: 'Professional gutter repair services in Charlotte NC. Fix leaks, sagging, clogs, and storm damage.',
    url: `${SITE_CONFIG.url}/gutter-repair`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Gutter repair in Charlotte NC' }],
  },
};

const repairServices = [
  { icon: Droplets, title: 'Miter & Endcap Leak Repair', description: 'Clean old sealant, re-bead with ASTM C920 gutter sealant or pop-rivet + butyl tape for permanent seam fix.' },
  { icon: Wrench, title: 'Sagging Gutter Re-Pitch', description: 'Re-hang sagging runs with new hidden hangers at 18–24" spacing; restore proper 1/4"-per-10-ft slope to downspouts.' },
  { icon: ArrowDown, title: 'Downspout Repair & Replacement', description: 'Fix disconnected joints, replace damaged sections, upsize 2×3" to 3×4" where storm overflow is chronic.' },
  { icon: Home, title: 'Section Replacement', description: 'Replace damaged runs without disturbing the rest of the system. Color-match coil stock to existing gutter.' },
  { icon: AlertTriangle, title: 'Storm Damage Repair', description: 'Ice, wind, and fallen-tree damage — hanger re-set, dented front-lip straightening, or full section swap.' },
  { icon: Shield, title: 'Fascia-Detachment Re-Secure', description: 'Gutter pulling from fascia indicates rotted fascia or failed hangers — we fix both root cause and symptom.' },
];

const problemSigns = [
  'Water dripping behind gutters during rain',
  'Gutters pulling away from fascia',
  'Visible rust spots or holes',
  'Water pooling near foundation',
  'Sagging sections that hold standing water',
  'Peeling paint on or below gutters',
  'Mildew or water stains on siding',
  'Overflowing during moderate rain',
];

const diagnosticChecklist = [
  'Run water through gutters to identify active leak locations',
  'Probe every miter, endcap, and outlet for sealant failure',
  'Check hanger spacing — 24"+ gaps cause sagging; should be 18–24"',
  'Measure slope with a level — 1/4" per 10 ft minimum toward downspouts',
  'Verify downspout sizing vs drainage area (1,200+ sq ft needs 3×4")',
  'Inspect behind gutter for fascia rot that undermines hanger anchoring',
  'Test downspout clogs with a hose at top of each drop',
  'Check elbow joints and splash-block tie-ins for disconnection',
  'Look for ice-damming marks or hail-dented front lips',
  'Confirm gutter gauge — .027" aluminum is end-of-life candidate, .032" has more runway',
];

const repairVsReplace = [
  { repair: 'Single leaking seam', replace: 'Multiple leaks throughout every run' },
  { repair: 'One sagging section', replace: 'Widespread sagging across multiple elevations' },
  { repair: 'Minor rust spots on .032" aluminum', replace: 'Extensive rust or holes on .027" or aged coil' },
  { repair: 'Clogged downspout', replace: 'Undersized gutter overflowing in normal rain' },
  { repair: 'Loose hangers on .032" aluminum', replace: 'Sectional gutters with seams every 10 ft leaking' },
  { repair: 'Gutter age under 15 years with localized damage', replace: 'Gutter age 20+ years with compounding issues' },
];

const faqs = [
  { question: 'How much does gutter repair cost in Charlotte NC?', answer: '2026 Charlotte market ranges: minor seam or miter re-seal $95–$225, endcap re-seal $85–$175, re-pitch a sagging section $175–$425, hidden-hanger replacement $15–$28 per hanger, downspout reattachment $125–$275, damaged downspout section replacement $150–$375, full section replacement (per 10 ft) $250–$550, storm-damage re-hang with new front-lip straightening $200–$600. Minimum service call fee $150 applies for single-item repairs. Multi-repair bundling saves 15–25% vs sequencing.' },
  { question: 'Why are my gutters leaking at the seams?', answer: 'Three root causes: (1) original installation sealant aged out — typical at 10–15 years for factory tube sealant, 15–20 years for professional ASTM C920; (2) thermal expansion and contraction cycling — aluminum expands/contracts ~1/8" per 10 ft per 100°F swing, stressing seams; (3) debris weight pulling miters open, especially under Charlotte tree canopy. We clean old sealant completely (scrape, not just over-top), clean with solvent, and re-bead with ASTM C920 gutter sealant. For chronic miter leaks we upgrade to pop-rivet + butyl tape combo for permanent fix.' },
  { question: 'What causes gutters to sag in Charlotte?', answer: 'Most common cause in our market: insufficient hanger spacing — older sectional gutters installed with 30–36" spike spacing that can no longer hold under modern debris loads. Other causes: (1) wet leaf and pine-needle weight during tropical remnant events, (2) ice accumulation during rare severe Charlotte freeze events, (3) rotted fascia that cannot anchor hangers regardless of spacing, (4) fascia nail pull-through from improper hanger type. We fix root cause — typically replacing old spike-and-ferrule hangers with hidden screw hangers at 18–24" spacing, and replacing fascia first if rotted.' },
  { question: 'Should I repair or replace my gutters?', answer: 'Repair when: damage is isolated (single elevation, 1–2 active leak points), gutter age is under 15 years, .032" aluminum gauge (thicker, more remaining life), and repair cost is under 50% of replacement. Replace when: widespread sagging across multiple elevations, 20+ year age, rust-through or .027" thin-gauge coil, sectional gutters with seams every 10 ft requiring chronic re-seal, or fascia replacement bundled (gutter replacement is labor-efficient at that point). A 2,400 sq ft Charlotte home typically hits the repair-vs-replace crossover at $850–$1,400 in cumulative repair scope.' },
  { question: 'Can you repair seamless gutters in Charlotte?', answer: 'Yes. Seamless aluminum has fewer potential leak points than sectional, but still develops leaks at (1) miters (corners) — the #1 seamless failure point, (2) endcaps at both ends of each run, (3) downspout outlet drops where they are cut into the trough, (4) hanger penetrations if the wrong hanger type was used. We repair all of these. Seamless runs rarely need full section replacement — miter and endcap re-seal with fresh ASTM C920 sealant handles most issues.' },
  { question: 'Does Charlotte&apos;s tree canopy affect how often gutters need repair?', answer: 'Significantly. Neighborhoods under heavy oak, pine, and sweetgum canopy — Olde Sycamore, Matthews Woods, Providence Country Club, Historic Dilworth, Myers Park — see 2–3x the gutter repair frequency of open-canopy subdivisions. Wet leaf and pine-needle debris adds substantial weight that loosens hangers, clogs downspouts, and stresses miters. Adding stainless micro-mesh gutter guards typically cuts repair visits by 60–80% and extends gutter life 5–8 years — often the right spend when scheduling repairs.' },
  { question: 'Are clogged gutters causing my foundation problems?', answer: 'Very possibly. Water overflowing undersized or clogged gutters discharges directly against the foundation — over years this causes: (1) hydrostatic pressure cracks in concrete walls and footings; (2) soil erosion undermining basement and crawlspace perimeters; (3) mulch-line mildew and splash-back against siding; (4) Charlotte red-clay soil saturation that expands and contracts seasonally, stressing foundations. Fixing the gutter problem plus adding buried 4" PVC discharge 10–20 ft from foundation is standard remediation.' },
  { question: 'Can I DIY gutter repair or should I hire a pro?', answer: 'DIY-appropriate: cleaning leaves and debris from accessible single-story gutters, tightening visible hanger screws, replacing a failed downspout elbow, sealing a small seam leak with a store-bought gutter sealant tube (limited life expectancy — typical 2–3 years vs professional 10–15 years). Hire a pro for: anything requiring a ladder on a second story, re-pitching full runs, section replacement, fascia repair, or ice-damaged hangers. Ladder falls are the #1 DIY gutter injury — professional single-service repairs at $95–$225 are usually not worth the fall risk.' },
  { question: 'How does undersized gutter sizing affect storm performance in Charlotte?', answer: 'Significantly. 5" K-style with 2×3" downspouts handles normal NC rainfall well, but during Piedmont thunderstorms (2–6"/hour intensity) and tropical remnant events (Helene 2024 brought 4"+ across parts of Mecklenburg), 5" systems overflow. Overflow damages fascia, siding, landscape, and foundation. If you are repairing gutters that chronically overflow, we recommend upgrading to 6" K-style with 3×4" downspouts during the repair — the delta is usually 20–35% cost over repairing-in-kind and permanently solves the overflow problem.' },
  { question: 'How long does a typical gutter repair take?', answer: 'Timeline by scope: single seam or endcap re-seal 1–2 hours, re-pitch one section 2–4 hours, hanger replacement on one elevation 2–3 hours, downspout replacement per drop 1–2 hours, storm-damage re-hang 3–5 hours, full section replacement 3–6 hours. Most Charlotte gutter repairs complete in a single visit. Scheduling lead time: 3–7 days for non-emergency repair in peak season (spring/fall), next-day during winter off-season, same-day for active storm-damage leaks.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Services', url: `${SITE_CONFIG.url}/services` },
  { name: 'Gutter Repair', url: `${SITE_CONFIG.url}/gutter-repair` },
];

export default function GutterRepairPage() {
  const pageUrl = `${SITE_CONFIG.url}/gutter-repair`;

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Gutter Repair",
          description: "Professional gutter repair services in Charlotte NC. Fix leaking, sagging, and damaged gutters.",
          slug: "gutter-repair",
        }}
      />
      <WebPageSchema
        name="Gutter Repair Charlotte NC | Fix Leaks, Sagging, Downspouts"
        description="Professional gutter repair in Charlotte NC — miter and endcap re-seal, hanger replacement, downspout fixes, section replacement, and storm damage repair."
        url={pageUrl}
        primaryImage={IMAGES.hero.hero3}
        breadcrumb={breadcrumbItems}
      />
      <FreeInspectionOfferSchema />
      <FeaturedSnippetListAnswerSchema
        question="What are the signs of a gutter that needs repair?"
        directAnswer="Eight common warning signs indicate your Charlotte gutters need repair."
        items={problemSigns}
        pageUrl={pageUrl}
      />
      <SpeakableContentBlocks includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={pageUrl} pageName="Gutter Repair Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero3} alt="Gutter repair in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Droplets className="w-4 h-4" />
              <span className="text-sm font-semibold">Fix Leaks &amp; Protect Your Home</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Gutter Repair Charlotte NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Stop Leaks &amp; Sagging</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Professional repairs to protect your home from water damage</p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Gutter repair across Charlotte NC and Lake Norman — miter and endcap re-seal with ASTM C920 sealant, sagging re-pitch with new hidden hangers at 18–24" spacing, downspout replacement and upsizing to 3×4", section replacement with color-matched coil, and storm damage triage. Same-day service for active leaks, next-week lead time for routine repair in peak season. Heavy-canopy neighborhoods (Olde Sycamore, Matthews Woods, Dilworth, Myers Park) see 2–3x typical repair frequency — we recommend bundled micro-mesh gutter guards where appropriate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />Licensed &amp; Insured</span>
              <span className="flex items-center gap-2"><Award className="w-5 h-5 text-accent-light" />Same-Day Service</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Gutter Repair Services</h2>
            <p className="text-gray text-lg">We fix every type of gutter problem — from $95 seam re-seals to full storm-damage rebuild.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairServices.map((service) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Signs Your Gutters Need Repair</h2>
              <p className="text-gray text-lg mb-6">Don&apos;t ignore these warning signs of gutter problems:</p>
              <ul className="space-y-3">
                {problemSigns.map((sign, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <SEOImage src={IMAGES.realProjects.drone2} alt="Gutter inspection and repair" width={600} height={450} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">10-Point Gutter Diagnostic</h2>
              <p className="text-gray text-lg">What we check before quoting any Charlotte gutter repair — catches hidden root causes.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {diagnosticChecklist.map((item, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Repair vs. Replace: Quick Guide</h2>
            <div className="bg-white rounded-xl overflow-hidden">
              <div className="grid grid-cols-2 bg-primary text-white font-bold">
                <div className="p-4">Consider Repair</div>
                <div className="p-4">Consider Replacement</div>
              </div>
              {repairVsReplace.map((row, index) => (
                <div key={index} className={`grid grid-cols-2 ${index % 2 === 0 ? 'bg-light' : 'bg-white'}`}>
                  <div className="p-4 text-gray border-r border-gray-200">{row.repair}</div>
                  <div className="p-4 text-gray">{row.replace}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-700">
                <strong className="text-primary">Related services:</strong>{' '}
                <Link href="/gutter-installation-matthews-nc" className="text-primary hover:underline">New Gutter Installation</Link>{' · '}
                <Link href="/gutter-guards" className="text-primary hover:underline">Gutter Guards</Link>{' · '}
                <Link href="/fascia-soffit-repair" className="text-primary hover:underline">Fascia &amp; Soffit Repair</Link>{' · '}
                <Link href="/services/gutter-cleaning" className="text-primary hover:underline">Gutter Cleaning</Link>{' · '}
                <Link href="/services/gutters" className="text-primary hover:underline">Gutter Services Overview</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Gutters Need Repair?</h2>
              <p className="text-white/90">Get a free inspection with 10-point diagnostic and honest repair recommendation.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="gutter-repair" count={4} title="Gutter Repair Projects" subtitle="Browse completed gutter repairs." schemaPageUrl={pageUrl} />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Gutter Repair FAQs</h2>
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
            <Link href="/gutter-guards" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Gutter Guards</h3>
              <p className="text-gray text-sm">Keep debris out and reduce gutter maintenance.</p>
            </Link>
            <Link href="/gutter-installation-huntersville-nc" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Gutter Installation</h3>
              <p className="text-gray text-sm">New seamless gutter installation and replacement.</p>
            </Link>
            <Link href="/fascia-soffit-repair" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Fascia &amp; Soffit Repair</h3>
              <p className="text-gray text-sm">Repair damage to fascia where gutters attach.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Fix Your Gutters Today" subtitle="Get a free estimate for professional gutter repair in Charlotte." />
    </>
  );
}
