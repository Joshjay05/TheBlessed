// src/pages/HomePage.jsx

// import React from "react";
import HeroSection from "../components/Hero";
import EventDetails from "../components/EventDetails";
import Gallery from "../components/Gallery";
// import rsvpImage from "../assets/rsvp.jpg";
import isaac from "../assets/isaac.jpg";
import single from "../assets/single.jpg";
import TheBlessedHaven from "../assets/TheBlessedHaven.jpg";
import Bless from "../assets/Bless.jpg";
import proposal from "../assets/proposal.jpg";
import couple from "../assets/couple.jpg";
import cple from "../assets/heBlessedHaven.jpg";
import BlessedHaven from "../assets/wife.jpg";
import blessed from "../assets/Blessed.jpg";
import DonationSection from "./Donation";
// import outing from "../assets/outing.jpg";

const HomePage = () => {
  const galleryImages = [
    {
      id: 1,
      image: TheBlessedHaven,
    },

    {
      id: 2,
      image: Bless,
    },
    {
      id: 3,
      image: proposal,
    },
    {
      id: 4,
      image: single,
    },
    {
      id: 5,
      image: isaac,
    },

    {
      id: 6,
      image: couple,
    },
    {
      id: 7,
      image: cple,
    },
    {
      id: 8,
      image: BlessedHaven,
    },
    {
      id: 9,
      image: blessed,
    },
  ];

  return (
    <div>
      <HeroSection />
      <div className="container mx-auto py-16">
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Event Details
          </h2>
          <EventDetails />
        </section>
        <section>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Our Gallery
          </h2>
          <Gallery images={galleryImages} />
        </section>
        <DonationSection />
      </div>
    </div>
  );
};

export default HomePage;
