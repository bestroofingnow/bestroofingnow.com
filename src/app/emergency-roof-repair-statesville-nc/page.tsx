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
  MapPin,
  AlertTriangle,
  CloudRain,
  Droplets,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Emergency Roof Repair Statesville NC',
  description:
    'Need emergency roof repair in Statesville NC? Best Roofing Now provides 24/7 emergency roofing services in Iredell County. BBB A+ rated, veteran-owned. Storm damage, active leaks, fallen trees. Call now!',
  keywords: [
    'emergency roof repair statesville nc',
    'emergency roofer statesville',
    '24/7 roof repair statesville nc',
    'storm damage roof repair statesville',
    'urgent roof repair statesville nc',
    'iredell county emergency roofer',
    'roof leak emergency statesville',
    'emergency roofing statesville nc',
    'after hours roof repair statesville',
    'emergency roof repair near me statesville',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/emergency-roof-repair-statesville-nc`,
  },
  openGraph: {
    title: 'Emergency Roof Repair Statesville NC | 24/7 Service | Best Roofing Now',
    description:
      '24/7 emergency roof repair in Statesville NC. BBB A+ rated, veteran-owned. Fast response for storm damage, active leaks, and fallen trees. Call (704) 605-6047 now!',
    url: `${SITE_CONFIG.url}/emergency-roof-repair-statesville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.repairs,
        width: 1200,
        height: 630,
        alt: 'Emergency roof repair services in Statesville NC - Best Roofing Now',
      },
    ],
  },
};

// Emergency services
const emergencyServices = [
  {
    icon: CloudRain,
    title: 'Storm Damage Response',
    description: 'Rapid response for wind, hail, and severe storm damage to your Statesville roof.',
    href: '/storm-damage-roof-repair-statesville-nc',
  },
  {
    icon: Droplets,
    title: 'Active Leak Repair',
    description: 'Fast response to stop active roof leaks before they cause extensive water damage.',
    href: '/roof-repair-statesville-nc',
  },
  {
    icon: AlertTriangle,
    title: 'Fallen Tree Damage',
    description: 'Emergency tarping and repair when trees or large branches damage your roof.',
    href: '/services/emergency-roofing',
  },
  {
    icon: Home,
    title: 'Emergency Tarping',
    description: 'Temporary weatherproofing to prevent further damage until permanent repairs are completed.',
    href: '/services/emergency-roofing',
  },
  {
    icon: Wrench,
    title: 'Structural Repairs',
    description: 'Emergency repair of structural roof damage including rafters, trusses, and decking.',
    href: '/services/roof-repair',
  },
  {
    icon: Shield,
    title: 'Insurance Assistance',
    description: 'We document damage thoroughly and work with your insurance company on emergency claims.',
    href: '/services/storm-damage',
  },
];

// Why choose us
const whyChooseUs = [
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Our emergency team is available around the clock, including nights, weekends, and holidays.',
  },
  {
    icon: AlertTriangle,
    title: '2-4 Hour Response',
    description: 'We typically arrive within 2-4 hours of your emergency call to the Statesville area.',
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Trusted emergency roofer with a BBB A+ rating and zero complaints.',
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Military discipline means fast, organized emergency response when you need it most.',
  },
  {
    icon: Users,
    title: 'Certified Team',
    description: 'Experienced, certified technicians who handle emergencies with skill and professionalism.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured for your protection during emergency roofing situations.',
  },
];

// Local areas
const localAreas = [
  'Downtown Statesville',
  'Historic District',
  'Signal Hill',
  'Brookdale',
  'Fourth Creek',
  'Cool Springs',
  'West End',
  'Northview',
  'Southview',
  'Amity Hill',
  'Scotts Creek',
  'Elmwood',
];

// Nearby cities
const nearbyCities = [
  { name: 'Mooresville', href: '/roofing-mooresville-nc' },
  { name: 'Troutman', href: '/roofing-troutman-nc' },
  { name: 'Hickory', href: '/locations/hickory-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Lake Norman', href: '/roofing-lake-norman-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
];

// FAQs
const faqs = [
  {
    question: 'How quickly can you respond to a roofing emergency in Statesville?',
    answer:
      'We typically respond to emergency calls in Statesville within 2-4 hours. Our team is available 24/7, including nights, weekends, and holidays. For active leaks or severe storm damage, call us immediately at (704) 605-6047 and we will dispatch our emergency crew as quickly as possible.',
  },
  {
    question: 'What qualifies as a roofing emergency in Statesville?',
    answer:
      'A roofing emergency includes any situation where your home is actively exposed to weather or further damage: active roof leaks, missing large sections of shingles, fallen trees on your roof, structural damage to rafters or trusses, or storm damage that has compromised your roof\'s ability to keep water out.',
  },
  {
    question: 'How much does emergency roof repair cost in Statesville?',
    answer:
      'Emergency roof repair costs vary based on the type and extent of damage. Emergency tarping typically costs $300-$800, while emergency leak repairs range from $300-$2,000. Storm damage repairs can be higher depending on severity. Many emergency repairs are covered by homeowner\'s insurance. We provide transparent pricing before starting work.',
  },
  {
    question: 'Do you provide emergency tarping in Statesville?',
    answer:
      'Yes, emergency tarping is one of our most common emergency services in Statesville. We use heavy-duty tarps secured with proper fastening systems to temporarily weatherproof your roof until permanent repairs can be completed. This prevents further water damage to your home\'s interior.',
  },
  {
    question: 'Will my insurance cover emergency roof repair in Statesville?',
    answer:
      'Most homeowner\'s insurance policies cover emergency roof repairs caused by covered events like storms, hail, wind, or fallen trees. We document all damage thoroughly with photos and detailed reports, meet with insurance adjusters, and advocate for fair settlements on your behalf.',
  },
  {
    question: 'What should I do if my Statesville roof is damaged in a storm?',
    answer:
      'First, ensure everyone\'s safety and move away from any areas with visible ceiling damage or active leaks. Place buckets under leaks and move valuable items. Do not go on the roof yourself. Call Best Roofing Now at (704) 605-6047 for emergency service. Document any visible damage with photos if safely possible.',
  },
  {
    question: 'Do you work during severe weather in Statesville?',
    answer:
      'We cannot safely work on roofs during active storms, heavy rain, or high winds. However, we will respond immediately after conditions become safe to work. In some cases, we can perform interior emergency measures during the storm and begin exterior work as soon as it passes.',
  },
  {
    question: 'Can you handle large-scale storm damage in Iredell County?',
    answer:
      'Yes, Best Roofing Now has the team and resources to handle large-scale storm damage events in Iredell County. After major storms along the I-77/I-40 corridor, we scale up our operations to serve as many affected homeowners as possible while maintaining our quality standards.',
  },
];

export default function EmergencyRoofRepairStatesvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Emergency Roof Repair Statesville NC', url: `${SITE_CONFIG.url}/emergency-roof-repair-statesville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/emergency-roof-repair-statesville-nc`}
        pageName="Emergency Roof Repair Statesville NC"
        city="Statesville"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.repairs}
            alt="Emergency roof repair services in Statesville NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-red-500/80 rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-semibold">24/7 Emergency Service Available</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Emergency Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Statesville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              24/7 emergency roofing when Iredell County storms strike
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              When your Statesville roof is damaged and you need help fast, Best Roofing Now is here. Our
              emergency team responds within 2-4 hours to secure your property, prevent further damage, and
              start the repair process. Available 24/7, including nights and weekends.
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
                2-4 Hour Response Time
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Google Rating
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
              Emergency Roofing Services in Statesville
            </h2>
            <p className="text-gray text-lg">
              From storm damage to active leaks, our emergency team handles all urgent roofing situations
              in Statesville and Iredell County with speed and expertise.
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
                Why Statesville Trusts Us for Emergency Roof Repair
              </h2>
              <p className="text-gray text-lg mb-8">
                In a roofing emergency, you need a company that responds fast, works efficiently, and does
                the job right the first time. Best Roofing Now brings veteran discipline and certified
                expertise to every emergency call in Iredell County.
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
                alt="Best Roofing Now - Emergency roof repair in Statesville NC"
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
                Roofing Emergency in Statesville? Call Now.
              </h2>
              <p className="text-white/90">
                Our 24/7 emergency team is ready to respond to your Iredell County roofing emergency.
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
                Request Service
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Emergency Roofing for Statesville & Iredell County
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Statesville's location at the intersection of I-77 and I-40 places it in the path of severe
                weather systems that move through the North Carolina Piedmont. Thunderstorms, high winds,
                hail, and occasional tornadoes can cause sudden, serious damage to roofs throughout Iredell
                County. When disaster strikes, Best Roofing Now is ready.
              </p>
              <p>
                Our emergency response process is designed for speed and effectiveness. When you call, we
                gather essential information about your situation, dispatch our nearest crew, and arrive at
                your Statesville home prepared to secure your property. We begin with emergency tarping or
                temporary repairs to stop water intrusion, then plan and execute permanent repairs.
              </p>
              <p>
                As a veteran-owned company, we bring military-level organization and urgency to every emergency
                call. Our team understands that when your roof is compromised, every hour matters. We will work
                quickly and efficiently to protect your home, document damage for insurance purposes, and
                restore your roof to full protection.
              </p>
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
              Emergency Roofing Throughout Statesville & Iredell County
            </h2>
            <p className="text-gray text-lg">
              Our emergency team serves all of Statesville and surrounding Iredell County communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Statesville Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {localAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

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
                Emergency Roof Repair FAQs for Statesville
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about emergency roofing services in Statesville NC.
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
        city="Statesville"
        slug="emergency-roof-repair-statesville-nc"
      />

      <CityGeoSection
        city="Statesville"
        state="NC"
        citySlug="statesville-nc"
        service="Emergency Roof Repair"
      />

      <CTASection
        title="Roof Emergency in Statesville? We're Here 24/7."
        subtitle="Call now for immediate emergency roofing assistance. Our team will respond quickly to secure your property and prevent further damage."
      />
    </>
  );
}
