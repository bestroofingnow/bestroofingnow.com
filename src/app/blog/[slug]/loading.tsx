import { Skeleton } from '@/components/ui/Skeleton';

export default function BlogPostLoading() {
  return (
    <>
      {/* Article Header Skeleton */}
      <section className="relative bg-gradient-primary text-white py-16 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="h-6 w-28 bg-white/20 rounded mb-6 animate-pulse" />
            <div className="h-10 md:h-12 w-full max-w-2xl bg-white/20 rounded mb-6 animate-pulse" />
            <div className="flex flex-wrap items-center gap-4">
              <div className="h-5 w-32 bg-white/20 rounded animate-pulse" />
              <div className="h-5 w-24 bg-white/20 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content Skeleton */}
      <article className="section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Image Skeleton */}
              <Skeleton className="aspect-video w-full rounded-xl mb-8" />

              {/* Content Skeleton */}
              <div className="space-y-4">
                <Skeleton height={28} width="80%" />
                <Skeleton height={16} />
                <Skeleton height={16} />
                <Skeleton height={16} width="90%" />
                <Skeleton height={16} />
                <Skeleton height={16} width="75%" />
                <div className="py-4" />
                <Skeleton height={24} width="60%" />
                <Skeleton height={16} />
                <Skeleton height={16} />
                <Skeleton height={16} width="85%" />
                <Skeleton height={16} />
                <div className="py-4" />
                <Skeleton height={24} width="70%" />
                <Skeleton height={16} />
                <Skeleton height={16} width="95%" />
                <Skeleton height={16} />
                <Skeleton height={16} width="80%" />
              </div>

              {/* Author Box Skeleton */}
              <div className="mt-12 p-6 bg-light rounded-xl">
                <div className="flex items-center gap-4">
                  <Skeleton variant="circular" className="w-16 h-16" />
                  <div className="space-y-2 flex-1">
                    <Skeleton height={20} width="40%" />
                    <Skeleton height={16} width="60%" />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* CTA Box Skeleton */}
              <div className="bg-primary rounded-xl p-6 mb-8">
                <Skeleton height={24} width="70%" className="bg-white/20 mb-4" />
                <Skeleton height={16} className="bg-white/20 mb-2" />
                <Skeleton height={16} width="80%" className="bg-white/20 mb-6" />
                <Skeleton height={48} className="bg-white/20 rounded-lg mb-3" />
                <Skeleton height={48} className="bg-white/30 rounded-lg" />
              </div>

              {/* Related Posts Skeleton */}
              <div className="bg-light rounded-xl p-6">
                <Skeleton height={20} width="50%" className="mb-4" />
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="space-y-2">
                      <Skeleton height={18} width="90%" />
                      <Skeleton height={14} width="30%" />
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
