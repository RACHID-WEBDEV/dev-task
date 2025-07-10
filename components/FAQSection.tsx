import React from "react";
import FaqAccordion from "./Faq";

const FAQSection = ({ setOpenModal }: any) => {
  return (
    <>
      <section className="relative bg-cover bg-center w-full h-[1000px] bg-no-repeat bg-[#4F0072] overflow-hidden">
        <div className=" absolute  top-1/2 transform -translate-y-1/2 w-full">
          <div className=" flex items-center flex-wrap justify-between px-4 lg:px-20">
            <div className=" sticky top-0 left-0 ">
              <div className=" px-4 ">
                <h2 className="font-semibold text-2xl lg:text-5xl text-white max-w-lg tracking-wide">
                  FAQs
                </h2>
                <div className="mt-8 max-w-[310px] text-gray-100 font-medium space-y-4">
                  <p className=" leading-[1.3]">
                    Here are some basic questions and answers to help you get
                    started.
                  </p>

                  <p className="pt-6">Get Revve on your phone</p>
                  <div>
                    <button
                      onClick={() => setOpenModal(true)}
                      className="button-alt"
                      role="button"
                    >
                      <span className="text">Download the app</span>
                      <span className=" whitespace-nowrap">
                        Click to Download
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10 lg:pt-20 max-w-3xl">
              <FaqAccordion />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
