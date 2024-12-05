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
    <div className="w-full bg-slate-950 py-8 text-gray-400">
      <h2 className="text-center text-4xl sm:text-6xl hover:text-rose-600 text-6xl font-bold text-white mb-8">
        Our Partners
      </h2>
       {/* Optional CTA or Message */}
       <div className="mt-8 text-center">
        <p className="text-lg text-gray-400">
          Together with our partners, we create impactful solutions to drive
          innovation and growth.
        </p>
      </div>
      <section className="relative overflow-hidden">
        {/* Scrolling Row */}
        <div className="flex items-center space-x-4 animate-scroll">
          {/* First set of logos */}
          {images.map((image, index) => (
            <div
              key={`partner-${index}`}
              className="flex-shrink-0 w-36 sm:w-48 h-36 sm:h-48 bg-slate-950 hover:bg-slate-950 flex items-center justify-center rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300"
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
              className="flex-shrink-0 w-36 sm:w-48 h-36 sm:h-48 bg-slate-950 hover:bg-slate-950 flex items-center justify-center rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300"
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
