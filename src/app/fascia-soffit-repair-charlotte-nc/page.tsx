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
  Home,
  AlertTriangle,
  Wrench,
  Wind,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Fascia & Soffit Repair Charlotte NC | Trim Specialists | Best Roofing Now',
  description:
    'Professional fascia and soffit repair in Charlotte NC. Fix wood rot, replace damaged trim, and install aluminum fascia and soffit. BBB A+ rated, licensed contractor. Free estimates available.',
  keywords: [
    'fascia soffit repair Charlotte NC',
    'fascia repair Charlotte',
    'soffit repair Charlotte NC',
    'wood rot repair Charlotte',
    'fascia replacement Charlotte NC',
    'soffit replacement Charlotte',
    'aluminum fascia Charlotte NC',
    'vinyl soffit Charlotte',
    'fascia board repair Charlotte',
    'soffit vent installation Charlotte NC',
    'rotted fascia repair Charlotte',
    'trim repair Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/fascia-soffit-repair-charlotte-nc`,
  },
  openGraph: {
    title: 'Fascia & Soffit Repair Charlotte NC | Trim Specialists | Best Roofing Now',
    description:
      'Fix damaged fascia and soffit with expert repair and replacement services in Charlotte NC. Aluminum, vinyl, and wood options. Free estimates.',
    url: `${SITE_CONFIG.url}/fascia-soffit-repair-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Professional fascia and soffit repair Charlotte NC',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Wrench,
    title: 'Fascia Board Repair',
    description: 'Repair or replace damaged fascia boards that support your gutters and protect roof edges.',
    features: ['Wood, aluminum, or composite', 'Custom color matching', 'Integrated gutter support'],
  },
  {
    icon: Wind,
    title: 'Soffit Repair & Venting',
    description: 'Restore soffit panels and ensure proper attic ventilation for energy efficiency.',
    features: ['Vented soffit panels', 'Proper airflow calculation', 'Pest prevention'],
  },
  {
    icon: Home,
    title: 'Wood Rot Remediation',
    description: 'Remove and replace rotted wood before it spreads to rafters and roof structure.',
    features: ['Complete rot removal', 'Structural repair', 'Preventive treatment'],
  },
  {
    icon: Shield,
    title: 'Aluminum Wrap & Replacement',
    description: 'Low-maintenance aluminum fascia and soffit that resist rot, pests, and weather damage.',
    features: ['30+ year lifespan', 'No painting required', 'Custom color options'],
  },
];

// Material options
const materials = [
  {
    name: 'Aluminum',
    benefits: ['Rot-proof', 'Low maintenance', 'Multiple colors', '30+ year lifespan'],
    description: 'The most popular choice for Charlotte homes. Never rots, never needs painting.',
  },
  {
    name: 'Vinyl',
    benefits: ['Affordable', 'Easy to clean', 'Good ventilation', 'Pest resistant'],
    description: 'Budget-friendly option that provides good performance in our climate.',
  },
  {
    name: 'Wood',
    benefits: ['Traditional look', 'Paintable', 'Can be stained', 'Authentic appearance'],
    description: 'Classic choice for historic homes. Requires regular maintenance.',
  },
  {
    name: 'Composite',
    benefits: ['Wood look', 'Rot resistant', 'Low maintenance', 'Premium durability'],
    description: 'Best of both worlds - wood appearance with synthetic durability.',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Award,
    title: 'Trim Specialists',
    description: 'Expert craftsmen who specialize in fascia, soffit, and trim installation.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Charlotte homeowners.`,
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
    title: 'Certified Team',
    description: 'Factory-trained installers for proper installation and warranty coverage.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Most fascia and soffit projects completed in 1-2 days.',
  },
];

// Signs of fascia/soffit problems
const problemSigns = [
  'Peeling or flaking paint on fascia boards',
  'Visible wood rot or soft spots when touched',
  'Sagging or warped fascia boards',
  'Gutters pulling away from the house',
  'Signs of pest entry (holes, droppings)',
  'Water stains on soffit panels',
  'Cracked or broken soffit sections',
  'Poor attic ventilation or excessive heat',
];

// Charlotte neighborhoods served
const charlotteNeighborhoods = [
  'Myers Park',
  'Dilworth',
  'South End',
  'NoDa',
  'Plaza Midwood',
  'Ballantyne',
  'University City',
  'Cotswold',
  'Elizabeth',
  'Eastover',
  'SouthPark',
  'Uptown Charlotte',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Gastonia', href: '/locations/gastonia-nc' },
  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
];

// FAQs
const faqs = [
  {
    question: 'How much does fascia and soffit repair cost in Charlotte NC?',
    answer:
      'Fascia and soffit repair in Charlotte typically costs $6-$20 per linear foot depending on material and extent of damage. Minor repairs might cost $300-$600, while full replacement on an average home runs $2,000-$5,000. Aluminum is mid-range ($8-$15/ft), wood is similar but requires painting, and composite is premium ($12-$20/ft). We provide free estimates with itemized pricing.',
  },
  {
    question: 'What causes fascia and soffit damage in Charlotte?',
    answer:
      'Charlotte\'s humid climate is the primary cause of fascia and soffit damage. Wood rot from moisture exposure, pest damage (carpenter bees, woodpeckers, squirrels), clogged gutters that overflow onto fascia, ice dams in winter, and lack of proper attic ventilation all contribute. Regular inspection and maintenance helps prevent major damage.',
  },
  {
    question: 'Should I repair or replace my fascia and soffit?',
    answer:
      'If damage is localized to a small area (less than 20% of total length), repair is usually cost-effective. However, if you have widespread rot, multiple damaged sections, or your materials are 20+ years old, replacement often makes more sense. We recommend aluminum or composite replacement to prevent future rot problems.',
  },
  {
    question: 'What is the best material for fascia and soffit in Charlotte?',
    answer:
      'For Charlotte\'s humid climate, we recommend aluminum fascia and soffit. Aluminum is completely rot-proof, never needs painting, resists pest damage, and lasts 30+ years. It comes in many colors to match your home. Vinyl is a budget-friendly alternative, while composite offers a wood look with better durability than real wood.',
  },
  {
    question: 'How long does fascia and soffit installation take?',
    answer:
      'Most fascia and soffit replacement projects in Charlotte take 1-2 days for an average-sized home. Larger homes or those with extensive rot requiring structural repair may take 3-4 days. We work efficiently while ensuring quality installation and complete cleanup.',
  },
  {
    question: 'Why is my soffit important for attic ventilation?',
    answer:
      'Soffit vents are critical for proper attic ventilation. They allow cool air to enter the attic at the eaves, while ridge vents or other exhaust vents let hot air escape at the peak. This airflow keeps your attic cooler in summer (reducing AC costs) and prevents moisture buildup that causes mold and ice dams in winter.',
  },
  {
    question: 'Can you match my existing fascia and soffit?',
    answer:
      'Yes, we can match most existing fascia and soffit materials and colors. For aluminum and vinyl, we have access to a wide range of factory colors. For wood, we can match profiles and stain/paint to blend with existing trim. If an exact match isn\'t possible, we\'ll discuss options like replacing entire sections for consistent appearance.',
  },
  {
    question: 'Do you repair fascia damaged by pests?',
    answer:
      'Yes, we repair fascia and soffit damaged by carpenter bees, woodpeckers, squirrels, and other pests. Our repair process includes removing damaged materials, treating remaining wood, and installing new materials. We recommend aluminum or composite replacements to prevent future pest damage.',
  },
];

export default function FasciaSoffitRepairCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Fascia & Soffit Repair Charlotte NC', url: `${SITE_CONFIG.url}/fascia-soffit-repair-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Professional fascia and soffit repair Charlotte NC"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">BBB A+ Rated | Trim Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Fascia & Soffit Repair <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Protect your home with expert fascia and soffit repair and replacement
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides professional fascia and soffit services throughout Charlotte.
              Whether you need wood rot repair, aluminum fascia wrap, or complete replacement, our
              experienced team delivers quality craftsmanship that protects your home.
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
                Veteran-Owned
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
              Complete Fascia & Soffit Services
            </h2>
            <p className="text-gray text-lg">
              From minor repairs to complete replacement, we handle all your fascia and soffit needs
              with quality materials and expert craftsmanship.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2 text-xl">{service.title}</h3>
                <p className="text-gray text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Options Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Fascia & Soffit Material Options
            </h2>
            <p className="text-gray text-lg">
              We offer multiple material options to match your home&apos;s style, budget, and
              maintenance preferences.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material) => (
              <div key={material.name} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary mb-2 text-lg">{material.name}</h3>
                <p className="text-gray text-sm mb-4">{material.description}</p>
                <ul className="space-y-2">
                  {material.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Signs Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Fascia and soffit inspection Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-10 h-10 text-accent" />
                  <div>
                    <p className="font-bold text-dark">Damaged Trim?</p>
                    <p className="text-sm text-gray">Free Inspection Available</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Signs Your Fascia or Soffit Needs Repair
              </h2>
              <p className="text-gray text-lg mb-6">
                Damaged fascia and soffit can lead to serious problems including water damage,
                pest infestations, and poor attic ventilation. Watch for these warning signs:
              </p>
              <ul className="space-y-3">
                {problemSigns.map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray">{sign}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button
                  href="/contact"
                  variant="primary"
                  icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
                >
                  Schedule Free Inspection
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Best Roofing Now
            </h2>
            <p className="text-gray text-lg">
              Quality fascia and soffit work protects your home for decades.
              Here&apos;s why Charlotte homeowners trust our team.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-md">
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
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready to Repair Your Fascia & Soffit?
              </h2>
              <p className="text-white/90">
                Get a free inspection and estimate from Charlotte&apos;s trim specialists.
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

      {/* Service Areas Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Fascia & Soffit Services Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              We provide professional fascia and soffit services for homes throughout the Greater Charlotte area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Neighborhoods */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {charlotteNeighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {neighborhood}
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
                Fascia & Soffit Repair FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about fascia and soffit repair in Charlotte NC.
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
        title="Ready to Protect Your Home?"
        subtitle="Don't let damaged fascia and soffit lead to bigger problems. Get a free inspection and estimate from Charlotte's trim specialists."
      />
    </>
  );
}
