import { useGSAP } from "@gsap/react";
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
const MultiCurrency = () => {
  const scrollRef = useRef(null);

  // const walletCards = useRef([]);

  // useEffect(() => {
  //   const cards = walletCards.current;
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#wallet-card-section",
  //       start: "top center",
  //       markers: true, // set to true for debugging

  //       // toggleActions: 'play none none none',
  //     },
  //   });

  //   tl.to(cards[1], { y: -182, duration: 0.5 })
  //     .to(cards[2], { y: -364, duration: 0.5 }, "-=0.5")
  //     .to(cards[3], { y: -546, duration: 0.5 }, "-=0.5");
  // }, []);

  const walletCards = useRef<HTMLElement[]>([]);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const cards = walletCards.current;
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#wallet-card-section",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub: true,
        markers: false, // set to true for debugging
      },
    });

    tl.current
      .to(cards[1], { y: -182, duration: 0.5, ease: "power2.inOut" })
      .to(cards[2], { y: -364, duration: 0.5, ease: "power2.inOut" }, "-=0.5")
      .to(cards[3], { y: -546, duration: 0.5, ease: "power2.inOut" }, "-=0.5");

    return () => {
      if (tl.current) tl.current.kill();

      ScrollTrigger.refresh();
    };
  }, []);

  useGSAP(() => {
    gsap.to("#phone-frame", {
      y: -260,
      // rotation: 360,
      // borderRadius: "100%",
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#card-currency-section",
        start: "top 20%",
        end: "bottom 30%",
        scrub: 1,
        markers: false, // set to true for debugging
      },
    });

    // gsap.to("#section-texts", {
    //   y: -400,
    //   // opacity: 0,
    //   duration: 1,
    //   ease: "power2.inOut",
    //   scrollTrigger: {
    //     trigger: "#card-currency-section",
    //     start: "top 20%",
    //     end: "bottom 30%",
    //     scrub: 1,
    //     markers: true, // set to true for debugging
    //   },
    // });
    // gsap.to("#section-woman", {
    //   y: -400,
    //   // opacity: 0,
    //   duration: 1,
    //   ease: "power2.inOut",
    //   scrollTrigger: {
    //     trigger: "#card-currency-section",
    //     start: "top 20%",
    //     end: "bottom 30%",
    //     scrub: 1,
    //     markers: true, // set to true for debugging
    //   },
    // });
  });

  return (
    <>
      <section
        id="card-currency-section"
        ref={scrollRef}
        className="relative bg-cover bg-center w-full h-[900px] lg:h-[1000px] bg-no-repeat bg-gray-100 overflow-hidden"
      >
        <div
          id="phone-frame"
          className="absolute bg-cover bg-center w-[330px]
                      h-[660px] lg:w-[432px] top-60 lg:h-[708px] left-1/2 transform -translate-x-1/2 bg-no-repeat bg-[url('/images/iPhone-frame.png')]"
        ></div>

        <div
          id="wallet-card-section"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2  space-y-5 "
        >
          <div
            ref={(el) => (walletCards.current[0] = el)}
            className="wallet-card-1 "
          >
            <Image
              src="/images/Wallet/ngn-wallet.svg"
              alt="send icon"
              width={320}
              height={182}
              className="wallet-ngn-icon  min-w-[260px]"
            />
          </div>
          <div
            ref={(el) => (walletCards.current[1] = el)}
            className="wallet-card-2 "
          >
            <Image
              src="/images/Wallet/gha-wallet.svg"
              alt="send icon"
              width={320}
              height={182}
              className="wallet-gha-icon"
            />
          </div>
          <div
            ref={(el) => (walletCards.current[2] = el)}
            className="wallet-card-3 "
          >
            <Image
              src="/images/Wallet/cad-wallet.svg"
              alt="send icon"
              width={320}
              height={182}
              className="wallet-cad-icon"
            />
          </div>
          <div
            ref={(el) => (walletCards.current[3] = el)}
            className="wallet-card-4"
          >
            <Image
              src="/images/Wallet/usd-wallet.svg"
              alt="send icon"
              width={320}
              height={182}
              className="wallet-usd-icon"
            />
          </div>
        </div>

        <div
          id="section-woman"
          className="absolute bottom-48 right-32 hidden lg:block"
        >
          <Image
            src="/images/girl-pressing-phone.png"
            alt="send icon"
            width={350}
            height={636}
            className="wallet-usd-icon w-auto h-auto"
          />
        </div>
        <div id="section-texts" className="  absolute top-[40%] left-10  ">
          <div className=" px-4  hidden lg:block">
            <h2 className="font-semibold text-2xl lg:text-5xl text-black max-w-lg tracking-wide">
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
              dedicated to a specific currency, streamlining transactions and
              storage across various currencies.
            </p>
            <p>
              Enhance user experience with tailored wallets for different
              currencies, empowering efficient financial management and
              flexibility in global transactions
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiCurrency;
