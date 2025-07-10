import type { Metadata } from "next";
import { Paytone_One, DM_Sans } from "next/font/google";
import "./globals.css";
import "./swiper-bundle.css";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import PreLoader from "@/components/PreLoader";

gsap.registerPlugin(ScrollTrigger, SplitText);

const paytone_One = Paytone_One({
  variable: "--font-paytone-One",
  subsets: ["latin"],
  weight: "400",
});

const dm_Sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Revve - Test",
  description: "Frontend Developer Test for Revve",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${paytone_One.variable} ${dm_Sans.variable} antialiased`}
      >
        <PreLoader />
        {children}
      </body>
    </html>
  );
}
