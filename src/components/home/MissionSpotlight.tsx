import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '../ui/AnimatedSection';

export default function MissionSpotlight() {
  return (
    <AnimatedSection className="py-20 bg-gradient-to-b from-slate-50 via-white to-blue-50/40">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
          {/* Top header banner */}
          <div className="p-6 md:p-10 pb-4 text-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-[#145AC6] border border-blue-200/60 mb-3">
              <svg className="w-4 h-4 text-[#145AC6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Core Ideology &amp; Guiding Vision
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 font-poppins tracking-tight">
              Science, Sustainability &amp; Community Innovation
            </h2>
            <p className="text-lg md:text-xl font-anek text-slate-600 mt-2 leading-relaxed">
              ശാസ്ത്രവും സുസ്ഥിരതയും സാമൂഹിക നവീകരണവും
            </p>

            {/* Official Tagline Highlight */}
            <div className="mt-6 max-w-3xl mx-auto bg-gradient-to-r from-blue-50/80 via-teal-50/70 to-blue-50/80 border border-blue-200/70 rounded-2xl p-4 md:p-5">
              <p className="text-base md:text-lg font-semibold text-[#0D3E83] leading-relaxed">
                &ldquo;Science and Technology for Development and Progress.<br className="hidden sm:inline" />
                Non-Violent Development and Progress.&rdquo;
              </p>
              <p className="text-sm md:text-base font-anek text-slate-700 mt-1 font-medium leading-relaxed">
                &ldquo;ശാസ്ത്ര സാങ്കേതിക വിദ്യ വികസനത്തിനും പുരോഗതിക്കും • അഹിംസാത്മക വികസനവും മുന്നേറ്റവും&rdquo;
              </p>
            </div>
          </div>

          {/* User's Featured Banner Artwork */}
          <div className="px-4 md:px-8 pb-6 pt-2">
            <div className="relative aspect-[2030/775] w-full rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
              <Image
                src="/images/brand/science-sustainability-community.png"
                alt="Science, Sustainability and Community Innovation banner artwork by Sasthravedhi"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1100px"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          </div>

          {/* 3 Pillar Summary Highlights beneath the image */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 bg-slate-50/80 p-6 md:p-8 border-t border-slate-100">
            <div className="py-4 md:py-0 md:px-6 text-center md:text-left space-y-1.5">
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-blue-100 text-[#145AC6] mb-1 font-bold">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base">Science for the People</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Democratizing science beyond labs and classrooms into everyday civic consciousness across Kerala.
              </p>
            </div>

            <div className="py-4 md:py-0 md:px-6 text-center md:text-left space-y-1.5">
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-teal-100 text-[#00BCD4] mb-1 font-bold">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base">Ecological Harmony</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Advocating for sustainable progress, climate action, and environmentally conscious technological innovation.
              </p>
            </div>

            <div className="py-4 md:py-0 md:px-6 text-center md:text-left space-y-1.5">
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-amber-100 text-amber-700 mb-1 font-bold">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base">Non-Violent Progress</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rooted in reason, ethics, and Gandhian principles of non-violence, public welfare, and harmony.
              </p>
            </div>
          </div>

          {/* Standardized Quick Action Footer */}
          <div className="p-4 md:p-6 bg-slate-100/70 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs md:text-sm text-slate-600">
              Explore our constitution, district chapters, and decades of scientific activism.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/about"
                className="text-xs sm:text-sm font-semibold text-[#145AC6] hover:text-[#0D3E83] hover:underline"
              >
                Read About Us →
              </Link>
              <Link
                href="/vision"
                className="inline-flex items-center gap-1.5 bg-[#145AC6] hover:bg-[#0D3E83] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full transition shadow-sm"
              >
                Our Vision Statement
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

