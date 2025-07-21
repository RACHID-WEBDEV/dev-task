/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import DownloadModal from "@/components/DownloadModal";
import { useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import MultiCurrency from "@/components/MultiCurrency";
import ShopOnline from "@/components/ShopOnline";
import CTA from "@/components/CTA";
import FAQSection from "@/components/FAQSection";
import Contactsection from "@/components/Contactsection";
import ScrollAnimation from "@/components/ScrollSection";
import MultiCard from "@/components/Currency";
import CurrencyConverterModal from "@/components/CurrencyConverterModal";
import Header from "@/components/Header";
import MultiCurrencyMobile from "@/components/MultiCurrencyMobile";
import ShopOnlineMobile from "@/components/ShopOnlineMobile";
import Parnters from "@/components/Partners";
// Import Swiper styles

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [openCurrency, setOpenCurrency] = useState(false);
  const [saveActiveSlideImage, setsaveActiveSlideImage] = useState("");
  const [openDownload, setOpenDownload] = useState(false);

  return (
    <>
      <Header />
      <section>
        <main>
          {/* SECTION ONE */}
          <Hero
            setOpenModal={setOpenModal}
            setsaveActiveSlideImage={setsaveActiveSlideImage}
          />
          <Intro saveActiveSlideImage={saveActiveSlideImage} />
          <Parnters />
          <div className="hidden lg:block">
            <ScrollAnimation
              setOpenModal={setOpenModal}
              setOpenCurrency={setOpenCurrency}
            />
          </div>
          <div className="block lg:hidden ">
            <MultiCurrencyMobile setOpenModal={setOpenCurrency} />
            <ShopOnlineMobile setOpenModal={setOpenModal} />
            <CTA setOpenModal={setOpenModal} />
            <FAQSection />
          </div>
          {/* <MultiCurrency /> */}
          {/* <MultiCard /> */}
          {/* <ShopOnline setOpenModal={setOpenModal} />
          <CTA setOpenModal={setOpenModal} />
          <FAQSection />
          <Contactsection /> */}

          {/* <FAQSection setOpenModal={setOpenModal} /> */}
          <Contactsection />
        </main>
      </section>
      {openModal && <DownloadModal setOpenModal={setOpenModal} />}
      {openCurrency && (
        <CurrencyConverterModal
          setOpenModal={setOpenCurrency}
          setOpenDownload={setOpenDownload}
        />
      )}
      {openDownload && <DownloadModal setOpenModal={setOpenDownload} />}
    </>
  );
}
