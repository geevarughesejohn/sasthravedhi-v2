import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import PillarsSection from '@/components/home/PillarsSection';
import MagazinePreview from '@/components/home/MagazinePreview';
import PublicationPreview from '@/components/home/PublicationPreview';
import WednesdayTalks from '@/components/home/WednesdayTalks';
import LehariHighlight from '@/components/home/LehariHighlight';
import ActivitiesPreview from '@/components/home/ActivitiesPreview';
import StatsCounter from '@/components/home/StatsCounter';

export const metadata: Metadata = {
  title: 'Sasthravedhi | Science and Technology for Development and Progress (കേരള ശാസ്ത്രവേദി)',
  description:
    'Sasthravedhi is Kerala’s premier platform for scientific temper and rational inquiry. Science and Technology for Development and Progress. Non-Violent Development and Progress.',
  keywords: [
    'Sasthravedhi',
    'ശാസ്ത്രവേദി',
    'Sasthram Munnott',
    'Wednesday Talks',
    'Kerala Science Movement',
    'Scientific Temper',
    'Article 51A(h)',
    'YuvaSasthravedhi',
    'Non Violent Progress',
  ],
  openGraph: {
    title: 'Sasthravedhi | Science and Technology for Development and Progress',
    description:
      'Advancing scientific thinking, environmental sustainability, and rational decision-making across all 14 districts of Kerala.',
    url: 'https://sasthravedhi.in',
    siteName: 'Sasthravedhi',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/brand/science-sustainability-community.png',
        width: 2030,
        height: 775,
        alt: 'Sasthravedhi — Science, Sustainability and Community Innovation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sasthravedhi | ശാസ്ത്രവേദി',
    description:
      'Science and Technology for Development and Progress. Non-Violent Development and Progress.',
    images: ['/images/brand/science-sustainability-community.png'],
  },
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* 1. Main Hero: Artwork Background, Left Title & Tagline, Right Innovation Card */}
      <HeroSection />

      {/* 2. Elevated Impact Statistics (3 Metrics with Reduced Width) */}
      <section className="bg-gradient-to-r from-[#071E3D] via-[#0D3E83] to-[#0B2545] py-8 px-4 border-b border-white/10 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <StatsCounter
              target={14}
              label="Districts"
              sublabel="Active chapters across all Kerala districts"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            />
            <StatsCounter
              target={100}
              label="Events & Talks"
              sublabel="Wednesday talks, camps & symposia"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
            />
            <StatsCounter
              target={25}
              label="Publications"
              sublabel="Authored books & monthly Munnott editions"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* 3. Core Pillars of Sasthravedhi */}
      <PillarsSection />

      {/* 4. Wednesday Talks Weekly Virtual Forum */}
      <WednesdayTalks />

      {/* 5. Sasthram Munnott Monthly Magazine */}
      <MagazinePreview />

      {/* 6. Signature Publications Catalog */}
      <PublicationPreview />

      {/* 7. Statewide Anti-Substance Abuse Youth Campaign */}
      <LehariHighlight />

      {/* 8. Recent Activities, Workshops & Community Join CTA */}
      <ActivitiesPreview />
    </div>
  );
}
