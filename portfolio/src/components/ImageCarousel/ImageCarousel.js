import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="image-carousel">
      <button onClick={handlePrevClick}>Previous</button>
      <img src={images[currentImageIndex]} alt="Carousel Image" />
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};
export default ImageCarousel;