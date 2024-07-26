import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";

const Gallery = ({ images, title, descr, texts }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [mainTxt, setMainTxt] = useState(texts[0]);
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
        setMainTxt(texts[index]);
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
        setMainTxt(texts[nextIndex]);
        setAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [mainImage, images, texts]);

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
    <div className="image-component" ref={galleryRef}>
      <div className="thumbnails-section">
        <button
          className="prev-button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          ^
        </button>
        <div className="thumbnails-container">
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
          className="next-button"
          onClick={handleNext}
          disabled={currentIndex + 3 >= images.length}
        >
          ^
        </button>
      </div>

      <div className="main-section">
        <img
          src={mainImage}
          alt="Main"
          className={
            animating ? "fade main-image-gallery" : "main-image-gallery"
          }
        />

        <div className={`box ${textInView ? "slide-in" : "slide-out"}`}>
          <div className="txt">
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
