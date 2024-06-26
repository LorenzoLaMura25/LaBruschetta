import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./Image.css";

const ImageTxt = ({ image, title, description, textPosition }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Cambiato a false per riattivare ogni volta
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`container ${textPosition === "left" ? "reverse" : ""} ${
        inView ? "animate" : ""
      }`}
    >
      <img
        src={image}
        alt={title}
        className={`image ${
          textPosition === "left"
            ? inView
              ? "slide-in-left"
              : "start-left"
            : inView
            ? "slide-in-right"
            : "start-right"
        }`}
      />
      <div id="txt-container">
        <div
          className={`text ${
            textPosition === "left"
              ? inView
                ? "slide-in-right"
                : "start-right"
              : inView
              ? "slide-in-left"
              : "start-left"
          }`}
        >
          <h1>{title}</h1>
          <h6>{description}</h6>
        </div>
      </div>
    </div>
  );
};

export default ImageTxt;
