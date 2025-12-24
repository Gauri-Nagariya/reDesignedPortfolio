"use client";
import React, { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { cursorEvents } from "../components/cursorController";

import { Tangerine } from "next/font/google";

const tangerine = Tangerine({
  subsets: ["latin"],
  weight: "400",
});

import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "400",
});

import { Black_Ops_One } from "next/font/google";

const BlackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: "400",
});

import { Goldman } from "next/font/google";

const goldman = Goldman({
  subsets: ["latin"],
  weight: "400",
});

import { Limelight } from "next/font/google";

const limelight = Limelight({
  subsets: ["latin"],
  weight: "400",
});

const Contact = () => {
  const ref = useRef(null);
  const [showNav, setShowNav] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"], 
  });

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.08],
    ["#ffffff", "#000000"]
  );

  const slideLeftToRight = useTransform(scrollYProgress, [0, 1], ["6%", "20%"]);

  const slideRightToLeft = useTransform(
    scrollYProgress,
    [0, 1],
    ["20%", "10%"]
  );

  return (
    <motion.div
      ref={ref}
      style={{ backgroundColor: bgColor }}
      className="h-[170vh] flex flex-col items-center overflow-hidden relative pt-30"
    >
      <motion.div
          
      className="flex flex-row w-full pb-8">
        <div 
        id="contact"
        className="text-xl text-white w-full flex flex-row gap-30 px-12">
          <div>
            <ul 
             
             onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "CLICK",
                      bg: "#fdf571",
                      color: "black",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "#fdf571", color: "#fff" }) 
                  }
            className="flex flex-col gap-4 cursor-pointer">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#certificates">Certificate</a>
              </li>
              <li>
                <a onClick={() => setShowNav(true)}>Contacts</a>
              </li>
            </ul>
          </div>
          <div>
            <ul 
             onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "CLICK",
                      bg: "#fdf571",
                      color: "black",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "#fdf571", color: "#fff" }) 
                  }
            className="flex flex-col gap-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/gauri-n-22ap4081/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a href="https://github.com/Gauri-Nagariya" target="_blank">
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-xl text-red-500 w-full"></div>

        <div className="text-xl text-red-500 w-full"></div>
      </motion.div>
      <motion.div className="w-full px-8 text-white text-7xl font-extralight tracking-wider leading-24 py-22">
        Always open to new projects,
        <br /> creative challenges, and
        <br /> meaningful conversations.
        <br /> Feel free to reach out.
      </motion.div>
      <motion.div className="w-full text-[30vh] font-extrabold tracking-tighter text-white bottom-0 pt-10 px-6">
        <p>Let’sConnect</p>
      </motion.div>

      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 left-0 w-full h-screen flex flex-row bg-[#fdf571] z-50"
          >
            <div
              className="flex justify-between  border-gray-50 w-[90vw] text-black"
              onMouseLeave={
                () => cursorEvents.leave({ bg: "black", color: "black" })
              }
            >

            </div>
            <div
              onMouseLeave={
                () => cursorEvents.leave({ bg: "black", color: "#fff" })
              }
              className=" w-[10vw] py-10 px-12 border"
            >
              <button
                onMouseEnter={() =>
                  cursorEvents.enter({
                    text: "CLOSE",
                    bg: "black",
                    color: "white",
                    size: 80,
                  })
                }
                onMouseLeave={
                  () => cursorEvents.leave({ bg: "black", color: "#fff" })
                }
                onClick={() => setShowNav(false)}
                className="font-bold text-xl text-black rounded cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contact;
