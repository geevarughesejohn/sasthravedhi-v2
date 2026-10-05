import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'About Us | Sasthra Vedhi (ശാസ്ത്രവേദി)',
  description:
    'Sasthra Vedhi is dedicated to advancing scientific thinking, curiosity, and the responsible application of science and technology for society.',
};

export default function AboutPage() {
  const pillars = [
    {
      title: 'Curiosity & Inquiry',
      malayalam: 'അന്വേഷണത്വരയും ജിജ്ഞാസയും',
      description:
        'Cultivating a culture where people are encouraged to ask bold questions, explore new ideas, and approach the future with knowledge and reason.',
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
      title: 'Science Belongs to All',
      malayalam: 'ശാസ്ത്രം ഏവർക്കും',
      description:
        'Breaking science out of laboratories and classrooms to make scientific insights accessible, relevant, and meaningful in everyday life.',
      icon: (
        <svg className="w-6 h-6 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      accent: 'border-amber/20 hover:border-amber/50 bg-amber-50/20',
    },
    {
      title: 'Responsible Dialogue',
      malayalam: 'സാമൂഹിക പ്രതിബദ്ധത',
      description:
        'Ensuring scientific and technological progress is evaluated alongside its ethical, social, and environmental implications for communities.',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      accent: 'border-emerald-100 hover:border-emerald-400 bg-emerald-50/20',
    },
  ];

  const focusAreas = [
    {
      title: 'Climate Change & Environment',
      tag: 'പരിസ്ഥിതി സംരക്ഷണം',
      desc: 'Understanding ecological boundaries, climate resilience, and sustainable development paradigms.',
      icon: '🌿',
    },
    {
      title: 'Energy & Ecological Transition',
      tag: 'ഊർജ്ജ സുസ്ഥിരത',
      desc: 'Promoting clean, renewable alternatives and rational energy policies for communities.',
      icon: '⚡',
    },
    {
      title: 'Healthcare & Public Well-being',
      tag: 'ശാസ്ത്രീയ ആരോഗ്യം',
      desc: 'Advancing evidence-based healthcare, combating health misinformation, and promoting public wellbeing.',
      icon: '🩺',
    },
    {
      title: 'Artificial Intelligence & Emerging Tech',
      tag: 'നൂതന സാങ്കേതികവിദ്യ',
      desc: 'Fostering informed civic discourse around the ethical, societal, and economic impact of emerging AI.',
      icon: '🤖',
    },
    {
      title: 'Science Education & Literacy',
      tag: 'ശാസ്ത്ര വിദ്യാഭ്യാസം',
      desc: 'Inspiring critical inquiry in schools, colleges, and community centers through hands-on learning.',
      icon: '📚',
    },
    {
      title: 'Social & Cultural Progress',
      tag: 'സാമൂഹിക മുന്നേറ്റം',
      desc: 'Demystifying superstitions and pseudoscientific practices through constructive public engagement.',
      icon: '🕊️',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Minimized Header Section (clean, compact height, without the pill tag) */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0D3E83] via-[#145AC6] to-[#00BCD4] text-white py-12 md:py-14 px-4 shadow-sm">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-poppins tracking-tight mb-2">
            About Sasthra Vedhi
          </h1>
          <p className="text-xl sm:text-2xl font-anek text-blue-100 font-semibold mb-4">
            ശാസ്ത്രവേദി
          </p>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-blue-50/95 leading-relaxed font-normal">
            Sasthra Vedhi is a dedicated platform advancing scientific thinking, knowledge,
            and the responsible application of science and technology for the benefit of society.
          </p>
        </div>
      </section>

      {/* Section 1: Science Belongs to Everyone */}
      <div className="container mx-auto px-4 -mt-6 relative z-20 max-w-4xl">
        <AnimatedSection>
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-slate-100">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-poppins text-gray-900">
                  Science Belongs to Everyone
                </h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-inter">
                  We believe that science belongs to everyone. It is not confined to laboratories, classrooms,
                  or academic institutions. Scientific thinking helps individuals and communities understand
                  the world around them, question assumptions, examine evidence, and make informed decisions.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Sasthra Vedhi works to create a meaningful connection between science, technology, and society.
                  It brings together people from different backgrounds who share an interest in science, knowledge,
                  innovation, and social progress.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Section 2: At the Heart of Sasthra Vedhi (3 Pillars, without 'Evidence & Reason') */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary font-semibold text-xs uppercase tracking-wider">
                Our Core Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-gray-900 mt-1">
                At the Heart of Sasthra Vedhi
              </h2>
              <p className="text-gray-600 mt-2 font-anek text-base font-semibold">
                അന്വേഷണത്വരയും അറിവും സംവാദവും ചേരുന്നൊരു സംസ്കാരം
              </p>
              <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
                At its heart, Sasthra Vedhi is about curiosity, inquiry, knowledge, and constructive dialogue.
                We seek to build a culture where people are encouraged to ask questions, respect evidence,
                explore new ideas, and approach the challenges of the future with knowledge and reason.
              </p>
            </div>
          </AnimatedSection>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <AnimatedSection key={i} className="h-full">
                <div
                  className={`rounded-xl p-6 shadow-sm border transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full flex flex-col justify-between ${pillar.accent}`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-white shadow-xs flex items-center justify-center mb-5 border border-slate-100">
                      {pillar.icon}
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-semibold font-anek text-primary mb-3">
                      {pillar.malayalam}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>



      {/* Section 5: Towards a Scientific Society */}
      <section className="py-16 px-4 bg-slate-100/70 border-t border-slate-200">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-semibold text-xs uppercase tracking-wider">
                Future-Focused Engagement
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-gray-900 mt-1">
                Towards a Scientific Society
              </h2>
              <p className="text-gray-600 font-anek text-base font-semibold mt-1">
                വെല്ലുവിളികളെ ശാസ്ത്രീയ യുക്തിയോടെ നേരിടുക
              </p>
              <p className="text-gray-700 mt-3 text-sm sm:text-base leading-relaxed">
                The challenges facing society are increasingly interconnected with science and technology.
                Climate change, energy, healthcare, education, artificial intelligence, environmental
                sustainability, and emerging technologies all require informed public discussion.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, i) => (
              <AnimatedSection key={i} className="h-full">
                <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl sm:text-3xl">{area.icon}</span>
                      <span className="text-[11px] font-anek bg-blue-50 text-primary px-2.5 py-1 rounded-full font-medium">
                        {area.tag}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Closing Credo Banner */}
          <AnimatedSection className="mt-10">
            <div className="bg-white border-l-4 border-primary rounded-xl p-6 sm:p-8 shadow-sm">
              <p className="text-base sm:text-lg font-medium text-gray-800 italic leading-relaxed">
                &ldquo;We believe that a society that asks questions, values evidence, and remains open to learning
                is better equipped to understand and respond to the challenges of the future.&rdquo;
              </p>
              <p className="text-xs sm:text-sm font-semibold text-primary mt-2">
                — Sasthra Vedhi (ശാസ്ത്രവേദി)
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>


    </div>
  );
}
