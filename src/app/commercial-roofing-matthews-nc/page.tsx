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

export const metadata: Metadata = {
  title: 'Commercial Roofing Matthews NC',
  description:
    'Commercial roofing in Matthews NC — TPO, EPDM, PVC, modified bitumen, metal. 30-yr NDL warranties, weekend installs, property-manager friendly. BBB A+ rated.',
  keywords: [
    'commercial roofing matthews nc',
    'commercial roof repair matthews',
    'flat roof matthews nc',
    'tpo roofing matthews nc',
    'epdm roofing matthews',
    'pvc roofing matthews nc',
    'modified bitumen matthews',
    'commercial roofing contractors matthews',
    'business roofing matthews nc',
    'low slope roofing matthews nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/commercial-roofing-matthews-nc`,
  },
  openGraph: {
    title: 'Commercial Roofing Matthews NC | TPO, EPDM, Flat Roofs | Best Roofing Now',
    description: 'Expert commercial roofing in Matthews NC. TPO, EPDM, PVC, metal systems for Matthews businesses and property managers.',
    url: `${SITE_CONFIG.url}/commercial-roofing-matthews-nc`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Commercial roofing in Matthews NC' }],
  },
};

const roofingSystems = [
  { title: 'TPO Roofing', description: 'White reflective single-ply membrane — excellent energy efficiency (SRI 104), heat-welded seams, 20–30 yr warranties.', popular: true },
  { title: 'EPDM Roofing', description: 'Black rubber single-ply with 40+ year field history — durable, cold-weather friendly, tape or bonded seams.' },
  { title: 'PVC Roofing', description: 'Chemical-resistant single-ply for restaurants and medical offices — grease and urban smog resistance, heat-welded seams.' },
  { title: 'Modified Bitumen', description: 'SBS/APP torch-applied or self-adhered multi-ply — strong for high-traffic roofs with HVAC and service penetrations.' },
  { title: 'Standing Seam Metal', description: 'Concealed-fastener metal panels for Matthews retail, storage, and mid-rise commercial — 40–60 year service life.' },
  { title: 'Roof Coatings', description: 'Silicone, acrylic, and SPF coatings extend existing membrane life 10–15 years and may qualify as capex-deferred maintenance.' },
];

const commercialServices = [
  { icon: Building2, title: 'New Construction', description: 'Full tapered-insulation commercial systems with manufacturer NDL warranty.' },
  { icon: Wrench, title: 'Full Replacement', description: 'Tear-off and re-cover options with proper termination and code-compliant insulation R-value.' },
  { icon: Clock, title: 'Repairs & Maintenance', description: 'Seam welds, flashing tie-ins, drain repair, and 2x/year preventive inspection programs.' },
  { icon: Shield, title: 'Roof Inspections', description: 'Thermal imaging, core cuts, and property-condition reports for acquisitions and insurance renewals.' },
];

const faqs = [
  { question: 'What commercial roofing systems do you install in Matthews?', answer: 'We install TPO, EPDM, PVC, modified bitumen (SBS/APP), built-up roofing (BUR), standing seam and exposed-fastener metal, and roof coatings (silicone, acrylic, SPF). For most Matthews commercial buildings — retail strips on Independence Blvd, medical offices around Matthews Township Pkwy, light industrial in the Sardis corridor — TPO or PVC single-ply is the default specification today.' },
  { question: 'How much does commercial roofing cost in Matthews NC?', answer: 'For 2026, installed budget ranges are: TPO $6–$10/sq ft, EPDM $5–$9/sq ft, PVC $8–$12/sq ft, modified bitumen $6–$11/sq ft, standing seam metal $10–$16/sq ft, silicone restoration coatings $2.50–$5/sq ft. Final pricing depends on insulation R-value, parapet/penetration density, tapered crickets, and tear-off vs re-cover. We provide itemized proposals with manufacturer system numbers.' },
  { question: 'Can you work around our business hours in Matthews?', answer: 'Yes. For retail tenants, restaurants, medical, and schools we routinely schedule weekend installs, night work on adhered systems (where odor and glare must be managed), and phased sections so the interior remains occupied. For tear-offs we stage dumpsters and loading zones after business hours and coordinate with property management on tenant notifications.' },
  { question: 'Do you offer commercial roof maintenance programs?', answer: 'Yes. Our Matthews preventive program includes two scheduled inspections per year (spring + fall), written condition reports with photos, drain/scupper cleanout, seam and termination-bar checks, minor field repairs, and coordinated warranty-required maintenance per manufacturer specs. Most buildings prevent 3–5 years of premature membrane failure with consistent PM.' },
  { question: 'What warranties do you offer on commercial roofing?', answer: 'Manufacturer warranties run 10–30 years depending on system and thickness. The top tier is an NDL (No Dollar Limit) system warranty — we are certified installers for GAF Golden Pledge Commercial, Carlisle SynTec, Johns Manville Peak Advantage, and Firestone/Holcim UltraLoyalty programs. Our workmanship warranty is 5–10 years on labor depending on system.' },
  { question: 'How long does commercial roof installation take?', answer: 'Typical Matthews NC timelines: 5,000 sq ft single-ply 3–5 days, 20,000 sq ft TPO or PVC 10–14 days, 50,000 sq ft flagship retail or industrial 3–5 weeks. Tear-offs add time based on substrate condition. Weather delays are common in April–June (storm season) and December–February (cold-cure limits on adhered systems).' },
  { question: 'Can you re-cover over our existing roof instead of tearing it off?', answer: 'Sometimes — it depends on existing moisture and code. NC building code allows up to two roof layers on a building, but only if the existing roof is dry and structurally sound. We run moisture surveys (capacitance or infrared) first. If moisture is present, tear-off is required. Re-cover saves 20–35% on cost when it is code-permitted.' },
  { question: 'Do you handle commercial insurance claims for storm damage?', answer: 'Yes. We provide full commercial claim support for Matthews businesses — Xactimate-compatible estimates, adjuster meetings, engineering reports when hail-density sampling is disputed, and RCV/ACV policy review. Common hail claims in the Matthews area involve torn single-ply seams, hail-punctured metal flashings, and HVAC damage documented alongside roof scope.' },
  { question: 'Do you specify cool roofs and energy rebates in Matthews?', answer: 'Yes. Matthews properties typically specify white TPO or reflective coating to meet NC energy code and ASHRAE 90.1 requirements for low-slope roofs. Energy Star reflective membranes can reduce HVAC load 10–20% in summer. Duke Energy commercial rebate programs occasionally cover reflective roof upgrades — we document SRI values and square footage for the rebate submission.' },
  { question: 'Which Matthews building types do you most commonly roof?', answer: 'Most frequent: retail strip centers and shopping plazas, medical and dental offices, restaurants (grease-resistant PVC specifications), multi-tenant office buildings, churches and schools, HOA clubhouses and pool houses, self-storage facilities, light industrial warehouses near I-485, and municipal buildings. We scale crews and equipment to match — small rubber roofs all the way up to 100,000+ sq ft tapered insulation systems.' },
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

export default function CommercialRoofingMatthewsNCPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Commercial Roofing', url: `${SITE_CONFIG.url}/services/commercial-roofing` }, { name: 'Matthews NC', url: `${SITE_CONFIG.url}/commercial-roofing-matthews-nc` }]} />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema city="Matthews" state="NC" slug="commercial-roofing-matthews-nc" pagePath="/commercial-roofing-matthews-nc" distance={12} />
      <WebPageSchema
        name="Commercial Roofing Matthews NC | TPO, EPDM, PVC, Metal Specialists"
        description="Commercial roofing in Matthews NC. TPO, EPDM, PVC, modified bitumen, metal, and coatings. NDL manufacturer warranties, weekend installs, property-manager friendly."
        url={`${SITE_CONFIG.url}/commercial-roofing-matthews-nc`}
        primaryImage={IMAGES.hero.hero3}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Commercial Roofing', url: `${SITE_CONFIG.url}/services/commercial-roofing` },
          { name: 'Matthews NC', url: `${SITE_CONFIG.url}/commercial-roofing-matthews-nc` },
        ]}
      />
      <FreeInspectionOfferSchema />
      <FeaturedSnippetListAnswerSchema
        question="What commercial roofing systems are installed in Matthews NC?"
        directAnswer="Six commercial roofing systems are commonly installed on Matthews NC buildings."
        items={[
          'TPO (white reflective single-ply)',
          'EPDM (black rubber single-ply)',
          'PVC (chemical-resistant single-ply)',
          'Modified bitumen (SBS/APP multi-ply)',
          'Standing seam metal roofing',
          'Silicone or acrylic roof coatings',
        ]}
        pageUrl={`${SITE_CONFIG.url}/commercial-roofing-matthews-nc`}
      />
      <SpeakableContentBlocks city="Matthews" includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/commercial-roofing-matthews-nc`} pageName="Commercial Roofing Matthews NC" city="Matthews" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero3} alt="Commercial roofing in Matthews NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Matthews &amp; South Charlotte</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Commercial Roofing Matthews NC
              <br className="hidden md:block" />
              <span className="text-accent-light">TPO, EPDM &amp; Flat Roof Experts</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Professional commercial roofing for Matthews businesses</p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now installs and maintains commercial roof systems across Matthews — from retail strip centers on Independence Blvd and medical offices on Matthews Township Pkwy, to restaurants at Matthews Festival Plaza, industrial buildings near I-485, HOA clubhouses in Olde Sycamore and Providence Country Club, churches, schools, and self-storage facilities. Certified installer for GAF, Carlisle SynTec, Johns Manville, and Firestone/Holcim — with 30-year NDL manufacturer warranties and property-manager-friendly scheduling.
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
            <p className="text-gray text-lg">We install every major low-slope and steep-slope commercial system for Matthews businesses.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Commercial Services in Matthews</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What We Inspect on Matthews Commercial Roofs</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Matthews Commercial Roofing Context</h2>
              <p className="text-gray text-lg">Building types, corridors, manufacturer certifications, and climate factors that shape Matthews commercial specifications.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Matthews Building Types We Roof</h3>
                <p className="text-gray-700 text-sm">Retail strip centers, multi-tenant medical and dental offices, restaurants (grease-rated PVC), HOA clubhouses, self-storage facilities, schools and daycares, churches, mid-size office buildings, light industrial and flex-space warehouses near I-485, and municipal buildings. Both low-slope TPO/EPDM and steep-slope metal/shingle systems are in regular demand.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Matthews Commercial Corridors</h3>
                <p className="text-gray-700 text-sm">We routinely work on properties along Independence Blvd (US-74), Matthews Township Pkwy, Sardis Rd N, Monroe Rd, John Street, and the I-485 flex/industrial belt. Downtown Matthews historic commercial buildings often carry modified bitumen or BUR systems; post-2000 suburban builds are predominantly TPO.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Manufacturer Certifications</h3>
                <p className="text-gray-700 text-sm">We are authorized commercial installers for GAF Golden Pledge Commercial, Carlisle SynTec, Johns Manville Peak Advantage, Firestone/Holcim UltraLoyalty, and Mule-Hide. These certifications unlock 20–30 year NDL (No Dollar Limit) system warranties that transfer on building sale — valuable for Matthews properties positioning for refinance or resale.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Climate &amp; Energy Code</h3>
                <p className="text-gray-700 text-sm">Matthews sits in IECC climate zone 4A — mixed-humid. NC commercial energy code requires minimum R-25 continuous insulation on low-slope roofs and favors reflective (high-SRI) membranes. White TPO/PVC meets both energy compliance and hot-summer HVAC load reduction. Piedmont hail (3–5 events/yr) drives interest in ballasted or impact-rated membranes for large retail.</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-700">
                <strong className="text-primary">Related Matthews commercial services:</strong>{' '}
                <Link href="/roof-inspection-matthews-nc" className="text-primary hover:underline">Roof Inspection</Link>{' · '}
                <Link href="/roof-repair-matthews-nc" className="text-primary hover:underline">Roof Repair</Link>{' · '}
                <Link href="/roof-replacement-matthews-nc" className="text-primary hover:underline">Roof Replacement</Link>{' · '}
                <Link href="/storm-damage-roof-repair-matthews-nc" className="text-primary hover:underline">Storm Damage Repair</Link>{' · '}
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
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Need Commercial Roofing in Matthews?</h2>
              <p className="text-white/90">Get a free estimate for your business, property, or portfolio.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Matthews" slug="commercial-roofing-matthews-nc" count={4} title="Commercial Projects in Matthews" subtitle="Browse commercial roofing projects." schemaPageUrl={`${SITE_CONFIG.url}/commercial-roofing-matthews-nc`} />

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

      <ServiceCityLinks city="Matthews" citySlug="matthews-nc" title="Complete Roofing Services in Matthews" subtitle="Beyond commercial, we offer comprehensive solutions." />
      <RelatedCitiesLinks currentCity="Matthews" service="Commercial Roofing" serviceSlug="commercial-roofing" title="Commercial Roofing in Nearby Cities" />
      <CityGeoSection city="Matthews" state="NC" citySlug="matthews-nc" service="Commercial Roofing" />
      <CTASection title="Expert Commercial Roofing in Matthews" subtitle="Get a free estimate. We work around your schedule." />
    </>
  );
}
