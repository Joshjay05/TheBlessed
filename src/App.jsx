// src/App.jsx

// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage";
import AboutUsPage from "./components/AboutUs";
import RSVPPage from "./components/RSVPPage";
import GalleryPage from "./components/GallleryPage"; // Fix the path here
import EventDetailsPage from "./components/EventDetailsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/rsvp" element={<RSVPPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/event-details" element={<EventDetailsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
