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
  title: 'Roofing Ballantyne Charlotte NC | South Charlotte Roofers | Best Roofing Now',
  description:
    'Looking for a trusted roofer in Ballantyne Charlotte NC? Best Roofing Now serves the Ballantyne Corporate Park area with premium roofing services for upscale homes. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'roofing ballantyne charlotte nc',
    'roofers ballantyne',
    'ballantyne roofing contractor',
    'south charlotte roofers',
    'ballantyne roof repair',
    'ballantyne roof replacement',
    'roofing company ballantyne nc',
    'ballantyne corporate park roofers',
    'upscale home roofing ballantyne',
    'best roofer ballantyne charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-ballantyne-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing Ballantyne Charlotte NC | South Charlotte Roofers | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing contractor serving Ballantyne Charlotte NC. Premium roofing services for upscale homes near Ballantyne Corporate Park. Free estimates.',
    url: `${SITE_CONFIG.url}/roofing-ballantyne-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Ballantyne Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Luxury Home Roofing',
    description: 'Premium roofing solutions for Ballantyne\'s upscale homes with designer shingles and tile options.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'Expert commercial roofing for Ballantyne Corporate Park businesses and office buildings.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, and storm damage in Ballantyne.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with premium materials and extended warranties.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Free comprehensive inspections for Ballantyne homeowners with detailed reports.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration and insurance claim assistance for Ballantyne residents.',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Ballantyne homeowners.`,
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
    title: 'Premium Materials',
    description: 'We use only the finest materials from CertainTeed, GAF, and Owens Corning for lasting quality.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services when Ballantyne homeowners need us most.',
  },
];

// Ballantyne neighborhoods and communities
const ballantyneNeighborhoods = [
  'Ballantyne Country Club',
  'Ballantyne Corporate Park',
  'Piper Glen',
  'Ballantyne Commons',
  'Providence Crossing',
  'Ardrey Kell',
  'Ballantyne Meadows',
  'Ballantrye',
  'Providence Plantation',
  'Provincetowne',
  'Rea Farms',
  'Bridgehampton',
  'Berkeley',
  'Kingswood',
  'Providence Estates',
  'Carmel Commons',
  'Blakeney',
  'Stonecroft',
  'Whitegate',
  'Huntington Forest',
];

// Nearby areas served
const nearbyAreas = [
  { name: 'South Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Pineville', href: '/locations/pineville-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'SouthPark', href: '/roofing-southpark-charlotte-nc' },
  { name: 'Myers Park', href: '/roofing-myers-park-charlotte-nc' },
  { name: 'Weddington', href: '/locations/weddington-nc' },
  { name: 'Waxhaw', href: '/locations/waxhaw-nc' },
  { name: 'Marvin', href: '/locations/marvin-nc' },
  { name: 'Indian Trail', href: '/locations/indian-trail-nc' },
  { name: 'Fort Mill, SC', href: '/locations/fort-mill-sc' },
];

// FAQs specific to Ballantyne
const faqs = [
  {
    question: 'What roofing services do you offer in Ballantyne Charlotte NC?',
    answer:
      'Best Roofing Now provides complete roofing services in Ballantyne including roof repair, roof replacement, new roof installation, storm damage repair, emergency roofing services, and free roof inspections. We specialize in premium materials and designer shingles that complement Ballantyne\'s upscale homes.',
  },
  {
    question: 'Why should Ballantyne homeowners choose Best Roofing Now?',
    answer:
      'Ballantyne homeowners choose us because we understand the high standards of this prestigious community. We\'re BBB A+ rated, veteran-owned, and use only premium materials from CertainTeed, GAF, and Owens Corning. Our attention to detail and commitment to quality matches the expectations of Ballantyne\'s discerning residents.',
  },
  {
    question: 'How much does a roof replacement cost in Ballantyne?',
    answer:
      'Roof replacement costs in Ballantyne typically range from $12,000-$35,000+ depending on home size, roof complexity, and material choice. Many Ballantyne homes feature larger footprints and premium architectural shingles or tile roofing. We provide free, detailed estimates with transparent pricing.',
  },
  {
    question: 'Do you work with HOAs in Ballantyne?',
    answer:
      'Yes, we have extensive experience working with Ballantyne HOAs and understand the architectural guidelines and approval processes. We can help you select materials and colors that meet HOA requirements while enhancing your home\'s curb appeal and value.',
  },
  {
    question: 'How long does a roof replacement take in Ballantyne?',
    answer:
      'Most Ballantyne roof replacements are completed in 2-4 days, depending on the size and complexity of your home. Larger estates may take 4-6 days. We work efficiently while maintaining meticulous attention to detail and always clean up thoroughly.',
  },
  {
    question: 'Do you offer financing for roofing projects in Ballantyne?',
    answer:
      'Yes, we offer flexible financing options for Ballantyne homeowners including 0% APR for qualified buyers. This makes it easier to invest in premium roofing materials that protect your investment and enhance your home\'s value.',
  },
  {
    question: 'What warranty do you provide on Ballantyne roofing projects?',
    answer:
      'We offer comprehensive warranty coverage including manufacturer warranties up to 50 years on materials and our own workmanship warranty. As certified installers, we can offer enhanced warranties like GAF Golden Pledge and CertainTeed SureStart PLUS protection.',
  },
  {
    question: 'Do you handle insurance claims for storm damage in Ballantyne?',
    answer:
      'Absolutely. We have extensive experience with insurance claims for storm damage in Ballantyne. We provide thorough documentation, meet with adjusters, and advocate for fair settlements. Many Ballantyne roofs qualify for full or partial insurance coverage after storm events.',
  },
];

export default function RoofingBallantyneCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Ballantyne Charlotte NC', url: `${SITE_CONFIG.url}/roofing-ballantyne-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero2}
            alt="Professional roofing contractor in Ballantyne Charlotte NC - Best Roofing Now crew"
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
              Roofing Ballantyne <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              South Charlotte's Premier Roofing Company for Upscale Homes
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is the trusted choice for Ballantyne homeowners seeking premium roofing services.
              From the Ballantyne Corporate Park area to Piper Glen and beyond, we deliver exceptional quality
              with materials and workmanship that match your home's prestige.
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
                Premium Materials
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Ballantyne-Specific Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Premium Roofing Services for Ballantyne's Finest Homes
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Ballantyne represents the pinnacle of Charlotte living, with its beautiful master-planned communities,
                world-class golf courses, and prestigious corporate headquarters. At Best Roofing Now, we understand
                that Ballantyne homeowners expect nothing less than excellence when it comes to protecting their investment.
              </p>
              <p>
                Whether you own a stately home in Ballantyne Country Club, a modern residence near Ballantyne Corporate Park,
                or a family home in one of the area's many desirable neighborhoods, our team delivers roofing solutions
                that match your home's quality and your high standards.
              </p>
              <p>
                We specialize in premium architectural shingles, designer roofing systems, and luxury materials that
                complement Ballantyne's upscale aesthetic. Our certified installers are trained to handle complex roof
                designs, steep pitches, and custom features that are common in this area's distinctive homes.
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
              Complete Roofing Services in Ballantyne
            </h2>
            <p className="text-gray text-lg">
              From premium roof replacements to emergency repairs, our certified contractors deliver
              exceptional quality for Ballantyne's discerning homeowners.
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
                Why Ballantyne Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When you're looking for a roofing contractor in Ballantyne, you want a company that understands
                the expectations of premium homeowners. Best Roofing Now has built our reputation on delivering
                exceptional quality and service that matches the standards of South Charlotte's finest neighborhoods.
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
                alt="Best Roofing Now - Trusted roofing contractor in Ballantyne Charlotte NC"
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
                Need a Roofing Contractor in Ballantyne?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from South Charlotte's most trusted roofing company.
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
              Serving All Ballantyne Communities
            </h2>
            <p className="text-gray text-lg">
              We provide premium roofing services throughout Ballantyne and surrounding South Charlotte neighborhoods.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Ballantyne Neighborhoods */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Ballantyne Communities We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {ballantyneNeighborhoods.map((neighborhood) => (
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
              Certified for Premium Roofing Excellence
            </h2>
            <p className="text-gray text-lg">
              Our certifications from industry-leading manufacturers mean Ballantyne homeowners get premium
              materials backed by the best warranty coverage available.
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
              Our Work in South Charlotte
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roofing projects in Ballantyne and surrounding areas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Completed residential roof replacement in Ballantyne Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed shingle installation in Ballantyne"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of completed roof project in South Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional roofing work in Ballantyne area"
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
                Ballantyne Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in Ballantyne Charlotte NC.
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
        title="Ready to Work with Ballantyne's Best Roofers?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations tailored to your Ballantyne home."
      />
    </>
  );
}
