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
  FileText,
  AlertTriangle,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
  WebPageSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Storm Damage Roof Repair Mooresville NC | Insurance Claims | Best Roofing Now',
  description:
    'Expert storm damage roof repair in Mooresville NC and the Lake Norman area. Hail damage repair, wind damage restoration, and insurance claim assistance. BBB A+ rated, veteran-owned. Free storm damage inspections.',
  keywords: [
    'storm damage roof repair Mooresville NC',
    'hail damage Mooresville',
    'storm damage roofer Mooresville',
    'Lake Norman storm damage repair',
    'hail damage roof repair Mooresville NC',
    'wind damage roof Mooresville',
    'roof insurance claim Mooresville NC',
    'emergency roof repair Mooresville',
    'storm damage restoration Mooresville NC',
    'hail damage insurance claim Mooresville',
    'roof repair after storm Mooresville',
    'Mooresville roofing contractor storm damage',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/storm-damage-roof-repair-mooresville-nc`,
  },
  openGraph: {
    title: 'Storm Damage Roof Repair Mooresville NC | Insurance Claims | Best Roofing Now',
    description:
      'BBB A+ rated storm damage roof repair specialists serving Mooresville and Lake Norman. Free storm damage inspections and insurance claim assistance.',
    url: `${SITE_CONFIG.url}/storm-damage-roof-repair-mooresville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.stormDamage,
        width: 1200,
        height: 630,
        alt: 'Storm damage roof repair Mooresville NC - Best Roofing Now emergency services',
      },
    ],
  },
};

// Storm damage services offered
const services = [
  {
    icon: CloudRain,
    title: 'Hail Damage Repair',
    description: 'Expert repair for hail-damaged shingles, dents, and granule loss on Lake Norman homes.',
    href: '/services/storm-damage',
  },
  {
    icon: AlertTriangle,
    title: 'Wind Damage Restoration',
    description: 'Fast response for blown-off shingles, lifted flashing, and wind-related roof damage.',
    href: '/services/storm-damage',
  },
  {
    icon: FileText,
    title: 'Insurance Claim Assistance',
    description: 'We work directly with your insurance company to maximize your storm damage claim.',
    href: '/services/insurance-claims',
  },
  {
    icon: Search,
    title: 'Free Storm Damage Inspection',
    description: 'Comprehensive damage assessment with detailed documentation for insurance purposes.',
    href: '/services/roof-inspection',
  },
  {
    icon: Wrench,
    title: 'Emergency Tarping',
    description: 'Immediate tarping services to prevent further water damage after severe storms.',
    href: '/services/emergency-roofing',
  },
  {
    icon: Home,
    title: 'Complete Roof Replacement',
    description: 'Full roof replacement when storm damage is too extensive for repairs.',
    href: '/services/roof-replacement',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Lake Norman homeowners.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: FileText,
    title: 'Insurance Experts',
    description: 'Extensive experience working with insurance companies to maximize your claim settlement.',
  },
  {
    icon: Users,
    title: 'Certified Installers',
    description: 'CertainTeed, GAF, and Owens Corning certified for premium warranty options.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency storm damage services when you need us most.',
  },
];

// Mooresville and Lake Norman areas served
const mooresvilleAreas = [
  'Downtown Mooresville',
  'Lake Norman',
  'Morrison Plantation',
  'Curtis Pond',
  'Bridgeport',
  'The Farms',
  'Alcove',
  'Langtree',
  'Brawley School',
  'Mount Mourne',
  'Coddle Creek',
  'River Highway',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Denver', href: '/storm-damage-roof-repair-denver-nc' },
  { name: 'Statesville', href: '/locations/statesville-nc' },
  { name: 'Troutman', href: '/locations/troutman-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Sherrills Ford', href: '/locations/sherrills-ford-nc' },
];

// FAQs about storm damage roof repair in Mooresville
const faqs = [
  {
    question: 'How do I know if my Mooresville roof has storm damage?',
    answer:
      'Common signs of storm damage include missing or lifted shingles, visible dents on shingles or metal components, granule loss in gutters, water stains on ceilings, and dented gutters or downspouts. After any significant storm in the Lake Norman area, we recommend a free professional inspection to identify hidden damage that may not be visible from the ground.',
  },
  {
    question: 'Will my insurance cover storm damage roof repair in Mooresville NC?',
    answer:
      'Most homeowner insurance policies cover storm damage from hail, wind, and fallen trees. Best Roofing Now has extensive experience working with insurance companies in the Mooresville area. We provide detailed documentation, meet with adjusters, and advocate for fair settlements. Many Lake Norman homeowners have their entire roof replacement covered by insurance after storm events.',
  },
  {
    question: 'How quickly can you respond to storm damage in Mooresville?',
    answer:
      'We offer 24/7 emergency response for storm damage in Mooresville and the Lake Norman area. For active leaks or severe damage, we can typically have a crew on-site within hours to perform emergency tarping and prevent further damage. Full inspections and repairs are scheduled as quickly as possible, usually within 24-48 hours.',
  },
  {
    question: 'What should I do immediately after storm damage to my roof?',
    answer:
      'First, ensure everyone is safe and document any visible damage with photos. Do not go on the roof yourself. Call Best Roofing Now at (704) 605-6047 for a free emergency inspection. We will tarp any active leaks, document all damage for your insurance claim, and guide you through the entire repair process.',
  },
  {
    question: 'How do you help with insurance claims for storm damage?',
    answer:
      'Our storm damage experts handle insurance claims daily. We provide comprehensive damage documentation with photos and measurements, meet with your insurance adjuster on-site, prepare detailed repair estimates, and supplement underpaid claims when necessary. Our goal is to ensure you receive fair compensation for all storm-related damage.',
  },
  {
    question: 'Why does Lake Norman see so much storm damage?',
    answer:
      'The Lake Norman area, including Mooresville, is particularly susceptible to severe weather due to its geography. The lake can intensify thunderstorms and create localized weather patterns. Additionally, Iredell County falls within a moderate hail risk zone. Regular roof inspections and prompt storm damage repair are essential for Lake Norman homeowners.',
  },
  {
    question: 'How long does storm damage repair take in Mooresville?',
    answer:
      'Minor storm damage repairs can often be completed in one day. More extensive damage requiring partial or full roof replacement typically takes 1-3 days for most homes. The timeline may be affected by insurance approval processes and material availability, but we work efficiently to restore your roof as quickly as possible.',
  },
  {
    question: 'Do you offer warranties on storm damage repairs?',
    answer:
      'Yes! All storm damage repairs are backed by our workmanship warranty, and we use premium materials from CertainTeed, GAF, and Owens Corning that come with manufacturer warranties. For full roof replacements, we can offer enhanced warranty options like GAF Golden Pledge with 50-year material coverage and 25-year workmanship protection.',
  },
];

export default function StormDamageRoofRepairMooresvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Storm Damage Roof Repair Mooresville NC', url: `${SITE_CONFIG.url}/storm-damage-roof-repair-mooresville-nc` },
        ]}
      />
      <WebPageSchema
        name="Storm Damage Roof Repair Mooresville NC | Lake Norman Insurance Claims"
        description="Expert storm damage roof repair in Mooresville and Lake Norman. Hail damage, wind damage, and insurance claim specialists."
        url={`${SITE_CONFIG.url}/storm-damage-roof-repair-mooresville-nc`}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Storm Damage Roof Repair Mooresville NC', url: `${SITE_CONFIG.url}/storm-damage-roof-repair-mooresville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/storm-damage-roof-repair-mooresville-nc`}
        pageName="Storm Damage Roof Repair Mooresville NC"
        city="Mooresville"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'Who repairs storm damaged roofs in Mooresville NC?',
            answer: 'Best Roofing Now provides expert storm damage roof repair in Mooresville and the Lake Norman area. We specialize in hail damage, wind damage, and insurance claim assistance with 24/7 emergency response. We serve Morrison Plantation, Lake Norman, Langtree, and all Mooresville neighborhoods. Call 704-605-6047 for a free inspection.',
            speakableAnswer: 'Best Roofing Now repairs storm damaged roofs in Mooresville and Lake Norman with 24/7 emergency response. We handle hail, wind damage, and insurance claims. Call 704-605-6047.',
          },
          {
            question: 'Does insurance cover storm damage roof repair in Mooresville?',
            answer: 'Yes, most homeowners insurance policies cover storm damage from hail, wind, and fallen trees in Mooresville NC. Best Roofing Now has extensive experience with Lake Norman insurance claims. We document damage, meet with adjusters, and help maximize your settlement. You typically pay only your deductible.',
            speakableAnswer: 'Yes, most insurance covers storm damage to Mooresville roofs. We work with all insurers and help maximize your Lake Norman claim. You pay only your deductible.',
          },
          {
            question: 'Why does Lake Norman get so much storm damage?',
            answer: 'The Lake Norman area including Mooresville is susceptible to severe weather due to geography. The lake can intensify thunderstorms and create localized weather patterns. Iredell County falls within a moderate hail risk zone. Regular roof inspections and prompt storm damage repair are essential for Lake Norman homeowners.',
            speakableAnswer: 'Lake Norman intensifies thunderstorms and creates unique weather patterns. The area has moderate hail risk. Regular inspections are essential for Mooresville homeowners.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.stormDamage}
            alt="Storm damage roof repair Mooresville NC - Best Roofing Now emergency storm response team"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <CloudRain className="w-4 h-4" />
              <span className="text-sm font-semibold">Lake Norman Storm Damage Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Storm Damage Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Mooresville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Fast response for hail damage, wind damage & insurance claims in Lake Norman
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              When storms strike Mooresville and the Lake Norman area, Best Roofing Now responds fast. Our certified
              storm damage specialists provide free inspections, work directly with your insurance company, and
              restore your roof to pre-storm condition with quality materials and expert craftsmanship.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Free Storm Damage Inspection
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
                24/7 Emergency Response
              </span>
              <span className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-accent-light" />
                Insurance Claim Experts
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
              Storm Damage Services in Mooresville NC
            </h2>
            <p className="text-gray text-lg">
              From emergency tarping to complete roof replacement, we handle all aspects of storm damage
              restoration for Lake Norman homeowners.
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
                Why Mooresville Homeowners Trust Us for Storm Damage
              </h2>
              <p className="text-gray text-lg mb-8">
                When your Lake Norman home is damaged by a storm, you need a roofing company that responds fast,
                works with your insurance, and delivers quality repairs. Best Roofing Now has helped hundreds of
                Mooresville homeowners recover from storm damage.
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
                alt="Storm damage roof repair completed in Mooresville NC - Best Roofing Now"
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
                Storm Damage? We Can Help Today.
              </h2>
              <p className="text-white/90">
                Free inspections and insurance claim assistance for Mooresville and Lake Norman homeowners.
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
                Schedule Free Inspection
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
              Serving Mooresville & Lake Norman Area
            </h2>
            <p className="text-gray text-lg">
              Our storm damage repair team serves homeowners throughout Mooresville and the greater Lake Norman region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mooresville Areas */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Mooresville Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {mooresvilleAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby Cities */}
            <div className="bg-light rounded-xl p-6">
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

      {/* Insurance Process Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Storm Damage Insurance Claim Process
            </h2>
            <p className="text-gray text-lg">
              We guide you through every step of the insurance claim process to ensure you receive fair compensation.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-bold text-dark mb-2">Free Inspection</h3>
              <p className="text-gray text-sm">
                We thoroughly inspect your roof and document all storm damage with photos and measurements.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-bold text-dark mb-2">File Your Claim</h3>
              <p className="text-gray text-sm">
                We help you file your insurance claim and provide all necessary documentation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-bold text-dark mb-2">Meet Adjuster</h3>
              <p className="text-gray text-sm">
                We meet with your insurance adjuster on-site to ensure all damage is properly assessed.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-bold text-dark mb-2">Repair Your Roof</h3>
              <p className="text-gray text-sm">
                Once approved, we complete quality repairs using premium materials with warranty protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Storm Damage Repairs in Lake Norman
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of storm damage repairs completed for Mooresville and Lake Norman homeowners.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Storm damage roof repair completed in Mooresville NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="Hail damage repair with CertainTeed shingles in Lake Norman"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of completed storm damage repair in Mooresville"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Wind damage repair project in Lake Norman area"
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
                Storm Damage Repair FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about storm damage roof repair in Mooresville NC.
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

      {/* January 2026 Ice Storm Alert */}
      <section className="py-6 bg-blue-50 border-t border-blue-100">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-700">
              <strong>January 2026 Ice Storm:</strong> If your roof or gutters were damaged by the recent ice storm, we&apos;re here to help Lake Norman neighbors.
            </p>
            <Link
              href="/ice-storm-damage-lake-norman-nc"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent whitespace-nowrap"
            >
              Ice Storm Help
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Storm Damage? Get Your Free Inspection Today."
        subtitle="Don't wait - storm damage can worsen quickly. Our Mooresville storm damage experts provide free inspections and help you navigate the insurance claim process from start to finish."
      />
    </>
  );
}
