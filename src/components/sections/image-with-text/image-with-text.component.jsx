import React, { useEffect } from "react";
import "./image-with-text.styles.scss";
import * as Scroll from "./image-with-text.animations";
import { v4 as uuidv4 } from "uuid";
import { CitiDivider } from "../../dividers/citi-divider/citi-divider.component";
import { GiantHeader } from "../../typography/headers/giant-header/giant-header.component";

/**
 * A scrollytelling component that renders a full-page image, with specified text as you scroll
 *
 * @returns full-page image with text as you scoll to the DOM
 *
 */

export const ImageWithText = ({
  children,
  image,
  divider,
  header,
  undertext,
  headerBreak,
  secHeaderBreak,
}) => {
  // Add animations

  const imgID = `b${uuidv4()}`;
  const id = `b${uuidv4()}`;
  const headerID = `b${uuidv4()}`;

  // Wrap children in one full page container
  const renderChildren = (children) => {
    return React.Children.map(children, (child, i) => {
      return (
        <div
          key={i}
          className={
            child.type === "p" ? "full-page-paragraph-container" : undefined
          }
        >
          {child}
        </div>
      );
    });
  };

  useEffect(() => {
    Scroll.anim(id, imgID, headerID);
  });
  return (
    <div className="full-page-scrollytell" id={id}>
      {divider && <CitiDivider />}
      {image && (
        <img
          src={image}
          className="full-page-image"
          alt="Full page background"
          id={imgID}
        />
      )}

      <GiantHeader
        text={header}
        firstBreak={headerBreak}
        secondBreak={secHeaderBreak}
        undertext={undertext}
        id={headerID}
        color="#fff"
      />
      <div className="paragraphs-container">{renderChildren(children)}</div>
    </div>
  );
};
