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

export const metadata: Metadata = {
  title: 'Roof Inspection Mooresville NC | Free Estimates | Best Roofing Now',
  description:
    'Free roof inspections in Mooresville NC. Comprehensive assessments with detailed reports and photos. BBB A+ rated, veteran-owned. Serving Lake Norman area. Schedule your free inspection today!',
  keywords: [
    'roof inspection Mooresville NC',
    'free roof inspection Mooresville',
    'roof assessment Mooresville NC',
    'roof inspection near me Mooresville',
    'Lake Norman roof inspection',
    'roof evaluation Mooresville',
    'home inspection roofing Mooresville NC',
    'roof condition report Mooresville',
    'pre-purchase roof inspection Mooresville',
    'storm damage inspection Mooresville NC',
    'free roofing estimate Mooresville',
    'roofer Mooresville NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-inspection-mooresville-nc`,
  },
  openGraph: {
    title: 'Roof Inspection Mooresville NC | Free Estimates | Best Roofing Now',
    description:
      'Free comprehensive roof inspections in Mooresville NC. Detailed reports with photos. BBB A+ rated, veteran-owned. Serving Lake Norman area.',
    url: `${SITE_CONFIG.url}/roof-inspection-mooresville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.inspection,
        width: 1200,
        height: 630,
        alt: 'Professional roof inspection services in Mooresville NC - Best Roofing Now',
      },
    ],
  },
};

// Inspection services offered
const inspectionServices = [
  {
    icon: Search,
    title: 'Complete Roof Assessment',
    description: 'Thorough examination of every roof component from shingles to flashing to ventilation.',
    href: '/services/roof-inspection',
  },
  {
    icon: Camera,
    title: 'Photo Documentation',
    description: 'High-resolution photos of your entire roof and any issues identified during inspection.',
    href: '/services/roof-inspection',
  },
  {
    icon: FileText,
    title: 'Detailed Written Report',
    description: 'Comprehensive report with findings, recommendations, and estimated costs for any repairs.',
    href: '/services/roof-inspection',
  },
  {
    icon: Home,
    title: 'Pre-Purchase Inspections',
    description: 'Thorough inspections for home buyers to understand roof condition before closing.',
    href: '/services/roof-inspection',
  },
  {
    icon: Eye,
    title: 'Storm Damage Assessment',
    description: 'Post-storm inspections to document damage for insurance claims.',
    href: '/services/storm-damage',
  },
  {
    icon: Clipboard,
    title: 'Annual Maintenance Check',
    description: 'Yearly inspections to catch small problems before they become expensive repairs.',
    href: '/services/roof-inspection',
  },
];

// What's included in inspection
const inspectionIncludes = [
  'Shingle condition assessment',
  'Flashing inspection around penetrations',
  'Chimney and vent inspection',
  'Gutter and downspout check',
  'Attic ventilation evaluation',
  'Soffit and fascia inspection',
  'Decking condition assessment',
  'Ice dam vulnerability check',
  'Moss/algae growth evaluation',
  'Overall structural integrity',
  'Skylight seals inspection',
  'Written report with photos',
];

// Why choose us points
const whyChooseUs = [
  {
    icon: ThumbsUp,
    title: 'Truly Free',
    description: 'Our inspections are 100% free with no obligation - no pressure to buy anything.',
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
    description: 'Most inspections scheduled within 24-48 hours of your request.',
  },
];

// Mooresville areas served
const mooresvilleAreas = [
  'Downtown Mooresville',
  'Race City USA Corridor',
  'Langtree at the Lake',
  'Morrison Plantation',
  'The Point',
  'Mooresville South',
  'Brawley School Road',
  'Highway 150 Corridor',
  'Williamson Road Area',
  'Lake Norman Waterfront',
  'Curtis Pond',
  'Magnolia Estates',
  'Bridgemore Village',
  'Talbert Road',
  'NC Highway 3 Area',
  'Plaza Drive',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Davidson', href: '/roof-replacement-davidson-nc' },
  { name: 'Cornelius', href: '/roof-repair-cornelius-nc' },
  { name: 'Huntersville', href: '/emergency-roof-repair-huntersville-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Statesville', href: '/locations/statesville-nc' },
  { name: 'Denver', href: '/roof-inspection-denver-nc' },
];

// FAQs about roof inspections in Mooresville
const faqs = [
  {
    question: 'Is the roof inspection really free in Mooresville?',
    answer:
      'Yes, absolutely! Our roof inspections are 100% free with no obligation. We believe every Mooresville homeowner deserves to know the true condition of their roof. There\'s no pressure to hire us for repairs - we simply provide honest information so you can make informed decisions about your home.',
  },
  {
    question: 'What does a roof inspection include?',
    answer:
      'Our comprehensive inspection covers every component of your roofing system: shingles or roofing material condition, flashing around chimneys, vents, and skylights, gutter and downspout condition, attic ventilation, soffit and fascia, and overall structural integrity. You\'ll receive a detailed written report with photos documenting our findings.',
  },
  {
    question: 'How long does a roof inspection take in Mooresville?',
    answer:
      'Most residential roof inspections take 30-60 minutes depending on roof size and complexity. We take our time to thoroughly examine every component. You\'ll receive your written report with photos within 24-48 hours of the inspection.',
  },
  {
    question: 'When should I get my Mooresville roof inspected?',
    answer:
      'We recommend annual roof inspections, plus inspections after any significant storm. You should also get an inspection if you\'re buying or selling a home, notice any signs of damage or leaks, your roof is over 15 years old, or you\'re considering a roof replacement. Regular inspections can extend your roof\'s life and catch problems early.',
  },
  {
    question: 'Do you provide inspections for insurance claims?',
    answer:
      'Yes! We provide detailed storm damage inspections for insurance claims. We document all damage with photos and detailed reports, and can meet with your insurance adjuster to ensure all damage is properly identified. Many Mooresville homes have qualified for full roof replacement after storm damage inspections.',
  },
  {
    question: 'Can I be present during the roof inspection?',
    answer:
      'Absolutely! We encourage homeowners to be present. Our inspector will explain findings as we go and answer any questions. Being present helps you understand your roof\'s condition and makes it easier to discuss recommendations after the inspection.',
  },
  {
    question: 'What if you find problems during my inspection?',
    answer:
      'If we find issues, we\'ll explain them clearly and provide a written estimate for repairs or replacement. There\'s never any pressure - we provide information so you can make the best decision for your home. We\'re happy to answer questions and explain your options. Many problems can be addressed with minor repairs.',
  },
  {
    question: 'Do you inspect commercial roofs in Mooresville?',
    answer:
      'Yes, we provide commercial roof inspections throughout Mooresville. For commercial properties, we offer more detailed assessments including core sampling, moisture detection, and comprehensive reports. Contact us for a free commercial roof inspection.',
  },
];

export default function RoofInspectionMooresvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Inspection Mooresville NC', url: `${SITE_CONFIG.url}/roof-inspection-mooresville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-inspection-mooresville-nc`}
        pageName="Roof Inspection Mooresville NC"
        city="Mooresville"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.inspection}
            alt="Professional roof inspection services in Mooresville NC - Best Roofing Now"
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
              <span className="text-accent-light">Mooresville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Free comprehensive roof assessments for Lake Norman homes
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Not sure about your roof's condition? Best Roofing Now offers free, comprehensive roof inspections
              throughout Mooresville and the Lake Norman area. Our certified inspectors provide detailed reports
              with photos - no pressure, no obligation, just honest information to protect your home.
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
              Roof Inspection Services in Mooresville NC
            </h2>
            <p className="text-gray text-lg">
              Our certified inspectors provide thorough assessments tailored to your needs,
              from routine maintenance checks to pre-purchase evaluations.
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
                What's Included in Your Free Inspection
              </h2>
              <p className="text-gray text-lg mb-8">
                Our comprehensive inspection covers every component of your roofing system. We leave no stone
                unturned in assessing your roof's condition.
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
                alt="Comprehensive roof inspection in Mooresville NC - Best Roofing Now"
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
              Why Mooresville Trusts Our Inspections
            </h2>
            <p className="text-gray text-lg">
              We provide honest, thorough inspections with no sales pressure - just the information
              you need to make informed decisions about your roof.
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
                Ready for Your Free Roof Inspection?
              </h2>
              <p className="text-white/90">
                Schedule your no-obligation inspection today and know exactly what shape your roof is in.
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
              Free Inspections Throughout Mooresville & Lake Norman
            </h2>
            <p className="text-gray text-lg">
              We provide free roof inspections to homeowners throughout Mooresville and the Lake Norman region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mooresville Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Mooresville Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {mooresvilleAreas.map((area) => (
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
              Our Inspection Process
            </h2>
            <p className="text-gray text-lg">
              Our thorough inspection process ensures nothing is missed on your Mooresville roof.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="font-bold text-dark mb-2">Schedule</h3>
              <p className="text-gray text-sm">
                Call or book online. Most inspections scheduled within 24-48 hours.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="font-bold text-dark mb-2">Inspect</h3>
              <p className="text-gray text-sm">
                Our certified inspector examines every component of your roofing system.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="font-bold text-dark mb-2">Document</h3>
              <p className="text-gray text-sm">
                We take detailed photos and notes to create your comprehensive report.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                4
              </div>
              <h3 className="font-bold text-dark mb-2">Report</h3>
              <p className="text-gray text-sm">
                Receive your written report with findings, photos, and any recommendations.
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
              When Should You Get a Roof Inspection?
            </h2>
            <p className="text-gray text-lg">
              Regular inspections can save Mooresville homeowners thousands by catching problems early.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Annually</h3>
              <p className="text-gray text-sm">
                Yearly inspections catch wear and minor damage before they become major problems.
                Lake Norman's weather is tough on roofs - annual checks are essential.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">After Major Storms</h3>
              <p className="text-gray text-sm">
                Mooresville sees significant storms. After high winds, hail, or heavy rain,
                an inspection can identify damage that isn't visible from the ground.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Buying a Home</h3>
              <p className="text-gray text-sm">
                Know exactly what you're buying. A pre-purchase inspection can reveal issues
                that affect your offer or negotiation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Selling a Home</h3>
              <p className="text-gray text-sm">
                Address issues before listing. A clean inspection report can be a selling point
                and prevent delays in closing.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Roof Over 15 Years</h3>
              <p className="text-gray text-sm">
                As roofs age, more frequent inspections become important. We can help you plan
                for eventual replacement.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Signs of Problems</h3>
              <p className="text-gray text-sm">
                Leaks, missing shingles, granules in gutters, or stains on ceilings all warrant
                immediate inspection.
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
                Roof Inspection FAQs for Mooresville
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof inspection services in Mooresville NC.
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
        title="Schedule Your Free Mooresville Roof Inspection"
        subtitle="Get a comprehensive roof assessment with detailed photos and report - 100% free, no obligation. Know exactly what shape your roof is in."
      />
    </>
  );
}
