import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, getClientIP, RATE_LIMITS } from '@/lib/estimate/rate-limit';
import { calculateEstimate } from '@/lib/estimate/calculations';
import { SolarData } from '@/types/estimate';

export async function GET(request: NextRequest) {
  const clientIP = getClientIP(request);
  const rateLimit = checkRateLimit(`roofData:${clientIP}`, RATE_LIMITS.roofData);

  if (!rateLimit.success) {
    return NextResponse.json(
      { error: 'Rate limit exceeded. Please try again later.' },
      { status: 429 }
    );
  }

  const searchParams = request.nextUrl.searchParams;
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  const address = searchParams.get('address');

  if (!lat || !lng) {
    return NextResponse.json(
      { error: 'Latitude and longitude are required' },
      { status: 400 }
    );
  }

  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Google API key not configured' },
      { status: 500 }
    );
  }

  try {
    const solarUrl = `https://solar.googleapis.com/v1/buildingInsights:findClosest?location.latitude=${lat}&location.longitude=${lng}&requiredQuality=HIGH&key=${apiKey}`;

    const response = await fetch(solarUrl);
    const data = await response.json();

    if (data.error) {
      console.error('Solar API error:', data.error.message);

      if (data.error.message?.includes('no imagery')) {
        return NextResponse.json(
          { error: 'No roof imagery available for this location. Please try a different address.' },
          { status: 404 }
        );
      }

      return NextResponse.json(
        { error: 'Failed to get roof data. Please try again.' },
        { status: 400 }
      );
    }

    if (!data.solarPotential?.wholeRoofStats?.groundAreaMeters2) {
      return NextResponse.json(
        { error: 'No roof data available for this location.' },
        { status: 404 }
      );
    }

    const estimate = calculateEstimate(data as SolarData);

    return NextResponse.json({
      estimate: {
        ...estimate,
        address: address || undefined,
      },
      center: data.center,
      boundingBox: data.boundingBox,
    });
  } catch (error) {
    console.error('Roof data error:', error);
    return NextResponse.json(
      { error: 'Failed to get roof data' },
      { status: 500 }
    );
  }
}
