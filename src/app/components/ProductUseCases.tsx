import React from "react";
import Image from "next/image";

const useCases = [
  {
    icon: "/motor_icon.png",
    title: "Smart Motor Control",
    description: "Remotely operate your motor via (IVRS, SMS & Mobile App.)",
  },
  {
    icon: "/motors_icon.png",
    title: "Multi-Motor Management",
    description: "Easily control multiple motors nearby in your field.",
  },
  {
    icon: "/valve.png",
    title: "Efficient Valve Control",
    description: "Manage multiple valves seamlessly using the same device.",
  },
  {
    icon: "/lightIcon.png",
    title: "Farm Lighting Control",
    description: "Turn farm bulbs on/off remotely for better visibility.",
  },
  {
    icon: "/sensor_log.png",
    title: "Advanced Sensor Data",
    description: "Monitor critical farm metrics like soil moisture, pH, and salinity.",
  },
  {
    icon: "/speakerIcon.png",
    title: "Animal Protection",
    description: "Deter animals with customized sounds to safeguard your crops.",
  },
  {
    icon: "/water.png",
    title: "AWLC Technique",
    description:
      "Adopt water-efficient farming for lowland rice with less water.",
  },
  {
    icon: "/output-onlinepngtools (26).png",
    title: "Cost-Efficient Farming",
    description: "Save time, labor, and resources with automated operations.",
  },
];

const ProductUseCases = () => {
  return (
    <section className="bg-white py-10 px-6 lg:px-20">
      {/* Title */}
      <h2 className="text-4xl sm:text-6xl font-bold text-center mb-10 text-black hover:text-yellow-700 animate-fade-in">
        Uses of Kisan Mithraa Mobile Starter
      </h2>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className="group flex flex-col items-center p-6 bg-white shadow-lg rounded-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-yellow-700"
          >
            {/* Icon */}
            <div className="relative w-16 h-16 mb-4">
              <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-70"></div>
              <Image
                src={useCase.icon}
                alt={useCase.title}
                width={64}
                height={64}
                className="object-contain transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-black mb-2 text-center transition-all duration-500 group-hover:text-white group-hover:translate-y-1">
              {useCase.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-black text-center transition-opacity duration-500 group-hover:text-gray-300 group-hover:opacity-90">
              {useCase.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductUseCases;
