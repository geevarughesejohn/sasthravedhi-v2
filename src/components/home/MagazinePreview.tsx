import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import { magazineIssues } from '@/lib/data/magazine';

export default function MagazinePreview() {
  const latestIssue = magazineIssues[0];
  const otherIssues = magazineIssues.slice(1, 5);

  return (
    <AnimatedSection className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeading
          en="Sasthram Munnott Magazine"
          ml="ശാസ്ത്രം മുന്നോട്ട് മാസിക"
          subtitle="Kerala's leading popular science monthly publication bringing contemporary research, environmental insights, astronomy, and technology discussions to readers of all generations."
        />

        {/* Featured Issue Showcase + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Latest Issue Highlight Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-50/80 via-indigo-50/50 to-slate-50 p-6 sm:p-8 rounded-3xl border border-blue-100 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-[#145AC6] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                Latest Edition
              </span>
              <span className="text-xs font-semibold text-slate-500 font-mono">
                {latestIssue.month} {latestIssue.year}
              </span>
            </div>

            <div className="relative aspect-[3/4] w-48 sm:w-56 mx-auto mb-6 rounded-xl overflow-hidden shadow-2xl border-4 border-white group">
              <Image
                src={latestIssue.image}
                alt={`Sasthram Munnott ${latestIssue.month} ${latestIssue.year}`}
                fill
                sizes="(max-width: 768px) 250px, 300px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="text-center space-y-3">
              <h3 className="font-bold text-xl text-slate-900 font-poppins">
                Sasthram Munnott — {latestIssue.month} {latestIssue.year}
              </h3>
              <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
                Featuring in-depth analytical articles, scientific viewpoints, reader essays, and student contributions.
              </p>
              <div className="pt-2 flex items-center justify-center gap-3">
                <Link
                  href="/magazine"
                  className="inline-flex items-center gap-1.5 bg-[#145AC6] hover:bg-[#0D3E83] text-white font-bold px-6 py-2.5 rounded-full text-xs transition shadow-sm"
                >
                  Read Online
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-1 text-slate-700 hover:text-[#145AC6] font-semibold text-xs px-4 py-2 rounded-full hover:bg-slate-100 transition"
                >
                  Subscribe
                </Link>
              </div>
            </div>
          </div>

          {/* Grid of Other Recent Issues */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-lg text-slate-900 font-poppins">
                Recent Monthly Archives
              </h4>
              <Link
                href="/magazine"
                className="text-xs font-semibold text-[#145AC6] hover:underline inline-flex items-center gap-1"
              >
                View all archives →
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {otherIssues.map((issue) => (
                <Link
                  key={issue.id}
                  href="/magazine"
                  className="group block bg-slate-50 p-3 rounded-2xl border border-slate-200/80 hover:border-blue-400 hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-md mb-2 bg-slate-200">
                    <Image
                      src={issue.image}
                      alt={`Sasthram Munnott ${issue.month}`}
                      fill
                      sizes="(max-width: 768px) 150px, 200px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-xs text-slate-800 font-poppins">
                      {issue.month}
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">
                      {issue.year}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h5 className="font-bold text-sm text-slate-900">Want to contribute an article?</h5>
                <p className="text-xs text-slate-600 mt-0.5">
                  We welcome essays, science reporting, and youth viewpoints for upcoming issues.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#145AC6] bg-white border border-slate-200 hover:border-blue-300 px-5 py-2.5 rounded-full transition shadow-sm shrink-0"
              >
                Submit Article
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
