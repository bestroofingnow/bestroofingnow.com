import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle,
  Phone,
  Calendar,
  Shield,
  Star,
  ArrowRight,
  HelpCircle,
  Award,
  Users,
  Clock,
  Wrench,
  Zap,
  Building2,
  Factory,
  Warehouse,
  ThermometerSun,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'EPDM Roofing Charlotte NC | Rubber Roof Installation',
  description:
    'Expert EPDM rubber roof installation in Charlotte NC. Durable, low-maintenance EPDM roofing for commercial and industrial buildings. BBB A+ rated. Free estimates.',
  keywords: [
    'epdm roofing charlotte nc',
    'rubber roof charlotte nc',
    'epdm rubber roof installation',
    'commercial rubber roofing charlotte',
    'epdm roofing contractors charlotte',
    'rubber roof repair charlotte nc',
    'flat rubber roof charlotte',
    'industrial roofing charlotte nc',
    'epdm membrane roofing charlotte',
    'black rubber roof charlotte',
    'single ply roofing charlotte',
    'commercial flat roof charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/epdm-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'EPDM Roofing Charlotte NC | Rubber Roof Installation',
    description:
      'Professional EPDM rubber roof installation for Charlotte commercial and industrial buildings. Proven durability, easy maintenance, and 30+ year lifespan.',
    url: `${SITE_CONFIG.url}/epdm-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.flatRoof,
        width: 1200,
        height: 630,
        alt: 'EPDM rubber roof installation Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Benefits of EPDM roofing
const benefits = [
  {
    icon: Clock,
    title: 'Proven 30+ Year Lifespan',
    description: 'EPDM has the longest track record of any single-ply membrane, with many installations lasting 30-50 years.',
  },
  {
    icon: ThermometerSun,
    title: 'Superior UV Resistance',
    description: 'Exceptional resistance to UV radiation and ozone - no chalking, cracking, or brittleness over time.',
  },
  {
    icon: Wrench,
    title: 'Easy to Repair',
    description: 'Simple patch repairs can be done quickly and affordably without specialized equipment.',
  },
  {
    icon: Zap,
    title: 'Flexible in All Temps',
    description: 'Maintains flexibility from -40°F to 300°F, handling Charlotte\'s temperature swings with ease.',
  },
  {
    icon: Shield,
    title: 'Hail Resistant',
    description: 'The rubber membrane absorbs impact energy, providing excellent protection against hail damage.',
  },
  {
    icon: Award,
    title: 'Environmentally Friendly',
    description: '100% recyclable material with low environmental impact during manufacturing and installation.',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Building2,
    title: 'EPDM Installation Experts',
    description: 'Our crews have extensive experience with both fully-adhered and mechanically-attached EPDM systems.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Charlotte building owners.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability insurance.',
  },
  {
    icon: Users,
    title: 'Manufacturer Certified',
    description: 'Certified installers for Carlisle, Firestone, Johns Manville, and other EPDM manufacturers.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'EPDM installs quickly - most commercial roofs completed in 2-5 days.',
  },
];

// Commercial applications
const applications = [
  {
    icon: Factory,
    title: 'Industrial Facilities',
    description: 'The #1 choice for warehouses and manufacturing plants due to proven reliability.',
  },
  {
    icon: Warehouse,
    title: 'Large Warehouses',
    description: 'Cost-effective coverage for large roof areas with excellent long-term performance.',
  },
  {
    icon: Building2,
    title: 'Commercial Buildings',
    description: 'Reliable protection for offices, retail, and multi-tenant commercial properties.',
  },
];

// EPDM installation methods
const installationMethods = [
  {
    title: 'Fully-Adhered',
    description: 'Membrane is glued directly to the substrate for maximum wind resistance and durability.',
    pros: ['Best wind resistance', 'Smooth appearance', 'Ideal for high-wind areas'],
  },
  {
    title: 'Mechanically-Attached',
    description: 'Membrane is secured with plates and fasteners, then seams are taped or glued.',
    pros: ['Lower cost', 'Faster installation', 'Good for large roofs'],
  },
  {
    title: 'Ballasted',
    description: 'Loose-laid membrane held in place by river rock or pavers.',
    pros: ['Lowest cost', 'Easy repairs', 'Added protection'],
  },
];

// Comparison with other flat roof systems
const comparison = [
  { feature: 'Lifespan', epdm: '30-50 years', tpo: '20-30 years', pvc: '25-30 years' },
  { feature: 'Track Record', epdm: '60+ years', tpo: '30+ years', pvc: '50+ years' },
  { feature: 'UV Resistance', epdm: 'Excellent', tpo: 'Excellent', pvc: 'Excellent' },
  { feature: 'Repair Ease', epdm: 'Very Easy', tpo: 'Moderate', pvc: 'Moderate' },
  { feature: 'Cost per Sq Ft', epdm: '$4-8', tpo: '$4-8', pvc: '$6-12' },
  { feature: 'Flexibility', epdm: 'Excellent', tpo: 'Good', pvc: 'Good' },
];

// FAQs
const faqs = [
  {
    question: 'What is EPDM roofing and what is it made of?',
    answer:
      'EPDM (Ethylene Propylene Diene Monomer) is a synthetic rubber roofing membrane used primarily for low-slope and flat roofs. Made from a durable rubber compound, EPDM has been used in commercial roofing since the 1960s and has the longest track record of any single-ply membrane. Its rubber composition gives it exceptional flexibility and weather resistance.',
  },
  {
    question: 'How much does EPDM roofing cost in Charlotte NC?',
    answer:
      'EPDM roofing in Charlotte typically costs $4-8 per square foot installed, depending on roof size, membrane thickness (45 or 60 mil), and installation method. For a 10,000 sq ft commercial roof, expect $40,000-$80,000. EPDM is one of the most cost-effective flat roofing options, especially for large roof areas.',
  },
  {
    question: 'How long does an EPDM rubber roof last?',
    answer:
      'EPDM roofs routinely last 30-50 years when properly installed and maintained. Many original EPDM installations from the 1970s and 1980s are still performing today. The key to longevity is quality installation, proper seam adhesion, and regular maintenance to address any issues before they become major problems.',
  },
  {
    question: 'Is EPDM or TPO better for Charlotte commercial buildings?',
    answer:
      'Both are excellent choices. EPDM offers a longer track record, easier repairs, and proven 30-50 year longevity. TPO offers better energy efficiency with its white surface. For buildings where energy costs are a major concern, TPO may be better. For maximum proven durability and the lowest lifecycle cost, EPDM is often the choice. We can help you decide based on your specific building and needs.',
  },
  {
    question: 'Can EPDM roofing be installed over an existing roof?',
    answer:
      'Yes, EPDM can often be installed over existing roofing materials if the substrate is sound and local codes permit. This "recover" approach saves on tear-off costs. However, we always inspect the existing roof thoroughly to ensure there are no underlying issues that need to be addressed first.',
  },
  {
    question: 'How are EPDM roof seams sealed?',
    answer:
      'EPDM seams are typically sealed using either specially formulated adhesives or seam tape. Both methods create strong, watertight bonds when properly applied. At Best Roofing Now, we use premium seam products and proven techniques to ensure your EPDM seams perform for decades.',
  },
  {
    question: 'Is EPDM roofing good for Charlotte\'s climate?',
    answer:
      'Absolutely. EPDM\'s flexibility allows it to expand and contract with Charlotte\'s temperature changes without cracking or splitting. Its excellent UV resistance handles our intense summer sun, and the rubber membrane shrugs off our occasional hail storms. EPDM has been protecting Charlotte buildings successfully for decades.',
  },
  {
    question: 'What maintenance does an EPDM roof require?',
    answer:
      'EPDM requires minimal maintenance - typically just semi-annual inspections to check seams and flashings, clearing debris, and ensuring drains are clear. Any minor issues can be patched easily. This low maintenance requirement is one of EPDM\'s major advantages, keeping your long-term costs low.',
  },
];

export default function EPDMRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'EPDM Roofing Charlotte NC', url: `${SITE_CONFIG.url}/epdm-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.flatRoof}
            alt="EPDM rubber roof installation Charlotte NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Factory className="w-4 h-4" />
              <span className="text-sm font-semibold">Commercial & Industrial EPDM Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              EPDM Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Durable rubber roof installation with a 30-50 year lifespan
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now specializes in EPDM rubber roof installation for commercial and
              industrial buildings throughout Charlotte. With 60+ years of proven performance,
              EPDM delivers unmatched reliability and the lowest lifecycle costs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Your Free Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-400" />
                30-50 Year Lifespan
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose EPDM Rubber Roofing?
            </h2>
            <p className="text-gray text-lg">
              EPDM has protected commercial buildings for over 60 years. Its proven track record
              and exceptional durability make it the trusted choice for building owners.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
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

      {/* Applications Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Ideal for Commercial & Industrial Buildings
              </h2>
              <p className="text-gray text-lg mb-8">
                EPDM's proven reliability and low maintenance make it the preferred choice for
                large commercial and industrial roofs where performance matters most.
              </p>
              <div className="space-y-6">
                {applications.map((app) => (
                  <div key={app.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <app.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">{app.title}</h3>
                      <p className="text-gray">{app.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-dark mb-4">Also Ideal For:</h3>
                <div className="flex flex-wrap gap-2">
                  {['Distribution Centers', 'Manufacturing Plants', 'Schools', 'Municipal Buildings', 'Healthcare Facilities', 'Retail Centers'].map((item) => (
                    <span
                      key={item}
                      className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.commercial.warehouse}
                alt="EPDM rubber roofing for industrial buildings in Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Installation Methods Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              EPDM Installation Methods
            </h2>
            <p className="text-gray text-lg">
              We offer all three EPDM installation methods to match your building's needs and budget.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {installationMethods.map((method) => (
              <div key={method.title} className="bg-light rounded-xl p-6">
                <h3 className="text-xl font-bold text-dark mb-3">{method.title}</h3>
                <p className="text-gray mb-4">{method.description}</p>
                <h4 className="font-semibold text-dark mb-2">Best For:</h4>
                <ul className="space-y-2">
                  {method.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray text-sm">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              EPDM vs Other Flat Roof Systems
            </h2>
            <p className="text-gray text-lg">
              See how EPDM compares to other commercial roofing options.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-md">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">EPDM</th>
                  <th className="px-6 py-4 text-center font-semibold">TPO</th>
                  <th className="px-6 py-4 text-center font-semibold">PVC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparison.map((row) => (
                  <tr key={row.feature}>
                    <td className="px-6 py-4 font-medium text-dark">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-primary font-semibold">{row.epdm}</td>
                    <td className="px-6 py-4 text-center text-gray">{row.tpo}</td>
                    <td className="px-6 py-4 text-center text-gray">{row.pvc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Charlotte Building Owners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                EPDM installation requires experienced crews who understand proper seam adhesion
                and flashing details. Our certified installers deliver quality that lasts decades.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                      <p className="text-gray text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.commercial.office}
                alt="Best Roofing Now - Professional EPDM roofing installation in Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-dark">5.0 Rating</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.googleReviewCount}+ Google Reviews</p>
                  </div>
                </div>
              </div>
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
                Need an EPDM Roof Estimate?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate for your Charlotte commercial or industrial building.
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
                EPDM Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about EPDM rubber roofing in Charlotte NC.
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

      {/* Related Services */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Related Commercial Roofing Services
            </h2>
            <p className="text-gray text-lg">
              Explore our full range of commercial roofing services in Charlotte.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/tpo-roofing-charlotte-nc"
              className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                TPO Roofing
              </h3>
              <p className="text-gray text-sm mb-3">
                Energy-efficient white membrane roofing for commercial buildings.
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/services/commercial-roofing"
              className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                All Commercial Roofing
              </h3>
              <p className="text-gray text-sm mb-3">
                Complete commercial roofing solutions for Charlotte businesses.
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/services/flat-roof-repair"
              className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                Flat Roof Repair
              </h3>
              <p className="text-gray text-sm mb-3">
                Expert repairs for existing EPDM and other flat roof systems.
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Get a Free EPDM Roofing Estimate"
        subtitle="Protect your commercial investment with proven EPDM rubber roofing. Contact Charlotte's trusted commercial roofing experts for a free consultation and detailed estimate."
      />
    </>
  );
}
