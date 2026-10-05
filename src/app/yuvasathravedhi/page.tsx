import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'YuvaSasthraVedhi (Youth Wing) | Sasthra Vedhi (യുവശാസ്ത്രവേദി)',
  description: 'The youth wing of Sasthra Vedhi for young minds up to age 40 engaging in science activism, anti-drug campaigns, and technical innovation.',
};

export default function Yuvasathravedhi() {
  const initiatives = [
    {
      title: 'Youth Science Camps & Hackathons',
      ml: 'സയൻസ് ക്യാമ്പുകൾ',
      desc: 'Hands-on workshops, creative problem-solving sessions, and exposure to cutting-edge tech.',
    },
    {
      title: 'Anti-Substance Abuse Drives',
      ml: 'ലഹരിവിരുദ്ധ ബോധവൽക്കരണം',
      desc: 'Grassroots awareness campaigns promoting scientific reasoning and healthy lifestyles across colleges and campuses.',
    },
    {
      title: 'Science Reels & Digital Media',
      ml: 'ശാസ്ത്ര റീൽസ് മത്സരങ്ങൾ',
      desc: 'Empowering young communicators to create short-form science explainers and counter superstition online.',
    },
    {
      title: 'Campus Reading & Debate Circles',
      ml: 'ക്യാമ്പസ് ചർച്ചാവേദികൾ',
      desc: 'Open debates on science, society, ethics, climate change, and evidence-based decision-making.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl space-y-12">
      <SectionHeading en="YuvaSasthraVedhi" ml="യുവശാസ്ത്രവേദി" />

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-sm">
        <span className="inline-block bg-[#145AC6] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
          Youth Wing (Age up to 40)
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-poppins">
          Inspiring Young Minds for Scientific Action
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 text-sm sm:text-base leading-relaxed">
          YuvaSasthraVedhi is the dynamic youth platform of Sasthra Vedhi. We unite students, young researchers, professionals, and activists across Kerala to build a forward-looking, rational society.
        </p>
        <div className="pt-2">
          <Link
            href="/membership"
            className="inline-block bg-[#145AC6] hover:bg-[#0D3E83] text-white font-bold px-6 py-3 rounded-full text-sm transition shadow"
          >
            Join YuvaSasthraVedhi via Membership →
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {initiatives.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-2"
          >
            <h3 className="font-bold text-gray-900 text-base font-poppins">{item.title}</h3>
            <p className="text-xs font-semibold text-primary font-anek">{item.ml}</p>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
