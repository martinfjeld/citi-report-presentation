import React from "react";
import { childrenRender } from "../../../functions/functions";
import "./image-with-text.styles.scss";

/**
 * A scrollytelling component that renders a full-page image, with specified text as you scroll
 *
 * @returns full-page image with text as you scoll to the DOM
 *
 */

export const ImageWithText = ({ children }) => {
  return <div className="image-with-text">{childrenRender(children)}</div>;
};
