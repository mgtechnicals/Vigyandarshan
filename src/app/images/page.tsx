"use client"

import Image from 'next/image';
import { useState } from 'react';

export default function GallerySection() {
  const allGalleryItems = [
    { id: 1, src: '/img1.jpg', alt: 'Gallery Image 1' },
    { id: 2, src: '/img2.jpg', alt: 'Gallery Image 2' },
    { id: 3, src: '/img3.jpg', alt: 'Gallery Image 3' },
    { id: 4, src: '/img4.jpg', alt: 'Gallery Image 4' },
    { id: 5, src: '/img5.jpg', alt: 'Gallery Image 5' },
    { id: 6, src: '/img6.jpg', alt: 'Gallery Image 6' },
    { id: 7, src: '/img7.jpg', alt: 'Gallery Image 7' },
    { id: 8, src: '/img8.jpg', alt: 'Gallery Image 8' },
    { id: 9, src: '/img9.jpg', alt: 'Gallery Image 9' },
  ];

  const [visibleItems, setVisibleItems] = useState(6);

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 3);
  };

  return (
    <section className="bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mt-16 text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-amber-500 mb-8 sm:mb-12">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {allGalleryItems.slice(0, visibleItems).map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
            >
              <Image
                src={item.src}
                alt={item.alt}
                layout="responsive"
                width={400}
                height={300}
                className="transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
        {visibleItems < allGalleryItems.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMoreItems}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
