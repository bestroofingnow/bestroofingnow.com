'use client';

import Script from 'next/script';

const ENHANCIFY_PAGE_ID = '9921199';
const ENHANCIFY_COLOR1 = '%23B31417'; // primary red
const ENHANCIFY_COLOR2 = '%23064C8F'; // secondary blue
const ENHANCIFY_COLOR3 = '%23FFFFFF'; // button text white

const ENHANCIFY_SCRIPT_SRC =
  `https://www.enhancify.com/realwidget/?page=${ENHANCIFY_PAGE_ID}` +
  `&color1=${ENHANCIFY_COLOR1}&color2=${ENHANCIFY_COLOR2}&color3=${ENHANCIFY_COLOR3}`;

interface EnhancifyWidgetProps {
  className?: string;
  textButton?: string;
  widthBtn?: number;
}

export function EnhancifyWidget({
  className = '',
  textButton = 'Apply now',
  widthBtn = 400,
}: EnhancifyWidgetProps) {
  return (
    <div className={className}>
      <Script
        id="enhancify-realwidget"
        src={ENHANCIFY_SCRIPT_SRC}
        strategy="lazyOnload"
      />
      <div
        className="realwidget"
        data-textbutton={textButton}
        data-widthbtn={String(widthBtn)}
      />
    </div>
  );
}
