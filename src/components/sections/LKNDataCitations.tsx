import { CloudLightning, Wind, Droplets, ThermometerSun, Award, FileCheck } from 'lucide-react';

interface LKNDataCitationsProps {
  city?: string;
  className?: string;
}

interface Stat {
  icon: typeof CloudLightning;
  value: string;
  label: string;
  source: string;
  href: string;
}

const STATS: Stat[] = [
  {
    icon: CloudLightning,
    value: '47',
    label: 'Average annual thunderstorm days at the Lake Norman / Charlotte airport climate region',
    source: 'NOAA NCEI Climate Normals',
    href: 'https://www.ncei.noaa.gov/access/us-climate-normals/',
  },
  {
    icon: Wind,
    value: '60+ mph',
    label: 'Wind gusts recorded during recent severe storms over Lake Norman waterfront — wind ratings matter for waterfront roof selection',
    source: 'National Weather Service Greenville-Spartanburg',
    href: 'https://www.weather.gov/gsp/',
  },
  {
    icon: Droplets,
    value: '44.4 in',
    label: 'Average annual rainfall in the Lake Norman region — proper flashing, valley installation, and gutter sizing are critical',
    source: 'NOAA Charlotte Douglas (KCLT) Climate Normals',
    href: 'https://www.weather.gov/wrh/Climate?wfo=gsp',
  },
  {
    icon: ThermometerSun,
    value: 'Class 4',
    label: 'IBHS-rated impact-resistant shingles recommended for hail-prone counties including Mecklenburg, Iredell, Lincoln, and Catawba',
    source: 'Insurance Institute for Business & Home Safety (IBHS)',
    href: 'https://ibhs.org/',
  },
  {
    icon: Award,
    value: '110 mph',
    label: 'Minimum design wind speed required for new residential roofs under the North Carolina Residential Code',
    source: 'NC Department of Insurance — NC Residential Code',
    href: 'https://www.ncdoi.gov/insurance-industry/engineering-and-codes',
  },
  {
    icon: FileCheck,
    value: '2 years',
    label: 'North Carolina statute of limitations for filing a hail or storm damage insurance claim — document damage promptly',
    source: 'NC Department of Insurance — Consumer Guides',
    href: 'https://www.ncdoi.gov/consumers',
  },
];

export function LKNDataCitations({ city = 'Lake Norman', className = '' }: LKNDataCitationsProps) {
  return (
    <section className={`section bg-white ${className}`}>
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {city} Roofing by the Numbers
            </h2>
            <p className="text-gray text-lg max-w-3xl mx-auto">
              The data below is sourced from NOAA, the Insurance Institute for Business &amp; Home Safety, and
              the North Carolina Department of Insurance — and shapes how we recommend roof systems for {city} homes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-light rounded-xl p-5 border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  </div>
                  <p className="text-gray text-sm leading-relaxed">{stat.label}</p>
                  <a
                    href={stat.href}
                    target="_blank"
                    rel="noopener"
                    className="mt-3 inline-block text-xs font-semibold text-primary/80 hover:text-accent"
                  >
                    Source: {stat.source}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
