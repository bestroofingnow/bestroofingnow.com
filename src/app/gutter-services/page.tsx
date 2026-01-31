import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Droplets,
  ArrowRight,
  CheckCircle,
  Phone,
  Shield,
  Award,
  Clock,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';
import YouTubeShort from '@/components/sections/YouTubeShort';
import { FAQ } from '@/components/sections/FAQ';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  ServiceSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
  LocalBusinessSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DirectoryCitations } from '@/components/ui/DirectoryCitations';
import { SITE_CONFIG, SERVICES, LOCATIONS } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { EstimateButton } from '@/components/estimate';

export const metadata: Metadata = {
  title: 'Gutter Services Charlotte NC | Installation, Repair, Cleaning & Guards',
  description:
    'Professional gutter services in Charlotte NC. Seamless gutter installation, repair, cleaning, and gutter guard systems. Protect your home from water damage. Free estimates!',
  keywords: [
    'gutter services Charlotte NC',
    'seamless gutters Charlotte',
    'gutter contractor near me',
    'gutter company Charlotte',
    'gutter solutions Charlotte NC',
    'complete gutter services Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gutter-services`,
  },
  openGraph: {
    title: 'Gutter Services Charlotte NC | Installation, Repair & Cleaning',
    description:
      'Professional gutter services in Charlotte NC. Seamless gutter installation, repair, cleaning, and gutter guard systems.',
    url: `${SITE_CONFIG.url}/gutter-services`,
  },
};

// Gutter services to display
const gutterServices = [
  {
    slug: 'gutter-installation',
    title: 'Gutter Installation',
    description: 'Custom seamless aluminum gutters made on-site to fit your home perfectly. No leaky joints, proper drainage.',
    icon: '🏠',
    highlights: ['Seamless design', 'Color matching', 'Proper slope'],
  },
  {
    slug: 'gutter-repair',
    title: 'Gutter Repair',
    description: 'Fix leaks, reattach sagging sections, and restore proper drainage. Most repairs completed same day.',
    icon: '🔧',
    highlights: ['Same-day service', 'Leak repair', 'Joint sealing'],
  },
  {
    slug: 'gutter-cleaning',
    title: 'Gutter Cleaning',
    description: 'Professional debris removal and downspout flushing. Prevent water damage and foundation issues.',
    icon: '🍂',
    highlights: ['Debris removal', 'Downspout flush', 'System check'],
  },
  {
    slug: 'gutter-guards',
    title: 'Gutter Guards',
    description: 'Eliminate gutter cleaning with quality protection systems. Micro-mesh and solid cover options available.',
    icon: '🛡️',
    highlights: ['Leaf protection', 'Low maintenance', '20+ year warranty'],
  },
];

const gutterFAQs = [
  {
    question: 'How much do new gutters cost in Charlotte NC?',
    answer: 'Seamless aluminum gutter installation in Charlotte typically costs $4-12 per linear foot, depending on gutter size, home height, and complexity. Most homes average $1,000-2,500 for complete gutter replacement. We provide free estimates with transparent pricing.',
  },
  {
    question: 'What are the signs I need new gutters?',
    answer: 'Signs you need gutter replacement include: gutters pulling away from the house, multiple leaks or holes, rust or corrosion, sagging sections, water pooling around foundation, peeling paint near gutters, or gutters over 20 years old. We offer free inspections to assess your gutters.',
  },
  {
    question: 'How often should gutters be cleaned in Charlotte?',
    answer: 'Charlotte homeowners should clean gutters at least twice yearly - in late spring after pollen season and late fall after leaves drop. Homes with many trees may need quarterly cleaning. Gutter guards can reduce cleaning to once every 2-3 years.',
  },
  {
    question: 'Are seamless gutters worth the extra cost?',
    answer: 'Yes! Seamless gutters are worth the investment because they eliminate leak-prone joints, last longer (20-30 years vs 10-15 for sectional), look cleaner, and require less maintenance. The small extra cost pays off in longevity and reduced repairs.',
  },
  {
    question: 'Do gutter guards really work?',
    answer: 'Quality gutter guards significantly reduce debris buildup and maintenance needs. The key is choosing the right type - micro-mesh works best for pine needles, while solid covers handle leaves well. We help you select the best option for your specific trees and environment.',
  },
  {
    question: 'Can clogged gutters damage my home?',
    answer: 'Absolutely. Clogged gutters cause water to overflow, leading to foundation damage, basement flooding, rotted fascia boards, landscape erosion, and conditions for mold growth. In Charlotte\'s 43+ inches of annual rainfall, properly functioning gutters are essential.',
  },
];

// Virtual service for schema
const gutterCategoryService = {
  slug: 'gutter-services',
  title: 'Gutter Services',
  description: 'Complete gutter services including installation, repair, cleaning, and gutter guard systems for Charlotte NC homes.',
  keywords: ['gutter services Charlotte NC', 'gutter installation', 'gutter repair', 'gutter cleaning'],
  priceRange: '$149 - $3,000+',
};

export default function GutterServicesPage() {
  const pageUrl = `${SITE_CONFIG.url}/gutter-services`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="Gutter Services Charlotte NC | Installation, Repair & Cleaning"
        description="Professional gutter services in Charlotte NC. Seamless gutter installation, repair, cleaning, and gutter guard systems."
        url={pageUrl}
        primaryImage={IMAGES.services.gutters}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Gutter Services', url: pageUrl },
        ]}
      />
      <ServiceSchema service={gutterCategoryService} />
      <FAQSchema faqs={gutterFAQs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Gutter Services', url: pageUrl },
        ]}
      />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={pageUrl}
        pageName="Gutter Services Charlotte NC"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much do new gutters cost in Charlotte NC?',
            answer: 'New seamless aluminum gutters in Charlotte NC cost $6-$12 per linear foot installed, or $1,000-$2,500 for most homes. Best Roofing Now provides custom seamless gutters made on-site with color matching and lifetime warranties. Call (704) 605-6047 for a free gutter estimate.',
            speakableAnswer: 'New gutters in Charlotte cost $6-12 per foot installed. Best Roofing Now offers seamless gutters with free estimates. Call 704-605-6047.',
          },
          {
            question: 'Who installs gutters in Charlotte NC?',
            answer: 'Best Roofing Now is Charlotte\'s top-rated gutter installation company with a 5-star Google rating. They install seamless aluminum gutters, gutter guards, and downspouts. Veteran-owned with BBB A+ accreditation.',
            speakableAnswer: 'Best Roofing Now installs gutters in Charlotte with a 5-star rating. They offer seamless gutters and guards. Call 704-605-6047.',
          },
          {
            question: 'How often should gutters be cleaned in Charlotte?',
            answer: 'Gutters in Charlotte should be cleaned at least twice per year - in late fall after leaves drop and in spring. Homes with many trees may need quarterly cleaning. Best Roofing Now offers professional gutter cleaning and gutter guard installation to eliminate cleaning needs.',
            speakableAnswer: 'Clean gutters twice per year in Charlotte - fall and spring. Or install gutter guards to eliminate cleaning. Call Best Roofing Now.',
          },
          {
            question: 'Are gutter guards worth it in Charlotte NC?',
            answer: 'Yes, gutter guards are worth it in Charlotte NC for homes with trees. Quality micro-mesh guards cost $15-25 per foot but eliminate gutter cleaning forever. Best Roofing Now installs LeafFilter and other premium gutter guard systems with lifetime warranties.',
            speakableAnswer: 'Yes, gutter guards eliminate cleaning in Charlotte. They cost $15-25 per foot with lifetime warranties from Best Roofing Now.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Visual Breadcrumbs */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs
            items={[{ name: 'Gutter Services', href: '/gutter-services' }]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.services.gutters}
            alt="Professional gutter services in Charlotte NC"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              <Droplets className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Gutter Services Charlotte NC
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Protect your home from water damage with professional gutter services from Charlotte&apos;s trusted contractor.
              Seamless gutter installation, expert repairs, thorough cleaning, and gutter guard systems.
              Serving Charlotte and all surrounding areas with quality workmanship since 2020.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <EstimateButton
                variant="accent"
                className="bg-accent hover:bg-accent-dark text-white"
              >
                Get Free Estimate
              </EstimateButton>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={<Phone className="w-5 h-5" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Complete Gutter Solutions for Charlotte Homes
            </h2>
            <p className="text-lg text-gray leading-relaxed mb-8 text-center">
              With Charlotte receiving over 43 inches of rainfall annually, your gutters are your home&apos;s first line of defense against water damage.
              Best Roofing Now provides comprehensive gutter services to keep your home protected year-round.
              From custom seamless gutter installation to professional cleaning and gutter guard systems, we handle it all.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-dark mb-2">Foundation Protection</h3>
                <p className="text-gray text-sm">Prevent costly foundation damage with proper water management</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-dark mb-2">Quality Materials</h3>
                <p className="text-gray text-sm">Heavy-gauge aluminum gutters built to last 20+ years</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-dark mb-2">Fast Service</h3>
                <p className="text-gray text-sm">Most installations completed in just one day</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-4">
            Our Gutter Services
          </h2>
          <p className="text-gray text-center max-w-2xl mx-auto mb-12">
            From installation to maintenance, we provide everything your gutters need to protect your Charlotte home.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {gutterServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-light rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{service.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray">
                          <CheckCircle className="w-4 h-4 text-accent" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center text-primary font-semibold group-hover:text-accent transition-colors">
                      Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Gutters Matter */}
      <section className="section bg-primary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Why Gutters Matter in Charlotte NC
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Charlotte&apos;s climate presents unique challenges for homeowners. With an average of 43 inches of rainfall per year,
                including heavy thunderstorms and occasional hurricanes, your gutter system works overtime to protect your home.
              </p>
              <p>
                Properly functioning gutters channel water away from your foundation, preventing the costly damage that comes from
                water pooling around your home. Without good gutters, you risk:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 list-none pl-0 my-6">
                <li className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <span className="text-red-500 font-bold">⚠️</span>
                  <span><strong>Foundation Damage:</strong> Water pooling can crack and shift your foundation - repairs cost $5,000-$15,000+</span>
                </li>
                <li className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <span className="text-red-500 font-bold">⚠️</span>
                  <span><strong>Basement Flooding:</strong> Water seeping into basements causes mold, mildew, and structural issues</span>
                </li>
                <li className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <span className="text-red-500 font-bold">⚠️</span>
                  <span><strong>Fascia Rot:</strong> Overflowing gutters rot your fascia boards and damage your roof edge</span>
                </li>
                <li className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <span className="text-red-500 font-bold">⚠️</span>
                  <span><strong>Landscape Erosion:</strong> Uncontrolled water destroys landscaping and creates drainage problems</span>
                </li>
              </ul>
              <p>
                Best Roofing Now has helped hundreds of Charlotte homeowners protect their properties with quality gutter services.
                Whether you need new seamless gutters, repairs to your existing system, or professional cleaning and guards,
                we deliver solutions that last.
              </p>
            </div>
          </div>
        </div>
      </section>

      <YouTubeShort
        videoId="CXaG6atl-nE"
        title="The $10,000 Gutter Mistake"
        heading="Watch: The $10,000 Gutter Mistake"
        description="Most homeowners ignore their gutters until it's too late. See the 3 red flags you need to know."
      />

      {/* Service Areas */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Gutter Services Throughout Charlotte Metro
          </h2>
          <p className="text-center text-gray max-w-2xl mx-auto mb-8">
            We provide professional gutter services across the Charlotte metropolitan area and surrounding communities.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
            {LOCATIONS.slice(0, 18).map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="bg-light rounded-lg p-3 text-center hover:bg-primary hover:text-white transition-colors group"
              >
                <span className="text-sm font-medium">
                  {location.city}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/locations" className="text-primary font-semibold hover:text-accent">
              View All Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        faqs={gutterFAQs}
        title="Gutter Services FAQ"
        subtitle="Common questions about gutter installation, repair, and maintenance in Charlotte NC"
      />

      {/* Related Services */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Related Exterior Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/services/roof-repair" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roof Repair</h3>
              <p className="text-gray text-sm">Fix leaks and damage before they spread to your gutters and fascia.</p>
            </Link>
            <Link href="/siding-services" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Siding Services</h3>
              <p className="text-gray text-sm">Complete your home&apos;s exterior protection with professional siding.</p>
            </Link>
            <Link href="/services/soffit-fascia" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Soffit & Fascia</h3>
              <p className="text-gray text-sm">Protect your roof edge where gutters attach with quality soffit and fascia.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Directory Citations */}
      <section className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <DirectoryCitations pageType="service" maxLinks={3} variant="inline" title="Verified Business" />
            <p className="text-sm text-gray-500">
              Licensed, Bonded & Insured | BBB A+ Rated
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Protect Your Home?"
        subtitle="Get a free gutter inspection and estimate. No pressure, just honest advice from Charlotte's trusted gutter contractor."
      />
    </>
  );
}
