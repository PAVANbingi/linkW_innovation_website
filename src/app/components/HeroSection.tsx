"use client";

import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images: string[] = [
  "/ppp1.gif",
  "/ppp2.gif",
  "/ppp3.gif",
  "/ppp4.gif",
  "/ppp1.gif",
];

const textData = [
  "Linking the World",
  "Innovating Today for a Smarter Tomorrow",
  "Where Technology Links Lives",
  "Smart Solutions for Every Domain",
  "Connecting Ideas, Building Innovations",
];

export default function HeroSection() {
  // Custom Previous Arrow
  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer hidden sm:block"
      onClick={onClick}
    >
      <MdArrowBackIos className="text-white text-5xl hover:text-orange-500 hover:scale-125 transition-all duration-500 ease-in-out hover:bg-slate-100 rounded-lg" />
    </div>
  );

  // Custom Next Arrow
  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer hidden sm:block"
      onClick={onClick}
    >
      <MdArrowForwardIos className="text-white text-5xl hover:text-orange-500 hover:scale-125 transition-all duration-500 ease-in-out hover:bg-slate-100 rounded-lg" />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    pauseOnHover: false,
    fade: true,
   
  };

  return (
    <section className="relative h-screen bg-black">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-screen flex items-center justify-center group"
          >
            {/* GIF Image */}
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-1000 ease-in-out transform group-hover:scale-105"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center ">
              <div className="text-center text-orange-500 px-6">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  {textData[index]}
                </h1>
                <Link href="/features">
                  <button className="inline-block px-7 py-3 font-semibold bg-white text-[#444] border-2 border-white rounded-lg shadow-lg hover:bg-transparent hover:text-white transition-all duration-500">
                    Explore-Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
