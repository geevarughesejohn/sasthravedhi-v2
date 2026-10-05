import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';

const activityHighlights = [
  {
    id: '1',
    title: 'Annual Youth Science Camp',
    mlTitle: 'സയൻസ് ക്യാമ്പ്',
    category: 'STEM & Camps',
    date: 'Summer 2025',
    description: 'Experiential science workshops with hands-on experiments, astronomy sky-watching, and robotics sessions for school students.',
    image: '/images/events/science-camp.jpg',
  },
  {
    id: '2',
    title: 'World Environment Day Campaign',
    mlTitle: 'പരിസ്ഥിതി ദിനാചരണം',
    category: 'Ecology & Climate',
    date: 'June 2025',
    description: 'Tree planting drives, climate change seminars, and scientific evaluations of local river basin preservation across districts.',
    image: '/images/media/events/environment-day.jpg',
  },
  {
    id: '3',
    title: 'Public Science Dialogue & Keynote',
    mlTitle: 'ശാസ്ത്ര സംവാദം',
    category: 'Civic Discourse',
    date: '2025',
    description: 'Interactive forum with legislators and public intellectuals addressing science policy, rational education, and Kerala’s future.',
    image: '/images/media/events/opposition-leader-talk.jpg',
  },
];

export default function ActivitiesPreview() {
  return (
    <AnimatedSection className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <SectionHeading
            align="left"
            en="Recent Activities & Programs"
            ml="സമീപകാല പ്രവർത്തനങ്ങൾ"
            subtitle="From school camps and nature walks to state-level symposiums and digital competitions across Kerala."
            className="mb-0"
          />

          <div className="shrink-0 mb-2">
            <Link
              href="/activities"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-blue-400 px-5 py-2.5 rounded-full transition shadow-sm"
            >
              <span>View All Programs</span>
              <svg className="w-4 h-4 text-[#145AC6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activityHighlights.map((act) => (
            <div
              key={act.id}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-200">
                  <Image
                    src={act.image}
                    alt={act.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-70" />
                  <div className="absolute top-3 left-3 bg-[#145AC6] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                    {act.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-slate-800 text-[11px] font-semibold px-2.5 py-0.5 rounded-md shadow-sm">
                    {act.date}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg text-slate-900 font-poppins group-hover:text-[#145AC6] transition-colors leading-snug">
                    {act.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 font-anek mt-0.5 mb-2.5 leading-relaxed">
                    {act.mlTitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {act.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/activities"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#145AC6] hover:text-[#0D3E83] group-hover:translate-x-1 transition-transform"
                >
                  <span>Read event report</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Standardized Community Banner Callout */}
        <div className="mt-14 bg-gradient-to-r from-blue-50 via-teal-50 to-indigo-50 border border-blue-200/80 rounded-3xl p-8 sm:p-10 text-center space-y-4">
          <span className="inline-block bg-[#145AC6] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
            Become an Active Participant
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-poppins">
            Ready to Build a Rational &amp; Sustainable Kerala?
          </h3>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Join thousands of teachers, doctors, engineers, students, and thinkers across all 14 districts. Participate in local workshops, Wednesday Talks, and write for Sasthram Munnott.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/membership"
              className="bg-[#145AC6] hover:bg-[#0D3E83] text-white font-bold px-7 py-3 rounded-full text-sm transition shadow-sm hover:shadow-md"
            >
              Enroll as a Member Today →
            </Link>
            <Link
              href="/district-committees"
              className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold px-6 py-3 rounded-full text-sm transition shadow-sm"
            >
              Contact Your District Committee
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
