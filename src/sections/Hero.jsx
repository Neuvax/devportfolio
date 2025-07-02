import React from "react";
import { words } from "../constants";
import { ColourfulText } from "../components/ui/colorful-text";
import Button from "../components/Button";
import HeroExperience from "./../components/HeroModels/HeroExperience";
import OptimizedImage from "../components/OptimizedImage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="hero-layout">
        {/*LEFT: HERO TEXT*/}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1 id="hero-title">
                Turning
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={`hero-word-${word.text}-${index}`}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <div className="xl:size-12 md:size-10 size-8 rounded-full bg-white-50 flex items-center justify-center flex-shrink-0">
                          <OptimizedImage
                            src={word.imgPath}
                            alt={`${word.text} icon representing creative process`}
                            className="xl:size-6 md:size-5 size-4 object-contain"
                            width={24}
                            height={24}
                            priority={index < 2}
                          />
                        </div>
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real-World Impact</h1>
              <h1>
                that <ColourfulText text="Matters" />
              </h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Jorge — crafting digital experiences from Mexico with code
              that transforms ideas into reality.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my Work"
              aria-label="View Jorge's portfolio and projects"
            />
          </div>
        </header>
        {/*RIGHT: 3D MODEL*/}
        <figure aria-label="Interactive 3D model showcasing development environment">
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
