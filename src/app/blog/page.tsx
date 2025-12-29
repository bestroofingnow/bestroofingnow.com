import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { getPosts } from '@/lib/wordpress';

export const metadata: Metadata = {
  title: 'Roofing Blog | Tips & Guides from Charlotte Roofers',
  description:
    'Expert roofing tips, guides, and news from Best Roofing Now. Learn about roof maintenance, repair, replacement, and more from Charlotte\'s trusted roofing company.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog`,
  },
};

// Revalidate every hour
export const revalidate = 3600;

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').trim();
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPage() {
  // Fetch posts from WordPress
  const posts = await getPosts({ perPage: 12 });

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Blog', url: `${SITE_CONFIG.url}/blog` },
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.hero.hero25}
            alt="Roofing tips and guides from Charlotte experts"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-semibold">Roofing Tips & Guides</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expert Roofing Advice for Charlotte Homeowners
            </h1>
            <p className="text-xl text-white/90">
              Learn from Charlotte&apos;s trusted roofing experts. Tips on maintenance, repair,
              replacement, and protecting your home from the elements.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section">
        <div className="container">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group"
                >
                  {/* Featured Image */}
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    {post._embedded?.['wp:featuredmedia']?.[0]?.source_url ? (
                      <Image
                        src={post._embedded['wp:featuredmedia'][0].source_url}
                        alt={post.title.rendered}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <BookOpen className="w-12 h-12 text-gray-300" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray mb-3">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </div>

                    <h2 className="text-xl font-bold text-dark mb-3 line-clamp-2 group-hover:text-primary transition">
                      <Link href={`/blog/${post.slug}`}>
                        <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                      </Link>
                    </h2>

                    <p className="text-gray mb-4 line-clamp-3">
                      {stripHtml(post.excerpt.rendered).slice(0, 150)}...
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-dark mb-2">No Posts Yet</h2>
              <p className="text-gray">Check back soon for roofing tips and guides!</p>
            </div>
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            Browse by Topic
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Roof Repair',
              'Roof Replacement',
              'Storm Damage',
              'Insurance Claims',
              'Maintenance Tips',
              'Roofing Materials',
              'Energy Efficiency',
              'Commercial Roofing',
            ].map((topic) => (
              <Link
                key={topic}
                href={`/blog?topic=${encodeURIComponent(topic.toLowerCase().replace(' ', '-'))}`}
                className="px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-primary hover:text-white transition"
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
