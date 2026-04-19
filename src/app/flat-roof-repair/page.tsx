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
  Building2,
  Droplets,
  Wrench,
  Thermometer,
  Clock,
  ArrowRight,
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
  title: 'Flat Roof Repair Charlotte NC',
  description:
    'Expert flat roof repair in Charlotte NC — TPO, EPDM, PVC, modified bitumen. Seam welds, ponding water correction, blister patching, emergency response. BBB A+ rated.',
  keywords: [
    'flat roof repair charlotte nc',
    'flat roof leak repair charlotte',
    'commercial flat roof repair',
    'tpo roof repair charlotte',
    'epdm roof repair charlotte nc',
    'pvc roof repair charlotte',
    'modified bitumen repair nc',
    'ponding water flat roof',
    'flat roof seam repair',
    'low slope roof repair charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/flat-roof-repair`,
  },
  openGraph: {
    title: 'Flat Roof Repair Charlotte NC | TPO, EPDM, PVC | Best Roofing Now',
    description: 'Expert flat roof repair services in Charlotte NC for commercial and residential properties — TPO, EPDM, PVC, modified bitumen, BUR.',
    url: `${SITE_CONFIG.url}/flat-roof-repair`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Flat roof repair in Charlotte NC' }],
  },
};

const repairTypes = [
  { icon: Droplets, title: 'Leak Detection & Repair', description: 'Infrared scan, capacitance moisture survey, and core-cut diagnosis to find and fix flat roof leaks at their source.' },
  { icon: Wrench, title: 'Seam & Membrane Repair', description: 'Re-weld TPO/PVC heat seams, patch EPDM membranes with manufacturer-approved adhesive, fix membrane shrinkage at edges.' },
  { icon: Thermometer, title: 'Ponding Water Solutions', description: 'Tapered insulation, additional drains, crickets/saddles, and slope corrections to meet manufacturer 48-hour drainage spec.' },
  { icon: Shield, title: 'Flashing Repairs', description: 'Edge metal, parapet wall coping, pitch-pocket fill, termination bar, and penetration flashing re-seals.' },
  { icon: Building2, title: 'Blister & Bubble Repair', description: 'Cut out and patch membrane blisters before they crack open — common on aged BUR and adhered TPO systems.' },
  { icon: Clock, title: 'Emergency Flat Roof Repair', description: '24/7 emergency response for sudden flat roof failures, punctures, and storm-driven leaks across Charlotte.' },
];

const roofingSystems = [
  { name: 'TPO Roofing', description: 'Heat-welded seam repairs, membrane patches, manufacturer-approved plate and screw fastening, flashing replacement.' },
  { name: 'EPDM Rubber Roofing', description: 'Adhesive patches, seam tape repairs, peel-and-stick patch plates, and full membrane overlays for degraded sections.' },
  { name: 'PVC Roofing', description: 'Hot-air welded repairs, chemical-resistant membrane patching — essential spec for Charlotte restaurants and medical buildings.' },
  { name: 'Modified Bitumen', description: 'Torch-applied cap-sheet patches, cold-applied SBS adhesive, multi-ply repairs with granule-surface blending.' },
  { name: 'Built-Up Roofing (BUR)', description: 'Flood coat repairs, gravel replacement, asphalt-and-felt multi-ply patching for older Charlotte commercial buildings.' },
];

const faqs = [
  { question: 'How do I know if my flat roof needs repair?', answer: 'Visible warning signs: standing water on the membrane 48 hours after rainfall, bubbles or blisters in the membrane, dark water stains on interior ceilings below the roof, lifted or separated seam edges, visible gravel scatter or granule loss, cracked pipe boots and penetration flashings, and higher-than-typical HVAC bills (indicates wet insulation). Free inspections include infrared moisture scan and written condition report.' },
  { question: 'How much does flat roof repair cost in Charlotte NC?', answer: '2026 Charlotte market ranges: minor patch repairs $350–$900, seam re-welding per linear foot $18–$35, single penetration/pitch-pocket repair $450–$1,100, drain replacement $650–$1,400, moderate section restoration $1,200–$3,500, partial membrane overlay $4–$8/sq ft, silicone restoration coating $2.50–$5/sq ft, full tear-off and replacement $6–$13/sq ft depending on system. Emergency response adds $200–$500 for after-hours dispatch.' },
  { question: 'Can you repair any type of flat roof?', answer: 'Yes — we repair TPO, EPDM, PVC, modified bitumen (SBS and APP), built-up roofing (BUR), and single-ply roof coatings (silicone, acrylic, SPF). Our crews are authorized by Carlisle SynTec, Johns Manville, and Firestone/Holcim, so repairs maintain full manufacturer warranty status on those systems. For hybrid or legacy systems we evaluate compatibility first — mismatched patch materials void warranties and often fail within 2–3 years.' },
  { question: 'Why does my flat roof have ponding water?', answer: 'Five common causes: (1) inadequate original slope (below manufacturer 1/4" per foot minimum); (2) clogged or undersized drains and scuppers; (3) sagging deck from wet or compressed insulation; (4) improper tapered insulation layout or missing crickets at HVAC curbs; (5) clogged overflow scuppers. Ponding that persists 48+ hours after rain is a manufacturer warranty exclusion and materially shortens membrane life. We correct with tapered insulation install, new drains, or saddle/cricket retrofits.' },
  { question: 'How long do flat roof repairs last?', answer: 'Quality repairs last 5–15 years depending on issue type, membrane age, and the selected repair method. Heat-welded TPO/PVC seam repairs match the membrane&apos;s remaining life when installed correctly. Coating-over-existing repairs add 10–15 years to aged membranes. Adhesive patches on EPDM typically last 7–12 years. Emergency patches are explicitly temporary (1–3 year life) and should be replaced with permanent repairs before the next storm season.' },
  { question: 'Do you offer flat roof maintenance programs?', answer: 'Yes. Our Charlotte commercial PM program includes two scheduled inspections per year (spring and fall), drain and scupper cleanout, seam and termination-bar probe testing, minor field repairs, pitch-pocket refill, and written condition reports with photos. PM contracts start at $450/year for small flat roofs (under 5,000 sq ft) and scale by square footage. Consistent PM prevents 3–5 years of premature membrane failure.' },
  { question: 'What about coating my existing flat roof instead of repairing?', answer: 'Coating is a strong option when membrane moisture is under 10% and membrane is structurally intact. Silicone coatings run $2.50–$5/sq ft (vs $6–$13/sq ft for tear-off and replacement) and add 10–15 years of life. Coatings typically require acceptance from your manufacturer warranty program first — we handle submission. Poor candidates for coating: widespread ponding, extensive wet insulation, mechanical penetration failures, or membrane over 80% through its rated life.' },
  { question: 'Can you respond to emergency flat roof leaks 24/7 in Charlotte?', answer: 'Yes. Our 24/7 emergency dispatch runs year-round across Charlotte, Lake Norman, and surrounding counties. For active flat roof leaks, typical on-site response is under 3 hours. We stabilize with emergency tarping or membrane-compatible peel-and-stick patch plates, protect interior contents, document damage for insurance claims, and schedule permanent repairs within 48–72 hours once safe access is confirmed.' },
  { question: 'Do you handle commercial insurance claims for flat roof storm damage?', answer: 'Yes. We document wind-lifted seams, hail-punctured membranes, dented flashings, and HVAC-curb damage with geo-tagged photos, provide Xactimate-compatible estimates, and meet adjusters on-site. Charlotte commercial flat roof claims most often involve torn single-ply seams from tropical remnant winds (Florence 2018, Helene 2024) and hail punctures during May–June peak. We review your policy deductible structure before recommending whether to file.' },
  { question: 'When should I repair vs replace a flat roof in Charlotte?', answer: 'Repair when: membrane is under 15 years old, damage is isolated to one area, insulation moisture survey shows under 5% saturation, and repair cost is under 30% of replacement. Replace when: widespread ponding history, moisture survey shows 10%+ wet insulation, membrane is past 80% of its rated life, or insurance totaled it in a hail/wind claim. Coating-over is the middle path for membranes between 10–18 years old with minimal moisture — we evaluate all three options on every estimate.' },
];

const diagnosticChecklist = [
  'Infrared or capacitance moisture scan across the entire roof area',
  'Core cut samples to confirm insulation saturation percentage',
  'Probe-test seam welds and adhered laps for separation',
  'Drain strainers, scuppers, and overflow clearance',
  'Pitch-pocket fill levels and termination bar sealant condition',
  'HVAC curb skirt rust, deterioration, and cricket adequacy',
  'Parapet wall coping stone and counter-flashing integrity',
  'Ponding water mapping against manufacturer 48-hour drainage spec',
  'Membrane blister density, size, and progression (measure and document)',
  'Penetration flashing and pipe-boot condition around vents and drains',
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Services', url: `${SITE_CONFIG.url}/services` },
  { name: 'Flat Roof Repair', url: `${SITE_CONFIG.url}/flat-roof-repair` },
];

export default function FlatRoofRepairPage() {
  const pageUrl = `${SITE_CONFIG.url}/flat-roof-repair`;

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Flat Roof Repair",
          description: "Expert flat roof repair services in Charlotte NC for TPO, EPDM, PVC, and modified bitumen roofing systems.",
          slug: "flat-roof-repair",
        }}
      />
      <WebPageSchema
        name="Flat Roof Repair Charlotte NC | TPO, EPDM, PVC Specialists"
        description="Expert flat roof repair in Charlotte NC — TPO, EPDM, PVC, modified bitumen. Seam welds, ponding water correction, emergency response, 2026 pricing. BBB A+ rated."
        url={pageUrl}
        primaryImage={IMAGES.hero.hero3}
        breadcrumb={breadcrumbItems}
      />
      <FreeInspectionOfferSchema />
      <FeaturedSnippetListAnswerSchema
        question="What flat roof systems does Best Roofing Now repair in Charlotte NC?"
        directAnswer="Five flat roof systems we repair for Charlotte commercial and residential buildings."
        items={[
          'TPO (heat-welded single-ply)',
          'EPDM (rubber single-ply)',
          'PVC (chemical-resistant single-ply)',
          'Modified bitumen (SBS/APP multi-ply)',
          'Built-up roofing (BUR)',
        ]}
        pageUrl={pageUrl}
      />
      <SpeakableContentBlocks includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={pageUrl} pageName="Flat Roof Repair Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero3} alt="Flat roof repair in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-semibold">Commercial &amp; Residential Flat Roofs</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Flat Roof Repair Charlotte NC
              <br className="hidden md:block" />
              <span className="text-accent-light">TPO, EPDM, PVC &amp; More</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Expert repairs for all flat roof systems</p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              From small seam leaks to ponding-water corrections and full membrane overlays, Best Roofing Now repairs every flat and low-slope roof system across Charlotte NC and Lake Norman — TPO, EPDM, PVC, modified bitumen (SBS/APP), built-up roofing, and roof coatings. Authorized installer for Carlisle SynTec, Johns Manville, and Firestone/Holcim, so our repairs preserve manufacturer NDL warranty status. Free inspection with infrared moisture scan and photo-documented condition report.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />Licensed &amp; Insured</span>
              <span className="flex items-center gap-2"><Award className="w-5 h-5 text-accent-light" />Certified Installers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Flat Roof Repair Services</h2>
            <p className="text-gray text-lg">We diagnose and fix every type of flat roof problem.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairTypes.map((type) => (
              <div key={type.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{type.title}</h3>
                <p className="text-gray text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Flat Roof Systems We Repair</h2>
            <p className="text-gray text-lg">Certified technicians for every major commercial roofing system.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roofingSystems.map((system) => (
              <div key={system.name} className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-dark mb-2">{system.name}</h3>
                <p className="text-gray text-sm mb-4">{system.description}</p>
                <Link href="/services/commercial-roofing" className="text-primary font-semibold text-sm flex items-center gap-1 hover:underline">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">10-Point Flat Roof Diagnostic Checklist</h2>
              <p className="text-gray text-lg">What our inspectors document on every Charlotte flat roof before quoting repairs.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Repair, Coat, or Replace? Decision Framework</h2>
              <p className="text-gray text-lg">Three paths for an aging flat roof in Charlotte — and the criteria that determine which fits.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Wrench className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-primary mb-2">Targeted Repair</h3>
                <p className="text-gray-700 text-sm mb-2"><strong>When:</strong> Isolated damage, membrane under 15 years, under 5% moisture.</p>
                <p className="text-gray-700 text-sm"><strong>Cost:</strong> $350–$3,500 depending on scope. Adds 5–15 years of life when done to manufacturer spec.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Thermometer className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-primary mb-2">Restoration Coating</h3>
                <p className="text-gray-700 text-sm mb-2"><strong>When:</strong> Membrane 10–18 years old, widespread surface wear, under 10% moisture, structurally intact.</p>
                <p className="text-gray-700 text-sm"><strong>Cost:</strong> $2.50–$5/sq ft silicone or acrylic. Adds 10–15 years. Often capex-deferred as maintenance.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <AlertTriangle className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-primary mb-2">Full Replacement</h3>
                <p className="text-gray-700 text-sm mb-2"><strong>When:</strong> Widespread ponding, 10%+ wet insulation, past 80% rated life, or totaled by insurance.</p>
                <p className="text-gray-700 text-sm"><strong>Cost:</strong> $6–$13/sq ft tear-off and new system. Restarts the 20–30 year NDL warranty clock.</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-700">
                <strong className="text-primary">Related services:</strong>{' '}
                <Link href="/services/commercial-roofing" className="text-primary hover:underline">Commercial Roofing</Link>{' · '}
                <Link href="/services/roof-coating" className="text-primary hover:underline">Roof Coatings</Link>{' · '}
                <Link href="/services/roof-inspection" className="text-primary hover:underline">Roof Inspection</Link>{' · '}
                <Link href="/services/commercial-roof-maintenance" className="text-primary hover:underline">Commercial PM Programs</Link>{' · '}
                <Link href="/services/emergency-roofing" className="text-primary hover:underline">Emergency Response</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Flat Roof Leaking?</h2>
              <p className="text-white/90">Get a free inspection with infrared moisture scan and written estimate today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Inspection</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="flat-roof-repair" count={4} title="Flat Roof Repair Projects" subtitle="Browse completed flat roof repairs." schemaPageUrl={pageUrl} />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Flat Roof Repair FAQs</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Flat Roof Repair by Location</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Charlotte', 'Huntersville', 'Cornelius', 'Mooresville', 'Concord', 'Gastonia', 'Fort Mill', 'Rock Hill', 'Matthews', 'Davidson'].map((city) => (
              <Link key={city} href={`/commercial-roofing-${city.toLowerCase().replace(' ', '-')}-nc`} className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <span className="text-primary font-semibold">{city}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Need Flat Roof Repair?" subtitle="Get a free inspection and estimate from Charlotte's flat roof experts." />
    </>
  );
}
