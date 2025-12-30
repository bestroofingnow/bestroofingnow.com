import { BookOpen } from 'lucide-react';
import { BlogCardSkeleton } from '@/components/ui/Skeleton';

export default function BlogLoading() {
  return (
    <>
      {/* Hero Section Skeleton */}
      <section className="relative bg-gradient-primary text-white py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-3 sm:mb-4">
              <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-semibold">Roofing Tips & Guides</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
              Expert Roofing Advice for Charlotte Homeowners
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90">
              Learn from Charlotte&apos;s trusted roofing experts. Tips on maintenance, repair,
              replacement, and protecting your home from the elements.
            </p>
          </div>
        </div>
      </section>

      {/* Search Skeleton */}
      <section className="py-6 sm:py-8 bg-light border-b border-gray-200">
        <div className="container">
          <div className="max-w-2xl mx-auto mb-4 sm:mb-6">
            <div className="h-12 sm:h-14 bg-white rounded-full border border-gray-300 animate-pulse" />
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-8 sm:h-10 w-24 sm:w-28 bg-white rounded-full animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid Skeleton */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {Array.from({ length: 9 }).map((_, i) => (
              <BlogCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
