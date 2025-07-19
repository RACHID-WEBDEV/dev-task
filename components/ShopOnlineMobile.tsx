import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

const ShopOnlineMobile = ({ setOpenModal }: any) => {
  useGSAP(() => {
    // gsap.to("#product-1", {
    //   y: -380,
    //   // rotation: 360,
    //   // borderRadius: "100%",
    //   duration: 3,
    //   ease: "power2.inOut",
    //   scrollTrigger: {
    //     trigger: "#onlineShop-section",
    //     start: "top center",
    //     end: "bottom 10%",
    //     scrub: 1,
    //     markers: false, // set to true for debugging
    //   },
    // });

    // gsap.to("#product-2", {
    //   y: -300,
    //   // rotation: 360,
    //   // borderRadius: "100%",
    //   duration: 3,
    //   ease: "power2.inOut",
    //   scrollTrigger: {
    //     trigger: "#onlineShop-section",
    //     start: "top 50%",
    //     end: "bottom 10%",
    //     scrub: 1,
    //     markers: false, // set to true for debugging
    //   },
    // });
    gsap.to("#text-bodeymobile", {
      y: -100,
      // rotation: 360,
      // borderRadius: "100%",
      duration: 3,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#onlineShop-section-mobile",
        start: "top 50%",
        end: "bottom 10%",
        scrub: 1,
        markers: false, // set to true for debugging
      },
    });
  });

  return (
    <section
      id="onlineShop-section-mobile"
      className=" bg-[#f2f2f2] pb-10  w-full h-full  z-10"
    >
      <div className=" flex flex-col gap-2 lg:hidden">
        <div className=" flex items-center justify-center">
          <Image
            src="/images/iPhone-frame-2.png"
            width={320}
            height={460}
            alt=" phone frame"
          />
        </div>
        <div className=" px-4 pt-5 ">
          <h2 className="font-semibold text-4xl lg:text-5xl text-black max-w-lg tracking-wide">
            Shop Online
          </h2>
          <div className="mt-8 max-w-[420px] text-gray-800 space-y-4">
            <p className=" ">
              Experience the world at your fingertips with our seamless online
              shopping platform.
            </p>
            <p>
              From the latest fashion trends to must-have gadgets, shop the
              world&apos;s best brands and products from the comfort of your own
              home.
            </p>
            <p className="pt-6">Get Revve on your phone</p>
            <div>
              <button
                onClick={() => setOpenModal(true)}
                className="button-main"
                role="button"
              >
                <span className="text">Download the app</span>
                <span className=" whitespace-nowrap">Click to Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopOnlineMobile;
