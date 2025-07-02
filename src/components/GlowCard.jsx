import React, { useRef } from "react";

const GlowCard = ({ card, children, index }) => {
  const cardRefs = useRef([]);

  const handleMouseMovement = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(y, x) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMovement(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column relative overflow-hidden flex flex-col items-center justify-center text-center"
      role="article"
      aria-label={`${card.review ? "Testimonial" : "Experience"} card`}
    >
      <div className="glow" aria-hidden="true" />

      {/* Star rating display */}
      {card.review && (
        <div
          className="flex items-center gap-1 mb-5"
          role="img"
          aria-label="5 star rating"
        >
          {Array.from({ length: 5 }, (_, i) => (
            <img
              src="/images/star.png"
              key={i}
              alt=""
              className="size-5"
              role="presentation"
              width="20"
              height="20"
            />
          ))}
        </div>
      )}

      {/* Card content */}
      <div className="mb-5">
        {card.review && (
          <blockquote className="text-white-50 text-lg">
            "{card.review}"
          </blockquote>
        )}
      </div>

      {children}
    </div>
  );
};

export default GlowCard;
