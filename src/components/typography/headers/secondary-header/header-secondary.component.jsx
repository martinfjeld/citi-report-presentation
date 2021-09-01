import React from "react";
import "./header-secondary.styles.scss";

export const HeaderSecondary = (props) => {
  return <h2 className="header-medium">{props.text}</h2>;
};

HeaderSecondary.defaultProps = {
  text: "Medium header",
};
