"use client";
import React, { useState, useEffect } from "react";
//import Link from "next/link";

const banners = [
  {
    id: 1,
    video: "/buds1.mp4",
    text: "Link-W",
  },
  {
    id: 2,
    video: "/buds1.mp4",
    text: "Link-W",
  },
  {
    id: 3,
    video: "/buds1.mp4",
    text: "Link-W",
  },
];

const ProductBannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 9000); // Slides every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden mt-[calc(4rem+10px)]">
      {/* Slider */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="relative w-full h-[300px] md:h-[500px] flex-shrink-0"
          >
            <video
              src={banner.video}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            ></video>
            {/* <div className="absolute inset-0 flex flex-col items-start justify-center space-y-4 p-6">
              <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-white">
                {banner.text}
              </h2>
              <Link href="/order">
                <button className="inline-block px-6 py-2 md:px-7 md:py-3 text-sm md:text-base font-semibold bg-white text-[#444] border-2 border-white rounded-lg shadow-lg hover:bg-transparent hover:text-white transition-all duration-500">
                  Order Now
                </button>
              </Link>
            </div> */}
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ProductBannerSlider;
