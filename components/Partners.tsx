import React from "react";
import Marquee from "react-fast-marquee";
import partnersData from "@/data/partnersData";

import Image from "next/image";

const Parnters = () => {
  return (
    <section className=" bg-white pb-10">
      <div className=" lg:py-5">
        <div className="py-2  ">
          <div className="lg:space-y-8 ">
            <Marquee
              gradient={false}
              gradientWidth={28}
              pauseOnHover={false}
              //   gradientColor={[17, 24, 38]}
            >
              <div className="flex ">
                {partnersData.map(({ logo }, index) => (
                  <div
                    key={index}
                    className="p-4 lg:p-6 lg:pt-12 lg:pb-10 my-4 lg:my-2 rounded-lg lg:rounded-2xl mx-2 lg:mx-4 border border-[#ECECEC] "
                  >
                    <Image
                      src={logo}
                      width={128}
                      height={128}
                      className="w-16 lg:w-32"
                      alt=" partner logos"
                    />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>

          {/* <div className="space-y-8  pt-10">
            <Marquee
              gradient={true}
              gradientWidth={28}
              pauseOnHover={true}
              gradientColor={[17, 24, 38]}
              direction="right"
            >
              <div className="flex ">
                {ParntersData.map(({ logo }, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-400 bg-roatek-grey rounded-2xl mx-4"
                  >
                    <img
                      src={logo}
                      className="min-w-[106px] min-h-[32px]"
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </Marquee>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Parnters;
