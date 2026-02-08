import { Metadata } from 'next';
import Link from 'next/link';
import { Play, Youtube, ExternalLink, Video, Film } from 'lucide-react';
import { fetchChannelVideos, YouTubeVideo, FALLBACK_VIDEOS } from '@/lib/youtube-api';
import { YouTubeVideoCard, YouTubeShortCard } from '@/components/ui/YouTubeVideoCard';
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Roofing Videos & Tips',
  description:
    'Watch roofing tips, project videos, and educational content from Best Roofing Now. Learn about roof maintenance, repairs, and what to look for in a Charlotte NC roofing company.',
  keywords: [
    'roofing videos charlotte nc',
    'roof repair tips',
    'roofing educational videos',
    'charlotte roofing company videos',
    'roof inspection videos',
    'roofing how to',
    'best roofing now youtube',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/videos`,
  },
  openGraph: {
    title: 'Roofing Videos & Tips | Best Roofing Now',
    description:
      'Watch our roofing tips, project showcases, and educational content. Learn from Charlotte\'s top-rated roofing experts.',
    url: `${SITE_CONFIG.url}/videos`,
    type: 'website',
  },
};

// Video FAQ for schema
const videoFaqs = [
  {
    question: 'What kind of roofing videos does Best Roofing Now create?',
    answer:
      'We create educational roofing content including roof inspection tips, before/after project showcases, storm damage identification guides, roofing material comparisons, and homeowner advice for maintaining your Charlotte NC roof.',
  },
  {
    question: 'How often does Best Roofing Now post new videos?',
    answer:
      'We regularly post new content including quick tip Shorts and longer educational videos. Subscribe to our YouTube channel to stay updated with the latest roofing tips and project showcases.',
  },
  {
    question: 'Can I request a specific roofing topic for a video?',
    answer:
      'Yes! We love hearing from homeowners about topics they want to learn more about. Contact us or leave a comment on our YouTube channel with your roofing questions and we may create a video addressing them.',
  },
];

export default async function VideosPage() {
  // Fetch videos from YouTube API
  let videos: YouTubeVideo[] = [];

  try {
    videos = await fetchChannelVideos(20);
  } catch (error) {
    console.error('Failed to fetch YouTube videos:', error);
  }

  // If no videos fetched, use fallback (or empty state)
  const hasVideos = videos.length > 0;

  // Separate videos and shorts
  const regularVideos = videos.filter((v) => !v.isShort);
  const shorts = videos.filter((v) => v.isShort);

  // Breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Videos', url: `${SITE_CONFIG.url}/videos` },
  ];

  return (
    <>
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <WebPageSchema
        name="Roofing Videos & Tips | Best Roofing Now"
        description="Watch roofing tips, project videos, and educational content from Charlotte's top-rated roofing company."
        url={`${SITE_CONFIG.url}/videos`}
        datePublished="2024-01-01"
        dateModified={new Date().toISOString().split('T')[0]}
        breadcrumb={breadcrumbItems}
      />
      <FAQSchema faqs={videoFaqs} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24">
        <div className="container">
          <Breadcrumbs
            items={[{ label: 'Home', href: '/' }, { label: 'Videos' }]}
            className="mb-6 text-white/80"
          />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-600 rounded-full px-4 py-2 mb-4">
              <Youtube className="w-5 h-5" />
              <span className="text-sm font-semibold">YouTube Channel</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Roofing Videos & Tips
            </h1>

            <p className="text-xl text-white/90 mb-8">
              Watch educational roofing content, project showcases, and expert tips from
              Charlotte&apos;s top-rated roofing company. Learn how to maintain your roof,
              identify damage, and make informed decisions about repairs and replacements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={SITE_CONFIG.social.youtube}
                external
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={<Youtube className="w-5 h-5" />}
              >
                Subscribe on YouTube
              </Button>
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-accent hover:bg-accent-dark"
              >
                Get a Free Estimate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Feed */}
      {hasVideos ? (
        <>
          {/* Regular Videos Section */}
          {regularVideos.length > 0 && (
            <section className="section bg-white">
              <div className="container">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Video className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary">
                      Latest Videos
                    </h2>
                  </div>
                  <a
                    href={SITE_CONFIG.social.youtube}
                    target="_blank"
                    rel="noopener"
                    className="hidden sm:inline-flex items-center gap-2 text-primary hover:text-accent font-semibold"
                  >
                    View All on YouTube
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularVideos.map((video, index) => (
                    <YouTubeVideoCard
                      key={video.id}
                      video={video}
                      priority={index < 3}
                    />
                  ))}
                </div>

                {/* Mobile link */}
                <div className="text-center mt-8 sm:hidden">
                  <a
                    href={SITE_CONFIG.social.youtube}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold"
                  >
                    View All on YouTube
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </section>
          )}

          {/* Shorts Section */}
          {shorts.length > 0 && (
            <section className="section bg-light">
              <div className="container">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <Film className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-primary">
                        Quick Tips (Shorts)
                      </h2>
                      <p className="text-gray-600 text-sm">Quick roofing tips in 60 seconds or less</p>
                    </div>
                  </div>
                </div>

                {/* Horizontal scrolling shorts grid */}
                <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory md:grid md:grid-cols-4 lg:grid-cols-6 md:overflow-visible md:mx-0 md:px-0">
                  {shorts.map((video, index) => (
                    <div
                      key={video.id}
                      className="flex-shrink-0 w-40 md:w-auto snap-start"
                    >
                      <YouTubeShortCard video={video} priority={index < 4} />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      ) : (
        /* Empty State - API not configured or no videos */
        <section className="section bg-white">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center py-12">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Youtube className="w-10 h-10 text-red-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Watch Us on YouTube
              </h2>
              <p className="text-gray-600 mb-8">
                Visit our YouTube channel to watch roofing tips, project showcases, and educational
                content from Charlotte&apos;s top-rated roofing company.
              </p>
              <Button
                href={SITE_CONFIG.social.youtube}
                external
                variant="primary"
                size="lg"
                icon={<Youtube className="w-5 h-5" />}
              >
                Visit Our YouTube Channel
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Video Topics Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              What You&apos;ll Learn
            </h2>
            <p className="text-gray-600">
              Our video content covers everything Charlotte homeowners need to know about their roofs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Roof Inspections</h3>
              <p className="text-gray-600 text-sm">
                See what we look for during inspections and learn to spot problems early.
              </p>
            </div>

            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Storm Damage</h3>
              <p className="text-gray-600 text-sm">
                How to identify hail, wind, and storm damage on your Charlotte roof.
              </p>
            </div>

            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Material Guides</h3>
              <p className="text-gray-600 text-sm">
                Compare shingles, metal roofing, and other materials for your home.
              </p>
            </div>

            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Project Showcases</h3>
              <p className="text-gray-600 text-sm">
                Watch real roof replacements and repairs in the Charlotte area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Youtube className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Subscribe for Roofing Tips</h2>
                <p className="text-white/80">
                  Get notified when we post new videos and helpful roofing content.
                </p>
              </div>
            </div>
            <Button
              href={SITE_CONFIG.social.youtube}
              external
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-red-600"
              icon={<ExternalLink className="w-5 h-5" />}
            >
              Subscribe on YouTube
            </Button>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">More Resources</h2>
            <p className="text-gray-600">
              Explore more helpful content from Best Roofing Now.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Read Our Blog
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Roofing FAQs
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Project Gallery
            </Link>
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Customer Reviews
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Your Roof Inspected?"
        subtitle="Get a free, no-obligation roof inspection from Charlotte's top-rated roofing company."
      />
    </>
  );
}
