
'use client';

import { useState } from "react";
import Link from "next/link";

export default function ProductFAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the Kisan Mithraa Mobile Auto Starter?",
      answer: "The Kisan Mithraa Mobile Auto Starter is a state-of-the-art IoT solution designed for farmers to remotely control motors, valves, and other farm equipment via mobile apps, SMS, or IVRS. It enhances farm management by automating processes, providing real-time alerts, and ensuring optimal performance, making farm operations more efficient and streamlined."
    },
    {
      question: "How does the Kisan Mithraa Mobile Auto Starter work?",
      answer: "This device connects to farm equipment and allows remote control of motors, valves, and sensors. It sends status updates and alerts via SMS, IVRS, or the mobile app, ensuring farmers stay informed. The system also offers protection against high/low voltage and dry run conditions, safeguarding the equipment from damage."
    },
    {
      question: "What are the main features of the Kisan Mithraa Mobile Auto Starter?",
      answer: "Key features include:\n- Remote operation via mobile app, SMS, or IVRS\n- Voltage protection and dry run detection\n- Real-time alerts for motor status, fuse, and power loss\n- Manage multiple devices simultaneously\n- Monthly usage reports and historical transaction tracking"
    },
    {
      question: "How simple is the installation process?",
      answer: "Installation is designed to be easy and quick, requiring minimal technical expertise. It integrates seamlessly with your existing motor systems, and the provided manual offers clear instructions. Our support team is always available to assist with setup if needed."
    },
    {
      question: "Can I control multiple motors and valves from one device?",
      answer: "Yes, the Kisan Mithraa Mobile Auto Starter allows you to manage multiple motors, valves, and sensors simultaneously, making it ideal for both small and large-scale farms. You can control all connected devices remotely from a single platform."
    },
    {
      question: "How does the system help reduce operational costs?",
      answer: "By automating farm operations, the Kisan Mithraa Mobile Auto Starter reduces the need for manual labor, cutting down labor costs. Additionally, it optimizes water and electricity usage, preventing wastage and improving resource management, leading to substantial cost savings over time."
    },
    {
      question: "Is the device compatible with all types of motors?",
      answer: "Yes, the Kisan Mithraa Mobile Auto Starter is designed to work with a wide variety of motors used in agriculture, including irrigation pumps, water motors, and other farm equipment. Its versatility makes it suitable for different types of farm setups."
    },
    {
      question: "How does the system protect my equipment from damage?",
      answer: "The Kisan Mithraa Mobile Auto Starter includes various safeguards like voltage protection (high/low), dry run detection, and fuse status alerts. These features help prevent damage caused by electrical fluctuations, mechanical failures, or operational mistakes, ensuring the longevity of your equipment."
    },
    {
      question: "What kind of alerts will I receive?",
      answer: "The system sends alerts for motor status, power loss, fuse issues, voltage irregularities, and dry run detection. You’ll be notified via SMS, IVRS, or the app, allowing you to take immediate action and avoid potential problems, keeping operations running smoothly."
    },
    {
      question: "How secure is my data with the Kisan Mithraa Mobile Auto Starter?",
      answer: "Your data is transmitted securely using encrypted communication channels, whether you're using the mobile app or SMS. This ensures that all farm operations are safe, private, and protected from unauthorized access, keeping your data secure at all times."
    },
    {
      question: "Can I track the performance of my motors over time?",
      answer: "Yes, the Kisan Mithraa Mobile Auto Starter generates monthly usage reports and allows you to track the performance of motors, including runtime, power consumption, and efficiency. These reports help you optimize operations and identify any areas for improvement."
    },
    {
      question: "How are software updates handled?",
      answer: "The device receives automatic software updates over the internet, ensuring that it stays up-to-date with the latest features, performance improvements, and bug fixes. This process is seamless and doesn’t require any manual intervention."
    },
    {
      question: "Is customer support available for installation and troubleshooting?",
      answer: "Yes, our dedicated customer support team is available to assist you throughout the installation process and beyond. Whether you need help with setup, troubleshooting, or any other concerns, our team is ready to guide you with step-by-step instructions."
    },
    {
      question: "Can I control the Kisan Mithraa Mobile Auto Starter from anywhere?",
      answer: "Absolutely! You can control and monitor your farm equipment from anywhere using the mobile app or via SMS. Whether you're at the farm, at home, or on the go, you can manage operations remotely, ensuring flexibility and convenience."
    },
    {
      question: "Why is the Kisan Mithraa Mobile Auto Starter a good investment for farmers?",
      answer: "The Kisan Mithraa Mobile Auto Starter helps farmers increase efficiency by automating critical tasks. With its ability to reduce resource wastage, prevent equipment damage, and provide real-time insights, it lowers operational costs and boosts productivity, making it a valuable investment for any farm."
    },
    {
      question: "Does the device integrate with existing farm systems?",
      answer: "Yes, the Kisan Mithraa Mobile Auto Starter is designed to integrate seamlessly with your existing farm equipment. Whether you're upgrading an older system or starting fresh, this device works with most farm setups without requiring major modifications."
    },
    {
      question: "How does the Kisan Mithraa Mobile Auto Starter contribute to sustainable farming?",
      answer: "The device helps promote sustainability by optimizing the use of water, energy, and other resources. It reduces waste, improves irrigation efficiency, and protects equipment from wear and tear, contributing to more eco-friendly and cost-effective farming practices."
    },
    {
      question: "What kind of real-time data can I monitor through the app?",
      answer: "Through the app, you can monitor data such as motor status (ON/OFF), power consumption, voltage levels, fuse status, and dry run conditions. These insights help you stay informed and make better decisions for your farm's operations."
    },
    {
      question: "Can I get reports for specific time periods?",
      answer: "Yes, the system allows you to generate detailed reports for any selected time period, whether it’s daily, weekly, or monthly. These reports offer insights into motor performance, energy consumption, and operational efficiency, helping you make informed decisions."
    },
    {
      question: "How does the Kisan Mithraa Mobile Auto Starter add value to investors?",
      answer: "The Kisan Mithraa Mobile Auto Starter is a cutting-edge solution that meets the growing demand for smart farming technology. Its ability to automate farm operations, reduce costs, and provide real-time insights makes it a valuable tool in the agriculture sector. Investors can benefit from the product’s scalability and its potential to revolutionize farming practices, presenting significant growth opportunities."
    }
  ];

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-950 text-gray-300 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <h2 className="text-4xl sm:text-6xl hover:text-rose-600 font-bold text-center text-white mb-8 transition-all duration-300">
          Explore Kisan Mithraa: FAQs & Insights
        </h2>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md p-4 transition-transform duration-300 hover:scale-[1.02]"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <span className="text-lg font-semibold text-gray-200 transition-all hover:text-rose-600">
                  {faq.question}
                </span>
                <span
                  className={`text-xl transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180 text-rose-600" : "rotate-0 text-gray-400"
                  }`}
                >
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="mt-3 text-gray-400 whitespace-pre-line transition-opacity duration-500 ease-in-out opacity-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-between bg-gray-800 rounded-lg shadow-lg py-6 px-8">
          <p className="text-lg text-gray-300">
            Still having questions? We’re here to help you! Reach out to us anytime.
          </p>
          <Link href="/contactUs">
            <button className="px-6 py-2 text-rose-600 border-2 border-rose-600 rounded-lg bg-transparent hover:bg-rose-600 hover:text-white font-semibold shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Ask Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
