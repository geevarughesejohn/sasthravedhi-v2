import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import MembershipView from '@/components/membership/MembershipView';

export const metadata: Metadata = {
  title: 'Membership | Sasthra Vedhi (ശാസ്ത്രവേദി)',
  description:
    'Join Sasthra Vedhi and become an active part of Kerala’s progressive science movement. Choose your membership tier, register online, and receive the monthly Sasthram Munnott magazine.',
};

export default function MembershipPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <SectionHeading en="Join Sasthravedhi" ml="ശാസ്ത്രവേദിയിൽ അംഗമാകൂ" />
      <MembershipView />
    </div>
  );
}

