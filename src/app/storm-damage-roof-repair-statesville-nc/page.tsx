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
  CloudRain,
  Wind,
  AlertTriangle,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';
import { LKNPartnershipsBlock } from '@/components/sections/LKNPartnershipsBlock';
import { LKNDataCitations } from '@/components/sections/LKNDataCitations';
export const metadata: Metadata = {
  title: 'Storm Damage Roof Repair Statesville',
  description:
    'Storm damage roof repair in Statesville NC. Best Roofing Now provides fast storm damage restoration, insurance claim help, and emergency repairs in Iredell County. BBB A+ rated, veteran-owned. Free inspections!',
  keywords: [
    'storm damage roof repair statesville nc',
    'storm damage roofer statesville',
    'hail damage roof repair statesville',
    'wind damage roof statesville nc',
    'storm damage roofing statesville',
    'iredell county storm damage repair',
    'roof insurance claim statesville',
    'storm damage restoration statesville nc',
    'roof storm damage near me statesville',
    'statesville storm damage contractor',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/storm-damage-roof-repair-statesville-nc`,
  },
  openGraph: {
    title: 'Storm Damage Roof Repair Statesville NC | Insurance Claims | Best Roofing Now',
    description:
      'Expert storm damage roof repair in Statesville NC. Insurance claim assistance, emergency repairs, and full restoration. BBB A+ rated, veteran-owned. Free storm damage inspections!',
    url: `${SITE_CONFIG.url}/storm-damage-roof-repair-statesville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.repairs,
        width: 1200,
        height: 630,
        alt: 'Storm damage roof repair in Statesville NC - Best Roofing Now',
      },
    ],
  },
};

// Storm damage services
const stormServices = [
  {
    icon: Wind,
    title: 'Wind Damage Repair',
    description: 'Repair and replacement of shingles, flashing, and roofing components damaged by high winds.',
    href: '/services/storm-damage',
  },
  {
    icon: CloudRain,
    title: 'Hail Damage Repair',
    description: 'Expert assessment and repair of hail damage including bruised and cracked shingles.',
    href: '/services/storm-damage',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Tarping',
    description: 'Immediate tarping to prevent further water damage after severe storms hit Statesville.',
    href: '/emergency-roof-repair-statesville-nc',
  },
  {
    icon: Shield,
    title: 'Insurance Claims Help',
    description: 'Full documentation, adjuster coordination, and advocacy for fair storm damage settlements.',
    href: '/services/storm-damage',
  },
  {
    icon: Home,
    title: 'Full Restoration',
    description: 'Complete storm damage restoration including roof replacement when repair is not sufficient.',
    href: '/roof-replacement-statesville-nc',
  },
  {
    icon: Wrench,
    title: 'Free Storm Inspection',
    description: 'Complimentary post-storm roof inspection with detailed damage documentation and photos.',
    href: '/roof-inspection-statesville-nc',
  },
];

// Why choose us
const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Shield,
    title: 'Insurance Experts',
    description: 'Extensive experience navigating storm damage claims with all major insurance companies.',
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description: '24/7 emergency response for storm damage in the Statesville area.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews including storm damage clients.`,
  },
  {
    icon: Users,
    title: 'Veteran-Owned',
    description: 'Military discipline and integrity in every storm damage project we handle.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured for storm damage restoration in North Carolina.',
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
    question: 'How do I know if my Statesville roof has storm damage?',
    answer:
      'Signs of storm damage include missing or displaced shingles, dented or bruised shingles (hail damage), granule loss visible in gutters, dented flashing or vents, cracked or broken shingles, and water stains on ceilings. After a storm, we recommend a free professional inspection since many types of damage are not visible from the ground.',
  },
  {
    question: 'Will my insurance cover storm damage repair in Statesville?',
    answer:
      'Most homeowner\'s insurance policies cover storm damage including wind, hail, and fallen trees. Your coverage depends on your specific policy and deductible. Best Roofing Now provides thorough documentation, meets with adjusters, and advocates for fair settlements. We help Statesville homeowners navigate the entire claims process.',
  },
  {
    question: 'How quickly can you inspect storm damage in Statesville?',
    answer:
      'We typically schedule storm damage inspections within 24-48 hours of your call. After major storms affecting the Iredell County area, demand increases but we prioritize inspections by urgency. For active leaks or severe damage, we provide emergency response within 2-4 hours.',
  },
  {
    question: 'Do you charge for storm damage inspections in Statesville?',
    answer:
      'No, storm damage inspections are completely free with no obligation. Our certified inspectors will thoroughly examine your roof, document any damage with photos and detailed notes, and provide you with a written report. If damage is found, we will explain your options including filing an insurance claim.',
  },
  {
    question: 'What types of storms cause the most roof damage in Statesville?',
    answer:
      'Statesville\'s location at the I-77/I-40 crossroads exposes homes to severe thunderstorms with high winds and hail, which cause the most common roof damage. Occasional tropical storm remnants can also bring heavy rain and sustained winds. The area sees an average of 3-5 significant storm events per year that can damage roofs.',
  },
  {
    question: 'Should I file an insurance claim for storm damage in Statesville?',
    answer:
      'If your roof has significant storm damage, filing a claim is usually worthwhile. We recommend a free inspection first to assess the damage. If the repair cost exceeds your deductible, filing a claim makes financial sense. Best Roofing Now helps Statesville homeowners determine whether a claim is appropriate and handles the documentation.',
  },
  {
    question: 'How long do I have to file a storm damage claim in Statesville?',
    answer:
      'Most insurance policies require claims to be filed within 1-2 years of the storm event, but it is best to file as soon as possible. Delays can result in additional damage and make it harder to prove the storm caused the damage. We recommend scheduling a free inspection soon after any major storm hits the Iredell County area.',
  },
  {
    question: 'Can storm damage void my roof warranty?',
    answer:
      'Storm damage itself typically does not void your roof warranty - it is a covered event. However, failing to address storm damage promptly can lead to secondary damage that may not be covered. Getting timely repairs after storm damage protects both your warranty coverage and your home from further deterioration.',
  },
];

export default function StormDamageRoofRepairStatesvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Storm Damage Roof Repair Statesville NC', url: `${SITE_CONFIG.url}/storm-damage-roof-repair-statesville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/storm-damage-roof-repair-statesville-nc`}
        pageName="Storm Damage Roof Repair Statesville NC"
        city="Statesville"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.repairs}
            alt="Storm damage roof repair in Statesville NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <CloudRain className="w-4 h-4" />
              <span className="text-sm font-semibold">Storm Damage Restoration Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Storm Damage Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Statesville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Expert storm damage restoration and insurance claim assistance
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Has a storm damaged your Statesville roof? Best Roofing Now provides comprehensive storm damage
              repair, free inspections, and full insurance claim assistance for Iredell County homeowners.
              Our team documents damage thoroughly and advocates for fair settlements on your behalf.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Storm Inspection
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
              Storm Damage Services in Statesville NC
            </h2>
            <p className="text-gray text-lg">
              From free inspections to full restoration, we handle every aspect of storm damage repair
              for Iredell County homeowners including insurance claim assistance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stormServices.map((service) => (
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
                Why Statesville Homeowners Trust Us After Storms
              </h2>
              <p className="text-gray text-lg mb-8">
                After a storm, you need a roofing company that will be honest about your damage, help with
                insurance, and deliver quality repairs. Best Roofing Now has helped hundreds of homeowners
                recover from storm damage across the Charlotte metro area.
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
                alt="Storm damage repair by Best Roofing Now in Statesville NC"
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
                Storm Damage Your Statesville Roof?
              </h2>
              <p className="text-white/90">
                Get a free storm damage inspection and learn about your insurance claim options.
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
                Schedule Free Inspection
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

      {/* Local Area Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Storm Damage Repair for Statesville & Iredell County
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Statesville's position at the crossroads of I-77 and I-40 places it in the path of severe
                weather systems that move through the North Carolina Piedmont region. The area experiences
                an average of 3-5 significant storm events per year that can cause roof damage, including
                severe thunderstorms, damaging hail, and high winds.
              </p>
              <p>
                When storms strike Iredell County, many homeowners discover damage days or weeks later. Common
                signs include missing shingles, granule accumulation in gutters, dented flashing, and water
                stains on ceilings. Our free post-storm inspections help identify all damage, even areas not
                visible from the ground, ensuring nothing is missed before filing your insurance claim.
              </p>
              <p>
                Best Roofing Now guides Statesville homeowners through the entire storm damage recovery process.
                From the initial inspection and damage documentation through insurance claim filing, adjuster
                meetings, and final repairs, our team is with you every step of the way. We never pressure
                homeowners into unnecessary work and always provide honest assessments.
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
              Storm Damage Repair Throughout Statesville & Iredell County
            </h2>
            <p className="text-gray text-lg">
              We provide storm damage restoration to homeowners throughout Statesville and surrounding communities.
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
                Storm Damage FAQs for Statesville
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about storm damage roof repair in Statesville NC.
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
        slug="storm-damage-roof-repair-statesville-nc"
      />

      <CityGeoSection
        city="Statesville"
        state="NC"
        citySlug="statesville-nc"
        service="Storm Damage Roof Repair"
      />


      <LKNPartnershipsBlock city={"Statesville"} />
      <LKNDataCitations city={"Statesville"} />
      <CTASection
        title="Storm Damage in Statesville? We Can Help."
        subtitle="Get a free storm damage inspection and insurance claim assistance from Iredell County's trusted roofing experts. We'll fight for a fair settlement on your behalf."
      />
    </>
  );
}
