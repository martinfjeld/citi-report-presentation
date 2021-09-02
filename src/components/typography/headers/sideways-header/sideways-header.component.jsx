import React from "react";
import "./sideways-header.styles.scss";

export const SidewaysHeader = ({ orientation, text }) => {
  return <h1 className={`sideways-header ${orientation}`}>{text}</h1>;
};

SidewaysHeader.defaultProps = {
  text: "Sideways header",
};
