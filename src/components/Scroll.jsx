// import React from 'react';
import { FaArrowUp } from "react-icons/fa"; // Using React Icons for the arrow icon

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
