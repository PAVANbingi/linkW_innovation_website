'use client';

import Image from 'next/image';
import { useState } from 'react';

const images = [
  { id: 1, src: '/g1.jpg', alt: 'Photo 1', info: 'Website under construction' },
  { id: 2, src: '/g2.jpg', alt: 'Photo 1', info: 'Website under construction' },
  { id: 3, src: '/g3.jpg', alt: 'Photo 1', info: 'Website under construction' },
  { id: 4, src: '/g4.jpg', alt: 'Photo 1', info: 'Website under construction' },
  { id: 5, src: '/g5.jpg', alt: 'Photo 1', info: 'Website under construction' },
  { id: 6, src: '/g6.jpg', alt: 'Photo 1', info: 'Website under construction' },
  { id: 7, src: '/g7.jpg', alt: 'Photo 1', info: 'Website under construction' },
  { id: 8, src: '/gl1.png', alt: 'Photo 1', info: 'Website under construction' },
  { id: 9, src: '/gl2.png', alt: 'Photo 1', info: 'Website under construction' },
  { id: 10, src: '/gl3.png', alt: 'Photo 1', info: 'Website under construction' },
  { id: 11, src: '/gl4.png', alt: 'Photo 1', info: 'Website under construction' },
  { id: 12, src: '/gl5.png', alt: 'Photo 1', info: 'Website under construction' },
  { id: 13, src: '/gl6.png', alt: 'Photo 1', info: 'Website under construction' },
  { id: 14, src: '/gl7.png', alt: 'Photo 1', info: 'Website under construction' },
  { id: 15, src: '/gl8.png', alt: 'Photo 1', info: 'Website under construction' },
  { id: 16, src: '/gl9.png', alt: 'Photo 1', info: 'Website under construction' },
  { id: 17, src: '/gl10.png', alt: 'Photo 1', info: 'Website under construction' },
  { id: 18, src: '/gl11.png', alt: 'Photo 1', info: 'Website under construction' },
  { id: 19, src: '/gl12.png', alt: 'Photo 1', info: 'Website under construction' },
  { id: 20, src: '/gl13.png', alt: 'Photo 1', info: 'Website under construction' },
  { id: 21, src: '/gl14.png', alt: 'Photo 1', info: 'Website under construction' },
  { id: 22, src: '/gl15.png', alt: 'Photo 1', info: 'Website under construction' },
  { id: 23, src: '/gl16.png', alt: 'Photo 1', info: 'Website under construction' },
  { id: 24, src: '/gl17.png', alt: 'Photo 1', info: 'Website under construction' },
  { id: 25, src: '/gl18.png', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
  { id: 26, src: '/gl19.png', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
 
  { id: 28, src: '/gl20.png', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
  { id: 29, src: '/gl21.png', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
  { id: 30, src: '/gl22.png', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
  // { id: 31, src: '/gl23.png', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
 { id: 32, src: '/gl24.png', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
  // { id: 33, src: '/gl23.png', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
  // { id: 34, src: '/gl23.png', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
];

export default function Gallery() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="relative w-full overflow-hidden mt-16 py-10 bg-white">
      <h1 className="text-4xl sm:text-6xl font-bold text-center mb-8 text-black transition-colors duration-300 hover:text-yellow-600">
        Our Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 lg:px-16">
        {images.map(({ id, src, alt, info }) => (
          <div
            key={id}
            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            onMouseEnter={() => setHoveredImage(id)}
            onMouseLeave={() => setHoveredImage(null)}
            onClick={() => setSelectedImage({ src, alt })}
          >
            {/* Image */}
            <div className="relative w-full h-0 pb-[75%]">
              <Image
                src={src}
                alt={alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            {/* Overlay */}
            <div
              className={`absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-center px-4 transition-opacity duration-300 group-hover:opacity-100 ${
                hoveredImage === id ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <p className="text-sm md:text-base font-medium">{info}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)} // Close modal on clicking the overlay
        >
          <div className="relative max-w-3xl w-full p-4">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              layout="responsive"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
