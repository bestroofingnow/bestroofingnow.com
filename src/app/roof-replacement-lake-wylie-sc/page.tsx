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
  Clock,
  Home,
  MapPin,
  Hammer,
  FileCheck,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import {
  BreadcrumbSchema,
  FAQSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roof Replacement Lake Wylie SC | Free Estimates | Best Roofing Now',
  description:
    'Professional roof replacement in Lake Wylie SC. Complete tear-off and installation with premium shingles from GAF, CertainTeed, and Owens Corning. $8,500-$25,000. Up to 50-year warranties. Call (704) 605-6047.',
  keywords: [
    'roof replacement lake wylie sc',
    'new roof lake wylie',
    'roof replacement cost lake wylie sc',
    'roof installation lake wylie',
    'reroof lake wylie sc',
    'lake wylie new roof',
    'best roof replacement lake wylie sc',
    'roof replacement near me lake wylie',
    'affordable roof replacement lake wylie',
    'lake wylie roof installation cost',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-replacement-lake-wylie-sc`,
  },
  openGraph: {
    title: 'Roof Replacement Lake Wylie SC | Free Estimates | Best Roofing Now',
    description:
      'Premium roof replacement in Lake Wylie SC. GAF, CertainTeed, Owens Corning certified installers. Up to 50-year warranties. BBB A+ rated, veteran-owned. Free estimates!',
    url: `${SITE_CONFIG.url}/roof-replacement-lake-wylie-sc`,
    type: 'website',
    images: [
      {
        url: IMAGES.realProjects.project5,
        width: 1200,
        height: 630,
        alt: 'Professional roof replacement Lake Wylie SC - Best Roofing Now',
      },
    ],
  },
};

// Roof replacement process
const replacementProcess = [
  {
    step: '1',
    title: 'Free Inspection & Estimate',
    description: 'We thoroughly inspect your Lake Wylie roof, discuss options, and provide a detailed written estimate with no obligation.',
  },
  {
    step: '2',
    title: 'Material Selection',
    description: 'Choose from premium shingles by GAF, CertainTeed, and Owens Corning. We help you select the best option for your home and budget.',
  },
  {
    step: '3',
    title: 'Preparation & Tear-Off',
    description: 'Complete removal of old roofing materials down to the deck. We inspect for damage and make necessary repairs.',
  },
  {
    step: '4',
    title: 'Installation',
    description: 'New underlayment, flashing, drip edge, and shingles installed according to manufacturer specifications.',
  },
  {
    step: '5',
    title: 'Cleanup & Final Inspection',
    description: 'Thorough cleanup with magnetic sweeps for nails. Final inspection ensures everything meets our quality standards.',
  },
  {
    step: '6',
    title: 'Warranty Registration',
    description: 'We register your warranty with the manufacturer and provide all documentation for your records.',
  },
];

// Why choose us
const whyChooseUs = [
  {
    icon: Award,
    title: 'Manufacturer Certified',
    description: 'CertainTeed ShingleMaster, GAF Factory-Certified for extended warranty options.',
  },
  {
    icon: Shield,
    title: 'Up to 50-Year Warranties',
    description: 'Our certifications enable us to offer the best warranties in the industry protecting your investment.',
  },
  {
    icon: Star,
    title: '5-Star Rated',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Lake Wylie and Charlotte area homeowners.`,
  },
  {
    icon: FileCheck,
    title: 'Insurance Specialists',
    description: 'We work with insurance companies to help Lake Wylie homeowners get coverage for storm damage replacements.',
  },
  {
    icon: Clock,
    title: 'Fast Installation',
    description: 'Most roof replacements completed in 1-3 days with minimal disruption to your daily life.',
  },
  {
    icon: CheckCircle,
    title: 'Veteran-Owned',
    description: 'Military values of integrity, discipline, and excellence guide everything we do.',
  },
];

// Shingle options
const shingleOptions = [
  {
    brand: 'GAF Timberline HDZ',
    description: 'America\'s #1 selling shingle with LayerLock technology and StainGuard Plus protection.',
    warranty: 'Lifetime Limited + 25-Year Golden Pledge',
    windRating: '130 MPH',
  },
  {
    brand: 'CertainTeed Landmark Pro',
    description: 'Max Def color technology with exceptional depth and dimension for a premium look.',
    warranty: 'Lifetime Limited + SureStart Plus',
    windRating: '130 MPH',
  },
  {
    brand: 'Owens Corning Duration',
    description: 'SureNail technology provides outstanding grip and wind resistance in any weather.',
    warranty: 'Lifetime Limited + Platinum Protection',
    windRating: '130 MPH',
  },
];

// Lake Wylie areas
const lakeWylieAreas = [
  'Lake Wylie',
  'Tega Cay',
  'Clover',
  'Lake Wylie Pointe',
  'River Hills',
  'The Palisades',
  'Reflection Pointe',
  'Catawba Creek',
  'McConnells',
  'Fort Mill',
  'Rock Hill',
];

// FAQs
const faqs = [
  {
    question: 'How much does roof replacement cost in Lake Wylie SC?',
    answer: 'Roof replacement costs in Lake Wylie SC typically range from $8,500-$25,000 for most homes, depending on roof size, pitch, material choice, and complexity. A standard 2,000 sq ft home with architectural shingles averages $10,000-$15,000. We provide free, detailed estimates with itemized costs so you know exactly what to expect.',
  },
  {
    question: 'How long does a roof replacement take in Lake Wylie?',
    answer: 'Most residential roof replacements in Lake Wylie are completed in 1-3 days. A standard single-story home is typically done in 1 day, while larger or more complex roofs may take 2-3 days. Weather can affect the timeline. We provide a specific estimate before starting work.',
  },
  {
    question: 'What is the best roofing material for Lake Wylie SC homes?',
    answer: 'Architectural asphalt shingles are the most popular choice for Lake Wylie homes due to their durability, affordability, and variety of styles. They handle South Carolina weather well, including heat, humidity, and storms. We recommend GAF Timberline HDZ, CertainTeed Landmark Pro, or Owens Corning Duration for the best combination of quality and value.',
  },
  {
    question: 'Does roof replacement require a permit in Lake Wylie SC?',
    answer: 'Yes, roof replacement in Lake Wylie SC requires a building permit from York County. As a licensed contractor, Best Roofing Now handles the entire permit process as part of our service. This ensures your new roof is inspected and meets all local building codes.',
  },
  {
    question: 'Will my homeowner\'s insurance cover roof replacement in Lake Wylie?',
    answer: 'If your roof was damaged by a covered event like a storm, hail, or fallen tree, your homeowner\'s insurance may cover replacement minus your deductible. We specialize in helping Lake Wylie homeowners with insurance claims, providing documentation and meeting with adjusters to advocate for fair coverage.',
  },
  {
    question: 'Do you offer financing for roof replacement in Lake Wylie SC?',
    answer: 'Yes! We offer flexible financing options including 0% APR for qualified buyers, low monthly payments, and quick approval. Most homeowners can get a new roof for as little as $99/month. We work with multiple lenders to find the best option for your budget.',
  },
];

export default function RoofReplacementLakeWylieSCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Lake Wylie SC', url: `${SITE_CONFIG.url}/roof-replacement-lake-wylie-sc` },
          { name: 'Roof Replacement Lake Wylie SC', url: `${SITE_CONFIG.url}/roof-replacement-lake-wylie-sc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-replacement-lake-wylie-sc`}
        pageName="Roof Replacement Lake Wylie SC"
        city="Lake Wylie"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.realProjects.project5}
            alt="Professional roof replacement Lake Wylie SC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Hammer className="w-4 h-4" />
              <span className="text-sm font-semibold">Premium Roof Replacement</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Replacement <br className="hidden md:block" />
              <span className="text-accent-light">Lake Wylie SC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Complete roof replacement starting at $8,500 with up to 50-year warranties
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now delivers expert roof replacement services throughout Lake Wylie SC. As manufacturer-certified
              installers, we offer the best warranties in the industry backed by BBB A+ rated service.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Estimate
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
                5.0 Google Rating
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                Up to 50-Year Warranty
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Licensed & Insured
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Best Roofing Now for Roof Replacement
            </h2>
            <p className="text-gray text-lg">
              Lake Wylie homeowners trust us for quality materials, expert installation, and industry-leading warranties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-shadow"
              >
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

      {/* Process Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Roof Replacement Process
            </h2>
            <p className="text-gray text-lg">
              We follow a proven process to ensure every Lake Wylie roof replacement exceeds expectations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {replacementProcess.map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {item.step}
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
                Ready for a New Roof in Lake Wylie SC?
              </h2>
              <p className="text-white/90">
                Get a free estimate with financing options available. Roofs starting at $8,500.
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

      {/* Shingle Options Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Premium Shingle Options for Lake Wylie Homes
            </h2>
            <p className="text-gray text-lg">
              We install top-quality shingles from the industry&apos;s leading manufacturers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {shingleOptions.map((option) => (
              <div key={option.brand} className="bg-light rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark text-lg mb-2">{option.brand}</h3>
                <p className="text-gray text-sm mb-4">{option.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray">Warranty:</span>
                    <span className="font-semibold text-primary">{option.warranty}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray">Wind Rating:</span>
                    <span className="font-semibold text-primary">{option.windRating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Cost Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Roof Replacement Cost in Lake Wylie SC
              </h2>
              <p className="text-gray text-lg mb-6">
                Understanding roof replacement costs helps you plan and budget for your Lake Wylie home improvement project.
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 flex justify-between items-center">
                  <span className="font-semibold text-dark">Small Home (1,000-1,500 sq ft)</span>
                  <span className="text-primary font-bold">$8,500-$12,000</span>
                </div>
                <div className="bg-white rounded-xl p-4 flex justify-between items-center">
                  <span className="font-semibold text-dark">Average Home (1,500-2,500 sq ft)</span>
                  <span className="text-primary font-bold">$10,000-$18,000</span>
                </div>
                <div className="bg-white rounded-xl p-4 flex justify-between items-center">
                  <span className="font-semibold text-dark">Large Home (2,500-3,500+ sq ft)</span>
                  <span className="text-primary font-bold">$15,000-$25,000</span>
                </div>
              </div>
              <p className="text-gray text-sm mt-4">
                *Prices vary based on roof pitch, complexity, material choice, and current market conditions. Contact us for an accurate free estimate.
              </p>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed shingle installation on Lake Wylie SC home"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
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
              Roof Replacement Across Lake Wylie & York County
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Lake Wylie & York County</h3>
              <div className="flex flex-wrap gap-2">
                {lakeWylieAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Also Serving</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Fort Mill, SC', href: '/roof-replacement-fort-mill-sc' },
                  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
                  { name: 'Charlotte, NC', href: '/locations/charlotte-nc' },
                  { name: 'Pineville, NC', href: '/locations/pineville-nc' },
                ].map((city) => (
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
                Roof Replacement Lake Wylie SC FAQs
              </h2>
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

      {/* Related Services */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              More Roofing Services in Lake Wylie SC
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/roof-repair-lake-wylie-sc"
              className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roof Repair Lake Wylie SC</h3>
              <p className="text-gray text-sm mb-3">Fast, reliable repairs for leaks and storm damage.</p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/roofers-lake-wylie-sc"
              className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roofers Lake Wylie SC</h3>
              <p className="text-gray text-sm mb-3">Top-rated roofing contractors serving Lake Wylie.</p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/financing"
              className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roof Financing</h3>
              <p className="text-gray text-sm mb-3">Flexible financing with 0% APR options available.</p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="location"
        city="Fort Mill"
        slug="roof-replacement-lake-wylie-sc"
      />

      <CityGeoSection
        city="Lake Wylie"
        state="SC"
        citySlug="lake-wylie-sc"
        service="Roof Replacement"
      />

      <CTASection
        title="Ready for a New Roof in Lake Wylie SC?"
        subtitle="Get a free, no-obligation estimate from York County's trusted roofing contractor. Financing available with payments as low as $99/month."
      />
    </>
  );
}
