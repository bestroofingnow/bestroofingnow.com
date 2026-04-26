import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone, Building2, CheckCircle, Clock } from 'lucide-react';
import { SITE_CONFIG, COMMERCIAL_SYSTEMS } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { IMAGES } from '@/lib/images';
import {
  BreadcrumbSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
  SpeakableContentBlocks,
  WebPageSchema,
  FeaturedSnippetListAnswerSchema,
  FreeInspectionOfferSchema,
  FAQSchema,
} from '@/components/seo/SchemaMarkup';
import { CitationFacts } from '@/components/sections/CitationFacts';
import { HelpCircle } from 'lucide-react';

const commercialSystemsFAQs = [
  {
    question: 'Which commercial roofing system is best for Charlotte NC?',
    answer:
      'For most flat or low-slope commercial buildings in Charlotte NC, TPO single-ply is the best balance of cost, energy efficiency, and warranty — typically $5–$12 per square foot installed with a 20–30 year NDL warranty from manufacturers like Carlisle and Johns Manville. EPDM rubber is preferred for parapet-walled buildings (60+ year track record). PVC is best for restaurants and manufacturing where chemical or grease resistance is required. Best Roofing Now is an authorized installer for Carlisle, Johns Manville, Firestone-Holcim, GAF, and Mule-Hide.',
  },
  {
    question: 'How much does commercial roofing cost in Charlotte NC?',
    answer:
      'Commercial roofing costs in Charlotte NC range from $4–$30 per square foot installed depending on system: silicone restoration coatings $2–$5/sqft (extends existing roof 10–15 years), EPDM $4–$10/sqft, TPO $5–$12/sqft, built-up $5–$10/sqft, modified bitumen $6–$12/sqft, PVC $7–$14/sqft, and standing seam metal $9–$30/sqft. For a 20,000 sq ft warehouse, expect $80,000–$240,000 for full replacement or $40,000–$100,000 for a coating system. Best Roofing Now provides free written commercial estimates with itemized line items.',
  },
  {
    question: 'How long do commercial roofing systems last?',
    answer:
      'Commercial roofing system lifespans in Charlotte NC: TPO 20–30 years, EPDM 25–40 years, PVC 25–35 years, modified bitumen 15–25 years, built-up roofing 20–30 years, standing seam metal 50+ years, silicone/acrylic restoration coatings 10–20 years (and recoatable). All systems are backed by manufacturer NDL (no-dollar-limit) warranties when installed by an authorized contractor like Best Roofing Now.',
  },
  {
    question: 'Do you offer commercial roof maintenance contracts?',
    answer:
      'Yes. Best Roofing Now offers preventive maintenance contracts for Charlotte commercial buildings — typically two inspections per year (spring + fall), drain and gutter clearing, seam and flashing inspection, photographic reporting, and minor repair allowance. Contracts protect manufacturer warranty validity and extend system life by 5–10 years. Pricing typically runs $0.05–$0.15 per square foot per year depending on system and access requirements.',
  },
  {
    question: 'Can you coat my existing flat roof instead of replacing it?',
    answer:
      'Often yes. Silicone and acrylic roof restoration coatings can extend the life of an existing TPO, EPDM, modified bitumen, or metal roof by 10–15 years at $2–$5 per square foot — typically 30–50% the cost of a full replacement. The roof must be structurally sound (no saturated insulation), and we run an infrared moisture survey before quoting. Coatings preserve the original substrate, defer capital expenditure, and can qualify as a maintenance expense for some businesses.',
  },
  {
    question: 'Are you certified to install manufacturer warranties?',
    answer:
      'Yes. Best Roofing Now is an authorized commercial installer for Carlisle Syntec, Johns Manville, Firestone-Holcim, GAF, and Mule-Hide commercial systems. Authorized status is required to issue manufacturer NDL (no-dollar-limit) warranties of 15–30 years. We also carry NC General Contractor License #87344, full general liability and workers comp insurance, and are BBB A+ accredited.',
  },
  {
    question: 'How quickly can you respond to a commercial roof emergency?',
    answer:
      'Best Roofing Now offers 24/7 emergency response for commercial roof leaks in Charlotte NC. Same-day emergency tarp and patch service is typically dispatched within 1–4 hours in Mecklenburg County and the I-77/I-85 corridor. We document everything for insurance, coordinate with property managers, and minimize tenant disruption. Emergency dispatch: (704) 605-6047.',
  },
  {
    question: 'Do you handle commercial roof insurance claims?',
    answer:
      'Yes. We provide full insurance claim assistance for commercial roofs in Charlotte NC: storm damage documentation with drone and ground photos, Xactimate-format estimates, meeting with adjusters on-site, supplement requests, and code-required upgrade documentation (NC commercial reroofing must meet current code). The building owner typically pays only the deductible.',
  },
];

export const metadata: Metadata = {
  title: 'Commercial Roofing Systems Charlotte NC',
  description: 'Expert installation of commercial roofing systems in Charlotte NC. TPO, EPDM, PVC, Built-Up, and Metal roofing for businesses and industrial facilities.',
  keywords: [
    'commercial roofing Charlotte',
    'TPO roofing',
    'EPDM rubber roofing',
    'PVC roofing',
    'flat roof commercial',
    'industrial roofing',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/commercial-systems`,
  },
  openGraph: {
    title: 'Commercial Roofing Systems | Best Roofing Now Charlotte',
    description: 'Professional commercial roofing installation and repair.',
    url: `${SITE_CONFIG.url}/commercial-systems`,
    type: 'website',
  },
};

export default function CommercialSystemsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Commercial Roofing Systems', url: `${SITE_CONFIG.url}/commercial-systems` },
        ]}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/commercial-systems`}
        pageName="Commercial Roofing Systems Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <WebPageSchema
        name="Commercial Roofing Systems Charlotte NC | TPO EPDM PVC Modified Bitumen | Best Roofing Now"
        url={`${SITE_CONFIG.url}/commercial-systems`}
        description="Commercial roofing systems in Charlotte NC: TPO, EPDM, PVC, modified bitumen, built-up, standing seam metal, and silicone/acrylic coatings. Carlisle, Johns Manville, Firestone-Holcim, GAF, Mule-Hide authorized installers with 15-30 year NDL warranties."
        primaryImage={IMAGES.commercial.flatRoof}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Commercial Roofing Systems', url: `${SITE_CONFIG.url}/commercial-systems` },
        ]}
      />
      <FeaturedSnippetListAnswerSchema
        question="What commercial roofing systems are available in Charlotte NC?"
        directAnswer="Charlotte NC commercial roofing systems span 7 main categories with NDL (no-dollar-limit) warranties of 15-30 years from authorized installers: (1) TPO single-ply membrane $5-$12/sq ft (most popular for new commercial); (2) EPDM rubber single-ply $4-$10/sq ft (60+ year track record, parapet-walled buildings); (3) PVC single-ply $7-$14/sq ft (chemical and grease resistance for restaurants, manufacturing); (4) modified bitumen torch-down or self-adhered $6-$12/sq ft (parapet walls, walkable surface); (5) built-up roofing tar-and-gravel $5-$10/sq ft (legacy systems still common on older buildings); (6) standing seam metal $9-$30/sq ft (50+ year lifespan); (7) silicone/acrylic restoration coatings $2-$5/sq ft (extends existing roof 10-15 years, defers capex). Best Roofing Now is authorized for Carlisle, Johns Manville, Firestone-Holcim, GAF, and Mule-Hide."
        items={[
          'TPO single-ply — $5-$12/sq ft installed; 60-mil reinforced standard; 20-30 yr NDL warranty',
          'EPDM rubber — $4-$10/sq ft installed; 60+ yr track record; ideal for parapet-walled buildings',
          'PVC single-ply — $7-$14/sq ft installed; chemical/grease resistance for restaurants and manufacturing',
          'Modified bitumen — $6-$12/sq ft installed; torch-down or self-adhered; walkable surface',
          'Built-up roofing — $5-$10/sq ft installed; legacy tar-and-gravel; common on older buildings',
          'Standing seam metal — $9-$30/sq ft installed; 24-26 ga steel, aluminum, zinc, copper; 50+ yr',
          'Silicone/acrylic restoration coatings — $2-$5/sq ft; extends existing roof 10-15 yr; defers capex',
          'Authorized installer — Carlisle, Johns Manville, Firestone-Holcim, GAF, Mule-Hide commercial systems',
        ]}
        pageUrl={`${SITE_CONFIG.url}/commercial-systems`}
      />
      <FreeInspectionOfferSchema />
      <FAQSchema faqs={commercialSystemsFAQs} />
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[{ label: 'Commercial Roofing Systems' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-10 h-10" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Commercial Roofing Systems
            </h1>
            <p className="speakable-intro text-xl text-white/90 mb-8">
              Protect your business investment with the right commercial roofing system. Best
              Roofing Now installs and services 7 commercial systems — TPO, EPDM, PVC, modified
              bitumen, built-up, standing seam metal, and silicone/acrylic restoration coatings —
              across Charlotte and the I-77, I-85, I-485, US-29, and Independence Boulevard
              corridors. Authorized installer for Carlisle, Johns Manville, Firestone-Holcim, GAF,
              and Mule-Hide with 15-30 year NDL (no-dollar-limit) warranties.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-accent hover:bg-accent-dark text-white"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Get Commercial Quote
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Commercial and industrial roofs face challenges that residential systems do not: standing water on flat surfaces, rooftop HVAC penetrations, foot traffic from maintenance crews, and strict energy code requirements. Best Roofing Now installs single ply membranes (TPO, EPDM, PVC), built up roofing, and standing seam metal systems for Charlotte area businesses ranging from small retail spaces to large warehouse facilities.
              </p>
              <p>
                Each system below is suited to different building types, budgets, and performance goals. Our commercial team will inspect your existing roof, evaluate drainage and insulation, and recommend the system that delivers the longest service life at the best value for your property. All commercial projects include manufacturer warranty registration and an optional preventive maintenance plan.
              </p>
              <p>
                Not sure which system fits your building? Start with how you use the space. Restaurants and facilities with grease or chemicals often benefit from PVC. Warehouses and big box retail frequently choose white TPO for energy savings. EPDM remains a proven choice when you want a durable membrane that is easy to service over time. If you want the longest lifespan with strong curb appeal, standing seam metal is hard to beat.
              </p>
              <p>
                During our assessment we review:
              </p>
              <ul>
                <li>Roof slope, drainage, and any ponding water risk</li>
                <li>Rooftop equipment, penetrations, and foot traffic needs</li>
                <li>Insulation and energy code requirements</li>
                <li>Warranty goals and long term maintenance planning</li>
              </ul>
              <p>
                If you need a fast estimate, visit our <Link href="/services/commercial-roofing">commercial roofing</Link> page or <Link href="/contact">contact us</Link> for a free assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Systems Grid */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMMERCIAL_SYSTEMS.map((system) => (
              <Link
                key={system.slug}
                href={`/commercial-systems/${system.slug}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition">
                  {system.name}
                </h2>
                <p className="text-gray text-sm mb-4">
                  {system.description.slice(0, 100)}...
                </p>
                <div className="flex items-center gap-2 text-sm text-primary/80 mb-4">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  <span>Lifespan: {system.lifespan}</span>
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Commercial Roofing Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-bold">System</th>
                  <th className="px-4 py-3 text-left font-bold">Lifespan</th>
                  <th className="px-4 py-3 text-left font-bold">Best For</th>
                  <th className="px-4 py-3 text-left font-bold">Key Benefit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-light transition">
                  <td className="px-4 py-3 font-semibold text-primary">TPO</td>
                  <td className="px-4 py-3 text-gray">20-30 years</td>
                  <td className="px-4 py-3 text-gray">Warehouses, retail</td>
                  <td className="px-4 py-3 text-gray">Energy efficiency</td>
                </tr>
                <tr className="hover:bg-light transition">
                  <td className="px-4 py-3 font-semibold text-primary">EPDM</td>
                  <td className="px-4 py-3 text-gray">25-30 years</td>
                  <td className="px-4 py-3 text-gray">Office buildings</td>
                  <td className="px-4 py-3 text-gray">Proven durability</td>
                </tr>
                <tr className="hover:bg-light transition">
                  <td className="px-4 py-3 font-semibold text-primary">PVC</td>
                  <td className="px-4 py-3 text-gray">20-30 years</td>
                  <td className="px-4 py-3 text-gray">Restaurants, labs</td>
                  <td className="px-4 py-3 text-gray">Chemical resistance</td>
                </tr>
                <tr className="hover:bg-light transition">
                  <td className="px-4 py-3 font-semibold text-primary">BUR</td>
                  <td className="px-4 py-3 text-gray">15-30 years</td>
                  <td className="px-4 py-3 text-gray">Large flat roofs</td>
                  <td className="px-4 py-3 text-gray">Multi-layer protection</td>
                </tr>
                <tr className="hover:bg-light transition">
                  <td className="px-4 py-3 font-semibold text-primary">Metal</td>
                  <td className="px-4 py-3 text-gray">40-70 years</td>
                  <td className="px-4 py-3 text-gray">All commercial</td>
                  <td className="px-4 py-3 text-gray">Longevity</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Commercial Experience Matters */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Why Commercial Experience Matters
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary text-lg mb-3">Minimal Business Disruption</h3>
                <p className="text-gray text-sm">
                  We understand that downtime costs money. Our commercial crews work
                  efficiently, often completing projects during off-hours to minimize
                  impact on your operations.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary text-lg mb-3">Safety Compliance</h3>
                <p className="text-gray text-sm">
                  Commercial projects require strict safety protocols. Our crews are
                  OSHA-trained and follow all safety regulations to protect your
                  employees and customers.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary text-lg mb-3">Proper Specifications</h3>
                <p className="text-gray text-sm">
                  Commercial roofs have unique requirements for insulation, drainage,
                  and equipment mounting. We ensure your system meets all building codes
                  and manufacturer specifications.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary text-lg mb-3">Preventive Maintenance</h3>
                <p className="text-gray text-sm">
                  We offer commercial maintenance programs to extend your roof&apos;s
                  lifespan and catch small issues before they become expensive problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Industries We Serve
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              'Office Buildings',
              'Retail Centers',
              'Warehouses',
              'Manufacturing',
              'Restaurants',
              'Healthcare',
              'Schools',
              'Churches',
              'Hotels',
              'Auto Dealers',
              'Apartments',
              'Government',
            ].map((industry, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" aria-hidden="true" />
                <span className="text-sm font-medium text-dark">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light" aria-labelledby="commercial-systems-faq">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-3">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2
                id="commercial-systems-faq"
                className="text-3xl md:text-4xl font-bold text-primary"
              >
                Commercial Roofing Systems FAQs
              </h2>
              <p className="text-gray-600 mt-2">
                Answers Charlotte NC property managers, owners, and facility managers ask before
                committing to a commercial roof project.
              </p>
            </div>
            <div className="space-y-4">
              {commercialSystemsFAQs.map((faq) => (
                <details
                  key={faq.question}
                  className="bg-white rounded-xl shadow-sm p-5 group"
                >
                  <summary className="font-bold text-dark cursor-pointer list-none flex items-start justify-between gap-4">
                    <span>{faq.question}</span>
                    <span
                      className="text-primary transition-transform group-open:rotate-45 text-2xl leading-none"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="text-gray-700 mt-3 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CitationFacts service="Commercial Roofing" city="Charlotte" state="NC" />

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Protect Your Business Investment
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free commercial roof assessment and quote. We&apos;ll recommend the
            best system for your building type and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-white text-accent hover:bg-light text-lg px-8"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact"
              className="btn bg-accent hover:bg-accent-dark text-white text-lg px-8"
            >
              Request Commercial Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
