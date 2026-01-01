 {/* <AnimatePresence>
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
      </AnimatePresence> */}