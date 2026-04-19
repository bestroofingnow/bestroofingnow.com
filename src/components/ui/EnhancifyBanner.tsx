const ENHANCIFY_BANNER_SRC =
  'https://www.enhancify.com/banner?name=Contractor_Text_728x90&page=9921199&hideLink=0';

interface EnhancifyBannerProps {
  className?: string;
  title?: string;
}

export function EnhancifyBanner({
  className = '',
  title = 'Roof financing options from Enhancify',
}: EnhancifyBannerProps) {
  return (
    <div className={`flex justify-center w-full ${className}`}>
      <iframe
        src={ENHANCIFY_BANNER_SRC}
        title={title}
        loading="lazy"
        referrerPolicy="unsafe-url"
        scrolling="auto"
        className="w-full max-w-[728px] h-[90px] border-0"
      />
    </div>
  );
}
