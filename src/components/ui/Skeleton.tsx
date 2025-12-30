interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

export function Skeleton({
  className = '',
  variant = 'rectangular',
  width,
  height,
}: SkeletonProps) {
  const baseClasses = 'animate-pulse bg-gray-200';

  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };

  const style: React.CSSProperties = {};
  if (width) style.width = typeof width === 'number' ? `${width}px` : width;
  if (height) style.height = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}

// Pre-built skeleton components for common use cases
export function CardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <Skeleton className="aspect-video w-full" />
      <div className="p-6 space-y-3">
        <Skeleton height={12} width="40%" />
        <Skeleton height={24} width="80%" />
        <Skeleton height={16} />
        <Skeleton height={16} width="60%" />
        <Skeleton height={20} width="30%" />
      </div>
    </div>
  );
}

export function BlogCardSkeleton() {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden">
      <Skeleton className="aspect-video w-full" />
      <div className="p-4 sm:p-6 space-y-3">
        <Skeleton height={14} width="30%" />
        <Skeleton height={24} width="90%" />
        <Skeleton height={16} />
        <Skeleton height={16} width="70%" />
        <Skeleton height={18} width="25%" />
      </div>
    </article>
  );
}

export function ServiceCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
      <div className="flex items-start gap-3 md:gap-4">
        <Skeleton variant="rectangular" className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <Skeleton height={20} width="60%" />
          <Skeleton height={14} />
          <Skeleton height={14} width="80%" />
          <Skeleton height={16} width="30%" className="mt-3" />
        </div>
      </div>
    </div>
  );
}

export function ImageSkeleton({ aspectRatio = 'square' }: { aspectRatio?: 'square' | 'video' | 'portrait' }) {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
  };

  return (
    <div className={`relative ${aspectClasses[aspectRatio]} rounded-xl overflow-hidden`}>
      <Skeleton className="absolute inset-0 w-full h-full" />
    </div>
  );
}
