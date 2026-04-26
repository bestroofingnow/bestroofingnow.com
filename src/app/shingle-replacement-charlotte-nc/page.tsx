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
  Wrench,
  Layers,
  DollarSign,
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
  title: 'Shingle Replacement Charlotte NC',
  description:
    'Shingle replacement in Charlotte NC — partial slope, full slope, or complete roof. GAF Master Elite, CertainTeed SELECT, OC Platinum installer with 30-50 year non-prorated warranties. Same-day to 2-day completion typical.',
  keywords: [
    'shingle replacement Charlotte NC',
    'roof shingle replacement Charlotte',
    'partial roof replacement Charlotte NC',
    'full roof shingle replacement',
    'shingle reroof Charlotte',
    'asphalt shingle replacement Charlotte',
    'replace roof shingles Charlotte NC',
    'shingle replacement cost Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/shingle-replacement-charlotte-nc`,
  },
  openGraph: {
    title: 'Shingle Replacement Charlotte NC | Best Roofing Now',
    description:
      'Shingle replacement in Charlotte NC. Partial slope to full roof. GAF Master Elite, CertainTeed SELECT, OC Platinum installer.',
    url: `${SITE_CONFIG.url}/shingle-replacement-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Shingle replacement Charlotte NC',
      },
    ],
  },
};

const faqs = [
  {
    question: 'What does shingle replacement cost in Charlotte NC?',
    answer:
      "Shingle replacement in Charlotte NC ranges $250 (single shingle spot repair) to $26,000+ (designer luxury full-roof) depending on scope: 1-3 shingles + sealed nail line $250-$450; 4-10 shingles + ridge cap $450-$950; 10-30 shingles slope-section $950-$2,400; full slope replacement $3,500-$7,500; full roof replacement $11,000-$22,000 architectural / $19,000-$26,000 designer for typical 30-square Charlotte home. Insurance often covers most after wind/hail events minus your deductible.",
  },
  {
    question: 'When should I replace shingles vs do a full roof?',
    answer:
      "Partial shingle replacement is the right call when: damage is isolated to one slope or area (< 30% of total roof); the rest of the roof is under 15 years old and in good condition; the matching shingle is still in production; and there's no widespread granule loss or decking issues. Full roof replacement is better when: damage is widespread across multiple slopes; the existing roof is 18-25+ years old; there's chronic leaking from multiple causes; or NC code requires a tear-off (already 2 layers — NC max).",
  },
  {
    question: 'How long does shingle replacement take in Charlotte?',
    answer:
      "Single shingle to slope-section replacements typically complete same-day or next-day (1-4 hours on-site). Full slope replacement: 1 day. Full roof replacement: 1-2 days for a typical 30-square Charlotte home (full tear-off morning of day 1, install through day 2, magnetic nail sweep cleanup). Larger homes (40-60 squares): 2-3 days. Weather can extend timelines — we never install in active rain or below 40°F surface temperature.",
  },
  {
    question: 'How do you match the existing shingle color?',
    answer:
      "We bring physical shingle samples to the inspection (not just color photos) and match across the major manufacturer libraries: GAF Timberline HDZ, CertainTeed Landmark, Owens Corning TruDefinition Duration, and Tamko Heritage. For 5-15 year old roofs, slight color drift from sun exposure is normal — we typically recommend replacing a full slope rather than spotting in mismatched shingles. For complete color refresh, full reroofs eliminate the matching question entirely.",
  },
  {
    question: 'What shingle brands do you install in Charlotte NC?',
    answer:
      "We install all top-tier residential shingles: GAF (Master Elite installer top 2% nationwide — unlocks 50-yr Golden Pledge), CertainTeed (SELECT ShingleMaster top tier — unlocks 50-yr 5-Star Plus), Owens Corning (Platinum Preferred), Tamko Heritage, Atlas, Malarkey, IKO. Plus designer/luxury lines: GAF Grand Sequoia, GAF Camelot II (historic profile), CertainTeed Presidential Solaris (cool-roof), CertainTeed Carriage House, OC Berkshire, OC Woodmoor.",
  },
  {
    question: 'Do you offer Class 4 impact-resistant shingle replacement?',
    answer:
      "Yes — Class 4 impact-resistant shingles ($7-$11/sq ft installed) qualify for the NC IBHS Fortified insurance discount, typically 10-30% off your homeowner's policy with most NC carriers (State Farm, Allstate, USAA, Liberty Mutual, Travelers, Nationwide, Erie, Farm Bureau). Class 4 shingles also have 6-nail patterns and 150 MPH wind ratings for hail-belt protection. Payback typically 5-7 years through insurance savings alone.",
  },
  {
    question: 'What underlayment and accessories do you use?',
    answer:
      "Our standard reroof spec includes: synthetic underlayment (GAF Tiger Paw, Owens Corning ProArmor, or Tyvek/Titanium PSU30) instead of #15 felt; ice-and-water shield 3-6 ft from eaves and at all valleys/penetrations (Grace Ice & Water or GAF WeatherWatch); proper drip edge with hemmed return; starter shingle strip; sealed 4-nail pattern (6-nail for high-wind); ridge vent for NC IRC §R806 ventilation balance; and matched-color ridge cap.",
  },
  {
    question: "What's the difference between a reroof and full tear-off?",
    answer:
      "A 'reroof' (or overlay) installs new shingles directly over the existing layer — NC code allows up to 2 total layers maximum. A full tear-off removes all existing layers down to the decking, exposing it for inspection and any rotted-deck replacement before new install. We strongly recommend tear-off because: warranty coverage (most manufacturer warranties require single-layer install), decking inspection catches hidden rot before it spreads, lighter total weight on framing, and longer total roof lifespan. Reroof costs $0.50-$1.50/sq ft less but typically loses 5-7 years of expected lifespan vs tear-off.",
  },
];

export default function ShingleReplacementCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Shingle Replacement Charlotte NC', url: `${SITE_CONFIG.url}/shingle-replacement-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/shingle-replacement-charlotte-nc`}
        pageName="Shingle Replacement Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <WebPageSchema
        name="Shingle Replacement Charlotte NC | Best Roofing Now"
        url={`${SITE_CONFIG.url}/shingle-replacement-charlotte-nc`}
        description="Shingle replacement in Charlotte NC — single shingle to full roof. GAF Master Elite, CertainTeed SELECT, OC Platinum installer. Same-day to 2-day completion. Full tear-off, synthetic underlayment, ice-and-water shield, ridge vent, NDL warranties."
        primaryImage={IMAGES.hero.hero3}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Shingle Replacement Charlotte NC', url: `${SITE_CONFIG.url}/shingle-replacement-charlotte-nc` },
        ]}
      />
      <FeaturedSnippetListAnswerSchema
        question="What does shingle replacement involve in Charlotte NC?"
        directAnswer="Shingle replacement in Charlotte NC covers any scope from a single missing shingle ($250-$450) to a full 30-square home reroof ($11,000-$22,000 architectural / $19,000-$26,000 designer). Best Roofing Now's process: free 48-hour inspection with 30+ photos, written estimate within 24-48 hours, color-matched physical samples from GAF/CertainTeed/OC/Tamko libraries, full tear-off (recommended over overlay), synthetic underlayment, ice-and-water shield 3-6 ft from eaves + valleys + penetrations, sealed 4-nail (or 6-nail high-wind) install, NC IRC §R806 balanced ventilation with ridge vent, and 30-50 year non-prorated transferable warranty packet. GAF Master Elite (top 2% nationwide), CertainTeed SELECT ShingleMaster, OC Platinum Preferred credentialed."
        items={[
          'Single shingle + sealed nail line — $250-$450; same-day repair',
          '4-10 shingles + ridge cap reseat — $450-$950',
          '10-30 shingles slope-section + flashing — $950-$2,400',
          'Full slope replacement — $3,500-$7,500',
          'Full roof tear-off + replace 30-sq home — $11,000-$22,000 architectural / $19,000-$26,000 designer',
          'Class 4 impact-resistant upgrade — 10-30% NC insurance discount; payback 5-7 yr',
          'Full tear-off recommended over overlay — better warranty, decking inspection, longer lifespan',
          '30-50 year non-prorated transferable warranty when installed by Best Roofing Now',
        ]}
        pageUrl={`${SITE_CONFIG.url}/shingle-replacement-charlotte-nc`}
      />
      <FreeInspectionOfferSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero3} alt="Shingle replacement Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Single Shingle to Full Roof | 30-50 Yr Warranties</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Shingle Replacement <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Same-day spot repair. 1-2 day full reroof. Color-matched. NDL warranty.
            </p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now replaces single shingles to full roofs across Charlotte and the
              surrounding communities of Ballantyne, SouthPark, Dilworth, Plaza Midwood, Myers
              Park, NoDa, Eastover, Foxcroft, Cotswold, Beverly Woods, Steele Creek, University
              City, and the Lake Norman towns of Huntersville, Cornelius, Davidson, and Mooresville.
              Color-matched from GAF Timberline HDZ, CertainTeed Landmark, OC TruDefinition Duration,
              and Tamko Heritage libraries. Full tear-off with synthetic underlayment, ice-and-water
              shield, ridge vent, and 4-6 nail sealed install. GAF Master Elite (top 2%),
              CertainTeed SELECT ShingleMaster, OC Platinum Preferred — 30-50 year non-prorated
              transferable warranties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>
                Get Your Free Estimate
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Shingle Replacement Scope &amp; Pricing</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Wrench, title: 'Spot Repair $250-$950', desc: '1-10 shingles + ridge cap reseat; same-day or next-day repair' },
              { icon: Layers, title: 'Slope Section $950-$2,400', desc: '10-30 shingles + flashing; matched color and exposure pattern' },
              { icon: DollarSign, title: 'Full Slope $3,500-$7,500', desc: 'Full slope replacement; common for wind-uplift damage' },
              { icon: Clock, title: 'Full Roof $11K-$26K', desc: '30-square Charlotte home; architectural to designer; 1-2 day completion' },
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

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="shingle-replacement-charlotte-nc" />

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Shingle Replacement Questions</h2>
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

      <CityGeoSection city="Charlotte" state="NC" citySlug="charlotte-nc" service="shingle-replacement" />

      <CTASection title="Ready for Shingle Replacement?" subtitle="Same-day spot repairs. 1-2 day full reroofs. NDL warranties from Charlotte's GAF Master Elite installer." />
    </>
  );
}
