import React from "react";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons } from "../constants";
import TechIcon from "../components/Models/TechLogos/TechIcon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return (
    <section
      id="skills"
      className="flex-center section-padding"
      aria-labelledby="skills-title"
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="Technologies I work with"
        />
        <div className="tech-grid">
          {techStackIcons.map((icon, index) => (
            <article
              key={`tech-${index}`}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
              role="article"
              aria-labelledby={`tech-title-${index}`}
            >
              <div className="tech-card-animated-bg" aria-hidden="true" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper" aria-hidden="true">
                  <TechIcon model={icon} />
                </div>
                <div className="padding-x w-full">
                  <p
                    id={`tech-title-${index}`}
                    className="text-white font-medium"
                  >
                    {icon.name}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
