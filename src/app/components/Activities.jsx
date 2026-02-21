"use client";

import Image from "next/image";
import React from "react";

export default function Activities({
  items = [
    {
      image: "/assets/activities/WaterfallChase.png",
      title: "Waterfall Chase",
      subtitle: "Guided hike to the hidden falls.",
      price: "KES 2,000 / pp",
    },
    {
      image: "/assets/activities/EveningBonfire.png",
      title: "Bonfire Under Stars",
      subtitle: "Evening gathering with storytelling.",
      price: "Complimentary",
    },
    {
      image: "/assets/activities/MountainHike.png",
      title: "Mountain Hike",
      subtitle: "Breathtaking views of mighty mountains.",
      price: "KES 4,350 / pp",
    },
  ],
}) {
  return (
    <section
      className="activities-section"
      aria-labelledby="activities-heading"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Heading Block */}
        <div className="text-center">
          <h2 id="activities-heading" className="activities-heading">
            Activities
          </h2>
          <p className="activities-subheading">
            Things to enjoy during your stay.
          </p>
        </div>

        {/* Cards Grid: 3 columns on desktop */}
        <div className="activities-cards mt-[var(--spacing-tents-subheading-to-cards)] grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((it, idx) => (
            <article
              key={idx}
              className="activity-card flex flex-col shadow-sm"
              role="article"
            >
              {/* Image: No top padding, flush to edges */}
				<div className="relative w-full h-[280px]">
                <Image
                  src={it.image}
                  alt={it.title}
                  fill
                  priority={idx === 0}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content Block */}
              <div className="p-6 pt-[var(--spacing-tents-card-padding-top)] flex flex-col flex-grow">
                <h3 className="activity-card-heading">{it.title}</h3>
                <p className="activity-card-body mt-3">{it.subtitle}</p>

                {/* Price: Using Forest Green from design */}
                <div className="mt-auto pt-6">
                  <span className="activity-price-green">
                    {it.price}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Section Footer Note */}
        <p className="activity-footer-note">
          Activities are arranged and paid for onsite.
        </p>
      </div>
    </section>
  );
}