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
  Wind,
  ThermometerSun,
  Droplets,
  Zap,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Ridge Vent Installation Charlotte NC | Attic Ventilation | Best Roofing Now',
  description:
    'Professional ridge vent installation in Charlotte NC. Improve attic ventilation, reduce energy costs, and prevent moisture damage. BBB A+ rated, licensed contractor. Free estimates available.',
  keywords: [
    'ridge vent installation Charlotte NC',
    'ridge vents Charlotte',
    'attic ventilation Charlotte NC',
    'roof ventilation Charlotte',
    'ridge vent repair Charlotte NC',
    'attic vent installation Charlotte',
    'roof ridge vent Charlotte NC',
    'ventilation improvement Charlotte',
    'soffit vent installation Charlotte NC',
    'attic fan installation Charlotte',
    'roof vent replacement Charlotte',
    'proper attic ventilation Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/ridge-vent-installation-charlotte-nc`,
  },
  openGraph: {
    title: 'Ridge Vent Installation Charlotte NC | Attic Ventilation | Best Roofing Now',
    description:
      'Improve your home\'s ventilation with professional ridge vent installation in Charlotte NC. Reduce energy costs and prevent moisture problems. Free estimates.',
    url: `${SITE_CONFIG.url}/ridge-vent-installation-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero4,
        width: 1200,
        height: 630,
        alt: 'Professional ridge vent installation Charlotte NC',
      },
    ],
  },
};

// Ventilation services
const ventilationServices = [
  {
    icon: Wind,
    title: 'Ridge Vent Installation',
    description: 'Install continuous ridge vents along your roof peak for optimal attic airflow and ventilation.',
    features: ['Continuous ventilation', 'Weather-tight design', 'Shingle-over style'],
  },
  {
    icon: Home,
    title: 'Soffit Vent Installation',
    description: 'Install soffit vents to allow cool air intake that works with ridge vents for proper airflow.',
    features: ['Intake ventilation', 'Multiple styles available', 'Pest-resistant screens'],
  },
  {
    icon: Zap,
    title: 'Power Attic Ventilators',
    description: 'Install powered fans for homes that need additional ventilation capacity.',
    features: ['Solar or electric options', 'Thermostat controlled', 'High CFM ratings'],
  },
  {
    icon: ThermometerSun,
    title: 'Ventilation Assessment',
    description: 'Complete attic ventilation analysis with recommendations to optimize airflow.',
    features: ['Free assessment', 'NFA calculations', 'Custom solutions'],
  },
];

// Benefits of proper ventilation
const ventilationBenefits = [
  {
    icon: ThermometerSun,
    title: 'Reduce Cooling Costs',
    description: 'Proper ventilation can reduce summer attic temperatures by 30-50 degrees, lowering AC costs.',
  },
  {
    icon: Droplets,
    title: 'Prevent Moisture Damage',
    description: 'Ventilation removes humid air that causes mold, rot, and ice dams in winter.',
  },
  {
    icon: Home,
    title: 'Extend Roof Life',
    description: 'Reducing heat and moisture extends shingle life and prevents premature aging.',
  },
  {
    icon: Zap,
    title: 'Improve Comfort',
    description: 'Better ventilation means more consistent temperatures throughout your home.',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Award,
    title: 'Ventilation Experts',
    description: 'Specialized knowledge in attic ventilation requirements and solutions.',
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
    title: 'Certified Installers',
    description: 'CertainTeed, GAF, and Owens Corning certified for proper ventilation installation.',
  },
  {
    icon: Clock,
    title: 'Fast Installation',
    description: 'Most ridge vent installations completed in just one day.',
  },
];

// Signs of poor ventilation
const poorVentilationSigns = [
  'Excessively hot upstairs rooms in summer',
  'Ice dams forming on roof edges in winter',
  'Mold or mildew in the attic',
  'Curling or premature shingle aging',
  'High cooling bills in summer',
  'Moisture or condensation in attic',
  'Peeling exterior paint near roofline',
  'Musty odors in the house',
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
    question: 'What is a ridge vent and how does it work?',
    answer:
      'A ridge vent is a continuous ventilation system installed along the peak (ridge) of your roof. It works by allowing hot, humid air to naturally escape from your attic while drawing cooler air in through soffit vents at the eaves. This creates a natural convection cycle that keeps your attic cool and dry without using electricity.',
  },
  {
    question: 'How much does ridge vent installation cost in Charlotte NC?',
    answer:
      'Ridge vent installation in Charlotte typically costs $400-$1,500 depending on roof length, accessibility, and existing ventilation. The average home costs $600-$900 for ridge vent installation. This includes cutting the ridge opening, installing the vent, and capping with shingles. We provide free estimates with detailed pricing.',
  },
  {
    question: 'Will ridge vents help reduce my energy bills?',
    answer:
      'Yes, properly installed ridge vents can significantly reduce cooling costs. By allowing hot air to escape from your attic, your air conditioning works less to cool your home. Many Charlotte homeowners see 10-15% reductions in summer cooling costs. Ridge vents are especially effective when paired with adequate soffit intake vents.',
  },
  {
    question: 'Do I need soffit vents with ridge vents?',
    answer:
      'Yes, ridge vents require soffit vents to work properly. The ventilation system works on the principle of air intake (soffit vents) and exhaust (ridge vents). Without soffit vents providing cool air intake, ridge vents cannot create proper airflow. We assess your soffit ventilation and can install or add vents as needed.',
  },
  {
    question: 'Can ridge vents be installed on an existing roof?',
    answer:
      'Yes, ridge vents can be installed on existing roofs without a full roof replacement. We cut an opening along the ridge, install the vent, and cap it with matching shingles. It\'s a relatively simple installation that usually takes just one day. We recommend this upgrade during roof replacement for easiest installation.',
  },
  {
    question: 'Will ridge vents leak during rain or snow?',
    answer:
      'Quality ridge vents are designed with baffles and weather-resistant materials that prevent rain and snow from entering while allowing air to flow freely. Proper installation is key - vents must be correctly positioned and sealed. Our GAF and CertainTeed certified installers ensure leak-free installation.',
  },
  {
    question: 'How much ventilation does my attic need?',
    answer:
      'Building codes require 1 square foot of Net Free Area (NFA) ventilation for every 150 square feet of attic floor space, or 1:300 if you have a vapor barrier. Half should be intake (soffits) and half exhaust (ridge vents). We calculate your specific requirements during our free assessment.',
  },
  {
    question: 'Are ridge vents better than other attic vents?',
    answer:
      'Ridge vents are generally considered the most effective passive ventilation solution because they provide continuous ventilation along the entire roof peak and work with natural convection. They\'re also less visible than box vents or turbines. However, some situations may benefit from powered ventilators. We assess your specific needs and recommend the best solution.',
  },
];

export default function RidgeVentInstallationCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Ridge Vent Installation Charlotte NC', url: `${SITE_CONFIG.url}/ridge-vent-installation-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero4}
            alt="Professional ridge vent installation Charlotte NC"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">BBB A+ Rated | Ventilation Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Ridge Vent Installation <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Improve your attic ventilation and reduce energy costs
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides professional ridge vent and attic ventilation services
              throughout Charlotte. Proper ventilation protects your roof, reduces energy costs,
              and prevents moisture damage. Get a free ventilation assessment today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Your Free Assessment
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
              Complete Attic Ventilation Solutions
            </h2>
            <p className="text-gray text-lg">
              From ridge vent installation to complete ventilation system design, we provide
              solutions to keep your attic properly ventilated year-round.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {ventilationServices.map((service) => (
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

      {/* Benefits Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Benefits of Proper Attic Ventilation
              </h2>
              <p className="text-gray text-lg mb-6">
                Charlotte&apos;s hot, humid summers make proper attic ventilation essential.
                Here&apos;s how ridge vents protect your home and save money:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {ventilationBenefits.map((benefit) => (
                  <div key={benefit.title} className="bg-white rounded-lg p-4 shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-dark mb-1">{benefit.title}</h3>
                        <p className="text-gray text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="Roof with proper ventilation Charlotte NC"
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

      {/* Signs of Poor Ventilation Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Attic ventilation inspection Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Signs Your Attic Needs Better Ventilation
              </h2>
              <p className="text-gray text-lg mb-6">
                Many Charlotte homes have inadequate attic ventilation. Watch for these warning signs
                that indicate you may need ridge vent installation or additional venting:
              </p>
              <ul className="space-y-3">
                {poorVentilationSigns.map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <Wind className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
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
                  Schedule Free Assessment
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
              Proper ventilation installation requires expertise.
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
                Ready to Improve Your Attic Ventilation?
              </h2>
              <p className="text-white/90">
                Get a free ventilation assessment from Charlotte&apos;s attic ventilation experts.
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

      {/* Service Areas Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Ridge Vent Installation Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              We provide professional attic ventilation services for homes throughout the Greater Charlotte area.
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
                Ridge Vent Installation FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about ridge vent installation in Charlotte NC.
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
        title="Ready to Improve Your Attic Ventilation?"
        subtitle="Reduce energy costs, prevent moisture damage, and extend your roof's life with proper ventilation. Get a free assessment from Charlotte's ventilation experts."
      />
    </>
  );
}
