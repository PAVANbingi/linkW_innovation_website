"use client";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const testimonials = [
  {
    text: `"LinW Innovations has truly transformed the way we approach agriculture. Their IoT solutions make precision farming not just a concept but a daily reality. My farm has never been more productive!"`,
    author: "Pavan Kumar",
    designation: "Agricultural Specialist, Telangana",
    youtubeThumbnail: "/video-thumbnail2.png",
    youtubeUrl: "https://www.youtube.com/embed/gjBFtoruO-I?si=dfM7gJhYJo9UWXVU",
  },
  {
    text: `"Thanks to LinW Innovations, managing our crops has become smarter and more efficient. Their platform empowers us to make better decisions with real-time insights."`,
    author: "Mallesh Sunchu",
    designation: "Farmer, Andhra Pradesh",
    youtubeThumbnail: "/video-thumbnail2.png",
    youtubeUrl: "https://www.youtube.com/embed/vK6FGJnasno?si=7hWXSW5mJN35xLLt",
  },
  {
    text: `"The advanced tools provided by LinW Innovations have helped us reduce wastage and improve yield quality. Their support for sustainable farming is commendable!"`,
    author: "Abilash Reddy",
    designation: "IoT Enthusiast, Tamil Nadu",
    youtubeThumbnail: "/video-thumbnail2.png",
    youtubeUrl: "https://www.youtube.com/embed/08GdSkErLfQ?si=HgfeWM31iJxjmmh3",
  },
  {
    text: `"I am impressed by how LinW Innovations integrates technology with farming. Their IoT solutions are user-friendly and have simplified complex processes."`,
    author: "Sai Kumar",
    designation: "Horticulturist, Telangana",
    youtubeThumbnail: "/video-thumbnail2.png",
    youtubeUrl: "https://www.youtube.com/embed/_tijHjup-gM?si=JjNhSJaqJwBYQPxN",
  },
  {
    text: `"LinW Innovations brings cutting-edge technology to our doorstep. Their IoT tools are not just gadgets but powerful enablers for a more sustainable future."`,
    author: "Eshwar Rao",
    designation: "Agriculture Entrepreneur, Andhra Pradesh",
    youtubeThumbnail: "/video-thumbnail2.png",
    youtubeUrl: "https://www.youtube.com/embed/gjBFtoruO-I?si=dfM7gJhYJo9UWXVU",
  },
  {
    text: `"The LinW platform is innovative and offers a unique approach to sustainable farming. This is groundbreaking and will set the stage for others to follow."`,
    author: "Amitabh Kant",
    designation: "CEO of NITI Ayog",
    youtubeThumbnail: "/video-thumbnail1.png",
    youtubeUrl: "https://www.youtube.com/embed/obsiirkdtaY?si=xWRWz4W6jia79fQn",
  },
  {
    text: `"LinW Innovations is a game-changer in agricultural technology. Their IoT solutions are not only efficient but also accessible to everyone in the community."`,
    author: "Ramesh Kumar",
    designation: "Farming Advocate, Tamil Nadu",
    youtubeThumbnail: "/video-thumbnail2.png",
    youtubeUrl: "https://www.youtube.com/embed/M1jVdrBvoVo?si=xkD0Mul8qORxVDeR",
  },
  {
    text: `"The commitment of LinW Innovations to empowering farmers through IoT and smart solutions is truly inspiring. They are setting the benchmark for the future of agriculture."`,
    author: "Amitabh Rao",
    designation: "IoT Expert, Tamil Nadu",
    youtubeThumbnail: "/video-thumbnail1.png",
    youtubeUrl: "https://www.youtube.com/embed/YYZ-BJ7a1xY?si=O-3hbiP7zEgYEJeL",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
   // preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
          Testimonials
        </h2>

        {/* Testimonial Content */}
        <div
          {...swipeHandlers}
          className="flex flex-col lg:flex-row items-center gap-10 transition-transform duration-500"
        >
          <div className="lg:w-1/2 text-center lg:text-left">
            <blockquote className="text-xl italic text-gray-700 leading-relaxed mb-4">
              {testimonials[currentIndex].text}
            </blockquote>
            <p className="text-lg text-gray-800 font-semibold">
              {testimonials[currentIndex].author}
            </p>
            <p className="text-gray-800">
              {testimonials[currentIndex].designation}
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-64">
              <iframe
                src={testimonials[currentIndex].youtubeUrl}
                title="Testimonial Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-4 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-blue-400 to-blue-600 scale-125"
                  : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full shadow-md hover:opacity-80 transition-all"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full shadow-md hover:opacity-80 transition-all"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
