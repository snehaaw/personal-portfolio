"use client";

import React from "react";
import styles from "./style";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Page = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Home />
        <AboutMe />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
    <div className={`{styles.flexCenter}`}>
        <Footer />
    </div>
  </div>
);

export default Page;
