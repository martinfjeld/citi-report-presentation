import React from "react";
import "./arena.styles.scss";

export const Arena = ({ children, width, align, inverted }) => {
  return (
    <div
      className={`arena ${inverted && "inverted"}`}
      style={{ width: width + "%", textAlign: align }}
    >
      {children}
    </div>
  );
};
