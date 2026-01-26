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
  Building2,
  MapPin,
  Wrench,
  Layers,
  Home,
  Thermometer,
  DollarSign,
  Droplets,
  Factory,
  Warehouse,
  RefreshCw,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { TURNER_NOTES } from '@/lib/turner-family';

export const metadata: Metadata = {
  title: 'Flat Roof Contractors Charlotte NC | Commercial & Residential | Best Roofing Now',
  description:
    'Expert flat roof contractors in Charlotte NC for commercial and residential properties. TPO, EPDM, PVC, and modified bitumen installation, repair, and replacement. BBB A+ rated. Free estimates.',
  keywords: [
    'flat roof contractors charlotte nc',
    'flat roof installation charlotte',
    'commercial flat roof charlotte nc',
    'residential flat roof contractors charlotte',
    'tpo roofing contractors charlotte nc',
    'epdm roofing charlotte',
    'pvc flat roof charlotte nc',
    'modified bitumen roofing charlotte',
    'flat roof replacement charlotte nc',
    'flat roof repair charlotte',
    'flat roof specialists charlotte nc',
    'low slope roofing contractors charlotte',
    'flat roof maintenance charlotte nc',
    'commercial roofing contractors charlotte',
    'ponding water repair charlotte nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/flat-roof-contractors-charlotte-nc`,
  },
  openGraph: {
    title: 'Flat Roof Contractors Charlotte NC | Commercial & Residential | Best Roofing Now',
    description:
      'BBB A+ rated flat roof contractors serving Charlotte NC. Expert TPO, EPDM, PVC installation and repair for commercial and residential properties. Free estimates available.',
    url: `${SITE_CONFIG.url}/flat-roof-contractors-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.flatRoof,
        width: 1200,
        height: 630,
        alt: 'Flat roof contractors Charlotte NC - Best Roofing Now commercial flat roof installation',
      },
    ],
  },
};

// Flat roofing systems we install
const flatRoofSystems = [
  {
    icon: Thermometer,
    title: 'TPO Roofing',
    fullName: 'Thermoplastic Polyolefin',
    description: 'Energy-efficient white membrane that reflects heat and reduces cooling costs. Hot-air welded seams for superior leak protection.',
    lifespan: '20-30 years',
    bestFor: 'Commercial buildings, warehouses, energy-conscious property owners',
    cost: '$4-8/sq ft',
  },
  {
    icon: Shield,
    title: 'EPDM Roofing',
    fullName: 'Ethylene Propylene Diene Monomer',
    description: 'Durable synthetic rubber membrane known for exceptional weather resistance and longevity. Excellent for large commercial applications.',
    lifespan: '25-30 years',
    bestFor: 'Large commercial buildings, industrial facilities',
    cost: '$4-8/sq ft',
  },
  {
    icon: Layers,
    title: 'PVC Roofing',
    fullName: 'Polyvinyl Chloride',
    description: 'Premium membrane with superior chemical resistance. Ideal for restaurants, kitchens, and facilities with grease or chemical exposure.',
    lifespan: '25-30 years',
    bestFor: 'Restaurants, medical facilities, chemical environments',
    cost: '$6-12/sq ft',
  },
  {
    icon: Wrench,
    title: 'Modified Bitumen',
    fullName: 'Modified Bitumen Roofing',
    description: 'Multi-layer asphalt system with added polymers for flexibility and durability. Great for buildings with foot traffic.',
    lifespan: '15-20 years',
    bestFor: 'Rooftop equipment areas, buildings with regular roof access',
    cost: '$4-7/sq ft',
  },
];

// TPO vs EPDM vs PVC comparison
const systemComparison = [
  { feature: 'Lifespan', tpo: '20-30 years', epdm: '25-30 years', pvc: '25-30 years' },
  { feature: 'Energy Efficiency', tpo: 'Excellent', epdm: 'Good', pvc: 'Excellent' },
  { feature: 'Chemical Resistance', tpo: 'Very Good', epdm: 'Moderate', pvc: 'Excellent' },
  { feature: 'Cost (per sq ft)', tpo: '$4-8', epdm: '$4-8', pvc: '$6-12' },
  { feature: 'Seam Strength', tpo: 'Excellent', epdm: 'Good', pvc: 'Excellent' },
  { feature: 'UV Resistance', tpo: 'Excellent', epdm: 'Excellent', pvc: 'Excellent' },
  { feature: 'Puncture Resistance', tpo: 'Good', epdm: 'Very Good', pvc: 'Good' },
  { feature: 'Fire Resistance', tpo: 'Good', epdm: 'Good', pvc: 'Excellent' },
];

// Commercial flat roof services
const commercialServices = [
  {
    icon: Building2,
    title: 'Office Buildings',
    description: 'Energy-efficient flat roof systems for professional office spaces and corporate complexes.',
  },
  {
    icon: Warehouse,
    title: 'Warehouses',
    description: 'Large-scale flat roof installation and repair for distribution centers and storage facilities.',
  },
  {
    icon: Factory,
    title: 'Industrial Facilities',
    description: 'Chemical-resistant roofing solutions for manufacturing plants and industrial properties.',
  },
  {
    icon: Building2,
    title: 'Retail Centers',
    description: 'Reliable flat roof systems for shopping centers, strip malls, and standalone retail buildings.',
  },
];

// Residential flat roof applications
const residentialApplications = [
  {
    title: 'Modern Architectural Homes',
    description: 'Contemporary homes designed with flat or low-slope rooflines for sleek, modern aesthetics.',
  },
  {
    title: 'Room Additions',
    description: 'Flat roof sections over additions, sunrooms, and extended living spaces.',
  },
  {
    title: 'Garage Roofs',
    description: 'Standalone or attached garages with flat roof construction.',
  },
  {
    title: 'Porch & Patio Covers',
    description: 'Covered outdoor spaces requiring weatherproof flat roofing.',
  },
  {
    title: 'Mid-Century Modern Homes',
    description: 'Charlotte has many mid-century homes with flat roof designs requiring specialized care.',
  },
];

// Common flat roof problems
const flatRoofProblems = [
  {
    title: 'Ponding Water',
    description: 'Water that doesn\'t drain within 48 hours accelerates membrane deterioration and increases leak risk.',
    solution: 'Proper drainage systems, tapered insulation, or roof crickets to redirect water.',
  },
  {
    title: 'Membrane Punctures',
    description: 'Foot traffic, dropped tools, or debris can puncture flat roof membranes.',
    solution: 'Walkway pads, regular inspections, and prompt patch repairs.',
  },
  {
    title: 'Seam Failures',
    description: 'Adhesive or welded seams can separate over time, creating leak points.',
    solution: 'Professional seam repair or re-welding using proper techniques.',
  },
  {
    title: 'Flashing Deterioration',
    description: 'Flashing around penetrations and edges fails over time, causing leaks.',
    solution: 'Regular flashing inspections and replacement when needed.',
  },
  {
    title: 'Blistering & Bubbling',
    description: 'Trapped moisture or air creates blisters that can rupture and leak.',
    solution: 'Professional blister repair and addressing underlying moisture issues.',
  },
  {
    title: 'Shrinkage & Cracking',
    description: 'Older membranes can shrink and crack, especially at edges and corners.',
    solution: 'Membrane replacement or roof coating application.',
  },
];

// Why choose us
const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Star,
    title: 'Certified Installers',
    description: 'Factory-trained in TPO, EPDM, PVC, and modified bitumen installation techniques.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC contractor with comprehensive liability and workers\' comp coverage.',
  },
  {
    icon: Users,
    title: `${SITE_CONFIG.roofsInstalled}+ Roofs Completed`,
    description: 'Proven track record with hundreds of successful roofing projects in Charlotte.',
  },
  {
    icon: Clock,
    title: 'Minimal Disruption',
    description: 'We work around your schedule to minimize impact on business operations.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Transparent quotes with no hidden fees. Financing options available.',
  },
];

// Charlotte areas served
const charlotteAreas = [
  'University City',
  'Uptown Charlotte',
  'South End',
  'NoDa',
  'Plaza Midwood',
  'Ballantyne',
  'Northlake',
  'Steele Creek',
  'Airport Area',
  'Freedom Drive Corridor',
  'Pineville',
  'Matthews',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Gastonia', href: '/locations/gastonia-nc' },
  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
  { name: 'Fort Mill, SC', href: '/locations/fort-mill-sc' },
];

// FAQs about flat roof contractors
const faqs = [
  {
    question: 'What types of flat roofing systems do you install in Charlotte?',
    answer:
      'We install all major flat roofing systems including TPO (Thermoplastic Polyolefin), EPDM (rubber roofing), PVC membranes, modified bitumen, and built-up roofing (BUR). Our team is factory-certified in each system type, allowing us to offer extended manufacturer warranties. We help you choose the best system based on your building type, budget, and performance requirements.',
  },
  {
    question: 'How much does a flat roof cost in Charlotte NC?',
    answer:
      'Flat roof costs in Charlotte typically range from $4 to $12 per square foot installed, depending on the material and project complexity. TPO and EPDM generally cost $4-8 per sq ft, while PVC runs $6-12 per sq ft. For a 2,000 sq ft flat roof, expect $8,000-$24,000. Commercial projects often achieve better per-square-foot pricing due to scale. We provide free, detailed estimates for accurate pricing.',
  },
  {
    question: 'What is the best flat roof material for Charlotte\'s climate?',
    answer:
      'For Charlotte\'s hot, humid summers and occasional severe weather, we typically recommend TPO or PVC roofing. TPO\'s white reflective surface can reduce cooling costs by 10-30% during summer while handling temperature fluctuations well. PVC offers superior chemical resistance - important for restaurants or facilities with HVAC equipment. EPDM is excellent for larger buildings where its durability and cost-effectiveness shine.',
  },
  {
    question: 'How long does a flat roof last?',
    answer:
      'With proper installation and maintenance, flat roof lifespans in Charlotte are: TPO 20-30 years, EPDM 25-30 years, PVC 25-30 years, and modified bitumen 15-20 years. Key factors affecting lifespan include installation quality, membrane thickness, regular maintenance, and addressing repairs promptly. Roof coatings can extend the life of an aging flat roof by 10-15 years.',
  },
  {
    question: 'Do you install flat roofs on residential homes?',
    answer:
      'Absolutely! We install flat roofs on residential properties including modern architectural homes, room additions, garage roofs, and covered patios. Charlotte has many mid-century modern homes and contemporary designs featuring flat or low-slope roofs. We use the same premium materials for residential projects as we do for commercial, ensuring your home gets top-quality protection.',
  },
  {
    question: 'What causes ponding water on flat roofs and how do you fix it?',
    answer:
      'Ponding water (water that doesn\'t drain within 48 hours) occurs due to poor drainage design, sagging structure, clogged drains, or settling over time. We fix ponding issues by installing tapered insulation systems that create slope for drainage, adding roof crickets to redirect water, improving or adding drains, and ensuring proper scupper maintenance. Left untreated, ponding accelerates membrane deterioration and causes leaks.',
  },
  {
    question: 'How often should flat roofs be inspected?',
    answer:
      'We recommend inspecting flat roofs twice yearly (spring and fall) plus after any severe weather event. Regular inspections catch small problems before they become expensive repairs. Our inspection checklist includes membrane condition, seam integrity, flashing, drainage systems, penetration seals, and overall structural condition. Many commercial clients use our maintenance programs for scheduled bi-annual inspections.',
  },
  {
    question: 'Can you repair a flat roof or does it need full replacement?',
    answer:
      'Many flat roof problems can be repaired rather than requiring full replacement. We always assess repair options first. Localized membrane damage, seam failures, flashing issues, and small leaks are typically repairable. We recommend replacement when the membrane has widespread deterioration, multiple problem areas, is beyond its expected lifespan, or when repair costs approach replacement cost. Our honest assessment helps you make the best decision.',
  },
  {
    question: 'What warranties do you offer on flat roof installations?',
    answer:
      'We offer comprehensive warranty coverage on all flat roof projects. Manufacturer warranties range from 10-30 years depending on the system and installation package. As certified installers, we can offer enhanced warranty packages including NDL (No Dollar Limit) coverage. We also provide our own workmanship warranty covering installation defects. Ask about warranty options during your free estimate.',
  },
  {
    question: 'How do TPO, EPDM, and PVC compare for commercial flat roofs?',
    answer:
      'TPO offers excellent energy efficiency with heat-welded seams at the best price point - ideal for most commercial buildings. EPDM provides proven durability and performs well in large-scale applications at similar cost. PVC delivers superior chemical resistance with heat-welded seams - best for restaurants, medical facilities, or buildings with roof-mounted equipment. We help you choose based on your specific building needs and budget.',
  },
];

export default function FlatRoofContractorsCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Flat Roof Contractors Charlotte NC', url: `${SITE_CONFIG.url}/flat-roof-contractors-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/flat-roof-contractors-charlotte-nc`}
        pageName="Flat Roof Contractors Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.flatRoof}
            alt="Flat roof contractors Charlotte NC - Best Roofing Now commercial flat roof installation"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Layers className="w-4 h-4" />
              <span className="text-sm font-semibold">TPO | EPDM | PVC | Modified Bitumen</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Flat Roof Contractors <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Expert flat roof installation, repair, and replacement for commercial and residential properties
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is Charlotte&apos;s trusted flat roof contractor specializing in TPO, EPDM, PVC, and
              modified bitumen systems. Whether you need a new flat roof, repairs for ponding water issues, or
              complete replacement, our certified team delivers quality workmanship backed by manufacturer warranties.
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
                <CheckCircle className="w-5 h-5 text-green-400" />
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Certified Installers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Flat Roof Systems Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Flat Roofing Systems We Install
            </h2>
            <p className="text-gray text-lg">
              We&apos;re certified installers for all major flat roof systems. Each material has unique advantages
              - we&apos;ll help you choose the best option for your property and budget.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {flatRoofSystems.map((system) => (
              <div
                key={system.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <system.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-dark text-xl mb-1">{system.title}</h3>
                    <p className="text-sm text-primary font-medium mb-2">{system.fullName}</p>
                    <p className="text-gray text-sm mb-4">{system.description}</p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="bg-white rounded-lg p-2">
                        <span className="block text-gray">Lifespan</span>
                        <span className="font-semibold text-dark">{system.lifespan}</span>
                      </div>
                      <div className="bg-white rounded-lg p-2 col-span-2">
                        <span className="block text-gray">Best For</span>
                        <span className="font-semibold text-dark text-xs">{system.bestFor}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Comparison Table */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              TPO vs EPDM vs PVC: Which is Right for You?
            </h2>
            <p className="text-gray text-lg">
              Compare the most popular flat roof systems to make an informed decision for your property.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">TPO</th>
                  <th className="px-6 py-4 text-center font-semibold">EPDM</th>
                  <th className="px-6 py-4 text-center font-semibold">PVC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {systemComparison.map((row) => (
                  <tr key={row.feature} className="hover:bg-light transition-colors">
                    <td className="px-6 py-4 font-medium text-dark">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-gray">{row.tpo}</td>
                    <td className="px-6 py-4 text-center text-gray">{row.epdm}</td>
                    <td className="px-6 py-4 text-center text-gray">{row.pvc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray text-sm mt-6">
            Not sure which system is best for your property? We&apos;ll provide a personalized recommendation
            during your free estimate.
          </p>
        </div>
      </section>

      {/* Commercial Flat Roof Services */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-semibold">Commercial Services</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Commercial Flat Roof Contractors Charlotte NC
              </h2>
              <p className="text-gray text-lg mb-6">
                Flat roofs dominate the commercial roofing landscape, and for good reason. They maximize usable
                space, simplify HVAC placement, and offer excellent long-term value. Best Roofing Now serves
                businesses of all sizes throughout Charlotte with expert flat roof installation, maintenance,
                and repair.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {commercialServices.map((service) => (
                  <div key={service.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark">{service.title}</h3>
                      <p className="text-gray text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {['Restaurants', 'Medical Facilities', 'Schools', 'Churches', 'Auto Dealerships', 'Hotels'].map((type) => (
                  <span
                    key={type}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.commercial.warehouse}
                alt="Commercial flat roof installation Charlotte NC"
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
                    <p className="text-sm text-gray">{SITE_CONFIG.googleReviewCount}+ Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Flat Roof Services */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <Image
                src={IMAGES.houses.modern1}
                alt="Modern residential flat roof Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Home className="w-4 h-4" />
                <span className="text-sm font-semibold">Residential Services</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Residential Flat Roof Contractors Charlotte NC
              </h2>
              <p className="text-gray text-lg mb-6">
                Modern home design increasingly features flat and low-slope roofs for their clean aesthetics
                and versatility. Charlotte&apos;s diverse housing stock includes many homes with flat roof sections
                that require specialized expertise. We bring the same quality materials and workmanship to
                residential projects that we deliver on commercial buildings.
              </p>
              <div className="space-y-4">
                {residentialApplications.map((app) => (
                  <div key={app.title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-dark">{app.title}</h3>
                      <p className="text-gray text-sm">{app.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flat Roof Problems Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Droplets className="w-4 h-4" />
              <span className="text-sm font-semibold">Expert Problem Solving</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Flat Roof Problems We Fix
            </h2>
            <p className="text-gray text-lg">
              Flat roofs face unique challenges. Our experienced team diagnoses and resolves all common
              flat roof issues, from ponding water to membrane failures.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flatRoofProblems.map((problem) => (
              <div key={problem.title} className="bg-light rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-2">{problem.title}</h3>
                <p className="text-gray text-sm mb-4">{problem.description}</p>
                <div className="bg-white rounded-lg p-3">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Our Solution</span>
                  <p className="text-sm text-dark mt-1">{problem.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Need a Flat Roof Contractor in Charlotte?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate for your flat roof project. We&apos;ll assess your property
                and recommend the best solution.
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

      {/* Flat Roof Lifespan & Maintenance */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <RefreshCw className="w-4 h-4" />
                <span className="text-sm font-semibold">Maintenance & Longevity</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Flat Roof Lifespan & Maintenance
              </h2>
              <p className="text-gray text-lg mb-6">
                A well-maintained flat roof provides decades of reliable protection. Understanding lifespan
                expectations and maintenance requirements helps you maximize your roofing investment.
              </p>

              <h3 className="font-bold text-dark text-xl mb-4">Expected Lifespans</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-xl p-4">
                  <span className="text-2xl font-bold text-primary">20-30</span>
                  <span className="text-gray text-sm block">years TPO</span>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <span className="text-2xl font-bold text-primary">25-30</span>
                  <span className="text-gray text-sm block">years EPDM</span>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <span className="text-2xl font-bold text-primary">25-30</span>
                  <span className="text-gray text-sm block">years PVC</span>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <span className="text-2xl font-bold text-primary">15-20</span>
                  <span className="text-gray text-sm block">years Mod Bit</span>
                </div>
              </div>

              <h3 className="font-bold text-dark text-xl mb-4">Maintenance Tips</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-gray">Inspect twice yearly (spring and fall) plus after storms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-gray">Keep drains and scuppers clear of debris</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-gray">Address ponding water issues promptly</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-gray">Use walkway pads for regular foot traffic areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-gray">Schedule professional inspections annually</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-dark text-xl mb-4">Flat Roof Warranties</h3>
              <div className="bg-white rounded-xl p-6 mb-6">
                <p className="text-gray mb-4">
                  As certified installers for major manufacturers, we offer comprehensive warranty options:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-dark">Manufacturer Warranties</span>
                      <p className="text-gray text-sm">10-30 years coverage on materials depending on system</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-dark">NDL (No Dollar Limit) Options</span>
                      <p className="text-gray text-sm">Premium warranty packages available for qualifying projects</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-dark">Workmanship Warranty</span>
                      <p className="text-gray text-sm">Our own warranty covering installation quality</p>
                    </div>
                  </li>
                </ul>
              </div>

              <h3 className="font-bold text-dark text-xl mb-4">Roof Coating Option</h3>
              <div className="bg-white rounded-xl p-6">
                <p className="text-gray mb-4">
                  Roof coatings can extend your flat roof&apos;s life by 10-15 years at a fraction of
                  replacement cost. Benefits include:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Seamless waterproof membrane
                  </li>
                  <li className="flex items-center gap-2 text-gray">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Reflective properties reduce energy costs
                  </li>
                  <li className="flex items-center gap-2 text-gray">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Seals minor cracks and seam issues
                  </li>
                  <li className="flex items-center gap-2 text-gray">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Fraction of replacement cost
                  </li>
                </ul>
                <Link
                  href="/roof-coating-charlotte-nc"
                  className="inline-flex items-center gap-2 text-primary font-semibold mt-4 hover:text-accent transition-colors"
                >
                  Learn More About Roof Coatings
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Charlotte Chooses Best Roofing Now for Flat Roofs
            </h2>
            <p className="text-gray text-lg">
              Flat roofing requires specialized expertise that not every contractor possesses. Here&apos;s why
              property owners throughout Charlotte trust us with their flat roof projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service City Links */}
      <ServiceCityLinks
        city="Charlotte"
        citySlug="charlotte-nc"
        title="Roofing Services in Charlotte NC"
        subtitle="Looking for a specific roofing service? We offer comprehensive solutions for every roofing need."
      />

      {/* Personal Note from James */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-primary/5 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-primary">JT</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark mb-2">A Note from James Turner, Owner</h3>
                <p className="text-gray italic mb-4">
                  &ldquo;{TURNER_NOTES.james.onHonesty}&rdquo;
                </p>
                <p className="text-gray">
                  Flat roofs are a specialty that requires real expertise - you can&apos;t just wing it. Too many
                  contractors treat flat roofs like they&apos;re the same as sloped roofs, and that&apos;s how problems
                  start. We&apos;ve invested in the training, certifications, and equipment to do flat roofs right.
                  Whether it&apos;s a 50,000 square foot warehouse or a small porch addition, we bring the same
                  attention to detail and quality materials.
                </p>
                <p className="text-primary font-semibold mt-4">
                  Call us at {SITE_CONFIG.phone} for an honest assessment of your flat roof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Flat Roof Contractors Across Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              We provide flat roof services for commercial and residential properties throughout the Greater Charlotte metro area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Areas */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Business Districts</h3>
              <div className="flex flex-wrap gap-2">
                {charlotteAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby Cities */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Nearby Cities We Serve</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {nearbyCities.map((city) => (
                  <Link
                    key={city.name}
                    href={city.href}
                    className="flex items-center gap-2 text-gray hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>{city.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Service Areas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Flat Roof Contractors FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about flat roofing in Charlotte NC.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-light rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Related Flat Roof Services
            </h2>
            <p className="text-gray text-lg">
              Explore our specialized flat roofing services throughout Charlotte.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/tpo-roofing-charlotte-nc"
              className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                TPO Roofing Charlotte NC
              </h3>
              <p className="text-gray text-sm mb-3">
                Energy-efficient TPO membrane roofing for commercial and industrial buildings.
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/epdm-roofing-charlotte-nc"
              className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                EPDM Roofing Charlotte NC
              </h3>
              <p className="text-gray text-sm mb-3">
                Durable rubber membrane roofing with exceptional weather resistance.
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/flat-roof-repair-charlotte-nc"
              className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                Flat Roof Repair Charlotte NC
              </h3>
              <p className="text-gray text-sm mb-3">
                Expert repairs for ponding water, membrane damage, and seam failures.
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/commercial-roofing-contractors-charlotte-nc"
              className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                Commercial Roofing Contractors
              </h3>
              <p className="text-gray text-sm mb-3">
                Full-service commercial roofing for Charlotte businesses and properties.
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/roof-coating-charlotte-nc"
              className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                Roof Coating Charlotte NC
              </h3>
              <p className="text-gray text-sm mb-3">
                Extend your flat roof life with reflective coating systems.
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/roof-maintenance-charlotte-nc"
              className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                Roof Maintenance Programs
              </h3>
              <p className="text-gray text-sm mb-3">
                Preventive maintenance to extend your flat roof&apos;s lifespan.
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Related Roofing Services
            </h2>
            <p className="text-gray">
              Explore our full range of flat roof and commercial roofing solutions in Charlotte NC.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/flat-roof-repair-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Flat Roof Repair
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/commercial-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Commercial Roofing Charlotte
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/warehouse-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Warehouse Roofing
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/industrial-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Industrial Roofing
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/commercial-roofing-contractors-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Commercial Roofing Contractors
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Talk About Your Flat Roof Project?"
        subtitle="Get a free, no-obligation estimate from Charlotte's trusted flat roof contractors. We'll assess your property, explain your options, and provide honest recommendations tailored to your needs and budget."
      />
    </>
  );
}
