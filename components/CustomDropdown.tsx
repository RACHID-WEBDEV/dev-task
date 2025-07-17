/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
// import Image from "next/image";
import classNames from "classnames";
type Provider = {
  name: string;
  avatar?: string;
};

const CustomDropdown = ({
  isOpen,
  setIsOpen,
  selectedProvider,
  setSelectedProvider,
  handleRadioChange,
  data,
  label,
  subLabel,
}: any) => {
  type MotionULProps = React.HTMLAttributes<HTMLUListElement> & {
    children?: React.ReactNode;
    initial?: any;
    animate?: any;
    transition?: any;
  };

  const MotionUL = motion.ul as React.ComponentType<MotionULProps>;

  // const MotionUL = motion("ul");
  return (
    <div className="flex relative  ">
      <button
        id="dropdown-button"
        className={`flex-shrink-0 z-10 inline-flex items-center px-3 justify-between h-16 text-sm font-medium text-center text-gray-600 w-full  bg-off-white border-[1.5px] border-gray-900 rounded-lg hover:bg-gray-100 cursor-pointer focus:outline-none    ${
          isOpen ? "rounded-b-nonee" : ""
        } ${selectedProvider ? "py-1.5 pt-3 " : " py-3"}`}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedProvider ? (
          <div className=" flex items-center gap-2">
            {subLabel && (
              <p className=" text-black text-xs font-medium absolute top-2">
                {subLabel}
              </p>
            )}
            {/* {selectedProvider?.avatar && (
              <img
                src={selectedProvider?.avatar}
                alt=""
                className="h-8 w-8 flex-shrink-0 rounded-lg"
              />
            )} */}
            <p className=" text-black font-medium text-lg">
              {selectedProvider?.name}
            </p>
          </div>
        ) : (
          <p className=" text-black text-lg">{label}</p>
        )}
        <svg
          className="w-4 h-2.5 ms-2.5 mb-1.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdown"
        className={` overflow-hidden absolute left-0 top-[62px] z-40 bg-white rounded-b-lg shadow w-full divide-y divide-gray-100 !pb-0   ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <MotionUL
          initial={{ opacity: 0, y: -10 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="py-0 text-sm text-gray-700 overflow-y-scroll max-h-[300px]"
          aria-labelledby="dropdown-button"
        >
          {data?.map((item: Provider, itemIndex: number) => {
            const isSelected = selectedProvider?.name === item?.name;
            return (
              <li
                key={itemIndex}
                onClick={() => {
                  setSelectedProvider(item);
                  setIsOpen(false);
                }}
                className=" flex items-center justify-between gap-2 px-4 py-3 hover:bg-gray-100  cursor-pointer"
              >
                <div className=" flex items-center gap-2">
                  {item?.avatar && (
                    <img
                      src={item?.avatar}
                      alt={`${item.name} provider`}
                      width={64}
                      height={40}
                      className="h-8 w-8 flex-shrink-0 rounded-lg"
                    />
                  )}
                  <p className="block text-black font-normal text-base">
                    {item?.name}
                  </p>
                </div>

                <label
                  className={classNames(
                    "relative  cursor-pointer",
                    "flex items-center space-x-2"
                    // disabled && "cursor-not-allowed opacity-50",
                    // { "border border-bills-main": isSelected },
                    // className
                  )}
                >
                  <input
                    type="radio"
                    name={"electric_provider"}
                    value={item?.name}
                    // disabled={disabled}
                    checked={isSelected}
                    onChange={handleRadioChange}
                    className="peer hidden"
                  />

                  <div
                    className={classNames(
                      "w-5 h-5 rounded-full border-2 border-gray-900 flex items-center justify-center",
                      "peer-checked:border-gray-900 peer-checked:ring-2 peer-checked:ring-gray-900/30",
                      "peer-checked:after:content-[''] after:w-2.5 after:h-2.5 after:rounded-full after:bg-gray-900",
                      "after:scale-0 peer-checked:after:scale-100 after:transition-transform"
                    )}
                  ></div>

                  {/* <span className="text-sm text-bills-main font-medium">
                      {label}
                    </span> */}
                </label>
              </li>
            );
          })}
        </MotionUL>
      </div>
    </div>
  );
};

export default CustomDropdown;
