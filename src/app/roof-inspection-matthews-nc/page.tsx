import { Metadata } from 'next';
import Image from 'next/image';
import {
  CheckCircle,
  Phone,
  Calendar,
  Shield,
  Star,
  HelpCircle,
  Award,
  Search,
  FileText,
  Camera,
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
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { RelatedCitiesLinks } from '@/components/ui/RelatedCitiesLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roof Inspection Matthews NC | Free',
  description:
    'Need a roof inspection in Matthews NC? Best Roofing Now offers FREE comprehensive roof inspections with detailed reports. BBB A+ rated, veteran-owned. Schedule today!',
  keywords: [
    'roof inspection matthews nc',
    'free roof inspection matthews',
    'roof inspection near me matthews',
    'roof inspection cost matthews nc',
    'roof inspection service matthews',
    'roof assessment matthews nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-inspection-matthews-nc`,
  },
  openGraph: {
    title: 'Roof Inspection Matthews NC | Free Inspections | Best Roofing Now',
  description: 'Free comprehensive roof inspections in Matthews NC with detailed reports.',
  url: `${SITE_CONFIG.url}/roof-inspection-matthews-nc`,
  type: 'website',
  images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Roof inspection in Matthews NC' }],
  },
};

const inspectionFeatures = [
  { icon: Search, title: 'Thorough Examination', description: 'We inspect every component of your roof - shingles, flashing, vents, and more.' },
  { icon: Camera, title: 'Photo Documentation', description: 'Detailed photos of any issues found for your records and insurance.' },
  { icon: FileText, title: 'Written Report', description: 'Comprehensive written report with findings and recommendations.' },
  { icon: Shield, title: 'No Obligation', description: 'Our inspections are completely free with no sales pressure.' },
  { icon: Award, title: 'Certified Inspectors', description: 'Trained and certified inspectors who know what to look for.' },
  { icon: CheckCircle, title: 'Honest Assessment', description: 'We\'ll tell you the truth about your roof\'s condition.' },
];

const inspectionProcess = [
  { step: 1, title: 'Schedule', description: 'Call or book online to schedule your free inspection.' },
  { step: 2, title: 'Inspect', description: 'Our certified inspector examines your entire roof system.' },
  { step: 3, title: 'Document', description: 'We take photos and notes of any issues found.' },
  { step: 4, title: 'Report', description: 'Receive a detailed report with our honest recommendations.' },
];

const faqs = [
  { question: 'Is the roof inspection really free?', answer: 'Yes. Our roof inspections in Matthews NC are completely free with no obligation and no sales pressure. Best Roofing Now provides honest assessments because an informed homeowner is our best customer — whether you need a repair today or in five years.' },
  { question: 'How long does a roof inspection take in Matthews?', answer: 'Most Matthews roof inspections take 30 to 60 minutes depending on roof size, pitch, and complexity. Larger homes in Providence Country Club, Olde Sycamore, or the Willowmere area may take up to 90 minutes for a thorough assessment.' },
  { question: 'Will you go on my roof?', answer: 'Yes. Our certified inspectors safely access your roof for a hands-on inspection when conditions allow. We also use drone technology for steep or tall roofs and to document hard-to-reach areas with high-resolution photos.' },
  { question: 'When should I get a roof inspection in Matthews?', answer: 'Annual inspections are recommended for every Matthews home, plus inspections after major storms, before buying or selling a home, or if you notice leaks, missing shingles, granules in gutters, or daylight through the attic. Matthews homes built before 2005 are prime candidates for annual inspections.' },
  { question: 'What does the inspection report include?', answer: 'Your report includes geo-tagged photos, a full condition assessment (shingles, flashing, vents, gutters, soffits, fascia, chimney, skylights), identified issues ranked by severity, repair or replacement recommendations, estimated remaining roof lifespan, and pricing for any recommended work.' },
  { question: 'Can you inspect for insurance claims in Matthews?', answer: 'Yes. We provide detailed inspections for insurance purposes including storm, hail, and wind damage documentation. Our reports meet requirements for carriers common in Matthews (State Farm, Allstate, Nationwide, USAA, Farm Bureau NC) and we work directly with adjusters to ensure a fair outcome.' },
  { question: 'How much does a roof inspection cost in Matthews NC?', answer: 'Best Roofing Now charges $0 for standard roof inspections in Matthews. Paid third-party inspections in the Charlotte metro typically run $150 to $400. We offer free inspections because we want homeowners to know their true roof condition without a financial barrier.' },
  { question: 'Do you inspect roofs for home buyers in Matthews?', answer: 'Yes. We provide pre-purchase roof inspections for Matthews home buyers, with a written report suitable for negotiation with the seller. Turnaround is typically same-day or next-business-day. Ask about our "Buyer Protection Inspection" for a more detailed report that includes a moisture scan of the attic.' },
  { question: 'What common roof problems do you see in Matthews?', answer: 'Matthews homes commonly show: wind-lifted shingles along west-facing slopes (prevailing wind direction), hail bruising from Piedmont NC storms, granule loss on south-facing shingles from summer UV exposure, flashing failures around chimneys and skylights in homes 15+ years old, and clogged valleys from surrounding oak and pine trees.' },
  { question: 'How soon can you schedule my Matthews roof inspection?', answer: 'Most Matthews roof inspections can be scheduled within 48 hours, often same-day for urgent situations (active leaks, storm damage, real estate closings). Call (704) 605-6047 or request online — we\'ll confirm a time window that works for your schedule.' },
];

const inspectorChecklist = [
  'Shingle condition: curling, cupping, cracking, granule loss, missing tabs',
  'Flashing integrity: chimney, skylights, vents, pipe boots, valleys',
  'Roof deck and decking: sagging, soft spots, rot, structural concerns',
  'Attic inspection: moisture, mold, ventilation, insulation, daylight through sheathing',
  'Gutters and downspouts: blockages, separation, fascia damage, proper pitch',
  'Soffit and fascia: rot, paint failure, pest intrusion, ventilation blocks',
  'Chimney condition: crown, mortar joints, cap, flashing, brick deterioration',
  'Ridge, hips, and valleys: shingle alignment, nail pops, sealant condition',
  'Skylights and roof penetrations: seal integrity, flashing, glass/dome condition',
  'Storm damage assessment: hail bruising, wind lift, debris impact, granule scatter patterns',
];

export default function RoofInspectionMatthewsNCPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Roof Inspection', url: `${SITE_CONFIG.url}/services/roof-inspection` }, { name: 'Matthews NC', url: `${SITE_CONFIG.url}/roof-inspection-matthews-nc` }]} />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema city="Matthews" state="NC" slug="roof-inspection-matthews-nc" distance={12} />
      <WebPageSchema
        name="Roof Inspection Matthews NC | Free Comprehensive Inspections"
        description="Free roof inspections in Matthews NC. Certified inspectors, drone technology, detailed written reports, photo documentation, insurance claim support. BBB A+ rated."
        url={`${SITE_CONFIG.url}/roof-inspection-matthews-nc`}
        primaryImage={IMAGES.hero.hero3}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Inspection', url: `${SITE_CONFIG.url}/services/roof-inspection` },
          { name: 'Matthews NC', url: `${SITE_CONFIG.url}/roof-inspection-matthews-nc` },
        ]}
      />
      <FreeInspectionOfferSchema />
      <FeaturedSnippetListAnswerSchema
        question="When should I get a roof inspection in Matthews NC?"
        directAnswer="Get a roof inspection in Matthews NC under these 6 conditions."
        items={[
          'Annually, as preventive maintenance',
          'After any major storm (hail, wind over 50 mph, ice)',
          'Before buying or selling a home',
          'When you notice leaks, stains, or missing shingles',
          'When your roof is 15 or more years old',
          'Before filing any insurance claim',
        ]}
        pageUrl={`${SITE_CONFIG.url}/roof-inspection-matthews-nc`}
      />
      <SpeakableContentBlocks city="Matthews" includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/roof-inspection-matthews-nc`} pageName="Roof Inspection Matthews NC" city="Matthews" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image src={IMAGES.hero.hero3} alt="Roof inspection in Matthews NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Matthews & South Charlotte</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Inspection Matthews NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Free Comprehensive Inspections</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Know your roof&apos;s condition with a free professional inspection</p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides free, thorough roof inspections throughout Matthews NC — including Olde Sycamore, Providence Country Club, Matthews Woods, Willowmere, Windsor Forest, and the Downtown Matthews historic district. Get an honest assessment from BBB A+ certified inspectors with detailed photo documentation, drone imagery for steep roofs, and a written report you own — no obligation, no sales pressure, no upsell.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Schedule Free Inspection</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />100% Free</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" />No Obligation</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What&apos;s Included in Your Free Inspection</h2>
            <p className="text-gray text-lg">Our comprehensive inspection covers every aspect of your roofing system.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inspectionFeatures.map((feature) => (
              <div key={feature.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{feature.title}</h3>
                <p className="text-gray text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Inspection Process</h2>
            <p className="text-gray text-lg">Getting your free roof inspection is simple.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inspectionProcess.map((item) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Matthews Inspectors Check</h2>
              <p className="text-gray text-lg">A complete roofing system has 10+ failure points. Our certified inspectors document every one.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {inspectorChecklist.map((item, index) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Roof Conditions Unique to Matthews NC</h2>
              <p className="text-gray text-lg">Matthews sits in the Piedmont climate zone with specific roof stressors our inspectors know by heart.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Piedmont Hail &amp; Wind</h3>
                <p className="text-gray-700 text-sm">Matthews sees 3–5 named hail events per year and wind gusts above 50 mph during spring storms. Our inspectors check for granule scatter in gutters, soft hail bruising (visible only at low-angle light), and wind-lifted shingles along west-facing slopes.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Tree Canopy Damage</h3>
                <p className="text-gray-700 text-sm">Older Matthews neighborhoods like Olde Sycamore and downtown have significant oak and pine canopy. We document debris in valleys, branch abrasion on shingles, algae streaks on north-facing slopes, and moisture trapped under needles.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Summer UV &amp; Heat</h3>
                <p className="text-gray-700 text-sm">Matthews summers regularly hit 95°+ with heat-index peaks above 105°. South-facing shingles lose granules 30% faster than north-facing ones. We document granule loss patterns to pinpoint replacement timing before active leaks begin.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Older Home Flashing</h3>
                <p className="text-gray-700 text-sm">Many Matthews homes were built between 1985 and 2005, meaning chimney and skylight flashing is now at the end of its service life. Flashing failure is the #1 cause of leaks in Matthews homes — we prioritize it on every inspection.</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-700">
                <strong className="text-primary">Related Matthews roofing services:</strong>{' '}
                <Link href="/roofing-matthews-nc" className="text-primary hover:underline">Roofing Matthews NC</Link>{' · '}
                <Link href="/roof-repair-matthews-nc" className="text-primary hover:underline">Roof Repair</Link>{' · '}
                <Link href="/roof-replacement-matthews-nc" className="text-primary hover:underline">Roof Replacement</Link>{' · '}
                <Link href="/storm-damage-roof-repair-matthews-nc" className="text-primary hover:underline">Storm Damage</Link>{' · '}
                <Link href="/metal-roofing-matthews-nc" className="text-primary hover:underline">Metal Roofing</Link>{' · '}
                <Link href="/gutter-installation-matthews-nc" className="text-primary hover:underline">Gutter Installation</Link>{' · '}
                <Link href="/commercial-roofing-matthews-nc" className="text-primary hover:underline">Commercial Roofing</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Ready for Your Free Roof Inspection?</h2>
              <p className="text-white/90">Schedule today - no obligation, just honest answers.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Schedule Now</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Matthews" slug="roof-inspection-matthews-nc" count={4} title="Recent Inspections in Matthews" subtitle="See our work throughout Matthews." schemaPageUrl={`${SITE_CONFIG.url}/roof-inspection-matthews-nc`} />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Roof Inspection FAQs</h2>
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

      <ServiceCityLinks city="Matthews" citySlug="matthews-nc" title="Complete Roofing Services in Matthews" subtitle="Beyond inspections, we offer comprehensive roofing solutions." />
      <RelatedCitiesLinks currentCity="Matthews" service="Roof Inspection" serviceSlug="roof-inspection" title="Roof Inspections in Nearby Cities" />
      <CityGeoSection city="Matthews" state="NC" citySlug="matthews-nc" service="Roof Inspection" />
      <CTASection title="Get Your Free Roof Inspection in Matthews" subtitle="Know the true condition of your roof. Schedule your free inspection today." />
    </>
  );
}
