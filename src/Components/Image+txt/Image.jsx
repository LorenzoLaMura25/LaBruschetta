import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./Image.css";

const Image = ({ images, title, description, textPosition }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [mainImageIndex, setMainImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setMainImageIndex(index);
  };

  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  const sideImages = images
    .filter((_, index) => index !== mainImageIndex)
    .slice(0, 3);

  return (
    <div
      ref={ref}
      className={`container ${textPosition === "left" ? "reverse" : ""} ${
        inView ? "animate" : ""
      }`}
    >
      <div className="main-image-container">
        <img
          src={images[mainImageIndex]}
          alt={title}
          className={`main-image ${inView ? "zoom-in" : ""}`}
        />
        <div className="side-images-container">
          {sideImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`side ${index}`}
              className="side-image"
              onClick={() => handleImageClick(images.indexOf(image))}
            />
          ))}
        </div>
      </div>
      <div className="text-container">
        <div className={`text-container-inner ${inView ? "slide-in" : ""}`}>
          <div className="text">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
