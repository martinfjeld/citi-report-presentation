import React, { useEffect } from "react";
import "./image-with-text.styles.scss";
import * as Scroll from "./image-with-text.animations";

/**
 * A scrollytelling component that renders a full-page image, with specified text as you scroll
 *
 * @returns full-page image with text as you scoll to the DOM
 *
 */

export const ImageWithText = ({ children, image }) => {
  // Add animations
  useEffect(() => {
    Scroll.anim();
  }, []);

  // Wrap children in one full page container
  const renderChildren = (children) => {
    return children.map((child, i) => {
      return (
        <div key={i} className="full-page-paragraph-container">
          {child}
        </div>
      );
    });
  };

  return (
    <div className="full-page-scrollytell">
      {image && (
        <img
          src={image}
          className="full-page-image"
          alt="Full page background"
        />
      )}

      <div className="paragraphs-container">{renderChildren(children)}</div>
    </div>
  );
};
