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
  title: 'Roofing University City Charlotte NC | UNCC Area | Best Roofing Now',
  description:
    'Looking for a trusted roofer in University City Charlotte NC? Best Roofing Now serves the UNCC area with professional roofing services for homes, apartments, and student housing. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'roofing university city charlotte nc',
    'roofers university area',
    'university city roofing contractor',
    'UNCC area roofers',
    'university city roof repair',
    'university city roof replacement',
    'roofing company university city nc',
    'student housing roofing charlotte',
    'apartment roofing university city',
    'best roofer university city charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-university-city-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing University City Charlotte NC | UNCC Area | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing contractor serving University City Charlotte NC. Professional roofing services for homes, student housing, and apartments near UNCC. Free estimates.',
    url: `${SITE_CONFIG.url}/roofing-university-city-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero4,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in University City Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for University City homes with quality materials at competitive prices.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Multi-Family & Apartments',
    description: 'Expert roofing for apartment complexes, student housing, and multi-family properties near UNCC.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, affordable repairs for leaks, missing shingles, and storm damage in University City.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with quality materials and excellent warranties.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Free comprehensive inspections for University City homeowners and property managers.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration and insurance claim assistance for UNCC area residents.',
    href: '/services/storm-damage',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied University City homeowners.`,
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
    title: 'Affordable Pricing',
    description: 'Competitive pricing that works for families, investors, and first-time homebuyers.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services when University City residents need us most.',
  },
];

// University City neighborhoods and communities
const universityCityNeighborhoods = [
  'University City',
  'UNCC Campus Area',
  'University Research Park',
  'Mallard Creek',
  'Highland Creek',
  'University Downs',
  'Autumnwood',
  'University Meadows',
  'Back Creek Church Road',
  'Harris Boulevard Corridor',
  'McCullough',
  'University Place',
  'Chancellor Park',
  'Prosperity Church Road',
  'Mallard Creek Church Road',
  'Rocky River Road',
  'W.T. Harris Boulevard',
  'University Pointe',
  'The Ponds at Mallard Creek',
  'Cambridge Heights',
];

// Nearby areas served
const nearbyAreas = [
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Harrisburg', href: '/locations/harrisburg-nc' },
  { name: 'Mint Hill', href: '/locations/mint-hill-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'NoDa', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Plaza Midwood', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Kannapolis', href: '/locations/kannapolis-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
];

// FAQs specific to University City
const faqs = [
  {
    question: 'What roofing services do you offer in University City Charlotte NC?',
    answer:
      'Best Roofing Now provides complete roofing services in University City including roof repair, roof replacement, new roof installation, storm damage repair, emergency roofing services, and free roof inspections. We work with homeowners, property managers, and investors in the UNCC area.',
  },
  {
    question: 'Do you work with apartment complexes and student housing near UNCC?',
    answer:
      'Yes, we have extensive experience with multi-family properties, apartment complexes, and student housing near UNC Charlotte. We understand the unique needs of property managers and can work around tenant schedules. We also offer volume pricing for multiple units.',
  },
  {
    question: 'How much does a roof replacement cost in University City?',
    answer:
      'Roof replacement costs in University City typically range from $8,000-$18,000 for most homes, depending on size, roof complexity, and material choice. We offer competitive pricing and financing options to make quality roofing accessible. Free estimates with transparent pricing.',
  },
  {
    question: 'Why should University City homeowners choose Best Roofing Now?',
    answer:
      'University City homeowners choose us because we offer the best combination of quality and value. We\'re BBB A+ rated, veteran-owned, and use quality materials at competitive prices. Our location near University City means faster response times and lower travel costs passed on to you.',
  },
  {
    question: 'How long does a roof replacement take in University City?',
    answer:
      'Most University City roof replacements are completed in 1-2 days for typical homes. Larger homes or complex roofs may take 2-3 days. We work efficiently to minimize disruption and always clean up thoroughly when the job is done.',
  },
  {
    question: 'Do you offer financing for roofing projects in University City?',
    answer:
      'Yes, we offer flexible financing options for University City homeowners including 0% APR for qualified buyers. This is especially helpful for first-time homebuyers and young families in the UNCC area who need a new roof but want manageable monthly payments.',
  },
  {
    question: 'Do you handle insurance claims for storm damage in University City?',
    answer:
      'Absolutely. We have extensive experience with insurance claims for storm damage in University City. Charlotte\'s severe weather means storm damage is common, and we help homeowners navigate the claims process, meet with adjusters, and get fair settlements.',
  },
  {
    question: 'Can you work with investment properties and rentals in University City?',
    answer:
      'Yes, we work with many real estate investors who own rental properties in University City. We understand the importance of protecting your investment while managing costs. We offer volume discounts for investors with multiple properties and can coordinate work around tenant schedules.',
  },
];

export default function RoofingUniversityCityCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing University City Charlotte NC', url: `${SITE_CONFIG.url}/roofing-university-city-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero4}
            alt="Professional roofing contractor in University City Charlotte NC - Best Roofing Now crew"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">BBB A+ Rated | Veteran-Owned</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing University City <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Professional Roofing Services for the UNCC Area
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is the trusted choice for University City residents seeking quality roofing at
              competitive prices. From Highland Creek to Mallard Creek and the areas surrounding UNC Charlotte,
              we deliver exceptional service for homeowners, investors, and property managers.
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
                Competitive Pricing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* University City-Specific Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Quality Roofing Services for University City's Diverse Community
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                University City is one of Charlotte's most dynamic areas, home to UNC Charlotte, University Research Park,
                and a diverse mix of single-family homes, townhomes, and apartment communities. At Best Roofing Now,
                we understand the unique needs of this vibrant community.
              </p>
              <p>
                Whether you're a first-time homebuyer in Highland Creek, a property investor with rentals near campus,
                or a property manager overseeing student housing, we provide professional roofing services at prices
                that work for your budget. Our office on Mallard Creek Road means we're local to University City
                and can respond quickly to your needs.
              </p>
              <p>
                We've helped hundreds of University City homeowners protect their investments with quality roofing
                that lasts. From affordable repairs to complete replacements, our certified team delivers
                exceptional value without cutting corners on quality or safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Roofing Services in University City
            </h2>
            <p className="text-gray text-lg">
              From single-family homes to multi-family properties, our certified contractors deliver
              quality roofing at competitive prices throughout the UNCC area.
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
                Why University City Residents Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                University City residents choose us because we offer the best value in Charlotte roofing.
                We're local to the UNCC area, which means faster response times and lower costs. Our
                BBB A+ rating and 5-star reviews prove we deliver on our promises.
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
                src={IMAGES.realProjects.project1}
                alt="Best Roofing Now - Trusted roofing contractor in University City Charlotte NC"
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
                Need a Roofing Contractor in University City?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from your local UNCC area roofing company.
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
              Serving All University City Communities
            </h2>
            <p className="text-gray text-lg">
              We provide professional roofing services throughout University City and surrounding North Charlotte neighborhoods.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* University City Neighborhoods */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">University City Communities We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {universityCityNeighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Nearby Areas We Serve</h3>
              <div className="grid grid-cols-2 gap-3">
                {nearbyAreas.map((area) => (
                  <Link
                    key={area.name}
                    href={area.href}
                    className="flex items-center gap-2 text-gray hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>{area.name}</span>
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

      {/* Certifications Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Certified Roofing Professionals
            </h2>
            <p className="text-gray text-lg">
              Our certifications from industry-leading manufacturers mean University City homeowners get
              quality materials backed by excellent warranty coverage.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">CertainTeed SELECT ShingleMaster</h3>
              <p className="text-gray text-sm">
                Top-tier certification with access to premium warranties and specialized training.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">GAF Factory-Certified</h3>
              <p className="text-gray text-sm">
                Authorized to offer GAF's Golden Pledge warranty - the best in the industry.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Owens Corning Preferred</h3>
              <p className="text-gray text-sm">
                Preferred Contractor status with Owens Corning for extended warranty options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Work in University City
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roofing projects in University City and surrounding areas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project2}
                alt="Completed residential roof replacement in University City Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.pmi1}
                alt="PMI roofing project in University City"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Aerial view of completed roof project in UNCC area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project4}
                alt="Professional roofing work in University City area"
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
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                University City Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in University City Charlotte NC.
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
        title="Ready to Work with University City's Best Roofers?"
        subtitle="Get a free, no-obligation estimate from our certified team. We're local to the UNCC area and ready to help protect your home."
      />
    </>
  );
}
