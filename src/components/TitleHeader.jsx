import React from "react";

const TitleHeader = ({ title, sub, level = 2 }) => {
  const HeadingTag = `h${level}`;

  return (
    <header className="flex flex-col items-center gap-5">
      <div className="hero-badge" role="banner">
        <p className="text-sm md:text-base">{sub}</p>
      </div>
      <HeadingTag className="font-semibold md:text-5xl text-3xl text-center text-white">
        {title}
      </HeadingTag>
    </header>
  );
};

export default TitleHeader;
