"use client";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const benefits = [
  {
    title: "Dry Run Protection: A Guardian for Your Motor",
    description:
      "Dry run protection is a game-changing feature of Kisan Mithraa, designed to safeguard your motor and enhance its longevity. This intelligent system detects when your motor is running without sufficient water flow, a common issue that can lead to overheating, damage, and costly repairs. By automatically stopping the motor during such instances, it prevents unnecessary wear and tear, ensuring smooth and uninterrupted farming operations. Whether you're irrigating fields or managing water resources, this feature minimizes downtime and maximizes efficiency. It’s especially crucial in areas prone to irregular water supply, providing farmers with peace of mind and reducing the need for constant supervision. With dry run protection, you save not only your equipment but also valuable time and money. It’s a reliable safety net that supports sustainable farming practices, making Kisan Mithraa an essential tool for modern agriculture.",
    image: "/prc1.png",
  },
  {
    title: "Mobile Starter: Effortless Motor Control at Your Fingertips",
    description:
      "The Mobile Starter feature of Kisan Mithraa redefines convenience, enabling you to operate your motor effortlessly using an app, SMS, or IVRS. Whether you're at home, in the field, or miles away, you have the flexibility to manage your farm operations from anywhere. This smart system eliminates the need for manual intervention, saving you time and effort while ensuring your motor functions seamlessly. With real-time control and updates, you can monitor motor status and power conditions, enhancing efficiency and productivity. It’s a user-friendly solution designed to empower farmers with modern technology, making farm management simpler, smarter, and stress-free.",
    image: "/prc2.png",
  },
  {
    title: "Save Time & Effort: Focus on What Truly Matters",
    description:
      "With Kisan Mithraa, time-consuming manual tasks become a thing of the past. This innovative system automates motor operations, freeing you from the hassle of constant monitoring and manual intervention. By simplifying and streamlining your farm management, it lets you focus on what truly matters—whether it’s improving crop yield, planning your next steps, or spending quality time with loved ones. The seamless integration of advanced technology ensures that your farming operations run smoothly and efficiently, reducing physical strain and mental stress. Kisan Mithraa isn’t just a tool; it’s a time-saver that transforms your daily routine, giving you the freedom to achieve more with less effort.",
    image: "/prc3.png",
  },
  {
    title: "Prevents Electric Shock: Prioritizing Your Safety",
    description:
      "Safety is at the core of Kisan Mithraa’s design. Equipped with advanced safety features, it acts as a reliable shield against electrical hazards, ensuring the well-being of users and their equipment. Whether you're operating the motor through the app, SMS, or IVRS, the system safeguards you from potential risks by constantly monitoring voltage fluctuations and other electrical anomalies. This proactive protection gives you peace of mind, allowing you to focus on farming without worrying about safety concerns. With Kisan Mithraa, you can trust that every operation is carried out securely, making it a dependable companion for modern, risk-free farming.",
    image: "/prc4.png",
  },
  {
    title: "1-Year Guarantee: Assurance You Can Rely On",
    description:
      "With Kisan Mithraa, you’re investing in more than just a smart farming solution—you’re gaining peace of mind. Backed by a solid one-year guarantee, the product ensures unmatched durability and reliability, standing by you through all your farming needs. This guarantee reflects our confidence in the quality and longevity of Kisan Mithraa, giving you the freedom to focus on productivity without worrying about unexpected issues. Whether it’s managing your motor or protecting it from damage, you can trust Kisan Mithraa to deliver consistent performance every time.",
    image: "/prc5.png",
  },
  {
    title: "Cost-Efficient: Smart Savings for a Smarter Future",
    description:
      "Kisan Mithraa combines advanced technology with cost-saving benefits, making it a truly smart investment for farmers. By optimizing motor operations and reducing the risk of damage, it minimizes maintenance costs and maximizes productivity. Its energy-efficient features not only help you cut electricity expenses but also promote sustainable farming practices. With Kisan Mithraa, you’re not just saving money—you’re investing in a reliable solution that boosts efficiency and ensures long-term returns. Experience the perfect balance of innovation and affordability, empowering your farm like never before.",
    image: "/prc6.png",
  }
];


export default function ProductBenefits() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % benefits.length);
    }, 12000);

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
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-4xl sm:text-6xl font-bold mb-6 text-black text-center hover:text-yellow-700">
          Product Benefits
        </h2>

        {/* Benefits Display */}
        <div className="flex flex-col lg:flex-row items-center gap-10 transition-transform duration-500">
          {/* Text Section */}
          <div className="lg:w-1/2 text-left">
            <h3 className="text-2xl font-bold text-black hover:text-yellow-700 mb-4">
              {benefits[currentIndex].title}
            </h3>
            <p className="text-black leading-relaxed">
              {benefits[currentIndex].description}
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center relative">
            <img
              src={benefits[currentIndex].image}
              alt={benefits[currentIndex].title}
              className="w-full max-w-md "
            />

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              aria-label="Previous Slide"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-lg hover:bg-black hover:text-white bg-transparent text-black border border-black p-3 shadow-md hover:scale-110 transition-all duration-300 focus:outline-none"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-lg hover:bg-black hover:text-white bg-transparent text-black border border-black p-3 shadow-md hover:scale-110 transition-all duration-300 focus:outline-none"
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
                  ? "bg-yellow-600"
                  : "bg-yellow-900 hover:bg-yellow-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
