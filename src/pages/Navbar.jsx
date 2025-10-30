import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Quicksand } from "next/font/google";

// ✅ Load Quicksand font
const quicksand = Quicksand({ 
  weight: ["300","400","500","600","700"], 
  subsets: ["latin"], 
  display: "swap" 
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // reference to menu container

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="2xl:container mx-auto" ref={menuRef}>
      <nav className="bg-[#222831] text-[#EEEEEE] shadow-md py-2">
        <div className="w-11/12 mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-xl font-bold flex items-center">
              <Image
                src="https://res.cloudinary.com/dpm3yp0xs/image/upload/v1761403571/fullopplogo_3_xuqwow.svg"
                alt="Full Option Web Services Logo"
                width={150}
                height={150}
                className="inline-block mr-2 w-10 sm:w-12 md:w-14 lg:w-16 xl:w-20 transition-all duration-300 ease-in-out"
              />
            </div>

            {/* Desktop Menu */}
            <div className={`hidden md:flex space-x-6 ${quicksand.className}`}>
              <a href="/" className="hover:text-gray-400 transition">Home</a>
              <a href="/About" className="hover:text-gray-400 transition">About</a>
              <a href="/Services" className="hover:text-gray-400 transition">Services</a>
              <a href="/Contact" className="hover:text-gray-400 transition">Contact</a>
            </div>

            {/* Hamburger Icon */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6 transition-transform duration-300 rotate-90"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6 transition-transform duration-300"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${quicksand.className} ${
              isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <a href="/" className="block text-white py-2 px-4 hover:bg-gray-700 transition">Home</a>
            <a href="/About" className="block text-white py-2 px-4 hover:bg-gray-700 transition">About</a>
            <a href="/Services" className="block text-white py-2 px-4 hover:bg-gray-700 transition">Services</a>
            <a href="/Contact" className="block text-white py-2 px-4 hover:bg-gray-700 transition">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
