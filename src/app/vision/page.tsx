import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Our Vision | Sasthra Vedhi (ശാസ്ത്രവേദി)',
  description:
    'Sasthra Vedhi envisions a society where scientific temper, critical thinking, and knowledge-based decision-making are valued as essential foundations of social progress.',
};

export default function VisionPage() {
  const visionGoals = [
    {
      title: 'Culture of Scientific Inquiry',
      malayalam: 'ശാസ്ത്രീയ ചിന്തയും അന്വേഷണവും',
      description: 'Promote a culture of scientific thinking, inquiry, and open exploration across all levels of society.',
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      accent: 'border-blue-100 hover:border-primary/40 bg-blue-50/20',
    },
    {
      title: 'Accessible Knowledge',
      malayalam: 'ലളിതവും പ്രാപ്യവുമായ അറിവ്',
      description: 'Make scientific knowledge more accessible, engaging, and meaningful to everyday community life.',
      icon: (
        <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      accent: 'border-cyan-100 hover:border-teal/40 bg-cyan-50/20',
    },
    {
      title: 'Innovation & Responsible Technology',
      malayalam: 'നൂതനാശയങ്ങളും ഉത്തരവാദിത്തവും',
      description: 'Encourage innovation, creativity, and the ethical, responsible application of modern technology.',
      icon: (
        <svg className="w-6 h-6 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      accent: 'border-amber/20 hover:border-amber/50 bg-amber-50/20',
    },
    {
      title: 'Youth in Science',
      malayalam: 'യുവജന പങ്കാളിത്തം',
      description: 'Support the active, enthusiastic participation of young people in science and knowledge-based activities.',
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      accent: 'border-indigo-100 hover:border-indigo-400 bg-indigo-50/20',
    },
    {
      title: 'Informed Public Discussion',
      malayalam: 'ആശയവിനിമയവും പൊതുചർച്ചയും',
      description: 'Encourage informed and inclusive public dialogue on critical issues involving science and technology.',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      accent: 'border-emerald-100 hover:border-emerald-400 bg-emerald-50/20',
    },
    {
      title: 'Sustainability & Social Responsibility',
      malayalam: 'സുസ്ഥിരതയും സാമൂഹിക പ്രതിബദ്ധതയും',
      description: 'Promote development paradigms that safeguard environmental sustainability and societal well-being.',
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      accent: 'border-green-100 hover:border-green-400 bg-green-50/20',
    },
    {
      title: 'Bridging Community & Science',
      malayalam: 'ശാസ്ത്രവും സമൂഹവും തമ്മിലെ പാലം',
      description: 'Build stronger connections between scientists, educators, students, professionals, and the wider community.',
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      accent: 'border-purple-100 hover:border-purple-400 bg-purple-50/20',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Minimized Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0D3E83] via-[#145AC6] to-[#00BCD4] text-white py-12 md:py-14 px-4 shadow-sm">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-poppins tracking-tight mb-2">
            Our Vision
          </h1>
          <p className="text-xl sm:text-2xl font-anek text-blue-100 font-semibold mb-4">
            നമ്മുടെ കാഴ്ചപ്പാട്
          </p>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-blue-50/95 leading-relaxed font-normal">
            Sasthra Vedhi envisions a society where scientific temper, critical thinking,
            and knowledge-based decision-making are valued as essential foundations of social progress.
          </p>
        </div>
      </section>

      {/* Main Core Belief Card */}
      <div className="container mx-auto px-4 -mt-6 relative z-20 max-w-4xl">
        <AnimatedSection>
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-slate-100">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="space-y-3">
                <span className="text-xs uppercase font-bold tracking-wider text-primary font-poppins">
                  Guiding Principle
                </span>
                <h2 className="text-2xl font-bold font-poppins text-gray-900">
                  A Society Guided by Science
                </h2>
                <p className="text-primary font-anek font-semibold text-base">
                  ശാസ്ത്രം നയിക്കുന്ന നവ സമൂഹം
                </p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-inter pt-1">
                  We believe that science and technology can play a transformative role in improving the
                  quality of life, strengthening communities, and addressing the challenges of the future.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Vision Commitments Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary font-semibold text-xs uppercase tracking-wider">
                Our Focus Areas
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-gray-900 mt-1">
                Our Vision Is To
              </h2>
              <p className="text-gray-600 mt-2 font-anek text-base font-semibold">
                പ്രധാന ലക്ഷ്യങ്ങളും പ്രതിബദ്ധതകളും
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visionGoals.map((goal, i) => (
              <AnimatedSection key={i} className="h-full">
                <div
                  className={`rounded-xl p-6 shadow-sm border transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full flex flex-col justify-between ${goal.accent}`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-white shadow-xs flex items-center justify-center mb-5 border border-slate-100">
                      {goal.icon}
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">
                      {goal.title}
                    </h3>
                    <p className="text-xs font-semibold font-anek text-primary mb-3">
                      {goal.malayalam}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Science for Social Progress & The Progress Triad */}
      <section className="py-16 px-4 bg-slate-100/70 border-t border-slate-200">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-semibold text-xs uppercase tracking-wider">
                Beyond Discoveries
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-gray-900 mt-1">
                Science for Social Progress
              </h2>
              <p className="text-gray-600 font-anek text-base font-semibold mt-1">
                സാമൂഹിക പുരോഗതിക്കായി ശാസ്ത്രം
              </p>
              <p className="text-gray-700 mt-4 text-base leading-relaxed">
                We see science not simply as a collection of discoveries and technologies,
                but as a way of understanding and engaging with the world.
              </p>
              <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">
                Our vision is to contribute to a future where knowledge is shared widely,
                questions are welcomed, evidence is valued, and scientific thinking becomes
                an integral part of everyday life.
              </p>
            </div>
          </AnimatedSection>

          {/* 3-Step Flow Banner: Knowledge -> Inquiry -> Understanding -> Progress */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-blue-50/50 border border-blue-100/60">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-3 shadow-sm">
                    1
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Knowledge</h3>
                  <p className="text-primary font-anek text-xs font-semibold mb-2">അറിവ്</p>
                  <p className="text-gray-600 text-sm italic">
                    &ldquo;Knowledge inspires inquiry.&rdquo;
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-teal/5 border border-teal/20">
                  <div className="w-12 h-12 rounded-full bg-[#00BCD4] text-white flex items-center justify-center font-bold text-lg mb-3 shadow-sm">
                    2
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Inquiry</h3>
                  <p className="text-primary font-anek text-xs font-semibold mb-2">അന്വേഷണം</p>
                  <p className="text-gray-600 text-sm italic">
                    &ldquo;Inquiry creates understanding.&rdquo;
                  </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-emerald-50/50 border border-emerald-100/60">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg mb-3 shadow-sm">
                    3
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Understanding</h3>
                  <p className="text-primary font-anek text-xs font-semibold mb-2">മുന്നേറ്റം</p>
                  <p className="text-gray-600 text-sm italic">
                    &ldquo;Understanding enables progress.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
