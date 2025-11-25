import React from "react";
import { FiBarChart2 } from "react-icons/fi";
import { Sigmar_One, Quicksand } from "next/font/google";

// Load the Google Fonts
const sigmarOne = Sigmar_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const AboutUs = () => {
  const portraitImages = [
    "https://res.cloudinary.com/dpm3yp0xs/image/upload/v1761554460/2_aoqx3m.png",
    "https://res.cloudinary.com/dpm3yp0xs/image/upload/v1761554461/3_xceb9x.png",
    "https://res.cloudinary.com/dpm3yp0xs/image/upload/v1761554461/5_ghrzex.png",
    "https://res.cloudinary.com/dpm3yp0xs/image/upload/v1761554461/1_dkdfsu.png",
    "https://res.cloudinary.com/dpm3yp0xs/image/upload/v1761554461/4_r47vsj.png",
    "https://res.cloudinary.com/dpm3yp0xs/image/upload/v1761554462/6_jnalbv.png",
  ];

  return (
    <>


      <div className="min-h-screen bg-[#222831] text-[#EEEEEEBF] flex flex-col items-center px-4 py-10 2xl:container mx-auto">
        
        <h1 className={`${sigmarOne.className} text-4xl md:text-5xl font-bold mb-8 py-2 text-center md:w-[80%] mx-auto`}>
          About Full Option Web Services
        </h1>

        {/* Company Section with Slider + Bio */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:w-[90%] mt-8">  
         
          {/* Bio */}
          <div className="flex-1 text-center md:text-left text-[#EEEEEE] space-y-5">
            <p className={`text-lg md:text-xl leading-relaxed ${quicksand.className}`}>
              <span className="font-semibold">Full Option Web Services</span> builds smart, high-performing websites that turn visitors into customers.
            </p>

            <p className={`text-lg md:text-xl leading-relaxed ${quicksand.className}`}>
              We design with purpose, responsive, data-driven, and built to grow your brand and boost sales.
            </p>

            <p className={`text-lg md:text-xl leading-relaxed ${quicksand.className}`}>
              Our platforms connect seamlessly with your marketing tools, capture leads, and reveal insights that help you scale faster.
            </p>

            <p className={`text-lg md:text-xl leading-relaxed text-[#EEEEEE] pb-3 ${quicksand.className}`}>
              We also deliver <span className="font-semibold text-[#ab83d2] ">AI-powered solutions</span> that automate support, manage sales, and create content, keeping your business active even when you’re not.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#393E46] hover:bg-[#555a61] transition px-6 py-3 rounded-full font-semibold"
            >
              <FiBarChart2 size={20} />
              Get Started
            </a>
          </div>

           {/* Portrait Slider */}
          <div className="portrait-slideshow flex-shrink-0 md:w-[320px] mb-14 w-full">
            {portraitImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Company portrait ${index + 1}`}
                className="portrait-image"
              />
            ))}
          </div>
        </div>

  
      </div>
    </>
  );
};

export default AboutUs;
