"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroImagePath = "/assets/hero/HeroSection.png";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <section className="hero-section relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroImagePath}
        alt="The Tented Stay Hero"
        fill
        priority
        className="object-cover"
        quality={100}
      />
      
      {/* 30% Black Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Navigation Layer */}
      <nav className="absolute top-0 left-0 z-50 w-full px-6 md:px-10 py-6 flex justify-between items-center">
        <div className="logo cursor-pointer text-white">
          THE TENTED STAY
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-[50px]">
          <div className="nav-items flex items-center">
            <Link href="/" className="nav-item">Home</Link>
            <Link href="/tents" className="nav-item">Tents</Link>
            <Link href="/dining" className="nav-item">Dining</Link>
          </div>
          <button className="btn-primary">Book Now</button>
        </div>

        {/* Mobile Menu Toggle (Hamburger) */}
        <button 
          className="md:hidden z-50 text-white p-2" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
        <div className="flex flex-col items-center gap-8">
          <Link href="/" className="text-2xl font-display text-white" onClick={toggleMenu}>Home</Link>
          <Link href="/tents" className="text-2xl font-display text-white" onClick={toggleMenu}>Tents</Link>
          <Link href="/dining" className="text-2xl font-display text-white" onClick={toggleMenu}>Dining</Link>
          <button className="btn-primary mt-4" onClick={toggleMenu}>Book Now</button>
        </div>
      </div>

      {/* Hero Content Layer */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-[900px] px-6 mt-20">
        <h1 className="hero-heading">
          Reconnect with Nature by the River
        </h1>
        <p className="hero-paragraph">
          A calm, eco-conscious sanctuary designed for rest, reflection, and slowing down.
        </p>
        <div className="hero-ctas">
          <button className="btn-primary">
            Check Availability
          </button>
          <button className="btn-secondary">
            Explore the Stays
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;