"use client";
import React from "react";
import { motion } from "framer-motion";
import { cursorEvents } from "./cursorController";

const Certificates = () => {
  return (
    <motion.div id="certificates" className="md:bg-white md:h-[120vh] md:px-10  md:py-10    bg-white h-[120vh] px-6  py-64">
      <div className="md:border-b md:border-gray-300 md:px-0 md:text-2xl md:py-6    border-b border-gray-300 px-0 text-2xl py-4">
        Achievements & Certificates
      </div>
      <div className=" md:py-8 md:text-7xl md:font-semibold py-4 text-5xl font-semibold">
        Recognizing Skills & Success
      </div>

      <div className="md:flex md:flex-row md:pt-16 flex flex-row pt-4">
        <div className="md:bg-white md:h-full md:w-[40vw] md:font-semibold md:text-5xl md:pr-14 md:py-10 md:text-left md:text-wrap md:leading-12 md:block hidden">
          I have earned certificates and achievements that reflect my{" "}
          <span className=" bg-[#fdf571]">skills and dedication</span>, and
          commitment to growth and excellence across various fields.
        </div>
        <div className="md:bg-white md:h-80 md:w-[55vw] md:pl-26 bg-white h-80 w-full px-0">
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
            className="md:border-b md:border-gray-300 md:py-4 md:text-3xl  md:transition-all md:duration-400 md:ease-out md:hover:py-6 md:hover:text-4xl
            border-b border-gray-300 py-2 text-2xl  transition-all duration-400 ease-out hover:py-4 hover:text-3xl"
          >
            <span className=" text-gray-400 font-bold pr-4">01</span>
            <a
              href="/files/sih.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Smart India Hackathon (SIH) – Finalist{" "}
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
            className="md:border-b md:border-gray-300 md:py-4 md:text-3xl  md:transition-all md:duration-400 md:ease-out md:hover:py-6 md:hover:text-4xl
            border-b border-gray-300 py-2 text-2xl  transition-all duration-400 ease-out hover:py-4 hover:text-3xl"
          >
            <span className=" text-gray-400 font-bold pr-4">02</span>
            <a
              href="/files/AWS Academy Cloud Architecting.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              AWS Academy Cloud Architecting{" "}
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
            className="md:border-b md:border-gray-300 md:py-4 md:text-3xl  md:transition-all md:duration-400 md:ease-out md:hover:py-6 md:hover:text-4xl
            border-b border-gray-300 py-2 text-2xl  transition-all duration-400 ease-out hover:py-4 hover:text-3xl"
          >
            <span className=" text-gray-400 font-bold pr-4">03</span>
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
           className="md:border-b md:border-gray-300 md:py-4 md:text-3xl  md:transition-all md:duration-400 md:ease-out md:hover:py-6 md:hover:text-4xl
            border-b border-gray-300 py-2 text-2xl  transition-all duration-400 ease-out hover:py-4 hover:text-3xl"
          >
            <span className=" text-gray-400 font-bold pr-4">04</span>
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
           className="md:border-b md:border-gray-300 md:py-4 md:text-3xl  md:transition-all md:duration-400 md:ease-out md:hover:py-6 md:hover:text-4xl
            border-b border-gray-300 py-2 text-2xl  transition-all duration-400 ease-out hover:py-4 hover:text-3xl"
          >
            <span className=" text-gray-400 font-bold pr-4">05</span>
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
           className="md:border-b md:border-gray-300 md:py-4 md:text-3xl  md:transition-all md:duration-400 md:ease-out md:hover:py-6 md:hover:text-4xl
            border-b border-gray-300 py-2 text-2xl  transition-all duration-400 ease-out hover:py-4 hover:text-3xl"
          >
            <span className=" text-gray-400 font-bold pr-4">06</span>
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
            className="md:border-b md:border-gray-300 md:py-4 md:text-3xl  md:transition-all md:duration-400 md:ease-out md:hover:py-6 md:hover:text-4xl
            border-b border-gray-300 py-2 text-2xl  transition-all duration-400 ease-out hover:py-4 hover:text-3xl"
          >
            <span className=" text-gray-400 font-bold pr-4">07</span>
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
           className="md:border-b md:border-gray-300 md:py-4 md:text-3xl  md:transition-all md:duration-400 md:ease-out md:hover:py-6 md:hover:text-4xl
            border-b border-gray-300 py-2 text-2xl  transition-all duration-400 ease-out hover:py-4 hover:text-3xl"
          >
            <span className=" text-gray-400 font-bold pr-4">08</span>
            <a
              href="/files/Introduction to Prompt Engineering.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Introduction to Prompt Engineering{" "}
            </a>
          </div>

        
        </div>
      </div>
    </motion.div>
  );
};

export default Certificates;



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
