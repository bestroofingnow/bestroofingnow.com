import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
import {
  CheckCircle,
  Phone,
  Calendar,
  Shield,
  Star,
  Award,
  HelpCircle,
  ArrowRight,
  Building2,
  Users,
  Wrench,
  Clock,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
  SpeakableContentBlocks,
  WebPageSchema,
  FeaturedSnippetListAnswerSchema,
  FreeInspectionOfferSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roofing Uptown Charlotte NC',
  description:
    "Commercial and condo roofing for Uptown Charlotte NC. TPO, EPDM, modified bitumen for high-rise terraces, mid-rise condos, mixed-use buildings, and Fourth Ward historic homes. NDL warranties, after-hours scheduling, building-management coordination.",
  keywords: [
    'roofing Uptown Charlotte NC',
    'Uptown Charlotte commercial roofing',
    'Uptown condo roofing',
    'Fourth Ward roofing',
    'Charlotte high-rise roofing',
    'Uptown Charlotte flat roof',
    'CBD roofing Charlotte',
    'mixed-use roofing Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-uptown-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing Uptown Charlotte NC | Commercial & Condo | Best Roofing Now',
    description:
      'Commercial and condo roofing for Uptown Charlotte. TPO, EPDM, modified bitumen for high-rise terraces, mid-rise condos, mixed-use buildings.',
    url: `${SITE_CONFIG.url}/roofing-uptown-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.flatRoof,
        width: 1200,
        height: 630,
        alt: 'Roofing Uptown Charlotte NC',
      },
    ],
  },
};

const faqs = [
  {
    question: 'What types of buildings does Best Roofing Now service in Uptown Charlotte NC?',
    answer:
      'We service the full range of Uptown Charlotte (CBD) buildings: high-rise terrace and amenity-deck repairs (Bank of America Tower vicinity, Duke Energy Center, Truist Center, Charlotte Plaza area); mid-rise condo and apartment buildings throughout First, Second, Third, and Fourth Ward; mixed-use buildings combining retail and residential; and Fourth Ward historic homes (1880s-1920s row houses and detached homes). Plus restaurants, retail centers, and office buildings along Tryon, Trade, College, and Brevard.',
  },
  {
    question: 'How does roof access work for Uptown high-rise terraces and amenity decks?',
    answer:
      'Uptown high-rise roof and terrace work requires specialized access coordination: building-management approval (typically through Cushman & Wakefield, JLL, or CBRE for Class A buildings), freight elevator scheduling (most repairs limited to off-business hours 6pm-7am or weekends), exterior swing-stage rigging for façade-adjacent terraces, OSHA fall protection for all crew, and tenant disruption minimization. We carry $2M+ general liability and full workers comp required by most Class A property managers.',
  },
  {
    question: 'What flat-roof systems are best for Uptown Charlotte mid-rise buildings?',
    answer:
      "For Uptown's mid-rise buildings (4-12 stories), the best flat-roof systems are: TPO (60-mil mechanically attached or fully adhered, $5-$12/sq ft); EPDM rubber single-ply ($4-$10/sq ft, 60+ year track record on parapet-walled buildings); modified bitumen torch-down or self-adhered ($6-$12/sq ft); and silicone restoration coatings ($2-$5/sq ft) to extend existing roofs 10-15 years. We are authorized installers for Carlisle Sure-Weld, Johns Manville JM TPO/EPDM, Firestone-Holcim, GAF EverGuard, and Mule-Hide commercial systems with 15-30 year NDL (no-dollar-limit) warranties.",
  },
  {
    question: 'Does Best Roofing Now handle Fourth Ward historic district roofing?',
    answer:
      "Yes. Fourth Ward is a National Register Historic District in Uptown Charlotte (designated 1976) with 1880s-1920s Victorian, Queen Anne, Romanesque Revival, and Italianate row houses and detached homes. Roof work requires Charlotte Historic District Commission (HDC) review for exterior changes — we coordinate the application packet with drawings, material samples, and HDC reviewer communications (typical 4-6 week review window). Period-appropriate materials include slate, copper, cedar shake, and heritage-color architectural shingles like CertainTeed Carriage House and GAF Camelot II.",
  },
  {
    question: 'Can you schedule roofing work around Uptown business hours and tenant occupancy?',
    answer:
      'Yes — and this is the standard expectation for Uptown work. Our scheduling options: weekday off-hours (6pm-7am) for occupied office buildings; weekend-only work for retail centers (avoiding business operations); pre-coordinated tenant notification packets distributed 7-14 days ahead; daily work-window notices with start/stop times; and silent crew protocols (no hammer drops, controlled debris, sealed dump containers). For mixed-use buildings with ground-floor restaurants, we coordinate around peak meal service.',
  },
  {
    question: 'How do you handle insurance claims for Uptown commercial buildings after storms?',
    answer:
      'Uptown commercial insurance claims follow a different process than residential: documented commercial-grade Xactimate estimates with line items adjusters recognize, drone and ground photo documentation, on-site adjuster meetings (we walk the roof together), supplemental filing for code upgrades and missed damage, NDL warranty preservation during repairs, and coordination with property managers and building owners separately when insurance has multiple-party interests. We work with all major commercial carriers including The Hartford, Liberty Mutual Commercial, Travelers, Nationwide, and Zurich.',
  },
  {
    question: 'What Uptown Charlotte parking and staging considerations apply to roof work?',
    answer:
      'Uptown street access requires advance coordination with Charlotte Department of Transportation (CDOT) for street parking permits, dumpster placement permits, and temporary lane closures when crane or boom-lift access is needed. We handle all permit applications and CDOT coordination on your behalf. Most projects use staging at the building loading dock or in dedicated overflow lots — we never block customer or tenant access without approval and notification.',
  },
  {
    question: 'What credentials does Best Roofing Now hold for Uptown Class A commercial work?',
    answer:
      "We hold the credentials Class A property managers and building owners require: NC General Contractor License #87344 (commercial unlimited classification), $2M+ general liability insurance, full workers' compensation, OSHA 10 and 30 certifications for all field crew, fall protection training, authorized installer status for Carlisle Sure-Weld, Johns Manville, Firestone-Holcim, GAF EverGuard, and Mule-Hide commercial systems (15-30 year NDL warranties), BBB A+ accreditation, and veteran-owned status.",
  },
];

export default function RoofingUptownCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Uptown Charlotte NC', url: `${SITE_CONFIG.url}/roofing-uptown-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-uptown-charlotte-nc`}
        pageName="Roofing Uptown Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <WebPageSchema
        name="Roofing Uptown Charlotte NC | Commercial & Condo Specialists | Best Roofing Now"
        url={`${SITE_CONFIG.url}/roofing-uptown-charlotte-nc`}
        description="Commercial and condo roofing for Uptown Charlotte NC (CBD First, Second, Third, Fourth Wards). TPO, EPDM, modified bitumen for high-rise terraces, mid-rise condos, mixed-use buildings, and Fourth Ward historic homes."
        primaryImage={IMAGES.commercial.flatRoof}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Uptown Charlotte NC', url: `${SITE_CONFIG.url}/roofing-uptown-charlotte-nc` },
        ]}
      />
      <FeaturedSnippetListAnswerSchema
        question="What roofing services are available in Uptown Charlotte NC?"
        directAnswer="Uptown Charlotte (CBD: First, Second, Third, Fourth Wards) roofing covers 4 building categories: (1) high-rise terrace and amenity-deck repairs (Bank of America Tower, Duke Energy Center, Truist Center vicinity); (2) mid-rise condo and apartment buildings 4-12 stories with TPO/EPDM/modified-bitumen flat-roof reroofs $4-$12/sq ft; (3) mixed-use buildings (retail + residential) requiring tenant-coordinated phasing; (4) Fourth Ward National Register Historic District homes (1880s-1920s) requiring Charlotte HDC review with period-appropriate slate, copper, cedar shake, and heritage shingle restoration. Best Roofing Now is authorized installer for Carlisle, Johns Manville, Firestone-Holcim, GAF, Mule-Hide commercial systems with 15-30 year NDL warranties; NC GC License #87344 commercial unlimited; $2M+ general liability."
        items={[
          'High-rise terrace and amenity-deck repairs — building-management coordination, freight elevator scheduling, OSHA fall protection',
          'Mid-rise condo/apartment 4-12 stories — TPO/EPDM/modified bitumen flat-roof reroofs $4-$12/sq ft',
          'Mixed-use buildings (retail + residential) — tenant-coordinated phasing, off-hours scheduling',
          'Fourth Ward Historic District — slate, copper, cedar shake, heritage shingles with HDC review',
          '15-30 year NDL warranties from Carlisle, JM, Firestone-Holcim, GAF, Mule-Hide',
          'NC GC License #87344 commercial unlimited; $2M+ general liability; OSHA 10/30 certified crews',
          'Off-hours scheduling 6pm-7am for occupied office buildings; weekend work for retail',
          'CDOT permit coordination for street parking, dumpster placement, lane closures',
        ]}
        pageUrl={`${SITE_CONFIG.url}/roofing-uptown-charlotte-nc`}
      />
      <FreeInspectionOfferSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.commercial.flatRoof} alt="Roofing Uptown Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-semibold">Class A Commercial | Fourth Ward Historic | Mid-Rise Condo</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Uptown <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Commercial. Condo. Fourth Ward historic. Off-hours scheduling.
            </p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now services Uptown Charlotte across First, Second, Third, and Fourth
              Wards — high-rise terrace and amenity-deck repairs near Bank of America Tower, Duke
              Energy Center, and Truist Center; mid-rise condo and apartment buildings 4-12 stories
              with TPO/EPDM/modified-bitumen reroofs; mixed-use buildings along Tryon, Trade,
              College, and Brevard; and Fourth Ward National Register Historic District homes with
              period-appropriate slate, copper, cedar, and heritage shingle restoration. Authorized
              installer for Carlisle, Johns Manville, Firestone-Holcim, GAF, and Mule-Hide
              commercial systems with 15-30 year NDL warranties. NC GC License #87344, $2M+
              general liability, OSHA 10/30 certified crews, off-hours scheduling for occupied
              buildings, and CDOT permit coordination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>
                Schedule Free Commercial Inspection
              </Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>
                Call {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Uptown Charlotte Building Types We Serve</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, title: 'High-Rise Terraces', desc: 'BoA Tower, Duke Energy Center, Truist Center vicinity; freight elevator scheduling, OSHA fall protection' },
              { icon: Users, title: 'Mid-Rise Condo / Apt', desc: '4-12 stories; TPO/EPDM/modified bitumen reroofs; First/Second/Third/Fourth Ward' },
              { icon: Wrench, title: 'Mixed-Use Retail+Residential', desc: 'Tenant-coordinated phasing; weekday off-hours or weekend-only scheduling' },
              { icon: Clock, title: 'Fourth Ward Historic', desc: '1880s-1920s; National Register District; HDC review; period-appropriate slate/copper/cedar' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="location" city="Charlotte" slug="roofing-uptown-charlotte-nc" />

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Uptown Roofing Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-light rounded-xl p-6 group">
                <summary className="flex items-start justify-between cursor-pointer font-semibold text-primary">
                  <span className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                    {faq.question}
                  </span>
                  <ArrowRight className="w-5 h-5 mt-0.5 flex-shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-4 text-gray pl-8">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CityGeoSection city="Charlotte" state="NC" citySlug="charlotte-nc" service="roofing-uptown" />

      <CTASection title="Uptown Charlotte Roofing — Done Right" subtitle="Class A credentials, off-hours scheduling, and the full commercial system stack with 15-30 year NDL warranties." />
    </>
  );
}
