"use client";

import Image from "next/image";
import React, { useState } from "react";
import { vision_data } from "../data/vision";
import DownloadModal from "@/components/DownloadModal";
import Contactsection from "@/components/Contactsection";

const Page = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 bg-white text-black lg:px-16 lg:py-10">
        <div>
          <h1 className="text-4xl font-bold">About us</h1>
        </div>
        <div className="col-span-2">
          <p className="text-lg">
            <span className="font-semibold">Linearsend Inc</span> is a financial
            technology company registered as a Money Service Business (MSB) by
            Financial Transactions and Reports Analysis Centre of Canada
            (FINTRAC) with the mission of facilitating seamless cross-border
            transaction. Our unwavering dedication ensures that cross-border
            transactions are as effortless as those conducted locally. We pride
            ourselves on a journey fueled by innovation, collaboration, and
            empowerment, paving the way for a seamless financial future.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 ">
            <div className="relative ">
              <Image
                src="/images/about-img-1.png"
                alt="about image 1"
                width={400}
                height={440}
                className="rounded-xl"
              />
              <div className=" absolute top-20 -right-36 hidden lg:block">
                <Image
                  src="/images/fly-arrow.svg"
                  alt="about connecting image"
                  width={360}
                  height={337}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className=" ">
              <Image
                src="/images/about-img-2.png"
                alt="about image 2"
                width={400}
                height={440}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 bg-white text-black lg:px-16 lg:py-10">
        <div>
          <h1 className="text-4xl font-bold">Our Mission</h1>
        </div>
        <div className="col-span-2">
          <p className="text-3xl lg:text-5xl font-medium mb-4">
            We are building Revve to break down the limitations of financial
            borders and redefine global transactions.
          </p>
        </div>
      </div>
      <section className="relative bg-cover bg-center w-full h-[700px] lg:h-[700px] bg-no-repeat  bg-[url('/images/about-galaxy.png')]">
        <div className=" max-w-5xl ml-auto p-5 pt-10 lg:pt-14">
          <p className="text-lg font-medium mb-4">
            At Revve, our mission is to empower individuals and businesses by
            providing seamless financial solutions that transcend borders. We
            strive to simplify the complexities of remittance, bill payments,
            and online shopping, making financial transactions effortless and
            accessible to everyone.
          </p>
          <p className="text-lg font-medium mb-4">
            Our flagship product, Revve, is a financial service platform
            tailored to simplify money transfers and Bill Payments Between
            Canada, Nigeria and rest of Africa.
          </p>
        </div>
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 bg-white text-black lg:px-16 py-10 lg:py-20">
        <div>
          <h1 className="text-4xl font-bold">Our Vision</h1>
        </div>
        <div className="col-span-2">
          <p className="text-lg">
            Our vision is a world unburdened by the frail barriers of
            geographical boundaries, where international distances do not stop
            the formation of transactional relationships. We envision a future
            where cross-border payments are as effortless and seamless as local
            transactions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 ">
            {vision_data?.map((item, key) => {
              return (
                <div
                  key={key}
                  className="relative  bg-white shadow-md space-y-4 p-4 lg:p-8 rounded-2xl"
                >
                  <Image
                    src={item?.icon}
                    alt="about image 1"
                    width={52}
                    height={52}
                    className=""
                  />
                  <p className="text-2xl font-semibold">{item?.title}</p>
                  <p className="text-lg">{item?.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 bg-white text-black lg:px-16 py-10 lg:pb-24">
        <div>
          <h1 className="text-4xl font-bold">Our Story</h1>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 lg:gap-8 md:grid-cols-2 gap-4 mt-6 ">
            <div>
              <p className="text-lg">
                Established in 2024, Revve was born out of an idea that
                prioritises innovation for cross-border financial transactions.
              </p>
              <p className="text-lg pt-2">
                Our top priorities are security, trust, and innovation to
                empower individuals and businesses with seamless financial
                solutions.
              </p>
              <div className=" py-4">
                <button
                  onClick={() => setOpenModal(true)}
                  className="button-main"
                  role="button"
                >
                  <span className="text">Download the app</span>
                  <span className=" whitespace-nowrap">Click to Download</span>
                </button>
              </div>
              <p className="text-xl font-semibold pt-8 lg:pt-4">
                We currently operate in 3 countries
              </p>
              <div className=" flex items-center gap-4 flex-wrap pt-2 pb-5">
                <div className="flex items-center gap-1">
                  <div className=" border-white border-4 rounded-full">
                    <Image
                      className="rounded-full w-[36px] lg:w-[40px]"
                      width={52}
                      height={52}
                      src="/images/Phone/nigeria.svg"
                      alt=""
                    />
                  </div>
                  <p className="font-medium  text-black">Nigeria</p>
                </div>
                <div className="flex items-center gap-1">
                  <div className=" border-white border-4 rounded-full">
                    <Image
                      className="rounded-full w-[36px] lg:w-[40px]"
                      width={52}
                      height={52}
                      src="/images/Phone/ghana.svg"
                      alt=""
                    />
                  </div>
                  <p className="font-medium  text-black">Ghana</p>
                </div>
                <div className="flex items-center gap-1">
                  <div className=" border-white border-4 rounded-full">
                    <Image
                      className="rounded-full w-[36px] lg:w-[40px]"
                      width={52}
                      height={52}
                      src="/images/Phone/canada.svg"
                      alt=""
                    />
                  </div>
                  <p className="font-medium  text-black">Canada</p>
                </div>
                <div className="flex items-center gap-1">
                  <div className=" border-white border-4 rounded-full">
                    <Image
                      className="rounded-full w-[36px] lg:w-[40px]"
                      width={52}
                      height={52}
                      src="/images/Phone/nigeria.svg"
                      alt=""
                    />
                  </div>
                  <p className="font-medium  text-black">Nigeria</p>
                </div>
                <div className="flex items-center gap-1">
                  <div className=" border-white border-4 rounded-full">
                    <Image
                      className="rounded-full w-[36px] lg:w-[40px]"
                      width={52}
                      height={52}
                      src="/images/Phone/ghana.svg"
                      alt=""
                    />
                  </div>
                  <p className="font-medium  text-black">Ghana</p>
                </div>
                <div className="flex items-center gap-1">
                  <div className=" border-white border-4 rounded-full">
                    <Image
                      className="rounded-full w-[36px] lg:w-[40px]"
                      width={52}
                      height={52}
                      src="/images/Phone/canada.svg"
                      alt=""
                    />
                  </div>
                  <p className="font-medium  text-black">Canada</p>
                </div>
              </div>
            </div>
            <div className=" ">
              <Image
                src="/images/about-ss.png"
                alt="about image 2"
                width={400}
                height={440}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <Contactsection />
      {openModal && <DownloadModal setOpenModal={setOpenModal} />}
    </div>
  );
};

export default Page;
