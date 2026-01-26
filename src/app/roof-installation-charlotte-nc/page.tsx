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
  Home,
  Building2,
  CloudRain,
  MapPin,
  Layers,
  PlusCircle,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roof Installation Charlotte NC | New Construction Roofing',
  description:
    'New construction roof installation in Charlotte NC. Expert installers for new builds, home additions, and first-time roofing projects. Builder partnerships available. BBB A+ rated.',
  keywords: [
    'roof installation charlotte nc',
    'new construction roofing charlotte',
    'new home roof installation charlotte nc',
    'roof installers charlotte',
    'builder roofing contractor charlotte nc',
    'new build roofing charlotte',
    'first time roof installation charlotte',
    'home addition roofing charlotte nc',
    'construction roofing services charlotte',
    'custom home roofing charlotte nc',
    'new roof on new house charlotte',
    'professional roof installers charlotte nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-installation-charlotte-nc`,
  },
  openGraph: {
    title: 'Roof Installation Charlotte NC | New Roof Experts',
    description:
      'Expert roof installation in Charlotte NC. BBB A+ rated, veteran-owned. Specializing in new roof installation for residential and commercial properties. Free estimates.',
    url: `${SITE_CONFIG.url}/roof-installation-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero5,
        width: 1200,
        height: 630,
        alt: 'Roof installation Charlotte NC - Best Roofing Now installation experts',
      },
    ],
  },
};

// Roof installation services
const installationServices = [
  {
    icon: Home,
    title: 'Residential New Roof',
    description: 'Complete roof installation for new homes and existing homes needing replacement.',
    href: '/services/roof-replacement',
  },
  {
    icon: Building2,
    title: 'Commercial Installation',
    description: 'New roof systems for businesses including TPO, EPDM, and metal roofing.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Layers,
    title: 'Asphalt Shingles',
    description: 'Premium architectural shingles from CertainTeed, GAF, and Owens Corning.',
    href: '/services/residential-roofing',
  },
  {
    icon: PlusCircle,
    title: 'Metal Roofing',
    description: 'Standing seam and metal shingle installation for lasting durability.',
    href: '/services/residential-roofing',
  },
  {
    icon: Wrench,
    title: 'Tear-Off & Install',
    description: 'Complete removal of old roofing and installation of new system.',
    href: '/services/roof-replacement',
  },
  {
    icon: CloudRain,
    title: 'Storm Replacement',
    description: 'Insurance-backed new roof installation after storm damage.',
    href: '/services/storm-damage',
  },
];

// Installation process steps
const installationProcess = [
  {
    step: '1',
    title: 'Free Inspection & Estimate',
    description: 'Thorough roof assessment and detailed written estimate with transparent pricing.',
  },
  {
    step: '2',
    title: 'Material Selection',
    description: 'Choose from premium shingles, metal, or other materials that fit your style and budget.',
  },
  {
    step: '3',
    title: 'Preparation & Tear-Off',
    description: 'Complete removal of old materials, inspection of decking, and necessary repairs.',
  },
  {
    step: '4',
    title: 'Installation',
    description: 'Expert installation of underlayment, flashing, ventilation, and roofing materials.',
  },
  {
    step: '5',
    title: 'Final Inspection & Cleanup',
    description: 'Quality inspection, debris removal, and magnetic sweep for nails.',
  },
  {
    step: '6',
    title: 'Warranty Registration',
    description: 'Complete warranty documentation for materials and workmanship.',
  },
];

// Why choose us for installation
const whyChooseUs = [
  {
    icon: Award,
    title: 'Manufacturer Certified',
    description: 'CertainTeed SELECT, GAF Factory-Certified, and Owens Corning Preferred installer.',
  },
  {
    icon: Star,
    title: '5-Star Rated',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star reviews from satisfied Charlotte customers.`,
  },
  {
    icon: Shield,
    title: 'Premium Warranties',
    description: 'Industry-leading warranties up to 50 years on materials and workmanship.',
  },
  {
    icon: Users,
    title: 'Experienced Crews',
    description: 'Trained installation teams with years of experience in Charlotte.',
  },
  {
    icon: Clock,
    title: 'Fast Installation',
    description: 'Most residential installations completed in just 1-3 days.',
  },
  {
    icon: CheckCircle,
    title: 'Complete Cleanup',
    description: 'Thorough site cleanup including magnetic nail sweeps.',
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
  'Montford',
  'Chantilly',
  'Commonwealth',
  'Sedgefield',
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

// FAQs about roof installation
const faqs = [
  {
    question: 'How much does new roof installation cost in Charlotte NC?',
    answer:
      'New roof installation in Charlotte typically costs between $8,000-$25,000 for most residential homes. The exact cost depends on roof size, pitch, material choice, and complexity. Architectural shingles are most popular, while metal roofing costs more upfront but lasts longer. We provide free, detailed estimates with transparent pricing and no hidden fees.',
  },
  {
    question: 'How long does roof installation take in Charlotte?',
    answer:
      'Most residential roof installations are completed in 1-3 days. A typical 2,000-3,000 square foot home usually takes 1-2 days from start to finish. Larger homes, complex roof designs, or commercial properties may take longer. We provide accurate timelines during your estimate and keep you updated throughout the process.',
  },
  {
    question: 'What is the best roofing material for new installation in Charlotte?',
    answer:
      'For Charlotte\'s climate, architectural asphalt shingles are the most popular choice, offering excellent value, durability, and aesthetics. Metal roofing is growing in popularity for its longevity (40-70 years) and energy efficiency. We\'ll help you choose the best material based on your home style, budget, and long-term goals.',
  },
  {
    question: 'Do you offer financing for new roof installation?',
    answer:
      'Yes! We understand a new roof is a significant investment. We offer flexible financing options to help make your new roof affordable. Ask about our financing programs during your free estimate - we can often find a payment plan that fits your budget.',
  },
  {
    question: 'What warranties come with new roof installation?',
    answer:
      'As certified installers for CertainTeed, GAF, and Owens Corning, we offer industry-leading warranties. This includes manufacturer warranties up to 50 years on materials plus our own workmanship warranty. Premium options like GAF Golden Pledge provide 50 years material + 25 years workmanship coverage.',
  },
  {
    question: 'Do you handle the permits for roof installation in Charlotte?',
    answer:
      'Yes, we handle all permit requirements for roof installation in Charlotte and Mecklenburg County. Our team is familiar with local building codes and inspection requirements. The permit fee is typically included in your estimate, and we coordinate all inspections.',
  },
  {
    question: 'Can you install a new roof in winter in Charlotte?',
    answer:
      'Yes, we can install roofs year-round in Charlotte. While we prefer temperatures above 40 degrees for optimal shingle adhesion, our experienced crews know how to work safely in cooler weather. We may need to adjust scheduling around rain or severe weather, but Charlotte\'s mild winters allow for year-round installation.',
  },
  {
    question: 'What happens to my old roof during installation?',
    answer:
      'We perform a complete tear-off of your old roofing materials before installing your new roof. This includes removing all old shingles, underlayment, and damaged flashing. We then inspect the decking, make any necessary repairs, and install new underlayment, drip edge, and roofing materials. All debris is removed and we perform magnetic nail sweeps.',
  },
];

export default function RoofInstallationCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Installation Charlotte NC', url: `${SITE_CONFIG.url}/roof-installation-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero5}
            alt="Roof installation Charlotte NC - Best Roofing Now new roof installation experts"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <PlusCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">New Roof Experts | Veteran-Owned</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Installation <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Expert new roof installation with {SITE_CONFIG.roofsInstalled}+ roofs completed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now specializes in professional roof installation throughout Charlotte NC.
              Whether you need a new roof for your home or business, our certified installers deliver
              exceptional quality with premium materials and industry-leading warranties.
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

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Roof Installation Services
            </h2>
            <p className="text-gray text-lg">
              From residential shingles to commercial flat roofs, we provide expert installation
              services for all types of roofing systems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {installationServices.map((service) => (
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

      {/* Installation Process Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Roof Installation Process
            </h2>
            <p className="text-gray text-lg">
              We follow a proven process to ensure every roof installation is completed with
              precision and quality.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {installationProcess.map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose Us for Roof Installation
              </h2>
              <p className="text-gray text-lg mb-8">
                Your new roof is a significant investment. Trust Charlotte&apos;s most experienced
                installation team to do it right the first time with quality materials and expert
                craftsmanship.
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
                src={IMAGES.realProjects.drone1}
                alt="Roof installation Charlotte NC - aerial view of completed project"
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
                Ready for a New Roof Installation?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Charlotte&apos;s roof installation experts.
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
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Installation Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              Our installation crews serve all of Charlotte and surrounding communities.
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

      {/* Project Gallery */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Recent Roof Installation Projects
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of new roof installations throughout Charlotte.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="New roof installation Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed roof installation Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Completed roof installation aerial view Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional roof installation in Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Projects
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
                Roof Installation FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof installation in Charlotte NC.
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
        title="Ready for Expert Roof Installation in Charlotte?"
        subtitle="Get a free, no-obligation estimate from our certified installation team. We'll assess your needs and provide honest recommendations with transparent pricing."
      />
    </>
  );
}
