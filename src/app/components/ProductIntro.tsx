"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductIntro() {
  return (
    <section className="bg-white text-black py-5 mt-0">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side: Image */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl sm:text-6xl lg:text-5xl font-bold mb-6 leading-tight text-black hover:text-yellow-600">
          SMART SOLUTIONS FOR SMARTER FARMING 
          </h2>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-black mb-8">
            At LinkW Innovation, we specialize in developing and implementing 
            cutting-edge solutions for precision farming. Our primary focus is 
            on creating efficient and effective irrigation systems that prioritize 
            sustainability. By conserving natural resources and optimizing water usage, 
            our solutions help farmers reduce costs, save time, and minimize effort, 
            all while enhancing productivity and promoting long-term environmental 
            stewardship.
          </p>
          
          <Link href="/features">
            <button
              className="px-6 py-2 text-black border-2 border-black rounded-lg bg-transparent hover:bg-black hover:text-white font-semibold shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Read More...
            </button>
          </Link>
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 flex justify-center">
        <Link href="/order">
          <Image
            src="/FEATURES (7).gif" // Replace with your actual image path
            alt="Our Platform"
            width={500}
            height={500}
            className=" transform hover:scale-105 transition-transform duration-300"
          />
          </Link>
        </div>
      </div>
    </section>
  );
}
