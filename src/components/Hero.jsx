// src/components/HeroSection.jsx

import blessed from "../assets/blessed.jpg";
import Countdown from "./CountdownTimer";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${blessed})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          We're Getting Married!
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center">
          Join us in celebrating our special day
        </p>
        <Countdown />
      </div>
    </section>
  );
};

export default HeroSection;
