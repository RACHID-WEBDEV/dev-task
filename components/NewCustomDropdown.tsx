import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import classNames from "classnames";

import { SearchIcon, XIconSmall } from "@/public/SvgsIcon";

const NewCustomDropdown = ({
  isOpen,
  setIsOpen,
  selectedProvider,
  setSelectedProvider,
  // handleRadioChange,
  data,
  label,
  subLabel,
  enableSearch = false,
  rounded = "rounded-lg",
  selectColor = "border border-gray-300 bg-white rounded-lg hover:bg-gray-100",
  showSelectedAvater = false,
  leftRadio = false,
}: any) => {
  type MotionULProps = React.HTMLAttributes<HTMLUListElement> & {
    children?: React.ReactNode;
    initial?: any;
    animate?: any;
    transition?: any;
  };

  const MotionUL = motion.ul as React.ComponentType<MotionULProps>;
  // const handleRadioChange = (e:any) => {
  //   const selectedName = e.target.value;
  //   console.log("Selected input:", selectedName);
  // };
  const [search, setSearch] = useState("");
  const filteredData = data?.filter(
    (item: any) =>
      item?.name?.toLowerCase().includes(search.toLowerCase()) ||
      item?.id?.toLowerCase().includes(search.toLowerCase()) ||
      item?.uuid?.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="flex relative  ">
      <button
        className={`flex-shrink-0  inline-flex items-center px-3 justify-between h-[54px] text-sm font-medium text-center text-gray-600 w-full cursor-pointer focus:outline-none    ${
          isOpen ? "rounded-b-nonee" : ""
        } ${selectedProvider ? "py-1.5 pt-3 " : " py-3"} ${selectColor}`}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedProvider ? (
          <div className=" flex items-center gap-2">
            {subLabel && (
              <p className=" text-gray-800 text-xs font-medium absolute top-1.5">
                {subLabel}
              </p>
            )}
            {showSelectedAvater && selectedProvider?.avatar && (
              <Image
                src={selectedProvider?.avatar}
                alt=""
                width={32}
                height={32}
                className="h-5 w-5 flex-shrink-0 "
              />
            )}
            <p className=" text-gray-500 font-normal text-base">
              {selectedProvider?.name}
            </p>
          </div>
        ) : (
          <p className=" text-[#686C73] text-base font-normal">{label}</p>
        )}
        <svg
          className="w-3 h-2.5 ms-2.5 mb-0 text-[#9E9E9F]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdown"
        className={` overflow-hidden absolute left-0 top-[52px] z-40 bg-white rounded-b-lg shadow w-full divide-y divide-gray-100 !pb-0   ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <MotionUL
          initial={{ opacity: 0, y: -10 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="py-0 text-sm text-gray-700 overflow-y-scroll max-h-[300px] z-10 relative"
          aria-labelledby="dropdown-button"
        >
          {enableSearch && (
            <li className="px-0.5 sticky top-0 h-fit w-full ">
              <div className="relative bg-white ">
                <div className="absolute inset-y-0 start-0 flex items-center pl-2 pointer-events-none">
                  <SearchIcon />
                </div>

                <input
                  type="text"
                  id="default-search"
                  name="search"
                  className="block w-full px-4 py-2 pl-8 h-9 text-sm text-gray-900 font-Inter border focus:border-gray-200 focus:outline-none border-gray-300 rounded-md bg-white outline-none"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {search.length >= 1 && (
                  <div
                    onClick={() => {
                      setSearch("");
                      // fetchUsersHandler("/admin/users");
                    }}
                    className="absolute inset-y-0 right-2 flex items-center ps-3 cursor-pointer"
                  >
                    <XIconSmall />
                  </div>
                )}
              </div>
            </li>
          )}
          {filteredData?.map((item: any, itemIndex: any) => {
            const isSelected = selectedProvider?.name === item?.name;
            return (
              <li
                key={itemIndex}
                onClick={() => {
                  setSelectedProvider(item);
                  setIsOpen(false);
                }}
                className={classNames(
                  " flex items-center  gap-2 px-4 py-3 hover:bg-gray-100 group  cursor-pointer",
                  { "justify-between": !leftRadio }
                )}
              >
                {leftRadio && (
                  <label
                    className={classNames(
                      "relative  cursor-pointer",
                      "flex items-center space-x-2 mr-1"
                    )}
                  >
                    <div
                      className={classNames(
                        "w-5 h-5 rounded-full border-2  flex items-center justify-center -z-10 group-hover:z-10",
                        {
                          "  after:transition-transform after:content-[''] after:w-2.5 after:h-2.5 after:rounded-full after:scale-100  border-primary peer-checked:border-primary after:bg-primary peer-checked:ring-primary/30":
                            isSelected,
                        },
                        {
                          "border-gray-600 peer-checked:border-gray-600 after:bg-gray-600 peer-checked:ring-gray-600/30 after:scale-0":
                            !isSelected,
                        }
                      )}
                    ></div>
                  </label>
                )}
                <div className=" flex items-center gap-2">
                  {item?.avatar && (
                    <Image
                      src={item?.avatar}
                      alt={`${item.name} provider`}
                      width={32}
                      height={32}
                      className={classNames("h-6 w-6 flex-shrink-0 ", rounded)}
                    />
                  )}
                  <div className=" flex items-center gap-2">
                    <p className="block text-[#686C73] text-sm font-normal  ">
                      {item?.name}
                    </p>
                    {item?.label && (
                      <p className="block text-dev-gray text-[9px] font-light ">
                        {item?.label}
                      </p>
                    )}
                  </div>
                </div>

                {!leftRadio && (
                  <label
                    className={classNames(
                      "relative  cursor-pointer",
                      "flex items-center space-x-2 size-6"
                      // disabled && "cursor-not-allowed opacity-50",
                      // { "border border-primary": isSelected },
                      // className
                    )}
                  >
                    <div
                      className={classNames(
                        "w-5 h-5 rounded-full border-2  flex items-center justify-center -z-10 group-hover:z-10",
                        {
                          "  after:transition-transform after:content-[''] after:w-2.5 after:h-2.5 after:rounded-full after:scale-100  border-primary peer-checked:border-primary after:bg-primary peer-checked:ring-primary/30":
                            isSelected,
                        },
                        {
                          "border-gray-600 peer-checked:border-gray-600 after:bg-gray-600 peer-checked:ring-gray-600/30 after:scale-0":
                            !isSelected,
                        }
                      )}
                    ></div>
                  </label>
                )}
              </li>
            );
          })}
        </MotionUL>
      </div>
    </div>
  );
};

export default NewCustomDropdown;
