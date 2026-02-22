"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function DineByRiver({
  images = {
    large: "/assets/dinebyriver/DiningLargeImage.png",
    small: "/assets/dinebyriver/DiningSmallImage.png",
  },
}) {
  return (
    <section 
      className="bg-tented-cream py-12" 
      aria-labelledby="dine-by-river-heading"
    >
      <div className="max-w-[1440px] mx-auto px-[var(--spacing-tents-section-x)]">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-20">
          
          {/* Left: Content Block */}
          <div className="flex flex-col items-start">
            <h2 id="dine-by-river-heading" className="tents-heading">
              Dine by the River
            </h2>

            <p className="tents-subheading mt-6 max-w-[480px]">
              Enjoy freshly prepared meals and drinks by the river during your stay. 
              Our menu features locally sourced ingredients cooked with care.
            </p>

            <Link
              href="/menu"
              className="tents-btn-secondary mt-10 inline-flex items-center justify-center min-w-[160px]"
            >
              View Menu
            </Link>
          </div>

          {/* Right: Side-by-Side Centered Images */}
          <div className="flex items-center justify-center md:justify-end gap-4 md:gap-6">
            {/* Larger Image */}
            <div
              className="relative rounded-card overflow-hidden shadow-sm"
              style={{ width: "260px", height: "420px" }}
            >
              <Image
                src={images.large}
                alt="Dining by the river - main"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Smaller Image - Vertically Centered via parent items-center */}
            <div
              className="relative rounded-card overflow-hidden shadow-sm"
              style={{ width: "180px", height: "280px" }}
            >
              <Image
                src={images.small}
                alt="Dine details - pancakes and coffee"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}