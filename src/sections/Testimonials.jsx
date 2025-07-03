import React from "react";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constants";
import GlowCard from "../components/GlowCard";
import OptimizedImage from "../components/OptimizedImage";

const Testimonials = () => {
  const handleSocialClick = (socialLink) => {
    if (socialLink) {
      window.open(socialLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="testimonials"
      className="flex-center section-padding"
      aria-labelledby="testimonials-title"
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="Co-Worker Feedback Highlights"
        />
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16" role="list">
          {testimonials.map((testimonial, index) => {
            const { name, mentions, review, imgPath, socialLink } = testimonial;

            return (
              <GlowCard key={`testimonial-${index}`} card={{ review }}>
                <div className="flex items-center gap-3" role="listitem">
                  <div>
                    <OptimizedImage
                      src={imgPath}
                      alt={`Profile picture of ${name}, who provided a testimonial`}
                      className="rounded-full w-12 h-12 object-cover"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-white">{name}</p>
                    <p
                      className="text-white-50 text-sm cursor-pointer hover:text-blue-400 transition-colors duration-200"
                      onClick={() => handleSocialClick(socialLink, name)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleSocialClick(socialLink, name);
                        }
                      }}
                      aria-label={`Visit ${name}'s social media profile`}
                      title={`Click to visit ${name}'s social media profile`}
                      style={{
                        cursor: "pointer !important",
                        position: "relative",
                        zIndex: 10,
                      }}
                    >
                      {mentions}
                    </p>
                  </div>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
