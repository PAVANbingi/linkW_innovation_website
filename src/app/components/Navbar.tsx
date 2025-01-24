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
    <nav className="fixed top-0 left-0 w-full z-50 py-4 px-6 bg-white/10 backdrop-blur-lg border-b border-gray-500/20 transition-all duration-500 hover:bg-white/10 hover:border-gray-300/30 shadow-lg">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center h-[64px]">
        {/* Logo Section */}
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image
              src="/blackI.png"
              alt="linkWlogo"
              height={60}
              width={150}
              className="hover:opacity-80 transition-opacity duration-300"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10">
          <Link href="/" className="px-6 py-2 text-black border-0 border-black rounded-lg bg-transparent hover:bg-black hover:text-white font-semibold shadow-lg transform hover:-translate-y-1 transition-all duration-300" >
            Home
          </Link>
          <Link href="/aboutUs" className="px-6 py-2 text-black border-0 border-black rounded-lg bg-transparent hover:bg-black hover:text-white font-semibold shadow-lg transform hover:-translate-y-1 transition-all duration-300" >
            About Us
          </Link>
          <Link href="/features" className="px-6 py-2 text-black border-0 border-black rounded-lg bg-transparent hover:bg-black hover:text-white font-semibold shadow-lg transform hover:-translate-y-1 transition-all duration-300" >
            Features
          </Link>
          <Link href="/gallery" className="px-6 py-2 text-black border-0 border-black rounded-lg bg-transparent hover:bg-black hover:text-white font-semibold shadow-lg transform hover:-translate-y-1 transition-all duration-300" >
            Gallery
          </Link>
          <Link href="/contactUs" className="px-6 py-2 text-black border-0 border-black rounded-lg bg-transparent hover:bg-black hover:text-white font-semibold shadow-lg transform hover:-translate-y-1 transition-all duration-300" >
            Contact Us
          </Link>
        </div>

        {/* Call to Action Button (Desktop Only) */}
        <div className="hidden md:flex">
          <Link href="/order">
            <button
              className="px-6 py-2 text-black border-2 border-black rounded-lg bg-transparent hover:bg-black hover:text-white font-semibold shadow-lg transform hover:-translate-y-1 transition-all duration-300" >
              Order-Now
            </button>
          </Link>
        </div>

       {/* Mobile Menu Icon */}
<div className="md:hidden">
  {isOpen ? (
    // Close Icon (X) - Visible only when the menu is open
    <button
      onClick={toggleMenu}
      className="fixed top-4 right-4 bg-gradient-to-r from-rose-700 to-rose-600 text-white p-2 rounded-full focus:outline-none transition-transform duration-300 hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-500 z-50"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" strokeWidth="2" />
        <line x1="6" y1="18" x2="18" y2="6" strokeLinecap="round" strokeWidth="2" />
      </svg>
    </button>
  ) : (
    // Hamburger Menu Icon - Visible only when the menu is closed
    <button
      onClick={toggleMenu}
      className="fixed top-4 right-4 bg-gradient-to-r from-rose-700 to-rose-600 text-white p-2 rounded-full focus:outline-none transition-transform duration-300 hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-500 z-50"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 6h18M3 12h18M3 18h18"
        />
      </svg>
    </button>
  )}
</div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div ref={menuRef} className="md:hidden flex flex-col items-center space-y-6 p-6 bg-gray-900 bg-opacity-90 backdrop-blur-md rounded-lg">
          <Link href="/" onClick={handleLinkClick} className="text-white hover:bg-gradient-to-r from-rose-700 to-rose-600 transition duration-300 p-2 rounded-lg">
            Home
          </Link>
          <Link href="/aboutUs" onClick={handleLinkClick} className="text-white hover:bg-gradient-to-r from-rose-700 to-rose-600 transition duration-300 p-2 rounded-lg">
            About Us
          </Link>
          <Link href="/features" onClick={handleLinkClick} className="text-white hover:bg-gradient-to-r from-rose-700 to-rose-600 transition duration-300 p-2 rounded-lg">
            Features
          </Link>
          <Link href="/gallery" onClick={handleLinkClick} className="text-white hover:bg-gradient-to-r from-rose-700 to-rose-600 transition duration-300 p-2 rounded-lg">
            Gallery
          </Link>
          <Link href="/contactUs" onClick={handleLinkClick} className="text-white hover:bg-gradient-to-r from-rose-700 to-rose-600 transition duration-300 p-2 rounded-lg">
            Contact Us
          </Link>

          {/* Call to Action Button (Mobile Menu) */}
          <Link href="/order" onClick={handleLinkClick}>
            <button
              className="px-6 py-2 text-black border-2 border-black rounded-lg bg-transparent hover:bg-black hover:text-white font-semibold shadow-lg transform hover:-translate-y-1 transition-all duration-300" >
              Order-Now
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
