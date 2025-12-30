import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowLeft, Clock, Phone, ArrowRight } from 'lucide-react';
import { BreadcrumbSchema, ArticleSchema } from '@/components/seo/SchemaMarkup';
import { SITE_CONFIG, SERVICES } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { getPostBySlug, getPosts } from '@/lib/wordpress';

// Low-quality blur placeholder for blog post images
const BLUR_DATA_URL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMH/8QAHxAAAgICAgMBAAAAAAAAAAAAAQIDBAAREiEFE0FR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEQA/AMT8fblq8lYS6CVo4JTE0qsyN6ydrYHH4Oc9aznGVpYoIxUsOqxf/9k=';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

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

function estimateReadTime(content: string): number {
  const words = stripHtml(content).split(/\s+/).length;
  return Math.ceil(words / 200);
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const title = stripHtml(post.title.rendered);
  const description = stripHtml(post.excerpt.rendered).slice(0, 160);

  return {
    title: `${title} | Roofing Blog`,
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.modified,
    },
  };
}

export async function generateStaticParams() {
  // Get recent posts for static generation
  const posts = await getPosts({ perPage: 50 });
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const title = stripHtml(post.title.rendered);
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const readTime = estimateReadTime(post.content.rendered);

  // Get related posts
  const allPosts = await getPosts({ perPage: 4 });
  const relatedPosts = allPosts.filter((p: any) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Blog', url: `${SITE_CONFIG.url}/blog` },
          { name: title, url: `${SITE_CONFIG.url}/blog/${slug}` },
        ]}
      />
      <ArticleSchema
        post={{
          title,
          description: stripHtml(post.excerpt.rendered),
          slug,
          datePublished: post.date,
          dateModified: post.modified,
          image: featuredImage,
          wordCount: stripHtml(post.content.rendered).split(/\s+/).length,
          readingTime: readTime,
        }}
      />

      {/* Article Header */}
      <section className="relative bg-gradient-primary text-white py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={featuredImage || IMAGES.hero.hero26}
            alt={title}
            fill
            className="object-cover opacity-20"
            priority
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">{title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Image */}
              {featuredImage && (
                <div className="aspect-video relative rounded-xl overflow-hidden mb-8">
                  <Image
                    src={featuredImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                  />
                </div>
              )}

              {/* Content */}
              <div
                className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-primary hover:prose-a:text-accent"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />

              {/* Author Box */}
              <div className="mt-12 p-6 bg-light rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    BRN
                  </div>
                  <div>
                    <p className="font-bold text-dark">Best Roofing Now</p>
                    <p className="text-gray">
                      Charlotte&apos;s trusted roofing experts since 2019
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Services - Internal Linking for SEO */}
              <div className="mt-8 p-6 bg-white border border-gray-200 rounded-xl">
                <h3 className="font-bold text-dark mb-4">Our Roofing Services</h3>
                <p className="text-gray text-sm mb-4">
                  Need help with your roof? Explore our professional roofing services in Charlotte NC.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SERVICES.slice(0, 6).map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="text-sm text-primary hover:text-accent transition-colors"
                    >
                      {service.title} →
                    </Link>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="inline-block mt-4 text-sm font-semibold text-primary hover:text-accent"
                >
                  View All Services →
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* CTA Box */}
              <div className="bg-primary text-white rounded-xl p-6 mb-8 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Need Roofing Help?</h3>
                <p className="text-white/80 mb-6">
                  Get a free roof inspection from Charlotte&apos;s most trusted roofing company.
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${SITE_CONFIG.phoneClean}`}
                    className="btn bg-accent hover:bg-accent-dark text-white w-full justify-center"
                  >
                    <Phone className="w-5 h-5" />
                    {SITE_CONFIG.phone}
                  </a>
                  <Link
                    href="/contact"
                    className="btn bg-white text-primary hover:bg-light w-full justify-center"
                  >
                    Free Estimate
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-light rounded-xl p-6">
                  <h3 className="font-bold text-dark mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost: any) => (
                      <Link
                        key={relatedPost.id}
                        href={`/blog/${relatedPost.slug}`}
                        className="block hover:text-primary transition"
                      >
                        <p
                          className="font-medium text-dark line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: relatedPost.title.rendered }}
                        />
                        <p className="text-sm text-gray mt-1">
                          {formatDate(relatedPost.date)}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </article>

      {/* Bottom CTA */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Protect Your Roof?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free roof inspection and honest assessment from Charlotte&apos;s most trusted
            roofing company.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-accent hover:bg-accent-dark text-white"
            >
              <Phone className="w-5 h-5" />
              {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact"
              className="btn bg-white text-primary hover:bg-light"
            >
              Request Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
