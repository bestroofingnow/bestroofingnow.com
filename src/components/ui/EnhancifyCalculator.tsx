'use client';

import Script from 'next/script';

interface EnhancifyCalculatorProps {
  className?: string;
}

// NOTE: Enhancify's calculator targets the literal id `paymentcalculatorwidget`,
// so this component must only be rendered once per page.
export function EnhancifyCalculator({ className = '' }: EnhancifyCalculatorProps) {
  return (
    <div className={className}>
      <Script
        id="enhancify-paymentcalculator"
        src="https://www.enhancify.com/paymentcalculatorwidget/"
        strategy="lazyOnload"
      />
      <div
        id="paymentcalculatorwidget"
        data-defaultscheme="false"
        data-color1="#B31417"
        data-color2="#064C8F"
        data-cobrandedcolor="#FFFFFF"
        data-border="false"
        data-page="9921199"
        data-hidelink="0"
      />
    </div>
  );
}
