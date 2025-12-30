'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, BookOpen, Search, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Low-quality blur placeholder for blog images
const BLUR_DATA_URL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMH/8QAHxAAAgICAgMBAAAAAAAAAAAAAQIDBAAREiEFE0FR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEQA/AMT8fblq8lYS6CVo4JTE0qsyN6ydrYHH4Oc9aznGVpYoIxUsOqxf/9k=';

interface Post {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  _embedded?: {
    'wp:featuredmedia'?: { source_url: string }[];
  };
}

interface BlogContentProps {
  initialPosts: Post[];
}

const POSTS_PER_PAGE = 9;

const TOPICS = [
  'Roof Repair',
  'Roof Replacement',
  'Storm Damage',
  'Insurance Claims',
  'Maintenance Tips',
  'Roofing Materials',
  'Energy Efficiency',
  'Commercial Roofing',
];

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

export default function BlogContent({ initialPosts }: BlogContentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts based on search and topic
  const filteredPosts = useMemo(() => {
    let posts = initialPosts;

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          stripHtml(post.title.rendered).toLowerCase().includes(query) ||
          stripHtml(post.excerpt.rendered).toLowerCase().includes(query)
      );
    }

    // Topic filter (search in title and excerpt)
    if (selectedTopic) {
      const topic = selectedTopic.toLowerCase();
      posts = posts.filter(
        (post) =>
          stripHtml(post.title.rendered).toLowerCase().includes(topic) ||
          stripHtml(post.excerpt.rendered).toLowerCase().includes(topic)
      );
    }

    return posts;
  }, [initialPosts, searchQuery, selectedTopic]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Reset to page 1 when filters change
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleTopicSelect = (topic: string | null) => {
    setSelectedTopic(topic === selectedTopic ? null : topic);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTopic(null);
    setCurrentPage(1);
  };

  return (
    <>
      {/* Search and Filter Section */}
      <section className="py-6 sm:py-8 bg-light sticky top-0 z-20 border-b border-gray-200">
        <div className="container">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-4 sm:mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search articles... (e.g., 'roof leak', 'shingle repair', 'storm damage')"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-12 pr-10 py-3 sm:py-4 text-base sm:text-lg rounded-full border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition shadow-sm"
                aria-label="Search blog posts"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearch('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full"
                  aria-label="Clear search"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              )}
            </div>
          </div>

          {/* Topic Filters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3" role="group" aria-label="Filter by topic">
            {TOPICS.map((topic) => (
              <button
                key={topic}
                onClick={() => handleTopicSelect(topic)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-full transition ${
                  selectedTopic === topic
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-dark hover:bg-primary/10 shadow-sm'
                }`}
                aria-pressed={selectedTopic === topic}
              >
                {topic}
              </button>
            ))}
          </div>

          {/* Active Filters */}
          {(searchQuery || selectedTopic) && (
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="text-sm text-gray">
                {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''} found
              </span>
              <button
                onClick={clearFilters}
                className="text-sm text-primary hover:text-accent underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container">
          {paginatedPosts.length > 0 ? (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {paginatedPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group"
                    itemScope
                    itemType="https://schema.org/BlogPosting"
                  >
                    {/* Featured Image */}
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="aspect-video bg-gray-100 relative overflow-hidden">
                        {post._embedded?.['wp:featuredmedia']?.[0]?.source_url ? (
                          <Image
                            src={post._embedded['wp:featuredmedia'][0].source_url}
                            alt={stripHtml(post.title.rendered)}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            itemProp="image"
                            placeholder="blur"
                            blurDataURL={BLUR_DATA_URL}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-gray-300" />
                          </div>
                        )}
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-4 sm:p-6">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray mb-2 sm:mb-3">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <time dateTime={post.date} itemProp="datePublished">
                          {formatDate(post.date)}
                        </time>
                      </div>

                      <h2
                        className="text-lg sm:text-xl font-bold text-dark mb-2 sm:mb-3 line-clamp-2 group-hover:text-primary transition"
                        itemProp="headline"
                      >
                        <Link href={`/blog/${post.slug}`}>
                          <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        </Link>
                      </h2>

                      <p className="text-sm sm:text-base text-gray mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3" itemProp="description">
                        {stripHtml(post.excerpt.rendered).slice(0, 120)}...
                      </p>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 sm:gap-2 text-primary font-semibold hover:text-accent transition text-sm sm:text-base"
                        itemProp="url"
                      >
                        Read More
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <nav className="flex items-center justify-center gap-2 mt-8 sm:mt-12" aria-label="Blog pagination">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1 px-3 sm:px-4 py-2 rounded-lg border border-gray-300 hover:border-primary hover:bg-primary/5 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Previous</span>
                  </button>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                      // Show first, last, and pages around current
                      if (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-sm sm:text-base font-medium transition ${
                              currentPage === page
                                ? 'bg-primary text-white'
                                : 'hover:bg-primary/10'
                            }`}
                            aria-current={currentPage === page ? 'page' : undefined}
                          >
                            {page}
                          </button>
                        );
                      } else if (page === currentPage - 2 || page === currentPage + 2) {
                        return (
                          <span key={page} className="px-1 text-gray">
                            ...
                          </span>
                        );
                      }
                      return null;
                    })}
                  </div>

                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1 px-3 sm:px-4 py-2 rounded-lg border border-gray-300 hover:border-primary hover:bg-primary/5 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    aria-label="Next page"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </nav>
              )}

              {/* Results count */}
              <p className="text-center text-sm text-gray mt-4">
                Showing {(currentPage - 1) * POSTS_PER_PAGE + 1}-
                {Math.min(currentPage * POSTS_PER_PAGE, filteredPosts.length)} of{' '}
                {filteredPosts.length} articles
              </p>
            </>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-xl sm:text-2xl font-bold text-dark mb-2">No Articles Found</h2>
              <p className="text-gray mb-4">
                {searchQuery || selectedTopic
                  ? 'Try adjusting your search or filters.'
                  : 'Check back soon for roofing tips and guides!'}
              </p>
              {(searchQuery || selectedTopic) && (
                <button
                  onClick={clearFilters}
                  className="btn btn-primary"
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
