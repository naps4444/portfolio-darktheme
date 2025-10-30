import Image from "next/image";
import { Quicksand } from "next/font/google";

// ✅ Load Quicksand font
const quicksand = Quicksand({ weight: ["300","400","500","600","700"], subsets: ["latin"], display: "swap" });

const AboutMe = () => {
  return (
    <div className="2xl:container mx-auto about-container" id="about">
      <div className="about-grid">
        {/* Decorative top icon */}
        <Image
          src="https://res.cloudinary.com/dpm3yp0xs/image/upload/v1758876881/Untitled_design_15_rbptsr.svg"
          alt="music icon fulloption web services"
          width={100}
          height={100}
          className="about-music-icon"
        />

        {/* Left content (text) */}
        <div className="about-text">
          <Image
            src="https://res.cloudinary.com/dpm3yp0xs/image/upload/v1758878913/Untitled_design_16_uh9mlj.svg"
            alt="lightbulb icon fulloption web services"
            width={100}
            height={100}
            className="about-lightbulb-icon"
          />

          {/* ✅ Apply Quicksand font to h1 */}
          <h1 className={`about-title ${quicksand.className}`}>
            Our <span className="highlightA">Mission</span>
          </h1>

          {/* ✅ Apply Quicksand font to p tags */}
          <p className={quicksand.className}>
            We help individuals and businesses bring their vision online with{" "}
            <strong>custom websites they fully own</strong>, from portfolio sites for
            professionals to landing pages and e-commerce platforms. By creating
            tailored websites and guiding traffic-driven campaigns, we empower
            clients to increase visibility, attract opportunities, and grow confidently.
          </p>

          <p className={quicksand.className}>
            Our mission is to ensure every venture, whether a small business,
            freelancer, or career-focused professional, has a secure, professional
            online presence that drives results and supports sustainable growth.
          </p>
        </div>

        {/* Right content (images) */}
        <div className="about-image-wrapper">
          <Image
            src="https://res.cloudinary.com/dpm3yp0xs/image/upload/v1758535225/Untitled_design_10_ovbmc6.svg"
            alt="man sleeping on laptop fulloption web services"
            width={200}
            height={200}
            className="about-floating-man"
          />
          <div className="about-bg-image">
            <Image
              src="https://res.cloudinary.com/dpm3yp0xs/image/upload/v1758535226/Untitled_design_11_ckq9pt.svg"
              alt="developer background fulloption web services"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
