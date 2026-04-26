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
  Home,
  Palette,
  Crown,
  TreePine,
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
  title: 'Roofing Eastover Charlotte NC',
  description:
    "Roofing for Eastover, Charlotte's prestigious historic estate community. Slate, copper, cedar shake, and designer architectural shingle restoration on 1920s-1940s mansions. HOA ARB coordination, structural engineering, 30-50 yr warranties.",
  keywords: [
    'roofing Eastover Charlotte NC',
    'Eastover roof replacement',
    'Eastover slate roofing',
    'Eastover historic roofing',
    'Eastover estate roofer',
    'Charlotte historic district roofing',
    'Myers Park Eastover roofing',
    'luxury roofing Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-eastover-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing Eastover Charlotte NC | Estate Specialists | Best Roofing Now',
    description:
      "Roofing for Eastover, Charlotte's prestigious historic estate community. Slate, copper, cedar shake, designer architectural shingle restoration.",
    url: `${SITE_CONFIG.url}/roofing-eastover-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Roofing Eastover Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

const faqs = [
  {
    question: 'What roofing materials are appropriate for Eastover historic homes in Charlotte NC?',
    answer:
      "Eastover is a 1920s-1940s historic estate community where original roofs were typically slate, copper standing-seam, cedar shake, or premium clay tile. Period-appropriate restoration uses these same materials: natural slate ($20-$35/sq ft) from Vermont, Pennsylvania, or Virginia Buckingham quarries; copper standing-seam ($24-$30/sq ft) that develops natural patina; cedar shake (CSSB Certi-Grade $12-$22/sq ft); and clay tile ($15-$25/sq ft). Designer architectural shingles like GAF Grand Sequoia, CertainTeed Presidential, and Owens Corning Berkshire ($9-$14/sq ft) are also Eastover HOA-acceptable when historic materials aren't budget-feasible.",
  },
  {
    question: 'Does Eastover require historic district approval for roof replacements?',
    answer:
      "Eastover proper is not a designated National Register Historic District (unlike adjacent Elizabeth and Dilworth), but Eastover homes are governed by HOA architectural review board (ARB) standards that require approval for exterior changes including roofing material, color, and style. We coordinate ARB submission packets with FirstService Residential or the relevant Eastover HOA management firm — typical 2-4 week review window with 99%+ first-pass approval rate.",
  },
  {
    question: 'How much does an Eastover estate roof replacement cost?',
    answer:
      'Eastover estate homes typically range 50-150 square feet of roof area. Pricing varies dramatically by material: standard architectural shingles $25,000-$60,000; Class 4 impact-resistant $35,000-$75,000; designer/luxury shingles $45,000-$90,000; standing-seam metal $55,000-$180,000+; cedar shake restoration $60,000-$150,000; clay or concrete tile $75,000-$225,000; natural slate $100,000-$350,000+; copper standing-seam $120,000-$400,000+. Free estimate with detailed line-item pricing.',
  },
  {
    question: 'Do you handle the structural engineering for slate or tile conversions in Eastover?',
    answer:
      'Yes. Slate weighs 800-1,200 lb/sq and tile weighs 600-1,000 lb/sq versus 250-400 lb/sq for asphalt — converting an asphalt roof to slate or tile requires engineer-stamped structural drawings and rafter reinforcement. We coordinate with licensed NC structural engineers (typical $5,000-$15,000 added cost). For Eastover homes already having slate or tile, replacement is straightforward without re-engineering since the structure already supports the load.',
  },
  {
    question: 'Which other Charlotte communities are similar to Eastover for roofing scope?',
    answer:
      "Eastover is comparable to Foxcroft (1950s-1980s estates), Quail Hollow (PGA-tour-club-adjacent custom estates), Myers Park (1910s-1930s historic estate community), Piper Glen (TPC golf course executive homes), and the lakefront waterfront communities of Lake Norman in Cornelius, Davidson, and Mooresville. We work across all of these neighborhoods with the same estate-class crew and discreet weekday scheduling.",
  },
  {
    question: 'How do you protect mature landscaping during Eastover roof replacements?',
    answer:
      "Eastover's signature mature oaks, magnolias, dogwoods, and azaleas require careful protection during roof work. Our protocol includes: pre-work plywood walkways over root zones, plant tarps and zip-tied protection on shrubs adjacent to drop zones, dedicated dump trailer placement away from drip lines, careful crew movement (no shortcuts through landscaping), and post-work landscape inspection with photo verification. We also coordinate with your existing landscaping company if requested.",
  },
  {
    question: 'Can you match existing slate or tile patterns for Eastover repairs?',
    answer:
      'Yes. For slate restoration, we source matched-quarry slate (often Vermont gray-green or Pennsylvania black on Eastover homes) — this includes individual tile replacement, copper flashing repair, and complete slope restoration while preserving original tiles where possible. For clay or concrete tile, we maintain a sourcing network for discontinued profiles and can manufacture-match through brick-and-mortar tile yards in the Carolinas.',
  },
  {
    question: 'What credentials does Best Roofing Now hold for Eastover-class estate work?',
    answer:
      "Best Roofing Now holds the top-tier credential at every major manufacturer: GAF Master Elite (top 2% nationwide, fewer than 100 in NC); CertainTeed SELECT ShingleMaster (top tier, less than 1% of CT installers nationwide); Owens Corning Platinum Preferred. Plus BBB A+ accreditation, NC General Contractor License #87344, $2M+ general liability insurance, full workers' compensation, veteran-owned status, and HAAG-credentialed inspectors. We've completed estate-class roofing projects across Eastover, Foxcroft, Quail Hollow, Myers Park, Piper Glen, and lakefront LKN.",
  },
];

export default function RoofingEastoverCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Eastover Charlotte NC', url: `${SITE_CONFIG.url}/roofing-eastover-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-eastover-charlotte-nc`}
        pageName="Roofing Eastover Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <WebPageSchema
        name="Roofing Eastover Charlotte NC | Historic Estate Specialists | Best Roofing Now"
        url={`${SITE_CONFIG.url}/roofing-eastover-charlotte-nc`}
        description="Roofing for Eastover, Charlotte's prestigious 1920s-1940s historic estate community. Slate, copper standing-seam, cedar shake, clay tile, and designer architectural shingle restoration with HOA ARB coordination, structural engineering, and 30-50 year non-prorated warranties."
        primaryImage={IMAGES.hero.hero1}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Eastover Charlotte NC', url: `${SITE_CONFIG.url}/roofing-eastover-charlotte-nc` },
        ]}
      />
      <FeaturedSnippetListAnswerSchema
        question="What roofing services do Eastover Charlotte NC homes commonly need?"
        directAnswer="Eastover is one of Charlotte's most prestigious historic estate communities (1920s-1940s) with brick colonials, French country manors, English Tudors, and Mediterranean villas typically valued $1.5M-$8M+. Most original slate, copper, cedar, and tile roofs are now in major restoration cycles. Common services include: natural slate restoration ($20-$35/sq ft); copper standing-seam and bay-window roofing ($24-$30/sq ft); cedar shake restoration ($12-$22/sq ft); clay or concrete tile work ($15-$25/sq ft); designer architectural shingles like GAF Grand Sequoia, CertainTeed Presidential, OC Berkshire ($9-$14/sq ft); HOA ARB coordination; structural engineering for material conversions (800-1,200 lb/sq slate weight vs 250-400 lb/sq asphalt); discreet weekday estate scheduling; and mature landscape protection protocols."
        items={[
          'Natural slate restoration — $20-$35/sq ft installed; matched-quarry sourcing for 1920s-era slate',
          'Copper standing-seam — $24-$30/sq ft installed; develops natural patina; bay window and eyebrow detail',
          'Cedar shake restoration — $12-$22/sq ft installed; CSSB Certi-Grade for English Tudor and traditional homes',
          'Clay or concrete tile work — $15-$25/sq ft installed; Mediterranean villa restoration',
          'Designer architectural shingles — $9-$14/sq ft; GAF Grand Sequoia, CertainTeed Presidential, OC Berkshire',
          'HOA ARB coordination — packet preparation, FirstService Residential submission, 2-4 wk review',
          'Structural engineering — slate/tile 800-1,200 lb/sq weight needs engineer-stamped drawings for conversion',
          'Mature landscape protection — plywood walkways, plant tarps, drip-line dump placement, post-work inspection',
        ]}
        pageUrl={`${SITE_CONFIG.url}/roofing-eastover-charlotte-nc`}
      />
      <FreeInspectionOfferSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero1} alt="Roofing Eastover Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Crown className="w-4 h-4" />
              <span className="text-sm font-semibold">Estate Specialists | Historic Eastover</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Eastover <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Slate. Copper. Cedar. Clay tile. Designer shingles. Discreet estate-class crews.
            </p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now restores and replaces roofs in Eastover, Charlotte's prestigious
              1920s-1940s historic estate community. We install natural slate (Vermont, Pennsylvania,
              Virginia Buckingham quarries) with copper step-flashing, copper standing-seam metal,
              cedar shake (CSSB Certi-Grade), clay and concrete tile, and designer architectural
              shingles (GAF Grand Sequoia, CertainTeed Presidential, OC Berkshire) — all
              coordinated with Eastover HOA ARB approval and discreet weekday estate scheduling
              with mature landscape protection. GAF Master Elite (top 2%), CertainTeed SELECT
              ShingleMaster, OC Platinum Preferred — 30-50 year non-prorated transferable
              warranties. Structural engineering coordination for slate and tile conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>
                Schedule Free Estate Consultation
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Eastover Estate Roofing Specialties</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Crown, title: 'Natural Slate', desc: 'Vermont, Pennsylvania, Buckingham quarries; 100-150 yr lifespan; matched-quarry restoration' },
              { icon: Palette, title: 'Copper Standing-Seam', desc: 'Develops natural patina over 50-100 yr; bay windows, eyebrows, full standing-seam roofs' },
              { icon: Home, title: 'Cedar Shake & Clay Tile', desc: 'CSSB Certi-Grade cedar; clay and concrete tile for Mediterranean villas; structural engineering' },
              { icon: TreePine, title: 'Mature Landscape Care', desc: 'Plywood walkways, plant tarps, drip-line dump placement, post-work inspection' },
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

      <GeoProjectGalleryStrip pageType="location" city="Charlotte" slug="roofing-eastover-charlotte-nc" />

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Eastover Roofing Questions</h2>
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

      <CityGeoSection city="Charlotte" state="NC" citySlug="charlotte-nc" service="roofing-eastover" />

      <CTASection title="Estate Roofing for Eastover" subtitle="Discreet estate-class crews, mature landscape protection, and the credentials estate homes deserve." />
    </>
  );
}
