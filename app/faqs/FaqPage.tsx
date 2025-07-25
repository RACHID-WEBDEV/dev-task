/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import FaqAccordion from "@/components/Faq";

// import { faqContent } from "@/data/faqData";
import { XIconSmall } from "@/public/SvgsIcon";
import { getData } from "@/utils/axiosInstance";
import SmallSpinner from "@/components/SmallSpinner";
import classNames from "classnames";
import NewCustomDropdown from "@/components/NewCustomDropdown";
import Contactsection from "@/components/Contactsection";

const FaqPage = () => {
  const [isOpenCategory, setIsOpenCategory] = useState(false);

  type DropdownOption = { name: string; [key: string]: any };

  const [selectedCategory, setSelectedCategory] =
    useState<DropdownOption | null>(null);
  const handleSetIsOpenCategory = (value: any) => {
    setIsOpenCategory(value);
    // if (value) setIsOpenUserType(false); // close To if opening this
  };

  console.log("selectedCategory", selectedCategory);
  // const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [faqsData, setFaqsData] = useState<any>(undefined);
  const [searchQuery, setSearchQuery] = useState("");

  const [loadingCat, setLoadingCat] = useState(false);
  const [errorCat, setErrorCat] = useState("");
  const [faqsDataCat, setFaqsDataCat] = useState<any>(undefined);
  const sample_category = [
    {
      additional_code: "all_revve_category",
      base_code: "all_category",
      code_description: "All Revve Category",
      country: "GLOBAL",
      deleted_flag: false,
      id: 428 * 433,
      name: "All Categories",
      ref_code: "",
      subcategories: [],
    },
  ];

  const Category_data =
    faqsDataCat?.data?.map((item: any) => ({
      name: item?.code_description,
      ...item,
    })) || [];

  const all_cat = [...sample_category, ...Category_data];

  // console.log("all_cat", all_cat);
  const handleFetchFaqsCategory = async (
    url: any,
    search: any,
    page: any,
    search_fields: any
  ) => {
    const params = {
      ...(search && { search: search }),
      ...(page && { page: page }),
      ...(search_fields && { search_fields: search_fields }),
    };

    const queryString = Object.entries(params)
      .map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`) // Encode each key-value pair
      .join("&"); // Join the pairs with "&"

    // Append the query string to the base URL
    const fetchUrl = queryString ? `${url}?${queryString}` : url;

    setLoadingCat(true);
    try {
      const response = await getData(fetchUrl, "");
      setFaqsDataCat(response);
      // console.log("city res", response);
    } catch (error: any) {
      setErrorCat(error.response.data.message);
    } finally {
      setLoadingCat(false);
    }
  };

  const handleFetchFaqs = async (
    url: any,
    search: any,
    page: any,
    search_fields: any,
    faq_category_code: any
  ) => {
    const params = {
      ...(search && { search: search }),
      ...(page && { page: page }),
      ...(search_fields && { search_fields: search_fields }),
      ...(faq_category_code && { faq_category_code: faq_category_code }),
    };

    // Construct the query string dynamically
    const queryString = Object.entries(params)
      .map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`) // Encode each key-value pair
      .join("&"); // Join the pairs with "&"

    // Append the query string to the base URL
    const fetchUrl = queryString ? `${url}?${queryString}` : url;

    setLoading(true);
    try {
      const response = await getData(fetchUrl, "");
      setFaqsData(response);
      // console.log("city res", response);
    } catch (error: any) {
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchFaqsCategory("/faq-categories-with-subcategories", "", "", "");
  }, []);

  const fetchFaqSearchData = async (e: any) => {
    e.preventDefault();
    if (searchQuery.length >= 2) {
      handleFetchFaqs(
        "/faqs",
        searchQuery.toLowerCase(),
        "",
        "question,answer,faq_category_code,faq_sub_category_code",
        ""
      );
    }
  };

  const pageData = faqsData?.data?.page_info;

  const [currentPage, setCurrentPage] = useState(1);

  // useEffect(() => {
  //   if (pageData?.page !== currentPage) {
  //     setCurrentPage(pageData?.page);
  //   }
  // }, [pageData, currentPage]);

  useEffect(() => {
    const fetchFaqSearchPagenate = async () => {
      if (currentPage >= 1) {
        handleFetchFaqs(
          "/faqs",
          "",
          currentPage,
          "question,answer,faq_category_code,faq_sub_category_code",
          ""
        );
      }
    };
    fetchFaqSearchPagenate();
  }, [currentPage]);

  useEffect(() => {
    const fetchFaqCategory = async () => {
      if (selectedCategory?.ref_code) {
        handleFetchFaqs(
          "/faqs",
          "",
          "",
          "question,answer,faq_category_code,faq_sub_category_code",
          selectedCategory?.ref_code
        );
      } else if (selectedCategory?.ref_code === "") {
        handleFetchFaqs(
          "/faqs",
          "",
          "",
          "question,answer,faq_category_code,faq_sub_category_code",
          ""
        );
      }
    };
    fetchFaqCategory();
  }, [selectedCategory?.ref_code]);

  // console.log("currentPage", currentPage);

  const notEmpty =
    faqsData?.data?.faqs !== undefined || faqsData?.data?.faqs?.length === 0;

  return (
    <>
      <div className="pt-10 lg:pt-20 bg-primary">
        <section className="relative  overflow-hidden">
          {/* <div className="bg-cover -z-10 absolute top-0 bg-center w-full h-[450px] bg-no-repeat bg-[url('/images/authbg.png')] overflow-hidden"></div> */}
          <div className=" m-auto pt-16 lg:pt-20 xl:container px-1 lg:px-12 sm:px-0 mx-auto  z-30">
            <div className="mx-auto w-full h-full max-w-5xl ">
              <div className="m-auto py-12 mx-2">
                <div className=" flex flex-col items-center justify-center pb-6 lg:pb-10">
                  <h3 className="text-2xl lg:text-3xl 1xl:text-5xl text-center font-semibold text-white pb-2">
                    Frequently Asked Questions
                  </h3>
                  <p className="text-base pt-1 text-gray-400 pb-6 max-w-xl text-center ">
                    Have questions about how Revve works? You&apos;re in the
                    right place. This section covers the most common inquiries
                    about our services, features, payments, security, and more.
                  </p>
                </div>
                <form
                  onSubmit={fetchFaqSearchData}
                  className="flex flex-col lg:flex-row gap-y-3 lg:gap-y-0 items-center max-w-2xl mx-auto mb-6 "
                >
                  <div className="lg:min-w-48 lg:max-w-[250px] w-full relative ">
                    <div className="h-[54px] w-2 bg-white absolute z-10 hidden lg:block -right-1"></div>
                    <NewCustomDropdown
                      isOpen={isOpenCategory}
                      setIsOpen={handleSetIsOpenCategory}
                      selectedProvider={selectedCategory}
                      setSelectedProvider={setSelectedCategory}
                      data={all_cat}
                      label="Select Category"
                      // subLabel={"Selected"}
                      // selectColor = "border border-gray-300 bg-white  rounded-lg hover:bg-gray-100"
                      rounded="rounded-none"
                      selectColor="border-none border-gray-300 bg-white rounded-l-lg rounded-r-lg lg:rounded-l-lg lg:rounded-r-none hover:bg-white"
                    />
                  </div>
                  <label htmlFor="voice-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <SearchIcon />
                    </div> */}
                    <input
                      type="text"
                      id="voice-search"
                      className="bg-white border border-gray-300 text-gray-900 text-sm  rounded-l-lg rounded-r-lg lg:rounded-l-none lg:rounded-r-lg outline-none focus:border-none block w-full ps-4 p-2.5 py-4 h-[54px] focus:outline-none "
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery.length >= 3 && (
                      <div
                        onClick={() => {
                          setSearchQuery("");
                          handleFetchFaqs(
                            "/faqs",
                            "",
                            "",
                            "question,answer,faq_category_code,faq_sub_category_code",
                            ""
                          );
                        }}
                        className="absolute inset-y-0 end-2 flex items-center ps-3 cursor-pointer text-red-600"
                      >
                        <XIconSmall />
                      </div>
                    )}
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
                    // onClick={() => fetchFaqSearchData()}
                    className="cursor-pointer inline-flex items-center w-full justify-center lg:w-fit py-2.5 px-4 ms-2 text-sm font-medium text-gray-100 hover:text-white bg-primary rounded-lg border border-bills-secondary hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-800/30 "
                  >
                    Search
                  </button>
                </form>
                <div className=" bg-primary  px-4 lg:px-10 py-8 sm:py-10 rounded-xl shadow-md">
                  {errorCat && (
                    <p className="text-white  text-xl font-semibold flex items-center justify-center">
                      Failed to fetch Faqs categories
                    </p>
                  )}
                  {loading ? (
                    <div className=" flex items-center justify-center">
                      <SmallSpinner />
                    </div>
                  ) : (
                    <div className="">
                      {faqsData?.data?.faqs?.length === 0 ? (
                        <p className="text-white  text-xl font-semibold flex items-center justify-center">
                          No Faqs Found
                        </p>
                      ) : (
                        <>
                          {error && (
                            <p className="text-white  text-xl font-semibold flex items-center justify-center">
                              Failed to fetch Faqs
                            </p>
                          )}
                          <FaqAccordion data={faqsData?.data?.faqs} />
                        </>
                      )}
                    </div>
                  )}
                </div>
                {notEmpty && (
                  <div className="py-10 px-4">
                    <div className="flex items-center gap-4 flex-wrap  justify-between w-full">
                      <button
                        className={classNames(
                          " border-gray-400 p-0.5 px-2  bg-white border text-primary",
                          {
                            "cursor-not-allowed opacity-40": currentPage === 1,
                          }
                        )}
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev: any) => prev - 1)}
                      >
                        &laquo; Prev
                      </button>
                      <div className="text-gray-200 flex text-sm gap-1 whitespace-nowrap text-muted-foreground">
                        <span className=" hidden lg:flex">Showing Page</span>{" "}
                        {pageData?.page} out of {pageData?.total_pages}{" "}
                        {pageData?.page <= 1 ? "Page" : "Pages"}
                      </div>

                      <button
                        className={classNames(
                          " border-gray-400 p-0.5 px-2 bg-white border text-primary",
                          {
                            "cursor-not-allowed opacity-40":
                              currentPage === pageData?.total_pages,
                          }
                        )}
                        disabled={currentPage === pageData?.total_pages}
                        onClick={() => setCurrentPage((prev: any) => prev + 1)}
                      >
                        Next &raquo;
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Contactsection />
    </>
  );
};

export default FaqPage;
