import { SolarData, RoofEstimate, MaterialEstimate } from '@/types/estimate';

const PITCH_MULTIPLIERS: Record<number, number> = {
  10: 1.00,
  20: 1.06,
  30: 1.12,
  40: 1.22,
  50: 1.41,
  90: 1.73,
};

const SQ_METERS_TO_SQ_FEET = 10.7639;
const WASTE_FACTOR = 1.15;

const MATERIAL_PRICING = [
  {
    name: 'Architectural Shingles',
    pricePerSqFt: { low: 3.60, mid: 5.74, high: 7.88 },
  },
  {
    name: 'Metal Roofing',
    pricePerSqFt: { low: 9.00, mid: 10.80, high: 12.60 },
  },
  {
    name: 'Synthetic Roofing',
    pricePerSqFt: { low: 7.20, mid: 9.00, high: 10.80 },
  },
  {
    name: 'Roof Coatings',
    pricePerSqFt: { low: 2.70, mid: 3.49, high: 4.28 },
  },
];

export function getPitchMultiplier(pitchDegrees: number): number {
  const thresholds = Object.keys(PITCH_MULTIPLIERS)
    .map(Number)
    .sort((a, b) => a - b);

  for (const threshold of thresholds) {
    if (pitchDegrees <= threshold) {
      return PITCH_MULTIPLIERS[threshold];
    }
  }
  return 1.73;
}

export function degreesToPitchRatio(degrees: number): string {
  const rise = Math.tan(degrees * Math.PI / 180) * 12;
  return `${Math.round(rise)}/12`;
}

export function calculateEstimate(solarData: SolarData): RoofEstimate {
  const segments = solarData.solarPotential.roofSegmentStats;

  let totalArea = 0;
  let weightedPitch = 0;

  segments.forEach((seg) => {
    const area = seg.stats.areaMeters2;
    totalArea += area;
    weightedPitch += seg.pitchDegrees * area;
  });

  const avgPitch = totalArea > 0 ? weightedPitch / totalArea : 20;
  const pitchMult = getPitchMultiplier(avgPitch);

  const groundSqFt = solarData.solarPotential.wholeRoofStats.groundAreaMeters2 * SQ_METERS_TO_SQ_FEET;
  const roofSqFt = groundSqFt * pitchMult * WASTE_FACTOR;
  const squares = roofSqFt / 100;

  const { year, month, day } = solarData.imageryDate || { year: 2024, month: 1, day: 1 };
  const imageryDate = `${month}/${day}/${year}`;

  const materialEstimates: MaterialEstimate[] = MATERIAL_PRICING.map((material) => ({
    name: material.name,
    pricePerSqFt: material.pricePerSqFt,
    estimate: {
      low: Math.round(roofSqFt * material.pricePerSqFt.low),
      mid: Math.round(roofSqFt * material.pricePerSqFt.mid),
      high: Math.round(roofSqFt * material.pricePerSqFt.high),
    },
  }));

  const primaryEstimate = materialEstimates[0].estimate;

  return {
    groundSqFt: Math.round(groundSqFt),
    roofSqFt: Math.round(roofSqFt),
    squares: Math.round(squares * 10) / 10,
    pitchDegrees: Math.round(avgPitch),
    pitchRatio: degreesToPitchRatio(avgPitch),
    imageryDate,
    estimate: primaryEstimate,
    materialEstimates,
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}
