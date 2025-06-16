"use client";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export function ColourfulText({ text }) {
  const colors = [
  "rgb(176, 224, 230)",
  "rgb(72, 209, 204)",  
  "rgb(0, 191, 255)",   
  "rgb(30, 144, 255)",   
  "rgb(106, 90, 205)",  
  "rgb(123, 104, 238)", 
  "rgb(95, 158, 160)",  
  "rgb(70, 130, 180)",   
  "rgb(25, 25, 112)",  
  "rgb(72, 61, 139)",   
]

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [colors]);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}
