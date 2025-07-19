"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Header = ({ logoWhite = true }: any) => {
  //   const [scrollPosition, setScrollPosition] = useState(0);
  //   const [backgroundColor, setBackgroundColor] = useState("bg-off-white");
  //   const [position, setPosition] = useState(false);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       setScrollPosition(window.scrollY);
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  //   useEffect(() => {
  //     if (scrollPosition > 100) {
  //       setBackgroundColor("bg-primary");
  //       setPosition(true);
  //     } else {
  //       setBackgroundColor("bg-transparent");
  //       setPosition(false);
  //     }
  //   }, [scrollPosition]);

  const { scrollY } = useScroll();

  const backdropBlur = useTransform(
    scrollY,
    [0, 200, 220],
    ["blur(0px)", "blur(0px)", "blur(12px)"]
  );

  const backgroundColor = useTransform(
    scrollY,
    [0, 200, 220],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0)", "rgba(0, 0, 0,0.2)"]
    // ["rgba(0, 0, 0, 0)", "rgb(79, 0, 114)", "rgba(0, 0, 0, 0.2)"]
  );

  const headerHeight = useTransform(scrollY, [0, 200], ["100px", "60px"]);

  const logoScale = useTransform(scrollY, [0, 200], [1.3, 1]);
  return (
    <div>
      <motion.header
        style={{
          backdropFilter: backdropBlur,
          backgroundColor: backgroundColor,
          height: headerHeight,
        }}
        className="fixed top-0 w-full z-40 pt-1 bg-transparent flex items-start md:items-center justify-between px-4 md:px-8 lg:px-20"

        // className={classNames(
        //   " px-4 py-2 lg:px-20 pt-4 w-full fixed top-0 z-40"
        // )}
      >
        <motion.div style={{ scale: logoScale }} className="pt-2 lg:pt-0">
          <Link href="/">
            {logoWhite ? (
              <Image
                src="/images/logo-white.svg"
                alt="Revve Logo"
                width={130}
                height={60}
                className="w-[90px]"
              />
            ) : (
              <Image
                src="/images/logo.svg"
                alt="Revve Logo"
                width={130}
                height={60}
                className="w-[90px]"
              />
            )}
          </Link>
        </motion.div>
      </motion.header>
    </div>
  );
};

export default Header;
