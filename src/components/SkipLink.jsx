import React from "react";

const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-md focus:font-medium focus:no-underline"
      style={{
        position: "absolute",
        left: "-9999px",
        width: "1px",
        height: "1px",
        overflow: "hidden",
      }}
      onFocus={(e) => {
        e.target.style.position = "absolute";
        e.target.style.left = "1rem";
        e.target.style.top = "1rem";
        e.target.style.width = "auto";
        e.target.style.height = "auto";
        e.target.style.overflow = "visible";
        e.target.style.zIndex = "9999";
        e.target.style.backgroundColor = "white";
        e.target.style.color = "black";
        e.target.style.padding = "0.5rem 1rem";
        e.target.style.borderRadius = "0.375rem";
        e.target.style.fontWeight = "500";
        e.target.style.textDecoration = "none";
      }}
      onBlur={(e) => {
        e.target.style.position = "absolute";
        e.target.style.left = "-9999px";
        e.target.style.width = "1px";
        e.target.style.height = "1px";
        e.target.style.overflow = "hidden";
      }}
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;
