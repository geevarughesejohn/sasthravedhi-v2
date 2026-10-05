'use client';
import { useState } from 'react';
import Image from 'next/image';
export default function Lightbox({ images }: { images: string[] }) {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <div key={i} className="relative aspect-square cursor-pointer overflow-hidden rounded-lg" onClick={() => setSelected(src)}>
            <Image src={src} alt="Gallery image" fill className="object-cover hover:scale-105 transition-transform" />
          </div>
        ))}
      </div>
      {selected && (
        <div className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="relative w-full max-w-4xl aspect-video">
            <Image src={selected} alt="Expanded image" fill className="object-contain" />
          </div>
          <button className="absolute top-4 right-4 text-white text-4xl" onClick={() => setSelected(null)}>&times;</button>
        </div>
      )}
    </div>
  );
}
