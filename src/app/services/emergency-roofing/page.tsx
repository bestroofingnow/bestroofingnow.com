import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Clock,
  Shield,
  CloudRain,
  Droplets,
  Zap,
  MapPin,
  FileText,
  Camera,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { FAQ } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTASection';
import {
  FAQSchema,
  BreadcrumbSchema,
  WebPageSchema,
  HeroImageSchema,
  GallerySchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DirectoryCitations } from '@/components/ui/DirectoryCitations';
import { SITE_CONFIG, LOCATIONS } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { EstimateButton } from '@/components/estimate';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

// Emergency-specific metadata optimized for 24/7 keywords
export const metadata: Metadata = {
  title: '24/7 Emergency Roof Repair Charlotte NC | 30-Min Response Time',
  description:
    '24/7 emergency roof repair in Charlotte NC. 30-minute response time for active leaks, storm damage & urgent repairs. Call (704) 605-6047 now for immediate help. Available nights, weekends & holidays.',
  keywords: [
    '24/7 emergency roof repair Charlotte NC',
    'emergency roofer near me',
    '24 hour roof repair Charlotte',
    'emergency roof tarping Charlotte',
    'urgent roof leak repair',
    'storm damage roof repair Charlotte',
    'emergency roofing contractor Charlotte NC',
    'after hours roof repair',
    'weekend roof repair Charlotte',
    'emergency roof leak Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/services/emergency-roofing`,
  },
  openGraph: {
    title: '24/7 Emergency Roof Repair Charlotte NC | 30-Minute Response',
    description:
      'Roof emergency? Call now for 24/7 emergency roof repair in Charlotte. 30-minute response for storm damage, leaks & urgent repairs. (704) 605-6047',
    url: `${SITE_CONFIG.url}/services/emergency-roofing`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.emergency,
        width: 1200,
        height: 630,
        alt: '24/7 Emergency Roof Repair Charlotte NC - Best Roofing Now',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '24/7 Emergency Roof Repair Charlotte NC | 30-Min Response',
    description:
      'Roof emergency? Call (704) 605-6047 for 24/7 emergency roof repair in Charlotte. 30-minute response time.',
    images: [IMAGES.services.emergency],
  },
};

// Emergency service FAQs optimized for search
const emergencyFAQs = [
  {
    question: 'What is your response time for emergency roof repairs in Charlotte?',
    answer:
      'Our average response time is 30 minutes for emergency roof repairs in the Charlotte metro area. We dispatch crews 24/7, including nights, weekends, and holidays. For active leaks during storms, we arrive as quickly as safely possible to prevent further damage to your home.',
  },
  {
    question: 'What qualifies as a 24/7 roofing emergency?',
    answer:
      'Roofing emergencies include: active roof leaks during rain, storm damage with exposed decking or insulation, fallen trees on your roof, significant structural damage, fire damage to roofing, missing shingles exposing underlayment, and any situation where delay could cause additional interior water damage. When in doubt, call us - we\'ll help you assess the urgency.',
  },
  {
    question: 'Do you provide emergency roof tarping services?',
    answer:
      'Yes, emergency roof tarping is our most common immediate service. We arrive with professional-grade tarps and secure them properly to prevent water intrusion until permanent repairs can be made. Our tarps are industrial-strength and can protect your home through multiple storms if needed.',
  },
  {
    question: 'How much does emergency roof repair cost in Charlotte?',
    answer:
      'Emergency tarping and temporary repairs typically range from $300-$1,000 depending on roof accessibility and damage extent. Permanent repairs vary based on damage severity. Many emergency repairs are covered by homeowner\'s insurance for storm damage. We provide clear pricing before any work begins.',
  },
  {
    question: 'Do you charge extra for nights, weekends, or holiday emergency calls?',
    answer:
      'We maintain fair emergency rates 24/7. While emergency service involves some additional cost compared to scheduled repairs, we don\'t price-gouge during disasters. Our emergency service fee is clearly communicated upfront, and we believe protecting your home should be affordable when you need it most.',
  },
  {
    question: 'What areas do you cover for 24/7 emergency roofing?',
    answer:
      'Our 24/7 emergency roofing service covers the entire Charlotte metro area within 50 miles, including Charlotte, Huntersville, Cornelius, Davidson, Matthews, Mint Hill, Concord, Gastonia, Mooresville, Lake Norman, Fort Mill SC, Rock Hill SC, and all surrounding communities. Distance doesn\'t prevent us from responding to emergencies.',
  },
  {
    question: 'Will you help with my insurance claim for emergency roof damage?',
    answer:
      'Absolutely. We document all emergency damage thoroughly with photos, measurements, and written reports specifically for insurance purposes. We work directly with adjusters, meet them on-site when needed, and advocate for fair settlements. Our documentation has helped thousands of Charlotte homeowners receive proper compensation.',
  },
  {
    question: 'What should I do while waiting for emergency roof repair?',
    answer:
      'While waiting for our crew: 1) Place buckets under active leaks, 2) Move furniture and valuables away from water, 3) Take photos and videos of damage for insurance, 4) Turn off electricity to affected areas if water is near electrical fixtures, 5) Stay off the roof yourself - it\'s dangerous. Our team will handle everything safely upon arrival.',
  },
  {
    question: 'Can you repair my roof during a storm?',
    answer:
      'For safety reasons, we cannot work on roofs during active lightning or severe weather. However, we can perform emergency tarping and interior protection during rain once lightning has passed. We\'ll arrive during the storm to assess and prepare, then complete exterior work as soon as conditions are safe.',
  },
  {
    question: 'Do you provide permanent repairs or just temporary fixes?',
    answer:
      'Our emergency service includes both immediate protection (tarping, temporary patches) and scheduling permanent repairs. We never leave you with just a tarp - we follow through with complete restoration. Emergency response stops the damage; permanent repair restores your roof to pre-damage condition.',
  },
];

// Emergency services list
const emergencyServices = [
  {
    icon: CloudRain,
    title: 'Emergency Roof Tarping',
    description:
      'Industrial-grade tarps properly secured to prevent water intrusion until permanent repairs.',
  },
  {
    icon: Droplets,
    title: 'Active Leak Repair',
    description:
      'Immediate response to stop active roof leaks and prevent interior water damage.',
  },
  {
    icon: AlertTriangle,
    title: 'Storm Damage Response',
    description:
      'Rapid assessment and emergency repairs for hail, wind, and severe storm damage.',
  },
  {
    icon: Zap,
    title: 'Fallen Tree Removal',
    description:
      'Safe removal of trees and debris from your roof with immediate protective repairs.',
  },
  {
    icon: Camera,
    title: 'Insurance Documentation',
    description:
      'Thorough photo documentation and damage reports for your insurance claim.',
  },
  {
    icon: Shield,
    title: 'Temporary Structural Repairs',
    description:
      'Emergency structural support and protection for severe damage situations.',
  },
];

// Coverage areas for emergency service
const primaryCoverageAreas = [
  'Charlotte',
  'Huntersville',
  'Cornelius',
  'Davidson',
  'Matthews',
  'Mint Hill',
  'Concord',
  'Gastonia',
];

const extendedCoverageAreas = [
  'Mooresville',
  'Lake Norman',
  'Fort Mill SC',
  'Rock Hill SC',
  'Indian Trail',
  'Waxhaw',
  'Pineville',
  'Belmont',
  'Mt Holly',
  'Monroe',
  'Kannapolis',
  'Harrisburg',
];

const pageUrl = `${SITE_CONFIG.url}/services/emergency-roofing`;

// Gallery images for schema
const galleryImages = [
  { url: IMAGES.services.emergency, caption: '24/7 Emergency Roof Repair Team Charlotte NC' },
  { url: IMAGES.projects.stormDamage1, caption: 'Storm Damage Roof Repair Charlotte NC' },
  { url: IMAGES.services.stormDamage, caption: 'Emergency Tarping Service Charlotte' },
  { url: IMAGES.hero.hero6, caption: 'Emergency Roofing Response Charlotte NC' },
];

export default function EmergencyRoofingPage() {
  return (
    <>
      {/* Enhanced Schema Markup with Emergency Service Availability */}
      <WebPageSchema
        name="24/7 Emergency Roof Repair Charlotte NC | Best Roofing Now"
        description="24/7 emergency roof repair in Charlotte NC. 30-minute response time for active leaks, storm damage & urgent repairs. Available nights, weekends & holidays."
        url={pageUrl}
        primaryImage={IMAGES.services.emergency}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Services', url: `${SITE_CONFIG.url}/services` },
          { name: '24/7 Emergency Roof Repair', url: pageUrl },
        ]}
      />

      {/* Emergency Service Schema with 24/7 Availability */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EmergencyService',
            '@id': `${pageUrl}/#emergency-service`,
            name: '24/7 Emergency Roof Repair Charlotte NC',
            description: '24/7 emergency roof repair service with 30-minute response time. Emergency tarping, leak repair, storm damage restoration.',
            provider: {
              '@type': 'RoofingContractor',
              '@id': `${SITE_CONFIG.url}/#organization`,
              name: SITE_CONFIG.name,
              telephone: SITE_CONFIG.phone,
            },
            serviceType: 'Emergency Roofing Repair',
            areaServed: [
              ...primaryCoverageAreas.map(city => ({ '@type': 'City', name: `${city}, NC` })),
              { '@type': 'City', name: 'Fort Mill, SC' },
              { '@type': 'City', name: 'Rock Hill, SC' },
            ],
            availableChannel: {
              '@type': 'ServiceChannel',
              serviceUrl: pageUrl,
              servicePhone: SITE_CONFIG.phone,
              availableLanguage: 'English',
            },
            hoursAvailable: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '00:00',
              closes: '23:59',
            },
            potentialAction: {
              '@type': 'ReserveAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: `tel:${SITE_CONFIG.phoneClean}`,
                actionPlatform: ['http://schema.org/MobileWebPlatform', 'http://schema.org/DesktopWebPlatform'],
              },
              result: {
                '@type': 'Reservation',
                name: 'Emergency Roof Repair Appointment',
              },
            },
            offers: [
              {
                '@type': 'Offer',
                name: 'Emergency Roof Tarping',
                description: 'Industrial-grade emergency roof tarping to prevent water intrusion',
                priceRange: '$300-$800',
                availability: 'https://schema.org/InStock',
              },
              {
                '@type': 'Offer',
                name: 'Emergency Leak Repair',
                description: 'Immediate repair of active roof leaks',
                priceRange: '$300-$1500',
                availability: 'https://schema.org/InStock',
              },
            ],
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: SITE_CONFIG.googleRating,
              reviewCount: SITE_CONFIG.googleReviewCount,
              bestRating: 5,
              worstRating: 1,
            },
          }),
        }}
      />

      <FAQSchema faqs={emergencyFAQs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Services', url: `${SITE_CONFIG.url}/services` },
          { name: '24/7 Emergency Roof Repair', url: pageUrl },
        ]}
      />
      <HeroImageSchema
        url={IMAGES.services.emergency}
        caption="24/7 Emergency Roof Repair Charlotte NC - Best Roofing Now responds in 30 minutes"
        pageUrl={pageUrl}
      />
      <GallerySchema
        name="Emergency Roof Repair Gallery"
        description="Emergency roofing projects in Charlotte NC including storm damage, tarping, and urgent repairs"
        images={galleryImages}
        pageUrl={pageUrl}
      />

      {/* Visual Breadcrumbs */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs
            items={[
              { name: 'Services', href: '/services' },
              { name: '24/7 Emergency Roof Repair', href: '/services/emergency-roofing' },
            ]}
          />
        </div>
      </div>

      {/* Emergency Alert Banner */}
      <div className="bg-accent text-white py-3">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 animate-pulse" />
              <span className="font-bold text-lg">ROOF EMERGENCY?</span>
            </div>
            <span className="hidden sm:inline">|</span>
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="flex items-center gap-2 font-bold text-xl hover:underline"
            >
              <Phone className="w-5 h-5" />
              Call Now: {SITE_CONFIG.phone}
            </a>
            <span className="text-sm">30-Minute Response</span>
          </div>
        </div>
      </div>

      {/* Hero Section - Optimized for 24/7 Emergency Keywords */}
      <section className="relative bg-gradient-primary text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.services.emergency}
            alt="24/7 Emergency Roof Repair Charlotte NC - Best Roofing Now emergency response team"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 animate-pulse" />
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Available 24/7</span>
              </div>
            </div>

            {/* H1 optimized for "24/7 Emergency Roof Repair" */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              24/7 Emergency Roof Repair<br />
              <span className="text-accent">Charlotte, NC</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-4">
              <strong>30-Minute Response Time</strong> for Active Leaks, Storm Damage & Urgent Repairs
            </p>

            <p className="text-lg text-white/80 mb-8">
              Roof emergency? Don't wait. Our emergency roofing crews are standing by 24 hours a day,
              7 days a week, including nights, weekends, and holidays. We respond fast to protect your home.
            </p>

            {/* Prominent Phone CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="primary"
                className="text-xl py-6 px-8"
                icon={<Phone className="w-6 h-6" />}
              >
                Call Now: {SITE_CONFIG.phone}
              </Button>
              <EstimateButton
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary py-6 px-8"
              >
                Request Emergency Service
              </EstimateButton>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>30-Minute Response</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Available 24/7/365</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Insurance Claim Help</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Guarantee Section */}
      <section className="py-12 bg-dark text-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold text-accent mb-2">30</div>
              <div className="text-xl font-semibold mb-1">Minutes</div>
              <div className="text-white/70">Average Response Time</div>
            </div>
            <div className="p-6 border-y md:border-y-0 md:border-x border-white/20">
              <div className="text-5xl font-bold text-accent mb-2">24/7</div>
              <div className="text-xl font-semibold mb-1">Availability</div>
              <div className="text-white/70">Nights, Weekends & Holidays</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-accent mb-2">50+</div>
              <div className="text-xl font-semibold mb-1">Mile Radius</div>
              <div className="text-white/70">Charlotte Metro Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* H2: Emergency Services We Provide */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              24/7 Emergency Roofing Services
            </h2>
            <p className="text-lg text-gray">
              Our emergency roofing team is equipped to handle any urgent situation.
              From emergency tarping to storm damage repairs, we protect your home fast.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyServices.map((service, index) => (
              <div
                key={index}
                className="bg-light rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{service.title}</h3>
                <p className="text-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-Out Box with Phone Number */}
      <section className="py-12 bg-accent">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Need Emergency Roof Repair Right Now?
              </h2>
              <p className="text-white/90">
                Our crews are standing by 24/7. Call now for immediate response.
              </p>
            </div>
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="flex items-center gap-3 bg-white text-accent px-8 py-4 rounded-xl font-bold text-2xl hover:bg-white/90 transition-colors"
            >
              <Phone className="w-8 h-8" />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Our Emergency Response Process */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our 24/7 Emergency Response Process
            </h2>
            <p className="text-lg text-gray">
              When you call our emergency line, here's what happens next.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: 1, title: 'Call Our 24/7 Line', description: 'Speak directly with our emergency team, not an answering service.' },
              { step: 2, title: '30-Min Dispatch', description: 'We dispatch the nearest available crew to your location immediately.' },
              { step: 3, title: 'Rapid Assessment', description: 'Our team assesses damage and explains options on the spot.' },
              { step: 4, title: 'Immediate Protection', description: 'Emergency tarping or repairs to stop water intrusion now.' },
              { step: 5, title: 'Full Restoration', description: 'Schedule permanent repairs and get insurance documentation.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              24/7 Emergency Roofing Coverage Areas
            </h2>
            <p className="text-lg text-gray">
              We provide 24/7 emergency roof repair throughout the Charlotte metro area
              and surrounding communities within a 50-mile radius.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Primary Coverage */}
            <div className="bg-light rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-dark">
                  Primary Coverage (15-20 min response)
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {primaryCoverageAreas.map((city) => {
                  const location = LOCATIONS.find((l) => l.city === city);
                  return (
                    <Link
                      key={city}
                      href={location ? `/locations/${location.slug}` : '#'}
                      className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                    >
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Emergency Roofing {city}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Extended Coverage */}
            <div className="bg-light rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-dark">
                  Extended Coverage (25-40 min response)
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {extendedCoverageAreas.map((city) => {
                  const location = LOCATIONS.find((l) => l.city === city || l.city === city.replace(' SC', ''));
                  return (
                    <Link
                      key={city}
                      href={location ? `/locations/${location.slug}` : '#'}
                      className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>Emergency Roofing {city}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray mb-4">
              Don't see your city? We likely cover it. Our emergency service extends to all
              communities within 50 miles of Charlotte.
            </p>
            <Button href="/locations" variant="outline">
              View All Service Areas
            </Button>
          </div>
        </div>
      </section>

      {/* What to Do During an Emergency */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What To Do During a Roof Emergency
              </h2>
              <div className="space-y-4">
                {[
                  'Call our 24/7 emergency line immediately: (704) 605-6047',
                  'Place buckets or containers under active leaks',
                  'Move furniture and valuables away from water',
                  'Take photos and videos of damage for insurance',
                  'Turn off electricity to affected areas if water is near fixtures',
                  'Stay off the roof - it\'s dangerous, especially when wet',
                  'Wait for our team - we\'ll be there within 30 minutes',
                ].map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-white/90">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 text-center">
              <AlertTriangle className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Emergency Hotline</h3>
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="text-4xl font-bold text-accent hover:underline block mb-4"
              >
                {SITE_CONFIG.phone}
              </a>
              <p className="text-white/80 mb-6">
                Available 24 hours a day, 7 days a week, 365 days a year
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Nights</span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Weekends</span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Holidays</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Claim Assistance */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src={IMAGES.services.stormDamage}
                alt="Emergency roof damage insurance documentation Charlotte NC"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-bold text-primary">
                  Emergency Insurance Claim Help
                </h2>
              </div>
              <p className="text-gray mb-6">
                Don't navigate the insurance process alone. Our emergency response includes
                complete documentation and claim assistance to help you get fair compensation
                for storm damage and emergency repairs.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Detailed photo documentation of all damage',
                  'Written damage assessments for your claim',
                  'Direct communication with adjusters',
                  'On-site adjuster meetings at your convenience',
                  'Supplemental claim support if initial offer is low',
                  'We work with ALL major insurance companies',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-dark">{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="/services/insurance-claims">
                Learn About Insurance Claim Help
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency FAQs */}
      <FAQ
        faqs={emergencyFAQs}
        title="24/7 Emergency Roof Repair FAQs"
        subtitle="Common questions about our emergency roofing services in Charlotte NC"
      />

      {/* Related Services */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Related Storm & Emergency Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/services/storm-damage"
              className="bg-light rounded-xl p-6 hover:shadow-md transition-shadow group"
            >
              <CloudRain className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">
                Storm Damage Repair
              </h3>
              <p className="text-gray text-sm">
                Complete storm damage assessment and restoration services.
              </p>
              <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            <Link
              href="/services/insurance-claims"
              className="bg-light rounded-xl p-6 hover:shadow-md transition-shadow group"
            >
              <FileText className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">
                Insurance Claims
              </h3>
              <p className="text-gray text-sm">
                We handle the entire insurance process for you.
              </p>
              <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            <Link
              href="/services/roof-repair"
              className="bg-light rounded-xl p-6 hover:shadow-md transition-shadow group"
            >
              <Shield className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">
                Roof Repair
              </h3>
              <p className="text-gray text-sm">
                Fast, reliable repairs for leaks and damage.
              </p>
              <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            <Link
              href="/services/building-restoration"
              className="bg-light rounded-xl p-6 hover:shadow-md transition-shadow group"
            >
              <AlertTriangle className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">
                Building Restoration
              </h3>
              <p className="text-gray text-sm">
                Complete restoration for severe damage situations.
              </p>
              <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Directory Citations */}
      <section className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <DirectoryCitations
              pageType="service-detail"
              maxLinks={3}
              variant="inline"
              title="Verified Emergency Service"
            />
            <p className="text-sm text-gray-500">
              Licensed, Bonded & Insured | BBB A+ Rated | Available 24/7
            </p>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="emergency-roofing" />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Emergency Roofing"
      />

      {/* Final CTA */}
      <CTASection
        title="Roof Emergency? We're Here 24/7"
        subtitle={`Call ${SITE_CONFIG.phone} now for immediate emergency response. 30-minute average arrival time.`}
      />
    </>
  );
}
