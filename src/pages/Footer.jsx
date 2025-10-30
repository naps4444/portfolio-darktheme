import React from "react";
import { FiHome, FiPhone } from "react-icons/fi";
import { LuUser, LuFacebook, LuYoutube } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { PiTwitterLogo } from "react-icons/pi";
import { Quicksand } from "next/font/google";

// ✅ Load Quicksand font
const quicksand = Quicksand({ weight: ["400","500","600"], subsets: ["latin"], display: "swap" });

const Footer = () => {
  return (
    <footer
      className={`${quicksand.className} w-full bg-[#222831] text-[#EEEEEEBF] py-10 px-4 flex flex-col items-center gap-6 2xl:container mx-auto`}
    >
      {/* --- Top Segment: Navigation --- */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-14 md:mt-20">
        <a href="#home" className="flex items-center gap-2 hover:text-white transition">
          <FiHome color="#EEEEEEBF" size={20} />
          <span>Home</span>
        </a>
        <a href="#about" className="flex items-center gap-2 hover:text-white transition">
          <LuUser color="#EEEEEEBF" size={20} />
          <span>About Me</span>
        </a>
        <a href="#contact" className="flex items-center gap-2 hover:text-white transition">
          <FiPhone color="#EEEEEEBF" size={20} />
          <span>Contact</span>
        </a>
      </div>

      {/* --- Second Segment: Circular Social Icons --- */}
      <div className="flex items-center justify-center gap-6">
        <a href="#" className="bg-[#393E46] rounded-full p-2 hover:scale-110 transition-transform">
          <LuFacebook color="#EEEEEEBF" size={20} />
        </a>
        <a href="#" className="bg-[#393E46] rounded-full p-2 hover:scale-110 transition-transform">
          <FaInstagram color="#EEEEEEBF" size={20} />
        </a>
        <a href="#" className="bg-[#393E46] rounded-full p-2 hover:scale-110 transition-transform">
          <PiTwitterLogo color="#EEEEEEBF" size={20} />
        </a>
        <a href="#" className="bg-[#393E46] rounded-full p-2 hover:scale-110 transition-transform">
          <LuYoutube color="#EEEEEEBF" size={20} />
        </a>
      </div>

      {/* --- Bottom Legal Links --- */}
      <div className="w-full flex justify-center md:justify-end pr-0 md:pr-4">
        <a
          href="#terms"
          className="text-[#EEEEEEBF] text-sm hover:text-white transition"
        >
          Terms of Service - Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
