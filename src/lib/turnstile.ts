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

  // In development without keys, skip verification
  if (!secretKey) {
    if (process.env.NODE_ENV === 'development') {
      return { success: true };
    }
    console.error('TURNSTILE_SECRET_KEY is not configured');
    return { success: false, error: 'CAPTCHA not configured' };
  }

  if (!token) {
    return { success: false, error: 'CAPTCHA verification required' };
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

    return {
      success: false,
      error: 'CAPTCHA verification failed. Please try again.',
    };
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return { success: false, error: 'CAPTCHA verification failed' };
  }
}
