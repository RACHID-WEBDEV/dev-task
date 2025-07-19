// import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
// const cardData = [
//   "/images/Wallet/ngn-wallet.svg",
//   "/images/Wallet/gha-wallet.svg",
//   "/images/Wallet/cad-wallet.svg",
//   "/images/Wallet/usd-wallet.svg",
// ];
const MultiCurrencyMobile = ({ setOpenModal }: any) => {
  const mobilescrollRef = useRef(null);

  // const mobilewalletCards = useRef([]);

  // useEffect(() => {
  //   const cards = mobilewalletCards.current;
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#wallet-card-section-mobile",
  //       start: "top center",
  //       markers: true, // set to true for debugging

  //       // toggleActions: 'play none none none',
  //     },
  //   });

  //   tl.to(cards[1], { y: -182, duration: 0.5 })
  //     .to(cards[2], { y: -364, duration: 0.5 }, "-=0.5")
  //     .to(cards[3], { y: -546, duration: 0.5 }, "-=0.5");
  // }, []);

  const mobilewalletCards = useRef<(HTMLDivElement | null)[]>([]);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const mobilecards = mobilewalletCards.current;
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#wallet-card-section-mobile",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub: true,
        markers: false, // set to true for debugging
      },
    });

    // if (mobilecards[0]) {
    //   tl.current.to(mobilecards[0], {
    //     y: 182,
    //     duration: 1.5,
    //     ease: "power2.inOut",
    //   });
    // }

    if (mobilecards[1]) {
      tl.current.to(mobilecards[1], {
        y: -182,
        duration: 1.5,
        ease: "power2.inOut",
      });
    }
    if (mobilecards[2]) {
      tl.current.to(
        mobilecards[2],
        { y: -364, duration: 1.5, ease: "power2.inOut" },
        "-=1.5"
      );
    }
    if (mobilecards[3]) {
      tl.current.to(
        mobilecards[3],
        { y: -546, duration: 1.5, ease: "power2.inOut" },
        "-=1.5"
      );
    }

    return () => {
      if (tl.current) tl.current.kill();

      ScrollTrigger.refresh();
    };
  }, []);

  // useGSAP(() => {
  //   gsap.set("#phone-frame-mobile", { y: 0 }); // optional: ensure clean start

  //   gsap.to("#phone-frame-mobile", {
  //     y: -150,
  //     duration: 8,
  //     delay: 4,
  //     ease: "power2.inOut",
  //     scrollTrigger: {
  //       trigger: "#mobile-card-currency-section",
  //       start: "top 80%",
  //       end: "bottom 20%",
  //       scrub: 1,
  //       markers: true,
  //     },
  //   });
  // }, []);
  // useGSAP(() => {
  //   gsap.to("#phone-frame-mobile", {
  //     y: -500,
  //     // rotation: 360,
  //     // borderRadius: "100%",
  //     duration: 1,
  //     // delay: 3,
  //     ease: "power2.inOut",
  //     scrollTrigger: {
  //       trigger: "#mobile-card-currency-section",
  //       start: "top center",
  //       end: "bottom center",
  //       // start: "top 50%",
  //       // end: "bottom 10%",
  //       scrub: 1,
  //       markers: true, // set to true for debugging
  //     },
  //   });
  // });

  return (
    <>
      <section
        id="mobile-card-currency-section"
        ref={mobilescrollRef}
        className="relative bg-cover bg-center w-full h-[650px] lg:h-screen bg-no-repeat bg-gray-100 overflow-hidden"
      >
        <div
          id="phone-frame-mobile"
          className="absolute bg-cover bg-center w-[330px] h-[655px] lg:h-[608px]  -top-[20px] left-1/2 transform -translate-x-1/2 bg-no-repeat bg-[url('/images/iPhone-frame.png')]"
        ></div>

        <div
          id="wallet-card-section-mobile"
          className="absolute bottom-[-200px] left-1/2 transform -translate-x-1/2  space-y-5 "
        >
          <div
            ref={(el) => {
              mobilewalletCards.current[0] = el;
            }}
            className="wallet-card-1 "
          >
            <Image
              src="/images/Wallet/ngn-wallet.svg"
              alt="send icon"
              width={320}
              height={182}
              className="wallet-ngn-icon  min-w-[260px] lg:w-[290px] 1xl:w-[320px]"
            />
          </div>
          <div
            ref={(el) => {
              mobilewalletCards.current[1] = el;
            }}
            className="wallet-card-2 "
          >
            <Image
              src="/images/Wallet/gha-wallet.svg"
              alt="send icon"
              width={320}
              height={182}
              className="wallet-gha-icon  min-w-[260px] lg:w-[290px] 1xl:w-[320px]"
            />
          </div>
          <div
            ref={(el) => {
              mobilewalletCards.current[2] = el;
            }}
            className="wallet-card-3 "
          >
            <Image
              src="/images/Wallet/cad-wallet.svg"
              alt="send icon"
              width={320}
              height={182}
              className="wallet-cad-icon  min-w-[260px] lg:w-[290px] 1xl:w-[320px]"
            />
          </div>
          <div
            ref={(el) => {
              mobilewalletCards.current[3] = el;
            }}
            className="wallet-card-4"
          >
            <Image
              src="/images/Wallet/usd-wallet.svg"
              alt="send icon"
              width={320}
              height={182}
              className="wallet-usd-icon  min-w-[260px] lg:w-[290px] 1xl:w-[320px]"
            />
          </div>
        </div>
        <div
          ref={(el) => {
            mobilewalletCards.current[4] = el;
          }}
          className="wallet-card-5 bg-white p-5 absolute w-full h-[182px] -bottom-28"
        >
          {/* <Image
            src="/images/Wallet/usd-wallet.svg"
            alt="send icon"
            width={320}
            height={182}
            className="wallet-usd-icon  min-w-[260px] lg:w-[290px] 1xl:w-[320px]"
          /> */}
        </div>

        {/* <div
          id="section-woman"
          className="absolute top-[28%] right-24 1xl:right-32 hidden lg:block"
        >
          <Image
            src="/images/girl-pressing-phone.png"
            alt="send icon"
            width={350}
            height={636}
            className="wallet-usd-icon w-auto h-auto"
          />
        </div> */}
        {/* <div
          id="section-texts"
          className="  absolute top-[30%] left-10 max-w-[400px] 1xl:max-w-lg"
        >
          <div className=" px-4  hidden lg:block">
            <h2 className="font-semibold text-2xl lg:text-4xl 1xl:text-5xl text-black  tracking-wide">
              Multi-currency Wallets Mo
            </h2>
            <div className="mt-8 max-w-[420px] text-gray-800 space-y-4">
              <p className=" ">
                Facilitate effortless management of multiple wallets, each
                dedicated to a specific currency, streamlining transactions and
                storage across various currencies.
              </p>
              <p>
                Enhance user experience with tailored wallets for different
                currencies, empowering efficient financial management and
                flexibility in global transactions
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={() => setOpenModal(true)}
                className="button-main"
                role="button"
              >
                <span className="text">Currency Converter</span>
                <span className=" whitespace-nowrap">Click to Convert</span>
              </button>
            </div>
          </div>
        </div> */}
        {/* <div className="h-screen w-full bg-amber-600 opacity-10 absolute"></div> */}
      </section>
      <div>
        <div className=" px-4 py-10 lg:hidden bg-white z-10 ">
          <h2 className="font-semibold text-4xl lg:text-5xl text-black max-w-lg tracking-wide">
            Multi-currency Wallets
          </h2>
          <div className="mt-8 max-w-[420px] text-gray-800 space-y-4">
            <p className=" ">
              Facilitate effortless management of multiple wallets, each
              dedicated to a specific currency, streamlining transactions and
              storage across various currencies.
            </p>
            <p>
              Enhance user experience with tailored wallets for different
              currencies, empowering efficient financial management and
              flexibility in global transactions
            </p>
          </div>
          <div className="pt-6">
            <button
              onClick={() => setOpenModal(true)}
              className="button-main"
              role="button"
            >
              <span className="text">Currency Converter</span>
              <span className=" whitespace-nowrap">Click to Convert</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiCurrencyMobile;
