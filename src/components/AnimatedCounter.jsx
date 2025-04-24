import React from "react";
import { counterItems } from "../constants/index.js";
import CountUp from "react-countup";
import { Meteors } from "./ui/meteors.jsx";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col relative overflow-hidden"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2 relative z-20">
              <CountUp suffix={item.suffix} end={item.value} duration={4} />
            </div>

            <div className="text-white-50 text-lg relative z-20">
              {item.label}
            </div>

            <Meteors number={8} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
