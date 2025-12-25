"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cursorEvents } from "../components/cursorController";


import { Black_Ops_One } from "next/font/google";

const BlackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: "400",
});

import { Jersey_10 } from "next/font/google";

const JerseY = Jersey_10({
  subsets: ["latin"],
  weight: "400",
});

const Projects = () => {
  const [showNav1, setShowNav1] = useState(false);
  const [showNav2, setShowNav2] = useState(false);
  const [showNav3, setShowNav3] = useState(false);
  const [showNav4, setShowNav4] = useState(false);
  const [showNav5, setShowNav5] = useState(false);
  const [showNav6, setShowNav6] = useState(false);
  const [showNav7, setShowNav7] = useState(false);

  return (
    <motion.div id="projects" className="bg-white h-[120vh]  px-0  py-10 pt-20">
      <div className="border-b border-gray-300 mx-10 text-2xl py-6">
        What I’ve Built
      </div>
      <div className=" py-8 text-7xl font-semibold px-10">
        Real projects, real learning.
      </div>

      <motion.div className="overflow-hidden scroll-smooth py-14 hide-scrollbar touch-none">
        <motion.div
          className="flex gap-20 px-6 cursor-grab"
          drag="x"
          dragConstraints={{ left: -4060, right: 0 }}
          dragElastic={0.1}
          dragMomentum={false}
        >
          <motion.div
           onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "DRAG",
                      bg: "#fdf571",
                      color: "black",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "#fdf571", color: "#fff" })
                  }
          className="flex-none bg-gray-950 h-110 w-180 rounded-4xl flex items-center justify-center text-white text-2xl font-bold">
            <button
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => setShowNav1(true)}
              href=""
              className=" bg-transparent h-[16vh] w-fit text-white rounded-4xl flex justify-center items-center flex-col cursor-pointer"
            >
              <p className={`${BlackOpsOne.className} text-7xl`}>CareerBoard</p>
              <p>A Job Application Tracker Web Application</p>
            </button>
          </motion.div>

          <motion.div
           onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "DRAG",
                      bg: "#fdf571",
                      color: "black",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "#fdf571", color: "#fff" }) 
                  }
          className="flex-none bg-gray-950 h-110 w-180 rounded-4xl flex items-center justify-center text-white text-2xl font-bold">
            <button
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => setShowNav2(true)}
              href=""
              className=" bg-transparent h-[16vh] w-fit text-white rounded-4xl flex justify-center items-center flex-col cursor-pointer"
            >
              <p className={`${BlackOpsOne.className} text-7xl`}>MyDrive</p>
              <p>A full backend + server-rendered project</p>
            </button>
          </motion.div>

          <motion.div 
           onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "DRAG",
                      bg: "#fdf571",
                      color: "black",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "#fdf571", color: "#fff" })
                  }
          className="flex-none bg-gray-950 h-110 w-180 rounded-4xl flex items-center justify-center text-white text-2xl font-bold">
            <button
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => setShowNav3(true)}
              href=""
              className=" bg-transparent h-[16vh] w-fit text-white rounded-4xl flex justify-center items-center flex-col cursor-pointer"
            >
              <p className={`${BlackOpsOne.className} text-7xl`}>MediTrack</p>
              <p>A Job Application Tracker Web Application</p>
            </button>
          </motion.div>

          <motion.div 
           onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "DRAG",
                      bg: "#fdf571",
                      color: "black",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "#fdf571", color: "#fff" }) 
                  }
          className="flex-none bg-gray-950 h-110 w-180 rounded-4xl flex items-center justify-center text-white text-2xl font-bold">
            <button
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => setShowNav4(true)}
              href=""
              className=" bg-transparent h-[16vh] w-fit text-white rounded-4xl flex justify-center items-center flex-col cursor-pointer"
            >
              <p className={`${BlackOpsOne.className} text-7xl`}>Lumeo</p>
              <p>AI-powered Text-to-Image Generator</p>
            </button>
          </motion.div>

          <motion.div 
           onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "DRAG",
                      bg: "#fdf571",
                      color: "black",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "#fdf571", color: "#fff" }) 
                  }
          className="flex-none bg-gray-950 h-110 w-180 rounded-4xl flex items-center justify-center text-white text-2xl font-bold">
            <button
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => setShowNav5(true)}
              href=""
              className=" bg-transparent h-[16vh] w-fit text-white rounded-4xl flex justify-center items-center flex-col cursor-pointer"
            >
              <p className={`${BlackOpsOne.className} text-7xl`}>shortify</p>
              <p>A Job Application Tracker Web Application</p>
            </button>
          </motion.div>

          <motion.div 
           onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "DRAG",
                      bg: "#fdf571",
                      color: "black",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "#fdf571", color: "#fff" })
                  }
          className="flex-none bg-gray-950 h-110 w-180 rounded-4xl flex items-center justify-center text-white text-2xl font-bold">
            <button
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => setShowNav6(true)}
              href=""
              className=" bg-transparent h-[16vh] w-fit text-white rounded-4xl flex justify-center items-center flex-col cursor-pointer"
            >
              <p className={`${BlackOpsOne.className} text-7xl`}>
                Weather Forecaster
              </p>
              <p>A Weather Forecast Web Application</p>
            </button>
          </motion.div>

          <motion.div 
           onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "DRAG",
                      bg: "#fdf571",
                      color: "black",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "#fdf571", color: "#fff" }) 
                  }
          className="flex-none bg-gray-950 h-110 w-180 rounded-4xl flex items-center justify-center text-white text-2xl font-bold">
            <button
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => setShowNav7(true)}
              href=""
              className=" bg-transparent h-[16vh] w-fit text-white rounded-4xl flex justify-center items-center flex-col cursor-pointer"
            >
              <p className={`${BlackOpsOne.className} text-7xl px-10`}>
                NOTES TAKER APP
              </p>
              <p> File-Based Notes Management Web Application</p>
            </button>
          </motion.div>

          <motion.div className="flex-none bg-gray-950 h-110 w-180 rounded-4xl flex items-center justify-center text-white text-2xl font-bold"></motion.div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {showNav1 && (
          <motion.div
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "black", color: "#fff" }) 
                  }
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed flex flex-row top-0 left-0 w-full h-screen bg-[#fdf571] z-50 modal-selection select-text"
          >
            <div className=" w-full  p-6 ">
              <h2 className="text-6xl font-extrabold">
                CAREERBOARD <br />{" "}
                <span className=" text-2xl">
                  A Job Application Tracker Web Application
                </span>
              </h2>

              <p className="text-xl pt-4 text-justify">
                CareerBoard is a full-stack web application designed to help
                users manage and track their job applications in one centralized
                dashboard. Instead of handling multiple spreadsheets, notes, and
                emails, users can store all job-related details securely in one
                place. The platform helps users stay consistent, avoid missed
                deadlines, and focus more on interview preparation and skill
                development.
              </p>
              <div className="text-xl text-justify py-4">
                <h1 className="font-extrabold">Features</h1>
                <ul className="list-disc list-inside pl-4">
                  <li>Secure authentication using JWT</li>
                  <li>
                    Add job applications with resume & cover letter upload
                  </li>
                  <li>
                    Track application status (Applied, Interview, Offer,
                    Rejected)
                  </li>
                  <li>Dashboard insights and analytics</li>
                  <li>Resume & cover letter preview and download</li>
                  <li>Fully responsive (mobile & desktop)</li>
                  <li>Clean UI using Ant Design & Tailwind CSS</li>
                </ul>
              </div>
              <div className=" text-lg">
                <h1 className="font-extrabold text-xl">Technology Stack</h1>
                <p>
                  <span className=" font-extrabold">Frontend</span> React.js
                  (Vite) Tailwind CSS Ant Design Axios Framer Motion React
                  Router DOM
                </p>
                <p>
                  <span className=" font-extrabold">Backend</span> Node.js
                  Express.js JWT Authentication Multer (File Uploads) Express
                  Validator
                </p>
                <p>
                  <span className=" font-extrabold">Database</span> MongoDB
                  (Atlas)
                </p>
              </div>
            </div>
            <div className="h-full w-full flex flex-col right-0 items-end">
              <div className="top-0">
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
                    cursorEvents.leave({ bg: "white", color: "#fff" })
                  }
                  className="px-10 py-4 h-10 w-fit text-black font-black text-2xl rounded cursor-pointer"
                  onClick={() => setShowNav1(false)}
                >
                  Close
                </button>
              </div>

              <div>
                <div 
                  onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "CLICK",
                      bg: "black",
                      color: "white",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "white", color: "#fff" }) 
                  }
                className="right-0 flex flex-col justify-end px-10 my-0 bottom-0 my-120 mx-30">
                  <a
                    href="https://job-application-tracker-peach-seven.vercel.app/"
                    target="_blank"
                    className="font-bold text-4xl py-4"
                  >
                    LIVE PROJECT
                  </a>
                  <a
                    href="https://github.com/Gauri-Nagariya/JobApplicationTracker"
                    target="_blank"
                    className="font-bold text-4xl py-4"
                  >
                    GITHUB
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showNav2 && (
          <motion.div
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "black", color: "#fff" }) 
                  }
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed flex flex-row top-0 left-0 w-full h-screen bg-[#fdf571] z-50 modal-selection select-text"
          >
            <div className=" w-full  p-6 ">
              <h2 className="text-6xl font-extrabold">
                MYDRIVE <br />{" "}
                <span className=" text-2xl">Drive Backend Project</span>
              </h2>

              <p className="text-xl pt-4 text-justify">
                A full backend + server-rendered project built with Node.js,
                Express, MongoDB, JWT, Multer, and EJS. Users can register,
                login, upload files, view them, delete them, download them, and
                update their profile. All uploaded files are stored directly
                inside MongoDB using Binary Buffer (not locally).
              </p>
              <div className="text-xl text-justify py-4">
                <h1 className="font-extrabold">Features</h1>
                <ul className="list-disc list-inside pl-4">
                  <li>User Registration & Login with JWT Authentication</li>
                  <li>Password hashing using Bcrypt</li>
                  <li>File Upload using Multer</li>
                  <li>Files stored directly in MongoDB (Buffer/Binary)</li>
                  <li>View, Download & Delete uploaded files</li>
                  <li>Profile Update (username, email, password)</li>
                  <li>Form validations using express-validator</li>
                  <li>Cookies handled with cookie-parser</li>
                  <li>Server-Side Rendering using EJS</li>
                </ul>
              </div>
              <div className=" text-lg">
                <h1 className="font-extrabold text-xl">Technology Stack</h1>
                <p>
                  Node.js Express.js MongoDB Atlas Mongoose Multer JWT
                  (jsonwebtoken) EJS dotenv
                </p>
              </div>
            </div>
            <div className="h-full w-full flex flex-col right-0 items-end">
              <div className="top-0">
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
                  className="px-10 py-4 h-10 w-fit text-black font-black text-2xl rounded cursor-pointer"
                  onClick={() => setShowNav2(false)}
                >
                  Close
                </button>
              </div>

              <div>
                <div 
                  onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "CLICK",
                      bg: "black",
                      color: "white",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "white", color: "#fff" })
                  }
                className="right-0 flex flex-col justify-end px-10 my-0 bottom-0 my-120 mx-30">
                  <a
                    href="https://drive-x6zy.onrender.com/"
                    target="_blank"
                    className="font-bold text-4xl py-4"
                  >
                    LIVE PROJECT
                  </a>
                  <a
                    href="https://github.com/Gauri-Nagariya/Drive_BackendProject"
                    target="_blank"
                    className="font-bold text-4xl py-4"
                  >
                    GITHUB
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showNav3 && (
          <motion.div
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "black", color: "#fff" }) 
                  }
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed flex flex-row top-0 left-0 w-full h-screen bg-[#fdf571] z-50 modal-selection select-text"
          >
            <div className=" w-full  p-6 ">
              <h2 className="text-6xl font-extrabold">
                MYDRIVE <br />{" "}
                <span className=" text-2xl">Drive Backend Project</span>
              </h2>

              <p className="text-xl pt-4 text-justify">
                A full backend + server-rendered project built with Node.js,
                Express, MongoDB, JWT, Multer, and EJS. Users can register,
                login, upload files, view them, delete them, download them, and
                update their profile. All uploaded files are stored directly
                inside MongoDB using Binary Buffer (not locally).
              </p>
              <div className="text-xl text-justify py-4">
                <h1 className="font-extrabold">Features</h1>
                <ul className="list-disc list-inside pl-4">
                  <li>User Registration & Login with JWT Authentication</li>
                  <li>Password hashing using Bcrypt</li>
                  <li>File Upload using Multer</li>
                  <li>Files stored directly in MongoDB (Buffer/Binary)</li>
                  <li>View, Download & Delete uploaded files</li>
                  <li>Profile Update (username, email, password)</li>
                  <li>Form validations using express-validator</li>
                  <li>Cookies handled with cookie-parser</li>
                  <li>Server-Side Rendering using EJS</li>
                </ul>
              </div>
              <div className=" text-lg">
                <h1 className="font-extrabold text-xl">Technology Stack</h1>
                <p>
                  Node.js Express.js MongoDB Atlas Mongoose Multer JWT
                  (jsonwebtoken) EJS dotenv
                </p>
              </div>
            </div>
            <div className="h-full w-full flex flex-col right-0 items-end">
              <div className="top-0">
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
                    cursorEvents.leave({ bg: "white", color: "#fff" }) 
                  }
                  className="px-10 py-4 h-10 w-fit text-black font-black text-2xl rounded cursor-pointer"
                  onClick={() => setShowNav3(false)}
                >
                  Close
                </button>
              </div>

              <div>
                <div 
                  onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "CLICK",
                      bg: "black",
                      color: "white",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "white", color: "#fff" }) 
                  }
                className="right-0 flex flex-col justify-end px-10 my-0 bottom-0 my-120 mx-30">
                  <a
                    href="https://drive-x6zy.onrender.com/"
                    target="_blank"
                    className="font-bold text-4xl py-4"
                  >
                    LIVE PROJECT
                  </a>
                  <a
                    href="https://github.com/Gauri-Nagariya/Drive_BackendProject"
                    target="_blank"
                    className="font-bold text-4xl py-4"
                  >
                    GITHUB
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showNav4 && (
          <motion.div
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "black", color: "#fff" }) 
                  }
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed flex flex-row top-0 left-0 w-full h-screen bg-[#fdf571] z-50 modal-selection select-text"
          >
            <div className=" w-full  p-6 ">
              <h2 className="text-6xl font-extrabold">
                LUMEO <br />{" "}
                <span className=" text-2xl">
                  AI-Powered Text to Image Generator
                </span>
              </h2>

              <p className="text-xl pt-4 text-justify">
                An AI-powered Text-to-Image Generator is a cutting-edge tool
                that transforms your imagination into reality. Simply describe
                your vision in words, and our intelligent engine instantly
                transforms it into a high-quality, visually stunning image. This
                application is perfect for designers, creators, or anyone
                looking to explore their creativity. It requires no design
                skills—just type your idea, watch the magic happen, and download
                or share your masterpiece in seconds.
              </p>
              <div className="text-xl text-justify py-4">
                <h1 className="font-extrabold">Features</h1>
                <ul className="list-disc list-inside pl-4">
                  <li>AI-powered text-to-image generation in real time</li>
                  <li>
                    High-quality image preview with download & share options
                  </li>
                  <li>Secure user authentication (JWT-based login/signup)</li>
                  <li>
                    Razorpay payment integration for credit-based image
                    generation
                  </li>
                  <li>
                    User profile management (update username, email, password)
                  </li>
                  <li>
                    Form validation and error handling using express-validator
                  </li>
                  <li>
                    Responsive UI with smooth animations and toast notifications
                  </li>
                </ul>
              </div>
              <div className=" text-lg">
                <h1 className="font-extrabold text-xl">Technology Stack</h1>
                <p>
                  <span className=" font-extrabold">Frontend</span> React, React
                  Router DOM Tailwind CSS, Framer Motion Vite, Axios React
                  Toastify
                </p>
                <p>
                  <span className=" font-extrabold">Backend</span> Node.js,
                  Express.js MongoDB, Mongoose JWT, Bcrypt CORS, Dotenv, Nodemon
                </p>
              </div>
            </div>
            <div className="h-full w-full flex flex-col right-0 items-end">
              <div className="top-0">
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
                    cursorEvents.leave({ bg: "white", color: "#fff" }) 
                  }
                  className="px-10 py-4 h-10 w-fit text-black font-black text-2xl rounded cursor-pointer"
                  onClick={() => setShowNav4(false)}
                >
                  Close
                </button>
              </div>

              <div>
                <div 
                  onMouseEnter={() =>
                    cursorEvents.enter({
                      text: "CLICK",
                      bg: "black",
                      color: "white",
                      size: 100,
                    })
                  }
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "white", color: "#fff" }) 
                  }
                className="right-0 flex flex-col justify-end px-10 my-0 bottom-0 my-120 mx-30">
                  <a
                    href="https://lumeo-text-to-image-generator.vercel.app/"
                    target="_blank"
                    className="font-bold text-4xl py-4"
                  >
                    LIVE PROJECT
                  </a>
                  <a
                    href="https://github.com/Gauri-Nagariya/Lumeo-text-to-image-generator"
                    target="_blank"
                    className="font-bold text-4xl py-4"
                  >
                    GITHUB
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showNav5 && (
          <motion.div
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "black", color: "#fff" })
                  }
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed flex flex-row top-0 left-0 w-full h-screen bg-[#fdf571] z-50 modal-selection select-text"
          >
            <div className=" w-full  p-6 ">
              <h2 className="text-6xl font-extrabold">
                SHORTIFY
                <br />
                <span className="text-2xl">
                  Secure URL Shortening & QR Code Generator
                </span>
              </h2>

              <p className="text-xl pt-4 text-justify">
                This project is a secure URL Shortener web application that
                allows users to convert long URLs into short, shareable links
                using Nano ID. Authenticated users can generate QR codes for
                shortened URLs and download them for offline use. The
                application includes proper authentication, validation, and a
                clean, responsive interface built for ease of use.
              </p>

              <div className="text-xl text-justify py-4">
                <h1 className="font-extrabold">Features</h1>
                <ul className="list-disc list-inside pl-4">
                  <li>User authentication (Register, Login, Logout)</li>
                  <li>Secure URL shortening using Nano ID</li>
                  <li>QR code generation for shortened URLs</li>
                  <li>Downloadable QR codes</li>
                  <li>Form validation and protected routes</li>
                  <li>Responsive UI with Bootstrap</li>
                </ul>
              </div>

              <div className="text-lg">
                <h1 className="font-extrabold text-xl">Technology Stack</h1>
                <p>
                  <span className="font-extrabold">Frontend</span> React.js,
                  Bootstrap, QRCode React
                </p>
                <p>
                  <span className="font-extrabold">Backend</span> Node.js,
                  Express.js, JWT Authentication, Nano ID
                </p>
                <p>
                  <span className="font-extrabold">Database</span> MongoDB
                </p>
              </div>
            </div>
            <div className="h-full w-full flex flex-col right-0 items-end">
              <div className="top-0">
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
                  className="px-10 py-4 h-10 w-fit text-black font-black text-2xl rounded cursor-pointer"
                  onClick={() => setShowNav5(false)}
                >
                  Close
                </button>
              </div>

              <div>
                <div 
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
                className="right-0 flex flex-col justify-end px-10 my-0 bottom-0 my-120 mx-30">
                  <a
                    href="https://shortify-two.vercel.app/"
                    target="_blank"
                    className="font-bold text-4xl py-4"
                  >
                    LIVE PROJECT
                  </a>
                  <a
                    href="https://github.com/Gauri-Nagariya/shortify"
                    target="_blank"
                    className="font-bold text-4xl py-4"
                  >
                    GITHUB
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showNav6 && (
          <motion.div
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "black", color: "#fff" }) 
                  }
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed flex flex-row top-0 left-0 w-full h-screen bg-[#fdf571] z-50 modal-selection select-text"
          >
            <div className=" w-full  p-6 ">
              <h2 className="text-6xl font-extrabold">
                REACT WEATHER APP <br />
                <span className="text-2xl">
                  Real-Time Weather Forecast & Interactive Map
                </span>
              </h2>

              <p className="text-xl pt-4 text-justify">
                This React-based weather application provides real-time weather
                updates and a 7-day forecast for any searched location. It
                features an interactive map to visualize locations, along with
                search history and input validation to ensure a smooth and
                user-friendly experience across devices.
              </p>

              <div className="text-xl text-justify py-4">
                <h1 className="font-extrabold">Features</h1>
                <ul className="list-disc list-inside pl-4">
                  <li>Real-time weather data for searched locations</li>
                  <li>7-day weather forecast with detailed insights</li>
                  <li>Interactive maps using Leaflet.js</li>
                  <li>Search history with input validation</li>
                  <li>Responsive UI for mobile and desktop</li>
                  <li>Clean and modern user interface</li>
                </ul>
              </div>

              <div className="text-lg">
                <h1 className="font-extrabold text-xl">Technology Stack</h1>
                <p>
                  <span className="font-extrabold">Frontend</span> React.js, CSS
                </p>
                <p>
                  <span className="font-extrabold">APIs & Libraries</span>{" "}
                  Weather API, Leaflet.js, React-Leaflet
                </p>
              </div>
            </div>
            <div className="h-full w-full flex flex-col right-0 items-end">
              <div className="top-0">
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
                  className="px-10 py-4 h-10 w-fit text-black font-black text-2xl rounded cursor-pointer"
                  onClick={() => setShowNav6(false)}
                >
                  Close
                </button>
              </div>

              <div>
                <div 
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
                className="right-0 flex flex-col justify-end px-10 my-0 bottom-0 my-120 mx-30">
                  <a
                    href="https://weather-forecast-web-app-mu.vercel.app/"
                    target="_blank"
                    className="font-bold text-4xl py-4"
                  >
                    LIVE PROJECT
                  </a>
                  <a
                    href="https://github.com/Gauri-Nagariya/Weather-Forecast-Web-App"
                    target="_blank"
                    className="font-bold text-4xl py-4"
                  >
                    GITHUB
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showNav7 && (
          <motion.div
                  onMouseLeave={() =>
                    cursorEvents.leave({ bg: "black", color: "#fff" }) 
                  }
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed flex flex-row top-0 left-0 w-full h-screen bg-[#fdf571] z-50 modal-selection select-text"
          >
            <div className=" w-full  p-6 ">
              <h2 className="text-6xl font-extrabold">
                NOTES TAKER APP <br />
                <span className="text-2xl">
                  File-Based Notes Management Web Application
                </span>
              </h2>

              <p className="text-xl pt-4 text-justify">
                Notes Taker is a lightweight web application that allows users
                to create, view, and edit notes directly from the browser. The
                app works entirely without a database, using Node.js file system
                (fs) module to store notes as .txt files, making it simple,
                fast, and easy to set up.
              </p>

              <div className="text-xl text-justify py-4">
                <h1 className="font-extrabold">Features</h1>
                <ul className="list-disc list-inside pl-4">
                  <li>Create new notes through a simple web interface</li>
                  <li>View all saved notes from the local notes folder</li>
                  <li>Edit existing notes directly within the application</li>
                  <li>File-based storage using Node.js fs module</li>
                  <li>No database required</li>
                  <li>Responsive and clean UI using TailwindCSS</li>
                </ul>
              </div>

              <div className="text-lg">
                <h1 className="font-extrabold text-xl">Technology Stack</h1>
                <p>
                  <span className="font-extrabold">Frontend</span> EJS (Embedded
                  JavaScript Templates)
                </p>
                <p>
                  <span className="font-extrabold">Styling</span> TailwindCSS
                </p>
                <p>
                  <span className="font-extrabold">Backend</span> Express.js
                </p>
                <p>
                  <span className="font-extrabold">Storage</span> Node.js fs
                  (File System) Module
                </p>
              </div>
            </div>
            <div className="h-full w-full flex flex-col right-0 items-end">
              <div className="top-0">
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
                  className="px-10 py-4 h-10 w-fit text-black font-black text-2xl rounded cursor-pointer"
                  onClick={() => setShowNav7(false)}
                >
                  Close
                </button>
              </div>

              <div>
                <div 
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
                className="right-0 flex flex-col justify-end px-10 my-0 bottom-0 my-120 mx-30">
                  <a
                    href="https://weather-forecast-web-app-mu.vercel.app/"
                    target="_blank"
                    className="font-bold text-4xl py-4"
                  >
                    LIVE PROJECT
                  </a>
                  <a
                    href="https://github.com/Gauri-Nagariya/Weather-Forecast-Web-App"
                    target="_blank"
                    className="font-bold text-4xl py-4"
                  >
                    GITHUB
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;
