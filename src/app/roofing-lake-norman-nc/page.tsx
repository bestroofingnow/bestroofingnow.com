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
  MapPin,
  Waves,
  Home,
  Building2,
  Wrench,
  Truck,
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
import ProjectMap from '@/components/projects/ProjectMap';
import { LocationProjectGallery } from '@/components/ui/LocationProjectGallery';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { getProjectMarkersForCities } from '@/lib/project-data';

// All cities in the Lake Norman area for project map/gallery
const LAKE_NORMAN_CITIES = ['Mooresville', 'Cornelius', 'Davidson', 'Huntersville', 'Denver', 'Sherrills Ford'];

export const metadata: Metadata = {
  title: 'Lake Norman Roofing | LKN Roofers | Cornelius, Davidson, Mooresville',
  description:
    'Lake Norman\'s trusted roofing company serving Cornelius, Davidson, Mooresville & Huntersville. LKN roofers with 500+ local projects. Free estimates, storm damage experts. Call (704) 605-6047.',
  keywords: [
    'lake norman roofing',
    'lkn roofing',
    'lkn roofers',
    'roofing lake norman nc',
    'lake norman roofers',
    'roofing cornelius nc',
    'roofing davidson nc',
    'roofing mooresville nc',
    'roofing huntersville nc',
    'lake norman roof repair',
    'lake norman roof replacement',
    'waterfront roofing lake norman',
    'storm damage roofing lake norman',
    'metal roofing lake norman',
    'luxury roofing lake norman',
    'best roofers lake norman',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-lake-norman-nc`,
  },
  openGraph: {
    title: 'Lake Norman Roofing | LKN Roofers | Best Roofing Now',
    description:
      'Lake Norman\'s trusted roofing company. Serving Cornelius, Davidson, Mooresville & Huntersville with 500+ local projects. Free estimates & storm damage experts.',
    url: `${SITE_CONFIG.url}/roofing-lake-norman-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.houses.modern1,
        width: 1200,
        height: 630,
        alt: 'Lake Norman roofing services - LKN roofers serving waterfront communities',
      },
    ],
  },
};

// Lake Norman communities we serve
const lakeNormanCommunities = [
  {
    name: 'Cornelius',
    slug: 'cornelius-nc',
    description: 'Jetton Road, The Peninsula, Antiquity neighborhoods',
    population: '32,000+',
    services: ['Residential', 'Waterfront', 'Storm Damage'],
  },
  {
    name: 'Davidson',
    slug: 'davidson-nc',
    description: 'River Run, Westmoreland, Davidson College area',
    population: '14,000+',
    services: ['Historic Homes', 'Metal Roofing', 'Luxury'],
  },
  {
    name: 'Mooresville',
    slug: 'mooresville-nc',
    description: 'The Point, Brawley School, Race City USA',
    population: '50,000+',
    services: ['Commercial', 'Residential', 'Storm Damage'],
  },
  {
    name: 'Huntersville',
    slug: 'huntersville-nc',
    description: 'Birkdale Village, Northcross, Skybrook',
    population: '60,000+',
    services: ['Residential', 'Commercial', 'Emergency'],
  },
  {
    name: 'Denver',
    slug: 'denver-nc',
    description: 'Westport, lakefront properties, rural estates',
    population: '3,500+',
    services: ['Waterfront', 'Metal Roofing', 'New Construction'],
  },
  {
    name: 'Sherrills Ford',
    slug: 'sherrills-ford-nc',
    description: 'Lake Norman south shore communities',
    population: '5,000+',
    services: ['Residential', 'Waterfront', 'Storm Damage'],
  },
];

// Lake Norman roofing services
const lknServices = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roof replacement and repair for Lake Norman homes. GAF, CertainTeed, and Owens Corning certified installations.',
    href: '/residential-roofing-charlotte-nc',
  },
  {
    icon: Waves,
    title: 'Waterfront Home Roofing',
    description: 'Specialized roofing for lakefront properties. Wind-resistant, impact-rated materials designed for lakeside exposure.',
    href: '/luxury-roofing-lake-norman-nc',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, and metal roofing for Lake Norman businesses. Retail centers, restaurants, and office buildings.',
    href: '/commercial-roofing-mooresville-nc',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for storm damage, leaks, and wear. Same-day emergency service available 24/7.',
    href: '/roof-repair-huntersville-nc',
  },
  {
    icon: Shield,
    title: 'Storm Damage Restoration',
    description: 'Insurance claim experts for hail and wind damage. We handle the entire claims process for Lake Norman homeowners.',
    href: '/storm-damage-roof-repair-mooresville-nc',
  },
  {
    icon: Award,
    title: 'Metal Roofing',
    description: 'Standing seam and metal shingle roofing. Perfect for Lake Norman\'s weather with 50+ year lifespans.',
    href: '/metal-roofing-mooresville-nc',
  },
];

// Lake Norman FAQs
const lakeNormanFAQs = [
  {
    question: 'What is the best roofing material for Lake Norman waterfront homes?',
    answer: 'For Lake Norman waterfront homes, we recommend wind-resistant materials rated for 130+ MPH. Standing seam metal roofing is excellent for lakefront exposure, as is Class 4 impact-resistant shingles like GAF HDZ. These materials withstand the unique weather patterns around the lake while providing excellent longevity and curb appeal.',
  },
  {
    question: 'How much does a new roof cost in Lake Norman NC?',
    answer: 'A new roof in Lake Norman typically costs between $10,000 and $30,000 for most homes. The wide range accounts for Lake Norman\'s diverse housing stock, from standard homes in Huntersville to large waterfront estates in The Peninsula. Best Roofing Now provides free estimates with transparent pricing for all Lake Norman communities.',
  },
  {
    question: 'Do you serve all Lake Norman communities?',
    answer: 'Yes! Best Roofing Now serves the entire Lake Norman area including Cornelius, Davidson, Mooresville, Huntersville, Denver, Sherrills Ford, and Terrell. We\'ve completed over 200 roofing projects in the LKN area and understand the unique needs of lakefront and lake-area homes.',
  },
  {
    question: 'How quickly can you respond to storm damage in Lake Norman?',
    answer: 'Best Roofing Now offers 24/7 emergency response for Lake Norman storm damage. We typically arrive within 2-4 hours for emergency tarping and provide full damage assessments within 24 hours. As local Lake Norman roofers, we\'re positioned to respond faster than Charlotte-based companies.',
  },
  {
    question: 'Are you licensed for roofing in both NC counties around Lake Norman?',
    answer: 'Yes, Best Roofing Now is fully licensed, bonded, and insured to perform roofing work in both Mecklenburg County and Iredell County. This covers all Lake Norman communities including Cornelius, Davidson (Mecklenburg) and Mooresville, Troutman (Iredell).',
  },
  {
    question: 'What roofing warranties do you offer for Lake Norman homes?',
    answer: 'As a GAF Master Elite and CertainTeed SELECT ShingleMaster contractor, we offer enhanced warranties up to 50 years on Lake Norman installations. This includes the GAF Golden Pledge warranty and CertainTeed SureStart PLUS coverage, plus our own 10-year workmanship guarantee.',
  },
];

export default async function LakeNormanRoofingPage() {
  const initialMarkers = await getProjectMarkersForCities(LAKE_NORMAN_CITIES);
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Lake Norman Roofing', url: `${SITE_CONFIG.url}/roofing-lake-norman-nc` },
        ]}
      />
      <LocalBusinessSchema includeRating={true} />
      <FAQSchema faqs={lakeNormanFAQs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-lake-norman-nc`}
        pageName="Lake Norman Roofing | LKN Roofers"
        city="Lake Norman"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.houses.modern1}
            alt="Lake Norman roofing - LKN roofers serving Cornelius, Davidson, Mooresville"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Waves className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">Lake Norman&apos;s Trusted Roofers</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Lake Norman Roofing<br />
              <span className="text-accent">LKN&apos;s Premier Roofing Company</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Serving Cornelius, Davidson, Mooresville &amp; Huntersville with 500+ local projects.
              Waterfront home specialists with wind-resistant, impact-rated roofing solutions
              designed for Lake Norman living.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span>5.0 Google Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Award className="w-5 h-5 text-accent" />
                <span>200+ LKN Projects</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Shield className="w-5 h-5 text-accent" />
                <span>Veteran-Owned</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                <Calendar className="w-5 h-5" />
                Free LKN Estimate
              </Button>
              <Button href={`tel:${SITE_CONFIG.phone}`} variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Phone className="w-5 h-5" />
                (704) 605-6047
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lake Norman Communities Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Lake Norman Communities We Serve
            </h2>
            <p className="text-gray-600 text-lg">
              From the waterfront estates of The Peninsula to the charming streets of Davidson,
              we&apos;re the LKN roofers trusted by homeowners across the Lake Norman region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lakeNormanCommunities.map((community) => (
              <Link
                key={community.slug}
                href={`/roofing-${community.slug}`}
                className="group bg-light rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                      {community.name}
                    </h3>
                    <p className="text-sm text-gray-500">{community.population} residents</p>
                  </div>
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <p className="text-gray-600 mb-4">{community.description}</p>
                <div className="flex flex-wrap gap-2">
                  {community.services.map((service) => (
                    <span
                      key={service}
                      className="bg-white text-xs px-2 py-1 rounded-full text-gray-600 border border-gray-200"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lake Norman Projects Map */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">Our Lake Norman Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              200+ Roofing Projects in Lake Norman
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our completed roofing projects across Mooresville, Cornelius, Davidson,
              Huntersville, Denver, and Sherrills Ford. Each pin represents a satisfied homeowner.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <ProjectMap
              cities={LAKE_NORMAN_CITIES}
              initialMarkers={initialMarkers}
              height="500px"
              showControls={true}
              showCityFilter={true}
            />
          </div>

          <div className="text-center mt-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View all Lake Norman projects with photos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lake Norman Project Gallery */}
      <section className="py-16 bg-white">
        <div className="container">
          <LocationProjectGallery
            cities={LAKE_NORMAN_CITIES}
            title="Recent Lake Norman Roofing Projects"
            subtitle="Real roofing projects from Mooresville, Cornelius, Davidson, Huntersville, Denver & Sherrills Ford"
            maxProjects={6}
            showViewAll={true}
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Lake Norman Roofing Services
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive roofing solutions tailored for LKN homes and businesses.
              From waterfront estates to commercial properties, we deliver excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lknServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-primary font-medium group-hover:text-accent transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Lake Norman */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Lake Norman Homeowners Choose Best Roofing Now
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">Local LKN Expertise</h3>
                    <p className="text-gray-600">
                      We understand Lake Norman&apos;s unique weather patterns, HOA requirements, and
                      the special needs of waterfront properties.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">Faster Response Times</h3>
                    <p className="text-gray-600">
                      Based near Lake Norman, we respond faster to emergencies than Charlotte-based
                      companies. 24/7 storm damage service.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">Wind-Resistant Specialists</h3>
                    <p className="text-gray-600">
                      We install Class 4 impact-resistant and 130+ MPH wind-rated roofing perfect
                      for lakeside exposure.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">Insurance Claim Experts</h3>
                    <p className="text-gray-600">
                      We&apos;ve helped hundreds of Lake Norman homeowners navigate storm damage claims
                      with our full documentation and direct adjuster coordination.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">Licensed in Both Counties</h3>
                    <p className="text-gray-600">
                      Fully licensed in Mecklenburg and Iredell Counties, covering all Lake Norman
                      communities without restrictions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.houses.house1}
                alt="Lake Norman waterfront home roofing project"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">200+</div>
                <div className="text-sm text-white/80">Lake Norman Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">Lake Norman Roofing FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Common questions from Lake Norman homeowners about roofing services, costs, and materials.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {lakeNormanFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-primary mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related LKN Pages */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            More Lake Norman Roofing Resources
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/roofing-cornelius-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Cornelius NC</h3>
              <p className="text-sm text-gray-600">Complete roofing services</p>
            </Link>
            <Link href="/roofing-davidson-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Davidson NC</h3>
              <p className="text-sm text-gray-600">Historic &amp; luxury homes</p>
            </Link>
            <Link href="/roofing-mooresville-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Mooresville NC</h3>
              <p className="text-sm text-gray-600">Residential &amp; commercial</p>
            </Link>
            <Link href="/roofing-huntersville-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Huntersville NC</h3>
              <p className="text-sm text-gray-600">Emergency &amp; repairs</p>
            </Link>
            <Link href="/luxury-roofing-lake-norman-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Luxury Roofing LKN</h3>
              <p className="text-sm text-gray-600">Premium waterfront homes</p>
            </Link>
            <Link href="/metal-roofing-mooresville-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Metal Roofing LKN</h3>
              <p className="text-sm text-gray-600">Standing seam &amp; metal</p>
            </Link>
            <Link href="/storm-damage-roof-repair-mooresville-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Storm Damage LKN</h3>
              <p className="text-sm text-gray-600">Insurance claim help</p>
            </Link>
            <Link href="/commercial-roofing-mooresville-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Commercial Roofing</h3>
              <p className="text-sm text-gray-600">LKN businesses</p>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="location"
        city="Mooresville"
        slug="roofing-lake-norman-nc"
        count={4}
        title="Recent Roofing Projects in Lake Norman, NC"
        subtitle="Browse completed roofing projects from the Lake Norman area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-lake-norman-nc`}
      />

      <CTASection
        title="Ready for Your Lake Norman Roofing Project?"
        subtitle="Get a free estimate from Lake Norman's trusted roofing experts. We serve Cornelius, Davidson, Mooresville, Huntersville, and all LKN communities."
      />
    </>
  );
}
