import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
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
  Droplets,
  Wind,
  Hammer,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';
import { LKNPartnershipsBlock } from '@/components/sections/LKNPartnershipsBlock';
import { LKNDataCitations } from '@/components/sections/LKNDataCitations';
export const metadata: Metadata = {
  title: 'Roof Repair Statesville NC',
  description:
    'Need roof repair in Statesville NC? Best Roofing Now provides fast, reliable roof repair services in Iredell County. BBB A+ rated, veteran-owned. Emergency roof repairs, leak fixes, shingle replacement, and storm damage repair. Free estimates!',
  keywords: [
    'roof repair statesville nc',
    'roofing repair statesville',
    'statesville roof repair',
    'roof leak repair statesville nc',
    'emergency roof repair statesville',
    'iredell county roof repair',
    'shingle repair statesville nc',
    'storm damage repair statesville',
    'roof repair near me statesville',
    'fix roof leak statesville nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-repair-statesville-nc`,
  },
  openGraph: {
    title: 'Roof Repair Statesville NC | Emergency Roofers | Best Roofing Now',
    description:
      'Fast, reliable roof repair in Statesville NC. BBB A+ rated, veteran-owned roofing company. Emergency repairs, leak fixes, and storm damage restoration. Free estimates!',
    url: `${SITE_CONFIG.url}/roof-repair-statesville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.repairs,
        width: 1200,
        height: 630,
        alt: 'Professional roof repair services in Statesville NC - Best Roofing Now',
      },
    ],
  },
};

// Repair services offered
const repairServices = [
  {
    icon: Droplets,
    title: 'Leak Repair',
    description: 'Fast detection and repair of roof leaks to prevent water damage to your Statesville home.',
    href: '/services/roof-repair',
  },
  {
    icon: Wind,
    title: 'Storm Damage Repair',
    description: 'Emergency repairs for wind, hail, and storm damage affecting Iredell County homes.',
    href: '/services/storm-damage',
  },
  {
    icon: Hammer,
    title: 'Shingle Repair',
    description: 'Missing, cracked, or curling shingle replacement to restore your roof\'s protection.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Flashing Repair',
    description: 'Expert repair of flashing around chimneys, vents, and skylights to stop leaks.',
    href: '/services/roof-repair',
  },
  {
    icon: Wrench,
    title: 'Emergency Repairs',
    description: '24/7 emergency roof repair services when you need immediate help in Statesville.',
    href: '/emergency-roof-repair-statesville-nc',
  },
  {
    icon: Search,
    title: 'Damage Assessment',
    description: 'Free comprehensive roof inspections to identify all repair needs before we start.',
    href: '/roof-inspection-statesville-nc',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Iredell County homeowners.`,
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
    icon: Clock,
    title: 'Fast Response',
    description: 'Same-day service available for urgent repairs in the Statesville area.',
  },
  {
    icon: Users,
    title: 'Local Experts',
    description: 'We know Statesville roofs and the unique challenges of Iredell County weather.',
  },
];

// Statesville neighborhoods/areas served
const statesvilleAreas = [
  'Downtown Statesville',
  'Historic District',
  'Signal Hill',
  'Brookdale',
  'Fourth Creek',
  'Cool Springs',
  'West End',
  'Northview',
  'Southview',
  'Amity Hill',
  'Scotts Creek',
  'Elmwood',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Mooresville', href: '/roofing-mooresville-nc' },
  { name: 'Troutman', href: '/roofing-troutman-nc' },
  { name: 'Hickory', href: '/locations/hickory-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Lake Norman', href: '/roofing-lake-norman-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
];

// FAQs about roof repair in Statesville
const faqs = [
  {
    question: 'How much does roof repair cost in Statesville NC?',
    answer:
      'Roof repair costs in Statesville typically range from $200-$1,500 depending on the type and extent of damage. Simple shingle repairs may cost $200-$500, while more complex leak repairs or flashing work can range from $500-$1,500. We provide free estimates with transparent pricing - no hidden fees or surprise charges.',
  },
  {
    question: 'Do you offer emergency roof repair in Statesville?',
    answer:
      'Yes! Best Roofing Now offers 24/7 emergency roof repair services throughout Statesville and Iredell County. When you have an active leak or storm damage, our emergency team responds quickly to secure your property and prevent further damage. Call us anytime at (704) 605-6047.',
  },
  {
    question: 'How quickly can you repair my roof in Statesville?',
    answer:
      'For emergency repairs, we typically respond within 2-4 hours. Standard repairs are usually completed within 1-3 days of your initial call. We understand that a damaged roof can\'t wait, so we prioritize quick response times while maintaining our quality standards for Iredell County homeowners.',
  },
  {
    question: 'What are common roof problems in Statesville NC?',
    answer:
      'Common roof issues in Statesville include storm damage from thunderstorms along the I-77/I-40 corridor, missing or damaged shingles from high winds, leaks around flashing and penetrations, granule loss from aging shingles, and algae growth from North Carolina\'s humid climate. Regular roof maintenance helps prevent costly repairs.',
  },
  {
    question: 'Should I repair or replace my roof in Statesville?',
    answer:
      'The decision depends on your roof\'s age, extent of damage, and overall condition. If your roof is under 15 years old with localized damage, repair is usually the best option. If it\'s over 20 years old with widespread issues, replacement may be more cost-effective. We provide honest assessments and never push for unnecessary replacements.',
  },
  {
    question: 'Do you help with insurance claims for roof repair in Statesville?',
    answer:
      'Absolutely! We have extensive experience working with insurance companies on storm damage claims in Iredell County. We provide thorough documentation, meet with adjusters, and advocate for fair settlements. Many Statesville roofs qualify for insurance coverage after storm events along the I-77 corridor.',
  },
  {
    question: 'Can you repair historic home roofs in downtown Statesville?',
    answer:
      'Yes, we have experience working on historic properties in downtown Statesville and the Historic District. Our team can match period-appropriate materials while using modern installation techniques for superior protection. We understand the importance of preserving the character of these homes while ensuring they are properly protected.',
  },
  {
    question: 'What warranties do you offer on roof repairs in Statesville?',
    answer:
      'All our roof repairs come with a workmanship warranty. For repairs using manufacturer materials, you also benefit from the material warranty. We stand behind our work and will address any issues that arise from our repairs at no additional cost to Statesville homeowners.',
  },
];

export default function RoofRepairStatesvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Repair Statesville NC', url: `${SITE_CONFIG.url}/roof-repair-statesville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-repair-statesville-nc`}
        pageName="Roof Repair Statesville NC"
        city="Statesville"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.services.repairs}
            alt="Professional roof repair services in Statesville NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Iredell County's Trusted Roofers</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Statesville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Fast, reliable roof repairs for Iredell County homes
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Is your Statesville roof leaking or damaged? Best Roofing Now provides professional roof repair services
              throughout Statesville and Iredell County. From emergency leak repairs to storm damage restoration,
              our certified team delivers fast, quality repairs backed by our satisfaction guarantee.
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
                5.0 Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-400" />
                Same-Day Service Available
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
              Roof Repair Services in Statesville NC
            </h2>
            <p className="text-gray text-lg">
              From minor repairs to major storm damage restoration, our certified technicians handle all your
              roofing repair needs with expert craftsmanship and premium materials.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairServices.map((service) => (
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
                Why Statesville Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When your roof needs repair in Statesville, you want a company you can trust. Best Roofing Now
                has built our reputation on honest assessments, quality workmanship, and fast response times
                for the Iredell County community.
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
              <SEOImage
                src={IMAGES.realProjects.drone1}
                alt="Best Roofing Now - Trusted roof repair company serving Statesville NC"
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

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Need Roof Repair in Statesville?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation repair estimate from Iredell County's trusted roofing company.
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

      {/* Common Repairs Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Common Roof Repairs in Statesville
            </h2>
            <p className="text-gray text-lg">
              Iredell County's climate presents unique challenges for roofs. Here are the most common repairs we handle for Statesville homeowners.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Storm Damage Repair</h3>
              <p className="text-gray text-sm">
                Wind, hail, and fallen debris from I-77 corridor storms can damage shingles, flashing, and gutters.
                We provide fast storm damage assessment and repairs.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Leak Repair</h3>
              <p className="text-gray text-sm">
                From minor drips to major water intrusion, we locate and fix roof leaks quickly to protect
                your Statesville home from water damage.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Shingle Replacement</h3>
              <p className="text-gray text-sm">
                Missing, cracked, or curling shingles compromise your roof's protection. We match and replace
                damaged shingles seamlessly.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Flashing Repair</h3>
              <p className="text-gray text-sm">
                Damaged or corroded flashing around chimneys, vents, and skylights is a common source of leaks
                that we repair expertly.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Gutter Repairs</h3>
              <p className="text-gray text-sm">
                Damaged or clogged gutters can cause water to back up under your roof. We repair and maintain
                gutters as part of your roofing system.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Ventilation Issues</h3>
              <p className="text-gray text-sm">
                Poor attic ventilation causes heat buildup and moisture problems. We repair and upgrade
                ventilation to extend your roof's life.
              </p>
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
              Roof Repair Throughout Statesville & Iredell County
            </h2>
            <p className="text-gray text-lg">
              We provide roof repair services to homeowners throughout Statesville and the surrounding Iredell County communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Statesville Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {statesvilleAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

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
                Roof Repair FAQs for Statesville
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof repair services in Statesville NC.
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
        city="Statesville"
        slug="roof-repair-statesville-nc"
      />

      <CityGeoSection
        city="Statesville"
        state="NC"
        citySlug="statesville-nc"
        service="Roof Repair"
      />


      <LKNPartnershipsBlock city={"Statesville"} />
      <LKNDataCitations city={"Statesville"} />
      <CTASection
        title="Ready to Fix Your Statesville Roof?"
        subtitle="Get a free, no-obligation repair estimate from Iredell County's trusted roofing experts. We'll assess the damage and provide honest recommendations."
      />
    </>
  );
}
