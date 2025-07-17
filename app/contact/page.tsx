"use client";
import React from "react";
// import { usePathname } from "next/navigation";
import Contactsection from "@/components/Contactsection";
// import Link from "next/link";
import Header from "@/components/Header";
import Image from "next/image";

const Page = () => {
  // const pathname = usePathname();
  return (
    <>
      <Header logoWhite={false} />
      <div className="pt-20 bg-white">
        <div>
          <main className="relative snap-mandatory snap-y mt-24">
            <section className="max-container px-4 lg:px-[4rem]  overflow-y-hidden">
              <div className="text-center lg:mt-[2rem]">
                <div className="w-full mb-8 lg:mb-12 ">
                  <h1 className="mb-3  text-3xl lg:text-4xl 1xl:text-6xl text-black">
                    Get in touch
                  </h1>
                  <p className="mb-3 max-sm:w-[80%] mx-auto  text-gray-500">
                    Do you have any questions or feedback?
                    <br className="max-sm:hidden " />
                    We&apos;d love to hear from you.
                  </p>
                </div>
              </div>
              <div className="my-[2rem] lg:my-[4rem]">
                <div className="flex flex-col md:flex-row lg:space-x-2 lg:px-14 ">
                  <div className=" flex-1 my-3">
                    <div className=" bg-purple-gradient px-[2rem] py-[3rem] lg:p-[3rem] rounded-2xl">
                      <h4 className="text-white text-2xl lg:text-4xl">
                        Contact Information
                      </h4>
                      <p className="text-white my-8">
                        Fill up the form and we’ll get back to you in few hours.
                      </p>
                      <div className="flex flex-col gap-8">
                        <p className="text-white">
                          <Image
                            alt="Call"
                            width={24}
                            height={24}
                            className="inline-block"
                            style={{ color: "transparent" }}
                            src="/images/Call.svg"
                          />
                          <span className="inline-block ml-3">
                            +1(343)338-5190
                          </span>
                        </p>
                        <p className="text-white">
                          <Image
                            alt="Message"
                            width={24}
                            height={24}
                            className="inline-block"
                            style={{ color: "transparent" }}
                            src="/images/Message.svg"
                          />
                          <span className="inline-block ml-3">
                            hello@revveme.com
                          </span>
                        </p>
                        <p className="text-white">
                          <Image
                            alt="Location"
                            width={24}
                            height={24}
                            className="inline-block"
                            style={{ color: "transparent" }}
                            src="/images/Location.svg"
                          />
                          <span className="inline-block ml-3">
                            2482 Yonge St Toronto ON M4P 2H5
                          </span>
                        </p>
                      </div>
                      <div className="h-[5rem]" />
                      <div className="flex space-x-3 my-3">
                        <a
                          target="_blank"
                          href="https://facebook.com/profile.php?id=61572466705088&sk=about"
                        >
                          <Image
                            alt="Facebook"
                            width={37}
                            height={37}
                            style={{ color: "transparent" }}
                            src="/images/Facebook.svg"
                          />
                        </a>
                        <a target="_blank" href="https://x.com/InfoRevve">
                          <Image
                            alt="X"
                            loading="lazy"
                            width={37}
                            height={37}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            src="/images/Twitter.svg"
                          />
                        </a>
                        <a
                          target="_blank"
                          href="https://linkedin.com/company/revve/about/?viewAsMember=true"
                        >
                          <Image
                            alt="Linkedin"
                            width={37}
                            height={37}
                            style={{ color: "transparent" }}
                            src="/images/Linkedin.svg"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 lg:p-6  p-4">
                    <form>
                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 ">
                        <div className="sm:col-span-3 mb-4">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            First name
                          </label>

                          <div className=" ">
                            <input
                              type="text"
                              name="first_name"
                              placeholder="John"
                              className="bg-white border text-gray-700 border-gray-500 hover:border-gray-500/80  text-base rounded-lg block placeholder:text-gray-700 font-medium w-full p-2.5 py-3 h-12 outline-none "
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-3 mb-4">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Last name
                          </label>

                          <div className=" ">
                            <input
                              type="text"
                              name="last_name"
                              placeholder="John"
                              className="bg-white border text-gray-700 border-gray-500 hover:border-gray-500/80  text-base rounded-lg block placeholder:text-gray-700 font-medium w-full p-2.5 py-3 h-12 outline-none "
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-3 mb-4">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Email Address
                          </label>
                          <div className="mt-2">
                            <input
                              className="bg-white border text-gray-700 border-gray-500 hover:border-gray-500/80  text-base rounded-lg block placeholder:text-gray-700 font-medium w-full p-2.5 py-3 h-12 outline-none "
                              type="eamil"
                              name="email"
                              placeholder="example@mail.com"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-3 mb-4">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Phone Number
                          </label>
                          <div className="mt-2">
                            <input
                              className="bg-white border text-gray-700 border-gray-500 hover:border-gray-500/80  text-base rounded-lg block placeholder:text-gray-700 font-medium w-full p-2.5 py-3 h-12 outline-none "
                              type="text"
                              name="phone_number"
                              placeholder="+phonenumber"
                            />
                          </div>
                        </div>
                        <div className="col-span-full">
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Message
                          </label>
                          <div className="mt-2">
                            <textarea
                              id="message"
                              name="message"
                              rows={3}
                              className="bg-white border text-gray-700 border-gray-500 hover:border-gray-500/80  text-base rounded-lg block placeholder:text-gray-700 font-medium w-full p-2.5 py-3  outline-none "
                              placeholder="Type here..."
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        {/* <p className="w-full my-2 col-span-full transition-all ease-in-out duration-300 delay-200 opacity-100 ">
                          <span className="text-green-600">Awesome!... </span>
                          Message sent.
                        </p>
                        <p
                          className="w-full my-2 col-span-full transition-all ease-in-out duration-300 delay-200 opacity-100 
    "
                        >
                          <span className="text-red-500">Oops!...</span>Unable
                          to send message, try again
                        </p> */}
                      </div>

                      <button
                        // onClick={() => setOpenModal(true)}
                        className="button-primary w-full max-w-xs mt-6"
                        role="button"
                      >
                        <span className="text">Send Message</span>
                        <span className=" whitespace-nowrap">Send Message</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>

        <Contactsection />
      </div>
    </>
  );
};

export default Page;
