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
// Import Swiper styles

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <>
      <section>
        <main>
          {/* SECTION ONE */}
          <Hero setOpenModal={setOpenModal} />
          <Intro />
          <MultiCurrency />
          <ShopOnline setOpenModal={setOpenModal} />
          <CTA setOpenModal={setOpenModal} />
          <FAQSection />
          <Contactsection />
        </main>
      </section>
      {openModal && <DownloadModal setOpenModal={setOpenModal} />}
    </>
  );
}
