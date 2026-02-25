"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-tented-forest text-tented-cream">
      <div className="max-w-[1200px] mx-auto px-6 md:px-0 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Brand Column */}
          <div>
            <h3 className="font-display font-bold text-logo leading-[31.2px]">
              THE TENTED STAY
            </h3>

            <p className="mt-4 font-serif text-body leading-[25.6px] text-tented-cream max-w-[320px]">
              An eco-conscious riverside sanctuary designed for those seeking peace.
            </p>
          </div>

          {/* Explore Column */}
          <div className="md:text-center">
            <h4 className="font-display font-semibold text-menu tracking-menu">
              Explore
            </h4>

            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tents" className="footer-link">
                  Tents
                </Link>
              </li>
              <li>
                <Link href="/dining" className="footer-link">
                  Dining
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="md:text-right">
            <h4 className="font-display font-semibold text-menu tracking-menu">
              Follow Us
            </h4>

            <div className="flex md:justify-end gap-6 mt-4">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="footer-icon"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.3v-2.9h2.3V9.5c0-2.3 1.4-3.6 3.4-3.6.99 0 2.02.18 2.02.18v2.2h-1.14c-1.12 0-1.47.7-1.47 1.42v1.7h2.5l-.4 2.9h-2.1v7A10 10 0 0022 12z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="footer-icon"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4A5.8 5.8 0 0122 7.8v8.4A5.8 5.8 0 0116.2 22H7.8A5.8 5.8 0 012 16.2V7.8A5.8 5.8 0 017.8 2zm8.2 2H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 3.3A4.7 4.7 0 1112 16.7 4.7 4.7 0 0112 7.3zm0 2A2.7 2.7 0 1014.7 12 2.7 2.7 0 0012 9.3zm4.8-.9a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="#"
                aria-label="TikTok"
                className="footer-icon"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 8.5a6.5 6.5 0 01-4.3-1.6v7.2a6.1 6.1 0 11-5.3-6v3a3.1 3.1 0 103.3 3.1V2h3a4.3 4.3 0 003.3 3.3v3.2z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-tented-cream/30 mt-12 pt-6 flex flex-col md:flex-row justify-between text-helper text-tented-cream/80 font-serif">
          <p>
            © 2026 Ray & Nemwel Studio. All rights reserved.
          </p>

          <p className="mt-3 md:mt-0">
            Designed by{" "}
            <Link 
                href="https://www.linkedin.com/in/rachaelngotho/" 
                className="underline underline-offset-4 cursor-pointer hover:text-white transition-colors"
            >
                Rachael
            </Link>, 
            Developed by{" "}
            <Link 
                href="https://www.linkedin.com/in/nemwel-nyandoro/" 
                className="underline underline-offset-4 cursor-pointer hover:text-white transition-colors"
            >
                Nemwel
            </Link>.
          </p>
        </div>

      </div>
    </footer>
  );
}