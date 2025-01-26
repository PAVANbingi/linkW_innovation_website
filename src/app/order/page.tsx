"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

export default function Order() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = ["/pcart2.png", "/pcart2.png", "/pcart2.png", "/pcart2.png","/pcart2.png"];

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
      className="relative w-full overflow-hidden mt-[calc(4rem+10px)] bg-white text-black py-10 px-5 lg:px-20"
      {...handlers}
    >
      <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto">
        {/* Image Slider Section */}
        <div className="lg:w-1/2 flex flex-col items-center">
          <div className="relative w-full max-w-lg">
            <div
              className="overflow-hidden  transform transition-transform duration-500 hover:scale-105"
            >
              <Image
                src={images[currentImageIndex]}
                alt={`Slide ${currentImageIndex + 1}`}
                width={500}
                height={300}
                className="w-full h-auto object-cover animate-fadeIn"
                priority
              />
            </div>

           {/* Navigation Buttons */}
<button
  onClick={handlePrevious}
  aria-label="Previous Slide"
  className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-lg hover:bg-black hover:text-white bg-transparent text-black border border-black p-3 shadow-md hover:scale-110 transition-all duration-300 focus:outline-none"
>
  <FaChevronLeft className="text-xl" />
</button>
<button
  onClick={handleNext}
  aria-label="Next Slide"
  className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-lg hover:bg-black hover:text-white bg-transparent text-black border border-black p-3 shadow-md hover:scale-110 transition-all duration-300 focus:outline-none"
>
  <FaChevronRight className="text-xl" />
</button>


          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 mt-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Select image ${index + 1}`}
                className={`w-16 h-16 border-2 rounded-lg overflow-hidden cursor-pointer transition transform hover:scale-105 ${
                  currentImageIndex === index
                    ? "border-yellow-500"
                    : "border-yellow-700"
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
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-black hover:text-rose-600 transition-all duration-300">
            Kisan Mithraa Mobile Starter
          </h1>
          <ul className="list-disc list-inside text-lg mb-4 space-y-2">
            <li>Remote motor control via mobile/SMS</li>
            <li>Dry run protection with auto-restart</li>
            <li>Timer modes: Clock, cyclic, and multi-slot schedules</li>
            <li>Voltage, overload, and drain settings</li>
            <li>Real-time alerts for ON/OFF, faults, and runtime</li>
            {/* <li>Anti-theft with location tracking and SIM alerts</li> */}
            <li>Multi-language support </li>
            {/* <li>External glass fuse for lightning protection</li> */}
            <li>Battery backup for power outages</li>
            <li>1-year replacement guarantee</li>
          </ul>
          <p className="text-xl font-semibold mb-6 text-white hover:text-rose-600 transition-all duration-300">
            MRP: ₹5,499.00 (INCL. OF ALL TAXES)
          </p>
          <div className="flex items-center gap-4 mb-6">
            <Link href="https://api.whatsapp.com/send?phone=919032747058&text=Hello,%20LinkW%20Innovation!%20👋%20I%20would%20like%20to%20get%20more%20information%20about%20your%20product%20and%20the%20services%20you%20offer.%20Looking%20forward%20to%20your%20response!%20📱%20💬">
              <button className="px-6 py-2 text-green-600 border-2 border-green-600 rounded-lg bg-transparent hover:bg-green-600 hover:text-white font-semibold shadow-lg transform hover:-translate-y-1 hover:scale-110 transition-all duration-300">
                Start Order Request
              </button>
            </Link>
            <Link href="contactUs">
              <button className="px-6 py-2 text-blue-600 border-2 border-blue-600 rounded-lg bg-transparent hover:bg-blue-600 hover:text-white font-semibold shadow-lg transform hover:-translate-y-1 hover:scale-110 transition-all duration-300">
                Contact Supplier
              </button>
            </Link>
          </div>
          {/* <div className="flex items-center gap-4 ">
            <a
              href="https://www.amazon.in"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-rose-500 rounded-md overflow-hidden shadow-md transform hover:scale-105 transition-all duration-300"
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
              className="border-2 border-rose-500 rounded-md overflow-hidden shadow-md transform hover:scale-105 transition-all duration-300"
            >
              <Image
                src="/flipkart.jpg"
                alt="Flipkart"
                width={120}
                height={40}
                className="object-contain"
              />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
