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
  Wrench,
  Home,
  CloudRain,
  MapPin,
  Droplets,
  Wind,
  Thermometer,
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
  title: 'Roof Repair Lake Wylie SC | Fast, Affordable | Best Roofing Now',
  description:
    'Fast, affordable roof repair in Lake Wylie SC. Emergency leak repair, storm damage, shingle replacement. BBB A+ rated, veteran-owned. Same-day service available. Call (704) 605-6047 for a free estimate.',
  keywords: [
    'roof repair lake wylie sc',
    'lake wylie roof leak repair',
    'emergency roof repair lake wylie',
    'roof repair near me lake wylie',
    'roof repair cost lake wylie sc',
    'roof repair tega cay sc',
    'storm damage repair lake wylie sc',
    'shingle repair lake wylie',
    'best roof repair lake wylie sc',
    'affordable roof repair lake wylie',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-repair-lake-wylie-sc`,
  },
  openGraph: {
    title: 'Roof Repair Lake Wylie SC | Fast, Affordable | Best Roofing Now',
    description:
      'BBB A+ rated roof repair in Lake Wylie SC. Fast response for leaks, storm damage, and emergency repairs. Veteran-owned with 500+ roofs serviced. Free estimates!',
    url: `${SITE_CONFIG.url}/roof-repair-lake-wylie-sc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero14,
        width: 1200,
        height: 630,
        alt: 'Professional roof repair Lake Wylie SC - Best Roofing Now',
      },
    ],
  },
};

// Repair services offered
const repairServices = [
  {
    icon: Droplets,
    title: 'Leak Repair',
    description: 'Fast detection and repair of roof leaks before they cause costly water damage to your Lake Wylie home.',
  },
  {
    icon: Wind,
    title: 'Storm Damage Repair',
    description: 'Complete storm damage restoration including wind, hail, and fallen debris damage with insurance claim assistance.',
  },
  {
    icon: Home,
    title: 'Shingle Repair',
    description: 'Missing, cracked, or curling shingle replacement to restore your roof\'s weather protection and curb appeal.',
  },
  {
    icon: Wrench,
    title: 'Flashing Repair',
    description: 'Repair and replacement of damaged flashing around chimneys, skylights, vents, and roof edges.',
  },
  {
    icon: Thermometer,
    title: 'Ventilation Repair',
    description: 'Fixing damaged ridge vents, soffit vents, and attic ventilation to prevent heat buildup and moisture issues.',
  },
  {
    icon: CloudRain,
    title: 'Gutter Repair',
    description: 'Gutter repair, reattachment, and guard installation to protect your Lake Wylie home\'s foundation from water damage.',
  },
];

// Why choose us
const whyChooseUs = [
  {
    icon: Clock,
    title: 'Same-Day Service',
    description: 'Emergency repairs often completed the same day you call. Lake Wylie roof issues cannot wait.',
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Military values of integrity, excellence, and service guide everything we do.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Lake Wylie and Charlotte area customers.`,
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed SC roofing contractor with comprehensive liability and workers comp insurance.',
  },
  {
    icon: Wrench,
    title: 'Quality Materials',
    description: 'We use only premium materials from CertainTeed, GAF, and Owens Corning for lasting repairs.',
  },
];

// Lake Wylie areas served
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
  'Bethany',
  'Fort Mill',
  'Rock Hill',
];

// FAQs
const faqs = [
  {
    question: 'How much does roof repair cost in Lake Wylie SC?',
    answer: 'Roof repair costs in Lake Wylie SC typically range from $200-$1,500 depending on the type and extent of damage. Minor repairs like fixing a few shingles cost $200-$500, while more extensive repairs like flashing replacement or larger leak repairs range from $500-$1,500. Emergency and storm damage repairs may cost more. We provide free inspections and detailed quotes so you know exactly what to expect.',
  },
  {
    question: 'Do you offer emergency roof repair in Lake Wylie SC?',
    answer: 'Yes! Best Roofing Now offers 24/7 emergency roof repair services in Lake Wylie SC and York County. Whether you have an active leak, storm damage, or a tree on your roof, our emergency team can typically respond within 2-4 hours. We will secure your property, prevent further damage, and schedule permanent repairs as quickly as possible.',
  },
  {
    question: 'How quickly can you repair my roof in Lake Wylie?',
    answer: 'Most routine roof repairs in Lake Wylie are completed the same day or within 24-48 hours of inspection. Emergency repairs and tarping can often be done within hours of your call. More extensive repairs or those requiring special materials may take 3-5 days. We always provide a timeline before beginning work.',
  },
  {
    question: 'Do you help with insurance claims for storm damage in Lake Wylie?',
    answer: 'Absolutely. We have extensive experience helping Lake Wylie homeowners with insurance claims for storm damage. We provide detailed documentation, meet with adjusters on your behalf, and advocate for fair settlements. Many Lake Wylie roofs qualify for insurance coverage after hail storms, wind damage, and other severe weather events.',
  },
  {
    question: 'How do I know if I need roof repair or replacement in Lake Wylie?',
    answer: 'Several factors determine whether repair or replacement is best: roof age (asphalt roofs last 20-25 years), extent of damage, number of previous repairs, and overall condition. Our free inspection includes an honest assessment - we will never recommend replacement when a repair will solve the problem. We document everything with photos so you can make an informed decision.',
  },
  {
    question: 'What are signs I need roof repair at my Lake Wylie home?',
    answer: 'Common signs you need roof repair include: visible damage or missing shingles, water stains on ceilings or walls, granules in gutters, daylight visible through the roof, sagging areas, higher energy bills, and moss or algae growth. Lake Wylie homes near the water may also experience accelerated wear from moisture exposure. Schedule a free inspection if you notice any of these signs.',
  },
];

export default function RoofRepairLakeWylieSCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Lake Wylie SC', url: `${SITE_CONFIG.url}/roof-repair-lake-wylie-sc` },
          { name: 'Roof Repair Lake Wylie SC', url: `${SITE_CONFIG.url}/roof-repair-lake-wylie-sc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-repair-lake-wylie-sc`}
        pageName="Roof Repair Lake Wylie SC"
        city="Lake Wylie"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero14}
            alt="Professional roof repair Lake Wylie SC - Best Roofing Now team"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Wrench className="w-4 h-4" />
              <span className="text-sm font-semibold">Fast & Affordable Roof Repair</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Lake Wylie SC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Fast, affordable roof repair for Lake Wylie, Tega Cay, and York County homeowners
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              From minor leak repairs to emergency storm damage, Best Roofing Now delivers reliable roof repair
              services throughout Lake Wylie SC. BBB A+ rated, veteran-owned, with same-day service available.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Repair Estimate
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

      {/* Repair Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Repair Services in Lake Wylie SC
            </h2>
            <p className="text-gray text-lg">
              From minor repairs to emergency storm damage, we handle all types of roof repair for Lake Wylie homeowners.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairServices.map((repair) => (
              <div
                key={repair.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <repair.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{repair.title}</h3>
                <p className="text-gray text-sm">{repair.description}</p>
              </div>
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
                Why Lake Wylie Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need roof repair in Lake Wylie SC, you need a company that responds quickly, does quality work,
                and treats you fairly. That is exactly what Best Roofing Now delivers.
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
                src={IMAGES.realProjects.project17}
                alt="Completed roof repair project in Lake Wylie SC"
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
                    <p className="text-sm text-gray">{SITE_CONFIG.googleReviewCount}+ Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Need Roof Repair in Lake Wylie SC?
              </h2>
              <p className="text-white/90">
                Get a free estimate from York County&apos;s trusted roofing company.
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
              Roof Repair Across Lake Wylie & York County
            </h2>
            <p className="text-gray text-lg">
              We provide roof repair services throughout Lake Wylie, Tega Cay, Clover, and surrounding communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Lake Wylie & York County Areas</h3>
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
              <h3 className="text-xl font-bold text-dark mb-4">Also Serving Nearby</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Fort Mill, SC', href: '/roof-repair-fort-mill-sc' },
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
                Roof Repair Lake Wylie SC FAQs
              </h2>
              <p className="text-gray text-lg">
                Common questions about roof repair in Lake Wylie, Tega Cay, and York County.
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

      {/* Related Services Links */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              More Roofing Services in Lake Wylie SC
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/roof-replacement-lake-wylie-sc"
              className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roof Replacement Lake Wylie SC</h3>
              <p className="text-gray text-sm mb-3">Full roof replacement with premium materials and warranties.</p>
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
              href="/storm-damage-roof-repair-lake-wylie-sc"
              className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Storm Damage Repair</h3>
              <p className="text-gray text-sm mb-3">Emergency storm damage restoration with insurance assistance.</p>
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
        slug="roof-repair-lake-wylie-sc"
      />

      <CityGeoSection
        city="Lake Wylie"
        state="SC"
        citySlug="lake-wylie-sc"
        service="Roof Repair"
      />

      <CTASection
        title="Ready for Professional Roof Repair in Lake Wylie SC?"
        subtitle="Get a free, no-obligation estimate from York County's trusted roofing company. Our team will assess your roof and provide honest recommendations."
      />
    </>
  );
}
