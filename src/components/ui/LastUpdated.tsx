// Visible freshness signal. Some AI engines downrank stale-looking pages;
// search engines read <time datetime> to refine the crawl schedule. Both
// consume the same block.
//
// Pass an ISO date when you know the real last-edit date; otherwise the
// component falls back to build time.

interface LastUpdatedProps {
  date?: string; // ISO 8601, e.g. "2026-04-19"
  className?: string;
  label?: string;
}

const BUILD_DATE = new Date().toISOString().slice(0, 10);

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function LastUpdated({ date, className = '', label = 'Last updated' }: LastUpdatedProps) {
  const iso = (date ?? BUILD_DATE).slice(0, 10);
  return (
    <p className={`text-sm text-gray-500 ${className}`}>
      {label}:{' '}
      <time dateTime={iso} className="font-medium">
        {formatDate(iso)}
      </time>
    </p>
  );
}
