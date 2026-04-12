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
  Search,
  MapPin,
  AlertTriangle,
  CloudRain,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Emergency Roof Repair Sherrills Ford',
  description:
    'Need emergency roof repair in Sherrills Ford NC? Best Roofing Now provides 24/7 emergency roofing services for Lake Norman homes. Storm damage, active leaks, fallen trees. BBB A+ rated, veteran-owned. Call now: (704) 605-6047!',
  keywords: [
    'emergency roof repair sherrills ford nc',
    'emergency roofer sherrills ford',
    '24/7 roof repair sherrills ford',
    'storm damage roof repair sherrills ford',
    'emergency roof leak sherrills ford nc',
    'lake norman emergency roofer',
    'catawba county emergency roofing',
    'urgent roof repair sherrills ford',
    'roof emergency sherrills ford nc',
    'after hours roof repair sherrills ford',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/emergency-roof-repair-sherrills-ford-nc`,
  },
  openGraph: {
    title: 'Emergency Roof Repair Sherrills Ford NC | 24/7 Service | Best Roofing Now',
    description:
      '24/7 emergency roof repair in Sherrills Ford NC. Fast response for storm damage, active leaks, and fallen trees on Lake Norman homes. Call (704) 605-6047!',
    url: `${SITE_CONFIG.url}/emergency-roof-repair-sherrills-ford-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.emergency,
        width: 1200,
        height: 630,
        alt: 'Emergency roof repair services in Sherrills Ford NC - Best Roofing Now',
      },
    ],
  },
};

// Emergency services
const emergencyServices = [
  {
    icon: CloudRain,
    title: 'Storm Damage Response',
    description: 'Rapid response for wind, hail, and severe storm damage on Lake Norman waterfront homes.',
    href: '/services/storm-damage',
  },
  {
    icon: AlertTriangle,
    title: 'Active Leak Repair',
    description: 'Emergency tarping and leak repair to stop water intrusion before it causes further damage.',
    href: '/services/emergency-roofing',
  },
  {
    icon: Home,
    title: 'Fallen Tree Damage',
    description: 'Emergency response when trees or large branches damage your Sherrills Ford roof.',
    href: '/services/emergency-roofing',
  },
  {
    icon: Wrench,
    title: 'Emergency Tarping',
    description: 'Professional tarping to protect your home from additional water damage until permanent repairs.',
    href: '/services/emergency-roofing',
  },
  {
    icon: Shield,
    title: 'Insurance Documentation',
    description: 'Thorough damage documentation and photos to support your insurance claim from day one.',
    href: '/services/storm-damage',
  },
  {
    icon: Search,
    title: 'Damage Assessment',
    description: 'Comprehensive emergency inspection to identify all damage, visible and hidden.',
    href: '/services/roof-inspection',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Clock,
    title: '24/7 Response',
    description: 'Available around the clock for roof emergencies in Sherrills Ford and Lake Norman.',
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied homeowners.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Military training means we respond with urgency and precision when you need us most.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability insurance.',
  },
  {
    icon: Users,
    title: 'Insurance Experts',
    description: 'We navigate the claims process so you can focus on your family during emergencies.',
  },
];

// Sherrills Ford area communities
const localAreas = [
  'Sherrills Ford',
  'Lake Norman Waterfront',
  'Catawba County',
  'Terrell',
  'Claremont',
  'Maiden',
  'Conover',
  'Newton',
  'Hickory',
  'Denver',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Denver', href: '/roofing-denver-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Hickory', href: '/locations/hickory-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
];

// FAQs
const faqs = [
  {
    question: 'Do you offer 24/7 emergency roof repair in Sherrills Ford?',
    answer:
      'Yes! Best Roofing Now provides 24/7 emergency roofing services throughout Sherrills Ford and the Lake Norman area. Whether it\'s 2 AM or a holiday, our emergency team is ready to respond when your roof is compromised. Call (704) 605-6047 anytime for immediate help.',
  },
  {
    question: 'How quickly can you respond to a roof emergency in Sherrills Ford?',
    answer:
      'We typically respond to emergency calls in the Sherrills Ford and Lake Norman area within 1-4 hours. For active leaks and dangerous situations, we prioritize the fastest possible response. Our first goal is always to secure your property and prevent further damage.',
  },
  {
    question: 'What should I do if a tree falls on my roof in Sherrills Ford?',
    answer:
      'First, ensure everyone in your home is safe and evacuate if necessary. Do not attempt to remove the tree yourself. Call us at (704) 605-6047 for emergency response. Then contact your insurance company to open a claim. We\'ll handle the tree removal, tarping, and permanent repairs.',
  },
  {
    question: 'Will my insurance cover emergency roof repair in Sherrills Ford?',
    answer:
      'Most homeowner\'s insurance policies cover emergency roof repairs caused by storms, fallen trees, hail, and wind damage. We document all damage thoroughly and work directly with your insurance company throughout the claims process. Emergency tarping is typically covered as part of mitigation.',
  },
  {
    question: 'What does emergency roof tarping cost in Sherrills Ford?',
    answer:
      'Emergency tarping typically costs $200-$800 depending on the extent of damage and accessibility of your roof. This is a temporary measure to prevent further water damage until permanent repairs can be completed. Insurance usually covers tarping costs as part of damage mitigation.',
  },
  {
    question: 'What types of roof emergencies do you handle?',
    answer:
      'We handle all roof emergencies including active leaks, storm damage (wind, hail, tornado), fallen trees and branches, fire damage, ice dam damage, and structural failures. If your roof is compromised, we can help. No emergency is too large or too small for our team.',
  },
  {
    question: 'Do Lake Norman storms cause more roof emergencies than other areas?',
    answer:
      'Lake Norman\'s open water creates unique wind patterns that can amplify storm damage, especially for waterfront homes in Sherrills Ford on the western shore. The combination of higher winds, wind-driven rain, and occasional hail makes this area more susceptible to roof emergencies. Regular maintenance and quality materials help minimize risk.',
  },
];

export default function EmergencyRoofRepairSherrillsFordNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Emergency Roof Repair Sherrills Ford NC', url: `${SITE_CONFIG.url}/emergency-roof-repair-sherrills-ford-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/emergency-roof-repair-sherrills-ford-nc`}
        pageName="Emergency Roof Repair Sherrills Ford NC"
        city="Sherrills Ford"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.emergency}
            alt="Emergency roof repair in Sherrills Ford NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-red-500/80 rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-semibold">24/7 Emergency Response</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Emergency Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Sherrills Ford NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              24/7 emergency roofing for Lake Norman homes when you need it most
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              When storm damage, fallen trees, or active leaks threaten your Sherrills Ford home, Best Roofing Now
              responds fast. Our emergency team is available 24/7 to secure your property, prevent further damage,
              and start the repair process immediately. Don&apos;t wait - call now.
            </p>

            {/* CTA Buttons */}
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

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-400" />
                1-4 Hour Response Time
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
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
              Emergency Roofing Services in Sherrills Ford
            </h2>
            <p className="text-gray text-lg">
              From storm damage to fallen trees, our emergency team handles every roofing crisis
              with speed and professionalism to protect your Lake Norman home.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyServices.map((service) => (
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
                Why Sherrills Ford Calls Best Roofing Now in Emergencies
              </h2>
              <p className="text-gray text-lg mb-8">
                When your roof is compromised, every minute counts. Our veteran-owned team responds with
                military-grade urgency and precision, securing your property and guiding you through
                the insurance process.
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
                src={IMAGES.realProjects.drone1}
                alt="Best Roofing Now - Emergency roof repair in Sherrills Ford NC"
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
                Roof Emergency in Sherrills Ford? Call Now.
              </h2>
              <p className="text-white/90">
                Our 24/7 emergency team responds fast to protect your Lake Norman home.
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
                Request Emergency Service
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
              Emergency Roofing Throughout Sherrills Ford & Lake Norman
            </h2>
            <p className="text-gray text-lg">
              Our emergency roofing team serves homeowners throughout Sherrills Ford, Catawba County, and Lake Norman.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Sherrills Ford Area Communities</h3>
              <div className="flex flex-wrap gap-2">
                {localAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

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
                Emergency Roof Repair FAQs for Sherrills Ford
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about emergency roofing services in Sherrills Ford NC.
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
        city="Denver"
        slug="emergency-roof-repair-sherrills-ford-nc"
      />

      <CityGeoSection
        city="Sherrills Ford"
        state="NC"
        citySlug="sherrills-ford-nc"
        service="Emergency Roof Repair"
      />

      <CTASection
        title="Roof Emergency? We're Here 24/7 for Sherrills Ford"
        subtitle="Don't wait when your roof is compromised. Call our emergency team now for fast, professional response to protect your Lake Norman home."
      />
    </>
  );
}
