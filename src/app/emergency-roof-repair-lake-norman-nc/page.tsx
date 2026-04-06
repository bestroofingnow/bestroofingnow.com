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
  MapPin,
  Wind,
  AlertTriangle,
  Zap,
  TreePine,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Emergency Roof Repair Lake Norman NC | 24/7 Service | Best Roofing Now',
  description:
    'Emergency roof repair across Lake Norman NC. 24/7 response for storm damage, fallen trees, active leaks, and emergency tarping. Serving Mooresville, Cornelius, Davidson & Denver. Call now!',
  keywords: [
    'emergency roof repair lake norman nc',
    '24/7 roofer lake norman',
    'emergency tarping lake norman',
    'urgent roof repair mooresville nc',
    'emergency roofer cornelius nc',
    'after hours roof repair lake norman',
    'emergency roof leak lake norman nc',
    'storm emergency roofer lake norman',
    'tree fell on roof lake norman',
    'emergency roofing service lake norman',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/emergency-roof-repair-lake-norman-nc`,
  },
  openGraph: {
    title: 'Emergency Roof Repair Lake Norman NC | 24/7 Service | Best Roofing Now',
    description:
      '24/7 emergency roof repair across Lake Norman NC. Storm damage, fallen trees, active leaks, and emergency tarping. Serving Mooresville, Cornelius, Davidson, Denver & Huntersville.',
    url: `${SITE_CONFIG.url}/emergency-roof-repair-lake-norman-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero13,
        width: 1200,
        height: 630,
        alt: 'Emergency roof repair services across the Lake Norman NC area - Best Roofing Now',
      },
    ],
  },
};

const emergencyServices = [
  {
    icon: Shield,
    title: 'Emergency Tarping',
    description: 'Immediate roof tarping to stop water intrusion and protect your Lake Norman home until permanent repairs can be made.',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Response',
    description: 'Rapid response after severe storms that sweep across Lake Norman, addressing hail, wind, and debris damage.',
  },
  {
    icon: TreePine,
    title: 'Tree & Debris Removal',
    description: 'Safe removal of fallen trees and storm debris from your roof, plus structural assessment and repair of impact damage.',
  },
  {
    icon: AlertTriangle,
    title: 'Active Leak Repair',
    description: 'Urgent repair of active roof leaks that threaten interior damage to ceilings, walls, and personal property.',
  },
  {
    icon: Wind,
    title: 'Wind Damage Repair',
    description: 'Fast repair of wind-lifted, torn, or missing shingles to secure your roof before the next round of weather arrives.',
  },
  {
    icon: Zap,
    title: 'Structural Stabilization',
    description: 'Emergency stabilization of compromised roof decking, rafters, and trusses after severe impact or collapse events.',
  },
];

const responseTimeline = [
  {
    time: '0-30 min',
    title: 'Your Emergency Call',
    description: 'Call (704) 605-6047 any time, day or night. Our emergency dispatcher assesses the situation and mobilizes the nearest crew.',
  },
  {
    time: '1-4 hrs',
    title: 'On-Site Response',
    description: 'Our emergency crew arrives at your Lake Norman home to assess the damage and begin immediate protective measures.',
  },
  {
    time: 'Same Day',
    title: 'Emergency Repairs',
    description: 'We perform tarping, debris removal, and critical repairs to secure your home and prevent further damage.',
  },
  {
    time: '1-5 days',
    title: 'Permanent Restoration',
    description: 'Once conditions allow, we complete full permanent repairs or replacement with premium materials and warranties.',
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
    question: 'How fast can you respond to a roof emergency in Lake Norman?',
    answer:
      'Our emergency crews can typically reach any Lake Norman community within 1-4 hours, depending on weather conditions and location. We maintain crews positioned across the LKN area to ensure the fastest possible response for Mooresville, Cornelius, Davidson, Denver, Huntersville, and surrounding communities. Call (704) 605-6047 for immediate dispatch.',
  },
  {
    question: 'Do you provide 24/7 emergency roof repair in Lake Norman NC?',
    answer:
      'Yes. Best Roofing Now provides true 24/7 emergency roof repair service across the entire Lake Norman region. Whether your emergency happens at 2 AM during a thunderstorm or on a holiday weekend, our emergency line at (704) 605-6047 is always answered by a real person who can dispatch a crew.',
  },
  {
    question: 'What should I do if a tree falls on my roof in Lake Norman?',
    answer:
      'First, ensure everyone in the home is safe and evacuate if there is structural concern. Do not attempt to remove the tree yourself. Call us immediately at (704) 605-6047. Our crew will safely remove the tree, tarp any openings, assess structural damage, and coordinate with your insurance company for the full repair.',
  },
  {
    question: 'How much does emergency roof repair cost in Lake Norman?',
    answer:
      'Emergency tarping typically costs $300-$800 depending on the area to be covered. Full emergency repairs vary based on damage extent, ranging from $500 for minor urgent fixes to several thousand for major storm damage. Many emergency repairs are covered by homeowners insurance. We provide transparent pricing before starting any work.',
  },
  {
    question: 'Will my insurance cover emergency roof repair in Lake Norman?',
    answer:
      'Most homeowners insurance policies cover emergency roof repairs resulting from storms, fallen trees, and other sudden events. We document everything for your insurance claim and work directly with your adjuster. Emergency tarping is typically covered as a loss mitigation measure that prevents further damage to your home.',
  },
  {
    question: 'What qualifies as a roof emergency in Lake Norman?',
    answer:
      'A roof emergency is any situation where your roof has been compromised and your home is at risk of water damage or structural failure. This includes active leaks during rain, missing sections of roofing after storms, fallen trees on the roof, visible holes or punctures, and any situation where interior water damage is occurring or imminent.',
  },
];

export default function EmergencyRoofRepairLakeNormanNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Emergency Roof Repair Lake Norman NC', url: `${SITE_CONFIG.url}/emergency-roof-repair-lake-norman-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/emergency-roof-repair-lake-norman-nc`}
        pageName="Emergency Roof Repair Lake Norman NC"
        city="Lake Norman"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'Who provides emergency roof repair in Lake Norman NC?',
            answer: 'Best Roofing Now provides 24/7 emergency roof repair across Lake Norman NC with 1-4 hour response times. They serve Mooresville, Cornelius, Davidson, Denver, and Huntersville with emergency tarping, storm damage repair, and tree removal.',
            speakableAnswer: 'Best Roofing Now provides 24/7 emergency roof repair across Lake Norman NC. Call 704-605-6047.',
          },
          {
            question: 'How fast can an emergency roofer get to Lake Norman?',
            answer: 'Best Roofing Now can respond to roof emergencies across Lake Norman within 1-4 hours. They maintain crews positioned across the LKN area and are available 24/7 including nights, weekends, and holidays.',
            speakableAnswer: 'Best Roofing Now responds to Lake Norman roof emergencies within 1 to 4 hours. Call 704-605-6047.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero13}
            alt="Emergency roof repair services across the Lake Norman NC area"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-red-500/80 rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">24/7 Emergency Service</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Emergency Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Lake Norman NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              24/7 emergency response across the entire Lake Norman region
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              When a roof emergency strikes your Lake Norman home, every minute counts. Best Roofing Now
              provides 24/7 emergency roof repair with 1-4 hour response times across Mooresville, Cornelius,
              Davidson, Denver, and Huntersville. Storm damage, fallen trees, active leaks -- our emergency
              crews are ready to protect your home day or night.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="primary"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call Now: {SITE_CONFIG.phone}
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

            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-400" />
                1-4 Hour Response Time
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Emergency Roofing Services We Provide
            </h2>
            <p className="text-gray text-lg">
              Our emergency crews are equipped to handle every type of roof emergency across the Lake Norman area.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyServices.map((service) => (
              <div
                key={service.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{service.title}</h3>
                <p className="text-gray text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Timeline */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Emergency Response Timeline
            </h2>
            <p className="text-gray text-lg">
              From your first call to permanent repair, here is what to expect when you contact
              Best Roofing Now for a Lake Norman roof emergency.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responseTimeline.map((step) => (
              <div key={step.time} className="bg-white rounded-xl p-6 shadow-md">
                <div className="inline-block bg-primary/10 text-primary font-bold px-3 py-1 rounded-full text-sm mb-4">
                  {step.time}
                </div>
                <h3 className="font-bold text-dark mb-2">{step.title}</h3>
                <p className="text-gray text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgent CTA */}
      <section className="bg-red-600 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Roof Emergency Right Now?
              </h2>
              <p className="text-white/90">
                Do not wait. Call our 24/7 emergency line for immediate dispatch to your Lake Norman home.
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
                Request Emergency Service
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* When to Call */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                When to Call for Emergency Roof Repair
              </h2>
              <p className="text-gray text-lg mb-8">
                Not sure if your situation qualifies as a roof emergency? If any of these apply,
                call us immediately at {SITE_CONFIG.phone}.
              </p>
              <div className="space-y-4">
                {[
                  'Water is actively leaking into your home',
                  'A tree or large branch has fallen on your roof',
                  'Large sections of shingles are missing after a storm',
                  'You can see daylight through your roof from inside',
                  'Your roof deck is sagging or appears structurally compromised',
                  'Storm debris has punctured or torn your roof',
                  'Ceiling drywall is bulging from water accumulation',
                  'Flashing has separated and water is entering around chimneys or vents',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.project15}
                alt="Emergency roof repair project near Lake Norman NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-bold text-dark">1-4 Hour Response</p>
                    <p className="text-sm text-gray">24/7 Emergency Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LKN Communities */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Emergency Coverage Area</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              24/7 Emergency Service Across Lake Norman
            </h2>
            <p className="text-gray text-lg">
              Our emergency crews cover every community around the lake, day and night.
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
                Emergency Roof Repair FAQs for Lake Norman NC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about emergency roofing services across the Lake Norman area.
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

      <GeoProjectGalleryStrip
        pageType="location"
        city="Mooresville"
        slug="emergency-roof-repair-lake-norman-nc"
      />

      <CityGeoSection
        city="Lake Norman"
        state="NC"
        citySlug="lake-norman"
        service="Emergency Roof Repair"
      />

      <CTASection
        title="Roof Emergency? Call Now for Immediate Help."
        subtitle="Best Roofing Now provides 24/7 emergency roof repair across the entire Lake Norman region. Our crews respond within 1-4 hours to protect your home from further damage."
      />
    </>
  );
}
