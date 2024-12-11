'use client'
import Image from 'next/image';
import { useState } from 'react';


  const images = [
    { id: 1, src: '/20.png', alt: 'Photo 1', info: 'Website under construction' },
    { id: 2, src: '/20.png', alt: 'Photo 1', info: 'Website under construction' },
    { id: 3, src: '/20.png', alt: 'Photo 1', info: 'Website under construction' },
    { id: 4, src: '/20.png', alt: 'Photo 1', info: 'Website under construction' },
    { id: 5, src: '/20.png', alt: 'Photo 1', info: 'Website under construction' },
    { id: 6, src: '/20.png', alt: 'Photo 1', info: 'Website under construction' },
    { id: 7, src: '/20.png', alt: 'Photo 1', info: 'Website under construction' },
    { id: 8, src: '/20.png', alt: 'Photo 1', info: 'Website under construction' },
    { id: 9, src: '/20.png', alt: 'Photo 1', info: 'Website under construction' },
    { id: 10, src: '/20.png', alt: 'Photo 1', info: 'Website under construction' },
    { id: 11, src: '/20.png', alt: 'Photo 1', info: 'Website under construction' },
    { id: 12, src: '/20.png', alt: 'Photo 1', info: 'Website under construction' },
    { id: 13, src: '/20.png', alt: 'Photo 1', info: 'Website under construction' },
    { id: 14, src: '/20.png', alt: 'Photo 1', info: 'Website under construction' },
    { id: 15, src: '/20.png', alt: 'Photo 1', info: 'Website under construction' },
    { id: 16, src: '/20.png', alt: 'Photo 1', info: 'Website under construction' },
    { id: 17, src: '/20.png', alt: 'Photo 1', info: 'Website under construction' },
    { id: 18, src: '/20.png', alt: 'Photo 1', info: 'Website under construction' },
    { id: 19, src: '/20.png', alt: 'Photo 1', info: 'Website under construction' },
    { id: 20, src: '/20.png', alt: 'Photo 1', info: 'Website under construction' },
    { id: 21, src: '/20.png', alt: 'Photo 1', info: 'Website under construction' },
    { id: 22, src: '/20.png', alt: 'Photo 1', info: 'Website under construction' },
    { id: 23, src: '/20.png', alt: 'Photo 1', info: 'Website under construction' },
    { id: 24, src: '/20.png', alt: 'Photo 1', info: 'Website under construction' },
    // { id: 25, src: '/20.png', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
    // { id: 26, src: '/20.png', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
    // { id: 27, src: '/20.png', alt: 'Photo 1', info: 'Occasion: Installation at Village A' },
  ];

export default function Gallery() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <div className="relative w-full overflow-hidden mt-[calc(4rem+10px)] py-10 bg-slate-950">
      <h1 className="text-4xl sm:text-6xl md:text-5xl font-bold text-center mb-8 text-white hover:text-rose-600">Our Gallery</h1>
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
