import React from "react";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import Navbar from "./components/Navbar";
import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      {/*WIP*/}
      <LogoSection />
      <FeatureCards />
    </>
  );
};

export default App;
