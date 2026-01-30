"use client";
import Image from "next/image";
import { Quicksand } from "next/font/google";

// ✅ Load Quicksand font
const quicksand = Quicksand({ weight: ["300","400","500","600","700"], subsets: ["latin"], display: "swap" });

const Works = () => {
  const portfolioItems = [
    {
      title: "Thrivesphere",
      image:
        "https://res.cloudinary.com/dpm3yp0xs/image/upload/v1759428368/Untitled_design_lf9z1p.svg",
      description:
        "Thrivesphere Coaching – A platform to book sessions with professional life coach Nduka.",
      link: "https://thrivespherecoachings.com",
    },
    {
      title: "Veemade Salon & Spa",
      image:
        "https://res.cloudinary.com/dpm3yp0xs/image/upload/v1759428368/Untitled_design_1_srjqmc.svg",
      description:
        "Salon booking website where clients can easily schedule appointments online.",
      link: "https://veemadesalon.com",
    },

    {
  title: "Chicks N Bags",
  image:
    "https://res.cloudinary.com/dpm3yp0xs/image/upload/v1769754950/Untitled_design_5_whhbjp.svg",
  description:
    "A fashion retail platform built with TypeScript, focused on performance, scalability, and responsive product browsing.",
  link: "https://www.chicksnbags.com",
},
    {
      title: "Toetally",
      image:
        "https://res.cloudinary.com/dpm3yp0xs/image/upload/v1759428368/Untitled_design_2_fgz832.svg",
      description:
        "An e-commerce store where customers shop stylish and affordable footwear.",
      link: "https://toe-tally-frontend-lzmv.vercel.app",
    },
    
  ];

  return (
    <div className="works-container" id="works">
      {/* ✅ Apply Quicksand to h2 */}
      <h2 className={`${quicksand.className} works-title`}>My Works</h2>

      <div className="works-grid">
        {portfolioItems.map((item, index) => (
          <div key={index} className="workbox">
            <div className="workbox-content">
              {/* ✅ Apply Quicksand to h1 titles */}
              <h1 className={`${quicksand.className} workbox-title`}>
                {item.title}
              </h1>

              {/* ✅ Apply Quicksand to <a> */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={quicksand.className}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={250}
                  height={180}
                  className="workbox-image"
                />
              </a>

              {/* ✅ Apply Quicksand to <p> */}
              <p className={`${quicksand.className} workbox-description`}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
