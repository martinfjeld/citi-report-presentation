import React from "react";
import "./header-primary.styles.scss";

export const HeaderPrimary = ({ text }) => {
  return <h2 className="header-large">{text}</h2>;
};

HeaderPrimary.defaultProps = {
  text: "Large header",
};
