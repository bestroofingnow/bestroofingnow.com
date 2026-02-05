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
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roofing Dilworth Charlotte NC | Historic Home Experts | Best Roofing Now',
  description:
    'Looking for a trusted roofer in Dilworth Charlotte NC? Best Roofing Now specializes in historic home roofing, bungalows, and preservation-friendly repairs. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'roofing dilworth charlotte nc',
    'historic roofing dilworth',
    'dilworth roofing contractor',
    'historic home roofers charlotte',
    'dilworth roof repair',
    'dilworth roof replacement',
    'bungalow roofing charlotte',
    'historic preservation roofing',
    'best roofer dilworth charlotte',
    'dilworth charlotte roofing services',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-dilworth-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing Dilworth Charlotte NC | Historic Home Experts | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing contractor specializing in historic homes in Dilworth Charlotte NC. Expert roofing for bungalows and preservation projects. Free estimates.',
    url: `${SITE_CONFIG.url}/roofing-dilworth-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.neighborhoods.dilworth,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Dilworth Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Historic Home Roofing',
    description: 'Specialized roofing solutions for Dilworth\'s historic bungalows and craftsman homes.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'Expert roofing for Dilworth\'s boutique shops, restaurants, and commercial buildings.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Careful, preservation-friendly repairs for leaks, missing shingles, and storm damage.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full replacement with materials that honor Dilworth\'s historic character.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Free comprehensive inspections for Dilworth\'s historic and newer homes.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration that respects historic preservation guidelines.',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Dilworth homeowners.`,
  },
  {
    icon: Shield,
    title: 'Historic Expertise',
    description: 'Experienced with historic preservation requirements and period-appropriate materials.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability insurance.',
  },
  {
    icon: Users,
    title: 'Quality Craftsmanship',
    description: 'Meticulous attention to detail that honors Dilworth\'s architectural heritage.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services when Dilworth homeowners need us most.',
  },
];

// Dilworth neighborhoods and areas
const dilworthNeighborhoods = [
  'Dilworth Historic District',
  'Latta Park',
  'East Boulevard',
  'Park Road',
  'Worthington Avenue',
  'Dilworth East',
  'Dilworth South',
  'Kenilworth Avenue',
  'Euclid Avenue',
  'Mt. Vernon Avenue',
  'Romany Road',
  'Cleveland Avenue',
  'Scott Avenue',
  'Tremont Avenue',
  'Dilworth Gardens',
  'Dilworth Meadows',
  'Berkeley Avenue',
  'Kingston Avenue',
  'Ideal Way',
  'Myrtle Avenue',
];

// Nearby areas served
const nearbyAreas = [
  { name: 'Myers Park', href: '/roofing-myers-park-charlotte-nc' },
  { name: 'SouthPark', href: '/roofing-southpark-charlotte-nc' },
  { name: 'South End', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Elizabeth', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Cherry', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Plaza Midwood', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Uptown Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Wilmore', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Sedgefield', href: '/roofing-contractor-charlotte-nc' },
];

// FAQs specific to Dilworth
const faqs = [
  {
    question: 'Do you specialize in historic home roofing in Dilworth?',
    answer:
      'Yes, Best Roofing Now has extensive experience with historic homes in Dilworth. We understand the unique challenges of working with bungalows, craftsman homes, and other period architecture. We use materials and techniques that respect the historic character while providing modern protection.',
  },
  {
    question: 'What roofing materials are appropriate for Dilworth\'s historic homes?',
    answer:
      'For Dilworth\'s historic homes, we often recommend architectural shingles that mimic the look of original materials, slate-look shingles, or in some cases, standing seam metal roofing. We work with homeowners and can consult on materials that meet historic preservation guidelines while providing excellent protection.',
  },
  {
    question: 'How much does a roof replacement cost in Dilworth?',
    answer:
      'Roof replacement costs in Dilworth typically range from $10,000-$25,000+ depending on home size, roof complexity, and material choice. Historic homes often have unique features that require specialized attention. We provide free, detailed estimates with transparent pricing.',
  },
  {
    question: 'Do you work with the Dilworth Historic District guidelines?',
    answer:
      'Yes, we\'re familiar with the Dilworth Historic District guidelines and can help ensure your roofing project meets preservation requirements. We can recommend materials that are appropriate for historic properties and work with the Charlotte-Mecklenburg Historic Landmarks Commission when needed.',
  },
  {
    question: 'How long does a roof replacement take on a historic Dilworth home?',
    answer:
      'Historic home roof replacements in Dilworth typically take 2-4 days, depending on size and complexity. Older homes often require additional care and attention, which we factor into our timeline. We work carefully to protect your home\'s historic features during the process.',
  },
  {
    question: 'Can you match the original roofing style of my Dilworth bungalow?',
    answer:
      'In most cases, yes. We offer a range of materials designed to replicate the look of original roofing materials, including dimensional shingles that mimic wood shake, slate-look shingles, and period-appropriate colors. We\'ll work with you to find options that honor your home\'s character.',
  },
  {
    question: 'Do you handle insurance claims for storm damage in Dilworth?',
    answer:
      'Absolutely. We have extensive experience with insurance claims for storm damage in Dilworth. Historic homes may require specialized documentation, and we help navigate this process. We meet with adjusters and advocate for fair settlements that cover proper restoration.',
  },
  {
    question: 'What warranty do you provide on Dilworth roofing projects?',
    answer:
      'We offer comprehensive warranty coverage including manufacturer warranties up to 50 years on materials and our own workmanship warranty. As certified installers, we can offer enhanced warranties like GAF Golden Pledge and CertainTeed SureStart PLUS protection.',
  },
];

export default function RoofingDilworthCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Dilworth Charlotte NC', url: `${SITE_CONFIG.url}/roofing-dilworth-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.neighborhoods.dilworth}
            alt="Professional roofing contractor in Dilworth Charlotte NC - Best Roofing Now crew"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">BBB A+ Rated | Historic Home Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Dilworth <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Historic Home Roofing Experts in Charlotte's Beloved Dilworth
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now specializes in roofing for Dilworth's charming bungalows, craftsman homes,
              and historic properties. We combine modern roofing technology with an appreciation for
              Dilworth's unique architectural heritage to protect your home for generations.
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
                Historic Expertise
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Dilworth-Specific Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Preserving Dilworth's Architectural Heritage Through Expert Roofing
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Dilworth is one of Charlotte's most treasured neighborhoods, known for its tree-lined streets,
                stunning bungalows, and rich history as Charlotte's first streetcar suburb. At Best Roofing Now,
                we understand that these homes deserve specialized care that respects their architectural significance.
              </p>
              <p>
                Whether you own a classic 1920s bungalow near Latta Park, a stately craftsman on East Boulevard,
                or a beautifully restored home in the Dilworth Historic District, our team brings the expertise
                needed to protect your investment while honoring its character.
              </p>
              <p>
                We've helped dozens of Dilworth homeowners navigate the unique challenges of historic home roofing,
                from matching period-appropriate materials to working within preservation guidelines. Our
                attention to detail and respect for craftsmanship make us the trusted choice for Dilworth's
                discerning homeowners.
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
              Roofing Services for Dilworth's Historic Homes
            </h2>
            <p className="text-gray text-lg">
              From preservation-friendly repairs to complete replacements, our certified contractors
              deliver exceptional quality for Dilworth's unique homes.
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
                Why Dilworth Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Dilworth homeowners choose us because we understand the special requirements of historic
                homes. Our team combines modern roofing expertise with a deep appreciation for the
                craftsmanship that makes Dilworth homes so special.
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
                src={IMAGES.neighborhoods.dilworth}
                alt="Best Roofing Now - Trusted roofing contractor in Dilworth Charlotte NC"
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
                Need a Roofing Contractor in Dilworth?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Charlotte's historic home roofing experts.
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
              Serving All of Dilworth
            </h2>
            <p className="text-gray text-lg">
              We provide expert roofing services throughout Dilworth and surrounding Charlotte neighborhoods.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Dilworth Neighborhoods */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Dilworth Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {dilworthNeighborhoods.map((neighborhood) => (
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

      {/* Historic Preservation Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Historic Preservation Expertise
            </h2>
            <p className="text-gray text-lg">
              We understand the importance of preserving Dilworth's architectural character while
              providing modern protection for your home.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Period-Appropriate Materials</h3>
              <p className="text-gray text-sm">
                We offer materials that match the look and feel of original historic roofing while providing modern durability.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Preservation Guidelines</h3>
              <p className="text-gray text-sm">
                Familiar with Dilworth Historic District requirements and can help navigate the approval process.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Craftsman Quality</h3>
              <p className="text-gray text-sm">
                Meticulous attention to detail that honors the craftsmanship of Dilworth's original builders.
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
              Our Work in Dilworth
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roofing projects in Dilworth and surrounding historic neighborhoods.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Completed historic home roof replacement in Dilworth Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed shingle installation on Dilworth bungalow"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Aerial view of completed roof project in Dilworth"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional roofing work on Dilworth craftsman home"
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
                Dilworth Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services for Dilworth's historic homes.
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

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="roofing-dilworth-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-dilworth-charlotte-nc`}
      />

      {/* Final CTA */}
      <CTASection
        title="Ready to Work with Dilworth's Historic Home Roofing Experts?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide recommendations that respect your home's historic character."
      />
    </>
  );
}
