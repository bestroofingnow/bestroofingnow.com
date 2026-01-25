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
  Droplets,
  Layers,
  Home,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Flat Roof Repair Charlotte NC | Commercial & Residential | Best Roofing Now',
  description:
    'Expert flat roof repair in Charlotte NC for commercial and residential properties. TPO, EPDM, PVC, and modified bitumen repairs. Licensed, insured, BBB A+ rated. Free estimates available.',
  keywords: [
    'flat roof repair charlotte nc',
    'flat roof replacement charlotte',
    'flat roof contractors charlotte nc',
    'tpo roof repair charlotte',
    'epdm roof repair charlotte nc',
    'commercial flat roof repair charlotte',
    'residential flat roof charlotte',
    'flat roof leak repair charlotte nc',
    'rubber roof repair charlotte',
    'flat roof coating charlotte nc',
    'modified bitumen repair charlotte',
    'flat roof specialists charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/flat-roof-repair-charlotte-nc`,
  },
  openGraph: {
    title: 'Flat Roof Repair Charlotte NC | Commercial & Residential | Best Roofing Now',
    description:
      'Expert flat roof repair for commercial and residential properties in Charlotte NC. TPO, EPDM, PVC repairs by licensed professionals. BBB A+ rated with free estimates.',
    url: `${SITE_CONFIG.url}/flat-roof-repair-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.flatRoof,
        width: 1200,
        height: 630,
        alt: 'Flat roof repair Charlotte NC - Best Roofing Now professional flat roof services',
      },
    ],
  },
};

// Flat roof services
const flatRoofServices = [
  {
    icon: Wrench,
    title: 'Flat Roof Leak Repair',
    description: 'Fast, effective repairs for ponding water, membrane damage, seam failures, and flashing issues.',
    href: '/services/flat-roof-repair',
  },
  {
    icon: Layers,
    title: 'TPO Roof Repair',
    description: 'Expert repair of thermoplastic polyolefin membranes including seam welding and puncture repair.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Shield,
    title: 'EPDM Rubber Roof Repair',
    description: 'Patch repairs, seam re-adhesion, and membrane replacement for synthetic rubber roofing systems.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Droplets,
    title: 'Roof Coatings',
    description: 'Extend your flat roof life 10-15 years with reflective silicone or acrylic roof coatings.',
    href: '/services/flat-roof-repair',
  },
  {
    icon: Building2,
    title: 'Complete Replacement',
    description: 'When repairs aren\'t enough, we provide full flat roof replacement with premium materials.',
    href: '/services/roof-replacement',
  },
  {
    icon: Clock,
    title: 'Emergency Repairs',
    description: '24/7 emergency flat roof repair services to protect your property from water damage.',
    href: '/services/emergency-roofing',
  },
];

// Common flat roof problems
const flatRoofProblems = [
  {
    title: 'Ponding Water',
    description: 'Water pooling on flat roofs can accelerate membrane deterioration and cause leaks.',
  },
  {
    title: 'Membrane Damage',
    description: 'Punctures, tears, and UV degradation can compromise your flat roof\'s waterproofing.',
  },
  {
    title: 'Seam Failures',
    description: 'Heat-welded or adhesive seams can separate, allowing water infiltration.',
  },
  {
    title: 'Flashing Issues',
    description: 'Failed flashing around penetrations and edges is a common leak source.',
  },
  {
    title: 'Blistering & Bubbling',
    description: 'Trapped moisture or air creates blisters that can rupture and leak.',
  },
  {
    title: 'Shrinkage & Cracking',
    description: 'Older membranes can shrink, pulling away from edges and creating cracks.',
  },
];

// Flat roof materials we work with
const flatRoofMaterials = [
  'TPO (Thermoplastic Polyolefin)',
  'EPDM (Rubber Roofing)',
  'PVC (Polyvinyl Chloride)',
  'Modified Bitumen',
  'Built-Up Roofing (BUR)',
  'Spray Polyurethane Foam',
];

// Why choose us for flat roof repair
const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Trusted by Charlotte property owners with an A+ Better Business Bureau rating.',
  },
  {
    icon: Star,
    title: 'Certified Installers',
    description: 'Factory-trained in TPO, EPDM, PVC, and modified bitumen repair techniques.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC contractor with comprehensive liability coverage.',
  },
  {
    icon: CheckCircle,
    title: 'All Flat Roof Types',
    description: 'We repair and replace all flat roofing systems, commercial and residential.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: `${SITE_CONFIG.roofsInstalled}+ roofing projects completed in the Charlotte area.`,
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency flat roof repairs when you need us most.',
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
  'Steele Creek',
  'Northlake',
  'Airport Area',
  'Freedom Drive',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Gastonia', href: '/locations/gastonia-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
  { name: 'Fort Mill, SC', href: '/locations/fort-mill-sc' },
];

// FAQs about flat roof repair
const faqs = [
  {
    question: 'How much does flat roof repair cost in Charlotte NC?',
    answer:
      'Flat roof repair costs in Charlotte typically range from $300-$2,000 depending on the type of repair needed. Minor patch repairs and seam fixes cost $300-$600, while more extensive repairs like membrane replacement or drainage corrections can run $1,000-$2,000. Roof coatings range from $2-5 per square foot. We provide free estimates with transparent, upfront pricing.',
  },
  {
    question: 'What causes flat roofs to leak?',
    answer:
      'The most common causes of flat roof leaks in Charlotte include: ponding water (standing water that doesn\'t drain within 48 hours), failed seams where membrane sheets meet, damaged flashing around penetrations like vents and HVAC units, membrane punctures from foot traffic or debris, and age-related deterioration from UV exposure. Our inspections identify the exact cause so we can provide lasting repairs.',
  },
  {
    question: 'Can you repair a flat roof or does it need replacement?',
    answer:
      'Many flat roof issues can be repaired rather than replaced. We always assess repair options first and only recommend replacement when it\'s truly necessary. Factors we consider include the roof\'s age, extent of damage, overall membrane condition, and repair history. A flat roof nearing the end of its lifespan with multiple problems may benefit more from replacement, but localized damage on a sound roof is typically repairable.',
  },
  {
    question: 'How long do flat roofs last in Charlotte?',
    answer:
      'Flat roof lifespan depends on the material and maintenance. In Charlotte\'s climate, TPO and PVC roofs typically last 20-30 years, EPDM rubber roofs 25-30 years, modified bitumen 15-20 years, and built-up roofing 15-30 years. Regular maintenance and addressing repairs promptly can extend these lifespans. Roof coatings can add 10-15 years to an aging flat roof.',
  },
  {
    question: 'What is the best material for flat roofs in Charlotte NC?',
    answer:
      'For Charlotte\'s hot, humid climate, we often recommend TPO (Thermoplastic Polyolefin) or PVC membranes. Their white reflective surfaces significantly reduce cooling costs - especially important given Charlotte\'s hot summers. TPO is typically more cost-effective, while PVC offers superior chemical resistance. EPDM is an excellent, durable option for properties where reflectivity is less critical.',
  },
  {
    question: 'Do you repair residential flat roofs?',
    answer:
      'Yes, we repair and replace both commercial and residential flat roofs in Charlotte. Many homes have flat roof sections over additions, porches, or modern architectural designs. We\'re experienced with all flat roof materials and can match repairs to your existing system. The same quality materials and workmanship we provide for commercial properties are available for residential projects.',
  },
  {
    question: 'What are roof coatings and when should I consider them?',
    answer:
      'Roof coatings are liquid-applied membranes that create a seamless, reflective, waterproof layer over your existing flat roof. They\'re an excellent option when your roof membrane is aging but still structurally sound. Coatings can extend your roof life 10-15 years at a fraction of replacement cost, reduce energy bills with reflective properties, and eliminate minor leaks and seam issues.',
  },
  {
    question: 'How quickly can you respond to flat roof emergencies?',
    answer:
      'We offer 24/7 emergency flat roof repair services in Charlotte and surrounding areas. For active leaks and storm damage, we typically respond within 1-4 hours. Our emergency team can provide temporary repairs or tarping to stop water intrusion, followed by permanent repairs once conditions allow. Don\'t wait with a leaking flat roof - water damage compounds quickly.',
  },
];

export default function FlatRoofRepairCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Flat Roof Repair Charlotte NC', url: `${SITE_CONFIG.url}/flat-roof-repair-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.flatRoof}
            alt="Flat roof repair Charlotte NC - Best Roofing Now professional flat roof services"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Layers className="w-4 h-4" />
              <span className="text-sm font-semibold">Commercial & Residential</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Flat Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Expert flat roof repair for commercial and residential properties
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now specializes in flat roof repair and replacement for Charlotte businesses and homes.
              From TPO and EPDM repairs to complete re-roofing, our certified team delivers lasting solutions
              for all flat roof systems. Licensed, insured, and available 24/7 for emergencies.
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
                <Clock className="w-5 h-5 text-accent-light" />
                24/7 Emergency Service
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Flat Roof Services in Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              From leak repairs to complete replacements, we offer comprehensive flat roof solutions
              for commercial and residential properties throughout Charlotte.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flatRoofServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray text-sm mb-3">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Common Flat Roof Problems We Fix
              </h2>
              <p className="text-gray text-lg mb-8">
                Flat roofs require specialized knowledge to repair properly. Our experienced team
                diagnoses and fixes all common flat roof issues.
              </p>
              <div className="space-y-4">
                {flatRoofProblems.map((problem) => (
                  <div key={problem.title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-dark">{problem.title}</h3>
                      <p className="text-gray text-sm">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.beforeAfter.commercialFlat.after}
                alt="Completed flat roof repair in Charlotte NC"
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

      {/* Materials Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Flat Roof Materials We Work With
            </h2>
            <p className="text-gray text-lg">
              Our team is certified and experienced in all major flat roofing systems.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {flatRoofMaterials.map((material) => (
              <span
                key={material}
                className="inline-block bg-light px-5 py-3 rounded-full text-dark font-medium border border-gray-200"
              >
                {material}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Charlotte Property Owners Choose Us
            </h2>
            <p className="text-gray text-lg">
              When your flat roof needs repair, you need a contractor with specialized expertise
              and a commitment to quality.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="p-6 bg-white rounded-xl shadow-sm">
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

      {/* Commercial vs Residential */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Flat Roof Solutions for Every Property
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-light rounded-xl p-8">
              <Building2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-dark mb-4">Commercial Flat Roofs</h3>
              <p className="text-gray mb-4">
                We serve businesses of all sizes throughout Charlotte including warehouses,
                retail centers, office buildings, restaurants, and industrial facilities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Minimal disruption to operations
                </li>
                <li className="flex items-center gap-2 text-gray">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Work around business hours
                </li>
                <li className="flex items-center gap-2 text-gray">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Maintenance programs available
                </li>
              </ul>
            </div>
            <div className="bg-light rounded-xl p-8">
              <Home className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-dark mb-4">Residential Flat Roofs</h3>
              <p className="text-gray mb-4">
                Many Charlotte homes feature flat roof sections on additions, porches,
                garages, or modern architectural designs. We handle them all.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Match existing roofing materials
                </li>
                <li className="flex items-center gap-2 text-gray">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Preserve home aesthetics
                </li>
                <li className="flex items-center gap-2 text-gray">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Same quality as commercial work
                </li>
              </ul>
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
                Need Flat Roof Repair in Charlotte?
              </h2>
              <p className="text-white/90">
                Get a free estimate from our flat roof specialists. We'll diagnose the problem and provide honest recommendations.
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
                Free Estimate
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

      {/* Service Areas Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Flat Roof Repair Across Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              We repair flat roofs for commercial and residential properties throughout the Greater Charlotte area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Areas */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Business Districts</h3>
              <div className="flex flex-wrap gap-2">
                {charlotteAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby Cities */}
            <div className="bg-light rounded-xl p-6">
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
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Flat Roof Repair FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about flat roof repair and replacement in Charlotte NC.
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

      {/* Final CTA */}
      <CTASection
        title="Ready to Fix Your Flat Roof?"
        subtitle="Get a free, no-obligation estimate from Charlotte's flat roof specialists. We'll diagnose the problem, explain your options, and provide honest recommendations tailored to your property and budget."
      />
    </>
  );
}
