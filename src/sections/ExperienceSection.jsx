import React from "react";
import TitleHeader from "../components/TitleHeader";
import { expCards } from "../constants";
import GlowCard from "../components/GlowCard";
import OptimizedImage from "../components/OptimizedImage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 0.7,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });
    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });
    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    }, "<");
  }, []);

  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
      aria-labelledby="experience-title"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Work Experience" sub="My Career Overview" />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <article key={`experience-${index}`} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    <div>
                      <OptimizedImage
                        src={card.imgPath}
                        alt={`Project image for ${card.title}`}
                        className="w-full h-full object-cover rounded-lg"
                        width={400}
                        height={250}
                      />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo" aria-hidden="true">
                        <OptimizedImage
                          src={card.logoPath}
                          alt={`Company logo for ${card.title}`}
                          className="w-full h-full object-contain"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div>
                        <h2 className="font-semibold text-3xl">{card.title}</h2>
                        <p
                          className="my-5 text-white-50"
                          aria-label={`Employment period: ${card.date}`}
                        >
                          📅{card.date}
                        </p>
                        <p className="text-[#839cb5] italic">Highlights</p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map((responsibility, i) => (
                            <li
                              key={`responsibility-${index}-${i}`}
                              className="text-lg"
                            >
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
