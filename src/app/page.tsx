import { Metadata } from 'next';
import { Shield } from 'lucide-react';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { ServiceAreas } from '@/components/sections/ServiceAreas';
import { FAQ } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTASection';
import {
  FAQSchema,
  BreadcrumbSchema,
  HomePageAEOSchemas,
  SpeakableContent,
  WebPageSchema,
  HeroImageSchema,
  GallerySchema,
  ServiceAreaMapSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
  SpeakableContentBlocks,
  FeaturedSnippetListAnswerSchema,
  LocalBusinessSchema,
  HowToGetRoofEstimateSchema,
  FreeInspectionOfferSchema,
  ReviewsSchema,
} from '@/components/seo/SchemaMarkup';
import { DirectoryCitations, TrustBadges } from '@/components/ui/DirectoryCitations';
import { JamesTip, CommunityInvolvementSection } from '@/components/sections/PersonalTouch';
import { MeetTheFamily } from '@/components/sections/MeetTheFamily';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { SITE_CONFIG, HOMEPAGE_FAQ } from '@/lib/constants';
import { IMAGES, CITY_COORDINATES } from '@/lib/images';

export const metadata: Metadata = {
  title: { absolute: 'Best Roofing Company Charlotte NC | Free Inspection' },
  description: 'Looking for the best roofing company in Charlotte? 5.0 Google Rating, 500+ roofs completed, BBB A+ rated, veteran-owned. Get your FREE roof inspection today! Same-day estimates. Call (704) 605-6047.',
  keywords: [
    // Primary Charlotte brand keywords - homepage is the authority
    'best roofing company Charlotte NC',
    'best roofing company Charlotte',
    'best roofers near me',
    'best roofer Charlotte NC',
    'top rated roofing company Charlotte',
    'veteran owned roofing Charlotte',
    'BBB A+ rated roofer Charlotte',
    '5 star roofing company Charlotte',
    'highly rated roofing company near me',
    'roofing company Charlotte NC',
    'Charlotte roofing contractor',
    'roofers Charlotte NC',
    'roofing contractors Charlotte NC',
    // Generic "near me" keywords for local SEO
    'roofers near me',
    'roofing contractor near me',
  ],
  openGraph: {
    title: "Best Roofing Now | Charlotte's Top-Rated Roofing Company",
    description: 'Charlotte\'s top-rated roofing contractor. 5-star Google rating, veteran-owned, BBB A+ rated. Free roof inspections and estimates.',
    url: 'https://www.bestroofingnow.com',
  },
  alternates: {
    canonical: 'https://www.bestroofingnow.com',
  },
};

export default function HomePage() {
  // Gallery images for schema with geo-tagging
  const charlotteGeo = CITY_COORDINATES['Charlotte'];
  const galleryImages = [
    { url: IMAGES.projects.work1, caption: 'Complete roof replacement in Charlotte NC - asphalt shingle installation', location: { city: 'Charlotte', state: 'NC', ...charlotteGeo } },
    { url: IMAGES.projects.work2, caption: 'Residential roofing project in Myers Park Charlotte', location: { city: 'Charlotte', state: 'NC', ...charlotteGeo } },
    { url: IMAGES.projects.work3, caption: 'Storm damage roof repair in Huntersville NC', location: { city: 'Huntersville', state: 'NC', ...CITY_COORDINATES['Huntersville'] } },
    { url: IMAGES.projects.work4, caption: 'New roof installation in Matthews NC', location: { city: 'Matthews', state: 'NC', ...CITY_COORDINATES['Matthews'] } },
    { url: IMAGES.projects.work5, caption: 'Commercial roofing project in Charlotte metro area', location: { city: 'Charlotte', state: 'NC', ...charlotteGeo } },
  ];

  return (
    <>
      {/* Business schemas - rendered on homepage where reviews/ratings are visible */}
      <LocalBusinessSchema includeRating={true} />
      <HowToGetRoofEstimateSchema />
      <FreeInspectionOfferSchema />
      <ReviewsSchema />
      {/* Enhanced Schema Markup for SEO */}
      <WebPageSchema
        name="Best Roofing Now | Top-Rated Roofing Company Charlotte NC"
        description="Charlotte's top-rated roofing contractor. 5-star Google rating, 500+ roofs installed, veteran-owned. Free inspections, storm damage experts."
        url={SITE_CONFIG.url}
        datePublished="2024-01-01"
        dateModified={new Date().toISOString().split('T')[0]}
        primaryImage={IMAGES.hero.roofTeam}
        breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }]}
      />
      <FAQSchema faqs={HOMEPAGE_FAQ} />
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }]} />
      <HeroImageSchema
        url={IMAGES.hero.roofTeam}
        caption="Best Roofing Now team - Charlotte's top-rated roofing contractors"
        pageUrl={SITE_CONFIG.url}
        location={{ city: 'Charlotte', state: 'NC', ...CITY_COORDINATES['Charlotte'] }}
      />
      <GallerySchema
        name="Best Roofing Now Project Gallery"
        description="Recent roofing projects completed in Charlotte NC and surrounding areas"
        images={galleryImages}
        pageUrl={SITE_CONFIG.url}
      />
      {/* AEO Schemas for Voice Search and AI Assistants */}
      <HomePageAEOSchemas />
      {/* Service Area Map Schema for AI readability */}
      <ServiceAreaMapSchema />
      {/* Speakable Content for Voice Assistants */}
      <SpeakableContent />
      {/* Enhanced AI Search Optimization for Google AI Overview and Voice Assistants */}
      {/* skipFAQ=true because FAQSchema is already included above with HOMEPAGE_FAQ */}
      <AISearchOptimizationBundle
        pageUrl={SITE_CONFIG.url}
        pageName="Best Roofing Now | Charlotte's Top-Rated Roofing Company"
        includeVoiceActions={true}
        city="Charlotte"
        skipFAQ={true}
      />
      {/* Voice Search Action Schema for potential actions */}
      <VoiceSearchActionSchema />
      {/* Featured Snippet List Schema for "signs you need a new roof" */}
      <FeaturedSnippetListAnswerSchema
        question="How do I know if I need a new roof?"
        directAnswer="Look for these 6 warning signs that indicate you need a new roof in Charlotte NC."
        items={[
          'Roof age exceeds 20-25 years',
          'Missing, curling, or cracked shingles',
          'Granules accumulating in gutters',
          'Daylight visible through roof boards',
          'Multiple or recurring leaks',
          'Sagging or soft spots on roof',
        ]}
        pageUrl={SITE_CONFIG.url}
      />
      <Hero
        title="Best Roofing Now - Charlotte's Top-Rated Roofing Company"
        subtitle="Veteran-owned roofing contractor with 500+ roofs installed. Full-service roofing including metal roofing, flat roof repair, gutter installation &amp; cleaning, siding, skylights, and chimney services. Storm damage restoration and insurance claim assistance. 5-star Google rating, BBB A+ accredited."
        backgroundImage={IMAGES.hero.roofTeam}
      />
      <Services
        title="Our Roofing Services"
        subtitle="Comprehensive roofing solutions from Charlotte's trusted general contractor. Roof repair, replacement, gutter services, siding installation, skylights, chimney repair, and building restoration for residential and commercial properties."
        limit={9}
        showAll={false}
      />
      <WhyChooseUs />

      {/* Geo-Tagged Charlotte Project Photos */}
      <GeoProjectGalleryStrip
        pageType="homepage"
        city="Charlotte"
        slug="home"
        count={8}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse our latest completed roofing projects across the Charlotte metro area."
        schemaPageUrl={SITE_CONFIG.url}
      />

      {/* What Makes Us Charlotte's Best - Owner's Perspective */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
              What Makes Us the Best Roofing Company in Charlotte?
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              We get asked this a lot. Here&apos;s our honest answer &mdash; straight from
              our founder, James Turner.
            </p>

            <div className="grid md:grid-cols-5 gap-8 items-start">
              {/* James's Story - Main Column */}
              <div className="md:col-span-3 space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      JT
                    </div>
                    <div>
                      <p className="font-bold text-primary text-lg">James Turner</p>
                      <p className="text-sm text-gray-500">Founder &amp; Owner, Veteran</p>
                    </div>
                  </div>

                  <blockquote className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      &ldquo;When I started Best Roofing Now, I didn&apos;t set out to be the
                      biggest roofing company in Charlotte. I wanted to be the one people trust
                      most. There&apos;s a difference.&rdquo;
                    </p>
                    <p>
                      &ldquo;The big companies run TV ads and put up billboards. We put up roofs.
                      Every referral we get is because a neighbor told their neighbor we did right
                      by them. That&apos;s how we built a 5.0 Google rating with hundreds of
                      reviews &mdash; one honest job at a time.&rdquo;
                    </p>
                    <p>
                      &ldquo;Being &lsquo;the best&rsquo; isn&apos;t about fancy marketing. It&apos;s
                      about answering the phone on the first ring. It&apos;s about showing up when
                      we say we will. It&apos;s about telling a homeowner their roof only needs a
                      $600 repair instead of selling them a $15,000 replacement they don&apos;t
                      need.&rdquo;
                    </p>
                    <p>
                      &ldquo;My daddy Fred and my mama Shirley moved from Alabama to help run this
                      company. That&apos;s how seriously we take it. This isn&apos;t just a
                      business &mdash; it&apos;s the Turner family name on every roof we touch.
                      And that name means something to us.&rdquo;
                    </p>
                  </blockquote>
                </div>

                {/* Proof Points */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-white rounded-xl p-4 text-center border border-gray-100">
                    <p className="text-2xl font-bold text-primary">5.0</p>
                    <p className="text-xs text-gray-500 mt-1">Google Rating</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center border border-gray-100">
                    <p className="text-2xl font-bold text-primary">A+</p>
                    <p className="text-xs text-gray-500 mt-1">BBB Rating</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center border border-gray-100">
                    <p className="text-2xl font-bold text-primary">500+</p>
                    <p className="text-xs text-gray-500 mt-1">Roofs Installed</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center border border-gray-100">
                    <p className="text-2xl font-bold text-primary">15+</p>
                    <p className="text-xs text-gray-500 mt-1">Years in Charlotte</p>
                  </div>
                </div>
              </div>

              {/* Why Customers Choose Us - Sidebar */}
              <div className="md:col-span-2 space-y-6">
                <div className="bg-primary text-white rounded-2xl p-6">
                  <h3 className="font-bold text-lg mb-4">
                    Why Charlotte Homeowners Choose Best Roofing Now
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 font-bold mt-0.5">&#10003;</span>
                      <span>Veteran-owned &amp; family-operated &mdash; not a franchise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 font-bold mt-0.5">&#10003;</span>
                      <span>Same-day estimates &amp; free inspections, every time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 font-bold mt-0.5">&#10003;</span>
                      <span>Never upsell work you don&apos;t need</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 font-bold mt-0.5">&#10003;</span>
                      <span>CertainTeed, GAF &amp; Owens Corning certified</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 font-bold mt-0.5">&#10003;</span>
                      <span>Full insurance claim assistance at no extra cost</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 font-bold mt-0.5">&#10003;</span>
                      <span>Financing available &mdash; $0 down options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 font-bold mt-0.5">&#10003;</span>
                      <span>Serving 60+ Charlotte-area neighborhoods</span>
                    </li>
                  </ul>
                </div>

                <JamesTip tipId="contractor-advice" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GBP Service Categories Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Charlotte&apos;s Full-Service Roofing &amp; Exterior Contractor
            </h2>
            <p className="text-gray-600 mb-8">
              Best Roofing Now is more than just a roofing contractor. As a licensed general contractor and construction company,
              we provide comprehensive exterior services including metal roofing, gutter installation, siding, and storm damage restoration.
            </p>

            {/* GBP Category Cards - Primary Link Tier */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <a href="/roofing-services" className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-6 text-white hover:shadow-xl transition-all group">
                <div className="text-3xl mb-3">🏠</div>
                <h3 className="font-bold text-xl mb-2">Roofing Services</h3>
                <p className="text-white/80 text-sm mb-3">Repair, replacement, inspection, metal roofing &amp; flat roofs</p>
                <span className="inline-flex items-center text-sm font-medium text-white/90 group-hover:text-white">
                  Explore Roofing <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </a>
              <a href="/gutter-services" className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-6 text-white hover:shadow-xl transition-all group">
                <div className="text-3xl mb-3">🌧️</div>
                <h3 className="font-bold text-xl mb-2">Gutter Services</h3>
                <p className="text-white/80 text-sm mb-3">Installation, repair, cleaning &amp; gutter guard systems</p>
                <span className="inline-flex items-center text-sm font-medium text-white/90 group-hover:text-white">
                  Explore Gutters <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </a>
              <a href="/siding-services" className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-6 text-white hover:shadow-xl transition-all group">
                <div className="text-3xl mb-3">🏡</div>
                <h3 className="font-bold text-xl mb-2">Siding Services</h3>
                <p className="text-white/80 text-sm mb-3">James Hardie, vinyl siding installation &amp; repair</p>
                <span className="inline-flex items-center text-sm font-medium text-white/90 group-hover:text-white">
                  Explore Siding <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </a>
              <a href="/storm-restoration" className="bg-gradient-to-br from-accent to-accent-dark rounded-xl p-6 text-white hover:shadow-xl transition-all group">
                <div className="text-3xl mb-3">⛈️</div>
                <h3 className="font-bold text-xl mb-2">Storm Restoration</h3>
                <p className="text-white/80 text-sm mb-3">Emergency service, insurance claims &amp; full restoration</p>
                <span className="inline-flex items-center text-sm font-medium text-white/90 group-hover:text-white">
                  Get Help Now <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </a>
              <a href="/specialty-services" className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-6 text-white hover:shadow-xl transition-all group">
                <div className="text-3xl mb-3">✨</div>
                <h3 className="font-bold text-xl mb-2">Specialty Services</h3>
                <p className="text-white/80 text-sm mb-3">Skylights, ventilation, chimney &amp; flat roof repair</p>
                <span className="inline-flex items-center text-sm font-medium text-white/90 group-hover:text-white">
                  Explore Specialty <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </a>
              <a href="/solar-services" className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl p-6 text-white hover:shadow-xl transition-all group">
                <div className="text-3xl mb-3">☀️</div>
                <h3 className="font-bold text-xl mb-2">Solar Roofing</h3>
                <p className="text-white/80 text-sm mb-3">Solar panel roof integration &amp; solar-ready roofing</p>
                <span className="inline-flex items-center text-sm font-medium text-white/90 group-hover:text-white">
                  Explore Solar <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </a>
              <a href="/metal-roofing-services" className="bg-gradient-to-br from-slate-600 to-slate-800 rounded-xl p-6 text-white hover:shadow-xl transition-all group">
                <div className="text-3xl mb-3">🔩</div>
                <h3 className="font-bold text-xl mb-2">Metal Roofing</h3>
                <p className="text-white/80 text-sm mb-3">Standing seam, metal shingles &amp; steel roofing</p>
                <span className="inline-flex items-center text-sm font-medium text-white/90 group-hover:text-white">
                  Explore Metal <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </a>
              <a href="/commercial-roofing-services" className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-white hover:shadow-xl transition-all group">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="font-bold text-xl mb-2">Commercial Roofing</h3>
                <p className="text-white/80 text-sm mb-3">TPO, EPDM, flat roofs &amp; commercial repairs</p>
                <span className="inline-flex items-center text-sm font-medium text-white/90 group-hover:text-white">
                  Explore Commercial <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </a>
              <a href="/services" className="bg-light rounded-xl p-6 text-primary hover:shadow-xl transition-all group border-2 border-primary/20 hover:border-primary">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="font-bold text-xl mb-2">All 27 Services</h3>
                <p className="text-gray-600 text-sm mb-3">View our complete service directory</p>
                <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-accent">
                  View All <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </a>
            </div>

            {/* Quick Service Links - Secondary Tier */}
            <div className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500 mb-4">Popular Services:</p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="/services/roof-repair" className="bg-light rounded-full px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors">Roof Repair</a>
                <a href="/services/roof-replacement" className="bg-light rounded-full px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors">Roof Replacement</a>
                <a href="/services/metal-roofing" className="bg-light rounded-full px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors">Metal Roofing</a>
                <a href="/services/gutter-installation" className="bg-light rounded-full px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors">Gutter Installation</a>
                <a href="/services/siding-installation" className="bg-light rounded-full px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors">Siding Installation</a>
                <a href="/services/storm-damage" className="bg-light rounded-full px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors">Storm Damage</a>
                <a href="/services/skylight-installation" className="bg-light rounded-full px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors">Skylights</a>
                <a href="/services/emergency-roofing" className="bg-light rounded-full px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors">Emergency Service</a>
              </div>
            </div>

            {/* Charlotte Roofing Landing Pages - High Priority SEO Internal Links */}
            <div className="border-t border-gray-200 pt-8 mt-6">
              <p className="text-sm text-gray-500 mb-4">Charlotte Roofing:</p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="/roofing-charlotte-nc" className="bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors">Roofing Charlotte NC</a>
                <a href="/roofers-charlotte-nc" className="bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors">Roofers Charlotte NC</a>
                <a href="/roofing-company-charlotte-nc" className="bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors">Roofing Company Charlotte</a>
                <a href="/roof-repair-charlotte-nc" className="bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors">Roof Repair Charlotte</a>
                <a href="/roof-replacement-charlotte-nc" className="bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors">Roof Replacement Charlotte</a>
                <a href="/roofing-contractor-charlotte-nc" className="bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors">Roofing Contractor Charlotte</a>
              </div>
            </div>

            {/* Lake Norman & Surrounding Cities - Internal Links */}
            <div className="border-t border-gray-200 pt-8 mt-6">
              <p className="text-sm text-gray-500 mb-4">Service Areas:</p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="/roofing-huntersville-nc" className="bg-accent/10 rounded-full px-4 py-2 text-sm font-medium text-accent-dark hover:bg-accent hover:text-white transition-colors">Huntersville</a>
                <a href="/roofing-mooresville-nc" className="bg-accent/10 rounded-full px-4 py-2 text-sm font-medium text-accent-dark hover:bg-accent hover:text-white transition-colors">Mooresville</a>
                <a href="/roofing-cornelius-nc" className="bg-accent/10 rounded-full px-4 py-2 text-sm font-medium text-accent-dark hover:bg-accent hover:text-white transition-colors">Cornelius</a>
                <a href="/roofing-concord-nc" className="bg-accent/10 rounded-full px-4 py-2 text-sm font-medium text-accent-dark hover:bg-accent hover:text-white transition-colors">Concord</a>
                <a href="/roofing-davidson-nc" className="bg-accent/10 rounded-full px-4 py-2 text-sm font-medium text-accent-dark hover:bg-accent hover:text-white transition-colors">Davidson</a>
                <a href="/roofing-matthews-nc" className="bg-accent/10 rounded-full px-4 py-2 text-sm font-medium text-accent-dark hover:bg-accent hover:text-white transition-colors">Matthews</a>
                <a href="/locations" className="bg-gray-100 rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">All 60+ Locations →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Badge Section */}
      <section className="py-8 bg-gray-50">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <p className="text-lg font-semibold text-gray-700">
              Affordable Financing Options Available
            </p>
            <a
              href="https://app.getpowerpay.com/apply/16995"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ee9c48] hover:bg-[#d98a3a] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Shield className="w-5 h-5" aria-hidden="true" />
              Apply for Roof Financing
            </a>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Meet the Turner Family - Personal Touch */}
      <MeetTheFamily variant="compact" />

      {/* Roofing Tip from James */}
      <section className="py-8 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <JamesTip tipId="insurance-tip" />
          </div>
        </div>
      </section>

      {/* Trust Badges Section with Directory Citations */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="container">
          <div className="text-center mb-6">
            <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">Verified On</p>
          </div>
          <TrustBadges />
          <div className="mt-6 flex justify-center">
            <DirectoryCitations pageType="home" maxLinks={3} variant="inline" title="Also Listed On" />
          </div>
        </div>
      </section>

      <ServiceAreas />

      {/* Community Involvement */}
      <CommunityInvolvementSection count={4} />

      <FAQ />
      <CTASection
        title="Ready to Protect Your Home?"
        subtitle="Get a free, no-obligation roof inspection from Charlotte's most trusted roofing company."
      />
    </>
  );
}
