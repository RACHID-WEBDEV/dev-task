"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
const PreLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="loadbody"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <div className="loading-container">
            <div className="loading-text">
              <span className=" !uppercase">R</span>
              <span>E</span>
              <span>V</span>
              <span>V</span>
              <span>E</span>
              <span>M</span>
              <span>E</span>
            </div>
          </div>
          {/* <p className="text-white mt-2 lg:mt-4 text-2xl lg:text-3xl font-ClashDisplay blinkText tracking-widest ">
            Loading...
          </p> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoader;
