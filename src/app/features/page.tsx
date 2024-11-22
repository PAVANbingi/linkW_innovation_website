// pages/aboutUs/page.tsx
import Image from "next/image";

export default function features() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src="/background.jpg" // Update with your image's actual path
        alt="Background"
        fill
        className="object-cover"
      />

      {/* Centered Title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-5xl md:text-7xl font-bold drop-shadow-lg">
         FEATURES(PRODUTCT-STUFF)
        </h1>
      </div>
    </div>
  );
}
