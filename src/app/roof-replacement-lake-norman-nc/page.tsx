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
  Building2,
  Layers,
  RefreshCw,
  MapPin,
  Sparkles,
  DollarSign,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roof Replacement Lake Norman NC',
  description:
    'Roof replacement in Lake Norman NC. Premium wind-resistant and impact-rated materials for waterfront homes. BBB A+ rated. Free estimates. Call (704) 605-6047.',
  keywords: [
    'roof replacement lake norman',
    'new roof lake norman nc',
    'lake norman roof replacement cost',
    'roof replacement cornelius nc',
    'roof replacement davidson nc',
    'lake norman roofer',
    'lakefront roof replacement',
    'waterfront roofing lake norman',
    'lake norman roofing company',
    'best roofer lake norman nc',
    'roof replacement near lake norman',
    'lkn roof replacement',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-replacement-lake-norman-nc`,
  },
  openGraph: {
    title: 'Roof Replacement Lake Norman NC | LKN Roofers | Best Roofing Now',
    description:
      'Premium roof replacement across Lake Norman NC. Wind-resistant and impact-rated materials for waterfront homes. CertainTeed, GAF, and Owens Corning certified. Free estimates!',
    url: `${SITE_CONFIG.url}/roof-replacement-lake-norman-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero4,
        width: 1200,
        height: 630,
        alt: 'Professional roof replacement in Lake Norman NC - Best Roofing Now',
      },
    ],
  },
};

// Replacement services offered
const replacementServices = [
  {
    icon: Home,
    title: 'Asphalt Shingle Roofing',
    description: 'Premium architectural shingles from CertainTeed, GAF, and Owens Corning with enhanced warranties for Lake Norman homes.',
    href: '/services/residential-roofing',
  },
  {
    icon: Layers,
    title: 'Metal Roofing',
    description: 'Standing seam and metal shingle systems ideal for lakefront homes needing superior wind resistance and durability.',
    href: '/services/metal-roofing',
  },
  {
    icon: Building2,
    title: 'Impact-Resistant Shingles',
    description: 'Class 4 impact-rated shingles that withstand hail up to 2 inches - perfect for exposed lakefront properties.',
    href: '/services/residential-roofing',
  },
  {
    icon: RefreshCw,
    title: 'Complete Tear-Off',
    description: 'Full removal of old roofing down to the deck for proper inspection and replacement on your Lake Norman home.',
    href: '/services/roof-replacement',
  },
  {
    icon: Shield,
    title: 'Extended Warranties',
    description: 'Up to 50-year warranties available through our manufacturer certifications.',
    href: '/services/roof-replacement',
  },
  {
    icon: Sparkles,
    title: 'Financing Available',
    description: 'Flexible financing options to fit your budget with competitive rates for Lake Norman homeowners.',
    href: '/financing',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Award,
    title: 'Certified Installers',
    description: 'CertainTeed ShingleMaster, GAF Factory-Certified Contractor for premium warranties.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from Lake Norman homeowners.`,
  },
  {
    icon: Shield,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability and workers comp coverage.',
  },
  {
    icon: Users,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: Clock,
    title: 'Fast Installation',
    description: 'Most roof replacements completed in just 1-3 days with thorough cleanup.',
  },
];

// Lake Norman communities and neighborhoods
const lakeNormanAreas = [
  'Cornelius',
  'Davidson',
  'Mooresville',
  'Huntersville',
  'Denver',
  'Sherrills Ford',
  'The Peninsula',
  'The Point',
  'Langtree',
  'Morrison Plantation',
  'Jetton Road',
  'Birkdale',
];

// Lake Norman city page links
const lakeNormanCityPages = [
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Mooresville', href: '/roof-replacement-mooresville-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Denver', href: '/roof-replacement-denver-nc' },
  { name: 'Sherrills Ford', href: '/locations/sherrills-ford-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Statesville', href: '/locations/statesville-nc' },
];

// Cost comparison data
const materialComparison = [
  {
    material: 'Architectural Shingles',
    costRange: '$8,000 - $18,000',
    lifespan: '25-30 years',
    bestFor: 'Most Lake Norman homes',
    windRating: '130 mph',
  },
  {
    material: 'Impact-Resistant Shingles',
    costRange: '$10,000 - $22,000',
    lifespan: '30-50 years',
    bestFor: 'Waterfront/exposed homes',
    windRating: '130 mph',
  },
  {
    material: 'Standing Seam Metal',
    costRange: '$18,000 - $35,000',
    lifespan: '40-70 years',
    bestFor: 'Lakefront premium homes',
    windRating: '140+ mph',
  },
  {
    material: 'Designer/Luxury Shingles',
    costRange: '$15,000 - $30,000',
    lifespan: '30-50 years',
    bestFor: 'Upscale LKN properties',
    windRating: '130 mph',
  },
];

// FAQs specific to roof replacement in Lake Norman
const faqs = [
  {
    question: 'How much does a roof replacement cost in Lake Norman NC?',
    answer:
      'Roof replacement costs in the Lake Norman area typically range from $8,000-$35,000 depending on home size, materials, and complexity. Architectural shingles average $8,000-$18,000, impact-resistant shingles $10,000-$22,000, and standing seam metal $18,000-$35,000. Larger lakefront homes with complex rooflines may cost more. We provide free, detailed estimates with transparent pricing for all Lake Norman communities.',
  },
  {
    question: 'What roofing materials do you recommend for Lake Norman waterfront homes?',
    answer:
      'For Lake Norman waterfront homes, we recommend impact-resistant Class 4 shingles (CertainTeed NorthGate, GAF Armor Shield II) or standing seam metal roofing. These materials are designed to withstand high winds crossing the lake and hailstones up to 2 inches. Impact-resistant shingles often qualify for insurance premium discounts of 10-28%, making them a smart investment for exposed lakefront properties.',
  },
  {
    question: 'How long does a roof replacement take on a Lake Norman home?',
    answer:
      'Most residential roof replacements across Lake Norman are completed in 1-3 days. Larger lakefront homes with complex designs, multiple roof levels, or steep pitches may take 3-5 days. We work efficiently while maintaining quality standards and always provide a clear timeline before starting. Weather permitting, we complete most projects on schedule.',
  },
  {
    question: 'Do you offer financing for roof replacement in Lake Norman?',
    answer:
      'Yes! We offer flexible financing options to make your Lake Norman roof replacement affordable. Our financing partners provide competitive rates with various term lengths. Many homeowners qualify for low monthly payments. We also work with insurance companies if your roof qualifies for storm damage coverage, which is common around Lake Norman.',
  },
  {
    question: 'What warranties do you offer on new roofs in Lake Norman?',
    answer:
      'As CertainTeed ShingleMaster and GAF Factory-Certified Contractor, we offer enhanced warranty options including GAF\'s Golden Pledge warranty (50 years material + 25 years workmanship), CertainTeed SureStart PLUS warranty, and Owens Corning Platinum Protection. We also provide our own workmanship warranty on every installation across all Lake Norman communities.',
  },
  {
    question: 'Which Lake Norman communities do you serve for roof replacement?',
    answer:
      'We serve the entire Lake Norman region for roof replacement including Cornelius, Davidson, Mooresville, Huntersville, Denver, and Sherrills Ford. We also serve waterfront neighborhoods like The Peninsula, The Point, Langtree, Jetton Road, Morrison Plantation, and all lakeside communities along the 520-mile shoreline.',
  },
  {
    question: 'Will a new roof increase my Lake Norman home value?',
    answer:
      'Yes! A new roof typically returns 60-70% of its cost in increased home value. In Lake Norman\'s competitive real estate market, a new roof is a major selling point and can help your home sell faster. Premium materials like impact-resistant shingles or metal roofing add even more value, especially for waterfront properties where buyers expect quality construction.',
  },
  {
    question: 'Do Lake Norman homes need special roofing considerations?',
    answer:
      'Yes. Lake Norman homes face unique challenges including higher wind exposure from storms crossing the open water, increased hail risk, humidity from the lake, and algae growth potential. We recommend wind-resistant materials (130+ mph rating), impact-resistant shingles for exposed properties, proper ventilation to combat moisture, and algae-resistant shingles. Our team understands these lakeside-specific needs.',
  },
];

export default function RoofReplacementLakeNormanNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Replacement Lake Norman NC', url: `${SITE_CONFIG.url}/roof-replacement-lake-norman-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-replacement-lake-norman-nc`}
        pageName="Roof Replacement Lake Norman NC"
        city="Lake Norman"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much does roof replacement cost in Lake Norman NC?',
            answer: 'Roof replacement in Lake Norman costs $8,000-$35,000 depending on size and materials. Architectural shingles run $8,000-$18,000, impact-resistant shingles $10,000-$22,000, and standing seam metal $18,000-$35,000. Best Roofing Now provides free estimates across Cornelius, Davidson, Mooresville, Huntersville, Denver, and Sherrills Ford.',
            speakableAnswer: 'Roof replacement in Lake Norman costs $8,000 to $35,000 depending on materials. Call Best Roofing Now at 704-605-6047 for a free estimate.',
          },
          {
            question: 'Who is the best roofer in Lake Norman NC?',
            answer: 'Best Roofing Now is Lake Norman\'s top-rated roofing company with a 5-star Google rating and BBB A+ accreditation. This veteran-owned company serves all Lake Norman communities with CertainTeed and GAF certified installations. Call 704-605-6047.',
            speakableAnswer: 'Best Roofing Now is Lake Norman\'s top-rated roofer with 5-star reviews and BBB A+ rating. Call 704-605-6047.',
          },
          {
            question: 'What roofing is best for Lake Norman waterfront homes?',
            answer: 'Impact-resistant Class 4 shingles or standing seam metal roofing are best for Lake Norman waterfront homes. These materials resist high winds crossing the lake and hail damage. Impact-resistant shingles can save 10-28% on insurance premiums.',
            speakableAnswer: 'Impact-resistant shingles or standing seam metal are best for lakefront homes. They resist wind and hail and can save on insurance.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero4}
            alt="Professional roof replacement in Lake Norman NC"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">Lake Norman&apos;s Trusted Roofing Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Replacement <br className="hidden md:block" />
              <span className="text-accent-light">Lake Norman NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium roof replacement for waterfront and inland homes with {SITE_CONFIG.roofsInstalled}+ roofs installed across LKN
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is Lake Norman&apos;s trusted roofing company for complete roof replacements across
              Cornelius, Davidson, Mooresville, Huntersville, Denver, and Sherrills Ford. As certified installers
              for CertainTeed, GAF, and Owens Corning, we deliver exceptional quality with wind-resistant and
              impact-rated materials designed for lakefront exposure.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
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
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Certified Installers
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
              Roof Replacement Options for Lake Norman Homes
            </h2>
            <p className="text-gray text-lg">
              From premium architectural shingles to impact-resistant and metal roofing, we offer materials
              specifically chosen for Lake Norman&apos;s waterfront and inland environments.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {replacementServices.map((service) => (
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

      {/* Cost Comparison Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Cost Guide</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Lake Norman Roof Replacement Cost Comparison
            </h2>
            <p className="text-gray text-lg">
              Compare materials and costs for your Lake Norman roof replacement. Prices reflect typical
              2,000-3,000 sq ft homes in the area.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left p-4 font-bold">Material</th>
                  <th className="text-left p-4 font-bold">Cost Range</th>
                  <th className="text-left p-4 font-bold">Lifespan</th>
                  <th className="text-left p-4 font-bold">Best For</th>
                  <th className="text-left p-4 font-bold">Wind Rating</th>
                </tr>
              </thead>
              <tbody>
                {materialComparison.map((item, index) => (
                  <tr key={item.material} className={index % 2 === 0 ? 'bg-white' : 'bg-light'}>
                    <td className="p-4 font-semibold text-dark">{item.material}</td>
                    <td className="p-4 text-gray">{item.costRange}</td>
                    <td className="p-4 text-gray">{item.lifespan}</td>
                    <td className="p-4 text-gray">{item.bestFor}</td>
                    <td className="p-4 text-gray">{item.windRating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray text-sm mt-4">
            * Costs are estimates for typical Lake Norman homes. Contact us for a free personalized estimate.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Lake Norman Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                A new roof is a major investment in your Lake Norman home. Whether you&apos;re on the waterfront
                in The Peninsula or in an inland neighborhood in Huntersville, we deliver premium materials,
                expert installation, and exceptional warranties.
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
                src={IMAGES.realProjects.drone2}
                alt="Completed roof replacement project in Lake Norman NC"
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
                Ready for a New Roof on Lake Norman?
              </h2>
              <p className="text-white/90">
                Get a free estimate and see why homeowners across all 6 LKN communities trust us.
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
                Get Free Estimate
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

      {/* Service Areas Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serving All Lake Norman Communities
            </h2>
            <p className="text-gray text-lg">
              We provide premium roof replacement services throughout the entire Lake Norman region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Lake Norman Areas */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Lake Norman Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {lakeNormanAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* City Pages */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Explore Our LKN City Pages</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {lakeNormanCityPages.map((city) => (
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

      {/* Certifications Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Certified for Premium Warranties
            </h2>
            <p className="text-gray text-lg">
              Our manufacturer certifications mean your new Lake Norman roof comes with the best warranty coverage available.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">CertainTeed ShingleMaster</h3>
              <p className="text-gray text-sm">
                Top-tier certification with access to SureStart PLUS extended warranties.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">GAF Factory-Certified</h3>
              <p className="text-gray text-sm">
                Authorized for GAF&apos;s Golden Pledge warranty - 50 years material, 25 years workmanship.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">BBB A+ Accredited</h3>
              <p className="text-gray text-sm">
                Better Business Bureau A+ rating. Trusted by Lake Norman homeowners.
              </p>
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
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roof Replacement FAQs - Lake Norman NC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof replacement across the Lake Norman area.
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

      {/* Project Gallery Strip */}
      <GeoProjectGalleryStrip
        pageType="other"
        city="Lake Norman"
        slug="roof-replacement-lake-norman-nc"
        count={4}
        title="Recent Roof Replacement Projects in Lake Norman"
        subtitle="Browse completed roof replacement projects from the Lake Norman region by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roof-replacement-lake-norman-nc`}
      />

      <CityGeoSection
        city="Lake Norman"
        state="NC"
        citySlug="lake-norman"
        service="Roof Replacement"
      />

      <CTASection
        title="Get Your Free Roof Replacement Estimate for Lake Norman"
        subtitle="Contact us today for a free inspection and detailed estimate. We serve Cornelius, Davidson, Mooresville, Huntersville, Denver, and Sherrills Ford with premium roofing solutions built for lakefront living."
      />
    </>
  );
}
