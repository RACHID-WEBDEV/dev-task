"use client";
import React, { useEffect, useState } from "react";
import Contactsection from "@/components/Contactsection";

import Image from "next/image";
import { postData } from "@/utils/axiosInstanceContact";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  type Errors = {
    first_name?: string;
    last_name?: string;
    email?: string;
    phone_number?: string;
    message?: string;
  };

  const [errors, setErrors] = useState<Errors>({});
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  ); // success or error

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = (): Errors => {
    const newErrors: Errors = {};

    if (!formData.first_name.trim()) {
      newErrors.first_name = "First name is required";
    }

    if (!formData.last_name.trim()) {
      newErrors.last_name = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone_number.trim()) {
      newErrors.phone_number = "Phone number is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // ✅ Real-time error clearing useEffect
  useEffect(() => {
    const newErrors: Errors = { ...errors };

    if (formData.first_name.trim()) delete newErrors.first_name;
    if (formData.last_name.trim()) delete newErrors.last_name;
    if (formData.email.trim() && /\S+@\S+\.\S+/.test(formData.email))
      delete newErrors.email;
    if (formData.phone_number.trim()) delete newErrors.phone_number;
    if (formData.message.trim()) delete newErrors.message;

    if (JSON.stringify(newErrors) !== JSON.stringify(errors)) {
      setErrors(newErrors);
    }
  }, [formData, errors]);

  const [loading, setLoading] = useState(false);
  const [getError, setGetError] = useState(null);
  type SuccessResponse = { message?: string; [key: string]: any };
  const [getSuccess, setGetSuccess] = useState<SuccessResponse | null>(null);
  console.log("getSuccess", getSuccess);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      //   // Form is valid — you can now send the form data to your API
      //   console.log("Form submitted:", formData);

      setLoading(true);
      try {
        const response = await postData("util/feedback", formData);
        setGetSuccess(response);
        setGetError(null);
        setSubmitStatus("success");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone_number: "",
          message: "",
        });
      } catch (error: any) {
        setGetError(error.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    } else {
      setSubmitStatus("error");
    }
  };

  return (
    <>
      <div className="pt-20 bg-white">
        <div>
          <main className="relative snap-mandatory snap-y mt-24">
            <section className="max-container px-4 lg:px-[4rem]  overflow-y-hidden">
              <div className="text-center lg:mt-[2rem]">
                <div className="w-full mb-8 lg:mb-12 ">
                  <h1 className="mb-3  text-3xl lg:text-4xl 1xl:text-6xl text-black">
                    Get in touch
                  </h1>
                  <p className="mb-3 max-sm:w-[80%] mx-auto  text-gray-500">
                    Do you have any questions or feedback?
                    <br className="max-sm:hidden " />
                    We&apos;d love to hear from you.
                  </p>
                </div>
              </div>
              <div className="my-[2rem] lg:my-[4rem]">
                <div className="flex flex-col md:flex-row lg:space-x-2 lg:px-14 ">
                  <div className=" flex-1 my-3">
                    <div className=" bg-purple-gradient px-[2rem] py-[3rem] lg:p-[3rem] rounded-2xl">
                      <h4 className="text-white text-2xl lg:text-4xl">
                        Contact Information
                      </h4>
                      <p className="text-white my-8">
                        Fill up the form and we’ll get back to you in few hours.
                      </p>
                      <div className="flex flex-col gap-8">
                        <p className="text-white">
                          <Image
                            alt="Call"
                            width={24}
                            height={24}
                            className="inline-block"
                            style={{ color: "transparent" }}
                            src="/images/Call.svg"
                          />
                          <span className="inline-block ml-3">
                            +1(343)338-5190
                          </span>
                        </p>
                        <p className="text-white">
                          <Image
                            alt="Message"
                            width={24}
                            height={24}
                            className="inline-block"
                            style={{ color: "transparent" }}
                            src="/images/Message.svg"
                          />
                          <span className="inline-block ml-3">
                            hello@revveme.com
                          </span>
                        </p>
                        <p className="text-white">
                          <Image
                            alt="Location"
                            width={24}
                            height={24}
                            className="inline-block"
                            style={{ color: "transparent" }}
                            src="/images/Location.svg"
                          />
                          <span className="inline-block ml-3">
                            2482 Yonge St Toronto ON M4P 2H5
                          </span>
                        </p>
                      </div>
                      <div className="h-[5rem]" />
                      <div className="flex space-x-3 my-3">
                        <a
                          target="_blank"
                          href="https://facebook.com/profile.php?id=61572466705088&sk=about"
                        >
                          <Image
                            alt="Facebook"
                            width={37}
                            height={37}
                            style={{ color: "transparent" }}
                            src="/images/Facebook.svg"
                          />
                        </a>
                        <a target="_blank" href="https://x.com/InfoRevve">
                          <Image
                            alt="X"
                            loading="lazy"
                            width={37}
                            height={37}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            src="/images/Twitter.svg"
                          />
                        </a>
                        <a
                          target="_blank"
                          href="https://linkedin.com/company/revve/about/?viewAsMember=true"
                        >
                          <Image
                            alt="Linkedin"
                            width={37}
                            height={37}
                            style={{ color: "transparent" }}
                            src="/images/Linkedin.svg"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 lg:p-6  p-4">
                    <form onSubmit={handleSubmit}>
                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                        {/* First Name */}
                        <div className="sm:col-span-3 mb-4">
                          <label className="block text-sm font-medium text-gray-900">
                            First name
                          </label>
                          <input
                            type="text"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            placeholder="John"
                            className="bg-white border text-gray-700 border-gray-500 text-base rounded-lg w-full p-2.5 py-3 h-12 outline-none"
                          />
                          {errors.first_name && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.first_name}
                            </p>
                          )}
                        </div>

                        {/* Last Name */}
                        <div className="sm:col-span-3 mb-4">
                          <label className="block text-sm font-medium text-gray-900">
                            Last name
                          </label>
                          <input
                            type="text"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            placeholder="Doe"
                            className="bg-white border text-gray-700 border-gray-500 text-base rounded-lg w-full p-2.5 py-3 h-12 outline-none"
                          />
                          {errors.last_name && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.last_name}
                            </p>
                          )}
                        </div>

                        {/* Email */}
                        <div className="sm:col-span-3 mb-4">
                          <label className="block text-sm font-medium text-gray-900">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@mail.com"
                            className="bg-white border text-gray-700 border-gray-500 text-base rounded-lg w-full p-2.5 py-3 h-12 outline-none"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.email}
                            </p>
                          )}
                        </div>

                        {/* Phone Number */}
                        <div className="sm:col-span-3 mb-4">
                          <label className="block text-sm font-medium text-gray-900">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            placeholder="+2348012345678"
                            className="bg-white border text-gray-700 border-gray-500 text-base rounded-lg w-full p-2.5 py-3 h-12 outline-none"
                          />
                          {errors.phone_number && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.phone_number}
                            </p>
                          )}
                        </div>

                        {/* Message */}
                        <div className="col-span-full">
                          <label className="block text-sm font-medium text-gray-900">
                            Message
                          </label>
                          <textarea
                            name="message"
                            rows={3}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Type here..."
                            className="bg-white border text-gray-700 border-gray-500 text-base rounded-lg w-full p-2.5 py-3 outline-none"
                          />
                          {errors.message && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Submit Feedback */}
                      {submitStatus === "success" && (
                        <p className="text-green-600 mt-2 col-span-full">
                          {/* Awesome! Message sent. */}
                          {/* {getSuccess?.message} */}
                          Message sent succesfully, Our support team will
                          contact you shortly
                        </p>
                      )}
                      {submitStatus === "error" && (
                        <p className="text-red-500 mt-2 col-span-full">
                          Oops! Please fix the errors above.
                        </p>
                      )}
                      {getError && (
                        <p className="text-red-500 mt-2 col-span-full">
                          {getError}
                        </p>
                      )}
                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="button-primary w-full max-w-xs mt-6"
                      >
                        <span className="text">
                          {loading ? "Sending..." : "Send Message"}
                        </span>
                        <span className="whitespace-nowrap">
                          {loading ? "Sending..." : "Send Message"}
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>

        <Contactsection />
      </div>
    </>
  );
};

export default ContactPage;
