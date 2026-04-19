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
  FileText,
  Home,
  Search,
  ClipboardCheck,
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
  title: 'Roof Certification Charlotte NC | Real Estate & Lender',
  description:
    'Roof certification for Charlotte NC real estate transactions — HAAG certified inspectors, 2-5 year certification period, 24-48 hour letter turnaround. FHA/VA lender accepted.',
  keywords: [
    'roof certification charlotte nc',
    'roof certification for home sale charlotte',
    'real estate roof inspection charlotte',
    'roof condition report charlotte nc',
    'roof certification letter charlotte',
    'haag certified roof inspector charlotte',
    'fha roof certification',
    'va loan roof certification',
    'conventional loan roof certification',
    '2 year roof certification',
    '5 year roof certification',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-certification`,
  },
  openGraph: {
    title: 'Roof Certification Charlotte NC | Real Estate Inspections | Best Roofing Now',
    description: 'Professional roof certification for real estate transactions in Charlotte NC — HAAG inspectors, FHA/VA compliant, 2-5 year certification letters.',
    url: `${SITE_CONFIG.url}/roof-certification`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Roof certification in Charlotte NC' }],
  },
};

const certificationUses = [
  { icon: Home, title: 'Home Sales (Seller)', description: 'Pre-listing certification gives buyers confidence and avoids last-minute deal renegotiation.' },
  { icon: FileText, title: 'Lender/Mortgage Requirements', description: 'FHA, VA, and some conventional lenders require certification when roof age exceeds a threshold.' },
  { icon: Shield, title: 'Insurance Renewals', description: 'Carriers may require certification to bind or renew coverage on older homes.' },
  { icon: Clock, title: 'Warranty Transfers', description: 'Document roof condition for GAF Golden Pledge, CertainTeed 5-Star, or OC Platinum transfer to new owner.' },
  { icon: Search, title: 'Pre-Purchase (Buyer)', description: 'Know exactly what you&apos;re buying before making an offer — especially on roofs 15+ years old.' },
  { icon: ClipboardCheck, title: 'Estate Settlement', description: 'Document property condition for probate, divorce, or trust transfer documentation needs.' },
];

const whatWeInspect = [
  'Roof covering material condition and remaining useful life',
  'Flashing integrity at walls, chimneys, skylights, and penetrations',
  'Ventilation adequacy (NFVA ratio per NC code)',
  'Gutters, downspouts, and drainage systems',
  'Active leaks, stains, or evidence of past water intrusion',
  'Attic sheathing inspection (when accessible)',
  'Structural concerns and sag patterns',
  'Code compliance and repair-quality issues from prior work',
];

const reportIncludes = [
  'Overall roof condition rating (Excellent / Good / Fair / Poor)',
  'Estimated remaining useful life in years',
  'Photo documentation of current condition',
  'Itemized list of any deficiencies found',
  'Repair recommendations with 2026 cost estimates',
  'Formal certification letter on company letterhead',
  'Certification period (2, 3, or 5 years per inspector judgment)',
  'Buyer/seller/lender-ready format for transaction submission',
];

const certVsInspectVsWarranty = [
  { type: 'Roof Inspection', purpose: 'General condition assessment', deliverable: 'Photos + punch list', cost: 'Usually free', validity: 'Snapshot in time' },
  { type: 'Roof Certification', purpose: 'Real-estate / lender / insurance', deliverable: 'Certification letter with period', cost: '$200–$450', validity: '2–5 years stated coverage' },
  { type: 'Manufacturer Warranty', purpose: 'Defect coverage for materials/system', deliverable: 'Registered policy from manufacturer', cost: 'Included in new install', validity: '20–50+ years depending on tier' },
];

const faqs = [
  { question: 'What is a roof certification vs a roof inspection?', answer: 'A roof inspection is a general condition assessment with a punch list — we offer these for free for Charlotte-area homeowners. A roof certification is a formal letter stating the roof is free of active leaks at the time of inspection, with an estimated remaining useful life, valid for a stated certification period (typically 2, 3, or 5 years). Certifications are legally structured documents used for real estate transactions, lender requirements, and insurance binding. They cost $200–$450 because they carry professional liability for the stated period.' },
  { question: 'How much does roof certification cost in Charlotte NC?', answer: '2026 Charlotte pricing: residential roof certification $200–$450 depending on roof size, pitch, and certification period (2-year cheaper, 5-year highest). Commercial roof certification $350–$900 depending on square footage and system type (flat roof with multiple slopes costs more). Repairs required to achieve certification are quoted separately. We can usually same-day certification inspections for urgent closings at a 15–25% rush surcharge. FHA/VA lender certifications often include a roof age verification with additional documentation — no extra charge.' },
  { question: 'How long is a roof certification valid?', answer: 'Valid period depends on roof condition at time of inspection: 2-year certification for roofs in Good condition with 5–10 years remaining life, 3-year certification for roofs in Excellent condition with 10–15 years remaining life, 5-year certification for newer roofs (under 10 years old) in Excellent condition. Real estate closing certifications are typically valid through the 90-day escrow window; lender certifications tie to the stated period. The certification does NOT guarantee the roof beyond the stated term.' },
  { question: 'Is a roof certification required for my Charlotte home sale?', answer: 'Sometimes — depends on lender and roof age. FHA and VA loans typically require certification if the roof has less than 2 years remaining life. Conventional lenders have varied requirements — some require certification on roofs over 20 years old, others do not. Homeowner insurance carriers may require certification to bind policy on roofs over 15–20 years old. Even when not required, savvy Charlotte sellers obtain pre-listing certification to avoid deal-killing surprises during buyer inspection.' },
  { question: 'What happens if my roof fails certification?', answer: 'Three paths forward: (1) repair to achieve certification — we provide itemized scope and pricing; most common issues (pipe boots, flashing, single shingles) run $300–$1,500 to fix; once repaired we re-inspect and issue certification; (2) provide the condition report as-is to the buyer for negotiation — often results in price reduction or seller credit; (3) disclose and sell as-is on the MLS — appropriate when repair cost exceeds certification value. We give honest assessments — we do not "rubber stamp" certifications just to close a sale.' },
  { question: 'What is the difference between a certification and a manufacturer warranty?', answer: 'A certification is a time-limited condition statement by an independent inspector — it says "this roof is sound for N years" based on current observation. A manufacturer warranty is a defect-coverage contract between the roof material maker (GAF, CertainTeed, etc.) and the original purchaser — it covers material or system defects for the stated period (typically 20–50 years). Certifications are used for transactions; warranties are used for post-failure claims. They do not substitute for each other — you may have both.' },
  { question: 'How fast can you turn around a roof certification in Charlotte?', answer: 'Standard turnaround: inspection booked within 3–7 business days, on-site inspection 30–60 minutes, certification letter emailed within 24–48 hours of inspection. Rush turnaround for urgent real estate closings: inspection within 24 hours, letter within 4 hours of inspection — 15–25% rush surcharge applies. For active weekly-listing agents we can set up priority-dispatch standing arrangements.' },
  { question: 'Who should request a roof certification — buyer or seller?', answer: 'Both scenarios work. Seller-ordered (pre-listing): shows confidence to the market, prevents last-minute renegotiation during buyer due diligence, typically speeds the transaction. Buyer-ordered (post-contract): confirms what you&apos;re purchasing before waiving contingencies, supports negotiation on older roofs. Lender-ordered: required on some FHA/VA loans. We prepare the certification to be submission-ready for the party who ordered it, but the letter is transferable between parties during the transaction.' },
  { question: 'Do you certify commercial roofs in Charlotte for property transactions?', answer: 'Yes. Commercial property transactions — retail, medical, industrial, HOA clubhouse — frequently require roof certification for SBA 504/7(a) loans, commercial refinancing, and property acquisition due diligence. Commercial certifications include thermal imaging or infrared moisture scans for low-slope roofs, core-cut analysis when substrate condition is uncertain, and cost-segregation-compatible documentation. Commercial cert range $350–$2,500 depending on scope and sq ft. Turnaround matches residential (24–48 hours).' },
  { question: 'Are your inspectors HAAG certified, and why does that matter?', answer: 'Yes, our lead inspectors hold HAAG Campus certification (HAAG Engineering&apos;s forensic roof inspector credential — the industry standard for court-admissible roof inspection). HAAG matters because: (1) lenders and insurers increasingly ask for HAAG-certified inspector credentials specifically; (2) HAAG-produced reports are admissible as evidence in litigation; (3) HAAG protocols reduce false positives and negatives vs general-inspector walk-throughs. Most Charlotte roofing companies do NOT have HAAG credentials — ours is a meaningful credibility advantage.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Services', url: `${SITE_CONFIG.url}/services` },
  { name: 'Roof Certification', url: `${SITE_CONFIG.url}/roof-certification` },
];

export default function RoofCertificationPage() {
  const pageUrl = `${SITE_CONFIG.url}/roof-certification`;

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Roof Certification",
          description: "Professional roof certification for real estate transactions in Charlotte NC.",
          slug: "roof-certification",
        }}
      />
      <WebPageSchema
        name="Roof Certification Charlotte NC | Real Estate & Lender"
        description="Roof certification for Charlotte NC real estate transactions — HAAG certified inspectors, 2-5 year certification period, 24-48 hour letter turnaround."
        url={pageUrl}
        primaryImage={IMAGES.hero.hero3}
        breadcrumb={breadcrumbItems}
      />
      <FreeInspectionOfferSchema />
      <FeaturedSnippetListAnswerSchema
        question="What is included in a roof certification report in Charlotte NC?"
        directAnswer="Eight items included in every Best Roofing Now certification report."
        items={reportIncludes}
        pageUrl={pageUrl}
      />
      <SpeakableContentBlocks includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={pageUrl} pageName="Roof Certification Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero3} alt="Roof certification in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-semibold">HAAG Certified Inspectors</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Certification
              <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Professional certification for real estate, lenders, and insurance</p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Roof certification for Charlotte NC and Lake Norman real estate transactions — HAAG certified inspectors (industry standard for court-admissible forensic roof inspection), 2-year / 3-year / 5-year certification periods based on roof condition, 24–48 hour letter turnaround with same-day rush option for urgent closings. FHA, VA, and conventional lender accepted. Commercial property certifications for SBA 504/7(a) loans, refinancing, and acquisition due diligence available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Schedule Certification</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />HAAG Certified</span>
              <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-accent-light" />24–48 Hour Turnaround</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">When You Need Roof Certification</h2>
            <p className="text-gray text-lg">Six common situations requiring a formal roof certification letter in Charlotte.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationUses.map((use) => (
              <div key={use.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <use.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{use.title}</h3>
                <p className="text-gray text-sm">{use.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">What We Inspect</h2>
              <ul className="space-y-3">
                {whatWeInspect.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Your Certification Report Includes</h2>
              <ul className="space-y-3">
                {reportIncludes.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Certification vs Inspection vs Warranty</h2>
              <p className="text-gray text-lg">Three different documents — do not confuse them. Here&apos;s what each does.</p>
            </div>
            <div className="overflow-x-auto">
              <div className="bg-light rounded-xl overflow-hidden min-w-[720px]">
                <div className="grid grid-cols-5 bg-primary text-white font-bold">
                  <div className="p-4">Type</div>
                  <div className="p-4">Purpose</div>
                  <div className="p-4">Deliverable</div>
                  <div className="p-4">Cost</div>
                  <div className="p-4">Validity</div>
                </div>
                {certVsInspectVsWarranty.map((row, index) => (
                  <div key={row.type} className={`grid grid-cols-5 ${index % 2 === 0 ? 'bg-white' : 'bg-light'}`}>
                    <div className="p-4 font-semibold text-dark">{row.type}</div>
                    <div className="p-4 text-gray text-sm">{row.purpose}</div>
                    <div className="p-4 text-gray text-sm">{row.deliverable}</div>
                    <div className="p-4 text-primary font-medium text-sm">{row.cost}</div>
                    <div className="p-4 text-gray text-sm">{row.validity}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Our Certification Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-bold text-dark mb-2">Schedule</h3>
                <p className="text-gray text-sm">Book inspection online or by phone — standard 3–7 day lead, same-day rush available.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-bold text-dark mb-2">Inspect</h3>
                <p className="text-gray text-sm">HAAG certified inspector walks the roof, documents condition, and notes remaining life.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-bold text-dark mb-2">Document</h3>
                <p className="text-gray text-sm">Photos, itemized findings, and any repair recommendations with 2026 cost estimates.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-bold text-dark mb-2">Certify</h3>
                <p className="text-gray text-sm">Formal certification letter with 2/3/5-year period within 24–48 hours of inspection.</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-700">
                <strong className="text-primary">Related services:</strong>{' '}
                <Link href="/services/roof-inspection" className="text-primary hover:underline">Free Roof Inspection</Link>{' · '}
                <Link href="/roof-maintenance" className="text-primary hover:underline">Roof Maintenance Program</Link>{' · '}
                <Link href="/services/roof-repair" className="text-primary hover:underline">Roof Repair</Link>{' · '}
                <Link href="/services/roof-replacement" className="text-primary hover:underline">Roof Replacement</Link>{' · '}
                <Link href="/brands" className="text-primary hover:underline">Warranty Tier Detail</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Need a Roof Certification?</h2>
              <p className="text-white/90">Fast turnaround for real estate closings — same-day rush service available.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Schedule Now</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="roof-certification" count={4} title="Recent Certifications" subtitle="Roofs we&apos;ve certified throughout Charlotte." schemaPageUrl={pageUrl} />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Certification FAQs</h2>
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
            <Link href="/services/roof-inspection" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Roof Inspection</h3>
              <p className="text-gray text-sm">Free comprehensive roof inspections (not certifications).</p>
            </Link>
            <Link href="/roof-maintenance" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Roof Maintenance</h3>
              <p className="text-gray text-sm">Preventive maintenance to keep roofs certification-ready.</p>
            </Link>
            <Link href="/services/roof-repair" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Roof Repair</h3>
              <p className="text-gray text-sm">Address any issues found during certification inspection.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Get Your Roof Certified" subtitle="Professional certification with fast turnaround for real estate and lender needs." />
    </>
  );
}
