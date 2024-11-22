// pages/aboutUs/page.tsx
import Image from "next/image";

export default function order() {
    return (
        <div className="relative w-full h-screen">
          {/* Background Image */}
          <Image
            src="/bg.jpg" // Update with your image's actual path
            alt="Background"
            fill
            className="object-cover"
          />
    
          {/* Centered Title and Message */}
          <div className=" absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          
            {/* Optional: You can add a fun touch with a rotating spinner */}
            <div className="animate-spin border-t-4 border-blue-300 rounded-full w-12 h-12 mt-6"></div>
          </div>
        </div>
      );
}
