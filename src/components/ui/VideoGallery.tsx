'use client';
import { useState } from 'react';
import Image from 'next/image';

export interface VideoItem {
  id: string;
  title: string;
  malayalam?: string;
  speaker?: string;
  image: string;
  duration?: string;
  category?: string;
  youtubeId?: string;
}

export default function VideoGallery({ videos }: { videos: VideoItem[] }) {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {videos.map((vid) => (
          <div
            key={vid.id}
            onClick={() => setActiveVideo(vid)}
            className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col"
          >
            <div className="relative aspect-video overflow-hidden bg-slate-900">
              <Image
                src={vid.image}
                alt={vid.title}
                fill
                className="object-cover group-hover:scale-105 group-hover:opacity-85 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary transition-all">
                  <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              {vid.duration && (
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/75 text-white text-[10px] font-mono font-medium">
                  {vid.duration}
                </span>
              )}
              {vid.category && (
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-primary/85 text-white text-[10px] font-medium">
                  {vid.category}
                </span>
              )}
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h4 className="font-bold text-gray-900 text-sm group-hover:text-primary transition-colors line-clamp-2">
                  {vid.title}
                </h4>
                {vid.malayalam && (
                  <p className="text-xs font-semibold font-anek text-primary mt-1">
                    {vid.malayalam}
                  </p>
                )}
                {vid.speaker && (
                  <p className="text-xs text-gray-500 mt-1">
                    {vid.speaker}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-[70] flex items-center justify-center p-4 backdrop-blur-xs"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-white/10 flex items-center justify-between text-white">
              <div>
                <h3 className="font-bold text-base line-clamp-1">{activeVideo.title}</h3>
                {activeVideo.malayalam && (
                  <p className="text-xs font-anek text-teal">{activeVideo.malayalam}</p>
                )}
              </div>
              <button
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl transition-colors"
                onClick={() => setActiveVideo(null)}
              >
                &times;
              </button>
            </div>
            <div className="relative aspect-video bg-black flex items-center justify-center">
              {activeVideo.youtubeId ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-slate-900 to-[#0D3E83]">
                  <Image
                    src={activeVideo.image}
                    alt={activeVideo.title}
                    fill
                    className="object-cover opacity-30"
                  />
                  <div className="relative z-10 space-y-3">
                    <div className="w-16 h-16 rounded-full bg-primary/80 mx-auto flex items-center justify-center text-white">
                      <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-white font-bold text-lg">{activeVideo.title}</p>
                    <p className="text-blue-200 text-sm">
                      {activeVideo.speaker || 'Recorded session from Sasthra Vedhi Archives'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
