// src/pages/EventDetailsPage.jsx

// import React from "react";
import EventDetails from "../components/EventDetails";

const EventDetailsPage = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Event Details
      </h1>
      <EventDetails />
    </div>
  );
};

export default EventDetailsPage;
