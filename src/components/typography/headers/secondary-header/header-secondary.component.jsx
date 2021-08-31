import React from "react";
import "./header-secondary.styles.scss";

export const HeaderSecondary = () => {
  return <div className="header-large"></div>;
};

HeaderSecondary.defaultProps = {
  text: "Placeholder",
  color: "var(--secondary-color)",
  size: "var(--small-text)",
};
