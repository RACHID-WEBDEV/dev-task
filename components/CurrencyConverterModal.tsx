import React, { useEffect, useState } from "react";
import CustomDropdown from "./CustomDropdown";
// import { currency_data } from "@/data/currencyex";
import { getData } from "@/utils/axiosInstance";
import { formatNumber } from "@/utils/constant";
import SmallSpinner from "./SmallSpinner";

const CurrencyConverterModal = ({ setOpenModal, setOpenDownload }: any) => {
  type CurrencyType = {
    ref_code: string;
    [key: string]: any;
  };
  const [selectedFrom, setSelectedFrom] = useState<CurrencyType | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTo, setSelectedTo] = useState<CurrencyType | null>(null);
  // console.log("selectedFrom", selectedFrom?.ref_code);

  const [isOpenTo, setIsOpenTo] = useState(false);
  // const [selectedTo, setSelectedTo] = useState(null);
  // console.log("selectedTo", selectedTo?.ref_code);

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

  const [currencies, setCurrencies] = useState<{
    data?: { currency?: any[] };
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchAmount, setSearchAmount] = useState("");

  const [currenciesExchange, setCurrenciesExchange] = useState<{
    data?: any;
  } | null>(null);
  const [loadingExchange, setLoadingExchange] = useState(false);
  const [errorExchange, setErrorExchange] = useState("");
  const exchangeData = Array.isArray(currenciesExchange?.data)
    ? currenciesExchange?.data[0]
    : currenciesExchange?.data;

  const showCurrData =
    exchangeData && !errorExchange
      ? exchangeData?.convertedAmountDisplay
      : "00.00";

  const showCurruncy =
    exchangeData && !errorExchange ? exchangeData?.targetCurrency : "";
  console.log("exchangeData", exchangeData);
  const handleFetchCurrency = async () => {
    setLoading(true);
    try {
      const response = await getData(`/get-currencies`, "");
      setCurrencies(response);
      // console.log("city res", response);
    } catch (error: any) {
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFetchCurrencyExhange = async (url: any) => {
    setLoadingExchange(true);
    try {
      const response = await getData(url, "");
      setCurrenciesExchange(response);
      setErrorExchange("");
    } catch (error: any) {
      setErrorExchange(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoadingExchange(false);
    }
  };
  useEffect(() => {
    handleFetchCurrency();
  }, []);

  // Debounce effect
  useEffect(() => {
    // Do nothing if searchAmount is empty or null
    if (!searchAmount || searchAmount.trim() === "") return;

    const delayDebounce = setTimeout(() => {
      handleFetchCurrencyExhange(
        `/exchange-rates/check-rate?targetCurrency=${selectedTo?.ref_code}&baseCurrency=${selectedFrom?.ref_code}&amount=${searchAmount}`
      );
    }, 2000); // 2 seconds debounce

    return () => clearTimeout(delayDebounce);
  }, [searchAmount, selectedFrom?.ref_code, selectedTo?.ref_code]);

  // `https://5gcnosnm2xwqefvxh37w4bbcba0pjupu.lambda-url.ca-central-1.on.aws/v1/exchange-rates/check-rate?targetCurrency=NGN&baseCurrency=CAD&amount=9000`;

  const exCurrencyData = currencies?.data?.currency?.map((item: any) => {
    return {
      name: `${item?.code_description} (${item?.ref_code})`,
      avatar: item?.url,
      ...item,
    };
  });
  // console.log("currencies", exCurrencyData);
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
                  {loading ? (
                    <div className=" flex items-center justify-center">
                      <SmallSpinner />
                    </div>
                  ) : (
                    <div className="mt-4  text-gray-800 space-y-6 ">
                      <CustomDropdown
                        isOpen={isOpen}
                        setIsOpen={handleSetIsOpen}
                        selectedProvider={selectedFrom}
                        setSelectedProvider={setSelectedFrom}
                        data={exCurrencyData}
                        handleRadioChange={handleRadioChange}
                        label="From"
                        subLabel={"From"}
                      />
                      {error && (
                        <p className="text-red-600 text-sm -mt-4">
                          {error === "Not Found"
                            ? "Exchange Currency Not Found"
                            : error}
                        </p>
                      )}
                      <CustomDropdown
                        isOpen={isOpenTo}
                        setIsOpen={handleSetIsOpenTo}
                        selectedProvider={selectedTo}
                        setSelectedProvider={setSelectedTo}
                        data={exCurrencyData}
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
                          // type="text"
                          id="default-input"
                          placeholder="Amount ₦"
                          type="number"
                          value={searchAmount}
                          onChange={(e) => setSearchAmount(e.target.value)}
                          // onChange={(e) => {
                          //   const search = e.target.value;
                          //   setSearchAmount(search);
                          // }}
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
                          disabled
                          placeholder={
                            loadingExchange
                              ? ""
                              : `${formatNumber(showCurrData)} ${showCurruncy}`
                          }
                          className="bg-[#F2F2F2] border-[1.5px] text-gray-900 border-[#DCDCDC] text-base rounded-lg block placeholder:text-gray-900 font-medium w-full p-2.5 py-3 h-16 outline-none text-right"
                        />
                        {loadingExchange && (
                          <div className=" absolute top-4 right-5">
                            <SmallSpinner />
                          </div>
                        )}
                      </div>
                      {errorExchange && (
                        <p className="text-red-600 text-sm -mt-4">
                          {errorExchange}
                        </p>
                      )}
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
                  )}
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
