import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import { districts } from '@/lib/data/districts';

export const metadata: Metadata = {
  title: 'District Committees | Sasthra Vedhi (ശാസ്ത്രവേദി)',
  description: 'Sasthra Vedhi active organizational committees and units across all 14 revenue districts in Kerala.',
};

export default function DistrictCommitteesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeading en="District Committees" ml="ജില്ലാ കമ്മിറ്റികൾ" />
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-sm">
        Sasthra Vedhi coordinates science popularization, seminars, and school programmes through dedicated district-level organizing committees across Kerala.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {districts.map(d => (
          <div
            key={d}
            className="bg-white p-5 text-center rounded-2xl shadow-sm border border-slate-200/80 font-bold text-primary hover:border-primary/40 hover:shadow-md transition-all"
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  );
}
