'use client';

import Script from 'next/script';

interface EnhancifyFullPageProps {
  className?: string;
}

// NOTE: Enhancify's full-page widget targets the literal id `fullpagewidget`,
// so this component must only be rendered once per page.
export function EnhancifyFullPage({ className = '' }: EnhancifyFullPageProps) {
  return (
    <div className={className}>
      <Script
        id="enhancify-fullpagewidget"
        src="https://www.enhancify.com/fullpagewidget/"
        strategy="lazyOnload"
      />
      <div
        id="fullpagewidget"
        data-color1="#B31417"
        data-color2="#064C8F"
        data-cobrandedcolor="#FFFFFF"
        data-page="9921199"
        data-hidelink="0"
      />
    </div>
  );
}
