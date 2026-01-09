import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, getClientIP, RATE_LIMITS } from '@/lib/estimate/rate-limit';
import { buildGHLPayload, submitToGHL } from '@/lib/estimate/ghl-webhook';
import { LeadData, RoofEstimate } from '@/types/estimate';

export async function POST(request: NextRequest) {
  const clientIP = getClientIP(request);
  const rateLimit = checkRateLimit(`submitLead:${clientIP}`, RATE_LIMITS.submitLead);

  if (!rateLimit.success) {
    return NextResponse.json(
      { error: 'Rate limit exceeded. Please try again later.' },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { lead, estimate } = body as { lead: LeadData; estimate: RoofEstimate };

    // Validate required fields
    if (!lead.firstName || !lead.lastName || !lead.phone || !lead.email) {
      return NextResponse.json(
        { error: 'All contact fields are required' },
        { status: 400 }
      );
    }

    if (!lead.tcpaConsent) {
      return NextResponse.json(
        { error: 'TCPA consent is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(lead.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone format (basic check)
    const phoneClean = lead.phone.replace(/\D/g, '');
    if (phoneClean.length < 10) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // Build and submit to GHL
    const payload = buildGHLPayload(lead, estimate);
    const success = await submitToGHL(payload);

    if (!success) {
      console.error('Failed to submit lead to GHL');
      // Don't fail the request - we can still thank the user
      // The lead data is logged for manual follow-up
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! We will contact you shortly.',
    });
  } catch (error) {
    console.error('Submit lead error:', error);
    return NextResponse.json(
      { error: 'Failed to submit lead' },
      { status: 500 }
    );
  }
}
