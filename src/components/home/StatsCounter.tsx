'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';

interface StatsCounterProps {
  target: number;
  label: string;
  sublabel?: string;
  suffix?: string;
  icon?: ReactNode;
}

export default function StatsCounter({
  target,
  label,
  sublabel,
  suffix = '+',
  icon,
}: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const duration = 1800;
        const step = target / (duration / 16);
        timer = setInterval(() => {
          start += step;
          if (start >= target) {
            if (timer) clearInterval(timer);
            setCount(target);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        observer.disconnect();
      }
    });

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [target]);

  return (
    <div
      ref={ref}
      className="group relative text-center p-6 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {icon && (
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/15 text-cyan-300 mb-3 group-hover:scale-110 transition-transform">
          {icon}
        </div>
      )}
      <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-poppins text-cyan-300 mb-1 tracking-tight">
        {count.toLocaleString('en-IN')}{suffix}
      </div>
      <div className="text-white font-semibold text-sm sm:text-base">{label}</div>
      {sublabel && (
        <div className="text-blue-200/80 text-xs mt-1 font-light leading-snug">
          {sublabel}
        </div>
      )}
    </div>
  );
}
