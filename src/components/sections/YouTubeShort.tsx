interface YouTubeShortProps {
  videoId: string;
  title: string;
  heading?: string;
  description?: string;
}

export default function YouTubeShort({
  videoId,
  title,
  heading = 'Watch: Gutter Tips from Our Experts',
  description,
}: YouTubeShortProps) {
  return (
    <section className="section bg-light">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {heading}
          </h2>
          {description && (
            <p className="text-gray text-lg mb-8">{description}</p>
          )}
          <div className="flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-lg" style={{ width: 340, maxWidth: '100%' }}>
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                width="340"
                height="604"
                style={{ display: 'block', maxWidth: '100%', aspectRatio: '9/16' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
