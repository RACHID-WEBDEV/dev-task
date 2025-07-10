"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageScale = () => {
  // const sectionRef = useRef(null);
  // const imageRef = useRef(null);

  // useEffect(() => {
  //   const image = imageRef.current;

  //   // Timeline for scale in and out
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: sectionRef.current,
  //       start: "top top",
  //       end: "bottom top", // whole 100vh scroll
  //       scrub: true,
  //       pin: true,
  //     },
  //   });

  //   tl.fromTo(
  //     image,
  //     { scale: 0, opacity: 0 },
  //     { scale: 1, opacity: 1, duration: 3, ease: "power2.out" }
  //   ).to(image, {
  //     scale: 0,
  //     opacity: 0,
  //     duration: 3,
  //     ease: "power2.in",
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });

    tl.fromTo(
      image,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 5, ease: "power2.out" }
    ).to(image, {
      scale: 0.9,
      duration: 5,
      ease: "power2.in",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  // const slideContainerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const totalSlides = 2;
  //   const sectionHeight =
  //     (document.body.scrollHeight - window.innerHeight) / totalSlides;
  //   const slides = slideContainerRef.current?.querySelectorAll(".slide");

  //   slides?.forEach((slide, index) => {
  //     gsap.to(slide, {
  //       zIndex: (progress) => (progress < 0.5 ? 1 : 2 - index),
  //       scrollTrigger: {
  //         start: sectionHeight * index + " top",
  //         end: sectionHeight * (index + 1) + " top",
  //         scrub: 1,
  //       },
  //     });

  //     gsap.fromTo(
  //       slide,
  //       {
  //         scale: index === 0 ? 1 : 0,
  //       },
  //       {
  //         scale: 1,
  //         scrollTrigger: {
  //           start: sectionHeight * index + " top",
  //           end: sectionHeight * (index + 1) + " top",
  //           scrub: 1,
  //         },
  //       }
  //     );

  //     if (index !== 0) {
  //       const img = slide.querySelector(".slide-img");
  //       if (img) {
  //         gsap.fromTo(
  //           img,
  //           {
  //             scale: 2,
  //           },
  //           {
  //             scale: 1,
  //             scrollTrigger: {
  //               start: sectionHeight * index + " top",
  //               end: sectionHeight * (index + 1) + " top",
  //               scrub: 1,
  //             },
  //           }
  //         );
  //       }
  //     }
  //   });

  //   // Cleanup on unmount
  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);
  // document.addEventListener("DOMContentLoaded", function () {
  //   const totalSlides = 4;
  //   const sectionHeight =
  //     (document.body.scrollHeight - window.innerHeight) / totalSlides;
  //   const slides = document.querySelectorAll(".slide");
  //   slides.forEach((slide, index) => {
  //     gsap.to(slide, {
  //       zIndex: (progress) => {
  //         return progress < 0.5 ? 1 : 5 - index;
  //       },
  //       scrollTrigger: {
  //         start: sectionHeight * index + "top",
  //         end: sectionHeight * (index + 1) + "top",
  //         scrub: 1,
  //       },
  //     });
  //     gsap.fromTo(
  //       slide,
  //       {
  //         scale: index === 0 ? 1 : 0,
  //       },
  //       {
  //         scale: 1,
  //         scrollTrigger: {
  //           // trigger: slide,
  //           start: sectionHeight * index + "top",
  //           end: sectionHeight * (index + 1) + "top",
  //           scrub: 1,
  //         },
  //       }
  //     );

  //     if (index !== 0) {
  //       gsap.fromTo(
  //         slide.querySelector(".slide-img"),
  //         {
  //           scale: 2,
  //         },
  //         {
  //           scale: 1,
  //           scrollTrigger: {
  //             start: sectionHeight * index + "top",
  //             end: sectionHeight * (index + 1) + "top",
  //             scrub: 1,
  //           },
  //         }
  //       );
  //     }
  //   });
  // });
  return (
    <div>
      <section
        ref={sectionRef}
        className="h-screen flex items-center justify-center bg-white"
      >
        <img
          ref={imageRef}
          src="/images/slider-2-next.png"
          alt="Center Image"
          className="w-[100%] h-auto origin-center"
        />
      </section>
      {/* <div className="slider" ref={slideContainerRef}>
        <div className="slide" id="slide-1">
          <img src="/images/slider-1-next.png" className="slide-img" alt="" />
        </div>
        <div className="slide" id="slide-2">
          <img src="/images/slider-2-next.png" className="slide-img" alt="" />
        </div>
        <div className="slide" id="slide-3">
          <img src="/images/slider-3-next.png" className="slide-img" alt="" />
        </div>
        <div className="slide" id="slide-4">
          <img src="/images/slider-4-next.png" className="slide-img" alt="" />
        </div>
      </div> */}
    </div>
  );
};

export default ImageScale;
