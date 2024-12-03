import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      {/* Desktop and Tablet Hero Section */}
      <div className="relative w-full overflow-hidden mt-[calc(4rem+10px)] h-screen md:h-screen hidden sm:block"> {/* Hidden on mobile */}
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/herobg.mp4" type="video/mp4" />
          {/* Fallback text for unsupported browsers */}
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-end justify-center text-white px-4 pb-10"> {/* Moved button to the bottom */}
          <Link href="/features">
            <button className="px-7 py-3 font-semibold bg-white text-[#444] border-2 border-white rounded-lg shadow-lg hover:bg-transparent hover:text-white transition-all duration-500">
              Explore Now
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Hero Section */}
      <div className="relative w-full overflow-hidden mt-[calc(4rem+20px)] h-[30vh] sm:hidden mb-0"> {/* Visible only on mobile */}
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/herobg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-end justify-center text-white px-4 pb-6"> {/* Moved button to the bottom */}
          <Link href="/features">
            <button className="px-5 py-2 text-sm font-semibold bg-white text-[#444] border-2 border-white rounded-md shadow-md hover:bg-transparent hover:text-white transition-all duration-500">
              Explore Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
