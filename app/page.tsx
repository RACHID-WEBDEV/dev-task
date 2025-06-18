"use client";
import DownloadModal from "@/components/DownloadModal";
import FaqAccordion from "@/components/Faq";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade"; // Required for fade effect

import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
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
    <>
      <section>
        <main>
          {/* SECTION ONE */}
          {/* // className="relative bg-cover bg-center w-full h-full bg-no-repeat py-32  "
          // style={{ backgroundImage: "url(/images/Slider A.png)" }}
          // className="relative bg-cover bg-center w-full h-screen bg-no-repeat py-32"
          // style={{ backgroundImage: `url(${"/images/Slider A.png"})` }} */}
          {/* <section
            className="relative bg-cover bg-center w-full h-screen bg-no-repeat  bg-[url('/images/slider-4.png')]"
          >
            <div className="flex items-center justify-between px-4 lg:px-20 pt-4">
              <Image
                src="/images/logo-white.svg"
                alt="Revve Logo"
                width={130}
                height={60}
              />
              <h2 className=" font-semibold text-2xl lg:text-5xl text-white">
                Send. Shop. Spend
              </h2>
              <Image
                src="/images/control.svg"
                alt="control"
                width={80}
                height={50}
              />
            </div>
            <div className="w-full  left-1/2 transform -translate-x-1/2 absolute top-1/2 -translate-y-1/2 px-4 lg:px-20">
              <div className=" flex items-center justify-between">
                <div>
                  <p className="text-5xl font-medium text-white">Canada</p>
                  <Image
                    src="/images/arrow-right.svg"
                    width={52}
                    height={52}
                    alt="right arrow"
                  />
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-5xl font-medium text-white">Nigeria</p>
                  <Image
                    src="/images/left-arrow.svg"
                    width={52}
                    height={52}
                    alt="left arrow"
                  />
                </div>
              </div>
            </div>

            <div className=" absolute bottom-10  w-full px-4 lg:px-20">
              <div className=" flex items-center justify-between">
                <div className="max-w-[250px]">
                  <p className="text-sm font-medium text-white">
                    Seamlessly bridge distances with our effortless remittance
                    service. Send support, and financial care to your loved ones
                    back home.
                  </p>
                </div>
                <div>
                  <p className="pb-6 text-sm text-white/50">
                    Get Revve on your phone
                  </p>

                  <button
                    onClick={() => setOpenModal(true)}
                    className="button-alt-outline"
                    role="button"
                  >
                    <span className="text">Download the app</span>
                    <span className=" whitespace-nowrap">
                      Click to Download
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 w-full max-w-[350px] ">
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
                      <div className="text-sm text-white/50 ">
                        Today, 3:15 PM
                      </div>
                      <div className="font-bold">Airtime top-up</div>
                    </div>
                  </div>
                  <div className="font-bold text-white">+₦17,000</div>
                </div>
              </div>
            </div>

            <div className="absolute top-[350px] left-1/2 transform -translate-x-1/2 mb-8 w-full max-w-[350px] ">
              <div className="  ">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      className=" rounded-full"
                      width={52}
                      height={52}
                      src="/images/Phone/nigeria.svg"
                      alt=""
                    />
                  </div>
                  <h2 className="font-bold text-4xl lg:text-5xl text-white">
                    +₦17,000
                  </h2>
                </div>
              </div>
            </div>
          </section> */}
          <Swiper {...swiperOptions}>
            <SwiperSlide>
              <section className="relative bg-cover bg-center w-full h-[700px] lg:h-[950px] bg-no-repeat  bg-[url('/images/slider-1.png')]">
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
                    <p className="text-sm font-medium text-white">
                      Seamlessly bridge distances with our effortless remittance
                      service. Send support, and financial care to your loved
                      ones back home.
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
                      <p className="text-sm font-medium text-white">
                        Seamlessly bridge distances with our effortless
                        remittance service. Send support, and financial care to
                        your loved ones back home.
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
                        <span className=" whitespace-nowrap">
                          Click to Download
                        </span>
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
                          <div className="text-sm text-white/50 ">
                            Today, 3:15 PM
                          </div>
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
              <section className="relative bg-cover bg-center w-full h-[700px] lg:h-[950px] bg-no-repeat  bg-[url('/images/slider-2.png')]">
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
                    <p className="text-sm font-medium text-white">
                      Seamlessly bridge distances with our effortless remittance
                      service. Send support, and financial care to your loved
                      ones back home.
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
                      <p className="text-sm font-medium text-white">
                        Seamlessly bridge distances with our effortless
                        remittance service. Send support, and financial care to
                        your loved ones back home.
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
                        <span className=" whitespace-nowrap">
                          Click to Download
                        </span>
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
                          <div className="text-sm text-white/50 ">
                            Today, 3:15 PM
                          </div>
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
              <section className="relative bg-cover bg-center w-full h-[700px] lg:h-[950px] bg-no-repeat  bg-[url('/images/slider-3.png')]">
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
                    <p className="text-sm font-medium text-white">
                      Seamlessly bridge distances with our effortless remittance
                      service. Send support, and financial care to your loved
                      ones back home.
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
                      <p className="text-sm font-medium text-white">
                        Seamlessly bridge distances with our effortless
                        remittance service. Send support, and financial care to
                        your loved ones back home.
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
                        <span className=" whitespace-nowrap">
                          Click to Download
                        </span>
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
                          <div className="text-sm text-white/50 ">
                            Today, 3:15 PM
                          </div>
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
              <section className="relative bg-cover bg-center w-full h-[700px] lg:h-[950px] bg-no-repeat  bg-[url('/images/slider-4.png')]">
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
                    <p className="text-sm font-medium text-white">
                      Seamlessly bridge distances with our effortless remittance
                      service. Send support, and financial care to your loved
                      ones back home.
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
                      <p className="text-sm font-medium text-white">
                        Seamlessly bridge distances with our effortless
                        remittance service. Send support, and financial care to
                        your loved ones back home.
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
                        <span className=" whitespace-nowrap">
                          Click to Download
                        </span>
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
                          <div className="text-sm text-white/50 ">
                            Today, 3:15 PM
                          </div>
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
          {/* bg-[url('/images/test-bg.png')]  */}
          {/* SECTION TWO */}
          <section className="relative bg-cover bg-center w-full h-[850px] lg:h-[900px] bg-no-repeat bg-gray-300 overflow-hidden px-4">
            <div className="relative bg-cover bg-center w-[350px] h-[410px] lg:w-[424px] top-48 lg:top-56 lg:h-[493px] left-1/2 transform -translate-x-1/2 bg-no-repeat bg-[url('/images/slide-4.png')]">
              <div className=" flex items-center justify-center">
                <p className=" text-white max-w-[360px] font-medium  absolute bottom-6 leading-[1.3] px-4 lg:px-0">
                  Seamlessly bridge distances with our effortless remittance
                  service. Send support, and financial care to your loved ones
                  back home.
                </p>
              </div>
            </div>
            <div className="absolute bottom-28 lg:bottom-16 left-1/2 transform -translate-x-1/2 text-center w-full px-4 z-30">
              <h2 className="font-semibold text-4xl lg:text-5xl text-black mx-auto max-w-lg tracking-wide ">
                Send and Receive Money
              </h2>
            </div>

            <div className="absolute top-32 lg:top-14 -left-[50px] lg:-left-[70px] ">
              <Image
                src="/images/send.svg"
                alt="send icon"
                width={152}
                height={152}
                className="send-icon w-[100px] lg:w-[152px]"
              />
            </div>
            <div className="absolute bottom-14 lg:bottom-20 -left-[60px] lg:-left-[70px] ">
              <Image
                src="/images/woman-left.svg"
                alt="Next"
                width={191}
                height={280}
                className="woman-left-icon w-[120px] lg:w-[191px]"
              />
            </div>
            <div className="absolute top-[200px] right-10 lg:right-0 lg:left-[230px] hidden lg:block ">
              <Image
                src="/images/naira.svg"
                alt="Next"
                width={152}
                height={152}
                className="naira-icon w-[60px] lg:w-[152px]"
              />
            </div>

            <div className="absolute bottom-40 lg:bottom-20 -right-[55px] lg:-right-[70px] ">
              <Image
                src="/images/send.svg"
                alt="send icon"
                width={152}
                height={152}
                className="send-icon w-[100px] lg:w-[152px]"
              />
            </div>
            <div className="absolute top-6 lg:top-12 right-2 lg:right-[72px] ">
              <Image
                src="/images/woman-right.svg"
                alt="Next"
                width={152}
                height={180}
                className="woman-left-icon w-[120px] lg:w-[152px]"
              />
            </div>
            <div className="absolute top-[320px] right-[240px] hidden lg:block">
              <Image
                src="/images/paper-plane.svg"
                alt="Next"
                width={152}
                height={152}
                className="naira-icon w-[100px] lg:w-[152px]"
              />
            </div>
          </section>

          {/* SECTION THREE */}

          <section className="relative bg-cover bg-center w-full h-[900px] lg:h-[1200px] bg-no-repeat bg-gray-100 overflow-hidden">
            <div
              className="absolute bg-cover bg-center   w-[330px]
                  h-[660px] lg:w-[432px] bottom-0 lg:h-[708px] left-1/2 transform -translate-x-1/2 bg-no-repeat bg-[url('/images/iPhone-frame.png')]"
            ></div>
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2  space-y-5 ">
              <div className=" ">
                <Image
                  src="/images/Wallet/ngn-wallet.svg"
                  alt="send icon"
                  width={320}
                  height={182}
                  className="wallet-ngn-icon  min-w-[260px]"
                />
              </div>
              <div className=" ">
                <Image
                  src="/images/Wallet/gha-wallet.svg"
                  alt="send icon"
                  width={320}
                  height={182}
                  className="wallet-gha-icon"
                />
              </div>
              <div className=" ">
                <Image
                  src="/images/Wallet/cad-wallet.svg"
                  alt="send icon"
                  width={320}
                  height={182}
                  className="wallet-cad-icon"
                />
              </div>
              <div className=" ">
                <Image
                  src="/images/Wallet/usd-wallet.svg"
                  alt="send icon"
                  width={320}
                  height={182}
                  className="wallet-usd-icon"
                />
              </div>
            </div>

            <div className="absolute -bottom-14 right-32 hidden lg:block">
              <Image
                src="/images/girl-pressing-phone.png"
                alt="send icon"
                width={350}
                height={636}
                className="wallet-usd-icon"
              />
            </div>
            <div className="  absolute bottom-32 left-10  ">
              <div className=" px-4  hidden lg:block">
                <h2 className="font-semibold text-2xl lg:text-5xl text-black max-w-lg tracking-wide">
                  Multi-currency Wallets
                </h2>
                <div className="mt-8 max-w-[420px] text-gray-800 space-y-4">
                  <p className=" ">
                    Facilitate effortless management of multiple wallets, each
                    dedicated to a specific currency, streamlining transactions
                    and storage across various currencies.
                  </p>
                  <p>
                    Enhance user experience with tailored wallets for different
                    currencies, empowering efficient financial management and
                    flexibility in global transactions
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div>
            <div className=" px-4 py-10 lg:hidden ">
              <h2 className="font-semibold text-4xl lg:text-5xl text-black max-w-lg tracking-wide">
                Multi-currency Wallets
              </h2>
              <div className="mt-8 max-w-[420px] text-gray-800 space-y-4">
                <p className=" ">
                  Facilitate effortless management of multiple wallets, each
                  dedicated to a specific currency, streamlining transactions
                  and storage across various currencies.
                </p>
                <p>
                  Enhance user experience with tailored wallets for different
                  currencies, empowering efficient financial management and
                  flexibility in global transactions
                </p>
              </div>
            </div>
          </div>

          {/* SECTION FOUR */}
          <section className=" bg-[#f2f2f2] pb-10 lg:pb-40 overflow-hidden">
            <div className="relative bg-cover bg-center w-full h-[900px] bg-no-repeat hidden lg:block">
              <div className="absolute bg-cover bg-center  w-[402px] lg:w-[432px] top-0 lg:bottom-0 h-[708px] left-1/2 transform -translate-x-1/2 bg-no-repeat bg-[url('/images/iPhone-frame-2.png')]"></div>

              <div className="absolute -bottom-32 right-8 hidden lg:block">
                <div className="flex items-center  gap-2">
                  <div className="pt-80">
                    <Image
                      src="/images/prod-1.png"
                      alt="prod icon - 1"
                      width={120}
                      height={792}
                      className="prod-icon"
                    />
                  </div>
                  <div className="pb-56">
                    <Image
                      src="/images/prod-2.png"
                      alt="prod icon - 2"
                      width={120}
                      height={792}
                      className="prod-icon"
                    />
                  </div>
                  <div className="pt-12">
                    <Image
                      src="/images/prod-3.png"
                      alt="prod icon - 1"
                      width={200}
                      height={792}
                      className="prod-icon"
                    />
                  </div>
                </div>
              </div>
              <div className="  absolute bottom-32 left-10  ">
                <div className=" px-4  hidden lg:block">
                  <h2 className="font-semibold text-2xl lg:text-5xl text-black max-w-lg tracking-wide">
                    Shop Online
                  </h2>
                  <div className="mt-8 max-w-[420px] text-gray-800 space-y-4">
                    <p className=" ">
                      Experience the world at your fingertips with our seamless
                      online shopping platform.
                    </p>
                    <p>
                      From the latest fashion trends to must-have gadgets, shop
                      the world&apos;s best brands and products from the comfort
                      of your own home.
                    </p>
                    <p className="pt-6">Get Revve on your phone</p>
                    <div>
                      <button
                        onClick={() => setOpenModal(true)}
                        className="button-main"
                        role="button"
                      >
                        <span className="text">Download the app</span>
                        <span className=" whitespace-nowrap">
                          Click to Download
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-8 lg:hidden">
              <div className=" flex items-center justify-center">
                <Image
                  src="/images/iPhone-frame-2.png"
                  width={320}
                  height={560}
                  alt=" phone frame"
                />
              </div>
              <div className=" px-4 ">
                <h2 className="font-semibold text-4xl lg:text-5xl text-black max-w-lg tracking-wide">
                  Shop Online
                </h2>
                <div className="mt-8 max-w-[420px] text-gray-800 space-y-4">
                  <p className=" ">
                    Experience the world at your fingertips with our seamless
                    online shopping platform.
                  </p>
                  <p>
                    From the latest fashion trends to must-have gadgets, shop
                    the world&apos;s best brands and products from the comfort
                    of your own home.
                  </p>
                  <p className="pt-6">Get Revve on your phone</p>
                  <div>
                    <button
                      onClick={() => setOpenModal(true)}
                      className="button-main"
                      role="button"
                    >
                      <span className="text">Download the app</span>
                      <span className=" whitespace-nowrap">
                        Click to Download
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION FIVE */}

          <section className="relative bg-cover bg-center w-full h-[850px] lg:h-[950px] bg-no-repeat bg-[url('/images/pay-bills.png')] overflow-hidden">
            <div className=" absolute  top-[60%] transform -translate-y-1/2 w-full">
              <div className=" flex justify-between flex-wrap gap-8 px-4 lg:pt-0 lg:px-20">
                <div className=" flex-1  ">
                  <div className=" px-4 ">
                    <h2 className="font-semibold text-4xl lg:text-5xl text-white max-w-lg tracking-wide">
                      Pay Bills
                    </h2>
                    <div className="mt-8 max-w-[330px] text-gray-100 font-medium space-y-4">
                      <p className=" leading-[1.3]">
                        Say goodbye to long queues and endless processes—our
                        platform offers a seamless solution for paying bills
                        instantly without any hiccups.
                      </p>

                      <p className="pt-6">Get Revve on your phone</p>
                      <div>
                        <button
                          onClick={() => setOpenModal(true)}
                          className="button-alt"
                          role="button"
                        >
                          <span className="text">Coming soon</span>
                          <span className=" whitespace-nowrap">
                            Join Waitlist
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:pt-20 mb-10">
                  <Image
                    src="/images/pay-bills-Calendar.png"
                    alt="send icon"
                    width={340}
                    height={366}
                    className="wallet-usd-icon"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* SECTION SIX FAQ */}

          <section className="relative bg-cover bg-center w-full h-[1000px] bg-no-repeat bg-[#4F0072] overflow-hidden">
            <div className=" absolute  top-1/2 transform -translate-y-1/2 w-full">
              <div className=" flex items-center flex-wrap justify-between px-4 lg:px-20">
                <div className="  ">
                  <div className=" px-4 ">
                    <h2 className="font-semibold text-2xl lg:text-5xl text-white max-w-lg tracking-wide">
                      FAQs
                    </h2>
                    <div className="mt-8 max-w-[330px] text-gray-100 font-medium space-y-4">
                      <p className=" leading-[1.3]">
                        Here are some basic questions and answers to help you
                        get started.
                      </p>

                      <p className="pt-6">Get Revve on your phone</p>
                      <div>
                        <button
                          onClick={() => setOpenModal(true)}
                          className="button-alt"
                          role="button"
                        >
                          <span className="text">Download the app</span>
                          <span className=" whitespace-nowrap">
                            Click to Download
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-10 lg:pt-20 max-w-2xl">
                  <FaqAccordion />
                </div>
              </div>
            </div>
          </section>

          {/* SECTION SEVEN */}
          <section className="relative p-4 lg:p-20 lg:py-24 bg-primary h-[1100px] overflow-hidden">
            <div className="backdrop-blur transition-colors bg-[#6D1F8F]/40 rounded-2xl p-2 lg:p-10 py-6 lg:py-16 z-20  max-w-xs lg:max-w-7xl left-1/2 transform  -translate-x-1/2  absolute w-full">
              <div className="lg:flex items-center">
                <div className="lg:w-1/2 lg:pl-16 ">
                  <div className="  ">
                    <div className=" px-4 ">
                      <h2 className="font-semibold text-2xl lg:text-5xl text-white max-w-lg tracking-wide">
                        Get in touch
                      </h2>
                      <div className="mt-8 max-w-[330px] text-gray-100 font-medium space-y-4">
                        <p className=" leading-[1.3]">
                          Do you have any questions or feedback We&apos;d love
                          to hear from you.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className=" p-4  text-white pt-10">
                    <div className="mb-4 flex items-center space-x-2">
                      <span className="flex size-6 shrink-0 items-center justify-center ">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.1152 16C15.1545 16 16 15.1523 16 14.1102V11.5906C16 11.3193 15.827 11.0787 15.5705 10.9932L11.8097 9.73338C11.6256 9.67127 11.4244 9.69953 11.2625 9.80657L9.66354 10.8751C7.97014 10.0656 5.9608 8.0509 5.15334 6.35305L6.21906 4.74994C6.32641 4.58814 6.35342 4.38576 6.29206 4.20124L5.03552 0.430572C4.95028 0.17348 4.71037 0 4.43979 0H1.88482C0.845487 0 0 0.838845 0 1.8809C0 9.13852 6.87657 16 14.1152 16Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <div>
                        <a
                          href="tel:123-123-456"
                          className="text-base font-medium hover:text-gray-300 "
                        >
                          +1(343)338-5190
                        </a>
                      </div>
                    </div>
                    <div className="mb-4 flex items-center space-x-2">
                      <span className="flex size-6 shrink-0 items-center justify-center ">
                        <svg
                          width="16"
                          height="14"
                          viewBox="0 0 16 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.17442 0.5L12.8256 0.5C13.1765 0.499992 13.4793 0.499984 13.7299 0.517347C13.9938 0.535637 14.2577 0.575855 14.5185 0.685543C15.1065 0.932933 15.5738 1.40746 15.8173 2.00471C15.9253 2.26953 15.9649 2.53758 15.983 2.80557C16 3.06009 16 3.36761 16 3.72401V10.276C16 10.6324 16 10.9399 15.983 11.1944C15.9649 11.4624 15.9253 11.7305 15.8173 11.9953C15.5738 12.5925 15.1065 13.0671 14.5185 13.3144C14.2577 13.4241 13.9938 13.4643 13.7299 13.4827C13.4793 13.5 13.1765 13.5 12.8256 13.5H3.17441C2.82349 13.5 2.5207 13.5 2.2701 13.4827C2.00623 13.4643 1.7423 13.4241 1.48156 13.3144C0.893496 13.0671 0.426272 12.5925 0.182688 11.9953C0.0746883 11.7305 0.0350883 11.4624 0.0170803 11.1944C-1.57282e-05 10.9399 -7.65387e-06 10.6324 3.46134e-07 10.276L3.46134e-07 3.72402C-7.65387e-06 3.36761 -1.57282e-05 3.06009 0.0170803 2.80557C0.0350883 2.53758 0.0746883 2.26953 0.182688 2.00471C0.426272 1.40746 0.893496 0.932933 1.48156 0.685543C1.7423 0.575855 2.00623 0.535637 2.2701 0.517347C2.5207 0.499984 2.8235 0.499992 3.17442 0.5ZM1.85396 2.35069C2.14491 2.01299 2.65032 1.97877 2.98283 2.27426L7.4732 6.26469C7.7748 6.53273 8.2252 6.53273 8.5268 6.26469L13.0172 2.27426C13.3497 1.97877 13.8551 2.01299 14.146 2.35069C14.437 2.6884 14.4033 3.2017 14.0708 3.49719L9.5804 7.48766C8.67552 8.29179 7.32448 8.29179 6.4196 7.48766L1.92922 3.49719C1.59671 3.2017 1.56302 2.6884 1.85396 2.35069Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <div>
                        <a
                          href="mailto:hello@revveme.com"
                          className="text-base font-medium not-italic hover:text-gray-300 "
                        >
                          hello@revveme.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="flex size-6 shrink-0 items-center justify-center ">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.1716 1.49112C11.4171 0.873347 10.5349 0.430718 9.58867 0.195159C8.64241 -0.0404 7.65567 -0.0630176 6.69961 0.128938C5.47032 0.380967 4.33938 0.981049 3.44152 1.8577C2.54366 2.73435 1.91672 3.85062 1.63538 5.07354C1.35404 6.29645 1.43016 7.57447 1.85468 8.75534C2.27919 9.93621 3.03421 10.9702 4.02979 11.734C5.16646 12.566 6.13426 13.6068 6.88143 14.801L7.39052 15.6475C7.45517 15.755 7.54655 15.844 7.65577 15.9058C7.76498 15.9675 7.88832 16 8.01379 16C8.13926 16 8.2626 15.9675 8.37181 15.9058C8.48103 15.844 8.57241 15.755 8.63706 15.6475L9.12507 14.8344C9.7757 13.6907 10.6628 12.6989 11.7273 11.9253C12.5619 11.3511 13.2516 10.5907 13.7421 9.70432C14.2326 8.81788 14.5104 7.82959 14.5535 6.81743C14.5967 5.80527 14.4041 4.79692 13.9908 3.87195C13.5776 2.94698 12.955 2.13069 12.1723 1.48748L12.1716 1.49112ZM8.01306 9.45549C7.4377 9.45549 6.87526 9.28488 6.39686 8.96522C5.91846 8.64557 5.54559 8.19123 5.32541 7.65966C5.10523 7.1281 5.04762 6.54317 5.15987 5.97886C5.27211 5.41456 5.54918 4.8962 5.95602 4.48936C6.36287 4.08252 6.88122 3.80545 7.44553 3.6932C8.00984 3.58095 8.59476 3.63856 9.12633 3.85875C9.65789 4.07893 10.1122 4.4518 10.4319 4.93019C10.7515 5.40859 10.9222 5.97104 10.9222 6.5464C10.9222 7.31794 10.6157 8.05788 10.0701 8.60344C9.52454 9.149 8.7846 9.45549 8.01306 9.45549Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <div>
                        <address className="text-base font-medium not-gray-300 ">
                          2482 Yonge St Toronto ON M4P 2H5
                        </address>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-2 lg:mb-0 w-full max-w-md px-2 lg:px-12 pt-4 lg:pt-0">
                  <form id="contact-form" method="post">
                    <div className="flex flex-col">
                      <div className="mb-6 ">
                        <label
                          htmlFor="name"
                          className="mb-1 block font-semibold text-sm text-white dark:text-white"
                        >
                          Firstname
                        </label>
                        <input
                          type="text"
                          id="default-input"
                          placeholder="Firstname Lastname"
                          className="bg-transparent border text-gray-100 border-white/30 hover:border-white/50 text-sm rounded-lg block placeholder:text-[#CA92E3] font-medium w-full p-2.5 py-3 outline-none "
                        />
                      </div>
                      <div className="mb-6 ">
                        <label
                          htmlFor="email"
                          className="mb-1 block font-semibold text-sm text-white dark:text-white"
                        >
                          Email Address
                        </label>
                        <input
                          type="text"
                          id="default-input"
                          placeholder="johndoe@gmail.com"
                          className="bg-transparent border text-gray-100 border-white/30 hover:border-white/50  text-sm rounded-lg block placeholder:text-[#CA92E3] font-medium w-full p-2.5 py-3 outline-none "
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="mb-1 block font-semibold text-sm text-white dark:text-white"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="contact-form-input w-full text-gray-100 outline-none rounded-lg border border-white/30 py-3 p-2.5 hover:border-white/50 ring-0 placeholder:text-[#CA92E3] font-medium"
                        placeholder="Type here.."
                        name="message"
                        rows={5}
                        defaultValue={""}
                      />
                    </div>

                    <div>
                      <button className="button-alt w-full" role="button">
                        <span className="text">Send message</span>
                        <span className=" whitespace-nowrap">Send message</span>
                      </button>
                    </div>
                    <div
                      id="contact-form-notice"
                      className="relative mt-4 hidden rounded-lg border border-transparent p-4"
                    />
                  </form>
                </div>
              </div>
            </div>

            <div className="absolute lg:bottom-12 bottom-40 left-0 ">
              <Image
                src="/images/message-vector.svg"
                alt="send icon"
                width={197}
                height={138}
                className="vector-icon w-[80px] lg:w-[197px]"
              />
            </div>
            <div className="absolute top-20 -right-8 lg:right-0 z-30">
              <Image
                src="/images/inbox-vector.svg"
                alt="inbox icon"
                width={227}
                height={228}
                className="vector-icon w-[100px] lg:w-[227px]"
              />
            </div>
            <div className="absolute top-44 lg:top-80 right-0 ">
              <Image
                src="/images/call-vector.svg"
                alt="call icon"
                width={288}
                height={238}
                className="vector-icon w-[120px] lg:w-[288px]"
              />
            </div>
            <div className="absolute bottom-6 left-0 w-full ">
              <div className=" pt-20 ">
                <div className=" flex items-center  justify-center lg:justify-between flex-wrap w-full gap-4 px-4  lg:px-20">
                  <div className=" flex items-center gap-4">
                    <a
                      href="https://www.facebook.com/revveme"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_267_889)">
                          <path
                            d="M2.40383 0.0175781C1.07544 0.0175781 0.000214915 1.09473 0 2.42011C0 3.74679 1.07522 4.82373 2.40404 4.82373C3.72921 4.82373 4.80593 3.74679 4.80593 2.42011C4.80593 1.09452 3.72899 0.0175781 2.40383 0.0175781Z"
                            fill="white"
                          />
                          <path
                            d="M0.330536 6.64648H4.4756V19.9828H0.330536V6.64648Z"
                            fill="white"
                          />
                          <path
                            d="M15.0279 6.31543C13.0116 6.31543 11.6596 7.42095 11.1062 8.46931H11.0507V6.64704H7.07523H7.07501V19.9832H11.2164V13.3857C11.2164 11.6464 11.5476 9.96168 13.7041 9.96168C15.8296 9.96168 15.8579 11.9509 15.8579 13.4972V19.983H20V12.6681C20 9.07752 19.2252 6.31543 15.0279 6.31543Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_267_889">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/revveme"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_267_911)">
                          <path
                            d="M17.0703 0H2.92969C1.31439 0 0 1.31439 0 2.92969V17.0703C0 18.6856 1.31439 20 2.92969 20H8.82812V12.9297H6.48438V9.41406H8.82812V7.03125C8.82812 5.09262 10.4051 3.51562 12.3438 3.51562H15.8984V7.03125H12.3438V9.41406H15.8984L15.3125 12.9297H12.3438V20H17.0703C18.6856 20 20 18.6856 20 17.0703V2.92969C20 1.31439 18.6856 0 17.0703 0Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_267_911">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/revveme"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 3.79875C19.2563 4.125 18.4637 4.34125 17.6375 4.44625C18.4875 3.93875 19.1363 3.14125 19.4412 2.18C18.6488 2.6525 17.7738 2.98625 16.8412 3.1725C16.0887 2.37125 15.0162 1.875 13.8462 1.875C11.5763 1.875 9.74875 3.7175 9.74875 5.97625C9.74875 6.30125 9.77625 6.61375 9.84375 6.91125C6.435 6.745 3.41875 5.11125 1.3925 2.6225C1.03875 3.23625 0.83125 3.93875 0.83125 4.695C0.83125 6.115 1.5625 7.37375 2.6525 8.1025C1.99375 8.09 1.3475 7.89875 0.8 7.5975C0.8 7.61 0.8 7.62625 0.8 7.6425C0.8 9.635 2.22125 11.29 4.085 11.6712C3.75125 11.7625 3.3875 11.8062 3.01 11.8062C2.7475 11.8062 2.4825 11.7913 2.23375 11.7362C2.765 13.36 4.2725 14.5538 6.065 14.5925C4.67 15.6838 2.89875 16.3412 0.98125 16.3412C0.645 16.3412 0.3225 16.3263 0 16.285C1.81625 17.4563 3.96875 18.125 6.29 18.125C13.835 18.125 17.96 11.875 17.96 6.4575C17.96 6.27625 17.9538 6.10125 17.945 5.9275C18.7588 5.35 19.4425 4.62875 20 3.79875Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/revveme/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 0H5C2.24 0 0 2.24 0 5V15C0 17.76 2.24 20 5 20H15C17.76 20 20 17.76 20 15V5C20 2.24 17.76 0 15 0ZM10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15ZM15.35 5.62C14.8 5.62 14.35 5.17 14.35 4.62C14.35 4.07 14.8 3.62 15.35 3.62C15.9 3.62 16.35 4.07 16.35 4.62C16.35 5.17 15.9 5.62 15.35 5.62Z"
                          fill="white"
                        />
                        <path
                          d="M9.99997 13C11.6568 13 13 11.6569 13 10C13 8.34315 11.6568 7 9.99997 7C8.34312 7 6.99997 8.34315 6.99997 10C6.99997 11.6569 8.34312 13 9.99997 13Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>

                  <ul className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 text-white text-base font-medium">
                    <li className="">
                      <Link href="/about"> About Us</Link>
                    </li>
                    <li className="">
                      <Link href="/">Privacy Policy</Link>
                    </li>
                    <li className="">
                      <Link href="/">Terms of use</Link>
                    </li>
                    <li className="">©2025 Revve. All rights reserved</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
      </section>
      {openModal && <DownloadModal setOpenModal={setOpenModal} />}
    </>
  );
}
