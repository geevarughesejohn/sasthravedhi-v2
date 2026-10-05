import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-slate-50"
      aria-label="Sasthravedhi Main Hero"
    >
      {/* Background Image: Full visibility of user's artwork */}
      <div className="absolute inset-0">
        <Image
          src="/images/brand/science-sustainability-community.png"
          alt="Science, Sustainability and Community Innovation banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Subtle soft gradient at top and bottom edge for seamless integration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/40 pointer-events-none" />

      {/* Hero Content Container - Fine-tuned spacing & proportion */}
      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 lg:py-14 max-w-7xl space-y-7 sm:space-y-9">
        
        {/* Top: Left-aligned Brand Name & Compact Tagline */}
        <div className="max-w-xl space-y-3 text-left">
          <div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-poppins tracking-tight text-[#0B2A5B] drop-shadow-sm leading-tight">
              Sasthravedhi
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-anek text-[#0284C7] font-bold leading-relaxed mt-0.5">
              കേരള ശാസ്ത്രവേദി
            </p>
          </div>

          {/* Compact Tagline Glass Card */}
          <div className="bg-white/80 backdrop-blur-md border border-blue-200/70 rounded-xl p-3.5 sm:p-4 shadow-md max-w-lg space-y-1.5">
            <p className="text-xs sm:text-sm md:text-base font-semibold tracking-wide text-slate-900 leading-relaxed">
              &ldquo;Science and Technology for Development and Progress.<br className="hidden sm:inline" />
              Non-Violent Development and Progress.&rdquo;
            </p>
            <p className="text-[11px] sm:text-xs font-anek text-[#0B2A5B] font-medium leading-relaxed">
              &ldquo;ശാസ്ത്ര സാങ്കേതിക വിദ്യ വികസനത്തിനും പുരോഗതിക്കും • അഹിംസാത്മക വികസനവും മുന്നേറ്റവും&rdquo;
            </p>
          </div>
        </div>

        {/* Section Heading: Clean typography without blocky white container */}
        <div className="space-y-4 pt-1">
          <div className="text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-poppins text-[#0B2A5B] tracking-tight drop-shadow-sm">
              Science, Sustainability &amp; Community Innovation
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-anek text-[#0284C7] font-bold leading-relaxed mt-0.5">
              ശാസ്ത്രവും സുസ്ഥിരതയും സാമൂഹിക നവീകരണവും
            </p>
          </div>

          {/* 3 Pillars Grid (01, 02, 03) - Sleek, slim cards to maximize artwork visibility */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5">
            {/* 01 Science for the People */}
            <div className="bg-white/80 hover:bg-white/92 backdrop-blur-md rounded-xl p-3.5 sm:p-4 border border-white/70 hover:border-blue-300 transition-all shadow-md hover:shadow-lg">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-blue-100 text-[#0B2A5B] font-mono font-bold text-xs border border-blue-200">
                  01
                </span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base font-poppins">
                  Science for the People
                </h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-normal pl-8.5">
                Democratizing science beyond labs and classrooms into everyday civic consciousness across Kerala.
              </p>
            </div>

            {/* 02 Ecological Harmony */}
            <div className="bg-white/80 hover:bg-white/92 backdrop-blur-md rounded-xl p-3.5 sm:p-4 border border-white/70 hover:border-emerald-300 transition-all shadow-md hover:shadow-lg">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 font-mono font-bold text-xs border border-emerald-200">
                  02
                </span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base font-poppins">
                  Ecological Harmony
                </h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-normal pl-8.5">
                Advocating for sustainable progress, climate action, and environmentally conscious technological innovation.
              </p>
            </div>

            {/* 03 Non-Violent Progress */}
            <div className="bg-white/80 hover:bg-white/92 backdrop-blur-md rounded-xl p-3.5 sm:p-4 border border-white/70 hover:border-amber-300 transition-all shadow-md hover:shadow-lg">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-amber-100 text-amber-800 font-mono font-bold text-xs border border-amber-200">
                  03
                </span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base font-poppins">
                  Non-Violent Progress
                </h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-normal pl-8.5">
                Rooted in reason, ethics, and Gandhian principles of non-violence, public welfare, and harmony.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

