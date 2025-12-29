'use client';

import Image from 'next/image';
import { FadeInUp, StaggerItem } from '@/components/ui/Animations';
import { IMAGES } from '@/lib/images';

interface ProjectGalleryProps {
  title?: string;
  subtitle?: string;
  images?: string[];
  limit?: number;
}

export function ProjectGallery({
  title = 'Our Recent Work',
  subtitle = 'See the quality of our roofing work across Charlotte and surrounding areas.',
  images = IMAGES.gallery,
  limit = 6,
}: ProjectGalleryProps) {
  const displayImages = images.slice(0, limit);

  return (
    <section className="section bg-white">
      <div className="container">
        <FadeInUp>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {title}
            </h2>
            <p className="text-gray text-lg">{subtitle}</p>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {displayImages.map((image, index) => (
            <StaggerItem key={index} index={index}>
              <div className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02]">
                <Image
                  src={image}
                  alt={`Roofing project ${index + 1} - Professional roof installation by Best Roofing Now in Charlotte NC`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold">View Project</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>
  );
}
