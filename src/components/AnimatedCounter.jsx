import React from "react";
import { counterItems } from "../constants/index.js";
import CountUp from "react-countup";
import { Meteors } from "./ui/meteors.jsx";

const AnimatedCounter = () => {
  return (
    <section
      id="counter"
      className="padding-x-lg xl:mt-0 mt-32"
      aria-labelledby="stats-title"
    >
      <div className="sr-only">
        <h2 id="stats-title">Professional Statistics and Achievements</h2>
      </div>

      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={`stat-${index}`}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col relative overflow-hidden"
            role="img"
            aria-label={`${item.value}${item.suffix} ${item.label}`}
          >
            <div
              className="counter-number text-white text-5xl font-bold mb-2 relative z-20"
              aria-hidden="true"
            >
              <CountUp
                suffix={item.suffix}
                end={item.value}
                duration={4}
                aria-label={`${item.value}${item.suffix}`}
              />
            </div>

            <div
              className="text-white-50 text-lg relative z-20"
              aria-hidden="true"
            >
              {item.label}
            </div>

            <Meteors number={8} aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedCounter;
