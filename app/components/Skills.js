"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

const Skills = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const bgColor = useTransform(
    scrollYProgress,
   
    [0, 0.25, 1],
    ["#000000", "#f0f0f0", "#ffffff"]
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
      className="h-[170vh] flex flex-col pt-30  items-center overflow-hidden relative"
    >
      <motion.p

                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "#fdf571", color: "#fff" }) 
                  }
        style={{ x: slideLeftToRight }}
        className="text-[20vh] font-sans font-bold mb-10 text-nowrap tracking-tighter"
      >
        What I bring to the table<span className="text-[#fdf571]">.</span>
      </motion.p>
      <motion.p
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "#fdf571", color: "#fff" }) 
                  }
        style={{ x: slideRightToLeft }}
        className={`text-[20vh] tracking-tighter font-sans font-bold text-nowrap`}
      >
        What I bring to the table<span className="text-[#fdf571]">.</span> What I bring to the table<span className="text-[#fdf571]">.</span> What I bring to the
        table<span className="text-[#fdf571]">.</span>
      </motion.p>

      <motion.div id="skills" className="grid grid-cols-6 gap-3 grid-rows-2 pt-40">
        <div className=" bg-[#f2f2f2] h-54 w-54 rounded-2xl flex justify-center flex-col items-center"
         onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "SKILLS",
                      bg: "#fdf571",
                      color: "black",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "#fdf571", color: "#fff" })
                  }
                  >
          <div className="relative w-[40px] h-[40px]">
            <Image
              src="/div.png"
              alt="Background"
              fill
              className="object-contain"
            />
          </div>
          <div
            className={`${BlackOpsOne.className} text-4xl font-extrabold pt-2 tracking-widest`}
          >
            HTML
          </div>
        </div>

        <div  onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "SKILLS",
                      bg: "#fdf571",
                      color: "black",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "#fdf571", color: "#fff" })
                  }
                   className=" bg-[#f2f2f2] h-54 w-54 rounded-2xl flex justify-center flex-row gap-3 items-center">
          <div className="relative w-[70px] h-[70px]">
            <Image
              src="/technology.png"
              alt="Background"
              fill
              className="object-contain"
            />
          </div>
          <div
            className={`${tangerine.className} text-4xl pt-2 tracking-wider`}
          >
            CSS
          </div>
        </div>

        <div 
         onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "SKILLS",
                      bg: "#fdf571",
                      color: "black",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "#fdf571", color: "#fff" }) 
                  }
        className=" bg-[#f2f2f2] h-54 w-54 rounded-2xl flex justify-center flex-col items-center">
          <div className="relative w-[70px] h-[70px]">
            <Image
              src="/online.png"
              alt="Background"
              fill
              className="object-contain"
            />
          </div>
          <div className=" text-3xl font-extralight tracking-tighter pt-2 ">
            JAVASCRIPT
          </div>
        </div>

        <div 
         onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "SKILLS",
                      bg: "#fdf571",
                      color: "black",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "#fdf571", color: "#fff" }) 
                  }
        className=" bg-[#f2f2f2] h-54 w-54 rounded-2xl flex justify-center flex-col items-center">
          <div className="relative w-[60px] h-[60px]">
            <Image
              src="/cloud-storage.png"
              alt="Background"
              fill
              className="object-contain"
            />
          </div>
          <div className=" text-2xl font-sans font-bold tracking-tighter pt-2 ">
            MONGODB
          </div>
        </div>

        <div 
         onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "SKILLS",
                      bg: "#fdf571",
                      color: "black",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "#fdf571", color: "#fff" }) 
                  }
        className=" bg-[#f2f2f2] h-54 w-54 rounded-2xl flex justify-center flex-col items-center">
          <div className="relative w-[80px] h-[80px]">
            <Image
              src="/express.png"
              alt="Background"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div 
         onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "SKILLS",
                      bg: "#fdf571",
                      color: "black",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "#fdf571", color: "#fff" }) 
                  }
        className=" bg-[#f2f2f2] h-54 w-54 rounded-2xl flex justify-center flex-col items-center">
          <div className="relative w-[50px] h-[50px]">
            <Image
              src="/library.png"
              alt="Background"
              fill
              className="object-contain"
            />
          </div>
          <div className=" text-3xl font-mono pt-2 tracking-wider ">
            REACT JS
          </div>
        </div>

        <div 
         onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "SKILLS",
                      bg: "#fdf5#fdf571",
                      color: "black",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "#fdf5#fdf571", color: "#fff" }) }
        className=" bg-[#f2f2f2] h-54 w-54 rounded-2xl flex justify-center flex-row gap-2 items-center">
          <div className="relative w-[40px] h-[40px]">
            <Image
              src="/node-js.png"
              alt="Background"
              fill
              className="object-contain"
            />
          </div>
          <div className=" text-3xl font-bold tracking-tighter pt-0 ">
            NODE.JS
          </div>
        </div>

        <div 
         onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "SKILLS",
                      bg: "#fdf571",
                      color: "black",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "#fdf571", color: "#fff" }) 
                  }
        className=" bg-[#f2f2f2] h-54 w-54 rounded-2xl flex pb-0 justify-center flex-col items-center">
          <div className="relative w-[50px] h-[50px]">
            <Image
              src="/next.png"
              alt="Background"
              fill
              className="object-contain"
            />
          </div>
          <div
            className={`${orbitron.className} text-3xl font-extralight tracking-tighter pt-2`}
          >
            NEXT.JS
          </div>
        </div>

        <div 
         onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "SKILLS",
                      bg: "#fdf571",
                      color: "black",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "#fdf571", color: "#fff" }) 
                  }
        className=" bg-[#f2f2f2] h-54 w-54 rounded-2xl flex justify-center flex-col items-center">
          <div className="relative w-[40px] h-[40px]">
            <Image
              src="/MYSQL.png"
              alt="Background"
              fill
              className="object-contain"
            />
          </div>
          <div
            className={`${goldman.className} text-3xl font-extralight tracking-tighter pt-0`}
          >
            MySQL
          </div>
        </div>

        <div 
         onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "SKILLS",
                      bg: "#fdf571",
                      color: "black",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "#fdf571", color: "#fff" })
                  }
        className=" bg-[#f2f2f2] h-54 w-54 rounded-2xl flex justify-center flex-row gap-1 items-center">
          <div className="relative w-[30px] h-[30px]">
            <Image
              src="/icons8-tailwind-css-48.png"
              alt="Background"
              fill
              className="object-contain"
            />
          </div>
          <div className=" text-2xl font-sans tracking-tighter pt-0 ">
            TAILWIND CSS
          </div>
        </div>

        <div 
         onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "SKILLS",
                      bg: "#fdf571",
                      color: "black",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "#fdf571", color: "#fff" }) 
                  }
        className=" bg-[#f2f2f2] h-54 w-54 rounded-2xl flex justify-center flex-col items-center">
          <div className="relative w-[70px] h-[70px]">
            <Image
              src="/icons8-bootstrap-logo-100.png"
              alt="Background"
              fill
              className="object-contain border"
            />
          </div>
          <div
            className={`${limelight.className} text-2xl tracking-tighter pt-0`}
          >
            BOOTSTRAP
          </div>
        </div>

        <div 
         onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "SKILLS",
                      bg: "#fdf571",
                      color: "black",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "#fdf571", color: "#fff" }) 
                  }
        className=" bg-[#f2f2f2] h-54 w-54 rounded-2xl flex justify-center flex-col items-center">
          <div className="relative w-[50px] h-[50px]">
            <Image
              src="/github.png"
              alt="Background"
              fill
              className="object-contain"
            />
          </div>
          <div
            className={`${orbitron.className} text-xl tracking-tighter leading-5 pt-3`}
          >
            VERSION <br/> CONTROL
          </div>{" "}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
