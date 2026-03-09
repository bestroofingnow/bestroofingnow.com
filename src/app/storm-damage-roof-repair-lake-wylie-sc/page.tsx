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
  Clock,
  Wrench,
  MapPin,
  CloudRain,
  CloudLightning,
  Wind,
  AlertTriangle,
  FileCheck,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import {
  BreadcrumbSchema,
  FAQSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Storm Damage Roof Repair Lake Wylie SC | Insurance Claims | Best Roofing Now',
  description:
    'Expert storm damage roof repair in Lake Wylie SC. Hail damage, wind damage, fallen trees. Insurance claim specialists. 24/7 emergency response. BBB A+ rated, veteran-owned. Call (704) 605-6047.',
  keywords: [
    'storm damage roof repair lake wylie sc',
    'hail damage roofing lake wylie',
    'wind damage roof lake wylie',
    'roof insurance claim lake wylie sc',
    'emergency roof repair lake wylie sc',
    'storm damage roofer lake wylie',
    'hail damage roof repair lake wylie',
    'roof storm damage lake wylie sc',
    'insurance roof claim lake wylie',
    'emergency roofing lake wylie sc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/storm-damage-roof-repair-lake-wylie-sc`,
  },
  openGraph: {
    title: 'Storm Damage Roof Repair Lake Wylie SC | Insurance Claims | Best Roofing Now',
    description:
      'BBB A+ rated storm damage roof repair in Lake Wylie SC. Insurance claim specialists with 24/7 emergency response. Veteran-owned. Free inspections!',
    url: `${SITE_CONFIG.url}/storm-damage-roof-repair-lake-wylie-sc`,
    type: 'website',
    images: [
      {
        url: IMAGES.realProjects.project5,
        width: 1200,
        height: 630,
        alt: 'Storm damage roof repair Lake Wylie SC - Best Roofing Now',
      },
    ],
  },
};

// Storm types
const stormTypes = [
  {
    icon: CloudRain,
    title: 'Hail Damage',
    description: 'Hail can crack, dent, or dislodge shingles, creating hidden vulnerabilities. We identify all hail damage and document it thoroughly for insurance claims.',
  },
  {
    icon: Wind,
    title: 'Wind Damage',
    description: 'High winds lift, tear, and remove shingles exposing your Lake Wylie home to water intrusion. We repair and replace wind-damaged roofing materials quickly.',
  },
  {
    icon: CloudLightning,
    title: 'Severe Storm Damage',
    description: 'Thunderstorms bring a combination of wind, rain, and hail that can cause extensive roof damage requiring immediate attention.',
  },
  {
    icon: AlertTriangle,
    title: 'Fallen Tree & Debris',
    description: 'Fallen trees and large debris can cause structural damage to your roof. We handle emergency tarping, debris removal, and complete repairs.',
  },
  {
    icon: CloudRain,
    title: 'Heavy Rain & Leaks',
    description: 'Torrential rain exposes existing vulnerabilities and can cause active leaks. We provide emergency leak repair and waterproofing solutions.',
  },
  {
    icon: Wind,
    title: 'Hurricane & Tropical Storms',
    description: 'Lake Wylie SC is susceptible to tropical storm remnants. We handle large-scale wind and water damage restoration with insurance assistance.',
  },
];

// Insurance claim process
const claimProcess = [
  {
    step: '1',
    title: 'Free Storm Damage Inspection',
    description: 'We perform a thorough inspection of your Lake Wylie roof documenting all storm damage with detailed photos and reports.',
  },
  {
    step: '2',
    title: 'File Your Insurance Claim',
    description: 'We help you file your claim with your insurance company, providing all necessary documentation and damage reports.',
  },
  {
    step: '3',
    title: 'Meet with Your Adjuster',
    description: 'We meet with your insurance adjuster on-site to walk through the damage and advocate for fair coverage of all repairs.',
  },
  {
    step: '4',
    title: 'Repair or Replace Your Roof',
    description: 'Once approved, we complete the repairs or replacement using premium materials with industry-leading warranties.',
  },
];

// Emergency response features
const emergencyFeatures = [
  {
    icon: Clock,
    title: '24/7 Emergency Response',
    description: 'Round-the-clock emergency service for Lake Wylie homeowners. We typically respond within 2-4 hours for active emergencies.',
  },
  {
    icon: Shield,
    title: 'Emergency Tarping',
    description: 'Immediate tarping to prevent further water damage while permanent repairs are planned and scheduled.',
  },
  {
    icon: FileCheck,
    title: 'Insurance Claim Specialists',
    description: 'We handle the entire insurance claim process from documentation to adjuster meetings to final settlement.',
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints filed.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed SC roofing contractor with comprehensive liability and workers comp insurance.',
  },
  {
    icon: Star,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned with military values of integrity, urgency, and excellence guiding our response.',
  },
];

// Lake Wylie areas
const lakeWylieAreas = [
  'Lake Wylie',
  'Tega Cay',
  'Clover',
  'Lake Wylie Pointe',
  'River Hills',
  'The Palisades',
  'Reflection Pointe',
  'Catawba Creek',
  'McConnells',
  'Bethany',
  'Fort Mill',
  'Rock Hill',
];

// FAQs
const faqs = [
  {
    question: 'What should I do after storm damage to my roof in Lake Wylie?',
    answer: 'After a storm damages your Lake Wylie roof, first ensure your family is safe. Then document visible damage with photos, cover any obvious holes or leaks if safe to do so, and call Best Roofing Now at (704) 605-6047 for an emergency inspection. Do not attempt to climb on a damaged roof. We will assess the damage, provide emergency tarping if needed, and help you file your insurance claim.',
  },
  {
    question: 'Does insurance cover storm damage roof repair in Lake Wylie SC?',
    answer: 'Most homeowner insurance policies cover storm damage including hail, wind, and fallen trees minus your deductible. Best Roofing Now specializes in helping Lake Wylie homeowners navigate insurance claims. We provide detailed documentation, meet with adjusters, and advocate for fair coverage. We have helped hundreds of homeowners get their storm damage repairs fully covered by insurance.',
  },
  {
    question: 'How quickly can you respond to storm damage in Lake Wylie?',
    answer: 'Best Roofing Now offers 24/7 emergency response for storm damage in Lake Wylie SC. For active emergencies like major leaks or structural damage, we typically respond within 2-4 hours. We will provide emergency tarping to prevent further damage and schedule a full inspection and repair plan as quickly as possible.',
  },
  {
    question: 'How can I tell if my Lake Wylie roof has storm damage?',
    answer: 'Signs of storm damage include missing or displaced shingles, dented or bruised shingles (hail damage), granules in gutters, cracked or split shingles, damaged flashing, dented vents or gutters, and water stains on ceilings. After any significant storm in Lake Wylie, we recommend a free professional inspection as some damage is not visible from the ground.',
  },
  {
    question: 'Do you help with the insurance claim process?',
    answer: 'Absolutely. Insurance claim assistance is one of our core services. We handle the entire process including thorough damage documentation with photos, filing the claim, meeting with your insurance adjuster on-site, supplementing the claim if needed, and ensuring you receive fair coverage for all storm damage repairs.',
  },
  {
    question: 'How much does storm damage roof repair cost in Lake Wylie?',
    answer: 'Storm damage repair costs vary based on the extent of damage. Minor repairs may cost $300-$1,500, while major damage or full replacement can range from $8,500-$25,000. However, most storm damage is covered by homeowner insurance minus your deductible. We provide free inspections and work directly with your insurance company to maximize your coverage.',
  },
];

export default function StormDamageRoofRepairLakeWylieSCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Lake Wylie SC', url: `${SITE_CONFIG.url}/roof-repair-lake-wylie-sc` },
          { name: 'Storm Damage Roof Repair Lake Wylie SC', url: `${SITE_CONFIG.url}/storm-damage-roof-repair-lake-wylie-sc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/storm-damage-roof-repair-lake-wylie-sc`}
        pageName="Storm Damage Roof Repair Lake Wylie SC"
        city="Lake Wylie"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.realProjects.project5}
            alt="Storm damage roof repair Lake Wylie SC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <CloudLightning className="w-4 h-4" />
              <span className="text-sm font-semibold">24/7 Storm Damage Response | Insurance Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Storm Damage Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Lake Wylie SC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Emergency storm damage repair with full insurance claim assistance
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              When storms hit Lake Wylie, Best Roofing Now responds fast. We provide 24/7 emergency roof repair,
              thorough damage assessment, and complete insurance claim management. BBB A+ rated and veteran-owned.
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
                Schedule Free Inspection
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-400" />
                24/7 Emergency Response
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                Insurance Claim Specialists
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Google Rating
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Storm Types Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Types of Storm Damage We Repair in Lake Wylie
            </h2>
            <p className="text-gray text-lg">
              Lake Wylie SC experiences a range of severe weather. We handle all types of storm damage to roofs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stormTypes.map((storm) => (
              <div
                key={storm.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <storm.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{storm.title}</h3>
                <p className="text-gray text-sm">{storm.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Claim Process Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Insurance Claim Process
            </h2>
            <p className="text-gray text-lg">
              We handle the entire insurance claim process so you can focus on your family while we restore your roof.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {claimProcess.map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page Emergency CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Storm Damage? We Respond 24/7
              </h2>
              <p className="text-white/90">
                Call now for emergency tarping and storm damage assessment in Lake Wylie SC.
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
                Schedule Inspection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Features */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Lake Wylie Homeowners Trust Us After Storms
              </h2>
              <p className="text-gray text-lg mb-8">
                When a storm damages your roof, you need a roofer who responds fast, works with your insurance company,
                and delivers quality repairs. Best Roofing Now has helped hundreds of Lake Wylie homeowners recover from storm damage.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {emergencyFeatures.map((item) => (
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
                src={IMAGES.realProjects.project17}
                alt="Storm damage repair completed in Lake Wylie SC by Best Roofing Now"
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
                    <p className="text-sm text-gray">{SITE_CONFIG.googleReviewCount}+ Reviews</p>
                  </div>
                </div>
              </div>
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
              Storm Damage Repair Across Lake Wylie & York County
            </h2>
            <p className="text-gray text-lg">
              We provide emergency storm damage repair throughout Lake Wylie, Tega Cay, and surrounding communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Lake Wylie & York County Areas</h3>
              <div className="flex flex-wrap gap-2">
                {lakeWylieAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Also Serving Nearby</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Fort Mill, SC', href: '/roof-repair-fort-mill-sc' },
                  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
                  { name: 'Charlotte, NC', href: '/locations/charlotte-nc' },
                  { name: 'Pineville, NC', href: '/locations/pineville-nc' },
                ].map((city) => (
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Storm Damage Roof Repair Lake Wylie SC FAQs
              </h2>
              <p className="text-gray text-lg">
                Common questions about storm damage repair and insurance claims in Lake Wylie SC.
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

      {/* Related Services */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              More Roofing Services in Lake Wylie SC
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/roof-repair-lake-wylie-sc"
              className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roof Repair Lake Wylie SC</h3>
              <p className="text-gray text-sm mb-3">Fast, reliable repairs for leaks and general damage.</p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/roof-replacement-lake-wylie-sc"
              className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roof Replacement Lake Wylie SC</h3>
              <p className="text-gray text-sm mb-3">Complete roof replacement with premium materials.</p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/roofers-lake-wylie-sc"
              className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roofers Lake Wylie SC</h3>
              <p className="text-gray text-sm mb-3">Top-rated roofing contractors serving Lake Wylie.</p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="location"
        city="Fort Mill"
        slug="storm-damage-roof-repair-lake-wylie-sc"
      />

      <CityGeoSection
        city="Lake Wylie"
        state="SC"
        citySlug="lake-wylie-sc"
        service="Storm Damage Roof Repair"
      />

      <CTASection
        title="Storm Damage in Lake Wylie? We're Here to Help"
        subtitle="Get a free storm damage inspection and let us handle your insurance claim. 24/7 emergency response available. Call now or schedule online."
      />
    </>
  );
}
