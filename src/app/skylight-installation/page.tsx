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
  Sun,
  Droplets,
  Wrench,
  Home,
  Zap,
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
  title: 'Skylight Installation Charlotte NC',
  description:
    'VELUX, Wasco, and Fakro skylight installation and replacement in Charlotte NC. Deck-mounted, curb-mounted, solar-vented. 26% federal tax credit eligible. Leak-free warranty.',
  keywords: [
    'skylight installation charlotte nc',
    'skylight repair charlotte',
    'velux skylight installer charlotte',
    'wasco skylight charlotte',
    'fakro skylight nc',
    'skylight replacement charlotte nc',
    'leaking skylight repair',
    'solar skylight tax credit',
    'sun tunnel installation charlotte',
    'deck mounted skylight',
    'curb mounted skylight',
    'roof window installation',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/skylight-installation`,
  },
  openGraph: {
    title: 'Skylight Installation Charlotte NC | VELUX Certified | Best Roofing Now',
    description: 'Professional skylight installation and repair services in Charlotte NC — VELUX, Wasco, Fakro. Solar-vented models qualify for 26% federal tax credit.',
    url: `${SITE_CONFIG.url}/skylight-installation`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Skylight installation in Charlotte NC' }],
  },
};

const skylightServices = [
  { icon: Sun, title: 'New Skylight Installation', description: 'Full cut-in install with manufacturer flashing kit, proper insulation, and interior drywall finishing.' },
  { icon: Wrench, title: 'Skylight Repair', description: 'Re-seal perimeter EPDM gasket, replace flashing components, correct condensation via ventilation fixes.' },
  { icon: Home, title: 'Skylight Replacement', description: 'Upgrade units past 15–20 year seal life to modern energy-efficient Low-E laminated glazing.' },
  { icon: Droplets, title: 'Leak Diagnosis & Repair', description: 'Identify whether leak is flashing, seal failure, or condensation — each has a different fix.' },
  { icon: Zap, title: 'Sun Tunnel Installation', description: 'VELUX SUN TUNNEL tubular units bring light to hallways, closets, and interior rooms without full cut-in.' },
  { icon: Shield, title: 'Flashing Replacement', description: 'Install manufacturer-spec step and counter-flashing kit — critical to long-term leak-free performance.' },
];

const skylightTypes = [
  { name: 'Fixed Skylights', description: 'Non-opening units for natural light only. Simplest and most reliable option.', price: '$800-$1,800' },
  { name: 'Manual Venting', description: 'Crank- or pole-operated opening skylights for natural ventilation and stack-effect cooling.', price: '$1,400-$2,800' },
  { name: 'Electric Venting', description: 'Hardwired motor with wall switch or remote. Rain sensor standard on most models.', price: '$1,800-$3,500' },
  { name: 'Solar-Powered Venting', description: 'Solar panel powers motor and rain sensor — no electrical wiring required. Qualifies for 26% federal tax credit.', price: '$2,200-$4,200' },
  { name: 'Sun Tunnels (Tubular)', description: 'Reflective tube routes sunlight from roof to interior ceiling. Ideal for rooms without attic access.', price: '$700-$1,500' },
];

const benefits = [
  'Increase natural light by up to 30% in the affected room',
  'Reduce daytime electricity usage and eye strain',
  'Improve ventilation and air quality with venting models',
  'Add home value (typical 1.5–2.5x ROI at resale)',
  'Create dramatic architectural features for bathrooms and high ceilings',
  'Solar-powered venting models qualify for 26% federal tax credit',
];

const installChecklist = [
  'Verify roof pitch is within manufacturer-supported range (typical 14°–85° / 3:12 to 20:12)',
  'Inspect framing to locate rafter/truss spacing (skylight rough opening must land between members or require headers)',
  'Confirm deck-mounted vs curb-mounted selection based on slope and desired profile',
  'Size unit to standard glazing (Low-E3 laminated is the 2026 default for Charlotte energy code)',
  'Check attic path for ductwork, plumbing, and electrical that would conflict with rough opening',
  'Plan interior light well (straight, splayed, or angled) before cutting ceiling opening',
  'Confirm flashing kit matches roof material (asphalt, metal, tile each require different kit)',
  'Verify manufacturer ice-and-water shield spec around full perimeter',
  'For solar venting: test rooftop sun exposure for charging panel placement',
  'Document conditions with pre-install photos for warranty protection',
];

const faqs = [
  { question: 'How much does skylight installation cost in Charlotte NC?', answer: '2026 Charlotte market installed cost (unit + labor + flashing kit): fixed skylight $1,500–$3,000, manual venting $2,200–$4,000, electric venting $2,800–$5,200, solar-powered venting $3,500–$6,000, sun tunnel (tubular) $1,100–$2,200. Drywall finishing, painting, and splayed light-well framing add $400–$1,500. Asphalt-shingle roofs are the baseline; metal-roof installations add 15–25%; tile or slate installations add 30–60% due to specialty flashing kits.' },
  { question: 'Will a skylight make my roof leak?', answer: 'Not when installed with a manufacturer flashing kit, peel-and-stick ice shield around the full perimeter, and matching roof-material step flashing. Skylight leaks almost always trace to (1) aftermarket or missing flashing kits — the #1 cause we see, (2) failed perimeter EPDM seal after 15–20 years — normal life expectancy, or (3) condensation misidentified as a leak — fixed with ventilation. Our installs include a 10-year leak-free workmanship warranty paired with the manufacturer&apos;s 10-year glass and 5-year flashing warranty.' },
  { question: 'What brand skylights do you install in Charlotte?', answer: 'VELUX is our default spec — the market leader with the strongest warranty program, best flashing kits, and the largest replacement-part supply chain in North America. We also install Wasco (stronger commercial lineup) and Fakro (European brand, good value on architectural profiles) on request. For tubular daylighting we install VELUX SUN TUNNEL and Solatube. We avoid discount big-box brands where replacement parts are not available 10+ years out.' },
  { question: 'Can you install a skylight on any roof type in Charlotte?', answer: 'Most roofs yes, with caveats. Asphalt shingle is the easiest and cheapest (our default). Standing seam and stone-coated metal require manufacturer metal-roof flashing kits (add 15–25%). Concrete/clay tile and slate require specialty flashing and extra labor (add 30–60%). Flat and very-low-slope (under 3:12) roofs require curb-mounted skylights with membrane-compatible flashing — we handle these but pricing runs 25–40% higher. Very steep pitches (above 20:12) also add labor.' },
  { question: 'Deck-mounted or curb-mounted — which should I choose?', answer: 'Deck-mounted for roof slopes 14°–85° (most Charlotte pitched roofs): sits low to the deck, sleeker look, slightly cheaper. Curb-mounted for low-slope and flat roofs (under 3:12), retrofit situations where the opening already exists, and commercial applications: sits on a built-up frame, works with membrane roofing, replaces 1:1 for older skylights. We recommend during the free inspection based on your roof geometry.' },
  { question: 'Do solar-powered skylights qualify for tax credits in NC?', answer: 'Yes. Solar-powered venting skylights (VELUX Active, Fakro, Wasco solar models) and solar-powered blinds qualify for the federal Residential Clean Energy Credit — 26% of the installed cost for 2026 (dropping to 22% in 2027). There is no NC state-level skylight credit, but Duke Energy occasionally runs efficiency rebate programs we document for submission. We provide manufacturer certificates and installed-cost itemization for your tax preparer.' },
  { question: 'Why is my existing skylight leaking, and can you fix it?', answer: 'Five common causes: (1) perimeter EPDM seal failure — normal at 15–20 years, typically means full unit replacement; (2) missing or improperly installed manufacturer flashing kit — fixable by retrofitting kit and step-flashing; (3) cracked or ice-damaged glazing — replace the glass cassette (VELUX units are field-serviceable); (4) condensation misidentified as leak — solve with attic ventilation upgrade; (5) age-related glazing seal fog — unit replacement. We diagnose and quote the correct path on the free inspection.' },
  { question: 'How long does skylight installation take?', answer: 'Typical timelines: sun tunnel install 3–5 hours, standard deck-mounted fixed skylight 5–7 hours, venting electric/solar unit 6–9 hours, curb-mounted retrofit on existing opening 4–6 hours, full demo/rebuild with light-well reframing 1.5–2 days. Most single-unit Charlotte installs finish in one day. Drywall and painting of the interior light well are typically coordinated with a painter for a second day if not DIY.' },
  { question: 'Do I need an electrical permit for electric or solar skylights?', answer: 'Electric venting skylights require electrical connection and a permit if new wiring is run (standard in Mecklenburg and surrounding counties). Solar-powered venting skylights are completely wire-free — the solar panel powers the motor, so no electrical permit is required. This is a major advantage for Charlotte retrofits where pulling new wiring through finished ceilings would add $300–$700. Wiring simplicity is the single biggest reason solar-vented is our most-recommended spec.' },
  { question: 'Will a new skylight increase my Charlotte home value?', answer: 'Yes, typically. Well-placed skylights in primary bathrooms, kitchens, and dramatic great-room ceilings return 1.5–2.5x installed cost at resale per recent NC real estate data. Bathroom skylights are especially high-ROI — they add natural light and ventilation in a space where both are scarce. Poorly placed skylights (hallways without architectural feature, bedrooms where light timing conflicts with sleep) can be neutral or slightly negative. We discuss placement strategy during the free estimate.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Services', url: `${SITE_CONFIG.url}/services` },
  { name: 'Skylight Installation', url: `${SITE_CONFIG.url}/skylight-installation` },
];

export default function SkylightInstallationPage() {
  const pageUrl = `${SITE_CONFIG.url}/skylight-installation`;

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Skylight Installation",
          description: "Professional skylight installation and repair services in Charlotte NC. VELUX, Wasco, and Fakro certified.",
          slug: "skylight-installation",
        }}
      />
      <WebPageSchema
        name="Skylight Installation Charlotte NC | VELUX, Wasco, Fakro"
        description="VELUX, Wasco, and Fakro skylight installation and replacement in Charlotte NC — deck-mounted, curb-mounted, solar-vented with 26% federal tax credit."
        url={pageUrl}
        primaryImage={IMAGES.hero.hero3}
        breadcrumb={breadcrumbItems}
      />
      <FreeInspectionOfferSchema />
      <FeaturedSnippetListAnswerSchema
        question="What skylight types does Best Roofing Now install in Charlotte NC?"
        directAnswer="Five skylight types covering every lighting, ventilation, and budget scenario."
        items={[
          'Fixed (non-opening) skylights',
          'Manual crank-opening venting skylights',
          'Electric venting skylights with rain sensor',
          'Solar-powered venting skylights (26% tax credit)',
          'Sun tunnels (tubular skylights)',
        ]}
        pageUrl={pageUrl}
      />
      <SpeakableContentBlocks includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={pageUrl} pageName="Skylight Installation Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero3} alt="Skylight installation in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Sun className="w-4 h-4" />
              <span className="text-sm font-semibold">Bring Natural Light Inside</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Skylight Installation
              <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Professional skylight installation &amp; repair</p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              VELUX, Wasco, and Fakro skylight installation across Charlotte NC and Lake Norman — fixed, manual venting, electric, and solar-powered models with 26% federal tax credit eligibility. Deck-mounted and curb-mounted options for every roof pitch. Manufacturer flashing kits, peel-and-stick ice shield perimeters, and a 10-year leak-free workmanship warranty paired with the manufacturer&apos;s 10-year glass coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />10-Year Leak-Free Warranty</span>
              <span className="flex items-center gap-2"><Award className="w-5 h-5 text-accent-light" />VELUX Certified</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Skylight Services</h2>
            <p className="text-gray text-lg">Complete skylight installation, repair, and replacement for Charlotte homes.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skylightServices.map((service) => (
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
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Skylight Types &amp; 2026 Pricing</h2>
            <p className="text-gray text-lg">Installed ranges for Charlotte NC — unit, labor, and flashing kit included.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skylightTypes.map((type) => (
              <div key={type.name} className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-dark mb-2">{type.name}</h3>
                <p className="text-gray text-sm mb-4">{type.description}</p>
                <p className="text-primary font-bold">{type.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Benefits of Skylights</h2>
              <p className="text-gray text-lg mb-6">Skylights do more than add light — they transform your living space and add resale value.</p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <SEOImage src={IMAGES.realProjects.drone1} alt="Skylight on residential roof" width={600} height={450} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">10-Point Skylight Install Checklist</h2>
              <p className="text-gray text-lg">What we verify on every Charlotte skylight install before cutting the first hole.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {installChecklist.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Deck-Mounted vs Curb-Mounted Decision Guide</h2>
              <p className="text-gray text-lg">Two mounting profiles — the right choice depends on your roof slope and use case.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-light rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Deck-Mounted</h3>
                <p className="text-xs text-primary font-semibold mb-2">Our default for pitched asphalt/metal roofs</p>
                <p className="text-gray-700 text-sm mb-2"><strong>Best for:</strong> Roof slopes 14°–85° (3:12 through 20:12). Most Charlotte residential roofs.</p>
                <p className="text-gray-700 text-sm"><strong>Pros:</strong> Sleeker exterior profile, slightly cheaper install, preferred for new construction and first-time cut-ins.</p>
              </div>
              <div className="bg-light rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Curb-Mounted</h3>
                <p className="text-xs text-primary font-semibold mb-2">For flat roofs and retrofits</p>
                <p className="text-gray-700 text-sm mb-2"><strong>Best for:</strong> Flat and low-slope roofs (under 3:12), commercial membrane roofs, and 1:1 replacement of existing curb-mounted units.</p>
                <p className="text-gray-700 text-sm"><strong>Pros:</strong> Works with TPO/EPDM/PVC membrane flashing, easier retrofit on existing framed openings.</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-700">
                <strong className="text-primary">Related services:</strong>{' '}
                <Link href="/services/roof-inspection" className="text-primary hover:underline">Roof Inspection</Link>{' · '}
                <Link href="/services/roof-replacement" className="text-primary hover:underline">Roof Replacement</Link>{' · '}
                <Link href="/chimney-flashing-repair" className="text-primary hover:underline">Chimney Flashing</Link>{' · '}
                <Link href="/services/roof-ventilation" className="text-primary hover:underline">Roof Ventilation</Link>{' · '}
                <Link href="/flat-roof-repair" className="text-primary hover:underline">Flat Roof Repair</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Ready for More Natural Light?</h2>
              <p className="text-white/90">Get a free estimate — solar-vented models include 26% federal tax credit documentation.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="skylight-installation" count={4} title="Skylight Projects" subtitle="Browse completed skylight installations." schemaPageUrl={pageUrl} />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Skylight FAQs</h2>
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

      <CTASection title="Brighten Your Home with Skylights" subtitle="Get a free consultation and estimate from Charlotte's skylight experts." />
    </>
  );
}
