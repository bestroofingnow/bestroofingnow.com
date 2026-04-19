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
  Clock,
  AlertTriangle,
  Droplets,
  Wind,
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
  title: 'Roof Repair Davidson NC | Fast Fixes',
  description:
    'Roof repair in Davidson NC — leaks, shingle, flashing, valley, and storm repairs for Lake Norman homes. Same-day emergency service. BBB A+ rated, veteran-owned.',
  keywords: [
    'roof repair davidson nc',
    'roof leak repair davidson',
    'emergency roof repair davidson nc',
    'roofing repair davidson',
    'fix roof leak davidson nc',
    'storm damage repair davidson',
    'flashing repair davidson nc',
    'valley leak repair davidson',
    'lake norman roof repair',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-repair-davidson-nc`,
  },
  openGraph: {
    title: 'Roof Repair Davidson NC | Fast & Reliable | Best Roofing Now',
    description: 'Expert roof repair services in Davidson NC. Same-day emergency repairs, storm damage restoration, leak fixes for Lake Norman homes.',
    url: `${SITE_CONFIG.url}/roof-repair-davidson-nc`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Roof repair services in Davidson NC' }],
  },
};

const repairTypes = [
  { icon: Droplets, title: 'Leak Repairs', description: 'Diagnose and seal active leaks before water damages drywall, insulation, or framing.' },
  { icon: Wind, title: 'Storm Damage', description: 'Lake Norman wind-fetch and hail repairs — missing shingles, dented vents, torn flashings.' },
  { icon: AlertTriangle, title: 'Emergency Repairs', description: '24/7 response with same-day tarping for active leaks across Davidson.' },
  { icon: Shield, title: 'Flashing Repairs', description: 'Re-flash chimneys, skylights, sidewalls, step-flashing, and pipe boots.' },
  { icon: CheckCircle, title: 'Shingle Replacement', description: 'Targeted shingle and valley-cut repairs — color-matched when possible.' },
  { icon: Clock, title: 'Preventive Repairs', description: 'Ridge vent, pipe boot, and sealant refresh to extend roof life 3–7 years.' },
];

const repairProcess = [
  { step: 1, title: 'Free Inspection', description: 'We photograph and document every issue — on the roof and in the attic.' },
  { step: 2, title: 'Detailed Estimate', description: 'Line-item quote with photos, no hidden fees, insurance-compatible.' },
  { step: 3, title: 'Professional Repair', description: 'Certified crew, manufacturer-approved materials, code-compliant methods.' },
  { step: 4, title: 'Quality Check', description: 'Post-repair leak test, magnet sweep for nails, and 2-year workmanship warranty.' },
];

const faqs = [
  { question: 'How quickly can you repair my roof in Davidson?', answer: 'For active leaks, we respond within 24 hours across Davidson and Lake Norman — often same-day for emergency tarping. Non-urgent repairs (missing shingles, minor flashing issues) are typically scheduled within 1–2 weeks depending on season. May–July and hurricane-remnant periods book fastest.' },
  { question: 'How much does roof repair cost in Davidson NC?', answer: 'Typical 2026 Davidson ranges: minor shingle repairs $275–$650, pipe boot or vent flashing $275–$525, chimney re-flash $650–$1,500, valley repair $600–$1,800, sagging decking replacement $900–$3,500, partial slope replacement $2,500–$6,500. Lakefront or custom Davidson homes with steep/complex pitches can run 15–25% higher. Free written estimates included.' },
  { question: 'Do you offer emergency roof repair in Davidson?', answer: 'Yes. We provide 24/7 emergency roof repair for Davidson, River Run, Bailey&apos;s Glen, St. Alban&apos;s, Summers Walk, Davidson College area, and surrounding Lake Norman neighborhoods. Call (704) 605-6047 for urgent leaks, storm damage, fallen trees, or active water intrusion. Our typical on-site response for tarping is under 3 hours.' },
  { question: 'Should I repair or replace my roof?', answer: 'Repair when: damage is isolated (one slope, one leak), roof is under 15 years old, and repair cost is under 30% of full replacement. Replace when: widespread granule loss, multiple active leaks, roof is 20+ years, or insurance totaled it in a hail/wind claim. We give an honest recommendation — not every Davidson roof needs replacement.' },
  { question: 'Do you handle insurance claims for roof repairs in Davidson?', answer: 'Yes. We document damage with geo-tagged photos, provide Xactimate-compatible estimates, and meet adjusters on-site for claims with State Farm, Allstate, Nationwide, USAA, Farm Bureau NC, Erie, Liberty Mutual, and Travelers. We do NOT file claims for wear-and-tear damage — that hurts your insurance relationship.' },
  { question: 'What are signs I need roof repair in Davidson?', answer: 'Key indicators: water stains on ceilings or in the attic, granules in gutters or at downspout outlets, missing or lifted shingles (especially on lakefront-facing slopes), cracked pipe boots (typical failure 8–12 years), daylight visible through the decking, damp insulation, and visible moss or dark streaks. Schedule a free inspection at the first sign — early repair prevents structural damage.' },
  { question: 'Do you repair roof leaks around chimneys and skylights in Davidson?', answer: 'Yes — chimney and skylight leaks are the most common repair call we get. Causes include failed counter-flashing, deteriorated mortar cap, cricket/saddle missing on chimneys 24"+ wide, shrinking roofing mastic, and failed skylight seals (typically 15–20 year lifespan). We re-flash to current code and use peel-and-stick underlayment for redundant waterproofing.' },
  { question: 'How long do roof repairs last?', answer: 'A properly executed repair should match the remaining life of the surrounding roof — typically 5–15 years. Our 2-year workmanship warranty covers the repair itself. However, if your roof is nearing end-of-life (18+ years for architectural shingle, 20+ for 3-tab), repairs become band-aids and we recommend budgeting for replacement.' },
  { question: 'Do you repair wood shake, metal, and tile roofs in Davidson?', answer: 'Yes. Beyond asphalt shingles, we repair wood shake (common on older Davidson Historic homes), standing seam and exposed-fastener metal (frequent on custom lakefront builds), and concrete/clay tile. Metal roof repairs usually involve re-sealing seams and replacing rubber gasket screws. Wood shake repairs require color-matched cedar and weathering.' },
  { question: 'Will my homeowner&apos;s insurance cover roof repair in Davidson?', answer: 'Sudden accidental damage (storm, tree fall, hail, wind) is usually covered; gradual wear and maintenance issues are not. For Lake Norman lakefront homes, confirm your wind/hail deductible — some carriers apply a separate (often higher) percentage-based deductible for named storms. We review your declarations page before recommending whether to file.' },
];

const repairRedFlags = [
  'Active drip or water stain on an interior ceiling or wall',
  'Granules accumulating in gutters, splash blocks, or downspout outlets',
  'Missing, lifted, curled, or cracked shingles visible from the ground',
  'Cracked, shrunken, or torn pipe boots (8–12 year failure point)',
  'Rusted, lifted, or pulling flashings at chimneys and sidewalls',
  'Sagging or soft spots in the roof deck (structural concern)',
  'Dark streaks or mossy growth on north-facing slopes',
  'Visible daylight through attic roof boards or around penetrations',
  'Damp insulation or water-stained attic rafters and sheathing',
  'Condensation, frost, or mold in the attic (ventilation failure)',
];

export default function RoofRepairDavidsonNCPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Roof Repair', url: `${SITE_CONFIG.url}/services/roof-repair` }, { name: 'Davidson NC', url: `${SITE_CONFIG.url}/roof-repair-davidson-nc` }]} />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema city="Davidson" state="NC" slug="roof-repair-davidson-nc" pagePath="/roof-repair-davidson-nc" distance={18} />
      <WebPageSchema
        name="Roof Repair Davidson NC | Leaks, Flashing, Storm & Emergency"
        description="Expert roof repair in Davidson NC and Lake Norman. Leaks, flashing, valleys, shingles, emergency tarping. 2-year workmanship warranty. BBB A+ rated."
        url={`${SITE_CONFIG.url}/roof-repair-davidson-nc`}
        primaryImage={IMAGES.hero.hero3}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Repair', url: `${SITE_CONFIG.url}/services/roof-repair` },
          { name: 'Davidson NC', url: `${SITE_CONFIG.url}/roof-repair-davidson-nc` },
        ]}
      />
      <FreeInspectionOfferSchema />
      <FeaturedSnippetListAnswerSchema
        question="What are the signs of a roof that needs repair in Davidson NC?"
        directAnswer="Seven common signs indicate a Davidson NC roof needs repair."
        items={[
          'Active leak or ceiling water stain',
          'Granules in gutters or downspouts',
          'Missing, lifted, or cracked shingles',
          'Cracked or shrunken pipe boots',
          'Rusted or lifted flashings at chimneys',
          'Sagging, soft deck spots',
          'Daylight visible through attic sheathing',
        ]}
        pageUrl={`${SITE_CONFIG.url}/roof-repair-davidson-nc`}
      />
      <SpeakableContentBlocks city="Davidson" includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/roof-repair-davidson-nc`} pageName="Roof Repair Davidson NC" city="Davidson" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero3} alt="Roof repair services in Davidson NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Davidson &amp; Lake Norman</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Repair Davidson NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Fast, Reliable Repairs</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Expert roof repairs for Davidson homes and businesses</p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              From minor leaks to chimney re-flashes, valley failures, and storm-driven damage, Best Roofing Now provides fast roof repair across Davidson NC — including River Run, The Farm at Bailey&apos;s Glen, St. Alban&apos;s Square, Summers Walk, McConnell, Lake Davidson Preserve, Historic Davidson, and the Davidson College campus corridor. 24/7 emergency response, same-day tarping, transparent pricing, and a 2-year workmanship warranty on every repair.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Schedule Free Inspection</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-accent-light" />24/7 Emergency Service</span>
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />BBB A+ Rated</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Roof Repair Services in Davidson</h2>
            <p className="text-gray text-lg">We handle every type of roof repair on Davidson and Lake Norman homes.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Roof Repair Process</h2>
            <p className="text-gray text-lg">We make roof repairs simple and stress-free.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairProcess.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">{item.step}</div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Repair Red Flags Our Davidson Inspectors Look For</h2>
              <p className="text-gray text-lg">10 early warning signs — catching these saves thousands vs. deferred repair.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {repairRedFlags.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-light rounded-lg p-4">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Davidson &amp; Lake Norman Roofs Need Repair</h2>
              <p className="text-gray text-lg">Climate stressors, common failure points, and repair cost context for Davidson homes.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Lake Norman Wind &amp; Weather</h3>
                <p className="text-gray-700 text-sm">Davidson homes near the lake face longer wind fetch across open water, driving elevated gust pressures on west- and north-facing slopes. Combined with Piedmont hail (3–5 events/yr), ice-storm glaze events, and humid summers, Davidson roofs accumulate repair needs faster than inland Mecklenburg homes.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Common Davidson Failure Points</h3>
                <p className="text-gray-700 text-sm">Pipe boots crack at the rubber gasket around year 8–12 and are the #1 leak source. Chimney counter-flashing separates from masonry after freeze-thaw cycles. Valley shingles show premature wear on steep lakefront pitches with tree debris accumulation. Skylight seals fail around year 15–20.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Historic Davidson Considerations</h3>
                <p className="text-gray-700 text-sm">Homes in Historic Davidson and near Davidson College campus often carry wood shake, slate, or heritage-profile shingles with tighter repair specifications — including color-matched cedar, slate hooks, and architectural review board coordination for visible work. We handle the permit and notification steps.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Repair-vs-Replace Math</h3>
                <p className="text-gray-700 text-sm">Rule of thumb: if repair cost exceeds 30% of full replacement and the roof is 18+ years old, replacement is usually the better long-term economics. For a 2,400 sq ft Davidson home with architectural shingle, that crossover typically lands at $4,500–$6,500 in accumulated repair scope.</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-700">
                <strong className="text-primary">Related Davidson services:</strong>{' '}
                <Link href="/roof-inspection-davidson-nc" className="text-primary hover:underline">Free Roof Inspection</Link>{' · '}
                <Link href="/roof-replacement-davidson-nc" className="text-primary hover:underline">Roof Replacement</Link>{' · '}
                <Link href="/storm-damage-roof-repair-davidson-nc" className="text-primary hover:underline">Storm Damage Repair</Link>{' · '}
                <Link href="/roofing-davidson-nc" className="text-primary hover:underline">Roofing Davidson NC</Link>{' · '}
                <Link href="/services/chimney-flashing-repair" className="text-primary hover:underline">Chimney Flashing</Link>{' · '}
                <Link href="/services/gutter-repair" className="text-primary hover:underline">Gutter Repair</Link>{' · '}
                <Link href="/emergency-tarp-service-charlotte-nc" className="text-primary hover:underline">Emergency Tarping</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Need Roof Repair in Davidson?</h2>
              <p className="text-white/90">Don&apos;t wait for small problems to become big ones. Schedule your free inspection today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Schedule Inspection</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Davidson" slug="roof-repair-davidson-nc" count={4} title="Recent Roof Repairs in Davidson" subtitle="Browse completed roof repair projects." schemaPageUrl={`${SITE_CONFIG.url}/roof-repair-davidson-nc`} />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Roof Repair FAQs</h2>
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

      <ServiceCityLinks city="Davidson" citySlug="davidson-nc" title="Complete Roofing Services in Davidson" subtitle="Beyond repairs, we offer comprehensive roofing solutions." />
      <RelatedCitiesLinks currentCity="Davidson" service="Roof Repair" serviceSlug="roof-repair" title="Roof Repair in Nearby Cities" />
      <CityGeoSection city="Davidson" state="NC" citySlug="davidson-nc" service="Roof Repair" />

      <LKNPartnershipsBlock city={"Davidson"} />
      <LKNDataCitations city={"Davidson"} />
      <CTASection title="Ready to Fix Your Roof in Davidson?" subtitle="Get a free inspection and honest assessment from our certified team." />
    </>
  );
}
