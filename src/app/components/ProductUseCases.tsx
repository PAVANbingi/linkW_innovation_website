import React from "react";
import Image from "next/image";

const useCases = [
  {
    icon: "/pmotor.png",
    title: "Dry Run Protection",
    description: "Prevents the motor from running without water, safeguarding it from damage and ensuring reliable performance.",
  },
  {
    icon: "/fphone.png",
    title: "Mobile Starter",
    description: "Easily control your motor from anywhere with mobile connectivity, adding convenience and flexibility to your farming tasks.",
  },
  {
    icon: "/fmsg.png",
    title: "Message Alert",
    description: "Stay informed with real-time message alerts directly on your mobile device, notifying you about the motor's status, power issues, or any operational updates. This feature ensures you’re always in control, no matter where you are.",
  },
  {
    icon: "/elces.png",
    title: "Prevents Electric Shock",
    description: "Built-in safety measures protect users from electric shocks, ensuring a safe and secure farming environment.",
  },
  {
    icon: "/motorwed.png",
    title: "Winding Failure Prevention",
    description: "Advanced safeguards prevent motor winding failures, enhancing durability and minimizing maintenance costs with ensuring long-term reliability.",
  },
  {
    icon: "/agwa.png",
    title: "Timer Setup",
    description: "Easily program the timer to control water flow in your farm, ensuring optimal irrigation for up to your desired duration. Set precise watering times to avoid over-irrigation or water wastage, enhancing efficiency and crop health.",
  },
  {
    icon: "/coste.png",
    title: "Save Money & Effort",
    description:
      "Efficient design reduces energy consumption and manual work, offering significant savings and ease of use for farmers.",
  },
  {
    icon: "/timee.png",
    title: "Save Time & Effort",
    description: "Automated operations reduce manual intervention, helping you focus on other important tasks while saving time.",
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
                width={150}
                height={150}
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
