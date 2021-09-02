import React from "react";
import "./header-tertiary.styles.scss";

export const HeaderTertiary = ({ text }) => {
  return <h3 className="header-small">{text}</h3>;
};

HeaderTertiary.defaultProps = {
  text: "Small header",
};
