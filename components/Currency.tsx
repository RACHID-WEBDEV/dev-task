import Image from "next/image";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  "/images/Wallet/ngn-wallet.svg",
  "/images/Wallet/gha-wallet.svg",
  "/images/Wallet/cad-wallet.svg",
  "/images/Wallet/usd-wallet.svg",
];

const MultiCard = () => {
  return (
    <>
      <section className="relative bg-cover bg-center w-full h-[900px] lg:h-[1200px] bg-no-repeat bg-gray-100 overflow-hidden">
        <div
          className="absolute bg-cover bg-center   w-[330px]
                       h-[660px] lg:w-[432px] bottom-0 lg:h-[708px] left-1/2 transform -translate-x-1/2 bg-no-repeat bg-[url('/images/iPhone-frame.png')]"
        ></div>
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2  space-y-5 ">
          {/* <div className=" ">
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
           </div> */}
          <div className="  space-y-5">
            {cardData?.map((item, index) => (
              <div key={index} className={`pt-[${index * 20}px]`}>
                <Image
                  src={item}
                  alt="send icon"
                  width={320}
                  height={182}
                  className="wallet-usd-icon w-auto h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-14 right-32 hidden lg:block">
          <Image
            src="/images/girl-pressing-phone.png"
            alt="send icon"
            width={350}
            height={636}
            className="wallet-usd-icon w-auto h-auto"
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

export default MultiCard;
