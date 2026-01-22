'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Camera, ZoomIn, Download } from 'lucide-react';

interface Photo {
  id: string;
  url: string;
  thumbnailUrl: string;
  caption?: string;
}

interface ProjectGalleryProps {
  photos: Photo[];
  projectTitle: string;
}

export default function ProjectGallery({ photos, projectTitle }: ProjectGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  }, [photos.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, [photos.length]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    },
    [closeLightbox, goToNext, goToPrev]
  );

  if (photos.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-xl">
        <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-600">No photos available for this project</p>
      </div>
    );
  }

  // Featured photo (first one)
  const featuredPhoto = photos[0];
  const remainingPhotos = photos.slice(1);

  return (
    <>
      {/* Gallery Grid */}
      <div className="space-y-4">
        {/* Featured Photo */}
        <div
          className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
          onClick={() => openLightbox(0)}
        >
          <Image
            src={featuredPhoto.url}
            alt={featuredPhoto.caption || `${projectTitle} - Main Photo`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <ZoomIn className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          {featuredPhoto.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm">{featuredPhoto.caption}</p>
            </div>
          )}
        </div>

        {/* Thumbnail Grid */}
        {remainingPhotos.length > 0 && (
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {remainingPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(index + 1)}
              >
                <Image
                  src={photo.thumbnailUrl || photo.url}
                  alt={photo.caption || `${projectTitle} - Photo ${index + 2}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 25vw, (max-width: 1200px) 16vw, 12vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
              </div>
            ))}
          </div>
        )}

        {/* Photo Count */}
        <p className="text-center text-sm text-gray-500">
          <Camera className="w-4 h-4 inline mr-1" />
          {photos.length} {photos.length === 1 ? 'photo' : 'photos'} in this project
        </p>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 z-10 p-2 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
            {currentIndex + 1} / {photos.length}
          </div>

          {/* Navigation Buttons */}
          {photos.length > 1 && (
            <>
              <button
                className="absolute left-4 p-2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                className="absolute right-4 p-2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                aria-label="Next photo"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[currentIndex].url}
              alt={photos[currentIndex].caption || `${projectTitle} - Photo ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Caption */}
          {photos[currentIndex].caption && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center bg-black/50 px-4 py-2 rounded-lg max-w-lg">
              <p>{photos[currentIndex].caption}</p>
            </div>
          )}

          {/* Thumbnail Strip */}
          {photos.length > 1 && (
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[80vw] p-2 bg-black/50 rounded-lg">
              {photos.map((photo, index) => (
                <button
                  key={photo.id}
                  className={`relative w-12 h-12 flex-shrink-0 rounded overflow-hidden transition-all ${
                    index === currentIndex ? 'ring-2 ring-white scale-110' : 'opacity-60 hover:opacity-100'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                >
                  <Image
                    src={photo.thumbnailUrl || photo.url}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
