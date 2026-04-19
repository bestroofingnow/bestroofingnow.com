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
  ClipboardCheck,
  Clock,
  DollarSign,
  FileText,
  Wrench,
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
  title: 'Roof Maintenance Program Charlotte NC',
  description:
    'Preventive roof maintenance in Charlotte NC — 2x/year inspections, gutter clean, flashing checks, sealant refresh, warranty-compliant documentation. Residential and commercial tiers.',
  keywords: [
    'roof maintenance charlotte nc',
    'roof maintenance program charlotte',
    'preventive roof maintenance charlotte',
    'commercial roof maintenance charlotte nc',
    'residential roof maintenance charlotte',
    'roof inspection program charlotte',
    'annual roof maintenance charlotte',
    'ndl warranty maintenance',
    'manufacturer warranty maintenance',
    '2x per year roof inspection',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-maintenance`,
  },
  openGraph: {
    title: 'Roof Maintenance Program Charlotte NC | Preventive Care | Best Roofing Now',
    description: 'Preventive roof maintenance programs to extend roof life 3-7 years and maintain NDL warranty status in Charlotte NC.',
    url: `${SITE_CONFIG.url}/roof-maintenance`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Roof maintenance in Charlotte NC' }],
  },
};

const programFeatures = [
  { icon: ClipboardCheck, title: 'Bi-Annual Inspections', description: 'Spring (Mar–Apr) and fall (Oct–Nov) inspections matched to Piedmont NC storm and hail seasons.' },
  { icon: Wrench, title: 'Minor Repairs Included', description: 'Pipe boots, sealant refresh, single-shingle replacement, minor flashing fixes included — no separate invoicing for small work.' },
  { icon: FileText, title: 'Warranty-Grade Documentation', description: 'Photo-documented condition reports that meet manufacturer NDL warranty maintenance-log requirements.' },
  { icon: Shield, title: 'Warranty Preservation', description: 'Keep GAF Golden Pledge, CertainTeed 5-Star, OC Platinum, and Carlisle/JM/Firestone NDL warranties in force.' },
  { icon: Clock, title: 'Priority Emergency Scheduling', description: 'PM customers get front-of-queue dispatch for storm damage and emergency leaks.' },
  { icon: DollarSign, title: '30–50% Cost Savings', description: 'Preventive catches small issues before $3,000–$15,000 reactive repairs — extends roof life 3–7 years.' },
];

const maintenanceChecklist = [
  'Inspect all shingles or membrane sections for damage',
  'Check and clean gutters, downspouts, and splash blocks',
  'Clear debris from drains, scuppers, and overflow outlets',
  'Probe-test flashings at walls, curbs, and penetrations',
  'Check and refresh sealants and caulking at terminations',
  'Inspect roof vents, HVAC curb flashings, and pipe boots',
  'Map ponding water patterns (flat roofs) and slope issues',
  'Verify attic ventilation (NFVA math) and insulation condition',
  'Look for pest damage — squirrel holes, woodpecker marks, bird nests',
  'Photo document all findings with timestamped condition report',
];

const programTiers = [
  { name: 'Residential Basic', visits: '1x/year', includes: 'Annual inspection, written photo report, debris removal, sealant spot-check', price: 'From $250/year' },
  { name: 'Residential Standard', visits: '2x/year', includes: 'Spring + fall inspections, minor repairs, gutter cleaning, priority emergency scheduling, discount on major repairs', price: 'From $450/year' },
  { name: 'Residential Premium', visits: '4x/year', includes: 'Quarterly inspections, all minor repairs included, gutter + drain maintenance, 24/7 emergency priority, annual ventilation review', price: 'From $800/year' },
  { name: 'Commercial Standard', visits: '2x/year', includes: 'Spring + fall inspections, drain/scupper cleanout, seam and termination bar probe-test, written condition report, minor field repairs', price: 'From $450/year (under 5,000 sq ft)' },
  { name: 'Commercial Premium (NDL)', visits: '2–4x/year', includes: 'Manufacturer warranty-compliant documentation, all Standard services plus thermal imaging, infrared moisture scanning annually, major-repair coordination', price: 'From $850/year (scales by sq ft)' },
];

const faqs = [
  { question: 'Why do I need a roof maintenance program in Charlotte NC?', answer: 'Three reasons: (1) catches small issues (failed pipe boot, cracked sealant, lifted shingle) before they become $3,000–$15,000 reactive repairs — typical preventive-to-reactive cost ratio is 1:5 or worse; (2) extends usable roof life 3–7 years in the Charlotte climate (hail exposure + tree canopy + humidity); (3) maintains NDL manufacturer warranty status on high-tier full-system warranties that require documented annual or bi-annual maintenance. Without maintenance records, manufacturers can deny claims years later based on "lack of reasonable care."' },
  { question: 'How often should my roof be inspected in Charlotte?', answer: 'Default recommendation is 2x per year: spring (March–April) to catch winter freeze-thaw and pre-hail-season damage, and fall (October–November) to prep for winter and catch tropical-remnant damage from Aug–Oct hurricane season. Bump to quarterly (4x/year) for: heavy tree-canopy neighborhoods (Olde Sycamore, Matthews Woods, Providence Country Club, Dilworth, Myers Park), commercial buildings with many penetrations, flat roofs with ponding history, and roofs 15+ years old approaching end-of-life.' },
  { question: 'What does a roof maintenance visit include?', answer: 'Standard tier visits include: (1) walk-the-roof inspection of every slope or flat-roof section with probe-testing of flashings; (2) full gutter, downspout, drain, and scupper cleanout; (3) sealant and caulking refresh at penetrations; (4) minor repairs (failed pipe boot, 1–5 lifted shingles, small sealant failures); (5) attic ventilation check via soffit and ridge verification; (6) photo-documented written condition report emailed within 48 hours. Commercial Premium tier adds thermal imaging and annual infrared moisture scans.' },
  { question: 'Will roof maintenance void my warranty?', answer: 'The opposite — manufacturer NDL (No Dollar Limit) warranties like GAF Golden Pledge, CertainTeed 5-Star, Owens Corning Platinum Protection, Carlisle SynTec, Johns Manville Peak Advantage, and Firestone/Holcim UltraLoyalty REQUIRE documented regular maintenance to remain in force. Homeowners who skip maintenance find their claims denied years later. Our written condition reports satisfy the documentation requirements; we maintain records on file for warranty-period duration (up to 50 years on premium tiers).' },
  { question: 'How much does a Charlotte roof maintenance program cost in 2026?', answer: 'Residential pricing: Basic (1 visit/year) from $250/year, Standard (2 visits/year with minor repairs) from $450/year, Premium (4 visits/year, all minor repairs included) from $800/year. Commercial pricing scales with square footage: Commercial Standard (2 visits/year, under 5,000 sq ft) from $450/year, Commercial Premium with NDL warranty compliance from $850/year. Large portfolios (50,000+ sq ft) get volume pricing — typically $0.08–$0.14/sq ft annually. All tiers include priority emergency scheduling.' },
  { question: 'Can I do roof maintenance myself to save money?', answer: 'DIY-appropriate: keeping gutters clear of leaves and pine needles, visual inspection from ground with binoculars, safely accessible single-story debris clearing. NOT DIY-appropriate: any roof walking (#1 DIY injury risk), probe-testing flashings, sealant application to manufacturer spec, identifying hidden moisture under single-ply membrane, confirming warranty-grade documentation. Ladder falls are the leading home-injury claim — a $450/year PM contract is far cheaper than $50,000+ in medical bills plus lost income from a 12 ft fall.' },
  { question: 'Is maintenance worth it on a newer (under 10 year old) roof?', answer: 'Yes, for two reasons. (1) Newer roofs still have failure points that appear early — pipe boot gaskets crack at year 5–8, not year 20; sealant around chimney and skylights degrades by year 5; ventilation shortfalls show up as premature decking discoloration at year 3–7. (2) If you have a top-tier full-system warranty (GAF Golden Pledge, CertainTeed 5-Star), maintenance documentation IS the warranty compliance — missing the first 5 years of records can cause denial of a year-30 claim.' },
  { question: 'Can you maintain any roof type in Charlotte?', answer: 'Yes — we maintain every residential material (architectural asphalt, 3-tab, wood shake, slate, tile, metal — standing seam and exposed fastener, synthetic composite) and every commercial system (TPO, EPDM, PVC, modified bitumen, BUR, standing seam metal, and coated roofs). Maintenance protocols differ by material: e.g., TPO seam probe-test vs shingle pipe-boot check vs slate broken-tile inventory. All inspection reports are tailored to the specific roof system.' },
  { question: 'What happens if the inspection finds major problems?', answer: 'Standard PM tier covers minor repairs in the contract; major repairs (full replacement, structural deck, large-area flashing, widespread moisture) are quoted separately at PM-customer discount rates (typically 10–15% off our standard pricing). We provide written scope with photos, let you decide whether to proceed, and schedule major work on PM-customer priority timeline. No pressure tactics — we earned the PM contract by providing honest assessments, not by upselling reactively.' },
  { question: 'How does the maintenance program interact with insurance claims?', answer: 'Several benefits. (1) Documented pre-storm condition reports help prove damage is storm-related (not pre-existing wear) — crucial for claim approval. (2) PM customers skip the "was this existing damage?" adjuster dispute because we can produce a recent condition report showing the roof was intact. (3) Annual infrared scans on commercial roofs can establish moisture-free baseline valuable for property acquisition due diligence and carrier negotiations. (4) We handle adjuster meetings during claim period as part of the standard service relationship.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Services', url: `${SITE_CONFIG.url}/services` },
  { name: 'Roof Maintenance', url: `${SITE_CONFIG.url}/roof-maintenance` },
];

export default function RoofMaintenancePage() {
  const pageUrl = `${SITE_CONFIG.url}/roof-maintenance`;

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Roof Maintenance Program",
          description: "Preventive roof maintenance programs in Charlotte NC to extend roof life and maintain warranties.",
          slug: "roof-maintenance",
        }}
      />
      <WebPageSchema
        name="Roof Maintenance Program Charlotte NC | Preventive Care"
        description="Preventive roof maintenance in Charlotte NC — 2x/year inspections, warranty-compliant documentation, residential and commercial tiers to extend roof life 3-7 years."
        url={pageUrl}
        primaryImage={IMAGES.hero.hero3}
        breadcrumb={breadcrumbItems}
      />
      <FreeInspectionOfferSchema />
      <FeaturedSnippetListAnswerSchema
        question="What is included in a roof maintenance visit in Charlotte NC?"
        directAnswer="Ten items included in every maintenance visit across residential and commercial tiers."
        items={maintenanceChecklist}
        pageUrl={pageUrl}
      />
      <SpeakableContentBlocks includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={pageUrl} pageName="Roof Maintenance Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero3} alt="Roof maintenance in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <ClipboardCheck className="w-4 h-4" />
              <span className="text-sm font-semibold">Extend Roof Life 3–7 Years</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Maintenance Program
              <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Preventive care that saves money and preserves warranty</p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Preventive roof maintenance across Charlotte NC and Lake Norman — 2x/year inspections (spring + fall) keyed to Piedmont weather patterns, minor repairs included, warranty-grade photo documentation, and NDL-compliant condition reports that preserve GAF Golden Pledge, CertainTeed 5-Star, Owens Corning Platinum Protection, and commercial Carlisle/JM/Firestone warranty status. Residential tiers from $250–$800/year, commercial from $450/year scaling to portfolio contracts. Priority emergency scheduling included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Consultation</Button>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Program Benefits</h2>
            <p className="text-gray text-lg">Why proactive maintenance beats reactive repairs 5-to-1 on cost.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programFeatures.map((feature) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Maintenance Program Tiers</h2>
            <p className="text-gray text-lg">Five tiers across residential and commercial — match visit frequency to your roof type and warranty needs.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programTiers.map((tier, index) => (
              <div key={tier.name} className={`p-6 rounded-xl ${index === 1 ? 'bg-primary text-white' : 'bg-white'}`}>
                <h3 className={`font-bold text-xl mb-2 ${index === 1 ? 'text-white' : 'text-dark'}`}>{tier.name}</h3>
                {index === 1 && <span className="inline-block bg-accent text-white text-xs px-2 py-1 rounded-full mb-4">Most Popular</span>}
                <p className={`text-sm mb-2 ${index === 1 ? 'text-white/90' : 'text-gray'}`}>{tier.visits} inspections</p>
                <p className={`text-sm mb-4 ${index === 1 ? 'text-white/80' : 'text-gray'}`}>{tier.includes}</p>
                <p className={`font-bold ${index === 1 ? 'text-white' : 'text-primary'}`}>{tier.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">What We Inspect</h2>
              <p className="text-gray text-lg mb-6">Every maintenance visit includes our 10-point inspection checklist:</p>
              <ul className="space-y-3">
                {maintenanceChecklist.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <SEOImage src={IMAGES.realProjects.drone1} alt="Roof maintenance inspection" width={600} height={450} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Maintenance Protects Your NDL Warranty</h2>
              <p className="text-gray text-lg">Top-tier manufacturer warranties REQUIRE documented maintenance. Missing records can void multi-decade coverage.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Residential Warranties</h3>
                <p className="text-gray-700 text-sm">GAF Golden Pledge (50 yr material + 25 yr labor), CertainTeed 5-Star, Owens Corning Platinum Protection. All require manufacturer-acceptable inspection documentation to stay in force. Our written reports meet the standard.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Commercial NDL Warranties</h3>
                <p className="text-gray-700 text-sm">Carlisle SynTec, Johns Manville Peak Advantage, Firestone/Holcim UltraLoyalty — 20–30 year NDL system warranties explicitly require 2x/year documented PM. We are authorized installers for all four programs.</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-700">
                <strong className="text-primary">Related services:</strong>{' '}
                <Link href="/services/roof-inspection" className="text-primary hover:underline">Roof Inspection</Link>{' · '}
                <Link href="/services/residential-roof-maintenance" className="text-primary hover:underline">Residential PM</Link>{' · '}
                <Link href="/services/commercial-roof-maintenance" className="text-primary hover:underline">Commercial PM</Link>{' · '}
                <Link href="/roof-certification" className="text-primary hover:underline">Roof Certification</Link>{' · '}
                <Link href="/roof-coating" className="text-primary hover:underline">Roof Coatings</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Protect Your Roof Investment</h2>
              <p className="text-white/90">Start your maintenance program today — residential from $250/year, commercial from $450/year.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Started</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="roof-maintenance" count={4} title="Maintenance Projects" subtitle="Roofs we maintain throughout Charlotte." schemaPageUrl={pageUrl} />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Maintenance FAQs</h2>
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

      <CTASection title="Start Your Maintenance Program" subtitle="Protect your roof investment with proactive care — residential and commercial tiers available." />
    </>
  );
}
