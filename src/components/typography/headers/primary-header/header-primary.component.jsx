import React from "react";
import "./header-primary.styles.scss";

export const HeaderPrimary = (props) => {
  return <h2 className="header-large">{props.text}</h2>;
};

HeaderPrimary.defaultProps = {
  text: "Large header",
};
