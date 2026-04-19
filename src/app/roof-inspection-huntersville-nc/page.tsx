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
  Home,
  MapPin,
  Search,
  FileText,
  Camera,
  Clipboard,
  Eye,
  ThumbsUp,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';
import { LKNPartnershipsBlock } from '@/components/sections/LKNPartnershipsBlock';
import { LKNDataCitations } from '@/components/sections/LKNDataCitations';
export const metadata: Metadata = {
  title: 'Roof Inspection Huntersville NC | Free',
  description:
    'Free roof inspections in Huntersville NC. Comprehensive assessments with detailed reports for fast-growing suburb homes. BBB A+ rated. Schedule today!',
  keywords: [
    'roof inspection Huntersville NC',
    'free roof inspection Huntersville',
    'roof assessment Huntersville NC',
    'roof inspection near me Huntersville',
    'Lake Norman roof inspection Huntersville',
    'roof evaluation Huntersville NC',
    'home inspection roofing Huntersville NC',
    'roof condition report Huntersville',
    'pre-purchase roof inspection Huntersville',
    'storm damage inspection Huntersville NC',
    'Mecklenburg County roof inspection',
    'Birkdale Village roof inspection',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-inspection-huntersville-nc`,
  },
  openGraph: {
    title: 'Roof Inspection Huntersville NC | Free Estimates | Best Roofing Now',
    description:
      'Free comprehensive roof inspections in Huntersville NC. Detailed reports with photos for homes in this fast-growing Lake Norman suburb. BBB A+ rated, veteran-owned.',
    url: `${SITE_CONFIG.url}/roof-inspection-huntersville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.inspection,
        width: 1200,
        height: 630,
        alt: 'Professional roof inspection services in Huntersville NC - Best Roofing Now',
      },
    ],
  },
};

// Inspection services offered
const inspectionServices = [
  {
    icon: Home,
    title: 'Pre-Purchase Inspections',
    description: 'Thorough roof evaluations for buyers considering Huntersville NC homes, from Skybrook estates to Birkdale Village properties.',
    href: '/services/roof-inspection',
  },
  {
    icon: Eye,
    title: 'Storm Damage Assessment',
    description: 'Post-storm inspections documenting hail, wind, and debris damage for Huntersville homeowner insurance claims.',
    href: '/services/storm-damage',
  },
  {
    icon: Clipboard,
    title: 'Annual Maintenance Inspection',
    description: 'Yearly check-ups to catch weather wear before it becomes costly, important for both newer subdivisions and established neighborhoods.',
    href: '/services/roof-inspection',
  },
  {
    icon: FileText,
    title: 'Insurance Documentation',
    description: 'Detailed inspection reports with photo evidence formatted for insurance company requirements.',
    href: '/services/roof-inspection',
  },
  {
    icon: Search,
    title: 'Real Estate Inspections',
    description: 'Seller inspections that build buyer confidence and prevent closing delays on Huntersville properties.',
    href: '/services/roof-inspection',
  },
  {
    icon: Camera,
    title: 'Warranty Verification',
    description: 'Manufacturer warranty inspections to verify proper installation and identify covered defects.',
    href: '/services/roof-inspection',
  },
];

// What's included in inspection
const inspectionIncludes = [
  'Shingle condition assessment',
  'Flashing inspection around all penetrations',
  'Chimney and vent pipe evaluation',
  'Gutter and downspout condition check',
  'Attic ventilation assessment',
  'Soffit and fascia inspection',
  'Roof decking condition check',
  'Storm damage identification',
  'Moss/algae growth evaluation',
  'Overall structural integrity review',
  'Skylight seal inspection',
  'Written report with photos',
];

// Why choose us points
const whyChooseUs = [
  {
    icon: ThumbsUp,
    title: 'Truly Free',
    description: 'Our inspections are 100% free with no obligation - no pressure, just honest information.',
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from Huntersville and Lake Norman homeowners.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and honesty.',
  },
  {
    icon: Users,
    title: 'Certified Inspectors',
    description: 'Our inspectors are trained and certified by leading roofing manufacturers.',
  },
  {
    icon: Clock,
    title: 'Fast Scheduling',
    description: 'Most Huntersville NC inspections scheduled within 24-48 hours of your request.',
  },
];

// Huntersville areas served
const huntersvilleAreas = [
  'Birkdale Village',
  'Skybrook',
  'Rosedale',
  'Vermillion',
  'The Farms',
  'Gilead Ridge',
  'Northstone',
  'Cedarfield',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Cornelius', href: '/roof-inspection-cornelius-nc' },
  { name: 'Davidson', href: '/roof-inspection-davidson-nc' },
  { name: 'Denver', href: '/roof-inspection-denver-nc' },
  { name: 'Mooresville', href: '/roof-inspection-mooresville-nc' },
  { name: 'Charlotte', href: '/roof-inspection-charlotte-nc' },
  { name: 'Lake Norman', href: '/locations/lake-norman' },
];

// FAQs about roof inspections in Huntersville NC
const faqs = [
  {
    question: 'Is the roof inspection really free in Huntersville NC?',
    answer:
      'Yes, absolutely. Our roof inspections for Huntersville NC homeowners are 100% free with no obligation. Whether your home is in Birkdale Village, Skybrook, or anywhere in the 28078 zip code, we provide honest assessments at no cost. There is no pressure to hire us for any repairs - we simply give you the information you need about your roof\'s condition.',
  },
  {
    question: 'How does the Lake Norman area weather affect my Huntersville roof?',
    answer:
      'Huntersville\'s proximity to Lake Norman and position in the Charlotte metro means your roof faces significant storm exposure. Severe thunderstorms, hail events, and high winds are common in the area. Newer subdivisions like Skybrook and Vermillion may have roofs that have only weathered a few storm seasons, while established neighborhoods like Rosedale and Gilead Ridge have roofs with years of accumulated wear. Annual inspections help catch issues before they lead to leaks.',
  },
  {
    question: 'How long does a roof inspection take in Huntersville NC?',
    answer:
      'Most residential inspections in Huntersville take 30-60 minutes depending on roof size, pitch, and complexity. Larger homes in communities like Skybrook or Northstone with multiple roof planes may take slightly longer. You\'ll receive your written report with photos within 24-48 hours.',
  },
  {
    question: 'Do you inspect roofs in newer Huntersville subdivisions?',
    answer:
      'Yes, we inspect roofs in all Huntersville neighborhoods, both newer and established. Newer subdivisions like Vermillion and The Farms benefit from early inspections to verify builder installation quality and catch any warranty-covered issues. We understand the common roofing materials and methods used by area builders and can identify potential concerns before they become problems.',
  },
  {
    question: 'When should Huntersville NC homeowners get their roof inspected?',
    answer:
      'We recommend annual inspections for all Huntersville homes. Additionally, get an inspection after any significant storm with hail or high winds, before buying or selling a home, if your roof is over 15 years old, or if you notice any signs of damage like missing shingles or ceiling stains. Huntersville\'s rapid growth means many homes are 10-20 years old and entering the period where maintenance becomes critical.',
  },
  {
    question: 'Do you provide inspection reports for Huntersville NC insurance claims?',
    answer:
      'Yes, we provide comprehensive storm damage inspection reports specifically formatted for insurance claims. Our documentation includes high-resolution photos, measurements, damage descriptions, and estimated repair costs. We can also meet with your insurance adjuster at your Huntersville property to ensure all damage is properly identified and documented for your Mecklenburg County claim.',
  },
  {
    question: 'What if you find problems during my Huntersville NC roof inspection?',
    answer:
      'If we identify issues, we explain them clearly and provide a written estimate for recommended repairs or replacement. There is never any pressure to act immediately or hire us. Many problems can be addressed with minor repairs that extend your roof\'s life for years. We believe in giving Huntersville homeowners honest information to make the best decision for their home and budget.',
  },
  {
    question: 'Are there specific Mecklenburg County requirements for roof inspections in Huntersville?',
    answer:
      'While Mecklenburg County does not require mandatory periodic roof inspections for existing homes, inspections are essential for insurance claims, real estate transactions, and ensuring compliance with building codes when repairs or replacements are needed. Our inspectors are familiar with Mecklenburg County building standards and can identify any code compliance issues that may need to be addressed.',
  },
];

export default function RoofInspectionHuntersvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Inspection Huntersville NC', url: `${SITE_CONFIG.url}/roof-inspection-huntersville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-inspection-huntersville-nc`}
        pageName="Roof Inspection Huntersville NC"
        city="Huntersville"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'Who provides free roof inspections in Huntersville NC?',
            answer: 'Best Roofing Now provides free comprehensive roof inspections in Huntersville NC and the greater Lake Norman area. Our certified inspectors examine every component and provide detailed photo reports. We serve Birkdale Village, Skybrook, Rosedale, and all Huntersville neighborhoods. Call 704-605-6047 to schedule.',
            speakableAnswer: 'Best Roofing Now provides free roof inspections in Huntersville NC and the Lake Norman area. Call 704-605-6047 to schedule.',
          },
          {
            question: 'How often should Huntersville NC roofs be inspected?',
            answer: 'Huntersville NC roofs should be inspected annually due to the area\'s exposure to severe storms, hail, and high winds common in the Charlotte metro region. Additional inspections are recommended after major storm events. Best Roofing Now provides free inspections with no obligation.',
            speakableAnswer: 'Huntersville NC roofs should be inspected annually due to severe storm exposure. Best Roofing Now offers free inspections. Call 704-605-6047.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.inspection}
            alt="Professional roof inspection services in Huntersville NC near Lake Norman"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-green-500/30 rounded-full px-4 py-2 mb-4">
              <ThumbsUp className="w-4 h-4" />
              <span className="text-sm font-semibold">100% Free - No Obligation</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Inspection <br className="hidden md:block" />
              <span className="text-accent-light">Huntersville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Free comprehensive roof assessments for Huntersville homes and neighborhoods
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Huntersville is one of Charlotte&apos;s fastest-growing suburbs with a mix of newer subdivisions
              and established neighborhoods near Lake Norman. Best Roofing Now offers free, thorough roof
              inspections with detailed photo reports - covering everything from Birkdale Village homes to
              Skybrook estates. No pressure, no obligation, just honest answers about your roof.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Free Inspection
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
                No Obligation
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Inspection Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Inspection Services in Huntersville NC
            </h2>
            <p className="text-gray text-lg">
              Our certified inspectors provide thorough assessments tailored to Huntersville&apos;s mix of
              newer and established homes, from pre-purchase evaluations to post-storm damage documentation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inspectionServices.map((service) => (
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

      {/* What's Included Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                What&apos;s Included in Your Free Huntersville NC Inspection
              </h2>
              <p className="text-gray text-lg mb-8">
                Our comprehensive inspection covers every component of your roofing system, with special attention
                to areas most affected by the Charlotte metro area&apos;s severe weather patterns.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {inspectionIncludes.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-dark text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.services.droneInspection}
                alt="Comprehensive roof inspection in Huntersville NC using drone technology"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <ThumbsUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-dark">100% Free</p>
                    <p className="text-sm text-gray">No Obligation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Huntersville NC Trusts Our Inspections
            </h2>
            <p className="text-gray text-lg">
              We provide honest, thorough inspections with no sales pressure - just the information
              you need to protect your Huntersville home investment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="bg-light rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray text-sm">{item.description}</p>
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
                Ready for Your Free Huntersville NC Roof Inspection?
              </h2>
              <p className="text-white/90">
                Schedule your no-obligation inspection and know exactly what shape your roof is in.
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
                Schedule Inspection
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
              Free Inspections Throughout Huntersville NC & Lake Norman
            </h2>
            <p className="text-gray text-lg">
              We provide free roof inspections to homeowners throughout Huntersville, Mecklenburg County, and the greater Lake Norman area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Huntersville Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Huntersville Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {huntersvilleAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby Cities */}
            <div className="bg-white rounded-xl p-6 shadow-md">
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

      {/* Inspection Process Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Huntersville NC Inspection Process
            </h2>
            <p className="text-gray text-lg">
              A thorough, systematic process designed for Huntersville&apos;s diverse housing stock.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="font-bold text-dark mb-2">Schedule</h3>
              <p className="text-gray text-sm">
                Call or book online. Most Huntersville NC inspections scheduled within 24-48 hours.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="font-bold text-dark mb-2">Inspect</h3>
              <p className="text-gray text-sm">
                Our certified inspector examines every roof component with attention to storm wear patterns.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="font-bold text-dark mb-2">Document</h3>
              <p className="text-gray text-sm">
                We take detailed photos and notes to create your comprehensive inspection report.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                4
              </div>
              <h3 className="font-bold text-dark mb-2">Report</h3>
              <p className="text-gray text-sm">
                Receive your written report with findings, photos, and honest recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When To Inspect Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              When Should Huntersville NC Homeowners Get a Roof Inspection?
            </h2>
            <p className="text-gray text-lg">
              Regular inspections save Huntersville homeowners thousands by catching storm damage early.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Annually</h3>
              <p className="text-gray text-sm">
                Huntersville&apos;s exposure to Charlotte metro severe weather means annual checks are
                essential to catch storm damage, granule loss, and flashing issues before they become leaks.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">After Major Storms</h3>
              <p className="text-gray text-sm">
                Severe thunderstorms and hail events are common in the Huntersville area. After significant
                wind or hail events, an inspection can identify hidden damage invisible from the ground.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Buying a Huntersville Home</h3>
              <p className="text-gray text-sm">
                Huntersville real estate is competitive and fast-moving. A pre-purchase inspection reveals roof
                condition, remaining lifespan, and potential costs - critical leverage in negotiations.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Selling Your Huntersville Home</h3>
              <p className="text-gray text-sm">
                Address issues before listing. A clean inspection report gives buyers confidence
                and can prevent deal-killing surprises during the closing process.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Newer Subdivision Homes</h3>
              <p className="text-gray text-sm">
                Many Huntersville homes are 10-20 years old and entering the critical maintenance period.
                Early inspections verify builder quality and catch warranty-covered issues.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Roof Over 15 Years</h3>
              <p className="text-gray text-sm">
                Aging roofs in Huntersville&apos;s storm-prone environment need more frequent monitoring.
                We help you plan for replacement while extending your current roof&apos;s life.
              </p>
            </div>
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
                Roof Inspection FAQs for Huntersville NC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof inspections in Huntersville NC and the Lake Norman area.
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
        pageType="location"
        city="Huntersville"
        slug="roof-inspection-huntersville-nc"
      />

      {/* Final CTA */}

      <CityGeoSection
        city="Huntersville"
        state="NC"
        citySlug="huntersville-nc"
        service="Roof Inspection"
      />


      <LKNPartnershipsBlock city={"Huntersville"} />
      <LKNDataCitations city={"Huntersville"} />
      <CTASection
        title="Schedule Your Free Huntersville NC Roof Inspection"
        subtitle="Get a comprehensive roof assessment with detailed photos and report for your Huntersville home. 100% free, no obligation. Know exactly what shape your roof is in."
      />
    </>
  );
}
