import type { Metadata } from "next";
import { Paytone_One, DM_Sans } from "next/font/google";
import "./globals.css";
import "./swiper-bundle.css";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import PreLoader from "@/components/PreLoader";
import ChatRevveMe from "@/components/ChatMe";

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
  /* — site-wide defaults — */
  title: {
    template: "%s | Reeve - Best way to send money to Africa",
    default: "Reeve - Best way to send money to Africa",
  },
  description:
    "Send, Spend, Shop Perform cross-border transaction with ease on Revve.",
  icons: { icon: "/images/favicon.png" },
  keywords: [
    "cross-border payments",
    "international money transfer",
    "send money to Africa",
    "digital wallet",
    "online remittance",
    "secure payments",
    "multi-currency support",
    "mobile payments",
    "bill payments",
    "merchant payments",
    "payment gateway",
    "seamless transactions",
    "financial technology",
    "money remittance app",
    "fast money transfer",
    "peer-to-peer payments",
    "borderless payments",
    "fintech Africa",
    "cashless transactions",
  ],
  metadataBase: new URL("https://www.revveme.com"),
};

// export const metadata: Metadata = {
//   title: "Revve ",
//   description: " Revve",
// };

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
        <ChatRevveMe />
        {children}
      </body>
    </html>
  );
}
