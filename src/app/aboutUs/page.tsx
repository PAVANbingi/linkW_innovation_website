// pages/aboutUs/page.tsx
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src="/background.jpg" // Update with your image's actual path
        alt="Background"
        fill
        className="object-cover"
      />

      {/* Centered Title and Message */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-white text-5xl md:text-7xl font-bold drop-shadow-lg mb-4">
          ABOUT US
        </h1>
        
        <p className="text-white text-xl md:text-2xl font-semibold mb-6 drop-shadow-md">
          We&apos;re currently working on new content and exciting updates for this page!
        </p>
        
        <p className="text-white text-lg md:text-xl font-medium mb-6 opacity-80 drop-shadow-md">
          Stay tuned, amazing things are coming soon.
        </p>

        {/* Optional: You can add a fun touch with a rotating spinner */}
        <div className="animate-spin border-t-4 border-white rounded-full w-12 h-12 mt-6"></div>
      </div>
    </div>
  );
}
