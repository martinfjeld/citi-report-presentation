import React from "react";
import "./quote.styles.scss";

export const Quote = ({ text }) => {
  return (
    <div className="quote">
      <p>{text}</p>
    </div>
  );
};
