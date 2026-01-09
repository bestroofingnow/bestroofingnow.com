import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, getClientIP, RATE_LIMITS } from '@/lib/estimate/rate-limit';

export async function GET(request: NextRequest) {
  const clientIP = getClientIP(request);
  const rateLimit = checkRateLimit(`autocomplete:${clientIP}`, RATE_LIMITS.autocomplete);

  if (!rateLimit.success) {
    return NextResponse.json(
      { error: 'Rate limit exceeded. Please try again later.' },
      { status: 429 }
    );
  }

  const searchParams = request.nextUrl.searchParams;
  const input = searchParams.get('input');

  if (!input || input.length < 3) {
    return NextResponse.json({ predictions: [] });
  }

  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Google API key not configured' },
      { status: 500 }
    );
  }

  try {
    const requestBody = {
      input,
      includedPrimaryTypes: ['street_address', 'premise', 'subpremise'],
      includedRegionCodes: ['us'],
      locationBias: {
        circle: {
          center: { latitude: 35.2271, longitude: -80.8431 }, // Charlotte, NC
          radius: 50000.0, // ~31 miles (max allowed)
        },
      },
    };

    const response = await fetch('https://places.googleapis.com/v1/places:autocomplete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    if (data.error) {
      console.error('Places Autocomplete error:', data.error);
      return NextResponse.json(
        { error: 'Failed to get address suggestions' },
        { status: 400 }
      );
    }

    const predictions = data.suggestions?.map((suggestion: {
      placePrediction?: {
        placeId: string;
        text: { text: string };
        structuredFormat?: {
          mainText: { text: string };
          secondaryText: { text: string };
        };
      };
    }) => ({
      place_id: suggestion.placePrediction?.placeId,
      description: suggestion.placePrediction?.text?.text,
      structured_formatting: {
        main_text: suggestion.placePrediction?.structuredFormat?.mainText?.text,
        secondary_text: suggestion.placePrediction?.structuredFormat?.secondaryText?.text,
      },
    })) || [];

    return NextResponse.json({ predictions });
  } catch (error) {
    console.error('Places Autocomplete error:', error);
    return NextResponse.json(
      { error: 'Failed to get address suggestions' },
      { status: 500 }
    );
  }
}
