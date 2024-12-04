"use client";
import { useState, useEffect } from "react";

const benefits = [
  {
    title: "Operate Your Motor in 3 Modes",
    description:
      "Seamlessly run your motor using App, SMS, or IVRS-based controls. Switch between modes effortlessly to suit your convenience. Stay in control of your motor anytime, anywhere, with ease. A solution built for flexibility in managing farm operations.",
    image: "/bn1.png",
  },
  {
    title: "Instant Motor Status Updates",
    description:
      "Receive real-time confirmation for every motor ON/OFF action. Stay informed instantly, no matter where you are located. Eliminate guesswork with clear and accurate status updates. A smarter way to manage your motor without being on-site.",
    image: "/bn2.jpg",
  },
  {
    title: "Transformer Power Alerts",
    description:
      "Get notified instantly when the transformer power goes OFF/ON. Stay ahead of disruptions with real-time power status alerts. Ensure your motor runs efficiently without unexpected interruptions. Peace of mind with updates, even during power fluctuations.",
    image: "/bn3.jpg",
  },
  {
    title: "Fuse Protection Notifications",
    description:
      "Be alerted immediately if a fuse blows during motor operation. Act quickly to troubleshoot and minimize downtime on your farm. Protect your equipment with timely and reliable notifications. Prevent operational delays with real-time fuse status updates.",
    image: "/bn4.jpg",
  },
  {
    title: "Voltage Safeguards",
    description:
      "Protect your motor with high and low voltage detection technology. Avoid costly repairs with safeguards that minimize electrical damage. Ensure smooth motor operation in all voltage conditions. Built to withstand fluctuations, keeping your motor secure.",
    image: "/bn5.png",
  },
  // Add the remaining benefits similarly
];

export default function ProductBenefits() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % benefits.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white text-center">
          Product Benefits
        </h2>

        {/* Benefits Display */}
        <div className="flex flex-col lg:flex-row items-center gap-10 transition-transform duration-500">
          {/* Text Section */}
          <div className="lg:w-1/2 text-left">
            <h3 className="text-2xl font-bold text-white mb-4">
              {benefits[currentIndex].title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {benefits[currentIndex].description}
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={benefits[currentIndex].image}
              alt={benefits[currentIndex].title}
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-4 mt-6">
          {benefits.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-600"
                  : "bg-gray-400 hover:bg-gray-600"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
