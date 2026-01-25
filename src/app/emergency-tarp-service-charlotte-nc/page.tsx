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
  AlertTriangle,
  Zap,
  Home,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Emergency Roof Tarp Service Charlotte NC | 24/7 | Best Roofing Now',
  description:
    'Emergency roof tarp service in Charlotte NC. 24/7 storm response for damaged roofs. Fast tarping to prevent water damage. Call Best Roofing Now for immediate help!',
  keywords: [
    'emergency roof tarp charlotte nc',
    'roof tarping charlotte',
    'emergency tarp service charlotte nc',
    'storm damage tarp charlotte',
    'roof tarp installation charlotte',
    '24/7 roof tarping charlotte nc',
    'emergency roof cover charlotte',
    'temporary roof repair charlotte',
    'storm roof protection charlotte nc',
    'roof tarp after storm charlotte',
    'emergency roofing charlotte nc',
    'roof damage tarp service charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/emergency-tarp-service-charlotte-nc`,
  },
  openGraph: {
    title: 'Emergency Roof Tarp Service Charlotte NC | 24/7 | Best Roofing Now',
    description:
      '24/7 emergency roof tarping in Charlotte NC. Fast storm response to protect your home from water damage. BBB A+ rated, veteran-owned. Call now!',
    url: `${SITE_CONFIG.url}/emergency-tarp-service-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.emergency,
        width: 1200,
        height: 630,
        alt: 'Emergency roof tarp service in Charlotte NC - Best Roofing Now storm response',
      },
    ],
  },
};

// Emergency situations we handle
const emergencySituations = [
  {
    icon: CloudRain,
    title: 'Storm Damage',
    description: 'High winds, hail, and severe storms that tear off shingles or damage roofing materials.',
  },
  {
    icon: AlertTriangle,
    title: 'Tree Damage',
    description: 'Fallen trees or large branches that puncture or damage your roof structure.',
  },
  {
    icon: Zap,
    title: 'Tornado Damage',
    description: 'Severe wind damage from tornadoes requiring immediate protection.',
  },
  {
    icon: Home,
    title: 'Fire Damage',
    description: 'Exposed roof areas after fire damage requiring temporary weatherproofing.',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'We answer emergency calls around the clock, 365 days a year. Storms don\'t wait, and neither do we.',
  },
  {
    icon: Zap,
    title: 'Rapid Response',
    description: 'Our emergency crews are dispatched immediately to get to your property as fast as possible.',
  },
  {
    icon: Shield,
    title: 'Insurance Documentation',
    description: 'We document all damage thoroughly to support your insurance claim process.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability and workers comp insurance.',
  },
  {
    icon: Award,
    title: 'Quality Materials',
    description: 'We use heavy-duty commercial tarps properly secured to withstand additional weather.',
  },
  {
    icon: Users,
    title: 'Full Repair Services',
    description: 'From emergency tarp to permanent repair, we handle the entire process for you.',
  },
];

// Tarping process
const tarpingProcess = [
  {
    step: '1',
    title: 'Emergency Call',
    description: 'Call our 24/7 line. We\'ll gather details about the damage and dispatch a crew immediately.',
  },
  {
    step: '2',
    title: 'Rapid Assessment',
    description: 'Our crew arrives quickly to assess damage and determine the best tarping approach.',
  },
  {
    step: '3',
    title: 'Secure Installation',
    description: 'Heavy-duty tarps are professionally installed and secured to prevent water intrusion.',
  },
  {
    step: '4',
    title: 'Documentation',
    description: 'We photograph all damage and provide documentation for your insurance claim.',
  },
];

// FAQs
const faqs = [
  {
    question: 'How quickly can you install an emergency roof tarp in Charlotte?',
    answer:
      'We provide 24/7 emergency response and typically arrive within 1-4 hours of your call, depending on storm conditions and demand. During major storm events, we prioritize calls based on severity and work around the clock to help as many homeowners as possible. Call (704) 605-6047 immediately when you discover roof damage.',
  },
  {
    question: 'How much does emergency roof tarping cost in Charlotte NC?',
    answer:
      'Emergency roof tarping in Charlotte typically ranges from $300 to $1,500 depending on the size of the damaged area, roof pitch, and accessibility. Most homeowners insurance policies cover emergency tarping when damage is from a covered event like a storm. We can work directly with your insurance company.',
  },
  {
    question: 'How long will a roof tarp last?',
    answer:
      'A professionally installed roof tarp can provide temporary protection for 30-90 days, depending on weather conditions and tarp quality. We use heavy-duty commercial tarps that can withstand additional rain and moderate winds. However, tarps are a temporary solution - permanent repairs should be made as soon as possible.',
  },
  {
    question: 'Will my insurance cover emergency roof tarping?',
    answer:
      'Yes, most homeowners insurance policies cover emergency tarping when the roof damage is from a covered peril like wind, hail, or fallen trees. Emergency tarping is considered "mitigation" - preventing further damage - which insurers require homeowners to do. We document everything and can assist with your claim.',
  },
  {
    question: 'Can you tarp a roof during a storm?',
    answer:
      'For safety reasons, we cannot work on roofs during active storms with lightning, high winds, or heavy rain. However, we\'ll be ready to deploy the moment conditions become safe. If you call during a storm, we\'ll schedule you for immediate service once it passes and provide guidance on protecting your interior in the meantime.',
  },
  {
    question: 'Do you provide permanent repairs after tarping?',
    answer:
      'Absolutely. Best Roofing Now provides complete roofing services from emergency tarping through permanent repair or replacement. Having one company handle the entire process ensures continuity, proper documentation for insurance, and a seamless experience for you. We\'ll provide a detailed estimate for permanent repairs.',
  },
  {
    question: 'What should I do while waiting for emergency roof tarp service?',
    answer:
      'Move valuable items away from the damaged area, place containers to catch water, and take photos of the damage for insurance purposes. If water is pooling on the ceiling, carefully puncture a small hole to let it drain into a bucket - this prevents ceiling collapse. Do NOT go on the roof yourself.',
  },
  {
    question: 'Do you provide emergency tarping for commercial buildings?',
    answer:
      'Yes, we provide emergency tarping services for both residential and commercial properties in Charlotte. Commercial roofs often require different techniques and larger tarps, which our trained crews are equipped to handle. We understand that business interruption is costly and work to protect your property quickly.',
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

export default function EmergencyTarpServiceCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Emergency Roof Tarp Service Charlotte NC', url: `${SITE_CONFIG.url}/emergency-tarp-service-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.emergency}
            alt="Emergency roof tarp service Charlotte NC - Best Roofing Now 24/7 storm response"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-semibold">24/7 Emergency Response</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Emergency Roof Tarp Service <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Fast Storm Response | Protect Your Home from Water Damage
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              When a storm damages your roof, every minute counts. Best Roofing Now provides 24/7 emergency
              roof tarping to protect your home from further water damage. Our crews are ready to respond
              immediately with professional-grade tarps and proper installation.
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
                Request Emergency Service
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent-light" />
                24/7 Emergency Line
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                1-4 Hour Response
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Insurance Assistance
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Situations Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Emergency Situations We Handle
            </h2>
            <p className="text-gray text-lg">
              Charlotte sees its share of severe weather. When your roof is damaged, we're here to help
              with fast, professional tarping to prevent further damage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencySituations.map((situation) => (
              <div
                key={situation.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <situation.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-dark mb-2">{situation.title}</h3>
                <p className="text-gray text-sm">{situation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Emergency Tarping Process
            </h2>
            <p className="text-gray text-lg">
              Fast, professional service from your first call to complete protection.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tarpingProcess.map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-md h-full">
                  <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-gray text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose Best Roofing Now for Emergency Tarping
              </h2>
              <p className="text-gray text-lg mb-8">
                When your roof is damaged, you need a company that responds fast, does quality work,
                and can handle the entire repair process. Best Roofing Now provides complete storm
                response from initial tarping through permanent repairs.
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
                alt="Best Roofing Now emergency roof tarp service - protecting Charlotte homes after storm damage"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-dark">24/7 Emergency</p>
                    <p className="text-sm text-gray">Always Available</p>
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
                Roof Damaged? Call Now for Emergency Tarping
              </h2>
              <p className="text-white/90">
                Don't wait - water damage spreads fast. Our crews are standing by 24/7.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-accent"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
              <Button
                href="/contact"
                className="bg-white !text-accent hover:bg-white/90"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Request Service
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
              Emergency Tarping Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              We respond to roof emergencies across the Greater Charlotte metro area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Neighborhoods */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {charlotteNeighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {neighborhood}
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
                Emergency Tarp Service FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about emergency roof tarping in Charlotte.
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
        title="Storm Damage? Get Emergency Help Now"
        subtitle="Our 24/7 emergency crews are ready to protect your home with professional roof tarping. Don't wait - call now to prevent water damage."
      />
    </>
  );
}
