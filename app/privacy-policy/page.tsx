"use client";
import React from "react";

import Contactsection from "@/components/Contactsection";

const Page = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 bg-white text-black lg:px-16 lg:py-10">
        <div>
          <h1 className="text-5xl font-bold">Privacy Policy</h1>
        </div>
        <div className="col-span-2">
          <p className="text-3xl lg:text-5xl font-medium mb-4">
            This Privacy Policy applies to Linearsend Inc product (&ldquo;Revve)
            and sets out how Revve collects, uses, stores, shares and protects
            any information that you give Revve when you subscribe to its
            services. Revve is committed to ensuring that your privacy is
            protected. Should we ask you to provide certain information when
            subscribing to our services; you can be assured that it will only be
            used in accordance with this Privacy Policy.
          </p>
        </div>
      </div>

      <Contactsection />
    </div>
  );
};

export default Page;
