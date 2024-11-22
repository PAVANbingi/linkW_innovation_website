// pages/aboutUs/page.tsx
import Image from "next/image";

export default function privacy() {
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
             Privacy & Policy
            </h1>
          
           
    
            {/* Optional: You can add a fun touch with a rotating spinner */}
            <div className="animate-spin border-t-4 border-white rounded-full w-12 h-12 mt-6"></div>
          </div>
        </div>
      );
}
