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

  const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["#ffffff", "#000000"]
  );

  const slideLeftToRight = useTransform(scrollYProgress, [0, 1], ["6%", "20%"]);

  const slideRightToLeft = useTransform(
    scrollYProgress,
    [0, 1],
    ["20%", "10%"]
  );


   const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a9d3f7aa-37a9-4990-83f1-d238bf4471e1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: json,
    });
    const res = await response.json();

    if (res.success) {
      console.log("Success", res);
      alert("Message sent successfully!");
        event.target.reset();
    } else {
      alert("Failed to send message");
    }
  };


  return (
    <motion.div
      ref={ref}
      style={{ backgroundColor: bgColor }}
      className="h-[170vh] flex flex-col items-center overflow-hidden relative pt-30"
    >
      <motion.div className="flex flex-row w-full pb-8">
        <div
          id="contact"
          className="text-xl text-white w-full flex flex-row gap-30 px-12"
        >
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
              className="flex flex-col gap-4 cursor-pointer"
            >
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
              className="flex flex-col gap-4"
            >
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
            className="fixed top-0 left-0 w-full h-screen flex flex-row bg-[#fdf571] z-50 modal-selection select-text"
          >
            <div
              className="flex justify-between w-[90vw] text-black"
              onMouseLeave={() =>
                cursorEvents.leave({ bg: "black", color: "black" })
              }
            >
              <div
                className="w-[35vw] text-[19vh] font-extrabold pr-80 overflow-hidden
                [writing-mode:vertical-rl] rotate-180 tracking-tighter leading-23"
              >
                LET'S CONNECT
              </div>
              <div className="w-[55vw] p-20 pl-0 pr-80">
                <div className="border-4 h-full w-full flex items-center justify-center">
                  <form 
                  className="w-full max-w-md flex flex-col gap-6 p-6"
                  onSubmit={handleFormSubmit}
                  >

                    <input
  type="text"
  name="username"
  placeholder="Your Name"
  className="border-b border-black outline-none py-2 text-lg"
/>

                    {/* Email */}
                    <input
                      type="email"
                        name="email" 
                      placeholder="Your email"
                      className="border-b border-black outline-none py-2 text-lg"
                      required
                    />

                    {/* Message */}
                    <textarea
                      placeholder="Your message"
                        name="message"
                      rows={6}
                      className="border-b border-black outline-none py-2 text-lg resize-none"
                      required
                    />
<input type="text" name="phone" style={{ display: "none" }} />
<input type="hidden" name="project" value="reDesigned Portfolio Website" />

                    {/* Submit */}
                    <button
                      type="submit"
                      className="mt-4 border border-black py-3 text-lg font-semibold
                 hover:bg-black hover:text-white transition"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div
              onMouseLeave={() =>
                cursorEvents.leave({ bg: "black", color: "#fff" })
              }
              className=" w-[10vw] py-10 px-12"
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
                onMouseLeave={() =>
                  cursorEvents.leave({ bg: "black", color: "#fff" })
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
