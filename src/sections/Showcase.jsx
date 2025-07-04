import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import OptimizedImage from "../components/OptimizedImage";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom -=100",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="app-showcase"
      aria-labelledby="work-title"
    >
      <div className="w-full">
        <header className="sr-only">
          <h2 id="work-title">Featured Projects Portfolio</h2>
        </header>
        <div className="showcaselayout">
          {/*LEFT*/}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <OptimizedImage
                src="/images/project1.png"
                alt="Screenshot of iPhone 15 landing page clone showing interactive 3D model and modern design"
                className="w-full h-full object-cover rounded-xl absolute inset-0"
                width={800}
                height={600}
                priority={true}
              />
            </div>
            <div className="text-content">
              <h2
                className="cursor-pointer hover:text-blue-400 hover:scale-105 transition-all duration-300 ease-in-out hover:drop-shadow-lg active:scale-95 group relative inline-block"
                onClick={() =>
                  window.open(
                    "https://iphone15.jorgewolburg.io",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    window.open(
                      "https://iphone15.jorgewolburg.io",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }
                }}
              >
                Highly Interactive and Visually Accurate Clone of the Official
                Apple iPhone 15 Landing Page
                {/* Live Demo Badge */}
                <span className="inline-block ml-3 px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  LIVE DEMO
                </span>
              </h2>
              <p className="text-white-50 md:text-xl">
                This project was built using React, Tailwind CSS, GSAP, and
                Three.js. It integrates advanced animations and 3D graphics into
                a responsive React app. The main challenges were optimizing
                performance, synchronizing animations, and combining modern
                technologies in a clean, maintainable way.
              </p>
            </div>
          </div>
          {/*RIGHT*/}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#f95c4f]">
                <OptimizedImage
                  src="/images/project2.png"
                  alt="Oracle Java Bot interface showing task management features for developers on Telegram"
                  className="w-full h-full object-contain rounded-xl"
                  width={400}
                  height={300}
                />
              </div>
              <h2>
                Oracle Java Bot: Simple Task Management for Developers and Teams
                on Telegram
              </h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#36035a]">
                <OptimizedImage
                  src="/images/project3.png"
                  alt="BAMX mobile app interface showing donation features for the Food Bank of Mexico"
                  className="w-full h-full object-contain rounded-xl"
                  width={400}
                  height={300}
                />
              </div>
              <h2>BAMX Donations: Mobile App for the Food Bank of Mexico</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
