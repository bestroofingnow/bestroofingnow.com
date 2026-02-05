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
  CloudRain,
  Search,
  MapPin,
  AlertTriangle,
  Droplets,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roof Repair Matthews NC | Fast',
  description:
    'Fast, reliable roof repair in Matthews NC and South Charlotte. Fix leaks, storm damage, and shingle problems. BBB A+ rated, veteran-owned. Same-day emergency service available. Free estimates.',
  keywords: [
    'roof repair Matthews NC',
    'roofing repair Matthews',
    'Matthews NC roofer',
    'South Charlotte roof repair',
    'roof leak repair Matthews',
    'emergency roof repair Matthews NC',
    'shingle repair Matthews',
    'storm damage repair Matthews NC',
    'roofing company Matthews NC',
    'roof repair near me Matthews',
    'Matthews roofing contractor',
    'fix roof leak Matthews NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-repair-matthews-nc`,
  },
  openGraph: {
    title: 'Roof Repair Matthews NC | South Charlotte Roofers | Best Roofing Now',
    description:
      'BBB A+ rated roof repair specialists serving Matthews and South Charlotte. Fast response, quality repairs, and honest pricing. Free estimates.',
    url: `${SITE_CONFIG.url}/roof-repair-matthews-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Roof repair Matthews NC - Best Roofing Now professional repair services',
      },
    ],
  },
};

// Roof repair services offered
const services = [
  {
    icon: Droplets,
    title: 'Leak Repair',
    description: 'Fast diagnosis and repair of roof leaks to protect your home from water damage.',
    href: '/services/roof-repair',
  },
  {
    icon: Wrench,
    title: 'Shingle Repair',
    description: 'Replace missing, cracked, or damaged shingles with matching materials.',
    href: '/services/roof-repair',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Expert repair for hail damage, wind damage, and storm-related roof problems.',
    href: '/services/storm-damage',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Repair',
    description: '24/7 emergency response for active leaks and urgent roof damage.',
    href: '/services/emergency-roofing',
  },
  {
    icon: Home,
    title: 'Flashing Repair',
    description: 'Fix leaks around chimneys, vents, skylights, and other roof penetrations.',
    href: '/services/roof-repair',
  },
  {
    icon: Search,
    title: 'Free Inspection',
    description: 'Comprehensive roof assessment to identify problems before they worsen.',
    href: '/services/roof-inspection',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied South Charlotte homeowners.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability insurance.',
  },
  {
    icon: Users,
    title: 'Certified Professionals',
    description: 'CertainTeed, GAF, and Owens Corning certified for quality repairs.',
  },
  {
    icon: Clock,
    title: 'Same-Day Service',
    description: 'Fast response with same-day service available for emergency repairs.',
  },
];

// Matthews neighborhoods and areas
const matthewsAreas = [
  'Downtown Matthews',
  'Sardis Woods',
  'Crown Point',
  'Matthews Township',
  'Fullwood',
  'Weddington Ridge',
  'St. John\'s Forest',
  'Barclay Downs',
  'Saddlewood',
  'Fieldstone',
  'The Courtyards',
  'McAlpine',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Mint Hill', href: '/locations/mint-hill-nc' },
  { name: 'Indian Trail', href: '/locations/indian-trail-nc' },
  { name: 'Stallings', href: '/locations/stallings-nc' },
  { name: 'Weddington', href: '/locations/weddington-nc' },
  { name: 'Pineville', href: '/locations/pineville-nc' },
  { name: 'Monroe', href: '/locations/monroe-nc' },
  { name: 'Wesley Chapel', href: '/locations/wesley-chapel-nc' },
];

// Common roof repair issues
const commonRepairs = [
  {
    title: 'Missing Shingles',
    description: 'Wind can lift and remove shingles, exposing your roof to water damage.',
    solution: 'We match and replace missing shingles to restore your roof\'s protection.',
  },
  {
    title: 'Roof Leaks',
    description: 'Leaks can develop from damaged flashing, worn shingles, or failed seals.',
    solution: 'We locate the source and repair leaks before they cause interior damage.',
  },
  {
    title: 'Damaged Flashing',
    description: 'Flashing around chimneys and vents can crack, rust, or pull away.',
    solution: 'We repair or replace flashing to seal vulnerable areas against water.',
  },
  {
    title: 'Granule Loss',
    description: 'Excessive granule loss indicates aging shingles that need attention.',
    solution: 'We assess the extent and recommend repair or replacement as needed.',
  },
];

// FAQs about roof repair in Matthews
const faqs = [
  {
    question: 'How much does roof repair cost in Matthews NC?',
    answer:
      'Roof repairs in Matthews typically range from $200-$1,500 depending on the type and extent of damage. Minor repairs like replacing a few shingles cost less, while extensive leak repairs or flashing work may cost more. We provide free estimates with transparent pricing and no hidden fees. We only recommend repairs that are truly needed.',
  },
  {
    question: 'How quickly can you repair my roof in Matthews?',
    answer:
      'For emergency situations like active leaks, we offer same-day service and can often have a crew on-site within hours. Standard repairs are typically scheduled within 1-3 business days. Most roof repairs in Matthews are completed in just a few hours to one day depending on the scope of work.',
  },
  {
    question: 'How do I know if my roof needs repair vs. replacement?',
    answer:
      'Generally, if your roof is under 15 years old and damage is localized (affecting less than 30% of the roof), repairs are usually the better choice. Signs you may need replacement include: widespread damage, multiple active leaks, severely aged shingles (20+ years), or repeated repairs in a short time. We provide honest assessments and never push for replacement if repairs will suffice.',
  },
  {
    question: 'Do you offer emergency roof repair in Matthews NC?',
    answer:
      'Yes! Best Roofing Now offers 24/7 emergency roof repair services in Matthews and South Charlotte. For active leaks or severe storm damage, call us immediately at (704) 605-6047. We\'ll respond quickly to prevent further damage to your home, providing emergency tarping if needed until permanent repairs can be made.',
  },
  {
    question: 'Will my insurance cover roof repairs in Matthews?',
    answer:
      'If your roof was damaged by a covered event like hail, wind, or fallen trees, your homeowners insurance may cover repair costs minus your deductible. We have extensive experience working with insurance companies in Matthews and can help document damage and work with adjusters to ensure fair claim settlements.',
  },
  {
    question: 'What causes roof leaks in Matthews homes?',
    answer:
      'Common causes of roof leaks in Matthews include: damaged or missing shingles from storms, failed flashing around chimneys and vents, clogged gutters causing water backup, aging roof materials, improper installation, and ice dams in winter. Our free inspections help identify the source and prevent future leaks.',
  },
  {
    question: 'Do you warranty your roof repairs in Matthews NC?',
    answer:
      'Yes! All roof repairs are backed by our workmanship warranty. When we use materials from our certified partners (CertainTeed, GAF, Owens Corning), those repairs also carry manufacturer material warranties. We stand behind our work and will return to address any issues that arise.',
  },
  {
    question: 'Can you match my existing shingles for repairs?',
    answer:
      'In most cases, yes. We stock common shingle styles and colors and can source matching materials for most repairs. For older or discontinued shingles, we find the closest available match. If an exact match isn\'t possible, we discuss options with you before proceeding to ensure you\'re satisfied with the appearance.',
  },
];

export default function RoofRepairMatthewsNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Repair Matthews NC', url: `${SITE_CONFIG.url}/roof-repair-matthews-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Roof repair Matthews NC - Best Roofing Now professional repair team"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Wrench className="w-4 h-4" />
              <span className="text-sm font-semibold">South Charlotte Roof Repair Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Matthews NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Fast, reliable repairs for leaks, storm damage & more in South Charlotte
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              When your Matthews home needs roof repairs, you need a company that responds quickly, diagnoses
              problems accurately, and fixes them right the first time. Best Roofing Now delivers quality
              repairs with honest pricing and no pressure for unnecessary work.
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
                Emergency: {SITE_CONFIG.phone}
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
                <Clock className="w-5 h-5 text-green-400" />
                Same-Day Service
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Repair Services in Matthews NC
            </h2>
            <p className="text-gray text-lg">
              From minor fixes to major repairs, we handle all types of roof problems for
              Matthews and South Charlotte homeowners.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
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

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Matthews Homeowners Trust Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need roof repairs in Matthews, you want a company that's honest, reliable, and does
                quality work at fair prices. Best Roofing Now has earned the trust of South Charlotte
                homeowners through our commitment to excellence.
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
                src={IMAGES.realProjects.pmi1}
                alt="Professional roof repair completed in Matthews NC - Best Roofing Now"
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

      {/* Common Repairs Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Common Roof Repairs in Matthews
            </h2>
            <p className="text-gray text-lg">
              These are the most common roof problems we fix for South Charlotte homeowners.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {commonRepairs.map((repair) => (
              <div key={repair.title} className="bg-light rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-2">{repair.title}</h3>
                <p className="text-gray text-sm mb-3">
                  <strong>Problem:</strong> {repair.description}
                </p>
                <p className="text-gray text-sm">
                  <strong>Solution:</strong> {repair.solution}
                </p>
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
                Need Roof Repairs in Matthews?
              </h2>
              <p className="text-white/90">
                Get a free estimate today. Same-day emergency service available.
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
              Serving Matthews & South Charlotte
            </h2>
            <p className="text-gray text-lg">
              Our roof repair team serves homeowners throughout Matthews and the greater South Charlotte region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Matthews Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Matthews Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {matthewsAreas.map((area) => (
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

      {/* Project Gallery */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Repair Work in South Charlotte
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of roof repairs completed for Matthews and South Charlotte homeowners.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Roof repair completed in Matthews NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.pmi1}
                alt="Shingle repair in South Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Aerial view of completed roof repair in Matthews"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional roof repair project in Matthews NC"
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
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roof Repair FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof repair in Matthews NC.
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
        city="Matthews"
        slug="roof-repair-matthews-nc"
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Matthews"

        state="NC"

        citySlug="matthews-nc"

        service="Roof Repair"

      />

      <CTASection
        title="Need Roof Repairs in Matthews?"
        subtitle="Get a free, no-obligation estimate from South Charlotte's trusted roof repair experts. We diagnose problems accurately, provide honest recommendations, and deliver quality repairs at fair prices."
      />
    </>
  );
}
