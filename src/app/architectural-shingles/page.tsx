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
  Home,
  Clock,
  Wind,
  Palette,
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
import { SITE_CONFIG, ROOFING_BRANDS } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Architectural Shingles Charlotte NC',
  description:
    'Architectural shingle installation in Charlotte NC — GAF Master Elite, CertainTeed SELECT, Owens Corning Platinum certified. Laminated dimensional shingles, 130 MPH wind, lifetime limited warranties.',
  keywords: [
    'architectural shingles charlotte nc',
    'dimensional shingles charlotte',
    'laminated shingles charlotte nc',
    'gaf shingles charlotte',
    'certainteed shingles charlotte nc',
    'owens corning shingles charlotte',
    'premium shingles charlotte',
    'gaf timberline hdz',
    'certainteed landmark',
    'owens corning duration',
    'algae resistant shingles',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/architectural-shingles`,
  },
  openGraph: {
    title: 'Architectural Shingles Charlotte NC | GAF, CertainTeed, Owens Corning | Best Roofing Now',
    description: 'Premium architectural shingle installation in Charlotte NC — laminated dimensional shingles with 130 MPH wind rating and lifetime limited warranties.',
    url: `${SITE_CONFIG.url}/architectural-shingles`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Architectural shingles in Charlotte NC' }],
  },
};

const shingleBrands = [
  { name: 'GAF Timberline HDZ', warranty: 'Lifetime Limited', windRating: '130 MPH', features: 'LayerLock mechanical bond, StrikeZone nailing area, StainGuard Plus algae.' },
  { name: 'CertainTeed Landmark', warranty: 'Lifetime Limited', windRating: '110-130 MPH', features: 'NailTrak nailing guides, StreakFighter algae, Quadra-Bond adhesive.' },
  { name: 'Owens Corning TruDefinition Duration', warranty: 'Lifetime Limited', windRating: '130 MPH', features: 'SureNail fabric strip reinforcement, TruDefinition color contrast.' },
  { name: 'GAF Timberline Ultra HD', warranty: 'Lifetime Limited', windRating: '130 MPH', features: 'Ultra-dimensional wood-shake look, High Definition dual-shadow colors.' },
  { name: 'CertainTeed Presidential Shake', warranty: '50-year', windRating: '110-130 MPH', features: 'Triple-layer sculpted cedar-shake profile, luxury designer tier.' },
  { name: 'Malarkey Vista AR (Class 4)', warranty: 'Lifetime Limited', windRating: '130 MPH', features: 'Class 4 UL 2218 impact rated, polymer-modified SBS, algae resistant.' },
];

const benefits = [
  { icon: Clock, title: '25–35 Year Lifespan (Charlotte)', description: 'Architectural shingles last 25–35 years in NC climate vs 15–20 for 3-tab. Premium lines 40–50 years.' },
  { icon: Wind, title: 'Superior Wind Resistance', description: 'Rated for 110–130 MPH winds — exceeds NC code minimum of 110 MPH for Charlotte metro.' },
  { icon: Palette, title: 'Dimensional Appearance', description: 'Laminated multi-layer construction creates shadow lines, depth, and wood-shake or slate mimicking profiles.' },
  { icon: Shield, title: 'Fiberglass Mat + Ceramic Granules', description: 'Modern architectural uses fiberglass reinforcement (not organic felt) with 3M ceramic-coated algae-resistant granules.' },
  { icon: Home, title: '60–70% Resale ROI', description: 'Premium appearance and lifetime warranties return 60–70% at Charlotte resale — significantly higher than 3-tab re-roofs.' },
  { icon: Award, title: 'Enhanced Full-System Warranties', description: 'Our GAF Master Elite, CertainTeed SELECT, OC Platinum certifications unlock 25–50 year labor coverage not available to uncertified contractors.' },
];

const vsThreeTab = [
  { feature: 'Lifespan (Charlotte climate)', architectural: '25–35 years', threeTab: '15–20 years' },
  { feature: 'Wind Rating', architectural: '110–130 MPH', threeTab: '60–70 MPH' },
  { feature: 'Appearance', architectural: 'Dimensional, shadow lines, wood-shake profiles', threeTab: 'Flat, uniform single-layer look' },
  { feature: 'Weight per Square', architectural: '240–400 lb', threeTab: '200–250 lb' },
  { feature: 'Installed Cost (2026)', architectural: '$4–$7/sq ft', threeTab: '$3–$5/sq ft' },
  { feature: 'Warranty Structure', architectural: 'Lifetime limited with wind and algae coverage', threeTab: '20–25 year pro-rated' },
  { feature: 'Granule Technology', architectural: 'Ceramic-coated algae-resistant', threeTab: 'Basic mineral granules' },
  { feature: 'Available Tiers', architectural: 'Standard, enhanced, designer, Class 4 impact', threeTab: 'Value tier only' },
];

const installChecklist = [
  'Verify deck is smooth, clean, and structurally sound (replace rotted sheathing)',
  'Install ice-and-water shield at eaves, valleys, penetrations per manufacturer spec',
  'Install synthetic underlayment (not felt) across remaining deck',
  'Drip-edge at eaves first, then underlayment, then drip-edge at rakes',
  'Starter strip at eaves and rakes — critical for wind warranty',
  'Snap chalk lines for straight horizontal courses; maintain 5-5/8" or 5-7/8" exposure',
  'Use correct nail pattern — 4 nails minimum (6 on steep slopes) in the nail zone',
  'Valley style — closed-cut or open metal W-valley with ice shield beneath',
  'Flashing replaced at all penetrations, step-flashing against walls and chimneys',
  'Hip and ridge cap in matching shingle pattern; ridge vent for balanced attic ventilation',
];

const faqs = [
  { question: 'What is the difference between architectural and 3-tab shingles?', answer: 'Architectural shingles are laminated (multi-layer) dimensional shingles with heavy fiberglass mat, ceramic-coated granules, and factory-bonded tabs creating shadow lines and depth. 3-tab shingles are single-layer with cut tabs that look flat and uniform. Architectural weighs 240–400 lb per square vs 200–250 lb for 3-tab, carries 110–130 MPH wind rating vs 60–70 MPH, lasts 25–35 years vs 15–20 years in Charlotte climate, and includes lifetime limited warranties vs 20–25 year pro-rated. 95%+ of Charlotte re-roofs in 2026 spec architectural — 3-tab is reserved for rental properties and short-hold investment scenarios.' },
  { question: 'How much do architectural shingles cost in Charlotte NC?', answer: '2026 Charlotte installed pricing: standard architectural (GAF Timberline HDZ, CertainTeed Landmark, Owens Corning Duration) $4–$6.50/sq ft, enhanced architectural (Timberline Ultra HD, Landmark Pro, Duration Designer) $5–$8/sq ft, Class 4 impact-resistant (Malarkey Vista, GAF Armor Shield, CertainTeed NorthGate) $6–$9/sq ft, designer/luxury (Camelot II, Grand Manor, Presidential Shake) $8–$14/sq ft. A typical 30-square (3,000 sq ft) Charlotte home runs $12,000–$19,500 for standard architectural installed. Includes tear-off, synthetic underlayment, ice shield, starter, hip and ridge, and disposal.' },
  { question: 'Which brand of architectural shingles is best in Charlotte?', answer: 'All three major brands — GAF, CertainTeed, Owens Corning — produce excellent architectural shingles proven in the Piedmont climate. The meaningful differences are: (1) aesthetic preference (color palette, shadow depth, profile); (2) our certification tier (GAF Master Elite unlocks Golden Pledge system warranty; CertainTeed SELECT unlocks 5-Star warranty; OC Platinum unlocks Platinum Protection); (3) Class 4 upgrade path availability and your insurance carrier&apos;s discount structure. We hold top-tier certifications with all three and match the brand to your specific goal rather than pushing a single manufacturer.' },
  { question: 'How long do architectural shingles last in North Carolina?', answer: 'With correct installation and balanced attic ventilation (1/150 NFVA or 1/300 with ridge vent): 25–35 years for standard architectural, 30–40 years for enhanced architectural with thicker laminate, 35–45 years for Class 4 impact-resistant polymer-modified SBS, 40–50 years for designer/luxury triple-layer. Dark colors fade faster than light under Charlotte summer sun. Key accelerating factors: poor ventilation (cuts life 25–40%), algae streaks (cosmetic but can be treated), and hail damage. Key extending factor: annual inspection with early flashing repair.' },
  { question: 'Are architectural shingles worth the extra cost vs 3-tab?', answer: 'For Charlotte homeowners planning to stay 10+ years: almost always yes. Architectural costs $1.00–$1.50/sq ft more than 3-tab but lasts 10–15 years longer, carries superior warranties, withstands higher wind, and returns 60–70% at resale vs ~50% for 3-tab. Over a 25-year hold, architectural avoids one full re-roof cycle. For 1–3 year holds or rental properties: 3-tab can still make financial sense. Most Charlotte manufacturers and suppliers have largely stopped stocking 3-tab — availability is now a factor as well.' },
  { question: 'What colors do architectural shingles come in for Charlotte homes?', answer: 'All three major brands offer 20+ colors across their architectural lines. Popular Charlotte selections: Weathered Wood (warm brown multi-tone) — works on most home styles; Charcoal (near-black) — modern and farmhouse; Barkwood (medium brown) — Craftsman and traditional; Slate (cool gray) — Colonial and transitional; Pewter Gray (silver-gray) — modern and coastal; Hunter Green and Colonial Red — accent colors for specific architectural styles. We provide full-size physical samples plus 3D home visualization before you commit. HOA restrictions apply in many Charlotte communities.' },
  { question: 'What wind rating do architectural shingles need in Charlotte?', answer: 'NC building code requires 110 MPH minimum for residential roofing in the Charlotte metro. All major architectural lines (GAF HDZ, CertainTeed Landmark, Owens Corning Duration) exceed code at 130 MPH with proper 4-nail installation and starter strip. For 6-nail pattern and high-exposure slopes (lakefront Lake Norman, ridgeline homes), we can upgrade to 150 MPH rating. Hurricane-coastal installations use specialty high-wind shingles like CertainTeed HurricaneForce. For hail belt areas, we recommend Class 4 UL 2218 impact-rated shingles regardless of wind spec.' },
  { question: 'Are architectural shingle warranties transferable if I sell my home?', answer: 'Yes — most enhanced full-system warranties (GAF Golden Pledge, CertainTeed 5-Star, Owens Corning Platinum Protection) are transferable once during the warranty term if you register the transfer within 60 days of home sale. Standard manufacturer product warranties are often pro-rated on transfer and cover only materials, not labor. Transferable warranties are a real marketing asset for Charlotte sellers — home inspectors and buyer agents recognize them and they support a higher asking price.' },
  { question: 'Should I upgrade to Class 4 impact-resistant architectural shingles in Charlotte?', answer: 'For most Charlotte and Lake Norman homeowners: yes, if you plan to stay 5+ years. Class 4 shingles (Malarkey Vista AR, GAF Armor Shield II, CertainTeed NorthGate, Atlas StormMaster) cost $0.50–$1.50 more per sq ft but commonly unlock 10–30% homeowner insurance premium discounts with NC carriers (State Farm, Allstate, Farm Bureau, USAA). Typical payback is 5–7 years. They also reduce deductible exposure in a hail claim. We recommend Class 4 on any re-roof in the Piedmont hail belt unless cost is the absolute driver.' },
  { question: 'What installation details matter most for architectural shingle longevity?', answer: 'Five details separate long-lasting installs from premature failures: (1) ice-and-water shield at eaves 24" past warm-wall line — code-required, prevents ice-dam leaks; (2) synthetic underlayment instead of felt — tears less and handles weeks of exposure during install; (3) starter strip at eaves AND rakes (not just eaves) — unlocks wind warranty; (4) 4+ nails in the nail zone (6 on steep slopes) — most wind failures trace to improper nail placement or count; (5) balanced attic ventilation matching NC code — underventilated attics cut shingle life 25–40%. We document all five on every Charlotte install.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Roofing Materials', url: `${SITE_CONFIG.url}/materials` },
  { name: 'Architectural Shingles', url: `${SITE_CONFIG.url}/architectural-shingles` },
];

export default function ArchitecturalShinglesPage() {
  const pageUrl = `${SITE_CONFIG.url}/architectural-shingles`;

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Architectural Shingle Installation",
          description: "Premium architectural shingle installation in Charlotte NC from certified GAF, CertainTeed, and Owens Corning installers.",
          slug: "architectural-shingles",
        }}
      />
      <WebPageSchema
        name="Architectural Shingles Charlotte NC | GAF, CertainTeed, Owens Corning"
        description="Architectural shingle installation in Charlotte NC — GAF Master Elite, CertainTeed SELECT, Owens Corning Platinum certified. 130 MPH wind, lifetime warranties."
        url={pageUrl}
        primaryImage={IMAGES.hero.hero3}
        breadcrumb={breadcrumbItems}
      />
      <FreeInspectionOfferSchema />
      <FeaturedSnippetListAnswerSchema
        question="What are the key features of architectural shingles in Charlotte NC?"
        directAnswer="Six reasons architectural shingles are the default choice for Charlotte re-roofs."
        items={[
          '25–35 year lifespan in Piedmont climate',
          '110–130 MPH wind resistance (exceeds NC code)',
          'Fiberglass mat and ceramic algae-resistant granules',
          'Lifetime limited warranties with full-system options',
          'Dimensional wood-shake and slate mimicking profiles',
          '60–70% resale ROI at Charlotte home sale',
        ]}
        pageUrl={pageUrl}
      />
      <SpeakableContentBlocks includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={pageUrl} pageName="Architectural Shingles Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero3} alt="Architectural shingles in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">Most Popular Roofing Choice</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Architectural Shingles
              <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Premium dimensional shingles with lifetime warranties</p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Architectural shingle installation across Charlotte NC and Lake Norman — GAF Timberline HDZ, CertainTeed Landmark, Owens Corning TruDefinition Duration, and Class 4 impact-resistant lines from Malarkey and Atlas. 130 MPH wind rating, ceramic algae-resistant granules, fiberglass mat reinforcement, and lifetime limited warranties. Our GAF Master Elite, CertainTeed SELECT ShingleMaster, and Owens Corning Platinum certifications unlock enhanced full-system warranties with 25–50 year labor coverage that uncertified contractors cannot match.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />Lifetime Warranties</span>
              <span className="flex items-center gap-2"><Award className="w-5 h-5 text-accent-light" />Certified Installer</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Architectural Shingles?</h2>
            <p className="text-gray text-lg">The default spec for Charlotte and Lake Norman re-roofs.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{benefit.title}</h3>
                <p className="text-gray text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Top Architectural Shingle Brands &amp; Lines</h2>
            <p className="text-gray text-lg">Certified installer for every major manufacturer&apos;s architectural lineup.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shingleBrands.map((brand) => (
              <div key={brand.name} className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-dark text-lg mb-3">{brand.name}</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-dark">Warranty:</span> <span className="text-gray">{brand.warranty}</span></p>
                  <p><span className="font-semibold text-dark">Wind Rating:</span> <span className="text-gray">{brand.windRating}</span></p>
                  <p><span className="font-semibold text-dark">Features:</span> <span className="text-gray">{brand.features}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Architectural vs. 3-Tab Shingles</h2>
            <div className="overflow-x-auto">
              <div className="bg-light rounded-xl overflow-hidden min-w-[640px]">
                <div className="grid grid-cols-3 bg-primary text-white font-bold">
                  <div className="p-4">Feature</div>
                  <div className="p-4">Architectural</div>
                  <div className="p-4">3-Tab</div>
                </div>
                {vsThreeTab.map((row, index) => (
                  <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-white' : 'bg-light'}`}>
                    <div className="p-4 font-semibold text-dark">{row.feature}</div>
                    <div className="p-4 text-primary font-medium">{row.architectural}</div>
                    <div className="p-4 text-gray">{row.threeTab}</div>
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
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">10-Point Architectural Shingle Install Checklist</h2>
              <p className="text-gray text-lg">The details that separate long-lasting Charlotte roofs from premature failures.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {installChecklist.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-700">
                <strong className="text-primary">Related:</strong>{' '}
                <Link href="/materials/asphalt-shingles" className="text-primary hover:underline">Asphalt Shingle Guide</Link>{' · '}
                <Link href="/products" className="text-primary hover:underline">Shingle Products</Link>{' · '}
                <Link href="/brands" className="text-primary hover:underline">Brand Certifications</Link>{' · '}
                <Link href="/services/roof-replacement" className="text-primary hover:underline">Roof Replacement</Link>{' · '}
                <Link href="/services/roof-ventilation" className="text-primary hover:underline">Attic Ventilation</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Ready for Premium Shingles?</h2>
              <p className="text-white/90">Get a free estimate with physical samples and 3D home visualization.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="architectural-shingles" count={4} title="Architectural Shingle Projects" subtitle="Browse completed shingle installations." schemaPageUrl={pageUrl} />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Architectural Shingle FAQs</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Explore Our Brands</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {ROOFING_BRANDS.slice(0, 3).map((brand) => (
              <Link key={brand.slug} href={`/brands/${brand.slug}`} className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary mb-2">{brand.name}</h3>
                <p className="text-gray text-sm">Learn about {brand.name} shingles and warranties.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Upgrade to Architectural Shingles" subtitle="Get a free estimate from Charlotte's certified shingle installers." />
    </>
  );
}
