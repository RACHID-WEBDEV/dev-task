import Image from "next/image";
import React from "react";

const CTA = ({ setOpenModal }: any) => {
  return (
    <section className="relative bg-cover bg-center w-full h-[850px] lg:h-[950px] bg-no-repeat bg-[url('/images/pay-bills.png')] overflow-hidden">
      <div className=" absolute  top-[60%] transform -translate-y-1/2 w-full">
        <div className=" flex justify-between flex-wrap gap-8 px-4 lg:pt-0 lg:px-20">
          <div className=" flex-1  ">
            <div className=" px-4 ">
              <h2 className="font-semibold text-4xl lg:text-5xl text-white max-w-lg tracking-wide">
                Pay Bills
              </h2>
              <div className="mt-8 max-w-[330px] text-gray-100 font-medium space-y-4">
                <p className=" leading-[1.3]">
                  Say goodbye to long queues and endless processes—our platform
                  offers a seamless solution for paying bills instantly without
                  any hiccups.
                </p>

                <p className="pt-6">Get Revve on your phone</p>
                <div>
                  <button
                    onClick={() => setOpenModal(true)}
                    className="button-alt"
                    role="button"
                  >
                    <span className="text">Coming soon</span>
                    <span className=" whitespace-nowrap">Join Waitlist</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pt-20 mb-10">
            {/* <Image
              src="/images/pay-bills-Calendar.png"
              alt="send icon"
              width={340}
              height={366}
              className="wallet-usd-icon"
            /> */}
            <video
              src="/images/pay-bill-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              id="cta-video"
              className="w-[340px] h-[366px] size-64 object-cover object-center rounded-4xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
