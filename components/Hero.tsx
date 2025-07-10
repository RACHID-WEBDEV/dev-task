"use client";
import React, { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade"; // Required for fade effect

import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

// gsap.registerPlugin(SplitText);

const Hero = ({ setOpenModal, setsaveActiveSlideImage }: any) => {
  // Create a ref to access the Swiper instance
  const swiperRef = useRef<{ swiper: any } | null>(null);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    // Move handleSlideChange to outer scope so it can be referenced in cleanup
    // const handleSlideChange = () => {
    //   const activeSlide = swiper.slides[swiper.activeIndex];
    //   const section = activeSlide.querySelector("section");

    //   if (section) {
    //     const bgImage = window.getComputedStyle(section).backgroundImage;
    //     const match = bgImage.match(/url\(["']?(.*?)["']?\)/);
    //     if (match && match[1]) {
    //       const imageUrl = match[1];
    //       localStorage.setItem("activeSlideBg", imageUrl);
    //       // console.log("Active background image saved:", imageUrl);
    //     }
    //   }
    // };

    const handleSlideChange = () => {
      const activeSlide = swiper.slides[swiper.activeIndex];
      const section = activeSlide.querySelector("section");

      if (section) {
        const computedStyle = window.getComputedStyle(section);
        const bgImage = computedStyle.backgroundImage;

        // console.log("Raw backgroundImage:", bgImage); // <- this is key to debug

        // Extract the URL from the backgroundImage string
        const match = bgImage.match(/url\(["']?(.*?)["']?\)/);
        if (match && match[1]) {
          const imageUrl = match[1];
          // console.log("✅ Extracted image URL:", imageUrl);
          setsaveActiveSlideImage(imageUrl);
          localStorage.setItem("activeSlideBg", imageUrl);
        } else {
          console.warn("⚠️ Could not extract image URL from:", bgImage);
        }
      } else {
        console.warn("⚠️ No section found in active slide");
      }
    };

    swiper.on("slideChangeTransitionStart", () => {
      // Reset ALL slide-out directions
      const leftTexts = document.querySelectorAll(".slide-out-move-left");
      const rightTexts = document.querySelectorAll(".slide-out-move-right");
      const upTexts = document.querySelectorAll(".slide-out-move-up");
      const downTexts = document.querySelectorAll(".slide-out-move-down");

      leftTexts.forEach((el) => gsap.set(el, { x: 0, opacity: 1 }));
      rightTexts.forEach((el) => gsap.set(el, { x: 0, opacity: 1 }));
      upTexts.forEach((el) => gsap.set(el, { y: 0, opacity: 1 }));
      downTexts.forEach((el) => gsap.set(el, { y: 0, opacity: 1 }));

      const activeSlide = swiper.slides[swiper.activeIndex];

      // Animate LEFT elements
      const activeLeft = activeSlide.querySelectorAll(".slide-out-move-left");
      activeLeft.forEach((el: any) => {
        gsap.fromTo(
          el,
          { x: "-100%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 1.5, ease: "power3.out" }
        );
      });

      // Animate RIGHT elements
      const activeRight = activeSlide.querySelectorAll(".slide-out-move-right");
      activeRight.forEach((el: any) => {
        gsap.fromTo(
          el,
          { x: "100%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 1.5, ease: "power3.out" }
        );
      });

      // Animate UP elements
      const activeUp = activeSlide.querySelectorAll(".slide-out-move-up");
      activeUp.forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: "100%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1.5, delay: 1, ease: "power3.out" }
        );
      });

      // Animate DOWN elements
      const activeDown = activeSlide.querySelectorAll(".slide-out-move-down");
      activeDown.forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: "-100%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1.5, ease: "power3.out" }
        );
      });
    });

    swiper.on("slideChangeTransitionStart", handleSlideChange);

    // Run it immediately on first mount
    handleSlideChange();

    // Cleanup function to remove the event listener
    return () => {
      swiper.off("slideChangeTransitionStart", handleSlideChange);
    };
  }, []);

  useGSAP(() => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    swiper.on("slideChangeTransitionStart", () => {
      const activeSlide = swiper.slides[swiper.activeIndex];

      const titles = activeSlide.querySelectorAll(".title");
      const titlesAlt = activeSlide.querySelectorAll(".titlealt");
      const subtitles = activeSlide.querySelectorAll(".subtitle");

      // Animate all .title elements
      titles.forEach((titleEl: any) => {
        if (titleEl.splitText) titleEl.splitText.revert(); // clean up previous
        const split = new SplitText(titleEl, { type: "chars, words" });
        titleEl.splitText = split;

        gsap.from(split.chars, {
          yPercent: 100,
          duration: 1.8,
          ease: "expo.out",
          stagger: 0.06,
        });
      });

      // Animate all .titlealt elements (opposite direction)
      titlesAlt.forEach((altEl: any) => {
        if (altEl.splitText) altEl.splitText.revert();
        const split = new SplitText(altEl, { type: "chars, words" });
        altEl.splitText = split;

        gsap.from(split.chars, {
          yPercent: -100, // opposite direction
          duration: 1.8,
          ease: "expo.out",
          stagger: 0.06,
        });
      });

      // Animate all .subtitle elements
      subtitles.forEach((subEl: any) => {
        if (subEl.splitText) subEl.splitText.revert();
        const split = new SplitText(subEl, { type: "lines" });
        subEl.splitText = split;

        gsap.from(split.lines, {
          opacity: 0,
          yPercent: 100,
          duration: 1.8,
          ease: "expo.inOut",
          stagger: 0.06,
          delay: 1,
        });
      });
    });
  }, []);

  // const bg = localStorage.getItem("activeSlideBg");

  // if (bg) {
  //   // Apply it as a background image or however you need
  //   console.log("Saved slide background:", bg);
  // }

  // useEffect(() => {
  //   const bg = localStorage.getItem("activeSlideBg");
  //   if (bg) {
  //     // Use it to update a style or state
  //     console.log("Using saved background image hero:", bg);
  //   }
  // }, []);

  const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation, EffectFade],
    effect: "fade",
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true, // ✅ Makes the slider loop infinitely
    autoplay: {
      delay: 3000,
      disableOnInteraction: false, // optional: keeps autoplay active after interaction
    },
    navigation: {
      nextEl: ".h1n",
      prevEl: ".h1p",
    },
    pagination: {
      el: ".slider-pagination",
      clickable: true,
    },
  };
  return (
    <Swiper ref={swiperRef} {...swiperOptions}>
      <SwiperSlide>
        <section className="relative bg-cover bg-center w-full h-[700px] lg:h-[800px] bg-no-repeat  bg-[url('/images/slider-1.png')]">
          <div className="flex items-center justify-between px-4 lg:px-20 pt-4">
            <Image
              src="/images/logo-white.svg"
              alt="Revve Logo"
              width={130}
              height={60}
              className="w-[90px] lg:w-[130px]"
            />
            <h2 className=" font-semibold text-2xl lg:text-5xl text-white hidden lg:flex">
              Send. Shop. Spend
            </h2>

            <Image
              src="/images/control.svg"
              alt="control"
              width={80}
              height={50}
              className="w-[90px] lg:w-[130px]"
            />
          </div>
          <div className="lg:hidden">
            <h2 className=" font-semibold text-5xl text-center pt-14 lg:pt-0 lg:text-5xl text-white ">
              Send. Shop. Spend
            </h2>
            <div className=" px-4 pt-2  absolute bottom-60">
              <p className="text-sm font-medium text-white ">
                Seamlessly bridge distances with our effortless remittance
                service. Send support, and financial care to your loved ones
                back home.
              </p>
            </div>
          </div>
          <div className="w-full  left-1/2 transform -translate-x-1/2 absolute top-[320px] lg:top-[55%] -translate-y-1/2 px-4 lg:px-20">
            <div className=" flex items-center justify-between">
              <div>
                <p className="title text-xl lg:text-5xl font-medium text-white">
                  Canada
                </p>
                <Image
                  src="/images/arrow-right.svg"
                  width={52}
                  height={52}
                  alt="right arrow"
                  className="w-8 lg:w-[52px]"
                />
              </div>
              <div className="flex flex-col items-end">
                <p className="text-xl lg:text-5xl font-medium text-white">
                  Nigeria
                </p>
                <div className="slide-out-move-right overflow-hidden w-8 lg:w-[52px]">
                  <Image
                    src="/images/left-arrow.svg"
                    width={52}
                    height={52}
                    alt="left arrow"
                    className="w-8 lg:w-[52px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" absolute bottom-6 lg:bottom-10  w-full px-4 lg:px-20">
            <div className=" flex items-center justify-between">
              <div className="max-w-[250px] hidden lg:block">
                <p className="text-sm font-medium text-white ">
                  Seamlessly bridge distances with our effortless remittance
                  service. Send support, and financial care to your loved ones
                  back home.
                </p>
              </div>
              <div>
                <p className=" pb-3 lg:pb-6 text-sm text-white/50">
                  Get Revve on your phone
                </p>

                <button
                  onClick={() => setOpenModal(true)}
                  className="button-alt-outline"
                  role="button"
                >
                  <span className="text">Download the app</span>
                  <span className=" whitespace-nowrap">Click to Download</span>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-28 lg:bottom-0 left-1/2 transform -translate-x-1/2 mb-8 w-full max-w-[380px] px-2 ">
            <div className=" bg-white/10 backdrop-blur-md rounded-2xl p-4 lg:p-5 w-full ">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="overflow-hidden size-10">
                    <Image
                      className="w-10 h-10 rounded-full slide-out-move-down"
                      width={32}
                      height={32}
                      src="/images/Phone/slide-1-gt.svg"
                      alt=""
                    />
                  </div>
                  <div className="font-medium text-white slide-out-move-up">
                    <div className="text-sm text-white/50 ">
                      Yesterday, 1:28 AM
                    </div>
                    <div className="font-bold">Transfer to Lil Sis</div>
                  </div>
                </div>
                <div className="font-bold text-white slide-out-move-right">
                  -₦862,912.94
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute  top-[55%] -translate-y-1/2 left-1/2 transform -translate-x-1/2 mb-8 w-full max-w-[390px] px-5 overflow-hidden ">
            <div className="  slide-out-move-right">
              <div className="flex items-center justify-between">
                <div className=" border-white border-4 rounded-full">
                  <Image
                    className=" rounded-full w-[44px] lg:w-[52px]"
                    width={52}
                    height={52}
                    src="/images/Phone/canada.svg"
                    alt=""
                  />
                </div>
                <h2 className="font-bold text-3xl lg:text-5xl text-white">
                  +C$750
                </h2>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="relative bg-cover bg-center w-full h-[700px] lg:h-[800px] bg-no-repeat  bg-[url('/images/slider-2.png')]">
          <div className="flex items-center justify-between px-4 lg:px-20 pt-4">
            <Image
              src="/images/logo-white.svg"
              alt="Revve Logo"
              width={130}
              height={60}
              className="w-[90px] lg:w-[130px]"
            />
            <h2 className=" font-semibold text-2xl lg:text-5xl text-white hidden lg:flex">
              Send. Shop. Spend
            </h2>

            <Image
              src="/images/control.svg"
              alt="control"
              width={80}
              height={50}
              className="w-[90px] lg:w-[130px]"
            />
          </div>
          <div className="lg:hidden">
            <h2 className=" font-semibold text-5xl text-center pt-14 lg:pt-0 lg:text-5xl text-white ">
              Send. Shop. Spend
            </h2>
            <div className=" px-4 pt-2  absolute bottom-60">
              <p className="text-sm font-medium text-white ">
                Seamlessly bridge distances with our effortless remittance
                service. Send support, and financial care to your loved ones
                back home.
              </p>
            </div>
          </div>
          <div className="w-full  left-1/2 transform -translate-x-1/2 absolute top-[320px] lg:top-[55%] -translate-y-1/2 px-4 lg:px-20">
            <div className=" flex items-center justify-between">
              <div>
                <p className="text-xl lg:text-5xl font-medium text-white">
                  Canada
                </p>
                <div className="slide-out-move-left overflow-hidden w-8 lg:w-[52px]">
                  <Image
                    src="/images/arrow-right.svg"
                    width={52}
                    height={52}
                    alt="right arrow"
                    className="w-8 lg:w-[52px]"
                  />
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className=" title text-xl lg:text-5xl font-medium text-white">
                  Ghana
                </p>
                <Image
                  src="/images/left-arrow.svg"
                  width={52}
                  height={52}
                  alt="left arrow"
                  className="w-8 lg:w-[52px]"
                />
              </div>
            </div>
          </div>

          <div className=" absolute bottom-6 lg:bottom-10  w-full px-4 lg:px-20">
            <div className=" flex items-center justify-between">
              <div className="max-w-[250px] hidden lg:block">
                <p className="text-sm font-medium text-white ">
                  Seamlessly bridge distances with our effortless remittance
                  service. Send support, and financial care to your loved ones
                  back home.
                </p>
              </div>
              <div>
                <p className=" pb-3 lg:pb-6 text-sm text-white/50">
                  Get Revve on your phone
                </p>

                <button
                  onClick={() => setOpenModal(true)}
                  className="button-alt-outline"
                  role="button"
                >
                  <span className="text">Download the app</span>
                  <span className=" whitespace-nowrap">Click to Download</span>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-28 lg:bottom-0 left-1/2 transform -translate-x-1/2 mb-8 w-full max-w-[380px] px-2 ">
            <div className=" bg-white/10 backdrop-blur-md rounded-2xl p-4 lg:p-5 w-full ">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="overflow-hidden size-10">
                    <Image
                      className="w-10 h-10 rounded-full slide-out-move-down"
                      width={32}
                      height={32}
                      src="/images/Phone/slide-2-ab.svg"
                      alt=""
                    />
                  </div>

                  <div className="font-medium text-white slide-out-move-up">
                    <div className="text-sm text-white/50 ">Today, 9:45 AM</div>
                    <div className="font-bold">Online transaction</div>
                  </div>
                </div>
                <div className="font-bold text-white slide-out-move-right">
                  -C$440.11
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute  top-[55%] -translate-y-1/2 left-1/2 transform -translate-x-1/2 mb-8 w-full max-w-[390px] px-5 overflow-hidden">
            <div className="  slide-out-move-left">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-3xl lg:text-5xl text-white">
                  +₵3,920
                </h2>
                <div className=" border-white border-4 rounded-full">
                  <Image
                    className="rounded-full w-[44px] lg:w-[52px]"
                    width={52}
                    height={52}
                    src="/images/Phone/Ghana.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>

      <SwiperSlide>
        <section className="relative bg-cover bg-center w-full h-[700px] lg:h-[800px] bg-no-repeat  bg-[url('/images/slider-3.png')]">
          <div className="flex items-center justify-between px-4 lg:px-20 pt-4">
            <Image
              src="/images/logo-white.svg"
              alt="Revve Logo"
              width={130}
              height={60}
              className="w-[90px] lg:w-[130px]"
            />
            <h2 className=" font-semibold text-2xl lg:text-5xl text-white hidden lg:flex">
              Send. Shop. Spend
            </h2>

            <Image
              src="/images/control.svg"
              alt="control"
              width={80}
              height={50}
              className="w-[90px] lg:w-[130px]"
            />
          </div>
          <div className="lg:hidden">
            <h2 className=" font-semibold text-5xl text-center pt-14 lg:pt-0 lg:text-5xl text-white ">
              Send. Shop. Spend
            </h2>
            <div className=" px-4 pt-2  absolute bottom-60">
              <p className="text-sm font-medium text-white ">
                Seamlessly bridge distances with our effortless remittance
                service. Send support, and financial care to your loved ones
                back home.
              </p>
            </div>
          </div>
          <div className="w-full  left-1/2 transform -translate-x-1/2 absolute top-[320px] lg:top-[55%] -translate-y-1/2 px-4 lg:px-20">
            <div className=" flex items-center justify-between">
              <div>
                <p className=" title text-xl lg:text-5xl font-medium text-white">
                  Nigeria
                </p>
                <Image
                  src="/images/arrow-right.svg"
                  width={52}
                  height={52}
                  alt="right arrow"
                  className="w-8 lg:w-[52px]"
                />
              </div>
              <div className="flex flex-col items-end">
                <p className="text-xl lg:text-5xl font-medium text-white">
                  Ghana
                </p>
                <div className="slide-out-move-right overflow-hidden w-8 lg:w-[52px]">
                  <Image
                    src="/images/left-arrow.svg"
                    width={52}
                    height={52}
                    alt="left arrow"
                    className="w-8 lg:w-[52px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" absolute bottom-6 lg:bottom-10  w-full px-4 lg:px-20">
            <div className=" flex items-center justify-between">
              <div className="max-w-[250px] hidden lg:block">
                <p className="text-sm font-medium text-white ">
                  Seamlessly bridge distances with our effortless remittance
                  service. Send support, and financial care to your loved ones
                  back home.
                </p>
              </div>
              <div>
                <p className=" pb-3 lg:pb-6 text-sm text-white/50">
                  Get Revve on your phone
                </p>

                <button
                  onClick={() => setOpenModal(true)}
                  className="button-alt-outline"
                  role="button"
                >
                  <span className="text">Download the app</span>
                  <span className=" whitespace-nowrap">Click to Download</span>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-28 lg:bottom-0 left-1/2 transform -translate-x-1/2 mb-8 w-full max-w-[380px] px-2 ">
            <div className=" bg-white/10 backdrop-blur-md rounded-2xl p-4 lg:p-5 w-full ">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="overflow-hidden size-10">
                    <Image
                      className="w-10 h-10 rounded-full slide-out-move-down overflow-hidden"
                      width={32}
                      height={32}
                      src="/images/Phone/slide-3-kfc.svg"
                      alt=""
                    />
                  </div>
                  <div className="font-medium text-white slide-out-move-up">
                    <div className="text-sm text-white/50 ">
                      Today, 11:28 AM
                    </div>
                    <div className="font-bold">Paid at KFC</div>
                  </div>
                </div>
                <div className="font-bold text-white slide-out-move-right">
                  -₵760.87
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute  top-[55%] -translate-y-1/2 left-1/2 transform -translate-x-1/2 mb-8 w-full max-w-[390px] px-5 overflow-hidden">
            <div className="  slide-out-move-right">
              <div className="flex items-center justify-between">
                <div className=" border-white border-4 rounded-full">
                  <Image
                    className=" rounded-full w-[44px] lg:w-[52px]"
                    width={52}
                    height={52}
                    src="/images/Phone/nigeria.svg"
                    alt=""
                  />
                </div>{" "}
                <h2 className="font-bold text-3xl lg:text-5xl text-white">
                  -₦98,000
                </h2>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="relative bg-cover bg-center w-full h-[700px] lg:h-[800px] bg-no-repeat  bg-[url('/images/slider-4.png')]">
          <div className="flex items-center justify-between px-4 lg:px-20 pt-4">
            <Image
              src="/images/logo-white.svg"
              alt="Revve Logo"
              width={130}
              height={60}
              className="w-[90px] lg:w-[130px]"
            />
            <h2 className=" font-semibold text-2xl lg:text-5xl text-white hidden lg:flex">
              Send. Shop. Spend
            </h2>

            <Image
              src="/images/control.svg"
              alt="control"
              width={80}
              height={50}
              className="w-[90px] lg:w-[130px]"
            />
          </div>
          <div className="lg:hidden">
            <h2 className=" font-semibold text-5xl text-center pt-14 lg:pt-0 lg:text-5xl text-white ">
              Send. Shop. Spend
            </h2>
            <div className=" px-4 pt-2  absolute bottom-60">
              <p className="text-sm font-medium text-white ">
                Seamlessly bridge distances with our effortless remittance
                service. Send support, and financial care to your loved ones
                back home.
              </p>
            </div>
          </div>
          <div className="w-full  left-1/2 transform -translate-x-1/2 absolute top-[320px] lg:top-[55%] -translate-y-1/2 px-4 lg:px-20">
            <div className=" flex items-center justify-between">
              <div>
                <p className="text-xl lg:text-5xl font-medium text-white">
                  Nigeria
                </p>
                <div className="slide-out-move-left overflow-hidden w-8 lg:w-[52px]">
                  <Image
                    src="/images/arrow-right.svg"
                    width={52}
                    height={52}
                    alt="right arrow"
                    className="w-8 lg:w-[52px]"
                  />
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className=" titlealt text-xl lg:text-5xl font-medium text-white">
                  Nigeria
                </p>
                <Image
                  src="/images/left-arrow.svg"
                  width={52}
                  height={52}
                  alt="left arrow"
                  className="w-8 lg:w-[52px]"
                />
              </div>
            </div>
          </div>

          <div className=" absolute bottom-6 lg:bottom-10  w-full px-4 lg:px-20">
            <div className=" flex items-center justify-between">
              <div className="max-w-[250px] hidden lg:block">
                <p className="text-sm font-medium text-white ">
                  Seamlessly bridge distances with our effortless remittance
                  service. Send support, and financial care to your loved ones
                  back home.
                </p>
              </div>
              <div>
                <p className=" pb-3 lg:pb-6 text-sm text-white/50">
                  Get Revve on your phone
                </p>

                <button
                  onClick={() => setOpenModal(true)}
                  className="button-alt-outline"
                  role="button"
                >
                  <span className="text">Download the app</span>
                  <span className=" whitespace-nowrap">Click to Download</span>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-28 lg:bottom-0 left-1/2 transform -translate-x-1/2 mb-8 w-full max-w-[380px] px-2 ">
            <div className=" bg-white/10 backdrop-blur-md rounded-2xl p-4 lg:p-5 w-full ">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="overflow-hidden size-10">
                    <Image
                      className="w-10 h-10 rounded-full slide-out-move-down"
                      width={32}
                      height={32}
                      src="/images/Phone/slide-4-mtn.svg"
                      alt=""
                    />
                  </div>

                  <div className="font-medium text-white slide-out-move-up ">
                    <div className="text-sm text-white/50 ">Today, 3:15 PM</div>
                    <div className="font-bold">Airtime top-up</div>
                  </div>
                </div>
                <div className="font-bold text-white slide-out-move-right">
                  -₦17,000
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute  top-[55%] -translate-y-1/2 left-1/2 transform -translate-x-1/2 mb-8 w-full max-w-[390px] px-5 overflow-hidden">
            <div className="  slide-out-move-left">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-3xl lg:text-5xl text-white">
                  -₦17,000
                </h2>
                <div className=" border-white border-4 rounded-full">
                  <Image
                    className=" rounded-full w-[44px] lg:w-[52px]"
                    width={52}
                    height={52}
                    src="/images/Phone/nigeria.svg"
                    alt=""
                  />
                </div>{" "}
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
