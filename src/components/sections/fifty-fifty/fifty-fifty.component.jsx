import React from "react";
import "./fifty-fifty.styles.scss";

export const FiftyFifty = ({ orientation, children }) => {
  const [first, second] = children;
  return (
    <div className="fifty-fifty">
      <div className="first">{first}</div>
      <div className="second">{second}</div>
    </div>
  );
};
