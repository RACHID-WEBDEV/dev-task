// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
import LinkedIcon, {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
  XIcon,
} from "@/public/SvgsIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contactsection = () => {
  // useGSAP(() => {
  // gsap.to("#mail-1", {
  //   y: -350,
  //   // rotation: 360,
  //   // borderRadius: "100%",
  //   duration: 3,
  //   ease: "power2.inOut",
  //   scrollTrigger: {
  //     trigger: "#contact-section",
  //     start: "top top",
  //     end: "bottom bottom",
  //     scrub: 1,
  //     markers: true, // set to true for debugging
  //   },
  // });
  // gsap.to("#product-2", {
  //   y: -300,
  //   // rotation: 360,
  //   // borderRadius: "100%",
  //   duration: 1,
  //   ease: "power2.inOut",
  //   scrollTrigger: {
  //     trigger: "#contact-section",
  //     start: "top 50%",
  //     end: "bottom 30%",
  //     scrub: 1,
  //     markers: false, // set to true for debugging
  //   },
  // });
  // gsap.to("#text-bodey", {
  //   y: -100,
  //   // rotation: 360,
  //   // borderRadius: "100%",
  //   duration: 1,
  //   ease: "power2.inOut",
  //   scrollTrigger: {
  //     trigger: "#contact-section",
  //     start: "top 50%",
  //     end: "bottom 30%",
  //     scrub: 1,
  //     markers: false, // set to true for debugging
  //   },
  // });
  // });
  return (
    <section
      id="contact-section"
      className="relative p-4 pt-14 lg:p-20 lg:py-24 bg-primary h-full 1xl:h-screen overflow-hidden z-10"
    >
      <div className="backdrop-blur top-[10%] transition-colors bg-[#6D1F8F]/40 rounded-2xl p-2 lg:p-10 py-6 lg:py-16  max-w-xs lg:max-w-5xl xl:max-w-6xl 1xl:max-w-7xl  w-full mx-auto">
        <div className="lg:flex items-center">
          <div className="lg:w-1/2 lg:pl-16 ">
            <div className="  ">
              <div className=" px-4 ">
                <h2 className="font-semibold text-2xl lg:text-5xl text-white max-w-lg tracking-wide">
                  Get in touch!
                </h2>
                <div className="mt-8 max-w-[330px] text-gray-100 font-medium space-y-4">
                  <p className=" leading-[1.3]">
                    Do you have any questions or feedback? We&apos;d love to
                    hear from you.
                  </p>
                </div>
              </div>
            </div>

            <div className=" p-4  text-white pt-10">
              <div className="mb-4 flex items-center space-x-2">
                <span className="flex size-6 shrink-0 items-center justify-center ">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.1152 16C15.1545 16 16 15.1523 16 14.1102V11.5906C16 11.3193 15.827 11.0787 15.5705 10.9932L11.8097 9.73338C11.6256 9.67127 11.4244 9.69953 11.2625 9.80657L9.66354 10.8751C7.97014 10.0656 5.9608 8.0509 5.15334 6.35305L6.21906 4.74994C6.32641 4.58814 6.35342 4.38576 6.29206 4.20124L5.03552 0.430572C4.95028 0.17348 4.71037 0 4.43979 0H1.88482C0.845487 0 0 0.838845 0 1.8809C0 9.13852 6.87657 16 14.1152 16Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <div>
                  <a
                    href="tel:123-123-456"
                    className="text-base font-medium hover:text-gray-300 "
                  >
                    +1(343)338-5190
                  </a>
                </div>
              </div>
              <div className="mb-4 flex items-center space-x-2">
                <span className="flex size-6 shrink-0 items-center justify-center ">
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.17442 0.5L12.8256 0.5C13.1765 0.499992 13.4793 0.499984 13.7299 0.517347C13.9938 0.535637 14.2577 0.575855 14.5185 0.685543C15.1065 0.932933 15.5738 1.40746 15.8173 2.00471C15.9253 2.26953 15.9649 2.53758 15.983 2.80557C16 3.06009 16 3.36761 16 3.72401V10.276C16 10.6324 16 10.9399 15.983 11.1944C15.9649 11.4624 15.9253 11.7305 15.8173 11.9953C15.5738 12.5925 15.1065 13.0671 14.5185 13.3144C14.2577 13.4241 13.9938 13.4643 13.7299 13.4827C13.4793 13.5 13.1765 13.5 12.8256 13.5H3.17441C2.82349 13.5 2.5207 13.5 2.2701 13.4827C2.00623 13.4643 1.7423 13.4241 1.48156 13.3144C0.893496 13.0671 0.426272 12.5925 0.182688 11.9953C0.0746883 11.7305 0.0350883 11.4624 0.0170803 11.1944C-1.57282e-05 10.9399 -7.65387e-06 10.6324 3.46134e-07 10.276L3.46134e-07 3.72402C-7.65387e-06 3.36761 -1.57282e-05 3.06009 0.0170803 2.80557C0.0350883 2.53758 0.0746883 2.26953 0.182688 2.00471C0.426272 1.40746 0.893496 0.932933 1.48156 0.685543C1.7423 0.575855 2.00623 0.535637 2.2701 0.517347C2.5207 0.499984 2.8235 0.499992 3.17442 0.5ZM1.85396 2.35069C2.14491 2.01299 2.65032 1.97877 2.98283 2.27426L7.4732 6.26469C7.7748 6.53273 8.2252 6.53273 8.5268 6.26469L13.0172 2.27426C13.3497 1.97877 13.8551 2.01299 14.146 2.35069C14.437 2.6884 14.4033 3.2017 14.0708 3.49719L9.5804 7.48766C8.67552 8.29179 7.32448 8.29179 6.4196 7.48766L1.92922 3.49719C1.59671 3.2017 1.56302 2.6884 1.85396 2.35069Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <div>
                  <a
                    href="mailto:hello@revveme.com"
                    className="text-base font-medium not-italic hover:text-gray-300 "
                  >
                    hello@revveme.com
                  </a>
                </div>
              </div>
              <div className="flex items-start lg:items-center space-x-2">
                <span className="flex size-6 shrink-0 items-center justify-center ">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.1716 1.49112C11.4171 0.873347 10.5349 0.430718 9.58867 0.195159C8.64241 -0.0404 7.65567 -0.0630176 6.69961 0.128938C5.47032 0.380967 4.33938 0.981049 3.44152 1.8577C2.54366 2.73435 1.91672 3.85062 1.63538 5.07354C1.35404 6.29645 1.43016 7.57447 1.85468 8.75534C2.27919 9.93621 3.03421 10.9702 4.02979 11.734C5.16646 12.566 6.13426 13.6068 6.88143 14.801L7.39052 15.6475C7.45517 15.755 7.54655 15.844 7.65577 15.9058C7.76498 15.9675 7.88832 16 8.01379 16C8.13926 16 8.2626 15.9675 8.37181 15.9058C8.48103 15.844 8.57241 15.755 8.63706 15.6475L9.12507 14.8344C9.7757 13.6907 10.6628 12.6989 11.7273 11.9253C12.5619 11.3511 13.2516 10.5907 13.7421 9.70432C14.2326 8.81788 14.5104 7.82959 14.5535 6.81743C14.5967 5.80527 14.4041 4.79692 13.9908 3.87195C13.5776 2.94698 12.955 2.13069 12.1723 1.48748L12.1716 1.49112ZM8.01306 9.45549C7.4377 9.45549 6.87526 9.28488 6.39686 8.96522C5.91846 8.64557 5.54559 8.19123 5.32541 7.65966C5.10523 7.1281 5.04762 6.54317 5.15987 5.97886C5.27211 5.41456 5.54918 4.8962 5.95602 4.48936C6.36287 4.08252 6.88122 3.80545 7.44553 3.6932C8.00984 3.58095 8.59476 3.63856 9.12633 3.85875C9.65789 4.07893 10.1122 4.4518 10.4319 4.93019C10.7515 5.40859 10.9222 5.97104 10.9222 6.5464C10.9222 7.31794 10.6157 8.05788 10.0701 8.60344C9.52454 9.149 8.7846 9.45549 8.01306 9.45549Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <div>
                  <address className="text-base font-medium not-gray-300 ">
                    2482 Yonge St Toronto ON M4P 2H5
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-2 lg:mb-0 w-full max-w-md px-2 lg:px-12 pt-4 lg:pt-0">
            <form id="contact-form" method="post">
              <div className="flex flex-col">
                <div className="mb-6 ">
                  <label
                    htmlFor="name"
                    className="mb-1 block font-semibold text-sm text-white dark:text-white"
                  >
                    Firstname
                  </label>
                  <input
                    type="text"
                    id="default-input"
                    placeholder="Firstname Lastname"
                    className="bg-transparent border text-gray-100 border-white/30 hover:border-white/50 text-sm rounded-lg block placeholder:text-[#CA92E3] font-medium w-full p-2.5 py-3 outline-none "
                  />
                </div>
                <div className="mb-6 ">
                  <label
                    htmlFor="email"
                    className="mb-1 block font-semibold text-sm text-white dark:text-white"
                  >
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="default-input"
                    placeholder="johndoe@gmail.com"
                    className="bg-transparent border text-gray-100 border-white/30 hover:border-white/50  text-sm rounded-lg block placeholder:text-[#CA92E3] font-medium w-full p-2.5 py-3 outline-none "
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="mb-1 block font-semibold text-sm text-white dark:text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="contact-form-input w-full text-gray-100 outline-none rounded-lg border border-white/30 py-3 p-2.5 hover:border-white/50 ring-0 placeholder:text-[#CA92E3] font-medium"
                  placeholder="Type here.."
                  name="message"
                  rows={5}
                  defaultValue={""}
                />
              </div>

              <div>
                <button className="button-alt w-full" role="button">
                  <span className="text">Send message</span>
                  <span className=" whitespace-nowrap">Send message</span>
                </button>
              </div>
              <div
                id="contact-form-notice"
                className="relative mt-4 hidden rounded-lg border border-transparent p-4"
              />
            </form>
          </div>
        </div>
      </div>

      <div
        className="absolute lg:bottom-12 bottom-40 left-0  -z-10"
        id="mail-1"
      >
        <Image
          src="/images/message-vector.svg"
          alt="send icon"
          width={197}
          height={138}
          className="vector-icon w-[80px] lg:w-[197px]"
        />
      </div>
      <div className="absolute top-20 -right-8 lg:right-0 ">
        <Image
          src="/images/inbox-vector.svg"
          alt="inbox icon"
          width={227}
          height={228}
          className="vector-icon w-[100px] lg:w-[227px]"
        />
      </div>
      <div className="absolute top-44 lg:top-80 right-0 -z-10">
        <Image
          src="/images/call-vector.svg"
          alt="call icon"
          width={288}
          height={238}
          className="vector-icon w-[120px] lg:w-[288px]"
        />
      </div>
      <div className=" w-full ">
        <div className=" pt-20 ">
          <div className=" flex items-center  justify-center lg:justify-between flex-wrap w-full gap-4 px-4  lg:px-20">
            <div className=" flex items-center gap-4">
              <a
                href="https://linkedin.com/company/revve/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIcon />
              </a>
              <a
                href="https://facebook.com/profile.php?id=61572466705088&sk=about"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://x.com/InfoRevve"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon />
              </a>
              <a
                href="https://instagram.com/revve_me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://wa.me/message/U5ERLJRIPL7UB1"
                target="_blank"
                rel="noopener noreferrer"
                className="fill-white"
              >
                <WhatsAppIcon />
              </a>
            </div>

            <ul className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 text-white text-base font-medium">
              <li className="">
                <Link href="/about"> About Us</Link>
              </li>
              <li className="">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="">
                <Link href="/terms-of-use">Terms of use</Link>
              </li>
              <li className="">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="">
                ©{new Date().getFullYear()} Revve. All rights reserved
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactsection;
