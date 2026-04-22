// "use client";

// import { useState, useEffect, useRef } from "react";
// import { cursorEvents } from "../components/cursorController";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   AnimatePresence,
// } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";
// import { useSpring } from "framer-motion";
// import Image from "next/image";

// export default function HeroWithNav() {
//   const sectionRef = useRef(null);
//   const { scrollY } = useScroll();
//   const [vh, setVh] = useState(0);
//   const [showNav, setShowNav] = useState(false);

//   useEffect(() => {
//     setVh(window.innerHeight);
//   }, []);

//   const heroScale = useTransform(scrollY, [0, 100], [1, 0.25]);
//   const scrollStart = 120;
//   const scrollEnd = 450;
//   const moveUpDistance = 400;

//   const bottomY = useTransform(
//     scrollY,
//     [scrollStart, scrollEnd],
//     [0, -moveUpDistance]
//   );
//   const smoothBottomY = useSpring(bottomY, { stiffness: 50, damping: 25 });

//   // const imgScale = useTransform(scrollY, [150, 400], [1, 5]);
//   // const imgX = useTransform(scrollY, [150, 400], [0, -420]);
//   // const imgY = useTransform(scrollY, [150, 400], [0, 120]);

// const imgScale = useTransform(scrollY, [100, 300], [1, 5]);
// const imgX = useTransform(scrollY, [100, 300], [0, -420]);
// const imgY = useTransform(scrollY, [100, 300], [0, 120]);

//   return (
//     <section
//       id="hero"
//       ref={sectionRef}
//       className="relative min-h-screen md:min-h-[150vh] bg-black border-0 text-white"
//                   onMouseLeave={() =>
//                     cursorEvents.leave({ bg: "#fdf571", color: "black" })
//                   }
//     >
//       <div className="sticky top-0 h-screen">
//         <div className="flex items-center justify-between p-6 relative z-20">
//           <motion.h1
//           onMouseEnter={() =>
//                     cursorEvents.enter({
//                       text: "THAT'S ME",
//                       bg: "#fdf571",
//                       color: "black",
//                       size: 100,
//                     })
//                   }
//                   onMouseLeave={() =>
//                     cursorEvents.leave({ bg: "#fdf571", color: "#fff" })
//                   }
//             style={{ scale: heroScale, transformOrigin: "top left" }}
//             className="absolute left-6 top-6 text-[18vw] font-bold text-white leading-none z-10"
//           >
//             IamGauri
//           </motion.h1>

//           <button
//            onMouseEnter={() =>
//                     cursorEvents.enter({
//                       text: "CLICK",
//                       bg: "#fdf571",
//                       color: "black",
//                       size: 100,
//                     })
//                   }
//                   onMouseLeave={() =>
//                     cursorEvents.leave({ bg: "#fdf571", color: "#fff" })
//                   }
//             onClick={() => setShowNav(true)}
//             className="cursor-pointer text-lg flex mx-340 right-0 text-white px-6 text-nowrap py-3 rounded-lg z-20 relative"
//           >
//             Click Me
//           </button>
//         </div>

//         <motion.div
//           style={{ y: bottomY }}
//           className="absolute bottom-10 left-8 text-white flex flex-col gap-4 z-20"
//         >
//           <p className="text-4xl font-medium whitespace-nowrap">
//             <Typewriter
//               words={[
//                 "I design. I build. I improve.",
//                 "Crafting modern, responsive web experiences.",
//                 // "Focused on performance, usability, and clean code.",
//               ]}
//               loop={0}
//               cursor
//               cursorStyle="|"
//               typeSpeed={90}
//               deleteSpeed={30}
//               delaySpeed={1600}
//             />
//           </p>

//           <h3 className="text-4xl font-semibold whitespace-nowrap">
//             Full-Stack / MERN Developer
//           </h3>
//           <button
//   className="
//     group
//     bg-white text-black w-70 h-20 rounded-full border-2
//     py-2 flex justify-between px-2
//     hover:bg-black hover:cursor-none
//     transition-all duration-300
//     hover:border-2 hover:text-white
//   "
// >
//   <a href="#contact" className="pt-2">

//   <span
//     className="
//     text-2xl px-4
//     group-hover:text-white
//     transition-colors duration-300
//     "
//     >
//     Get in touch
//   </span>

//   <span
//     className="
//     text-4xl px-3 py-2 my-0 ml-9 rounded-full
//     group-hover:bg-[#fdf571]
//     group-hover:text-black
//     transition-all duration-300
//     "
//     >
//     →
//   </span>
//     </a>
// </button>

//         </motion.div>

//         <motion.div
//           style={{ scale: imgScale, x: imgX, y: imgY }}
//           className="absolute bottom-[-98] right-1/8 z-30"
//         >
//           <div className="relative bg-black text-white border-0 w-[308px] h-[100px]">
//             {/* <Image
//               src="/pexels.jpg"
//               alt="Background"
//               fill
//               className="object-contain border"
//             /> */}
//             <p className="font-sans text-[10vh] leading-11 py-0 px-4 font-extrabold tracking-tighter">ABOUT <span className="pl-39">ME</span></p>
//           </div>
//         </motion.div>
//       </div>

//       <AnimatePresence>
//         {showNav && (
//           <motion.div
//             initial={{ y: "-100%" }}
//             animate={{ y: 0 }}
//             exit={{ y: "-100%" }}
//             transition={{ type: "spring", stiffness: 100, damping: 20 }}
//             className="fixed top-0 left-0 w-full h-screen flex flex-row bg-[#fdf571] z-50 modal-selection select-text"
//           >
//             <div
//               className="flex justify-between p-6 w-full text-black"
//               onMouseLeave={
//                 () => cursorEvents.leave({ bg: "black", color: "#77221f" })
//               }
//             ></div>

//             <div
//               className="flex justify-between  border-gray-50 w-full text-black"
//               onMouseLeave={
//                 () => cursorEvents.leave({ bg: "black", color: "black" })
//               }
//             >
//               <div
//                 onMouseLeave={
//                   () => cursorEvents.leave({ bg: "black", color: "black" })
//                 }
//                 className=" w-full border-l text-5xl font-sans font-bold leading-18 tracking-wider px-6 py-8"
//               >
//                 <h1
//                   onMouseEnter={() =>
//                     cursorEvents.enter({
//                       text: "CLICK",
//                       bg: "black",
//                       color: "white",
//                       size: 80,
//                     })
//                   }
//                 >
//                   <a href="#hero" onClick={() => setShowNav(false)}>
//                     HOME
//                   </a>
//                 </h1>
//                 <ul
//                   onMouseEnter={() =>
//                     cursorEvents.enter({
//                      text: "CLICK",
//                       bg: "black",
//                       color: "white",
//                       size: 80,
//                     })
//                   }
//                   onMouseLeave={
//                     () => cursorEvents.leave({ bg: "black", color: "black" })
//                   }
//                 >
//                   <li>
//                     <a href="#about" onClick={() => setShowNav(false)}>
//                       <span className=" text-white"># </span>ABOUT
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#skills" onClick={() => setShowNav(false)}>
//                       <span className=" text-white"># </span>SKILLS
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#projects" onClick={() => setShowNav(false)}>
//                       <span className=" text-white text-nowrap"># </span>
//                       PROJECTS
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#certificates" onClick={() => setShowNav(false)}>
//                       <span className=" text-white text-nowrap"># </span>
//                       CERTIFICATES
//                     </a>
//                   </li>
//                 </ul>
//                 <h1
//                   onMouseEnter={() =>
//                     cursorEvents.enter({
//                       text: "CLICK",
//                       bg: "black",
//                       color: "white",
//                       size: 80,
//                     })
//                   }
//                   onMouseLeave={
//                     () => cursorEvents.leave({ bg: "black", color: "black" })}
//                   className="my-12"
//                 >
//                   <a href="#contact" onClick={() => setShowNav(false)}>
//                     CONTACT
//                   </a>
//                 </h1>
//               </div>
//               <div

//                   onMouseLeave={() =>
//                     cursorEvents.leave({ bg: "black", color: "#fff" })
//                   }
//                 className=" w-full border-l text-2xl font-sans font-light leading-10 tracking-wider px-6 py-10"
//               >
//                 <ul
//                   onMouseEnter={() =>
//                     cursorEvents.enter({
//                       text: "CLICK",
//                       bg: "black",
//                       color: "white",
//                       size: 80,
//                     })
//                   }
//                   onMouseLeave={() =>
//                     cursorEvents.leave({ bg: "black", color: "#fff" })
//                   }
//                 >
//                   <li className="mb-6">
//                     <a
//                       href="https://www.linkedin.com/in/gauri-n-22ap4081/"
//                       target="_blank"
//                     >
//                       Linkedin
//                     </a>
//                   </li>
//                   <li>
//                     <a href="https://github.com/Gauri-Nagariya" target="_blank">
//                       Github
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div
//                 onMouseLeave={() =>
//                     cursorEvents.leave({ bg: "black", color: "#fff" })
//                   }
//               className=" w-full py-10 pl-20">
//                 <button
//                   onMouseEnter={() =>
//                     cursorEvents.enter({
//                       text: "CLOSE",
//                       bg: "black",
//                       color: "white",
//                       size: 80,
//                     })
//                   }
//                   onMouseLeave={() =>
//                     cursorEvents.leave({ bg: "black", color: "#fff" })
//                   }
//                   onClick={() => setShowNav(false)}
//                   className="font-bold text-xl text-black rounded cursor-pointer"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

// // "use client";

// // import { useState, useEffect, useRef } from "react";
// // import { cursorEvents } from "../components/cursorController";
// // import {
// //   motion,
// //   useScroll,
// //   useTransform,
// //   AnimatePresence,
// // } from "framer-motion";
// // import { Typewriter } from "react-simple-typewriter";
// // import { useSpring } from "framer-motion";
// // import Image from "next/image";

// // export default function HeroWithNav() {
// //   const sectionRef = useRef(null);
// //   const { scrollY } = useScroll();
// //   const [vh, setVh] = useState(0);
// //   const [showNav, setShowNav] = useState(false);

// //   useEffect(() => {
// //     setVh(window.innerHeight);
// //   }, []);

// //   const heroScale = useTransform(scrollY, [0, 100], [1, 0.25]);
// //   const scrollStart = 120;
// //   const scrollEnd = 450;
// //   const moveUpDistance = 400;

// //   const bottomY = useTransform(
// //     scrollY,
// //     [scrollStart, scrollEnd],
// //     [0, -moveUpDistance]
// //   );
// //   const smoothBottomY = useSpring(bottomY, { stiffness: 50, damping: 25 });

// //   const imgScale = useTransform(scrollY, [150, 400], [1, 5]);
// //   const imgX = useTransform(scrollY, [150, 400], [0, -420]);
// //   const imgY = useTransform(scrollY, [150, 400], [0, -160]);

// //   return (
// //     <section
// //       id="hero"
// //       ref={sectionRef}
// //       className="md:relative md:min-h-[150vh] md:bg-black"
// //       onMouseLeave={() =>
// //         cursorEvents.leave({ bg: "#fdf571", color: "black" })
// //       }
// //     >
// //       <div className="md:sticky md:top-0 md:h-screen md:overflow-hidden">
// //         <div className="md:flex md:items-center md:justify-between md:p-6 md:relative md:z-20">
// //           <motion.h1
// //             onMouseEnter={() =>
// //               cursorEvents.enter({
// //                 text: "THAT'S ME",
// //                 bg: "#fdf571",
// //                 color: "black",
// //                 size: 100,
// //               })
// //             }
// //             onMouseLeave={() =>
// //               cursorEvents.leave({ bg: "#fdf571", color: "#fff" })
// //             }
// //             style={{ scale: heroScale, transformOrigin: "top left" }}
// //             className="md:absolute md:left-6 md:top-6 md:text-[18vw] md:font-bold md:text-white md:leading-none md:z-10"
// //           >
// //             IamGauri
// //           </motion.h1>

// //           <button
// //             onMouseEnter={() =>
// //               cursorEvents.enter({
// //                 text: "CLICK",
// //                 bg: "#fdf571",
// //                 color: "black",
// //                 size: 100,
// //               })
// //             }
// //             onMouseLeave={() =>
// //               cursorEvents.leave({ bg: "#fdf571", color: "#fff" })
// //             }
// //             onClick={() => setShowNav(true)}
// //             className="md:cursor-pointer md:text-lg md:flex md:mx-340 md:right-0 md:text-white md:px-6 md:text-nowrap md:py-3 md:rounded-lg md:z-20 md:relative"
// //           >
// //             Click Me
// //           </button>
// //         </div>

// //         <motion.div
// //           style={{ y: bottomY }}
// //           className="md:absolute md:bottom-10 md:left-8 md:text-white md:flex md:flex-col md:gap-4 md:z-20"
// //         >
// //           <p className="md:text-4xl md:font-medium md:whitespace-nowrap">
// //             <Typewriter
// //               words={[
// //                 "I design. I build. I improve.",
// //                 "Crafting modern, responsive web experiences.",
// //               ]}
// //               loop={0}
// //               cursor
// //               cursorStyle="|"
// //               typeSpeed={90}
// //               deleteSpeed={30}
// //               delaySpeed={1600}
// //             />
// //           </p>

// //           <h3 className="md:text-4xl md:font-semibold md:whitespace-nowrap">
// //             Full-Stack / MERN Developer
// //           </h3>

// //           <button
// //             className="
// //               md:group
// //               md:bg-white md:text-black md:w-70 md:h-20 md:rounded-full md:border-2
// //               md:py-2 md:flex md:justify-between md:px-2
// //               md:hover:bg-black md:hover:cursor-none
// //               md:transition-all md:duration-300
// //               md:hover:border-2 md:hover:text-white
// //             "
// //           >
// //             <a href="#contact" className="md:pt-2">
// //               <span
// //                 className="
// //                   md:text-2xl md:px-4
// //                   md:group-hover:text-white
// //                   md:transition-colors md:duration-300
// //                 "
// //               >
// //                 Get in touch
// //               </span>

// //               <span
// //                 className="
// //                   md:text-4xl md:px-3 md:py-2 md:my-0 md:ml-9 md:rounded-full
// //                   md:group-hover:bg-[#fdf571]
// //                   md:group-hover:text-black
// //                   md:transition-all md:duration-300
// //                 "
// //               >
// //                 →
// //               </span>
// //             </a>
// //           </button>
// //         </motion.div>

// //         <motion.div
// //           style={{ scale: imgScale, x: imgX, y: imgY }}
// //           className="md:absolute md:bottom-[-210] md:right-1/8 md:z-30"
// //         >
// //           <div className="md:relative md:bg-black md:text-white md:border-0 md:w-[308px] md:h-[220px]">
// //             <p className="md:font-sans md:text-[10vh] md:leading-11 md:py-7 md:px-4 md:font-extrabold md:tracking-tighter">
// //               ABOUT <span className="md:pl-39">ME</span>
// //             </p>
// //           </div>
// //         </motion.div>
// //       </div>

// //       <AnimatePresence>
// //         {showNav && (
// //           <motion.div
// //             initial={{ y: "-100%" }}
// //             animate={{ y: 0 }}
// //             exit={{ y: "-100%" }}
// //             transition={{ type: "spring", stiffness: 100, damping: 20 }}
// //             className="md:fixed md:top-0 md:left-0 md:w-full md:h-screen md:flex md:flex-row md:bg-[#fdf571] md:z-50 md:modal-selection md:select-text"
// //           >
// //             {/* NAV CONTENT UNCHANGED — md: PREFIX APPLIED EVERYWHERE */}
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </section>
// //   );
// // }

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
    [0, -moveUpDistance],
  );

  const imgScale = useTransform(scrollY, [100, 300], [1, 5]);
  const imgX = useTransform(scrollY, [100, 300], [0, -420]);
  const imgY = useTransform(scrollY, [100, 300], [0, 120]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="
        relative min-h-screen bg-black border-0 text-white
        md:relative md:min-h-[150vh] md:bg-black md:border-0 md:text-white
      "
      onMouseLeave={() => cursorEvents.leave({ bg: "#fdf571", color: "black" })}
    >
      <div
        className="
          sticky top-0 h-screen
          md:sticky md:top-0 md:h-screen
        "
      >
        <div
          className="
            flex items-center justify-between p-6 relative z-20
            md:flex md:items-center md:justify-between md:p-6 md:relative md:z-20
          "
        >
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
            className="
              absolute left-3 top-30 text-[20vw] font-extrabold text-white leading-none tracking-tighter z-10
              md:absolute md:left-6 md:top-6 md:text-[18vw] md:font-bold md:text-white md:leading-none md:z-10
            "
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
            className="
              cursor-pointer text-lg flex mx-56 right-0 text-white px-6 text-nowrap py-3 rounded-lg z-20 relative
              md:cursor-pointer md:text-lg md:flex md:mx-340 md:right-0 md:text-white md:px-6 md:text-nowrap md:py-3 md:rounded-lg md:z-20 md:relative
            "
          >
            MENU
          </button>
        </div>

        <motion.div
          style={{ y: bottomY }}
          className="
            absolute bottom-18 left-3 text-white flex flex-col gap-4 z-20
            md:absolute md:bottom-10 md:left-8 md:text-white md:flex md:flex-col md:gap-4 md:z-20
          "
        >
          <p
            className="
              text-lg font-medium whitespace-wrap tracking-tighter
              md:text-4xl md:font-medium md:whitespace-nowrap md:tracking-wide
            "
          >
            <Typewriter
              words={[
                "I design. I build. I improve.",
                "Crafting modern, responsive web experiences.",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={30}
              delaySpeed={1600}
            />
          </p>

          <h3
            className="
              text-2xl font-extrabold whitespace-nowrap tracking-tighter
              md:text-4xl md:font-extrabold md:whitespace-nowrap md:tracking-wide
            "
          >
            Full-Stack / MERN Developer
          </h3>

          <button
            className="
              group bg-white text-black w-70 h-20 rounded-full border-2
              py-2 flex justify-between px-2
              hover:bg-black hover:cursor-none
              transition-all duration-300 hover:text-white
              md:group md:bg-white md:text-black md:w-70 md:h-20 md:rounded-full md:border-2
              md:py-2 md:flex md:justify-between md:px-2
              md:hover:bg-black md:hover:cursor-none
              md:transition-all md:duration-300 md:hover:text-white
            "
          >
            <a 
            // href="#contact"
              href="/files/Gauri_nagariya_Resume_.pdf"
              target="_blank"
              rel="noopener noreferrer"
             className="pt-2 md:pt-2">
              <span
                className="
                  text-2xl px-4 transition-colors duration-300
                  md:text-2xl md:px-4 md:transition-colors md:duration-300
                "
              >
                My Resume
              </span>

              <span
                className="
                  text-4xl px-3 py-2 my-0 ml-9 rounded-full
                  group-hover:bg-[#fdf571] group-hover:text-black
                  transition-all duration-300
                  md:text-4xl md:px-3 md:py-2 md:my-0 md:ml-9 md:rounded-full
                  md:group-hover:bg-[#fdf571] md:group-hover:text-black
                  md:transition-all md:duration-300
                "
              >
                →
              </span>
            </a>
          </button>
        </motion.div>

        {/* <motion.div
          style={{ scale: imgScale, x: imgX, y: imgY }}
          className="
            absolute bottom-[-98] right-[-200px] z-30 border-2
            md:absolute md:bottom-[-98] md:right-1/8 md:z-30
          "
        >
          <div
            className="
              relative bg-black text-white border-0 w-[308px] h-[100px]
              md:relative md:bg-black md:text-white md:border-0 md:w-[308px] md:h-[100px]
            "
          >
            <p
              className="
                font-sans text-[10vh] leading-11 py-0 px-4 font-extrabold tracking-tighter
                md:font-sans md:text-[10vh] md:leading-11 md:py-0 md:px-4 md:font-extrabold md:tracking-tighter
              "
            >
              ABOUT <span className="pl-39 md:pl-39">ME</span>
            </p>
          </div>
        </motion.div> */}

        <motion.div
          style={{
            scale: imgScale,
            x: imgX,
            y: imgY,
            opacity: imgScale, // hidden → visible on scroll
          }}
          className="
    absolute bottom-[200px] left-7/2 -translate-x-1/2 w-full z-30 border-0 md:h-0 md:items-center
    opacity-0
    md:absolute md:bottom-[-74] md:left-auto md:right-1/8 md:translate-x-0 md:w-auto md:opacity-100 border-0 md:h-18 md:items-center
  "
        >
          <div
            className="
            w-[30px] h-[42px] font-sans text-[10vh] leading-11 py-2 px-0 font-extrabold tracking-tighter

            md:w-[308px] md:h-[100px] md:font-sans md:text-[10vh] md:leading-11 md:py-0 md:px-4 md:font-extrabold md:tracking-tighter

      "
          >
            <p
              className="
        font-sans text-[3vh] font-extrabold tracking-tighter text-start pl-3 leading-4
        md:text-[10vh] md:tracking-tighter md:text-left md:pl-0 md:leading-11
      "
            >
              ABOUT <span className="ml-[38px] md:pl-25">ME</span>
            </p>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showNav && (
          <motion.div
            onMouseLeave={() =>
              cursorEvents.leave({ bg: "black", color: "#fff" })
            }
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="
              fixed top-0 left-0 w-full h-screen flex flex-row bg-[#fdf571] z-50 modal-selection select-text
              md:fixed md:top-0 md:left-0 md:w-full md:h-screen md:flex md:flex-row md:bg-[#fdf571] md:z-50 md:modal-selection md:select-text
            "
          >
            <div className="flex justify-between p-0 w-0 text-black md:flex md:justify-between md:p-6 md:w-full md:text-black" />

            <div
              onMouseLeave={() =>
                cursorEvents.leave({ bg: "black", color: "#fff" })
              }
              className="flex flex-col justify-between w-full text-black md:flex md:justify-between md:w-full md:text-black md:flex-row"
            >
              <div
                className="w-full border-l text-2xl font-bold px-6 py-10 space-y-3 flex flex-col
               md:w-full md:border-l md:text-5xl md:font-bold md:px-6 md:py-18 md:flex md:flex-col md:space-y-6"
              >
                <a
                  onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "CLICK",
                      bg: "black",
                      color: "white",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "black", color: "#fff" })
                  }
                  href="#hero"
                  onClick={() => setShowNav(false)}
                >
                  HOME
                </a>
                <ul
                  onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "CLICK",
                      bg: "black",
                      color: "white",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "black", color: "#fff" })
                  }
                  className="md:px-0 md:text-nowrap md:space-y-6 md:pt-0  px-0 text-nowrap space-y-3"
                >
                  <li>
                    <a href="#about" onClick={() => setShowNav(false)}>
                      <span className="text-gray-300">#</span> ABOUT
                    </a>
                  </li>
                  <li>
                    <a href="#skills" onClick={() => setShowNav(false)}>
                      <span className="text-gray-300">#</span> SKILLS
                    </a>
                  </li>
                  <li>
                    <a href="#projects" onClick={() => setShowNav(false)}>
                      <span className="text-gray-300">#</span> PROJECTS
                    </a>
                  </li>
                  <li>
                    <a href="#certificates" onClick={() => setShowNav(false)}>
                      <span className="text-gray-300"># </span>CERTIFICATES
                    </a>
                  </li>
                </ul>
                <a
                  onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "CLICK",
                      bg: "black",
                      color: "white",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "black", color: "#fff" })
                  }
                  href="#contact"
                  onClick={() => setShowNav(false)}
                >
                  CONTACT
                </a>
              </div>

              <div className="w-full border-l text-2xl px-6 py-0 space-y-2 flex-col flex md:w-full md:border-l md:text-2xl md:px-6 md:py-18 md:space-y-2 md:flex md:flex-col">
                <a
                  onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "CLICK",
                      bg: "black",
                      color: "white",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "black", color: "#fff" })
                  }
                  href="https://github.com/Gauri-Nagariya"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "CLICK",
                      bg: "black",
                      color: "white",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "black", color: "#fff" })
                  }
                  href="https://www.linkedin.com/in/gauri-nagariya/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </div>

              <div className="w-full py-10 pl-10 pb-20 md:w-full md:py-8 md:pl-20 md:pb-0">
                <button
                  onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "CLOSE",
                      bg: "black",
                      color: "white",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "black", color: "#fff" })
                  }
                  onClick={() => setShowNav(false)}
                  className="font-bold text-xl text-black md:font-extrabold md:text-xl md:text-black"
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
