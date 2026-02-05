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
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roofing Steele Creek Charlotte NC',
  description:
    'Professional roofing services for Steele Creek Charlotte NC. Specializing in newer subdivisions, family homes, and growing communities. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'roofing steele creek charlotte nc',
    'roofers steele creek',
    'steele creek roof repair',
    'steele creek roof replacement',
    'southwest charlotte roofing',
    'steele creek roofing contractor',
    'family home roofing steele creek',
    'subdivision roofing charlotte nc',
    'roof repair steele creek charlotte',
    'best roofer steele creek',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-steele-creek-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing Steele Creek Charlotte NC | Southwest Charlotte | Best Roofing Now',
    description:
      'BBB A+ rated roofing contractor serving Steele Creek. Experts in newer subdivisions and family homes. Free estimates for all roofing services.',
    url: `${SITE_CONFIG.url}/roofing-steele-creek-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Steele Creek Charlotte NC',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Steele Creek\'s family homes and newer subdivisions.',
    href: '/services/residential-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, wind damage, and general maintenance.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with premium shingles and extended warranties.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Comprehensive inspections to protect your home investment.',
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
    title: 'HOA Approved',
    description: 'We work within HOA guidelines and have experience with subdivision requirements.',
    href: '/services/residential-roofing',
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
    title: 'HOA Experience',
    description: 'Familiar with Steele Creek HOA requirements and approval processes.',
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
    title: 'Efficient Service',
    description: 'Quick turnaround times to minimize disruption to your family.',
  },
];

// Nearby neighborhoods
const nearbyNeighborhoods = [
  'Berewick',
  'Rivergate',
  'Whitehall',
  'Palisades',
  'Lake Wylie',
  'Pineville',
  'Yorkmont',
  'Olympic',
];

// FAQs specific to Steele Creek
const faqs = [
  {
    question: 'Do you have experience with Steele Creek\'s newer subdivisions?',
    answer:
      'Yes! Best Roofing Now has extensive experience working in Steele Creek\'s master-planned communities like Berewick, Rivergate, and others. We understand the specific requirements of newer construction, including builder-grade materials that may need upgrading, warranty considerations, and the importance of maintaining neighborhood aesthetics.',
  },
  {
    question: 'Can you work with my HOA requirements in Steele Creek?',
    answer:
      'Absolutely. We\'re familiar with the HOA approval processes common in Steele Creek subdivisions. We can help you select materials that meet your HOA\'s architectural guidelines, provide documentation needed for approval, and ensure our work meets all community standards. Many Steele Creek HOAs have approved our crews for multiple projects.',
  },
  {
    question: 'My home is only 10-15 years old. Why might I need roofing work?',
    answer:
      'Many Steele Creek homes were built during the early 2000s housing boom with builder-grade materials that may not withstand Charlotte\'s weather as well as premium options. After 10-15 years, it\'s common to see issues like curling shingles, granule loss, or minor leaks. A free inspection can identify if repairs or preventive maintenance will extend your roof\'s life.',
  },
  {
    question: 'How do you handle storm damage claims in Steele Creek?',
    answer:
      'Steele Creek\'s location in southwest Charlotte makes it susceptible to severe thunderstorms. We have extensive experience with insurance claims in this area. We provide thorough documentation, meet with adjusters, and advocate for fair settlements. Many Steele Creek roofs qualify for insurance coverage after storm events.',
  },
  {
    question: 'What roofing materials do you recommend for Steele Creek homes?',
    answer:
      'For Steele Creek\'s family homes, we typically recommend architectural shingles like CertainTeed Landmark or GAF Timberline HDZ. These offer excellent durability, curb appeal, and come in colors that complement the neighborhood\'s aesthetic. For homeowners wanting premium options, we offer impact-resistant shingles that may qualify for insurance discounts.',
  },
  {
    question: 'How much does roof replacement cost in Steele Creek?',
    answer:
      'Roof replacement costs in Steele Creek typically range from $8,000 to $18,000 for most family homes, depending on size, pitch, and material choice. Many homes in the area are similarly sized, so costs tend to fall within a predictable range. We provide free, detailed estimates specific to your home.',
  },
  {
    question: 'Do you offer financing for Steele Creek homeowners?',
    answer:
      'Yes! We offer flexible financing options to help Steele Creek families invest in quality roofing without straining their budget. We partner with trusted lenders to provide competitive rates. Many homeowners qualify for 0% APR for 12-18 months or affordable monthly payments on longer terms.',
  },
  {
    question: 'How quickly can you complete a roofing project in Steele Creek?',
    answer:
      'Most Steele Creek homes can be completed in 1-2 days. We work efficiently while maintaining quality, allowing your family to return to normal life quickly. We\'re also respectful of neighbors and work within reasonable hours to minimize disruption to the community.',
  },
];

export default function RoofingSteeleCreekCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Steele Creek Charlotte NC', url: `${SITE_CONFIG.url}/roofing-steele-creek-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Roofing services in Steele Creek Charlotte NC - family homes and subdivisions"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Steele Creek, Southwest Charlotte NC</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Steele Creek <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Southwest Charlotte&apos;s Family Roofing Experts
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Steele Creek&apos;s growing communities deserve roofing contractors who understand modern
              subdivisions. Best Roofing Now provides expert roofing services for family homes,
              working within HOA guidelines while delivering exceptional quality.
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
                Steele Creek&apos;s Trusted Roofing Professionals
              </h2>
              <p className="text-gray text-lg mb-4">
                Steele Creek has transformed from a quiet corner of southwest Charlotte into one of the
                city&apos;s fastest-growing areas. Master-planned communities like Berewick and Rivergate
                offer modern amenities and family-friendly living, while established neighborhoods
                provide character and community.
              </p>
              <p className="text-gray text-lg mb-4">
                Best Roofing Now understands what Steele Creek homeowners need: reliable service,
                HOA-compliant materials, efficient project timelines, and roofing that protects your
                family and investment. We&apos;ve completed numerous projects throughout the area and
                understand the specific needs of this growing community.
              </p>
              <p className="text-gray text-lg mb-6">
                Whether your home is in a newer subdivision or an established Steele Creek neighborhood,
                we deliver the same commitment to quality, value, and customer service that has made us
                one of Charlotte&apos;s most trusted roofing contractors.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">HOA Approved</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">Family-Focused Service</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Completed roofing project in Steele Creek Charlotte NC"
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
              Roofing Services in Steele Creek
            </h2>
            <p className="text-gray text-lg">
              Complete roofing solutions for Steele Creek&apos;s family homes and growing communities.
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
                Why Steele Creek Families Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Steele Creek homeowners want roofing contractors who understand subdivision living.
                We work efficiently, communicate clearly, and deliver quality work that meets
                HOA standards and protects your family.
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
                src={IMAGES.houses.house1}
                alt="Quality roofing for Steele Creek family homes by Best Roofing Now"
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
                Need a Roofer in Steele Creek?
              </h2>
              <p className="text-white/90">
                Get a free estimate from southwest Charlotte&apos;s trusted roofing experts.
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
              Serving Steele Creek & Nearby Neighborhoods
            </h2>
            <p className="text-gray text-lg">
              We proudly serve Steele Creek and all surrounding southwest Charlotte neighborhoods.
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
                Ready to discuss your Steele Creek roofing project? We offer free estimates
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
                Steele Creek Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in Steele Creek.
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
        slug="roofing-steele-creek-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-steele-creek-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Roofing Steele Creek"

      />

      <CTASection
        title="Ready to Work with Steele Creek's Trusted Roofing Experts?"
        subtitle="Get a free, no-obligation estimate from our team. We understand subdivision requirements and will provide honest recommendations for your Steele Creek home."
      />
    </>
  );
}
