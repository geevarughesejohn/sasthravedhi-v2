import fs from 'fs';
import type { Metadata } from 'next';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import { magazineIssues as staticIssues } from '@/lib/data/magazine';
import type { MagazineIssue } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Sasthram Munnott Magazine | Sasthra Vedhi (ശാസ്ത്രവേദി)',
  description: 'Monthly science magazine published by Sasthra Vedhi featuring contemporary scientific articles, research reviews, and organization updates.',
};

export const dynamic = 'force-dynamic';

export default async function MagazinePage() {
  let allIssues: MagazineIssue[] = [...staticIssues];

  try {
    // Read from /private/magazine.json (GoDaddy Node.js Hosting persistent storage)
    const privatePath = '/private/magazine.json';
    if (fs.existsSync(privatePath)) {
      const privateData = fs.readFileSync(privatePath, 'utf8');
      const parsedIssues = JSON.parse(privateData) as MagazineIssue[];
      if (Array.isArray(parsedIssues)) {
        allIssues = [...parsedIssues, ...allIssues];
      }
    }
  } catch (error) {
    console.error('Error reading /private/magazine.json:', error);
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeading en="Sasthram Munnott Magazine" ml="ശാസ്ത്രം മുന്നോട്ട് മാസിക" />
      <p className="text-center mb-12 max-w-2xl mx-auto">
        Sasthravedhi publishes &apos;Sasthram Munnott&apos; monthly to disseminate scientific articles and organization updates. Read our latest issues below.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {allIssues.map(issue => (
          <div key={issue.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="relative aspect-[3/4]">
              <Image src={issue.image} alt={`${issue.month} ${issue.year}`} fill className="object-cover" />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold">{issue.month} {issue.year}</h3>
              <a href={issue.link || "#"} className="text-teal-600 text-sm hover:underline mt-2 inline-block">Download PDF</a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 bg-blue-50 p-6 rounded-lg text-sm text-blue-900">
        <h4 className="font-bold mb-2">Monthly Update Workflow (Node.js Hosting):</h4>
        <p>Go to the GoDaddy File Manager, upload your new cover image to <code>public/assets/</code>, and update <code>/private/magazine.json</code> with the new issue details.</p>
      </div>
    </div>
  );
}
