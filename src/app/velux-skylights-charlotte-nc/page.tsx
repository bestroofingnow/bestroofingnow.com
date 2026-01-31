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
  Clock,
  Sun,
  Zap,
  MapPin,
  Droplets,
  Wind,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'VELUX Skylights Charlotte NC | Certified Installers | Best Roofing Now',
  description:
    'VELUX skylight installation in Charlotte NC. Certified installers for solar-powered, fixed, and venting skylights with no-leak warranty. Sun Tunnel tubular skylights. Free estimates.',
  keywords: [
    'velux skylights charlotte nc',
    'velux skylight installation charlotte',
    'velux certified installer charlotte nc',
    'solar powered skylights charlotte',
    'velux sun tunnel charlotte',
    'skylight installation charlotte nc',
    'velux no leak warranty',
    'velux fresh air skylights charlotte',
    'tubular skylights charlotte nc',
    'velux roof windows charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/velux-skylights-charlotte-nc`,
  },
  openGraph: {
    title: 'VELUX Skylights Charlotte NC | Certified Installers | Best Roofing Now',
    description:
      'VELUX certified skylight installers in Charlotte NC. Solar-powered, fixed, and venting skylights with no-leak warranty. Free estimates.',
    url: `${SITE_CONFIG.url}/velux-skylights-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero4,
        width: 1200,
        height: 630,
        alt: 'VELUX skylight installation Charlotte NC - Best Roofing Now certified installer',
      },
    ],
  },
};

// VELUX Products offered
const veluxProducts = [
  {
    icon: Sun,
    title: 'Fixed Skylights',
    description: 'Bring natural light into any room with sealed, non-opening skylights for maximum illumination.',
    features: ['No mechanical parts', 'Maximum light', 'Energy efficient', 'Low maintenance'],
  },
  {
    icon: Wind,
    title: 'Fresh Air Skylights',
    description: 'Manual or solar-powered venting skylights that open to release heat and improve air quality.',
    features: ['Natural ventilation', 'Heat release', 'Rain sensor option', 'Reduces AC costs'],
  },
  {
    icon: Zap,
    title: 'Solar Powered Skylights',
    description: 'Self-powered skylights with built-in solar panel - no wiring required and eligible for tax credits.',
    features: ['No wiring needed', 'Federal tax credit', 'Remote control', 'Programmable'],
  },
  {
    icon: Sun,
    title: 'Sun Tunnel Skylights',
    description: 'Tubular skylights that bring natural light to interior spaces where traditional skylights won\'t fit.',
    features: ['Works in tight spaces', 'Affordable option', 'Quick installation', 'Flexible tubing'],
  },
];

// Why choose VELUX
const whyChooseVelux = [
  {
    icon: Award,
    title: 'VELUX Certified Installers',
    description: 'Best Roofing Now is trained and certified to install VELUX products correctly.',
  },
  {
    icon: Shield,
    title: 'No Leak Warranty',
    description: 'VELUX provides a 10-year no leak warranty on all skylights when properly installed.',
  },
  {
    icon: Droplets,
    title: 'Triple-Pane Glass',
    description: 'Premium glazing options for maximum energy efficiency and noise reduction.',
  },
  {
    icon: Zap,
    title: 'Solar Powered Options',
    description: 'No electrician needed - solar panels power the skylight and qualify for 30% tax credit.',
  },
  {
    icon: Clock,
    title: 'Over 80 Years Experience',
    description: 'VELUX has been the world leader in skylights since 1941.',
  },
  {
    icon: Sun,
    title: 'Increase Home Value',
    description: 'Skylights add natural light and can increase home value by improving interior appeal.',
  },
];

// Skylight benefits
const skylightBenefits = [
  {
    title: 'Natural Light',
    description: 'Skylights provide up to 3x more natural light than vertical windows of the same size.',
  },
  {
    title: 'Energy Savings',
    description: 'Reduce electricity costs by relying less on artificial lighting during the day.',
  },
  {
    title: 'Ventilation',
    description: 'Fresh Air skylights release trapped heat and improve indoor air quality.',
  },
  {
    title: 'Health Benefits',
    description: 'Natural light improves mood, sleep quality, and vitamin D production.',
  },
  {
    title: 'Home Value',
    description: 'Skylights enhance interior spaces and can increase home resale value.',
  },
  {
    title: 'Design Appeal',
    description: 'Add architectural interest and open up dark spaces in your home.',
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
  'Wesley Heights',
  'Fourth Ward',
  'Cherry',
  'Madison Park',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Mint Hill', href: '/locations/mint-hill-nc' },
  { name: 'Pineville', href: '/locations/pineville-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Gastonia', href: '/locations/gastonia-nc' },
  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
  { name: 'Fort Mill, SC', href: '/locations/fort-mill-sc' },
  { name: 'Indian Trail', href: '/locations/indian-trail-nc' },
];

// FAQs about VELUX skylights
const faqs = [
  {
    question: 'Why choose VELUX skylights over other brands?',
    answer:
      'VELUX is the world\'s largest skylight manufacturer with over 80 years of experience. They offer the industry\'s best warranty including a 10-year no leak warranty, superior energy efficiency with triple-pane glass options, and innovative features like solar-powered operation. VELUX skylights are engineered for reliability and backed by a company that stands behind their products.',
  },
  {
    question: 'What is the VELUX No Leak Warranty?',
    answer:
      'VELUX provides a 10-year installation warranty against leaks on all of their skylights when installed by a trained professional. This warranty is backed by VELUX directly and covers both the product and the installation. Additionally, VELUX skylights come with a 20-year warranty on insulated glass and a 10-year warranty on product defects.',
  },
  {
    question: 'How much does VELUX skylight installation cost in Charlotte?',
    answer:
      'VELUX skylight installation in Charlotte typically ranges from $1,500 to $4,000+ per skylight, depending on the type, size, and roof complexity. Fixed skylights are the most affordable, while solar-powered venting skylights are at the higher end. Sun Tunnel tubular skylights start around $800-$1,200 installed. Solar powered skylights may qualify for a 30% federal tax credit.',
  },
  {
    question: 'Can skylights be installed on any roof?',
    answer:
      'VELUX skylights can be installed on most roof types with pitches between 15 and 85 degrees. We assess your roof structure, pitch, and framing to determine the best installation approach. Factors like attic space, electrical access (for non-solar models), and roof obstructions are evaluated during our free consultation.',
  },
  {
    question: 'Do VELUX skylights qualify for tax credits?',
    answer:
      'Yes! VELUX Solar Powered Fresh Air Skylights and Solar Powered Blinds qualify for the federal solar tax credit (currently 30%). This can significantly reduce the cost of installation. You\'ll receive documentation to claim the credit on your taxes. This makes solar-powered skylights an excellent investment for Charlotte homeowners.',
  },
  {
    question: 'Will skylights make my home too hot in Charlotte\'s summer?',
    answer:
      'Modern VELUX skylights are designed for energy efficiency. They offer Low-E coatings that reduce solar heat gain while allowing natural light through. Fresh Air skylights can be opened to release trapped heat, and programmable blinds can block direct sunlight during peak hours. Many Charlotte homeowners find that proper skylight placement actually reduces cooling costs by decreasing reliance on artificial lighting.',
  },
  {
    question: 'What is a VELUX Sun Tunnel?',
    answer:
      'A VELUX Sun Tunnel is a tubular skylight that captures sunlight on the roof and channels it through a flexible or rigid tube to brighten interior spaces. Sun Tunnels are ideal for hallways, bathrooms, closets, and other spaces where traditional skylights won\'t fit. They\'re more affordable than deck-mounted skylights and can be installed in just a few hours.',
  },
  {
    question: 'How long does skylight installation take?',
    answer:
      'Most VELUX skylight installations are completed in one day. A single skylight typically takes 3-5 hours including roof opening, flashing installation, and interior finishing. Sun Tunnel installations are even faster, usually completed in 2-3 hours. We schedule installations to minimize disruption to your daily routine.',
  },
];

export default function VeluxSkylightsCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'VELUX Skylights Charlotte NC', url: `${SITE_CONFIG.url}/velux-skylights-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero4}
            alt="VELUX skylight installation Charlotte NC - Best Roofing Now certified installer"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">VELUX Certified Installers</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              VELUX Skylights <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Certified installers for solar-powered skylights with no-leak warranty
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is your trusted VELUX certified installer in Charlotte. We install
              fixed, venting, and solar-powered skylights along with Sun Tunnel tubular skylights.
              Every installation is backed by VELUX's industry-leading 10-year no leak warranty.
              Brighten your home with natural light today.
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
                <Award className="w-5 h-5 text-accent-light" />
                VELUX Certified
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                10-Year No Leak Warranty
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Google Rating
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-green-400" />
                Solar Tax Credit Eligible
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* VELUX Products Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              VELUX Skylight Products We Install
            </h2>
            <p className="text-gray text-lg">
              From fixed skylights to solar-powered venting models, we install the complete
              VELUX product line with certified expertise and warranty-backed installation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {veluxProducts.map((product) => (
              <div
                key={product.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-xl mb-2">{product.title}</h3>
                    <p className="text-gray">{product.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray">
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

      {/* Why Choose VELUX Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose VELUX Skylights
              </h2>
              <p className="text-gray text-lg mb-8">
                VELUX has been the world leader in skylights for over 80 years. Their products
                combine innovative design, energy efficiency, and industry-leading warranties.
                When installed by certified professionals like Best Roofing Now, you get the
                confidence of knowing your skylights are protected by the VELUX no leak guarantee.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseVelux.map((item) => (
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
                alt="VELUX skylight installation on Charlotte home - natural light flooding interior"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-10 h-10 text-primary" />
                  <div>
                    <p className="font-bold text-dark">No Leak Warranty</p>
                    <p className="text-sm text-gray">10-Year Protection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skylight Benefits Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Sun className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Benefits</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Benefits of Skylights in Your Charlotte Home
            </h2>
            <p className="text-gray text-lg">
              Skylights do more than just add light - they enhance your home in numerous ways.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skylightBenefits.map((benefit) => (
              <div key={benefit.title} className="p-6 bg-light rounded-xl">
                <h3 className="font-bold text-dark mb-2">{benefit.title}</h3>
                <p className="text-gray text-sm">{benefit.description}</p>
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
                Brighten Your Home with Natural Light
              </h2>
              <p className="text-white/90">
                Get a free estimate for VELUX skylight installation. Solar-powered models qualify for 30% tax credit!
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
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Installation Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              VELUX Skylight Installation Across Charlotte
            </h2>
            <p className="text-gray text-lg">
              We install VELUX skylights throughout Charlotte and the surrounding metro area
              with certified expertise and warranty-backed installation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Neighborhoods */}
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
                VELUX Skylight FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about VELUX skylights and installation in Charlotte NC.
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

      {/* Related Links */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary mb-6">Related Services</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/services/skylight-installation"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-primary/10 transition-colors"
              >
                <ArrowRight className="w-4 h-4 text-primary" />
                <span className="text-dark">Skylight Installation Services</span>
              </Link>
              <Link
                href="/services/roof-replacement"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-primary/10 transition-colors"
              >
                <ArrowRight className="w-4 h-4 text-primary" />
                <span className="text-dark">Roof Replacement Services</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-primary/10 transition-colors"
              >
                <ArrowRight className="w-4 h-4 text-primary" />
                <span className="text-dark">Get a Free Estimate</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Brighten Your Home?"
        subtitle="Get a free, no-obligation estimate for VELUX skylight installation. Our certified team will assess your home and recommend the best skylight solutions for your needs."
      />
    </>
  );
}
