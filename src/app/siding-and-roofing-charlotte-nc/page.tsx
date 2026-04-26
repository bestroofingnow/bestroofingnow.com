import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
import {
  CheckCircle,
  Phone,
  Calendar,
  Shield,
  Award,
  HelpCircle,
  ArrowRight,
  Home,
  Layers,
  DollarSign,
  Wrench,
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
  title: 'Siding and Roofing Charlotte NC',
  description:
    'Bundled siding and roofing replacement in Charlotte NC. Save 20-35% versus separate scopes. James Hardie HardiePlank Preferred Contractor + GAF Master Elite roofer with 30-50 yr warranties on shingles and 50 yr on Hardie.',
  keywords: [
    'siding and roofing Charlotte NC',
    'roof and siding replacement Charlotte',
    'James Hardie installer Charlotte NC',
    'HardiePlank siding Charlotte',
    'roof siding bundle Charlotte NC',
    'exterior renovation Charlotte',
    'whole house exterior Charlotte NC',
    'siding contractor Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/siding-and-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Siding and Roofing Charlotte NC | Best Roofing Now',
    description:
      'Bundled siding and roofing replacement in Charlotte NC. Save 20-35% vs separate scopes. James Hardie + GAF Master Elite installer.',
    url: `${SITE_CONFIG.url}/siding-and-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Siding and roofing Charlotte NC',
      },
    ],
  },
};

const faqs = [
  {
    question: 'How much can I save by bundling siding and roofing in Charlotte NC?',
    answer:
      "Bundling siding and roofing in Charlotte typically saves 20-35% versus separate scopes through 6 efficiency gains: (1) one set of permits and CDOT/HOA submissions instead of two; (2) one scaffold and tarp setup; (3) integrated J-channel and drip-edge install — siding-to-roof transitions sealed correctly only when done together; (4) one Xactimate insurance estimate covers both for a single deductible after storms; (5) consolidated material delivery and dumpster rental; (6) one warranty packet covering both. Typical Charlotte 2,500 sq ft home: separate roof + siding $35,000-$60,000; bundled $28,000-$48,000.",
  },
  {
    question: 'What siding materials do you install with roofing in Charlotte?',
    answer:
      'We install the full range alongside roofing: vinyl siding ($5-$8/sq ft, 30-40 yr lifespan, low-maintenance, most popular new install); James Hardie HardiePlank fiber cement ($8-$13/sq ft, 50+ yr warranty, fire-resistant, holds paint 10-15 yr — Best Roofing Now is a Hardie Preferred Contractor with manufacturer-trained installers); LP SmartSide engineered wood ($7-$11/sq ft, 50 yr limited, real wood look); cedar shake siding ($9-$15/sq ft, heritage homes); and metal siding ($11-$18/sq ft, modern low-maintenance).',
  },
  {
    question: 'When should I bundle vs do siding and roof separately?',
    answer:
      'Bundle when: both surfaces are within 5 years of similar age/condition; you have storm damage to both; you want exterior color refresh; or financing makes the combined project more affordable. Do separately when: only one surface needs work and the other is under 10 years old; budget constraints force phasing; insurance only covers one surface (rare — most storms damage both); or HOA approval timing differs significantly between materials.',
  },
  {
    question: 'How long does a combined siding and roofing project take?',
    answer:
      "Typical Charlotte 2,500 sq ft home with vinyl siding + architectural shingles: 4-7 days total when bundled (vs 7-10 days when done separately). James Hardie fiber cement adds 2-3 days vs vinyl due to heavier material and more complex install. Cedar shake siding can add 5-7 days. We typically run two specialized crews simultaneously — roofing crew on top, siding crew on the walls — to compress total timeline.",
  },
  {
    question: 'Do you handle insurance claims for combined storm damage?',
    answer:
      'Yes. Combined storm damage to roof and siding is one of the most common Charlotte insurance scenarios — wind and hail almost always damage the wind-facing slope plus adjacent siding panels together. We file ONE Xactimate-format insurance claim covering both surfaces, work with your single deductible (saves $1,500-$3,000 vs two separate claims), meet the adjuster on-site for one combined inspection, and submit supplements for missed damage. Carriers handled: State Farm, Allstate, USAA, Liberty Mutual, Travelers, Nationwide, Erie, Farm Bureau.',
  },
  {
    question: 'What financing options are available for combined projects?',
    answer:
      "We work with PowerPay financing for residential exterior projects: 0% APR for 12-24 months on qualified credit (no-interest if paid in full within term), or extended 60-120 month terms with competitive APR. Typical combined siding + roof $28,000-$48,000 project: $300-$650/month on 84-month term. Plus we accept all major credit cards, ACH bank transfer, and check. No deposit required for projects under $30,000 — payment due upon completion.",
  },
  {
    question: 'Do siding and roof colors need to coordinate for HOA approval?',
    answer:
      'Yes — and this is where bundled projects shine. We bring physical samples of both shingle AND siding colors to the consultation, allowing you to see proposed combinations together (not just imagine them). For HOA-restricted communities (Ballantyne, Providence, Quail Hollow, Foxcroft, Carmel Country Club, etc.), we manage one combined ARB packet with both color samples, manufacturer specs, and installer credentials — single review cycle, single approval. 99%+ first-pass approval rate.',
  },
  {
    question: 'What other exterior services pair well with siding and roofing bundles?',
    answer:
      'Most cost-effective bundle add-ons during a siding/roof project: (1) gutter and downspout replacement (additional 10-15% savings vs standalone); (2) fascia and soffit work (often needs done anyway when siding comes off — 30-40% savings vs separate); (3) exterior painting (only if vinyl/wood siding); (4) chimney flashing and chase wrap; (5) window flashing and trim. Adding any 2 of these typically brings total project savings to 25-40% vs sequential scopes.',
  },
];

export default function SidingAndRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Siding and Roofing Charlotte NC', url: `${SITE_CONFIG.url}/siding-and-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/siding-and-roofing-charlotte-nc`}
        pageName="Siding and Roofing Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <WebPageSchema
        name="Siding and Roofing Charlotte NC | Bundle Specialists | Best Roofing Now"
        url={`${SITE_CONFIG.url}/siding-and-roofing-charlotte-nc`}
        description="Bundled siding and roofing replacement in Charlotte NC. Save 20-35% vs separate scopes. James Hardie HardiePlank Preferred Contractor + GAF Master Elite roofer with combined Xactimate insurance claim handling and one warranty packet."
        primaryImage={IMAGES.hero.hero1}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Siding and Roofing Charlotte NC', url: `${SITE_CONFIG.url}/siding-and-roofing-charlotte-nc` },
        ]}
      />
      <FeaturedSnippetListAnswerSchema
        question="Why bundle siding and roofing replacement in Charlotte NC?"
        directAnswer="Bundling siding and roofing in Charlotte NC saves 20-35% versus separate scopes through 6 efficiency gains: (1) one permit + HOA submission instead of two; (2) one scaffold and tarp setup; (3) integrated J-channel + drip-edge install — siding-to-roof transitions sealed correctly only when done together; (4) one Xactimate insurance claim with single deductible (saves $1,500-$3,000 vs two claims); (5) consolidated material delivery and dumpster rental; (6) one warranty packet covering both. Typical Charlotte 2,500 sq ft home: separate $35K-$60K, bundled $28K-$48K. Best Roofing Now is a James Hardie Preferred Contractor with manufacturer-trained installers AND a GAF Master Elite (top 2%) / CertainTeed SELECT ShingleMaster / OC Platinum Preferred roofer — single contractor across both trades."
        items={[
          'One permit + HOA submission cycle (saves 2-4 weeks of admin)',
          'One scaffold/tarp setup (saves $1,500-$3,500 in re-rigging)',
          'Integrated J-channel + drip-edge install — sealed correctly only together',
          'One Xactimate insurance claim with single deductible (saves $1,500-$3,000)',
          'Consolidated material delivery and dumpster rental',
          'One combined warranty packet covering both surfaces',
          'James Hardie Preferred Contractor + GAF Master Elite — single contractor both trades',
          'Typical 2,500 sq ft Charlotte home — bundled $28K-$48K vs separate $35K-$60K',
        ]}
        pageUrl={`${SITE_CONFIG.url}/siding-and-roofing-charlotte-nc`}
      />
      <FreeInspectionOfferSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero1} alt="Siding and roofing Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Save 20-35% Bundled | Hardie + GAF Certified</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Siding and Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Bundle both surfaces. Save 20-35%. One contractor, one warranty.
            </p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now bundles siding and roofing replacement across Charlotte and the
              surrounding communities of Ballantyne, SouthPark, Dilworth, Plaza Midwood, Myers
              Park, NoDa, Eastover, Foxcroft, Cotswold, Beverly Woods, Steele Creek, University
              City, and the Lake Norman towns of Huntersville, Cornelius, Davidson, and Mooresville.
              We install vinyl, James Hardie HardiePlank fiber cement (Preferred Contractor with
              manufacturer-trained installers), LP SmartSide engineered wood, cedar shake, and
              metal siding alongside the full residential shingle range. One combined Xactimate
              insurance claim, single deductible, single warranty packet, and 20-35% savings vs
              separate scopes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>
                Get Combined Estimate
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Bundle Siding + Roofing?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: DollarSign, title: '20-35% Savings', desc: '$28K-$48K bundled vs $35K-$60K separate for typical 2,500 sq ft Charlotte home' },
              { icon: Layers, title: 'Sealed Correctly', desc: 'Integrated J-channel + drip-edge install — siding-to-roof transitions sealed right only when done together' },
              { icon: Wrench, title: 'One Insurance Claim', desc: 'Combined Xactimate claim with single deductible saves $1,500-$3,000 vs two claims' },
              { icon: Home, title: 'One Warranty Packet', desc: 'GAF Master Elite + James Hardie Preferred Contractor — both trades, both warranties, single contractor' },
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

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="siding-and-roofing-charlotte-nc" />

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Siding + Roofing Bundle Questions</h2>
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

      <CityGeoSection city="Charlotte" state="NC" citySlug="charlotte-nc" service="siding-and-roofing" />

      <CTASection title="Bundle Siding + Roofing for 20-35% Savings" subtitle="One contractor, one Xactimate claim, one warranty packet — the smartest path when both surfaces need replacement." />
    </>
  );
}
