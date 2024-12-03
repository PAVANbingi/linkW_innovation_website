// pages/aboutUs/page.tsx
//import Image from "next/image";
import Link from "next/link";
export default function HeroSection() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bgp.mp4" type="video/mp4" />
        LinkW innovation product 
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-50">
        <h1 className="text-white text-5xl md:text-7xl font-bold drop-shadow-lg mb-4">
          PRIVACY & POLICY
        </h1>
        
        <Link href="/features">
                  <button className="inline-block px-7 py-3 font-semibold bg-white text-[#444] border-2 border-white rounded-lg shadow-lg hover:bg-transparent hover:text-white transition-all duration-500">
                    Explore Now
                  </button>
                </Link>

        {/* Optional: Rotating Spinner */}
        <div className="animate-spin border-t-4 border-white rounded-full w-12 h-12 mt-6"></div>
      </div>
    </div>
  );
}
