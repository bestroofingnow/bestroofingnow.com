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
  CloudRain,
  Home,
  FileText,
  Truck,
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
  title: 'Emergency Roof Tarping Charlotte NC | 24/7 Response',
  description:
    '24/7 emergency roof tarping in Charlotte NC — 2-4 hour response, heavy-duty tarps with 2x4 battens, insurance claim documentation. Loss mitigation covered by most policies.',
  keywords: [
    'emergency roof tarping charlotte nc',
    'roof tarp service charlotte',
    'emergency roof cover charlotte',
    'storm damage tarping charlotte nc',
    'temporary roof repair charlotte',
    '24/7 roof tarping service',
    'roof tarp installation',
    'active leak emergency',
    'loss mitigation tarping',
    'insurance tarping coverage',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/emergency-roof-tarping`,
  },
  openGraph: {
    title: 'Emergency Roof Tarping Charlotte NC | 24/7 Service | Best Roofing Now',
    description: '24/7 emergency roof tarping in Charlotte NC — 2-4 hour response to protect your home from further water damage.',
    url: `${SITE_CONFIG.url}/emergency-roof-tarping`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Emergency roof tarping in Charlotte NC' }],
  },
};

const tarpingServices = [
  { icon: Clock, title: '24/7 Emergency Response', description: 'Year-round dispatch, nights and weekends. Typical response 2–4 hours Mecklenburg, 3–6 hours Lake Norman and outer metro.' },
  { icon: CloudRain, title: 'Storm Damage Tarping', description: 'Hail, wind, tropical-remnant, and ice storm damage stabilization — heavy 12 mil poly or reinforced 8×10 ft tarps.' },
  { icon: Home, title: 'Residential Tarping', description: 'Protect your home and belongings while permanent repairs are scheduled. Covers typical pitched and low-slope residential roofs.' },
  { icon: Shield, title: 'Commercial Tarping', description: 'Large-scale tarping for commercial flat roofs, retail strips, HOA clubhouses, and industrial buildings.' },
  { icon: FileText, title: 'Insurance Documentation', description: 'Geo-tagged photos, damage inventory, and written scope-of-loss for your homeowner or commercial insurance claim.' },
  { icon: Truck, title: 'Same-Day Dispatch', description: 'Emergency tarping completed same-day for most calls. Multi-crew availability during major storm events.' },
];

const whenToTarp = [
  'Storm has damaged or removed shingles exposing decking',
  'Tree or debris has punctured your roof',
  'Visible holes or gaps in roofing material',
  'Active water intrusion during rain or snowmelt',
  'Waiting for insurance adjuster inspection (must mitigate to preserve claim)',
  'Roof damage discovered before scheduled repairs',
  'Fire damage has compromised roof integrity',
  'Ice storm has cracked or lifted large areas of shingle',
];

const tarpProcedureChecklist = [
  'Assess whether it is safe to walk the roof — if not, tarp from ground-level lift',
  'Photograph pre-tarp condition for insurance (geo-tagged, timestamped)',
  'Select tarp size — cover damage area plus 4 ft overlap on all sides',
  'Roll and anchor the upper edge under the shingle course above damage',
  'Install 2×4 batten frame around tarp perimeter with screws, not nails',
  'Tension tarp to shed water without ponding',
  'Seal tarp edge at upper course with peel-and-stick flashing tape',
  'Document final installation with photos and written report',
  'Provide loss-mitigation invoice and insurance-claim-ready scope of loss',
  'Schedule permanent repair within 60 days (tarp life expectancy)',
];

const faqs = [
  { question: 'How quickly can you tarp my roof in Charlotte?', answer: 'Response times by service zone: Mecklenburg County (Charlotte, Matthews, Huntersville, Cornelius, Davidson, Mint Hill, Pineville) 2–4 hours; Lake Norman and inner Cabarrus/Union counties 3–6 hours; outer service areas (Statesville, Hickory, Salisbury, Shelby, Lancaster SC) same-day or next-morning depending on call time. Our 24/7 emergency dispatch runs year-round from Charlotte and Denver NC HQs. Multi-crew deployment during major storm events (hail, hurricane remnants, ice storms) to maintain response times.' },
  { question: 'How much does emergency roof tarping cost in Charlotte NC?', answer: '2026 Charlotte market ranges: standard residential tarp (under 200 sq ft coverage) $350–$700, moderate tarp (200–500 sq ft) $600–$1,200, large tarp or multi-section install $1,000–$2,400, commercial flat-roof emergency tarp $800–$2,800 depending on membrane type. After-hours dispatch (10pm–6am) adds $200–$450. If your insurance claim is approved, this is typically covered under "loss mitigation" — often with no deductible applied to the tarp itself.' },
  { question: 'Will homeowners insurance cover emergency roof tarping?', answer: 'Yes — most HO-3 and HO-5 policies cover emergency tarping as "reasonable emergency measures" or "loss mitigation," which protects your home from further damage. Importantly: most carriers REQUIRE reasonable mitigation efforts to preserve your claim — failing to tarp an active leak can reduce or void coverage for resulting interior water damage. We provide invoices and photos formatted for carrier submission. In many cases the tarp service is paid without applying your deductible — check your declarations page.' },
  { question: 'How long does a properly installed roof tarp last?', answer: 'Heavy-duty 12 mil poly tarps secured with 2×4 battens provide protection for 45–90 days in Charlotte weather. Expected failures: UV degradation of the tarp material (60–90 day typical), wind-whip tear at an anchor point (first storm event), water ponding if tension decreases over time. We design for a 60-day window — schedule permanent repair within that period. Plan for earlier replacement if another major storm hits before repair.' },
  { question: 'Do I actually need tarping or can I wait for permanent repairs?', answer: 'If there is any meaningful chance of rain, snowmelt, or another storm before permanent repair: tarp immediately. Water damage from a delayed tarp commonly costs $3,000–$25,000 in drywall, insulation, flooring, and mold remediation — vastly more than the tarp service itself. Insurance carriers can also reduce coverage if they determine you failed to mitigate. The only scenario where waiting is reasonable: dry forecast 7+ days out AND permanent repair already scheduled within that window.' },
  { question: 'What should I tell you on the emergency call?', answer: 'Your address (needed first for dispatch routing), a brief description of what happened (tree fall, hail storm, wind event, sudden leak), any known roof specifics (pitch, material, approximate age), whether there is active water intrusion right now, and your homeowner insurance carrier if you plan to file a claim. If it is actively raining and you see water inside, that is top priority — tell us immediately so we can prioritize dispatch. We can assess damage details on arrival.' },
  { question: 'Can I install a tarp myself to save money?', answer: 'We strongly recommend against DIY roof tarping for three reasons: (1) walking a storm-damaged roof is dangerous — compromised decking, wet shingles, and wind-lifted sections create fall hazards; (2) improper tarp installation (nail holes through shingles, no battens, no overlap) often causes MORE leaks than the original damage and can void your insurance claim; (3) insurance carriers typically require professional loss-mitigation documentation. Our $350–$700 tarp service pays back many times over vs a $5,000 drywall remediation from bad DIY work.' },
  { question: 'What damage do you tarp vs what you do not?', answer: 'We tarp: active leaks, storm-punctured decking, fallen-tree damage, wind-lifted large sections (5+ shingles), hail-punctured flashings, and ice-damaged sections. We do NOT tarp: cosmetic damage without active water intrusion (no emergency benefit), chimney-specific leaks (better to target with flashing repair), gutter overflow (tarp won&apos;t help), or interior ceiling water stains without roof damage identified. For non-emergency calls we schedule a free inspection and estimate for targeted repair.' },
  { question: 'Can you do a temporary repair instead of just a tarp?', answer: 'Sometimes, depending on conditions. Temporary repairs we offer: pipe-boot replacement, single-shingle patch, chimney counter-flashing re-seal, missing shingle replacement (up to 10 pieces), flashing-tape over small punctures. These add $200–$700 vs tarp-only but skip the tarp entirely and often last until full permanent repair without a follow-up visit. We recommend during the emergency call based on damage description — not all situations support temporary repair.' },
  { question: 'When should I call 911 instead of an emergency roofer?', answer: 'Call 911 or the fire department FIRST if: active structural collapse, electrical wiring exposed through the roof, fire damage with potential active embers, downed power lines on the roof or yard, or injured persons. Call us once the scene is safe. For water damage without life-safety risk — active leaks, tree damage without structural collapse, hail or wind damage — our 24/7 emergency line is the right first call.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Emergency Services', url: `${SITE_CONFIG.url}/emergency` },
  { name: 'Roof Tarping', url: `${SITE_CONFIG.url}/emergency-roof-tarping` },
];

export default function EmergencyRoofTarpingPage() {
  const pageUrl = `${SITE_CONFIG.url}/emergency-roof-tarping`;

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Emergency Roof Tarping",
          description: "24/7 emergency roof tarping services in Charlotte NC to protect your home from further damage.",
          slug: "emergency-roof-tarping",
        }}
      />
      <WebPageSchema
        name="Emergency Roof Tarping Charlotte NC | 24/7 Response"
        description="24/7 emergency roof tarping in Charlotte NC — 2-4 hour response, heavy-duty tarps with 2x4 battens, insurance claim documentation. Loss mitigation typically covered."
        url={pageUrl}
        primaryImage={IMAGES.hero.hero3}
        breadcrumb={breadcrumbItems}
      />
      <FreeInspectionOfferSchema />
      <FeaturedSnippetListAnswerSchema
        question="When do I need emergency roof tarping in Charlotte NC?"
        directAnswer="Eight situations where emergency roof tarping prevents major interior damage."
        items={whenToTarp}
        pageUrl={pageUrl}
      />
      <SpeakableContentBlocks includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={pageUrl} pageName="Emergency Roof Tarping Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-red-700 via-red-600 to-red-800 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero3} alt="Emergency roof tarping in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-semibold">24/7 EMERGENCY SERVICE</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Emergency Roof Tarping
              <br className="hidden md:block" />
              <span className="text-yellow-300">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Immediate protection when your roof is compromised</p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              24/7 emergency roof tarping across Charlotte NC, Lake Norman, and the Mecklenburg/Cabarrus/Union/Gaston/Iredell/Lincoln/York SC service area — typical 2–4 hour response in Mecklenburg, same-day across outer zones. Heavy-duty 12 mil tarps secured with 2×4 battens, not nail-through-shingle methods. Loss-mitigation documentation formatted for your insurance claim. Most homeowner policies cover emergency tarping under loss mitigation provisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="primary" size="lg" className="bg-white !text-red-600 hover:bg-white/90" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call Now: {SITE_CONFIG.phone}</Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Request Tarping</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-yellow-300" />2–4 Hour Response</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-yellow-300" />Insurance Accepted</span>
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Emergency Tarping Services</h2>
            <p className="text-gray text-lg">Fast, professional roof protection when you need it most.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tarpingServices.map((service) => (
              <div key={service.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-red-600" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">When Do You Need Roof Tarping?</h2>
              <p className="text-gray text-lg mb-6">Don&apos;t wait for rain to cause interior damage. Tarp your roof immediately if:</p>
              <ul className="space-y-3">
                {whenToTarp.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <SEOImage src={IMAGES.realProjects.drone2} alt="Storm damaged roof needing tarping" width={600} height={450} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-600 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Roof Emergency? Call Now!</h2>
              <p className="text-white/90">24/7 emergency response — we&apos;ll protect your home today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-red-600 hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">10-Step Professional Tarping Procedure</h2>
              <p className="text-gray text-lg">What we do on every emergency call — insurance-grade documentation included.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {tarpProcedureChecklist.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-light rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Our Emergency Tarping Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-bold text-dark mb-2">You Call</h3>
                <p className="text-gray text-sm">Call our 24/7 emergency line and describe the damage.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-bold text-dark mb-2">We Respond</h3>
                <p className="text-gray text-sm">Crew arrives within 2–4 hours with 12 mil tarps and battens.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-bold text-dark mb-2">We Tarp</h3>
                <p className="text-gray text-sm">Heavy-duty tarp installed with 2×4 batten frame — no nail-through-shingle shortcuts.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-bold text-dark mb-2">Documentation</h3>
                <p className="text-gray text-sm">Photos, scope of loss, and loss-mitigation invoice provided for insurance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="emergency-roof-tarping" count={4} title="Emergency Tarping Projects" subtitle="Recent emergency roof tarping jobs." schemaPageUrl={pageUrl} />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Emergency Tarping FAQs</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Related Emergency Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/emergency" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Emergency Roofing</h3>
              <p className="text-gray text-sm">Complete emergency roofing services for urgent situations.</p>
            </Link>
            <Link href="/services/storm-damage-roof-siding" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Storm Damage Repair</h3>
              <p className="text-gray text-sm">Full storm damage repair and insurance claim assistance.</p>
            </Link>
            <Link href="/hail-damage-roof-repair" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Hail Damage Repair</h3>
              <p className="text-gray text-sm">Specialized hail damage assessment and repair.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Roof Damaged? We're Here 24/7" subtitle="Call now for immediate emergency roof tarping service." />
    </>
  );
}
