"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const Order: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images: string[] = [
    "/1.jpg",
    "/3.jpg",
    "/5.jpg",
    "/8.jpg",
    "/9.jpg",
    "/10.jpg",
  ];

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
    preventScrollOnSwipe: true,
    trackMouse: true, // Enables swipe on desktops via mouse drag
  });

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black-800 px-4 py-10 md:py-20">
      
      <div
        className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl"
        {...swipeHandlers} // Attach swipe handlers here
      >
        {/* Image Section */}
        <div className="relative overflow-hidden rounded-lg shadow-md border border-gray-300 bg-white">
          <Image
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            width={800}
            height={600}
            className="w-full h-auto object-cover rounded-lg"
            loading="lazy"
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-700 focus:outline-none z-10"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-700 focus:outline-none z-10"
        >
          &#8594;
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 sm:gap-3 mt-4 overflow-x-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-2 rounded-lg overflow-hidden cursor-pointer shrink-0 ${
              currentImageIndex === index
                ? "border-blue-500"
                : "border-gray-300"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={64}
              height={64}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
