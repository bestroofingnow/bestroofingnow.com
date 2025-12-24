'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/ui/Animations';
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

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4" staggerDelay={0.1}>
          {displayImages.map((image, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image
                  src={image}
                  alt={`Roofing project ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold">View Project</span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
