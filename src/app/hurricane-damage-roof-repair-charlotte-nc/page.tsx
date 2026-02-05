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
  Wind,
  AlertTriangle,
  MapPin,
  FileText,
  Search,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Hurricane Damage Roof Repair Charlotte NC | Storm Recovery | Best Roofing Now',
  description:
    'Expert hurricane damage roof repair in Charlotte NC. 24/7 emergency response for tropical storm and hurricane damage. Insurance claim assistance, emergency tarping, and full restoration.',
  keywords: [
    'hurricane damage roof repair Charlotte NC',
    'hurricane roof repair Charlotte',
    'tropical storm roof damage Charlotte',
    'storm damage roof repair Charlotte NC',
    'hurricane restoration Charlotte',
    'emergency roof repair hurricane',
    'wind damage roof repair',
    'hurricane insurance claim Charlotte',
    'storm recovery roofing',
    'Charlotte hurricane roofer',
    'emergency tarping Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/hurricane-damage-roof-repair-charlotte-nc`,
  },
  openGraph: {
    title: 'Hurricane Damage Roof Repair Charlotte NC | Storm Recovery | Best Roofing Now',
    description:
      '24/7 hurricane damage response in Charlotte NC. Emergency tarping, insurance claim assistance, and full roof restoration. BBB A+ rated.',
    url: `${SITE_CONFIG.url}/hurricane-damage-roof-repair-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.stormDamage,
        width: 1200,
        height: 630,
        alt: 'Hurricane damage roof repair in Charlotte NC - Best Roofing Now storm recovery experts',
      },
    ],
  },
};

// Hurricane-specific services
const hurricaneServices = [
  {
    icon: AlertTriangle,
    title: '24/7 Emergency Response',
    description: 'Immediate response to secure your property and prevent further damage after a hurricane.',
    href: '/services/emergency-roofing',
  },
  {
    icon: Shield,
    title: 'Emergency Tarping',
    description: 'Professional tarping to protect your home from water damage until permanent repairs.',
    href: '/services/emergency-roofing',
  },
  {
    icon: FileText,
    title: 'Insurance Claim Assistance',
    description: 'Expert documentation and advocacy to maximize your hurricane damage insurance claim.',
    href: '/services/insurance-claims',
  },
  {
    icon: Wind,
    title: 'Wind Damage Repair',
    description: 'Repair or replace shingles and components damaged by hurricane-force winds.',
    href: '/services/storm-damage',
  },
  {
    icon: CloudRain,
    title: 'Water Damage Restoration',
    description: 'Address roof leaks and water intrusion caused by hurricane rainfall.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Full Roof Replacement',
    description: 'Complete roof replacement when hurricane damage is too extensive to repair.',
    href: '/services/roof-replacement',
  },
];

// Why choose us points for hurricane
const whyChooseUs = [
  {
    icon: Award,
    title: 'Storm Damage Experts',
    description: 'Extensive experience restoring Charlotte homes after hurricanes and tropical storms.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Charlotte homeowners.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Military discipline and integrity applied to emergency storm response.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC contractor with coverage for major storm restoration work.',
  },
  {
    icon: Users,
    title: 'Insurance Specialists',
    description: 'Deep experience working with insurance adjusters and maximizing claims.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock emergency response when hurricanes strike Charlotte.',
  },
];

// Charlotte neighborhoods served
const charlotteNeighborhoods = [
  'Myers Park',
  'Dilworth',
  'South End',
  'NoDa',
  'Plaza Midwood',
  'Ballantyne',
  'University City',
  'Cotswold',
  'Elizabeth',
  'Eastover',
  'SouthPark',
  'Uptown Charlotte',
  'Wesley Heights',
  'Fourth Ward',
  'Cherry',
  'Madison Park',
  'Montford',
  'Chantilly',
  'Commonwealth',
  'Sedgefield',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Mint Hill', href: '/locations/mint-hill-nc' },
  { name: 'Pineville', href: '/locations/pineville-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Gastonia', href: '/locations/gastonia-nc' },
  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
  { name: 'Fort Mill, SC', href: '/locations/fort-mill-sc' },
  { name: 'Indian Trail', href: '/locations/indian-trail-nc' },
];

// FAQs about hurricane damage roof repair
const faqs = [
  {
    question: 'Does Charlotte get hurricane damage?',
    answer:
      'Yes, while Charlotte is 175 miles inland, the city regularly experiences significant impacts from hurricanes and tropical storms. When hurricanes make landfall on the Carolina coast, they often track inland through Charlotte bringing damaging winds, heavy rain, and sometimes tornadoes. Recent storms like Hurricane Florence (2018) and Hurricane Ian (2022) caused substantial roof damage throughout the Charlotte area. Even weakening storms can bring 50-80 mph wind gusts that damage roofs.',
  },
  {
    question: 'What should I do immediately after hurricane damage?',
    answer:
      'First, ensure your family\'s safety and don\'t enter areas with structural damage. Document all damage with photos and videos before any cleanup. If you have active leaks, place buckets to catch water and move valuables away from affected areas. Call Best Roofing Now for emergency tarping to prevent further water damage. Don\'t attempt to climb on your roof yourself - it may be structurally compromised. Contact your insurance company to start your claim, and save receipts for any emergency expenses.',
  },
  {
    question: 'How quickly can you respond after a hurricane?',
    answer:
      'Best Roofing Now maintains 24/7 emergency response capability before, during, and after hurricanes. We stage crews and materials in advance of approaching storms to enable rapid response. For emergency tarping, we typically respond within 2-24 hours depending on storm severity and demand. We prioritize cases with active water intrusion to prevent further damage. Call us immediately at (704) 605-6047 - the sooner we can tarp, the less secondary damage your home will sustain.',
  },
  {
    question: 'Will my insurance cover hurricane roof damage?',
    answer:
      'Most standard homeowner\'s insurance policies cover hurricane wind damage to roofs. However, you should be aware of your policy\'s wind/hurricane deductible, which is often a percentage of your home\'s value (typically 1-5%) rather than a flat amount. Document everything thoroughly, and be aware that insurance companies may try to minimize payouts after major storms. Best Roofing Now works directly with insurance companies and can help ensure you receive fair compensation for your damage.',
  },
  {
    question: 'How do you help with hurricane insurance claims?',
    answer:
      'Our hurricane insurance claim assistance includes comprehensive damage documentation with photos and measurements, detailed scope of work estimates, direct communication with your insurance adjuster, on-site meetings with adjusters to ensure nothing is missed, supplement submissions when initial settlements are inadequate, and guidance throughout the entire claims process. We\'ve helped hundreds of Charlotte homeowners receive fair settlements after hurricane damage.',
  },
  {
    question: 'What types of hurricane damage do you repair?',
    answer:
      'We repair all types of hurricane roof damage including missing or lifted shingles from wind, damaged or displaced flashing, broken vent caps and roof penetrations, fallen tree limbs on roofs, gutter damage and detachment, water intrusion damage from compromised areas, torn soffit and fascia, and structural damage requiring full replacement. We handle everything from minor wind damage to complete roof replacements.',
  },
  {
    question: 'How much does hurricane damage repair cost?',
    answer:
      'Hurricane damage repair costs vary widely based on damage extent. Emergency tarping typically costs $500-$1,500, minor wind damage repairs range from $500-$2,500, moderate damage repairs run $2,500-$8,000, and full replacements due to catastrophic damage range from $10,000-$30,000+. The good news is that most hurricane damage is covered by insurance, and we work with your insurer to ensure proper compensation. We provide free damage assessments to determine the full scope of work needed.',
  },
  {
    question: 'How can I prepare my roof for hurricane season?',
    answer:
      'Pre-hurricane preparation includes professional roof inspection to identify vulnerabilities, repair any existing damage before storm season (June-November), trim trees near your roof, ensure gutters are clear for heavy rainfall, consider impact-resistant shingles if replacing your roof, verify your insurance coverage and understand your deductible, and document your roof\'s pre-storm condition with photos. Best Roofing Now offers pre-hurricane inspections to help Charlotte homeowners prepare.',
  },
];

export default function HurricaneDamageRoofRepairCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Hurricane Damage Roof Repair Charlotte NC', url: `${SITE_CONFIG.url}/hurricane-damage-roof-repair-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.stormDamage}
            alt="Hurricane damage roof repair in Charlotte NC - Best Roofing Now storm recovery experts"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Wind className="w-4 h-4" />
              <span className="text-sm font-semibold">24/7 Hurricane Response Team</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Hurricane Damage Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Rapid storm recovery when hurricanes impact Charlotte
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              When hurricanes and tropical storms strike Charlotte, Best Roofing Now is ready with 24/7 emergency
              response, professional tarping, and complete storm restoration. Our insurance claim specialists ensure
              you receive fair compensation while we restore your home to pre-storm condition.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="primary"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Emergency: {SITE_CONFIG.phone}
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Assessment
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
                24/7 Storm Response
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Hurricane Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Hurricane Recovery Services in Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              Complete hurricane damage response from emergency tarping through full restoration and insurance claim
              support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hurricaneServices.map((service) => (
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
                Charlotte's Hurricane Damage Experts
              </h2>
              <p className="text-gray text-lg mb-8">
                When hurricanes impact Charlotte, you need a contractor who responds quickly, works professionally with
                insurance companies, and delivers quality repairs that will withstand the next storm. Best Roofing Now
                has helped hundreds of Charlotte families recover from hurricane damage.
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
                src={IMAGES.projects.stormDamage1}
                alt="Best Roofing Now - Hurricane damage experts in Charlotte NC"
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

      {/* Emergency CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Hurricane Damage? Call Now for Emergency Help
              </h2>
              <p className="text-white/90">
                24/7 response team ready to secure your home and start the recovery process.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-accent hover:bg-white/90"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-accent"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Request Assessment
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
              Hurricane Response Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              Our storm response teams serve the entire Greater Charlotte metro area with rapid hurricane damage
              recovery.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Neighborhoods */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {charlotteNeighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {neighborhood}
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

      {/* Hurricane Preparedness Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Hurricane Preparedness for Charlotte Homeowners
            </h2>
            <p className="text-gray text-lg">
              Steps you can take before hurricane season to protect your home and family.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2 text-center">Pre-Season Inspection</h3>
              <p className="text-gray text-sm text-center">
                Get a professional inspection before June to identify and repair vulnerabilities before storms arrive.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2 text-center">Document Everything</h3>
              <p className="text-gray text-sm text-center">
                Photograph your roof's current condition. This documentation is crucial for insurance claims.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2 text-center">Review Insurance</h3>
              <p className="text-gray text-sm text-center">
                Know your wind/hurricane deductible and coverage limits. Consider additional coverage if needed.
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
              Hurricane Restoration Projects
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of hurricane damage repairs and restorations throughout Charlotte.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Hurricane damage roof repair completed in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="Storm damage restoration in Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of hurricane restoration project in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional hurricane damage repair in Charlotte area"
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
                Hurricane Damage Repair FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about hurricane roof damage and recovery in Charlotte NC.
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
        pageType="other"
        city="Charlotte"
        slug="hurricane-damage-roof-repair-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/hurricane-damage-roof-repair-charlotte-nc`}
      />

      {/* Final CTA */}
      <CTASection
        title="Hurricane Damage? We're Here to Help"
        subtitle="24/7 emergency response for hurricane and tropical storm damage. Free damage assessments and insurance claim assistance. Call now or schedule online."
      />
    </>
  );
}
