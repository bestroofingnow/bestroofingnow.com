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
  LocalBusinessSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roof Replacement Fort Mill SC | New Roof Installation | Best Roofing Now',
  description:
    'Professional roof replacement in Fort Mill SC. Complete tear-off and installation with premium shingles from GAF, CertainTeed, and Owens Corning. Up to 50-year warranties. BBB A+ rated. Free estimates. Call (704) 605-6047.',
  keywords: [
    'roof replacement fort mill sc',
    'new roof fort mill sc',
    'fort mill roof replacement',
    'roof installation fort mill',
    'reroof fort mill sc',
    'roof replacement cost fort mill',
    'best roof replacement fort mill sc',
    'fort mill new roof installation',
    'roof replacement near me fort mill',
    'affordable roof replacement fort mill',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-replacement-fort-mill-sc`,
  },
  openGraph: {
    title: 'Roof Replacement Fort Mill SC | New Roof Installation | Best Roofing Now',
    description:
      'Premium roof replacement in Fort Mill SC. GAF, CertainTeed, Owens Corning certified installers. Up to 50-year warranties. BBB A+ rated, veteran-owned. Free estimates!',
    url: `${SITE_CONFIG.url}/roof-replacement-fort-mill-sc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Professional roof replacement Fort Mill SC - Best Roofing Now',
      },
    ],
  },
};

// Roof replacement process
const replacementProcess = [
  {
    step: '1',
    title: 'Free Inspection & Estimate',
    description: 'We thoroughly inspect your roof, discuss options, and provide a detailed written estimate with no obligation.',
  },
  {
    step: '2',
    title: 'Material Selection',
    description: 'Choose from premium shingles by GAF, CertainTeed, and Owens Corning. We help you select the best option for your home.',
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
    description: 'CertainTeed SELECT ShingleMaster, GAF Factory-Certified, and Owens Corning Preferred for extended warranty options.',
  },
  {
    icon: Shield,
    title: 'Up to 50-Year Warranties',
    description: 'Our certifications enable us to offer the best warranties in the industry protecting your investment.',
  },
  {
    icon: Star,
    title: '5-Star Rated',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Fort Mill and Charlotte area homeowners.`,
  },
  {
    icon: FileCheck,
    title: 'Insurance Specialists',
    description: 'We work with insurance companies to help Fort Mill homeowners get coverage for storm damage replacements.',
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

// Fort Mill areas
const fortMillAreas = [
  'Fort Mill',
  'Baxter Village',
  'Tega Cay',
  'Kingsley',
  'Springfield',
  'Regent Park',
  'Massey',
  'Indian Land',
  'Lake Wylie',
  'Catawba Ridge',
];

// FAQs
const faqs = [
  {
    question: 'How much does roof replacement cost in Fort Mill SC?',
    answer: 'Roof replacement costs in Fort Mill SC typically range from $8,000-$25,000 for most homes, depending on roof size, pitch, material choice, and complexity. A standard 2,000 sq ft home with architectural shingles averages $10,000-$15,000. We provide free, detailed estimates with itemized costs so you know exactly what to expect.',
  },
  {
    question: 'How long does a roof replacement take in Fort Mill?',
    answer: 'Most residential roof replacements in Fort Mill are completed in 1-3 days. A standard single-story home is typically done in 1 day, while larger or more complex roofs may take 2-3 days. Weather can affect the timeline. We provide a specific estimate before starting work.',
  },
  {
    question: 'What is the best roofing material for Fort Mill SC homes?',
    answer: 'Architectural asphalt shingles are the most popular choice for Fort Mill homes due to their durability, affordability, and variety of styles. They handle South Carolina weather well, including heat, humidity, and storms. We recommend GAF Timberline HDZ, CertainTeed Landmark Pro, or Owens Corning Duration for the best combination of quality and value.',
  },
  {
    question: 'Does roof replacement require a permit in Fort Mill?',
    answer: 'Yes, roof replacement in Fort Mill SC requires a building permit from York County. As a licensed contractor, Best Roofing Now handles the entire permit process as part of our service. This ensures your new roof is inspected and meets all local building codes.',
  },
  {
    question: 'Will my homeowner\'s insurance cover roof replacement?',
    answer: 'If your roof was damaged by a covered event like a storm, hail, or fallen tree, your homeowner\'s insurance may cover replacement minus your deductible. We specialize in helping Fort Mill homeowners with insurance claims, providing documentation and meeting with adjusters to advocate for fair coverage.',
  },
  {
    question: 'What warranty do you offer on roof replacement in Fort Mill?',
    answer: 'We offer comprehensive warranty coverage including manufacturer warranties up to 50 years on materials and our own workmanship warranty. As CertainTeed, GAF, and Owens Corning certified installers, we can offer enhanced warranties like GAF Golden Pledge (50 years material + 25 years workmanship) and CertainTeed SureStart Plus.',
  },
  {
    question: 'Can I stay in my home during roof replacement?',
    answer: 'Yes, you can stay in your home during roof replacement. There will be noise during work hours (typically 7am-6pm), and we recommend moving vehicles away from the house. We take precautions to protect your property and landscaping, and we always clean up thoroughly at the end of each day.',
  },
  {
    question: 'Do you offer financing for roof replacement in Fort Mill?',
    answer: 'Yes! We offer flexible financing options including 0% APR for qualified buyers, low monthly payments, and quick approval. Most homeowners can get a new roof for as little as $99/month. We work with multiple lenders to find the best option for your budget.',
  },
];

export default function RoofReplacementFortMillSCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Fort Mill SC', url: `${SITE_CONFIG.url}/roofing-fort-mill-sc` },
          { name: 'Roof Replacement Fort Mill SC', url: `${SITE_CONFIG.url}/roof-replacement-fort-mill-sc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-replacement-fort-mill-sc`}
        pageName="Roof Replacement Fort Mill SC"
        city="Fort Mill"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Professional roof replacement Fort Mill SC - Best Roofing Now"
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
              <span className="text-accent-light">Fort Mill SC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Complete roof replacement with premium materials and up to 50-year warranties
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now delivers expert roof replacement services throughout Fort Mill SC. As manufacturer-certified
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
              Fort Mill homeowners trust us for quality materials, expert installation, and industry-leading warranties.
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
              We follow a proven process to ensure every Fort Mill roof replacement exceeds expectations.
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
                Ready for a New Roof in Fort Mill SC?
              </h2>
              <p className="text-white/90">
                Get a free estimate with financing options available.
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
              Premium Shingle Options for Fort Mill Homes
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

      {/* Service Areas Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Replacement Across Fort Mill & York County
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Fort Mill & York County</h3>
              <div className="flex flex-wrap gap-2">
                {fortMillAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Also Serving</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
                  { name: 'Charlotte, NC', href: '/locations/charlotte-nc' },
                  { name: 'Pineville, NC', href: '/locations/pineville-nc' },
                  { name: 'Matthews, NC', href: '/locations/matthews-nc' },
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
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roof Replacement Fort Mill SC FAQs
              </h2>
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

      {/* Related Services */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              More Roofing Services in Fort Mill
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/roof-repair-fort-mill-sc"
              className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roof Repair Fort Mill SC</h3>
              <p className="text-gray text-sm mb-3">Fast, reliable repairs for leaks and storm damage.</p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/roofing-fort-mill-sc"
              className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roofing Fort Mill SC</h3>
              <p className="text-gray text-sm mb-3">Complete roofing services for Fort Mill homes.</p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/financing"
              className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all"
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

      {/* Final CTA */}
      <CTASection
        title="Ready for a New Roof in Fort Mill SC?"
        subtitle="Get a free, no-obligation estimate from York County's trusted roofing contractor. Financing available with payments as low as $99/month."
      />
    </>
  );
}
