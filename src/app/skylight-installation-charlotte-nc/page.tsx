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
  Sun,
  MapPin,
  Wrench,
  Zap,
  Wind,
  Sparkles,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Skylight Installation Charlotte NC | VELUX Certified | Best Roofing Now',
  description:
    'Professional skylight installation in Charlotte NC. VELUX certified installers offering fixed, venting, and tubular skylights. Bring natural light into your home. Free estimates, licensed & insured.',
  keywords: [
    'skylight installation charlotte nc',
    'skylights charlotte',
    'velux skylight charlotte nc',
    'skylight installers charlotte',
    'sun tunnel installation charlotte nc',
    'tubular skylight charlotte',
    'roof window charlotte nc',
    'skylight repair charlotte',
    'skylight replacement charlotte nc',
    'natural light solutions charlotte',
    'venting skylight charlotte',
    'energy efficient skylights charlotte nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/skylight-installation-charlotte-nc`,
  },
  openGraph: {
    title: 'Skylight Installation Charlotte NC | VELUX Certified | Best Roofing Now',
    description:
      'VELUX certified skylight installation in Charlotte NC. Fixed, venting, and tubular skylights to bring natural light into your home. Free estimates from licensed professionals.',
    url: `${SITE_CONFIG.url}/skylight-installation-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero14,
        width: 1200,
        height: 630,
        alt: 'Skylight installation Charlotte NC - Best Roofing Now professional skylight services',
      },
    ],
  },
};

// Skylight services
const skylightServices = [
  {
    icon: Sun,
    title: 'Fixed Skylights',
    description: 'Non-opening skylights that flood rooms with natural light. Perfect for hallways, stairwells, and vaulted ceilings.',
    href: '/services/skylight-installation',
  },
  {
    icon: Wind,
    title: 'Venting Skylights',
    description: 'Operable skylights that open to provide fresh air ventilation along with natural light. Manual or solar-powered options.',
    href: '/services/skylight-installation',
  },
  {
    icon: Sparkles,
    title: 'Sun Tunnels',
    description: 'Tubular skylights that bring natural light to interior rooms, closets, and spaces where traditional skylights won\'t work.',
    href: '/services/skylight-installation',
  },
  {
    icon: Wrench,
    title: 'Skylight Repair',
    description: 'Fix leaking, foggy, or damaged skylights. We repair all brands and can restore your skylight to like-new condition.',
    href: '/services/skylight-installation',
  },
  {
    icon: Shield,
    title: 'Skylight Replacement',
    description: 'Replace outdated or failing skylights with modern, energy-efficient models featuring Low-E glass and improved sealing.',
    href: '/services/skylight-installation',
  },
  {
    icon: Zap,
    title: 'Solar-Powered Skylights',
    description: 'Self-powered venting skylights with blinds that qualify for federal tax credits. No wiring required.',
    href: '/services/skylight-installation',
  },
];

// Benefits of skylights
const skylightBenefits = [
  {
    icon: Sun,
    title: 'Natural Light',
    description: 'Skylights provide up to 3x more light than vertical windows of the same size.',
  },
  {
    icon: Zap,
    title: 'Energy Savings',
    description: 'Reduce daytime lighting costs and modern Low-E glass minimizes heat gain in summer.',
  },
  {
    icon: Wind,
    title: 'Ventilation',
    description: 'Venting skylights release hot air that rises, naturally cooling your home.',
  },
  {
    icon: Star,
    title: 'Home Value',
    description: 'Skylights add aesthetic appeal and can increase your home\'s resale value.',
  },
  {
    icon: CheckCircle,
    title: 'Health Benefits',
    description: 'Natural light improves mood, sleep quality, and overall well-being.',
  },
  {
    icon: Award,
    title: 'Tax Credits',
    description: 'Solar-powered VELUX skylights may qualify for federal tax credits up to 30%.',
  },
];

// Why choose us for skylights
const whyChooseUs = [
  {
    icon: Award,
    title: 'VELUX Certified',
    description: 'Factory-trained VELUX skylight installers ensuring proper installation and warranty protection.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star reviews from satisfied Charlotte homeowners.`,
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability coverage.',
  },
  {
    icon: CheckCircle,
    title: 'Leak-Free Guarantee',
    description: 'Proper flashing and installation techniques ensure your skylight won\'t leak.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: `${SITE_CONFIG.roofsInstalled}+ roofing projects completed in the Charlotte area.`,
  },
  {
    icon: Clock,
    title: 'Quick Installation',
    description: 'Most skylight installations completed in just one day with minimal disruption.',
  },
];

// Skylight brands we install
const skylightBrands = [
  'VELUX',
  'Sun-Tek',
  'Fakro',
  'Solatube',
  'ODL',
  'Wasco',
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
  'Montford',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Mint Hill', href: '/locations/mint-hill-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Fort Mill, SC', href: '/locations/fort-mill-sc' },
];

// FAQs about skylight installation
const faqs = [
  {
    question: 'How much does skylight installation cost in Charlotte?',
    answer:
      'Skylight installation in Charlotte typically costs $1,000-$3,500 depending on the type, size, and complexity of installation. Fixed skylights are most affordable ($1,000-$1,800), venting skylights run $1,500-$2,500, and tubular sun tunnels cost $500-$1,200. Solar-powered skylights with blinds range from $2,000-$3,500 but may qualify for federal tax credits. We provide free estimates with transparent pricing.',
  },
  {
    question: 'Will a skylight make my home hotter in the summer?',
    answer:
      'Modern skylights with Low-E glass actually help control heat gain. VELUX skylights feature specially coated glass that blocks heat while allowing natural light to pass through. Additionally, venting skylights can help cool your home by releasing the hot air that naturally rises to your ceiling. We always recommend Low-E glass for Charlotte\'s hot summers.',
  },
  {
    question: 'Do skylights leak?',
    answer:
      'When properly installed by certified professionals, skylights should not leak. Skylight leaks are almost always the result of improper installation or deteriorating flashing. As VELUX certified installers, we follow manufacturer specifications precisely and use quality flashing systems to ensure a watertight seal. Our installations come with both manufacturer and workmanship warranties.',
  },
  {
    question: 'What is the best skylight for Charlotte NC homes?',
    answer:
      'For Charlotte\'s climate, we typically recommend VELUX skylights with Low-E glass and solar-powered blinds. The Low-E coating blocks heat during our hot summers, while the blinds give you control over light and temperature. Venting skylights are especially popular in Charlotte as they help release hot air and reduce cooling costs.',
  },
  {
    question: 'Can you install a skylight in any roof?',
    answer:
      'Skylights can be installed in most roof types including asphalt shingle, metal, tile, and flat roofs. The key considerations are roof pitch, rafter spacing, and interior ceiling construction. During your free consultation, we\'ll assess your specific roof and recommend the best skylight options for your home.',
  },
  {
    question: 'What is a sun tunnel/tubular skylight?',
    answer:
      'A sun tunnel (or tubular skylight) uses a small dome on your roof connected to a reflective tube that channels natural light into interior spaces. They\'re perfect for rooms where traditional skylights won\'t work, such as closets, bathrooms, hallways, and rooms without direct roof access. They\'re also more affordable and easier to install than traditional skylights.',
  },
  {
    question: 'How long does skylight installation take?',
    answer:
      'Most skylight installations are completed in one day. A standard fixed or venting skylight installation typically takes 4-6 hours, while tubular skylights (sun tunnels) can be installed in 2-3 hours. More complex installations involving multiple skylights or significant interior finishing work may take 1-2 days.',
  },
  {
    question: 'Are there tax credits for skylights?',
    answer:
      'Yes! VELUX solar-powered fresh air skylights and blinds qualify for a federal tax credit of up to 30% of the product and installation cost through 2032. This can significantly reduce your investment while bringing natural light and ventilation to your home. We can provide documentation to help you claim this credit.',
  },
];

export default function SkylightInstallationCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Skylight Installation Charlotte NC', url: `${SITE_CONFIG.url}/skylight-installation-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero14}
            alt="Skylight installation Charlotte NC - Best Roofing Now professional skylight services"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Sun className="w-4 h-4" />
              <span className="text-sm font-semibold">VELUX Certified Installers</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Skylight Installation <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Bring natural light into your home with professional skylight installation
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is your trusted source for skylight installation in Charlotte NC. As VELUX certified
              installers, we offer fixed, venting, and tubular skylights that transform dark spaces with beautiful
              natural light. Leak-free installation guaranteed.
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
                VELUX Certified
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Leak-Free Guarantee
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
              Skylight Services in Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              From new installations to repairs and replacements, we offer complete skylight solutions
              to bring natural light into your Charlotte home.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skylightServices.map((service) => (
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

      {/* Benefits Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Benefits of Skylights for Your Charlotte Home
              </h2>
              <p className="text-gray text-lg mb-8">
                Skylights do more than just add light - they transform your living spaces, improve energy
                efficiency, and can even increase your home's value.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {skylightBenefits.map((item) => (
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
                src={IMAGES.houses.modern1}
                alt="Modern home with skylights in Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <Sun className="w-10 h-10 text-yellow-500" />
                  <div>
                    <p className="font-bold text-dark">3x More Light</p>
                    <p className="text-sm text-gray">Than same-size windows</p>
                  </div>
                </div>
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
              Why Charlotte Homeowners Choose Best Roofing Now
            </h2>
            <p className="text-gray text-lg">
              As VELUX certified installers, we ensure your skylights are installed correctly
              with proper flashing and waterproofing for years of leak-free performance.
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

      {/* Brands Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Skylight Brands We Install
            </h2>
            <p className="text-gray text-lg">
              We install and service all major skylight brands with VELUX as our preferred manufacturer.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {skylightBrands.map((brand) => (
              <span
                key={brand}
                className="inline-block bg-white px-6 py-3 rounded-full text-dark font-semibold border border-gray-200 shadow-sm"
              >
                {brand}
              </span>
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
                Ready to Bring Natural Light Into Your Home?
              </h2>
              <p className="text-white/90">
                Schedule a free consultation and estimate for skylight installation.
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
                Free Consultation
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
              Skylight Installation Across Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              We install skylights in homes throughout the Greater Charlotte metro area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Neighborhoods */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Neighborhoods</h3>
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
                Skylight Installation FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about skylight installation in Charlotte NC.
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
        title="Transform Your Home with Natural Light"
        subtitle="Schedule a free consultation for skylight installation. Our VELUX certified team will assess your home and recommend the perfect skylight solutions for your needs and budget."
      />
    </>
  );
}
