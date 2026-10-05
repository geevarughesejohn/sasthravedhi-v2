import type { Metadata } from 'next';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import { publications } from '@/lib/data/publications';

export const metadata: Metadata = {
  title: 'Publications | Sasthra Vedhi (ശാസ്ത്രവേദി)',
  description: 'Books, monographs, and scientific educational literature published by Sasthra Vedhi.',
};

export default function PublicationsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeading en="Our Publications" ml="പ്രസിദ്ധീകരണങ്ങൾ" />
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-sm leading-relaxed">
        Sasthra Vedhi regularly publishes books, analytical volumes, and scientific study literature to bring research knowledge directly into Malayalam public discourse.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {publications.map(pub => (
          <div
            key={pub.id}
            className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-4 hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between"
          >
            <div className="relative aspect-[3/4] mb-3 overflow-hidden rounded-xl bg-slate-100">
              <Image src={pub.image} alt={pub.title} fill className="object-cover" />
            </div>
            <h3 className="font-bold text-center text-sm text-gray-900 line-clamp-2">{pub.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
