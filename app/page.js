import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import CustomCursor from "./components/CustomCursor";
import Intro from "./components/Intro";
import Experience from "./components/Experience";

const page = () => {
  return (
    <div className="h-auto max-w-full overflow-hidden !border-black bg-white">
      <Intro />
      <CustomCursor />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
    </div>
  );
};

export default page;
