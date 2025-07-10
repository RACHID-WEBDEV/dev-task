import Image from "next/image";
import React from "react";

const DownloadModal = ({ setOpenModal }: any) => {
  return (
    <>
      <div
        id="popup-modal"
        tabIndex={-1}
        onClick={() => setOpenModal(false)}
        className=" overflow-y-auto overflow-x-hidden bg-black/80 fixed top-0 right-0 left-0 z-50 justify-center items-center w-full inset-0  max-h-full px-2"
      >
        <div className="relative  lg:p-4 w-full h-full max-h-full ">
          <div className=" bg-white px-6  py-10 lg:p-10  rounded-[48px] shadow-sm w-full  lg:max-w-lg  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="  ">
              <div className="">
                <div className="  ">
                  <h2 className="font-semibold text-3xl lg:text-[44px] text-center text-black max-w-lg tracking-wide">
                    Get the Revve app
                  </h2>
                  <div className="mt-4  text-gray-800 ">
                    <p className=" text-center ">
                      Select your device & scan the QR code to download
                    </p>

                    {/* <p className="pt-6">Get Revve on your phone</p> */}
                    <div className="flex items-center gap-2.5 justify-center flex-wrap my-6">
                      <button
                        type="button"
                        className="text-gray-900 bg-white hover:bg-gray-100 border-2 border-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-100  rounded-full text-base font-bold px-14 py-4 text-center inline-flex items-center  me-2 mb-2 cursor-pointer"
                      >
                        <svg
                          width={21}
                          height={20}
                          className="w-5 h-5 me-2 -ms-1"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.4991 8.50056L15.1121 6.54431L11.6447 10.0118L15.1119 13.479L18.5106 11.5163C19.0406 11.1943 19.3569 10.6318 19.3569 10.0118C19.3569 9.3918 19.0404 8.8293 18.4991 8.50056Z"
                            fill="#FFCE00"
                          />
                          <path
                            d="M11.6446 10.0117L2.19987 0.499023C1.87137 0.827522 1.67188 1.27327 1.67188 1.76602V18.2285C1.67188 18.7212 1.87137 19.167 2.19987 19.4957L11.6446 10.0117Z"
                            fill="url(#paint0_linear_30_5186)"
                          />
                          <path
                            d="M11.6446 10.0118L15.1121 6.54429L15.1176 6.53879L10.4716 3.8638L4.34713 0.264314C3.79563 -0.0759346 3.12689 -0.0876845 2.56364 0.229064C2.43464 0.311064 2.31714 0.393314 2.19989 0.498814L11.6446 10.0118Z"
                            fill="#00F076"
                          />
                          <path
                            d="M2.19989 19.4954C2.31714 19.6009 2.43464 19.6832 2.56364 19.7652C2.84514 19.9177 3.13864 19.9999 3.43189 19.9999C3.74864 19.9999 4.05363 19.9062 4.33538 19.7419L10.4714 16.1597L15.1173 13.4847L15.1118 13.4792L11.6446 10.0117L2.19989 19.4954Z"
                            fill="#F63448"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_30_5186"
                              x1="-2.54911"
                              y1="14.7465"
                              x2="6.94911"
                              y2="5.24801"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#00E2FF" />
                              <stop offset={1} stopColor="#00C5FF" />
                            </linearGradient>
                          </defs>
                        </svg>
                        Android
                      </button>
                      <button
                        type="button"
                        className="text-white bg-black hover:bg-black/80 focus:ring-4 focus:outline-none focus:ring-black/50  rounded-full text-base font-bold px-14 py-4 text-center inline-flex items-center  me-2 mb-2 cursor-pointer"
                      >
                        <svg
                          width={20}
                          height={20}
                          className="w-4 h-4 me-2 -ms-1"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_30_5194)">
                            <path
                              d="M15.8984 20H4.10156C1.83996 20 0 18.16 0 15.8984V4.10156C0 1.83996 1.83996 0 4.10156 0H15.8984C18.16 0 20 1.83996 20 4.10156V15.8984C20 18.16 18.16 20 15.8984 20Z"
                              fill="#00C3FF"
                            />
                            <path
                              d="M15.8984 0H10V20H15.8984C18.16 20 20 18.16 20 15.8984V4.10156C20 1.83996 18.16 0 15.8984 0Z"
                              fill="#00AAF0"
                            />
                            <path
                              d="M6.15817 15.4107C5.97751 15.7237 5.64856 15.8988 5.31079 15.8988C5.1452 15.8988 4.97755 15.8568 4.82415 15.7682C4.35782 15.499 4.19747 14.9005 4.46669 14.4342L4.65876 14.1016H6.91403L6.15817 15.4107Z"
                              fill="white"
                            />
                            <path
                              d="M4.31641 13.3203C3.77793 13.3203 3.33984 12.8822 3.33984 12.3437C3.33984 11.8052 3.77793 11.3672 4.31641 11.3672H6.23742L8.87234 6.80333L8.15824 5.56645C7.88902 5.10012 8.04934 4.50168 8.51566 4.23243C8.98199 3.96321 9.58047 4.1236 9.84969 4.58989L10 4.85024L10.1503 4.58993C10.4196 4.12356 11.0181 3.96325 11.4843 4.23247C11.7102 4.3629 11.8718 4.57348 11.9393 4.82543C12.0068 5.07739 11.9721 5.34059 11.8417 5.56649L8.49269 11.3672H10.6052L11.7328 13.3203H4.31641Z"
                              fill="white"
                            />
                            <path
                              d="M15.6836 13.3203H14.8902L15.5333 14.4342C15.8025 14.9005 15.6422 15.4989 15.1759 15.7682C15.0254 15.8551 14.8584 15.8995 14.6891 15.8995C14.6043 15.8995 14.519 15.8883 14.4348 15.8658C14.1828 15.7982 13.9722 15.6366 13.8418 15.4107L10.451 9.53772L11.5786 7.58459L13.7626 11.3672H15.6836C16.2221 11.3672 16.6602 11.8053 16.6602 12.3438C16.6602 12.8823 16.2221 13.3203 15.6836 13.3203Z"
                              fill="#F2F2F2"
                            />
                            <path
                              d="M10 11.3672V13.3203H11.7328L10.6052 11.3672H10Z"
                              fill="#F2F2F2"
                            />
                            <path
                              d="M11.9393 4.82542C11.8718 4.57347 11.7102 4.36284 11.4843 4.23245C11.018 3.96323 10.4196 4.12351 10.1503 4.58991L10 4.85023V8.75648L11.8417 5.56648C11.9721 5.34058 12.0068 5.07741 11.9393 4.82542Z"
                              fill="#F2F2F2"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_30_5194">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        iPhone
                      </button>
                    </div>
                    <div>
                      <Image
                        src="/images/qr-code.svg"
                        alt="QR Code"
                        width={200}
                        height={200}
                        className="mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadModal;
