import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';

const featuredBooks = [
  {
    id: '2',
    title: 'Gandhiji Sustainable Science',
    mlTitle: 'ഗാന്ധിജിയും സുസ്ഥിര ശാസ്ത്രവും',
    category: 'Ecology & Ethics',
    image: '/images/publications/gandhiji-sustainable-science.jpg',
  },
  {
    id: '1',
    title: 'Lehari Bheeshani',
    mlTitle: 'ലഹരി ഭീഷണി',
    category: 'Youth & Health',
    image: '/images/publications/lehari-bheeshani.jpg',
  },
  {
    id: '5',
    title: 'Keralathil Anavanilayam',
    mlTitle: 'കേരളത്തിൽ ആണവനിലയം',
    category: 'Energy & Policy',
    image: '/images/publications/keralathil-anavanilayam.jpg',
  },
  {
    id: '7',
    title: 'Unnikkuttante Pustakapura',
    mlTitle: 'ഉണ്ണിക്കുട്ടന്റെ പുസ്തകപ്പുര',
    category: 'Children’s Science',
    image: '/images/publications/unnikkuttante-pustakapura.jpg',
  },
];

export default function PublicationPreview() {
  return (
    <AnimatedSection className="py-20 bg-slate-100/70 border-y border-slate-200/60">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <SectionHeading
            align="left"
            en="Publications & Books"
            ml="ശാസ്ത്രവേദി പുസ്തകങ്ങൾ"
            subtitle="Authored by eminent scholars, environmental scientists, and educators to spread scientific literacy and analytical thinking."
            className="mb-0"
          />

          <div className="shrink-0 mb-2">
            <Link
              href="/publications"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-blue-400 px-5 py-2.5 rounded-full transition shadow-sm"
            >
              <span>Explore All 25+ Books</span>
              <svg className="w-4 h-4 text-[#145AC6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <div
              key={book.id}
              className="group bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden mb-4 shadow-md bg-slate-200 group-hover:shadow-lg transition">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-md">
                    {book.category}
                  </div>
                </div>

                <h4 className="font-bold text-sm sm:text-base text-slate-900 font-poppins line-clamp-2 group-hover:text-[#145AC6] transition-colors">
                  {book.title}
                </h4>
                <p className="text-xs text-slate-500 font-anek mt-1 leading-relaxed">
                  {book.mlTitle}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-500">
                  Sasthravedhi Publication
                </span>
                <Link
                  href="/publications"
                  className="text-xs font-bold text-[#00BCD4] hover:text-[#00acc1]"
                  aria-label={`View details about ${book.title}`}
                >
                  Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
