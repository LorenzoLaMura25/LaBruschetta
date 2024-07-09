import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./Image.css";

const Image = ({ images, title, description, textPosition }) => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setMainImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  const handleImageClick = (index) => {
    setMainImageIndex(index);
  };

  const sideImages = images
    .filter((_, index) => index !== mainImageIndex)
    .slice(0, 3);

  return (
    <div
      ref={ref}
      className={`container ${textPosition === "left" ? "reverse" : ""} ${
        isVisible ? "animate" : ""
      }`}
    >
      <div className="main-image-container">
        <img
          src={images[mainImageIndex]}
          alt={title}
          className={`main-image ${fade ? "fade" : ""}`}
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
        <div className={`text-container-inner ${isVisible ? "slide-in" : ""}`}>
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
