import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Calendar, Camera, ArrowRight, Home, Star } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { fetchAllProjects, formatProjectForDisplay, getProjectStatsByCity } from '@/lib/pmi-api';
import {
  BreadcrumbSchema,
  FAQSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
  SpeakableContentBlocks,
  WebPageSchema,
  FeaturedSnippetListAnswerSchema,
  FreeInspectionOfferSchema,
} from '@/components/seo/SchemaMarkup';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roofing Stories | Real Projects from Charlotte Neighborhoods',
  description: 'Explore real roofing projects from Charlotte neighborhoods. See before & after photos, learn about materials used, and read stories from homeowners we\'ve helped.',
  keywords: [
    'Charlotte roofing projects',
    'roof replacement Charlotte NC',
    'roofing before and after',
    'Charlotte neighborhood roofing',
    'CertainTeed roofing Charlotte',
    'GAF roofing Charlotte',
  ],
  openGraph: {
    title: 'Real Roofing Stories from Charlotte Neighborhoods | Best Roofing Now',
  description: 'See our completed roofing projects across Charlotte. Real homes, real results.',
  url: `${SITE_CONFIG.url}/stories`,
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/stories`,
  },
};

// Story FAQs for voice search
const STORY_FAQS = [
  {
    question: 'How many roofing projects has Best Roofing Now completed in Charlotte?',
  answer: 'Best Roofing Now has completed over 500 roofing projects across Charlotte and surrounding areas including Huntersville, Cornelius, Concord, and Rock Hill. Our project map shows completed work in virtually every Charlotte neighborhood.',
  },
  {
    question: 'Can I see examples of roofs Best Roofing Now has installed in my neighborhood?',
  answer: 'Yes! Our Stories section features real roofing projects organized by neighborhood and zip code. You can browse projects in Myers Park, Ballantyne, Highland Creek, SouthPark, and many more Charlotte neighborhoods.',
  },
  {
    question: 'What roofing materials does Best Roofing Now use most often?',
  answer: 'Our most popular products are CertainTeed Landmark architectural shingles and GAF Timberline HDZ shingles. Both offer excellent durability for Charlotte\'s climate with warranties up to lifetime coverage.',
  },
];

export default async function StoriesPage() {
  // Fetch projects from PMI API
  const projects = await fetchAllProjects();
  const cityStats = await getProjectStatsByCity();

  // Format projects for display
  const formattedProjects = projects
    .filter((p) => p.city && p.state)
    .map(formatProjectForDisplay)
    .sort((a, b) => b.year - a.year || b.month.localeCompare(a.month));

  // Get recent featured projects
  const recentProjects = formattedProjects.slice(0, 12);

  // Get cities sorted by project count
  const citiesSorted = Object.entries(cityStats)
    .sort(([, a], [, b]) => b.count - a.count)
    .slice(0, 10);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Stories', url: `${SITE_CONFIG.url}/stories` },
        ]}
      />
      <FAQSchema faqs={STORY_FAQS} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/stories`}
        pageName="Charlotte Roofing Stories"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <WebPageSchema
        name="Charlotte Roofing Stories | Real Projects | Best Roofing Now"
        url={`${SITE_CONFIG.url}/stories`}
        description="Real roofing projects from Charlotte neighborhoods. Before & after photos, materials selected, timelines, and homeowner stories from 2,000+ completed Charlotte roofs across Ballantyne, SouthPark, Dilworth, Plaza Midwood, Myers Park, and Lake Norman communities."
        primaryImage={IMAGES.hero.hero1}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Stories', url: `${SITE_CONFIG.url}/stories` },
        ]}
      />
      <FeaturedSnippetListAnswerSchema
        question="What kind of roofing projects has Best Roofing Now completed in Charlotte NC?"
        directAnswer="Best Roofing Now has completed 2,000+ roofing projects across Charlotte and surrounding areas, organized into 8 project categories with photo documentation: (1) full architectural shingle replacements (the most common — 60% of projects); (2) Class 4 impact-resistant upgrades for hail-belt protection and 10-30% NC insurance discount; (3) designer/luxury shingle installs (GAF Grand Sequoia, CertainTeed Presidential, OC Berkshire) on Eastover/Foxcroft/Quail Hollow homes; (4) standing-seam metal roofs (copper, zinc, PVDF Kynar steel); (5) natural slate restoration on premier estates; (6) commercial TPO/EPDM/modified bitumen reroofs on warehouses, retail, restaurants; (7) emergency tarp + storm restoration after Florence 2018, Idalia 2023, Helene 2024; (8) historic cedar shake and copper restoration in Elizabeth, Dilworth, Plaza Midwood, Myers Park."
        items={[
          'Full architectural shingle replacements — 60% of projects; standard Charlotte residential reroof',
          'Class 4 impact-resistant upgrades — hail-belt protection; 10-30% NC insurance discount',
          'Designer/luxury shingle installs — Eastover, Foxcroft, Quail Hollow, Myers Park estate homes',
          'Standing-seam metal roofs — copper, zinc, PVDF Kynar steel; lakefront LKN salt-air aluminum',
          'Natural slate restoration — premier estates with engineer-stamped structural drawings',
          'Commercial TPO/EPDM/modified bitumen — warehouses, retail, restaurants on I-77/I-85/I-485 corridors',
          'Emergency tarp + storm restoration — Florence 2018, Idalia 2023, Helene 2024 events',
          'Historic restoration — cedar shake, copper, slate in Elizabeth, Dilworth, Plaza Midwood, Myers Park',
        ]}
        pageUrl={`${SITE_CONFIG.url}/stories`}
      />
      <FreeInspectionOfferSchema />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Roofing Stories from Your Neighborhood
            </h1>
            <p className="speakable-intro text-xl text-white/90 mb-8">
              Real projects. Real homes. Real results. Best Roofing Now has completed 2,000+
              roofing projects across Charlotte and the surrounding communities of Ballantyne,
              SouthPark, Dilworth, Plaza Midwood, Myers Park, NoDa, Eastover, Foxcroft, Steele
              Creek, University City, and the Lake Norman towns of Huntersville, Cornelius,
              Davidson, and Mooresville — from full architectural reroofs to slate restoration
              on premier estates and emergency tarp dispatches after Florence, Idalia, and Helene.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                <div className="text-3xl font-bold">{projects.length}+</div>
                <div className="text-sm text-white/80">Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                <div className="text-3xl font-bold">{Object.keys(cityStats).length}</div>
                <div className="text-sm text-white/80">Cities Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                <div className="text-3xl font-bold">5.0</div>
                <div className="text-sm text-white/80">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">
            Projects by City
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            We&apos;ve completed roofing projects across the Charlotte metro area.
            Click a city to see neighborhood stories.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {citiesSorted.map(([city, stats]) => (
              <Link
                key={city}
                href={`/stories/${city.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center group"
              >
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-dark mb-1">{city}</h3>
                <p className="text-sm text-gray-500">
                  {stats.count} project{stats.count !== 1 ? 's' : ''}
                </p>
                {stats.withPhotos > 0 && (
                  <p className="text-xs text-primary mt-1 flex items-center justify-center gap-1">
                    <Camera className="w-3 h-3" />
                    {stats.withPhotos} with photos
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">
            Recent Projects
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Our latest roofing installations across the Charlotte area.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentProjects.map((project) => (
              <article
                key={project.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                {/* Header with photo indicator */}
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Home className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-dark">{project.name}&apos;s Roof</span>
                  </div>
                  {project.photoCount > 0 && (
                    <span className="flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      <Camera className="w-3 h-3" />
                      {project.photoCount}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  {/* Location */}
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{project.street}, {project.city}</span>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>

                  {/* Product info */}
                  {project.product && (
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <p className="text-sm font-medium text-dark">{project.product}</p>
                      {project.color && (
                        <p className="text-xs text-gray-500">{project.color}</p>
                      )}
                    </div>
                  )}

                  {/* Description preview */}
                  {project.description && (
                    <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                      {project.description}
                    </p>
                  )}

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400">ZIP: {project.zip}</span>
                    <Link
                      href={`/projects/city/${project.city.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-primary text-sm font-medium flex items-center gap-1 hover:underline"
                    >
                      View Projects
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              View All Projects with Photos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* AEO Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {STORY_FAQS.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-dark mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want Your Roof to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied Charlotte homeowners. Get a free inspection
            and see why we&apos;re the most trusted roofer in the area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Free Inspection
            </Link>
            <Link
              href="/instant-estimate"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Get Instant Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// On-demand revalidation (no time-based ISR)
export const revalidate = false;
