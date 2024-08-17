import { useState } from "react";

const ImageCarousel = () => {
  const images = [
    { id: 1, src: "/images/image1.jpg", alt: "Image 1" },
    { id: 2, src: "/images/image2.jpg", alt: "Image 2" },
    { id: 3, src: "/images/image3.jpg", alt: "Image 3" },
    { id: 4, src: "/images/image4.jpg", alt: "Image 4" },
    { id: 5, src: "/images/image5.jpg", alt: "Image 5" },
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="large-image mb-4">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="w-full h-80 object-cover rounded-md shadow-lg"
        />
      </div>

      <div className="thumbnails flex justify-center space-x-4">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className={`w-24 h-24 object-cover cursor-pointer rounded-md ${
              image.id === currentImage.id ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
