// src/App.jsx

// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage";
import AboutUsPage from "./components/AboutUs";
// import RSVPPage from "./components/RSVPPage";
// import Gallery from "./components/Gallery"; // Fix the path here
import EventDetailsPage from "./components/EventDetailsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/Scroll";
import GalleryPage from "./components/GallleryPage";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            {/* <Route path="/rsvp" element={<RSVPPage />} /> */}
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/event-details" element={<EventDetailsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <ScrollToTopButton />
    </Router>
  );
};

export default App;
