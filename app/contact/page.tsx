import React from "react";
import Header from "@/components/Header";
import ContactPage from "./ContactPage";

const Page = () => {
  // const pathname = usePathname();
  return (
    <>
      <Header logoWhite={false} />
      <ContactPage />
    </>
  );
};

export default Page;
