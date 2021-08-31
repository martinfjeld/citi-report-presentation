import React from "react";
import "./header-tertiary.styles.scss";

export const HeaderTertiary = (props) => {
  return <h1 styles={{ fontSize: "var(--small-text)" }}>{props.text}</h1>;
};

HeaderTertiary.defaultProps = {
  text: "Placeholder",
};
