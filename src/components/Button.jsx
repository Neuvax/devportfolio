import React from "react";

const Button = ({
  text,
  className,
  id,
  href = "#counter",
  "aria-label": ariaLabel,
}) => {
  const handleClick = (e) => {
    e.preventDefault();

    const target = document.getElementById("counter");

    if (target && id) {
      const offset = window.innerHeight * 0.15;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      // Announce to screen readers
      const announcement = `Scrolling to ${
        target.getAttribute("aria-label") || "target section"
      }`;
      const announcer = document.createElement("div");
      announcer.setAttribute("aria-live", "polite");
      announcer.setAttribute("aria-atomic", "true");
      announcer.className = "sr-only";
      announcer.textContent = announcement;
      document.body.appendChild(announcer);
      setTimeout(() => document.body.removeChild(announcer), 1000);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${className ?? ""} cta-wrapper`}
      role="button"
      aria-label={ariaLabel || `${text} - Navigate to portfolio section`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick(e);
        }
      }}
    >
      <div className="cta-button group">
        <div className="bg-circle" aria-hidden="true" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper" aria-hidden="true">
          <img
            src="/images/arrow-down.svg"
            alt=""
            role="presentation"
            width="20"
            height="20"
          />
        </div>
      </div>
    </a>
  );
};

export default Button;
