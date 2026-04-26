import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
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
  Building2,
  CloudRain,
  Search,
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
  SpeakableContentBlocks,
  WebPageSchema,
  FeaturedSnippetListAnswerSchema,
  FreeInspectionOfferSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roofing Elizabeth Charlotte NC | Historic',
  description:
    'Expert roofer for Elizabeth Charlotte NC historic homes. Craftsman bungalows and Victorians with period-appropriate materials. BBB A+ rated. Free estimates.',
  keywords: [
    'roofing elizabeth charlotte nc',
    'roofers elizabeth charlotte',
    'elizabeth charlotte roofing contractor',
    'historic home roofers charlotte',
    'elizabeth roof repair',
    'elizabeth roof replacement',
    'craftsman bungalow roofing charlotte',
    'synthetic slate roofing elizabeth',
    'best roofer elizabeth charlotte',
    'elizabeth charlotte roofing services',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-elizabeth-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing Elizabeth Charlotte NC | Historic Home Roofer | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing contractor specializing in historic homes in Elizabeth Charlotte NC. Craftsman bungalows, Victorians, and period-appropriate materials. Free estimates.',
    url: `${SITE_CONFIG.url}/roofing-elizabeth-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.neighborhoods.elizabeth,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Elizabeth Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Historic Home Roofing',
    description: 'Specialized roofing for Elizabeth\'s Craftsman bungalows, Victorians, and historic cottages with period-appropriate materials.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'Expert roofing for Elizabeth\'s boutique shops, restaurants, and mixed-use properties along Elizabeth Avenue.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Careful repairs for historic homes requiring attention to original character, detailing, and architectural integrity.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full replacement with architectural shingles, synthetic slate, or metal accents that honor Elizabeth\'s historic aesthetic.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Thorough inspections for Elizabeth\'s older homes with detailed reports on condition, ventilation, and structural integrity.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration with materials that match the historic character of Elizabeth\'s cherished homes.',
    href: '/services/storm-damage',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Elizabeth neighborhood homeowners.`,
  },
  {
    icon: Shield,
    title: 'Historic Home Expertise',
    description: 'Experienced with early 1900s homes, understanding unique challenges of historic roofing systems.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability insurance.',
  },
  {
    icon: Users,
    title: 'Period-Appropriate Materials',
    description: 'Synthetic slate, architectural shingles, and metal accents that preserve Elizabeth\'s historic character.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services when Elizabeth homeowners need us most.',
  },
];

// Elizabeth neighborhoods and areas
const elizabethAreas = [
  'Elizabeth',
  'Elizabeth Avenue',
  'Hawthorne Lane',
  'East Boulevard',
  'Independence Boulevard',
  'Kenilworth',
  'Chantilly',
  'Commonwealth Avenue',
  'Scott Avenue',
  'Clement Avenue',
  'Lamar Avenue',
  'Berkeley Avenue',
  'Pecan Avenue',
  'Lombardy Circle',
  'Sunnyside Avenue',
  'Charlottetowne Avenue',
  'The Plaza',
  'Central Avenue',
  'Randolph Road',
  'Independence Park',
];

// Nearby areas served
const nearbyAreas = [
  { name: 'Myers Park', href: '/roofing-myers-park-charlotte-nc' },
  { name: 'Dilworth', href: '/roofing-dilworth-charlotte-nc' },
  { name: 'Plaza Midwood', href: '/roofing-plaza-midwood-charlotte-nc' },
  { name: 'NoDa', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Uptown', href: '/roofing-contractor-charlotte-nc' },
  { name: 'South End', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Cotswold', href: '/roofing-cotswold-charlotte-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'SouthPark', href: '/roofing-southpark-charlotte-nc' },
  { name: 'Eastover', href: '/roofing-contractor-charlotte-nc' },
];

// FAQs specific to Elizabeth
const faqs = [
  {
    question: 'What roofing services do you offer in Elizabeth Charlotte NC?',
    answer:
      'Best Roofing Now provides complete roofing services in Elizabeth including roof repair, roof replacement, new roof installation, storm damage repair, emergency services, and comprehensive inspections. We specialize in historic home roofing with period-appropriate materials including synthetic slate, architectural shingles, and metal accents.',
  },
  {
    question: 'Do you specialize in historic home roofing in Elizabeth?',
    answer:
      'Yes, Best Roofing Now has extensive experience with Elizabeth\'s historic homes dating back to the early 1900s. We understand the unique challenges of roofing Craftsman bungalows, renovated Victorians, and historic cottages. We use materials that preserve the architectural character while providing modern protection and durability.',
  },
  {
    question: 'How much does a roof replacement cost in Elizabeth?',
    answer:
      'Roof replacement costs in Elizabeth typically range from $12,000-$40,000 depending on home size, roof complexity, and material choice. Historic homes with steep pitches, dormers, or specialty materials like synthetic slate may be on the higher end. We provide detailed, transparent estimates for every project.',
  },
  {
    question: 'What roofing materials are best for Elizabeth\'s historic homes?',
    answer:
      'We recommend architectural shingles for most Elizabeth homes, with synthetic slate for homeowners seeking a historic look without the weight and cost of natural slate. Metal accent roofing works beautifully on dormers and porch roofs. We help you select materials that honor your home\'s early 1900s character while meeting modern building codes.',
  },
  {
    question: 'How long does a roof replacement take on an Elizabeth historic home?',
    answer:
      'Historic homes in Elizabeth typically require 2-5 days for complete roof replacement, depending on size, roof complexity, and material type. Homes with steep pitches, multiple dormers, or specialty materials may take additional time. We work carefully to protect your home\'s historic details throughout the process.',
  },
  {
    question: 'Do you work with Elizabeth neighborhood preservation guidelines?',
    answer:
      'Yes, we understand Elizabeth\'s historic character and work within neighborhood guidelines to ensure roofing materials and colors are appropriate for the area. We can help you navigate any historic district requirements and select materials that satisfy both preservation standards and modern performance needs.',
  },
  {
    question: 'What warranty do you provide on Elizabeth roofing projects?',
    answer:
      'We offer comprehensive warranty coverage including manufacturer warranties up to 50 years on materials and our own workmanship warranty. As certified installers for CertainTeed, GAF, and DaVinci synthetic products, we can offer enhanced warranties like GAF Golden Pledge and CertainTeed SureStart PLUS.',
  },
  {
    question: 'Do you handle insurance claims for storm damage in Elizabeth?',
    answer:
      'Absolutely. Elizabeth\'s mature trees make homes particularly susceptible to wind and debris damage during storms. We provide thorough documentation, work directly with insurance adjusters, and advocate for settlements that cover proper restoration with materials matching your home\'s historic character.',
  },
];

export default function RoofingElizabethCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Elizabeth Charlotte NC', url: `${SITE_CONFIG.url}/roofing-elizabeth-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-elizabeth-charlotte-nc`}
        pageName="Roofing Elizabeth Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <WebPageSchema
        name="Roofing Elizabeth Charlotte NC | Historic Specialists | Best Roofing Now"
        url={`${SITE_CONFIG.url}/roofing-elizabeth-charlotte-nc`}
        description="Historic home roofing in Elizabeth, one of Charlotte's oldest neighborhoods. Period-appropriate Craftsman bungalow, Victorian, and cottage roofing in cedar shake, slate, copper, and architectural shingles. National Register coordination and Historic District compliance."
        primaryImage={IMAGES.neighborhoods.elizabeth}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Elizabeth Charlotte NC', url: `${SITE_CONFIG.url}/roofing-elizabeth-charlotte-nc` },
        ]}
      />
      <FeaturedSnippetListAnswerSchema
        question="What roofing services do Elizabeth Charlotte NC historic homes need?"
        directAnswer="Elizabeth is one of Charlotte's oldest neighborhoods (originally platted 1891) and includes Craftsman bungalows, Victorians, and cottages — many in the National Register-listed Elizabeth Historic District requiring period-appropriate roofing materials and Historic District Commission (HDC) review for exterior changes. Common services include: cedar shake restoration ($12-$22/sq ft) for Craftsman bungalows; natural slate repair and replacement ($20-$35/sq ft) for Victorian-era homes; copper standing-seam and bay-window roofing ($24-$30/sq ft); architectural shingle replacement in heritage-correct colors ($6-$11/sq ft); HDC application coordination (4-6 week typical review); preservation-trained crew with experience in 1890s-1920s detail (rafter tails, knee braces, dormer flashing); and structural assessment for 100+ year framing."
        items={[
          'Cedar shake restoration — $12-$22/sq ft installed; CSSB Certi-Grade tapersawn or Certi-Split for Craftsman bungalows',
          'Natural slate repair and replacement — $20-$35/sq ft installed; matched-quarry sourcing for Victorian-era homes',
          'Copper standing-seam and bay-window roofing — $24-$30/sq ft installed; develops natural patina over 50-100 yr',
          'Architectural shingle in heritage colors — $6-$11/sq ft installed; CertainTeed Carriage House, GAF Camelot II',
          'Charlotte HDC application coordination — 4-6 week typical review; we manage drawings + material samples',
          '1890s-1920s detail preservation — rafter tail exposure, knee brace integration, dormer flashing replication',
          'Structural assessment for 100+ year framing — pre-reroof inspection of original rafters, decking, ridge beam',
          'NC Historic District compliance — required for Elizabeth Historic District; we work with HDC reviewers regularly',
        ]}
        pageUrl={`${SITE_CONFIG.url}/roofing-elizabeth-charlotte-nc`}
      />
      <FreeInspectionOfferSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.neighborhoods.elizabeth}
            alt="Professional roofing contractor in Elizabeth Charlotte NC - Best Roofing Now crew"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">BBB A+ Rated | Historic Home Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Elizabeth <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Historic Home Roofing for One of Charlotte's Oldest Neighborhoods
            </p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now restores and reroofs Elizabeth's historic Craftsman bungalows,
              renovated Victorians, and original cottages dating back to the neighborhood's 1891
              founding. We coordinate Charlotte Historic District Commission (HDC) review for the
              Elizabeth Historic District, install period-appropriate cedar shake (CSSB Certi-Grade),
              natural slate (Vermont, Pennsylvania, Buckingham), copper standing-seam, and
              heritage-color architectural shingles (CertainTeed Carriage House, GAF Camelot II), and
              preserve original 1890s-1920s detail like rafter tails, knee braces, and dormer
              flashing. GAF Master Elite (top 2%), CertainTeed SELECT ShingleMaster, OC Platinum
              Preferred — 30-50 year non-prorated transferable warranties.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Your Free Estimate
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
                Historic Home Specialists
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Elizabeth-Specific Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Specialized Roofing for Elizabeth's Historic Homes
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Elizabeth is one of Charlotte's oldest and most cherished neighborhoods, established in the
                early 1900s and brimming with architectural character. From Craftsman bungalows and renovated
                Victorians to historic cottages and select new builds, Elizabeth homes range from $400K to
                $900K and reflect over a century of Charlotte history.
              </p>
              <p>
                Roofing these treasured homes requires more than standard materials and techniques. At Best
                Roofing Now, we understand the nuances of historic roofing — steep pitches, decorative dormers,
                complex roof lines, and the need for materials that honor the neighborhood's architectural
                heritage while providing modern weather protection.
              </p>
              <h3>Why Elizabeth Homes Need Specialized Roofers</h3>
              <p>
                Elizabeth's housing stock presents challenges that general roofers often mishandle. The
                original 1910s-1930s Craftsman bungalows along Hawthorne Lane and Scott Avenue feature
                low-slope shed dormers, exposed rafter tails, and wide overhanging eaves — details that
                require careful flashing work and materials compatible with the original pitch (often 4:12
                to 6:12). A standard crew unfamiliar with these homes may damage the decorative brackets
                or bargeboard trim during tear-off.
              </p>
              <p>
                The renovated Victorians near Elizabeth Avenue and Commonwealth present the opposite
                challenge: steep cross-gable roofs (often 10:12 to 12:12 pitch) with multiple dormers,
                turrets, and decorative ridge caps. These require steep-slope safety equipment and
                installers experienced with the complex flashing patterns at each roof intersection.
                Improper flashing at dormer-to-main-roof transitions is the number one leak source we
                find on Elizabeth Victorians.
              </p>
              <p>
                Elizabeth sits within Charlotte's older tree canopy zone, with mature oaks, pecans, and
                magnolias. Storm damage from falling branches is common — we typically see 3-5 emergency
                calls from Elizabeth per major summer storm. We stock tarping materials and can respond
                within 30 minutes from our Mallard Creek Road office via I-85 and Independence Boulevard.
              </p>
              <p>
                While Elizabeth is not a designated historic district with formal review boards, neighbors
                and the active Elizabeth Community Association expect exterior changes to respect the
                neighborhood's character. We carry material samples from CertainTeed's Landmark and
                Grand Manor lines, GAF's Camelot II designer shingles, and DaVinci synthetic slate —
                all available in colors that complement the earthy palettes typical of Elizabeth homes.
              </p>
              <p>
                Whether your home is an original Craftsman on Hawthorne Lane, a beautifully renovated Victorian
                near Elizabeth Avenue, or a charming cottage in Kenilworth or Chantilly, our team delivers
                roofing solutions that protect your investment and preserve the character that makes Elizabeth
                one of Charlotte's most walkable, vibrant neighborhoods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Services in Elizabeth Charlotte
            </h2>
            <p className="text-gray text-lg">
              From sensitive historic home repairs to full roof replacements with period-appropriate materials,
              our certified contractors deliver quality roofing for Elizabeth's unique homes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
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
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Elizabeth Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Elizabeth homeowners choose us because we understand historic homes. Our experience with
                early 1900s architecture, combined with access to period-appropriate materials and meticulous
                craftsmanship, makes us the right choice for this historic Charlotte neighborhood.
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
              <SEOImage
                src={IMAGES.neighborhoods.elizabeth}
                alt="Best Roofing Now - Trusted roofing contractor in Elizabeth Charlotte NC"
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
                Need a Historic Home Roofer in Elizabeth?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Charlotte's trusted historic home roofing experts.
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

      {/* Service Areas Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serving All of Elizabeth
            </h2>
            <p className="text-gray text-lg">
              We provide expert roofing services throughout Elizabeth and surrounding Charlotte neighborhoods.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Elizabeth Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Elizabeth Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {elizabethAreas.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Nearby Areas We Serve</h3>
              <div className="grid grid-cols-2 gap-3">
                {nearbyAreas.map((area) => (
                  <Link
                    key={area.name}
                    href={area.href}
                    className="flex items-center gap-2 text-gray hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>{area.name}</span>
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

      {/* Premium Materials Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Materials for Elizabeth's Historic Homes
            </h2>
            <p className="text-gray text-lg">
              We offer materials specifically suited to Elizabeth's early 1900s architecture,
              balancing historic authenticity with modern performance.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Architectural Shingles</h3>
              <p className="text-gray text-sm">
                Premium dimensional shingles from CertainTeed, GAF, and Owens Corning that complement Craftsman and Victorian architecture beautifully.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Synthetic Slate</h3>
              <p className="text-gray text-sm">
                DaVinci and CertainTeed synthetic slate that delivers the historic look of real slate at a fraction of the weight and cost, perfect for Elizabeth's older homes.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Metal Accents</h3>
              <p className="text-gray text-sm">
                Standing seam metal for dormers, porch roofs, and accent areas that add distinctive character while providing exceptional durability on historic homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Work in Elizabeth
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roofing projects in Elizabeth and surrounding Charlotte neighborhoods.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.project1}
                alt="Completed historic home roof replacement in Elizabeth Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed shingle installation on Elizabeth Craftsman bungalow"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.drone1}
                alt="Aerial view of completed roof project in Elizabeth Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.drone2}
                alt="Professional roofing work on Elizabeth historic home"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Projects
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
                Elizabeth Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about historic home roofing services in Elizabeth Charlotte NC.
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

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="roofing-elizabeth-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-elizabeth-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Roofing Elizabeth"
      />

      <CTASection
        title="Ready for Expert Historic Home Roofing in Elizabeth?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide recommendations that honor your Elizabeth home's historic character."
      />
    </>
  );
}
