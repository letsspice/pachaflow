"use client";

import Image from "next/image";
import React from "react";

export default function StayWithUs({
  cards = [
    {
      image: "/assets/staywithus/canopy-tents.png",
      title: "Canopy Tents",
      description:
        "Spacious canvas suites nestled under the canopy of indigenous trees.",
      helpers: [
        { key: "sleeps", text: "Sleeps 2" },
        { key: "view", text: "Forest Breeze" },
      ],
      primaryHref: "#check-availability",
      secondaryHref: "#details-canopy",
    },
    {
      image: "/assets/staywithus/riverstream-tents.png",
      title: "Riverstream Tents",
      description:
        "Perched right at the water’s edge for an immersive auditory experience.",
      helpers: [
        { key: "sleeps", text: "Sleeps 2" },
        { key: "view", text: "Waterfront View" },
      ],
      primaryHref: "#check-availability",
      secondaryHref: "#details-riverstream",
    },
  ],
}) {
  return (
    <section className="tents-section" aria-labelledby="stay-with-us-heading">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Heading block */}
        <div className="text-center">
          <h2 id="stay-with-us-heading" className="tents-heading">
            Stay With Us
          </h2>
          <p className="tents-subheading max-w-[820px] mx-auto">
            Thoughtfully designed tents that blend comfort with the raw beauty of
            the riverbank.
          </p>
        </div>

        {/* Cards grid */}
        <div
          className="tents-cards mt-[var(--spacing-tents-subheading-to-cards)] w-full grid grid-cols-1 md:grid-cols-2"
          role="list"
        >
          {cards.map((card, idx) => (
            <article
              key={idx}
              /* REMOVED: padding-top from .tents-card in your CSS usually causes the gap */
              /* We style it here to ensure it overrides the global .tents-card padding */
              className="tents-card bg-white shadow-sm !pt-0 flex flex-col overflow-hidden"
              role="listitem"
            >
              {/* Card Image - Flush to top with radius applied by parent overflow-hidden */}
				<div className="w-full h-[280px] relative">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="tents-card-image"
                  style={{ objectFit: "cover" }}
                  priority={idx === 0}
                />
              </div>

              {/* Card content - Applied the designer's padding-top here instead */}
              <div className="p-6 pt-[var(--spacing-tents-card-padding-top)] flex flex-col flex-grow">
                <h3 className="tents-card-heading">{card.title}</h3>

                <p className="tents-card-body mt-3">{card.description}</p>

                {/* Helper row */}
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  {card.helpers &&
                    card.helpers.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 tents-helper"
                      >
                        <span className="tents-helper-icon" aria-hidden="true">
                          {h.key === "sleeps" ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 7v10m18-6v6M3 13h18M3 9h18" stroke="#4A4A45" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z" stroke="#4A4A45" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M8 12a4 4 0 0 0 8 0" stroke="#4A4A45" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </span>
                        <span className="tents-helper-text">{h.text}</span>
                      </div>
                    ))}
                </div>

                {/* CTAs */}
                <div className="tents-ctas flex items-center gap-[12px] mt-auto pt-2">
                  <a
                    href={card.primaryHref}
                    className="tents-btn-primary inline-flex items-center justify-center flex-1 md:flex-none"
                  >
                    Check Availability
                  </a>

                  <a
                    href={card.secondaryHref}
                    className="tents-btn-secondary inline-flex items-center justify-center flex-1 md:flex-none"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}