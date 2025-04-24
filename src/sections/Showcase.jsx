import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/*LEFT*/}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Iphone15" />
            </div>
            <div className="text-content">
              <h2>
                Highly Interactive and Visually Accurate Clone of the Official
                Apple iPhone 15 Landing Page
              </h2>
              <p className="text-white-50 md:text-xl">
                I built this project using React, Tailwind CSS, GSAP, and
                Three.js. I learned to integrate advanced animations and 3D
                graphics into a responsive React app. The main challenges were
                optimizing performance, synchronizing animations, and combining
                multiple modern technologies in a clean, maintainable way.
              </p>
            </div>
          </div>
          {/*RIGHT*/}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#f95c4f]">
                <img src="/images/project2.png" alt="Oracle Java Bot" />
              </div>
              <h2>
                Oracle Java Bot: Simple Task Management for Developers and Teams
                on Telegram
              </h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#36035a]">
                <img src="/images/project3.png" alt="BAMX App" />
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
