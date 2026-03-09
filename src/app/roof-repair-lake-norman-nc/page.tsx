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
  Droplets,
  Wind,
  Hammer,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roof Repair Lake Norman NC | Same-Day Service | Best Roofing Now',
  description:
    'Expert roof repair across the Lake Norman NC area. Same-day service for leaks, storm damage, and emergency repairs in Mooresville, Cornelius, Davidson, Denver, and Huntersville. Free estimates!',
  keywords: [
    'roof repair lake norman',
    'lake norman roof leak repair',
    'emergency roof repair lake norman nc',
    'roof repair mooresville nc',
    'roof repair cornelius nc',
    'roof repair near me lake norman',
    'lake norman roofing company',
    'storm damage roof repair lake norman',
    'shingle repair lake norman nc',
    'roof repair davidson nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-repair-lake-norman-nc`,
  },
  openGraph: {
    title: 'Roof Repair Lake Norman NC | Same-Day Service | Best Roofing Now',
    description:
      'Expert roof repair across the Lake Norman NC area. Same-day service, BBB A+ rated, veteran-owned. Serving Mooresville, Cornelius, Davidson, Denver & Huntersville. Free estimates!',
    url: `${SITE_CONFIG.url}/roof-repair-lake-norman-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero13,
        width: 1200,
        height: 630,
        alt: 'Professional roof repair services in the Lake Norman NC area - Best Roofing Now',
      },
    ],
  },
};

const repairServices = [
  {
    icon: Droplets,
    title: 'Leak Repair',
    description: 'Fast detection and repair of roof leaks to protect your Lake Norman home from water damage and mold growth.',
    href: '/services/roof-repair',
  },
  {
    icon: Wind,
    title: 'Storm Damage Repair',
    description: 'Rapid restoration after severe weather that sweeps across the Lake Norman basin, from hail to high winds.',
    href: '/services/storm-damage',
  },
  {
    icon: Hammer,
    title: 'Shingle Repair',
    description: 'Expert replacement of cracked, missing, or wind-lifted shingles on homes throughout the LKN region.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Flashing Repair',
    description: 'Precision flashing repair around chimneys, skylights, and dormers common in Lake Norman waterfront homes.',
    href: '/services/roof-repair',
  },
  {
    icon: Wrench,
    title: 'Emergency Repairs',
    description: '24/7 emergency roof repair for Lake Norman homeowners when urgent situations demand immediate action.',
    href: '/services/emergency-roofing',
  },
  {
    icon: Search,
    title: 'Roof Inspections',
    description: 'Thorough inspections to identify hidden damage and provide a complete repair plan before work begins.',
    href: '/services/roof-inspection',
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
    question: 'How much does roof repair cost in the Lake Norman area?',
    answer:
      'Roof repair costs around Lake Norman typically range from $250 to $1,800 depending on the extent of damage. Minor shingle replacements may cost $250-$600, while complex leak repairs or flashing work on lakefront homes can run $600-$1,800. We provide free estimates with no hidden charges for every community around LKN.',
  },
  {
    question: 'Do you offer same-day roof repair in Lake Norman NC?',
    answer:
      'Yes. Best Roofing Now offers same-day roof repair service across the entire Lake Norman region including Mooresville, Cornelius, Davidson, Denver, and Huntersville. For emergencies, our crew can typically respond within 1-4 hours. Call us at (704) 605-6047 for immediate assistance.',
  },
  {
    question: 'What Lake Norman communities do you serve for roof repair?',
    answer:
      'We serve every community around Lake Norman including Mooresville, Cornelius, Davidson, Denver, Huntersville, Sherrills Ford, Troutman, and Terrell. Whether your home is on the waterfront or in an inland neighborhood, our team provides fast, reliable roof repairs throughout the LKN corridor.',
  },
  {
    question: 'What are common roof problems around Lake Norman?',
    answer:
      'Lake Norman homes face unique roofing challenges. Lakefront humidity accelerates moss, algae, and granule loss. Severe storms crossing the lake bring wind and hail damage. Waterfront properties experience higher moisture exposure, leading to flashing failures and soffit deterioration. Regular inspections help catch these issues early.',
  },
  {
    question: 'Do you help with insurance claims for Lake Norman roof damage?',
    answer:
      'Absolutely. We regularly assist Lake Norman homeowners with storm damage insurance claims. Our team documents every detail with photos and measurements, meets with your adjuster on-site, and advocates for a fair settlement. Many LKN roofs have qualified for full insurance coverage after hail and wind events.',
  },
  {
    question: 'How do I know if my Lake Norman roof needs repair or replacement?',
    answer:
      'If your Lake Norman home has a roof under 15 years old with isolated damage, targeted repairs are usually the most cost-effective choice. Roofs over 20 years old with widespread deterioration may benefit from full replacement. We always give an honest recommendation and never push replacement when repair is the right call.',
  },
];

export default function RoofRepairLakeNormanNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Repair Lake Norman NC', url: `${SITE_CONFIG.url}/roof-repair-lake-norman-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-repair-lake-norman-nc`}
        pageName="Roof Repair Lake Norman NC"
        city="Lake Norman"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much does roof repair cost in Lake Norman NC?',
            answer: 'Roof repair in the Lake Norman area costs $250-$1,800 depending on damage type. Best Roofing Now is BBB A+ rated and serves all LKN communities with free estimates and workmanship warranties.',
            speakableAnswer: 'Roof repair around Lake Norman costs $250 to $1,800. Best Roofing Now offers free estimates. Call 704-605-6047.',
          },
          {
            question: 'Who is the best roofer in the Lake Norman area?',
            answer: 'Best Roofing Now is a top-rated roof repair company serving the Lake Norman NC area with a 5-star Google rating and BBB A+ accreditation. They are veteran-owned and serve Mooresville, Cornelius, Davidson, Denver, and Huntersville.',
            speakableAnswer: 'Best Roofing Now is a 5-star, BBB A+ rated roofer serving all of Lake Norman NC. Call 704-605-6047.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero13}
            alt="Professional roof repair services across the Lake Norman NC area"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Lake Norman&apos;s Trusted Roofing Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Lake Norman NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Same-day roof repair across the entire Lake Norman region
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Lake Norman homeowners trust Best Roofing Now for fast, dependable roof repairs from Mooresville
              to Cornelius, Davidson to Denver. Whether you need an emergency leak fix on the waterfront,
              storm damage restoration in Huntersville, or a thorough roof inspection in Sherrills Ford,
              our certified team delivers quality results backed by a satisfaction guarantee.
            </p>

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
              Roof Repair Services Across Lake Norman
            </h2>
            <p className="text-gray text-lg">
              From quick shingle fixes to major storm damage restoration, our certified technicians deliver
              expert repairs for every home around the lake.
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

      {/* LKN Communities Section */}
      <section className="section bg-light">
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
              Our team provides roof repair to homeowners in every town and neighborhood surrounding
              Lake Norman, from the northern shores to the southern coves.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {lknCommunities.map((community) => (
              <Link
                key={community.name}
                href={community.href}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-semibold text-dark">{community.name}</span>
                <ArrowRight className="w-4 h-4 text-gray ml-auto" />
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
                Need Roof Repair in Lake Norman?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from the LKN area&apos;s most trusted roofing company.
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

      {/* Related Services */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Related Roofing Services in Lake Norman
            </h2>
            <p className="text-gray text-lg">
              Beyond repairs, we offer a full range of roofing services across the Lake Norman region.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/roof-replacement-lake-norman-nc" className="bg-light rounded-xl p-5 hover:shadow-lg transition-all hover:-translate-y-1 group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roof Replacement</h3>
              <p className="text-gray text-sm">Full roof replacement with premium materials for Lake Norman homes.</p>
            </Link>
            <Link href="/storm-damage-roof-repair-lake-norman-nc" className="bg-light rounded-xl p-5 hover:shadow-lg transition-all hover:-translate-y-1 group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Storm Damage</h3>
              <p className="text-gray text-sm">Insurance claim assistance and storm damage restoration across LKN.</p>
            </Link>
            <Link href="/emergency-roof-repair-lake-norman-nc" className="bg-light rounded-xl p-5 hover:shadow-lg transition-all hover:-translate-y-1 group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Emergency Repairs</h3>
              <p className="text-gray text-sm">24/7 emergency tarping and repairs when you cannot wait.</p>
            </Link>
            <Link href="/roofers-lake-norman-nc" className="bg-light rounded-xl p-5 hover:shadow-lg transition-all hover:-translate-y-1 group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">LKN Roofers</h3>
              <p className="text-gray text-sm">Learn why we are Lake Norman&apos;s top-rated roofing contractors.</p>
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
                Roof Repair FAQs for Lake Norman NC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof repair services across the Lake Norman region.
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
        slug="roof-repair-lake-norman-nc"
      />

      <CityGeoSection
        city="Lake Norman"
        state="NC"
        citySlug="lake-norman"
        service="Roof Repair"
      />

      <CTASection
        title="Ready to Fix Your Lake Norman Roof?"
        subtitle="Get a free, no-obligation repair estimate from the Lake Norman area's most trusted roofing experts. We serve every community around the lake with same-day service available."
      />
    </>
  );
}
