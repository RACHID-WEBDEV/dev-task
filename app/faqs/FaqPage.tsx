"use client";
import React from "react";
import FaqAccordion from "@/components/Faq";

import { faqContent } from "@/data/faqData";
import { SearchIcon } from "@/public/SvgsIcon";

const FaqPage = () => {
  // const pathname = usePathname();
  return (
    <>
      <div className="pt-10 lg:pt-20 bg-primary">
        <section className="relative  overflow-hidden">
          {/* <div className="bg-cover -z-10 absolute top-0 bg-center w-full h-[450px] bg-no-repeat bg-[url('/images/authbg.png')] overflow-hidden"></div> */}
          <div className=" m-auto pt-16 lg:pt-20 xl:container px-1 lg:px-12 sm:px-0 mx-auto  z-30">
            <div className="mx-auto w-full h-full max-w-5xl ">
              <div className="m-auto py-12 mx-2">
                <div className=" flex flex-col items-center justify-center pb-6 lg:pb-10">
                  <h3 className="text-2xl lg:text-3xl 1xl:text-5xl font-semibold text-white pb-2">
                    Frequently Asked Questions
                  </h3>
                  <p className="text-base pt-1 text-gray-400 pb-6 max-w-lg text-center ">
                    Ut enim ad minim veniam quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat aute irure
                    dolor
                  </p>
                </div>
                <form className="flex flex-col lg:flex-row gap-y-3 lg:gap-y-0 items-center max-w-lg mx-auto mb-6">
                  <label htmlFor="voice-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <SearchIcon />
                    </div>
                    <input
                      type="text"
                      id="voice-search"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:to-gray-800 focus:border-gray-800 block w-full ps-10 p-2.5 py-3  "
                      placeholder="Search..."
                    />
                    {/* <button
                  type="button"
                  className="absolute inset-y-0 end-0 flex items-center pe-3"
                >
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
                    />
                  </svg>
                </button> */}
                  </div>
                  <button
                    type="submit"
                    className="cursor-pointer inline-flex items-center w-full justify-center lg:w-fit py-2.5 px-4 ms-2 text-sm font-medium text-gray-100 hover:text-white bg-primary rounded-lg border border-bills-secondary hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-800/30 "
                  >
                    Search
                  </button>
                </form>

                <div className=" bg-primary  px-4 lg:px-10 py-8 sm:py-10 rounded-xl shadow-md">
                  <FaqAccordion data={faqContent} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FaqPage;
