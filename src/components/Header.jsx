// src/components/Header.jsx

// import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">THEBLESSEDHAVEN</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="text-gray-600 hover:text-gray-900">
              About Us
            </Link>
          </li>
          {/* {<li>
            <Link to="/rsvp" className="text-gray-600 hover:text-gray-900">
              RSVP
            </Link>
          </li>} */}
          <li>
            <Link to="/rsvp" className="text-gray-600 hover:text-gray-900">
              Donation
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="text-gray-600 hover:text-gray-900">
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/event-details"
              className="text-gray-600 hover:text-gray-900"
            >
              Event Details
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
