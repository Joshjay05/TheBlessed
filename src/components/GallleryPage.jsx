// src/pages/GalleryPage.jsx

// import React from "react";
import Gallery from "../components/Gallery";
// import isaac from "../assets/isaac.jpg";
// import single from "../assets/single.jpg";
// import TheBlessedHaven from "../assets/TheBlessedHaven.jpg";
// import Bless from "../assets/Bless.jpg";
// import proposal from "../assets/proposal.jpg";

const GalleryPage = () => {
  //   const galleryImages = [
  //     {
  //       id: 1,
  //       image: TheBlessedHaven,
  //     },

  //     {
  //       id: 2,
  //       image: Bless,
  //     },
  //     {
  //       id: 3,
  //       image: proposal,
  //     },
  //     {
  //       id: 4,
  //       image: single,
  //     },
  //     {
  //       id: 5,
  //       image: isaac,
  //     },
  //     // Add more image URLs
  //   ];
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Our Gallery
      </h1>
      <Gallery />
    </div>
  );
};

export default GalleryPage;
