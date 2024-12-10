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
    At <span className="font-semibold hover:text-rose-600">LinkW Innovation</span> we are pioneering a brighter, sustainable future through innovation and forward-thinking solutions. With a steadfast commitment to excellence and progress, we empower industries by creating transformative solutions that drive growth, inspire change, and leave a lasting global impact.
  </p>
  <p className="text-lg text-gray-400 leading-relaxed mb-4">
  &quot;LinkW Innovation’ platform is not just about innovation; it&apos;s a symbol of sustainable advancement, setting new benchmarks for innovation and collaboration. Together, we are shaping a smarter, greener tomorrow. &quot;
  </p>
  {/* <p className="text-lg text-gray-200 font-semibold hover:text-rose-600 ">Mallesh Sunchu</p>
  <p className="text-gray-200 hover:text-rose-600">CEO of LinkW Innovations</p> */}
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
