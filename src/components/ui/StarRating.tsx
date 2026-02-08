/**
 * Optimized Star Rating Component
 * Uses a single SVG with clip path instead of 5 separate icons.
 * Reduces DOM nodes and improves render performance.
 */

interface StarRatingProps {
  rating?: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  ariaLabel?: string;
}

// Size mappings in pixels
const sizes = {
  sm: { width: 60, height: 12 },
  md: { width: 80, height: 16 },
  lg: { width: 100, height: 20 },
};

export function StarRating({
  rating = 5,
  maxRating = 5,
  size = 'sm',
  className = '',
  ariaLabel = `${rating} out of ${maxRating} stars`,
}: StarRatingProps) {
  const { width, height } = sizes[size];
  const starWidth = width / maxRating;
  const fillPercentage = (rating / maxRating) * 100;

  return (
    <div
      className={`inline-flex ${className}`}
      role="img"
      aria-label={ariaLabel}
    >
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Clip path for filled stars */}
          <clipPath id={`star-fill-${size}-${rating}`}>
            <rect x="0" y="0" width={`${fillPercentage}%`} height="100%" />
          </clipPath>
        </defs>

        {/* Background stars (empty) */}
        <g fill="#9CA3AF">
          {[...Array(maxRating)].map((_, i) => (
            <path
              key={i}
              transform={`translate(${i * starWidth}, 0)`}
              d={getStarPath(starWidth, height)}
            />
          ))}
        </g>

        {/* Filled stars */}
        <g fill="#FBBF24" clipPath={`url(#star-fill-${size}-${rating})`}>
          {[...Array(maxRating)].map((_, i) => (
            <path
              key={i}
              transform={`translate(${i * starWidth}, 0)`}
              d={getStarPath(starWidth, height)}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

/**
 * Generates a star path for given dimensions
 */
function getStarPath(width: number, height: number): string {
  const cx = width / 2;
  const cy = height / 2;
  const outerRadius = height * 0.48;
  const innerRadius = outerRadius * 0.4;
  const points = 5;

  let path = '';

  for (let i = 0; i < points * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = (i * Math.PI) / points - Math.PI / 2;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    path += i === 0 ? `M${x},${y}` : `L${x},${y}`;
  }

  return path + 'Z';
}

/**
 * Even simpler version using CSS for maximum performance
 * This uses unicode stars with color instead of SVG
 */
export function StarRatingCSS({
  className = '',
  ariaLabel = '5 star rating',
}: {
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <span
      className={`text-yellow-400 tracking-tight ${className}`}
      role="img"
      aria-label={ariaLabel}
    >
      ★★★★★
    </span>
  );
}
