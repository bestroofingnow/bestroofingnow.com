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
  title: 'Emergency Roof Repair Denver NC',
  description:
    '24/7 emergency roof repair in Denver NC. Fast response for storm damage and active leaks on Lake Norman. BBB A+ rated, veteran-owned. Call (704) 605-6047.',
  keywords: [
    'emergency roof repair Denver NC',
    '24 hour roofer Denver NC',
    'emergency roofer Denver NC',
    'storm damage repair Denver NC',
    'roof leak emergency Denver NC',
    'urgent roof repair Denver NC',
    '24/7 roofing Denver NC',
    'emergency tarping Denver NC',
    'tree fell on roof Denver NC',
    'hail damage repair Denver NC',
    'after hours roofer Denver NC',
    'emergency roofing near me Denver NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/emergency-roof-repair-denver-nc`,
  },
  openGraph: {
    title: 'Emergency Roof Repair Denver NC | 24/7 Service | Best Roofing Now',
    description:
      '24/7 emergency roof repair in Denver NC. Fast response for storm damage, active leaks, and urgent repairs. BBB A+ rated, veteran-owned. Call now!',
    url: `${SITE_CONFIG.url}/emergency-roof-repair-denver-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.emergency,
        width: 1200,
        height: 630,
        alt: 'Emergency roof repair services in Denver NC - Best Roofing Now',
      },
    ],
  },
};

// Emergency services offered
const emergencyServices = [
  {
    icon: AlertTriangle,
    title: 'Storm Damage Response',
    description: 'Immediate response for wind, hail, and severe weather damage to protect your Denver lakefront or inland home.',
    href: '/services/storm-damage',
  },
  {
    icon: CloudRain,
    title: 'Active Leak Repair',
    description: 'Fast repair for active roof leaks before water damages your Denver home\'s interior and belongings.',
    href: '/services/roof-repair',
  },
  {
    icon: TreePine,
    title: 'Fallen Tree/Debris',
    description: 'Emergency removal of trees and debris from Lake Norman storms and immediate roof protection for Denver homes.',
    href: '/services/emergency-roofing',
  },
  {
    icon: Shield,
    title: 'Emergency Tarping',
    description: 'Temporary tarping to protect your Denver home until permanent repairs can be completed.',
    href: '/services/emergency-roofing',
  },
  {
    icon: Wrench,
    title: 'Urgent Repairs',
    description: 'Same-day repairs for missing shingles, exposed decking, and other urgent issues in Denver.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Insurance Documentation',
    description: 'Thorough documentation and photos for insurance claims after emergency events in Denver.',
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
    description: 'We respond to emergencies within 1-4 hours in the Denver and Lake Norman area.',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star reviews from Denver and Lake Norman homeowners.`,
  },
];

// Denver areas served
const denverAreas = [
  'Trilogy at Lake Norman',
  'Sailview',
  'Westport',
  'Beatty\'s Ford',
  'East Lincoln',
  'Pinnacle Shores',
  'Lake Norman Waterfront',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Cornelius', href: '/emergency-roof-repair-cornelius-nc' },
  { name: 'Mooresville', href: '/emergency-roof-repair-mooresville-nc' },
  { name: 'Huntersville', href: '/emergency-roof-repair-huntersville-nc' },
  { name: 'Davidson', href: '/emergency-roof-repair-davidson-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Lake Norman Area', href: '/locations/lake-norman' },
];

// FAQs about emergency roof repair in Denver
const faqs = [
  {
    question: 'How quickly can you respond to a roof emergency in Denver NC?',
    answer:
      'Our emergency team is approximately 25-40 minutes from Denver, depending on the neighborhood. For active leaks, storm damage, or safety hazards, we prioritize rapid response. Call us 24/7 at (704) 605-6047 for immediate assistance.',
  },
  {
    question: 'Do you provide 24/7 emergency roofing service in Denver NC?',
    answer:
      'Yes! Best Roofing Now offers true 24/7 emergency roofing services in Denver and throughout the Lake Norman area. Whether it\'s 2 AM on a Sunday or during a holiday, we\'re available when you need us most. Our after-hours line is always staffed.',
  },
  {
    question: 'Do you handle lakefront home roof emergencies in Denver?',
    answer:
      'Absolutely. Denver sits on Lake Norman\'s western shore, and many homes face unique weather exposure from the lake. We have extensive experience with lakefront properties in Trilogy, Sailview, Westport, and Pinnacle Shores where wind and storm damage from across the lake can be especially severe.',
  },
  {
    question: 'How much does emergency roof repair cost in Denver NC?',
    answer:
      'Emergency roof repair costs vary based on the type and extent of damage. Emergency tarping typically ranges from $300-$800. Temporary repairs to stop active leaks usually cost $200-$500. More extensive emergency repairs range from $500-$2,000+. We provide upfront pricing before any work begins.',
  },
  {
    question: 'Will you help with my insurance claim for storm damage in Denver?',
    answer:
      'Absolutely! We have extensive experience with storm damage insurance claims in the Denver and Lincoln County area. We document all damage with photos and detailed reports, meet with your insurance adjuster, and advocate for fair settlements. Many Denver homes have qualified for full roof replacement after storm events.',
  },
  {
    question: 'Why are Denver NC roofs more exposed to storm damage than inland homes?',
    answer:
      'Denver sits on Lake Norman\'s western shore where prevailing storm systems arrive with sustained winds across several miles of open water. Governor\'s Island, Westport, and lakefront properties on NC-73 regularly see wind speeds 10-15 mph higher than homes just a mile inland. This means shingle uplift, ridge cap blowoffs, and debris impacts are more frequent. We recommend impact-resistant shingles (Class 4 rated) for Denver lakefront homes — they cost about 10-15% more but resist hail and wind damage significantly better.',
  },
  {
    question: 'How quickly can you tarp a Denver NC roof during a storm?',
    answer:
      'Denver is our furthest Lake Norman service point at roughly 30-45 minutes from our Charlotte office via I-77 and NC-73. During active storms with multiple emergency calls, we triage by severity — active leaks and structural damage get dispatched first. We carry heavy-duty tarps, 2x4 battens, and impact drivers on every truck so we can secure a temporary cover on arrival without waiting for additional materials.',
  },
  {
    question: 'What areas of Denver do you cover for emergency service?',
    answer:
      'We provide emergency roofing services throughout all of Denver including Trilogy at Lake Norman, Sailview, Westport, Beatty\'s Ford, East Lincoln, Pinnacle Shores, and all Lake Norman waterfront areas. We also cover nearby communities including Cornelius, Mooresville, Davidson, and Huntersville.',
  },
];

export default function EmergencyRoofRepairDenverNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Emergency Roof Repair Denver NC', url: `${SITE_CONFIG.url}/emergency-roof-repair-denver-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/emergency-roof-repair-denver-nc`}
        pageName="Emergency Roof Repair Denver NC"
        city="Denver"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent via-accent to-red-700 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.emergency}
            alt="Emergency roof repair services in Denver NC - Best Roofing Now"
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
              <span className="text-yellow-300">Denver NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Fast 25-40 minute response for storm damage, leaks & urgent repairs - 24/7
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Roof emergency in Denver? Don't wait! Best Roofing Now provides immediate emergency roofing
              services throughout Denver and Lake Norman's western shore. From growing lakefront communities
              like Trilogy and Sailview to homes along Beatty's Ford, our team responds quickly to protect your property.
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
                25-40 Min from Charlotte HQ
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
              Emergency Roofing Services in Denver NC
            </h2>
            <p className="text-gray text-lg">
              When disaster strikes your Denver home, our emergency team is ready to protect it with fast,
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
              <p className="text-white/90">Don't wait - call us immediately for fast response in Denver.</p>
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
                Why Denver Trusts Us for Emergency Roofing
              </h2>
              <p className="text-gray text-lg mb-8">
                When your roof is compromised, you need a team that responds fast with the skills and
                equipment to handle any emergency. Best Roofing Now has the experience and dedication
                to protect Denver homes - from lakefront properties on the western shore to growing communities in Lincoln County - around the clock.
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
                alt="Best Roofing Now - Emergency roof repair team serving Denver NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-accent" />
                  <div>
                    <p className="font-bold text-dark">24/7 Emergency</p>
                    <p className="text-sm text-gray">25-40 Min Response</p>
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
              Follow these steps if you experience roof damage in Denver.
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
                Call (704) 605-6047 for immediate 24/7 emergency response in Denver.
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
              24/7 Emergency Coverage in Denver & Beyond
            </h2>
            <p className="text-gray text-lg">
              We provide emergency roofing services throughout Denver and the surrounding Lake Norman communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Denver Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Denver Areas We Cover</h3>
              <div className="flex flex-wrap gap-2">
                {denverAreas.map((area) => (
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
              Common Roofing Emergencies in Denver
            </h2>
            <p className="text-gray text-lg">
              Denver's growing lakefront community on Lake Norman's western shore faces unique weather challenges. We're ready for any emergency.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">Severe Storm Damage</h3>
              <p className="text-gray text-sm">
                Denver homes on the western shore face storms sweeping across Lake Norman with powerful winds and hail.
                Our team responds immediately to wind damage, hail damage, and lightning strikes.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">Active Roof Leaks</h3>
              <p className="text-gray text-sm">
                Water entering your home can cause thousands in damage within hours. We stop active leaks
                fast to protect your Denver home and belongings.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">Fallen Trees & Debris</h3>
              <p className="text-gray text-sm">
                Trees and debris can puncture roofs during severe storms in Lincoln County. We safely remove debris, tarp
                exposed areas, and complete permanent repairs.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">Wind-Damaged Shingles</h3>
              <p className="text-gray text-sm">
                Lake-effect winds on the western shore can tear away shingles and expose your roof decking. We respond quickly to
                secure your roof before water damage occurs.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-2">Hail Damage</h3>
              <p className="text-gray text-sm">
                Hail can compromise shingle integrity and create hidden damage. We provide thorough
                inspections and help Denver homeowners with insurance claims.
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
                Emergency Roof Repair FAQs for Denver
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about emergency roofing services in Denver NC.
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

      <GeoProjectGalleryStrip pageType="location" city="Denver" slug="emergency-roof-repair-denver-nc" />

      <CityGeoSection
        city="Denver"
        state="NC"
        citySlug="denver-nc"
        service="Emergency Roof Repair"
      />

      {/* Final Emergency CTA */}
      <section className="bg-accent text-white py-16">
        <div className="container text-center">
          <AlertTriangle className="w-16 h-16 text-yellow-300 mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Roof Emergency in Denver?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't wait for the damage to get worse. Our emergency team is standing by 24/7 to protect your Denver home.
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
