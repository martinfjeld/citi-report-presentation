import React from "react";
import "./header-primary.styles.scss";

export const HeaderPrimary = () => {
  return <div className="header-large"></div>;
};

HeaderPrimary.defaultProps = {
  text: "Placeholder",
  color: "var(--secondary-color)",
  size: "var(--small-text)",
};
