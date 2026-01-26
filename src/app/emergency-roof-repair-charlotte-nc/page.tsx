import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Phone,
  Shield,
  Clock,
  CloudRain,
  TreePine,
  Wind,
  CloudHail,
  Star,
  Calendar,
  Droplets,
  Hammer,
  FileText,
  MapPin,
  Award,
  Users,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';
import { FAQ } from '@/components/sections/FAQ';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
  ServiceSchema,
  WebPageSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DirectoryCitations } from '@/components/ui/DirectoryCitations';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { EstimateButton } from '@/components/estimate';

export const metadata: Metadata = {
  title: 'Emergency Roof Repair Charlotte NC | Active Leak & Urgent Damage',
  description:
    'Urgent roof repair needed in Charlotte NC? Fast response for active roof leaks, sudden damage, and roofing emergencies. Stop the leak now - emergency tarping and repairs. Call (704) 605-6047!',
  keywords: [
    'emergency roof repair charlotte nc',
    'urgent roof repair charlotte',
    'roof leaking now charlotte nc',
    'active roof leak repair charlotte',
    'emergency roof leak charlotte nc',
    'roof damage repair urgent charlotte',
    'same day roof repair charlotte nc',
    'emergency roofer charlotte nc',
    'roof leaking into house charlotte',
    'sudden roof damage charlotte nc',
    'emergency tarp service charlotte nc',
    'stop roof leak now charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/emergency-roof-repair-charlotte-nc`,
  },
  openGraph: {
    title: 'Emergency Roof Repair Charlotte NC | 24/7 Service | Best Roofing Now',
    description:
      '24/7 emergency roof repair in Charlotte NC. 1-4 hour response time for active leaks, storm damage, and roofing emergencies. Call now: (704) 605-6047',
    url: `${SITE_CONFIG.url}/emergency-roof-repair-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.emergency,
        width: 1200,
        height: 630,
        alt: 'Emergency roof repair services in Charlotte NC - 24/7 response',
      },
    ],
  },
};

// Emergency roofing service object for schema
const emergencyRoofingService = {
  slug: 'emergency-roof-repair-charlotte-nc',
  title: 'Emergency Roof Repair Charlotte NC',
  description:
    '24/7 emergency roof repair in Charlotte NC. Fast response for storm damage, active leaks, tree damage, and roofing emergencies. Professional tarping and emergency repairs.',
  keywords: [
    'emergency roof repair charlotte nc',
    '24 hour roof repair charlotte',
    'emergency roofing charlotte nc',
  ],
  priceRange: 'Varies by emergency type',
};

// Emergency services we provide
const emergencyServices = [
  {
    icon: CloudRain,
    title: 'Active Roof Leaks',
    description:
      'When water is actively entering your Charlotte home, every minute counts. We respond fast to stop leaks and prevent water damage to ceilings, walls, insulation, and personal property.',
    features: [
      'Rapid leak source identification',
      'Emergency patching and sealing',
      'Water intrusion prevention',
      'Interior damage assessment',
    ],
  },
  {
    icon: CloudHail,
    title: 'Storm Damage Response',
    description:
      'Charlotte experiences severe thunderstorms, hail, and hurricane remnants. Our storm damage team provides immediate response to secure your property and document damage for insurance.',
    features: [
      'Post-storm damage assessment',
      'Emergency board-up services',
      'Insurance documentation',
      'Temporary weatherproofing',
    ],
  },
  {
    icon: TreePine,
    title: 'Fallen Tree Damage',
    description:
      'When trees or large branches damage your roof, we coordinate with tree removal services to safely access and repair your roof, preventing further exposure to the elements.',
    features: [
      'Coordination with tree services',
      'Structural damage assessment',
      'Emergency tarping',
      'Roof deck repair',
    ],
  },
  {
    icon: Hammer,
    title: 'Emergency Tarping',
    description:
      'Professional emergency tarping protects your home from further damage while permanent repairs are scheduled. We use heavy-duty materials properly secured to withstand weather.',
    features: [
      'Heavy-duty tarp installation',
      'Wind-resistant securing',
      'Multiple-layer protection',
      'Proper drainage setup',
    ],
  },
];

// Why choose us for emergencies
const whyChooseEmergency = [
  {
    icon: Clock,
    title: '1-4 Hour Response',
    description:
      'Our emergency crews respond within 1-4 hours depending on conditions. We prioritize active leaks and exposed roof sections.',
  },
  {
    icon: Zap,
    title: '24/7 Availability',
    description:
      'Roofing emergencies do not wait for business hours. Our team is available 24 hours a day, 7 days a week, including holidays.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description:
      'Fully licensed NC roofing contractor with comprehensive liability and workers compensation insurance for your protection.',
  },
  {
    icon: FileText,
    title: 'Insurance Assistance',
    description:
      'We document all emergency work thoroughly and help you file insurance claims with proper evidence and estimates.',
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description:
      'Our A+ BBB rating and veteran-owned values mean you can trust us to respond honestly and effectively in your time of need.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description:
      'CertainTeed, GAF, and Owens Corning certified installers with extensive experience handling roofing emergencies.',
  },
];

// Common emergency scenarios
const emergencyScenarios = [
  {
    title: 'Woke up to water dripping from ceiling',
    description:
      'Active leaks during rain require immediate attention. We can often provide same-day response to stop the water and prevent mold growth.',
    urgency: 'high',
  },
  {
    title: 'Storm blew off shingles last night',
    description:
      'Exposed roof decking allows water intrusion with the next rain. Emergency tarping protects your home until permanent repairs.',
    urgency: 'high',
  },
  {
    title: 'Tree limb fell on roof during storm',
    description:
      'Structural damage from fallen trees requires immediate assessment. We coordinate with tree services for safe access and repair.',
    urgency: 'high',
  },
  {
    title: 'Major hail storm just passed through',
    description:
      'Even if no leak is visible, hail damage compromises shingle integrity. Schedule a free inspection to document damage for insurance.',
    urgency: 'medium',
  },
  {
    title: 'Hurricane or tropical storm approaching',
    description:
      'If you have known roof vulnerabilities, pre-storm tarping can prevent catastrophic damage during the storm.',
    urgency: 'medium',
  },
  {
    title: 'Noticed daylight through attic roof boards',
    description:
      'Visible gaps mean active water intrusion during rain. This should be addressed before the next precipitation.',
    urgency: 'medium',
  },
];

// Emergency process steps
const emergencyProcess = [
  {
    step: 1,
    title: 'Call Our 24/7 Emergency Line',
    description: `Call ${SITE_CONFIG.phone} any time, day or night. Describe your situation and we will dispatch the nearest available crew.`,
    icon: Phone,
  },
  {
    step: 2,
    title: 'Rapid Response Arrival',
    description:
      'Our emergency team arrives within 1-4 hours with all equipment needed to assess and address your roofing emergency.',
    icon: Clock,
  },
  {
    step: 3,
    title: 'Assessment & Immediate Action',
    description:
      'We assess the damage, stop active water intrusion, and implement emergency repairs or tarping to protect your property.',
    icon: Shield,
  },
  {
    step: 4,
    title: 'Permanent Repair Plan',
    description:
      'We provide a detailed estimate for permanent repairs, help with insurance documentation, and schedule the complete repair.',
    icon: FileText,
  },
];

// Charlotte service areas
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
  'Madison Park',
  'Montford',
  'Chantilly',
  'Commonwealth',
  'Sedgefield',
  'Providence Plantation',
];

// Nearby cities
const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Mint Hill', href: '/locations/mint-hill-nc' },
  { name: 'Pineville', href: '/locations/pineville-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Gastonia', href: '/locations/gastonia-nc' },
];

// Emergency testimonials
const emergencyTestimonials = [
  {
    name: 'Jennifer M.',
    location: 'South End, Charlotte',
    rating: 5,
    text: 'A tree limb crashed through our roof during a storm at 2 AM. Best Roofing Now answered immediately and had a crew here within 3 hours to tarp the roof. They saved us from major water damage. Absolutely lifesavers!',
  },
  {
    name: 'Robert K.',
    location: 'Huntersville, NC',
    rating: 5,
    text: 'Called on a Saturday evening with water pouring through our bedroom ceiling. They came out that night, found the issue, and had it sealed by morning. Professional and honest - no price gouging despite the emergency.',
  },
  {
    name: 'Maria & Carlos T.',
    location: 'University City, Charlotte',
    rating: 5,
    text: 'After the hailstorm last spring, we needed emergency repairs fast. Not only did they respond quickly, but they helped us through the entire insurance claim process. Our whole roof was replaced with zero hassle.',
  },
];

// Emergency-specific FAQs
const emergencyFAQs = [
  {
    question: 'How quickly can you respond to a roofing emergency in Charlotte?',
    answer:
      'Our emergency response team typically arrives within 1-4 hours depending on current conditions, location, and demand. During major storm events in Charlotte, response times may be longer due to high call volume, but we prioritize based on severity - active leaks and exposed roof decking are always addressed first.',
  },
  {
    question: 'What is considered a roofing emergency?',
    answer:
      'A roofing emergency is any situation that poses immediate risk of water damage or structural compromise. This includes active roof leaks during rain, missing sections of roofing material exposing the deck, fallen trees or large branches on the roof, storm damage with imminent rain forecast, and fire damage to roofing. If water is actively entering your Charlotte home or your roof is exposed, call immediately.',
  },
  {
    question: 'Do you charge extra for emergency or after-hours roof repair?',
    answer:
      'Yes, emergency and after-hours service does include a service call fee to cover the costs of maintaining our 24/7 availability. However, we never engage in price gouging. All repair costs are transparent and competitive. The service call fee is often waived if you proceed with permanent repairs through our company.',
  },
  {
    question: 'What should I do while waiting for emergency roof repair?',
    answer:
      'First, protect yourself and your family - do not climb on a damaged roof. If water is entering your home, place buckets or containers to catch water and move valuables away from the affected area. If safe, you can place towels around leak areas to prevent spreading. Turn off electricity to affected areas if there is significant water intrusion. Take photos of all damage for insurance purposes.',
  },
  {
    question: 'Will my homeowners insurance cover emergency roof repair?',
    answer:
      'Most homeowners insurance policies cover emergency roof repairs caused by sudden events like storms, fallen trees, hail, and wind damage. Insurance typically covers both the emergency tarping/temporary repair and the permanent fix. We document all emergency work thoroughly and assist with your insurance claim filing to help ensure coverage.',
  },
  {
    question: 'How long does emergency tarping last?',
    answer:
      'Professional emergency tarping, properly installed, can protect your home for several weeks to a few months depending on weather conditions. We use heavy-duty tarps secured with proper fastening methods to withstand Charlotte weather. However, tarping is always a temporary solution - permanent repairs should be scheduled as soon as possible.',
  },
  {
    question: 'Do you provide emergency roof repair on weekends and holidays?',
    answer:
      'Yes, our emergency roofing service operates 24 hours a day, 7 days a week, 365 days a year - including all holidays. Roofing emergencies in Charlotte do not wait for business hours, and neither do we. Call our emergency line at (704) 605-6047 any time you need us.',
  },
  {
    question: 'What areas of Charlotte do you serve for emergency roof repair?',
    answer:
      'We provide emergency roof repair throughout the entire Charlotte metro area including all Charlotte neighborhoods (Myers Park, Dilworth, Ballantyne, South End, NoDa, University City, and more), as well as surrounding cities like Huntersville, Matthews, Cornelius, Davidson, Mint Hill, Pineville, Concord, and Gastonia. If you are within 50 miles of Charlotte, we can respond to your emergency.',
  },
  {
    question: 'Can you repair all types of roofs in an emergency?',
    answer:
      'Yes, our emergency team is equipped to handle all roofing types common in Charlotte: asphalt shingles, architectural shingles, metal roofing, flat roofs (TPO, EPDM, modified bitumen), tile roofing, and slate roofing. We carry emergency supplies for all material types and can provide temporary protection until permanent repairs with matching materials are completed.',
  },
  {
    question: 'What Charlotte weather events cause the most roof emergencies?',
    answer:
      'In Charlotte, the most common causes of roofing emergencies are severe thunderstorms with high winds (common April through September), hailstorms (Charlotte sees 3-5 significant hail events per year), hurricane and tropical storm remnants (typically August through October), and ice storms in winter months. We recommend scheduling a preventive inspection each spring and after any significant storm.',
  },
];

export default function EmergencyRoofRepairCharlotteNCPage() {
  const pageUrl = `${SITE_CONFIG.url}/emergency-roof-repair-charlotte-nc`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="Emergency Roof Repair Charlotte NC | 24/7 Service | Best Roofing Now"
        description="24/7 emergency roof repair in Charlotte NC. 1-4 hour response time for active leaks, storm damage, tree damage, and roofing emergencies."
        url={pageUrl}
        primaryImage={IMAGES.services.emergency}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Emergency Roof Repair Charlotte NC', url: pageUrl },
        ]}
      />
      <ServiceSchema service={emergencyRoofingService} />
      <FAQSchema faqs={emergencyFAQs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Emergency Roof Repair Charlotte NC', url: pageUrl },
        ]}
      />
      <LocalBusinessSchema />

      {/* Visual Breadcrumbs */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs
            items={[
              {
                name: 'Emergency Roof Repair Charlotte NC',
                href: '/emergency-roof-repair-charlotte-nc',
              },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-700 via-red-600 to-red-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.services.emergency}
            alt="Emergency roof repair in Charlotte NC - 24/7 service"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
              <AlertTriangle className="w-5 h-5" />
              24/7 Emergency Response Available Now
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Emergency Roof Repair <br className="hidden md:block" />
              <span className="text-yellow-300">Charlotte NC</span>
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Fast 1-4 hour response for roofing emergencies throughout Charlotte
            </p>
            <p className="text-lg text-white/80 mb-8">
              When your roof fails, every minute counts. Active leaks, storm damage, fallen trees -
              our 24/7 emergency team responds day or night to protect your Charlotte home from
              further damage. Over 500 emergency repairs completed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="primary"
                size="lg"
                className="bg-white !text-red-700 hover:bg-yellow-300 hover:!text-red-800 font-bold text-lg"
                icon={<Phone className="w-6 h-6" />}
              >
                Call Now: {SITE_CONFIG.phone}
              </Button>
              <EstimateButton
                variant="outline"
                className="border-white border-2 text-white hover:bg-white hover:text-red-700"
              >
                Request Emergency Service
              </EstimateButton>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/90">
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-300" />
                1-4 Hour Response
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                {SITE_CONFIG.googleReviewCount}+ 5-Star Reviews
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-yellow-300" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Alert Banner */}
      <section className="bg-yellow-500 text-black py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 flex-shrink-0" />
              <span className="font-bold">
                Roof Emergency? Do not wait - water damage spreads fast. Call 24/7:{' '}
                <a href={`tel:${SITE_CONFIG.phoneClean}`} className="underline">
                  {SITE_CONFIG.phone}
                </a>
              </span>
            </div>
            <Button
              href={`tel:${SITE_CONFIG.phoneClean}`}
              variant="primary"
              className="bg-red-700 hover:bg-red-800 text-white"
              icon={<Phone className="w-5 h-5" />}
            >
              Call Emergency Line
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Emergency Roofing Services in Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              From active leaks to storm damage, our 24/7 emergency team handles all types of
              roofing emergencies throughout the Charlotte metro area. Fast response prevents
              thousands in additional damage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {emergencyServices.map((service) => (
              <div
                key={service.title}
                className="bg-light rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{service.title}</h3>
                <p className="text-gray mb-4">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Emergencies */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Charlotte Trusts Best Roofing Now for Emergencies
            </h2>
            <p className="text-white/80 text-lg">
              When your roof fails, you need a team you can count on - any time, day or night.
              Here is why Charlotte homeowners trust us with their roofing emergencies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseEmergency.map((item) => (
              <div key={item.title} className="bg-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-yellow-300" />
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Scenarios Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Common Emergency Scenarios We Handle
            </h2>
            <p className="text-gray text-lg">
              Not sure if your situation qualifies as an emergency? Here are common scenarios
              Charlotte homeowners call us about. When in doubt, call - we are happy to assess.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyScenarios.map((scenario, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-600"
              >
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle
                    className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      scenario.urgency === 'high' ? 'text-red-600' : 'text-yellow-500'
                    }`}
                  />
                  <h3 className="font-bold text-dark">{scenario.title}</h3>
                </div>
                <p className="text-gray text-sm ml-8">{scenario.description}</p>
                <div className="mt-3 ml-8">
                  <span
                    className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
                      scenario.urgency === 'high'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {scenario.urgency === 'high' ? 'Call Immediately' : 'Schedule Soon'}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              href={`tel:${SITE_CONFIG.phoneClean}`}
              variant="primary"
              size="lg"
              className="bg-red-600 hover:bg-red-700"
              icon={<Phone className="w-5 h-5" />}
            >
              Call 24/7: {SITE_CONFIG.phone}
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Process Steps */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Emergency Response Process
            </h2>
            <p className="text-gray text-lg">
              From your first call to permanent repair, here is how we handle roofing emergencies
              in Charlotte. Our streamlined process gets your home protected fast.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {emergencyProcess.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                    <p className="text-gray text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
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
              <span className="text-sm font-semibold">Emergency Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              24/7 Emergency Roof Repair Across Charlotte
            </h2>
            <p className="text-gray text-lg">
              Our emergency crews serve all of Charlotte and surrounding communities within 50
              miles. No matter where you are in the metro area, we can respond to your emergency.
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
              <div className="grid grid-cols-2 gap-3">
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

      {/* Customer Testimonials Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4 fill-primary" aria-hidden="true" />
              <span className="text-sm font-semibold">Emergency Service Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Charlotte Homeowners Say About Our Emergency Response
            </h2>
            <p className="text-gray text-lg">
              When disaster strikes, our team delivers. Read what Charlotte homeowners say about
              our emergency roofing service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {emergencyTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-light rounded-xl shadow-md p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-dark">{testimonial.name}</p>
                  <p className="text-sm text-gray">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              Read More Reviews
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Charlotte Weather Context */}
      <section className="section bg-dark text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CloudRain className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Charlotte Weather Creates Roofing Emergencies
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Charlotte&apos;s climate puts roofs to the test. With 45-50 thunderstorm days per
              year, 3-5 significant hailstorms, and 1-2 hurricane remnants annually, roof damage
              emergencies are common. Our team understands Charlotte weather and responds fast when
              it strikes.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mb-10">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">1-4 hrs</div>
                <p className="text-white/70">Response Time</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
                <p className="text-white/70">Availability</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">500+</div>
                <p className="text-white/70">Emergencies Handled</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">A+</div>
                <p className="text-white/70">BBB Rating</p>
              </div>
            </div>
            <Button
              href={`tel:${SITE_CONFIG.phoneClean}`}
              variant="primary"
              size="lg"
              className="bg-red-600 hover:bg-red-700"
              icon={<Phone className="w-5 h-5" />}
            >
              Call 24/7 Emergency Line: {SITE_CONFIG.phone}
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        faqs={emergencyFAQs}
        title="Emergency Roof Repair FAQ"
        subtitle="Common questions about emergency roof repair in Charlotte NC"
      />

      {/* Related Services */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/services/emergency-roofing"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
            >
              <AlertTriangle className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">
                Emergency Roofing Services
              </h3>
              <p className="text-gray text-sm">
                Complete details on our 24/7 emergency response capabilities.
              </p>
              <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            <Link
              href="/storm-damage-roof-repair-charlotte"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
            >
              <CloudHail className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">
                Storm Damage Repair
              </h3>
              <p className="text-gray text-sm">
                Comprehensive storm damage repair with insurance claim assistance.
              </p>
              <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            <Link
              href="/services/storm-damage"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
            >
              <FileText className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">
                Insurance Claims Help
              </h3>
              <p className="text-gray text-sm">
                Expert assistance navigating insurance claims after storm damage.
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
              pageType="service"
              maxLinks={3}
              variant="inline"
              title="Verified Business"
            />
            <p className="text-sm text-gray-500">
              24/7 Emergency Service | Licensed & Insured | BBB A+ Rated
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Roof Emergency? Call Now for Immediate Response"
        subtitle="Do not wait for water damage to spread. Our 24/7 emergency team responds fast to protect your Charlotte home. Most emergency calls answered within minutes."
        variant="accent"
      />
    </>
  );
}
