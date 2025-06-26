"use client";
import React from "react";
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

const Hero = ({ setOpenModal }: { setOpenModal: any }) => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });
    // const paragraphSplit2 = new SplitText(".subtitle2", { type: "lines" });

    // heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.inOut",
      stagger: 0.06,
      delay: 1,
    });

    // gsap.from(paragraphSplit2.lines, {
    //   opacity: 0,
    //   yPercent: 100,
    //   duration: 1.8,
    //   ease: "expo.inOut",
    //   stagger: 0.06,
    //   delay: 4,
    // });
  }, []);
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
    <Swiper {...swiperOptions}>
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
            <h2 className=" title font-semibold text-2xl lg:text-5xl text-white hidden lg:flex">
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
            <h2 className=" title font-semibold text-5xl text-center pt-14 lg:pt-0 lg:text-5xl text-white ">
              Send. Shop. Spend
            </h2>
            <div className=" px-4 pt-2  absolute bottom-60">
              <p className="text-sm font-medium text-white subtitle">
                Seamlessly bridge distances with our effortless remittance
                service. Send support, and financial care to your loved ones
                back home.
              </p>
            </div>
          </div>
          <div className="w-full  left-1/2 transform -translate-x-1/2 absolute top-1/2 -translate-y-1/2 px-4 lg:px-20">
            <div className=" flex items-center justify-between">
              <div>
                <p className="text-xl lg:text-5xl font-medium text-white">
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
                <p className="text-sm font-medium text-white subtitle">
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
                  <Image
                    className="w-10 h-10 rounded-full"
                    width={32}
                    height={32}
                    src="/images/Phone/slide-1-gt.svg"
                    alt=""
                  />
                  <div className="font-medium text-white">
                    <div className="text-sm text-white/50 ">Today, 3:15 PM</div>
                    <div className="font-bold">Airtime top-up</div>
                  </div>
                </div>
                <div className="font-bold text-white">+₦17,000</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute top-[300px] lg:top-[400px] left-1/2 transform -translate-x-1/2 mb-8 w-full max-w-[390px] px-5 ">
            <div className="  ">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    className=" rounded-full w-[44px] lg:w-[52px]"
                    width={52}
                    height={52}
                    src="/images/Phone/nigeria.svg"
                    alt=""
                  />
                </div>
                <h2 className="font-bold text-3xl lg:text-5xl text-white">
                  +₦17,000
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
            <h2 className=" title font-semibold text-2xl lg:text-5xl text-white hidden lg:flex">
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
            <h2 className=" title font-semibold text-5xl text-center pt-14 lg:pt-0 lg:text-5xl text-white ">
              Send. Shop. Spend
            </h2>
            <div className=" px-4 pt-2  absolute bottom-60">
              <p className="text-sm font-medium text-white subtitle">
                Seamlessly bridge distances with our effortless remittance
                service. Send support, and financial care to your loved ones
                back home.
              </p>
            </div>
          </div>
          <div className="w-full  left-1/2 transform -translate-x-1/2 absolute top-1/2 -translate-y-1/2 px-4 lg:px-20">
            <div className=" flex items-center justify-between">
              <div>
                <p className="text-xl lg:text-5xl font-medium text-white">
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
                <p className="text-sm font-medium text-white subtitle">
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
                  <Image
                    className="w-10 h-10 rounded-full"
                    width={32}
                    height={32}
                    src="/images/Phone/slide-1-gt.svg"
                    alt=""
                  />
                  <div className="font-medium text-white">
                    <div className="text-sm text-white/50 ">Today, 3:15 PM</div>
                    <div className="font-bold">Airtime top-up</div>
                  </div>
                </div>
                <div className="font-bold text-white">+₦17,000</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute top-[300px] lg:top-[400px] left-1/2 transform -translate-x-1/2 mb-8 w-full max-w-[390px] px-5 ">
            <div className="  ">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    className=" rounded-full w-[44px] lg:w-[52px]"
                    width={52}
                    height={52}
                    src="/images/Phone/nigeria.svg"
                    alt=""
                  />
                </div>
                <h2 className="font-bold text-3xl lg:text-5xl text-white">
                  +₦17,000
                </h2>
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
            <h2 className=" title font-semibold text-2xl lg:text-5xl text-white hidden lg:flex">
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
            <h2 className=" title font-semibold text-5xl text-center pt-14 lg:pt-0 lg:text-5xl text-white ">
              Send. Shop. Spend
            </h2>
            <div className=" px-4 pt-2  absolute bottom-60">
              <p className="text-sm font-medium text-white subtitle">
                Seamlessly bridge distances with our effortless remittance
                service. Send support, and financial care to your loved ones
                back home.
              </p>
            </div>
          </div>
          <div className="w-full  left-1/2 transform -translate-x-1/2 absolute top-1/2 -translate-y-1/2 px-4 lg:px-20">
            <div className=" flex items-center justify-between">
              <div>
                <p className="text-xl lg:text-5xl font-medium text-white">
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
                <p className="text-sm font-medium text-white subtitle">
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
                  <Image
                    className="w-10 h-10 rounded-full"
                    width={32}
                    height={32}
                    src="/images/Phone/slide-1-gt.svg"
                    alt=""
                  />
                  <div className="font-medium text-white">
                    <div className="text-sm text-white/50 ">Today, 3:15 PM</div>
                    <div className="font-bold">Airtime top-up</div>
                  </div>
                </div>
                <div className="font-bold text-white">+₦17,000</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute top-[300px] lg:top-[400px] left-1/2 transform -translate-x-1/2 mb-8 w-full max-w-[390px] px-5 ">
            <div className="  ">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    className=" rounded-full w-[44px] lg:w-[52px]"
                    width={52}
                    height={52}
                    src="/images/Phone/nigeria.svg"
                    alt=""
                  />
                </div>
                <h2 className="font-bold text-3xl lg:text-5xl text-white">
                  +₦17,000
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
            <h2 className=" title font-semibold text-2xl lg:text-5xl text-white hidden lg:flex">
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
            <h2 className=" title font-semibold text-5xl text-center pt-14 lg:pt-0 lg:text-5xl text-white ">
              Send. Shop. Spend
            </h2>
            <div className=" px-4 pt-2  absolute bottom-60">
              <p className="text-sm font-medium text-white subtitle">
                Seamlessly bridge distances with our effortless remittance
                service. Send support, and financial care to your loved ones
                back home.
              </p>
            </div>
          </div>
          <div className="w-full  left-1/2 transform -translate-x-1/2 absolute top-1/2 -translate-y-1/2 px-4 lg:px-20">
            <div className=" flex items-center justify-between">
              <div>
                <p className="text-xl lg:text-5xl font-medium text-white">
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
                <p className="text-sm font-medium text-white subtitle">
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
                  <Image
                    className="w-10 h-10 rounded-full"
                    width={32}
                    height={32}
                    src="/images/Phone/slide-1-gt.svg"
                    alt=""
                  />
                  <div className="font-medium text-white">
                    <div className="text-sm text-white/50 ">Today, 3:15 PM</div>
                    <div className="font-bold">Airtime top-up</div>
                  </div>
                </div>
                <div className="font-bold text-white">+₦17,000</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute top-[300px] lg:top-[400px] left-1/2 transform -translate-x-1/2 mb-8 w-full max-w-[390px] px-5 ">
            <div className="  ">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    className=" rounded-full w-[44px] lg:w-[52px]"
                    width={52}
                    height={52}
                    src="/images/Phone/nigeria.svg"
                    alt=""
                  />
                </div>
                <h2 className="font-bold text-3xl lg:text-5xl text-white">
                  +₦17,000
                </h2>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
