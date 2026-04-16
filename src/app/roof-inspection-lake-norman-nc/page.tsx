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
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema, ServiceAreaPageSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roof Inspection Lake Norman NC | Free Inspections | Expert Roofers',
  description:
    'Free roof inspections across Lake Norman NC. Comprehensive assessments with detailed reports for Cornelius, Davidson, Mooresville, Huntersville & Denver homes. BBB A+ rated. Schedule today!',
  keywords: [
    'roof inspection lake norman nc',
    'free roof inspection lake norman',
    'roof inspection near me lake norman',
    'roof assessment lake norman nc',
    'storm damage inspection lake norman',
    'roof evaluation lake norman',
    'home inspection roofing lake norman nc',
    'roof condition report lake norman',
    'pre-purchase roof inspection lake norman',
    'annual roof inspection lake norman nc',
    'insurance roof inspection lake norman',
    'lakefront roof inspection',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-inspection-lake-norman-nc`,
  },
  openGraph: {
    title: 'Roof Inspection Lake Norman NC | Free Inspections | Best Roofing Now',
    description:
      'Free comprehensive roof inspections across Lake Norman NC. Detailed reports with photos for lakefront and lake-area homes. BBB A+ rated, veteran-owned.',
    url: `${SITE_CONFIG.url}/roof-inspection-lake-norman-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.inspection,
        width: 1200,
        height: 630,
        alt: 'Professional roof inspection services in Lake Norman NC - Best Roofing Now',
      },
    ],
  },
};

// Lake Norman cities for gallery strip
const LAKE_NORMAN_CITIES = ['Mooresville', 'Cornelius', 'Davidson', 'Huntersville', 'Denver', 'Sherrills Ford'];

// Inspection services offered
const inspectionServices = [
  {
    icon: Eye,
    title: 'Storm Damage Assessment',
    description: 'Post-storm inspections documenting hail, wind, and debris damage for Lake Norman insurance claims.',
    href: '/services/storm-damage',
  },
  {
    icon: Home,
    title: 'Pre-Purchase Inspections',
    description: 'Thorough roof evaluations for buyers considering Lake Norman homes, from waterfront estates to suburban neighborhoods.',
    href: '/services/roof-inspection',
  },
  {
    icon: Clipboard,
    title: 'Annual Maintenance Inspection',
    description: 'Yearly check-ups to catch weather wear before it becomes costly - critical for lakefront homes with increased exposure.',
    href: '/services/roof-inspection',
  },
  {
    icon: FileText,
    title: 'Insurance Documentation',
    description: 'Detailed inspection reports with photo evidence formatted for insurance company requirements across Lake Norman.',
    href: '/services/roof-inspection',
  },
  {
    icon: Search,
    title: 'Real Estate Inspections',
    description: 'Seller inspections that build buyer confidence and prevent closing delays on Lake Norman properties.',
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
    description: 'Our inspections are 100% free with no obligation - no pressure, just honest information about your roof.',
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from Lake Norman homeowners.`,
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
    description: 'Most Lake Norman inspections scheduled within 24-48 hours of your request.',
  },
];

// Lake Norman areas served
const lakeNormanAreas = [
  'The Peninsula (Cornelius)',
  'Jetton Cove (Cornelius)',
  'River Run (Davidson)',
  'Westmoreland (Davidson)',
  'The Point (Mooresville)',
  'Morrison Plantation (Mooresville)',
  'Northcross (Huntersville)',
  'Birkdale Village Area',
  'Westport (Denver)',
  'Trilogy at Lake Norman',
  'Sailview (Denver)',
  'Sherrills Ford Lakefront',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Mooresville', href: '/roof-inspection-mooresville-nc' },
  { name: 'Charlotte', href: '/roof-inspection-charlotte-nc' },
  { name: 'Denver', href: '/roof-inspection-denver-nc' },
  { name: 'Cornelius', href: '/roofing-cornelius-nc' },
  { name: 'Davidson', href: '/roofing-davidson-nc' },
  { name: 'Huntersville', href: '/roofing-huntersville-nc' },
];

// FAQs about roof inspections in Lake Norman
const faqs = [
  {
    question: 'Is the roof inspection really free in Lake Norman NC?',
    answer:
      'Yes, absolutely. Our roof inspections for Lake Norman homeowners are 100% free with no obligation. Whether your home is in Cornelius, Davidson, Mooresville, Huntersville, Denver, or Sherrills Ford, we provide honest assessments at no cost. There is no pressure to hire us for any repairs - we simply give you the information you need about your roof\'s condition.',
  },
  {
    question: 'How does Lake Norman weather affect my roof?',
    answer:
      'Lake Norman homes face unique weather challenges. Wind speeds accelerate over the open water, hitting waterfront and near-lake properties harder than inland homes. Hail events are common in the region, and the humidity contributes to moss and algae growth. Lakefront properties experience faster granule loss on shingles, loosened flashing, and greater wear on ridge caps. Annual inspections help catch these issues before they lead to costly leaks.',
  },
  {
    question: 'How long does a roof inspection take in Lake Norman?',
    answer:
      'Most residential inspections in Lake Norman take 30-60 minutes depending on roof size, pitch, and complexity. Larger waterfront homes with multiple roof planes may take slightly longer. You\'ll receive your written report with photos within 24-48 hours of the inspection.',
  },
  {
    question: 'When should Lake Norman homeowners get their roof inspected?',
    answer:
      'We recommend annual inspections for all Lake Norman homes due to the region\'s storm exposure. Additionally, get an inspection after any significant storm with hail or high winds, before buying or selling a home, if your roof is over 15 years old, or if you notice any signs of damage like missing shingles or ceiling stains. Regular inspections save thousands by catching problems early.',
  },
  {
    question: 'Do you provide inspection reports for Lake Norman insurance claims?',
    answer:
      'Yes, we provide comprehensive storm damage inspection reports specifically formatted for insurance claims. Our documentation includes high-resolution photos, measurements, damage descriptions, and estimated repair costs. We can also meet with your insurance adjuster at your Lake Norman property to ensure all damage is properly identified and documented.',
  },
  {
    question: 'Do you inspect roofs in all Lake Norman communities?',
    answer:
      'Yes! Best Roofing Now provides free roof inspections throughout the entire Lake Norman region including Cornelius, Davidson, Mooresville, Huntersville, Denver, and Sherrills Ford. We are fully licensed in both Mecklenburg County and Iredell County. We regularly inspect roofs in communities like The Peninsula, River Run, The Point, Trilogy at Lake Norman, and every neighborhood in between.',
  },
];

export default function RoofInspectionLakeNormanNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Lake Norman Roofing', url: `${SITE_CONFIG.url}/roofing-lake-norman-nc` },
          { name: 'Roof Inspection Lake Norman NC', url: `${SITE_CONFIG.url}/roof-inspection-lake-norman-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-inspection-lake-norman-nc`}
        pageName="Roof Inspection Lake Norman NC"
        city="Lake Norman"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'Who provides free roof inspections in Lake Norman NC?',
            answer: 'Best Roofing Now provides free comprehensive roof inspections across Lake Norman NC including Cornelius, Davidson, Mooresville, Huntersville, and Denver. Our certified inspectors examine every component and provide detailed photo reports. Call 704-605-6047 to schedule.',
            speakableAnswer: 'Best Roofing Now provides free roof inspections across Lake Norman NC. Call 704-605-6047 to schedule.',
          },
          {
            question: 'How often should Lake Norman roofs be inspected?',
            answer: 'Lake Norman roofs should be inspected annually due to the region\'s storm exposure and lakeside weather. Additional inspections are recommended after severe storms with hail or high winds. Best Roofing Now provides free inspections with no obligation.',
            speakableAnswer: 'Lake Norman roofs should be inspected annually due to storm exposure. Best Roofing Now offers free inspections. Call 704-605-6047.',
          },
        ]}
      />
      <VoiceSearchActionSchema />
      <ServiceAreaPageSchema
        city="Lake Norman"
        state="NC"
        slug="roof-inspection-lake-norman-nc"
        distance={25}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.inspection}
            alt="Professional roof inspection services across Lake Norman NC"
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
              <span className="text-accent-light">Lake Norman NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Free comprehensive roof assessments for Lake Norman homes
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Lake Norman homes face accelerated roof wear from lakeside storms, wind exposure, and seasonal
              weather patterns. Best Roofing Now offers free, thorough roof inspections with detailed photo
              reports across the entire Lake Norman region - from Cornelius and Davidson to Mooresville,
              Huntersville, and Denver. No pressure, no obligation, just honest answers about your roof.
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
              Roof Inspection Services Across Lake Norman NC
            </h2>
            <p className="text-gray text-lg">
              Our certified inspectors provide thorough assessments tailored to Lake Norman&apos;s unique
              weather conditions, from pre-purchase evaluations to post-storm damage documentation.
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
                What&apos;s Included in Your Free Lake Norman Inspection
              </h2>
              <p className="text-gray text-lg mb-8">
                Our comprehensive inspection covers every component of your roofing system, with special attention
                to areas most affected by Lake Norman weather patterns and lakeside exposure.
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
                alt="Comprehensive roof inspection in Lake Norman NC using drone technology"
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
              Why Lake Norman Trusts Our Inspections
            </h2>
            <p className="text-gray text-lg">
              We provide honest, thorough inspections with no sales pressure - just the information
              you need to protect your Lake Norman investment.
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
                Ready for Your Free Lake Norman Roof Inspection?
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
              Free Inspections Throughout Lake Norman
            </h2>
            <p className="text-gray text-lg">
              We provide free roof inspections to homeowners throughout every Lake Norman community.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Lake Norman Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Lake Norman Communities We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {lakeNormanAreas.map((area) => (
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
              <h3 className="text-xl font-bold text-dark mb-4">Lake Norman Cities We Serve</h3>
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
              href="/roofing-lake-norman-nc"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Lake Norman Roofing Services
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
              Our Lake Norman Inspection Process
            </h2>
            <p className="text-gray text-lg">
              A thorough, systematic process designed for Lake Norman weather conditions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="font-bold text-dark mb-2">Schedule</h3>
              <p className="text-gray text-sm">
                Call or book online. Most Lake Norman inspections scheduled within 24-48 hours.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="font-bold text-dark mb-2">Inspect</h3>
              <p className="text-gray text-sm">
                Our certified inspector examines every roof component with attention to lakeside wear patterns.
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
              When Should Lake Norman Homeowners Get a Roof Inspection?
            </h2>
            <p className="text-gray text-lg">
              Regular inspections save Lake Norman homeowners thousands by catching damage early.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Annually</h3>
              <p className="text-gray text-sm">
                Lake Norman&apos;s storm exposure means faster roof wear. Annual checks are
                essential to catch granule loss, flashing issues, and hidden damage before they become leaks.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">After Major Storms</h3>
              <p className="text-gray text-sm">
                Storms crossing Lake Norman can cause significant wind and hail damage. An inspection
                can identify hidden damage invisible from the ground that may worsen over time.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Buying a Lake Norman Home</h3>
              <p className="text-gray text-sm">
                Lake Norman real estate is competitive. A pre-purchase inspection reveals roof
                condition, remaining lifespan, and potential costs - critical leverage in negotiations.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Selling Your Home</h3>
              <p className="text-gray text-sm">
                Address issues before listing. A clean inspection report gives buyers confidence
                and can prevent deal-killing surprises during the closing process.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Insurance Documentation</h3>
              <p className="text-gray text-sm">
                After storm damage, a professional inspection provides the documentation your insurance
                company needs to process your claim quickly and fairly.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Roof Over 15 Years</h3>
              <p className="text-gray text-sm">
                Aging roofs in Lake Norman&apos;s weather conditions need more frequent monitoring.
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
                Roof Inspection FAQs for Lake Norman NC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof inspections across the Lake Norman region.
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
        city="Mooresville"
        slug="roof-inspection-lake-norman-nc"
        count={4}
        title="Recent Roofing Projects in Lake Norman, NC"
        subtitle="Browse completed roofing projects from the Lake Norman area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roof-inspection-lake-norman-nc`}
      />

      <CityGeoSection
        city="Lake Norman"
        state="NC"
        citySlug="lake-norman"
        service="Roof Inspection"
      />

      {/* Lake Norman Guide Cross-Link */}
      <section className="py-8 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray mb-4">Want to learn everything about roofing on Lake Norman?</p>
            <Link href="/lake-norman-roofing-guide" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-lg">
              Read The Complete Lake Norman Roofing Guide (2026) <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Schedule Your Free Lake Norman Roof Inspection"
        subtitle="Get a comprehensive roof assessment with detailed photos and report for your Lake Norman home. 100% free, no obligation. Serving Cornelius, Davidson, Mooresville, Huntersville, Denver & Sherrills Ford."
      />
    </>
  );
}
