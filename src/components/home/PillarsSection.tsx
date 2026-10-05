import Link from 'next/link';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';

const pillars = [
  {
    number: '01',
    en: 'Science Popularization',
    ml: 'ശാസ്ത്ര പ്രചാരണം',
    description:
      'Democratizing scientific concepts through talks, interactive workshops, and accessible literature across every district in Kerala.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    badgeColor: 'bg-blue-100 text-[#145AC6] group-hover:bg-[#145AC6] group-hover:text-white',
    accentBorder: 'hover:border-blue-400',
  },
  {
    number: '02',
    en: 'Rational Thinking & Temper',
    ml: 'യുക്തിചിന്തയും അന്വേഷണബുദ്ധിയും',
    description:
      'Cultivating critical thinking, evidence-based reasoning, and counteracting superstition in line with Constitutional Article 51A(h).',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    badgeColor: 'bg-amber-100 text-amber-700 group-hover:bg-amber-600 group-hover:text-white',
    accentBorder: 'hover:border-amber-400',
  },
  {
    number: '03',
    en: 'Sustainable Development',
    ml: 'സുസ്ഥിര & അഹിംസാത്മക പുരോഗതി',
    description:
      'Advocating that science and technological growth must prioritize ecological balance, public health, and non-violent progress.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    badgeColor: 'bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white',
    accentBorder: 'hover:border-emerald-400',
  },
  {
    number: '04',
    en: 'Youth & Community Innovation',
    ml: 'യുവജന ശാസ്ത്ര മുന്നേറ്റം',
    description:
      'Engaging students and young professionals through YuvaSasthravedhi hackathons, science reels, and anti-substance abuse drives.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    badgeColor: 'bg-cyan-100 text-[#00BCD4] group-hover:bg-[#00BCD4] group-hover:text-white',
    accentBorder: 'hover:border-cyan-400',
  },
];

export default function PillarsSection() {
  return (
    <AnimatedSection className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeading
          en="Our Core Pillars"
          ml="നമ്മുടെ അടിസ്ഥാന ലക്ഷ്യങ്ങൾ"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className={`group bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between ${pillar.accentBorder}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${pillar.badgeColor}`}
                  >
                    {pillar.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-slate-600 transition">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="font-bold text-lg font-poppins text-slate-900 group-hover:text-[#145AC6] transition-colors mb-1">
                  {pillar.en}
                </h3>
                <p className="text-xs font-semibold text-slate-500 font-anek mb-3">
                  {pillar.ml}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/vision"
                  className="text-xs font-semibold text-[#145AC6] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                >
                  Learn more
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
