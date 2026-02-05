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
  AlertTriangle,
  Zap,
  PhoneCall,
  TreePine,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Emergency Roof Repair Huntersville',
  description:
    '24/7 emergency roof repair in Huntersville NC. Fast response for storm damage, active leaks, fallen trees, and urgent repairs. BBB A+ rated, veteran-owned. Call now for immediate help!',
  keywords: [
    'emergency roof repair Huntersville NC',
    '24 hour roofer Huntersville',
    'emergency roofer Huntersville NC',
    'storm damage repair Huntersville',
    'roof leak emergency Huntersville',
    'urgent roof repair Huntersville NC',
    '24/7 roofing Huntersville',
    'emergency tarping Huntersville',
    'tree fell on roof Huntersville',
    'hail damage repair Huntersville NC',
    'after hours roofer Huntersville',
    'emergency roofing near me Huntersville',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/emergency-roof-repair-huntersville-nc`,
  },
  openGraph: {
    title: 'Emergency Roof Repair Huntersville NC | 24/7 Service | Best Roofing Now',
    description:
      '24/7 emergency roof repair in Huntersville NC. Fast response for storm damage, active leaks, and urgent repairs. BBB A+ rated, veteran-owned. Call now!',
    url: `${SITE_CONFIG.url}/emergency-roof-repair-huntersville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.emergency,
        width: 1200,
        height: 630,
        alt: 'Emergency roof repair services in Huntersville NC - Best Roofing Now',
      },
    ],
  },
};

// Emergency services offered
const emergencyServices = [
  {
    icon: AlertTriangle,
    title: 'Storm Damage Response',
    description: 'Immediate response for wind, hail, and severe weather damage to protect your Huntersville home.',
    href: '/services/storm-damage',
  },
  {
    icon: CloudRain,
    title: 'Active Leak Repair',
    description: 'Fast repair for active roof leaks to prevent water damage to your home and belongings.',
    href: '/services/roof-repair',
  },
  {
    icon: TreePine,
    title: 'Fallen Tree/Debris',
    description: 'Emergency removal of trees and debris and immediate roof protection and repair.',
    href: '/services/emergency-roofing',
  },
  {
    icon: Shield,
    title: 'Emergency Tarping',
    description: 'Temporary tarping to protect your home until permanent repairs can be completed.',
    href: '/services/emergency-roofing',
  },
  {
    icon: Wrench,
    title: 'Urgent Repairs',
    description: 'Same-day repairs for missing shingles, exposed decking, and other urgent issues.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Insurance Documentation',
    description: 'Thorough documentation and photos for insurance claims after emergency events.',
    href: '/services/storm-damage',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock emergency response when you need us most - nights, weekends, and holidays.',
  },
  {
    icon: Zap,
    title: 'Fast Response',
    description: 'We respond to emergencies within 1-4 hours in the Huntersville area.',
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned with military values of integrity and rapid response.',
  },
  {
    icon: Users,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC contractor with comprehensive liability coverage.',
  },
  {
    icon: Star,
    title: '5-Star Service',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star reviews from Huntersville homeowners.`,
  },
];

// Huntersville areas served
const huntersvilleAreas = [
  'Downtown Huntersville',
  'Birkdale Village',
  'Rosedale',
  'Vermillion',
  'Skybrook',
  'Bryton',
  'Cedarfield',
  'Northstone',
  'The Palisades',
  'Highland Creek',
  'Gilead Ridge',
  'Beckett',
  'Wynfield Creek',
  'Bradford',
  'Summers Walk',
  'Lake Norman Area',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Cornelius', href: '/roof-repair-cornelius-nc' },
  { name: 'Davidson', href: '/roof-replacement-davidson-nc' },
  { name: 'Mooresville', href: '/commercial-roofing-mooresville-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Lake Norman Area', href: '/locations/lake-norman' },
];

// FAQs about emergency roof repair in Huntersville
const faqs = [
  {
    question: 'How quickly can you respond to a roof emergency in Huntersville?',
    answer:
      'Our emergency team typically responds within 1-4 hours for urgent situations in Huntersville. For active leaks, storm damage, or safety hazards, we prioritize getting to your home as quickly as possible. Call us 24/7 at (704) 605-6047 for immediate assistance.',
  },
  {
    question: 'Do you provide 24/7 emergency roofing service in Huntersville?',
    answer:
      'Yes! Best Roofing Now offers true 24/7 emergency roofing services in Huntersville and throughout the Lake Norman area. Whether it\'s 2 AM on a Sunday or during a holiday, we\'re available when you need us most. Our after-hours line is always staffed.',
  },
  {
    question: 'What should I do if a tree falls on my roof in Huntersville?',
    answer:
      'First, ensure everyone in your home is safe and evacuate if necessary. Do not attempt to remove the tree yourself. Call us immediately at (704) 605-6047 - we\'ll dispatch our emergency team to secure your home, safely remove the debris, and tarp exposed areas to prevent further damage while coordinating permanent repairs.',
  },
  {
    question: 'How much does emergency roof repair cost in Huntersville?',
    answer:
      'Emergency roof repair costs vary based on the type and extent of damage. Emergency tarping typically ranges from $300-$800. Temporary repairs to stop active leaks usually cost $200-$500. More extensive emergency repairs range from $500-$2,000+. We provide upfront pricing before any work begins.',
  },
  {
    question: 'Will you help with my insurance claim for storm damage in Huntersville?',
    answer:
      'Absolutely! We have extensive experience with storm damage insurance claims in the Huntersville area. We document all damage with photos and detailed reports, meet with your insurance adjuster, and advocate for fair settlements. Many Huntersville homes have qualified for full roof replacement after storm events.',
  },
  {
    question: 'What counts as a roofing emergency?',
    answer:
      'Roofing emergencies include: active leaks allowing water into your home, storm damage with exposed roof decking, fallen trees or large debris on your roof, missing large sections of shingles after storms, structural damage compromising your roof\'s integrity, and any damage that poses a safety risk. If in doubt, call us - we\'ll help assess your situation.',
  },
  {
    question: 'Can you do permanent repairs during an emergency call?',
    answer:
      'It depends on the damage and conditions. For minor damage, we can often complete permanent repairs during the emergency visit. For major damage requiring materials or extensive work, we typically perform emergency tarping and temporary repairs first to protect your home, then schedule permanent repairs within 1-7 days depending on material availability.',
  },
  {
    question: 'What areas of Huntersville do you cover for emergency service?',
    answer:
      'We provide emergency roofing services throughout all of Huntersville including Birkdale Village, Rosedale, Vermillion, Skybrook, The Palisades, Highland Creek, and all surrounding neighborhoods. We also cover nearby communities including Cornelius, Davidson, Mooresville, and Charlotte.',
  },
];

export default function EmergencyRoofRepairHuntersvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Emergency Roof Repair Huntersville NC', url: `${SITE_CONFIG.url}/emergency-roof-repair-huntersville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/emergency-roof-repair-huntersville-nc`}
        pageName="Emergency Roof Repair Huntersville NC"
        city="Huntersville"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent via-accent to-red-700 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.emergency}
            alt="Emergency roof repair services in Huntersville NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-4 animate-pulse">
              <PhoneCall className="w-4 h-4" />
              <span className="text-sm font-bold">24/7 Emergency Service Available Now</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Emergency Roof Repair <br className="hidden md:block" />
              <span className="text-yellow-300">Huntersville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Fast response for storm damage, leaks & urgent repairs - 24/7
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Roof emergency? Don't wait! Best Roofing Now provides immediate emergency roofing services
              throughout Huntersville. From active leaks to storm damage, our team responds quickly to
              protect your home and family. Available 24 hours a day, 7 days a week.
            </p>

            {/* Emergency CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-accent hover:bg-yellow-300 hover:!text-accent-dark animate-pulse"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call Now: {SITE_CONFIG.phone}
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-accent"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Request Emergency Service
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-300" />
                1-4 Hour Response Time
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-yellow-300" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-300" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Emergency Roofing Services in Huntersville NC
            </h2>
            <p className="text-gray text-lg">
              When disaster strikes, our emergency team is ready to protect your home with fast,
              professional response to any roofing emergency.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-dark mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray text-sm mb-3">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-accent font-semibold text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Urgent CTA */}
      <section className="bg-accent text-white py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <AlertTriangle className="w-8 h-8 text-yellow-300 animate-pulse" />
            <div>
              <p className="text-xl font-bold text-white">Have a Roof Emergency Right Now?</p>
              <p className="text-white/90">Don't wait - call us immediately for fast response.</p>
            </div>
            <Button
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="bg-white !text-accent hover:bg-yellow-300 whitespace-nowrap"
              size="lg"
              icon={<Phone className="w-5 h-5" aria-hidden="true" />}
            >
              {SITE_CONFIG.phone}
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Huntersville Trusts Us for Emergency Roofing
              </h2>
              <p className="text-gray text-lg mb-8">
                When your roof is compromised, you need a team that responds fast with the skills and
                equipment to handle any emergency. Best Roofing Now has the experience and dedication
                to protect Huntersville homes around the clock.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
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
                alt="Best Roofing Now - Emergency roof repair team serving Huntersville NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-accent" />
                  <div>
                    <p className="font-bold text-dark">24/7 Emergency</p>
                    <p className="text-sm text-gray">1-4 Hour Response</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What To Do Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What To Do in a Roof Emergency
            </h2>
            <p className="text-gray text-lg">
              Follow these steps if you experience roof damage in Huntersville.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="font-bold text-dark mb-2">Ensure Safety</h3>
              <p className="text-gray text-sm">
                Evacuate if necessary. Stay away from damaged areas and downed power lines.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="font-bold text-dark mb-2">Prevent Further Damage</h3>
              <p className="text-gray text-sm">
                If safe, place buckets under leaks and move valuables away from affected areas.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="font-bold text-dark mb-2">Document Damage</h3>
              <p className="text-gray text-sm">
                Take photos and videos of all damage from safe locations for insurance purposes.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                4
              </div>
              <h3 className="font-bold text-dark mb-2">Call Best Roofing Now</h3>
              <p className="text-gray text-sm">
                Call (704) 605-6047 for immediate 24/7 emergency response in Huntersville.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Emergency Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              24/7 Emergency Coverage in Huntersville & Beyond
            </h2>
            <p className="text-gray text-lg">
              We provide emergency roofing services throughout Huntersville and the surrounding Lake Norman communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Huntersville Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Huntersville Areas We Cover</h3>
              <div className="flex flex-wrap gap-2">
                {huntersvilleAreas.map((area) => (
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
                    className="flex items-center gap-2 text-gray hover:text-accent transition-colors"
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

      {/* Common Emergencies Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Common Roofing Emergencies in Huntersville
            </h2>
            <p className="text-gray text-lg">
              Huntersville's weather patterns create unique roofing challenges. We're ready for any emergency.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">Severe Storm Damage</h3>
              <p className="text-gray text-sm">
                Huntersville averages 25+ severe thunderstorm days per year. Our team responds immediately
                to wind damage, hail damage, and lightning strikes.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">Active Roof Leaks</h3>
              <p className="text-gray text-sm">
                Water entering your home can cause thousands in damage within hours. We stop active leaks
                fast to protect your home and belongings.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">Fallen Trees & Debris</h3>
              <p className="text-gray text-sm">
                Tree limbs and debris can puncture roofs during storms. We safely remove debris, tarp
                exposed areas, and complete permanent repairs.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">Wind-Damaged Shingles</h3>
              <p className="text-gray text-sm">
                High winds can tear away shingles and expose your roof decking. We respond quickly to
                secure your roof before water damage occurs.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">Hail Damage</h3>
              <p className="text-gray text-sm">
                Hail can compromise shingle integrity and create hidden damage. We provide thorough
                inspections and help with insurance claims.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">Flashing Failures</h3>
              <p className="text-gray text-sm">
                Failed flashing around chimneys and vents can cause sudden leaks. We repair or replace
                flashing to stop water intrusion immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Emergency FAQs</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Emergency Roof Repair FAQs for Huntersville
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about emergency roofing services in Huntersville NC.
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

      <GeoProjectGalleryStrip pageType="location" city="Huntersville" slug="emergency-roof-repair-huntersville-nc" />

      <CityGeoSection
        city="Huntersville"
        state="NC"
        citySlug="huntersville-nc"
        service="Emergency Roof Repair"
      />

      {/* Final Emergency CTA */}
      <section className="bg-accent text-white py-16">
        <div className="container text-center">
          <AlertTriangle className="w-16 h-16 text-yellow-300 mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Roof Emergency in Huntersville?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't wait for the damage to get worse. Our emergency team is standing by 24/7 to protect your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="bg-white !text-accent hover:bg-yellow-300 text-lg px-8"
              size="lg"
              icon={<Phone className="w-6 h-6" aria-hidden="true" />}
            >
              Call Now: {SITE_CONFIG.phone}
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-accent text-lg px-8"
              icon={<Calendar className="w-6 h-6" aria-hidden="true" />}
            >
              Request Service Online
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
