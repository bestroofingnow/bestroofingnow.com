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
  Clock,
  Wrench,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
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
  title: 'Commercial Roofing Davidson NC',
  description:
    'Commercial roofing in Davidson NC — TPO, EPDM, PVC, modified bitumen, metal for Lake Norman businesses. 30-yr NDL warranties, weekend installs, property-manager friendly.',
  keywords: [
    'commercial roofing davidson nc',
    'commercial roof repair davidson',
    'flat roof davidson nc',
    'tpo roofing davidson nc',
    'epdm roofing davidson',
    'pvc roofing davidson nc',
    'modified bitumen davidson',
    'commercial roofing contractors davidson',
    'business roofing davidson nc',
    'lake norman commercial roofing',
    'low slope roofing davidson nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/commercial-roofing-davidson-nc`,
  },
  openGraph: {
    title: 'Commercial Roofing Davidson NC | TPO, EPDM, Flat Roofs | Best Roofing Now',
    description: 'Expert commercial roofing in Davidson NC for Lake Norman businesses — TPO, EPDM, PVC, modified bitumen, metal.',
    url: `${SITE_CONFIG.url}/commercial-roofing-davidson-nc`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Commercial roofing in Davidson NC' }],
  },
};

const roofingSystems = [
  { title: 'TPO Roofing', description: 'White reflective single-ply — high SRI energy efficiency, heat-welded seams, 20–30 yr NDL warranties. Default spec for most Davidson commercial builds.', popular: true },
  { title: 'EPDM Roofing', description: 'Black rubber single-ply with 40+ year field history — durable, cold-weather friendly, strong value on HOA clubhouses and utility buildings.' },
  { title: 'PVC Roofing', description: 'Chemical-resistant single-ply — grease and food-service smog resistance for Davidson restaurants and Jetton Street hospitality.' },
  { title: 'Modified Bitumen', description: 'SBS/APP torch-applied or self-adhered multi-ply — ideal for Davidson buildings with dense HVAC, kitchen vents, and rooftop equipment penetrations.' },
  { title: 'Standing Seam Metal', description: 'Concealed-fastener metal panels for Davidson mid-rise, retail, and storage — 40–60 year service life, strong wind uplift resistance.' },
  { title: 'Roof Coatings', description: 'Silicone, acrylic, and SPF coatings extend existing membrane life 10–15 years — often treated as capex-deferred maintenance by Davidson property owners.' },
];

const commercialServices = [
  { icon: Building2, title: 'New Construction', description: 'Full tapered-insulation commercial systems with manufacturer NDL warranty.' },
  { icon: Wrench, title: 'Full Replacement', description: 'Tear-off and re-cover options, code-compliant R-value, minimized tenant disruption.' },
  { icon: Clock, title: 'Repairs & Maintenance', description: 'Seam welds, flashing tie-ins, drain cleanouts, and 2x/year PM programs.' },
  { icon: Shield, title: 'Roof Inspections', description: 'Thermal imaging, core cuts, and condition reports for acquisitions and insurance renewals.' },
];

const faqs = [
  { question: 'What commercial roofing systems do you install in Davidson?', answer: 'We install TPO, EPDM, PVC, modified bitumen (SBS/APP), built-up roofing (BUR), standing seam and exposed-fastener metal, and roof coatings (silicone, acrylic, SPF). For most Davidson commercial buildings — Downtown Davidson retail, medical and professional offices on Griffith Street, restaurants on Jetton Street, and light commercial along Hwy 115 — white TPO or PVC single-ply is the default 2026 specification.' },
  { question: 'How much does commercial roofing cost in Davidson NC?', answer: 'For 2026 Davidson projects: TPO $6–$11/sq ft, EPDM $5–$9/sq ft, PVC $8–$13/sq ft (higher for restaurant spec), modified bitumen $6–$11/sq ft, standing seam metal $10–$17/sq ft, silicone restoration coatings $2.50–$5/sq ft. Lakefront and premium-custom Davidson properties can run 10–20% higher due to access, crane staging, and architectural review requirements. Itemized proposals include manufacturer system numbers.' },
  { question: 'Can you work around our business hours in Davidson?', answer: 'Yes. For Downtown Davidson retail, Jetton Street restaurants, Davidson College facilities, medical offices, and HOA/church properties, we routinely schedule weekend installs, night adhered sections (where odor can be managed), and phased work so tenants stay open. We coordinate dumpster staging, loading zones, and tenant notifications with property management.' },
  { question: 'Do you offer commercial roof maintenance programs in Davidson?', answer: 'Yes. Our Davidson preventive program includes two scheduled inspections per year (spring + fall), written condition reports with photos, drain/scupper cleanout, seam and termination-bar checks, minor field repairs, and manufacturer-required warranty maintenance. Consistent PM prevents 3–5 years of premature membrane failure — especially valuable on lakefront and tree-canopied Davidson buildings.' },
  { question: 'What warranties do you offer on commercial roofing?', answer: 'Manufacturer warranties run 10–30 years depending on system and membrane thickness. The top tier is an NDL (No Dollar Limit) system warranty. We are certified commercial installers for GAF Golden Pledge Commercial, Carlisle SynTec, Johns Manville Peak Advantage, and Firestone/Holcim UltraLoyalty programs. Our workmanship warranty is 5–10 years on labor depending on system.' },
  { question: 'How long does commercial roof installation take in Davidson?', answer: 'Typical Davidson timelines: 5,000 sq ft single-ply 3–5 days, 20,000 sq ft TPO or PVC 10–14 days, 50,000 sq ft flagship retail or industrial 3–5 weeks. Tear-offs add time based on substrate condition. Weather delays are common in April–June (Piedmont storm season), late summer hurricane remnants, and December–February (cold-cure limits on adhered systems).' },
  { question: 'Can you re-cover over our existing Davidson roof instead of tearing it off?', answer: 'Sometimes — it depends on existing moisture and code compliance. NC building code allows up to two roof layers, but only if the existing assembly is dry and structurally sound. We run moisture surveys (capacitance meter or infrared scan) first. When permitted, re-cover saves 20–35% over full tear-off. For Davidson buildings with known ponding history or older BUR, we usually recommend tear-off.' },
  { question: 'Do you handle commercial insurance claims for storm damage in Davidson?', answer: 'Yes. We provide full commercial claim support for Davidson businesses — Xactimate-compatible estimates, adjuster meetings, engineering reports when hail-density sampling is disputed, and RCV/ACV policy review. Davidson/Lake Norman commercial claims frequently involve torn single-ply seams, hail-punctured metal flashings, and wind-damaged HVAC curbs documented alongside the roof scope.' },
  { question: 'Do you specify cool roofs and energy rebates for Davidson properties?', answer: 'Yes. Davidson buildings typically specify white TPO or reflective coating to meet NC energy code and ASHRAE 90.1 requirements for low-slope roofs. Energy Star reflective membranes reduce summer HVAC load 10–20%. Duke Energy commercial rebate programs occasionally cover reflective roof upgrades — we document SRI values and square footage for rebate submission. Davidson College LEED projects add extra specification rigor we accommodate.' },
  { question: 'Which Davidson building types do you most commonly roof?', answer: 'Most frequent: Downtown Davidson retail and mixed-use, Jetton Street restaurants and hospitality, medical and professional offices on Griffith Street, Davidson College ancillary buildings, HOA clubhouses and amenity centers (River Run, Bailey&apos;s Glen, St. Alban&apos;s), churches, multi-family and townhome HOA roofs, self-storage, and light industrial off Hwy 115 and Davidson Gateway. We scale from 2,000 sq ft HOA pool houses up to 100,000+ sq ft portfolios.' },
];

const inspectionChecklist = [
  'Membrane seam integrity (probe-test welded and taped laps)',
  'Flashing tie-ins at parapets, curbs, and penetrations',
  'Drain strainers, scuppers, and overflow clearance',
  'HVAC curb condition and split-pan rust indicators',
  'Pitch-pocket fill levels and termination bar sealant',
  'Ponding water locations mapped against manufacturer specs',
  'Insulation moisture survey (capacitance or infrared scan)',
  'Walkpad coverage on service paths and around equipment',
  'Lightning protection and roof-top safety compliance',
  'Expansion joint covers and coping stone mortar condition',
];

export default function CommercialRoofingDavidsonNCPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Commercial Roofing', url: `${SITE_CONFIG.url}/services/commercial-roofing` }, { name: 'Davidson NC', url: `${SITE_CONFIG.url}/commercial-roofing-davidson-nc` }]} />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema city="Davidson" state="NC" slug="commercial-roofing-davidson-nc" pagePath="/commercial-roofing-davidson-nc" distance={18} />
      <WebPageSchema
        name="Commercial Roofing Davidson NC | TPO, EPDM, PVC, Metal Specialists"
        description="Commercial roofing in Davidson NC and Lake Norman. TPO, EPDM, PVC, modified bitumen, metal, and coatings. NDL warranties, weekend installs, property-manager friendly."
        url={`${SITE_CONFIG.url}/commercial-roofing-davidson-nc`}
        primaryImage={IMAGES.hero.hero3}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Commercial Roofing', url: `${SITE_CONFIG.url}/services/commercial-roofing` },
          { name: 'Davidson NC', url: `${SITE_CONFIG.url}/commercial-roofing-davidson-nc` },
        ]}
      />
      <FreeInspectionOfferSchema />
      <FeaturedSnippetListAnswerSchema
        question="What commercial roofing systems are installed in Davidson NC?"
        directAnswer="Six commercial roofing systems are commonly installed on Davidson NC buildings."
        items={[
          'TPO (white reflective single-ply)',
          'EPDM (black rubber single-ply)',
          'PVC (chemical-resistant single-ply)',
          'Modified bitumen (SBS/APP multi-ply)',
          'Standing seam metal roofing',
          'Silicone or acrylic roof coatings',
        ]}
        pageUrl={`${SITE_CONFIG.url}/commercial-roofing-davidson-nc`}
      />
      <SpeakableContentBlocks city="Davidson" includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/commercial-roofing-davidson-nc`} pageName="Commercial Roofing Davidson NC" city="Davidson" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero3} alt="Commercial roofing in Davidson NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Davidson &amp; Lake Norman</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Commercial Roofing Davidson NC
              <br className="hidden md:block" />
              <span className="text-accent-light">TPO, EPDM &amp; Flat Roof Experts</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Professional commercial roofing for Davidson businesses</p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now installs and maintains commercial roof systems throughout Davidson NC and the Lake Norman corridor — Downtown Davidson retail and mixed-use, Jetton Street restaurants, Griffith Street medical offices, Davidson College ancillary buildings, churches, HOA clubhouses in River Run / Bailey&apos;s Glen / St. Alban&apos;s, multi-family portfolios, and light industrial along Hwy 115. Certified installer for GAF, Carlisle SynTec, Johns Manville, and Firestone/Holcim — with 30-year NDL manufacturer warranties and property-manager-friendly scheduling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Your Free Estimate</Button>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Commercial Roofing Systems</h2>
            <p className="text-gray text-lg">Every major low-slope and steep-slope commercial system for Davidson businesses.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roofingSystems.map((system) => (
              <div key={system.title} className={`p-6 rounded-xl ${system.popular ? 'bg-primary text-white' : 'bg-light'}`}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className={`font-bold text-xl ${system.popular ? 'text-white' : 'text-dark'}`}>{system.title}</h3>
                  {system.popular && <span className="bg-accent text-white text-xs px-2 py-1 rounded-full">Popular</span>}
                </div>
                <p className={system.popular ? 'text-white/90' : 'text-gray'}>{system.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Commercial Services in Davidson</h2>
            <p className="text-gray text-lg">Complete commercial roofing solutions for owners and property managers.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commercialServices.map((service) => (
              <div key={service.title} className="text-center p-6 bg-white rounded-xl">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{service.title}</h3>
                <p className="text-gray text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What We Inspect on Davidson Commercial Roofs</h2>
              <p className="text-gray text-lg">Our 10-point commercial inspection — included with every proposal and PM visit.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {inspectionChecklist.map((item, index) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Davidson Commercial Roofing Context</h2>
              <p className="text-gray text-lg">Building types, corridors, manufacturer certifications, and climate factors that shape Davidson specifications.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Davidson Building Types We Roof</h3>
                <p className="text-gray-700 text-sm">Downtown Davidson retail and mixed-use, Jetton Street restaurants (grease-rated PVC spec), Griffith Street medical and dental, Davidson College ancillary buildings, churches, HOA clubhouses and amenity centers in River Run / Bailey&apos;s Glen / St. Alban&apos;s / Summers Walk, multi-family and townhome portfolios, self-storage facilities, and light industrial off Hwy 115.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Davidson Commercial Corridors</h3>
                <p className="text-gray-700 text-sm">We routinely work on properties in Downtown Davidson (Main Street, Depot Street), along Griffith Street, Jetton Street, Davidson Gateway Drive, Beaty Street, and Hwy 115 (Statesville Road). Historic Downtown buildings often carry modified bitumen or BUR systems; post-2000 Davidson commercial builds are predominantly TPO.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Manufacturer Certifications</h3>
                <p className="text-gray-700 text-sm">We are authorized commercial installers for GAF Golden Pledge Commercial, Carlisle SynTec, Johns Manville Peak Advantage, Firestone/Holcim UltraLoyalty, and Mule-Hide. These certifications unlock 20–30 year NDL (No Dollar Limit) warranties that transfer on building sale — valuable for Davidson commercial properties positioning for refinance, resale, or LEED recertification.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Climate, Lake &amp; Energy Code</h3>
                <p className="text-gray-700 text-sm">Davidson sits in IECC climate zone 4A — mixed-humid. NC commercial energy code requires minimum R-25 continuous insulation on low-slope roofs and favors reflective (high-SRI) membranes. Lakefront Davidson buildings face longer wind fetch, amplifying uplift — we spec enhanced perimeter and corner attachment. Piedmont hail (3–5 events/yr) drives interest in impact-rated membranes for larger retail and storage.</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-700">
                <strong className="text-primary">Related Davidson commercial services:</strong>{' '}
                <Link href="/roof-inspection-davidson-nc" className="text-primary hover:underline">Roof Inspection</Link>{' · '}
                <Link href="/roof-repair-davidson-nc" className="text-primary hover:underline">Roof Repair</Link>{' · '}
                <Link href="/roof-replacement-davidson-nc" className="text-primary hover:underline">Roof Replacement</Link>{' · '}
                <Link href="/storm-damage-roof-repair-davidson-nc" className="text-primary hover:underline">Storm Damage Repair</Link>{' · '}
                <Link href="/services/flat-roof-repair" className="text-primary hover:underline">Flat Roof Repair</Link>{' · '}
                <Link href="/services/roof-coating" className="text-primary hover:underline">Roof Coatings</Link>{' · '}
                <Link href="/services/roof-maintenance" className="text-primary hover:underline">Maintenance Programs</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Need Commercial Roofing in Davidson?</h2>
              <p className="text-white/90">Get a free estimate for your business, property, or portfolio.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Davidson" slug="commercial-roofing-davidson-nc" count={4} title="Commercial Projects in Davidson" subtitle="Browse commercial roofing projects." schemaPageUrl={`${SITE_CONFIG.url}/commercial-roofing-davidson-nc`} />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Commercial Roofing FAQs</h2>
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

      <ServiceCityLinks city="Davidson" citySlug="davidson-nc" title="Complete Roofing Services in Davidson" subtitle="Beyond commercial, we offer comprehensive solutions." />
      <RelatedCitiesLinks currentCity="Davidson" service="Commercial Roofing" serviceSlug="commercial-roofing" title="Commercial Roofing in Nearby Cities" />
      <CityGeoSection city="Davidson" state="NC" citySlug="davidson-nc" service="Commercial Roofing" />

      <LKNPartnershipsBlock city={"Davidson"} />
      <LKNDataCitations city={"Davidson"} />
      <CTASection title="Expert Commercial Roofing in Davidson" subtitle="Get a free estimate. We work around your schedule." />
    </>
  );
}
