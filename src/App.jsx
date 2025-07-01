import React from "react";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import Navbar from "./sections/Navbar";
import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      {/*WIP*/}
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      {/*WIP*/}
      <Testimonials />
      <Contact />
    </>
  );
};

export default App;
