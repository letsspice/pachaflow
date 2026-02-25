"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function RiverviewCTA({ 
  imageSrc = "/assets/riverviewcta/RiverviewEscape.png" 
}) {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center"
      aria-labelledby="cta-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={imageSrc}
          alt="Riverview tent at dusk"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Dark overlay from globals.css variables */}
      <div
        className="hero-overlay-30 absolute inset-0 -z-10"
        aria-hidden="true"
      />

      {/* Content centered exactly as per design */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-[var(--spacing-tents-section-x)] py-14 md:py-20 flex flex-col items-center text-center">
        <h2 
          id="cta-heading" 
          className="text-[30px] leading-[38px] md:text-[40px] md:leading-[48px] font-display font-bold !mt-0 !text-white"
        >
          Your Riverview Escape Awaits
        </h2>

        <div className="mt-8 md:mt-10 w-full flex justify-center">
          <Link
            href="/book"
            className="btn-primary inline-flex items-center justify-center min-w-[200px]"
          >
            Book Your Stay
          </Link>
        </div>
      </div>
    </section>
  );
}