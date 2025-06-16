import React from "react";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import Navbar from "./sections/Navbar";
import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";

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
    </>
  );
};

export default App;
