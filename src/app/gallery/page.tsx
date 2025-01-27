import Image from "next/image";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery | Vigyan Darshan',
  description: 'Explore our gallery showcasing events, workshops, and moments from Vigyan Darshan.',
  openGraph: {
    title: 'Gallery | Vigyan Darshan',
    description: 'View our gallery of events and activities',
    images: ['/img1.jpg'],
  },
}

const allImages = [
  { src: "/img1.jpg", alt: "Gallery Image 1" },
  { src: "/img2.jpg", alt: "Gallery Image 2" },
  { src: "/img3.jpg", alt: "Gallery Image 3" },
  { src: "/img4.jpg", alt: "Gallery Image 4" },
  { src: "/img5.jpg", alt: "Gallery Image 5" },
  { src: "/img1.jpg", alt: "Gallery Image 6" },
  { src: "/img2.jpg", alt: "Gallery Image 7" },
  { src: "/img3.jpg", alt: "Gallery Image 8" },
  { src: "/img4.jpg", alt: "Gallery Image 9" },
  { src: "/img5.jpg", alt: "Gallery Image 10" },
  { src: "/img1.jpg", alt: "Gallery Image 11" },
  { src: "/img2.jpg", alt: "Gallery Image 12" }
];

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-amber-500 mb-10 mt-10">
          Our Gallery
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allImages.map((image, index) => (
            <div 
              key={index}
              className="aspect-square relative cursor-pointer group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Image 
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 25vw"
                priority={index < 4}
                quality={85}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
