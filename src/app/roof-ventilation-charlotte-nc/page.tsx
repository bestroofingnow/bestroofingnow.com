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
  Wind,
  Thermometer,
  Droplets,
  Zap,
  Home,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roof Ventilation Charlotte NC | Attic Ventilation Experts | Best Roofing Now',
  description:
    'Expert roof and attic ventilation services in Charlotte NC. Ridge vents, soffit vents, power ventilators - we install it all. Reduce energy bills, prevent moisture damage. BBB A+ rated. Free estimates.',
  keywords: [
    'roof ventilation Charlotte NC',
    'attic ventilation Charlotte',
    'soffit vent installation Charlotte',
    'attic fan Charlotte NC',
    'roof vent installation Charlotte',
    'improve attic ventilation Charlotte',
    'attic ventilation contractors Charlotte NC',
    'exhaust vent installation Charlotte',
    'intake vent installation Charlotte NC',
    'balanced attic ventilation Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-ventilation-charlotte-nc`,
  },
  openGraph: {
    title: 'Roof Ventilation Charlotte NC | Attic Ventilation Experts | Best Roofing Now',
    description:
      'Expert roof and attic ventilation in Charlotte NC. Ridge vents, soffit vents, power ventilators. Reduce energy bills, prevent moisture damage. Free estimates.',
    url: `${SITE_CONFIG.url}/roof-ventilation-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero15,
        width: 1200,
        height: 630,
        alt: 'Roof ventilation services in Charlotte NC - Best Roofing Now attic ventilation experts',
      },
    ],
  },
};

// Benefits of proper ventilation
const benefits = [
  {
    icon: Thermometer,
    title: 'Lower Energy Bills',
    description:
      'Proper ventilation can reduce attic temperatures by 30-40°F in summer, reducing AC workload and cutting cooling costs by 10-15%.',
  },
  {
    icon: Droplets,
    title: 'Moisture Control',
    description:
      'Ventilation removes moisture from your attic, preventing mold growth, wood rot, and deterioration of insulation.',
  },
  {
    icon: Clock,
    title: 'Extended Roof Life',
    description:
      'Excessive heat ages shingles prematurely. Proper ventilation helps your roof last its full expected lifespan of 20-30 years.',
  },
  {
    icon: Home,
    title: 'Prevents Ice Dams',
    description:
      'In winter, ventilation keeps the roof cold, preventing snow melt and refreezing that causes damaging ice dams.',
  },
];

// Ventilation types we install
const ventilationTypes = [
  {
    title: 'Ridge Vents',
    description:
      'Installed along the roof peak, ridge vents provide continuous exhaust ventilation. They\'re virtually invisible and highly effective.',
    benefits: ['Continuous exhaust', 'Invisible from ground', 'No moving parts', 'Works with wind and convection'],
  },
  {
    title: 'Soffit Vents',
    description:
      'Installed in the eave soffits, these vents provide essential intake air that makes the entire system work effectively.',
    benefits: ['Critical for intake air', 'Multiple style options', 'Works with any exhaust system', 'Perforated or vented panels'],
  },
  {
    title: 'Box Vents (Static Vents)',
    description:
      'Also called turtle vents, these are installed near the ridge and use natural convection to exhaust hot air.',
    benefits: ['No electricity needed', 'Low profile', 'Affordable option', 'Multiple can be installed'],
  },
  {
    title: 'Power Ventilators',
    description:
      'Electric or solar-powered fans that actively pull hot air from the attic. Ideal for homes needing extra ventilation.',
    benefits: ['Active ventilation', 'Thermostat controlled', 'Solar options available', 'High CFM capacity'],
  },
  {
    title: 'Gable Vents',
    description:
      'Installed in gable ends of the attic, these provide both intake and exhaust depending on wind direction.',
    benefits: ['Decorative options', 'Easy to retrofit', 'Work with natural airflow', 'No roof penetration'],
  },
  {
    title: 'Turbine Vents',
    description:
      'Wind-powered spinning vents that actively draw hot air out. More effective than static vents in windy conditions.',
    benefits: ['No electricity needed', 'Active extraction', 'Increases airflow', 'Works with any wind'],
  },
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
    icon: Wind,
    title: 'Ventilation Experts',
    description: 'We design balanced ventilation systems tailored to your home\'s specific needs.',
  },
  {
    icon: Users,
    title: 'Certified Installers',
    description: 'CertainTeed, GAF, and Owens Corning certified for premium warranty options.',
  },
  {
    icon: Zap,
    title: 'Energy Efficient Solutions',
    description: 'We focus on reducing your energy costs while protecting your roof.',
  },
];

// Signs of poor ventilation
const poorVentilationSigns = [
  'Extremely hot attic in summer (140°F+)',
  'Ice dams forming in winter',
  'Mold or mildew in attic',
  'Peeling paint on eaves or soffits',
  'Warped or buckled shingles',
  'Musty odors from attic',
  'High cooling bills in summer',
  'Condensation on windows in winter',
];

// FAQs
const faqs = [
  {
    question: 'How much ventilation does my roof need?',
    answer:
      'The general rule is 1 square foot of net free ventilation area for every 150 square feet of attic floor space. This should be balanced between intake (at soffits) and exhaust (at or near the ridge). For a 1,500 sq ft attic, you\'d need about 10 sq ft of ventilation, split evenly. We\'ll calculate the exact requirements for your home during our inspection.',
  },
  {
    question: 'What\'s the best type of roof ventilation for Charlotte homes?',
    answer:
      'For Charlotte\'s hot, humid climate, we typically recommend a balanced system with continuous soffit vents for intake and ridge vents for exhaust. This passive system works 24/7 without electricity. For homes with limited ridge space or extra ventilation needs, we may add power ventilators or additional box vents. Every home is different - we\'ll recommend the best solution for your specific situation.',
  },
  {
    question: 'Can I add ventilation to my existing roof?',
    answer:
      'Absolutely! Ridge vents can be cut into most existing roofs, soffit vents can be added to enclosed soffits, and box vents or power ventilators can be installed on any roof. We often add ventilation during roof repairs or replacements, but standalone ventilation upgrades are also common. We\'ll assess your attic and recommend the most effective improvements.',
  },
  {
    question: 'How much does roof ventilation installation cost?',
    answer:
      'Costs vary based on the type and extent of ventilation needed. Adding soffit vents to a home typically costs $300-$600. Ridge vent installation during a reroof is often included or costs $500-$1,000 extra. Power ventilators range from $300-$600 per unit installed. A complete ventilation system upgrade for a poorly ventilated home might cost $1,000-$3,000. We provide detailed quotes.',
  },
  {
    question: 'Will better ventilation really lower my energy bills?',
    answer:
      'Yes, proper attic ventilation can significantly reduce cooling costs. In summer, attics can reach 150°F or higher without adequate ventilation. This heat radiates into your living space, forcing your AC to work harder. With proper ventilation, attic temps stay closer to outside air temperature, potentially reducing cooling costs by 10-15%. Many homeowners see savings that pay for the ventilation within a few years.',
  },
  {
    question: 'Does my roof have enough ventilation?',
    answer:
      'Many Charlotte homes, especially older ones, are under-ventilated. Signs of inadequate ventilation include an extremely hot attic in summer, ice dams in winter, moisture problems, and shingles that age prematurely. We offer free attic inspections where we measure current ventilation, check for moisture issues, and recommend improvements if needed.',
  },
  {
    question: 'Can too much ventilation be a problem?',
    answer:
      'Yes, improper ventilation can cause issues. Too much exhaust without adequate intake can create negative pressure, potentially pulling conditioned air from your living space. Mixing different types of exhaust vents (like ridge vents with gable vents) can cause short-circuiting of airflow. We design balanced systems to avoid these problems.',
  },
  {
    question: 'Should I use a power ventilator or passive vents?',
    answer:
      'For most Charlotte homes, a properly designed passive system (ridge and soffit vents) is sufficient and more reliable since there are no motors to fail. Power ventilators are useful when passive ventilation isn\'t adequate due to limited ridge length, complex roof designs, or extra-large attics. Solar-powered options provide active ventilation without increasing electric bills.',
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

export default function RoofVentilationCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Ventilation Charlotte NC', url: `${SITE_CONFIG.url}/roof-ventilation-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero15}
            alt="Roof ventilation services in Charlotte NC - Best Roofing Now attic experts"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Wind className="w-4 h-4" />
              <span className="text-sm font-semibold">Attic Ventilation Experts | Energy Efficiency</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Ventilation <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Lower energy bills, extend roof life, and eliminate moisture problems
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Proper roof ventilation is critical in Charlotte's hot, humid climate. Best Roofing Now installs
              and upgrades attic ventilation systems that reduce cooling costs, prevent moisture damage, and help
              your roof last longer. From ridge vents to power ventilators, we have the right solution for your home.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Estimate
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

      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Proper Ventilation Matters in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Charlotte's hot summers and humid climate make attic ventilation especially important. Here's
              how proper ventilation protects your home and saves you money.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-light p-6 rounded-xl">
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

      {/* Signs of Poor Ventilation Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src={IMAGES.services.inspection}
                alt="Attic inspection for ventilation issues in Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Signs Your Attic Needs Better Ventilation
              </h2>
              <p className="text-gray text-lg mb-6">
                Many Charlotte homes have inadequate ventilation. Watch for these warning signs:
              </p>
              <ul className="space-y-3">
                {poorVentilationSigns.map((sign, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Thermometer className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-gray">{sign}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
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

      {/* Ventilation Types Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Ventilation Solutions We Install
            </h2>
            <p className="text-gray text-lg">
              We offer a complete range of roof and attic ventilation options to meet your home's needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ventilationTypes.map((type) => (
              <div key={type.title} className="bg-light p-6 rounded-xl">
                <h3 className="font-bold text-dark text-xl mb-3">{type.title}</h3>
                <p className="text-gray text-sm mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray">
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

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Charlotte Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When it comes to roof ventilation, trust the experts who understand Charlotte's unique climate.
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
                src={IMAGES.realProjects.drone2}
                alt="Best Roofing Now - Expert ventilation installation in Charlotte"
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
                Is Your Attic Too Hot? Let's Fix It!
              </h2>
              <p className="text-white/90">
                Get a free ventilation assessment and start saving on energy costs.
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

      {/* How It Works Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How Roof Ventilation Works
            </h2>
            <p className="text-gray text-lg">
              Effective ventilation requires a balanced system of intake and exhaust.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-light rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 rotate-90" /> Intake Ventilation
                  </h3>
                  <p className="text-gray mb-4">
                    Fresh, cooler air enters the attic through vents at the lowest point of the roof - typically
                    in the soffits or eaves. This incoming air is essential for the system to work.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Continuous soffit vents
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Individual soffit vents
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Drip edge vents
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 -rotate-90" /> Exhaust Ventilation
                  </h3>
                  <p className="text-gray mb-4">
                    Hot air naturally rises and exits through vents at or near the roof peak. This creates
                    continuous airflow that keeps the attic cooler and drier.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Ridge vents
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Box/static vents
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Power ventilators
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                <p className="text-dark text-center font-semibold">
                  The key is balance: You need roughly equal intake and exhaust for optimal airflow.
                  We design systems that achieve this balance for maximum efficiency.
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
              Ventilation Services Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              We install and upgrade roof ventilation for homeowners across Charlotte and surrounding areas.
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
                Roof Ventilation FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about attic and roof ventilation in Charlotte.
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
        title="Improve Your Home's Ventilation Today"
        subtitle="Don't let poor ventilation shorten your roof's life or waste energy. Contact Best Roofing Now for a free assessment and custom ventilation solution."
      />
    </>
  );
}
