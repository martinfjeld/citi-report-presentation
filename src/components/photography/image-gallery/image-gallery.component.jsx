import React, { useState } from "react";
import "./image-gallery.styles.scss";
import { SinglePhoto } from "../single-photo/single-photo.component";

export const ImageGallery = (props) => {
  const [images] = useState(props.images);

  return (
    <div
      className={`image-gallery ${props.galleryStyle}`}
      style={{ width: `${props.galleryWidth}%` }}
    >
      {images.map((img, i) => {
        return (
          <div key={i} className="image-gallery_image-container">
            <SinglePhoto photo={process.env.PUBLIC_URL + img} />
          </div>
        );
      })}
    </div>
  );
};

ImageGallery.defaultProps = {
  galleryStyle: "left-vertical",
};
