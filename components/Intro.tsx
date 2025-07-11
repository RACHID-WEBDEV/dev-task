/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useInView, AnimatePresence, easeOut } from "framer-motion";
import { useRef } from "react";
import { GoCircle } from "react-icons/go";
import { ImageAssets } from "@/public/images";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { extractPathFromUrl } from "@/utils/constant";

gsap.registerPlugin(ScrollTrigger);

const Intro = ({ saveActiveSlideImage }: any) => {
  // console.log(
  //   "SlideImage:",
  //   // saveActiveSlideImage,
  //   "path",
  //   extractPathFromUrl(saveActiveSlideImage)
  // );

  const imagePath = extractPathFromUrl(saveActiveSlideImage);
  const imageSrc = imagePath?.replace("slider", "slide");

  // console.log(
  //   "Image Path:",
  //   imagePath?.replace("slider", "slide"),
  //   "fuullUrl:",
  //   imagePath
  // );

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentImage, setCurrentImage] = useState(ImageAssets.Naira);
  const [paperPlanePhase, setPaperPlanePhase] = useState("initial");
  const [currencyAnimationKey, setCurrencyAnimationKey] = useState(0);
  const [paperPlaneAnimationKey, setPaperPlaneAnimationKey] = useState(0);
  const [currencyBackgroundPhase, setCurrencyBackgroundPhase] =
    useState("down");

  useEffect(() => {
    if (!isInView) return;
    const startCurrencyLoop = () => {
      setCurrencyBackgroundPhase("up");
      setCurrentImage(ImageAssets.Cedi);
      setCurrencyAnimationKey((prev) => prev + 1);
      setTimeout(() => {
        setCurrencyBackgroundPhase("down");
        setCurrentImage(ImageAssets.Naira);
        setCurrencyAnimationKey((prev) => prev + 1);
      }, 5000);
    };

    startCurrencyLoop();
    const currencyInterval = setInterval(startCurrencyLoop, 10000);

    const startPaperPlaneLoop = () => {
      setPaperPlaneAnimationKey((prev) => prev + 1);
      setPaperPlanePhase("initial");

      const timeout1 = setTimeout(() => {
        setPaperPlanePhase("firstComplete");
      }, 500);

      const timeout2 = setTimeout(() => {
        setPaperPlanePhase("secondPhase");
      }, 4700);

      const timeout3 = setTimeout(() => {
        startPaperPlaneLoop();
      }, 8000);
    };

    startPaperPlaneLoop();

    return () => {
      clearInterval(currencyInterval);
    };
  }, [isInView]);

  const backgroundSlideVariants = {
    initial: { y: "100%" },
    animate: {
      y: "0%",
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  const backgroundSlideDownVariants = {
    initial: { y: "0%" },
    animate: {
      y: "100%",
      transition: { duration: 1.5, ease: easeOut },
    },
  };

  const blueBackgroundVariants = {
    initial: { y: "100%" },
    animate: {
      y: "0%",
      transition: { duration: 1.0, ease: easeOut },
    },
  };

  const flipVariants = {
    hidden: { rotateY: 180, rotateX: 180, opacity: 0 },
    visible: {
      rotateY: 0,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 1.0,
        ease: easeOut,
      },
    },
  };

  const imageVariants = {
    initial: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.3 } },
    enter: { opacity: 1, transition: { duration: 0.3 } },
  };

  const getPaperPlaneAnimation = () => {
    switch (paperPlanePhase) {
      case "initial":
        return { x: "-120%", y: "120%", scale: 0.5 };
      case "firstComplete":
        return { x: "0%", y: "0%", scale: 1 };
      case "secondPhase":
        return { x: "100%", y: "-150%", scale: 0.5 };
      default:
        return { x: "-120%", y: "120%", scale: 0.5 };
    }
  };

  // Background image for the section

  // const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
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
    );

    // tl.fromTo(
    //   image,
    //   { scale: 0, opacity: 0 },
    //   { scale: 1, opacity: 1, duration: 5, ease: "power2.out" }
    // ).to(image, {
    //   scale: 0.9,
    //   duration: 5,
    //   ease: "power2.in",
    // });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="aboutIntro"
      className="relative bg-cover bg-center w-full h-[850px] lg:h-screen bg-no-repeat bg-white overflow-hidden px-4"
      //   id="clip"
      ref={ref}
    >
      {/* <div className="mask-clip-path about-image"> */}
      <div
        // ref={imageRef} bg-[url('/images/slide-4.png')]
        className="relative bg-cover bg-center w-[350px] h-[410px] lg:w-[424px] top-48 lg:top-40 xl:top-12 1xl:top-28 2xl:top-48 lg:h-[493px] left-1/2 transform -translate-x-1/2 bg-no-repeat "
      >
        <Image
          ref={imageRef}
          src={imageSrc || "/images/slide-4.png"}
          alt="Intro Image"
          width={424}
          height={493}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className=" flex items-center justify-center">
          <p className=" text-white max-w-[360px] font-medium  absolute bottom-6 leading-[1.3] px-4 lg:px-0 subtitle2">
            Seamlessly bridge distances with our effortless remittance service.
            Send support, and financial care to your loved ones back home.
          </p>
        </div>
        {/* </div> */}
      </div>
      <div className="absolute bottom-28 lg:bottom-10 xl:bottom-10 1xl:bottom-16 2xl:bottom-32 left-1/2 transform -translate-x-1/2 text-center w-full px-4 z-30">
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
      <div className="absolute top-[220px] right-10 lg:right-0 lg:left-[150px] hidden lg:block ">
        <motion.div className="hidden md:flex absolute top-1/5 left-1/12 bg-purple-500 rounded-4xl w-32 aspect-square items-center justify-center overflow-hidden">
          <motion.div
            key={`bg-${currencyAnimationKey}`}
            variants={
              currencyBackgroundPhase === "up"
                ? backgroundSlideVariants
                : backgroundSlideDownVariants
            }
            initial="initial"
            animate="animate"
            className="absolute inset-0 bg-red-500 "
          />

          <motion.div
            key={`circle-${currencyAnimationKey}`}
            variants={flipVariants}
            initial="hidden"
            animate="visible"
            className="absolute size-[70%] z-10"
          >
            <GoCircle className="text-white size-[100%]" />
          </motion.div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage.src || "default"}
              variants={imageVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              className="absolute z-5"
            >
              <Image
                src={currentImage}
                alt="Currency exchange"
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        {/* <Image
          src="/images/naira.svg"
          alt="Next"
          width={152}
          height={152}
          className="naira-icon w-[60px] lg:w-[152px]"
        /> */}
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
      <div className="absolute top-[320px] lg:top-[400px]  right-[240px] hidden lg:block">
        <motion.div className="hidden md:flex absolute top-1/3 right-2/12 bg-blue-600 rounded-4xl w-32 aspect-square items-center justify-center overflow-hidden">
          {paperPlanePhase !== "initial" && (
            <motion.div
              key={`green-bg-${paperPlaneAnimationKey}`}
              variants={backgroundSlideVariants}
              initial="initial"
              animate="animate"
              className="absolute inset-0 bg-green-500 "
            />
          )}
          {paperPlanePhase === "secondPhase" && (
            <motion.div
              key={`blue-bg-${paperPlaneAnimationKey}`}
              variants={blueBackgroundVariants}
              initial="initial"
              animate="animate"
              className="absolute inset-0 bg-blue-600 z-10"
            />
          )}
          <motion.img
            key={`plane-${paperPlaneAnimationKey}`}
            src={ImageAssets.PaperPlane.src}
            alt="Paper plane"
            className="object-contain absolute z-20"
            width={64}
            height={64}
            initial={{
              x: "-120%",
              y: "120%",
              scale: 0,
            }}
            animate={getPaperPlaneAnimation()}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
          />
        </motion.div>
        {/* <Image
          src="/images/paper-plane.svg"
          alt="Next"
          width={152}
          height={152}
          className="naira-icon w-[100px] lg:w-[152px]"
        /> */}
      </div>
    </section>
  );
};

export default Intro;
