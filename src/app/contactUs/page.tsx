// pages/aboutUs/page.tsx
export default function AboutUs() {
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
        <source src="/about.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-50">
        <h1 className="text-white text-5xl md:text-7xl font-bold drop-shadow-lg mb-4">
          CONTACT US
        </h1>
        
        <p className="text-white text-xl md:text-2xl font-semibold mb-6 drop-shadow-md">
          We&apos;re currently working on new content and exciting updates for this page!
        </p>
        
        <p className="text-white text-lg md:text-xl font-medium mb-6 opacity-80 drop-shadow-md">
          Stay tuned, amazing things are coming soon.
        </p>

        {/* Optional: Rotating Spinner */}
        <div className="animate-spin border-t-4 border-white rounded-full w-12 h-12 mt-6"></div>
      </div>
    </div>
  );
}
