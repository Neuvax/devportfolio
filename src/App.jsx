import React from "react";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
    </>
  );
};

export default App;
