import React from "react";
import "./image-with-text.styles.scss";

export const ImageWithText = ({ image, text, style }) => {
  return (
    <div
      className="image-with-text"
      style={{ backgroundImage: `url("${process.env.PUBLIC_URL + image}")` }}
    >
      <p className={`image-with-text__paragraph ${style}`}>{text}</p>
    </div>
  );
};
