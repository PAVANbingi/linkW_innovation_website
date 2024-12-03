"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

export default function ProductCart() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = ["/pcart1.png", "/pcart2.png", "/pcart3.jpg", "/pcart4.jpg"];

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

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
  });

  useEffect(() => {
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="product-section bg-white text-gray-800 py-10 px-5 lg:px-20"
      {...handlers}
    >
      <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto">
        {/* Image Slider Section */}
        <div className="lg:w-1/2 flex flex-col items-center">
          <div className="relative w-full max-w-lg">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={images[currentImageIndex]}
                alt={`Slide ${currentImageIndex + 1}`}
                width={500}
                height={300}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              aria-label="Previous Slide"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none"
            >
              &#8592;
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none"
            >
              &#8594;
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 mt-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Select image ${index + 1}`}
                className={`w-16 h-16 border-2 rounded-lg overflow-hidden cursor-pointer transition ${
                  currentImageIndex === index
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 lg:pl-10 text-left">
          <h2 className="text-3xl font-bold mb-4">LINK-W Mobile Auto Starter</h2>
          <ul className="list-disc list-inside text-lg mb-4">
            <li>Remote motor control via mobile/SMS
            </li>
            <li>Dry run protection with auto-restart</li>
            <li>Timer modes: Clock, cyclic, and multi-slot schedules</li>
            <li>Voltage, overload, and drain settings</li>
            <li>Real-time alerts for ON/OFF, faults, and runtime</li>
            <li>Anti-theft with location tracking and SIM alerts</li> <li>Multi-language support & app control</li>
            <li>External glass fuse for lightning protection</li>
            <li>Battery backup for power outages</li>
           <li>1-year replacement guarantee</li>
          </ul>
          <p className="text-xl font-semibold mb-6">
            MRP: ₹9,999.00 (INCL. OF ALL TAXES)
          </p>
          <div className="flex items-center gap-4 mb-6">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500">
              Explore More
            </button>
            <button className="px-6 py-2 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700">
              Store Locator
            </button>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.amazon.in"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-500 rounded-md overflow-hidden shadow-md"
            >
              <Image
                src="/amazon.jpg"
                alt="Amazon"
                width={120}
                height={40}
                className="object-contain"
              />
            </a>
            <a
              href="https://www.flipkart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-500 rounded-md overflow-hidden shadow-md"
            >
              <Image
                src="/flipkart.jpg"
                alt="Flipkart"
                width={120}
                height={40}
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
