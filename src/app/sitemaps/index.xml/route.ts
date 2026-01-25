import { NextResponse } from 'next/server';

// Redirect to the main sitemap index
export async function GET() {
  return NextResponse.redirect('https://bestroofingnow.com/sitemap.xml', 301);
}
