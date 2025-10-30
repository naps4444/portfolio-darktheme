import Image from "next/image";
import { useState, useEffect } from "react";
import { Sigmar_One } from "next/font/google";

// Load the Google Font
const sigmarOne = Sigmar_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const HeroSection = () => {
  const [animateButton, setAnimateButton] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);

  // WhatsApp details
  const whatsappNumber = "2347014647241";
  const message = "Hello! I'm interested in getting your web services.";

  const handleHireClick = () => {
    setAnimateButton(false);
    void document.getElementById("hire-btn").offsetWidth; // force reflow
    setAnimateButton(true);

    // Wait 2 seconds before opening WhatsApp and refreshing
    setTimeout(() => {
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappUrl, "_blank");

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }, 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateImage(true);
      setTimeout(() => setAnimateImage(false), 900);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#222831] 2xl:container mx-auto py-10">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-6">
        {/* Left content */}
        <div className="relative px-4 ml-6 mt-12 text-center md:text-left">
          <Image
            src="https://res.cloudinary.com/dpm3yp0xs/image/upload/v1758455328/Untitled_design_9_xl7zfc.svg"
            alt="Hero decoration"
            width={100}
            height={100}
            className="absolute w-28 md:w-36 top-3 md:top-6 -left-16 md:-left-24 animate-bounceSlow"
          />

          {/* ✅ Hero Title with Sigmar One font */}
          <div className={`${sigmarOne.className} text-3xl md:text-4xl lg:text-6xl font-bold`}>
            <h1 className="text-[#EEEEEE]">LAUNCH YOUR</h1>
            <h1 className="text-white">
              <span className="text-[#7e4cb1] flicker-1">PRESENCE</span>.
            </h1>
          </div>

          <div className="flex gap-2 mt-4 justify-center md:justify-start">
            <button
              id="hire-btn"
              onClick={handleHireClick}
              className={`bg-[#7e4cb1] hover:bg-[#6b3f9a] text-white py-2 px-4 rounded-2xl font-bold transition-transform duration-300 ${
                animateButton ? "bounce-out-top" : ""
              }`}
              style={{ textShadow: "2px 4px 4px rgba(0,0,0,0.4)" }}
            >
              Hire us
            </button>
          </div>
        </div>

        {/* Right content */}
        <div className="relative mx-auto -mt-20 md:mt-0 lg:ml-36">
          <Image
            src="https://res.cloudinary.com/dpm3yp0xs/image/upload/v1758454479/Untitled_design_7_x6vcw5.svg"
            alt="developer sitting and working"
            width={200}
            height={200}
            className="absolute w-[120px] md:w-[180px] top-64 md:top-44 lg:top-56 xl:top-64 left-32 xl:left-52 z-20"
          />
          <div>
            <Image
              src="https://res.cloudinary.com/dpm3yp0xs/image/upload/v1758455060/Untitled_design_8_jbaeyg.svg"
              alt="Hero Image"
              width={400}
              height={400}
              className={`mt-20 md:mt-0 w-72 md:w-96 lg:w-[450px] ${
                animateImage ? "jello-horizontal" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
