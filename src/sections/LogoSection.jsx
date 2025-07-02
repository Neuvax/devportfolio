import React from "react";
import { logoIconsList } from "../constants";
import OptimizedImage from "../components/OptimizedImage";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <OptimizedImage
        src={icon.imgPath}
        alt={`${icon.name} company logo`}
        className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
        width={120}
        height={60}
      />
    </div>
  );
};

const LogoSection = () => {
  return (
    <section
      className="md:my-20 my-10 relative"
      aria-labelledby="clients-title"
    >
      <div className="sr-only">
        <h2 id="clients-title">Trusted by Leading Companies</h2>
      </div>

      <div className="gradient-edge" aria-hidden="true"></div>
      <div className="gradient-edge" aria-hidden="true"></div>

      <div
        className="marquee h-52"
        role="img"
        aria-label="Scrolling logos of partner companies"
      >
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon, idx) => (
            <LogoIcon key={`first-${idx}`} icon={icon} />
          ))}
          {logoIconsList.map((icon, idx) => (
            <LogoIcon key={`second-${idx}`} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
