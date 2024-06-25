import React from "react";
import PropTypes from "prop-types";
import "./Image.css";

const Image = ({ image1, image2, text, textPosition }) => {
  return (
    <div className={`container ${textPosition}`}>
      {textPosition === "left" && <p id="text">{text}</p>}
      <img src={image1} alt="" id="image" />
      <img src={image2} alt="" id="image" />
      {textPosition === "right" && <p id="text">{text}</p>}
    </div>
  );
};

Image.propTypes = {
  image1: PropTypes.string.isRequired,
  image2: PropTypes.string.isRequired,
  text: PropTypes.string,
  textPosition: PropTypes.oneOf(["left", "center", "right"]).isRequired,
};

export default Image;
