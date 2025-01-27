import React from "react";

const images = [
  "/ony.png",
  "/sit.png",
  "/qlin.png",
  
  "/pr6.svg",
  "/pr7.svg",
  "/pr8.svg",
];

const OurPartners: React.FC = () => {
  return (
    <div className="w-full bg-white py-8 text-black">
      <h2 className="text-center text-4xl sm:text-6xl hover:text-yellow-600  font-bold text-black mb-8">
      Pioneering Brands Behind Us
      </h2>
       {/* Optional CTA or Message */}
       <div className="mt-8 text-center">
       <p className="text-center text-lg  mb-12 text-black">
      These pioneering brands provide the essential parts that ensure reliability, precision, and cutting-edge functionality for Kisan Mithra Mobile Starter. </p>
      </div>
      <section className="relative overflow-hidden">
        {/* Scrolling Row */}
        <div className="flex items-center space-x-4 animate-scroll">
          {/* First set of logos */}
          {images.map((image, index) => (
            <div
              key={`partner-${index}`}
              className="flex-shrink-0 w-36 sm:w-48 h-36 sm:h-48 bg-white hover:bg-white flex items-center justify-center  transform hover:scale-110 transition-transform duration-300"
            >
              <img
                src={image}
                alt={`Partner ${index + 1}`}
                className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
              />
            </div>
          ))}
          {/* Duplicate logos for seamless animation */}
          {images.map((image, index) => (
            <div
              key={`partner-duplicate-${index}`}
              className="flex-shrink-0 w-36 sm:w-48 h-36 sm:h-48 bg-white hover:bg-white flex items-center justify-center transform hover:scale-110 transition-transform duration-300"
            >
              <img
                src={image}
                alt={`Partner Duplicate ${index + 1}`}
                className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
              />
            </div>
          ))}
        </div>
      </section>
     
    </div>
  );
};

export default OurPartners;
