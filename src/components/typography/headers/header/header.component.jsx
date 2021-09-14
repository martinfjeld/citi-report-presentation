import React from "react";
import "./header.styles.scss";

export const Header = ({ text, size, align, border, color, uppercase }) => {
  return (
    <h1
      className={`header ${size} ${border && "border"}`}
      style={{
        textAlign: align,
        color: color,
        textTransform: uppercase ? "uppercase" : undefined,
      }}
    >
      {text}
    </h1>
  );
};
