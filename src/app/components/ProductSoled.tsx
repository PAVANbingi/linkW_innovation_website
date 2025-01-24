"use client";

import CountUp from "react-countup";
import { useEffect, useState } from "react";

const salesData = [
  { title: "Sold Products", end: 126 },
  { title: "Months of Product Journey", end: 28 },
  { title: "Team Strength", end: 18 },
  { title: "Version of Updates", end: 2 },
];

export default function ProductSoled() {
  const [view, setView] = useState(false);

  useEffect(() => {
    // Set view to true when the component is visible (for animations)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setView(true);
        }
      },
      { threshold: 0.5 }
    );

    const section = document.querySelector("#product-sales");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="product-sales"
      className="bg-white py-12 text-black text-center"
    >
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-4xl sm:text-6xl font-bold mb-12 hover:text-rose-600">
          Numbers Speak
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {salesData.map((data, index) => (
            <div key={index} className="space-y-4">
              <div className="text-6xl font-bold text-blue-600">
                {view && (
                  <CountUp
                    start={0}
                    end={data.end}
                    duration={10} // Animation duration in seconds
                    delay={0.5} // Delay before starting the animation
                  />
                )}
              </div>
              <p className="text-lg font-medium">{data.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
