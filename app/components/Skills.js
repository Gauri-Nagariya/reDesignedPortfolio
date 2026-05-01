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
    ["#000000", "#f0f0f0", "#ffffff"],
  );
  const slideLeftToRight = useTransform(scrollYProgress, [0, 1], ["6%", "20%"]);

  const slideRightToLeft = useTransform(
    scrollYProgress,
    [0, 1],
    ["20%", "10%"],
  );

  return (
    <motion.div
      ref={ref}
      style={{ backgroundColor: bgColor }}
      className="md:min-h-[190vh] md:flex md:flex-col md:pt-30 md:items-center md:overflow-hidden md:relative
                  min-h-[140vh] flex flex-col pt-20 items-center overflow-hidden relative"
    >
      <motion.p
        onMouseLeave={() =>
          cursorEvents.leave({ bg: "#fdf571", color: "#fff" })
        }
        style={{ x: slideLeftToRight }}
        className="md:text-[20vh] md:font-sans md:font-bold md:mb-10 md:text-nowrap md:tracking-tighter
                    text-[6vh] font-sans font-bold mb-4 text-nowrap tracking-tighter"
      >
        What I bring to the table<span className="text-[#fdf571]">.</span>
      </motion.p>
      <motion.p
        onMouseLeave={() =>
          cursorEvents.leave({ bg: "#fdf571", color: "#fff" })
        }
        style={{ x: slideRightToLeft }}
        className={`md:text-[20vh] md:tracking-tighter md:font-sans md:font-bold md:text-nowrap
                      text-[6vh] tracking-tighter font-sans font-bold text-nowrap`}
      >
        What I bring to the table<span className="text-[#fdf571]">.</span> What
        I bring to the table<span className="text-[#fdf571]">.</span> What I
        bring to the table<span className="text-[#fdf571]">.</span>
      </motion.p>

      {/* <motion.div id="skills" className="md:grid md:grid-cols-6 md:gap-3 md:grid-rows-2 md:pt-0
                                          grid grid-cols-3 gap-3 grid-rows-6 pt-20">
        <div className=" bg-[#f2f2f2] md:h-54 md:w-54 md:rounded-2xl md:flex md:justify-center md:flex-col md:items-center
                            bg-[#f2f2f2] h-16 w-16 rounded-2xl flex justify-center flex-col items-center"
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
      </motion.div> */}

      <motion.div
        id="skills"
        className="
    grid grid-cols-3 gap-3 pt-16 px-4
    sm:grid-cols-3
    md:grid-cols-6 md:grid-rows-3 md:pt-30
  "
      >
        {/* HTML */}
        <div
          className="bg-[#f2f2f2] rounded-2xl flex flex-col items-center justify-center w-full aspect-square p-2 sm:p-3 md:p-4"
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
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14">
            <Image src="/div.png" alt="HTML" fill className="object-contain" />
          </div>
          <div
            className={`${BlackOpsOne.className} text-sm sm:text-lg md:text-3xl pt-2 tracking-widest`}
          >
            HTML
          </div>
        </div>

        {/* CSS */}
        <div
          className="bg-[#f2f2f2] rounded-2xl flex items-center justify-center gap-2 w-full aspect-square p-2 sm:p-3 md:p-4"
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
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16">
            <Image
              src="/technology.png"
              alt="CSS"
              fill
              className="object-contain"
            />
          </div>
          <div
            className={`${tangerine.className} text-sm sm:text-lg md:text-3xl`}
          >
            CSS
          </div>
        </div>

        {/* JS */}
        <div
          className="bg-[#f2f2f2] rounded-2xl flex flex-col items-center justify-center w-full aspect-square p-2 sm:p-3 md:p-4"
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
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16">
            <Image src="/online.png" alt="JS" fill className="object-contain" />
          </div>
          <div className="text-xs sm:text-base md:text-xl pt-2">JAVASCRIPT</div>
        </div>

        {/* MongoDB */}
        <div
          className="bg-[#f2f2f2] rounded-2xl flex flex-col items-center justify-center w-full aspect-square p-2 sm:p-3 md:p-4"
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
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16">
            <Image
              src="/cloud-storage.png"
              alt="MongoDB"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-xs sm:text-base md:text-xl pt-2 font-bold">
            MONGODB
          </div>
        </div>

        {/* Express */}
        <div
          className="bg-[#f2f2f2] rounded-2xl flex items-center justify-center w-full aspect-square p-2 sm:p-3 md:p-4"
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
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20">
            <Image
              src="/express.png"
              alt="Express"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* React */}
        <div
          className="bg-[#f2f2f2] rounded-2xl flex flex-col items-center justify-center w-full aspect-square p-2 sm:p-3 md:p-4"
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
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16">
            <Image
              src="/library.png"
              alt="React"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-xs sm:text-base md:text-xl pt-2">REACT JS</div>
        </div>

        {/* Node */}
        <div
          className="bg-[#f2f2f2] rounded-2xl flex items-center justify-center gap-2 w-full aspect-square p-2 sm:p-3 md:p-4"
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
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14">
            <Image
              src="/node-js.png"
              alt="Node"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-xs sm:text-base md:text-xl font-bold">
            NODE.JS
          </div>
        </div>

        {/* Next */}
        <div
          className="bg-[#f2f2f2] rounded-2xl flex flex-col items-center justify-center w-full aspect-square p-2 sm:p-3 md:p-4"
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
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16">
            <Image src="/next.png" alt="Next" fill className="object-contain" />
          </div>
          <div
            className={`${orbitron.className} text-xs sm:text-base md:text-xl pt-2`}
          >
            NEXT.JS
          </div>
        </div>

        {/* MySQL */}
        <div
          className="bg-[#f2f2f2] rounded-2xl flex flex-col items-center justify-center w-full aspect-square p-2 sm:p-3 md:p-4"
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
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14">
            <Image
              src="/MYSQL.png"
              alt="MySQL"
              fill
              className="object-contain"
            />
          </div>
          <div
            className={`${goldman.className} text-xs sm:text-base md:text-xl pt-2`}
          >
            MySQL
          </div>
        </div>

        {/* Tailwind */}
        <div
          className="bg-[#f2f2f2] rounded-2xl flex items-center justify-center gap-1 w-full aspect-square p-2 sm:p-3 md:p-4"
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
          <div className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
            <Image
              src="/icons8-tailwind-css-48.png"
              alt="Tailwind"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-xs sm:text-sm md:text-lg">TAILWIND CSS</div>
        </div>

        {/* Bootstrap */}
        <div
          className="bg-[#f2f2f2] rounded-2xl flex flex-col items-center justify-center w-full aspect-square p-2 sm:p-3 md:p-4"
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
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16">
            <Image
              src="/icons8-bootstrap-logo-100.png"
              alt="Bootstrap"
              fill
              className="object-contain"
            />
          </div>
          <div
            className={`${limelight.className} text-xs sm:text-base md:text-lg pt-2`}
          >
            BOOTSTRAP
          </div>
        </div>

        {/* Git */}
        <div
          className="bg-[#f2f2f2] rounded-2xl flex flex-col items-center justify-center w-full aspect-square p-2 sm:p-3 md:p-4"
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
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14">
            <Image
              src="/github.png"
              alt="Git"
              fill
              className="object-contain"
            />
          </div>
          <div
            className={`${orbitron.className} text-xs sm:text-base md:text-lg pt-2 text-center`}
          >
            VERSION <br /> CONTROL
          </div>
        </div>

        {/* Redux */}
        <div
          className="bg-[#f2f2f2] rounded-2xl flex items-center justify-center gap-2 w-full aspect-square p-2 sm:p-3 md:p-4"
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
          <div
            className={`${BlackOpsOne.className} text-md sm:text-lg md:text-5xl font-extrabold`}
          >
            Redux
          </div>
        </div>

        {/* Figma */}
        <div
          className="bg-[#f2f2f2] rounded-2xl flex flex-col items-center justify-center w-full aspect-square p-2 sm:p-3 md:p-4"
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
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16">
            <Image
              src="/Figma.png"
              alt="Next"
              fill
              className="object-contain"
            />
          </div>
          <div className={`text-xs sm:text-base md:text-2xl pt-2`}>FIGMA </div>
        </div>

        {/* rest-api */}
        <div
          className="bg-[#f2f2f2] rounded-2xl flex items-center justify-center gap-2 w-full aspect-square p-2 sm:p-3 md:p-4"
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
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16">
            <Image
              src="/rest-api.svg"
              alt="CSS"
              fill
              className="object-contain"
            />
          </div>
          <div className={`rest-api`}>REST API</div>
        </div>

        {/* Postman */}
        <div
          className="bg-[#f2f2f2] rounded-2xl flex flex-col items-center justify-center w-full aspect-square p-2 sm:p-3 md:p-4"
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
          {/* <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14">
      <Image src="/postman.png" alt="postman" fill className="object-contain" />
    </div> */}
          <div
            className={`${orbitron.className} text-xs sm:text-base md:text-2xl pt-2 text-center`}
          >
            POSTMAN
          </div>
        </div>

        {/* Vercel */}
        <div
          className="bg-[#f2f2f2] rounded-2xl flex items-center justify-center gap-2 w-full aspect-square p-2 sm:p-3 md:p-4"
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
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16">
            <Image
              src="/Vercel_Symbol_1.png"
              alt="Vercel"
              fill
              className="object-contain"
            />
          </div>
          <div className={"text-xs sm:text-base md:text-xl pt-2 font-bold"}>
            Vercel
          </div>
        </div>

        {/* Responsive Web Design */}
        <div
          className="bg-[#f2f2f2] rounded-2xl flex items-center justify-center gap-2 w-full aspect-square p-2 sm:p-3 md:p-4"
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
          {/* <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16">
      <Image src="/technology.png" alt="CSS" fill className="object-contain" />
    </div> */}
          <div
            className={`${limelight.className} text-sm sm:text-lg md:text-2xl`}
          >
            Responsive
            <br /> Web Design
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;

// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import { cursorEvents } from "../components/cursorController";

// import { Tangerine } from "next/font/google";
// import { Orbitron } from "next/font/google";
// import { Black_Ops_One } from "next/font/google";
// import { Goldman } from "next/font/google";
// import { Limelight } from "next/font/google";

// const tangerine = Tangerine({ subsets: ["latin"], weight: "400" });
// const orbitron = Orbitron({ subsets: ["latin"], weight: "400" });
// const BlackOpsOne = Black_Ops_One({ subsets: ["latin"], weight: "400" });
// const goldman = Goldman({ subsets: ["latin"], weight: "400" });
// const limelight = Limelight({ subsets: ["latin"], weight: "400" });

// const Skills = () => {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });

//   const bgColor = useTransform(
//     scrollYProgress,
//     [0, 0.25, 1],
//     ["#000000", "#f0f0f0", "#ffffff"]
//   );

//   const slideLeftToRight = useTransform(scrollYProgress, [0, 1], ["6%", "20%"]);
//   const slideRightToLeft = useTransform(scrollYProgress, [0, 1], ["20%", "10%"]);

//   return (
//     <motion.div
//       ref={ref}
//       style={{ backgroundColor: bgColor }}
//       className="md:h-[170vh] md:flex md:flex-col md:pt-30 md:items-center md:overflow-hidden md:relative"
//     >
//       <motion.p
//         onMouseLeave={() =>
//           cursorEvents.leave({ bg: "#fdf571", color: "#fff" })
//         }
//         style={{ x: slideLeftToRight }}
//         className="md:text-[20vh] md:font-sans md:font-bold md:mb-10 md:text-nowrap md:tracking-tighter"
//       >
//         What I bring to the table<span className="md:text-[#fdf571]">.</span>
//       </motion.p>

//       <motion.p
//         onMouseLeave={() =>
//           cursorEvents.leave({ bg: "#fdf571", color: "#fff" })
//         }
//         style={{ x: slideRightToLeft }}
//         className="md:text-[20vh] md:tracking-tighter md:font-sans md:font-bold md:text-nowrap"
//       >
//         What I bring to the table<span className="md:text-[#fdf571]">.</span>{" "}
//         What I bring to the table<span className="md:text-[#fdf571]">.</span>{" "}
//         What I bring to the table<span className="md:text-[#fdf571]">.</span>
//       </motion.p>

//       <motion.div
//         id="skills"
//         className="md:grid md:grid-cols-6 md:grid-rows-2 md:gap-3 md:pt-40"
//       >
//         {/* HTML */}
//         <div
//           className="md:bg-[#f2f2f2] md:h-54 md:w-54 md:rounded-2xl md:flex md:flex-col md:items-center md:justify-center"
//           onMouseEnter={() =>
//             cursorEvents.enter({
//               text: "SKILLS",
//               bg: "#fdf571",
//               color: "black",
//               size: 100,
//             })
//           }
//           onMouseLeave={() =>
//             cursorEvents.leave({ bg: "#fdf571", color: "#fff" })
//           }
//         >
//           <div className="relative md:w-[40px] h-[40px] md:h-[40px]">
//             <Image src="/div.png" alt="HTML" fill className="md:object-contain" />
//           </div>
//           <div
//             className={`${BlackOpsOne.className} md:text-4xl md:font-extrabold md:pt-2 md:tracking-widest`}
//           >
//             HTML
//           </div>
//         </div>

//         {/* CSS */}
//         <div
//           className="md:bg-[#f2f2f2] md:h-54 md:w-54 md:rounded-2xl md:flex md:flex-row md:gap-3 md:items-center md:justify-center"
//           onMouseEnter={() =>
//             cursorEvents.enter({
//               text: "SKILLS",
//               bg: "#fdf571",
//               color: "black",
//               size: 100,
//             })
//           }
//           onMouseLeave={() =>
//             cursorEvents.leave({ bg: "#fdf571", color: "#fff" })
//           }
//         >
//           <div className="relative md:w-[70px] h-[70px] md:h-[70px]">
//             <Image
//               src="/technology.png"
//               alt="CSS"
//               fill
//               className="md:object-contain"
//             />
//           </div>
//           <div
//             className={`${tangerine.className} md:text-4xl md:pt-2 md:tracking-wider`}
//           >
//             CSS
//           </div>
//         </div>

//         {/* JavaScript */}
//         <div
//           className="md:bg-[#f2f2f2] md:h-54 md:w-54 md:rounded-2xl md:flex md:flex-col md:items-center md:justify-center"
//           onMouseEnter={() =>
//             cursorEvents.enter({
//               text: "SKILLS",
//               bg: "#fdf571",
//               color: "black",
//               size: 100,
//             })
//           }
//           onMouseLeave={() =>
//             cursorEvents.leave({ bg: "#fdf571", color: "#fff" })
//           }
//         >
//           <div className="relative md:w-[70px] h-[70px] md:h-[70px]">
//             <Image
//               src="/online.png"
//               alt="JavaScript"
//               fill
//               className="md:object-contain"
//             />
//           </div>
//           <div className="md:text-3xl md:font-extralight md:tracking-tighter md:pt-2">
//             JAVASCRIPT
//           </div>
//         </div>

//         {/* MongoDB */}
//         <div
//           className="md:bg-[#f2f2f2] md:h-54 md:w-54 md:rounded-2xl md:flex md:flex-col md:items-center md:justify-center"
//         >
//           <div className="relative md:w-[60px] h-[60px] md:h-[60px]">
//             <Image
//               src="/cloud-storage.png"
//               alt="MongoDB"
//               fill
//               className="md:object-contain"
//             />
//           </div>
//           <div className="md:text-2xl md:font-bold md:tracking-tighter md:pt-2">
//             MONGODB
//           </div>
//         </div>

//         {/* Express */}
//         <div className="md:bg-[#f2f2f2] md:h-54 md:w-54 md:rounded-2xl md:flex md:items-center md:justify-center">
//           <div className="relative md:w-[80px] h-[80px] md:h-[80px]">
//             <Image src="/express.png" alt="Express" fill className="md:object-contain" />
//           </div>
//         </div>

//         {/* React */}
//         <div className="md:bg-[#f2f2f2] md:h-54 md:w-54 md:rounded-2xl md:flex md:flex-col md:items-center md:justify-center">
//           <div className="relative md:w-[50px] h-[50px] md:h-[50px]">
//             <Image src="/library.png" alt="React" fill className="md:object-contain" />
//           </div>
//           <div className="md:text-3xl md:font-mono md:tracking-wider md:pt-2">
//             REACT JS
//           </div>
//         </div>

//         {/* Node */}
//         <div className="md:bg-[#f2f2f2] md:h-54 md:w-54 md:rounded-2xl md:flex md:flex-row md:gap-2 md:items-center md:justify-center">
//           <div className="relative md:w-[40px] h-[40px] md:h-[40px]">
//             <Image src="/node-js.png" alt="Node" fill className="md:object-contain" />
//           </div>
//           <div className="md:text-3xl md:font-bold md:tracking-tighter">
//             NODE.JS
//           </div>
//         </div>

//         {/* Next.js */}
//         <div className="md:bg-[#f2f2f2] md:h-54 md:w-54 md:rounded-2xl md:flex md:flex-col md:items-center md:justify-center">
//           <div className="relative md:w-[50px] md:h-[50px] h-[50px]">
//             <Image src="/next.png" alt="Next.js" fill className="md:object-contain" />
//           </div>
//           <div
//             className={`${orbitron.className} md:text-3xl md:tracking-tighter md:pt-2`}
//           >
//             NEXT.JS
//           </div>
//         </div>

//         {/* MySQL */}
//         <div className="md:bg-[#f2f2f2] md:h-54 md:w-54 md:rounded-2xl md:flex md:flex-col md:items-center md:justify-center">
//           <div className="relative md:w-[40px] h-[40px] md:h-[40px]">
//             <Image src="/MYSQL.png" alt="MySQL" fill className="md:object-contain" />
//           </div>
//           <div
//             className={`${goldman.className} md:text-3xl md:tracking-tighter`}
//           >
//             MySQL
//           </div>
//         </div>

//         {/* Tailwind */}
//         <div className="md:bg-[#f2f2f2] md:h-54 md:w-54 md:rounded-2xl md:flex md:flex-row md:gap-1 md:items-center md:justify-center">
//           <div className="relative md:w-[30px] h-[30px] md:h-[30px]">
//             <Image
//               src="/icons8-tailwind-css-48.png"
//               alt="Tailwind"
//               fill
//               className="md:object-contain"
//             />
//           </div>
//           <div className="md:text-2xl md:tracking-tighter">
//             TAILWIND CSS
//           </div>
//         </div>

//         {/* Bootstrap */}
//         <div className="md:bg-[#f2f2f2] md:h-54 md:w-54 md:rounded-2xl md:flex md:flex-col md:items-center md:justify-center">
//           <div className="relative md:w-[70px] h-[70px] md:h-[70px]">
//             <Image
//               src="/icons8-bootstrap-logo-100.png"
//               alt="Bootstrap"
//               fill
//               className="md:object-contain"
//             />
//           </div>
//           <div
//             className={`${limelight.className} md:text-2xl md:tracking-tighter`}
//           >
//             BOOTSTRAP
//           </div>
//         </div>

//         {/* Git */}
//         <div className="md:bg-[#f2f2f2] md:h-54 md:w-54 md:rounded-2xl md:flex md:flex-col md:items-center md:justify-center">
//           <div className="relative md:w-[50px] h-[50px] md:h-[50px]">
//             <Image src="/github.png" alt="Git" fill className="md:object-contain" />
//           </div>
//           <div
//             className={`${orbitron.className} md:text-xl md:tracking-tighter md:leading-5 md:pt-3`}
//           >
//             VERSION <br /> CONTROL
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Skills;
