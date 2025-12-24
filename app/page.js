import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import CustomCursor from "./components/CustomCursor";
import Intro from "./components/Intro";

const page = () => {
  return (
    <div className="h-auto border bg-white">
      <Intro />
      <CustomCursor />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
};

export default page;
