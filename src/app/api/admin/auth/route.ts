import { NextRequest, NextResponse } from 'next/server';
import { createHash, randomBytes, timingSafeEqual } from 'crypto';

/**
 * POST /api/admin/auth — verify admin password server-side.
 * Returns a signed token stored in sessionStorage and sent as
 * X-Admin-Token on subsequent admin API requests.
 *
 * Env: ADMIN_PASSWORD (required, no NEXT_PUBLIC_ prefix)
 */
export async function POST(request: NextRequest) {
  try {
    const { password } = (await request.json()) as { password?: string };

    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!adminPassword) {
      console.error('ADMIN_PASSWORD env var is not set');
      return NextResponse.json({ error: 'Admin auth not configured' }, { status: 503 });
    }

    if (!password) {
      return NextResponse.json({ error: 'Password required' }, { status: 400 });
    }

    // Timing-safe comparison to prevent timing attacks
    const inputBuf = Buffer.from(password);
    const secretBuf = Buffer.from(adminPassword);
    if (inputBuf.length !== secretBuf.length || !timingSafeEqual(inputBuf, secretBuf)) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    // Generate a session token (HMAC of random nonce + timestamp)
    const nonce = randomBytes(32).toString('hex');
    const timestamp = Date.now().toString();
    const token = createHash('sha256')
      .update(`${nonce}:${timestamp}:${adminPassword}`)
      .digest('hex');

    return NextResponse.json({ token });
  } catch {
    return NextResponse.json({ error: 'Auth failed' }, { status: 500 });
  }
}
