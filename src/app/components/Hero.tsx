import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const heroImagePath = "/assets/hero/HeroSection.png"; 

  return (
    /* Added ! (important) or ensuring this utility comes after the base class to override the 700px default */
    <section className="hero-section min-h-[90vh] md:min-h-[100vh] relative w-full flex flex-col items-center overflow-hidden">
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
      <nav className="relative z-20 w-full px-10 pt-8 flex justify-between items-center">
        <div className="logo cursor-pointer">
          THE TENTED STAY
        </div>
        
        <div className="flex items-center gap-[50px]">
          <div className="nav-items hidden md:flex items-center">
            <Link href="/" className="nav-item">Home</Link>
            <Link href="/tents" className="nav-item">Tents</Link>
            <Link href="/dining" className="nav-item">Dining</Link>
          </div>
          <button className="btn-primary">
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero Content Layer */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-[800px] px-6">
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