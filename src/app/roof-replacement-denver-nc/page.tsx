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
  Home,
  Waves,
  DollarSign,
  FileCheck,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roof Replacement Denver NC | Lake Norman | Free Estimates',
  description:
    'Expert roof replacement in Denver NC. Premium materials for Lake Norman western shore homes. GAF & CertainTeed certified. Financing available. Free estimates!',
  keywords: [
    'roof replacement denver nc',
    'denver nc roof replacement',
    'new roof denver nc',
    'roof replacement cost denver nc',
    'replace roof denver nc',
    'denver nc roof replacement cost',
    'lake norman western shore roof replacement',
    'trilogy at lake norman roof replacement',
    'lincoln county roof replacement',
    'residential roof replacement denver nc',
    'full roof replacement denver nc',
    'sailview roof replacement',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-replacement-denver-nc`,
  },
  openGraph: {
    title: 'Roof Replacement Denver NC | Lake Norman Western Shore Specialists',
    description:
      'Premium roof replacement for Denver NC and Lake Norman western shore homes. GAF & CertainTeed certified. Financing available. Free estimates from veteran-owned contractor.',
    url: `${SITE_CONFIG.url}/roof-replacement-denver-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Roof replacement Denver NC - Best Roofing Now',
      },
    ],
  },
};

// Roof replacement options
const roofingOptions = [
  {
    title: 'Architectural Shingles',
    description: 'Premium dimensional shingles with 30-50 year warranties. GAF Timberline and CertainTeed Landmark series, ideal for most Denver homes.',
    priceRange: '$12-18/sq ft',
    bestFor: 'Most Denver homes',
  },
  {
    title: 'Premium Designer Shingles',
    description: 'Luxury appearance mimicking slate or cedar shake. GAF Grand Canyon and CertainTeed Grand Manor for upscale lakefront properties.',
    priceRange: '$18-25/sq ft',
    bestFor: 'Sailview & Pinnacle Shores',
  },
  {
    title: 'Standing Seam Metal',
    description: 'Premium metal roofing rated 140+ MPH wind resistance. 40-70 year lifespan, engineered for western shore wind exposure.',
    priceRange: '$15-25/sq ft',
    bestFor: 'Lakefront & high-wind areas',
  },
  {
    title: 'Impact-Resistant Shingles',
    description: 'Class 4 hail-rated shingles designed for storm-prone areas. May qualify for insurance premium discounts in Lincoln County.',
    priceRange: '$14-20/sq ft',
    bestFor: 'Storm-prone western shore',
  },
];

// Why choose us
const whyChooseUs = [
  {
    icon: Waves,
    title: 'Western Shore Specialists',
    description: 'Deep experience with Lake Norman western shore properties including Trilogy, Sailview, and Westport.',
  },
  {
    icon: Award,
    title: 'GAF & CertainTeed Certified',
    description: 'Factory-certified contractor with access to extended warranties up to 50 years on materials.',
  },
  {
    icon: DollarSign,
    title: 'Financing Available',
    description: 'Flexible financing options with payments as low as $150/month for qualified Denver homeowners.',
  },
  {
    icon: FileCheck,
    title: 'Lincoln County Permit Experts',
    description: 'We handle all Lincoln County permits and inspections - different requirements than Mecklenburg County.',
  },
];

// FAQs
const faqs = [
  {
    question: 'How much does roof replacement cost in Denver NC?',
    answer:
      'Roof replacement in Denver typically ranges from $12,000-$30,000 for most homes with architectural shingles. Lakefront properties in Sailview or Pinnacle Shores with premium materials like standing seam metal or designer shingles may range $30,000-$60,000+. Impact-resistant options are popular on the western shore and typically cost $14-20 per square foot. We provide free detailed estimates for every Denver home.',
  },
  {
    question: 'Does Denver NC require building permits for roof replacement?',
    answer:
      'Yes. Denver is located in Lincoln County, which has separate building permit requirements from Mecklenburg County. A roofing permit is required for full replacements and must be obtained through Lincoln County Building Inspections. Our team handles the entire permitting process, including applications and scheduling final inspections, so you do not have to worry about the paperwork.',
  },
  {
    question: 'What roofing materials are best for Lake Norman western shore homes?',
    answer:
      'For Denver and the western shore, we recommend wind-rated materials that can handle the open water fetch across Lake Norman. Impact-resistant Class 4 shingles rated for 130+ MPH winds are excellent for storm protection and often qualify for insurance discounts. Standing seam metal is ideal for direct lakefront homes in Sailview and Pinnacle Shores. For Trilogy at Lake Norman, architectural shingles that meet HOA requirements are the most popular choice.',
  },
  {
    question: 'How long does roof replacement take in Denver NC?',
    answer:
      'Most Denver roof replacements are completed in 1-3 days depending on size and complexity. Larger lakefront homes with steep pitches or complex rooflines may take 3-5 days. We work efficiently while maintaining quality, secure your home each evening, and coordinate with Lincoln County inspectors for final approval. Weather can affect timing, especially during Lake Norman\'s spring and summer storm seasons.',
  },
  {
    question: 'Do you work with Trilogy at Lake Norman HOA requirements?',
    answer:
      'Absolutely. We have extensive experience working within Trilogy at Lake Norman, the 55+ active adult community in Denver. We understand their architectural review guidelines, approved material selections, and color palettes. We provide all documentation needed for HOA approval, coordinate scheduling to minimize disruption to the community, and ensure every installation meets Trilogy\'s aesthetic standards.',
  },
  {
    question: 'Do you offer financing for roof replacement in Denver?',
    answer:
      'Yes, we offer flexible financing options for Denver homeowners. Qualified buyers can access same-as-cash financing or low monthly payments starting around $150/month. We also work directly with insurance companies for storm damage claims, which may cover full replacement costs. Many Denver homes on the western shore qualify for insurance-funded replacements after major storms.',
  },
  {
    question: 'Why is wind rating important for Denver NC roofs?',
    answer:
      'Denver sits on Lake Norman\'s western shore, where prevailing weather systems approach directly from the west before crossing the open water. The unobstructed fetch across the lake amplifies wind speeds, especially during thunderstorms and nor\'easters. We recommend shingles rated for at least 110 MPH and install them with enhanced nailing patterns. Standing seam metal rated for 140+ MPH is the premium choice for the most exposed lakefront properties.',
  },
  {
    question: 'What warranties do you offer on Denver NC roof replacements?',
    answer:
      'We provide comprehensive warranties: our own 10-year workmanship warranty plus manufacturer warranties up to 50 years on materials. As a GAF Factory-Certified and CertainTeed SELECT ShingleMaster contractor, we can offer extended warranty programs that cover both materials and labor. All warranties are registered with the manufacturer and transferable if you sell your Denver home.',
  },
];

export default function RoofReplacementDenverNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Denver NC', url: `${SITE_CONFIG.url}/roofing-denver-nc` },
          { name: 'Roof Replacement Denver NC', url: `${SITE_CONFIG.url}/roof-replacement-denver-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-replacement-denver-nc`}
        pageName="Roof Replacement Denver NC"
        city="Denver"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Roof replacement Denver NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Waves className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold">Lake Norman Western Shore Roof Replacement</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Replacement <br className="hidden md:block" />
              <span className="text-secondary">Denver NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium Materials | Western Shore Expertise | Financing Available
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now delivers exceptional roof replacements for Denver and Lake Norman&apos;s
              western shore homeowners. From Trilogy at Lake Norman to Sailview and Westport, we install
              premium roofing systems engineered for the unique wind and weather exposure of Lincoln County
              lakefront living.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Estimate
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

            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-secondary" />
                GAF &amp; CertainTeed Certified
              </span>
              <span className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-secondary" />
                Financing Available
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-secondary" />
                50-Year Warranties
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Roofing Options Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Replacement Options for Denver NC
            </h2>
            <p className="text-gray text-lg">
              We offer premium roofing materials selected for Lake Norman&apos;s western shore climate
              and the diverse architectural styles found across Denver neighborhoods.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {roofingOptions.map((option) => (
              <div key={option.title} className="bg-light rounded-xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-dark text-xl">{option.title}</h3>
                  <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                    {option.priceRange}
                  </span>
                </div>
                <p className="text-gray mb-3">{option.description}</p>
                <p className="text-sm font-medium text-primary">
                  Best for: {option.bestFor}
                </p>
              </div>
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
                Why Denver Homeowners Choose Us
              </h2>
              <p className="text-gray text-lg mb-8">
                When it&apos;s time for roof replacement in Denver, choose a contractor with
                western shore expertise, premium certifications, and knowledge of Lincoln County
                building requirements.
              </p>
              <div className="space-y-6">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
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
                src={IMAGES.houses.modern1}
                alt="Denver NC roof replacement project near Lake Norman"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-primary rounded-xl shadow-lg p-4">
                <p className="font-bold text-2xl">$150/mo</p>
                <p className="text-sm">Financing Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Denver NC Roof Replacement Process
            </h2>
            <p className="text-gray text-lg">
              From initial inspection through Lincoln County final approval, we handle every detail
              of your Denver roof replacement project.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-bold text-dark mb-2">Free Inspection</h3>
              <p className="text-gray text-sm">Comprehensive roof assessment with detailed report, photos, and measurement data</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-bold text-dark mb-2">Custom Proposal</h3>
              <p className="text-gray text-sm">Detailed estimate with material options suited for western shore conditions and financing choices</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-bold text-dark mb-2">Expert Installation</h3>
              <p className="text-gray text-sm">Certified crews complete your roof in 1-3 days with full cleanup and Lincoln County permit compliance</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-bold text-dark mb-2">Final Inspection</h3>
              <p className="text-gray text-sm">Quality check, Lincoln County code inspection, and manufacturer warranty registration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Denver-Specific Context Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Roof Replacement Considerations for Denver&apos;s Western Shore
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark mb-3 text-lg">Lincoln County Permits</h3>
                <p className="text-gray text-sm">
                  Unlike Mecklenburg County towns on the eastern shore, Denver falls under Lincoln County
                  jurisdiction. Roof replacement requires a Lincoln County building permit, and the
                  inspection process differs from what Charlotte-area contractors may be accustomed to.
                  Our team has established relationships with Lincoln County inspectors and handles every
                  step of the permitting process.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark mb-3 text-lg">Western Shore Wind Exposure</h3>
                <p className="text-gray text-sm">
                  Denver&apos;s position on Lake Norman&apos;s western shore means homes face prevailing storms
                  head-on. We install enhanced nailing patterns, use wind-rated underlayment, and recommend
                  materials rated for 110-140+ MPH depending on your home&apos;s lake proximity. This attention
                  to wind resistance is what sets our western shore installations apart.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark mb-3 text-lg">Trilogy Community Standards</h3>
                <p className="text-gray text-sm">
                  Trilogy at Lake Norman is Denver&apos;s premier 55+ active adult community with specific
                  architectural guidelines for roofing. We work within Trilogy&apos;s approved materials list,
                  coordinate with community management for access and scheduling, and ensure every replacement
                  meets the community&apos;s high aesthetic standards while maximizing protection.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark mb-3 text-lg">Insurance &amp; Storm Claims</h3>
                <p className="text-gray text-sm">
                  Many Denver homeowners qualify for insurance-funded roof replacements after significant
                  storm events. The western shore&apos;s higher wind exposure often results in storm damage
                  that meets insurance thresholds. We document all damage thoroughly, work directly with
                  your adjuster, and ensure you receive a fair settlement for a complete replacement.
                </p>
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
                Ready for a New Roof in Denver NC?
              </h2>
              <p className="text-white/90">
                Get a free estimate with financing options from Lake Norman&apos;s western shore roofing specialists.
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
                Schedule Free Estimate
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

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Denver NC Roof Replacement FAQs
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

      {/* Service City Links */}
      <ServiceCityLinks
        city="Denver"
        citySlug="denver-nc"
        variant="compact"
      />

      {/* Project Gallery Strip */}
      <GeoProjectGalleryStrip
        pageType="location"
        city="Denver"
        slug="roof-replacement-denver-nc"
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Denver"

        state="NC"

        citySlug="denver-nc"

        service="Roof Replacement"

      />

      <CTASection
        title="Ready for Your New Denver NC Roof?"
        subtitle="Get a free estimate for roof replacement from Lake Norman's western shore roofing experts. Financing available with payments as low as $150/month."
      />
    </>
  );
}
