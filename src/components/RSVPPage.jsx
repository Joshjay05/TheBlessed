// src/pages/RSVPPage.jsx

// import React from "react";
import RSVPForm from "../components/RSVP";

const RSVPPage = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        RSVP
      </h1>
      <div className="flex justify-center">
        <RSVPForm />
      </div>
    </div>
  );
};

export default RSVPPage;
