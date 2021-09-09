import React from "react";
import { lineBreak } from "../../../../functions/functions";
import "./giant-header.styles.scss";

export const GiantHeader = ({ text }) => {
  return <h1 className="giant-header">{lineBreak(text, 2)}</h1>;
};
