import Hero from "./components/Hero";
import StayWithUs from "./components/StayWithUs";
import Activities from "./components/Activities";
import DineByRiver from "./components/DineByRiver";
import RiverviewCTA from "./components/RiverviewCTA";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StayWithUs />
      <Activities />
      <DineByRiver />
      <RiverviewCTA />
      <ContactSection />
    </>
  );
}
