// src/components/Header.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "../assets/logo.jpeg"; // Adjust path as needed

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <header className="bg-white shadow-md py-4 fixed w-full top-0 z-30">
      <nav className="container mx-auto flex items-center justify-between px-6 md:px-12">
        <Link to="/">
          {/* <img src={logo} alt="logo" className="rounded-full w-10" /> */}
          <h1 className="text-2xl font-bold text-gray-800">THEBLESSEDHAVEN</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 items-center">
          <li>
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <a
              href="#donation"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Donation
            </a>
          </li>
          <li>
            <Link
              to="/gallery"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/event-details"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Event Details
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          {showMenu ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {showMenu && (
          <div
            onClick={toggleMenu}
            className="fixed inset-0 bg-black opacity-50 z-20"
          ></div>
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full bg-white shadow-md z-30 transition-transform duration-500 ${
            showMenu ? "translate-x-0" : "translate-x-full"
          } lg:hidden w-3/4`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
          >
            <FaTimes />
          </button>
          <ul className="flex flex-col items-center mt-16 space-y-6">
            <li>
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                onClick={toggleMenu}
              >
                About Us
              </Link>
            </li>
            <Link to="/">
              <a
                href="#donation"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Donation
              </a>
            </Link>
            <li>
              <Link
                to="/gallery"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/event-details"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Event Details
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
