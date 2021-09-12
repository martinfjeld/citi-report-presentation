import React from "react";
import "./header.styles.scss";

export const Header = ({ text, size, align }) => {
  return (
    <h1 className={`header ${size}`} style={{ textAlign: align }}>
      {text}
    </h1>
  );
};
