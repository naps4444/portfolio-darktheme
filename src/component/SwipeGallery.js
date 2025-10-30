// components/SwipeGallery.js
"use client"; // if using Next.js 13+ App Router

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

const slidesData = [
  {
    heading: "SCROLL",
    img: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDUzOA&ixlib=rb-1.2.1&q=80&w=400",
    bg: "#6d597a",
  },
  {
    heading: "SWIPE",
    img: "https://images.unsplash.com/photo-1558603668-6570496b66f8?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDUzOA&ixlib=rb-1.2.1&q=85&w=400",
    bg: "#355070",
  },
  {
    heading: "SCROLL",
    img: "https://images.unsplash.com/photo-1537165924986-cc3568f5d454?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDU4NA&ixlib=rb-1.2.1&q=85&w=400",
    bg: "#b56576",
  },
  {
    heading: "SWIPE",
    img: "https://images.unsplash.com/photo-1589271243958-d61e12b61b97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDU4NA&ixlib=rb-1.2.1&q=80&w=400",
    bg: "#9a8c98",
  },
];

const overlayImages = [
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMxOTU4Mw&ixlib=rb-1.2.1&q=80&w=800",
  "https://images.unsplash.com/photo-1594666757003-3ee20de41568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMxOTcwOA&ixlib=rb-1.2.1&q=80&w=800",
  "https://images.unsplash.com/photo-1579830341096-05f2f31b8259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMxOTQ5Ng&ixlib=rb-1.2.1&q=80&w=800",
  "https://images.unsplash.com/photo-1603771628302-c32c88e568e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMxOTUxNg&ixlib=rb-1.2.1&q=80&w=800",
];

export default function SwipeGallery() {
  const countRef = useRef(null);
  const outerRefs = useRef([]);
  const innerRefs = useRef([]);
  const slideImgRefs = useRef([]);
  const imageRefs = useRef([]);
  const sectionsRef = useRef([]);

  useEffect(() => {
    let animating;
    let currentIndex = 0;

    const wrap = gsap.utils.wrap(0, slidesData.length);

    gsap.set(outerRefs.current, { xPercent: 100 });
    gsap.set(innerRefs.current, { xPercent: -100 });
    gsap.set(outerRefs.current[0], { xPercent: 0 });
    gsap.set(innerRefs.current[0], { xPercent: 0 });

    const gotoSection = (index, direction) => {
      animating = true;
      index = wrap(index);

      let tl = gsap.timeline({
        defaults: { duration: 1, ease: "expo.inOut" },
        onComplete: () => {
          animating = false;
        },
      });

      const currentSection = sectionsRef.current[currentIndex];
      const heading = currentSection.querySelector(".slide__heading");
      const nextSection = sectionsRef.current[index];
      const nextHeading = nextSection.querySelector(".slide__heading");

      gsap.set([sectionsRef.current, imageRefs.current], { zIndex: 0, autoAlpha: 0 });
      gsap.set([sectionsRef.current[currentIndex], imageRefs.current[index]], { zIndex: 1, autoAlpha: 1 });
      gsap.set([sectionsRef.current[index], imageRefs.current[currentIndex]], { zIndex: 2, autoAlpha: 1 });

      tl
        .set(countRef.current, { text: index + 1 }, 0.32)
        .fromTo(outerRefs.current[index], { xPercent: 100 * direction }, { xPercent: 0 }, 0)
        .fromTo(innerRefs.current[index], { xPercent: -100 * direction }, { xPercent: 0 }, 0)
        .to(heading, { "--width": 800, xPercent: 30 * direction }, 0)
        .fromTo(nextHeading, { "--width": 800, xPercent: -30 * direction }, { "--width": 200, xPercent: 0 }, 0)
        .fromTo(imageRefs.current[index], { xPercent: 125 * direction, scaleX: 1.5, scaleY: 1.3 }, { xPercent: 0, scaleX: 1, scaleY: 1 }, 0)
        .fromTo(imageRefs.current[currentIndex], { xPercent: 0, scaleX: 1, scaleY: 1 }, { xPercent: -125 * direction, scaleX: 1.5, scaleY: 1.3 }, 0)
        .fromTo(slideImgRefs.current[index], { scale: 2 }, { scale: 1 }, 0)
        .timeScale(0.8);

      currentIndex = index;
    };

    Observer.create({
      type: "wheel,touch,pointer",
      preventDefault: true,
      wheelSpeed: -1,
      onUp: () => {
        if (animating) return;
        gotoSection(currentIndex + 1, 1);
      },
      onDown: () => {
        if (animating) return;
        gotoSection(currentIndex - 1, -1);
      },
      tolerance: 10,
    });

    const handleKey = (e) => {
      if ((e.code === "ArrowUp" || e.code === "ArrowLeft") && !animating) gotoSection(currentIndex - 1, -1);
      if ((e.code === "ArrowDown" || e.code === "ArrowRight" || e.code === "Space" || e.code === "Enter") && !animating) gotoSection(currentIndex + 1, 1);
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div>
      {slidesData.map((slide, i) => (
        <section
          key={i}
          className="slide"
          ref={(el) => (sectionsRef.current[i] = el)}
          style={{ visibility: i === 0 ? "visible" : "hidden" }}
        >
          <div className="slide__outer" ref={(el) => (outerRefs.current[i] = el)}>
            <div className="slide__inner" ref={(el) => (innerRefs.current[i] = el)}>
              <div className="slide__content" style={{ backgroundColor: slide.bg }}>
                <div className="slide__container">
                  <h2 className="slide__heading">{slide.heading}</h2>
                  <figure className="slide__img-cont">
                    <img className="slide__img" ref={(el) => (slideImgRefs.current[i] = el)} src={slide.img} alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="overlay">
        <div className="overlay__content">
          <p className="overlay__count">
            0<span className="count" ref={countRef}>1</span>
          </p>
          <figure className="overlay__img-cont">
            {overlayImages.map((src, i) => (
              <img key={i} className="image" ref={(el) => (imageRefs.current[i] = el)} src={src} />
            ))}
          </figure>
        </div>
      </section>

      <footer>
        <a href="https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.observe()">ScrollTrigger.observe()</a>
        <p>GSAP demo</p>
      </footer>
    </div>
  );
}
