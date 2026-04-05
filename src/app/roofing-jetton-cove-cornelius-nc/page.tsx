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
  Gem,
  Sparkles,
  Home,
  Waves,
  MapPin,
  Anchor,
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
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roofing Jetton Cove Cornelius NC',
  description:
    'Expert roofing for Jetton Cove in Cornelius NC. Premium materials for waterfront homes near Jetton Park on Lake Norman. BBB A+ rated. Free estimates.',
  keywords: [
    'jetton cove roofing cornelius nc',
    'roofing jetton cove lake norman',
    'waterfront roofing cornelius nc',
    'jetton cove cornelius roofing contractor',
    'lakefront roofing jetton cove',
    'luxury roofing jetton park area',
    'slate roofing cornelius nc',
    'copper roofing jetton cove',
    'cedar shake roofing cornelius',
    'designer shingles jetton cove',
    'lake norman roofing cornelius',
    'premium roofing cornelius nc',
    'standing seam metal roofing cornelius nc',
    'jetton road roofing cornelius',
    'waterfront home roofing lake norman',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-jetton-cove-cornelius-nc`,
  },
  openGraph: {
    title: 'Roofing Jetton Cove Cornelius NC | Waterfront Roofing',
    description:
      'Premium roofing for Jetton Cove, Cornelius\' waterfront luxury community near Jetton Park. Expert installation of copper, slate, and designer shingles for homes valued $700K-$2M+.',
    url: `${SITE_CONFIG.url}/roofing-jetton-cove-cornelius-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Roofing Jetton Cove Cornelius NC - Best Roofing Now waterfront specialists',
      },
    ],
  },
};

// Premium roofing services for Jetton Cove
const services = [
  {
    title: 'Designer Shingles',
    description: 'GAF Grand Canyon, CertainTeed Grand Manor, and Owens Corning Berkshire -- luxury appearance with Class 4 impact resistance and lifetime warranties. Ideal for Jetton Cove homes.',
    benefits: ['Lifetime warranty', 'Impact rated', 'HOA approved'],
    href: '/designer-shingles-charlotte-nc',
  },
  {
    title: 'Standing Seam Metal',
    description: 'Wind-rated to 140+ MPH, perfect for Jetton Cove\'s lakefront exposure near Jetton Park. Premium finishes in a range of colors that enhance waterfront architecture.',
    benefits: ['Wind resistant', 'Low maintenance', 'Energy efficient'],
    href: '/metal-roofing-charlotte-nc',
  },
  {
    title: 'Copper Roofing & Accents',
    description: 'Elegant copper work for dormers, bay windows, and chimney flashings. Copper develops a beautiful patina that adds timeless character to Jetton Cove waterfront homes.',
    benefits: ['100+ year life', 'Corrosion proof', 'Increases value'],
    href: '/copper-roofing-charlotte-nc',
  },
  {
    title: 'Natural Slate Roofing',
    description: 'Authentic slate provides unmatched beauty and 100+ years of protection. The ultimate material for Jetton Cove homeowners seeking heirloom-quality roofing.',
    benefits: ['Timeless beauty', 'Fire resistant', 'Heirloom quality'],
    href: '/slate-roofing-charlotte-nc',
  },
  {
    title: 'Cedar Shake Roofing',
    description: 'Premium fire-treated cedar shake creates natural warmth and character. Hand-split shakes complement the lakeside setting of Jetton Cove beautifully.',
    benefits: ['Natural insulation', 'Rustic elegance', 'Eco-friendly'],
    href: '/cedar-shake-roofing-charlotte-nc',
  },
  {
    title: 'Storm Damage Restoration',
    description: 'Rapid response for Jetton Cove homes after Lake Norman storms. We coordinate with your insurance company and HOA for seamless restoration.',
    benefits: ['24/7 emergency', 'Insurance liaison', 'Quick response'],
    href: '/hail-damage-roof-repair-charlotte-nc',
  },
];

// Why choose us for Jetton Cove
const whyChooseUs = [
  {
    icon: Waves,
    title: 'Waterfront Roofing Experts',
    description: 'Specialized expertise with Lake Norman\'s wind patterns, moisture challenges, and the unique demands of waterfront roofing near Jetton Park.',
  },
  {
    icon: Award,
    title: 'Premium Certifications',
    description: 'GAF Master Elite, CertainTeed ShingleMaster, and certified copper and slate installers trusted for luxury waterfront properties.',
  },
  {
    icon: Home,
    title: 'HOA & ARB Experience',
    description: 'Full experience with Jetton Cove architectural review requirements. We handle submissions, material samples, and ensure complete compliance.',
  },
  {
    icon: Shield,
    title: 'Enhanced Warranties',
    description: 'Manufacturer-backed warranties up to 50 years on materials, backed by our comprehensive installation workmanship guarantee.',
  },
  {
    icon: Gem,
    title: 'Luxury Home Expertise',
    description: 'Our crews are experienced working on homes valued $700K-$2M+. We protect landscaping, outdoor living spaces, and finishes throughout every project.',
  },
  {
    icon: Clock,
    title: 'Minimal Disruption',
    description: 'We know Jetton Cove homeowners value their lakefront lifestyle. Our crews work efficiently to complete projects with minimal disruption to your daily routine.',
  },
];

// FAQs for Jetton Cove
const faqs = [
  {
    question: 'What roofing materials are best for Jetton Cove waterfront homes?',
    answer:
      'For Jetton Cove properties near Lake Norman, we recommend wind-rated and moisture-resistant materials: designer architectural shingles with Class 4 impact resistance, standing seam metal (140+ MPH rated), copper accents, or natural slate. The best choice depends on your home\'s specific exposure to the lake, architectural style, and budget. We provide a detailed assessment during our free on-site consultation.',
  },
  {
    question: 'How much does roofing cost in Jetton Cove?',
    answer:
      'Roofing costs in Jetton Cove vary by home size and material selection. For homes typically ranging from 2,500-5,000+ sq ft, designer shingles run $35,000-$80,000, standing seam metal $50,000-$120,000, cedar shake $55,000-$130,000, and natural slate $90,000-$200,000+. We provide detailed estimates after inspecting your Jetton Cove property.',
  },
  {
    question: 'Do you handle Jetton Cove HOA requirements?',
    answer:
      'Yes, we have experience with Jetton Cove\'s architectural guidelines and review process. We prepare all necessary documentation, provide material samples and color selections for HOA review, and ensure your new roof meets all community standards before beginning work. We can attend HOA meetings on your behalf if needed.',
  },
  {
    question: 'What wind rating do you recommend near Jetton Park?',
    answer:
      'For Jetton Cove homes near Lake Norman and Jetton Park, we recommend minimum 110 MPH wind-rated materials, with 130-140 MPH ratings for lakefront and exposed positions. The Jetton Park area receives direct wind exposure from the lake, especially during summer storms. Higher wind ratings also qualify for homeowner insurance premium reductions.',
  },
  {
    question: 'Can you work on both lakefront and lake-access Jetton Cove homes?',
    answer:
      'Absolutely. Jetton Cove features a mix of direct lakefront properties and lake-access homes, and we have experience with both. Lakefront homes may need higher wind ratings and additional moisture protection, while lake-access homes benefit from premium materials that enhance value and curb appeal. We tailor our recommendations to each property\'s specific needs.',
  },
  {
    question: 'How do you protect Jetton Cove properties during roof work?',
    answer:
      'We implement full protection protocols for Jetton Cove homes including: tarping and sealing each evening, debris containment to protect landscaping, driveways, and outdoor living areas, careful equipment placement, and daily cleanup. For lakefront properties, we add dock and waterfront protection measures to prevent any debris from reaching the lake.',
  },
  {
    question: 'Do you offer free estimates for Jetton Cove homes?',
    answer:
      'Yes, we provide complimentary on-site estimates for all Jetton Cove homeowners. During the estimate visit, we inspect your current roof condition, assess wind and moisture exposure, discuss material options that fit your style and budget, and provide a detailed written estimate. We can also bring material samples for you to review in person.',
  },
  {
    question: 'What is the best time of year to replace a Jetton Cove roof?',
    answer:
      'In the Lake Norman region, roofing can be done year-round, but spring (March-May) and fall (September-November) offer the most consistent weather. Summer is also popular but Lake Norman thunderstorms may cause brief delays. We recommend scheduling during these windows for the smoothest project timeline. Contact us early to secure your preferred dates.',
  },
];

export default function RoofingJettonCoveCorneliusPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Cornelius NC', url: `${SITE_CONFIG.url}/roofing-cornelius-nc` },
          { name: 'Roofing Jetton Cove Cornelius NC', url: `${SITE_CONFIG.url}/roofing-jetton-cove-cornelius-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-jetton-cove-cornelius-nc`}
        pageName="Roofing Jetton Cove Cornelius NC"
        city="Cornelius"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Waves className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold">Waterfront Roofing Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Jetton Cove <br className="hidden md:block" />
              <span className="text-blue-300">Cornelius NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium waterfront roofing near Jetton Park on Lake Norman
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Jetton Cove offers a blend of lakefront and lake-access luxury living in Cornelius, near the
              popular Jetton Park on Lake Norman. With homes valued from $700K to $2M+, Best Roofing Now
              provides the premium materials and waterfront expertise that Jetton Cove homeowners need --
              from designer shingles and standing seam metal to copper accents and natural slate.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-blue-500 hover:bg-blue-400 text-white"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Request Waterfront Consultation
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Waves className="w-5 h-5 text-blue-300" />
                Waterfront Experts
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-300" />
                140+ MPH Wind Rated
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-300" />
                GAF Master Elite
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Jetton Cove */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Waterfront Luxury Near Jetton Park
              </h2>
              <p className="text-gray text-lg mb-4">
                Jetton Cove in Cornelius sits in one of Lake Norman&apos;s most desirable locations, adjacent to
                the scenic Jetton Park. The community features a mix of direct lakefront estates and lake-access
                homes, with properties ranging from spacious family homes to expansive waterfront retreats.
              </p>
              <p className="text-gray text-lg mb-6">
                Whether your Jetton Cove home overlooks the lake or enjoys convenient lake access, your roof
                must withstand Lake Norman&apos;s weather while complementing the community&apos;s upscale
                aesthetic. We deliver both -- with materials and craftsmanship built for lakeside living.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">$700K-$2M+</p>
                  <p className="text-sm text-gray">Home Values</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">Waterfront</p>
                  <p className="text-sm text-gray">& Lake Access</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">Jetton Park</p>
                  <p className="text-sm text-gray">Adjacent</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">Premium</p>
                  <p className="text-sm text-gray">Cornelius Location</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.hero.hero1}
                alt="Waterfront roofing Jetton Cove Cornelius NC near Jetton Park"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-700 text-white rounded-xl shadow-lg p-4">
                <p className="font-bold text-2xl">140+</p>
                <p className="text-sm text-white/90">MPH Wind Rated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="section bg-blue-50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">{SITE_CONFIG.googleRating}</p>
              <p className="text-sm text-gray">Google Rating</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">GAF Master Elite</p>
              <p className="text-sm text-gray">Top 2% of Contractors</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">{SITE_CONFIG.bbbRating}</p>
              <p className="text-sm text-gray">BBB Rating</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">{SITE_CONFIG.yearsInBusiness}+ Years</p>
              <p className="text-sm text-gray">Serving Lake Norman</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Premium Roofing Services for Jetton Cove
            </h2>
            <p className="text-gray text-lg">
              We specialize in wind-resistant, impact-rated materials engineered for Lake Norman&apos;s
              waterfront exposure and designed to enhance your Jetton Cove home.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-dark text-xl mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray text-sm mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      <CheckCircle className="w-3 h-3" />
                      {benefit}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center text-primary font-medium text-sm mt-4">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Jetton Cove Homeowners Choose Us
            </h2>
            <p className="text-gray text-lg">
              Waterfront roofing near Jetton Park demands specialized expertise, quality materials,
              and a commitment to protecting your lakeside investment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                  <p className="text-gray text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready for Premium Waterfront Roofing?
              </h2>
              <p className="text-white/90">
                Schedule a consultation with our Jetton Cove roofing specialists.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-700"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Consultation
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-blue-700 hover:bg-white/90"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Materials Detail Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Premium Roofing Materials
            </h2>
            <p className="text-gray text-lg">
              Explore the luxury materials we install on Jetton Cove homes.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/copper-roofing-charlotte-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Copper Roofing</h3>
              <p className="text-gray text-sm mb-3">100+ year lifespan with stunning natural patina</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/slate-roofing-charlotte-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Slate Roofing</h3>
              <p className="text-gray text-sm mb-3">Natural slate for 100+ year heirloom beauty</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/cedar-shake-roofing-charlotte-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Cedar Shake</h3>
              <p className="text-gray text-sm mb-3">Natural wood beauty with 30-50 year lifespan</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/designer-shingles-charlotte-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Designer Shingles</h3>
              <p className="text-gray text-sm mb-3">GAF Grand Canyon, CertainTeed Grand Manor</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Jetton Cove Roofing Expertise Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              What Makes Jetton Cove Roofing Unique
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Jetton Park Proximity</h3>
                <p className="text-gray text-sm">
                  Jetton Cove sits adjacent to Jetton Park, one of Lake Norman&apos;s most popular public parks.
                  This prime location means homes face direct lake exposure and benefit from the park&apos;s natural
                  beauty -- but also need roofing materials rated for the open-water wind patterns in this area.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Mixed Lakefront & Lake-Access</h3>
                <p className="text-gray text-sm">
                  Jetton Cove features both direct lakefront homes and lake-access properties. Lakefront homes
                  need higher wind ratings and enhanced moisture barriers, while lake-access homes benefit from
                  premium materials that boost value and curb appeal. We tailor solutions for each property type.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Cornelius Building Standards</h3>
                <p className="text-gray text-sm">
                  As experienced Cornelius roofers, we know the Town of Cornelius building codes, Mecklenburg
                  County permit requirements, and local inspection standards inside and out. Our familiarity
                  with Cornelius regulations ensures your project proceeds smoothly from start to finish.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Outdoor Living Protection</h3>
                <p className="text-gray text-sm">
                  Jetton Cove homes often feature extensive outdoor living spaces -- decks, patios, screened
                  porches, and lakefront terraces. Our crews implement careful protection protocols for all
                  outdoor areas, ensuring your outdoor living investment is fully protected during roof work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Jetton Cove Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Common questions about waterfront roofing for Jetton Cove in Cornelius.
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

      {/* Related Links */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Explore Our Lake Norman Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/roofing-cornelius-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <MapPin className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Cornelius NC</h3>
              <p className="text-gray text-sm mb-3">Complete roofing services for all Cornelius neighborhoods</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/luxury-roofing-lake-norman-nc" className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <Waves className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Luxury Roofing Lake Norman</h3>
              <p className="text-gray text-sm mb-3">Premium roofing for all Lake Norman waterfront communities</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="location" city="Cornelius" slug="roofing-jetton-cove-cornelius-nc" />

      <CityGeoSection
        city="Cornelius"
        state="NC"
        citySlug="cornelius-nc"
        service="Waterfront Roofing"
      />

      <CTASection
        title="Elevate Your Jetton Cove Home"
        subtitle="Request a consultation with our waterfront roofing specialists. We'll help you select premium materials engineered for lakeside exposure and built to protect your Jetton Cove investment for generations."
      />
    </>
  );
}
