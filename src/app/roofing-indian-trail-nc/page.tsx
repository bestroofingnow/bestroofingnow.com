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
  TreePine,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { MeetTheFamily } from '@/components/sections/MeetTheFamily';
import { TURNER_NOTES } from '@/lib/turner-family';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roofing Indian Trail NC | 5-Star Rated | Best Roofing Now',
  description:
    'Looking for quality roofing in Indian Trail NC? Best Roofing Now is a 5-star rated, veteran-owned roofing company serving Union County. BBB A+ rated with 500+ roofs completed. Free estimates for residential and commercial roofing services.',
  keywords: [
    'roofing indian trail nc',
    'indian trail nc roofing',
    'roofing in indian trail nc',
    'roofing services indian trail nc',
    'local roofing indian trail nc',
    'best roofing indian trail nc',
    'top rated roofing indian trail',
    'quality roofing indian trail nc',
    'reliable roofing indian trail',
    'trusted roofing indian trail nc',
    'roof repair indian trail nc',
    'roof replacement indian trail nc',
    'union county roofing',
    'roofing company indian trail',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-indian-trail-nc`,
  },
  openGraph: {
    title: 'Roofing Indian Trail NC | 5-Star Rated | Best Roofing Now',
    description:
      '5-star rated, veteran-owned roofing company serving Indian Trail NC and Union County. BBB A+ rated with 500+ roofs completed. Free estimates for all roofing services.',
    url: `${SITE_CONFIG.url}/roofing-indian-trail-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Professional roofing Indian Trail NC - Best Roofing Now team completing a roof installation',
      },
    ],
  },
};

// Comprehensive roofing services
const roofingServices = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Indian Trail homes including asphalt shingles, metal roofing, tile, and slate.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems, and commercial roof repairs for Indian Trail businesses of all sizes.',
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
    description: 'Free comprehensive inspections with detailed reports, photos, and honest assessments for Indian Trail homes.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: '24/7 emergency storm damage restoration with full insurance claim assistance for Union County residents.',
    href: '/services/storm-damage',
  },
  {
    icon: FileCheck,
    title: 'Insurance Claims',
    description: 'Expert assistance navigating insurance claims for storm damage and covered repairs in Indian Trail.',
    href: '/services/storm-damage',
  },
  {
    icon: Shield,
    title: 'Roof Maintenance',
    description: 'Preventive maintenance programs to extend roof life and catch small issues before they grow.',
    href: '/services/roof-repair',
  },
];

// Why Indian Trail homeowners choose us
const whyChooseUs = [
  {
    icon: Star,
    title: '5-Star Rated',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews make us a top-rated roofing company in Indian Trail NC.`,
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
    description: 'Detailed written estimates with no hidden fees. We honor our quotes for Indian Trail residents.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock availability for roofing emergencies throughout Indian Trail and Union County.',
  },
  {
    icon: FileCheck,
    title: 'Industry-Leading Warranties',
    description: 'Up to 50-year manufacturer warranties plus our own workmanship guarantee.',
  },
];

// Indian Trail neighborhoods and communities served
const indianTrailNeighborhoods = [
  'Brookhaven',
  'Sun Valley',
  'Hemby Bridge',
  'Indian Trail Estates',
  'Crossing at Indian Trail',
  'Raintree',
  'Southgate',
  'Brightmoor',
  'Parkwood',
  'Sardis Forest',
  'Indian Trail Park',
  'Poplin Place',
  'Stratford Hall',
  'Prescott',
  'Creek Pointe',
  'Wesley Chapel Village',
  'Oakwood Estates',
  'Stonegate',
  'Forest Ridge',
  'Chestnut Hills',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Charlotte', href: '/roofing-charlotte-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Monroe', href: '/locations/monroe-nc' },
  { name: 'Stallings', href: '/locations/stallings-nc' },
  { name: 'Weddington', href: '/locations/weddington-nc' },
  { name: 'Wesley Chapel', href: '/locations/wesley-chapel-nc' },
  { name: 'Mint Hill', href: '/locations/mint-hill-nc' },
  { name: 'Waxhaw', href: '/locations/waxhaw-nc' },
  { name: 'Marvin', href: '/locations/marvin-nc' },
  { name: 'Unionville', href: '/locations/unionville-nc' },
  { name: 'Wingate', href: '/locations/wingate-nc' },
  { name: 'Marshville', href: '/locations/marshville-nc' },
];

// Customer testimonials specific to Indian Trail area
const testimonials = [
  {
    name: 'Robert & Jennifer M.',
    location: 'Sun Valley, Indian Trail',
    rating: 5,
    text: 'Best Roofing Now replaced our entire roof after last spring\'s hail storm. They handled everything with our insurance company and the quality of work was outstanding. Highly recommend them to all our Indian Trail neighbors!',
  },
  {
    name: 'Patricia S.',
    location: 'Brookhaven, Indian Trail',
    rating: 5,
    text: 'We got quotes from three different roofing companies in Indian Trail and Best Roofing Now was the most professional and transparent. No pushy sales tactics, just honest advice. Our new roof looks amazing.',
  },
  {
    name: 'Tom K.',
    location: 'Hemby Bridge, Indian Trail',
    rating: 5,
    text: 'James and his team are the real deal. As a fellow veteran, I appreciate their integrity and work ethic. They found issues with our roof that other companies missed and fixed everything properly.',
  },
];

// FAQs about roofing in Indian Trail
const faqs = [
  {
    question: 'What roofing services do you offer in Indian Trail NC?',
    answer:
      'Best Roofing Now provides comprehensive roofing services throughout Indian Trail NC including residential and commercial roofing, roof repairs, complete roof replacements, roof inspections, storm damage restoration, gutter installation, and emergency roofing services. We work with all roofing materials including asphalt shingles, metal roofing, tile, slate, TPO, EPDM, and flat roof systems. Our team is experienced with all types of Indian Trail homes, from newer developments to established neighborhoods.',
  },
  {
    question: 'How much does roofing cost in Indian Trail NC?',
    answer:
      'Roofing costs in Indian Trail vary based on several factors including roof size, pitch, material choice, and project complexity. Minor repairs typically range from $200-$1,500, while complete roof replacements average $8,000-$25,000 for most Indian Trail homes. Many homes in communities like Sun Valley and Brookhaven have larger footprints that may affect pricing. We provide free, detailed estimates with transparent pricing and no hidden fees so you know exactly what to expect.',
  },
  {
    question: 'Why is Best Roofing Now a top-rated roofing company in Indian Trail?',
    answer:
      `Best Roofing Now has earned our top rating through exceptional workmanship, honest assessments, and dedicated customer service. With ${SITE_CONFIG.googleReviewCount}+ five-star Google reviews, BBB A+ accreditation, and veteran-owned values of integrity and excellence, we consistently deliver results that exceed expectations. Our manufacturer certifications from CertainTeed, GAF, and Owens Corning allow us to offer industry-leading warranties to protect your Indian Trail home.`,
  },
  {
    question: 'Do you offer free roofing estimates in Indian Trail?',
    answer:
      'Yes! Best Roofing Now provides completely free, no-obligation estimates for all roofing services in Indian Trail and throughout Union County. Our certified inspectors will thoroughly examine your roof, identify any issues, document everything with photos, and provide a detailed written proposal. There is absolutely no pressure - we believe in earning your business through honest assessments and quality work.',
  },
  {
    question: 'How long does a roof replacement take in Indian Trail?',
    answer:
      'Most residential roof replacements in Indian Trail are completed in 1-3 days, depending on the size and complexity of the roof. Larger homes in communities like Brookhaven or projects involving structural repairs may take 4-5 days. We always provide a timeline estimate before starting work and keep you informed of progress throughout the project. Weather can occasionally cause delays during Indian Trail\'s stormy spring and summer seasons.',
  },
  {
    question: 'What areas of Indian Trail do you provide roofing services?',
    answer:
      'We provide roofing services throughout all of Indian Trail including Sun Valley, Brookhaven, Hemby Bridge, Raintree, Southgate, Brightmoor, Crossing at Indian Trail, Poplin Place, and all other neighborhoods. We also serve the greater Union County area including Matthews, Monroe, Stallings, Weddington, Wesley Chapel, Waxhaw, Marvin, and into Mecklenburg County including Charlotte and Mint Hill.',
  },
  {
    question: 'Do you help with roofing insurance claims in Indian Trail?',
    answer:
      'Absolutely! We have extensive experience helping Indian Trail homeowners navigate insurance claims for storm damage. Union County experiences significant hail and wind damage, especially during spring and summer storm season. Our team provides detailed documentation, meets with insurance adjusters on your behalf, and advocates for fair settlements. Many Indian Trail roofs qualify for full or partial insurance coverage after storm events.',
  },
  {
    question: 'What roofing materials are best for Indian Trail NC homes?',
    answer:
      'The best roofing material depends on your specific needs, budget, and aesthetic preferences. Asphalt architectural shingles are the most popular choice in Indian Trail due to their durability, affordability, and variety of styles that complement the area\'s suburban homes. Many homeowners are also choosing impact-resistant shingles for better hail protection. Metal roofing is growing in popularity for its longevity (40-70 years) and energy efficiency in our hot summers. We help homeowners choose the right material based on their home style, HOA requirements, and long-term goals.',
  },
];

export default function RoofingIndianTrailNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Indian Trail NC', url: `${SITE_CONFIG.url}/roofing-indian-trail-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Professional roofing Indian Trail NC - Best Roofing Now team installing a new roof"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold">5-Star Rated | Veteran-Owned | Union County</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Indian Trail NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Indian Trail&apos;s trusted roofing experts with {SITE_CONFIG.roofsInstalled}+ roofs completed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now delivers premium roofing services throughout Indian Trail NC and Union County. From expert repairs
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

      {/* Indian Trail Introduction Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <TreePine className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Union County Experts</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Indian Trail&apos;s Premier Roofing Company
              </h2>
              <p className="text-gray text-lg mb-6">
                Indian Trail has transformed from a small crossroads community into one of Union County&apos;s most
                vibrant towns. As a southeastern suburb of Charlotte, Indian Trail combines small-town charm with
                modern amenities, featuring growing neighborhoods, excellent schools, and easy access to both
                Charlotte and the countryside.
              </p>
              <p className="text-gray text-lg mb-6">
                Our roofing team understands the unique needs of Indian Trail homes - from newer construction in
                developments like Sun Valley and Brookhaven to established neighborhoods throughout the community.
                We know the local building codes, HOA requirements, and what it takes to protect your home in
                North Carolina&apos;s variable climate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
                >
                  Schedule Free Inspection
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Indian Trail NC roofing project completed by Best Roofing Now"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-bold text-dark">Serving Indian Trail</p>
                    <p className="text-sm text-gray">Union County&apos;s Trusted Roofers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Roofing Services in Indian Trail NC
            </h2>
            <p className="text-gray text-lg">
              From minor repairs to complete roof replacements, Best Roofing Now handles all your roofing needs
              with expert craftsmanship and premium materials. We serve residential and commercial properties
              throughout Indian Trail and Union County.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roofingServices.map((service) => (
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

      {/* Why Indian Trail Homeowners Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Indian Trail Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need roofing services in Indian Trail NC, you deserve a company that puts quality
                and integrity first. Best Roofing Now has earned our reputation as a top-rated
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
                alt="Best Roofing Now - Top-rated roofing company in Indian Trail NC with completed roof project"
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
                    <p className="font-bold text-dark">5-Star Rated</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.googleReviewCount}+ Google Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional trust factors */}
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {whyChooseUs.slice(6, 8).map((item) => (
              <div key={item.title} className="bg-light rounded-xl p-6 shadow-md flex items-start gap-4">
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
                Need Quality Roofing in Indian Trail NC?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Union County&apos;s trusted roofing company.
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
              Roofing Services Across Indian Trail & Union County
            </h2>
            <p className="text-gray text-lg">
              Best Roofing Now proudly serves homeowners and businesses throughout Indian Trail and the greater
              Union County region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Indian Trail Neighborhoods */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Indian Trail Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {indianTrailNeighborhoods.map((neighborhood) => (
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

      {/* Customer Testimonials Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4 fill-primary" aria-hidden="true" />
              <span className="text-sm font-semibold">Customer Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Indian Trail Homeowners Say About Our Roofing
            </h2>
            <p className="text-gray text-lg">
              With {SITE_CONFIG.googleReviewCount}+ five-star reviews, our commitment to quality roofing and
              customer satisfaction speaks for itself.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-light rounded-xl shadow-md p-6">
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
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Certified Roofing Excellence in Indian Trail
            </h2>
            <p className="text-gray text-lg">
              Our certifications from industry-leading manufacturers mean you get premium materials backed by
              extended warranty coverage that protects your investment.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">CertainTeed SELECT ShingleMaster</h3>
              <p className="text-gray text-sm">
                Top-tier certification with access to SureStart Plus extended warranties and specialized training.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">GAF Factory-Certified</h3>
              <p className="text-gray text-sm">
                Authorized to offer GAF&apos;s Golden Pledge warranty - the strongest in the roofing industry.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
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

      {/* Indian Trail Specific Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Roofing Expertise for Union County Living
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray text-lg mb-6">
                Indian Trail&apos;s rapid growth over the past two decades has made it one of Union County&apos;s most
                desirable communities. Located just southeast of Charlotte, Indian Trail offers the perfect balance
                of suburban convenience and small-town atmosphere. Our roofing team is familiar with the specific
                challenges this area presents.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-light rounded-xl p-6">
                  <h3 className="font-bold text-dark mb-3 text-lg">Climate Considerations</h3>
                  <ul className="space-y-2 text-gray">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Hot, humid summers requiring proper ventilation solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Spring and summer storm season with hail and high winds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Algae and moss prevention for humid conditions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Impact-resistant materials for storm protection</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-light rounded-xl p-6">
                  <h3 className="font-bold text-dark mb-3 text-lg">Indian Trail Home Styles</h3>
                  <ul className="space-y-2 text-gray">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Modern suburban homes in planned developments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Traditional ranch and two-story colonial homes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Craftsman-style homes in newer communities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Custom-built homes on larger lots</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-gray text-lg">
                Our roofers have extensive experience with all types of Indian Trail homes, from the newer
                developments in Sun Valley and Brookhaven to established neighborhoods throughout the community.
                We understand HOA requirements, Union County building codes, and what it takes to protect your
                investment in this growing area.
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
              Recent Roofing Projects in Indian Trail NC
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roofing projects throughout Indian Trail and Union County.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Completed residential roofing project in Indian Trail NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed shingle installation by Best Roofing Now in Indian Trail"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of completed roofing project in Indian Trail NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional roofing work completed in Indian Trail area"
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

      {/* Meet the Turner Family */}
      <MeetTheFamily variant="full" />

      {/* Service City Links */}
      <ServiceCityLinks
        city="Indian Trail"
        citySlug="indian-trail-nc"
        title="Roofing Services in Indian Trail NC"
        subtitle="Looking for a specific roofing service? Our team offers comprehensive solutions for every roofing need in Indian Trail and Union County."
      />

      {/* Personal Note from James */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-primary/5 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-primary">JT</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark mb-2">A Note from James Turner, Owner</h3>
                <p className="text-gray italic mb-4">
                  &ldquo;{TURNER_NOTES.james.onHonesty}&rdquo;
                </p>
                <p className="text-gray">
                  Indian Trail and Union County represent the kind of community we love to serve - hardworking
                  families who take pride in their homes. When you call Best Roofing Now, you&apos;re getting
                  more than just a roofing contractor. You&apos;re getting a team that treats your home like
                  we&apos;d treat our own. We&apos;ve built our reputation on honest work and fair prices,
                  and that&apos;s something we&apos;ll never compromise on.
                </p>
                <p className="text-primary font-semibold mt-4">
                  Give us a call at {SITE_CONFIG.phone} - we&apos;d be honored to help protect your Indian Trail home.
                </p>
              </div>
            </div>
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
                <span className="text-sm font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roofing Indian Trail NC FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in Indian Trail NC.
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

      <GeoProjectGalleryStrip
        pageType="location"
        city="Indian Trail"
        slug="roofing-indian-trail-nc"
        count={4}
        title="Recent Roofing Projects in Indian Trail, NC"
        subtitle="Browse completed roofing projects from the Indian Trail area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-indian-trail-nc`}
      />

      {/* Final CTA */}
      <CTASection
        title="Ready for Quality Roofing in Indian Trail NC?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations tailored to your Union County home's needs and budget."
      />
    </>
  );
}
