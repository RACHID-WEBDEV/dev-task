import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

const ShopOnline = ({ setOpenModal }: any) => {
  useGSAP(() => {
    gsap.to("#product-1", {
      y: -380,
      // rotation: 360,
      // borderRadius: "100%",
      duration: 3,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#onlineShop-section",
        start: "top center",
        end: "bottom 10%",
        scrub: 1,
        markers: false, // set to true for debugging
      },
    });

    gsap.to("#product-2", {
      y: -300,
      // rotation: 360,
      // borderRadius: "100%",
      duration: 3,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#onlineShop-section",
        start: "top 50%",
        end: "bottom 10%",
        scrub: 1,
        markers: false, // set to true for debugging
      },
    });
    gsap.to("#text-bodey", {
      y: -100,
      // rotation: 360,
      // borderRadius: "100%",
      duration: 3,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#onlineShop-section",
        start: "top 50%",
        end: "bottom 10%",
        scrub: 1,
        markers: false, // set to true for debugging
      },
    });
  });

  return (
    <section
      id="onlineShop-section"
      className=" bg-[#f2f2f2] pb-10 lg:pb-40 w-full !h-screen  z-50"
    >
      <div className=" bg-cover bg-center w-full h-screen relative bg-no-repeat hidden lg:block">
        <div className="absolute bg-cover bg-center  w-[332px] 1xl:w-[412px] 2xl:w-[432px] -top-8 1xl:-top-10 2xl:top-2  h-[708px] 1xl:h-[800px] left-1/2 transform -translate-x-1/2 bg-no-repeat bg-[url('/images/iPhone-frame-2.png')]"></div>

        <div className="absolute -bottom-72 1xl:-bottom-60 right-8 hidden lg:block">
          <div className="flex items-center  gap-2">
            <div className="pt-80" id="product-1">
              <Image
                src="/images/prod-1.png"
                alt="prod icon - 1"
                width={120}
                height={792}
                className="prod-icon w-[100px] 1xl:w-[110px] 2xl:w-[120px] "
              />
            </div>
            <div className="pb-56 ">
              <Image
                src="/images/prod-2.png"
                alt="prod icon - 2"
                width={120}
                height={792}
                className="prod-icon w-[100px] 1xl:w-[110px] 2xl:w-[120px] "
              />
            </div>
            <div className="pt-12" id="product-2">
              <Image
                src="/images/prod-3.png"
                alt="prod icon - 1"
                width={200}
                height={792}
                className="prod-icon  w-[150px] 2xl:w-[200px]"
              />
            </div>
          </div>
        </div>
        <div
          className="  absolute bottom-16 1xl:bottom-20 2xl:bottom-48 left-10 max-w-[400px] 1xl:max-w-lg "
          id="text-bodey"
        >
          <div className=" px-4  hidden lg:block">
            <h2 className="font-semibold text-2xl lg:text-4xl 1xl:text-5xl text-black  tracking-wide">
              {/* Shop Online */}
              Service Marketplace
            </h2>
            <div className="mt-8 max-w-[420px] text-gray-800 space-y-4">
              <p className=" ">
                Explore trending styles and top tech from around the world, all
                in one app, all from your couch.
                {/* Experience the world at your fingertips with our seamless online
                shopping platform. */}
              </p>
              <p>
                From groceries, utility bills and healthcare, Revve’s
                marketplace lets you support your loved ones in real-time
                {/* From the latest fashion trends to must-have gadgets, shop the
                world&apos;s best brands and products from the comfort of your
                own home. */}
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
      </div>
      <div className=" flex flex-col gap-2 lg:hidden">
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

export default ShopOnline;
