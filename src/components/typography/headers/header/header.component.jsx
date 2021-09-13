import React from "react";
import "./header.styles.scss";

export const Header = ({ text, size, align, border }) => {
  return (
    <h1
      className={`header ${size} ${border && "border"}`}
      style={{ textAlign: align }}
    >
      {text}
    </h1>
  );
};
