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
  ThumbsUp,
  Hammer,
  FileCheck,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roofing Charlotte NC | #1 Rated Roofer | Best Roofing Now',
  description:
    'Looking for quality roofing in Charlotte NC? Best Roofing Now is the #1 rated roofing company with 500+ roofs completed. BBB A+ rated, veteran-owned. Complete roofing services including repairs, replacements, inspections & storm damage. Free estimates!',
  keywords: [
    'roofing charlotte nc',
    'roofing in charlotte nc',
    'charlotte nc roofing',
    'roofing services charlotte nc',
    'local roofing charlotte nc',
    'best roofing charlotte nc',
    'top rated roofing charlotte',
    'quality roofing charlotte nc',
    'reliable roofing charlotte',
    'trusted roofing charlotte nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing Charlotte NC | #1 Rated Roofer | Best Roofing Now',
    description:
      '#1 rated roofing company in Charlotte NC. BBB A+ rated, veteran-owned with 500+ roofs completed. Complete residential & commercial roofing services. Free estimates!',
    url: `${SITE_CONFIG.url}/roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Professional roofing Charlotte NC - Best Roofing Now team completing a roof installation',
      },
    ],
  },
};

// Comprehensive roofing services
const roofingServices = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Charlotte homes including asphalt shingles, metal roofing, tile, and slate.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems, and commercial roof repairs for Charlotte businesses of all sizes.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, flashing issues, and all types of roof damage.',
    href: '/services/roof-repair',
  },
  {
    icon: Hammer,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with premium materials and manufacturer-backed warranties up to 50 years.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Free comprehensive inspections with detailed reports, photos, and honest assessments.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: '24/7 emergency storm damage restoration with full insurance claim assistance.',
    href: '/services/storm-damage',
  },
  {
    icon: FileCheck,
    title: 'Insurance Claims',
    description: 'Expert assistance navigating insurance claims for storm damage and covered repairs.',
    href: '/services/storm-damage',
  },
  {
    icon: Shield,
    title: 'Roof Maintenance',
    description: 'Preventive maintenance programs to extend roof life and catch small issues before they grow.',
    href: '/services/roof-repair',
  },
];

// Why Charlotte homeowners choose us
const whyChooseUs = [
  {
    icon: Star,
    title: '#1 Rated in Charlotte',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews make us the top-rated roofing company in Charlotte NC.`,
  },
  {
    icon: Award,
    title: 'BBB A+ Accredited',
    description: 'Better Business Bureau A+ rating with zero complaints. We stand behind every job.',
  },
  {
    icon: Shield,
    title: 'Veteran-Owned & Operated',
    description: 'Military values of integrity, excellence, and service guide everything we do.',
  },
  {
    icon: CheckCircle,
    title: 'Fully Licensed & Insured',
    description: 'NC licensed roofing contractor with comprehensive liability and workers comp insurance.',
  },
  {
    icon: Users,
    title: 'Manufacturer Certified',
    description: 'CertainTeed SELECT ShingleMaster, GAF Factory-Certified, and Owens Corning Preferred.',
  },
  {
    icon: ThumbsUp,
    title: 'Transparent Pricing',
    description: 'Detailed written estimates with no hidden fees. We honor our quotes.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock availability for roofing emergencies throughout Charlotte.',
  },
  {
    icon: FileCheck,
    title: 'Industry-Leading Warranties',
    description: 'Up to 50-year manufacturer warranties plus our own workmanship guarantee.',
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
  'Providence Plantation',
  'Stonehaven',
  'Sharon Woods',
  'Foxcroft',
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

// Customer testimonials
const testimonials = [
  {
    name: 'Michael R.',
    location: 'Myers Park, Charlotte',
    rating: 5,
    text: 'Best Roofing Now replaced our entire roof after storm damage. They handled the insurance claim, kept us informed throughout the process, and the final result exceeded our expectations. Truly the best roofing company in Charlotte!',
  },
  {
    name: 'Sarah T.',
    location: 'Ballantyne, Charlotte',
    rating: 5,
    text: 'We got quotes from several roofing companies in Charlotte and Best Roofing Now stood out for their professionalism and transparent pricing. No surprise charges, excellent communication, and beautiful workmanship.',
  },
  {
    name: 'David & Linda K.',
    location: 'Dilworth, Charlotte',
    rating: 5,
    text: 'After years of dealing with roof leaks, we finally found a roofing company we trust. Their team diagnosed the problem correctly the first time and fixed it permanently. Highly recommend their roofing services!',
  },
];

// FAQs about roofing in Charlotte
const faqs = [
  {
    question: 'What roofing services do you offer in Charlotte NC?',
    answer:
      'Best Roofing Now provides comprehensive roofing services throughout Charlotte NC including residential and commercial roofing, roof repairs, complete roof replacements, roof inspections, storm damage restoration, gutter installation, and emergency roofing services. We work with all roofing materials including asphalt shingles, metal roofing, tile, slate, TPO, EPDM, and flat roof systems.',
  },
  {
    question: 'How much does roofing cost in Charlotte NC?',
    answer:
      'Roofing costs in Charlotte vary based on several factors including roof size, pitch, material choice, and project complexity. Minor repairs typically range from $200-$1,500, while complete roof replacements average $8,000-$25,000 for most homes. We provide free, detailed estimates with transparent pricing and no hidden fees so you know exactly what to expect.',
  },
  {
    question: 'Why is Best Roofing Now the #1 rated roofing company in Charlotte?',
    answer:
      `Best Roofing Now has earned our #1 rating through exceptional workmanship, honest assessments, and dedicated customer service. With ${SITE_CONFIG.googleReviewCount}+ five-star Google reviews, BBB A+ accreditation, and veteran-owned values of integrity and excellence, we consistently deliver results that exceed expectations. Our manufacturer certifications from CertainTeed, GAF, and Owens Corning allow us to offer industry-leading warranties.`,
  },
  {
    question: 'Do you offer free roofing estimates in Charlotte?',
    answer:
      'Yes! Best Roofing Now provides completely free, no-obligation estimates for all roofing services in Charlotte and the surrounding metro area. Our certified inspectors will thoroughly examine your roof, identify any issues, document everything with photos, and provide a detailed written proposal. There is absolutely no pressure - we believe in earning your business through honest assessments and quality work.',
  },
  {
    question: 'How long does a roof replacement take in Charlotte?',
    answer:
      'Most residential roof replacements in Charlotte are completed in 1-3 days, depending on the size and complexity of the roof. Larger homes or projects involving structural repairs may take 4-5 days. We always provide a timeline estimate before starting work and keep you informed of progress throughout the project.',
  },
  {
    question: 'What areas of Charlotte do you provide roofing services?',
    answer:
      'We provide roofing services throughout all of Charlotte including Myers Park, Dilworth, Ballantyne, South End, NoDa, University City, SouthPark, Plaza Midwood, Eastover, Cotswold, and many more neighborhoods. We also serve surrounding cities like Huntersville, Matthews, Cornelius, Davidson, Mooresville, Pineville, Mint Hill, Concord, Gastonia, and into South Carolina including Rock Hill and Fort Mill.',
  },
  {
    question: 'Do you help with roofing insurance claims in Charlotte?',
    answer:
      'Absolutely! We have extensive experience helping Charlotte homeowners navigate insurance claims for storm damage and other covered repairs. Our team provides detailed documentation, meets with insurance adjusters on your behalf, and advocates for fair settlements. Many Charlotte roofs qualify for insurance coverage after hail storms, wind damage, and other weather events.',
  },
  {
    question: 'What roofing materials are best for Charlotte NC homes?',
    answer:
      'The best roofing material depends on your specific needs, budget, and aesthetic preferences. Asphalt architectural shingles are the most popular choice in Charlotte due to their durability, affordability, and variety of styles. Metal roofing is growing in popularity for its longevity (40-70 years) and energy efficiency. We help homeowners choose the right material based on their home style, local HOA requirements, and long-term goals.',
  },
  {
    question: 'How do I know if I need a roof repair or full replacement?',
    answer:
      'Several factors determine whether repair or replacement is the best option: the age of your roof (most asphalt roofs last 20-25 years), extent of damage, number of previous repairs, and overall condition. Our free inspections provide honest assessments - we will never recommend a replacement when a repair will solve the problem. We document everything with photos so you can make an informed decision.',
  },
  {
    question: 'Do you offer emergency roofing services in Charlotte?',
    answer:
      'Yes, Best Roofing Now offers 24/7 emergency roofing services throughout Charlotte and surrounding areas. Whether you have an active leak, storm damage, or a tree fell on your roof, our emergency team can typically respond within 1-4 hours. We will secure your property, prevent further damage, and document everything for insurance purposes.',
  },
];

export default function RoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Charlotte NC', url: `${SITE_CONFIG.url}/roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Professional roofing Charlotte NC - Best Roofing Now team installing a new roof"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold">#1 Rated Roofing Company | Veteran-Owned</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Charlotte&apos;s #1 rated roofing company with {SITE_CONFIG.roofsInstalled}+ roofs completed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now delivers premium roofing services throughout Charlotte NC. From expert repairs
              to complete replacements, our certified team provides exceptional quality backed by industry-leading
              warranties, a BBB A+ rating, and {SITE_CONFIG.googleReviewCount}+ five-star reviews.
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

      {/* Services Overview Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Roofing Services in Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              From minor repairs to complete roof replacements, Best Roofing Now handles all your roofing needs
              with expert craftsmanship and premium materials. We serve residential and commercial properties
              throughout the Charlotte metro area.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roofingServices.map((service) => (
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

      {/* Why Charlotte Homeowners Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Charlotte Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need roofing services in Charlotte NC, you deserve a company that puts quality
                and integrity first. Best Roofing Now has earned our reputation as Charlotte&apos;s #1 rated
                roofing company through exceptional workmanship, honest assessments, and dedicated customer service.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.slice(0, 6).map((item) => (
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
                alt="Best Roofing Now - #1 rated roofing company in Charlotte NC with completed roof project"
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
                    <p className="font-bold text-dark">#1 Rated</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.googleReviewCount}+ 5-Star Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional trust factors */}
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {whyChooseUs.slice(6, 8).map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-gray">{item.description}</p>
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
                Need Quality Roofing in Charlotte NC?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Charlotte&apos;s #1 rated roofing company.
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
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Services Across Greater Charlotte
            </h2>
            <p className="text-gray text-lg">
              Best Roofing Now proudly serves homeowners and businesses throughout the Charlotte metro area
              and surrounding communities.
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

      {/* Customer Testimonials Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4 fill-primary" aria-hidden="true" />
              <span className="text-sm font-semibold">Customer Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Charlotte Homeowners Say About Our Roofing
            </h2>
            <p className="text-gray text-lg">
              With {SITE_CONFIG.googleReviewCount}+ five-star reviews, our commitment to quality roofing and
              customer satisfaction speaks for itself.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-dark">{testimonial.name}</p>
                  <p className="text-sm text-gray">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              Read More Reviews
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
              Certified Roofing Excellence in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Our certifications from industry-leading manufacturers mean you get premium materials backed by
              extended warranty coverage that protects your investment.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">CertainTeed SELECT ShingleMaster</h3>
              <p className="text-gray text-sm">
                Top-tier certification with access to SureStart Plus extended warranties and specialized training.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">GAF Factory-Certified</h3>
              <p className="text-gray text-sm">
                Authorized to offer GAF&apos;s Golden Pledge warranty - the strongest in the roofing industry.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Owens Corning Preferred</h3>
              <p className="text-gray text-sm">
                Preferred Contractor status with Owens Corning for extended warranty options up to 50 years.
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
              Recent Roofing Projects in Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roofing projects throughout the Charlotte area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Completed residential roofing project in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed shingle installation by Best Roofing Now in Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of completed roofing project in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional roofing work completed in Charlotte area"
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
                <span className="text-sm font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roofing Charlotte NC FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in Charlotte NC.
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
        title="Ready for Quality Roofing in Charlotte NC?"
        subtitle="Get a free, no-obligation estimate from Charlotte's #1 rated roofing company. Our certified team will assess your roof and provide honest recommendations tailored to your needs and budget."
      />
    </>
  );
}
