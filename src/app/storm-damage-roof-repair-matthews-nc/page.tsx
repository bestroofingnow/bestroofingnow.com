import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
import {
  CheckCircle,
  Phone,
  Calendar,
  Shield,
  Star,
  HelpCircle,
  Clock,
  CloudRain,
  Wind,
  AlertTriangle,
  MapPin,
  FileText,
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
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { RelatedCitiesLinks } from '@/components/ui/RelatedCitiesLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Storm Damage Roof Repair Matthews NC',
  description:
    'Storm damage to your Matthews roof? Best Roofing Now provides 24/7 emergency repairs and insurance claim assistance. BBB A+ rated, veteran-owned. Call now!',
  keywords: [
    'storm damage roof repair matthews nc',
    'hail damage roof repair matthews',
    'wind damage roof repair matthews nc',
    'emergency roof repair matthews',
    'storm damage roofing matthews',
    'roof storm damage matthews nc',
    'roofing insurance claims matthews',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/storm-damage-roof-repair-matthews-nc`,
  },
  openGraph: {
    title: 'Storm Damage Roof Repair Matthews NC | 24/7 Emergency | Best Roofing Now',
  description: 'Fast storm damage roof repair in Matthews NC with insurance claim assistance.',
  url: `${SITE_CONFIG.url}/storm-damage-roof-repair-matthews-nc`,
  type: 'website',
  images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Storm damage roof repair in Matthews NC' }],
  },
};

const damageTypes = [
  { icon: CloudRain, title: 'Hail Damage', description: 'Repair and replacement for hail-damaged shingles and granule loss.' },
  { icon: Wind, title: 'Wind Damage', description: 'Fix lifted, torn, or missing shingles caused by high winds.' },
  { icon: AlertTriangle, title: 'Fallen Debris', description: 'Repair damage from fallen trees, branches, and storm debris.' },
  { icon: Clock, title: 'Emergency Tarping', description: 'Immediate temporary protection to prevent further damage.' },
  { icon: FileText, title: 'Insurance Claims', description: 'Complete assistance with documentation and claim process.' },
  { icon: Shield, title: 'Full Restoration', description: 'Complete roof restoration to pre-storm condition.' },
];

const insuranceProcess = [
  { step: 1, title: 'Free Inspection', description: 'We document all storm damage with photos and reports.' },
  { step: 2, title: 'Insurance Filing', description: 'We help you file your claim with proper documentation.' },
  { step: 3, title: 'Adjuster Meeting', description: 'We meet with your adjuster to ensure fair assessment.' },
  { step: 4, title: 'Approved Repairs', description: 'Once approved, we complete repairs to highest standards.' },
];

const faqs = [
  { question: 'What should I do after storm damage to my Matthews roof?', answer: 'First, ensure safety — stay inside until winds pass and avoid any interior ceiling sagging. Then take photos of visible damage from the ground (do not climb on a storm-damaged roof). Call Best Roofing Now at (704) 605-6047 for a free inspection. We offer 24/7 emergency response with tarping service for active leaks in Matthews NC.' },
  { question: 'Do you help with insurance claims for storm damage in Matthews?', answer: 'Yes. We have extensive experience with storm damage claims for carriers common in Matthews (State Farm, Allstate, Nationwide, USAA, Farm Bureau NC, Liberty Mutual, Travelers). We document all damage with geo-tagged photos, provide detailed Xactimate-compatible estimates, and meet adjusters on-site to ensure a fair settlement.' },
  { question: 'How quickly can you respond to storm damage in Matthews?', answer: 'We offer 24/7 emergency response in Matthews. For active leaks, our typical on-site response is under 3 hours for emergency tarping. Full damage inspections are usually scheduled within 24 hours. Immediately after large storms (hailstorms, tropical systems) we prioritize by severity.' },
  { question: 'Will my insurance cover storm damage repairs?', answer: 'Most HO-3 and HO-5 homeowner policies cover sudden storm damage including hail, wind, lightning, and fallen debris. Coverage depends on your deductible, policy age cap (some NC carriers cap coverage on roofs 20+ years old), and proof the damage is storm-related (not wear-and-tear). We document all damage to support the claim.' },
  { question: 'How can I tell if my Matthews roof has storm damage?', answer: 'Signs include: missing or lifted shingles, granules in gutters or downspouts, dents on metal vents and gutters, bruised shingles (dark spots that feel soft), tree debris in valleys, water stains on interior ceilings, and daylight visible through attic sheathing. Schedule a free inspection within 12 months of any significant storm — many carriers require claims within a year.' },
  { question: 'Should I get multiple estimates for storm damage repair?', answer: 'Your insurance typically pays based on damage scope, not the lowest bid — so the cheapest estimate does not save you money. Choose a reputable, licensed, and insured contractor based on quality, manufacturer certifications (GAF, CertainTeed, Owens Corning), and local reputation. Avoid storm-chasers that appear after major storms without local references.' },
  { question: 'What types of storms damage Matthews roofs most?', answer: 'The most damaging storms in Matthews NC are: (1) hailstorms with 1"+ stones (Piedmont NC averages 3–5 per year), (2) straight-line wind events with gusts above 60 mph (common in spring), (3) tropical systems and remnants of Atlantic hurricanes tracking inland, (4) ice storms (rare but significant damage when they occur), and (5) tornadic microbursts during severe weather outbreaks.' },
  { question: 'Can I still file a storm damage claim if the storm was months ago?', answer: 'Usually yes, but time is critical. Most NC insurance carriers allow 12 months from the storm date to file a claim, though some require reporting within 30 or 60 days. Document the storm date (NOAA and weather history records for Matthews), then call us for an inspection. Do not delay — adjusters will argue late claims represent wear and tear, not storm damage.' },
  { question: 'Do you install impact-resistant (Class 4) shingles after storm damage in Matthews?', answer: 'Yes. If your roof needs replacement, we recommend Class 4 impact-resistant shingles — GAF Armor Shield II, CertainTeed NorthGate, or Malarkey Vista. Many insurers offer premium discounts of 10–30% for Class 4 roofs in NC. They withstand 2" hail in UL 2218 testing and carry extended warranties.' },
  { question: 'What does storm damage repair cost in Matthews NC?', answer: 'Minor wind damage repairs (10–20 shingles) start around $400–$800. Partial slope replacement runs $2,500–$6,000. Full roof replacement due to hail or wind ranges $10,000–$25,000+ depending on home size and material. If your claim is approved, your out-of-pocket cost is typically just your deductible ($1,000–$2,500 for most Matthews homeowners).' },
];

const damageRedFlags = [
  'Soft, bruised spots on shingles (hail impact — often invisible from the ground)',
  'Granule scatter in gutters and at downspout outlets',
  'Lifted, creased, or missing shingles along roof edges and ridges',
  'Dented metal vents, flashing, and gutters (a proxy for hail size)',
  'Exposed mat (black) on shingles where granule layer is stripped',
  'Wrinkled or buckled shingles from heat + wind uplift combined',
  'Tree debris lodged in valleys, around chimneys, and in gutters',
  'Water stains on attic sheathing or insulation (active leak indicator)',
  'Daylight visible through roof boards or around penetrations',
  'Cracked or missing sealant around flashings after high-wind events',
];

export default function StormDamageRoofRepairMatthewsNCPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Storm Damage', url: `${SITE_CONFIG.url}/services/storm-damage` }, { name: 'Matthews NC', url: `${SITE_CONFIG.url}/storm-damage-roof-repair-matthews-nc` }]} />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema city="Matthews" state="NC" slug="storm-damage-roof-repair-matthews-nc" pagePath="/storm-damage-roof-repair-matthews-nc" distance={12} />
      <WebPageSchema
        name="Storm Damage Roof Repair Matthews NC | 24/7 Emergency Response"
        description="24/7 storm damage roof repair in Matthews NC. Hail, wind, and tree damage. Free inspection, insurance claim assistance, emergency tarping. BBB A+ rated."
        url={`${SITE_CONFIG.url}/storm-damage-roof-repair-matthews-nc`}
        primaryImage={IMAGES.hero.hero3}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Storm Damage', url: `${SITE_CONFIG.url}/services/storm-damage` },
          { name: 'Matthews NC', url: `${SITE_CONFIG.url}/storm-damage-roof-repair-matthews-nc` },
        ]}
      />
      <FreeInspectionOfferSchema />
      <FeaturedSnippetListAnswerSchema
        question="What are the signs of storm damage on a Matthews NC roof?"
        directAnswer="Look for these 7 common signs of storm damage on Matthews roofs."
        items={[
          'Missing or lifted shingles',
          'Granules in gutters or downspouts',
          'Dented gutters, vents, or flashing',
          'Soft, bruised spots on shingles (hail)',
          'Tree debris lodged in valleys',
          'Water stains on interior ceilings',
          'Daylight through attic sheathing',
        ]}
        pageUrl={`${SITE_CONFIG.url}/storm-damage-roof-repair-matthews-nc`}
      />
      <SpeakableContentBlocks city="Matthews" includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/storm-damage-roof-repair-matthews-nc`} pageName="Storm Damage Roof Repair Matthews NC" city="Matthews" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero3} alt="Storm damage roof repair in Matthews NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-red-500/80 rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-semibold">24/7 Emergency Storm Response</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Storm Damage Roof Repair
              <br className="hidden md:block" />
              <span className="text-accent-light">Matthews NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Fast emergency repairs + insurance claim assistance</p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              When storms damage your Matthews NC roof — hail, straight-line wind, tropical systems, or fallen trees — Best Roofing Now responds 24/7 throughout Matthews, Olde Sycamore, Providence Country Club, Matthews Woods, Willowmere, Windsor Forest, and the Downtown Matthews historic district. Free damage inspection, emergency tarping service, full insurance claim documentation, and repairs backed by a 10-year workmanship warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="primary" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call Now: {SITE_CONFIG.phone}</Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Schedule Inspection</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-accent-light" />24/7 Emergency Response</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />Insurance Claim Experts</span>
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Storm Damage Services in Matthews</h2>
            <p className="text-gray text-lg">We handle all types of storm damage to Matthews roofs.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {damageTypes.map((type) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Insurance Claim Process</h2>
            <p className="text-gray text-lg">We guide you through the entire insurance claim process.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insuranceProcess.map((item) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Storm Damage Red Flags Our Matthews Inspectors Look For</h2>
              <p className="text-gray text-lg">10 damage signatures that trigger an insurance claim — many invisible from the ground.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {damageRedFlags.map((item, index) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Matthews NC Storm History &amp; Insurance Context</h2>
              <p className="text-gray text-lg">Local storm patterns, common damage types, and what Matthews insurance adjusters look for.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Piedmont Hail Season</h3>
                <p className="text-gray-700 text-sm">Matthews sits in the Piedmont hail belt. Peak season runs April through August with severe events most common in May and June. NOAA records 3–5 hail days per year for Mecklenburg County, with stones occasionally exceeding 2". Hail damage is often invisible from the ground — proper inspection requires walking the roof.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Wind &amp; Tropical Systems</h3>
                <p className="text-gray-700 text-sm">Gust events above 60 mph occur 4–8 times annually. Remnants of Atlantic hurricanes (2018 Florence, 2020 Isaias, 2024 Helene) regularly bring heavy rain and sustained 40–50 mph winds to Matthews. West-facing roof slopes take the brunt of prevailing storm winds.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Tree-Fall Damage</h3>
                <p className="text-gray-700 text-sm">Matthews' mature oak, pine, and hardwood canopy creates elevated tree-fall risk. Weighted branches during wet winter storms and derecho events cause structural impact damage. We handle everything from cosmetic repairs to full sheathing replacement, working with arborists and insurance adjusters.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Insurance Carriers We Work With</h3>
                <p className="text-gray-700 text-sm">We routinely work with State Farm, Allstate, Nationwide, USAA, Farm Bureau NC, Liberty Mutual, Travelers, Erie, and NC Joint Underwriting Association (for coastal-exposed policies). We provide Xactimate-compatible estimates and meet adjusters on-site for every Matthews claim.</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-700">
                <strong className="text-primary">Related Matthews storm services:</strong>{' '}
                <Link href="/roof-inspection-matthews-nc" className="text-primary hover:underline">Free Roof Inspection</Link>{' · '}
                <Link href="/roof-repair-matthews-nc" className="text-primary hover:underline">Roof Repair</Link>{' · '}
                <Link href="/roof-replacement-matthews-nc" className="text-primary hover:underline">Roof Replacement</Link>{' · '}
                <Link href="/roofing-matthews-nc" className="text-primary hover:underline">Roofing Matthews NC</Link>{' · '}
                <Link href="/insurance-claim-roofing-charlotte-nc" className="text-primary hover:underline">Insurance Claim Help</Link>{' · '}
                <Link href="/emergency-tarp-service-charlotte-nc" className="text-primary hover:underline">Emergency Tarping</Link>{' · '}
                <Link href="/hail-damage-roof-repair-charlotte-nc" className="text-primary hover:underline">Hail Damage Repair</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-600 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Storm Damage Emergency?</h2>
              <p className="text-white/90">Call now for immediate 24/7 emergency response in Matthews.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-red-600 hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Request Inspection</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Matthews" slug="storm-damage-roof-repair-matthews-nc" count={4} title="Storm Damage Repairs in Matthews" subtitle="Browse storm damage restoration projects." schemaPageUrl={`${SITE_CONFIG.url}/storm-damage-roof-repair-matthews-nc`} />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Storm Damage FAQs</h2>
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

      <ServiceCityLinks city="Matthews" citySlug="matthews-nc" title="Complete Roofing Services in Matthews" subtitle="Beyond storm damage, we offer comprehensive roofing solutions." />
      <RelatedCitiesLinks currentCity="Matthews" service="Storm Damage Repair" serviceSlug="storm-damage-roof-repair" title="Storm Damage Repair in Nearby Cities" />
      <CityGeoSection city="Matthews" state="NC" citySlug="matthews-nc" service="Storm Damage Repair" />
      <CTASection title="Storm Damage? We're Here to Help Matthews" subtitle="Get a free inspection and insurance claim assistance." />
    </>
  );
}
