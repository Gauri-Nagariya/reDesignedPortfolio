"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { cursorEvents } from "./cursorController";
import { useRef } from "react";

const text =
  "Hi, I’m Gauri, a Frontend / Full-Stack Developer with a strong foundation in Computer Science. I have hands-on experience building real-world web applications, focusing on creating interactive, scalable, and user-friendly solutions. I enjoy turning ideas into functional products while ensuring a smooth and efficient user experience. My goal is to create innovative digital experiences while continuously growing as a developer and becoming fully self-dependent in my career. I am confident in my ability to develop, optimize, and deliver high-quality applications, and I’m always ready to take on new challenges.";
("Hi, I’m Gauri, a Frontend / Full-Stack Developer with a strong foundation in Computer Science. I have hands-on experience building real-world web applications, focusing on creating interactive, scalable, and user-friendly solutions. I enjoy turning ideas into functional products while ensuring a smooth and efficient user experience. My goal is to create innovative digital experiences while continuously growing as a developer and becoming fully self-dependent in my career. I am confident in my ability to develop, optimize, and deliver high-quality applications, and I’m always ready to take on new challenges.");
export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  return (
    <div
      onMouseLeave={() => cursorEvents.leave({ bg: "#fdf571", color: "#fff" })}
      id="about"
      ref={ref}
      className="md:h-[160vh] md:pt-20 md:text-justify md:bg-black md:flex md:items-center md:justify-center md:border-0 md:text-white
                  h-[70vh] pt-0 text-justify bg-black flex items-center justify-center text-white border-0"
    >
      <p
        className="md:text-6xl md:font-normal md:px-18 md:flex md:flex-wrap md:gap-x-2 md:leading-18  md:text-justify
                    text-xl font-normal px-4 flex flex-wrap gap-x-2 leading-6  text-justify"
      >
        {text.split(" ").map((word, i) => {
          const color = useTransform(
            scrollYProgress,
            [i / text.split(" ").length, (i + 3) / text.split(" ").length],
            ["rgba(255,255,255,0.3)", "rgba(255,255,255,1)"],
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

// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { cursorEvents } from "./cursorController";
// import { useRef } from "react";

// const text =
// "I’m Gauri, a Full-Stack / MERN Developer building modern, responsive, and user-friendly web applications. I work across frontend and backend, creating clean interfaces backed by secure, scalable logic. I have hands-on experience with React, JavaScript, Node.js, Express, MongoDB, and modern UI frameworks. I value code quality, performance, and usability, and I’m always eager to learn and grow."
// "I am Gauri Nagariya, a passionate Full-Stack / MERN Developer with hands-on experience in React, Node.js, Express, and MongoDB, dedicated to building modern, responsive, and user-friendly web applications. I thrive on creating clean, efficient code and solving challenging problems that have real-world impact. My career goal is to become a self-dependent developer who consistently delivers innovative solutions while continuously learning new technologies."

// export default function About() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start center", "end center"],
//   });

//   return (
//     <div
//       onMouseLeave={() =>
//         cursorEvents.leave({ bg: "#fdf571", color: "#fff" })
//       }
//       id="about"
//       ref={ref}
//       className="md:h-[124vh] md:pt-0 md:text-justify md:bg-black md:flex md:items-center md:justify-center"
//     >
//       <p className="md:text-6xl md:font-normal md:px-18 md:flex md:flex-wrap md:gap-x-2 md:leading-18 md:text-justify">
//         {text.split(" ").map((word, i) => {
//           const color = useTransform(
//             scrollYProgress,
//             [i / text.split(" ").length, (i + 3) / text.split(" ").length],
//             ["rgba(255,255,255,0.3)", "rgba(255,255,255,1)"]
//           );

//           return (
//             <motion.span key={i} style={{ color }}>
//               {word}
//             </motion.span>
//           );
//         })}
//       </p>
//     </div>
//   );
// }
