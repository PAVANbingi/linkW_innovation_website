"use client"; // Ensure this is marked as a client component

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Reference to the menu container

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggle menu state
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  // Close the menu after clicking any link in mobile view
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 px-6 bg-white/5 backdrop-blur-lg border-b border-gray-500/20 transition-all duration-500 hover:bg-white/10 hover:border-gray-300/30 shadow-lg">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center h-[64px]">
        {/* Logo Section */}
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image
              src="/linkW.png"
              alt="linkWlogo"
              height={60}
              width={150}
              className="hover:opacity-80 transition-opacity duration-300"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10">
          <Link href="/" className="text-black text-lg font-medium hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500 hover:scale-105">
            Home
          </Link>
          <Link href="/aboutUs" className="text-black text-lg font-medium hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500 hover:scale-105">
            About Us
          </Link>
          <Link href="/features" className="text-black text-lg font-medium hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500 hover:scale-105">
            Features
          </Link>
          <Link href="/gallery" className="text-black text-lg font-medium hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500 hover:scale-105">
            Gallery
          </Link>
          <Link href="/contactUs" className="text-black text-lg font-medium hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500 hover:scale-105">
            Contact Us
          </Link>
        </div>

        {/* Call to Action Button (Desktop Only) */}
        <div className="hidden md:flex">
          <Link href="/order">
            <button className="bg-gradient-to-r from-gray-300 to-gray-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500 transition hover:scale-105">
              Order-Now
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-2 rounded-full focus:outline-none transition-transform duration-300 hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-500"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div ref={menuRef} className="md:hidden flex flex-col items-center space-y-6 p-6 bg-gray-900 bg-opacity-90 backdrop-blur-md rounded-lg">
          <Link href="/" onClick={handleLinkClick} className="text-white hover:bg-gradient-to-r from-purple-400 to-blue-500 transition duration-300 p-2 rounded-lg">
            Home
          </Link>
          <Link href="/aboutUs" onClick={handleLinkClick} className="text-white hover:bg-gradient-to-r from-purple-400 to-blue-500 transition duration-300 p-2 rounded-lg">
            About Us
          </Link>
          <Link href="/features" onClick={handleLinkClick} className="text-white hover:bg-gradient-to-r from-purple-400 to-blue-500 transition duration-300 p-2 rounded-lg">
            Features
          </Link>
          <Link href="/gallery" onClick={handleLinkClick} className="text-white hover:bg-gradient-to-r from-purple-400 to-blue-500 transition duration-300 p-2 rounded-lg">
            Gallery
          </Link>
          <Link href="/contactUs" onClick={handleLinkClick} className="text-white hover:bg-gradient-to-r from-purple-400 to-blue-500 transition duration-300 p-2 rounded-lg">
            Contact Us
          </Link>

          {/* Call to Action Button (Mobile Menu) */}
          <Link href="/order" onClick={handleLinkClick}>
            <button className="bg-gradient-to-r from-gray-500 to-gray-700 text-white px-6 py-2 rounded-full font-medium transition duration-300 hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-500">
              Order-Now
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
