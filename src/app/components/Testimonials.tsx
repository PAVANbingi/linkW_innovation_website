"use client";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const testimonials = [
  {
    text: `"As a farmer from Tankara village in Mahaboobnagar, I can confidently say that the Kisan Mithraa Mobile Starter is a game-changer for every farmer. It’s reliable, easy to use, and has become an essential part of my daily routine. Every farmer can trust this innovative solution to improve productivity and simplify farm management. Highly recommended!"`,
    author: "Narayana ",
    designation: "Farmer, village: Tankara,Mahaboobnagar, Andhra Pradesh",
    youtubeThumbnail: "/video-thumbnail2.png",
    youtubeUrl: "https://www.youtube.com/embed/iqHtS7Z1zEk?si=4jF13eZiA880vnJ0",
  },
  {
    text: `"As a farmer from Renta Chithala village in Palnadu, Kisan Mithraa has truly transformed my harvest. The innovative features and reliable support have made my farming process more efficient and productive. I highly recommend Kisan Mithraa to every farmer looking to achieve better results and simplify their work. Subscribe and experience the difference!"`,
    author: "Narendhra",
    designation: "Farmer, village: Renta chithala Palnadu, Andhra Pradesh",
    youtubeThumbnail: "/video-thumbnail2.png",
    youtubeUrl: "https://www.youtube.com/embed/dyvm8nlcIKM?si=Y5v4p3XcLSI-cpOT",
  },
  {
    text: `"As a farmer from Chirala, Andhra Pradesh, I can proudly say that Kisan Mithraa Mobile Starter delivers exactly what it promises. It's a dependable solution that has made my farming tasks much easier and more efficient. I wholeheartedly recommend it to all farmers looking for trustworthy and innovative tools. Subscribe and see the results yourself!"`,
    author: "Ravindra ",
    designation: "Farmer, village: chirala , Andhra Pradesh",
    youtubeThumbnail: "/video-thumbnail2.png",
    youtubeUrl: "https://www.youtube.com/embed/fnHj-Nd_ORI?si=sTlniwvgc8i7n6DS",
  },
  {
    text: `"From struggles to smiles, Kisan Mithraa Mobile Starter has truly been a blessing for me as a farmer in Proddatur, Andhra Pradesh. It has simplified my farming work, improved my productivity, and brought a positive change to my daily routine. I am grateful for this amazing tool and highly recommend it to fellow farmers. Watch now and experience the difference"`,
    author: "Srinivas ",
    designation: "Farmer, village: Proddatur, Andhra Pradesh",
    youtubeThumbnail: "/video-thumbnail2.png",
    youtubeUrl: "https://www.youtube.com/embed/LNE_SrZwsvc?si=_0E7aH-_0IwCtJl_",
  },
  {
    text: `"Kisan Mithraa Mobile Starter has been the best investment for my farm in Peddapalli, Karim Nagar. It has significantly improved my farming efficiency and helped me achieve better results. I am extremely satisfied with its performance and recommend it to all farmers looking for a reliable solution. Subscribe now and see the benefits firsthand!"`,
    author: "Sravan ",
    designation: "Farmer, village: peddapalli Karim Nagar, Telangana",
    youtubeThumbnail: "/video-thumbnail2.png",
    youtubeUrl: "https://www.youtube.com/embed/N9mOgxyFVzY?si=vkUAdaI_4TY9z1i9",
  },
  {
    text: `"Kisan Mithraa has been a game-changer for agriculture in our village, Mutthulur, Nandyala. It has revolutionized the way I manage my farm, making processes more efficient and effective. I highly recommend Kisan Mithraa to all farmers looking to improve their farming practices. Subscribe now and watch the transformation."`,
    author: "Babul Reddy",
    designation: "Farmer, village: Mutthulur-Nandyala, Andhra Pradesh",
    youtubeThumbnail: "/video-thumbnail1.png",
    youtubeUrl: "https://www.youtube.com/embed/iqHtS7Z1zEk?si=YcCCXF_uqvVafCHI",
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
        <h2 className="text-4xl sm:text-6xl font-bold mb-6 text-black hover:text-yellow-700">
          Testimonials
        </h2>

        {/* Testimonial Content */}
        <div
          {...swipeHandlers}
          className="flex flex-col lg:flex-row items-center gap-10 transition-transform duration-500"
        >
          <div className="lg:w-1/2 text-center lg:text-left">
            <blockquote className="text-xl italic text-black leading-relaxed mb-4">
              {testimonials[currentIndex].text}
            </blockquote>
            <p className="text-lg text-black font-semibold">
              {testimonials[currentIndex].author}
            </p>
            <p className="text-black">
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
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-700 scale-125"
                  : "bg-yellow-900"
              }`}
            ></button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4 mt-8">
          <button
            onClick={handlePrev}
           className="px-6 py-2 text-black border-2 border-black rounded-lg bg-transparent hover:bg-black hover:text-white font-semibold shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-2 text-black border-2 border-black rounded-lg bg-transparent hover:bg-black hover:text-white font-semibold shadow-lg transform hover:-translate-y-1 transition-all duration-300"
           >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
