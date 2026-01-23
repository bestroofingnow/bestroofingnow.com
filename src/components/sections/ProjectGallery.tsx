import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Camera, ArrowRight } from 'lucide-react';
import { fetchProjectsWithPhotoData, formatProjectForDisplay, getProjectThumbnail, PMIProject } from '@/lib/pmi-api';
import { IMAGES } from '@/lib/images';

// Low-quality blur placeholder for images
const BLUR_DATA_URL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMH/8QAHxAAAgICAgMBAAAAAAAAAAAAAQIDBAAREiEFE0FR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEQA/AMT8fblq8lYS6CVo4JTE0qsyN6ydrYHH4Oc9aznGVpYoIxUsOqxf/9k=';

// Fallback static images when PMI API is unavailable
const FALLBACK_IMAGES = IMAGES.gallery || [
  IMAGES.projects.work1,
  IMAGES.projects.work2,
  IMAGES.projects.work3,
  IMAGES.projects.work4,
  IMAGES.projects.work5,
  IMAGES.hero.hero1,
];

const FALLBACK_ALT_TEXTS = [
  'Completed roof replacement project Charlotte NC - architectural shingles installation',
  'Professional roofing contractor Charlotte - residential roof repair work',
  'Best Roofing Now Charlotte NC - new roof installation completed',
  'Charlotte roofing company project - quality shingle roof installation',
  'Roof replacement Charlotte metro area - GAF certified contractor work',
  'Charlotte residential roofing - expert installation by Best Roofing Now',
];

interface ProjectGalleryProps {
  title?: string;
  subtitle?: string;
  limit?: number;
}

// Server component that fetches real PMI project data with static fallback
export async function ProjectGallery({
  title = 'See Our Work',
  subtitle = 'Real roofing projects from Charlotte homes. View our completed work across the metro area.',
  limit = 6,
}: ProjectGalleryProps) {
  // Fetch real projects with photos from PMI API
  let projects: PMIProject[] = [];
  let useFallback = false;

  try {
    projects = await fetchProjectsWithPhotoData();
  } catch (error) {
    console.error('Error fetching PMI projects, using fallback images:', error);
    useFallback = true;
  }

  // Filter to only projects with photos and get the limit
  const projectsWithPhotos = projects
    .filter(p => p.photos && p.photos.length > 0)
    .slice(0, limit);

  // Use fallback images if no projects with photos available
  if (projectsWithPhotos.length === 0) {
    useFallback = true;
  }

  // Render with fallback static images
  if (useFallback) {
    const fallbackImages = FALLBACK_IMAGES.slice(0, limit);

    return (
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {title}
            </h2>
            <p className="text-gray text-lg">{subtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {fallbackImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02]"
              >
                <Image
                  src={image}
                  alt={FALLBACK_ALT_TEXTS[index % FALLBACK_ALT_TEXTS.length]}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold">View Project</span>
                </div>
              </div>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-10">
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // Render with real PMI project data
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-gray text-lg">{subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projectsWithPhotos.map((project) => {
            const formatted = formatProjectForDisplay(project);
            const thumbnail = getProjectThumbnail(project);

            if (!thumbnail) return null;

            return (
              <Link
                key={project._id}
                href={`/projects/city/${formatted.city.toLowerCase().replace(/\s+/g, '-')}`}
                className="group block"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]">
                  <Image
                    src={thumbnail}
                    alt={`Roof ${formatted.product ? formatted.product + ' ' : ''}installation in ${formatted.city}, ${formatted.state} - ${formatted.date}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                  />
                  {/* Overlay with project info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <div className="text-white">
                      <div className="flex items-center gap-1 text-sm mb-1">
                        <MapPin className="w-3 h-3" />
                        <span>{formatted.city}, {formatted.state}</span>
                      </div>
                      {formatted.product && (
                        <p className="font-semibold text-sm line-clamp-1">{formatted.product}</p>
                      )}
                      {formatted.color && (
                        <p className="text-xs text-white/80">{formatted.color}</p>
                      )}
                      <p className="text-xs text-white/70 mt-1">{formatted.date}</p>
                    </div>
                  </div>
                  {/* Photo count badge */}
                  {project.photoCount > 1 && (
                    <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Camera className="w-3 h-3" />
                      {project.photoCount}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            View All {projects.length}+ Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
