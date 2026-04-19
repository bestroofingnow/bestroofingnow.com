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
  Flame,
  Droplets,
  Wrench,
  Home,
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
  title: 'Chimney Flashing Repair Charlotte NC',
  description:
    'Expert chimney flashing repair in Charlotte NC — step flashing, counter flashing, cricket/saddle install, lead/aluminum/copper specs. Historic chimney experienced.',
  keywords: [
    'chimney flashing repair charlotte nc',
    'chimney leak repair charlotte',
    'roof flashing repair charlotte',
    'chimney flashing replacement',
    'step flashing repair charlotte nc',
    'counter flashing charlotte',
    'chimney cricket installation',
    'chimney saddle',
    'leaking chimney repair',
    'lead flashing chimney',
    'copper chimney flashing charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/chimney-flashing-repair`,
  },
  openGraph: {
    title: 'Chimney Flashing Repair Charlotte NC | Stop Chimney Leaks | Best Roofing Now',
    description: 'Professional chimney flashing repair to stop leaks around your chimney — step, counter, base flashing, crickets, and historic restoration.',
    url: `${SITE_CONFIG.url}/chimney-flashing-repair`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Chimney flashing repair in Charlotte NC' }],
  },
};

const flashingServices = [
  { icon: Wrench, title: 'Step Flashing Repair', description: 'Replace damaged, lifted, or missing step flashing tucked under each shingle course along chimney sides.' },
  { icon: Shield, title: 'Counter Flashing Repair', description: 'Cut new reglet into mortar joint and install lead or aluminum counter flashing over step flashing.' },
  { icon: Droplets, title: 'Base Flashing Repair', description: 'Replace L-shaped front-apron base flashing with peel-and-stick ice shield underlayment beneath.' },
  { icon: Home, title: 'Cricket / Saddle Install', description: 'Build code-required water-diverting cricket for any chimney 24"+ wide measured perpendicular to roof slope.' },
  { icon: Flame, title: 'Mortar Joint Repointing', description: 'Grind and repoint deteriorated mortar joints before flashing install — flashing in bad mortar fails early.' },
  { icon: AlertTriangle, title: 'Emergency Leak Repair', description: '24/7 response for active chimney leaks with same-day tarping and weather-tight temporary seal.' },
];

const leakSigns = [
  'Water stains on ceiling or walls near chimney',
  'Damp or musty smell in attic near chimney',
  'Visible rust on flashing',
  'Gaps between flashing and chimney masonry',
  'Missing or lifted step flashing',
  'Cracked or deteriorated caulk/sealant',
  'Water pooling behind chimney on roof',
  'Efflorescence (white staining) on chimney brick',
];

const diagnosticChecklist = [
  'Count and inspect each step flashing piece along both sides of chimney',
  'Check counter-flashing reglet depth and mortar joint condition',
  'Inspect base (front apron) flashing for lifting and sealant cracks',
  'Measure chimney width perpendicular to slope — confirm cricket presence if 24"+',
  'Inspect cricket saddle flashing tie-ins if present',
  'Test mortar joints with pick — soft or crumbling indicates repoint needed',
  'Look for efflorescence (white staining) — indicates trapped moisture in brick',
  'Check chimney crown/cap for cracks that allow water into flue',
  'Examine roof decking in attic around chimney for staining and rot',
  'Evaluate previous caulk/tar repairs — these fail at 3–5 years and are often the leak source',
];

const faqs = [
  { question: 'What causes chimney flashing to fail in Charlotte NC?', answer: 'Five common causes: (1) age — most flashing lasts 15–25 years in our climate before failing; (2) deteriorated mortar joints — counter flashing pulls out when mortar crumbles; (3) improper caulk/tar repairs from previous "handyman" patches (the #1 cause we see); (4) thermal expansion and contraction cycling loose fasteners and separating sealants; (5) home settling that opens gaps between chimney and roof plane. Storm damage and ice accumulation are secondary but meaningful in Piedmont NC.' },
  { question: 'How much does chimney flashing repair cost in Charlotte?', answer: '2026 Charlotte market ranges: minor repair (re-seal caulk, re-set one course of step flashing) $275–$550, moderate repair (partial step and counter flashing replacement) $650–$1,100, full flashing replacement (all four sides, new counter flashing with fresh reglet) $900–$1,800, cricket/saddle installation $450–$1,200 depending on chimney width, mortar repointing add-on $350–$900, copper flashing upgrade adds 40–70% over aluminum. Historic or masonry-sensitive chimneys with lead flashing can run 25–40% higher.' },
  { question: 'Can you repair flashing without replacing my roof?', answer: 'Yes — chimney flashing repair is a standalone service. We carefully pry up the 2–3 shingle courses surrounding the chimney, remove old flashing, grind new counter-flashing reglet into mortar joints, install new step flashing under each shingle course, seat counter flashing into reglet with lead-free flashing tape or proprietary sealant, and re-nail the shingles back down. The job is contained to the chimney area — no other roof work required.' },
  { question: 'What is a chimney cricket and does my Charlotte home need one?', answer: 'A cricket (or "saddle") is a small peaked ridge behind wide chimneys that diverts water around the chimney instead of letting it dam against the upslope face. NC building code and IRC R1003.20 require a cricket for any chimney measuring 30"+ perpendicular to the roof slope — and we recommend them at 24"+ regardless. Without a cricket, water pools at the chimney&apos;s upslope face, saturates flashing from behind, and causes the #1 leak pattern we see on Charlotte wide-chimney homes.' },
  { question: 'How long does chimney flashing repair take?', answer: 'Typical job times: minor caulk and re-set 2–4 hours, standard flashing replacement 4–6 hours, full replacement with new counter flashing reglet 6–8 hours, cricket install adds 3–5 hours, mortar repointing adds 2–4 hours. Most Charlotte homes are done in a single day. Weather delays — active rain, freezing temperatures — push into a second visit. We plan flashing work outside of active storms and freeze-thaw days.' },
  { question: 'Should I use a roofer or mason for chimney flashing?', answer: 'A roofer (us) for the flashing work, a mason if the brick or mortar itself has failed. Simple flashing replacement — including cutting a new counter-flashing reglet into sound mortar — is roofer scope. If mortar joints are crumbling beyond patching, or the chimney crown is cracked, or bricks are spalling, a mason should handle masonry first and then we handle flashing. We refer to local Charlotte masons when needed and coordinate scheduling.' },
  { question: 'What flashing material should I choose — aluminum, lead, or copper?', answer: 'Aluminum is our default for Charlotte residential work — affordable, corrosion-resistant, and 20–25 year life. Lead is the longest-lasting traditional choice (75+ years) but is being phased out; we still install it for historic homes and where code allows. Copper is the premium option — 75+ year life, beautiful natural patina, typically specified for Historic Davidson, Historic Matthews, Dilworth, and custom lakefront homes. Avoid bare steel flashing — it rusts through in 8–12 years.' },
  { question: 'Do you handle historic chimney flashing in Charlotte?', answer: 'Yes. We work regularly on pre-1960 chimneys across Historic Matthews, Historic Davidson, Dilworth, Fourth Ward, Elizabeth, Plaza Midwood, and Myers Park. Historic work often requires: (1) lead or copper flashing to match original detailing, (2) lime-based mortar repointing (not Portland cement), (3) coordination with Historic Preservation Boards in Davidson and Charlotte, (4) preservation of visible corbel brickwork. We photograph historic conditions before starting and use period-correct methods where possible.' },
  { question: 'Can you fix the leak without tearing off the chimney?', answer: 'Almost always yes. Chimney leaks are rarely structural — they are flashing, mortar, or crown failures. Full chimney teardown and rebuild is reserved for severe mortar deterioration, leaning, or structural frost damage. For the vast majority of Charlotte chimney leaks, we solve the problem with flashing replacement, mortar repointing, and crown/cap repair — no brick removal required. If teardown is genuinely needed, we refer to a specialty mason.' },
  { question: 'Do you handle insurance claims for chimney flashing damage?', answer: 'Yes, when the flashing failure is storm-driven (hail-dented counter flashing, wind-lifted step flashing, tree-fallen chimney damage). We provide photo documentation, Xactimate-compatible estimates, and meet your adjuster on-site. Age-related flashing wear is not usually covered by homeowner policies — we tell you up front before filing, to protect your insurance relationship and prevent claim denial.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Services', url: `${SITE_CONFIG.url}/services` },
  { name: 'Chimney Flashing Repair', url: `${SITE_CONFIG.url}/chimney-flashing-repair` },
];

export default function ChimneyFlashingRepairPage() {
  const pageUrl = `${SITE_CONFIG.url}/chimney-flashing-repair`;

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Chimney Flashing Repair",
          description: "Professional chimney flashing repair services in Charlotte NC to stop leaks and protect your home.",
          slug: "chimney-flashing-repair",
        }}
      />
      <WebPageSchema
        name="Chimney Flashing Repair Charlotte NC | Stop Chimney Leaks"
        description="Expert chimney flashing repair in Charlotte NC — step, counter, base flashing, cricket/saddle installation, mortar repointing, and historic chimney restoration."
        url={pageUrl}
        primaryImage={IMAGES.hero.hero3}
        breadcrumb={breadcrumbItems}
      />
      <FreeInspectionOfferSchema />
      <FeaturedSnippetListAnswerSchema
        question="What are the signs of a failing chimney flashing?"
        directAnswer="Eight common warning signs indicate chimney flashing failure."
        items={leakSigns}
        pageUrl={pageUrl}
      />
      <SpeakableContentBlocks includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={pageUrl} pageName="Chimney Flashing Repair Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero3} alt="Chimney flashing repair in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Flame className="w-4 h-4" />
              <span className="text-sm font-semibold">Stop Chimney Leaks</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Chimney Flashing Repair
              <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Expert flashing repair to stop leaks at the source</p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Chimney flashing is the #1 leak source we diagnose on Charlotte roofs. Best Roofing Now repairs every flashing type — step flashing, counter flashing, base/apron flashing, cricket saddles on 24"+ chimneys, and mortar joint repointing. Aluminum (our default), lead (historic), and copper (premium) options. Historic chimney experienced across Matthews, Davidson, Dilworth, Fourth Ward, and Myers Park.
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Chimney Flashing Services</h2>
            <p className="text-gray text-lg">Complete chimney flashing repair and replacement with manufacturer-approved materials.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flashingServices.map((service) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Signs Your Chimney Flashing Needs Repair</h2>
              <p className="text-gray text-lg mb-6">Don&apos;t ignore these warning signs of chimney flashing failure:</p>
              <ul className="space-y-3">
                {leakSigns.map((sign, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <SEOImage src={IMAGES.realProjects.drone2} alt="Chimney flashing inspection" width={600} height={450} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">10-Point Chimney Flashing Diagnostic</h2>
              <p className="text-gray text-lg">What our inspectors check on every Charlotte chimney before quoting the repair.</p>
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
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Flashing Material Decision Guide</h2>
              <p className="text-gray text-lg">Three flashing material tiers — match to home style, budget, and expected service life.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Aluminum (Standard)</h3>
                <p className="text-xs text-primary font-semibold mb-2">Our default spec</p>
                <p className="text-gray-700 text-sm">20–25 year life, corrosion-resistant, widely available. Cost-effective for typical Charlotte residential work. Baked-enamel color match to roofing.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Lead (Historic)</h3>
                <p className="text-xs text-primary font-semibold mb-2">Period-correct for historic homes</p>
                <p className="text-gray-700 text-sm">75+ year life, malleable for detailed custom work. Being phased out but still code-compliant. Typically specified for pre-1960 Charlotte chimneys.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Copper (Premium)</h3>
                <p className="text-xs text-primary font-semibold mb-2">Historic + luxury spec</p>
                <p className="text-gray-700 text-sm">75+ year life, develops natural patina over 5–10 years. Typical for Historic Davidson, Historic Matthews, Dilworth, Myers Park, and custom lakefront builds.</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-700">
                <strong className="text-primary">Related services:</strong>{' '}
                <Link href="/services/roof-repair" className="text-primary hover:underline">Roof Repair</Link>{' · '}
                <Link href="/services/roof-inspection" className="text-primary hover:underline">Roof Inspection</Link>{' · '}
                <Link href="/services/roof-replacement" className="text-primary hover:underline">Roof Replacement</Link>{' · '}
                <Link href="/skylight-installation" className="text-primary hover:underline">Skylight Install</Link>{' · '}
                <Link href="/services/roof-ventilation" className="text-primary hover:underline">Roof Ventilation</Link>{' · '}
                <Link href="/services/soffit-fascia" className="text-primary hover:underline">Soffit &amp; Fascia</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Chimney Leaking?</h2>
              <p className="text-white/90">Get a free inspection and permanent repair — not another caulk-and-pray fix.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Inspection</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="chimney-flashing-repair" count={4} title="Chimney Flashing Projects" subtitle="Browse completed chimney flashing repairs." schemaPageUrl={pageUrl} />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Chimney Flashing FAQs</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/roof-repair" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Roof Repair</h3>
              <p className="text-gray text-sm">Complete roof repair services for all roofing systems.</p>
            </Link>
            <Link href="/services/roof-inspection" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Roof Inspection</h3>
              <p className="text-gray text-sm">Free comprehensive roof inspections with detailed reports.</p>
            </Link>
            <Link href="/skylight-installation" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Skylight Services</h3>
              <p className="text-gray text-sm">Skylight installation, repair, and flashing services.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Stop Your Chimney Leak" subtitle="Get a free inspection and professional chimney flashing repair." />
    </>
  );
}
