import React from "react";
import "./header-secondary.styles.scss";

export const HeaderSecondary = ({ text }) => {
  return <h2 className="header-medium">{text}</h2>;
};

HeaderSecondary.defaultProps = {
  text: "Medium header",
};
