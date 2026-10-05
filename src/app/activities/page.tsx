import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import VideoGallery, { VideoItem } from '@/components/ui/VideoGallery';

export const metadata: Metadata = {
  title: 'Activities | Sasthra Vedhi (ശാസ്ത്രവേദി)',
  description:
    'Discover the diverse range of science programmes, student workshops, public discussions, and community initiatives conducted by Sasthra Vedhi across Kerala.',
};

export default function ActivitiesPage() {
  const domains = [
    {
      title: 'Science & Technology Programmes',
      malayalam: 'ശാസ്ത്ര-സാങ്കേതിക പരിപാടികൾ',
      description:
        'Lectures, seminars, and interactive sessions covering modern scientific breakthroughs, technological advances, and their relevance to everyday society.',
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      accent: 'border-blue-100 hover:border-primary/40 bg-blue-50/20',
    },
    {
      title: 'Student & Youth Programmes',
      malayalam: 'വിദ്യാർത്ഥി-യുവജന പരിപാടികൾ',
      description:
        'Science camps, quizzes, competitions, and experiential workshops encouraging young minds to explore creative ideas beyond conventional classrooms.',
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-5.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      ),
      accent: 'border-indigo-100 hover:border-indigo-400 bg-indigo-50/20',
    },
    {
      title: 'Science Communication',
      malayalam: 'ശാസ്ത്ര വിനിമയം',
      description:
        'Communicating complex concepts in accessible language through public talks, articles, print features, online content, and open forums.',
      icon: (
        <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
      ),
      accent: 'border-cyan-100 hover:border-teal/40 bg-cyan-50/20',
    },
    {
      title: 'Environment & Sustainability',
      malayalam: 'പരിസ്ഥിതിയും സുസ്ഥിരതയും',
      description:
        'Focused initiatives addressing climate change, ecological protection, energy transition, and sustainable natural resource management.',
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
    {
      title: 'Innovation & Critical Thinking',
      malayalam: 'നൂതനാശയങ്ങളും ചിന്തയും',
      description:
        'Nurturing multi-perspective problem solving, logical reasoning, and openness to creative solutions for community challenges.',
      icon: (
        <svg className="w-6 h-6 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      accent: 'border-amber/20 hover:border-amber/50 bg-amber-50/20',
    },
    {
      title: 'Public Awareness',
      malayalam: 'ജനകീയ ബോധവൽക്കരണം',
      description:
        'Addressing social issues and public-interest topics through evidence-backed awareness sessions and responsible civic dialogue.',
      icon: (
        <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      ),
      accent: 'border-rose-100 hover:border-rose-400 bg-rose-50/20',
    },
    {
      title: 'Publications & Knowledge Sharing',
      malayalam: 'പ്രസിദ്ധീകരണങ്ങൾ',
      description:
        'Creating and distributing science-related literature through the monthly Munnott magazine, insightful books, and study materials.',
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      accent: 'border-purple-100 hover:border-purple-400 bg-purple-50/20',
    },
    {
      title: 'Community Engagement',
      malayalam: 'സാമൂഹിക പങ്കാളിത്തം',
      description:
        'Grassroots district-level programmes providing opportunities for citizens from all backgrounds to actively participate in science.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      accent: 'border-blue-100 hover:border-blue-400 bg-blue-50/20',
    },
  ];

  const photoHighlights = [
    {
      title: 'Science Camps & Workshops',
      malayalam: 'ശാസ്ത്ര ക്യാമ്പുകൾ',
      image: '/images/hero/events/03-science-camp.jpg',
      description: 'Hands-on inquiry and experimental sessions connecting students directly with scientists and educators.',
    },
    {
      title: 'Environment Day Observances',
      malayalam: 'പരിസ്ഥിതി ദിനാചരണം',
      image: '/images/hero/events/02-environment-day.jpg',
      description: 'Community environmental campaigns, sapling distributions, and debates on ecological resilience.',
    },
    {
      title: 'Youth Competitions & Sasthra Reels',
      malayalam: 'ശാസ്ത്ര റീൽസ് മത്സരങ്ങൾ',
      image: '/images/hero/events/01-sasthra-reels-awards.jpg',
      description: 'Engaging younger generations through digital storytelling, science reels, and creative competitions.',
    },
    {
      title: 'Munnott Launch & Book Releases',
      malayalam: 'പ്രസിദ്ധീകരണ പ്രകാശനം',
      image: '/images/hero/events/04-munnott-launch.jpg',
      description: 'Regular release of our monthly magazine, analytical volumes, and peer-reviewed educational literature.',
    },
  ];

  const videoHighlights: VideoItem[] = [
    {
      id: 'v1',
      title: 'Wednesday Talk: Scientific Inquiry & Modern Physics',
      speaker: 'Dr. Richard Walding',
      malayalam: 'ബുധനാഴ്ച സംഭാഷണം',
      image: '/images/media/talks/richard-walding.jpg',
      duration: '45 min',
      category: 'Wednesday Talks',
    },
    {
      id: 'v2',
      title: 'Sasthra Reels: Award-Winning Science Short Videos',
      speaker: 'Youth Communicators Forum',
      malayalam: 'ശാസ്ത്ര റീൽസ്',
      image: '/images/hero/events/01-sasthra-reels-awards.jpg',
      duration: '15 min',
      category: 'Science Reels',
    },
    {
      id: 'v3',
      title: 'Environment Day Keynote & Climate Dialogue',
      speaker: 'Environmental Science Panel',
      malayalam: 'പരിസ്ഥിതി ദിന പ്രഭാഷണം',
      image: '/images/media/events/environment-day.jpg',
      duration: '38 min',
      category: 'Special Lecture',
    },
    {
      id: 'v4',
      title: 'Sasthra Thallu: Interactive Public Science Debate',
      speaker: 'Sasthra Vedhi State Council',
      malayalam: 'ശാസ്ത്ര ചർച്ചാ പരമ്പര',
      image: '/images/programs/sasthra-thallu.jpg',
      duration: '28 min',
      category: 'Public Forum',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Minimized Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0D3E83] via-[#145AC6] to-[#00BCD4] text-white py-12 md:py-14 px-4 shadow-sm">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-poppins tracking-tight mb-2">
            Our Activities
          </h1>
          <p className="text-xl sm:text-2xl font-anek text-blue-100 font-semibold mb-4">
            പ്രവർത്തനങ്ങൾ
          </p>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-blue-50/95 leading-relaxed font-normal">
            Sasthra Vedhi conducts a wide range of programmes connecting science, technology,
            education, and society — expanding access to knowledge and creating opportunities
            for learning and public engagement.
          </p>
        </div>
      </section>

      {/* Intro Overview Card */}
      <div className="container mx-auto px-4 -mt-6 relative z-20 max-w-4xl">
        <AnimatedSection>
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-slate-100">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 14.93V18a1 1 0 01-2 0v-1.07A7.002 7.002 0 015.07 11H6a1 1 0 010-2h-.93A7.002 7.002 0 0111 3.07V4a1 1 0 012 0v-.93A7.002 7.002 0 0118.93 9H18a1 1 0 010 2h.93A7.002 7.002 0 0113 16.93z" />
                </svg>
              </div>
              <div className="space-y-3">
                <span className="text-xs uppercase font-bold tracking-wider text-primary font-poppins">
                  Our Scope of Action
                </span>
                <h2 className="text-2xl font-bold font-poppins text-gray-900">
                  Connecting Science, Technology & Society
                </h2>
                <p className="text-primary font-anek font-semibold text-base">
                  ശാസ്ത്രം, സാങ്കേതികവിദ്യ, സമൂഹം
                </p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-inter pt-1">
                  Our activities are designed to encourage scientific thinking, expand access to knowledge,
                  and create inclusive platforms for students, teachers, researchers, professionals, and the wider public.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* 8 Activity Domains Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary font-semibold text-xs uppercase tracking-wider">
                What We Do
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-gray-900 mt-1">
                Spheres of Activity
              </h2>
              <p className="text-gray-600 mt-2 font-anek text-base font-semibold">
                പ്രധാന പ്രവർത്തന മേഖലകൾ
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((domain, i) => (
              <AnimatedSection key={i} className="h-full">
                <div
                  className={`rounded-xl p-6 shadow-sm border transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full flex flex-col justify-between ${domain.accent}`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-white shadow-xs flex items-center justify-center mb-5 border border-slate-100">
                      {domain.icon}
                    </div>
                    <h3 className="font-bold text-base text-gray-900 mb-1">
                      {domain.title}
                    </h3>
                    <p className="text-xs font-semibold font-anek text-primary mb-3">
                      {domain.malayalam}
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {domain.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section: Photos and Videos */}
      <section className="py-16 px-4 bg-white border-y border-slate-200">
        <div className="container mx-auto max-w-5xl space-y-16">
          {/* Photo Gallery */}
          <div>
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-primary font-semibold text-xs uppercase tracking-wider">
                  Photo Highlights
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-gray-900 mt-1">
                  Recent Activity Gallery
                </h2>
                <p className="text-gray-600 mt-2 font-anek text-base font-semibold">
                  സമീപകാല പരിപാടികളുടെ ചിത്രങ്ങൾ
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {photoHighlights.map((item, i) => (
                <AnimatedSection key={i} className="h-full">
                  <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col h-full group">
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs font-semibold font-anek text-primary mb-2">
                          {item.malayalam}
                        </p>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Video Gallery */}
          <div className="border-t border-slate-100 pt-12">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-primary font-semibold text-xs uppercase tracking-wider">
                  Video Gallery
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-gray-900 mt-1">
                  Featured Talks & Video Highlights
                </h2>
                <p className="text-gray-600 mt-2 font-anek text-base font-semibold">
                  ശാസ്ത്ര പ്രഭാഷണങ്ങളും വീഡിയോകളും
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <VideoGallery videos={videoHighlights} />
            </AnimatedSection>
          </div>
        </div>
      </section>


    </div>
  );
}
