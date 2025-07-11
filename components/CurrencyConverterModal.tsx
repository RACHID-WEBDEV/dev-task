import React, { useState } from "react";
import CustomDropdown from "./CustomDropdown";
import { currency_data } from "@/data/currencyex";

const CurrencyConverterModal = ({ setOpenModal, setOpenDownload }: any) => {
  const [selectedFrom, setSelectedFrom] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  console.log("selectedFrom", selectedFrom);

  const [isOpenTo, setIsOpenTo] = useState(false);
  const [selectedTo, setSelectedTo] = useState(null);

  const handleSetIsOpen = (value: boolean) => {
    setIsOpen(value);
    if (value) setIsOpenTo(false); // close To if opening this
  };

  const handleRadioChange = (e: any) => {
    const selectedName = e.target.value;
    setSelectedFrom(selectedName);
    setIsOpen(false);
    console.log("Selected From input:", selectedName);
  };

  const handleSetIsOpenTo = (value: boolean) => {
    setIsOpenTo(value);
    if (value) setIsOpen(false); // close standard if opening this
  };
  const handleRadioChangeTo = (e: any) => {
    const selectedName = e.target.value;
    setSelectedTo(selectedName);
    setIsOpenTo(false);
    console.log("Selected From input:", selectedName);
  };
  return (
    <>
      <div
        id="popup-modal"
        tabIndex={-1}
        className=" overflow-y-auto overflow-x-hidden bg-black/80 fixed top-0 right-0 left-0 z-50 justify-center items-center w-full inset-0  max-h-full px-2"
      >
        <div className="relative  lg:p-4 w-full h-full max-h-full ">
          <div className=" bg-white px-6  py-10 lg:p-10  rounded-[30px] shadow-sm w-full  lg:max-w-xl  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="  ">
              <div className="">
                <div className="  ">
                  <h2 className="font-semibold text-3xl lg:text-[44px] text-center text-black max-w-lg tracking-wide pb-4">
                    Currency Converter
                  </h2>
                  <div className="mt-4  text-gray-800 space-y-6 ">
                    <CustomDropdown
                      isOpen={isOpen}
                      setIsOpen={handleSetIsOpen}
                      selectedProvider={selectedFrom}
                      setSelectedProvider={setSelectedFrom}
                      data={currency_data}
                      handleRadioChange={handleRadioChange}
                      label="From"
                      subLabel={"From"}
                    />
                    <CustomDropdown
                      isOpen={isOpenTo}
                      setIsOpen={handleSetIsOpenTo}
                      selectedProvider={selectedTo}
                      setSelectedProvider={setSelectedTo}
                      data={currency_data}
                      handleRadioChange={handleRadioChangeTo}
                      label="To"
                      subLabel={"To"}
                    />

                    <div className=" ">
                      {/* <label
                        htmlFor="email"
                        className="mb-1 block font-semibold text-sm text-white dark:text-white"
                      >
                        Email Address
                      </label> */}
                      <input
                        type="text"
                        id="default-input"
                        placeholder="Amount ₦"
                        className="bg-white border-[1.5px] text-gray-900 border-black hover:border-black/80  text-base rounded-lg block placeholder:text-gray-900 font-medium w-full p-2.5 py-3 h-16 outline-none "
                      />
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="email"
                        className=" block font-medium text-base text-gray-900 absolute top-5 left-4"
                      >
                        Converted Amount:
                      </label>
                      <input
                        type="text"
                        id="default-input"
                        placeholder="00.00"
                        className="bg-[#F2F2F2] border-[1.5px] text-gray-900 border-[#DCDCDC] text-base rounded-lg block placeholder:text-gray-900 font-medium w-full p-2.5 py-3 h-16 outline-none text-right"
                      />
                    </div>

                    <div className="flex items-center gap-2.5 justify-center my-6">
                      <button
                        onClick={() => {
                          setOpenDownload(true);
                          setOpenModal(false);
                        }}
                        className="button-main w-full"
                        role="button"
                      >
                        <span className="text">Download the app</span>
                        <span className=" whitespace-nowrap">
                          Click to Download
                        </span>
                      </button>
                      <button
                        onClick={() => {
                          // setOpenDownload(false);
                          setOpenModal(false);
                        }}
                        type="button"
                        className="text-gray-900 bg-white hover:bg-gray-100 border-2 w-full justify-center border-gray-900  focus:outline-none focus:ring-gray-100  outline-none rounded-lg text-base font-bold px-14 py-3 text-center inline-flex items-center cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {openDownload && <DownloadModal setOpenModal={setOpenDownload} />} */}
      </div>
    </>
  );
};

export default CurrencyConverterModal;
