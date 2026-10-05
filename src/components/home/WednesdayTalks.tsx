import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '../ui/AnimatedSection';

export default function WednesdayTalks() {
  return (
    <AnimatedSection className="py-20 bg-gradient-to-br from-[#092B60] via-[#0D3E83] to-[#0A2244] text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#00BCD4]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div id="wednesday-talks" className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Details & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider text-cyan-300">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" aria-hidden="true" />
              <span>LIVE EVERY WEDNESDAY • 7:30 PM IST</span>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-poppins tracking-tight leading-tight">
                Wednesday Talks
              </h2>
              <p className="text-xl sm:text-2xl font-anek text-cyan-300 mt-1 font-semibold leading-relaxed">
                ബുധനാഴ്ച സംഭാഷണങ്ങൾ
              </p>
            </div>

            <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed">
              Every Wednesday evening, Sasthravedhi hosts an open virtual dialogue series connecting scientists, educators, scholars, and curious citizens. Together, we unpack breakthroughs in physics, ecology, medicine, artificial intelligence, and rational philosophy.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-cyan-300 font-bold text-lg">100+</div>
                <div className="text-xs text-blue-200">Weekly Sessions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="text-cyan-300 font-bold text-lg">Open Entry</div>
                <div className="text-xs text-blue-200">Free for Everyone</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 col-span-2 sm:col-span-1">
                <div className="text-cyan-300 font-bold text-lg">Q&amp;A</div>
                <div className="text-xs text-blue-200">Interactive Debates</div>
              </div>
            </div>

            {/* Standardized Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://meet.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#00BCD4] hover:bg-[#00acc1] text-white font-bold px-7 py-3 rounded-full text-sm shadow-sm hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                </svg>
                <span>Join Live on Google Meet</span>
              </a>

              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-full text-sm font-semibold transition"
              >
                <span>View Recorded Talks</span>
                <svg className="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column: Featured Session Spotlight Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-5 shadow-2xl overflow-hidden group">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-4 bg-slate-900">
                <Image
                  src="/images/media/talks/richard-walding.jpg"
                  alt="Dr. Richard Walding Wednesday Talk session"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                  Featured Speaker
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-cyan-300 font-medium">
                  <span>Guest Scholar Dialogue</span>
                  <span>7:30 PM - 9:00 PM IST</span>
                </div>
                <h3 className="font-bold text-lg text-white font-poppins">
                  Dr. Richard Walding
                </h3>
                <p className="text-xs text-blue-200">
                  Honorary Research Fellow, Griffith University, Australia
                </p>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  &ldquo;A Perspective on Science, Inquiry and Rational Thinking in Contemporary Society.&rdquo;
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-blue-200">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true" />
                  Free &amp; Open to the Public
                </span>
                <span className="font-semibold text-cyan-300">Google Meet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
