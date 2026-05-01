"use client";
import React from "react";
import { motion } from "framer-motion";
import { cursorEvents } from "./cursorController";

const Experience = () => {
  return (
    <motion.div
      id="experience"
      className="md:bg-white md:min-h-[120vh] md:px-10 md:py-10 bg-white min-h-screen px-6 py-14"
    >
      <div className="md:border-b md:border-gray-300 md:px-0 md:text-2xl md:py-6    border-b border-gray-300 px-0 text-2xl py-4">
        Experience
      </div>
      <div className=" md:py-8 md:text-7xl md:font-semibold py-4 text-5xl font-semibold">
        Where I’ve Applied My Skills
      </div>

      <div className="md:flex md:flex-row md:pt-16 flex flex-col pt-4 gap-10">
        <div className="md:bg-white md:h-full md:w-[40vw] md:font-semibold text-xl md:text-5xl md:pr-14 md:py-10 md:text-left md:text-wrap md:leading-10 md:block">
          <div>
            NANOSTACK PVT. LTD.{" "}<br/>
            <span className=" bg-[#fdf571] text-nowrap text-[32px] md:text-[36px]">
              Mern Stack Developer
            </span>
            <br />
            <span className="text-[32px] md:text-[36px]">Internship, On-Site</span>
            <br />
            <span className="text-[32px] md:text-[36px]">Feb 2026 - April 2026</span>
          </div>
          <div className="flex flex-row gap-4 md:gap-12">

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
                     className="md:pt-20 md:text-[28px] pt-4 text-2xl"
                   >
                     <a
                       href="/files/EXPERIENCE LETTER.pdf"
                       target="_blank"
                       rel="noopener noreferrer"
                     >
                       Experience Letter
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
                     className="md:pt-20 md:text-[28px] pt-4 text-2xl"
                   >
                     <a
                       href="/files/Gauri Internship Certificate.pdf"
                       target="_blank"
                       rel="noopener noreferrer"
                     >
                       Certificate
                     </a>
                   </div>
          </div>

        </div>

        <div className="md:bg-white md:h-80 md:w-[52vw] md:pl-26 bg-white h-80 w-full px-0">
          <div
            className="md:py-4 md:text-3xl
            py-2 text-2xl"
          >
                <ul className="list-disc text-justify">
                    <li>Contributed to a live ERP system with 25+ modules, building features that supported actual business operations</li>
                    <li>Designed and integrated REST APIs to enable efficient data flow between frontend and backend systems</li>
                    <li>Transformed UI/UX designs into responsive, functional interfaces using modern frontend technologies</li>
                    <li>Translated UI/UX designs into responsive, user-friendly interfaces and improved performance through debugging and testing</li>
                    <li>Worked in a collaborative team environment, gaining experience in scalable architecture, database management, and real project workflows</li>

                </ul>
          
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { cursorEvents } from "./cursorController";

// const Certificates = () => {
//   return (
//     <motion.div
//       id="certificates"
//       className="
//         bg-white
//         min-h-screen
//         px-4 sm:px-10
//         py-10
//         overflow-hidden
//       "
//     >
//       {/* Header */}
//       <div className="border-b border-gray-300 text-xl sm:text-2xl py-6">
//         Achievements & Certificates
//       </div>

//       <div className="py-6 sm:py-8 text-4xl sm:text-7xl font-semibold">
//         Recognizing Skills & Success
//       </div>

//       {/* Content */}
//       <div className="flex flex-col sm:flex-row gap-10 pt-10">
//         {/* Left Text */}
//         <div
//           className="
//             bg-white
//             w-full sm:w-[40vw]
//             font-semibold
//             text-2xl sm:text-5xl
//             pr-0 sm:pr-14
//             py-6
//             leading-snug sm:leading-[3.5rem]
//           "
//         >
//           I have earned certificates and achievements that reflect my{" "}
//           <span className="bg-[#fdf571] px-1">skills and dedication</span>, and
//           commitment to growth and excellence across various fields.
//         </div>

//         {/* Certificate List */}
//         <div className="bg-white w-full sm:w-[55vw] pl-0 sm:pl-26">
//           {[
//             ["01", "React JS Certification Course", "/files/React JS Certification Course (GFG).pdf"],
//             ["02", "SQL Course", "/files/SQL Intermediate (HackerRank).pdf"],
//             ["03", "Operating Systems (NPTEL)", "/files/NPTEL.pdf"],
//             ["04", "Introduction to Generative AI", "/files/Introduction to Generative AI (simplilearn).pdf"],
//             ["05", "Introduction to Modern AI", "/files/Introduction to Modern AI (cisco).pdf"],
//             ["06", "Introduction to Prompt Engineering", "/files/Introduction to Prompt Engineering.pdf"],
//             ["07", "Smart India Hackathon (SIH) – Finalist", "/files/sih.pdf"],
//           ].map(([num, title, link]) => (
//             <div
//               key={num}
//               onMouseEnter={() =>
//                 cursorEvents.enter({
//                   text: "VIEW",
//                   bg: "#fdf571",
//                   color: "black",
//                   size: 100,
//                 })
//               }
//               onMouseLeave={() =>
//                 cursorEvents.leave({ bg: "#fdf571", color: "#fff" })
//               }
//               className="
//                 border-b border-gray-300
//                 py-4
//                 text-xl sm:text-3xl
//                 transition-all duration-300 ease-out
//                 hover:py-6 hover:text-2xl sm:hover:text-4xl
//               "
//             >
//               <span className="text-gray-400 font-bold pr-4">{num}</span>
//               <a href={link} target="_blank" rel="noopener noreferrer">
//                 {title}
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Certificates;
