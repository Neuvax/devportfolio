import React from "react";
import { abilities } from "../constants";
import OptimizedImage from "../components/OptimizedImage";

const FeatureCards = () => {
  return (
    <section className="w-full padding-x-lg" aria-labelledby="abilities-title">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }, index) => (
          <article
            key={`ability-${index}`}
            className="card-border rounded-xl p-8 flex flex-col gap-4"
            role="article"
            aria-labelledby={`ability-title-${index}`}
          >
            <div
              className="size-14 flex items-center justify-center rounded-full"
              aria-hidden="true"
            >
              <OptimizedImage
                src={imgPath}
                alt={`Icon representing ${title}`}
                className="w-full h-full object-contain"
                width={56}
                height={56}
              />
            </div>
            <h3
              id={`ability-title-${index}`}
              className="text-white text-2xl font-semibold mt-2"
            >
              {title}
            </h3>
            <p className="text-white-50 text-lg">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
