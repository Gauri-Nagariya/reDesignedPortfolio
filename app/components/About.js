"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { cursorEvents } from "./cursorController";
import { useRef } from "react";

const text =
"I’m Gauri, a Full-Stack / MERN Developer building modern, responsive, and user-friendly web applications. I work across frontend and backend, creating clean interfaces backed by secure, scalable logic. I have hands-on experience with React, JavaScript, Node.js, Express, MongoDB, and modern UI frameworks. I value code quality, performance, and usability, and I’m always eager to learn and grow."
"I am Gauri Nagariya, a passionate Full-Stack / MERN Developer with hands-on experience in React, Node.js, Express, and MongoDB, dedicated to building modern, responsive, and user-friendly web applications. I thrive on creating clean, efficient code and solving challenging problems that have real-world impact. My career goal is to become a self-dependent developer who consistently delivers innovative solutions while continuously learning new technologies."
export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  return (
    <div 
     onMouseLeave={() =>
                        cursorEvents.leave({ bg: "#fdf571", color: "#fff" }) 
                      }
    id="about" ref={ref} className="h-[124vh] pt-0 text-justify bg-black flex items-center justify-center">
      <p className="text-6xl font-normal px-18 flex flex-wrap gap-x-2 leading-18  text-justify">
        {text.split(" ").map((word, i) => {
          const color = useTransform(
            scrollYProgress,
            [i / text.split(" ").length, (i + 3) / text.split(" ").length],
            ["rgba(255,255,255,0.3)", "rgba(255,255,255,1)"]
          );

          return (
            <motion.span key={i} style={{ color }}>
              {word}
            </motion.span>
          );
        })}
      </p>
    </div>
  );
}
