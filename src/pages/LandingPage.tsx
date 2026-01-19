import React from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Templates from "../components/sections/Templates";
import Pricing from "../components/sections/Pricing";
import Contact from "../components/sections/Contact";
import Testimonials from "../components/sections/Testimonials";

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Templates />
      <Pricing />
      <Testimonials />
      <Contact />
    </>
  );
};

export default LandingPage;
