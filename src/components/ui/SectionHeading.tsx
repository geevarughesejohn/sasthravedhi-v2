interface SectionHeadingProps {
  en: string;
  ml: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeading({
  en,
  ml,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const isLeft = align === 'left';

  return (
    <div
      className={`space-y-2 mb-10 ${
        isLeft ? 'text-left' : 'text-center'
      } ${className}`}
    >
      <div className={`inline-block ${isLeft ? '' : 'mx-auto'}`}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-poppins text-slate-900 tracking-tight">
          {en}
        </h2>
        <div
          className={`h-1 w-12 bg-[#00BCD4] rounded-full mt-2 ${
            isLeft ? 'ml-0' : 'mx-auto'
          }`}
        />
      </div>

      <h3 className="text-lg sm:text-xl font-anek text-[#145AC6] font-semibold leading-relaxed">
        {ml}
      </h3>

      {subtitle && (
        <p
          className={`text-slate-600 text-xs sm:text-sm font-light leading-relaxed ${
            isLeft ? 'max-w-xl' : 'max-w-2xl mx-auto'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
