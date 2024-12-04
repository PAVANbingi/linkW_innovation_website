import React from "react";

const images = [
  "/pr1.svg",
  "/pr2.svg",
  "/pr3.svg",
  
  "/pr6.svg",
  "/pr7.svg",
  "/pr8.svg",
];

const OurPartners: React.FC = () => {
  return (
    <div className="w-full bg-black py-8 text-black">
      <h2 className="text-center text-4xl font-bold text-black mb-8">
        Our Partners
      </h2>
      <section className="relative overflow-hidden">
        {/* Scrolling Row */}
        <div className="flex items-center space-x-4 animate-scroll">
          {/* First set of logos */}
          {images.map((image, index) => (
            <div
              key={`partner-${index}`}
              className="flex-shrink-0 w-36 sm:w-48 h-36 sm:h-48 bg-black hover:bg-black flex items-center justify-center rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300"
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
              className="flex-shrink-0 w-36 sm:w-48 h-36 sm:h-48 bg-black hover:bg-black flex items-center justify-center rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300"
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
      {/* Optional CTA or Message */}
      <div className="mt-8 text-center">
        <p className="text-lg text-black">
          Together with our partners, we create impactful solutions to drive
          innovation and growth.
        </p>
      </div>
    </div>
  );
};

export default OurPartners;
