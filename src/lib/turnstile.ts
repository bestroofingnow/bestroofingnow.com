/**
 * Cloudflare Turnstile server-side verification.
 *
 * Env vars required:
 *   TURNSTILE_SECRET_KEY - from Cloudflare dashboard
 *   NEXT_PUBLIC_TURNSTILE_SITE_KEY - from Cloudflare dashboard (used client-side)
 */

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

interface TurnstileVerifyResult {
  success: boolean;
  error?: string;
}

export async function verifyTurnstileToken(token: string | null | undefined): Promise<TurnstileVerifyResult> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  // If Turnstile isn't configured, allow submission (don't block leads)
  if (!secretKey) {
    if (process.env.NODE_ENV !== 'development') {
      console.warn('TURNSTILE_SECRET_KEY is not configured — skipping CAPTCHA');
    }
    return { success: true };
  }

  // If no token provided, allow submission but log it
  // (widget may not have loaded for the user)
  if (!token) {
    console.warn('Turnstile token missing — allowing submission');
    return { success: true };
  }

  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    });

    const data = await response.json();

    if (data.success) {
      return { success: true };
    }

    // Log failed verification but still allow submission — never lose a lead
    console.warn('Turnstile verification failed:', data['error-codes']);
    return { success: true };
  } catch (error) {
    console.error('Turnstile verification error:', error);
    // Network/API failure — allow submission, don't block leads
    return { success: true };
  }
}
