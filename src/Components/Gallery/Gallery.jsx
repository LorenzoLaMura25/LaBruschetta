import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";

const Gallery = ({ images, title, descr, mainTxt }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [thumbnails, setThumbnails] = useState(images.slice(1, 4));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const galleryRef = useRef(null);
  const [textInView, setTextInView] = useState(false);

  const handleThumbnailClick = (index) => {
    if (mainImage !== images[index]) {
      setAnimating(true);
      setTimeout(() => {
        setMainImage(images[index]);
        setAnimating(false);
      }, 300);
    }
  };

  const handleNext = () => {
    if (currentIndex + 3 < images.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const endIndex = Math.min(currentIndex + 3, images.length);
    const startIndex = endIndex - 3;
    setThumbnails(images.slice(startIndex, endIndex));
  }, [currentIndex, images]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (images.indexOf(mainImage) + 1) % images.length;
      setAnimating(true);
      setTimeout(() => {
        setMainImage(images[nextIndex]);
        setAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [mainImage, images]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setTextInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (observer && galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  return (
    <div id="image-component" ref={galleryRef}>
      <div id="thumbnails-section">
        <button
          id="prev-button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          ^
        </button>
        <div id="thumbnails-container">
          {thumbnails.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              className={`thumbnail ${img === mainImage ? "selected" : ""}`}
              onClick={() => handleThumbnailClick(images.indexOf(img))}
            />
          ))}
        </div>
        <button
          id="next-button"
          onClick={handleNext}
          disabled={currentIndex + 3 >= images.length}
        >
          ^
        </button>
      </div>

      <div id="main-section">
        <img
          id="main-image"
          src={mainImage}
          alt="Main"
          className={animating ? "fade" : ""}
        />

        <div id="box" className={textInView ? "slide-in" : "slide-out"}>
          <div id="txt">
            <h1>{title}</h1>
            <h5>{descr}</h5>
            <p>{mainTxt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
