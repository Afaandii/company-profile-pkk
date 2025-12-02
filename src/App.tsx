import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Templates from "./components/sections/Templates";
import Pricing from "./components/sections/Pricing";
import Contact from "./components/sections/Contact";
import Testimonials from "./components/sections/Testimonials";

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Templates />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
