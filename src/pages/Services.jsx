import React from "react";
import Footer from "./Footer";
import {
  FiMonitor,
  FiBarChart2,
  FiTrendingUp,
  FiMail,
  FiPenTool,
  FiCpu,
} from "react-icons/fi";
import Navbar from "./Navbar";
import { Sigmar_One } from "next/font/google";
import { Quicksand } from "next/font/google";

// ✅ Load Quicksand font
const quicksand = Quicksand({ weight: ["300","400","500","600","700"], subsets: ["latin"], display: "swap" });

// Load the Google Font
const sigmarOne = Sigmar_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Services = () => {
  const services = [
    {
      icon: <FiMonitor size={30} />,
      title: "Website Development",
      description: [
        "We create professional websites and online platforms that showcase your business, skills, or services. Whether you're an individual, professional, trader, or business owner, we design sites that help your customers understand what you do and engage with your offerings.",
        "Our website services include:",
      ],
      list: [
        "Portfolio Websites for professionals, individuals, and businesses",
        "E-commerce Websites to sell products online",
        "Booking Websites for salons, dentists, or service providers",
        "Custom websites tailored to your unique business needs",
      ],
      imageSm: "https://res.cloudinary.com/dpm3yp0xs/image/upload/v1761650950/2_mzheil.png",
      imageLg: "https://res.cloudinary.com/dpm3yp0xs/image/upload/v1761561364/2_z1eas8.png",
    },
    {
      icon: <FiBarChart2 size={30} />,
      title: "Analytics & Business Insights",
      description: [
        "A beautiful website is great, but understanding how your visitors interact with it is crucial. We help you set up Google Analytics and teach you how to use it effectively.",
        "With these insights, you can:",
      ],
      list: [
        "Track which pages or products attract the most attention",
        "Analyze visitor behavior and engagement",
        "Make informed decisions about marketing and campaigns",
        "Optimize your website to increase sales and conversions",
      ],
      imageSm: "https://res.cloudinary.com/dpm3yp0xs/image/upload/v1761650949/12_ht9dgr.png",
      imageLg: "https://res.cloudinary.com/dpm3yp0xs/image/upload/v1761561365/7_kegojb.png",
    },
    {
      icon: <FiTrendingUp size={30} />,
      title: "Digital Marketing & Branding",
      description: [
        "Beyond building your website, we provide digital marketing support to help grow your brand and increase visibility online. Our services focus on creating effective campaigns and promotional strategies tailored to your business.",
      ],
      list: [
        "Designing and implementing digital marketing campaigns",
        "Creating promotional materials, flyers, and social content",
        "Developing strategies to increase brand awareness and sales",
        "Optimizing campaigns based on performance insights",
      ],
      imageSm: "https://res.cloudinary.com/dpm3yp0xs/image/upload/v1761650949/4_hpdbwz.png",
      imageLg: "https://res.cloudinary.com/dpm3yp0xs/image/upload/v1761561363/3_n10omu.png",
    },
    {
      icon: <FiMail size={30} />,
      title: "Email Campaign Management",
      description: [
        "We help you engage your subscribers and customers by collecting leads through your website and integrating them into email campaign systems. You can send weekly or bi-weekly newsletters to keep your audience informed and engaged.",
        "The advantages of regular newsletters include:",
      ],
      list: [
        "Maintain consistent communication with your customers",
        "Increase engagement and repeat visits to your website",
        "Promote products, services, or special offers effectively",
        "Strengthen brand awareness and trust among your audience",
        "Provide valuable updates and information to nurture leads",
      ],
      imageSm: "https://res.cloudinary.com/dpm3yp0xs/image/upload/v1761650949/6_weognt.png",
      imageLg: "https://res.cloudinary.com/dpm3yp0xs/image/upload/v1761561364/4_b79iat.png",
    },
    {
      icon: <FiPenTool size={30} />,
      title: "Graphics Design",
      description: [
        "We offer professional graphic design services that elevate your brand identity. From letterheads to official documents, we create visuals that reflect professionalism and align perfectly with your brand’s ethics and aesthetics.",
      ],
      list: [
        "Custom letterhead and document design",
        "Professional layouts for reports, proposals, and certificates",
        "Design consistency across all company materials",
        "Modern and elegant branding aesthetics",
      ],
      imageSm: "https://res.cloudinary.com/dpm3yp0xs/image/upload/v1761650950/8_hf4w0z.png",
      imageLg: "https://res.cloudinary.com/dpm3yp0xs/image/upload/v1761561366/5_yr60ab.png",
    },
    {
      icon: <FiCpu size={30} />,
      title: "AI Automations",
      description: [
        "We integrate AI-powered solutions that automate customer engagement, communication, and operations. Our AI automations ensure your business stays responsive and efficient 24/7.",
      ],
      list: [
        "24/7 AI customer representatives via chat or call",
        "Automated sales and lead management",
        "AI-driven workflows to streamline tasks",
        "Custom automation tools tailored to your business",
      ],
      imageSm: "https://res.cloudinary.com/dpm3yp0xs/image/upload/v1761650949/10_s9zn2y.png",
      imageLg: "https://res.cloudinary.com/dpm3yp0xs/image/upload/v1761561366/6_zsdrra.png",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="2xl:container mx-auto bg-[#222831] text-[#EEEEEEBF] px-4 py-10 flex flex-col items-center">

        <h1 className={`${sigmarOne.className} text-4xl md:text-5xl font-bold mb-10 text-center py-4`}>
          Our Services
        </h1>

        {services.map((service, index) => (
          <div
            key={index}
            className={`md:w-11/12 mx-auto mb-16 flex flex-col md:flex-row items-center md:items-stretch ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div className="flex-1 bg-transparent p-4 md:p-6">
              <div className="flex items-center gap-4 mb-4 text-[#EEEEEE]">
                {service.icon}
                <h1 className={`text-2xl md:text-3xl font-semibold ${quicksand.className}`}>
                  {service.title}
                </h1>
              </div>
              {service.description.map((desc, i) => (
                <p key={i} className={`mb-4 text-lg md:text-xl leading-relaxed ${quicksand.className}`}>
                  {desc}
                </p>
              ))}
              {service.list && (
                <ul className={`list-disc list-inside space-y-2 text-lg md:text-xl leading-relaxed ${quicksand.className}`}>
                  {service.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Image Section */}
            <div className="flex-1 w-full h-[250px] md:h-auto md:w-1/2">
              {/* Small–Medium Image */}
              <img
                src={service.imageSm}
                alt={service.title}
                className="w-full h-full object-cover rounded-lg block lg:hidden"
              />
              {/* Large+ Image */}
              <img
                src={service.imageLg}
                alt={service.title}
                className="w-full h-full object-cover rounded-lg hidden lg:block"
              />
            </div>
          </div>
        ))}

        {/* Call to Action */}
        <div className="max-w-5xl w-full text-center mt-10">
          <p className={`mb-4 text-lg md:text-xl mx-auto w-[90%] vollkorn-unique ${quicksand.className}`}>
            Whether you need a professional website, engaging graphics, smart
            analytics, digital marketing, or intelligent AI automation, we offer
            the complete package to grow your business efficiently.
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 bg-[#393E46] hover:bg-[#555a61] transition px-6 py-3 rounded-full font-semibold"
          >
            Get Started Today
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;
