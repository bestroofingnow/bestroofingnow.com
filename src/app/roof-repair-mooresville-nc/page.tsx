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
  Building2,
  CloudRain,
  Search,
  MapPin,
  Droplets,
  Wind,
  Hammer,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roof Repair Mooresville NC | Lake Norman | Free Estimates',
  description:
    'Fast roof repair in Mooresville NC. Leak repair, storm damage, emergency service for Lake Norman homes. BBB A+ rated, veteran-owned. Free estimates!',
  keywords: [
    'roof repair Mooresville NC',
    'roofing repair Mooresville',
    'Mooresville roof repair',
    'roof leak repair Mooresville NC',
    'emergency roof repair Mooresville',
    'Lake Norman roof repair',
    'shingle repair Mooresville NC',
    'storm damage repair Mooresville',
    'roof repair near me Mooresville',
    'fix roof leak Mooresville NC',
    'roofer Mooresville NC',
    'roofing contractor Mooresville',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-repair-mooresville-nc`,
  },
  openGraph: {
    title: 'Roof Repair Mooresville NC | Lake Norman | Free Estimates',
    description:
      'Fast, reliable roof repair in Mooresville NC near northern Lake Norman. BBB A+ rated, veteran-owned roofing company. Emergency repairs, leak fixes, and storm damage restoration. Free estimates!',
    url: `${SITE_CONFIG.url}/roof-repair-mooresville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.repairs,
        width: 1200,
        height: 630,
        alt: 'Professional roof repair services in Mooresville NC - Best Roofing Now',
      },
    ],
  },
};

// Repair services offered in Mooresville
const repairServices = [
  {
    icon: Droplets,
    title: 'Leak Repair',
    description: 'Rapid detection and repair of roof leaks to protect your Mooresville home from costly water damage.',
    href: '/services/roof-repair',
  },
  {
    icon: Wind,
    title: 'Storm Damage Repair',
    description: 'Fast restoration after severe weather along the I-77 corridor and northern Lake Norman area.',
    href: '/services/storm-damage',
  },
  {
    icon: Hammer,
    title: 'Shingle Repair',
    description: 'Expert replacement of cracked, missing, or wind-lifted shingles on Mooresville homes of all ages.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Flashing Repair',
    description: 'Precision flashing repair around chimneys, dormers, and skylights common in Race City neighborhoods.',
    href: '/services/roof-repair',
  },
  {
    icon: Wrench,
    title: 'Emergency Repairs',
    description: '24/7 emergency roof repair for Mooresville homeowners when urgent situations arise.',
    href: '/services/emergency-roofing',
  },
  {
    icon: Search,
    title: 'Damage Assessment',
    description: 'Thorough roof inspections to identify hidden damage before providing a complete repair plan.',
    href: '/services/roof-inspection',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Better Business Bureau accredited with an A+ rating and zero unresolved complaints.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from homeowners across the Lake Norman region.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'A veteran-owned company built on military discipline, honesty, and top-tier workmanship.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed North Carolina roofing contractor with comprehensive liability coverage.',
  },
  {
    icon: Clock,
    title: 'Rapid Response',
    description: 'Same-day service available for Mooresville homeowners with urgent roof repair needs.',
  },
  {
    icon: Users,
    title: 'Iredell County Experts',
    description: 'We understand the unique roofing challenges that Mooresville homes face near Lake Norman.',
  },
];

// Mooresville neighborhoods/areas served
const mooresvilleAreas = [
  'Downtown Mooresville',
  'Langtree',
  'Morrison Plantation',
  'Muirfield',
  'Curtis Pond',
  'Riverwood',
  'The Point',
  'Northington',
  'Pine Lake',
  'Brawley School Road Area',
  'Alcove',
  'Mooresville South',
  'Lake Norman Waterfront',
  'Race City District',
  'Coddle Creek',
  'Rocky River Crossing',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Denver', href: '/roof-repair-denver-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Lake Norman Area', href: '/locations/lake-norman' },
];

// FAQs about roof repair in Mooresville
const faqs = [
  {
    question: 'How much does roof repair cost in Mooresville NC?',
    answer:
      'Roof repair costs in Mooresville generally range from $250 to $1,800 depending on the scope of damage. Minor shingle replacements in neighborhoods like Morrison Plantation or Langtree may cost $250-$600, while complex leak repairs or flashing work on older homes near downtown Mooresville can run $600-$1,800. We provide detailed free estimates with no hidden charges.',
  },
  {
    question: 'Do you offer emergency roof repair in Mooresville?',
    answer:
      'Yes. Best Roofing Now provides 24/7 emergency roof repair across Mooresville and the northern Lake Norman area. Whether a severe storm rolls through the I-77 corridor or a tree limb falls on your roof in Riverwood, our emergency crew can respond quickly to secure your property. Reach us anytime at (704) 605-6047.',
  },
  {
    question: 'How fast can you respond to a roof repair in Mooresville?',
    answer:
      'For emergency situations, our team typically arrives within 1-4 hours anywhere in Mooresville. Standard repairs are generally scheduled within 1-3 business days of your initial call. We keep a dedicated crew available for the northern Lake Norman corridor so Mooresville homeowners never have to wait long.',
  },
  {
    question: 'What are the most common roof problems in Mooresville NC?',
    answer:
      'Mooresville roofs face a unique mix of challenges. Lake Norman humidity accelerates shingle granule loss and encourages moss and algae growth. Severe thunderstorms along the I-77 corridor cause wind and hail damage. Older homes near downtown may have aging flashing, while newer developments like Curtis Pond and Alcove sometimes experience settling-related issues. Regular inspections catch these problems early.',
  },
  {
    question: 'Should I repair or replace my Mooresville roof?',
    answer:
      'It depends on the roof\'s age and the extent of damage. If your Mooresville home has a roof under 15 years old with isolated damage, targeted repairs are usually the most cost-effective solution. Roofs over 20 years old with widespread deterioration may benefit from full replacement. We always give an honest recommendation and will never push replacement when repair is the right call.',
  },
  {
    question: 'Do you help with insurance claims for roof damage in Mooresville?',
    answer:
      'Absolutely. We regularly assist Mooresville homeowners with storm damage insurance claims. Our team documents every detail with photos and measurements, meets with your adjuster on-site, and advocates for a fair settlement. Many roofs in neighborhoods like The Point and Muirfield have qualified for full insurance coverage after hail and wind events.',
  },
  {
    question: 'Can you repair roofs on older Mooresville homes?',
    answer:
      'Yes. Mooresville has a rich mix of historic and newer construction. We have experience repairing roofs on older homes in the downtown historic district as well as modern architectural shingle roofs in communities like Morrison Plantation. Our technicians are trained in all roofing materials including asphalt, metal, tile, and slate.',
  },
  {
    question: 'What warranties come with your Mooresville roof repairs?',
    answer:
      'Every repair we perform in Mooresville is backed by our workmanship warranty. When we use manufacturer-supplied materials, you also receive the applicable material warranty. As a CertainTeed SELECT ShingleMaster and GAF Factory-Certified Contractor, we can offer enhanced warranty options on qualifying repairs.',
  },
];

export default function RoofRepairMooresvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Repair Mooresville NC', url: `${SITE_CONFIG.url}/roof-repair-mooresville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-repair-mooresville-nc`}
        pageName="Roof Repair Mooresville NC"
        city="Mooresville"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much does roof repair cost in Mooresville NC?',
            answer: 'Roof repair in Mooresville NC costs $250-$1,800 depending on damage type. Best Roofing Now is BBB A+ rated and serves all Mooresville neighborhoods with free estimates and workmanship warranties.',
            speakableAnswer: 'Roof repair in Mooresville costs $250 to $1,800. Best Roofing Now offers free estimates. Call 704-605-6047.',
          },
          {
            question: 'Who is the best roofer in Mooresville NC?',
            answer: 'Best Roofing Now is a top-rated roof repair company serving Mooresville NC with a 5-star Google rating and BBB A+ accreditation. They are veteran-owned and serve all Mooresville neighborhoods including Langtree, Morrison Plantation, and The Point.',
            speakableAnswer: 'Best Roofing Now is a 5-star, BBB A+ rated roofer serving Mooresville NC. Call 704-605-6047.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.repairs}
            alt="Professional roof repair services in Mooresville NC near Lake Norman"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Northern Lake Norman&apos;s Trusted Roofers</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Mooresville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Fast, dependable roof repairs for Race City USA homes
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Mooresville homeowners trust Best Roofing Now for professional roof repair services across
              Iredell County and the northern Lake Norman shoreline. Whether you need an emergency leak fix
              in Langtree, storm damage restoration in Morrison Plantation, or a full damage assessment
              along the I-77 corridor, our certified team delivers quality results backed by a satisfaction guarantee.
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
              Roof Repair Services in Mooresville NC
            </h2>
            <p className="text-gray text-lg">
              From quick shingle fixes to major storm damage restoration, our certified technicians deliver
              expert repairs using premium materials for every Mooresville home.
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
                Why Mooresville Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Mooresville&apos;s mix of older downtown homes and newer Lake Norman developments demands a roofing
                company that can handle it all. Best Roofing Now brings honest assessments, skilled craftsmanship,
                and rapid response to every project in Iredell County.
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
                src={IMAGES.realProjects.drone2}
                alt="Completed roof repair project in Mooresville NC - Best Roofing Now"
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
                Need Roof Repair in Mooresville?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation repair estimate from northern Lake Norman&apos;s trusted roofing company.
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
              Common Roof Repairs in Mooresville
            </h2>
            <p className="text-gray text-lg">
              Northern Lake Norman weather and Iredell County&apos;s seasonal swings create specific roofing
              challenges. Here are the repairs we perform most often for Mooresville homeowners.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">I-77 Corridor Storm Damage</h3>
              <p className="text-gray text-sm">
                Severe thunderstorms that track along I-77 deliver high winds and large hail to Mooresville
                neighborhoods. We handle shingle replacement, ridge cap repair, and gutter damage after every
                storm season.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Lakefront Moisture Damage</h3>
              <p className="text-gray text-sm">
                Homes near Lake Norman in areas like The Point and Riverwood face extra moisture exposure.
                We repair water-damaged decking, replace algae-stained shingles, and improve ventilation to
                combat humidity.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Shingle Deterioration</h3>
              <p className="text-gray text-sm">
                North Carolina heat and UV exposure cause shingles to crack, curl, and lose granules over
                time. We match existing shingles perfectly for seamless repairs across Mooresville.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Chimney & Flashing Leaks</h3>
              <p className="text-gray text-sm">
                Many Mooresville homes feature decorative chimneys and multiple roof penetrations. We
                reseal and replace flashing to eliminate leaks at these vulnerable points.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">New Construction Punch-List</h3>
              <p className="text-gray text-sm">
                Rapid development in communities like Curtis Pond and Alcove sometimes means roofing
                issues surface within the first few years. We address warranty and punch-list roof repairs
                efficiently.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-2">Attic Ventilation Problems</h3>
              <p className="text-gray text-sm">
                Insufficient ridge vents or blocked soffit intake leads to heat buildup and ice damming.
                We repair and upgrade ventilation systems to extend your Mooresville roof&apos;s lifespan.
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
              Roof Repair Throughout Mooresville & Northern Lake Norman
            </h2>
            <p className="text-gray text-lg">
              We provide roof repair services to homeowners across Mooresville and every neighborhood
              along the northern shore of Lake Norman.
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

      {/* Project Gallery */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Repair Projects Near Mooresville
            </h2>
            <p className="text-gray text-lg">
              See examples of roof repairs we have completed for homeowners in Mooresville and the
              surrounding Lake Norman communities.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Completed roof repair project in Mooresville NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="Shingle repair and replacement in Mooresville NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of roof repair near northern Lake Norman"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional roof restoration in Mooresville by Best Roofing Now"
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
                Roof Repair FAQs for Mooresville NC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof repair services in Mooresville and northern Lake Norman.
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
        slug="roof-repair-mooresville-nc"
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Mooresville"

        state="NC"

        citySlug="mooresville-nc"

        service="Roof Repair"

      />

      <CTASection
        title="Ready to Fix Your Mooresville Roof?"
        subtitle="Get a free, no-obligation repair estimate from northern Lake Norman's trusted roofing experts. We'll assess the damage, explain your options, and deliver honest recommendations."
      />
    </>
  );
}
