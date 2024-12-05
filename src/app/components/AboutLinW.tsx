"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AboutLinW() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const images: string[] = [
    "/a1.webp",
    "/a2.jpg",
    "/a3.jpg",
    "/a4.jpg",
    "/a5.webp",
    "/a6.webp",
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

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.touches[0].clientX;
    const touchDifference = touchStart - touchEnd;

    if (touchDifference > 50) {
      handleNext(); // Swipe left
    } else if (touchDifference < -50) {
      handlePrevious(); // Swipe right
    }

    setTouchStart(null);
  };

  return (
    <section className="bg-slate-950 text-gray-400 py-12 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row-reverse items-center max-w-7xl mx-auto">
        {/* Right: Image Slider Section */}
        <div
          className="lg:w-1/2 flex flex-col items-center transform transition-transform duration-700 ease-in-out mt-8 lg:mt-0"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div className="relative w-full max-w-lg">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={images[currentImageIndex]}
                alt={`Slide ${currentImageIndex + 1}`}
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-opacity duration-700 ease-in-out"
                loading="lazy"
              />
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-4">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1 ${
                    currentImageIndex === index
                      ? "bg-rose-700"
                      : "bg-gray-800"
                  } transition-colors duration-300`}
                  onClick={() => setCurrentImageIndex(index)}
                  style={{ cursor: "pointer" }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Left: Text Content Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:mr-12 transform transition-transform duration-700 ease-in-out">
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 text-white hover:text-rose-600 transition-colors duration-300">
            About LinkW Innovations
          </h2>
          <p className="text-lg mb-4 transition-opacity duration-700 ease-in-out">
            <strong className="text-white hover:text-rose-600">Mission:</strong> To empower farmers and industrialists by
            providing cutting-edge, sustainable, and cost-effective solutions
            that enhance productivity and reduce environmental impact. We
            strive to bridge the gap between technology and agriculture, making
            smart innovations accessible to everyone.
          </p>
          <p className="text-lg mb-4 transition-opacity duration-700 ease-in-out">
            <strong className="text-white hover:text-rose-600">Vision:</strong> To revolutionize the agricultural and
            industrial sectors with technology-driven solutions, ensuring a
            greener, more efficient, and economically sustainable future. LinkW
            Innovations is committed to becoming a global leader in smart
            agricultural tools and industrial innovations.
          </p>

          <p className="text-lg transition-opacity duration-700 ease-in-out">
            At <strong className="text-white hover:text-rose-600">LinkW Innovations,</strong> we believe in the power of technology to
            transform lives. Together, let’s shape a smarter and more connected
            future for all.
          </p>
        </div>
      </div>
    </section>
  );
}
