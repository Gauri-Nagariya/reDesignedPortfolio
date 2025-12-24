"use client";
import React from "react";
import { motion } from "framer-motion";
import { cursorEvents } from "./cursorController";

const Certificates = () => {
  return (
    <motion.div id="certificates" className="bg-white h-[120vh] px-10  py-10">
      <div className="border-b border-gray-300 px-0 text-2xl py-6">
        Achievements & Certificates
      </div>
      <div className=" py-8 text-7xl font-semibold">
        Recognizing Skills & Success
      </div>

      <div className="flex flex-row pt-26">
        <div className="bg-white h-full w-[40vw] font-semibold text-5xl pr-14 py-10 text-left text-wrap leading-12">
          I have earned certificates and achievements that reflect my{" "}
          <span className=" bg-[#fdf571]">skills and dedication</span>, and
          commitment to growth and excellence across various fields.
        </div>
        <div className="bg-white h-80 w-[55vw] pl-26">
          <div
            onMouseEnter={() =>
              cursorEvents.enter({
                text: "VIEW",
                bg: "#fdf571",
                color: "black",
                size: 100,
              })
            }
            onMouseLeave={
              () => cursorEvents.leave({ bg: "#fdf571", color: "#fff" })
            }
            className="border-b border-gray-300 py-4 text-3xl  transition-all duration-400 ease-out hover:py-6 hover:text-4xl"
          >
            <span className=" text-gray-400 font-bold pr-4">01</span>
            <a
              href="/files/React JS Certification Course (GFG).pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              React JS Certification Course
            </a>
          </div>

          <div
            onMouseEnter={() =>
              cursorEvents.enter({
                text: "VIEW",
                bg: "#fdf571",
                color: "black",
                size: 100,
              })
            }
            onMouseLeave={
              () => cursorEvents.leave({ bg: "#fdf571", color: "#fff" })
            }
            className="border-b border-gray-300 py-4 text-3xl  transition-all duration-400 ease-out
    hover:py-6 hover:text-4xl"
          >
            <span className=" text-gray-400 font-bold pr-4">02</span>
            <a
              href="/files/SQL Intermediate (HackerRank).pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              SQL Course
            </a>
          </div>

          <div
            onMouseEnter={() =>
              cursorEvents.enter({
                text: "VIEW",
                bg: "#fdf571",
                color: "black",
                size: 100,
              })
            }
            onMouseLeave={
              () => cursorEvents.leave({ bg: "#fdf571", color: "#fff" }) 
            }
            className="border-b border-gray-300 py-4 text-3xl  transition-all duration-400 ease-out
    hover:py-6 hover:text-4xl"
          >
            <span className=" text-gray-400 font-bold pr-4">03</span>
            <a
              href="/files/NPTEL.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Operating Systems (NPTEL)
            </a>
          </div>

          <div
            onMouseEnter={() =>
              cursorEvents.enter({
                text: "VIEW",
                bg: "#fdf571",
                color: "black",
                size: 100,
              })
            }
            onMouseLeave={
              () => cursorEvents.leave({ bg: "#fdf571", color: "#fff" })
            }
            className="border-b border-gray-300 py-4 text-3xl  transition-all duration-400 ease-out
    hover:py-6 hover:text-4xl"
          >
            <span className=" text-gray-400 font-bold pr-4">04</span>
            <a
              href="/files/Introduction to Generative AI (simplilearn).pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Introduction to Generative AI{" "}
            </a>{" "}
          </div>

          <div
            onMouseEnter={() =>
              cursorEvents.enter({
                text: "VIEW",
                bg: "#fdf571",
                color: "black",
                size: 100,
              })
            }
            onMouseLeave={
              () => cursorEvents.leave({ bg: "#fdf571", color: "#fff" })
            }
            className="border-b border-gray-300 py-4 text-3xl  transition-all duration-400 ease-out
    hover:py-6 hover:text-4xl"
          >
            <span className=" text-gray-400 font-bold pr-4">05</span>
            <a
              href="/files/Introduction to Modern AI (cisco).pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Introduction to Modern AI{" "}
            </a>
          </div>

          <div
            onMouseEnter={() =>
              cursorEvents.enter({
                text: "VIEW",
                bg: "#fdf571",
                color: "black",
                size: 100,
              })
            }
            onMouseLeave={
              () => cursorEvents.leave({ bg: "#fdf571", color: "#fff" })
            }
            className="border-b border-gray-300 py-4 text-3xl  transition-all duration-400 ease-out
    hover:py-6 hover:text-4xl"
          >
            <span className=" text-gray-400 font-bold pr-4">06</span>
            <a
              href="/files/Introduction to Prompt Engineering.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Introduction to Prompt Engineering{" "}
            </a>
          </div>

          <div
            onMouseEnter={() =>
              cursorEvents.enter({
                text: "VIEW",
                bg: "#fdf571",
                color: "black",
                size: 100,
              })
            }
            onMouseLeave={
              () => cursorEvents.leave({ bg: "#fdf571", color: "#fff" })
            }
            className="border-b border-gray-300 py-4 text-3xl  transition-all duration-400 ease-out
    hover:py-6 hover:text-4xl"
          >
            <span className=" text-gray-400 font-bold pr-4">07</span>
            <a
              href="/files/sih.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Smart India Hackathon (SIH) – Finalist{" "}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Certificates;
