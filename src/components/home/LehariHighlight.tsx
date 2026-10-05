import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '../ui/AnimatedSection';

export default function LehariHighlight() {
  return (
    <AnimatedSection className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-gradient-to-r from-[#1c0808] via-[#1a1c29] to-[#0d1b2a] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-red-500/20 relative overflow-hidden">
          {/* Subtle glow orb */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-xs font-semibold tracking-wider text-red-300">
                <svg className="w-3.5 h-3.5 text-red-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v4a1 1 0 102 0V7z" clipRule="evenodd" />
                </svg>
                <span>STATEWIDE MISSION • ലഹരിവിരുദ്ധ ശാസ്ത്ര മുന്നേറ്റം</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-extrabold font-poppins text-white leading-tight">
                  Youth Action Against Substance Abuse
                </h3>
                <p className="text-lg sm:text-xl font-anek text-red-300 mt-1 leading-relaxed">
                  ലഹരി ഭീഷണിക്കെതിരെ ശാസ്ത്രീയ പ്രതിരോധം
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Through interactive school assemblies, college seminars, and scientific literature, Sasthravedhi tackles substance abuse at its roots. We explain the neurobiological impacts of addiction and channel youthful energy toward science clubs, sports, and rational social engagement.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-3 rounded-full text-xs sm:text-sm shadow-sm hover:shadow-red-600/30 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Request a Campus Workshop</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>

                <Link
                  href="/yuvasathravedhi"
                  className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-slate-200 border border-white/20 font-semibold px-6 py-3 rounded-full text-xs sm:text-sm transition"
                >
                  <span>YuvaSasthravedhi Youth Wing</span>
                  <svg className="w-3.5 h-3.5 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Book / Poster Showcase */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group">
                <div className="relative w-44 sm:w-52 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-2 border-red-500/30 group-hover:border-red-400 transition-colors">
                  <Image
                    src="/images/publications/lehari-bheeshani.jpg"
                    alt="Lehari Bheeshani Book Cover by Sasthravedhi"
                    fill
                    sizes="(max-width: 768px) 180px, 220px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-center mt-3">
                  <div className="text-xs font-semibold text-red-300 font-poppins">
                    &ldquo;Lehari Bheeshani&rdquo;
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Official Sasthravedhi Publication
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
