import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse('google-site-verification: google0adad9edaba98848.html', {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
