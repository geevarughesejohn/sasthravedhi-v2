import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Lightbox from '@/components/ui/Lightbox';
import VideoGallery, { VideoItem } from '@/components/ui/VideoGallery';

export const metadata: Metadata = {
  title: 'Gallery | Sasthra Vedhi (ശാസ്ത്രവേദി)',
  description:
    'Explore photos and video recordings of Sasthra Vedhi events, Wednesday Talks, science camps, and public seminars across Kerala.',
};

export default function GalleryPage() {
  const images = [
    '/images/hero/events/01-sasthra-reels-awards.jpg',
    '/images/hero/events/02-environment-day.jpg',
    '/images/hero/events/03-science-camp.jpg',
    '/images/hero/events/04-munnott-launch.jpg',
    '/images/programs/sasthra-thallu.jpg',
    '/images/media/events/environment-day.jpg',
    '/images/media/talks/richard-walding.jpg',
    '/images/events/science-camp.jpg',
  ];

  const videos: VideoItem[] = [
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
            Media Gallery
          </h1>
          <p className="text-xl sm:text-2xl font-anek text-blue-100 font-semibold mb-4">
            ചിത്രശാലയും വീഡിയോകളും
          </p>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-blue-50/95 leading-relaxed font-normal">
            Browse through photographs and video recordings from our state and district-level
            programmes, science camps, lecture series, and public demonstrations.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl mt-12 space-y-16">
        {/* Photo Gallery Section */}
        <AnimatedSection>
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
            <div className="mb-8">
              <span className="text-primary font-semibold text-xs uppercase tracking-wider">
                Photo Collection
              </span>
              <h2 className="text-2xl font-bold font-poppins text-gray-900 mt-1">
                Photo Gallery
              </h2>
              <p className="text-gray-600 font-anek text-sm font-semibold mt-1">
                ക്ലിക്ക് ചെയ്ത് ചിത്രങ്ങൾ വലുതാക്കി കാണാം
              </p>
            </div>
            <Lightbox images={images} />
          </div>
        </AnimatedSection>

        {/* Video Gallery Section */}
        <AnimatedSection>
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
            <div className="mb-8">
              <span className="text-primary font-semibold text-xs uppercase tracking-wider">
                Video Archive
              </span>
              <h2 className="text-2xl font-bold font-poppins text-gray-900 mt-1">
                Video Gallery
              </h2>
              <p className="text-gray-600 font-anek text-sm font-semibold mt-1">
                പ്രധാന പ്രഭാഷണങ്ങളും പരിപാടികളുടെ ദൃശ്യങ്ങളും
              </p>
            </div>
            <VideoGallery videos={videos} />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
