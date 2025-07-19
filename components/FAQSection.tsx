import React, { useEffect, useState } from "react";
import FaqAccordion from "./Faq";
import Link from "next/link";
// import { faqContent } from "@/data/faqData";
import { getData } from "@/utils/axiosInstance";
import SmallSpinner from "./SmallSpinner";

const FAQSection = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [faqsData, setFaqsData] = useState<any>(undefined);
  // const [searchQuery, setSearchQuery] = useState("");

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

  useEffect(() => {
    handleFetchFaqs("/faqs", "", "", "question,answer");
  }, []);
  const data = faqsData?.data?.faqs?.slice(0, 6);
  return (
    <>
      <section className="relative bg-cover bg-center w-full h-full  bg-no-repeat bg-[#4F0072] pt-10 lg:pt-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4  text-black lg:px-16 lg:py-10 relative">
          <div className="lg:sticky lg:top-10 h-fit">
            <div className=" pt-20">
              <div className=" px-4 ">
                <h2 className="font-semibold text-2xl lg:text-5xl text-white max-w-lg tracking-wide">
                  FAQs
                </h2>
                <div className="mt-8 max-w-[310px] text-gray-100 font-medium space-y-4">
                  <p className=" leading-[1.3]">
                    Here are some basic questions and answers to help you get
                    started.
                  </p>
                  <div>
                    <Link href="/faqs">
                      <button
                        // onClick={() => setOpenModal(true)}
                        className="button-alt"
                        role="button"
                      >
                        <span className="text">Read More FAQs</span>
                        <span className=" whitespace-nowrap">
                          Click & Read More
                        </span>
                      </button>
                    </Link>
                  </div>
                  {/* <p className="pt-6">Get Revve on your phone</p>
                  <div>
                    <button
                      onClick={() => setOpenModal(true)}
                      className="button-alt-outline"
                      role="button"
                    >
                      <span className="text">Download the app</span>
                      <span className=" whitespace-nowrap">
                        Click to Download
                      </span>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
            {/* <h1
              className={`text-4xl lg:text-5xl font-bold max-w-[150px] pb-8 lg:pb-12 `}
            >
              Privacy Policy
            </h1>
            <h1
              className={`text-4xl lg:text-5xl font-bold max-w-[150px] pb-8 `}
            >
              Terms of use
            </h1> */}
          </div>
          <div className="col-span-2">
            {/* <FaqAccordion data={data} />{" "} */}
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
                    <FaqAccordion data={data} />
                  </>
                )}
              </div>
            )}
          </div>
        </div>
        {/* <div className=" absolute  top-1/2 transform -translate-y-1/2 w-full">
          <div className=" flex items-center flex-wrap justify-between px-4 lg:px-20">
            <div className=" sticky top-0 left-0 lg:top-10 h-fit">
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
        </div> */}
      </section>
    </>
  );
};

export default FAQSection;
