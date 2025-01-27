import { Metadata } from 'next';
import GalleryGrid from './GalleryGrid';

export const metadata: Metadata = {
  title: 'Gallery - Vigyan Darshan',
  description: 'Explore our collection of scientific achievements and memorable moments',
  openGraph: {
    title: 'Gallery - Vigyan Darshan',
    description: 'Explore our collection of scientific achievements and memorable moments',
    images: [
      {
        url: '/img1.jpg',
        width: 1200,
        height: 630,
        alt: 'Gallery Preview',
      },
    ],
  },
};

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

export default function GallerySection() {
  return (
    <section className="bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mt-16 text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-amber-500 mb-8 sm:mb-12">
          Our Gallery
        </h2>
        <GalleryGrid initialItems={allGalleryItems} />
      </div>
    </section>
  );
}
