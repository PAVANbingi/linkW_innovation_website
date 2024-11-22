"use client";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMdArrowUp } from "react-icons/io";

function CallActionButton() {
  return (
    <div>
      <a
        href="tel:+91 9701582263"
        className="bg-red-600 rounded-full p-3 transition-transform transform hover:scale-110 active:scale-95"
      >
        <FaPhoneAlt size={40} className="text-white" />
      </a>
    </div>
  );
}

function WhatsAppActionButton() {
  return (
    <div>
      <a
        href="https://api.whatsapp.com/send?phone=919701582263&text=Hello,%20I%20would%20like%20to%20know%20more%20about%20Support%20%26%20Guidance%20-%20At%C3%A9nas%20Fraternity"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-green-600 overflow-hidden p-3 transition-transform transform hover:scale-110 active:scale-95"
      >
        <FaWhatsapp size={35} className="text-white" />
      </a>
    </div>
  );
}

function ScrollToTopActionButton() {
  const [show, setShow] = React.useState(false);

  function handleScroll() {
    if (window.scrollY >= 500) setShow(true);
    else setShow(false);
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <div>
      {show && (
        <IoMdArrowUp
          size={40}
          className="text-white bg-primary rounded-full p-2 cursor-pointer ml-1 transition-transform transform hover:scale-110 active:scale-95"
          onClick={scrollToTop}
        />
      )}
    </div>
  );
}

function FloatingActionButtons() {
  return (
    <div className="fixed bottom-5 left-5 flex flex-col gap-y-4 md:left-10 md:bottom-10">
      <CallActionButton />
      <WhatsAppActionButton />
      <ScrollToTopActionButton />
    </div>
  );
}

export default FloatingActionButtons;
