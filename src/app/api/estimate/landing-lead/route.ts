import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, getClientIP, RATE_LIMITS } from '@/lib/estimate/rate-limit';
import { EXTERNAL_RESOURCES } from '@/lib/constants';
import { verifyTurnstileToken } from '@/lib/turnstile';
import { forwardLeadToBestRoofingAI } from '@/lib/best-roofing-ai';

interface LandingLeadPayload {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  tcpaConsent: boolean;
  consentTimestamp: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  landingPage: string;
  turnstileToken?: string;
}

export async function POST(request: NextRequest) {
  const clientIP = getClientIP(request);
  const rateLimit = checkRateLimit(`landingLead:${clientIP}`, RATE_LIMITS.submitLead);

  if (!rateLimit.success) {
    return NextResponse.json(
      { error: 'Rate limit exceeded. Please try again later.' },
      { status: 429 }
    );
  }

  try {
    const body = (await request.json()) as LandingLeadPayload;

    // Verify Turnstile CAPTCHA
    const turnstileResult = await verifyTurnstileToken(body.turnstileToken);
    if (!turnstileResult.success) {
      return NextResponse.json(
        { error: turnstileResult.error || 'CAPTCHA verification failed' },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!body.firstName || !body.lastName || !body.phone || !body.email) {
      return NextResponse.json(
        { error: 'All contact fields are required' },
        { status: 400 }
      );
    }

    if (!body.tcpaConsent) {
      return NextResponse.json(
        { error: 'TCPA consent is required' },
        { status: 400 }
      );
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone
    const phoneClean = body.phone.replace(/\D/g, '');
    if (phoneClean.length < 10) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // Build GHL payload with landing-specific tags
    const ghlPayload = {
      firstName: body.firstName,
      lastName: body.lastName,
      phone: body.phone,
      email: body.email,
      address1: body.address,
      city: body.city || '',
      state: body.state || '',
      postalCode: body.postalCode || '',
      source: 'BestRoofingNow.com - Ad Landing Page',
      tags: ['ad-landing', 'free-inspection', 'high-intent'],
      customField: {
        lead_source: 'ad-landing-page',
        landing_page: body.landingPage || '/free-roof-inspection',
        utm_source: body.utmSource || '',
        utm_medium: body.utmMedium || '',
        utm_campaign: body.utmCampaign || '',
        utm_term: body.utmTerm || '',
        utm_content: body.utmContent || '',
        tcpa_consent: body.tcpaConsent ? 'Yes' : 'No',
        consent_timestamp: body.consentTimestamp,
      },
    };

    // Submit to GHL
    const webhookUrl = process.env.GHL_ESTIMATE_WEBHOOK_URL || EXTERNAL_RESOURCES.webhooks.ghlLeadWebhook;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(ghlPayload),
        });
      } catch (webhookError) {
        console.error('Landing lead GHL webhook error:', webhookError);
      }
    }

    // Forward to Best Roofing AI (inserts lead + sends Gmail thank-you)
    forwardLeadToBestRoofingAI({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      address: body.address,
      city: body.city,
      state: body.state,
      zip: body.postalCode,
      source: 'website-ad-landing',
      serviceType: 'free-inspection',
      propertyType: 'residential',
      notes: `Ad landing page lead. Page: ${body.landingPage || '/free-roof-inspection'}. UTM: ${body.utmSource || 'direct'}/${body.utmMedium || 'none'}/${body.utmCampaign || 'none'}`,
      tags: ['ad-landing', 'free-inspection', 'high-intent'],
    }).catch((err) => console.error('Best Roofing AI forward error:', err));

    return NextResponse.json({
      success: true,
      message: 'Thank you! We will contact you shortly.',
    });
  } catch (error) {
    console.error('Landing lead submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit. Please call us directly.' },
      { status: 500 }
    );
  }
}
