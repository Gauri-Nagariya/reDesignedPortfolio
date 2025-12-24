"use client";

import { useState, useEffect, useRef } from "react";
import { cursorEvents } from "../components/cursorController";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useSpring } from "framer-motion";
import Image from "next/image";

export default function HeroWithNav() {
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();
  const [vh, setVh] = useState(0);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setVh(window.innerHeight);
  }, []);

  const heroScale = useTransform(scrollY, [0, 100], [1, 0.25]);
  const scrollStart = 120; 
  const scrollEnd = 450; 
  const moveUpDistance = 400; 

  const bottomY = useTransform(
    scrollY,
    [scrollStart, scrollEnd],
    [0, -moveUpDistance]
  );
  const smoothBottomY = useSpring(bottomY, { stiffness: 50, damping: 25 });

  const imgScale = useTransform(scrollY, [150, 400], [1, 5]);
  const imgX = useTransform(scrollY, [150, 400], [0, -420]);
  const imgY = useTransform(scrollY, [150, 400], [0, -160]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-[150vh] bg-black"
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "#fdf571", color: "black" }) 
                  }
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex items-center justify-between p-6 relative z-20">
          <motion.h1
          onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "THAT'S ME",
                      bg: "#fdf571",
                      color: "black",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "#fdf571", color: "#fff" }) 
                  }
            style={{ scale: heroScale, transformOrigin: "top left" }}
            className="absolute left-6 top-6 text-[18vw] font-bold text-white leading-none z-10"
          >
            IamGauri
          </motion.h1>

          <button
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
            onClick={() => setShowNav(true)}
            className="cursor-pointer text-lg flex mx-340 right-0 text-white px-6 text-nowrap py-3 rounded-lg z-20 relative"
          >
            Click Me
          </button>
        </div>

        <motion.div
          style={{ y: bottomY }}
          className="absolute bottom-10 left-8 text-white flex flex-col gap-4 z-20"
        >
          <p className="text-4xl font-medium whitespace-nowrap">
            <Typewriter
              words={[
                "I design. I build. I improve.",
                "Crafting modern, responsive web experiences.",
                "Focused on performance, usability, and clean code.",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={30}
              delaySpeed={1600}
            />
          </p>

          <h3 className="text-4xl font-semibold whitespace-nowrap">
            Open to freelance and full-time roles.
          </h3>
          <button
  className="
    group
    bg-white text-black w-70 h-20 rounded-full border-2
    py-2 flex justify-between px-2
    hover:bg-black hover:cursor-none
    transition-all duration-300
    hover:border-2 hover:text-white
  "
>
  <a href="#contact" className="pt-2">

  <span
    className="
    text-2xl px-4
    group-hover:text-white
    transition-colors duration-300
    "
    >
    Get in touch
  </span>

  <span
    className="
    text-4xl px-3 py-2 my-0 ml-9 rounded-full
    group-hover:bg-[#fdf571]
    group-hover:text-black
    transition-all duration-300
    "
    >
    →
  </span>
    </a>
</button>

        </motion.div>

        <motion.div
          style={{ scale: imgScale, x: imgX, y: imgY }}
          className="absolute bottom-[-120] right-1/8 z-30"
        >
          <div className="relative w-[308px] h-[220px]">
            <Image
              src="/pexels.jpg"
              alt="Background"
              fill
              className="object-contain border"
            />
          </div>
        </motion.div>
      </div>

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
              className="flex justify-between p-6 w-full text-black"
              onMouseLeave={
                () => cursorEvents.leave({ bg: "black", color: "#77221f" }) 
              }
            ></div>

            <div
              className="flex justify-between  border-gray-50 w-full text-black"
              onMouseLeave={
                () => cursorEvents.leave({ bg: "black", color: "black" }) 
              }
            >
              <div
                onMouseLeave={
                  () => cursorEvents.leave({ bg: "black", color: "black" }) 
                }
                className=" w-full border-l text-5xl font-sans font-bold leading-18 tracking-wider px-6 py-8"
              >
                <h1
                  onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "CLICK",
                      bg: "black",
                      color: "white",
                      size: 80,
                    })
                  }
                >
                  <a href="#hero" onClick={() => setShowNav(false)}>
                    HOME
                  </a>
                </h1>
                <ul
                  onMouseEnter={() =>
                    cursorEvents.enter({
                     text: "CLICK",
                      bg: "black",
                      color: "white",
                      size: 80,
                    })
                  }
                  onMouseLeave={
                    () => cursorEvents.leave({ bg: "black", color: "black" }) 
                  }
                >
                  <li>
                    <a href="#about" onClick={() => setShowNav(false)}>
                      <span className=" text-white"># </span>ABOUT
                    </a>
                  </li>
                  <li>
                    <a href="#skills" onClick={() => setShowNav(false)}>
                      <span className=" text-white"># </span>SKILLS
                    </a>
                  </li>
                  <li>
                    <a href="#projects" onClick={() => setShowNav(false)}>
                      <span className=" text-white text-nowrap"># </span>
                      PROJECTS
                    </a>
                  </li>
                  <li>
                    <a href="#certificates" onClick={() => setShowNav(false)}>
                      <span className=" text-white text-nowrap"># </span>
                      CERTIFICATES
                    </a>
                  </li>
                </ul>
                <h1
                  onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "CLICK",
                      bg: "black",
                      color: "white",
                      size: 80,
                    })
                  }
                  onMouseLeave={
                    () => cursorEvents.leave({ bg: "black", color: "black" })}
                  className="my-12"
                >
                  <a href="#contact" onClick={() => setShowNav(false)}>
                    CONTACT
                  </a>
                </h1>
              </div>
              <div
           
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "black", color: "#fff" }) 
                  }
                className=" w-full border-l text-2xl font-sans font-light leading-10 tracking-wider px-6 py-10"
              >
                <ul
                  onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "CLICK",
                      bg: "black",
                      color: "white",
                      size: 80,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "black", color: "#fff" })
                  }
                >
                  <li className="mb-6">
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
              <div 
                onMouseLeave={() =>
                    cursorEvents.leave({ bg: "black", color: "#fff" })
                  }
              className=" w-full py-10 pl-20">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
