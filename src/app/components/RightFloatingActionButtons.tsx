"use client";
import React, { useEffect, useState } from "react";
import { IoMdArrowUp } from "react-icons/io";

const ScrollToTopActionButton: React.FC = () => {
  const [show, setShow] = useState(false);

  // Function to handle the scroll event
  function handleScroll() {
    if (window.scrollY >= 100) setShow(true);
    else setShow(false);
  }

  // Function to scroll the page to the top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []); // Empty dependency array to ensure it runs only on mount/unmount

  return (
    <div>
      {show && (
        <IoMdArrowUp
          size={40}
          className="text-white bg-primary rounded-full p-1 cursor-pointer ml-1"
          onClick={scrollToTop}
        />
      )}
    </div>
  );
};

const FloatingActionButtons: React.FC = () => {
  return (
    <div className="fixed right-2 bottom-5">
      <ScrollToTopActionButton />
    </div>
  );
};

export default FloatingActionButtons;
