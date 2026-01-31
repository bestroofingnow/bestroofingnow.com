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
  Snowflake,
  Thermometer,
  AlertTriangle,
  Home,
  Droplets,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Ice Dam Prevention Charlotte NC | Winter Roofing | Best Roofing Now',
  description:
    'Expert ice dam prevention services in Charlotte NC. Protect your roof from winter damage with proper ventilation, insulation, and ice barriers. BBB A+ rated, veteran-owned. Free inspections.',
  keywords: [
    'ice dam prevention Charlotte NC',
    'ice dams Charlotte roofing',
    'ice dam removal Charlotte NC',
    'winter roof protection Charlotte',
    'ice and water shield Charlotte NC',
    'prevent ice dams Charlotte',
    'attic insulation Charlotte NC',
    'winter roofing Charlotte',
    'ice dam damage repair Charlotte',
    'roof ice prevention Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/ice-dam-prevention-charlotte-nc`,
  },
  openGraph: {
    title: 'Ice Dam Prevention Charlotte NC | Winter Roofing | Best Roofing Now',
    description:
      'Expert ice dam prevention in Charlotte NC. Proper ventilation, insulation, and ice barriers to protect your roof from winter damage. Free inspections.',
    url: `${SITE_CONFIG.url}/ice-dam-prevention-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero6,
        width: 1200,
        height: 630,
        alt: 'Ice dam prevention services in Charlotte NC - Best Roofing Now winter roofing experts',
      },
    ],
  },
};

// How ice dams form
const iceDamFormation = [
  {
    step: '1',
    title: 'Heat Escapes',
    description: 'Heat from your home rises into the attic through poor insulation or air leaks, warming the roof deck.',
  },
  {
    step: '2',
    title: 'Snow Melts',
    description: 'The warm roof melts the snow on the upper portion of the roof, even while it\'s cold outside.',
  },
  {
    step: '3',
    title: 'Water Flows Down',
    description: 'Melted water flows down under the snow until it reaches the cold eaves (overhang) of the roof.',
  },
  {
    step: '4',
    title: 'Ice Forms',
    description: 'At the cold eaves, the water refreezes, forming a ridge of ice - the "dam."',
  },
  {
    step: '5',
    title: 'Water Backs Up',
    description: 'The dam blocks additional melt water, which pools behind it and can leak under shingles into your home.',
  },
];

// Prevention solutions
const preventionSolutions = [
  {
    icon: Thermometer,
    title: 'Attic Insulation',
    description:
      'Proper attic insulation (R-38 to R-60 for Charlotte) keeps heat in your living space and out of the attic, reducing snow melt.',
  },
  {
    icon: Home,
    title: 'Air Sealing',
    description:
      'Sealing air leaks around lights, fans, pipes, and hatches prevents warm air from entering the attic and heating the roof.',
  },
  {
    icon: Droplets,
    title: 'Attic Ventilation',
    description:
      'Proper intake and exhaust ventilation keeps the roof deck cold and uniform, preventing uneven snow melt.',
  },
  {
    icon: Shield,
    title: 'Ice & Water Shield',
    description:
      'Self-adhering membrane installed under shingles at eaves, valleys, and penetrations provides backup waterproofing.',
  },
];

// Damage ice dams can cause
const iceDamDamage = [
  'Water leaking into walls and ceilings',
  'Damaged drywall, paint, and plaster',
  'Mold and mildew growth in walls',
  'Rotted roof decking and rafters',
  'Damaged insulation (reduced R-value)',
  'Ruined attic belongings',
  'Ice damage to gutters and soffits',
  'Stained or damaged interior finishes',
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
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
    icon: Snowflake,
    title: 'Winter Specialists',
    description: 'We understand NC winter weather and how to protect your roof from ice and snow damage.',
  },
  {
    icon: Users,
    title: 'Certified Installers',
    description: 'CertainTeed, GAF, and Owens Corning certified for premium warranty options.',
  },
  {
    icon: Clock,
    title: 'Prompt Response',
    description: 'When winter weather threatens, we respond quickly to protect your home.',
  },
];

// FAQs
const faqs = [
  {
    question: 'Do ice dams happen in Charlotte NC?',
    answer:
      'Yes, while less common than in northern states, Charlotte does experience ice dam conditions during winter weather events. Charlotte typically sees 1-3 snow events per year, and the freeze-thaw cycles are actually ideal for ice dam formation. When snow falls and is followed by sunny days and cold nights, ice dams can form on roofs with poor ventilation or insulation. After the significant snowfall events Charlotte experiences every few years, ice dam damage is common.',
  },
  {
    question: 'What causes ice dams to form?',
    answer:
      'Ice dams form when heat escaping from your home warms the roof deck, melting the snow above it. The meltwater runs down until it reaches the cold eaves (overhang), where it refreezes because the eaves aren\'t warmed by escaping heat. This ice buildup creates a "dam" that blocks additional meltwater, which can then back up under your shingles and leak into your home. The root causes are typically inadequate attic insulation, poor ventilation, and air leaks.',
  },
  {
    question: 'How can I prevent ice dams on my Charlotte home?',
    answer:
      'The key to ice dam prevention is keeping your roof deck cold and uniform. This is achieved through: proper attic insulation (we recommend R-38 to R-60), sealing air leaks that allow warm air into the attic, ensuring adequate attic ventilation with balanced intake and exhaust, and installing ice and water shield membrane during roof replacement. We offer comprehensive assessments to identify and address your home\'s specific vulnerabilities.',
  },
  {
    question: 'What is ice and water shield, and do I need it?',
    answer:
      'Ice and water shield is a self-adhering rubberized membrane installed directly on the roof deck under shingles. It provides a waterproof barrier at vulnerable areas like eaves, valleys, and around penetrations. Building codes in North Carolina require it at eaves (typically 24" past the interior wall line). While it doesn\'t prevent ice dams, it protects against leaks when they occur. We strongly recommend installing it during any roof replacement in Charlotte.',
  },
  {
    question: 'How much does ice dam prevention cost?',
    answer:
      'Costs vary based on what your home needs. Adding attic insulation typically costs $1,500-$3,500 for a standard home. Air sealing runs $300-$1,500 depending on the extent of leaks. Ventilation improvements range from $500-$2,000. Ice and water shield installation during a reroof is typically included in the price or adds $300-$800. We provide detailed quotes after assessing your home\'s specific needs.',
  },
  {
    question: 'I already have an ice dam. What should I do?',
    answer:
      'If you have an active ice dam, don\'t try to chip it off yourself - you\'ll likely damage your shingles. Options include: carefully removing snow from the roof with a roof rake (from the ground), applying ice melt products in a stocking to create channels, or calling a professional for steam removal. If water is leaking inside, call us immediately. After the ice dam is addressed, we can help you prevent future occurrences.',
  },
  {
    question: 'Will my homeowners insurance cover ice dam damage?',
    answer:
      'Most homeowners insurance policies cover sudden water damage from ice dams, including interior damage from leaks. However, they typically don\'t cover the preventive measures (insulation, ventilation) or gradual damage from ongoing issues. After a winter weather event causes ice dam damage, document everything and contact your insurance company. We can help document damage for claims and work with your adjuster.',
  },
  {
    question: 'Can I prevent ice dams without a new roof?',
    answer:
      'Absolutely! While installing ice and water shield requires a roof replacement, the most important prevention measures can be done anytime: adding attic insulation, sealing air leaks, and improving ventilation. These improvements will not only prevent ice dams but also reduce energy bills year-round. We offer attic assessments and can implement these solutions without touching your existing roof.',
  },
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

export default function IceDamPreventionCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Ice Dam Prevention Charlotte NC', url: `${SITE_CONFIG.url}/ice-dam-prevention-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero6}
            alt="Ice dam prevention services in Charlotte NC - Best Roofing Now winter experts"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Snowflake className="w-4 h-4" />
              <span className="text-sm font-semibold">Winter Roofing Experts | Ice Dam Prevention</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Ice Dam Prevention <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Protect your roof from winter weather damage before it starts
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Charlotte's winter freeze-thaw cycles can create damaging ice dams on poorly ventilated roofs.
              Best Roofing Now provides comprehensive ice dam prevention services including insulation upgrades,
              ventilation improvements, and ice barrier installation. Don't wait until winter damage strikes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Assessment
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
            </div>
          </div>
        </div>
      </section>

      {/* How Ice Dams Form Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How Ice Dams Form on Charlotte Roofs
            </h2>
            <p className="text-gray text-lg">
              Understanding the ice dam formation process helps you see why prevention is so important.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {iceDamFormation.map((item, index) => (
              <div key={item.title} className="relative">
                <div className="bg-light p-6 rounded-xl h-full">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-gray text-sm">{item.description}</p>
                </div>
                {index < iceDamFormation.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-primary z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Damage Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Damage Ice Dams Can Cause
              </h2>
              <p className="text-gray text-lg mb-6">
                Ice dams might look like a minor nuisance, but the water damage they cause can be devastating.
                When water backs up behind the dam, it can find its way under shingles and into your home.
              </p>
              <ul className="space-y-3">
                {iceDamDamage.map((damage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-gray">{damage}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.services.emergency}
                alt="Ice dam damage to Charlotte home roof"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white rounded-xl shadow-lg p-4">
                <p className="font-bold text-lg">Don't Wait!</p>
                <p className="text-sm text-white/90">Prevent damage before winter</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Solutions Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Ice Dam Prevention Solutions
            </h2>
            <p className="text-gray text-lg">
              The key to preventing ice dams is keeping your roof deck cold and uniform. Here's how we do it.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preventionSolutions.map((solution) => (
              <div key={solution.title} className="bg-light p-6 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{solution.title}</h3>
                <p className="text-gray text-sm">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Charlotte Homeowners Trust Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When it comes to protecting your home from winter weather, trust the experts who understand
                Charlotte's unique climate and weather patterns.
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
                src={IMAGES.realProjects.certainteed1}
                alt="Best Roofing Now - Trusted roofing company in Charlotte NC"
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
                Prepare Your Roof for Winter Now!
              </h2>
              <p className="text-white/90">
                Get a free assessment before cold weather arrives.
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
                Schedule Free Assessment
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

      {/* Charlotte Winter Weather Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Charlotte's Winter Weather & Your Roof
              </h2>
              <p className="text-gray text-lg">
                While Charlotte has mild winters compared to the north, our freeze-thaw cycles create
                ideal conditions for ice dam formation.
              </p>
            </div>
            <div className="bg-light rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-dark text-lg mb-4">Charlotte Winter Facts</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Snowflake className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray">Average of 4-6 inches of snow per year</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Thermometer className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray">Frequent freeze-thaw cycles in Dec-Feb</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Snowflake className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray">1-3 significant winter storms per year</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Droplets className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray">Ice storms with dangerous accumulation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-4">Why This Matters</h3>
                  <p className="text-gray mb-4">
                    Charlotte's pattern of snow/ice followed by sunny days and cold nights is actually
                    worse for ice dams than consistent cold. The sun warms the roof during the day,
                    melting snow, while cold nights refreeze the runoff at the eaves.
                  </p>
                  <p className="text-gray">
                    Many Charlotte homes built before modern codes lack adequate attic insulation and
                    ventilation, making them especially vulnerable.
                  </p>
                </div>
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
              Ice Dam Prevention Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              We help homeowners across Charlotte and surrounding areas prepare for winter.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6">
            <h3 className="text-xl font-bold text-dark mb-4">Charlotte Neighborhoods We Serve</h3>
            <div className="flex flex-wrap gap-2">
              {charlotteNeighborhoods.map((neighborhood) => (
                <span
                  key={neighborhood}
                  className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                >
                  {neighborhood}
                </span>
              ))}
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
                Ice Dam Prevention FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about ice dams and prevention in Charlotte.
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

      {/* Final CTA */}
      <CTASection
        title="Protect Your Roof Before Winter Arrives"
        subtitle="Don't wait until ice dams cause expensive damage. Contact Best Roofing Now for a free assessment of your home's winter readiness."
      />
    </>
  );
}
