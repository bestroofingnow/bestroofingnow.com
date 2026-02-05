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
  title: 'Roofing NoDa Charlotte NC',
  description:
    'Professional roofing services for NoDa Charlotte NC. Specializing in historic mill homes, arts district properties, and mixed-use buildings. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'roofing noda charlotte nc',
    'roof repair noda',
    'noda roofers',
    'noda roof replacement',
    'arts district roofing charlotte',
    'historic mill home roofing',
    'north davidson roofing',
    'noda roofing contractor',
    'roof repair north davidson charlotte',
    'best roofer noda',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-noda-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing NoDa Charlotte NC | Arts District Roofers | Best Roofing Now',
    description:
      'BBB A+ rated roofing contractor serving NoDa. Experts in historic mill properties and arts district buildings. Free estimates for all roofing services.',
    url: `${SITE_CONFIG.url}/roofing-noda-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.neighborhoods.noda,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in NoDa Charlotte NC Arts District',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Historic Mill Home Roofing',
    description: 'Expert roofing for NoDa\'s converted mill homes and historic worker cottages.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial & Mixed-Use',
    description: 'Roofing solutions for galleries, studios, restaurants, and mixed-use buildings.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, storm damage, and general wear.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Complete tear-off and replacement with materials that honor NoDa\'s character.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Comprehensive inspections with detailed reports for older properties.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Quick storm response with insurance claim assistance.',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Charlotte homeowners.`,
  },
  {
    icon: Shield,
    title: 'Arts District Experience',
    description: 'We understand NoDa\'s unique mix of historic homes and creative spaces.',
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
    title: 'Respectful Service',
    description: 'We work efficiently and respect the vibrant NoDa community atmosphere.',
  },
];

// Nearby neighborhoods
const nearbyNeighborhoods = [
  'Villa Heights',
  'Belmont',
  'Optimist Park',
  'Plaza Midwood',
  'Commonwealth',
  'Druid Hills',
  'Lockwood',
  'Elizabeth',
];

// FAQs specific to NoDa
const faqs = [
  {
    question: 'Do you work with NoDa\'s historic mill homes and cottages?',
    answer:
      'Yes! Best Roofing Now has extensive experience with NoDa\'s unique housing stock, including converted mill homes, worker cottages from the early 1900s, and renovated industrial buildings. We understand the architectural character of these properties and use materials and techniques that preserve their historic charm while providing modern protection.',
  },
  {
    question: 'Can you handle commercial roofing for NoDa businesses?',
    answer:
      'Absolutely. We serve NoDa\'s thriving business community, including galleries, art studios, breweries, restaurants, and mixed-use buildings. We offer flexible scheduling to minimize disruption to your business operations and can work around event schedules in this busy arts district.',
  },
  {
    question: 'What roofing challenges are unique to NoDa properties?',
    answer:
      'Many NoDa properties are over 100 years old with unique roof configurations from their industrial origins. Common challenges include flat roofs on converted mill buildings, unusual pitch angles on worker cottages, and integration with exposed brick and historic features. Our team has the expertise to address these challenges while maintaining the area\'s industrial-chic aesthetic.',
  },
  {
    question: 'How do you protect neighboring properties in NoDa\'s dense layout?',
    answer:
      'NoDa\'s close-knit neighborhood layout requires extra care during roofing projects. We use protective measures to shield adjacent properties, coordinate with neighbors when necessary, and maintain clean work sites. We\'re respectful of the tight spaces and community atmosphere that make NoDa special.',
  },
  {
    question: 'Do you offer flat roof services for converted mill buildings?',
    answer:
      'Yes, we specialize in flat roof systems common in NoDa\'s converted industrial spaces. We offer TPO, EPDM, and modified bitumen solutions ideal for these buildings. Proper drainage is especially important for flat roofs in Charlotte\'s climate, and we ensure your system handles our heavy rainfall.',
  },
  {
    question: 'How much does roof replacement cost in NoDa?',
    answer:
      'Roof replacement costs in NoDa vary based on building type and roof system. Residential properties typically range from $8,000 to $18,000, while commercial flat roofs may range from $5,000 to $30,000+ depending on size. We provide free, detailed estimates specific to your property.',
  },
  {
    question: 'Can you work around NoDa events and gallery crawls?',
    answer:
      'We understand NoDa\'s busy event calendar, including the popular gallery crawls and street festivals. We can schedule work around these events to minimize disruption to residents and businesses. Just let us know about any upcoming events when scheduling your project.',
  },
  {
    question: 'Do you offer emergency roofing services in NoDa?',
    answer:
      'Yes, we provide 24/7 emergency roofing services throughout NoDa. Whether you have a sudden leak at your home or water intrusion at your gallery or restaurant, our emergency team responds quickly to prevent further damage and protect your property and valuables.',
  },
];

export default function RoofingNodaCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing NoDa Charlotte NC', url: `${SITE_CONFIG.url}/roofing-noda-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.neighborhoods.noda}
            alt="Roofing services in NoDa Charlotte NC - Arts District properties"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving NoDa Arts District, Charlotte NC</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing NoDa <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Arts District Roofing Experts
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              NoDa&apos;s creative spirit deserves roofing contractors who appreciate its unique character.
              From historic mill homes to gallery spaces, Best Roofing Now provides expert roofing services
              tailored to the Arts District&apos;s diverse properties.
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
                NoDa&apos;s Trusted Roofing Professionals
              </h2>
              <p className="text-gray text-lg mb-4">
                NoDa, Charlotte&apos;s vibrant Arts District, is home to a unique mix of historic textile mill
                buildings, early 20th-century worker cottages, galleries, breweries, and creative spaces.
                This eclectic neighborhood along North Davidson Street has its own character and deserves
                roofing contractors who understand it.
              </p>
              <p className="text-gray text-lg mb-4">
                Best Roofing Now serves NoDa&apos;s residential and commercial properties with the same
                dedication to quality and craftsmanship that defines this artistic community. Whether
                you&apos;re protecting a renovated mill loft, a cottage on 36th Street, or a gallery space,
                we deliver roofing solutions that respect the neighborhood&apos;s industrial heritage.
              </p>
              <p className="text-gray text-lg mb-6">
                Our team appreciates NoDa&apos;s walkable streets, creative businesses, and tight-knit community.
                We work efficiently and respectfully, minimizing disruption while delivering exceptional results.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">Mill Building Experts</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">Commercial & Residential</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Completed roofing project in NoDa Charlotte NC"
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
              Roofing Services in NoDa
            </h2>
            <p className="text-gray text-lg">
              Complete roofing solutions for NoDa&apos;s homes, galleries, and businesses.
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
                Why NoDa Property Owners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                NoDa&apos;s mix of historic and creative spaces requires roofing contractors who can handle
                diverse challenges. From flat roofs on converted mills to pitched roofs on cottages,
                we have the expertise NoDa property owners need.
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
                alt="Quality roofing work in NoDa Charlotte by Best Roofing Now"
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
                Need a Roofer in NoDa?
              </h2>
              <p className="text-white/90">
                Get a free estimate from Charlotte&apos;s Arts District roofing experts.
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
              Serving NoDa & Nearby Neighborhoods
            </h2>
            <p className="text-gray text-lg">
              We proudly serve NoDa and all surrounding Charlotte neighborhoods.
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
                Ready to discuss your NoDa roofing project? We offer free estimates
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
                NoDa Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in NoDa.
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
        slug="roofing-noda-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-noda-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Roofing Noda"

      />

      <CTASection
        title="Ready to Work with NoDa's Trusted Roofing Experts?"
        subtitle="Get a free, no-obligation estimate from our team. We understand the Arts District's unique properties and will provide honest recommendations for your NoDa home or business."
      />
    </>
  );
}
