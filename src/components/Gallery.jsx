import PropTypes from "prop-types";

const Gallery = ({ images }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
      {images.map((img, index) => (
        <div
          key={img.id}
          className={`relative overflow-hidden rounded-md shadow-md ${
            // Different spans based on index
            index % 6 === 0
              ? "col-span-2 row-span-2" // Larger item
              : index % 4 === 0
                ? "col-span-2 row-span-1" // Wider item
                : index % 3 === 0
                  ? "col-span-1 row-span-2" // Tall item
                  : "col-span-1 row-span-1" // Default size
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
