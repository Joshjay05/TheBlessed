/* eslint-disable react/no-unescaped-entities */
// src/components/HeroSection.jsx

// import React from "react";
// import CountdownTimer from "./CountdownTimer";
import blessed from "../assets/blessed.jpg";
import Countdown from "./CountdownTimer"; // Fix the component name here

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${blessed})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-6xl font-bold mb-4"> We're Getting Married!</h1>
        <p className="text-2xl mb-8">Join us in celebrating our special day</p>
        <Countdown />
      </div>
    </section>
  );
};

export default HeroSection;

// export default HeroSection;
