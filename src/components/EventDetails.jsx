// src/components/EventDetails.jsx

// import React from "react";

const EventDetails = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-md shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Event Details</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Ceremony</h3>
        <p>Date: September 20, 2024</p>
        <p>Time: 3:00 PM</p>
        <p>Location: Beautiful Garden, City Name</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Reception</h3>
        <p>Date: September 20, 2024</p>
        <p>Time: 5:00 PM</p>
        <p>Location: Elegant Hall, City Name</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Dress Code</h3>
        <p>Formal Attire</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700">RSVP Deadline</h3>
        <p>Please RSVP by September 1, 2024</p>
      </div>
    </div>
  );
};

export default EventDetails;
