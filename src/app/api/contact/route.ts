import { NextRequest, NextResponse } from 'next/server';
import { EXTERNAL_RESOURCES } from '@/lib/constants';

interface ContactFormPayload {
  name: string;
  email: string;
  phone: string;
  address?: string;
  service?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactFormPayload;

    // Validate required fields
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone (basic check)
    const phoneClean = body.phone.replace(/\D/g, '');
    if (phoneClean.length < 10) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // Build GHL payload
    const ghlPayload = {
      firstName: body.name.split(' ')[0],
      lastName: body.name.split(' ').slice(1).join(' ') || '',
      name: body.name,
      email: body.email,
      phone: body.phone,
      address1: body.address || '',
      source: 'BestRoofingNow.com - Contact Form',
      tags: ['website-contact', 'contact-form'],
      customField: {
        service_interest: body.service || '',
        message: body.message || '',
        form_source: 'contact_page',
      },
    };

    // Submit to GHL webhook
    const webhookUrl = EXTERNAL_RESOURCES.webhooks.ghlLeadWebhook;

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ghlPayload),
      });

      if (!response.ok) {
        console.error('GHL contact webhook failed:', response.status, response.statusText);
      }
    } catch (webhookError) {
      console.error('GHL contact webhook error:', webhookError);
      // Don't fail the request - log for manual follow-up
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! We will contact you shortly.',
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit. Please call us directly.' },
      { status: 500 }
    );
  }
}
