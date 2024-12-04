'use client'
import Image from 'next/image';
import { useState } from 'react';


  const images = [
    { id: 1, src: '/p1.jpg', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
    { id: 2, src: '/p3.jpg', alt: 'Photo 2', info: 'Occasion: Testing at Site B' },
    { id: 3, src: '/a3.jpg', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
    { id: 4, src: '/bn2.jpg', alt: 'Photo 2', info: 'Occasion: Testing at Site B' },
    { id: 5, src: '/bn1.png', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
    { id: 6, src: '/a5.webp', alt: 'Photo 2', info: 'Occasion: Testing at Site B' },
    { id: 7, src: '/a1.webp', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
    { id: 8, src: '/p1.jpg', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
    { id: 9, src: '/bn1.png', alt: 'Photo 2', info: 'Occasion: Testing at Site B' },
    { id: 10, src: '/a3.jpg', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
    { id: 11, src: '/bn2.jpg', alt: 'Photo 2', info: 'Occasion: Testing at Site B' },
    { id: 12, src: '/1.jpg', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
    { id: 13, src: '/a6.webp', alt: 'Photo 2', info: 'Occasion: Testing at Site B' },
    { id: 14, src: '/a2.jpg', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
  
    { id: 15, src: '/p1.jpg', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
    { id: 16, src: '/p2.jpg', alt: 'Photo 2', info: 'Occasion: Testing at Site B' },
    { id: 17, src: '/a3.jpg', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
    { id: 18, src: '/bn2.jpg', alt: 'Photo 2', info: 'Occasion: Testing at Site B' },
    { id: 19, src: '/bn1.png', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
    { id: 20, src: '/a5.webp', alt: 'Photo 2', info: 'Occasion: Testing at Site B' },
    { id: 21, src: '/a1.webp', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
    { id: 22, src: '/p1.jpg', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
    { id: 23, src: '/bn1.png', alt: 'Photo 2', info: 'Occasion: Testing at Site B' },
    { id: 24, src: '/a3.jpg', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
    { id: 25, src: '/bn2.jpg', alt: 'Photo 2', info: 'Occasion: Testing at Site B' },
    { id: 26, src: '/1.jpg', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
    { id: 27, src: '/a6.webp', alt: 'Photo 2', info: 'Occasion: Testing at Site B' },
    { id: 28, src: '/a2.jpg', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
  ];

export default function Gallery() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <div className="relative w-full overflow-hidden mt-[calc(4rem+10px)] py-10 bg-black">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">Our Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-8 lg:px-16">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 hover:translate-y-[-10px] transition-all duration-300 ease-in-out"
            onMouseEnter={() => setHoveredImage(image.id)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className="relative w-full h-0 pb-[75%]">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            {/* Hover Info Overlay */}
            <div
              className={`absolute inset-0 bg-black bg-opacity-60 text-white flex items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${hoveredImage === image.id ? 'opacity-100' : ''}`}
            >
              <p className="text-sm md:text-base font-medium">{image.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
