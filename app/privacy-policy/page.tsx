"use client";
import React from "react";

import Contactsection from "@/components/Contactsection";

const Page = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 bg-white text-black lg:px-16 lg:py-10">
        <div>
          <h1 className="text-4xl font-bold">Our Mission</h1>
        </div>
        <div className="col-span-2">
          <p className="text-3xl lg:text-5xl font-medium mb-4">
            We are building Revve to break down the limitations of financial
            borders and redefine global transactions.
          </p>
        </div>
      </div>

      <Contactsection />
    </div>
  );
};

export default Page;
