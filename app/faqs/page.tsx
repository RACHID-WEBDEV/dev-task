import React from "react";
import Header from "@/components/Header";
import FaqPage from "./FaqPage";

export const metadata = {
  title: "Revve || FAQ - Frequently Asked Questions",
  description: "Revve Frequently Asked Questions",
};
const Page = () => {
  // const pathname = usePathname();
  return (
    <>
      <Header logoWhite={true} />
      <FaqPage />
    </>
  );
};

export default Page;
