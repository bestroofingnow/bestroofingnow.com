import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  Clock,
  Shield,
  Star,
  AlertTriangle,
  CloudRain,
  TreePine,
  Zap,
  CheckCircle,
  ArrowRight,
  HelpCircle,
  Calendar,
  Award,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { RelatedCitiesLinks } from '@/components/ui/RelatedCitiesLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: '24/7 Emergency Roof Repair Charlotte NC | Call Now',
  description:
    'Emergency roof repair Charlotte NC with 24/7 response. Active leaks, storm damage, fallen trees - we respond fast. 1-4 hour response time. BBB A+ rated. Call (704) 605-6047 now!',
  keywords: [
    'emergency roof repair charlotte nc',
    '24/7 roof repair charlotte',
    'emergency roofing charlotte nc',
    'urgent roof repair charlotte',
    'roof leak emergency charlotte nc',
    'storm damage emergency charlotte',
    'emergency roof tarp charlotte nc',
    'same day roof repair charlotte',
    '24 hour roof repair charlotte nc',
    'emergency roofer charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/emergency-roof-repair-charlotte-nc`,
  },
  openGraph: {
    title: '24/7 Emergency Roof Repair Charlotte NC | Call Now | Best Roofing Now',
    description:
      'Charlotte emergency roof repair with 1-4 hour response. Active leaks, storm damage, fallen trees. 24/7 availability. BBB A+ rated veteran-owned company.',
    url: `${SITE_CONFIG.url}/emergency-roof-repair-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.emergency,
        width: 1200,
        height: 630,
        alt: '24/7 Emergency roof repair Charlotte NC - Best Roofing Now storm response',
      },
    ],
  },
};

// Emergency situations we handle
const emergencyTypes = [
  {
    icon: CloudRain,
    title: 'Active Roof Leaks',
    description: 'Water actively entering your home needs immediate attention. We stop leaks fast to prevent mold and structural damage.',
    urgency: 'Respond within 1-2 hours',
  },
  {
    icon: TreePine,
    title: 'Fallen Tree Damage',
    description: 'Trees or large branches on your roof require urgent response. We coordinate removal and secure your property.',
    urgency: 'Respond within 2-4 hours',
  },
  {
    icon: Zap,
    title: 'Severe Storm Damage',
    description: 'Hail, wind, and tornado damage that exposes your home to the elements. Emergency tarping available.',
    urgency: 'Respond within 1-4 hours',
  },
  {
    icon: AlertTriangle,
    title: 'Structural Collapse',
    description: 'Sagging, buckling, or partially collapsed roof sections that threaten safety and property.',
    urgency: 'Respond within 1 hour',
  },
];

// Response time stats
const responseStats = [
  { stat: '1-4 hrs', label: 'Typical Response Time' },
  { stat: '24/7', label: 'Availability' },
  { stat: '500+', label: 'Emergencies Handled' },
  { stat: 'A+', label: 'BBB Rating' },
];

// Charlotte neighborhoods with fastest response
const priorityNeighborhoods = [
  'University City',
  'NoDa',
  'Plaza Midwood',
  'Myers Park',
  'Dilworth',
  'South End',
  'Ballantyne',
  'SouthPark',
  'Uptown',
  'Cotswold',
  'Matthews',
  'Huntersville',
];

// FAQs
const faqs = [
  {
    question: 'How fast can you respond to a roof emergency in Charlotte?',
    answer:
      'Best Roofing Now offers 24/7 emergency roof repair in Charlotte with typical response times of 1-4 hours. For active leaks or structural emergencies, we prioritize immediate response. Our crews are stationed throughout the Charlotte metro area for fast deployment. Call (704) 605-6047 any time, day or night.',
  },
  {
    question: 'What should I do while waiting for emergency roof repair?',
    answer:
      'First, ensure everyone is safe and move away from the affected area. If water is entering, place buckets to catch drips and move valuables away from the leak. Turn off electricity to affected areas if there is water near outlets. Do NOT attempt to climb on a damaged roof - this is dangerous. Call us immediately and we will guide you through any additional steps.',
  },
  {
    question: 'Do you provide emergency roof tarping in Charlotte?',
    answer:
      'Yes, emergency tarping is one of our core services. We install professional-grade tarps that provide weatherproof protection until permanent repairs can be completed. Our tarping service is available 24/7 and can often be completed within hours of your call. Tarping costs are often covered by insurance for storm-related damage.',
  },
  {
    question: 'Will insurance cover emergency roof repair in Charlotte NC?',
    answer:
      'Yes, most homeowners insurance policies cover emergency roof repair when caused by storms, hail, wind, or fallen trees. Best Roofing Now works directly with all major insurance companies and helps document damage for your claim. We can provide emergency repairs and coordinate with your insurance adjuster to maximize your coverage.',
  },
  {
    question: 'How much does emergency roof repair cost in Charlotte?',
    answer:
      'Emergency roof repair costs in Charlotte vary based on the type and extent of damage. Emergency tarping typically costs $300-$800. Minor leak repairs range from $200-$800. More extensive emergency repairs can cost $1,000-$3,000+. We provide transparent pricing before any work begins, and many emergency repairs are covered by insurance.',
  },
  {
    question: 'Do you charge extra for after-hours emergency calls?',
    answer:
      'We maintain consistent, fair pricing for emergency services regardless of when you call. While emergency work may cost more than scheduled repairs due to the urgent nature and expedited response, we do not add arbitrary "after-hours" fees. You will receive a clear estimate before we begin any work.',
  },
  {
    question: 'What areas do you cover for emergency roof repair?',
    answer:
      'We provide 24/7 emergency roof repair throughout the Charlotte metro area including Huntersville, Cornelius, Davidson, Mooresville, Matthews, Mint Hill, Pineville, Concord, Gastonia, and surrounding communities. Our crews are positioned throughout the region for rapid response to any location.',
  },
  {
    question: 'Can you make permanent repairs during an emergency call?',
    answer:
      'It depends on the situation. For smaller issues like minor leaks or a few missing shingles, we can often complete permanent repairs during the emergency visit. For larger damage requiring materials ordering or extensive work, we focus on making your home watertight first (tarping, temporary patches) and schedule permanent repairs as soon as possible.',
  },
];

export default function EmergencyRoofRepairCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: '24/7 Emergency Roof Repair Charlotte NC', url: `${SITE_CONFIG.url}/emergency-roof-repair-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/emergency-roof-repair-charlotte-nc`}
        pageName="24/7 Emergency Roof Repair Charlotte NC"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'Who provides 24/7 emergency roof repair in Charlotte NC?',
            answer: 'Best Roofing Now provides 24/7 emergency roof repair in Charlotte NC with 1-4 hour response times. They handle active leaks, storm damage, fallen trees, and structural emergencies. BBB A+ rated and veteran-owned. Call (704) 605-6047 any time.',
            speakableAnswer: 'Best Roofing Now provides 24/7 emergency roof repair in Charlotte with 1-4 hour response. Call 704-605-6047.',
          },
          {
            question: 'How fast can I get emergency roof repair in Charlotte?',
            answer: 'Best Roofing Now typically responds to Charlotte roof emergencies within 1-4 hours. For active leaks or structural damage, response is prioritized within 1-2 hours. Available 24/7, 365 days a year.',
            speakableAnswer: 'Best Roofing Now responds to Charlotte emergencies within 1-4 hours. Call 704-605-6047 for immediate help.',
          },
          {
            question: 'What is the phone number for emergency roof repair in Charlotte?',
            answer: 'Call (704) 605-6047 for 24/7 emergency roof repair in Charlotte NC. Best Roofing Now answers emergency calls around the clock, including nights, weekends, and holidays.',
            speakableAnswer: 'For emergency roof repair in Charlotte, call 704-605-6047. Available 24/7.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* URGENT Hero Section - RED background for emergency emphasis */}
      <section className="relative bg-gradient-to-br from-red-700 via-red-600 to-red-800 text-white py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.emergency}
            alt="24/7 Emergency roof repair Charlotte NC - Best Roofing Now rapid response team"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            {/* URGENT Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-red-900 rounded-full px-4 py-2 mb-4 animate-pulse font-bold">
              <AlertTriangle className="w-5 h-5" />
              <span className="text-sm">24/7 EMERGENCY SERVICE</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight">
              Emergency Roof Repair <br className="hidden md:block" />
              <span className="text-yellow-300">Charlotte NC</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-4">
              Roof Emergency? We Respond in 1-4 Hours.
            </p>

            <p className="text-lg text-white/80 mb-6 max-w-2xl">
              Active leak, storm damage, or fallen tree? Do not wait - water damage spreads fast.
              Our emergency crews are ready to protect your Charlotte home right now.
            </p>

            {/* GIANT Phone CTA */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 max-w-xl">
              <p className="text-white/90 text-sm uppercase tracking-wide mb-2 font-medium">
                Call Now - We Answer 24/7
              </p>
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="flex items-center gap-4 text-4xl md:text-5xl font-bold text-yellow-300 hover:text-yellow-200 transition-colors"
              >
                <Phone className="w-10 h-10 md:w-12 md:h-12 animate-pulse" />
                {SITE_CONFIG.phone}
              </a>
              <p className="text-white/70 text-sm mt-3">
                Nights, weekends, holidays - we answer every call
              </p>
            </div>

            {/* Secondary CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="primary"
                size="lg"
                className="bg-yellow-400 !text-red-900 hover:bg-yellow-300 font-bold"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call Now: {SITE_CONFIG.phone}
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-red-700"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Request Emergency Service
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Google Rating
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-yellow-300" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-400" />
                1-4 Hour Response
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-300" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Response Stats Bar */}
      <section className="bg-primary-dark text-white py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {responseStats.map((item) => (
              <div key={item.label}>
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">{item.stat}</div>
                <p className="text-white/80 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Types Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Emergencies We Handle in Charlotte
            </h2>
            <p className="text-gray text-lg">
              When your roof is compromised, every minute counts. We respond quickly to protect
              your Charlotte home from further damage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {emergencyTypes.map((emergency) => (
              <div
                key={emergency.title}
                className="p-6 bg-light rounded-xl border-l-4 border-red-600"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <emergency.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-lg mb-2">{emergency.title}</h3>
                    <p className="text-gray mb-3">{emergency.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-red-600">
                      <Clock className="w-4 h-4" />
                      {emergency.urgency}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What To Do Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                What To Do During a Roof Emergency
              </h2>
              <p className="text-gray text-lg">
                Follow these steps to stay safe and minimize damage while waiting for our team.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-green-600 text-lg mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  DO This
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm flex-shrink-0">1</span>
                    <span className="text-gray">Move everyone away from the affected area</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm flex-shrink-0">2</span>
                    <span className="text-gray">Place buckets or containers under active leaks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm flex-shrink-0">3</span>
                    <span className="text-gray">Move furniture and valuables away from water</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm flex-shrink-0">4</span>
                    <span className="text-gray">Take photos of damage for insurance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm flex-shrink-0">5</span>
                    <span className="text-gray">Call Best Roofing Now: {SITE_CONFIG.phone}</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-red-600 text-lg mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  DO NOT Do This
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm flex-shrink-0">X</span>
                    <span className="text-gray">Do NOT climb on a damaged roof - it is dangerous</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm flex-shrink-0">X</span>
                    <span className="text-gray">Do NOT attempt DIY tarping from the roof</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm flex-shrink-0">X</span>
                    <span className="text-gray">Do NOT touch electrical outlets near water</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm flex-shrink-0">X</span>
                    <span className="text-gray">Do NOT wait to call - water damage worsens fast</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm flex-shrink-0">X</span>
                    <span className="text-gray">Do NOT hire unlicensed storm chasers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-red-700 text-white py-12">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Do Not Wait - Call Now for Emergency Roof Repair
            </h2>
            <p className="text-white/90 mb-6">
              Water damage spreads every minute. Our crews are standing by to protect your Charlotte home.
            </p>
            <Button
              href={`tel:${SITE_CONFIG.phoneClean}`}
              variant="primary"
              size="lg"
              className="bg-yellow-400 !text-red-900 hover:bg-yellow-300 font-bold text-lg"
              icon={<Phone className="w-6 h-6" />}
            >
              Call Now: {SITE_CONFIG.phone}
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Charlotte Trusts Best Roofing Now for Emergencies
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-light rounded-xl">
              <Clock className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-dark text-lg mb-2">24/7 Availability</h3>
              <p className="text-gray">
                We answer emergency calls around the clock, 365 days a year. Storms do not wait, and neither do we.
              </p>
            </div>
            <div className="p-6 bg-light rounded-xl">
              <Zap className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-dark text-lg mb-2">Rapid Response</h3>
              <p className="text-gray">
                Typical response time of 1-4 hours. Our crews are positioned throughout Charlotte for fast deployment.
              </p>
            </div>
            <div className="p-6 bg-light rounded-xl">
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-dark text-lg mb-2">Fully Licensed & Insured</h3>
              <p className="text-gray">
                BBB A+ rated, fully licensed NC general contractor. Your property is protected.
              </p>
            </div>
            <div className="p-6 bg-light rounded-xl">
              <Star className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-dark text-lg mb-2">5-Star Reviews</h3>
              <p className="text-gray">
                {SITE_CONFIG.googleReviewCount}+ five-star Google reviews from Charlotte homeowners we have helped.
              </p>
            </div>
            <div className="p-6 bg-light rounded-xl">
              <Award className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-dark text-lg mb-2">Veteran-Owned</h3>
              <p className="text-gray">
                Family-owned, veteran-operated company with military-grade discipline and integrity.
              </p>
            </div>
            <div className="p-6 bg-light rounded-xl">
              <CheckCircle className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-dark text-lg mb-2">Insurance Experts</h3>
              <p className="text-gray">
                We document damage and work with your insurance to maximize your claim coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Fast Response Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Charlotte Neighborhoods We Serve
            </h2>
            <p className="text-gray text-lg">
              Our crews are positioned throughout Charlotte for rapid emergency response.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {priorityNeighborhoods.map((neighborhood) => (
                <span
                  key={neighborhood}
                  className="inline-block bg-primary/10 px-4 py-2 rounded-full text-sm text-primary font-medium"
                >
                  {neighborhood}
                </span>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                View All 60+ Service Areas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <GeoProjectGalleryStrip
        pageType="main-service-area"
        city="Charlotte"
        slug="emergency-roof-repair-charlotte-nc"
        count={4}
        title="Recent Emergency Repairs in Charlotte"
        subtitle="See examples of our emergency response work across the Charlotte metro area."
        schemaPageUrl={`${SITE_CONFIG.url}/emergency-roof-repair-charlotte-nc`}
      />

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
                Emergency Roof Repair FAQs
              </h2>
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

      {/* Related Services */}
      <ServiceCityLinks
        city="Charlotte"
        citySlug="charlotte-nc"
        title="Other Roofing Services in Charlotte NC"
        subtitle="Beyond emergencies, we provide complete roofing solutions for Charlotte homeowners."
      />

      {/* Related Cities */}
      <RelatedCitiesLinks
        currentCity="Charlotte"
        service="Emergency Roof Repair"
        serviceSlug="emergency-roof-repair"
        title="Emergency Roof Repair in Nearby Cities"
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Emergency Roof Repair"
      />

      <CTASection
        title="Roof Emergency? Call Charlotte's Fastest Response Team"
        subtitle="24/7 emergency roof repair with 1-4 hour response time. We protect your home from further damage."
      />
    </>
  );
}
