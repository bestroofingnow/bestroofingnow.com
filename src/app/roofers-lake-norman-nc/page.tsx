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
  MapPin,
  ThumbsUp,
  Briefcase,
  BadgeCheck,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: "Roofers Lake Norman NC | LKN's Top-Rated | Best Roofing Now",
  description:
    'Top-rated roofers serving Lake Norman NC. 200+ LKN projects completed, 5-star Google rating, BBB A+ accredited. Veteran-owned roofing contractors in Mooresville, Cornelius, Davidson & Denver.',
  keywords: [
    'roofers lake norman nc',
    'lkn roofers',
    'lake norman roofing contractors',
    'best roofers mooresville nc',
    'roofing company lake norman',
    'lake norman roofer near me',
    'top rated roofers lake norman',
    'licensed roofers lake norman nc',
    'roofing contractors cornelius nc',
    'roofing company davidson nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofers-lake-norman-nc`,
  },
  openGraph: {
    title: "Roofers Lake Norman NC | LKN's Top-Rated | Best Roofing Now",
    description:
      'Top-rated roofers serving all of Lake Norman NC. 200+ projects, 5-star rating, BBB A+ accredited, veteran-owned. Serving Mooresville, Cornelius, Davidson, Denver & Huntersville.',
    url: `${SITE_CONFIG.url}/roofers-lake-norman-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero21,
        width: 1200,
        height: 630,
        alt: 'Top-rated roofers serving Lake Norman NC - Best Roofing Now',
      },
    ],
  },
};

const credentials = [
  {
    icon: Star,
    title: '5.0 Google Rating',
    description: `${SITE_CONFIG.googleReviewCount}+ verified five-star reviews from Lake Norman homeowners who trust our work.`,
  },
  {
    icon: Award,
    title: 'BBB A+ Accredited',
    description: 'Better Business Bureau accredited with an A+ rating and zero unresolved complaints.',
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'A veteran-owned company built on military discipline, integrity, and exceptional workmanship.',
  },
  {
    icon: BadgeCheck,
    title: 'GAF Certified',
    description: 'GAF Factory-Certified contractor with access to the industry\'s strongest warranty packages.',
  },
  {
    icon: BadgeCheck,
    title: 'CertainTeed ShingleMaster',
    description: 'CertainTeed ShingleMaster certified for premium installations with enhanced warranty coverage.',
  },
  {
    icon: CheckCircle,
    title: 'Fully Licensed & Insured',
    description: 'Licensed North Carolina roofing contractor with comprehensive general liability and workers comp coverage.',
  },
];

const services = [
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, storm damage, and general wear across the Lake Norman area.',
    href: '/roof-repair-lake-norman-nc',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full roof installation with premium materials and manufacturer-backed warranties.',
    href: '/roof-replacement-lake-norman-nc',
  },
  {
    icon: Shield,
    title: 'Storm Damage',
    description: 'Emergency response and insurance claim assistance for hail, wind, and tree damage.',
    href: '/storm-damage-roof-repair-lake-norman-nc',
  },
  {
    icon: Clock,
    title: 'Emergency Service',
    description: '24/7 emergency tarping and repairs when your Lake Norman home cannot wait.',
    href: '/emergency-roof-repair-lake-norman-nc',
  },
];

const lknCommunities = [
  { name: 'Mooresville', href: '/roof-repair-mooresville-nc' },
  { name: 'Cornelius', href: '/roof-repair-cornelius-nc' },
  { name: 'Davidson', href: '/roof-repair-davidson-nc' },
  { name: 'Denver', href: '/roof-repair-denver-nc' },
  { name: 'Huntersville', href: '/roof-repair-huntersville-nc' },
  { name: 'Sherrills Ford', href: '/locations/sherrills-ford-nc' },
  { name: 'Troutman', href: '/locations/troutman-nc' },
  { name: 'Terrell', href: '/locations/terrell-nc' },
];

const faqs = [
  {
    question: 'Who is the best roofer in the Lake Norman area?',
    answer:
      'Best Roofing Now is consistently rated the top roofing contractor in the Lake Norman area with a perfect 5.0 Google rating, BBB A+ accreditation, and over 200 completed projects across Mooresville, Cornelius, Davidson, Denver, and Huntersville. We are veteran-owned, GAF certified, and CertainTeed ShingleMaster qualified.',
  },
  {
    question: 'How do I choose a roofer in Lake Norman NC?',
    answer:
      'Look for a roofer with verified Google reviews, BBB accreditation, proper NC licensing and insurance, manufacturer certifications (GAF, CertainTeed), and a strong portfolio of local projects. Avoid contractors who demand large upfront payments or lack a physical business presence in the area. Best Roofing Now checks every box.',
  },
  {
    question: 'Are you licensed and insured to work in the Lake Norman area?',
    answer:
      'Yes. Best Roofing Now is a fully licensed North Carolina roofing contractor with comprehensive general liability insurance and workers compensation coverage. We are licensed to work in Iredell, Mecklenburg, Lincoln, and Catawba counties, covering every community around Lake Norman.',
  },
  {
    question: 'How many roofing projects have you completed in Lake Norman?',
    answer:
      'We have completed over 200 roofing projects across the Lake Norman region including repairs, replacements, and storm damage restorations in Mooresville, Cornelius, Davidson, Denver, Huntersville, and Sherrills Ford. Our portfolio includes everything from waterfront estates to neighborhood homes.',
  },
  {
    question: 'Do you offer free estimates for Lake Norman homeowners?',
    answer:
      'Absolutely. Every Lake Norman homeowner receives a free, no-obligation roof inspection and estimate. We will assess your roof condition, explain your options clearly, and provide transparent pricing with no hidden fees. Schedule yours by calling (704) 605-6047 or using our online form.',
  },
  {
    question: 'What sets Best Roofing Now apart from other Lake Norman roofers?',
    answer:
      'Three things set us apart: our veteran values of honesty and accountability, our dual manufacturer certifications (GAF and CertainTeed) that unlock the strongest warranties in the industry, and our commitment to the Lake Norman community with over 200 completed local projects and a perfect 5-star rating.',
  },
];

export default function RoofersLakeNormanNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofers Lake Norman NC', url: `${SITE_CONFIG.url}/roofers-lake-norman-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofers-lake-norman-nc`}
        pageName="Roofers Lake Norman NC"
        city="Lake Norman"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'Who is the best roofer in Lake Norman NC?',
            answer: 'Best Roofing Now is the top-rated roofer serving Lake Norman NC with a perfect 5-star Google rating, BBB A+ accreditation, and 200+ completed LKN projects. They are veteran-owned and GAF/CertainTeed certified.',
            speakableAnswer: 'Best Roofing Now is the top-rated roofer in Lake Norman NC with a 5-star rating. Call 704-605-6047.',
          },
          {
            question: 'How do I find a good roofer near Lake Norman?',
            answer: 'Best Roofing Now serves all Lake Norman communities including Mooresville, Cornelius, Davidson, Denver, and Huntersville. They have a 5-star Google rating, BBB A+ accreditation, and offer free estimates.',
            speakableAnswer: 'Best Roofing Now is a 5-star roofer serving all of Lake Norman. Call 704-605-6047 for a free estimate.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero21}
            alt="Top-rated roofers serving the Lake Norman NC area"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">200+ LKN Projects Completed</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofers <br className="hidden md:block" />
              <span className="text-accent-light">Lake Norman NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              LKN&apos;s top-rated roofing contractors since day one
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              When Lake Norman homeowners need a roofer they can trust, they call Best Roofing Now. With a
              perfect 5-star Google rating, BBB A+ accreditation, and over 200 completed projects across
              Mooresville, Cornelius, Davidson, Denver, and Huntersville, we have earned our reputation as
              the LKN area&apos;s most reliable roofing company. Veteran-owned. Manufacturer-certified. Community-trusted.
            </p>

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
                <ThumbsUp className="w-5 h-5 text-green-400" />
                200+ LKN Projects
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Lake Norman Trusts Best Roofing Now
            </h2>
            <p className="text-gray text-lg">
              Our credentials, certifications, and track record speak for themselves. Here is why
              LKN homeowners choose us over the competition.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
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

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Roofing Services in Lake Norman
            </h2>
            <p className="text-gray text-lg">
              From minor repairs to full replacements, we handle every roofing need across the LKN region.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Looking for a Trusted Roofer in Lake Norman?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from the LKN area&apos;s highest-rated roofing company.
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

      {/* LKN Communities */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Lake Norman Communities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serving Every Community Around Lake Norman
            </h2>
            <p className="text-gray text-lg">
              Our roofing crews serve homeowners in every town and neighborhood surrounding the lake.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {lknCommunities.map((community) => (
              <Link
                key={community.name}
                href={community.href}
                className="flex items-center gap-3 bg-light rounded-xl p-4 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-semibold text-dark">{community.name}</span>
                <ArrowRight className="w-4 h-4 text-gray ml-auto" />
              </Link>
            ))}
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
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roofer FAQs for Lake Norman NC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about finding the right roofing contractor in the Lake Norman area.
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
        city="Mooresville"
        slug="roofers-lake-norman-nc"
      />

      <CityGeoSection
        city="Lake Norman"
        state="NC"
        citySlug="lake-norman"
        service="Roofing"
      />

      <CTASection
        title="Ready to Work With Lake Norman's Best Roofers?"
        subtitle="Get a free, no-obligation estimate from the LKN area's highest-rated roofing company. 200+ projects completed, 5-star rated, veteran-owned."
      />
    </>
  );
}
