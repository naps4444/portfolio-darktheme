"use client";

import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Quicksand, Sigmar_One } from "next/font/google";

// ✅ Load Quicksand for inputs/labels
const quicksand = Quicksand({ weight: ["400","500","600"], subsets: ["latin"], display: "swap" });

// ✅ Load Sigmar One for h1
const sigmarOne = Sigmar_One({ weight: "400", subsets: ["latin"], display: "swap" });

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [isInView, setIsInView] = useState(false);
  const spanRef = useRef(null);
  const [result, setResult] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (spanRef.current) observer.observe(spanRef.current);

    return () => {
      if (spanRef.current) observer.unobserve(spanRef.current);
    };
  }, []);

  const onSubmit = async (data) => {
    setResult("Sending...");
    try {
      const formData = new FormData();
      formData.append("access_key", "76865ca5-9649-470d-95cf-4d964a82ec6f");
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);
      formData.append("auto_response", "true");
      formData.append("auto_response_subject", "Thanks for your message!");
      formData.append(
        "auto_response_message",
        `<h2 style="color: #2d3748;">Hi ${data.name},</h2>
        <p style="font-size: 16px; line-height: 1.5;">
          Thank you for reaching out! We received your message and will get back to you shortly.
        </p>
        <p style="font-size: 14px; color: #718096;">— Your Company Name</p>
        <a href="https://yourwebsite.com" style="color: #3182ce;">Visit our site</a>`
      );
      formData.append("from_name", "Full Option Web Services");
      formData.append("reply_to", "fulloptionwebservices@gmail.com");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const resultData = await response.json();

      if (resultData.success) {
        setResult("Form Submitted Successfully!");
        reset();
      } else {
        setResult("Failed to submit form: " + resultData.message);
      }
    } catch (error) {
      console.error(error);
      setResult("An error occurred while sending the form.");
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          {/* Left Box */}
          <div className="contact-info">
            {/* ✅ Apply Sigmar One to h1 */}
            <h1 className={`${sigmarOne.className} contact-title`}>
              Got a project in{" "}
              <span
                ref={spanRef}
                className={`highlight ${isInView ? "text-focus-in" : ""}`}
              >
                mind?
              </span>
            </h1>
            <Image
              src="https://res.cloudinary.com/dpm3yp0xs/image/upload/v1759869970/Untitled_design_4_ztklti.svg"
              width={250}
              height={250}
              alt="Contact illustration fulloption web services"
              className="contact-image"
            />
          </div>

          {/* Right Box */}
          <div className="contact-form-container">
            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
              <div className="form-row">
                <div className="form-field">
                  <label className={quicksand.className}>Your Name</label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Name"
                    className={quicksand.className}
                  />
                  {errors.name && <p className="error-text">{errors.name.message}</p>}
                </div>

                <div className="form-field">
                  <label className={quicksand.className}>Your Email</label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    placeholder="Email"
                    className={quicksand.className}
                  />
                  {errors.email && <p className="error-text">{errors.email.message}</p>}
                </div>
              </div>

              <div className="form-field full-width">
                <label className={quicksand.className}>Your Message</label>
                <textarea
                  rows="4"
                  {...register("message", { required: "Message is required" })}
                  placeholder="Message"
                  className={quicksand.className}
                ></textarea>
                {errors.message && <p className="error-text">{errors.message.message}</p>}
              </div>

              <button type="submit" disabled={isSubmitting} className="submit-btn">
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>

              {result && <p className="status-text">{result}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
