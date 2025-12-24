"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Intro = () => {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNav(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showNav && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
          className="fixed inset-0 bg-[#fdf571] z-[9999] overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 flex items-center"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 6,        
              ease: "linear",
            }}
          >
            <h1
              className="
                text-[30vw]
                font-extrabold
                text-black
                whitespace-nowrap
                leading-tighter
                tracking-tighter
              "
            >
IAmGauriIAmGauriIAmGauriIAmGauri            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;
