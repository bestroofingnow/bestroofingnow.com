import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Calculator,
  Calendar,
  CheckCircle,
  Clock,
  ClipboardList,
  DollarSign,
  FileText,
  HelpCircle,
  Layers,
  Phone,
  Scale,
  Shield,
  Star,
  Users,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
  SpeakableContentBlocks,
  FeaturedSnippetListAnswerSchema,
  FreeInspectionOfferSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'How Many Roof Estimates to Get',
  description:
    'Get 3-5 roof estimates from licensed Charlotte NC contractors. Learn what to compare in roofing quotes, red flags to watch for, and why the cheapest estimate is rarely the best choice.',
  keywords: [
    'how many roof estimates should I get',
    'how many roofing quotes',
    'comparing roof estimates charlotte nc',
    'roof estimate comparison',
    'multiple roof quotes charlotte',
    'roof replacement estimates charlotte nc',
    'roofing bid comparison',
    'how to compare roof estimates',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/how-many-roof-estimates-charlotte-nc`,
  },
  openGraph: {
    title: 'How Many Roof Estimates to Get | Charlotte NC Guide | Best Roofing Now',
    description:
      'Expert guide on getting and comparing roof estimates in Charlotte NC. Learn what to look for and how to choose the right contractor.',
    url: `${SITE_CONFIG.url}/how-many-roof-estimates-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero5,
        width: 1200,
        height: 630,
        alt: 'How many roof estimates to get - Charlotte NC guide by Best Roofing Now',
      },
    ],
  },
};

const comparisonCards = [
  {
    icon: DollarSign,
    title: 'Price',
    description:
      'Compare total cost, not just the bottom line. Ask for itemized breakdowns showing labor, materials, permits, and disposal fees. Beware estimates that lump everything into one number.',
    tip: 'Prices within 10-20% of each other are normal. An outlier 40%+ below the rest is a warning sign.',
  },
  {
    icon: Layers,
    title: 'Materials',
    description:
      'Ensure each estimate specifies the exact shingle brand, product line, and grade. Architectural shingles vary widely in quality. Ask about underlayment, ice and water shield, and flashing materials.',
    tip: 'Request manufacturer spec sheets to compare apples to apples between estimates.',
  },
  {
    icon: Shield,
    title: 'Warranty',
    description:
      'Compare both manufacturer warranty (materials) and workmanship warranty (labor). Some contractors offer 5-year workmanship warranties while others offer lifetime. Read the fine print on transferability.',
    tip: 'A manufacturer warranty is only as good as the contractor who installs it. Certified installers unlock better coverage.',
  },
  {
    icon: Clock,
    title: 'Timeline',
    description:
      'Ask when the job can start, how long it will take, and what happens if weather delays occur. Good contractors provide realistic timelines and communicate proactively about scheduling changes.',
    tip: 'In Charlotte, spring and fall are peak seasons. Expect longer wait times from March through May.',
  },
  {
    icon: FileText,
    title: 'Insurance',
    description:
      'Verify each contractor carries general liability insurance and workers compensation. Ask for certificates of insurance and call the carrier to confirm policies are active and coverage amounts are adequate.',
    tip: 'NC requires roofers to carry workers comp if they have 3+ employees. If uninsured, you could be liable for injuries.',
  },
  {
    icon: Users,
    title: 'References',
    description:
      'Ask for at least 3 recent Charlotte-area references and actually call them. Check Google reviews, BBB ratings, and look for consistent patterns in feedback. Drive by completed projects if possible.',
    tip: 'Look for contractors with 50+ Google reviews and a 4.5+ star rating for reliable quality indicators.',
  },
];

const redFlags = [
  'Demands full payment upfront before starting work',
  'Provides only a verbal estimate with no written documentation',
  'Cannot provide proof of license, insurance, or bonding',
  'Pressures you to sign immediately with "today only" pricing',
  'Wants to handle the insurance claim without your involvement',
  'Has no permanent business address or local phone number',
  'Offers a price dramatically lower than all other estimates',
  'Cannot provide local references or has very few online reviews',
];

const goodEstimateIncludes = [
  { item: 'Detailed scope of work', detail: 'Exact description of what will be done, including tear-off, decking inspection, and cleanup' },
  { item: 'Material specifications', detail: 'Brand, product line, color, and quantity of all materials including underlayment and flashing' },
  { item: 'Itemized pricing', detail: 'Separate line items for materials, labor, permits, disposal, and any extras' },
  { item: 'Project timeline', detail: 'Start date, estimated completion, and contingency plan for weather delays' },
  { item: 'Warranty details', detail: 'Written manufacturer and workmanship warranty terms, duration, and transferability' },
  { item: 'Payment schedule', detail: 'Clear milestones for payments, typically a small deposit with balance due at completion' },
  { item: 'Permit information', detail: 'Confirmation that the contractor will pull all required Mecklenburg County permits' },
  { item: 'Cleanup and disposal', detail: 'Who handles debris removal, dumpster fees, and final property cleanup including magnetic nail sweep' },
];

const faqs = [
  {
    question: 'How many roof estimates should I get?',
    answer:
      'You should get 3 to 5 estimates from licensed, insured roofing contractors before choosing one for your Charlotte NC roof replacement. Three estimates give you a reliable baseline for pricing and scope comparison. Getting more than five rarely provides additional value and can delay your project. Focus on quality contractors with strong local reputations rather than collecting the most quotes.',
  },
  {
    question: 'What should a roofing estimate include?',
    answer:
      'A professional roofing estimate should include an itemized breakdown of materials, labor, permits, and disposal costs, plus detailed scope of work, material specifications, timeline, warranty terms, and payment schedule. In Charlotte, the estimate should also reference Mecklenburg County permit fees and specify whether the contractor handles the permit process. Be wary of vague, single-line estimates.',
  },
  {
    question: 'Why do roofing prices vary so much between estimates?',
    answer:
      'Roofing prices vary because contractors use different materials, offer different warranty levels, carry different overhead costs, and have different experience levels. A higher estimate may include premium underlayment, better flashing, or a longer workmanship warranty. In Charlotte, pricing also varies by season, with spring and fall commanding higher rates due to demand. Always compare scope, not just price.',
  },
  {
    question: 'Should I choose the cheapest roofing estimate?',
    answer:
      'No, you should not automatically choose the cheapest roofing estimate. The lowest bid often means lower-quality materials, less experienced crews, skipped steps like proper flashing or ventilation, or insufficient insurance coverage. In Charlotte, cut-rate roofers sometimes skip Mecklenburg County permits, which can cause problems when selling your home. Choose the best value, which means quality work at a fair price.',
  },
  {
    question: 'How long are roofing estimates valid?',
    answer:
      'Most roofing estimates in Charlotte are valid for 30 to 60 days, though this varies by contractor. Material prices fluctuate with supply chain conditions, and labor rates change with seasonal demand. Ask each contractor to specify the expiration date on their estimate. If you wait longer than 60 days, request an updated quote to ensure pricing accuracy.',
  },
  {
    question: 'Should I always get a written roofing estimate?',
    answer:
      'Yes, always insist on a written roofing estimate. A written estimate protects both you and the contractor by documenting the agreed scope, materials, price, and timeline. Verbal estimates lead to misunderstandings and disputes. In North Carolina, contracts over $500 should be in writing. Reputable Charlotte contractors will provide detailed written estimates as standard practice.',
  },
  {
    question: 'Can I negotiate a roofing estimate?',
    answer:
      'Yes, you can negotiate a roofing estimate, but focus on value rather than just lowering the price. Ask if there are alternative materials that could reduce costs, whether timing flexibility would earn a discount, or if bundling services like gutters or siding offers savings. Most reputable Charlotte roofers will work with your budget while maintaining quality standards.',
  },
  {
    question: 'What if roofing estimates differ greatly from each other?',
    answer:
      'When estimates differ by more than 20 to 30 percent, the contractors are likely specifying different scopes of work, materials, or warranty levels. Ask the outlier to explain their pricing in detail. The low bidder may be cutting corners, while the high bidder may include premium options you do not need. Compare line by line to understand exactly what causes the price difference.',
  },
];

export default function HowManyRoofEstimatesCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'How Many Roof Estimates to Get', url: `${SITE_CONFIG.url}/how-many-roof-estimates-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <WebPageSchema
        name="How Many Roof Estimates Should I Get in Charlotte NC"
        description="Expert guide on getting and comparing 3-5 roof estimates from licensed Charlotte NC contractors."
        url={`${SITE_CONFIG.url}/how-many-roof-estimates-charlotte-nc`}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/how-many-roof-estimates-charlotte-nc`}
        pageName="How Many Roof Estimates Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FreeInspectionOfferSchema />
      <FeaturedSnippetListAnswerSchema
        question="What should Charlotte homeowners compare when evaluating roof estimates?"
        pageUrl={`${SITE_CONFIG.url}/how-many-roof-estimates-charlotte-nc`}
        directAnswer="Eight line items to compare side-by-side across 3-5 contractor bids: scope of work (tear-off vs overlay, deck repair allowances), shingle brand, tier, and wind rating (110 vs 130 vs 150 MPH), underlayment type (felt vs synthetic, ice-and-water shield coverage), ridge and intake ventilation math (NC IRC §R806 1/150 NFVA or 1/300 balanced), flashing detail (step, counter, chimney cricket), warranty structure (manufacturer shingle, system-level NDL, contractor workmanship), payment schedule (no more than deposit + completion), and credentials (NC license, $1M liability insurance, manufacturer certifications). Lowest bid is rarely the best value once scope normalization is applied."
        items={[
          'Scope of work — tear-off vs overlay, deck repair allowances',
          'Shingle brand, tier, and wind rating (110, 130, or 150 MPH)',
          'Underlayment type and ice-and-water shield coverage',
          'Ventilation math per NC IRC §R806 (1/150 NFVA or 1/300 balanced)',
          'Flashing detail — step, counter, chimney cricket',
          'Warranty structure — manufacturer, NDL system, contractor workmanship',
          'Payment schedule — deposit plus completion (avoid heavy upfront)',
          'Credentials — NC license, $1M liability, manufacturer certifications',
        ]}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'How Many Roof Estimates to Get' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero5}
            alt="How many roof estimates to get in Charlotte NC"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Calculator className="w-4 h-4" />
              <span className="text-sm font-semibold">Buyer&apos;s Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              How Many Roof Estimates
              <br className="hidden md:block" />
              <span className="text-blue-200">Should You Get?</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Get 3-5 estimates from licensed contractors. Compare scope of work, materials, warranty length, and payment terms.
            </p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Three to five bids is the Charlotte sweet spot — fewer than three leaves blind spots, more than five produces
              diminishing returns. Compare eight normalized line items side-by-side: scope (tear-off vs overlay), shingle
              tier and wind rating (110 / 130 / 150 MPH), underlayment and ice-and-water shield coverage, ventilation math
              per NC IRC §R806, flashing detail, warranty structure, payment schedule, and credentials. Lowest price rarely
              wins once scope is normalized. From our team with {SITE_CONFIG.roofsInstalled}+ roofs completed across Mecklenburg,
              Cabarrus, Union, Gaston, and Iredell counties.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-white !text-blue-800 hover:bg-blue-50"
                icon={<FileText className="w-5 h-5" aria-hidden="true" />}
              >
                Get Your Free Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-800"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-200" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-200" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What to Compare Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Scale className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">What to Compare</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              6 Things to Compare in Every Roof Estimate
            </h2>
            <p className="text-gray text-lg">
              Price is just one factor. Here is what experienced Charlotte homeowners compare when evaluating
              roofing estimates side by side.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {comparisonCards.map((card) => (
              <div
                key={card.title}
                className="bg-light rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark text-lg mb-2">{card.title}</h3>
                <p className="text-gray text-sm mb-3">{card.description}</p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm text-blue-800">
                    <span className="font-semibold">Pro Tip:</span> {card.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What a Good Estimate Includes */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <ClipboardList className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Estimate Checklist</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                What a Good Roof Estimate Includes
              </h2>
              <p className="text-gray text-lg">
                Use this checklist to evaluate every estimate you receive. If any of these items are missing,
                ask the contractor to provide them before you make a decision.
              </p>
            </div>

            <div className="space-y-4">
              {goodEstimateIncludes.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-5 shadow-sm flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">{item.item}</h3>
                    <p className="text-gray text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready to Get Your First Estimate?
              </h2>
              <p className="text-white/90">
                Best Roofing Now provides free, detailed, written estimates with no pressure and no obligation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-accent"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Free Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-accent hover:bg-white/90"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Red Flags Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 rounded-full px-4 py-2 mb-4">
                <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Red Flags</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Red Flags When Comparing Estimates
              </h2>
              <p className="text-gray text-lg">
                If you notice any of these warning signs during the estimate process, proceed with caution
                or choose a different contractor.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {redFlags.map((flag) => (
                <div key={flag} className="bg-red-50 rounded-xl p-4 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-800 text-sm">{flag}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-dark mb-1">Why the Cheapest Estimate Is Rarely the Best</p>
                  <p className="text-gray text-sm">
                    In Charlotte, the average roof replacement costs $8,000-$25,000. If one estimate comes in
                    40% below the others, the contractor is likely cutting corners on materials, skipping proper
                    installation steps, using unlicensed subcontractors, or omitting permits. The &quot;savings&quot;
                    often cost more in the long run through premature failure, void warranties, and repairs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roof Estimate FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to the most common questions Charlotte homeowners ask about getting and comparing roof estimates.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Related Resources</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: 'Signs You Need a New Roof', href: '/signs-you-need-new-roof-charlotte-nc', desc: '10 warning signs to watch for' },
                { title: 'Roof Replacement', href: '/services/roof-replacement', desc: 'Full replacement options and costs' },
                { title: 'Roofing Permits', href: '/roofing-permits-charlotte-nc', desc: 'Charlotte permit requirements' },
                { title: 'Overlay vs Tear-Off', href: '/roof-overlay-vs-tear-off-charlotte-nc', desc: 'Compare replacement methods' },
                { title: 'Free Roof Inspection', href: '/roof-inspection-charlotte-nc', desc: 'Schedule a professional assessment' },
                { title: 'Financing Options', href: '/roof-financing-charlotte-nc', desc: 'Flexible payment plans available' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group bg-light rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-dark group-hover:text-primary transition-colors mb-1">
                    {link.title}
                  </h3>
                  <p className="text-gray text-sm">{link.desc}</p>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="service"
        city="Charlotte"
        slug="how-many-roof-estimates-charlotte-nc"
        count={4}
        title="Recent Roof Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects by Best Roofing Now across the Charlotte metro area."
        schemaPageUrl={`${SITE_CONFIG.url}/how-many-roof-estimates-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Roof Estimates"
      />

      <CTASection
        title="Get Your Free, No-Obligation Roof Estimate"
        subtitle="Our detailed written estimates include itemized pricing, material specifications, warranty terms, and a clear timeline. Free for all Charlotte area homeowners."
      />
    </>
  );
}
