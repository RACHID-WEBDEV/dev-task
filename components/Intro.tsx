import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

const Intro = () => {
  useGSAP(() => {
    const paragraphSplit2 = new SplitText(".subtitle2", { type: "lines" });

    gsap.from(paragraphSplit2.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.inOut",
      stagger: 0.06,
      scrollTrigger: {
        trigger: "#aboutIntro",
        start: "top 70%", // when top of #aboutIntro hits 70% of the viewport
        // toggleActions: "play none none none",
        end: "bottom 30%",
        toggleActions: "play reverse play reverse",
        markers: false, // set to true for debugging
      },
    });
  }, []);
  return (
    <section
      id="aboutIntro"
      className="relative bg-cover bg-center w-full h-[850px] lg:h-[900px] bg-no-repeat bg-gray-300 overflow-hidden px-4"
      //   id="clip"
    >
      {/* <div className="mask-clip-path about-image"> */}
      <div className="relative bg-cover bg-center w-[350px] h-[410px] lg:w-[424px] top-48 lg:top-56 lg:h-[493px] left-1/2 transform -translate-x-1/2 bg-no-repeat bg-[url('/images/slide-4.png')]">
        <div className=" flex items-center justify-center">
          <p className=" text-white max-w-[360px] font-medium  absolute bottom-6 leading-[1.3] px-4 lg:px-0 subtitle2">
            Seamlessly bridge distances with our effortless remittance service.
            Send support, and financial care to your loved ones back home.
          </p>
        </div>
        {/* </div> */}
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
  );
};

export default Intro;
