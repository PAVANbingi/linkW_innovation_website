"use client";

export default function OurIdentity() {
  return (
    <section className="bg-slate-950  py-12 px-6 lg:px-20">
      <h2 className=" text-4xl sm:text-6xl font-bold mb-6 text-center text-white hover:text-rose-600">
    Who We Are
  </h2>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
       {/* Left Side: Text Content */}
<div className="lg:w-1/2 text-center lg:text-left">
  
  <p className="text-lg text-gray-400 leading-relaxed mb-4">
    At <span className="font-semibold hover:text-rose-600">LinkW Innovations</span>, we are reshaping the future with a relentless commitment to innovation and sustainability. Guided by the visionary leadership of our CEO, <span className="font-semibold hover:text-rose-600">Mallesh Sunchu</span>, we strive to empower industries with groundbreaking solutions that inspire progress and make a global impact.
  </p>
  <p className="text-lg text-gray-400 leading-relaxed mb-4">
  &quot;LinkW Innovations’ platform is not just about innovation; it is a beacon of sustainable progress, setting a new standard for others to follow. Together, we are building a smarter, greener future.&quot;
  </p>
  <p className="text-lg text-gray-200 font-semibold hover:text-rose-600 ">Mallesh Sunchu</p>
  <p className="text-gray-200 hover:text-rose-600">CEO of LinkW Innovations</p>
</div>

        {/* Right Side: YouTube Video */}
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <div className="relative w-full max-w-md h-64">
            <iframe
              src="https://www.youtube.com/embed/obsiirkdtaY?si=xWRWz4W6jia79fQn"
              title="Our Identity Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
