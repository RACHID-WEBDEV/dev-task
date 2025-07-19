"use client";
import React, { useEffect, useState } from "react";
import FaqAccordion from "@/components/Faq";

// import { faqContent } from "@/data/faqData";
import { SearchIcon, XIconSmall } from "@/public/SvgsIcon";
import { getData } from "@/utils/axiosInstance";
import SmallSpinner from "@/components/SmallSpinner";
import classNames from "classnames";

const FaqPage = () => {
  // const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [faqsData, setFaqsData] = useState<any>(undefined);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFetchFaqs = async (
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

  // useEffect(() => {
  //   handleFetchFaqs("/faqs", "", "", "question,answer");
  // }, []);

  const fetchFaqSearchData = async (e: any) => {
    e.preventDefault();
    if (searchQuery.length >= 2) {
      handleFetchFaqs("/faqs", searchQuery, "", "question,answer");
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
        handleFetchFaqs("/faqs", "", currentPage, "question,answer");
      }
    };
    fetchFaqSearchPagenate();
  }, [currentPage]);

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
                  <h3 className="text-2xl lg:text-3xl 1xl:text-5xl font-semibold text-white pb-2">
                    Frequently Asked Questions
                  </h3>
                  <p className="text-base pt-1 text-gray-400 pb-6 max-w-lg text-center ">
                    Ut enim ad minim veniam quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat aute irure
                    dolor
                  </p>
                </div>
                <form
                  onSubmit={fetchFaqSearchData}
                  className="flex flex-col lg:flex-row gap-y-3 lg:gap-y-0 items-center max-w-lg mx-auto mb-6"
                >
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
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery.length >= 3 && (
                      <div
                        onClick={() => {
                          setSearchQuery("");
                          handleFetchFaqs("/faqs", "", "", "question,answer");
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
                      <div className="flex text-sm whitespace-nowrap text-muted-foreground">
                        <div className="text-gray-200">
                          Showing Page {pageData?.page} out of{" "}
                          {pageData?.total_pages}{" "}
                          {pageData?.page <= 1 ? "Page" : "Pages"}
                        </div>
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
    </>
  );
};

export default FaqPage;
