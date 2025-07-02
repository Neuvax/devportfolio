import React from "react";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constants";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="Co-Worker Feedback Highlights"
        />
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => {
            const { name, mentions, review, imgPath } = testimonial;
            return (
              <GlowCard key={index} card={{ review }}>
                <div className="flex flex-items gap-3">
                  <div>
                    <img
                      src={imgPath}
                      alt={name}
                      className="rounded-full w-12 h-12 object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">{name}</p>
                    <p className="text-white-50">{mentions}</p>
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
