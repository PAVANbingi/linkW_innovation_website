"use client";
import { useState } from "react";


const productFeatures = [
  {
    title: "Functionality of Kisan Mithraa Mobile Starter:",
    description: `The Kisan Mithraa Mobile Starter revolutionizes farm operations with its seamless functionality. Farmers can operate motors through multiple modes—App, SMS, or IVRS—offering unmatched convenience and flexibility. Advanced features like motor status confirmation, transformer power alerts, and fuse protection ensure that you stay informed about your farm’s operations in real-time.`,
    extendedDescription: `Additional features include energy-efficient operation, remote monitoring capabilities, and the ability to schedule motor operations for optimal water usage. It empowers farmers to save time, reduce energy consumption, and maximize productivity.`,
    youtubeUrl: "https://www.youtube.com/embed/juZ_daqwq1U?si=xmhrxp8FqeDtG1fw",
  },
  {
    title: "Installation of Kisan Mithraa Mobile Starter:",
    description: `Installing the Kisan Mithraa Mobile Starter is quick and straightforward, requiring minimal technical expertise. The compact device is designed for easy integration with existing motor systems. The included user manual and customer support ensure smooth setup and operation.`,
    extendedDescription: `The installation process is user-friendly and takes less than an hour. Farmers can contact customer support for live guidance or refer to detailed video tutorials for a step-by-step setup process.`,
    youtubeUrl: "https://www.youtube.com/embed/Z-aCnoBTlRY?si=yJHqkT6cxHsV5u9K",
  },
  // Add more features as needed
];

export default function ProductFeatures() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number): void => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 lg:px-12 space-y-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-black mb-12">
          Unlock Smarter Farming with{" "}
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
                <p className="text-gray-600 leading-relaxed">
                  {feature.extendedDescription}
                </p>
              )}

              <button
                onClick={() => toggleExpand(index)}
                className="mt-4 px-6 py-3 bg-yellow-600 text-white font-medium rounded-lg shadow-md hover:bg-yellow-500 transition-all"
              >
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
