"use client";

import Image from "next/image";
//import Link from "next/link";

export default function ProductFeaturesIntro() {
  return (
    <section className="bg-slate-950 text-gray-400 py-5 mt-0">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side: Image */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight hover:text-rose-600 text-white">
          SMART SOLUTIONS FOR SMARTER FARMING 
          </h2>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-400 mb-8">
            At LinkW Innovation, we specialize in developing and implementing 
            cutting-edge solutions for precision farming. Our primary focus is 
            on creating efficient and effective irrigation systems that prioritize 
            sustainability. By conserving natural resources and optimizing water usage, 
            our solutions help farmers reduce costs, save time, and minimize effort, 
            all while enhancing productivity and promoting long-term environmental 
            stewardship.
          </p>
          
          {/* <Link href="/features">
            <button
              className="px-8 py-3 text-white border-2 border-white rounded-lg bg-transparent hover:bg-white hover:text-black font-semibold shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Read More...
            </button>
          </Link> */}
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/kisangif.gif" // Replace with your actual image path
            alt="Our Platform"
            width={500}
            height={500}
            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
