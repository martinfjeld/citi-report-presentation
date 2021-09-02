import React from "react";
import "./single-photo.styles.scss";

export const SinglePhoto = ({ width, photo }) => {
  return (
    <div className="single-photo" style={{ width: `${width}%` }}>
      <img src={photo} alt="single" />
    </div>
  );
};

SinglePhoto.defaultProps = {
  photo: process.env.PUBLIC_URL + `images/not-found.png`,
};
