import React from "react";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Proyects from "../sections/Proyects";
import Contact from "../sections/Contact";

const IndexPage = () => (
  <>
    <main>
      <Hero />
      <About />
      <Proyects />
      <Contact />
    </main>
    <footer className="pageFooter">{`Made with React, Sass, Vim and <Ctrl-c> + <Ctrl-v>`}</footer>
  </>
);

export default IndexPage;
