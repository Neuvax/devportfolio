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
import Footer from "./sections/Footer";
import SkipLink from "./components/SkipLink";
import SEOHead from "./components/SEOHead";

const App = () => {
  return (
    <>
      <SEOHead />
      <SkipLink />

      {/* Page structure with proper landmarks */}
      <div className="min-h-screen bg-black text-white">
        <Navbar />

        <main id="main-content" role="main">
          <Hero />
          <Showcase />
          <LogoSection />
          <FeatureCards />
          <ExperienceSection />
          <TechStack />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
