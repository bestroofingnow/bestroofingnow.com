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
  CloudRain,
  MapPin,
  FileText,
  AlertTriangle,
  Camera,
  Umbrella,
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
  title: 'Hail Damage Roof Repair Charlotte NC | Insurance Claims Help | Best Roofing Now',
  description:
    'Hail damage roof repair in Charlotte NC. Best Roofing Now specializes in hail storm damage assessment, insurance claims assistance, and professional repairs. BBB A+ rated, licensed & insured. Free inspections after any storm.',
  keywords: [
    'hail damage roof repair charlotte nc',
    'hail damage roofing charlotte',
    'hail storm roof damage charlotte nc',
    'roof hail damage repair charlotte',
    'hail damage insurance claim charlotte',
    'roof hail damage assessment charlotte',
    'hail damage roofing contractor charlotte',
    'charlotte hail storm roof repair',
    'hail damage restoration charlotte nc',
    'roof damage from hail charlotte',
    'hail dents on roof charlotte nc',
    'shingle hail damage charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/hail-damage-roof-repair-charlotte-nc`,
  },
  openGraph: {
    title: 'Hail Damage Roof Repair Charlotte NC | Insurance Claims Help | Best Roofing Now',
    description:
      'Expert hail damage roof repair in Charlotte NC. Free storm damage inspections, insurance claim assistance, and professional repairs. BBB A+ rated and fully insured.',
    url: `${SITE_CONFIG.url}/hail-damage-roof-repair-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.projects.stormDamage1,
        width: 1200,
        height: 630,
        alt: 'Hail damage roof repair Charlotte NC - Best Roofing Now storm damage assessment',
      },
    ],
  },
};

// Hail damage services
const hailDamageServices = [
  {
    icon: Camera,
    title: 'Free Hail Damage Inspection',
    description: 'Comprehensive roof inspection after any hail storm with detailed photo documentation and written report.',
    href: '/services/roof-inspection',
  },
  {
    icon: FileText,
    title: 'Insurance Claim Assistance',
    description: 'We work directly with your insurance company, meet with adjusters, and fight for fair settlements.',
    href: '/services/insurance-claims',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Professional repair of all hail and storm damage including shingles, flashing, gutters, and siding.',
    href: '/services/storm-damage',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Tarping',
    description: 'Immediate tarping services to protect your home from further water damage after severe storms.',
    href: '/services/emergency-roofing',
  },
  {
    icon: Shield,
    title: 'Full Roof Replacement',
    description: 'When damage is extensive, we provide complete roof replacement with premium, impact-resistant materials.',
    href: '/services/roof-replacement',
  },
  {
    icon: Umbrella,
    title: 'Preventive Upgrades',
    description: 'Upgrade to impact-resistant Class 4 shingles for better protection against future hail storms.',
    href: '/services/residential-roofing',
  },
];

// Why choose us for hail damage
const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Trusted by Charlotte homeowners with an A+ Better Business Bureau rating.',
  },
  {
    icon: Star,
    title: 'Insurance Specialists',
    description: 'Thousands of successful insurance claims processed for Charlotte homeowners.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC contractor with comprehensive liability coverage.',
  },
  {
    icon: CheckCircle,
    title: 'Free Inspections',
    description: 'No-cost, no-obligation roof inspections after any hail storm event.',
  },
  {
    icon: Users,
    title: 'Adjuster Meetings',
    description: 'We meet with your insurance adjuster to ensure nothing is missed.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Response',
    description: 'Round-the-clock emergency services when you need us most.',
  },
];

// Signs of hail damage
const hailDamageSigns = [
  'Dented or bruised shingles',
  'Missing granules (dark spots)',
  'Cracked or split shingles',
  'Dented gutters or downspouts',
  'Damaged roof vents',
  'Dents in metal flashing',
  'Damaged siding or window screens',
  'Soft spots when walking on roof',
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
];

// Nearby cities served
const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Mint Hill', href: '/locations/mint-hill-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Gastonia', href: '/locations/gastonia-nc' },
  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
  { name: 'Fort Mill, SC', href: '/locations/fort-mill-sc' },
];

// FAQs about hail damage roof repair
const faqs = [
  {
    question: 'How do I know if my roof has hail damage?',
    answer:
      'Common signs of hail damage include dented or bruised shingles, missing granules (appearing as dark spots), cracked shingles, dented gutters or downspouts, and damaged roof vents or flashing. However, many signs of hail damage are not visible from the ground. After any hail storm in Charlotte, we recommend scheduling a free professional inspection to assess your roof thoroughly.',
  },
  {
    question: 'Should I file an insurance claim for hail damage?',
    answer:
      'If your roof has significant hail damage, filing an insurance claim is usually recommended. Most homeowner policies cover hail damage minus your deductible. We provide free inspections and can help you determine if the damage warrants a claim. If we find qualifying damage, we\'ll document everything and guide you through the claims process.',
  },
  {
    question: 'How long do I have to file a hail damage claim in Charlotte NC?',
    answer:
      'In North Carolina, you typically have 3 years from the date of the storm to file a property damage claim. However, we strongly recommend filing as soon as possible after discovering damage. Delays can result in further deterioration and make it harder to prove the damage was storm-related. Call us immediately after any hail storm for a free inspection.',
  },
  {
    question: 'Will my insurance rates go up if I file a hail damage claim?',
    answer:
      'Hail damage claims are typically considered "Act of God" claims and generally don\'t affect your rates the same way at-fault claims do. Many insurance companies don\'t raise rates for weather-related claims, especially if you have a good claims history. We can discuss your specific situation during our free inspection.',
  },
  {
    question: 'How much does hail damage roof repair cost in Charlotte?',
    answer:
      'The cost depends on the extent of damage. Minor repairs may cost $200-$500, while significant damage may require partial or full roof replacement ranging from $8,000-$25,000. The good news is that most hail damage is covered by homeowner\'s insurance, so you\'d only pay your deductible. We provide free estimates and help maximize your insurance settlement.',
  },
  {
    question: 'Do you work with my insurance company?',
    answer:
      'Yes, we work with all major insurance companies serving Charlotte including State Farm, Allstate, Nationwide, USAA, Farmers, and more. We provide detailed documentation, meet with adjusters at your property, supplement underpaid claims, and ensure you receive fair compensation for all storm-related damage.',
  },
  {
    question: 'What happens during a hail damage inspection?',
    answer:
      'Our certified inspectors thoroughly examine your entire roof, including shingles, flashing, vents, gutters, and surrounding areas. We document all damage with detailed photos and measurements. You\'ll receive a comprehensive written report explaining our findings and recommendations. The inspection is completely free with no obligation.',
  },
  {
    question: 'How soon after a hail storm should I schedule an inspection?',
    answer:
      'Schedule an inspection as soon as safely possible after a hail storm. Early inspection helps document damage before it worsens and ensures you don\'t miss insurance filing deadlines. We offer emergency response and can often inspect your roof within 24-48 hours of your call. Don\'t wait for visible leaks - hidden damage can cause problems for months.',
  },
];

export default function HailDamageRoofRepairCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Hail Damage Roof Repair Charlotte NC', url: `${SITE_CONFIG.url}/hail-damage-roof-repair-charlotte-nc` },
        ]}
      />
      <WebPageSchema
        name="Hail Damage Roof Repair Charlotte NC | Insurance Claims Help"
        description="Expert hail damage roof repair in Charlotte NC. Free storm damage inspections, insurance claim assistance, and professional repairs."
        url={`${SITE_CONFIG.url}/hail-damage-roof-repair-charlotte-nc`}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Hail Damage Roof Repair Charlotte NC', url: `${SITE_CONFIG.url}/hail-damage-roof-repair-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/hail-damage-roof-repair-charlotte-nc`}
        pageName="Hail Damage Roof Repair Charlotte NC"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much does hail damage roof repair cost in Charlotte?',
            answer: 'Hail damage roof repair in Charlotte typically costs $200-$500 for minor repairs, or $8,000-$25,000+ for full roof replacement if damage is extensive. The good news is that most hail damage is covered by homeowner insurance, so you only pay your deductible (usually $500-$2,500). Best Roofing Now provides free inspections and helps maximize your insurance settlement.',
            speakableAnswer: 'Minor hail repairs cost $200 to $500, while full replacement runs $8,000 to $25,000. Most hail damage is covered by insurance, so you typically only pay your deductible.',
          },
          {
            question: 'Who repairs hail damage roofs in Charlotte NC?',
            answer: 'Best Roofing Now is Charlotte\'s trusted hail damage roof repair specialist. We provide free hail damage inspections, work with all major insurance companies, meet with adjusters, and ensure you get a fair settlement. Call 704-605-6047 for a free storm damage inspection.',
            speakableAnswer: 'Best Roofing Now repairs hail damaged roofs in Charlotte. We offer free inspections and handle insurance claims. Call 704-605-6047 for immediate assistance.',
          },
          {
            question: 'Does insurance cover hail damage to roofs in North Carolina?',
            answer: 'Yes, most homeowners insurance policies in North Carolina cover hail damage to roofs. Hail damage is typically classified as an "Act of God" claim and covered under your dwelling protection. You will pay your deductible, but the rest of the repair or replacement cost is covered. File claims promptly as NC allows 3 years from the storm date.',
            speakableAnswer: 'Yes, most NC homeowners insurance covers hail damage to roofs. You pay your deductible and insurance covers the rest. File claims within 3 years of the storm.',
          },
          {
            question: 'How do I know if my roof has hail damage?',
            answer: 'Signs of hail damage include dented or bruised shingles, missing granules appearing as dark spots, cracked or split shingles, dented gutters and downspouts, damaged roof vents, and dents in metal flashing. Many signs are not visible from the ground, so schedule a free professional inspection after any hail storm in Charlotte.',
            speakableAnswer: 'Hail damage signs include dented shingles, missing granules, cracked shingles, dented gutters, and damaged vents. Get a free professional inspection after any Charlotte hail storm.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.projects.stormDamage1}
            alt="Hail damage roof repair Charlotte NC - Best Roofing Now storm damage assessment"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <CloudRain className="w-4 h-4" />
              <span className="text-sm font-semibold">Free Storm Damage Inspections</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Hail Damage Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Insurance claim experts helping Charlotte homeowners since {SITE_CONFIG.founded}
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Did a recent hail storm damage your roof? Best Roofing Now provides free hail damage inspections,
              expert insurance claim assistance, and professional repairs. We fight to ensure you get the
              settlement you deserve. Don't wait - hidden damage gets worse over time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Free Hail Damage Inspection
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
                <CheckCircle className="w-5 h-5 text-green-400" />
                Insurance Claim Experts
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent-light" />
                24/7 Emergency Service
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
              Complete Hail Damage Restoration Services
            </h2>
            <p className="text-gray text-lg">
              From free inspections to insurance claim assistance and professional repairs, we handle
              every aspect of your hail damage restoration.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hailDamageServices.map((service) => (
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

      {/* Signs of Hail Damage */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Signs Your Roof Has Hail Damage
              </h2>
              <p className="text-gray text-lg mb-8">
                Hail damage isn't always obvious. Even if your roof looks fine from the ground, it may have
                sustained significant damage that can lead to leaks and costly repairs if left unaddressed.
                Look for these common signs:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {hailDamageSigns.map((sign) => (
                  <div key={sign} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-dark">{sign}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button
                  href="/contact"
                  variant="primary"
                  icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
                >
                  Schedule Free Inspection
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.services.stormDamage}
                alt="Signs of hail damage on roof - Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-white rounded-xl shadow-lg p-4">
                <p className="font-bold text-lg">Free Inspections</p>
                <p className="text-sm text-white/90">No obligation, no cost</p>
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
              Why Charlotte Homeowners Trust Us With Hail Damage Claims
            </h2>
            <p className="text-gray text-lg">
              Navigating insurance claims can be stressful. Best Roofing Now has helped thousands of
              Charlotte homeowners get fair settlements for hail damage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="p-6 bg-light rounded-xl">
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

      {/* Insurance Claims Process */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Insurance Claims Process
            </h2>
            <p className="text-white/80 text-lg">
              We make the hail damage insurance claim process simple and stress-free.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="font-bold mb-2 text-white">Free Inspection</h3>
              <p className="text-white/80 text-sm">We thoroughly inspect your roof and document all damage with photos.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="font-bold mb-2 text-white">File Claim</h3>
              <p className="text-white/80 text-sm">We help you file your insurance claim with complete documentation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="font-bold mb-2 text-white">Meet Adjuster</h3>
              <p className="text-white/80 text-sm">We meet with your insurance adjuster to ensure all damage is covered.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="font-bold mb-2 text-white">Repair Roof</h3>
              <p className="text-white/80 text-sm">Once approved, we complete professional repairs with quality materials.</p>
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
                Recent Hail Storm in Charlotte?
              </h2>
              <p className="text-white/90">
                Don't wait - schedule your free hail damage inspection today. Hidden damage gets worse over time.
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
                Free Inspection
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
              Hail Damage Repair Across Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              We respond quickly to hail storms throughout the Greater Charlotte area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Neighborhoods */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Neighborhoods</h3>
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
                Hail Damage Repair FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about hail damage roof repair and insurance claims in Charlotte NC.
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

      {/* Final CTA */}
      <CTASection
        title="Don't Let Hail Damage Go Unrepaired"
        subtitle="Schedule your free hail damage inspection today. Our team will document all damage, help with your insurance claim, and ensure your roof is properly repaired to protect your home."
      />
    </>
  );
}
