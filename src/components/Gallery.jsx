// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";

// const getRandomIndex = (max) => Math.floor(Math.random() * max);

// const Gallery = ({ images }) => {
//   const [visibleImages, setVisibleImages] = useState(images);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       // Randomly choose an index to replace
//       const randomIndex = getRandomIndex(visibleImages.length);
//       // Randomly choose a new image from the images array
//       const newImage = images[getRandomIndex(images.length)];

//       // Update the visible images with the new random image at the random index
//       setVisibleImages((prevImages) =>
//         prevImages.map((img, index) => (index === randomIndex ? newImage : img))
//       );
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(intervalId); // Cleanup interval on unmount
//   }, [images, visibleImages.length]);

//   return (
//     <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
//       {visibleImages.map((img, index) => (
//         <div
//           key={img.id}
//           className={`relative overflow-hidden rounded-md shadow-md transition-all duration-700 ease-in-out transform hover:scale-105 ${
//             // Different spans based on index
//             index % 6 === 0
//               ? "col-span-2 row-span-2" // Larger item
//               : index % 4 === 0
//                 ? "col-span-2 row-span-1" // Wider item
//                 : index % 3 === 0
//                   ? "col-span-1 row-span-2" // Tall item
//                   : "col-span-1 row-span-1" // Default size
//           }`}
//         >
//           <img
//             src={img.image}
//             alt={`Gallery Image ${img.id}`}
//             className="object-cover w-full h-full"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// Gallery.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       image: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default Gallery;

// import PropTypes from "prop-types";
// import { useEffect } from "react";

// const Gallery = ({ images }) => {
//   useEffect(() => {
//     const tiles = document.querySelectorAll(".tile");
//     tiles.forEach((tile, index) => {
//       const randomDelay = Math.random() * 2;
//       tile.style.animationDelay = `${randomDelay}s`;
//     });
//   }, []);

//   return (
//     <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
//       {images.map((img, index) => (
//         <div
//           key={img.id}
//           className={`tile relative overflow-hidden rounded-md shadow-md transition-transform duration-500 ${
//             index % 6 === 0
//               ? "col-span-2 row-span-2"
//               : index % 4 === 0
//                 ? "col-span-2 row-span-1"
//                 : index % 3 === 0
//                   ? "col-span-1 row-span-2"
//                   : "col-span-1 row-span-1"
//           }`}
//         >
//           <img
//             src={img.image}
//             alt={`Gallery Image ${img.id}`}
//             className="object-cover w-full h-full"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// Gallery.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       image: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default Gallery;
import PropTypes from "prop-types";
import { useEffect } from "react";

const Gallery = ({ images }) => {
  useEffect(() => {
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach((tile) => {
      const randomDelay = Math.random() * 3;
      tile.style.animationDelay = `${randomDelay}s`;
    });
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
      {images.map((img, index) => (
        <div
          key={img.id}
          className={`tile relative overflow-hidden rounded-md shadow-md ${
            index % 6 === 0
              ? "col-span-2 row-span-2"
              : index % 4 === 0
                ? "col-span-2 row-span-1"
                : index % 3 === 0
                  ? "col-span-1 row-span-2"
                  : "col-span-1 row-span-1"
          }`}
        >
          <img
            src={img.image}
            alt={`Gallery Image ${img.id}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Gallery;
