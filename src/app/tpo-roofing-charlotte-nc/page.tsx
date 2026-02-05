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
  Thermometer,
  Zap,
  Building2,
  Factory,
  Warehouse,
  DollarSign,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'TPO Roofing Charlotte NC | Commercial Flat Roof Experts',
  description:
    'Expert TPO roofing installation in Charlotte NC. Energy-efficient TPO membrane roofing for commercial buildings. BBB A+ rated commercial roofing contractor. Free estimates.',
  keywords: [
    'tpo roofing charlotte nc',
    'tpo membrane roof charlotte',
    'commercial flat roof charlotte nc',
    'tpo roof installation charlotte',
    'commercial roofing contractor charlotte',
    'tpo roofing contractors charlotte nc',
    'flat roof repair charlotte',
    'tpo commercial roofing charlotte',
    'energy efficient commercial roof',
    'white roof membrane charlotte',
    'thermoplastic roofing charlotte nc',
    'single ply roofing charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/tpo-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'TPO Roofing Charlotte NC | Commercial Flat Roof Experts',
    description:
      'Professional TPO membrane roofing for Charlotte commercial buildings. Energy-efficient, durable, and cost-effective flat roof solutions from BBB A+ rated experts.',
    url: `${SITE_CONFIG.url}/tpo-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.flatRoof,
        width: 1200,
        height: 630,
        alt: 'TPO roofing installation Charlotte NC - Best Roofing Now commercial roofing',
      },
    ],
  },
};

// Benefits of TPO roofing
const benefits = [
  {
    icon: Thermometer,
    title: 'Superior Energy Efficiency',
    description: 'White TPO membrane reflects 80%+ of solar heat, reducing cooling costs by 10-30% in Charlotte summers.',
  },
  {
    icon: Shield,
    title: 'Chemical Resistant',
    description: 'Highly resistant to oils, grease, and chemical exposure - perfect for restaurants and industrial facilities.',
  },
  {
    icon: Zap,
    title: 'Hot-Air Welded Seams',
    description: 'Heat-welded seams are 3-4x stronger than the membrane itself, virtually eliminating leak points.',
  },
  {
    icon: Clock,
    title: '20-30 Year Lifespan',
    description: 'Properly installed TPO roofing delivers decades of reliable performance with minimal maintenance.',
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective',
    description: 'Lower material and installation costs than PVC with comparable performance makes TPO a smart investment.',
  },
  {
    icon: Award,
    title: 'Environmentally Friendly',
    description: '100% recyclable membrane with no chlorine content. Qualifies for LEED credits and energy rebates.',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Building2,
    title: 'Commercial Roofing Specialists',
    description: 'Our crews are specifically trained in TPO installation techniques for commercial applications.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Charlotte business owners.`,
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
    description: 'Certified installers for major TPO manufacturers including Carlisle, Firestone, and GAF.',
  },
  {
    icon: Clock,
    title: 'Minimal Disruption',
    description: 'We work around your business hours to minimize disruption to your operations.',
  },
];

// Commercial applications
const applications = [
  {
    icon: Building2,
    title: 'Office Buildings',
    description: 'Energy savings and modern aesthetics for professional office spaces.',
  },
  {
    icon: Warehouse,
    title: 'Warehouses',
    description: 'Large-scale installations with excellent durability and weather protection.',
  },
  {
    icon: Factory,
    title: 'Industrial Facilities',
    description: 'Chemical-resistant TPO handles industrial environments with ease.',
  },
];

// Comparison with other flat roof systems
const comparison = [
  { feature: 'Lifespan', tpo: '20-30 years', epdm: '20-25 years', pvc: '25-30 years' },
  { feature: 'Energy Efficiency', tpo: 'Excellent', epdm: 'Good', pvc: 'Excellent' },
  { feature: 'Chemical Resistance', tpo: 'Very Good', epdm: 'Moderate', pvc: 'Excellent' },
  { feature: 'Cost per Sq Ft', tpo: '$4-8', epdm: '$4-8', pvc: '$6-12' },
  { feature: 'Seam Strength', tpo: 'Excellent', epdm: 'Good', pvc: 'Excellent' },
  { feature: 'UV Resistance', tpo: 'Excellent', epdm: 'Excellent', pvc: 'Excellent' },
];

// FAQs
const faqs = [
  {
    question: 'What is TPO roofing and why is it popular for commercial buildings?',
    answer:
      'TPO (Thermoplastic Polyolefin) is a single-ply roofing membrane specifically designed for flat or low-slope commercial roofs. It\'s become the fastest-growing commercial roofing material because it combines excellent energy efficiency, durability, and cost-effectiveness. The white membrane reflects solar heat, reducing cooling costs by 10-30% - a major benefit for Charlotte businesses facing hot summers.',
  },
  {
    question: 'How much does TPO roofing cost in Charlotte NC?',
    answer:
      'TPO roofing in Charlotte typically costs $4-8 per square foot installed, depending on roof size, accessibility, membrane thickness, and insulation requirements. For a 10,000 sq ft commercial roof, expect $40,000-$80,000. While similar to EPDM in cost, TPO\'s energy savings often provide better long-term value for Charlotte businesses.',
  },
  {
    question: 'How long does a TPO roof last?',
    answer:
      'A properly installed TPO roof lasts 20-30 years with regular maintenance. The key factors affecting lifespan are quality of installation (especially seam welding), membrane thickness (60-80 mil recommended), and regular maintenance. Best Roofing Now uses premium materials and proven installation techniques to maximize your TPO roof\'s lifespan.',
  },
  {
    question: 'Is TPO better than EPDM for Charlotte commercial buildings?',
    answer:
      'For most Charlotte commercial buildings, TPO offers advantages over EPDM due to its superior energy efficiency. TPO\'s white reflective surface reduces cooling costs significantly during our hot summers, while EPDM\'s black surface absorbs heat. However, EPDM may be preferred for certain applications. We can help you choose the best system for your specific needs.',
  },
  {
    question: 'Can TPO roofing be installed over an existing roof?',
    answer:
      'In many cases, yes. TPO can be installed over existing roofing if the substrate is in good condition and local codes permit. This "recover" approach saves on tear-off costs and reduces landfill waste. However, we always recommend a thorough inspection to ensure the existing roof can support new materials and that any underlying issues are addressed.',
  },
  {
    question: 'How are TPO roof seams sealed?',
    answer:
      'TPO seams are hot-air welded using specialized equipment that fuses the membrane sheets together at 900-1000°F. This creates seams that are 3-4 times stronger than the membrane itself - far superior to glued or taped seams used with other materials. Properly welded TPO seams are essentially leak-proof.',
  },
  {
    question: 'What thickness of TPO membrane do you recommend?',
    answer:
      'We typically recommend 60-80 mil TPO membrane for commercial applications in Charlotte. While 45 mil is available, the thicker membranes offer significantly better puncture resistance, UV durability, and longer life. The modest additional cost pays for itself many times over in extended roof life.',
  },
  {
    question: 'Does TPO roofing qualify for energy rebates?',
    answer:
      'Yes! ENERGY STAR-rated white TPO roofing often qualifies for utility rebates, tax incentives, and LEED credits. The energy savings from reduced cooling costs can be substantial - many Charlotte businesses see 10-30% reductions in summer cooling expenses. We can provide documentation needed for rebate applications.',
  },
];

export default function TPORoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'TPO Roofing Charlotte NC', url: `${SITE_CONFIG.url}/tpo-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.flatRoof}
            alt="TPO roofing installation Charlotte NC - Best Roofing Now commercial roofing"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-semibold">Commercial Flat Roof Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              TPO Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Energy-efficient TPO membrane roofing for commercial buildings
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is Charlotte's trusted commercial roofing contractor for TPO installation.
              Our hot-air welded TPO systems deliver superior energy efficiency, durability, and
              long-term value for businesses throughout the Charlotte metro area.
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
                <Thermometer className="w-5 h-5 text-green-400" />
                10-30% Energy Savings
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
              Why TPO is Charlotte's Top Commercial Roofing Choice
            </h2>
            <p className="text-gray text-lg">
              TPO roofing offers the perfect combination of performance, efficiency, and value
              for Charlotte's commercial buildings.
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
                TPO for Every Commercial Application
              </h2>
              <p className="text-gray text-lg mb-8">
                From small retail spaces to large industrial complexes, TPO roofing adapts to
                any commercial building in Charlotte. Its versatility and performance make it
                ideal for a wide range of applications.
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
                  {['Retail Centers', 'Restaurants', 'Medical Facilities', 'Schools', 'Churches', 'Multi-Family Housing'].map((item) => (
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
                src={IMAGES.commercial.office}
                alt="TPO roofing for commercial buildings in Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              TPO vs Other Flat Roof Systems
            </h2>
            <p className="text-gray text-lg">
              See how TPO compares to other commercial roofing options for Charlotte businesses.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-light rounded-xl overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">TPO</th>
                  <th className="px-6 py-4 text-center font-semibold">EPDM</th>
                  <th className="px-6 py-4 text-center font-semibold">PVC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparison.map((row) => (
                  <tr key={row.feature}>
                    <td className="px-6 py-4 font-medium text-dark">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-primary font-semibold">{row.tpo}</td>
                    <td className="px-6 py-4 text-center text-gray">{row.epdm}</td>
                    <td className="px-6 py-4 text-center text-gray">{row.pvc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Charlotte Businesses Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Commercial roofing requires specialized expertise. Our certified TPO installers
                deliver precision installation that maximizes performance and longevity for
                your business.
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
                src={IMAGES.commercial.warehouse}
                alt="Best Roofing Now - Professional TPO roofing installation in Charlotte NC"
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
                Need a Commercial TPO Roof Estimate?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate for your Charlotte commercial building.
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

      {/* Installation Process Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our TPO Installation Process
            </h2>
            <p className="text-gray text-lg">
              Professional installation is critical for TPO performance. Here's how we ensure
              your roof is installed right.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Inspection', desc: 'Thorough assessment of existing roof and substrate condition.' },
              { step: '2', title: 'Preparation', desc: 'Clean substrate, repair defects, install insulation as needed.' },
              { step: '3', title: 'Installation', desc: 'Membrane rolled out and hot-air welded with precision equipment.' },
              { step: '4', title: 'Final Check', desc: 'Complete inspection, seam testing, and quality documentation.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray text-sm">{item.desc}</p>
              </div>
            ))}
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
                TPO Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about TPO roofing for Charlotte commercial buildings.
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
              href="/epdm-roofing-charlotte-nc"
              className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                EPDM Roofing
              </h3>
              <p className="text-gray text-sm mb-3">
                Durable rubber membrane roofing for commercial and industrial buildings.
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
                Expert repairs for existing flat roof systems of all types.
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="tpo-roofing-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/tpo-roofing-charlotte-nc`}
      />

      {/* Final CTA */}
      <CTASection
        title="Get a Free TPO Roofing Estimate for Your Business"
        subtitle="Protect your commercial investment with energy-efficient TPO roofing. Contact Charlotte's trusted commercial roofing experts for a free consultation and detailed estimate."
      />
    </>
  );
}
