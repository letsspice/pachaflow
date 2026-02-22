"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function ContactSection({
  mapImage = "/assets/contactus/contactuspin.png", // Replace with your map placeholder path
}) {
  return (
    <section 
      className="bg-tented-cream py-16 md:py-24" 
      aria-labelledby="get-in-touch-heading"
    >
      <div className="max-w-[1440px] mx-auto px-[var(--spacing-tents-section-x)]">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-24">
          
          {/* Left: Content Block */}
          <div className="flex flex-col items-start">
            <h2 id="get-in-touch-heading" className="tents-heading">
              Get in Touch
            </h2>

            <p className="tents-subheading mt-6 max-w-[440px]">
              Located in the heart of Kenya, a hidden gem waiting to be discovered.
            </p>

            {/* Contact Details */}
            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-tented-helper" />
                <span className="tents-card-body">+254 700 123 456</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-tented-helper" />
                <span className="tents-card-body">stay@thetentedstay.com</span>
              </div>
            </div>

            {/* Availability Note */}
            <p className="tents-card-body mt-10 max-w-[440px] !leading-relaxed">
              We are available to answer your questions from 9 AM to 5 PM, Monday to Friday.
            </p>
          </div>

          {/* Right: Map Placeholder */}
          <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[1.4/1] rounded-card overflow-hidden shadow-sm">
            <Image
              src={mapImage}
              alt="Map showing The Tented Stay location in Kirinyaga, Kenya"
              fill
              className="object-cover"
            />
            
            {/* "View Larger Map" Floating Label Style */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm">
              <span className="text-[12px] font-medium text-tented-body">View Larger Map</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}