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
  Wind,
  AlertTriangle,
  FileText,
  Camera,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Wind Damage Roof Repair Charlotte NC | Blown Shingles & High Wind',
  description:
    'Wind damage roof repair in Charlotte NC. Shingle blowoff, high wind damage, and exposed roof deck repairs. Insurance claim assistance for wind-related roof damage. Free inspections.',
  keywords: [
    'wind damage roof repair charlotte nc',
    'wind damaged roof charlotte',
    'shingle blowoff repair charlotte nc',
    'blown off shingles charlotte',
    'wind storm roof damage charlotte',
    'roof wind damage charlotte nc',
    'high wind roof repair charlotte',
    'wind damage insurance claim charlotte',
    'lifted shingles wind damage charlotte',
    'wind uplift roof damage charlotte nc',
    'roof deck exposed wind charlotte',
    'missing shingles wind charlotte nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/wind-damage-roof-repair-charlotte-nc`,
  },
  openGraph: {
    title: 'Wind Damage Roof Repair Charlotte NC | Emergency Service | Best Roofing Now',
    description:
      '24/7 emergency wind damage roof repair in Charlotte NC. Fast response, insurance claim assistance. BBB A+ rated.',
    url: `${SITE_CONFIG.url}/wind-damage-roof-repair-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.stormDamage,
        width: 1200,
        height: 630,
        alt: 'Wind damage roof repair Charlotte NC - Best Roofing Now emergency services',
      },
    ],
  },
};

// Wind damage repair services
const services = [
  {
    icon: Wind,
    title: 'Shingle Blowoff Repair',
    description: 'Fast repair of blown-off, lifted, or creased shingles from high wind events.',
    href: '/services/storm-damage',
  },
  {
    icon: AlertTriangle,
    title: '24/7 Emergency Response',
    description: 'Round-the-clock emergency tarping and temporary repairs to prevent further damage.',
    href: '/services/emergency-roofing',
  },
  {
    icon: Home,
    title: 'Complete Wind Damage Restoration',
    description: 'Full roof restoration including structural repairs, underlayment, and new shingles.',
    href: '/services/roof-replacement',
  },
  {
    icon: FileText,
    title: 'Insurance Claim Assistance',
    description: 'Expert documentation and support to help you navigate the insurance claims process.',
    href: '/services/storm-damage',
  },
  {
    icon: Camera,
    title: 'Damage Inspection & Documentation',
    description: 'Thorough inspection with photos and detailed reports for insurance purposes.',
    href: '/services/roof-inspection',
  },
  {
    icon: Wrench,
    title: 'Flashing & Vent Repair',
    description: 'Repair of wind-damaged flashing, vents, ridge caps, and roof accessories.',
    href: '/services/roof-repair',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'We respond immediately to wind damage emergencies, day or night, to protect your home.',
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: FileText,
    title: 'Insurance Experts',
    description: 'We work directly with insurance companies and help maximize your claim settlement.',
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: Users,
    title: 'Certified Installers',
    description: 'CertainTeed, GAF, and Owens Corning certified for premium warranty options.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Charlotte homeowners.`,
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

// FAQs about wind damage roof repair
const faqs = [
  {
    question: 'What wind speed causes roof damage?',
    answer:
      'Roof damage can occur at wind speeds as low as 45-50 mph, though significant damage typically happens at 60+ mph. Charlotte experiences severe thunderstorms with winds exceeding 60-80 mph several times per year. Even "moderate" winds of 40-50 mph can lift and damage older or improperly installed shingles. After any significant wind event, we recommend a free inspection.',
  },
  {
    question: 'How do I know if my roof has wind damage?',
    answer:
      'Signs of wind damage include: missing or lifted shingles, shingles with creased or bent corners, granules in gutters or on the ground, exposed roof deck or underlayment, damaged flashing around vents and chimneys, and visible debris on the roof. From inside, look for water stains on ceilings. If you suspect damage, call us for a free inspection.',
  },
  {
    question: 'Does homeowners insurance cover wind damage to roofs?',
    answer:
      'Yes, most homeowners insurance policies in Charlotte cover wind damage to roofs. This includes damage from thunderstorms, hurricanes, and tornadoes. We help document the damage thoroughly and work with your insurance adjuster to ensure you receive fair compensation. Many Charlotte homeowners are surprised to learn their damage qualifies for a full roof replacement.',
  },
  {
    question: 'How quickly can you respond to wind damage emergencies?',
    answer:
      'We offer 24/7 emergency response throughout Charlotte and typically arrive within 1-4 hours for urgent situations. Our first priority is preventing further damage with emergency tarping and temporary repairs. We then schedule a complete assessment and permanent repairs as quickly as possible.',
  },
  {
    question: 'What should I do immediately after wind damages my roof?',
    answer:
      'First, ensure everyone is safe and stay away from any hanging debris. Document visible damage with photos from the ground (never climb onto a damaged roof). Move valuables away from any active leaks and place buckets to catch water. Call us immediately for emergency service at (704) 605-6047. Do not attempt roof repairs yourself.',
  },
  {
    question: 'How long does wind damage roof repair take?',
    answer:
      'Emergency tarping is typically completed within hours of our arrival. Minor repairs like replacing a few shingles can be done in a day. Major repairs or full replacements due to wind damage usually take 1-3 days once materials arrive. We expedite insurance claims to get your permanent repairs completed as quickly as possible.',
  },
  {
    question: 'Will you work with my insurance company?',
    answer:
      'Absolutely. We have extensive experience with all major insurance companies in Charlotte. We provide detailed documentation, meet with adjusters on-site, and advocate for fair settlements. Our goal is to ensure your roof is fully restored at minimal out-of-pocket cost to you.',
  },
  {
    question: 'Can wind damage that looks minor be serious?',
    answer:
      'Yes, seemingly minor wind damage can lead to major problems if not addressed. A few lifted shingles can allow water infiltration that damages decking, insulation, and interior ceilings. Creased shingles lose their watertight seal and are prone to leaks. Even if damage appears minimal, we recommend a professional inspection to assess the true extent.',
  },
];

export default function WindDamageRoofRepairCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Wind Damage Roof Repair Charlotte NC', url: `${SITE_CONFIG.url}/wind-damage-roof-repair-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.stormDamage}
            alt="Wind damage roof repair Charlotte NC - Best Roofing Now emergency services"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-red-500/90 rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-semibold">24/7 Emergency Service Available</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Wind Damage Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Fast emergency response for storm and wind damage repairs
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Charlotte storms can strike without warning, leaving your roof vulnerable to water damage. Best Roofing
              Now provides 24/7 emergency wind damage repair with rapid response times. We handle everything from
              temporary tarping to complete restoration, including insurance claim assistance.
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
                Schedule Inspection
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent-light" />
                1-4 Hour Response Time
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-green-400" />
                Insurance Claim Experts
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
              Complete Wind Damage Repair Services
            </h2>
            <p className="text-gray text-lg">
              From emergency tarping to full restoration, we handle all aspects of wind damage repair
              and work directly with your insurance company.
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

      {/* Wind Damage Signs Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Signs of Wind Damage to Your Roof
              </h2>
              <p className="text-gray text-lg mb-6">
                Wind damage isn't always obvious from the ground. Here are signs that your Charlotte roof
                may have sustained damage during a storm.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-dark">Missing or Blown-Off Shingles</strong>
                    <p className="text-gray text-sm">Visible gaps or shingles on the ground around your home.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-dark">Lifted or Curling Shingles</strong>
                    <p className="text-gray text-sm">Shingles that are raised, bent, or peeling back at the edges.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-dark">Creased or Bent Shingles</strong>
                    <p className="text-gray text-sm">Horizontal crease lines across shingles from wind uplift.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-dark">Damaged Ridge Caps or Vents</strong>
                    <p className="text-gray text-sm">Ridge vents, turbines, or caps that are loose or missing.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-dark">Granules in Gutters</strong>
                    <p className="text-gray text-sm">Excessive shingle granules washed into gutters or downspouts.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-dark">Interior Water Stains</strong>
                    <p className="text-gray text-sm">New water stains on ceilings or walls after a storm.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.projects.stormDamage1}
                alt="Wind damaged roof in Charlotte NC requiring emergency repair"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 rounded-xl shadow-lg p-4 text-white">
                <div className="flex items-center gap-3">
                  <Phone className="w-8 h-8" />
                  <div>
                    <p className="font-bold">Emergency Hotline</p>
                    <p className="text-lg">{SITE_CONFIG.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Charlotte Homeowners Trust Us for Wind Damage Repairs
            </h2>
            <p className="text-gray text-lg">
              When storms strike, you need a roofing company that responds fast and handles everything professionally.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-6 bg-light rounded-xl">
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
      </section>

      {/* Emergency CTA */}
      <section className="bg-red-600 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Roof Damaged by Wind? We're Here 24/7
              </h2>
              <p className="text-white/90">
                Don't wait for more damage. Call now for emergency tarping and repairs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-red-600 hover:bg-white/90"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-red-600"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Request Inspection
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
              Emergency Wind Damage Repair Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              We respond to wind damage emergencies across the Greater Charlotte metro area.
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

      {/* Insurance Claims Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                We Handle Your Insurance Claim
              </h2>
              <p className="text-gray text-lg">
                Navigating insurance claims can be stressful after a storm. We make it easy.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-bold text-dark mb-2">Free Inspection</h3>
                <p className="text-gray text-sm">We thoroughly document all wind damage with photos and notes.</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-bold text-dark mb-2">File Your Claim</h3>
                <p className="text-gray text-sm">We help you file with all documentation your insurer needs.</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-bold text-dark mb-2">Meet the Adjuster</h3>
                <p className="text-gray text-sm">We meet with your insurance adjuster on-site to advocate for you.</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-bold text-dark mb-2">Complete Repairs</h3>
                <p className="text-gray text-sm">We restore your roof to pre-storm condition with quality materials.</p>
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
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Wind Damage Repair FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about wind damage roof repair in Charlotte NC.
              </p>
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

      {/* Final CTA */}
      <CTASection
        title="Wind Damage? Get Help Now"
        subtitle="Our emergency team is standing by 24/7. Call now for immediate response or schedule a free damage inspection for your Charlotte home."
      />
    </>
  );
}
