// src/components/Footer.jsx

import { FaWhatsapp } from "react-icons/fa";

// import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container flex justify-around mx-auto text-center text-[#fed703]">
        <p>&copy; 2024 Our Wedding. All rights reserved.</p>
        <div className="flex space-x-4 font-2xl">
          <p className="text-xl">contact us</p>:
          <a href="https://wa.me/2348072559451" className="hover:underline">
            <FaWhatsapp className="text-[#8d0102] h-8 w-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
