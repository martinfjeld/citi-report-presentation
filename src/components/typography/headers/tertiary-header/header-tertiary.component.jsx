import React from "react";
import "./header-tertiary.styles.scss";

export const HeaderTertiary = (props) => {
  return <h3 className="header-small">{props.text}</h3>;
};

HeaderTertiary.defaultProps = {
  text: "Small header",
};
