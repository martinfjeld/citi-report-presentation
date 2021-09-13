import React from "react";
import { lineBreak } from "../../../../functions/functions";
import "./giant-header.styles.scss";

export const GiantHeader = ({
  text,
  undertext,
  firstBreak,
  secondBreak,
  id,
  color,
  specialDot,
  background,
}) => {
  return (
    <div
      className="giant-header-container"
      id={id}
      style={{
        color: color === "primary" ? "var(--primary-color)" : color,
        backgroundColor:
          background === "primary" ? "var(--primary-color)" : background,
      }}
    >
      <h1 className="giant-header">
        {lineBreak(text, firstBreak, secondBreak)}
        {specialDot && <span style={{ color: "red " }}>.</span>}
      </h1>
      <h3 className="undertext">{undertext}</h3>
    </div>
  );
};

GiantHeader.defaultProps = {
  text: "default text",
};
