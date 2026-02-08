'use client';

import Image from 'next/image';
import { Play, Clock, Eye } from 'lucide-react';
import { YouTubeVideo, getVideoUrl } from '@/lib/youtube-api';

interface YouTubeVideoCardProps {
  video: YouTubeVideo;
  priority?: boolean;
}

export function YouTubeVideoCard({ video, priority = false }: YouTubeVideoCardProps) {
  const videoUrl = getVideoUrl(video.id, video.isShort);

  // Format the date
  const publishDate = new Date(video.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener"
      className={`group block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 ${
        video.isShort ? 'aspect-[9/16]' : ''
      }`}
    >
      {/* Thumbnail */}
      <div className={`relative ${video.isShort ? 'aspect-[9/16]' : 'aspect-video'} bg-gray-100`}>
        <Image
          src={video.thumbnailHigh}
          alt={video.title}
          fill
          className="object-cover"
          sizes={video.isShort ? '(max-width: 640px) 50vw, 200px' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
          priority={priority}
        />

        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 text-white fill-white ml-1" />
          </div>
        </div>

        {/* Duration badge */}
        {video.duration && (
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-medium px-2 py-1 rounded">
            {video.duration}
          </div>
        )}

        {/* Shorts badge */}
        {video.isShort && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            SHORT
          </div>
        )}
      </div>

      {/* Content - only show for regular videos, not shorts in grid */}
      {!video.isShort && (
        <div className="p-4">
          <h3 className="font-semibold text-dark line-clamp-2 group-hover:text-primary transition-colors mb-2">
            {video.title}
          </h3>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            {video.viewCount && (
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {video.viewCount} views
              </span>
            )}
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {publishDate}
            </span>
          </div>
        </div>
      )}
    </a>
  );
}

interface YouTubeShortCardProps {
  video: YouTubeVideo;
  priority?: boolean;
}

export function YouTubeShortCard({ video, priority = false }: YouTubeShortCardProps) {
  const videoUrl = getVideoUrl(video.id, true);

  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener"
      className="group block relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
      style={{ aspectRatio: '9/16' }}
    >
      <Image
        src={video.thumbnailHigh}
        alt={video.title}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 50vw, 180px"
        priority={priority}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
          <Play className="w-6 h-6 text-white fill-white ml-0.5" />
        </div>
      </div>

      {/* Shorts badge */}
      <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
          <path d="M17.77 10.32l-1.2-.5L18 9.06a3.74 3.74 0 00-3.5-6.62l-6 2.49a3.74 3.74 0 00-2 4.87l.49 1.19-1.2.5a3.74 3.74 0 002 6.98l6-2.49a3.74 3.74 0 002-4.87l-.5-1.19 1.2-.5a3.74 3.74 0 00-2-6.98z" />
        </svg>
        SHORT
      </div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-white text-sm font-medium line-clamp-2">
          {video.title}
        </p>
        {video.viewCount && (
          <p className="text-white/70 text-xs mt-1">{video.viewCount} views</p>
        )}
      </div>
    </a>
  );
}

// Embedded video player component
interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  isShort?: boolean;
}

export function YouTubeEmbed({ videoId, title, isShort = false }: YouTubeEmbedProps) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden shadow-lg ${
        isShort ? 'max-w-xs mx-auto' : 'w-full'
      }`}
      style={{ aspectRatio: isShort ? '9/16' : '16/9' }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
