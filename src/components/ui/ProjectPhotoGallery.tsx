'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Camera, ZoomIn } from 'lucide-react';

interface ProjectPhoto {
  _id: string;
  url: string;
  thumbnailUrl?: string;
  caption?: string;
}

interface ProjectPhotoGalleryProps {
  photos: ProjectPhoto[];
  projectName: string;
  street: string;
  className?: string;
}

export function ProjectPhotoGallery({
  photos,
  projectName,
  street,
  className = '',
}: ProjectPhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!photos || photos.length === 0) {
    return null;
  }

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const nextPhoto = () =>
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % photos.length : 0));
  const prevPhoto = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + photos.length) % photos.length : 0
    );

  return (
    <>
      <div className={`grid grid-cols-2 md:grid-cols-3 gap-2 ${className}`}>
        {photos.slice(0, 6).map((photo, index) => (
          <button
            key={photo._id}
            onClick={() => openLightbox(index)}
            className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            aria-label={`View photo ${index + 1} of ${projectName}'s roof on ${street}`}
          >
            <Image
              src={photo.thumbnailUrl || photo.url}
              alt={`Roofing project at ${street} - Photo ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {index === 5 && photos.length > 6 && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  +{photos.length - 6} more
                </span>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close gallery"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <div
            className="relative max-w-5xl max-h-[80vh] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[selectedIndex].url}
              alt={`Roofing project at ${street} - Photo ${selectedIndex + 1}`}
              width={1200}
              height={800}
              className="object-contain max-h-[80vh] w-auto"
              priority
            />
            {photos[selectedIndex].caption && (
              <p className="text-white text-center mt-4 text-sm">
                {photos[selectedIndex].caption}
              </p>
            )}
            <p className="text-white/70 text-center mt-2 text-sm">
              {selectedIndex + 1} of {photos.length} &bull; {projectName}&apos;s
              Roof on {street}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </>
  );
}

// Compact photo strip for project cards
export function ProjectPhotoStrip({
  photos,
  projectName,
}: {
  photos: ProjectPhoto[];
  projectName: string;
}) {
  if (!photos || photos.length === 0) {
    return (
      <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center gap-2 text-gray-500">
        <Camera className="w-5 h-5" />
        <span className="text-sm">Photos coming soon</span>
      </div>
    );
  }

  return (
    <div className="flex gap-1 overflow-hidden rounded-lg">
      {photos.slice(0, 3).map((photo, index) => (
        <div key={photo._id} className="relative flex-1 aspect-video">
          <Image
            src={photo.thumbnailUrl || photo.url}
            alt={`${projectName}'s roof - Photo ${index + 1}`}
            fill
            className="object-cover"
            sizes="33vw"
          />
        </div>
      ))}
    </div>
  );
}
