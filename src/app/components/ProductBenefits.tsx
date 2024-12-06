"use client";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const benefits = [
  {
    title: "Operate Your Motor in 3 Modes",
    description:
      "The Kisan Mithraa Mobile Auto Starter offers three distinct control modes: App, SMS, and IVRS. This versatility ensures you can manage your motor operations in the way that suits you best. Whether you’re in the field with no internet connection, or at home with access to your smartphone, the control options are designed for flexibility and convenience. The App gives you a visual interface for easy control, while SMS provides a quick, no-frills way to manage your motors, and IVRS ensures that even those with limited tech experience can operate the system with voice commands. With this level of control, you can manage your farm's operations efficiently, saving time and ensuring that no task is left behind, regardless of location or circumstances.",
    image: "/22.png",
  },
  {
    title: "Instant Motor Status Updates",
    description:
      "Stay in complete control with real-time motor status updates. Kisan Mithraa keeps you informed about every ON/OFF action of your motor, providing instant notifications on your mobile app, via SMS, or through IVRS. Whether you're on-site or far away from your farm, you’ll know exactly what's happening with your motor in real time. This feature eliminates the uncertainty that comes with traditional motor management, giving you peace of mind that your operations are running smoothly. With these instant updates, you no longer need to physically check on motors, saving you time and allowing you to focus on more important tasks. Accurate and immediate updates help you make better, quicker decisions that keep your farm running efficiently.",
    image: "/bn2.jpg",
  },
  {
    title: "Transformer Power Alerts",
    description:
      "Never be caught off guard by power outages again. The Kisan Mithraa Mobile Auto Starter instantly notifies you when transformer power goes OFF or ON, ensuring you are always informed of your farm's power status. With real-time power alerts, you can proactively adjust operations to prevent unnecessary motor usage during power failures, thereby saving energy and reducing downtime. This feature also helps you avoid unexpected disruptions that could affect your crop management or other farm activities. With Kisan Mithraa, you can monitor your power supply from anywhere and ensure that your motors are only running when the power is stable, giving you control over potential power-related issues.",
    image: "/bn3.jpg",
  },
  {
    title: "Fuse Protection Notifications",
    description:
      "Kisan Mithraa’s fuse protection feature ensures your motors stay safe during operation. If a fuse blows, the system will immediately notify you so you can take quick action. This proactive notification helps you avoid prolonged downtime and enables you to troubleshoot problems without delay. Preventing fuse failure from going unnoticed is crucial for maintaining the operational efficiency of your motors. With the Kisan Mithraa Mobile Auto Starter, you can protect your investment by receiving real-time updates and acting quickly to resolve issues before they lead to larger problems. This ensures that your farming operations continue without unnecessary interruptions, reducing maintenance costs and increasing reliability.",
    image: "/bn4.jpg",
  },
  {
    title: "Voltage Safeguards",
    description:
      "Protect your motor investment with Kisan Mithraa’s built-in voltage safeguards. This feature offers high and low voltage detection, automatically monitoring fluctuations in your farm’s power supply. If the voltage moves outside the safe range, you’ll be immediately notified, allowing you to avoid potential damage to your motors and other electrical equipment. Voltage fluctuations can cause serious long-term damage to motors, resulting in expensive repairs and downtime. With Kisan Mithraa, you can ensure smooth motor operation no matter what the power conditions are. The voltage protection keeps your equipment secure, saving you money on repairs and preventing unexpected shutdowns, so you can run your farm with confidence.",
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

  // Handle Next Slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % benefits.length);
  };

  // Handle Previous Slide
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? benefits.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-slate-950 py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-4xl sm:text-6xl font-bold mb-6 text-white text-center hover:text-rose-600">
          Product Benefits
        </h2>

        {/* Benefits Display */}
        <div className="flex flex-col lg:flex-row items-center gap-10 transition-transform duration-500">
          {/* Text Section */}
          <div className="lg:w-1/2 text-left">
            <h3 className="text-2xl font-bold text-white hover:text-rose-600 mb-4">
              {benefits[currentIndex].title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {benefits[currentIndex].description}
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center relative">
            <img
              src={benefits[currentIndex].image}
              alt={benefits[currentIndex].title}
              className="w-full max-w-md rounded-lg shadow-lg"
            />

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              aria-label="Previous Slide"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-lg hover:bg-rose-600 hover:text-white bg-transparent text-rose-600 border border-rose-600 p-3 shadow-md hover:scale-110 transition-all duration-300 focus:outline-none"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-lg hover:bg-rose-600 hover:text-white bg-transparent text-rose-600 border border-rose-600 p-3 shadow-md hover:scale-110 transition-all duration-300 focus:outline-none"
            >
              <FaChevronRight className="text-xl" />
            </button>
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
                  ? "bg-rose-700"
                  : "bg-gray-800 hover:bg-gray-600"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
