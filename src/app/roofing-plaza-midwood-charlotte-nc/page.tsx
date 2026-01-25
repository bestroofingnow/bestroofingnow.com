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
  Search,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roofing Plaza Midwood Charlotte NC | Historic Craftsman Homes | Best Roofing Now',
  description:
    'Expert roofing services for Plaza Midwood Charlotte NC. Specializing in craftsman homes, bungalows, and historic properties. BBB A+ rated, veteran-owned. Free estimates for roof repair and replacement.',
  keywords: [
    'roofing plaza midwood charlotte nc',
    'roofers plaza midwood',
    'plaza midwood roof repair',
    'plaza midwood roof replacement',
    'craftsman home roofing charlotte',
    'historic home roofing plaza midwood',
    'bungalow roofing charlotte nc',
    'plaza midwood roofing contractor',
    'roof repair plaza midwood charlotte',
    'best roofer plaza midwood',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-plaza-midwood-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing Plaza Midwood Charlotte NC | Historic Craftsman Homes | Best Roofing Now',
    description:
      'BBB A+ rated roofing contractor serving Plaza Midwood. Experts in craftsman homes and historic properties. Free estimates for all roofing services.',
    url: `${SITE_CONFIG.url}/roofing-plaza-midwood-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.neighborhoods.plazaMidwood,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Plaza Midwood Charlotte NC',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Craftsman Home Roofing',
    description: 'Specialized roofing for Plaza Midwood\'s iconic craftsman bungalows and historic homes.',
    href: '/services/residential-roofing',
  },
  {
    icon: Wrench,
    title: 'Historic Roof Repair',
    description: 'Careful repairs that preserve the character and integrity of older homes.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with materials that complement historic architecture.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Comprehensive inspections for older homes with detailed condition reports.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Quick response to storm damage with insurance claim assistance.',
    href: '/services/storm-damage',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'Roofing solutions for Plaza Midwood\'s eclectic mix of shops and restaurants.',
    href: '/services/commercial-roofing',
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
    title: 'Historic Home Experts',
    description: 'Experience working with Plaza Midwood\'s unique craftsman and bungalow architecture.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability insurance.',
  },
  {
    icon: Users,
    title: 'Certified Installers',
    description: 'CertainTeed, GAF, and Owens Corning certified for premium warranty options.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'We work around your schedule and respect your neighborhood\'s character.',
  },
];

// Nearby neighborhoods
const nearbyNeighborhoods = [
  'Commonwealth',
  'Chantilly',
  'Elizabeth',
  'NoDa',
  'Villa Heights',
  'Belmont',
  'Shamrock Hills',
  'Merry Oaks',
];

// FAQs specific to Plaza Midwood
const faqs = [
  {
    question: 'Do you have experience with Plaza Midwood\'s craftsman homes?',
    answer:
      'Absolutely! Best Roofing Now has extensive experience working with Plaza Midwood\'s beautiful craftsman bungalows and historic homes. We understand the unique architectural features of these homes, including their distinctive rooflines, exposed rafter tails, and decorative brackets. We use materials and techniques that preserve the historic character while providing modern protection.',
  },
  {
    question: 'What roofing materials work best for historic homes in Plaza Midwood?',
    answer:
      'For Plaza Midwood\'s craftsman homes, we often recommend architectural shingles that mimic the look of traditional materials. CertainTeed Landmark and GAF Timberline HDZ are excellent choices that provide a dimensional appearance similar to wood shake while offering superior durability. For homeowners seeking authenticity, we also offer slate and cedar shake options.',
  },
  {
    question: 'How do you protect my landscaping during a roofing project?',
    answer:
      'Plaza Midwood homes often have beautiful mature landscaping. We take extra care to protect your gardens, shrubs, and trees during the project. We use tarps and plywood to shield plants, carefully position dumpsters to minimize impact, and perform thorough cleanup including magnetic sweeps to collect any stray nails.',
  },
  {
    question: 'Do older Plaza Midwood homes need special ventilation considerations?',
    answer:
      'Yes, many older homes in Plaza Midwood were built before modern ventilation standards. During our inspection, we assess your attic ventilation and may recommend improvements to prevent moisture buildup, extend roof life, and improve energy efficiency. Proper ventilation is especially important in Charlotte\'s humid climate.',
  },
  {
    question: 'Can you match existing roofing materials on my historic home?',
    answer:
      'We specialize in matching roofing materials for repairs and partial replacements on historic homes. Our team can source materials that closely match your existing shingles in color, style, and texture. For complete replacements, we help you choose materials that complement your home\'s architectural style.',
  },
  {
    question: 'How much does roof replacement cost in Plaza Midwood?',
    answer:
      'Roof replacement costs in Plaza Midwood typically range from $8,000 to $20,000 for most craftsman bungalows, depending on size, pitch, and material choice. Historic homes with complex rooflines or special material requirements may be higher. We provide free, detailed estimates with no obligation.',
  },
  {
    question: 'Do you offer financing for Plaza Midwood homeowners?',
    answer:
      'Yes! We offer flexible financing options to help Plaza Midwood homeowners invest in quality roofing. We partner with trusted lenders to provide competitive rates and terms. Many homeowners qualify for 0% APR for 12-18 months or low monthly payments on longer terms.',
  },
  {
    question: 'How long does a typical roof replacement take in Plaza Midwood?',
    answer:
      'Most craftsman bungalows in Plaza Midwood can be completed in 1-2 days. Larger homes or those with complex rooflines may take 2-3 days. We work efficiently while maintaining quality and being respectful of your neighbors in this close-knit community.',
  },
];

export default function RoofingPlazaMidwoodCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Plaza Midwood Charlotte NC', url: `${SITE_CONFIG.url}/roofing-plaza-midwood-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.neighborhoods.plazaMidwood}
            alt="Roofing services in Plaza Midwood Charlotte NC - craftsman homes and historic bungalows"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Plaza Midwood, Charlotte NC</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Plaza Midwood <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Expert Roofing for Historic Craftsman Homes
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Plaza Midwood&apos;s eclectic charm deserves roofing contractors who understand historic homes.
              Best Roofing Now specializes in craftsman bungalows, historic properties, and the unique
              architectural character that makes this neighborhood special.
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

      {/* Neighborhood Introduction */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Plaza Midwood&apos;s Trusted Roofing Experts
              </h2>
              <p className="text-gray text-lg mb-4">
                Plaza Midwood is one of Charlotte&apos;s most beloved neighborhoods, known for its walkable streets,
                independent businesses, and beautiful historic homes. The craftsman bungalows and early 20th-century
                architecture give this area its distinctive character.
              </p>
              <p className="text-gray text-lg mb-4">
                At Best Roofing Now, we appreciate what makes Plaza Midwood special. Our team has experience
                working with the neighborhood&apos;s diverse housing stock, from 1920s craftsman bungalows with
                their signature low-pitched roofs and wide eaves to mid-century ranches and newer construction.
              </p>
              <p className="text-gray text-lg mb-6">
                Whether you need roof repair for your historic home on The Plaza, a full replacement for your
                bungalow on Pecan Avenue, or storm damage restoration, we deliver quality workmanship that
                respects your home&apos;s character and your neighborhood&apos;s aesthetic.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">Historic Home Specialists</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">Craftsman Bungalow Experts</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Completed roofing project in Plaza Midwood Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Services in Plaza Midwood
            </h2>
            <p className="text-gray text-lg">
              Comprehensive roofing solutions tailored to Plaza Midwood&apos;s unique homes and businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
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

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Plaza Midwood Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When your historic craftsman home needs roofing work, you want contractors who understand
                and respect the unique character of Plaza Midwood. We combine modern roofing technology
                with an appreciation for historic architecture.
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
                alt="Quality roofing installation in Plaza Midwood by Best Roofing Now"
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
                Need a Roofer in Plaza Midwood?
              </h2>
              <p className="text-white/90">
                Get a free estimate from Charlotte&apos;s trusted historic home roofing experts.
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
              <span className="text-sm font-semibold">Service Area</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serving Plaza Midwood & Nearby Neighborhoods
            </h2>
            <p className="text-gray text-lg">
              We proudly serve Plaza Midwood and all surrounding Charlotte neighborhoods.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Nearby Neighborhoods */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Nearby Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {nearbyNeighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Quick Contact</h3>
              <p className="text-gray mb-4">
                Ready to discuss your Plaza Midwood roofing project? We offer free estimates
                and can typically schedule your inspection within 1-2 business days.
              </p>
              <div className="space-y-3">
                <a
                  href={`tel:${SITE_CONFIG.phoneClean}`}
                  className="flex items-center gap-3 text-primary hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">{SITE_CONFIG.phone}</span>
                </a>
                <Link
                  href="/contact"
                  className="flex items-center gap-3 text-primary hover:text-accent transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">Schedule Free Estimate</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/roofing-contractor-charlotte-nc"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Charlotte Service Areas
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
                Plaza Midwood Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in Plaza Midwood.
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
        title="Ready to Work with Plaza Midwood's Trusted Roofers?"
        subtitle="Get a free, no-obligation estimate from our team. We understand historic homes and will provide honest recommendations for your Plaza Midwood property."
      />
    </>
  );
}
