"use client"

import { useState } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

interface GalleryGridProps {
  initialItems: GalleryItem[];
}

export default function GalleryGrid({ initialItems }: GalleryGridProps) {
  const [visibleItems, setVisibleItems] = useState(6);

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 3);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {initialItems.slice(0, visibleItems).map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-2xl shadow-lg group"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={400}
              height={300}
              className="transform group-hover:scale-110 transition-transform duration-300"
              priority={item.id <= 3}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white font-semibold text-lg">{item.alt}</p>
            </div>
          </div>
        ))}
      </div>
      {visibleItems < initialItems.length && (
        <div className="text-center mt-8">
          <button
            onClick={loadMoreItems}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}
