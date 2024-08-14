// src/pages/GalleryPage.jsx

// import React from "react";
import Gallery from "../components/Gallery";
import isaac from "../assets/isaac.jpg";
import single from "../assets/single.jpg";
import TheBlessedHaven from "../assets/TheBlessedHaven.jpg";
import Bless from "../assets/Bless.jpg";
import proposal from "../assets/proposal.jpg";
import couple from "../assets/couple.jpg";
import cple from "../assets/heBlessedHaven.jpg";
import BlessedHaven from "../assets/BlessedHaven.jpg";
import blessed from "../assets/Blessed.jpg";

import PropTypes from "prop-types";

const GalleryPage = () => {
  const images = [
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
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Our Gallery
      </h1>
      <Gallery images={images} />
    </div>
  );
};
GalleryPage.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default GalleryPage;
