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
  CloudHail,
  FileText,
  Clock,
  Camera,
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
  title: 'Hail Damage Roof Repair Charlotte NC',
  description:
    'Hail damage roof repair and insurance claim assistance in Charlotte NC — Xactimate estimates, adjuster meetings, RCV/ACV review, Class 4 impact-resistant replacement options.',
  keywords: [
    'hail damage roof repair charlotte nc',
    'hail damage roofing charlotte',
    'roof hail damage inspection charlotte',
    'hail damage insurance claim charlotte nc',
    'storm damage roof repair charlotte',
    'hail damaged shingles charlotte',
    'class 4 impact resistant shingles',
    'xactimate hail estimate',
    'rcv acv insurance roof',
    '12 month nc claim window',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/hail-damage-roof-repair`,
  },
  openGraph: {
    title: 'Hail Damage Roof Repair Charlotte NC | Insurance Claims | Best Roofing Now',
    description: 'Expert hail damage roof repair and insurance claim assistance in Charlotte NC — free inspections, Xactimate estimates, and Class 4 upgrade options.',
    url: `${SITE_CONFIG.url}/hail-damage-roof-repair`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Hail damage roof repair in Charlotte NC' }],
  },
};

const hailServices = [
  { icon: Camera, title: 'Free Hail Inspection', description: 'Walk-the-roof inspection with geo-tagged photos, hail-size documentation, and test-square damage density counts.' },
  { icon: FileText, title: 'Insurance Claim Support', description: 'Xactimate-compatible estimate, RCV/ACV policy review, adjuster meeting on-site, supplemental filing for missed items.' },
  { icon: Shield, title: 'Full Roof Replacement', description: 'When insurance totals the roof, we handle tear-off, new system install, and Class 4 upgrade documentation.' },
  { icon: CloudHail, title: 'Targeted Shingle Repair', description: 'Replace only damaged shingles when damage is limited and insurance does not total the roof.' },
  { icon: Clock, title: 'Fast Turnaround', description: 'Typical 1–3 weeks from claim approval to start date during peak hail season.' },
  { icon: Award, title: 'Class 4 Impact Upgrades', description: 'UL 2218 Class 4 shingles for 10–30% NC insurance premium discounts on future policies.' },
];

const hailDamageSigns = [
  'Dents or bruises on shingles (soft dark spots, often invisible from ground)',
  'Missing granules exposing black asphalt mat',
  'Cracked or split shingles',
  'Dents on metal vents, flashing, or gutters',
  'Damaged or dented downspouts',
  'Dings on AC unit fins or outdoor furniture',
  'Damage to car hoods, mailboxes, or exterior light fixtures',
  'Soft spots when walking on roof (bruised mat under granules)',
];

const inspectionChecklist = [
  'Document hail event date and NOAA-confirmed hail size for the property address',
  'Perform 10 ft × 10 ft test-square count — adjusters look for 8+ hits per square',
  'Photograph each damage type with scale reference (chalk circle + measurement)',
  'Inspect soft metals (downspouts, gutters, vents) for dent pattern confirming hail direction',
  'Check skylight glazing, plastic vent caps, and chimney caps for impact marks',
  'Document collateral damage — AC fins, fence caps, mailboxes, outdoor AC disconnect',
  'Verify no mechanical damage from ladder or foot traffic that could be disputed',
  'Pull aerial imagery (Google Earth, pre-storm baseline) for comparison',
  'Note shingle age and remaining life to support RCV vs ACV policy valuation',
  'Provide written Xactimate-formatted estimate for insurance submission',
];

const insuranceProcess = [
  { step: 1, title: 'Free Inspection', description: 'Walk-roof inspection with test-square counts and geo-tagged photos.' },
  { step: 2, title: 'File Claim', description: 'We prep documentation; you initiate the claim with your carrier.' },
  { step: 3, title: 'Meet Adjuster', description: 'We attend the adjuster inspection on-site to defend scope.' },
  { step: 4, title: 'Approval & Repair', description: 'Once approved, we complete repairs using manufacturer-approved materials.' },
];

const faqs = [
  { question: 'How do I know if my roof has hail damage in Charlotte?', answer: 'Hail damage is often invisible from the ground. Look for dents on soft metals (gutters, downspouts, vents, AC unit fins, mailboxes) — these are confirmation indicators even when the roof itself looks fine. Hail 1" or larger typically causes functional shingle damage; 1.5"+ causes significant damage; 2"+ causes severe damage. We offer free walk-the-roof inspections with test-square counts that adjusters use to approve claims. Peak Charlotte hail season is May–June with 3–5 hail days per year for Mecklenburg County per NOAA.' },
  { question: 'Will my homeowners insurance cover hail damage in Charlotte NC?', answer: 'Almost always yes. Most HO-3 and HO-5 policies cover sudden hail damage under "Dwelling" coverage. Coverage structure: your deductible applies, then the insurer pays repair or replacement cost. Key distinctions: (1) RCV (Replacement Cost Value) policies pay full replacement — ideal; (2) ACV (Actual Cash Value) policies pay depreciated value — may leave out-of-pocket gap for roofs 10+ years old; (3) some NC carriers cap roof coverage on 20+ year old roofs. We review your declarations page before recommending whether to file.' },
  { question: 'How long do I have to file a hail damage claim in NC?', answer: 'Most NC policies allow 12 months from the hail event date — some require reporting within 30–60 days. The claim window is a contract term, not state law, so check your specific policy. Practical guidance: file within 30 days of the event when possible. Delayed claims get pushback from adjusters who argue the damage is "wear and tear" rather than storm-related. Document the hail event date (NOAA, local news reports, photos of hail on your property) to support the claim regardless of filing timeline.' },
  { question: 'How much does hail damage roof repair cost in Charlotte?', answer: '2026 Charlotte pricing: targeted shingle repair (10–50 shingles, minor damage) $500–$2,500, partial slope replacement $2,500–$7,500, full roof replacement for totaled claims $12,000–$28,000 depending on home size and material tier. When your claim is approved, your out-of-pocket cost is typically just your deductible — usually $1,000–$2,500 for most Charlotte homeowners (waterfront Lake Norman policies can have higher percentage-based wind/hail deductibles). Class 4 impact upgrade adds $900–$2,700 out of pocket but pays back via 10–30% insurance premium discount.' },
  { question: 'Do I have to pay anything out of pocket for hail repairs?', answer: 'You pay your policy deductible. Everything beyond that is covered up to the insurer&apos;s approved scope (subject to depreciation for ACV policies). NEVER work with a contractor who offers to "eat," "cover," "waive," or "include" your deductible in the price — that is insurance fraud under NC law (§58-24-10), voids your claim, and exposes you to criminal liability. Legitimate contractors never hide the deductible. If you can&apos;t afford your deductible, ask about Enhancify financing.' },
  { question: 'Can I choose my own roofing contractor, or do I have to use my insurance company&apos;s?', answer: 'You have the legal right under NC law to choose any licensed contractor — insurers cannot require you to use a "preferred vendor." Preferred vendor programs often prioritize the insurer&apos;s cost control over your roof quality. Choose a local, reputable, manufacturer-certified contractor (like GAF Master Elite, CertainTeed SELECT) with verifiable Charlotte references and a permanent local address. Avoid out-of-state storm chasers that appear after major hail events with no local history.' },
  { question: 'What if my insurance denies my hail damage claim?', answer: 'Three options: (1) supplemental claim filing — adjusters routinely miss collateral damage (downspouts, AC, detached structures) that can be added to the approved scope; (2) re-inspection request with additional documentation from our team or an independent engineering firm; (3) appraisal clause invocation — most NC policies include a neutral-appraiser dispute resolution mechanism. We have handled all three across Charlotte claims and work with policy-holders&apos; attorneys when litigation becomes necessary.' },
  { question: 'How do I avoid hail damage storm chasers in Charlotte NC?', answer: 'Red flags: (1) unsolicited door-knocking immediately after a hail event; (2) out-of-state license plates or temporary NC addresses; (3) pressure to sign a contract on the first visit; (4) offers to "handle" your deductible (illegal in NC); (5) no manufacturer certifications; (6) no verifiable Charlotte references older than 12 months. Protective actions: verify NC contractor license, check BBB rating, confirm liability insurance with the carrier directly (not the certificate copy the contractor provides), and take 48 hours before signing anything.' },
  { question: 'Should I upgrade to Class 4 impact-resistant shingles during hail damage replacement?', answer: 'For most Charlotte and Lake Norman homeowners: yes. Class 4 shingles (GAF Armor Shield II, CertainTeed NorthGate, Malarkey Vista, Atlas StormMaster) cost $30–$90 more per square ($900–$2,700 for a typical home) above what insurance typically pays for standard architectural. Benefits: (1) withstand 2" hail in UL 2218 testing, (2) unlock 10–30% homeowner insurance premium discounts with most NC carriers, (3) often offered at reduced cost during a claim-triggered replacement. Typical payback period is 5–7 years.' },
  { question: 'What is the difference between repair and replacement after hail damage?', answer: 'Insurance totals a roof when damage density exceeds typically 6–8 hail hits per 10 ft × 10 ft test square on multiple slopes — threshold varies by carrier. Below that threshold, targeted repair is authorized. Above it, full replacement is authorized. For Charlotte homes, common triggers: (1) 1.5"+ hail with visible bruising on multiple slopes; (2) age of roof combined with damage density (older roofs are usually totaled sooner); (3) secondary damage to flashings, skylights, and penetrations. We document all damage types to support the highest-justified scope.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Storm Damage', url: `${SITE_CONFIG.url}/services/storm-damage-roof-siding` },
  { name: 'Hail Damage Repair', url: `${SITE_CONFIG.url}/hail-damage-roof-repair` },
];

export default function HailDamageRoofRepairPage() {
  const pageUrl = `${SITE_CONFIG.url}/hail-damage-roof-repair`;

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Hail Damage Roof Repair",
          description: "Expert hail damage roof repair and insurance claim assistance in Charlotte NC.",
          slug: "hail-damage-roof-repair",
        }}
      />
      <WebPageSchema
        name="Hail Damage Roof Repair Charlotte NC | Insurance Claim Experts"
        description="Hail damage roof repair and insurance claim assistance in Charlotte NC — Xactimate estimates, RCV/ACV review, Class 4 impact-resistant replacement options, adjuster meetings."
        url={pageUrl}
        primaryImage={IMAGES.hero.hero3}
        breadcrumb={breadcrumbItems}
      />
      <FreeInspectionOfferSchema />
      <FeaturedSnippetListAnswerSchema
        question="What are the signs of hail damage on a Charlotte NC roof?"
        directAnswer="Eight common warning signs indicate hail damage on a Charlotte roof."
        items={hailDamageSigns}
        pageUrl={pageUrl}
      />
      <SpeakableContentBlocks includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={pageUrl} pageName="Hail Damage Roof Repair Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero3} alt="Hail damage roof repair in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/80 rounded-full px-4 py-2 mb-4">
              <CloudHail className="w-4 h-4" />
              <span className="text-sm font-semibold">Free Hail Damage Inspections</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Hail Damage Roof Repair
              <br className="hidden md:block" />
              <span className="text-blue-300">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Insurance claim experts + Xactimate estimates</p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Charlotte sees 3–5 hail days per year per NOAA with peak season May–June. Best Roofing Now provides free walk-the-roof hail inspections with test-square counts, geo-tagged photo documentation, and Xactimate-compatible insurance estimates. We handle RCV vs ACV policy review, adjuster meetings, supplemental claim filing for missed collateral damage, and Class 4 impact-resistant replacement upgrades that unlock 10–30% premium discounts with NC carriers (State Farm, Allstate, USAA, Farm Bureau, Erie, Nationwide).
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Hail Inspection</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-800" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-blue-300" />Insurance Claim Experts</span>
              <span className="flex items-center gap-2"><Award className="w-5 h-5 text-blue-300" />BBB A+ Rated</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Hail Damage Services</h2>
            <p className="text-gray text-lg">Complete hail damage repair and insurance claim assistance.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hailServices.map((service) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Signs of Hail Damage</h2>
              <p className="text-gray text-lg mb-6">Hail damage isn&apos;t always obvious from the ground. Look for these signs:</p>
              <ul className="space-y-3">
                {hailDamageSigns.map((sign, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <SEOImage src={IMAGES.realProjects.drone2} alt="Hail damage inspection" width={600} height={450} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">10-Point Hail Damage Inspection</h2>
              <p className="text-gray text-lg">What we document on every Charlotte hail claim — insurance-grade scope-of-loss.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Our Insurance Claim Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {insuranceProcess.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">{item.step}</div>
                  <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-gray text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-700">
                <strong className="text-primary">Related services:</strong>{' '}
                <Link href="/services/storm-damage-roof-siding" className="text-primary hover:underline">Storm Damage Repair</Link>{' · '}
                <Link href="/services/insurance-claims" className="text-primary hover:underline">Insurance Claim Support</Link>{' · '}
                <Link href="/emergency-roof-tarping" className="text-primary hover:underline">Emergency Tarping</Link>{' · '}
                <Link href="/architectural-shingles" className="text-primary hover:underline">Architectural Shingles</Link>{' · '}
                <Link href="/services/roof-replacement" className="text-primary hover:underline">Roof Replacement</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-800 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Recent Hail Storm?</h2>
              <p className="text-white/90">Get a free inspection with test-square counts before hidden damage becomes a major problem.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-800" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Inspection</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-slate-800 hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="hail-damage-roof-repair" count={4} title="Hail Damage Repairs" subtitle="Browse completed hail damage repairs." schemaPageUrl={pageUrl} />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Hail Damage FAQs</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Related Storm Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/storm-damage-roof-siding" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Storm Damage Repair</h3>
              <p className="text-gray text-sm">Complete storm damage restoration services.</p>
            </Link>
            <Link href="/emergency-roof-tarping" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Emergency Tarping</h3>
              <p className="text-gray text-sm">24/7 emergency roof protection.</p>
            </Link>
            <Link href="/emergency" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Emergency Roofing</h3>
              <p className="text-gray text-sm">Full emergency roofing services.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Don't Wait on Hail Damage" subtitle="Get a free inspection and insurance claim assistance today." />
    </>
  );
}
