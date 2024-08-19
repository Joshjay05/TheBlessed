/* eslint-disable react/no-unescaped-entities */
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
import cake from "../assets/cake.jpg";
import blessedhaven from "../assets/blessedhaven.jpeg";
import FAV from "../assets/FAV.jpg";
import intro from "../assets/intro.jpg";
import coupled from "../assets/cple.jpg";
import outing from "../assets/outing.jpg";

import blessed from "../assets/blessed.jpg";
import DonationSection from "./Donation";
import AboutUsPage from "./AboutUs";
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
    {
      id: 10,
      image: cake,
    },
    {
      id: 11,
      image: blessedhaven,
    },
    {
      id: 12,
      image: FAV,
    },
    {
      id: 13,
      image: intro,
    },
    {
      id: 14,
      image: coupled,
    },
    {
      id: 15,
      image: outing,
    },
  ];

  return (
    <div>
      <HeroSection />
      <div className="container mx-auto py-16">
        <section className="mb-16">
          {/* <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            About us
          </h2> */}
          <AboutUsPage />
          {/* <EventDetails /> */}
        </section>
        <section className="mb-16">
          {/* <h2 className="text-4xl font-bold text-centertext-[#8d0102] mb-8">
            Event Details
          </h2> */}
          <EventDetails />
        </section>
        <section>
          <h2 className="text-4xl font-bold text-center text-[#8d0102] mb-8">
            Our Gallery
          </h2>
          <Gallery images={galleryImages} />
        </section>
        <section>
          <DonationSection />
          <div className="container mx-auto py-16 px-4 bg-white shadow-md rounded-lg p-6">
            <h1 className="text-3xl font-bold text-[#8d0102] mb-8">
              Our Gratitude
            </h1>

            <p>
              We cannot quantify the efforts and support we have received from
              our beloved families, friends and everyone who shared in our
              celebration, you amazed us in many ways and we do not take all you
              have done for granted and neither can we forget your goodness to
              us. For your thoughtfulness in showing up, your amazing gifts in
              cash and kind, your unapologetic love, your prayers and counsel,
              you successfully touched us in ways we cannot fathom and you made
              our day memorable. It is our earnest prayer that the goodness and
              mercy of God be with you all in Jesus' name. Amen Thank you so
              much. The Blessed Haven
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
