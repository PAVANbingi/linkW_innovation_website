"use client";

import { useState } from "react";

const productFeatures = [
  {
    title: "Functionality of Kisan Mithraa Mobile Starter:",
    description: `The Kisan Mithraa Mobile Starter revolutionizes farm operations with its seamless functionality. Farmers can operate motors through multiple modes—App, SMS, or IVRS—offering unmatched convenience and flexibility. Advanced features like motor status confirmation, transformer power alerts, and fuse protection ensure that you stay informed about your farm’s operations in real-time.`,
    extendedDescription: `With its real-time monitoring capabilities, you can also schedule motor operations to optimize water usage. The app interface provides detailed insights into power consumption and system health, making it a comprehensive tool for smart farming.`,
    youtubeUrl: "https://www.youtube.com/embed/juZ_daqwq1U?si=xmhrxp8FqeDtG1fw",
  },
  {
    title: "Installation of Kisan Mithraa Mobile Starter:",
    description: `Installing the Kisan Mithraa Mobile Starter is quick and straightforward, requiring minimal technical expertise. The compact device is designed for easy integration with existing motor systems. The included user manual and customer support ensure smooth setup and operation.`,
    extendedDescription: `The installation process includes step-by-step guidance through the app, ensuring no guesswork. Additional support for troubleshooting and video tutorials are also available to make setup hassle-free.`,
    youtubeUrl: "https://www.youtube.com/embed/Z-aCnoBTlRY?si=yJHqkT6cxHsV5u9K",
  },
  {
    title: "Features of Kisan Mithraa Mobile Starter:",
    description: `Built to withstand harsh farming conditions, the Kisan Mithraa Mobile Starter is engineered for durability and long life. Its robust design and advanced components ensure consistent performance over years of use.`,
    extendedDescription: `Key features include weather-resistant housing, energy-efficient components, and a fail-safe design that automatically shuts down the motor in case of faults, preventing potential damage.`,
    youtubeUrl: "https://www.youtube.com/embed/juZ_daqwq1U?si=xmhrxp8FqeDtG1fw",
  },
  {
    title: "Durability and Lifecycle of Kisan Mithraa Mobile Starter:",
    description: `The Kisan Mithraa Mobile Starter combines advanced features to deliver exceptional motor management, ensuring durability and a prolonged lifecycle. Its intelligent features guarantee seamless operation, enhanced safety, and optimal efficiency.`,
    extendedDescription: `The device undergoes rigorous quality checks and is built with premium materials, ensuring it can endure continuous operation in challenging environments. The lifecycle is extended with regular software updates and maintenance alerts.`,
    youtubeUrl: "https://www.youtube.com/embed/juZ_daqwq1U?si=xmhrxp8FqeDtG1fw",
  },
];

export default function ProductFeatures() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 lg:px-12 space-y-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-black mb-12">
          Unlock Smarter Farming with {" "}
          <span className="text-yellow-700">Kisan Mithraa</span>
        </h2>

        {productFeatures.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-10 ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div className="lg:w-1/2 space-y-4">
              <h3 className="text-3xl font-semibold text-gray-800 hover:text-yellow-600 transition duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>

              {expandedIndex === index && (
                <p className="text-gray-600 leading-relaxed mt-4">
                  {feature.extendedDescription}
                </p>
              )}

              <button
                onClick={() => toggleExpand(index)}
                className="px-6 py-2 text-black border-2 border-black rounded-lg bg-transparent hover:bg-black hover:text-white font-semibold shadow-lg transform hover:-translate-y-1 transition-all duration-300" >
                {expandedIndex === index ? "Show Less" : "Learn More"}
              </button>
            </div>

            {/* Video Section */}
            <div className="lg:w-1/2">
              <div className="relative w-full max-w-lg mx-auto lg:mx-0 h-64 rounded-lg shadow-lg overflow-hidden">
                <iframe
                  src={feature.youtubeUrl}
                  title={`Feature Video - ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}