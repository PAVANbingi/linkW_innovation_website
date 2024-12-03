import React from "react";
import Image from "next/image";

const useCases = [
  {
    icon: "/mobile_app.png",
    title: "Smart Motor Control",
    description: "Remotely operate your motor via (IVRS, SMS & Mobile App.)",
  },
  {
    icon: "/mobile_app.png",
    title: "Multi-Motor Management",
    description: "Easily control multiple motors nearby in your field.",
  },
  {
    icon: "/mobile_app.png",
    title: "Efficient Valve Control",
    description: "Manage multiple valves seamlessly using the same device.",
  },
  {
    icon: "/mobile_app.png",
    title: "Farm Lighting Control",
    description: "Turn farm bulbs on/off remotely for better visibility.",
  },
  {
    icon: "/mobile_app.png",
    title: "Advanced Sensor Data",
    description: "Monitor critical farm metrics like soil moisture, pH, and salinity.",
  },
  {
    icon: "/mobile_app.png",
    title: "Animal Protection",
    description: "Deter animals with customized sounds to safeguard your crops.",
  },
  {
    icon: "/mobile_app.png",
    title: "AWLC Technique",
    description:
      "Adopt water-efficient farming for lowland rice with less water.",
  },
  {
    icon: "/mobile_app.png",
    title: "Cost-Efficient Farming",
    description:
      "Save time, labor, and resources with automated operations.",
  },
];

const ProductUseCases = () => {
  return (
    <section className="bg-white py-10 px-6 lg:px-20">
      <h2 className="text-2xl lg:text-3xl font-bold text-center mb-10 text-gray-800">
        Uses of Kisan Mithraa Mobile Auto Starter
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="w-16 h-16 mb-4">
              <Image
                src={useCase.icon}
                alt={useCase.title}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
              {useCase.title}
            </h3>
            <p className="text-sm text-gray-600 text-center">{useCase.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductUseCases;
